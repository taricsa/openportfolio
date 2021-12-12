# OpenPortfolio for PMs, EM, and etc...

[![Netlify Status](https://api.netlify.com/api/v1/badges/b1852e33-8bce-42fc-ada7-5980b800e5c2/deploy-status)](https://app.netlify.com/sites/taricsa-openportfolio/deploys)

## Source starter - (Nextjs + Netlify Starter)
The base for this project was a very minimal starter that includes Nextjs able to deploy at Netlify, including the [Essential Next.js Build Plugin](https://github.com/netlify/netlify-plugin-nextjs), which will allow for you to implement features like Preview Mode, server-side rendering/incremental static regeneration via Netlify Functions, and internationalized routing.

Source: https://github.com/cassidoo/next-netlify-starter


## Tech-stack for this project
I changed a bit of the source tech-stack:
1. Nextjs upgrade lastest 12.x
2. From js to Typescript (tsx)
3. Replace from the current css to tailwind css.

## Project Structure
One of the goals is to offer an easy any for you to interchange between the components
1. Layout: base struture for the page, including the Footer, and Head component
2. Profile Hero: the first section to show case you
3. TrustMe: Social proof, display the companies that hired you before
4. Recommendation: Social proof, copy recommendations from your LinkedIn page
5. Popular Posts: You don't have post? Don't worry replace for cases, projects, ...
6. Experience: Don't need to show everything, the last five years is more than enough.
7. Footer: Difference way to be contanct
8. News: We can remove this one, it was my way to help you find this repository.

## Getting Started
First, run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Customize your portilofio
Now is your turn. Start customizing, and remember to follow all the tips I left in the page. If you need any help, just reach out here.
Good luck, and hunt!!!
