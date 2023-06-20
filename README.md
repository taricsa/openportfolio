# OpenPortfolio: A Free Portfolio for Product People

## Introduction

OpenPortfolio is an open-source project designed to help Product Managers, Engineering Managers, and other professionals create their own portfolio for free. The project is built using Next.js, deployed on Netlify, and uses TypeScript and Tailwind CSS. The base for this project was the [Next.js and Netlify Starter](https://github.com/cassidoo/next-netlify-starter).

## Features

OpenPortfolio comes with several predefined sections to help you showcase your professional achievements:

1. **Profile Hero**: The first section to showcase you.
2. **TrustMe**: Displays the companies that have hired you before.
3. **Recommendation**: Copies recommendations from your LinkedIn page.
4. **Popular Posts**: If you don't have posts, don't worry, you can replace them with cases, projects, etc.
5. **Experience**: You don't need to show everything; the last five years are more than enough.
6. **Footer**: Different ways to be contacted.
7. **News**: Optional section that can be removed.

## Getting Started for Developers

To start working on this project, follow these steps:

1. Clone the repository.
2. Run `npm install` or `yarn` to install the dependencies.
3. Run `npm run dev` or `yarn dev` to start the development server.
4. Open http://localhost:3000 with your browser to see the result.
5. You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Customization for Non-Technical Users

The content for each section is embedded within its respective component as a `const` variable. To customize the content, simply find the corresponding `const` and replace the content. For example, in the `recomendations.tsx` component, the `const recommendations` contains the content for the "Recommendations" section.

Here's an example of how it looks in the `recomendations.tsx` file:

```tsx
const recommendations = [
  {
    name: "Person Name",
    position: "Position",
    image: "/images/person.jpg",
    recommendation: "This is a recommendation text.",
  },
  //...more recommendations
];
```

Follow these steps to customize your portfolio:

1. Locate the component file for the section you wish to customize (e.g., `recomendations.tsx` for the Recommendations section).
2. Find the `const` that contains the content for the section (e.g., `const recommendations`).
3. Replace the existing content with your own.
4. Save the file, and the changes should be reflected on your portfolio.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find a bug, please open an issue.

## License

This project is open-source and available under the [MIT License](https://github.com/taricsa/openportfolio/blob/main/LICENSE).

## Customize your portfolio

Now is your turn. Start customizing, and remember to follow all the tips I left on the page. If you need any help, just reach out here. Good luck, and hunt!!!
