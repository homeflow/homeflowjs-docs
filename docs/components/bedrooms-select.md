---
id: bedrooms-select
title: BedroomsSelect
---

The `BedroomsSelect` component will render min or max price select inputs.

## Usage

```jsx
import React from 'react';
import { BedroomsSelect } from 'homeflowjs/search';

<div className="col-md-3 form-group">
  <BedroomsSelect type="min" className="form-control" />
  <BedroomsSelect type="max" className="form-control" />
</div>

```

## Props

| Prop            | Type    | Description                                                            |
|-----------------|---------|------------------------------------------------------------------------|
|bedValues        |Array    |You can override the default options for beds.                          |
