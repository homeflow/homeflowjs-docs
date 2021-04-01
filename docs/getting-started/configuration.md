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

For more complex data, use our `include_as_json` liquid tag. First create a file (which should start with an `_`) with the extension `.ljson`, for example, `_home_carousel_items.ljson`. Contrary to what you may expect from the extension, this should actually be a YAML file containing liquid, which will set out the format in which your JSON data should be created.

The `_home_carousel_items.ljson` file might look like this:

```
{% for item in agency.carousel_items %}
  -
    linkUrl: {{ item.link_url }}
    imageLarge: {{ item.image | url_for_generic_image: "1920x_" }}
    imageMedium: {{ item.image | url_for_generic_image: "414x720" }}
    imageSmall: {{ item.image | url_for_generic_image: "414x720" }}
    imageTiny: {{ item.image | url_for_generic_image: "320x568" }}
    title: {{ item.title | yaml_safe }}
    standfirst: {{ item.standfirst | yaml_safe }}
{% endfor %}
```

This will create an array of carousel items with the properties you have defined. Please note the use of the `yaml_safe` filter, which should be used on all strings to ensure unsafe characters are escaped properly.

You can then set this using `include_as_json` (let's imagine the `_home_carousel_items.ljson` is in a directory called `data` to keep things organised):

```js
Homeflow.set('carousel_items', {% include_as_json data/home_carousel_items %})
```

Using this technique you can construct complex structures from Liquid code ready to be used by your front-end.

For compatibility with older themes, `Ctesius.addConfig` and `Ctesius.getConfig` are available as aliases to `Homeflow.set` and `Homeflow.get` (although new themes should only use the new `Homeflow` object).

You should also add this partial to the _bottom_ of the `<body>` element **on every page**:

```html
{% include 'homeflow_core/body %}
```

This contains things like custom styles loaded from the agent's admin area.

## `hfInitialize`

`hfInitialize` is a function that must be called as early as possible in **each entry point**. We suggest placing this at the top of a `global.jsx` file to be imported into each entry bundle.

```jsx
// global.jsx
import { hfInitialize } from 'homeflowjs';

hfInitialize();
```

This function will attach some additional methods to give you low-level access to various state. See the section on [Redux](components/../redux.md) for more detail.
