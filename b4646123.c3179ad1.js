(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),i=(r(0),r(94)),a={id:"retrofitting",title:"Retrofitting HomeflowJS to Existing Themes",sidebar_label:"Retrofitting"},c={unversionedId:"getting-started/retrofitting",id:"getting-started/retrofitting",isDocsHomePage:!1,title:"Retrofitting HomeflowJS to Existing Themes",description:"If you are adding HomeflowJS to an existing theme you'll need to install it, as well as its peer dependencies:",source:"@site/docs/getting-started/retrofitting.mdx",slug:"/getting-started/retrofitting",permalink:"/homeflowjs-docs/docs/getting-started/retrofitting",editUrl:"https://github.com/homeflow/homeflowjs-docs/edit/master/docs/getting-started/retrofitting.mdx",version:"current",sidebar_label:"Retrofitting",sidebar:"someSidebar",previous:{title:"Optimization",permalink:"/homeflowjs-docs/docs/getting-started/optimization"},next:{title:"Property Search",permalink:"/homeflowjs-docs/docs/components/property-search"}},l=[],p={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you are adding HomeflowJS to an existing theme you'll need to install it, as well as its peer dependencies:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ yarn add homeflowjs react react-dom redux react-redux react-router-dom\n")),Object(i.b)("p",null,"You should then copy across the ",Object(i.b)("inlineCode",{parentName:"p"},"webpack/")," directory from the theme_boilerplate project here:"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://bitbucket.org/homeflow_developers/theme_boilerplate/src/d5523db6f67cb5a405494a9af4c928b5659a93f4/webpack/"}),"Theme boilerplate Webpack directory")),Object(i.b)("p",null,"Ensure you have a ",Object(i.b)("inlineCode",{parentName:"p"},"src/")," directory containing an ",Object(i.b)("inlineCode",{parentName:"p"},"entries/")," directory."))}s.isMDXComponent=!0},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,b=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return r?o.a.createElement(b,c(c({ref:t},p),{},{components:r})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);