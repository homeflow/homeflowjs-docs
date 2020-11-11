---
id: generic-search-field
title: GenericSearchField
---

If you need a form field for which there isn't a component provided, or you need more customisation, you can use the `GenericSearchField` component.

By passing a `type` prop, you can render either a text `<input>` or a `<select>` which will be hooked up to the relevant redux state and action (although make sure you only use valid camelCase homeflow search parameters as the `name`).

## Usage

This example will render a `<select>` field to match properties created in a number of days:

```jsx
import React from 'react';
import { GenericSearchField } from 'homeflowjs/search';

const NewerThanSelect = () => (
  <GenericSearchField type="select" name="createdAgo">
    <option value="5">Newer than 5 days</option>
    <option value="10">Newer than 10 days</option>
    <option value="15">Newer than 15 days</option>
  </GenericSearchField>
)
```
