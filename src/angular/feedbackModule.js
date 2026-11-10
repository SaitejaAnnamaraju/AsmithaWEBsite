/**
 * AngularJS feedback module.
 *
 * Kept deliberately separate from React: React renders an empty host element
 * once, and AngularJS bootstraps inside it and owns that DOM subtree.
 *
 * Delivery (no backend exists, so nothing is stored by this website):
 *   1. EmailJS: used when VITE_EMAILJS_* variables are configured.
 *   2. mailto:  used when only a contact email is configured. Opens the
 *               visitor's email app with the feedback pre-filled.
 *   3. manual:  neither is configured. The visitor is told plainly that the
 *               feedback cannot be sent from the page and can copy it instead.
 */
import angular from 'angular';
import emailjs from '@emailjs/browser';
import template from './feedback.template.html?raw';
import { contact, emailjsConfig } from '../data/portfolio.js';

export const FEEDBACK_MODULE = 'asmithaFeedback';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LABELS = ['', 'Poor', 'Fair', 'Good', 'Very good', 'Excellent'];

function FeedbackController($q, $window, $timeout, cfg) {
  const vm = this;

  vm.mode = cfg.emailjsReady ? 'emailjs' : cfg.email ? 'mailto' : 'manual';
  vm.stars = [1, 2, 3, 4, 5];
  vm.labels = LABELS;
  vm.limit = 1000;

  vm.reset = function () {
    vm.form = { name: '', email: '', message: '', rating: null };
    vm.touched = {};
    vm.attempted = false;
    vm.status = 'idle'; // idle | sending | sent | mailto | manual | error
    vm.copied = false;
    vm.composed = '';
  };
  vm.reset();

  vm.errors = function () {
    const f = vm.form;
    const e = {};
    if (!f.name || !f.name.trim()) e.name = 'Please enter your name.';
    else if (f.name.trim().length > 80) e.name = 'Please keep your name under 80 characters.';
    if (f.email && f.email.trim() && !EMAIL_RE.test(f.email.trim())) e.email = 'That email address doesn’t look right. Check it, or leave it blank.';
    if (!f.message || !f.message.trim()) e.message = 'Please write a short feedback message.';
    else if (f.message.trim().length < 5) e.message = 'Please write a little more (at least 5 characters).';
    else if (f.message.length > vm.limit) e.message = 'Please keep your message under ' + vm.limit + ' characters.';
    if (!f.rating) e.rating = 'Please choose a rating from 1 to 5 stars.';
    return e;
  };

  vm.show = function (field) {
    return (vm.attempted || vm.touched[field]) && vm.errors()[field];
  };

  vm.touch = function (field) {
    vm.touched[field] = true;
  };

  vm.ratingLabel = function () {
    return vm.form.rating ? vm.form.rating + ' of 5 · ' + LABELS[vm.form.rating] : 'Select a rating';
  };

  function compose() {
    const f = vm.form;
    return [
      'Portfolio feedback for Alleshetti Asmitha',
      '',
      'Name: ' + f.name.trim(),
      'Email: ' + (f.email && f.email.trim() ? f.email.trim() : 'not provided'),
      'Rating: ' + f.rating + ' / 5 (' + LABELS[f.rating] + ')',
      '',
      f.message.trim(),
    ].join('\n');
  }

  vm.submit = function () {
    vm.attempted = true;
    const errs = vm.errors();
    if (Object.keys(errs).length) {
      $timeout(function () {
        const first = $window.document.querySelector('.fb-form [aria-invalid="true"]');
        if (first) first.focus();
      });
      return;
    }

    vm.composed = compose();

    if (vm.mode === 'emailjs') {
      vm.status = 'sending';
      const params = {
        from_name: vm.form.name.trim(),
        reply_to: (vm.form.email || '').trim() || 'not provided',
        rating: vm.form.rating + ' / 5',
        message: vm.form.message.trim(),
      };
      $q.when(emailjs.send(cfg.serviceId, cfg.templateId, params, { publicKey: cfg.publicKey }))
        .then(function () {
          vm.status = 'sent';
        })
        .catch(function () {
          vm.status = 'error';
        });
      return;
    }

    if (vm.mode === 'mailto') {
      const href =
        'mailto:' + cfg.email + '?subject=' + encodeURIComponent('Portfolio feedback from ' + vm.form.name.trim()) + '&body=' + encodeURIComponent(vm.composed);
      $window.location.href = href;
      vm.status = 'mailto';
      return;
    }

    vm.status = 'manual';
  };

  vm.copy = function () {
    const done = function () {
      vm.copied = true;
      $timeout(function () {
        vm.copied = false;
      }, 2500);
    };
    if ($window.navigator.clipboard && $window.navigator.clipboard.writeText) {
      $q.when($window.navigator.clipboard.writeText(vm.composed)).then(done);
    } else {
      const ta = $window.document.getElementById('fb-composed');
      if (ta) {
        ta.select();
        $window.document.execCommand('copy');
        done();
      }
    }
  };
}
FeedbackController.$inject = ['$q', '$window', '$timeout', 'feedbackConfig'];

angular
  .module(FEEDBACK_MODULE, [])
  .constant('feedbackConfig', {
    email: contact.email,
    serviceId: emailjsConfig.serviceId,
    templateId: emailjsConfig.templateId,
    publicKey: emailjsConfig.publicKey,
    emailjsReady: Boolean(emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey),
  })
  .component('feedbackForm', {
    template,
    controller: FeedbackController,
    controllerAs: 'vm',
  });

/** Bootstraps the module into `host`. Returns a cleanup function. */
export function mountFeedback(host) {
  const root = document.createElement('div');
  root.innerHTML = '<feedback-form></feedback-form>';
  host.appendChild(root);
  const injector = angular.bootstrap(root, [FEEDBACK_MODULE], { strictDi: true });
  return function unmount() {
    injector.get('$rootScope').$destroy();
    root.remove();
  };
}
