(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=b(a),d=n,u=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return a?r.a.createElement(u,l(l({ref:t},c),{},{components:a})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var c=2;c<o;c++)p[c]=a[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(109)),p={id:"maps",title:"Maps"},l={unversionedId:"components/maps",id:"components/maps",isDocsHomePage:!1,title:"Maps",description:"When rendering HomeflowJS map elements into DOM nodes, remember to set a height on the container DOM node or the map will not be visible.",source:"@site/docs/components/maps.mdx",slug:"/components/maps",permalink:"/homeflowjs-docs/docs/components/maps",editUrl:"https://github.com/homeflow/homeflowjs-docs/edit/master/docs/components/maps.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Notifications",permalink:"/homeflowjs-docs/docs/components/notifications"},next:{title:"Hooks",permalink:"/homeflowjs-docs/docs/hooks"}},i=[{value:"Property Results Map",id:"property-results-map",children:[]},{value:"<code>PropertyMap</code>",id:"propertymap",children:[]},{value:"<code>PropertyStreetview</code>",id:"propertystreetview",children:[]},{value:"<code>BranchesMap</code>",id:"branchesmap",children:[]},{value:"<code>BranchMap</code>",id:"branchmap",children:[]}],c={rightToc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When rendering HomeflowJS map elements into DOM nodes, remember to set a ",Object(o.b)("inlineCode",{parentName:"p"},"height")," on the container DOM node or the map will not be visible."))),Object(o.b)("h2",{id:"property-results-map"},"Property Results Map"),Object(o.b)("p",null,"The property results map will be included by default with the ",Object(o.b)("inlineCode",{parentName:"p"},"PropertyResults")," component, on the route ",Object(o.b)("inlineCode",{parentName:"p"},"#/map"),"."),Object(o.b)("p",null,"If you wish to render the map separately (like if you want to render the map and results side-by-side), pass the ",Object(o.b)("inlineCode",{parentName:"p"},"noMap")," prop to ",Object(o.b)("inlineCode",{parentName:"p"},"PropertyResults")," and render the ",Object(o.b)("inlineCode",{parentName:"p"},"PropertiesMap")," yourself:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { PropertiesMap } from 'homeflowjs/properties';\n\nconst myPropertiesMap = () => (\n  <PropertiesMap />\n);\n")),Object(o.b)("p",null,"Whether you render the map yourself or let ",Object(o.b)("inlineCode",{parentName:"p"},"PropertyResults")," do so, you ",Object(o.b)("em",{parentName:"p"},"must")," define a template with an id of ",Object(o.b)("inlineCode",{parentName:"p"},"property-map-popup-template")," somewhere in your markup for Leaflet to use as a popup when a property marker is clicked."),Object(o.b)("p",null,"As much of the code for the property results map depends on older libraries and legacy JS, this template uses ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://lodash.com/docs/4.17.15#template"}),"lodash.template")," instead of React."),Object(o.b)("p",null,"Here is a simple example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script id="property-map-popup-template" type="text/template">\n  <p>\n    <img style="width:120px;" src="<%= property.photo %>" />\n    <br/>\n    <% if (property.bedrooms) { %>\n      <%= property.bedrooms %> bed -\n    <% } %>\n    <%= property.price %> <br/>\n    <a href="<%= property.property_url %>"><%= property.display_address %></a>\n  </p>\n<\/script>\n')),Object(o.b)("p",null,"You can optionally set the type of layer to use on the Leaflet map. The default is the normal leaflet map layer, but you can pass the string ",Object(o.b)("inlineCode",{parentName:"p"},"google")," to use the google maps layer:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Homeflow.set('leaflet_layer', 'google');\n")),Object(o.b)("p",null,"If you use ",Object(o.b)("inlineCode",{parentName:"p"},"google"),", make sure the agency has a ",Object(o.b)("inlineCode",{parentName:"p"},"google_maps_api_key")," set up in their admin area."),Object(o.b)("p",null,"If you need to render a custom layer, you can instead pass a callback function (it's important you pass this as a function that ",Object(o.b)("em",{parentName:"p"},"returns")," the tile layer instead of trying to pass the L.tileLayer object itself):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Homeflow.set('leaflet_layer', function() {\n  return new L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en', {\n      maxZoom: 20,\n      subdomains:['mt0','mt1','mt2','mt3']\n  })\n});\n")),Object(o.b)("h2",{id:"propertymap"},Object(o.b)("inlineCode",{parentName:"h2"},"PropertyMap")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"PropertyMap")," component will render a map for a single property on the property show page."),Object(o.b)("p",null,"By default it will render a leaflet map. Pass the prop ",Object(o.b)("inlineCode",{parentName:"p"},"google")," to render a Google map instead (ensure the agent has a ",Object(o.b)("inlineCode",{parentName:"p"},"google_maps_api_key")," set in admin if you use this)."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { withHomeflowState } from 'homeflowjs';\nimport { PropertyMap } from 'homeflowjs/properties';\n\nReactDOM.render(\n  withHomeflowState(PropertyMap),\n  document.getElementById('property-map'),\n);\n")),Object(o.b)("p",null,"Leaflet property map zoom level is defaulted to 100.\nYou can set it to the agency property zoom level (editable in ",Object(o.b)("em",{parentName:"p"},"exampleagency.homeflow.co.uk/configure/website/appearance/preferences")," -> Zoom on property maps) by adding to your ",Object(o.b)("inlineCode",{parentName:"p"},"views/properties/_show.ljson")," file the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"agency_zoom_level: {{ agency.preferences.google_maps_property_zoom_level | yaml_safe }}\n")),Object(o.b)("p",null,"Leaflet map markers assume a default anchor position of the top left corner of the icon, which can make most marker icons appear offset whilst zooming. An anchor position of ",Object(o.b)("inlineCode",{parentName:"p"},"[12, 41]")," has been applied for the\ndefault marker icon (anchoring at the center bottom point of the marker). "),Object(o.b)("p",null,"If using a custom marker icon this value may need to be updated depending on the dimensions and shape of the custom icon. This can be done by adding to your ",Object(o.b)("inlineCode",{parentName:"p"},"views/properties/show.liquid")," the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<script>\n  Homeflow.set('custom_map_icon_anchor', [<x-coord>, <y-coord>]);\n<\/script>\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"google ")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Use Google Maps instead of Leaflet to render the map.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"custom")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Pass "simple_bw" to render a simplified grayscale google map.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"CustomPopup")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Component"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Component to render as a popup when marker is clicked")))),Object(o.b)("p",null,"How to add a popup to the Property Map depends on whether it is a google map or leaflet map.\nUnlike the Property Results Map, which renders a react leaflet map with a google tile layer if the ",Object(o.b)("inlineCode",{parentName:"p"},"google")," prop is included,\nthe Property Map uses the google maps API to render a map in vanilla Javascript if the ",Object(o.b)("inlineCode",{parentName:"p"},"google")," prop is included,\nso each requires a different approach."),Object(o.b)("p",null,"If a leaflet map is rendered you can simply pass a React component as the ",Object(o.b)("inlineCode",{parentName:"p"},"CustomPopup")," prop, similar to what is done in the Branches Map.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"CustomPopup")," will receieve the property as a prop."),Object(o.b)("p",null,"If a google map is rendered you will need to add a template script to the theme with an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," of ",Object(o.b)("inlineCode",{parentName:"p"},"property-show-map-popup-template"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script id="property-show-map-popup-template" type="text/template">\n  <div class="relative flex flex-col w-[179px] h-[292px]">\n    <a class="absolute -top-3.5 -left-[20.5px] w-[220px] h-[146px]" href="{{ property.property_url }}" target="_blank">\n      <img class="object-cover w-full h-full cursor-pointer" src="{{ property.main_photo | url_for_generic_image: \'300x_\' }}" alt="Property in {{ property.display_address }}" />\n    </a>\n    <div class="absolute top-0.5 -right-[4.5px] w-4 h-4">\n      <div class="js-save-property-heart-button" data-property-id="{{ property.property_id }}"></div>\n    </div>\n    <div class="mt-[132px] w-full h-[124px] text-center font-main-sans-light text-button-primary">\n      <h2 class="text-[11px] tracking-widest uppercase text-accent mt-2.5 mb-0 font-lemonmilk_medium">{{ property.status }}</h2>\n      <h2 class="mt-2 mb-0 text-base font-lemonmilk_medium">{{ property.road_name }}</h2>\n      <h3 class="text-sm mt-0.5 mb-0">{{ property.address_sans_road_name }}</h3>\n      <h4 class="mt-3 mb-0 text-xs lowercase">\n        <span class="uppercase font-lemonmilk_regular">{{ property.price_heading }}</span>\n        {{ property.currency }}{{ property.price_without_qualifier }}\n      </h4>\n    </div>\n  </div>\n<\/script>\n')),Object(o.b)("p",null,"This can either be added directly to ",Object(o.b)("inlineCode",{parentName:"p"},"/views/properties/_show.liquid")," or can be added to its own liquid partial, which\ncan then be included in ",Object(o.b)("inlineCode",{parentName:"p"},"/views/properties/_show.liquid"),".\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"innerHTML")," of this script will be passed to the google map and attached to the marker. Note that you will need to use liquid\nto generate dynamic property data."),Object(o.b)("h2",{id:"propertystreetview"},Object(o.b)("inlineCode",{parentName:"h2"},"PropertyStreetview")),Object(o.b)("p",null,"Renders a google streetview element for the property."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { withHomeflowState } from 'homeflowjs';\nimport { PropertyStreetview } from 'homeflowjs/properties';\n\nReactDOM.render(\n  withHomeflowState(PropertyStreetview),\n  document.getElementById('property-streetview'),\n);\n")),Object(o.b)("h2",{id:"branchesmap"},Object(o.b)("inlineCode",{parentName:"h2"},"BranchesMap")),Object(o.b)("p",null,"Renders a leaflet map of the agency's branch locations for the branches index page. Optionally pass a ",Object(o.b)("inlineCode",{parentName:"p"},"CustomPopup")," component as a prop to use this when a marker is clicked instead of the default. The ",Object(o.b)("inlineCode",{parentName:"p"},"CustomPopup")," will receive the branch as a prop."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { BranchesMap } from 'homeflowjs/branches';\n\nconst MyCustomPopup = () => (\n  <div className=\"hfjs-branch-marker-popup\">\n    <h2>{branch.name}</h2>\n    <p>{branch.address}</p>\n\n    {branch.sales_enabled && (\n      <a href={`${branch.branch_url}/sales`}>View all properties for sale &gt;</a>\n    )}\n\n    <br />\n\n    {branch.lettings_enabled && (\n      <a href={`${branch.branch_url}/lettings`}>View all properties to let &gt;</a>\n    )}\n  </div>\n);\n\nconst MyBranchesMap = () => (\n  <BranchesMap CustomPopup={CustomPopup} />\n);\n")),Object(o.b)("p",null,"You can override the default icon by passing an ",Object(o.b)("inlineCode",{parentName:"p"},"iconConfig")," prop. The shape of the object should match the example in the Leaflet docs: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://leafletjs.com/reference.html#icon"}),"https://leafletjs.com/reference.html#icon")),Object(o.b)("p",null,"The default iconConfig looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"{\n  iconRetinaUrl: '/assets/marker-icon.png',\n  iconUrl: '/assets/marker-icon.png',\n  shadowUrl: '/assets/marker-shadow.png',\n}\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"CustomPopup")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Component"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Component to render as a popup when markers are clicked")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"google ")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Use a Google map layer on top of the Leaflet map (requires Google API key to be set)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"iconConfig ")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pass a custom object to be passed to Leaflet Icon")))),Object(o.b)("h2",{id:"branchmap"},Object(o.b)("inlineCode",{parentName:"h2"},"BranchMap")),Object(o.b)("p",null,"Render a map for a single Branch on the Branch show page."),Object(o.b)("p",null,"By default it will render a Leaflet map. Pass the prop ",Object(o.b)("inlineCode",{parentName:"p"},"google")," to render a Google map instead (ensure the agent has a ",Object(o.b)("inlineCode",{parentName:"p"},"google_maps_api_key")," set in admin if you use this)."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { withHomeflowState } from 'homeflowjs';\nimport { BranchMap } from 'homeflowjs/branches';\n\nReactDOM.render(\n  withHomeflowState(BranchMap),\n  document.getElementById('branch-map'),\n);\n")),Object(o.b)("p",null,"You can override the default icon by passing an ",Object(o.b)("inlineCode",{parentName:"p"},"iconConfig")," prop as described for the BranchesMap component above."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"google ")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Use Google Maps instead of Leaflet to render the map.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"custom")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Pass "simple_bw" to render a simplified grayscale google map.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"iconConfig ")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pass a custom object to be passed to Leaflet Icon")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"CustomPopup ")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Component"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Component to render as a popup when marker is clicked")))),Object(o.b)("p",null,"Similar to the Property Map, the Branch Map uses the google maps Javascript API to render a google map,\nso rendering a popup will require different implementations depending on whether a leaflet or google map is displayed."),Object(o.b)("p",null,"If a leaflet map is rendered you can simply pass a React component as the ",Object(o.b)("inlineCode",{parentName:"p"},"CustomPopup")," prop, similar to what is done in the Branches Map.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"CustomPopup")," will receive the branch as a prop."),Object(o.b)("p",null,"If a google map is rendered you will need to add a template script to the theme with an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," of ",Object(o.b)("inlineCode",{parentName:"p"},"branch-map-popup-template"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script id="branch-map-popup-template" type="text/template">\n  <div class="w-96 shadow-lg rounded-lg py-3 px-5 bg-white flex flex-col items-center justify-center p-2">\n    <h6 class="text-lg text-center uppercase font-lemonmilk_regular">\n      {{ branch.name }}\n    </h6>\n    <p class="text-base text-center">\n      {{ branch.address_with_commas | split: \',\' | first }}\n    </p>\n    <a\n      class="text-base font-light text-primary"\n      href="tel:{{ branch.contact_number }}"\n    >\n      {{ branch.contact_number }}\n    </a>\n    <a\n      href="{{ branch.branch_url }}"\n      class="text-base underline text-primary"\n    >\n      View More\n    </a>\n    <div class="flex w-full mt-4 mb-1 justify-center">\n      <a class="mx-2 text-primary" href="{{ branch.branch_url }}/sales">View properties for sale</a>\n      <br />\n      <a class="mx-2 text-primary" href="{{ branch.branch_url }}/lettings">View properties to let</a>\n    </div>\n  </div>\n<\/script>\n')),Object(o.b)("p",null,"This can either be added directly to ",Object(o.b)("inlineCode",{parentName:"p"},"/views/branches/_show.liquid")," or can be added to its own liquid partial, which\ncan then be included in ",Object(o.b)("inlineCode",{parentName:"p"},"/views/branches/_show.liquid"),".\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"innerHTML")," of this script will be passed to the google map and attached to the marker. Note that you will need to use liquid\nto generate dynamic branch data."))}b.isMDXComponent=!0}}]);