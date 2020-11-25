(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(92)),o={id:"property-search",title:"Property Search"},l={unversionedId:"components/property-search",id:"components/property-search",isDocsHomePage:!1,title:"Property Search",description:"SearchForm",source:"@site/docs/components/property-search.mdx",slug:"/components/property-search",permalink:"/homeflowjs-docs/docs/components/property-search",editUrl:"https://github.com/homeflow/homeflowjs-docs/edit/master/docs/components/property-search.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Retrofitting HomeflowJS to Existing Themes",permalink:"/homeflowjs-docs/docs/getting-started/retrofitting"},next:{title:"Modals",permalink:"/homeflowjs-docs/docs/components/modals"}},i=[{value:"<code>SearchForm</code>",id:"searchform",children:[{value:"Props",id:"props",children:[]}]},{value:"<code>LocationInput</code>",id:"locationinput",children:[{value:"Props",id:"props-1",children:[]}]},{value:"<code>ChannelRadioButton</code>",id:"channelradiobutton",children:[{value:"Props",id:"props-2",children:[]}]},{value:"<code>PriceSelect</code>",id:"priceselect",children:[{value:"Props",id:"props-3",children:[]}]},{value:"<code>BedroomsSelect</code>",id:"bedroomsselect",children:[{value:"Props",id:"props-4",children:[]}]},{value:"<code>GenericSearchField</code>",id:"genericsearchfield",children:[]}],b={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"searchform"},Object(c.b)("inlineCode",{parentName:"h2"},"SearchForm")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"SearchForm")," component should wrap all fields on your search form."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { SearchForm } from 'homeflowjs/search';\n\nconst SearchFormExample = () => (\n  <SearchForm>\n    {/* Additonal form fields and other JSX will go here */}\n  </SearchForm>\n)\n")),Object(c.b)("p",null,"Here is an example of a complete search form:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport {\n  SearchForm as HomeflowSearchForm,\n  BedroomsSelect,\n  ChannelRadioButton,\n  LocationInput,\n  PriceSelect,\n  RadiusSelect,\n  TagCheckBox,\n} from \'homeflowjs/search\';\n\nconst SearchForm = () => (\n  <div className="container jumbotron">\n    <HomeflowSearchForm>\n      <div className="row">\n        <h2 className="col-md-6">Search for your new home</h2>\n\n        <div className="col-md-3">\n          <div className="form-check">\n            <ChannelRadioButton\n              type="sales"\n              inputClass="form-check-input"\n              labelClass="form-check-label"\n            />\n          </div>\n        </div>\n\n        <div className="col-md-3">\n          <div className="form-check">\n            <ChannelRadioButton\n              type="lettings"\n              inputClass="form-check-input"\n              labelClass="form-check-label"\n            />\n          </div>\n        </div>\n      </div>\n\n      <div className="row">\n        <div className="col-md-3">\n          <LocationInput className="form-control" />\n          <RadiusSelect className="form-control" />\n        </div>\n\n        <div className="col-md-3 form-group">\n          <PriceSelect type="min" />\n          <PriceSelect type="max" />\n        </div>\n\n        <div className="col-md-3 form-group">\n          <BedroomsSelect type="min" className="form-control" />\n          <BedroomsSelect type="max" className="form-control" />\n        </div>\n\n        <div className="col-md-3">\n          <div className="form-check">\n            <input type="checkbox" id="status" name="status" value="all" className="form-check-input" />\n            {\' \'}\n            <label className="form-check-label" htmlFor="status">Include Sold/Let</label>\n          </div>\n        </div>\n      </div>\n\n      <div className="row">\n        <div className="col-md-2">\n          <label>\n            <TagCheckBox name="house" />\n            {\' \'}\n            House\n          </label>\n        </div>\n\n        <div className="col-md-2">\n          <label>\n            <TagCheckBox name="flat" />\n            {\' \'}\n            Flat\n          </label>\n        </div>\n\n        <div className="col-md-2">\n          <label>\n            <TagCheckBox name="commercial" />\n            {\' \'}\n            Commercial\n          </label>\n        </div>\n\n        <div className="col-md-4 col-md-offset-2">\n          <button className="btn btn-primary" type="submit">Search</button>\n        </div>\n      </div>\n    </HomeflowSearchForm>\n  </div>\n);\n\nexport default SearchForm;\n')),Object(c.b)("p",null,"Remember when you render your component to wrap it in the ",Object(c.b)("inlineCode",{parentName:"p"},"withHomeflowState")," higher-order component to ensure it is passed the relevant state:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import ReactDOM from 'react-dom';\nimport { withHomeflowState } from 'homeflowjs';\n\nimport SearchForm from '../js/components/search-form';\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  ReactDOM.render(\n    withHomeflowState(SearchForm),\n    document.getElementById('property-search-form'),\n  );\n});\n")),Object(c.b)("h3",{id:"props"},"Props"),Object(c.b)("h4",{id:"defaultsort--string"},"defaultSort : String"),Object(c.b)("p",null,"The default sort order for results. Can be one of the following strings:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"least-expensive-first"),Object(c.b)("li",{parentName:"ul"},"most-expensive-first"),Object(c.b)("li",{parentName:"ul"},"most-recent-first"),Object(c.b)("li",{parentName:"ul"},"most-square-feet-first"),Object(c.b)("li",{parentName:"ul"},"least-square-feet-first"),Object(c.b)("li",{parentName:"ul"},"most-recently-launched-first"),Object(c.b)("li",{parentName:"ul"},"most-recently-updated-first")),Object(c.b)("h4",{id:"submitcallback--function"},"submitCallback : Function"),Object(c.b)("p",null,"An optional callback that will be invoked when the form is submitted. It can be used for firing analytics events etc."),Object(c.b)("h2",{id:"locationinput"},Object(c.b)("inlineCode",{parentName:"h2"},"LocationInput")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"LocationInput")," component will render a search box complete with autosuggest functionality."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { LocationInput } from 'homeflowjs/search';\n\n<LocationInput className=\"form-control\" />\n\n")),Object(c.b)("h3",{id:"props-1"},"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"handleSubmit"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Submit handler for the form.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"placeholder"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The placeholder text displayed in the input. Default is 'Enter a location...'")))),Object(c.b)("h2",{id:"channelradiobutton"},Object(c.b)("inlineCode",{parentName:"h2"},"ChannelRadioButton")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"ChannelRadioButton")," component will render a single radio button for channel based on the ",Object(c.b)("inlineCode",{parentName:"p"},"type")," provided."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { ChannelRadioButton } from \'homeflowjs/search\';\n\n<ChannelRadioButton\n  type="sales"\n  inputClass="form-check-input"\n  labelClass="form-check-label"\n/>\n<ChannelRadioButton\n  type="lettings"\n  inputClass="form-check-input"\n  labelClass="form-check-label"\n/>\n\n')),Object(c.b)("h3",{id:"props-2"},"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should be 'sales' or 'lettings'")))),Object(c.b)("h2",{id:"priceselect"},Object(c.b)("inlineCode",{parentName:"h2"},"PriceSelect")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"PriceSelect")," component will render a select for min or max price based on the ",Object(c.b)("inlineCode",{parentName:"p"},"type")," provided."),Object(c.b)("p",null,"The price options should change automatically based on the selected channel."),Object(c.b)("p",null,"Pass the ",Object(c.b)("inlineCode",{parentName:"p"},"reactSelect")," prop to render a decorated dropdown or omit it to render a normal select."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { PriceSelect } from 'homeflowjs/search';\n\n<PriceSelect type=\"min\" reactSelect />\n<PriceSelect type=\"max\" reactSelect />\n\n")),Object(c.b)("h3",{id:"props-3"},"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"type")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should be 'min' or 'max'.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"priceConfig")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Allows setting custom price options and other config (see below)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"reactSelect")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Whether to use the reac-select library to render a decorated dropdown")))),Object(c.b)("h4",{id:"priceconfig"},Object(c.b)("inlineCode",{parentName:"h4"},"priceConfig")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"priceConfig")," can be used to set custom prices for sales and lettings. You can also include ",Object(c.b)("inlineCode",{parentName:"p"},"lettingsAs: 'pw'")," to display lettings prices as per-week instead of per-month:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<PriceSelect\n  type=\"min\"\n  priceConfig={\n    salesPrices: [1000, 2000, 3000],\n    lettingsPrices: [100, 200, 300],\n    lettingsAs: 'pw',\n  }\n/>\n")),Object(c.b)("h2",{id:"bedroomsselect"},Object(c.b)("inlineCode",{parentName:"h2"},"BedroomsSelect")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"BedroomsSelect")," component will render min or max price select inputs."),Object(c.b)("p",null,"Pass the ",Object(c.b)("inlineCode",{parentName:"p"},"reactSelect")," prop to render a decorated dropdown or omit it to render a normal select."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { BedroomsSelect } from 'homeflowjs/search';\n\n<BedroomsSelect type=\"min\" reactSelect />\n<BedroomsSelect type=\"max\" reactSelect />\n\n")),Object(c.b)("h3",{id:"props-4"},"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"type")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should be 'min' or 'max'.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"bedValues")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"You can override the default options for beds.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"reactSelect")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Whether to use the reac-select library to render a decorated dropdown")))),Object(c.b)("h2",{id:"genericsearchfield"},Object(c.b)("inlineCode",{parentName:"h2"},"GenericSearchField")),Object(c.b)("p",null,"If you need a form field for which there isn't a component provided, or you need more customisation, you can use the ",Object(c.b)("inlineCode",{parentName:"p"},"GenericSearchField")," component."),Object(c.b)("p",null,"By passing a ",Object(c.b)("inlineCode",{parentName:"p"},"type")," prop, you can render either a text ",Object(c.b)("inlineCode",{parentName:"p"},"<input>")," or a ",Object(c.b)("inlineCode",{parentName:"p"},"<select>")," which will be hooked up to the relevant redux state and action (although make sure you only use valid camelCase homeflow search parameters as the ",Object(c.b)("inlineCode",{parentName:"p"},"name"),")."),Object(c.b)("p",null,"This example will render a ",Object(c.b)("inlineCode",{parentName:"p"},"<select>")," field to match properties created in a number of days:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { GenericSearchField } from \'homeflowjs/search\';\n\nconst NewerThanSelect = () => (\n  <GenericSearchField type="select" name="createdAgo">\n    <option value="5">Newer than 5 days</option>\n    <option value="10">Newer than 10 days</option>\n    <option value="15">Newer than 15 days</option>\n  </GenericSearchField>\n)\n')))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||s[d]||c;return n?r.a.createElement(u,l(l({ref:t},b),{},{components:n})):r.a.createElement(u,l({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);