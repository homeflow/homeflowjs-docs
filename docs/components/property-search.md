---
id: property-search
title: Property Search
---

## `SearchForm`

The `SearchForm` component should wrap all fields on your search form.

```jsx
import React from 'react';
import { SearchForm } from 'homeflowjs/search';

const SearchFormExample = () => (
  <SearchForm>
    {/* Additonal form fields and other JSX will go here */}
  </SearchForm>
)
```

Here is an example of a complete search form:


```jsx
import React from 'react';
import {
  SearchForm as HomeflowSearchForm,
  BedroomsSelect,
  ChannelRadioButton,
  LocationInput,
  PriceSelect,
  RadiusSelect,
  TagCheckBox,
} from 'homeflowjs/search';

const SearchForm = () => (
  <div className="container jumbotron">
    <HomeflowSearchForm>
      <div className="row">
        <h2 className="col-md-6">Search for your new home</h2>

        <div className="col-md-3">
          <div className="form-check">
            <ChannelRadioButton
              type="sales"
              inputClass="form-check-input"
              labelClass="form-check-label"
            />
          </div>
        </div>

        <div className="col-md-3">
          <div className="form-check">
            <ChannelRadioButton
              type="lettings"
              inputClass="form-check-input"
              labelClass="form-check-label"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <LocationInput className="form-control" />
          <RadiusSelect className="form-control" />
        </div>

        <div className="col-md-3 form-group">
          <PriceSelect type="min" />
          <PriceSelect type="max" />
        </div>

        <div className="col-md-3 form-group">
          <BedroomsSelect type="min" className="form-control" />
          <BedroomsSelect type="max" className="form-control" />
        </div>

        <div className="col-md-3">
          <div className="form-check">
            <input type="checkbox" id="status" name="status" value="all" className="form-check-input" />
            {' '}
            <label className="form-check-label" htmlFor="status">Include Sold/Let</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-2">
          <label>
            <TagCheckBox name="house" />
            {' '}
            House
          </label>
        </div>

        <div className="col-md-2">
          <label>
            <TagCheckBox name="flat" />
            {' '}
            Flat
          </label>
        </div>

        <div className="col-md-2">
          <label>
            <TagCheckBox name="commercial" />
            {' '}
            Commercial
          </label>
        </div>

        <div className="col-md-4 col-md-offset-2">
          <button className="btn btn-primary" type="submit">Search</button>
        </div>
      </div>
    </HomeflowSearchForm>
  </div>
);

export default SearchForm;
```

Remember when you render your component to wrap it in the `withHomeflowState` higher-order component to ensure it is passed the relevant state:

```jsx
import ReactDOM from 'react-dom';
import { withHomeflowState } from 'homeflowjs';

import SearchForm from '../js/components/search-form';

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    withHomeflowState(SearchForm),
    document.getElementById('property-search-form'),
  );
});
```

### Props

#### defaultSort : String

The default sort order for results. Can be one of the following strings:

- least-expensive-first
- most-expensive-first
- most-recent-first
- most-square-feet-first
- least-square-feet-first
- most-recently-launched-first
- most-recently-updated-first

#### submitCallback : Function

An optional callback that will be invoked when the form is submitted. It can be used for firing analytics events etc.

## `LocationInput`

The `LocationInput` component will render a search box complete with autosuggest functionality.

```jsx
import React from 'react';
import { LocationInput } from 'homeflowjs/search';

<LocationInput className="form-control" />

```

### Props

| Prop            | Type    | Description                                                                 |
|-----------------|---------|-----------------------------------------------------------------------------|
|handleSubmit     |Function |Submit handler for the form.                                                 |
|placeholder      |String   |The placeholder text displayed in the input. Default is 'Enter a location...'|

## ChannelRadioButton

The `ChannelRadioButton` component will render a single radio button for channel based on the `type` provided.

```jsx
import React from 'react';
import { ChannelRadioButton } from 'homeflowjs/search';

<ChannelRadioButton
  type="sales"
  inputClass="form-check-input"
  labelClass="form-check-label"
/>
<ChannelRadioButton
  type="lettings"
  inputClass="form-check-input"
  labelClass="form-check-label"
/>

```

### Props

| Prop            | Type    | Description                                                            |
|-----------------|---------|------------------------------------------------------------------------|
|type             |String   |Should be 'sales' or 'lettings'                                         |
