(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(92)),c={id:"redux",title:"Redux",sidebar_label:"Redux"},i={unversionedId:"getting-started/redux",id:"getting-started/redux",isDocsHomePage:!1,title:"Redux",description:"HomeflowJS uses Redux to manage state.",source:"@site/docs/getting-started/redux.md",slug:"/getting-started/redux",permalink:"/homeflowjs-docs/docs/getting-started/redux",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started/redux.md",version:"current",sidebar_label:"Redux",sidebar:"someSidebar",previous:{title:"Entry Points",permalink:"/homeflowjs-docs/docs/getting-started/entry-points"},next:{title:"Property Search",permalink:"/homeflowjs-docs/docs/components/property-search"}},l=[],p={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"HomeflowJS uses Redux to manage state."),Object(a.b)("p",null,"You should wrap any top-level components in the ",Object(a.b)("inlineCode",{parentName:"p"},"withHomeflowState")," HOC before rendering them:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { withHomeflowState } from 'homeflowjs';\nimport SearchForm from '../js/components/search-form';\n\nReactDOM.render(\n  withHomeflowState(SearchForm),\n  document.getElementById('property-search-form'),\n);\n")),Object(a.b)("p",null,"This will connect them to the various state and actions provided by HomeflowJS to allow them to be updated automatically. You only need a single ",Object(a.b)("inlineCode",{parentName:"p"},"withHomeflowState")," on the top-level of whatever you are rendering, so if you're rendering a whole page using React, you can simply wrap your top-level component, e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"withHomeflowState(MyPage)"),", and any children will be connected to the Redux store."),Object(a.b)("p",null,"If you need to dispatch an action programmatically, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"HomeflowDispatch"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { HomeflowDispatch } from 'homeflowjs';\n\nHomeflowDispatch.search.setSearchField({ placeId: 'abc123' });\n")))}s.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?o.a.createElement(f,i(i({ref:t},p),{},{components:r})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);