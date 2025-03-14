---
id: adding-scss-to-components
title: Adding SCSS to components
sidebar_label: Adding SCSS to components
---


## Component Styling Recommendations

**General Guidance:**

It's typically best practice to avoid applying direct styling to components within Homeflowjs. Instead, leverage the theme's styling capabilities for consistent and maintainable design.

**Exceptions:**

However, there are instances where adding specific, component-level styling is required. In this example we want to add a CSS animation to a loading icon.

1. Create a new SCSS file named `[component-name].styles.scss` (e.g., `loading-icon.styles.scss`) in the same folder as your component.
2. Add your desired SCSS styles to this file.

```scss
@keyframes spin-loading-icon {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading-icon {
  transform-origin: center;
  animation: spin-loading-icon 1s linear infinite;
}
```


Then in your component import the file, for example:

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './loading-icon.styles.scss'; // < Here

const MyComponent = () => (
  <svg role="img" className="loading-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    ...
  </svg>
);

```

Lastly, we need to add the entry to `package.json` under the `sideEffects` otherwise the CSS never gets compiled.

```json
{
  "name": "homeflowjs",
  "version": "1.0.52",
  "sideEffects": [
    "path-to-my-component/my-component/**/*"
    ...
  ],
...
}
```
