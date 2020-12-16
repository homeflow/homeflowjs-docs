---
id: redux
title: Redux
sidebar_label: Redux
---

HomeflowJS uses Redux to manage state.

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

This will connect them to the various state and actions provided by HomeflowJS to allow them to be updated automatically. You only need a single `withHomeflowState` on the top-level of whatever you are rendering, so if you're rendering a whole page using React, you can simply wrap your top-level component, e.g. `withHomeflowState(MyPage)`, and any children will be connected to the Redux store.

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

## `HomeflowJS.getState`

If you need to access part of the current state, you can call `HomeflowJS.getState()`.

```jsx
const minBeds = HomeflowJS.getState().search.minBeds;
```

## `HomeflowJS.dispatch`

If you need to update some state, you can call `HomeflowJS.dispatch(action)`.

```jsx
HomeflowJS.dispatch({ type: 'SET_SEARCH_FIELD', payload: { minBeds: 2 } });
```

## `HomeflowJS.subscribe`

Call `HomeflowJS.subscribe(listener)` to be updated whenever state changes.

```jsx
const minBeds = HomeflowJS.getState().search.minBeds;

HomeflowJS.subscribe(() => {
  const state = HomeflowJS.getState();

  if (state.search.minBeds !== minBeds) {
    console.log('Min beds state has changed.');
  }
});
```

## `hfDispatch`

`hfDispatch` is provided as a wrapper for `HomeflowJS.dispatch` that calls action creators. This can help to avoid bugs caused by trying to pass action objects directly:

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
