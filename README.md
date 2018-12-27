# Fake e-commerce

[![Build Status](https://travis-ci.com/sylvhama/fake-e-commerce.svg?branch=master)](https://travis-ci.com/sylvhama/fake-e-commerce)

Project made when applying to an e-commerce company. The goal was to develop a list of products with a filter and a detail page in one week without any boilerplate.  
I think the code is not too bad so I decided to publish it without giving company details. I also have removed their API, I only kept the JSON files so don't mind that part.
I might refactor it with Hooks and create a proper API with GraphQL if I have time someday...

## Available scripts

Firstly, install the packages (you only need to do it once).

```
npm install
```

### Develop

```sh
npm start
```

### Test

```sh
npm test
```

### Build

```sh
npm run build
```

You can test the build via serve.
Install the package globally:

```sh
npm install serve -g
```

then

```sh
serve -s dist
```

### Analyze bundle

```sh
npm run analyze
```

## Stack

-   [React](https://reactjs.org/) to build the UI
-   [Styled Components](https://www.styled-components.com/) to handle styling
-   [React Router](https://reacttraining.com/react-router/web/guides/philosophy) to handle routing
-   [React Loadable](https://github.com/jamiebuilds/react-loadable) to handle code splitting
-   [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) for typechecking

## Setup

I use a simple [Webpack](https://webpack.js.org/) config to transpile modern JavaScript and JSX to ES5 thanks to [Babel](https://babeljs.io/). I also use a [Babel plugin](https://www.styled-components.com/docs/tooling#babel-plugin) for a better debugging experience with Styled Components. I have a css / style loader just for some global style, it’s not required for Styled Components.

## Icons

I designed the shapes via [Figma](https://www.figma.com/), you can [view](https://www.figma.com/file/W5Ea6vKlusPm8ID6uOdAYac1/Mercari?node-id=0%3A1) the project on your browser. I exported them as SVG files then I used [SVGR](https://github.com/smooth-code/svgr) via its webpack integration to import each SVG as a React component.

## Polyfill

I am targeting most recent browsers so the app won’t work on old IE versions for example. It would require some JS / CSS patches in order to make it work e.g. importing a polyfill for [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or using float layout instead of css grid.

## To Enhance

### SEO / SMO

Right now the app is structured like a single-page app. If we want to deploy this to prod and keep React then we should use something like [Gatsby](https://www.gatsbyjs.org/) or [Next](https://github.com/zeit/next.js/) in order to be more SEO friendly, especially for e-commerce. Or I could implement this on an [existing page](https://reactjs.org/docs/add-react-to-a-website.html) if the website is built with a CMS for example.
Each page should have its dedicated `<title>` and social media metadata so people can share product pages on Twitter or Facebook for example. I already [hardcoded](https://realfavicongenerator.net/) some metatags, [react-helmet](https://github.com/nfl/react-helmet) would help to make them dynamic.

### Performance

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) can give use insights of what could be improved. I would also discuss with designers to set a [performance budget](https://medium.com/@addyosmani/start-performance-budgeting-dabde04cf6a3).
I would discuss with backend team as well in order to use a service similar to [cloudinary](https://cloudinary.com/features/responsive_images) in order to get responsive images.
Plus instead of showing a spinner while fetching data we could display [skeletons](https://css-tricks.com/building-skeleton-screens-css-custom-properties/).

### Progressive Web App

Modern web is [progressive](https://developers.google.com/web/progressive-web-apps/), it would really improve the UX: offline mode, native like experience etc.. Some PWA examples: [Mobify](https://www.mobify.com/) or [Nikkei](https://twitter.com/kinu/status/994269652355137537). Right I only added basic setup: theme color, manisfest and simple Service Worker via [Workbox](https://developers.google.com/web/tools/workbox/). Regarding fullscreen experience on iOS we should [be carful](https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb).

### Design System

In order to be future proof we should consider building [Design System](http://atomicdesign.bradfrost.com/chapter-1/). This will make sure that developers, designers, testers, managers have a single source of truth regarding UI elements and use the same vocabulary to describe them. There are more advantages, see the book shared previously.
[Storybook](https://storybook.js.org/) is a tool I am using at work to share UI components, their technical details and their description. Anyone can visualize components in their browser. It also offers an isolated environment for developers in order to develop their components.

### Automated Tests

I only have written few [snapshot tests](https://jestjs.io/docs/en/snapshot-testing) using [jest-styled-components](https://github.com/styled-components/jest-styled-components) and unit tests. I could add end-to-end tests via [puppeteer](https://github.com/GoogleChrome/puppeteer) to test the routing for example.

### State Management

Local state is [fine](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) , however if If the project grows up (larger team / codebase), we could consider using a library to manage our state such as [Redux](https://redux.js.org/) or [Mobx](https://mobx.js.org/).

### Typechecking

If the project grows up (larger team / codebase). We should [consider](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b) using [TypeScript](http://www.typescriptlang.org/) or [Flow](https://flow.org/).

## Styleguide

I have not followed any specific style guide. There is already [Prettier](https://prettier.io/), we could also add [ESLint](https://eslint.org/).

### Accessibility

I have made sure to use standard HTML semantic however I have not made tests with a screen reader. Plus we should confirm that people with color blindness have no issue when using the app. Some parts might require to use [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).
