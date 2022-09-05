(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,j=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.a.createElement(j,o(o({ref:t},b),{},{components:n})):r.a.createElement(j,o({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<l;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),l=(n(0),n(109)),c={id:"articles",title:"Articles"},o={unversionedId:"components/articles",id:"components/articles",isDocsHomePage:!1,title:"Articles",description:"ArticlesGrid",source:"@site/docs/components/articles.mdx",slug:"/components/articles",permalink:"/homeflowjs-docs/docs/components/articles",editUrl:"https://github.com/homeflow/homeflowjs-docs/edit/master/docs/components/articles.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Retrofitting HomeflowJS to Existing Themes",permalink:"/homeflowjs-docs/docs/getting-started/retrofitting"},next:{title:"Branches",permalink:"/homeflowjs-docs/docs/components/branches"}},i=[{value:"<code>ArticlesGrid</code>",id:"articlesgrid",children:[{value:"Props",id:"props",children:[]}]},{value:"<code>LoadMoreButton</code>",id:"loadmorebutton",children:[{value:"Props",id:"props-1",children:[]}]},{value:"<code>TopicSelector</code>",id:"topicselector",children:[{value:"Props",id:"props-2",children:[]}]}],b={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"articlesgrid"},Object(l.b)("inlineCode",{parentName:"h2"},"ArticlesGrid")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"ArticlesGrid")," component should wrap and display all the articles coming from the redux store when on the articles list page."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { ArticlesGrid } from 'homeflowjs/articles'\nimport ArticleCard from './article-card';\n\nconst ParentComponent = () => (\n  <ArticlesGrid \n    gridClass=\"custom-classname\" \n    ArticleItem={({ article }) => (<ArticleCard article={article} />)}\n    noArticlesClass=\"custom-classname\"\n  />\n);\n")),Object(l.b)("h3",{id:"props"},"Props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"gridClass"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"className")," for the wrapper, ",Object(l.b)("strong",{parentName:"td"},"is required"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ArticleItem"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"elementType - isRequired"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Article card component, ",Object(l.b)("strong",{parentName:"td"},"is required"),". ",Object(l.b)("strong",{parentName:"td"},"Must have")," ",Object(l.b)("inlineCode",{parentName:"td"},"article")," as a prop")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"noArticlesClass"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"className")," for the ",Object(l.b)("inlineCode",{parentName:"td"},"div")," containing the message 'No articles found...'")))),Object(l.b)("h2",{id:"loadmorebutton"},Object(l.b)("inlineCode",{parentName:"h2"},"LoadMoreButton")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"LoadMoreButton")," when on the articles list page, will load the next page of articles, show a loader during fetching and hide when error or no more articles to show."),Object(l.b)("p",null,"It requires for the ",Object(l.b)("inlineCode",{parentName:"p"},"_articles_list.ljson")," (the default from Ctesius or the custom one placed in ",Object(l.b)("inlineCode",{parentName:"p"},"views/articles")," ) containing the following code:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ljson"}),"articles :\n{% for article in articles %}\n  -\n    ...\n{% endfor %}\npagination :\n  current_page : {{ pagination.current_page }}\n  has_prev_page : {{ pagination.has_prev_page }}\n  total_count : {{ pagination.total_count }}\n  has_next_page : {{ pagination.has_next_page }}\n  from_record : {{ pagination.from_record }}\n  to_record : {{ pagination.to_record}}\ntopics :\n  ...\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { LoadMoreButton } from \'homeflowjs/articles\'\n\nconst ParentComponent = () => (\n  <LoadMoreButton \n    CustomLoader={() => <LoadingButton variant="primary" className="mx-auto h-13 w-full lg:w-50 max-w-xs lg:mb-4" />}\n    loadMoreButtonClass="custom-classname"\n    loadMoreButtonContainerClass="custom-classname"\n  >\n    <span className="relative top-0.5">Load More</span>\n  </LoadMoreButton>\n);\n')),Object(l.b)("h3",{id:"props-1"},"Props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CustomLoader"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"elementType"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"What will be displayed when loading more articles. Displays default if not privided")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"loadMoreButtonClass"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"className")," for the button")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"loadMoreButtonContainerClass"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"className")," for the parent ",Object(l.b)("inlineCode",{parentName:"td"},"div"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"children"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"node"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"What the button displays inside, ",Object(l.b)("strong",{parentName:"td"},"is required"))))),Object(l.b)("h2",{id:"topicselector"},Object(l.b)("inlineCode",{parentName:"h2"},"TopicSelector")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"TopicSelector")," component will display a list of available topics used by the agent."),Object(l.b)("p",null,"It requires for the ",Object(l.b)("inlineCode",{parentName:"p"},"_articles_list.ljson")," (the default from Ctesius or the custom one placed in ",Object(l.b)("inlineCode",{parentName:"p"},"views/articles")," ) containing the following code:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ljson"}),"articles :\n{% for article in articles %}\n  -\n    ...\n{% endfor %}\npagination :\n  ...\ntopics :\n  current_topic: {{ topic | yaml_safe }}\n  topics_list: \n  {% for available_topic in agency.article_topics %}\n  -\n    {{ available_topic | yaml_safe }}\n  {% endfor %}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { TopicSelector } from \'homeflowjs/articles\'\n\nconst ParentComponent = () => {\n  const topicsData = Homeflow.get(\'articles\')?.topics?.current_topic;\n  return (\n    <TopicSelector\n      containerClass="custom-classname"\n      buttonClassShowTopics="custom-classname"\n      buttonClassHideTopics="custom-classname"\n      listWrapperClass="custom-classname"\n      listAnchorTagClass="custom-classname"\n      ulClass="custom-classname"\n    >\n      <div className="capitalize">\n        {topicsData || \'Select topic\'}\n        <ChevronLeftIcon className="h-5 absolute right-4 duration-300 top-4 transition-all -rotate-90" />\n      </div>\n    </TopicSelector>\n  );\n}\n')),Object(l.b)("p",null,"The variable ",Object(l.b)("inlineCode",{parentName:"p"},"topicsData")," is not required. In this example is used to display the current topic.\nIf removed, update the block: ",Object(l.b)("inlineCode",{parentName:"p"},"{topicsData || 'Select topic'}")),Object(l.b)("h3",{id:"props-2"},"Props"),Object(l.b)("p",null,"Homeflow is now using Tailwind, utility classes can be passed to the component children."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"containerClass"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"className")," for the container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonClassShowTopics"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"className")," for the button when topics are visible")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonClassHideTopics"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"className")," for the button when topics are not visible")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"listWrapperClass"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"className")," for the list wrapper")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ulClass"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"className")," for the ",Object(l.b)("inlineCode",{parentName:"td"},"ul")," listing all the topics")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"listAnchorTagClass"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"className")," for the link to the topic (",Object(l.b)("inlineCode",{parentName:"td"},"a")," inside ",Object(l.b)("inlineCode",{parentName:"td"},"li"),")")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"children"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"node"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"What the component displays inside at all times, ",Object(l.b)("strong",{parentName:"td"},"is required"))))))}s.isMDXComponent=!0}}]);