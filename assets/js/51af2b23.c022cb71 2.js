"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2829],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(t),d=r,m=k["".concat(l,".").concat(d)]||k[d]||s[d]||p;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=k;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6405:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return k}});var a=t(7462),r=t(3366),p=(t(7294),t(3905)),o=["components"],i={sidebar_position:1},l=void 0,c={unversionedId:"Webpack/Webpack\u6982\u89c8",id:"Webpack/Webpack\u6982\u89c8",isDocsHomePage:!1,title:"Webpack\u6982\u89c8",description:"\x3c!--",source:"@site/docs/Webpack/Webpack\u6982\u89c8.md",sourceDirName:"Webpack",slug:"/Webpack/Webpack\u6982\u89c8",permalink:"/blog/docs/Webpack/Webpack\u6982\u89c8",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Webpack/Webpack\u6982\u89c8.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Promise",permalink:"/blog/docs/Javascript/Promise"},next:{title:"webpack-dev-server",permalink:"/blog/docs/Webpack/webpack-dev-server"}},u=[{value:"\u57fa\u672c\u914d\u7f6e",id:"\u57fa\u672c\u914d\u7f6e",children:[]},{value:"\ud83d\udce6 \u6253\u5305\u7ed3\u679c\u8fd0\u884c\u539f\u7406",id:"-\u6253\u5305\u7ed3\u679c\u8fd0\u884c\u539f\u7406",children:[]}],s={toc:u};function k(e){var n=e.components,i=(0,r.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"webpack is a static module bundler for modern JavaScript applications."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Webpack"),"\u662f\u4e00\u4e2a\u9759\u6001\u7684\u6a21\u5757\u5316\u6253\u5305\u5de5\u5177\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u6253\u5305 bundler\uff1a webpack \u53ef\u4ee5\u5c06\u5e2e\u52a9\u6211\u4eec\u8fdb\u884c\u6253\u5305\uff0c\u6240\u4ee5\u5b83\u662f\u4e00\u4e2a",(0,p.kt)("strong",{parentName:"li"},"\u6253\u5305\u5de5\u5177"),"\uff1b"),(0,p.kt)("li",{parentName:"ul"},"\u9759\u6001\u7684 static\uff1a\u8fd9\u6837\u8868\u8ff0\u7684\u539f\u56e0\u662f\u6211\u4eec\u6700\u7ec8\u53ef\u4ee5\u5c06\u4ee3\u7801\u6253\u5305\u6210\u6700\u7ec8\u7684\u9759\u6001\u8d44\u6e90\uff08\u90e8\u7f72\u5230\u9759\u6001\u670d\u52a1\u5668\uff09\uff1b"),(0,p.kt)("li",{parentName:"ul"},"\u6a21\u5757\u5316 module\uff1a ",(0,p.kt)("strong",{parentName:"li"},"webpack \u9ed8\u8ba4\u652f\u6301\u5404\u79cd\u6a21\u5757\u5316\u5f00\u53d1"),"\uff0cES Module\u3001CommonJS\u3001AMD \u7b49\uff1b"),(0,p.kt)("li",{parentName:"ul"},"\u73b0\u4ee3\u7684 modern\uff1a\u6b63\u662f\u56e0\u4e3a\u73b0\u4ee3\u524d\u7aef\u5f00\u53d1\u9762\u4e34\u5404\u79cd\u5404\u6837\u7684\u95ee\u9898\uff0c\u624d\u50ac\u751f\u4e86 webpack \u7684\u51fa\u73b0\u548c\u53d1\u5c55\uff1b")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("inlineCode",{parentName:"p"},"webpack")," \u662f\u901a\u8fc7\u6a21\u5757\u4e4b\u95f4\u4f9d\u8d56\u5173\u7cfb\u7684\u5206\u6790\u6765\u6784\u5efa\u4f9d\u8d56\u56fe\uff0c\u901a\u8fc7\u4e0d\u540c\u7684\u540e\u7f00\u5bf9\u5e94\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"loader")," \u6765\u5bf9\u4e0d\u540c\u5185\u5bb9\u505a\u8f6c\u6362\uff0c\u6240\u4ee5\u652f\u6301 ",(0,p.kt)("inlineCode",{parentName:"p"},"css"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"js"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"png")," \u7b49\u5404\u79cd\u6a21\u5757\u3002")),(0,p.kt)("p",null,(0,p.kt)("img",{src:t(6103).Z})),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"webpack"),"\u5728\u6267\u884c\u65f6\u662f\u4f9d\u8d56",(0,p.kt)("inlineCode",{parentName:"strong"},"webpack-cli"),"\u7684\uff0c\u5982\u679c\u6ca1\u6709\u5b89\u88c5",(0,p.kt)("inlineCode",{parentName:"strong"},"webpack-cli"),"\u7b2c\u4e09\u6b65\u5c31\u8d70\u4e0d\u901a\u5c31\u4f1a\u62a5\u9519\uff1b",(0,p.kt)("inlineCode",{parentName:"strong"},"webpack-cli"),"\u4e2d\u4ee3\u7801\u6267\u884c\uff0c\u624d\u662f\u771f\u6b63\u5229\u7528",(0,p.kt)("inlineCode",{parentName:"strong"},"webpack"),"\u8fdb\u884c\u7f16\u8bd1\u548c\u6253\u5305\u7684\u8fc7\u7a0b;")),(0,p.kt)("p",null,"\u5982\u679c\u6ca1\u6709webpack-cli\u90a3\u4e48\u5c31\u4e0d\u80fd\u5728\u547d\u4ee4\u884c\u91cc\u8fd0\u884cwebapck \u6216\u8005npx webpack\u6307\u4ee4"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"npm i webpack webpack-cli --save-dev\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"webpack \u662f Webpack \u7684\u6838\u5fc3\u6a21\u5757\uff0cwebpack-cli \u662f Webpack \u7684 CLI \u7a0b\u5e8f\uff0c\u7528\u6765\u5728\u547d\u4ee4\u884c\u4e2d\u8c03\u7528 Webpack\u3002")),(0,p.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0cwebpack-cli \u6240\u63d0\u4f9b\u7684 CLI \u7a0b\u5e8f\u5c31\u4f1a\u51fa\u73b0\u5728 node_modules/.bin \u76ee\u5f55\u5f53\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 npx \u5feb\u901f\u627e\u5230 CLI \u5e76\u8fd0\u884c\u5b83\uff0c\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"npx webpack\n")),(0,p.kt)("p",null,"npx \u662f npm 5.2 \u4ee5\u540e\u65b0\u589e\u7684\u4e00\u4e2a\u547d\u4ee4\uff0c\u53ef\u4ee5\u7528\u6765\u66f4\u65b9\u4fbf\u7684\u6267\u884c\u8fdc\u7a0b\u6a21\u5757\u6216\u8005\u9879\u76ee ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u7684 CLI \u7a0b\u5e8f\u3002"),(0,p.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u5728\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0cWebpack \u4f1a\u81ea\u52a8\u4ece ",(0,p.kt)("inlineCode",{parentName:"p"},"./src/index.js")," \u6587\u4ef6\u5f00\u59cb\u6253\u5305\uff0c\u7136\u540e\u6839\u636e\u4ee3\u7801\u4e2d\u7684\u6a21\u5757\u5bfc\u5165\u64cd\u4f5c\uff0c\u81ea\u52a8\u5c06\u6240\u6709\u7528\u5230\u7684\u6a21\u5757\u4ee3\u7801\u6253\u5305\u5230\u4e00\u8d77\u3002"),(0,p.kt)("p",null,"\u4e0e\u4e4b\u5bf9\u5e94\u7684\u5c31\u662f\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u591a\u51fa\u4e86\u4e00\u4e2a dist \u76ee\u5f55\uff0c\u6211\u4eec\u7684\u6253\u5305\u7ed3\u679c\u5c31\u5b58\u653e\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684 main.js \u6587\u4ef6\u4e2d\u3002"),(0,p.kt)("h2",{id:"\u57fa\u672c\u914d\u7f6e"},"\u57fa\u672c\u914d\u7f6e"),(0,p.kt)("p",null,"\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"npx webapck")," \u672c\u8d28\u4e0a\u5c31\u662f\u6765\u6267\u884c\u914d\u7f6e\u6587\u4ef6 ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"\uff0c\u6ca1\u6709\u914d\u7f6e\u6587\u4ef6\u5c31\u662f\u6267\u884c\u9ed8\u8ba4\u914d\u7f6e\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  entry: "", // \u6253\u5305\u5165\u53e3\n  output: {\n    // \u6253\u5305\u8f93\u51fa bundles\n    filename: "", // \u8f93\u51fa\u6587\u4ef6\u540d\n    path: "", // \u8f93\u51fa\u8def\u5f84\n  },\n  mode: "", // \u73af\u5883\u914d\u7f6e\n  module: {\n    rules: [\n      // loader \u914d\u7f6e\uff0c\u7528\u4e8e\u8f6c\u6362\u67d0\u4e9b\u7c7b\u578b\u7684\u6a21\u5757\n      {\n        test: "", // \u8bc6\u522b\u51fa\u54ea\u4e9b\u6587\u4ef6\u4f1a\u88ab\u8f6c\u6362\n        include: path.resolve(__dirname, ""), // \u5b9e\u9645\u9700\u8981\u8f6c\u6362\u7684\u6a21\u5757\n        use: "", // \u5b9a\u4e49\u51fa\u5728\u8fdb\u884c\u8f6c\u6362\u65f6\uff0c\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a loader\n        // \u5bf9\u540c\u4e00\u4e2a\u6a21\u5757\u4f7f\u7528\u591a\u4e2a loader\uff0c\u6ce8\u610f\u987a\u5e8f\uff0c\u4ece\u540e\u5f80\u524d\n        // use: [\n        //   \'style-loader\',\n        //   \'css-loader\'\n        // ]\n      },\n    ],\n  },\n  plugins: [\n    // \u63d2\u4ef6\u914d\u7f6e\n    // new xxxPlugin(),\n    /**\n     * new HtmlWebpackPlugin({\n     * title: \'Webpack Plugin Sample\',\n     * meta: {\n     *   viewport: \'width=device-width\'\n     * }\n     * })\n     */\n  ],\n};\n')),(0,p.kt)("p",null,"mode\u914d\u7f6e\u9009\u9879\uff0c\u53ef\u4ee5\u544a\u77e5webpack\u4f7f\u7528\u54cd\u5e94\u6a21\u5f0f\u7684\u5185\u7f6e\u4f18\u5316\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\u662f\u751f\u4ea7\u6a21\u5f0f production\uff1b"),(0,p.kt)("li",{parentName:"ul"},"\u53ef\u9009\u503c\u6709\uff1a'none' | 'development' | 'production'\uff1b")),(0,p.kt)("p",null,"\u5176\u4e2dnone\u662f\u4e0d\u4f7f\u7528\u4efb\u4f55\u9ed8\u8ba4\u4f18\u5316\u9009\u9879\u3002"),(0,p.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"Webpack \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"Tree-shaking")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"sideEffects")," \u7279\u6027\u5728\u751f\u4ea7\u6a21\u5f0f\u4e0b\u4f1a\u81ea\u52a8\u5f00\u542f\u3002"))),(0,p.kt)("h2",{id:"-\u6253\u5305\u7ed3\u679c\u8fd0\u884c\u539f\u7406"},"\ud83d\udce6 \u6253\u5305\u7ed3\u679c\u8fd0\u884c\u539f\u7406"),(0,p.kt)("p",null,"\u6574\u4f53\u751f\u6210\u7684\u4ee3\u7801\u5176\u5b9e\u5c31\u662f\u4e00\u4e2a\u7acb\u5373\u6267\u884c\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u662f Webpack \u5de5\u4f5c\u5165\u53e3\uff08webpackBootstrap\uff09\u3002"))}k.isMDXComponent=!0},6103:function(e,n,t){n.Z=t.p+"assets/images/webcli-d7c32b7dfad0410703c1db93909b40b2.png"}}]);