---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---

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
