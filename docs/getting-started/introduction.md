---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---

HomeflowJS is designed to be a **fast**, **modern** and **modular** JavaScript toolkit for creating themes on the Homeflow platform.

With these principles in mind, we've entirely removed hard dependencies of older libraries like jQuery, Underscore and Backbone; implemented various optimizations out-of-the-box and organised all code into small, re-usable modules.

## Installation

If you haven't already cloned the `theme_boilerplate` project, do that first. The project already includes the `homeflowjs` toolkit and has lots of things already configured to make it easier to create a new theme.

```
$ git clone git@bitbucket.org:homeflow_developers/theme_boilerplate.git
```

Ensure you have [Node JS](https://nodejs.dev/learn/how-to-install-nodejs) and [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable) installed, then run `yarn install` to install dependencies.

Run `yarn start` to start Webpack in watch mode.

## React and Redux

HomeflowJS makes use of [React](https://reactjs.org/) for UI components and [Redux](https://redux.js.org/) for managing state. You should ensure `react`, `react-dom`, `redux`, `react-redux` and `react-router-dom` are included as dependencies in the theme (if you're using the theme_boilerplate project these should already be included).

Please use the links below for documentation on these libraries:

- [React](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/introduction/getting-started)
- [React Redux](https://react-redux.js.org/introduction/quick-start)
- [React Router](https://reactrouter.com/web/guides/quick-start)

### Design

Homeflow sites are **not** single-page applications. Routing is generally handled server-side, and Liquid is used to inject dynamic data into HTML templates. React can therefore be used to render as much of a particular page as you like, either by rendering individual components into separate DOM nodes or by rendering an entire page as a React app. This ultimately depends on the page, but please bear in mind any impact on SEO or layout shift when using React. Sometimes static content is better! Seperately rendered components will still be connected to the Redux store (see the section on Redux in the sidebar for more detail).

### Development

HomeflowJS is very new, and still in active development. Therefore, we expect you will encounter issues or missing features. In these situations, please contact the Homeflow development team who can make additions or changes to the package to make your development of the theme easier. Do not try to hack your way around problems that should be solved in the package!

You should only ever need to import modules from top-level subdirectories of HomeflowJS. e.g. `homeflowjs/user` or `homeflowjs/properties`. If you find yourself trying to import anything from deep inside the directory structure (e.g. `homeflowjs/user/default-profile/account/account-edit.component.jsx`), it means that module is either intentionally meant to be private/internal or we've forgotten to make it available from the relevant index.js file. In either case, let us know and we can help you find a solution.
