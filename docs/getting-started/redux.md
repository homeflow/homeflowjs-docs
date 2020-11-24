---
id: redux
title: Redux
sidebar_label: Redux
---

HomeflowJS uses Redux to manage state.

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

If you need to dispatch an action programmatically, you can use `HomeflowDispatch`:

```jsx
import { HomeflowDispatch } from 'homeflowjs';

HomeflowDispatch.search.setSearchField({ placeId: 'abc123' });
```
