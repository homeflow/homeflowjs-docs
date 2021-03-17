(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),a=(n(0),n(104)),i={id:"optimisation",title:"Optimisation"},c={unversionedId:"getting-started/optimisation",id:"getting-started/optimisation",isDocsHomePage:!1,title:"Optimisation",description:"Code-splitting",source:"@site/docs/getting-started/optimisation.mdx",slug:"/getting-started/optimisation",permalink:"/homeflowjs-docs/docs/getting-started/optimisation",editUrl:"https://github.com/homeflow/homeflowjs-docs/edit/master/docs/getting-started/optimisation.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Redux",permalink:"/homeflowjs-docs/docs/getting-started/redux"},next:{title:"Retrofitting HomeflowJS to Existing Themes",permalink:"/homeflowjs-docs/docs/getting-started/retrofitting"}},s=[{value:"Code-splitting",id:"code-splitting",children:[]},{value:"Lazy-loading",id:"lazy-loading",children:[]},{value:"Tree-shaking",id:"tree-shaking",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"code-splitting"},"Code-splitting"),Object(a.b)("p",null,"See the section on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/homeflowjs-docs/docs/getting-started/entry-points"}),"entry points")," on how to use code-splitting to organise your JavaScript into page-specific bundles (this is probably the most important single optimisation)."),Object(a.b)("h2",{id:"lazy-loading"},"Lazy-loading"),Object(a.b)("p",null,"You can use Webpack's dynamic imports to lazy-load parts of your code that are significant in size or if only required after some kind of user interaction."),Object(a.b)("p",null,"If the element you intend to lazy-load is a React component, you can use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/code-splitting.html#reactlazy"}),Object(a.b)("inlineCode",{parentName:"a"},"React.lazy")),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { Suspense } from 'react';\n\nconst MyComponent = React.lazy(() => import('../my-component'));\n\nconst MyLazyComponent = (props) => (\n  <Suspense fallback={<div>Loading...</div>}>\n    <MyComponent {...props} />\n  </Suspense>\n);\n")),Object(a.b)("p",null,"For more advanced lazy-loading of React components, you can use a library like ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-lazyload"}),Object(a.b)("inlineCode",{parentName:"a"},"react-lazyload")),", which has some more advanced features such as allowing you to load a component only when it is scrolled into view."),Object(a.b)("p",null,"For other JavaScript code, you can use a regular ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/code-splitting.html#import"}),"dynamic import"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import('./math').then(math => {\n  console.log(math.add(16, 26));\n});\n")),Object(a.b)("p",null,"When Webpack compiles your code, it will automatically split the lazy import into it's own bundle and load this asynchronously when required."),Object(a.b)("h2",{id:"tree-shaking"},"Tree-shaking"),Object(a.b)("p",null,"Assuming you have built your theme using the theme_boilerplate, ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://webpack.js.org/guides/tree-shaking/"}),"tree-shaking")," should be enabled for production builds."),Object(a.b)("p",null,"Webpack will remove dead code by analyzing the ",Object(a.b)("inlineCode",{parentName:"p"},"import")," statements in your files."),Object(a.b)("p",null,"Sometimes issues can occur when files have side-effects. You can mark a file as having side-effects by following the instructions ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://webpack.js.org/guides/tree-shaking/"}),"here"),"."))}p.isMDXComponent=!0}}]);