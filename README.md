# Omar Bassatni — Portfolio

Personal portfolio of **Omar Bassatni**, a Frontend Developer specializing in React.js and Next.js, based in Beirut, Lebanon.

**Live site:** [omar-bassatni.netlify.app](https://omar-bassatni.netlify.app/)

![Portfolio preview](public/og-image.png)

## Sections

- **Home**: intro, CV download, and social links
- **About**: professional summary
- **Experience**: timeline of roles at Arabia Intelligence, ITXI, and Astudio
- **Skills**: technologies I work with
- **Work**: professional case study, freelance client projects, and earlier projects
- **Contact**: contact form (via Getform) and email

## Tech stack

- React 18
- Tailwind CSS
- Framer Motion (navbar animation and scroll progress bar)
- React Icons

## Running locally

```bash
npm install
npm start       # development server at http://localhost:3000
npm run build   # production build in /build
```

## Project structure

```
src/
  components/        # one component per section, plus shared pieces (SocialLinks, Footer)
  experience-data/   # work experience entries
  project-data/      # case study and project entries
  skills-data/       # skills list
  links.js           # email, social links, and resume file
  assets/            # images and resume PDF
```

Content lives in the `*-data` files, so updating the portfolio usually means editing data rather than components.

## Contact

- Email: [omarbassatni@gmail.com](mailto:omarbassatni@gmail.com)
- LinkedIn: [omar-bassatni](https://www.linkedin.com/in/omar-bassatni-40a762188/)
- GitHub: [OmarBassatni97](https://github.com/OmarBassatni97)
