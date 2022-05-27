"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7912],{9613:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):A(A({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,d=s["".concat(p,".").concat(m)]||s[m]||i[m]||o;return t?r.createElement(d,A(A({ref:n},l),{},{components:t})):r.createElement(d,A({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,A=new Array(o);A[0]=s;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,A[1]=u;for(var c=2;c<o;c++)A[c]=t[c];return r.createElement.apply(null,A)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4691:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var r=t(2848),a=t(9213),o=(t(9496),t(9613)),A=["components"],u={sidebar_position:8},p=void 0,c={unversionedId:"Webpack/source-map",id:"Webpack/source-map",isDocsHomePage:!1,title:"source-map",description:"\u6211\u4eec\u77e5\u9053\u771f\u5b9e\u7684\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e0a\u7684\u4ee3\u7801\uff0c\u548c\u6211\u4eec\u7f16\u5199\u7684\u4ee3\u7801\u662f\u5b58\u5728\u5dee\u5f02\u7684\uff1a",source:"@site/docs/Webpack/source-map.md",sourceDirName:"Webpack",slug:"/Webpack/source-map",permalink:"/docs/Webpack/source-map",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Webpack/source-map.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/docs/Webpack/\u6027\u80fd\u4f18\u5316"},next:{title:"webpack\u7684hash",permalink:"/docs/Webpack/webpack\u7684hash"}},l=[{value:"Source Map \u7684\u4f7f\u7528",id:"source-map-\u7684\u4f7f\u7528",children:[{value:"eval-source-map \u503c",id:"eval-source-map-\u503c",children:[]},{value:"inline-source-map \u503c",id:"inline-source-map-\u503c",children:[]}]},{value:"\u4e0d\u751f\u6210 source-map",id:"\u4e0d\u751f\u6210-source-map",children:[]},{value:"source-map \u7684\u5c5e\u6027",id:"source-map-\u7684\u5c5e\u6027",children:[]}],i={toc:l};function s(e){var n=e.components,u=(0,a.Z)(e,A);return(0,o.kt)("wrapper",(0,r.Z)({},i,u,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u771f\u5b9e\u7684\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e0a\u7684\u4ee3\u7801\uff0c\u548c\u6211\u4eec\u7f16\u5199\u7684\u4ee3\u7801\u662f\u5b58\u5728\u5dee\u5f02\u7684\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ES6 \u4f1a\u88ab\u8f6c\u6210 ES5"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u5e94\u884c\u53f7\u3001\u5217\u53f7\u5728\u7ecf\u8fc7\u7f16\u8bd1\u540e\u4e5f\u4f1a\u4e0d\u4e00\u81f4"),(0,o.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u4e11\u5316\u538b\u7f29\u65f6\uff0c\u4f1a\u5c06\u7f16\u7801\u540d\u79f0\u7b49\u4fee\u6539"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e86 TypeScript \u7b49\u65b9\u5f0f\u7f16\u5199\u7684\u4ee3\u7801\uff0c\u6700\u7ec8\u8f6c\u6362\u6210 JavaScript")),(0,o.kt)("p",null,"\u6240\u4ee5\u5c31\u4f1a\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5f53\u4ee3\u7801\u62a5\u9519\u9700\u8981\u8c03\u8bd5\u65f6(debug)\uff0c\u8c03\u8bd5\u8f6c\u6362\u540e\u7684\u4ee3\u7801\u662f\u5f88\u56f0\u96be\u7684\uff0csource-map \u767b\u573a\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"source-map \u672c\u8eab\u4f5c\u4e3a\u4e00\u4e2a\u6587\u4ef6\uff0c\u4f5c\u7528\u662f\u628a\u5df2\u8f6c\u6362\u7684\u4ee3\u7801\uff0c\u6620\u5c04\u5230\u6e90\u6587\u4ef6\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u6d4f\u89c8\u5668\u53ef\u4ee5",(0,o.kt)("strong",{parentName:"li"},"\u91cd\u6784\u539f\u59cb\u6e90"),"\u5e76\u5728\u8c03\u8bd5\u5668\u4e2d",(0,o.kt)("strong",{parentName:"li"},"\u663e\u793a\u91cd\u5efa\u7684\u539f\u59cb\u6e90"),"\uff1b")),(0,o.kt)("h2",{id:"source-map-\u7684\u4f7f\u7528"},"Source Map \u7684\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u8f6c\u6362\u540e\u7684\u4ee3\u7801\uff0c\u6700\u540e\u6dfb\u52a0\u4e00\u4e2a\u6ce8\u91ca\uff0c\u5b83\u6307\u5411 sourcemap\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"}," //# sourceMappingURL=bundle.js.map")))),(0,o.kt)("li",{parentName:"ul"},"webpack \u5728\u6253\u5305\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u751f\u6210 source-map\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// ./webpack.config.js\nmodule.exports = {\n  devtool: "source-map", // source map \u8bbe\u7f6e\n};\n// \u7136\u540e\u6253\u5f00\u547d\u4ee4\u884c\u7ec8\u7aef\uff0c\u8fd0\u884c Webpack \u6253\u5305\u3002\u6253\u5305\u5b8c\u6210\u8fc7\u540e\uff0c\u6211\u4eec\u6253\u5f00 dist \u76ee\u5f55\uff0c\u6b64\u65f6\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u5c31\u4f1a\u751f\u6210\u6211\u4eec bundle.js \u7684 Source Map \u6587\u4ef6\uff0c\u4e0e\u6b64\u540c\u65f6 bundle.js \u4e2d\u4e5f\u4f1a\u901a\u8fc7\u6ce8\u91ca\u5f15\u5165\u8fd9\u4e2a Source Map \u6587\u4ef6\n')))),(0,o.kt)("p",null,"\u6d4f\u89c8\u5668\u4f1a\u6839\u636e\u6211\u4eec\u7684\u6ce8\u91ca\uff0c\u67e5\u627e\u5bf9\u5e94\u7684 source-map\uff0c\u5e76\u4e14\u6839\u636e source-map \u8fd8\u539f\u6211\u4eec\u7684\u4ee3\u7801\uff0c\u65b9\u4fbf\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\nmodule.exports = {\n  mode: "development",\n  devtool: "source-map",\n  entry: "./src/index.js",\n  output: {\n    filename: "js/bundle.js",\n    // \u5fc5\u987b\u662f\u4e00\u4e2a\u7edd\u5bf9\u8def\u5f84\n    path: path.resolve(__dirname, "./build"),\n  },\n  module: {\n    rules: [{}],\n  },\n  plugins: [],\n};\n')),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(5844).Z})),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u4f1a\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"bundle.js.map")," \u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\u8c03\u8bd5\u7684\u65f6\u5019\uff0c\u70b9\u51fb\u62a5\u9519\u4fe1\u606f\u53ef\u4ee5\u76f4\u63a5\u5b9a\u4f4d\u5230\u6e90\u7801\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(3925).Z})),(0,o.kt)("h3",{id:"eval-source-map-\u503c"},"eval-source-map \u503c"),(0,o.kt)("p",null,"eval-source-map\uff1a\u4f1a\u751f\u6210 sourcemap\uff0c\u4f46\u662f source-map \u662f\u4ee5 DataUrl \u6dfb\u52a0\u5230 eval \u51fd\u6570\u7684\u540e\u9762"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u539f\u6765\u7684 sourcemap \u6587\u4ef6\u4f1a\u88ab base64 \u7f16\u7801\u8f6c\u6210 DataUrl\uff0c\u610f\u5473\u7740 sourcemap \u6587\u4ef6\u4e0d\u9700\u8981\u6d4f\u89c8\u5668\u518d\u53bb\u5355\u72ec\u8bf7\u6c42\uff0c\u8bf7\u6c42\u6e90\u6587\u4ef6\u65f6\uff08\u6bd4\u5982 bundle.js \u6587\u4ef6\uff09\u4e00\u8d77\u8bf7\u6c42\u4e0b\u6765\uff0c\u5373\u6ca1\u6709\u4e00\u4e2a\u72ec\u7acb\u7684 sourcemap \u6587\u4ef6\uff0c\u4f46\u662f\u4e5f\u4f1a\u6709\u6b63\u786e\u7684\u6620\u5c04\u4fe1\u606f")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tvax4.sinaimg.cn/mw690/006T9etDgy1h2n5gfe8mzj31kc0hc4lf.jpg",alt:"image"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"eval-source-map \u4f1a\u4ee5 eval() \u51fd\u6570\u6253\u5305\u8fd0\u884c\u6a21\u5757\uff0c\u4e0d\u4ea7\u751f\u72ec\u7acb\u7684 map \u6587\u4ef6\uff0c\u4f1a\u663e\u793a\u62a5\u9519\u7684\u884c\u5217\u4fe1\u606f")),(0,o.kt)("h3",{id:"inline-source-map-\u503c"},"inline-source-map \u503c"),(0,o.kt)("p",null,"inline-source-map\uff1a\u4f1a\u751f\u6210 sourcemap\uff0c\u4f46\u662f source-map \u662f\u4ee5 DataUrl \u6dfb\u52a0\u5230 bundle \u6587\u4ef6\u7684\u540e\u9762"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6620\u5c04\u6587\u4ef6\u4ee5 base64 \u683c\u5f0f\u7f16\u7801\uff0c\u52a0\u5728 bundle \u6587\u4ef6\u6700\u540e\uff0c\u4e0d\u4ea7\u751f\u72ec\u7acb\u7684 map \u6587\u4ef6\u3002\u52a0\u5165 map \u6587\u4ef6\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u660e\u663e\u7684\u770b\u5230\u5305\u4f53\u79ef\u53d8\u5927\u4e86\uff1b")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva3.sinaimg.cn/mw690/006T9etDly1h2n5n6e7ruj316q0oett1.jpg",alt:"image"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5b9e\u9645\u4e0a\u8fd8\u6709\u5f88\u591a\u503c\uff0c\u6bd4\u5982\uff1acheap-source-map\u3001cheap-module-source-map\u3001hidden-source-map\uff0c\u90fd\u4f1a\u751f\u6210 sourcemap\uff0c\u5177\u4f53\u53ef\u4ee5\u770b\u5b98\u7f51"))),(0,o.kt)("h2",{id:"\u4e0d\u751f\u6210-source-map"},"\u4e0d\u751f\u6210 source-map"),(0,o.kt)("p",null,"\u4e0b\u9762\u51e0\u4e2a\u503c\u4e0d\u4f1a\u751f\u6210 source-map"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"false\uff1a\u4e0d\u4f7f\u7528 source-map\uff0c\u4e5f\u5c31\u662f\u6ca1\u6709\u4efb\u4f55\u548c source-map \u76f8\u5173\u7684\u5185\u5bb9"),(0,o.kt)("li",{parentName:"ul"},"none\uff1aproduction \u6a21\u5f0f\u4e0b\u7684\u9ed8\u8ba4\u503c\uff0c\u4e0d\u751f\u6210 source-map\uff08\u5f00\u53d1\u6a21\u5f0f\u4e0b\u8bbe\u7f6e none \u4f1a\u62a5\u9519\uff09"),(0,o.kt)("li",{parentName:"ul"},"eval\uff1adevelopment \u6a21\u5f0f\u4e0b\u7684\u9ed8\u8ba4\u503c\uff0c\u4e0d\u751f\u6210 source-map",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5b83\u4f1a\u5728 eval \u6267\u884c\u7684\u4ee3\u7801\u4e2d\uff0c\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"li"},"//# sourceURL=")),(0,o.kt)("li",{parentName:"ul"},"\u4f46\u662f\u8fd9\u4e9b\u4ee3\u7801\u4f1a\u88ab\u6d4f\u89c8\u5668\u5728\u6267\u884c\u65f6\u89e3\u6790\uff0c\u5e76\u4e14\u4f1a",(0,o.kt)("strong",{parentName:"li"},"\u5728\u8c03\u8bd5\u9762\u677f\u4e2d\u751f\u6210\u5bf9\u5e94\u7684\u76ee\u5f55\u6587\u4ef6"),"\uff0c\u65b9\u4fbf\u6211\u4eec\u8c03\u8bd5\u4ee3\u7801;")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'// webpack.config.js\nconst path = require("path");\nmodule.exports = {\n  mode: "development",\n- devtool: "source-map",\n+ devtool: false,\n  entry: "./src/index.js",\n  output: {\n    filename: "js/bundle.js",\n    // \u5fc5\u987b\u662f\u4e00\u4e2a\u7edd\u5bf9\u8def\u5f84\n    path: path.resolve(__dirname, "./build"),\n  },\n  module: {\n    rules: [{}],\n  },\n  plugins: [],\n};\n')),(0,o.kt)("h2",{id:"source-map-\u7684\u5c5e\u6027"},"source-map \u7684\u5c5e\u6027"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"version\uff1a\u5f53\u524d\u4f7f\u7528\u7684\u7248\u672c\uff0c\u4e5f\u5c31\u662f\u6700\u65b0\u7684\u7b2c\u4e09\u7248"),(0,o.kt)("li",{parentName:"ul"},"sources\uff1a\u4ece\u54ea\u4e9b\u6587\u4ef6\u8f6c\u6362\u8fc7\u6765\u7684 source-map \u548c\u6253\u5305\u7684\u4ee3\u7801(\u6700\u521d\u59cb\u7684\u6587\u4ef6)"),(0,o.kt)("li",{parentName:"ul"},"names\uff1a\u8f6c\u6362\u524d\u7684\u53d8\u91cf\u548c\u5c5e\u6027\u540d\u79f0(\u56e0\u4e3a\u6211\u76ee\u524d\u4f7f\u7528\u7684\u662f development \u6a21\u5f0f\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u4fdd\u7559\u8f6c\u6362\u524d\u7684\u540d\u79f0)"),(0,o.kt)("li",{parentName:"ul"},"mappings\uff1asource-map \u7528\u6765\u548c\u6e90\u6587\u4ef6\u6620\u5c04\u7684\u4fe1\u606f(\u6bd4\u5982\u4f4d\u7f6e\u4fe1\u606f\u7b49)\uff0c\u4e00\u4e32 base64 VLQ(veriable- length quantity \u53ef\u53d8\u957f\u5ea6\u503c)\u7f16\u7801"),(0,o.kt)("li",{parentName:"ul"},"file\uff1a\u6253\u5305\u540e\u7684\u6587\u4ef6(\u6d4f\u89c8\u5668\u52a0\u8f7d\u7684\u6587\u4ef6)"),(0,o.kt)("li",{parentName:"ul"},"sourceContent\uff1a\u8f6c\u6362\u524d\u7684\u5177\u4f53\u4ee3\u7801\u4fe1\u606f(\u548c sources \u662f\u5bf9\u5e94\u7684\u5173\u7cfb)"),(0,o.kt)("li",{parentName:"ul"},"sourceRoot\uff1a\u6240\u6709\u7684 sources \u76f8\u5bf9\u7684\u6839\u76ee\u5f55")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// bundle.js.map\n{\n  "version": 3,\n  "sources": [\n    "webpack:/src/index.js",\n    "webpack:/src/js/format.js",\n    "webpack:/src/js/math.js",\n    "webpack:/webpack/bootstrap",\n    "webpack:/webpack/runtime/compat get default export",\n    "webpack:/webpack/runtime/define property getters",\n    "webpack:/webpack/runtime/hasOwnProperty shorthand",\n    "webpack:/webpack/runtime/make namespace object",\n    "webpack:/webpack/startup"\n  ],\n  "names": [\n    "require",\n    "sum",\n    "mul",\n    "console",\n    "log",\n    "dateFormat",\n    "priceFormat",\n    "abc",\n    "date",\n    "price",\n    "cba",\n    "module",\n    "exports",\n    "num1",\n    "num2"\n  ],\n  "mappings": ";;;;;;;;;;;;;AAAA;eACqBA,mBAAO,CAAC,mCAAD,C;IAApBC,G,YAAAA,G;IAAKC,G,YAAAA,G,EAEb;;;AACA;AAEAC,OAAO,CAACC,GAAR,CAAYH,GAAG,CAAC,EAAD,EAAK,EAAL,CAAf;AACAE,OAAO,CAACC,GAAR,CAAYF,GAAG,CAAC,EAAD,EAAK,EAAL,CAAf;AAEAC,OAAO,CAACC,GAAR,CAAYC,sDAAU,CAAC,KAAD,CAAtB;AACAF,OAAO,CAACC,GAAR,CAAYE,uDAAW,CAAC,KAAD,CAAvB;AAEAH,OAAO,CAACC,GAAR,CAAYG,GAAZ,E;;;;;;;;;;ACZA,IAAMF,UAAU,GAAG,SAAbA,UAAa,CAACG,IAAD,EAAU;AAC3B,SAAO,YAAP;AACD,CAFD;;AAIA,IAAMF,WAAW,GAAG,SAAdA,WAAc,CAACG,KAAD,EAAW;AAC7B,SAAO,QAAP;AACD,CAFD;;AAIAN,OAAO,CAACC,GAAR,CAAYM,GAAZ;AAEAC,MAAM,CAACC,OAAP,GAAiB;AACfP,YAAU,EAAVA,UADe;AAEfC,aAAW,EAAXA;AAFe,CAAjB,C;;;;;;;;;;;;;;;;ACVO,IAAML,GAAG,GAAG,SAANA,GAAM,CAACY,IAAD,EAAOC,IAAP,EAAgB;AACjC,SAAOD,IAAI,GAAGC,IAAd;AACD,CAFM;AAIA,IAAMZ,GAAG,GAAG,SAANA,GAAM,CAACW,IAAD,EAAOC,IAAP,EAAgB;AACjC,SAAOD,IAAI,GAAGC,IAAd;AACD,CAFM,C;;;;;;UCJP;UACA;;UAEA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;;UAEA;UACA;;UAEA;UACA;UACA;;;;;WCrBA;WACA;WACA;WACA,cAAc,0BAA0B,EAAE;WAC1C,cAAc,eAAe;WAC7B,gCAAgC,YAAY;WAC5C;WACA,E;;;;;WCPA;WACA;WACA;WACA;WACA,wCAAwC,yCAAyC;WACjF;WACA;WACA,E;;;;;WCPA,6CAA6C,wDAAwD,E;;;;;WCArG;WACA;WACA;WACA,sDAAsD,kBAAkB;WACxE;WACA,+CAA+C,cAAc;WAC7D,E;;;;UCNA;UACA;UACA;UACA",\n  "file": "js/bundle.js",\n  "sourcesContent": [\n    "// es module\u5bfc\u51fa\u5185\u5bb9, CommonJS\u5bfc\u5165\u5185\u5bb9\\nconst { sum, mul } = require(\\"./js/math\\");\\n\\n// CommonJS\u5bfc\u51fa\u5185\u5bb9, es module\u5bfc\u5165\u5185\u5bb9\\nimport { dateFormat, priceFormat } from \\"./js/format\\";\\n\\nconsole.log(sum(20, 30));\\nconsole.log(mul(20, 30));\\n\\nconsole.log(dateFormat(\\"aaa\\"));\\nconsole.log(priceFormat(\\"bbb\\"));\\n\\nconsole.log(abc);\\n",\n    "const dateFormat = (date) => {\\n  return \\"2020-12-12\\";\\n};\\n\\nconst priceFormat = (price) => {\\n  return \\"100.00\\";\\n};\\n\\nconsole.log(cba);\\n\\nmodule.exports = {\\n  dateFormat,\\n  priceFormat,\\n};\\n",\n    "export const sum = (num1, num2) => {\\n  return num1 + num2;\\n};\\n\\nexport const mul = (num1, num2) => {\\n  return num1 * num2;\\n};\\n",\n    "// The module cache\\nvar __webpack_module_cache__ = {};\\n\\n// The require function\\nfunction __webpack_require__(moduleId) {\\n\\t// Check if module is in cache\\n\\tif(__webpack_module_cache__[moduleId]) {\\n\\t\\treturn __webpack_module_cache__[moduleId].exports;\\n\\t}\\n\\t// Create a new module (and put it into the cache)\\n\\tvar module = __webpack_module_cache__[moduleId] = {\\n\\t\\t// no module.id needed\\n\\t\\t// no module.loaded needed\\n\\t\\texports: {}\\n\\t};\\n\\n\\t// Execute the module function\\n\\t__webpack_modules__[moduleId](module, module.exports, __webpack_require__);\\n\\n\\t// Return the exports of the module\\n\\treturn module.exports;\\n}\\n\\n",\n    "// getDefaultExport function for compatibility with non-harmony modules\\n__webpack_require__.n = function(module) {\\n\\tvar getter = module && module.__esModule ?\\n\\t\\tfunction() { return module[\'default\']; } :\\n\\t\\tfunction() { return module; };\\n\\t__webpack_require__.d(getter, { a: getter });\\n\\treturn getter;\\n};",\n    "// define getter functions for harmony exports\\n__webpack_require__.d = function(exports, definition) {\\n\\tfor(var key in definition) {\\n\\t\\tif(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {\\n\\t\\t\\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\\n\\t\\t}\\n\\t}\\n};",\n    "__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }",\n    "// define __esModule on exports\\n__webpack_require__.r = function(exports) {\\n\\tif(typeof Symbol !== \'undefined\' && Symbol.toStringTag) {\\n\\t\\tObject.defineProperty(exports, Symbol.toStringTag, { value: \'Module\' });\\n\\t}\\n\\tObject.defineProperty(exports, \'__esModule\', { value: true });\\n};",\n    "// startup\\n// Load entry module\\n__webpack_require__(\\"./src/index.js\\");\\n// This entry module used \'exports\' so it can\'t be inlined\\n"\n  ],\n  "sourceRoot": ""\n}\n')))}s.isMDXComponent=!0},3925:function(e,n,t){n.Z=t.p+"assets/images/bundlejsmap-73c7ede3a39e3a6d780a22b8bdcc9cea.png"},5844:function(e,n,t){n.Z=t.p+"assets/images/sourcemap-e533d6d519fbd568bfaadc0238bc068d.png"}}]);