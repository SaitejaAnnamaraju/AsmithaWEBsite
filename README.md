# Alleshetti Asmitha · Personal Portfolio

A frontend-only personal portfolio for **Alleshetti Asmitha**, Information Technology student at MVSR Engineering College, Hyderabad.

- **React 18 + Vite**: the main site (all sections, navigation, galleries)
- **AngularJS 1.8**: a self-contained visitor-feedback module, mounted inside one empty React container
- **Framer Motion**: section entrances and lightbox transitions
- **Lucide React**: icons
- **EmailJS** (optional): sends visitor feedback by email with no backend

There is no backend, database, login, admin area or payment system. The build is a static site, so anyone with the link can open it.

---

## 1. Install dependencies

Requires Node.js 18 or newer.

```bash
npm install
```

## 2. Run locally

```bash
npm run dev        # development server, then open the printed http://localhost:5173 URL
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Project structure

```
public/
  favicon.svg            "AA" monogram favicon
  resume.html            printable resume (opened by the "Resume" button)
  404.html               custom not-found page
  assets/
    profile/             portraits (hero + about)
    certificates/        original certificate photos
    events/              event photographs (IEI seminar)
    media/               newspaper clipping
    resume/              put a PDF resume here if you have one
src/
  data/portfolio.js      ALL site content: edit this file to update the website
  components/            Navbar, Hero, About, Education, Skills, Projects, Achievements,
                         Certificates, Leadership, News, Contact, Feedback, Footer,
                         Lightbox, ScrollToTop, shared helpers
  angular/               AngularJS feedback module + its HTML template
  styles/global.css      design tokens and component styles
  styles/responsive.css  tablet and phone layouts
  App.jsx, main.jsx
```

## 3. Replace profile photographs

1. Copy the new photo into `public/assets/profile/`.
2. In `src/data/portfolio.js`, change `profile.portrait` (hero image) or `profile.secondaryPortrait` (About section image) to the new file name.
3. Tall portrait photos work best for the hero. The frame crops from the top, so keep the face in the upper third.

## 4. Add a new certificate

1. Copy the certificate image (JPG or PNG, about 1600px wide is ideal) into `public/assets/certificates/`.
2. Add an entry to the `certificates` array in `src/data/portfolio.js`:

   ```js
   {
     id: 'hackathon-2027',                 // unique id
     title: 'Certificate title',
     issuer: 'Issuing organisation',
     date: 'Mar 2027',
     src: A('certificates/your-file.jpg'),
   },
   ```

It appears in the Certificates gallery and lightbox automatically.

## 5. Update achievements, education, skills and contact details

Everything is in `src/data/portfolio.js`:

- **Achievements**: add an object to `achievements`. Set `certificateId` to a certificate's `id` to show its preview and a "View Certificate" button, or to `null` if there is no certificate yet. `icon` can be one of: `Trophy`, `Presentation`, `LifeBuoy`, `Medal`, `Flag`, `Shield`, `HeartHandshake`, `Users`, `Code2`, `LayoutTemplate`. To add more, import them in `src/components/shared.jsx`.
- **Education**: fill in `period`, `score`, and the Intermediate and School `institution` values. Empty values show as a quiet "To be updated".
- **Skills**: optionally set `level` to `'Learning'`, `'Intermediate'` or `'Proficient'` to show a level indicator. Leave it as `null` to show none.
- **Contact & social links**: fill in `contact.email`, `contact.linkedin` and `contact.github`. This turns on every email and social link across the site, including the "Write to Me" mailto button. Until then they show as "coming soon" and never link anywhere.
- **Resume**: the button opens `public/resume.html`, a printable resume built only from confirmed facts. To use a PDF instead, put it in `public/assets/resume/` and set `profile.resumeUrl` to `'/assets/resume/your-file.pdf'`.
- **Project GitHub link**: set `featuredProject.repoUrl`.

## 6. Visitor feedback and EmailJS

The site has **no backend**, so feedback is never stored on the website. The form validates input in the browser (name, message and rating are required; email is optional but checked if given), then delivers it in one of three ways. The form always tells the visitor which way applies:

| Configuration | What happens on submit |
| --- | --- |
| EmailJS keys set | Feedback is emailed to Asmitha through EmailJS, and a success message is shown. |
| Only `contact.email` set | The visitor's email app opens with the feedback pre-filled. It is only sent when they press send. |
| Neither set | The visitor is told plainly that it cannot be sent from the page, and can copy the message. |

**To enable EmailJS:**

1. Create a free account at [emailjs.com](https://www.emailjs.com/), add an **Email Service** (for example Gmail), and note the **Service ID**.
2. Create an **Email Template** that uses these variables: `{{from_name}}`, `{{reply_to}}`, `{{rating}}`, `{{message}}`. Note the **Template ID**.
3. Under *Account → General*, copy your **Public Key**.
4. Copy `.env.example` to `.env` and fill in:

   ```
   VITE_EMAILJS_SERVICE_ID=service_xxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
   ```

5. Restart `npm run dev`. On Vercel, add the same three variables under *Project → Settings → Environment Variables* and redeploy.

The EmailJS public key is designed to be used in the browser. In the EmailJS dashboard, restrict it to your site's domain.

## 7. Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel detects Vite automatically: build command `npm run build`, output directory `dist`.
4. (Optional) Add the EmailJS environment variables.
5. Click **Deploy**. You get a public URL like `https://alleshetti-asmitha.vercel.app` that opens straight to the portfolio, with no login.

Or from the command line:

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

**Netlify** works the same way: build command `npm run build`, publish directory `dist`. Both hosts serve `404.html` automatically for unknown URLs.

## Accessibility & performance notes

- Colour pairs meet WCAG AA contrast, and every interactive element has a visible keyboard focus.
- The lightbox supports Esc, ←/→ keys, swipe, a focus trap and a full-size zoom for reading certificate text.
- Animations respect the visitor's "reduce motion" setting.
- Images below the fold are lazy-loaded; the hero portrait is preloaded; React, Framer Motion and AngularJS are split into separate cached chunks.
