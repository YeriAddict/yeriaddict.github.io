# Portfolio Website

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#technologies">Technologies</a></li>
        <ul>
          <li><a href="#user-interface">User Interface</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#carousels">Carousels</a></li>
          <li><a href="#typewriter-effect">Typewriter Effect</a></li>
          <li><a href="#fonts">Fonts</a></li>
        </ul>
        <li><a href="#how-to-get-started">How to Get Started</a></li>
        <ul>
          <li><a href="#deployment-on-github-pages">Deployment on GitHub Pages</a></li>
          <li><a href="#installing-the-dependencies">Installing the Dependencies</a></li>
          <li><a href="#running-the-development-server">Running the Development Server</a></li>
        </ul>
      </ul>
    </li>
  </ol>
</details>

<!-- OVERVIEW -->
## Overview

My portfolio website is built with **TypeScript** using **React**. It is deployed as a static website on GitHub Pages and can be accessed at [https://yeriaddict.github.io/](https://yeriaddict.github.io/).

---

### Technologies

This project uses the following technologies:

- **[React 18](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Next.js 14](https://nextjs.org/docs/getting-started)**

---

#### User Interface

- **[NextUI v2](https://nextui.org/)**  
  This was the main UI component library that I used to build my website. The components I utilized include:
  - **Accordion** ([Docs](https://nextui.org/docs/components/accordion))
  - **Button** ([Docs](https://nextui.org/docs/components/button))
  - **Card** ([Docs](https://nextui.org/docs/components/card))
  - **Checkbox** ([Docs](https://nextui.org/docs/components/checkbox))
  - **Chip** ([Docs](https://nextui.org/docs/components/chip))
  - **Divider** ([Docs](https://nextui.org/docs/components/divider))
  - **Image** ([Docs](https://nextui.org/docs/components/image))
  - **Link** ([Docs](https://nextui.org/docs/components/link))
  - **Modal** ([Docs](https://nextui.org/docs/components/modal))
  - **Navbar** ([Docs](https://nextui.org/docs/components/navbar))
  - **Spacer** ([Docs](https://nextui.org/docs/components/spacer))
  - **Tabs** ([Docs](https://nextui.org/docs/components/tabs))
  - **TextArea** ([Docs](https://nextui.org/docs/components/textarea))

- **[Tailwind CSS](https://tailwindcss.com/)** and **[Tailwind Variants](https://tailwind-variants.org/)**  
  The majority of the styling for this project was achieved using Tailwind CSS utility classes. Additional customizations and global styles are defined in the `globals.css` file.

- **[next-themes](https://github.com/pacocoursey/next-themes/)**  
  The website supports multiple color and layout themes. Currently, there are two themes: **Dark (Blue)** and **Light (Pink)**
  Additional themes can be implemented easily in `tailwind.config.js`.

---

#### Timeline

- **[react-chrono](https://github.com/prabhuignoto/react-chrono/)**  
  Used to create the vertical alternating timeline for my education milestones.

---

#### Carousels

- **[swiperjs](https://swiperjs.com/)**  
  Used to create the carousel on the "About" page to present both my education timeline and experience cards.

---

#### Typewriter Effect

- **[react-typed](https://github.com/ssbeefeater/react-typed?tab=readme-ov-file)**  
  Used to create the typewriting animation on the "Home" page.

---

#### Fonts

- **[Lora](https://fonts.google.com/specimen/Lora)**  
  This is the main font used throughout the website.

- **[Roboto](https://fonts.google.com/specimen/Roboto)**  
  This is the secondary font supported by the website. 

### How to get started

#### Deployment on GitHub Pages

I mainly followed the following guide to setup the pipeline: https://github.com/gregrickaby/nextjs-github-pages?tab=readme-ov-file

#### Installing the dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

#### Running the development server

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm run dev
```
