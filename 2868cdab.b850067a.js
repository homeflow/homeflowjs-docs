(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=o,m=p["".concat(l,".").concat(b)]||p[b]||f[b]||a;return r?n.a.createElement(m,c(c({ref:t},i),{},{components:r})):n.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var o=r(2),n=r(6),a=(r(0),r(109)),l={slug:"welcome",title:"Welcome",author:"Yangshun Tay",author_title:"Front End Engineer @ Facebook",author_url:"https://github.com/yangshun",author_image_url:"https://avatars0.githubusercontent.com/u/1315101?s=400&v=4",tags:["facebook","hello","docusaurus"]},c={permalink:"/homeflowjs-docs/blog/welcome",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2019-05-30-welcome.md",source:"@site/blog/2019-05-30-welcome.md",description:"Blog features are powered by the blog plugin. Simply add files to the blog directory. It supports tags as well!",date:"2019-05-30T00:00:00.000Z",tags:[{label:"facebook",permalink:"/homeflowjs-docs/blog/tags/facebook"},{label:"hello",permalink:"/homeflowjs-docs/blog/tags/hello"},{label:"docusaurus",permalink:"/homeflowjs-docs/blog/tags/docusaurus"}],title:"Welcome",readingTime:.175,truncated:!1,nextItem:{title:"Hello",permalink:"/homeflowjs-docs/blog/hello-world"}},u=[],i={rightToc:u};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Blog features are powered by the blog plugin. Simply add files to the ",Object(a.b)("inlineCode",{parentName:"p"},"blog")," directory. It supports tags as well!"),Object(a.b)("p",null,"Delete the whole directory if you don't want the blog features. As simple as that!"))}s.isMDXComponent=!0}}]);