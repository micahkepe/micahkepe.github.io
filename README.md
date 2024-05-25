# micahkepe.github.io

[![NPM Version](https://img.shields.io/npm/v/react)](https://www.npmjs.com/package/react)
[![GitHub Pages](https://img.shields.io/badge/deployed%20to-GitHub%20Pages-brightgreen)](https://micahkepe.github.io/)
[![License](https://img.shields.io/github/license/micahkepe/micahkepe.github.io)](LICENSE)

This is the repository for my personal website built using React. The website is constantly undergoing updates and is being developed to showcase my portfolio and provide information about me.

![Website Screenshot](/public/assets/personal-website.webp)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Deployment](#deployment)
- [Blog Shortcodes](#blog-shortcodes)
- [Usage and Attribution](#usage-and-attribution)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- React
- NodeJS
- Tailwind CSS
- Zola (static site generator)
- GitHub Pages (for deployment and hosting)

## Features

- Project Portfolio: Showcasing my projects, including descriptions, images, and links.
- About Me: Providing information about my background, skills, and experiences.
- Experience: Showcase prior experiences and skills utilized for each role
- Blog: Writing articles about various topics, including technology, programming, and personal development.

## Installation

If you are interested in using this project as a template for your personal website, you can follow the steps below to set it up.

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

6. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the website.

In the `npm start` script, the Zola blog is not built. If you want to build the blog and be able to navigate through the blog posts, you can build the Zola blog separately:

```bash
cd blog
zola build --base-url http://localhost:3000/blog/
```

The second command builds the Zola blog with the base URL set to `http://localhost:3000/blog/`. This allows you to navigate through the blog posts when running the development server by overriding the base URL in the `config.toml` file.

The suggested workflow for working on the blog is to have one terminal window running the React development server and another terminal window for running the Zola build command as you make changes to the blog content.

## Deployment

To deploy this website to GitHub Pages, follow these steps:

1. Update the `homepage` field in the `package.json` file with your GitHub Pages URL:

```json
"homepage": "https://your-username.github.io/micahkepe.github.io"
```

2. Build the project:

```bash
npm run build
```

3. Deploy the project to GitHub Pages:

```bash
npm run deploy
```

Part of the deployment script is building the Zola blog. If you don't want to build the blog, you can remove the ` && npm run build:blog` command from end of the `deploy` script in the `package.json` file.

4. Visit your GitHub Pages URL to view your deployed website.

Make sure to update the content in the `src/components/views` directory with your information, projects, and blog posts. Additionally, remove or replace the content in the `blog/content` directory with your own blog posts. You can also update the theme using a different Zola theme or create your own.

## Blog Shortcodes

The blog posts in the `blog/content` directory use shortcodes to include images, code snippets, and other content. Here are some of the shortcodes available:

- `{{ newtab(src="path/to/image", width=400, height=200, alt="Image Description") }}`: Include an image with a link that opens in a new tab with the specified width, height, and alt text.
- `{{ latex() }}`: Include LaTeX math equations in the blog post with MathJax support. You can write LaTeX equations by including the shortcode at the beginning of the post and writing inline LaTeX using the following delimiters: `\\[ ... \\]` or `$$ ... $$` for display mode and `\\( ... \\)` or `$ ... $` for inline mode.
- `{{ gallery(images=["path/to/image1", "path/to/image2", "path/to/image3"]) }}`: Create a gallery of images in the blog post with the specified JPG/PNG image paths.

## Usage and Attribution

If you decide to use my website code, please give me credit by linking back to this repository or mentioning my name. It's important to respect the effort and work of developers. Any use of this code without proper attribution is not endorsed.

## Contributing

I welcome contributions to improve the website. If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for visiting my personal website repository! Feel free to explore the code and check back later for updates.
