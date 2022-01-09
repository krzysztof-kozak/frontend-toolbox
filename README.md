# Frontend-Toolbox

A webkit starter template with all the tools you need for developement and production already pre-configured!

## Features

- General

  - Work with files in the source folder.
  - Let Webpack generate optimized bundle in the distribution folder.
  - Automatically generate html files.
  - Handle image imports directly inside html files.
  - Automatically copy assets from the public folder (useful for favicons).
  - Load and Optimize images and gifs.
  - Load font files to use as local fonts.
  - Transpile JavaSCript with Babel.
  - Automatically load modules/libraries - no need to import/require them everywhere.

---

- CSS

  - Process SCSS files.
  - Generate scoped CSS (CSS Modules) as well as global CSS styles.
  - Extract CSS into a separate bundle.
  - Generate vendor prefixes.
  - Minify CSS (for production build).

---

- Dev Server

  - Auto refresh on change (including HTML files).
  - Cheap Source maps for quicker build times.
  - Used named ids for bundles for better dev / debugging experience.

---

- Production

  - Extract duplicate dependencies thanks to code splitting.
  - Extract third party vendor libraries to a separated cached group.
  - Extract boilerplate runtime code into a single runtime bundle.
  - Use deterministic ids for bundles to help witch caching.
  - Minify CSS

---

- Unit test

  - I've setup Jest testing framework.
  - Example test is included in the tests folder.

---

- Developer UX

  - Automatically lint your JavaScript with ESLint.
  - I've integrated Airbnb styleguide: https://github.com/airbnb/javascript
  - Automatically format your JavaScript with Prettier.
  - No need to worry about ESLint / Prettier conflicts - I've integrated them together so they won't yell at eachother.
  - Integration with visual studio code: lint --fix and format your code on save.
  - Integration with visual studio code: see linting errors/warnings directly in your editor in real time.
  - Barrels pattern for imports/exports. Learn more: https://hackernoon.com/react-project-architecture-using-barrels-d086146eb0f6

---

- Pre commit hooks
  - I've set up husky and lint-staged.
  - The code is linted and tested before every commit.

---

## How to use it?

- Click on 'Use This Template'
- Pick a name and create your own repository.
- Clone your repository to your local machine.
- Install dependencies `npm install`

## Scripts

- Create production build: `npm run build`
- Start dev server: `npm run start`
- Run tests: `npm run test`
- Run tests in watch mode: `npm run test-watch`
- Lint: `npm run lint`
- Lint and autofix issues where possible: `npm run lint-fix`

## VSC Integration

You don't need to run the lint command over and over again. This can be easily integrated with VSC.

- Open your preferences settings.json file (press control + shift + p and type 'preferences')

- Copy and Paste the following settings:

  ```json
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,

  "editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
  },

  "[javascript]": {
  	"editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },

  "eslint.lintTask.enable": true,
  "eslint.format.enable": true,
  "eslint.alwaysShowStatus": true,
  ```
