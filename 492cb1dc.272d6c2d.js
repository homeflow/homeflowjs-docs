(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(6),i=(n(0),n(97)),c={id:"notifications",title:"Notifications"},a={unversionedId:"components/notifications",id:"components/notifications",isDocsHomePage:!1,title:"Notifications",description:"notify",source:"@site/docs/components/notifications.mdx",slug:"/components/notifications",permalink:"/homeflowjs-docs/docs/components/notifications",editUrl:"https://github.com/homeflow/homeflowjs-docs/edit/master/docs/components/notifications.mdx",version:"current",sidebar:"someSidebar",previous:{title:"User Profile",permalink:"/homeflowjs-docs/docs/components/user-profile"},next:{title:"Maps",permalink:"/homeflowjs-docs/docs/components/maps"}},s=[{value:"<code>notify</code>",id:"notify",children:[]}],p={rightToc:s};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"notify"},Object(i.b)("inlineCode",{parentName:"h2"},"notify")),Object(i.b)("p",null,"To render a notification, use the ",Object(i.b)("inlineCode",{parentName:"p"},"notify")," function."),Object(i.b)("p",null,"Pass the message as the first argument, and the type as the second. The type can be ",Object(i.b)("inlineCode",{parentName:"p"},"success")," or ",Object(i.b)("inlineCode",{parentName:"p"},"error"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { notify } from 'homeflowjs';\n\nnotify('Saved property added.', 'success');\n")))}f.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),f=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=f(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=f(n),m=r,d=l["".concat(c,".").concat(m)]||l[m]||u[m]||i;return n?o.a.createElement(d,a(a({ref:t},p),{},{components:n})):o.a.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);