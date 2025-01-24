# Product comparison prototype

## Preview

[View in browser](https://tbc)

## Installation

-   Requires Node version 18.18.0 or above
-   Run `npm install`
-   Run `npm run dev` to start development server

## Tech choices

Have used the following technologies on this project:

-   React 18
-   Vite
-   Vitest
-   TypeScript
-   Vanilla CSS
-   Jotai

The project is setup to use small React components which can be composed and re-used across files. By placing each component into its own folder you can co-locate the styling files alongside the component. In the future, unit tests, component utils or component type information can also reside in these component folders.

### TypeScript

Have utilised TypeScript to provide static typing, which helps catch errors early and improves code maintainability.

### Jotai

Have chosen Jotai as the state management solution as it offers a simple and scalable state management approach with atomic state updates. Have utilised derived atoms to help trigger content re-renders only when required. The Jotai ecosystem also offers tooling and many add-ons which makes it highly scalable.

### Vanilla CSS

Have kept the CSS implementation simple and am not using any libraries or pre-processors. This allows me to showcase my CSS abilities more clearly.

## Performance

Have implemented the following to aid with page performance:

-   Have configured code splitting within the `vite.config.js` file
-   Have implemented the `React Compiler`
-   Implemented lazy loading of images

## Tests

-   Tests have been created using `Vitest` and `React Testing Library`
-   To run the tests, run `npm run tests`

`Vitest` was chosen for its performance and easy configuration for use with `Vite`.

There are two test files in this prototype - unit tests for the `useFetchProducts` hook and integration tests for the `App` React component.

On a full project, would suggest taking the testing setup further:

-   Use a tool like `istanbul` to maintain high code coverage levels
-   Add unit tests for the React components within the `components` directory. These can be co-located with the components themselves in the file structure
-   Use a tool like `Playwright` to create end-to-end tests

## Limitations

Whilst the tech used is proportionate for the task in hand, for a large-scale commercial app would recommend considering some alternative approaches:

-   Use more details types, especially from the API endpoint
-   For simplicity of a one-time call, the API request uses ES6 `fetch`. More complex apps will benefit from using a library like `React Query` to help with multiple requests, caching and mutating of data
-   As the UI grows in complexity it would be worthwhile considering using a UI library like `MUI` or `ShadCN` to maintain UI consistency and integrity
-   Would be worthwhile considering `CSS modules` or `Tailwind` to help with CSS maintainability on large codebases
-   This prototype is a Single Page App (SPA) which isn't very SEO friendly and there is no way to share links of different states (e.g. once filtered). A framework like `Next.js` or `Remix` should be considered where SEO and page pre-rendering is important
