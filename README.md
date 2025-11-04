# My Portfolio

Welcome to my personal portfolio website! This site showcases my collection of featured projects, professional experience, educational background, recent blog posts, and comprehensive tech stack. I've designed it to be clean, responsive, and easily navigable so you can explore my skills and accomplishments.

## Features

*   **Dynamic Content Management:** All my portfolio data (projects, experience, education, blogs, tech stack) and static UI text are managed through `src/config.js`, allowing me to easily update and customize without touching the UI code.
*   **Responsive Design:** Built with Tailwind CSS, ensuring a seamless experience across various devices and screen sizes.
*   **Interactive Project Modals:** Detailed views for each of my projects, including descriptions, technologies used, and links to live demos or source code.
*   **Theme Toggle:** A dark/light mode switch for your preference, complete with a unique "flashbang" transition effect.
*   **SEO Optimized:** Configurable meta tags for improved search engine visibility and social media sharing.

## Project Structure

*   `index.html`: The main HTML file, including SEO meta tags.
*   `src/App.vue`: The main Vue component, handling UI logic and importing data from `config.js`.
*   `src/config.js`: Centralized configuration file for all my portfolio data and static UI text, including SEO settings.
*   `src/main.js`: Vue application entry point.
*   `src/style.css`: Global styles, primarily Tailwind CSS imports.
*   `public/`: Static assets like images and videos.

## Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/musakavak/portfolio.git
    cd portfolio
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    # or npm install
    # or yarn install
    ```
3.  **Run the development server:**
    ```bash
    pnpm dev
    # or npm run dev
    # or yarn dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Customization

All content displayed on my portfolio, including my personal details, project information, experience, education, blog links, tech stack, and SEO settings, can be easily modified by editing the `src/config.js` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
