---
id: price-select
title: PriceSelect
---

The `PriceSelect` component will render a select for min or max price based on the `type` provided. It will populate

## Usage

```jsx
import React from 'react';
import { ChannelRadioButton } from 'homeflowjs/search';

<PriceSelect type="min" />
<PriceSelect type="max" />

```

## Props

| Prop            | Type    | Description                                                            |
|-----------------|---------|------------------------------------------------------------------------|
|type             |String   |Should be 'min' or 'max'.                                               |
|salesPrices      |Array    |Array of integers to override default sales prices.                     |
|lettingsPrices   |Array    |Array of integers to override default lettings prices.                  |
