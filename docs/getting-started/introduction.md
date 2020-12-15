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

HomeflowJS makes use of [React](https://reactjs.org/) for UI components and [Redux](https://redux.js.org/) for managing state. You should ensure `react`, `react-dom`, `redux` and `react-redux` are included as dependencies in the theme (if you're using the theme_boilerplate project these should already be included).

Please use the links below for documentation on these libraries:

- [React](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/introduction/getting-started)
- [React Redux](https://react-redux.js.org/introduction/quick-start)

### Design

Homeflow sites are **not** single-page applications. Routing is generally handled server-side, and Liquid is used to inject dynamic data into HTML templates. React can therefore be used to render as much of a particular page as you like, either by rendering individual components into separate DOM nodes or by rendering an entire page as a React app. Seperately rendered components will still be connected to the Redux store (see the section on Redux in the sidebar for more detail).
