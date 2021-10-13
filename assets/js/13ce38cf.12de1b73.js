"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[645],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),k=a,m=u["".concat(d,".").concat(k)]||u[k]||i[k]||o;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6468:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],p={sidebar_position:3},d=void 0,s={unversionedId:"Webpack/loader",id:"Webpack/loader",isDocsHomePage:!1,title:"loader",description:"webpack \u53ea\u80fd\u7406\u89e3 JavaScript \u548c JSON \u6587\u4ef6\u3002loader\u8ba9 webpack \u80fd\u591f\u53bb\u5904\u7406\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u4ee5\u53ca\u88ab\u6dfb\u52a0\u5230\u4f9d\u8d56\u56fe\u4e2d\u3002",source:"@site/docs/Webpack/loader.md",sourceDirName:"Webpack",slug:"/Webpack/loader",permalink:"/blog/docs/Webpack/loader",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Webpack/loader.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"webpack-dev-server",permalink:"/blog/docs/Webpack/webpack-dev-server"},next:{title:"plugin",permalink:"/blog/docs/Webpack/plugin"}},c=[{value:"\u540c\u6b65 loader \u548c\u5f02\u6b65 loader",id:"\u540c\u6b65-loader-\u548c\u5f02\u6b65-loader",children:[{value:"\u540c\u6b65 loader",id:"\u540c\u6b65-loader",children:[]},{value:"\u5f02\u6b65 loader",id:"\u5f02\u6b65-loader",children:[]}]},{value:"\u624b\u5199 loader",id:"\u624b\u5199-loader",children:[{value:"babel-loader",id:"babel-loader",children:[]},{value:"markdown-loader",id:"markdown-loader",children:[]}]}],i={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"webpack \u53ea\u80fd\u7406\u89e3 JavaScript \u548c JSON \u6587\u4ef6\u3002",(0,o.kt)("strong",{parentName:"p"},"loader"),"\u8ba9 webpack \u80fd\u591f\u53bb\u5904\u7406\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u4ee5\u53ca\u88ab\u6dfb\u52a0\u5230\u4f9d\u8d56\u56fe\u4e2d\u3002")),(0,o.kt)("p",null,"\u6211\u4eec\u7684 loader \u4e3b\u8981\u901a\u8fc7\u4e24\u4e2a\u5c5e\u6027\u6765\u8ba9\u6211\u4eec\u7684 webpack \u8fdb\u884c\u8054\u52a8\u8bc6\u522b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"test \u5c5e\u6027\uff0c\u8bc6\u522b\u51fa\u54ea\u4e9b\u6587\u4ef6\u4f1a\u88ab\u8f6c\u6362\u3002"),(0,o.kt)("li",{parentName:"ul"},"use \u5c5e\u6027\uff0c\u5b9a\u4e49\u51fa\u5728\u8fdb\u884c\u8f6c\u6362\u65f6\uff0c\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a loader\u3002")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"module.rules"),"\u6570\u7ec4\u5141\u8bb8\u4f60\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack")," \u914d\u7f6e\u4e2d\u6307\u5b9a\u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"\u5bf9\u8c61\uff1atest \u5c5e\u6027 \u3001use \u5c5e\u6027\uff08\u4e00\u822c\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"\u7684\u5b57\u7b26\u4e32\u6570\u7ec4\uff09\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e0d\u8fc7\u4e00\u822c loader \u6709\u56db\u79cd\u5199\u6cd5\uff1a"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'loader: "css-loader"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'use: [ "css-loader" ]')," ",(0,o.kt)("strong",{parentName:"li"},"// \u901a\u5e38\u662f\u8fd9\u79cd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'use: [ {loader: "css-loader", options:{}}, {loader: ""} ] ')," ",(0,o.kt)("strong",{parentName:"li"},"\u4e00\u822c\u4f1a\u5e26\u6709\u914d\u7f6e\u9879")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'uae: {loader: "",options: {}}')," ",(0,o.kt)("strong",{parentName:"li"},"\u5355\u4e2aloader")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// webpack.config.js\n\nmodule.exports = {\n  // ...\n  module: {\n    rules: [\n      {\n        /**`\n         * test: \u5339\u914d\u8981\u8f6c\u6362\u7684\u6587\u4ef6\u7c7b\u578b\n         * use: \u5bf9\u547d\u4e2d\u7684\u6a21\u5757\u4f7f\u7528\u5177\u4f53\u7684loader\u4ee5\u53ca\u914d\u7f6eloader\n         */\n        test: /\\.css$/i,\n        use: [""],\n      },\n      {\n        test: \u6b63\u5219\u8868\u8fbe\u5f0f,\n        use: [\n          "",\n          {\n            loader: "",\n            options: {},\n          },\n        ],\n      },\n    ],\n  },\n};\n')),(0,o.kt)("h1",{id:"\u81ea\u5b9a\u4e49-loader"},"\u81ea\u5b9a\u4e49 loader"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"\u672c\u8d28\u5c31\u662f\u4e00\u4e2a\u5bfc\u51fa\u4e3a\u51fd\u6570\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"JS"),"\u6a21\u5757\u3002"),(0,o.kt)("p",null,"\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"\u53ea\u4f1a\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"content"),"\uff1a\u8d44\u6e90\u6587\u4ef6\u7684\u5185\u5bb9\uff08\u5b57\u7b26\u4e32\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"content"),"\u5c31\u662f\u6211\u4eec",(0,o.kt)("inlineCode",{parentName:"strong"},"test"),"\u5339\u914d\u5230\u7684\u8d44\u6e90\u6587\u4ef6\u7684\u5185\u5bb9")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (content) {\n  console.log(content);\n  // \u8fd4\u56de\u503c\u5c31\u662f\u6700\u7ec8\u88ab\u6253\u5305\u7684\u5185\u5bb9\u3001\u5c06\u8fd9\u4e00\u4e2aloader\u4ea7\u751f\u7684\u7ed3\u679c\u6216\u8005\u8d44\u6e90\u6587\u4ef6\u4f5c\u4e3a\u4e0b\u4e00\u4e2aloader\u7684content;\n  return content;\n};\n")),(0,o.kt)("h2",{id:"\u540c\u6b65-loader-\u548c\u5f02\u6b65-loader"},"\u540c\u6b65 loader \u548c\u5f02\u6b65 loader"),(0,o.kt)("h3",{id:"\u540c\u6b65-loader"},"\u540c\u6b65 loader"),(0,o.kt)("p",null,"\u4e00\u822c\u7684 loader \u8f6c\u6362\u90fd\u662f\u540c\u6b65\u7684\uff0c\u76f4\u63a5 return \u8fd4\u56de\u6211\u4eec\u7684\u5904\u7406\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (content) {\n  // \u5bf9 content \u8fdb\u884c\u4e00\u4e9b\u5904\u7406\n  const res = dosth(content);\n  return res;\n};\n")),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"this.callback()")," \u8fd9\u4e2a api\uff0c\u7136\u540e\u5728\u6700\u540e\u76f4\u63a5 ",(0,o.kt)("strong",{parentName:"p"},"return undefined")," \u7684\u65b9\u5f0f\u544a\u8bc9 webpack \u53bb this.callback() \u5bfb\u627e\u4ed6\u8981\u7684\u7ed3\u679c\uff0c\u8fd9\u4e2a api \u63a5\u53d7\u8fd9\u4e9b\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.callback(\n  err: Error | null, // \u4e00\u4e2a\u65e0\u6cd5\u6b63\u5e38\u7f16\u8bd1\u65f6\u7684 Error \u6216\u8005 \u76f4\u63a5\u7ed9\u4e2a null\n  content: string | Buffer,// \u6211\u4eec\u5904\u7406\u540e\u8fd4\u56de\u7684\u5185\u5bb9 \u53ef\u4ee5\u662f string \u6216\u8005 Buffer\uff08\uff09\n  sourceMap?: SourceMap, // \u53ef\u9009 \u53ef\u4ee5\u662f\u4e00\u4e2a\u88ab\u6b63\u5e38\u89e3\u6790\u7684 source map\n  meta?: any // \u53ef\u9009 \u53ef\u4ee5\u662f\u4efb\u4f55\u4e1c\u897f\uff0c\u6bd4\u5982\u4e00\u4e2a\u516c\u7528\u7684 AST \u8bed\u6cd5\u6811\n);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ece webpack 5 \u5f00\u59cb\uff0cthis.getOptions \u53ef\u4ee5\u83b7\u53d6\u5230 loader \u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002\u5b83\u7528\u6765\u66ff\u4ee3\u6765\u81ea loader-utils \u4e2d\u7684 getOptions \u65b9\u6cd5\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (content) {\n  // \u83b7\u53d6\u5230\u7528\u6237\u4f20\u7ed9\u5f53\u524d loader \u7684\u53c2\u6570\n  const options = this.getOptions();\n  const res = someSyncOperation(content, options);\n  this.callback(null, res, sourceMaps);\n  // \u6ce8\u610f\u8fd9\u91cc\u7531\u4e8e\u4f7f\u7528\u4e86 this.callback \u76f4\u63a5 return \u5c31\u884c\n  return;\n};\n")),(0,o.kt)("h3",{id:"\u5f02\u6b65-loader"},"\u5f02\u6b65 loader"),(0,o.kt)("p",null,"\u901a\u5e38\u8f6c\u6362\u6d41\u7a0b\u90fd\u662f\u540c\u6b65\u7684\uff0c\u4f46\u662f\u5f53\u6211\u4eec\u9047\u5230\u8b6c\u5982\u9700\u8981\u7f51\u7edc\u8bf7\u6c42\u7b49\u573a\u666f\uff0c\u90a3\u4e48\u4e3a\u4e86\u907f\u514d\u963b\u585e\u6784\u5efa\u6b65\u9aa4\uff0c\u6211\u4eec\u4f1a\u91c7\u53d6\u5f02\u6b65\u6784\u5efa\u7684\u65b9\u5f0f\uff0c\u5bf9\u4e8e\u5f02\u6b65 loader \u6211\u4eec\u4e3b\u8981\u9700\u8981\u4f7f\u7528 this.async() \u6765\u544a\u77e5 webpack \u8fd9\u6b21\u6784\u5efa\u64cd\u4f5c\u662f\u5f02\u6b65\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (content) {\n  var callback = this.async();\n  someAsyncOperation(content, function (err, result) {\n    if (err) return callback(err);\n    callback(null, result, sourceMaps, meta);\n  });\n};\n")),(0,o.kt)("h2",{id:"\u624b\u5199-loader"},"\u624b\u5199 loader"),(0,o.kt)("h3",{id:"babel-loader"},"babel-loader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// index.js\nlet add = (a, b) => a + b;\nconsole.log("add",add(3, 5));\n')),(0,o.kt)("p",null,"\u4e0d\u589e\u52a0\u4efb\u4f55\u914d\u7f6e\u7684\u60c5\u51b5\u4e0b,",(0,o.kt)("inlineCode",{parentName:"p"},"npx webpack"),"\u540e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/******/ (() => { // webpackBootstrap\nvar __webpack_exports__ = {};\nlet add = (a, b) => a + b;\nconsole.log("add",add(3, 5));\n\n/******/ })()\n;\n')),(0,o.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528\u4e86\u4e24\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"es6"),"\u7684\u8bed\u6cd5\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"let"),"\u4ee5\u53ca\u7bad\u5934\u51fd\u6570\uff0c\u6211\u4eec\u60f3\u8981",(0,o.kt)("inlineCode",{parentName:"p"},"6 to 5"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// babel-loader.js\nconst path = require("path");\n\nmodule.exports = {\n  mode: "none",\n  entry: "./src/index.js",\n  output: {\n    path: path.resolve(__dirname, "./dist"),\n    filename: "bundle.js",\n  },\n  module: {\n    rules: [\n      {\n        test: /.js$/,\n        use: [\n          {\n            loader: "./loaders/babel-loader.js",\n            options: {\n              presets: ["@babel/preset-env"],\n            },\n          },\n        ],\n      },\n    ],\n  },\n};\n\n')),(0,o.kt)("p",null,"\u8f6c\u6362\u540e\u7684\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/******/ (() => { // webpackBootstrap\n/******/    "use strict";\nvar __webpack_exports__ = {};\n\n\nvar add = function add(a, b) {\n  return a + b;\n};\n\nconsole.log("add", add(3, 5));\n/******/ })()\n;\n')),(0,o.kt)("h3",{id:"markdown-loader"},"markdown-loader"),(0,o.kt)("p",null,"\u52a0\u8f7d markdown \u6587\u4ef6\u7684\u52a0\u8f7d\u5668\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u76f4\u63a5\u5bfc\u5165 md \u6587\u4ef6\u3002\u6211\u4eec\u90fd\u5e94\u8be5\u77e5\u9053 markdown \u4e00\u822c\u662f\u9700\u8981\u8f6c\u6362\u4e3a html \u4e4b\u540e\u518d\u5448\u73b0\u5230\u9875\u9762\u4e0a\u7684\uff0c\u6240\u4ee5\u6211\u5e0c\u671b\u5bfc\u5165 md \u6587\u4ef6\u540e\uff0c\u76f4\u63a5\u5f97\u5230 markdown \u8f6c\u6362\u540e\u7684 html \u5b57\u7b26\u4e32\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// webpack.config.js\n\nmodule.exports = {\n  // ...\n  module : {\n    rules: [\n      {\n        test:/\\.md$/i,\n        use:{\n          loader:["./markdown-loader.js"]\n        }\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"loader\u903b\u8f91")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// markdown-loader.js\nconst marked = require('marked')\n\nmodule.exports =function (content) {\n   // 1. \u5c06 markdown \u8f6c\u6362\u4e3a html \u5b57\u7b26\u4e32\n  const html = marked(content)\n  // html => '<h1>About</h1><p>this is a markdown file.</p>'\n  // 2. \u5c06 html \u5b57\u7b26\u4e32\u62fc\u63a5\u4e3a\u4e00\u6bb5\u5bfc\u51fa\u5b57\u7b26\u4e32\u7684 JS \u4ee3\u7801\n  const code = `module.exports = ${JSON.stringify(html)}`\n  return code \n  // code => 'export default \"<h1>About</h1><p>this is a markdown file.</p>\"'\n}\n")))}u.isMDXComponent=!0}}]);