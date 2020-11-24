(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return x})),a.d(t,"metadata",(function(){return T})),a.d(t,"rightToc",(function(){return E})),a.d(t,"default",(function(){return F}));var n=a(2),r=a(6),l=a(0),c=a.n(l),o=a(92),i=a(119),s=a(99),b=a.n(s),p=a(120);var d={SET_SEARCH:"SET_SEARCH",SET_PLACE_ID:"SET_PLACE_ID",SET_IS_QUERY_SEARCH:"SET_IS_QUERY_SEARCH",SET_Q:"SET_Q",SET_SUGGESTIONS:"SET_SUGGESTIONS",SET_CHANNEL:"SET_CHANNEL",SET_SEARCH_FIELD:"SET_SEARCH_FIELD",TOGGLE_TAG:"TOGGLE_TAG",SET_PLACE:"SET_PLACE"};const m=e=>({type:d.SET_SEARCH_FIELD,payload:e}),u=e=>e.charAt(0).toUpperCase()+e.slice(1),h=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),j=({type:e,setSearchField:t,bedValues:a,value:r,optionClass:l,minBeds:o,maxBeds:i,...s})=>c.a.createElement("select",Object(n.a)({value:r,onChange:e=>t({[e.target.name]:e.target.value?parseInt(e.target.value):null}),name:e+"Beds"},s),c.a.createElement("option",{value:"",title:e+" beds",className:l},u(e),". bedrooms"),a.map(((e,t)=>c.a.createElement("option",{key:t,value:t+1,title:t+1+" Bed",className:l},t+1," bed")))),O=e=>{const{type:t,setSearchField:a,bedValues:n,className:r,styles:l,value:o}=e,i=n.map((e=>({value:e,label:e+" bed"})));return o&&i.unshift({value:"",label:`No ${t} beds`}),c.a.createElement(p.a,{classNamePrefix:"react-select",className:r,options:i,styles:l,placeholder:u(t)+" beds",value:i.filter((e=>e.value===o)),setValue:()=>o,isSearchable:!1,onChange:({value:e})=>{a({[t+"Beds"]:e?parseInt(e):null})}})},N=e=>{const{type:t,minBeds:a,maxBeds:r,reactSelect:l,bedValues:o,...i}=e,s="min"===t?a:r;let b=o;return"max"===t&&a&&(b=o.filter((e=>e>a))),"min"===t&&r&&(b=o.filter((e=>e<r))),l?c.a.createElement(O,Object(n.a)({type:t,value:s,bedValues:b},i)):c.a.createElement(j,Object(n.a)({type:t,value:s,bedValues:b},i))};N.propTypes={type:b.a.string.isRequired,bedValues:b.a.array,minBeds:b.a.number,maxBeds:b.a.number,setSearchField:b.a.func.isRequired,optionClass:b.a.string},N.defaultProps={bedValues:[1,2,3,4,5,6],optionClass:""};const g={setSearchField:m};Object(i.a)((e=>({minBeds:e.search.minBeds,maxBeds:e.search.maxBeds})),g)(N);const f=[1e5,2e5,3e5,4e5,5e5,6e5,7e5,8e5,9e5,1e6,125e4,15e5,175e4,2e6,225e4,25e5,275e4,3e6],S=[200,300,400,500,600,700,800,900,1e3],y=(e,t,a)=>{if("lettings"===t&&"pw"===a){const t=Math.ceil(e/(52/12));return`\xa3${h(t)} pw (\xa3${h(e)} pcm)`}return`\xa3${h(e)} ${"lettings"===t?"pcm":""}`},v=({type:e,channel:t,setSearchField:a,prices:n,selectedPrice:r,priceConfig:l})=>c.a.createElement("select",{name:e+"Price",value:r,onChange:e=>a({[e.target.name]:e.target.value?parseInt(e.target.value):null}),className:""},c.a.createElement("option",{value:"",title:e+" price"},u(e),". Price"),n.map((e=>c.a.createElement("option",{key:e,value:e,title:e},y(e,t,l.lettingsAs))))),C=e=>{const{type:t,channel:a,setSearchField:n,prices:r,selectedPrice:l,className:o,styles:i,priceConfig:s}=e,b=r.map((e=>({value:e,label:y(e,a,s.lettingsAs)})));return l&&b.unshift({value:"",label:`No ${t} price`}),c.a.createElement(p.a,{classNamePrefix:"react-select",className:o,options:b,styles:i,placeholder:u(t)+" price",value:b.filter((e=>e.value===l)),setValue:()=>l,isSearchable:!1,onChange:({value:e})=>{n({[t+"Price"]:e?parseInt(e):null})}})},w=e=>{const{type:t,channel:a,minPrice:r,maxPrice:l,priceConfig:o,reactSelect:i}=e;let{salesPrices:s=f,lettingsPrices:b=S}=o,p="sales"===a?s:b;const d="min"===t?r:l;return"max"===t&&r&&(p=p.filter((e=>e>r))),"min"===t&&l&&(p=p.filter((e=>e<l))),i?c.a.createElement(C,Object(n.a)({prices:p,selectedPrice:d},e)):c.a.createElement(v,Object(n.a)({prices:p,selectedPrice:d},e))};w.propTypes={type:b.a.string.isRequired,channel:b.a.oneOf(["sales","lettings"]),minPrice:b.a.number,maxPrice:b.a.number,setSearchField:b.a.func.isRequired,priceConfig:b.a.shape({salesPrices:b.a.array,lettingsPrices:b.a.array,lettingsAs:b.a.string}),lettingsAs:b.a.string},w.defaultProps={priceConfig:{salesPrices:f,lettingsPrices:S,lettingsAs:"pcm"}};const P={setSearchField:m};Object(i.a)((e=>({channel:e.search.channel,minPrice:e.search.minPrice,maxPrice:e.search.maxPrice})),P)(w);var x={id:"property-search",title:"Property Search"},T={unversionedId:"components/property-search",id:"components/property-search",isDocsHomePage:!1,title:"Property Search",description:"SearchForm",source:"@site/docs/components/property-search.mdx",slug:"/components/property-search",permalink:"/homeflowjs/docs/components/property-search",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/property-search.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Redux",permalink:"/homeflowjs/docs/getting-started/redux"},next:{title:"Modals",permalink:"/homeflowjs/docs/components/modals"}},E=[{value:"<code>SearchForm</code>",id:"searchform",children:[{value:"Props",id:"props",children:[]}]},{value:"<code>LocationInput</code>",id:"locationinput",children:[{value:"Props",id:"props-1",children:[]}]},{value:"<code>ChannelRadioButton</code>",id:"channelradiobutton",children:[{value:"Props",id:"props-2",children:[]}]},{value:"<code>PriceSelect</code>",id:"priceselect",children:[{value:"Props",id:"props-3",children:[]}]},{value:"<code>BedroomsSelect</code>",id:"bedroomsselect",children:[{value:"Props",id:"props-4",children:[]}]},{value:"<code>GenericSearchField</code>",id:"genericsearchfield",children:[]}],B={rightToc:E};function F(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},B,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"searchform"},Object(o.b)("inlineCode",{parentName:"h2"},"SearchForm")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"SearchForm")," component should wrap all fields on your search form."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { SearchForm } from 'homeflowjs/search';\n\nconst SearchFormExample = () => (\n  <SearchForm>\n    {/* Additonal form fields and other JSX will go here */}\n  </SearchForm>\n)\n")),Object(o.b)("p",null,"Here is an example of a complete search form:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport {\n  SearchForm as HomeflowSearchForm,\n  BedroomsSelect,\n  ChannelRadioButton,\n  LocationInput,\n  PriceSelect,\n  RadiusSelect,\n  TagCheckBox,\n} from \'homeflowjs/search\';\n\nconst SearchForm = () => (\n  <div className="container jumbotron">\n    <HomeflowSearchForm>\n      <div className="row">\n        <h2 className="col-md-6">Search for your new home</h2>\n\n        <div className="col-md-3">\n          <div className="form-check">\n            <ChannelRadioButton\n              type="sales"\n              inputClass="form-check-input"\n              labelClass="form-check-label"\n            />\n          </div>\n        </div>\n\n        <div className="col-md-3">\n          <div className="form-check">\n            <ChannelRadioButton\n              type="lettings"\n              inputClass="form-check-input"\n              labelClass="form-check-label"\n            />\n          </div>\n        </div>\n      </div>\n\n      <div className="row">\n        <div className="col-md-3">\n          <LocationInput className="form-control" />\n          <RadiusSelect className="form-control" />\n        </div>\n\n        <div className="col-md-3 form-group">\n          <PriceSelect type="min" />\n          <PriceSelect type="max" />\n        </div>\n\n        <div className="col-md-3 form-group">\n          <BedroomsSelect type="min" className="form-control" />\n          <BedroomsSelect type="max" className="form-control" />\n        </div>\n\n        <div className="col-md-3">\n          <div className="form-check">\n            <input type="checkbox" id="status" name="status" value="all" className="form-check-input" />\n            {\' \'}\n            <label className="form-check-label" htmlFor="status">Include Sold/Let</label>\n          </div>\n        </div>\n      </div>\n\n      <div className="row">\n        <div className="col-md-2">\n          <label>\n            <TagCheckBox name="house" />\n            {\' \'}\n            House\n          </label>\n        </div>\n\n        <div className="col-md-2">\n          <label>\n            <TagCheckBox name="flat" />\n            {\' \'}\n            Flat\n          </label>\n        </div>\n\n        <div className="col-md-2">\n          <label>\n            <TagCheckBox name="commercial" />\n            {\' \'}\n            Commercial\n          </label>\n        </div>\n\n        <div className="col-md-4 col-md-offset-2">\n          <button className="btn btn-primary" type="submit">Search</button>\n        </div>\n      </div>\n    </HomeflowSearchForm>\n  </div>\n);\n\nexport default SearchForm;\n')),Object(o.b)("p",null,"Remember when you render your component to wrap it in the ",Object(o.b)("inlineCode",{parentName:"p"},"withHomeflowState")," higher-order component to ensure it is passed the relevant state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import ReactDOM from 'react-dom';\nimport { withHomeflowState } from 'homeflowjs';\n\nimport SearchForm from '../js/components/search-form';\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  ReactDOM.render(\n    withHomeflowState(SearchForm),\n    document.getElementById('property-search-form'),\n  );\n});\n")),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("h4",{id:"defaultsort--string"},"defaultSort : String"),Object(o.b)("p",null,"The default sort order for results. Can be one of the following strings:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"least-expensive-first"),Object(o.b)("li",{parentName:"ul"},"most-expensive-first"),Object(o.b)("li",{parentName:"ul"},"most-recent-first"),Object(o.b)("li",{parentName:"ul"},"most-square-feet-first"),Object(o.b)("li",{parentName:"ul"},"least-square-feet-first"),Object(o.b)("li",{parentName:"ul"},"most-recently-launched-first"),Object(o.b)("li",{parentName:"ul"},"most-recently-updated-first")),Object(o.b)("h4",{id:"submitcallback--function"},"submitCallback : Function"),Object(o.b)("p",null,"An optional callback that will be invoked when the form is submitted. It can be used for firing analytics events etc."),Object(o.b)("h2",{id:"locationinput"},Object(o.b)("inlineCode",{parentName:"h2"},"LocationInput")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"LocationInput")," component will render a search box complete with autosuggest functionality."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { LocationInput } from 'homeflowjs/search';\n\n<LocationInput className=\"form-control\" />\n\n")),Object(o.b)("h3",{id:"props-1"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"handleSubmit"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Submit handler for the form.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"placeholder"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The placeholder text displayed in the input. Default is 'Enter a location...'")))),Object(o.b)("h2",{id:"channelradiobutton"},Object(o.b)("inlineCode",{parentName:"h2"},"ChannelRadioButton")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ChannelRadioButton")," component will render a single radio button for channel based on the ",Object(o.b)("inlineCode",{parentName:"p"},"type")," provided."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { ChannelRadioButton } from \'homeflowjs/search\';\n\n<ChannelRadioButton\n  type="sales"\n  inputClass="form-check-input"\n  labelClass="form-check-label"\n/>\n<ChannelRadioButton\n  type="lettings"\n  inputClass="form-check-input"\n  labelClass="form-check-label"\n/>\n\n')),Object(o.b)("h3",{id:"props-2"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Should be 'sales' or 'lettings'")))),Object(o.b)("h2",{id:"priceselect"},Object(o.b)("inlineCode",{parentName:"h2"},"PriceSelect")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"PriceSelect")," component will render a select for min or max price based on the ",Object(o.b)("inlineCode",{parentName:"p"},"type")," provided."),Object(o.b)("p",null,"The price options should change automatically based on the selected channel."),Object(o.b)("p",null,"Pass the ",Object(o.b)("inlineCode",{parentName:"p"},"reactSelect")," prop to render a decorated dropdown or omit it to render a normal select."),Object(o.b)("div",{style:{paddingTop:"10px",paddingBottom:"30px"}},Object(o.b)("div",{style:{display:"inline-block",width:"40%",paddingRight:"5%"}},Object(o.b)(w,{type:"min",setSearchField:function(){return null},reactSelect:!0,mdxType:"TESTPriceSelect"})),Object(o.b)("div",{style:{display:"inline-block",width:"40%",paddingRight:"5%"}},Object(o.b)(w,{type:"max",setSearchField:function(){return null},reactSelect:!0,mdxType:"TESTPriceSelect"}))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { PriceSelect } from 'homeflowjs/search';\n\n<PriceSelect type=\"min\" reactSelect />\n<PriceSelect type=\"max\" reactSelect />\n\n")),Object(o.b)("h3",{id:"props-3"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"type")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Should be 'min' or 'max'.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"priceConfig")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows setting custom price options and other config (see below)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"reactSelect")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether to use the reac-select library to render a decorated dropdown")))),Object(o.b)("h4",{id:"priceconfig"},Object(o.b)("inlineCode",{parentName:"h4"},"priceConfig")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"priceConfig")," can be used to set custom prices for sales and lettings. You can also include ",Object(o.b)("inlineCode",{parentName:"p"},"lettingsAs: 'pw'")," to display lettings prices as per-week instead of per-month:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<PriceSelect\n  type=\"min\"\n  priceConfig={\n    salesPrices: [1000, 2000, 3000],\n    lettingsPrices: [100, 200, 300],\n    lettingsAs: 'pw',\n  }\n/>\n")),Object(o.b)("h2",{id:"bedroomsselect"},Object(o.b)("inlineCode",{parentName:"h2"},"BedroomsSelect")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"BedroomsSelect")," component will render min or max price select inputs."),Object(o.b)("p",null,"Pass the ",Object(o.b)("inlineCode",{parentName:"p"},"reactSelect")," prop to render a decorated dropdown or omit it to render a normal select."),Object(o.b)("div",{style:{paddingTop:"10px",paddingBottom:"30px"}},Object(o.b)("div",{style:{display:"inline-block",width:"40%",paddingRight:"5%"}},Object(o.b)(N,{type:"min",setSearchField:function(){return null},reactSelect:!0,mdxType:"TESTBedroomsSelect"})),Object(o.b)("div",{style:{display:"inline-block",width:"40%",paddingRight:"5%"}},Object(o.b)(N,{type:"max",setSearchField:function(){return null},reactSelect:!0,mdxType:"TESTBedroomsSelect"}))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { BedroomsSelect } from 'homeflowjs/search';\n\n<BedroomsSelect type=\"min\" reactSelect />\n<BedroomsSelect type=\"max\" reactSelect />\n\n")),Object(o.b)("h3",{id:"props-4"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"type")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Should be 'min' or 'max'.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"bedValues")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"You can override the default options for beds.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"reactSelect")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether to use the reac-select library to render a decorated dropdown")))),Object(o.b)("h2",{id:"genericsearchfield"},Object(o.b)("inlineCode",{parentName:"h2"},"GenericSearchField")),Object(o.b)("p",null,"If you need a form field for which there isn't a component provided, or you need more customisation, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"GenericSearchField")," component."),Object(o.b)("p",null,"By passing a ",Object(o.b)("inlineCode",{parentName:"p"},"type")," prop, you can render either a text ",Object(o.b)("inlineCode",{parentName:"p"},"<input>")," or a ",Object(o.b)("inlineCode",{parentName:"p"},"<select>")," which will be hooked up to the relevant redux state and action (although make sure you only use valid camelCase homeflow search parameters as the ",Object(o.b)("inlineCode",{parentName:"p"},"name"),")."),Object(o.b)("p",null,"This example will render a ",Object(o.b)("inlineCode",{parentName:"p"},"<select>")," field to match properties created in a number of days:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { GenericSearchField } from \'homeflowjs/search\';\n\nconst NewerThanSelect = () => (\n  <GenericSearchField type="select" name="createdAgo">\n    <option value="5">Newer than 5 days</option>\n    <option value="10">Newer than 10 days</option>\n    <option value="15">Newer than 15 days</option>\n  </GenericSearchField>\n)\n')))}F.isMDXComponent=!0}}]);