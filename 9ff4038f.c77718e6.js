(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(92)),i={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/"},c={unversionedId:"getting-started/introduction",id:"getting-started/introduction",isDocsHomePage:!1,title:"Introduction",description:"Installation",source:"@site/docs/getting-started/introduction.md",slug:"/",permalink:"/homeflowjs-docs/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Configuration",permalink:"/homeflowjs-docs/docs/getting-started/configuration"}},l=[{value:"Installation",id:"installation",children:[]},{value:"React and Redux",id:"react-and-redux",children:[]}],d={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"If you haven't already cloned the ",Object(o.b)("inlineCode",{parentName:"p"},"theme_boilerplate")," project, do that first. The project already includes the ",Object(o.b)("inlineCode",{parentName:"p"},"homeflowjs")," toolkit and has lots of things already configured to make it easier to create a new theme."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ git clone git@bitbucket.org:homeflow_developers/theme_boilerplate.git\n")),Object(o.b)("p",null,"Ensure you have ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.dev/learn/how-to-install-nodejs"}),"Node JS")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://classic.yarnpkg.com/en/docs/install#debian-stable"}),"Yarn")," installed, then run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn install")," to install dependencies."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," to start Webpack in watch mode."),Object(o.b)("h2",{id:"react-and-redux"},"React and Redux"),Object(o.b)("p",null,"HomeflowJS makes use of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React")," for UI components and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/"}),"Redux")," for managing state. You should ensure ",Object(o.b)("inlineCode",{parentName:"p"},"react"),", ",Object(o.b)("inlineCode",{parentName:"p"},"react-dom"),", ",Object(o.b)("inlineCode",{parentName:"p"},"redux")," and ",Object(o.b)("inlineCode",{parentName:"p"},"react-redux")," are included as dependencies in the theme (if you're using the theme_boilerplate project these should already be included)."),Object(o.b)("p",null,"Please use the links below for documentation on these libraries:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactjs.org/docs/getting-started.html"}),"React")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://redux.js.org/introduction/getting-started"}),"Redux")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://react-redux.js.org/introduction/quick-start"}),"React Redux"))))}u.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),u=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||p[b]||o;return n?a.a.createElement(m,c(c({ref:t},d),{},{components:n})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);