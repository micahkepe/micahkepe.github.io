# Home of `micahkepe.com`!

[![React Version](https://img.shields.io/npm/v/react)](https://www.npmjs.com/package/react)
[![GitHub Pages](https://img.shields.io/badge/deployed%20to-GitHub%20Pages-brightgreen)](https://micahkepe.github.io/)
[![License](https://img.shields.io/github/license/micahkepe/micahkepe.github.io)](LICENSE)

This is the repository for my personal website. The website is constantly undergoing
updates and is being developed to showcase my portfolio and provide information about me.

## Table of Contents

- [Features](#features)
- [Using Codebase As Template](#using-codebase-as-template)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Project Portfolio: Showcasing my projects, including descriptions, images, and
  links.
- About Me: Providing information about my background, skills, and experiences.
- Experience: Showcase prior experiences and skills utilized for each role
- Blog: Writing articles about various topics, including technology, programming,
  and personal development. Uses a customized forked Zola theme I am developing
  called [`radion`](https://github.com/micahkepe/radion)

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

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

Make sure to update the content in the `src/components/views` directory with your
information, projects, etc.

## Deployment

To deploy this website to GitHub Pages, follow these steps:

1. Deploy the project to GitHub Pages:

```bash
npm run deploy
```

This command will clean the current build, build the project, and deploy the
website to the `gh-pages` branch using the `gh-pages` package.

2. Visit your GitHub Pages URL to view your deployed website. You can also
   configure a custom domain for your website. If you visit the "Actions" tab
   in your repository, you can see the deployment logs and status. The current
   deployment workflow is set up to check that the ode is formatted, linted, and
   can be built before deploying, and can be manually triggered via running
   the `deploy` workflow.

## Contributing

I welcome contributions to improve the website. If you find any bugs or have
suggestions for new features, please open an issue or submit a pull request.

If you are interested in contributing to the Zola blog theme, see the repository
[here](https://github.com/micahkepe/radion).

## License

This project is licensed under the [MIT License](LICENSE).
