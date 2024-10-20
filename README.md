# Home of `micahkepe.com`!

[![React Version](https://img.shields.io/npm/v/react)](https://www.npmjs.com/package/react)
[![GitHub Pages](https://img.shields.io/badge/deployed%20to-GitHub%20Pages-brightgreen)](https://micahkepe.github.io/)
[![License](https://img.shields.io/github/license/micahkepe/micahkepe.github.io)](LICENSE)

This is the repository for my personal website. The website is constantly undergoing
updates and is being developed to showcase my portfolio and provide information about me.

![Website Screenshot](/public/assets/personal-website.webp)

## Table of Contents

- [Features](#features)
- [Using Codebase As Template](#using-codebase-as-template)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Usage and Attribution](#usage-and-attribution)
- [Contributing](#contributing)
- [License](#license)

## Features

- Project Portfolio: Showcasing my projects, including descriptions, images, and
  links.
- About Me: Providing information about my background, skills, and experiences.
- Experience: Showcase prior experiences and skills utilized for each role
- Blog: Writing articles about various topics, including technology, programming,
  and personal development. Uses a customized forked Zola theme I am developing
  called [`after-after-dark`](https://github.com/micahkepe/after-after-dark)

## Using Codebase As Template

If you are interested in using this project as a template for your personal
website, you can follow the steps below to set it up.

1. Clone the repository:

```bash
git clone https://github.com/micahkepe/micahkepe.github.io.git
```

2. Navigate to the project directory:

```bash
cd micahkepe.github.io
```

3. Initialize and update the submodules (for the Zola theme):

```bash
git submodule init
git submodule update
```

4. Install the dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm start
```

## Deployment

To deploy this website to GitHub Pages, follow these steps:

1. Update the `homepage` field in the `package.json` file with your GitHub Pages URL:

```json
"homepage": "https://<your-username>.github.io/micahkepe.github.io"
```

2. Build the project:

```bash
npm run build
```

3. Deploy the project to GitHub Pages:

```bash
npm run deploy
```

Part of the deployment script is building the Zola blog. If you don't want to
build the blog, you can remove the ` && npm run build:blog` command from end of
the `deploy` script in the `package.json` file.

4. Visit your GitHub Pages URL to view your deployed website.

Make sure to update the content in the `src/components/views` directory with your
information, projects, and blog posts. Additionally, remove or replace the content
in the `blog/content` directory with your own blog posts. You can also update the
theme using a different Zola theme or create your own.

## Usage and Attribution

If you decide to use my website code, please give me credit by linking back to
this repository or mentioning my name. It's important to respect the effort and
'work of developers. Any use of this code without proper attribution is not
endorsed.

## Contributing

I welcome contributions to improve the website. If you find any bugs or have
suggestions for new features, please open an issue or submit a pull request.

If you are interested in contributing to the Zola blog theme, see the repository
[here](https://github.com/micahkepe/after-after-dark).

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for visiting my personal website repository! Feel free to explore the
code and check back later for updates.
