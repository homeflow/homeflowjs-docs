---
id: configuration
title: Configuration
sidebar_label: Configuration
---

Ensure this liquid partial is included at the top of the `<head>` element **on every page**.

```html
{% include 'homeflow_core/startup' %}
```

This partial includes some JavaScript which creates a global `Homeflow` object that can be used to set per-agent configuration to be used by in-theme JavaScript code. As much of an agent's preferences and settings are exposed as liquid variables, you can use inline JS inside liquid templates to assign these to Homeflow configuration using `Homeflow.set`.

```js
Homeflow.set('lettings_prices', {{ company.lettings_price_range_monthly | yaml_safe }});
```

This setting could then be accessed from inside your JavaScript files like this:

```js
const lettingsPrices = Homeflow.get('lettings_prices');
```

For compatibility with older themes, `Ctesius.addConfig` and `Ctesius.getConfig` are available as aliases to `Homeflow.set` and `Homeflow.get` (although new themes should only use the new `Homeflow` object).

## `hfInitialize`

`hfInitialize` is a function that must be called as early as possible in **each entry point**. We suggest placing this at the top of a `global.jsx` file to be imported into each entry bundle.

```jsx
// global.jsx
import { hfInitialize } from 'homeflowjs';

hfInitialize();
```

This function will attach some additional methods to give you low-level access to various state. See the section on [Redux](components/../redux.md) for more detail.
