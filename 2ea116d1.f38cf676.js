(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{64:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return u})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(2),o=r(6),i=(r(0),r(94)),s=r(98),a={id:"user-profile",title:"User Profile"},u={unversionedId:"components/user-profile",id:"components/user-profile",isDocsHomePage:!1,title:"User Profile",description:"Default",source:"@site/docs/components/user-profile.mdx",slug:"/components/user-profile",permalink:"/homeflowjs-docs/docs/components/user-profile",editUrl:"https://github.com/homeflow/homeflowjs-docs/edit/master/docs/components/user-profile.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Modals",permalink:"/homeflowjs-docs/docs/components/modals"}},c=[{value:"Default",id:"default",children:[]},{value:"<code>UserRegisterForm</code>",id:"userregisterform",children:[]},{value:"<code>UserInput</code>",id:"userinput",children:[]},{value:"<code>UserSignInForm</code>",id:"usersigninform",children:[]},{value:"<code>UserEditForm</code>",id:"usereditform",children:[]}],l={rightToc:c};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"default"},"Default"),Object(i.b)("p",null,"HomeflowJS includes a default user profile modal to allow users to register, sign in, and manage their saved properties and searches. It has a fixed layout, but can be styled to fit the theme using CSS."),Object(i.b)("p",null,"To include it, simply pass ",Object(i.b)("inlineCode",{parentName:"p"},"withDefaultUserProfile")," as a prop to the ",Object(i.b)("inlineCode",{parentName:"p"},"Modal")," component:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"import { Modal } from 'homeflowjs';\n\n<Modal withDefaultUserProfile />\n")),Object(i.b)("p",null,"This will create routes to render the below modal for any fragment identifier beginning with ",Object(i.b)("inlineCode",{parentName:"p"},"#/user"),"."),Object(i.b)("img",{alt:"Default user profile",src:Object(s.a)("img/default-user-profile.png")}),Object(i.b)("p",null,"See the section on ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/homeflowjs-docs/docs/components/modals"}),"modals")," for more info."),Object(i.b)("p",null,"The default user profile modal can be customised using CSS, but if you need more flexibility in creating user profile elements, you can use the components below."),Object(i.b)("h2",{id:"userregisterform"},Object(i.b)("inlineCode",{parentName:"h2"},"UserRegisterForm")),Object(i.b)("p",null,"Wraps all fields of your register form and handles validation and creation of new user on submit."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"import { UserRegisterForm } from 'homeflowjs/user';\n\nconst RegisterForm = () => (\n  <UserRegisterForm>\n    {/* user fields and other JSX goes here */}\n\n    <button type=\"submit\">Register</button>\n  </UserRegisterForm>\n);\n")),Object(i.b)("h2",{id:"userinput"},Object(i.b)("inlineCode",{parentName:"h2"},"UserInput")),Object(i.b)("p",null,"Creates an input for creating or editing a user field."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'import { UserRegisterForm, UserInput } from \'homeflowjs/user\';\n\nconst RegisterForm = () => (\n  <UserRegisterForm>\n    <UserInput name="first_name" />\n    <UserInput name="last_name" />\n    <UserInput name="email" required />\n    <UserInput name="password" required />\n    <UserInput name="password_confirmation" required />\n\n    <button type="submit">Register</button>\n  </UserRegisterForm>\n);\n')),Object(i.b)("h2",{id:"usersigninform"},Object(i.b)("inlineCode",{parentName:"h2"},"UserSignInForm")),Object(i.b)("p",null,"Form for logging a user in. Should be used with ",Object(i.b)("inlineCode",{parentName:"p"},"SignInInput")," components."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'import { UserSignInForm, SignInInput } from \'homeflowjs/user\';\n\nconst SignInForm = () => (\n  <UserSignInForm>\n    <label>Email</label>\n    <SignInInput name="email" required />\n\n    <label>Password</label>\n    <SignInInput name="password" required />\n\n    <button type="submit">Sign In</button>\n  </UserSignInForm>\n)\n')),Object(i.b)("h2",{id:"usereditform"},Object(i.b)("inlineCode",{parentName:"h2"},"UserEditForm")),Object(i.b)("p",null,"Form to allow a user to edit their profile."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'import { UserEditForm, UserInput } from \'homeflowjs/user\';\n\nconst SignInForm = () => (\n  <UserEditForm>\n    <UserInput name="first_name" />\n    <UserInput name="last_name" />\n    {/* etc */}\n\n    <button type="submit">Update</button>\n  </UserEditForm>\n)\n')))}p.isMDXComponent=!0},94:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var n=o.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=t,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?o.a.createElement(b,a(a({ref:n},c),{},{components:r})):o.a.createElement(b,a({ref:n},c))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:t,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95:function(e,n,r){"use strict";var t=r(0),o=r(21);n.a=function(){const e=Object(t.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},98:function(e,n,r){"use strict";r.d(n,"b",(function(){return i})),r.d(n,"a",(function(){return s}));var t=r(95),o=r(99);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(t.a)();return{withBaseUrl:(r,t)=>function(e,n,r,{forcePrependBaseUrl:t=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(t)return n+r;const s=r.startsWith(n)?r:n+r.replace(/^\//,"");return i?e+s:s}(n,e,r,t)}}function s(e,n={}){const{withBaseUrl:r}=i();return r(e,n)}},99:function(e,n,r){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!t(e)}r.d(n,"b",(function(){return t})),r.d(n,"a",(function(){return o}))}}]);