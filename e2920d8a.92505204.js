(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(92)),c={id:"redux",title:"Redux",sidebar_label:"Redux"},i={unversionedId:"getting-started/redux",id:"getting-started/redux",isDocsHomePage:!1,title:"Redux",description:"HomeflowJS uses Redux to manage state.",source:"@site/docs/getting-started/redux.md",slug:"/getting-started/redux",permalink:"/homeflowjs-docs/docs/getting-started/redux",editUrl:"https://github.com/homeflow/homeflowjs-docs/edit/master/docs/docs/getting-started/redux.md",version:"current",sidebar_label:"Redux",sidebar:"someSidebar",previous:{title:"Entry Points",permalink:"/homeflowjs-docs/docs/getting-started/entry-points"},next:{title:"Retrofitting HomeflowJS to Existing Themes",permalink:"/homeflowjs-docs/docs/getting-started/retrofitting"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"HomeflowJS uses Redux to manage state."),Object(a.b)("p",null,"You should wrap any top-level components in the ",Object(a.b)("inlineCode",{parentName:"p"},"withHomeflowState")," HOC before rendering them:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { withHomeflowState } from 'homeflowjs';\nimport SearchForm from '../js/components/search-form';\n\nReactDOM.render(\n  withHomeflowState(SearchForm),\n  document.getElementById('property-search-form'),\n);\n")),Object(a.b)("p",null,"This will connect them to the various state and actions provided by HomeflowJS to allow them to be updated automatically. You only need a single ",Object(a.b)("inlineCode",{parentName:"p"},"withHomeflowState")," on the top-level of whatever you are rendering, so if you're rendering a whole page using React, you can simply wrap your top-level component, e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"withHomeflowState(MyPage)"),", and any children will be connected to the Redux store."),Object(a.b)("p",null,"If you need to dispatch an action programmatically, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"HomeflowDispatch"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { HomeflowDispatch } from 'homeflowjs';\n\nHomeflowDispatch.search.setSearchField({ placeId: 'abc123' });\n")))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);