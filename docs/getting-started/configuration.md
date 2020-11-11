---
id: configuration
title: Configuration
sidebar_label: Configuration
---

Ensure this liquid partial is included at the top of the `<head>` element **on every page**.

```html
{% include 'homeflow_core/startup' %}
```

This partial includes some JavaScript which creates a global `HomeflowJS` object that can be used to set per-agent configuration to be used by in-theme JavaScript code. As much of an agent's preferences and settings are exposed as liquid variables, you can use inline JS inside liquid templates to assign these to Homeflow configuration using `HomeflowJS.set`.

```js
HomeflowJS.set('lettings_prices', {{ company.lettings_price_range_monthly | yaml_safe }});
```

This setting could then be accessed from inside your JavaScript files like this:

```js
const lettingsPrices = HomeflowJS.get('lettings_prices');
```

For compatibility with older themes, `Ctesius.addConfig` and `Ctesius.getConfig` are available as aliases to `HomeflowJS.set` and `HomeflowJS.get` (although new themes should only use the new `HomeflowJS` object).
