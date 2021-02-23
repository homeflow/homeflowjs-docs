(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return r?o.a.createElement(m,l(l({ref:t},c),{},{components:r})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(100)),i={id:"property-results",title:"Property Results"},l={unversionedId:"components/property-results",id:"components/property-results",isDocsHomePage:!1,title:"Property Results",description:"PropertyResults",source:"@site/docs/components/property-results.mdx",slug:"/components/property-results",permalink:"/homeflowjs-docs/docs/components/property-results",editUrl:"https://github.com/homeflow/homeflowjs-docs/edit/master/docs/components/property-results.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Property Search",permalink:"/homeflowjs-docs/docs/components/property-search"},next:{title:"Modals",permalink:"/homeflowjs-docs/docs/components/modals"}},p=[{value:"<code>PropertyResults</code>",id:"propertyresults",children:[{value:"Props",id:"props",children:[]}]},{value:"<code>LoadMoreButton</code>",id:"loadmorebutton",children:[]},{value:"<code>SavePropertyButton</code>",id:"savepropertybutton",children:[{value:"Props",id:"props-1",children:[]}]},{value:"<code>SortOrderSelect</code>",id:"sortorderselect",children:[{value:"Props",id:"props-2",children:[]}]}],c={rightToc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"propertyresults"},Object(a.b)("inlineCode",{parentName:"h2"},"PropertyResults")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"PropertyResults")," component will render search results to the page."),Object(a.b)("p",null,"It will render each property as one of the item components provided depending on whether the hash is ",Object(a.b)("inlineCode",{parentName:"p"},"#/grid")," or ",Object(a.b)("inlineCode",{parentName:"p"},"#/list"),". These components will receive the ",Object(a.b)("inlineCode",{parentName:"p"},"property")," as a prop."),Object(a.b)("p",null,"You can also specify a ",Object(a.b)("inlineCode",{parentName:"p"},"defaultView")," prop as either 'grid', 'list' or 'map' for that view to be rendered when one of the other hashes isn't present."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { PropertyResults } from 'homeflowjs/properties';\n\n<PropertyResults\n  GridItem={GridItem}\n  ListItem={ListItem}\n  defaultView=\"grid\"\n  infiniteScroll\n/>\n")),Object(a.b)("h3",{id:"props"},"Props"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GridItem")," - Component to render for each property in ",Object(a.b)("inlineCode",{parentName:"li"},"grid")," view. Default is ",Object(a.b)("inlineCode",{parentName:"li"},"null"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ListItem")," - Component to render for each property in ",Object(a.b)("inlineCode",{parentName:"li"},"list")," view. Default is ",Object(a.b)("inlineCode",{parentName:"li"},"null"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"defaultView")," - The default view to display when no hash is present. Default is ",Object(a.b)("inlineCode",{parentName:"li"},"list"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"infiniteScroll")," enables infinite scroll (automatically loading the next page of results when the user scrolls to the bottom of the results container). Default is ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"noMap")," - pass this if you do not want the ",Object(a.b)("inlineCode",{parentName:"li"},"PropertyResults")," component to include a map view (in case you want to render the map separately).")),Object(a.b)("h2",{id:"loadmorebutton"},Object(a.b)("inlineCode",{parentName:"h2"},"LoadMoreButton")),Object(a.b)("p",null,"If you wish to control pagination asynchronously using a button, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"LoadMoreButton")," component. It will automatically disappear once there are no more properties to render."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { LoadMoreButton } from 'homeflowjs/properties';\n\n<LoadMoreButton className=\"load-more-button\">\n  Load more properties\n</LoadMoreButton>\n")),Object(a.b)("h2",{id:"savepropertybutton"},Object(a.b)("inlineCode",{parentName:"h2"},"SavePropertyButton")),Object(a.b)("p",null,"Button to add/remove a property from the user's saved properties."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import { SavePropertyButton } from \'homeflowjs/properties\';\n\n<SavePropertyButton\n  className="fav-link"\n  propertyId={property.property_id}\n  UnsavedComponent={<i className="far fa-heart" />}\n  SavedComponent={<i className="fas fa-heart" />}\n/>\n')),Object(a.b)("h3",{id:"props-1"},"Props"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"propertyId")," - The ID of the property."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"UnsavedComponent")," - component or JSX to render when the property is not currently saved."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"SavedComponent")," - component or JSX to render when the property is saved.")),Object(a.b)("h2",{id:"sortorderselect"},Object(a.b)("inlineCode",{parentName:"h2"},"SortOrderSelect")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import { SortOrderSelect } from \'homeflowjs/properties\';\n\n<SortOrderSelect reactSelect>\n  <option value="most-expensive-first">\n    Price high &gt; low\n  </option>\n  <option value="least-expensive-first">\n    Price low &gt; high\n  </option>\n  <option value="most-recent-first">\n    Most recent first\n  </option>\n  <option value="most-recently-updated-first">\n    Most recently updated first\n  </option>\n</SortOrderSelect>\n')),Object(a.b)("h3",{id:"props-2"},"Props"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"reactSelect")," - renders a decorated dropdown instead of a regular ",Object(a.b)("inlineCode",{parentName:"li"},"<select>")," if present."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"defaultSort")," - The default sort order.")))}s.isMDXComponent=!0}}]);