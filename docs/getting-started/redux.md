---
id: redux
title: Redux
sidebar_label: Redux
---

HomeflowJS uses Redux to manage state.

## `withHomeflowState`

You should wrap any top-level components in the `withHomeflowState` HOC before rendering them:

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

## State

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


## `hfDispatch`

If you need to dispatch an action programmatically, you can use `hfDispatch`:

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
