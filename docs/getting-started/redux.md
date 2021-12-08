---
id: redux
title: Redux
sidebar_label: Redux
---

HomeflowJS uses Redux to manage state.

## Structure

The Redux data is structured like this:

```js
{
  app: {}, // general app state like theme preferences and settings, loading etc
  search: {
    currentSearch: {}, // data for the current search
    savedSearches: [], // the user's saved searches
  },
  user: {
    currentUser: {}, // the user loaded from ther server after they've registered or signed in
    localUser: {}, // local user data to send to the server when they register or edit their profile
    userCredentials: {} // email and password when registering or signing in
  },
  properties: {
    properties: [], // property results from the current search
    savedProperties: [], // the user's saved properties
  }
}
```

You can use [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) to inspect the state in the browser.

## `withHomeflowState`

You should wrap any top-level React components in the `withHomeflowState` HOC before rendering them:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { withHomeflowState } from 'homeflowjs';
import SearchForm from '../js/components/search-form';

ReactDOM.render(
  withHomeflowState(SearchForm),
  document.getElementById('property-search-form'),
);
```

This will connect them to the various state and actions provided by HomeflowJS to allow them to be updated automatically, as well as wrapping them in a `HashRouter` from `react-router-dom`. You only need a single `withHomeflowState` on the top-level of whatever you are rendering, so if you're rendering a whole page using React, you can simply wrap your top-level component, e.g. `withHomeflowState(MyPage)`, and any children will be connected to the Redux store.

## Connecting React Components

Use `connect` from `react-redux` to pass state from HomeflowJS to any custom component:

```jsx
import React from 'react';
import { connect } from 'react-redux';

const MyCustomComponent = ({ placeId }) => <p>{placeId}</p>;

const mapStateToProps = state => ({
  placeId: state.search.placeId,
});

export default connect(
  mapStateToProps,
)(MyCustomComponent)
```

## Actions

You can dispatch various action creators from HomeflowJS by importing them from the relevant file in `homeflowjs/actions` and connecting them to your components. For example:

```jsx
import React from 'react';
import { connect } from 'react-redux';
import { setSearchField } from 'homeflowjs/actions/search.actions';

const MyComponent = ({ setSearchField }) => (
  <button type="button" onClick={() => setSearchField({ maxPrice: 99999 })} />
);

const mapDispatchToProps = {
  setSearchField,
};

export default connect(
  null,
  mapDispatchToProps,
)(MyComponent);
```

You can find all available actions by looking inside the `actions` directory inside HomeflowJS.

For more info on action creators and `mapDispatchToProps`, please check the documentation for [react-redux](https://react-redux.js.org/using-react-redux/connect-mapdispatch).

## `Homeflow.getState`

While you should always connect your React components to any state you need using `react-redux`, you may find a situation where you need to access the Redux data directly.

If you need to access part of the current state, you can call `Homeflow.getState()`.

```jsx
const minBeds = Homeflow.getState().search.minBeds;
```

## `Homeflow.dispatch`

If you need to update some state, you can call `Homeflow.dispatch(action)`.

```jsx
Homeflow.dispatch({ type: 'SET_SEARCH_FIELD', payload: { minBeds: 2 } });
```

## `Homeflow.subscribe`

Call `Homeflow.subscribe(listener)` to be updated whenever state changes.

```jsx
const minBeds = Homeflow.getState().search.minBeds;

Homeflow.subscribe(() => {
  const state = Homeflow.getState();

  if (state.search.minBeds !== minBeds) {
    console.log('Min beds state has changed.');
  }
});
```

## `hfDispatch`

`hfDispatch` is provided as a wrapper for `Homeflow.dispatch` that calls action creators. This can help to avoid bugs caused by trying to pass action objects directly:

```jsx
import { hfDispatch } from 'homeflowjs';

hfDispatch.search.setSearchField({ placeId: 'abc123' });
```

These are the currently available actions:

- `hfDispatch.search.setSearch(search)`
- `hfDispatch.search.setSearchField({ key: value })`
- `hfDispatch.search.toggleTag(tag)`
- `hfDispatch.user.setUser(user)` - this can be used to set a single field on a user.
- `hfDispatch.properties.loadNext()` - loads the next page of properties.
