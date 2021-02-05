# React-ts-npm-boilerplate

![GitHub Actions Badge](https://github.com/andy770921/react-ts-npm-boilerplate/workflows/Main%20workflow/badge.svg)

## Demo:

1. storybook: https://andy770921.github.io/react-ts-npm-boilerplate/demo

2. npm package: https://www.npmjs.com/package/react-ts-npm-boilerplate

## Installation:

1. `npm install`

2. Install VSCode extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Usage:

1. `npm run start`: start running dev-server for local development

2. `npm run storybook`: start running storybook server for previewing demo page

3. `npm run build`: build index.js and index.d.ts file from src folder

4. `npm run build-storybook`: build index.html in demo folder for static hosting

5. chagne setting in `package.json`

6. use `npm login` and `npm publish` for publishing to [https://www.npmjs.com/](https://www.npmjs.com/)

## Usage for third-party import:

1. `npm i react-ts-npm-boilerplate`

2. import library

```ts
// TypsScript
import React, { FC } from 'react';
import { MyButton } from 'react-ts-npm-boilerplate';

const MyComponent: FC = () => (
    <div>
        <MyButton>My Button</MyButton>
    </div>
);

export default MyComponent;
```

## Folder Structure

``` 
┌── .vscode                    # VSCode settings for ESLint auto-fix function
├── .storybook                 # Storybook settings
├── dist                       # Bundled JS and TS declaration file for deployed npm package
├── src                        # All source code
│    ├── components            # React components
│    │    └── button           # Component folder
│    │          ├── MyButton.tsx           # Component for npm package
│    │          └── MyButton.stories.tsx   # Component displayed in storybook
│    └── index.tsx             # All Exported component that will be deployed to npm package, and ReactDOM.redner for local development
├── .gitignore                 # Excluded files for ignoring Git version control
├── .eslintrc.js               # ESLint settings
├── README.md                  # README
├── package-lock.json          # Package settings that locked the version of dependencies packages
├── package.json               # Package settings that listed dependencies packages, npm scripts, project name etc.
├── webpack.common-config.js   # Webpack settings in both development and production mode
├── webpack.dev-config.js      # Webpack settings in development mode
├── webpack.prod-config.js     # Webpack settings in production mode
└── tsconfig.json              # TypeScript settings
```

## Other npm commands for development:

1. `npm run watch`: start typescript watch mode

2. `npm run start`: start running dev-server

4. `npm run lint`: use ESLint for manually checking files inside src folder

5. Fix format error automatically on save