"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3663],{3905:function(e,n,r){r.d(n,{Zo:function(){return m},kt:function(){return d}});var t=r(7294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},m=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=c(r),d=l,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||s;return r?t.createElement(h,o(o({ref:n},m),{},{components:r})):t.createElement(h,o({ref:n},m))}));function d(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var s=r.length,o=new Array(s);o[0]=p;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<s;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8700:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var t=r(7462),l=r(3366),s=(r(7294),r(3905)),o=["components"],a={sidebar_position:7},i=void 0,c={unversionedId:"Javascript/Promise",id:"Javascript/Promise",isDocsHomePage:!1,title:"Promise",description:"Promise \u662f\u4e00\u79cd\u5f02\u6b65\u95ee\u9898\u540c\u6b65\u5316\u89e3\u51b3\u65b9\u6848\uff0c\u5229\u7528.then\u7684\u65b9\u5f0f\uff0c\u83b7\u53d6\u5f02\u6b65\u7a0b\u5e8f\u7684\u7ed3\u679c\uff0c\u800c\u4e0d\u963b\u585e\u548c Promsie \u65e0\u5173\u7684\u7a0b\u5e8f\u7684\u6267\u884c\uff0c\u4e5f\u5c31\u662f\u8bf4\u548c\u5176\u4ed6\u4e0e\u8be5 Promise \u65e0\u5173\u7684\u7a0b\u5e8f\u4fdd\u6301\u5f02\u6b65\u5173\u7cfb\u3002",source:"@site/docs/Javascript/Promise.md",sourceDirName:"Javascript",slug:"/Javascript/Promise",permalink:"/docs/Javascript/Promise",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Javascript/Promise.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Ajax",permalink:"/docs/Javascript/Ajax"},next:{title:"class",permalink:"/docs/Javascript/class"}},m=[{value:"\u8fdc\u53e4\u65f6\u671f",id:"\u8fdc\u53e4\u65f6\u671f",children:[]},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",children:[]},{value:"Promise \u5b9e\u4f8b\u65b9\u6cd5",id:"promise-\u5b9e\u4f8b\u65b9\u6cd5",children:[{value:"resolve \u53c2\u6570",id:"resolve-\u53c2\u6570",children:[]},{value:"then \u65b9\u6cd5",id:"then-\u65b9\u6cd5",children:[]},{value:"catch \u65b9\u6cd5",id:"catch-\u65b9\u6cd5",children:[]},{value:"finally \u65b9\u6cd5",id:"finally-\u65b9\u6cd5",children:[]}]},{value:"Promsie \u7c7b\u65b9\u6cd5",id:"promsie-\u7c7b\u65b9\u6cd5",children:[{value:"resolve \u65b9\u6cd5",id:"resolve-\u65b9\u6cd5",children:[]},{value:"reject \u65b9\u6cd5",id:"reject-\u65b9\u6cd5",children:[]},{value:"all \u65b9\u6cd5",id:"all-\u65b9\u6cd5",children:[]},{value:"allSettled \u65b9\u6cd5",id:"allsettled-\u65b9\u6cd5",children:[]},{value:"race \u65b9\u6cd5",id:"race-\u65b9\u6cd5",children:[]},{value:"any \u65b9\u6cd5",id:"any-\u65b9\u6cd5",children:[]}]},{value:"\u624b\u5199",id:"\u624b\u5199",children:[]}],u={toc:m};function p(e){var n=e.components,r=(0,l.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Promise \u662f\u4e00\u79cd\u5f02\u6b65\u95ee\u9898\u540c\u6b65\u5316\u89e3\u51b3\u65b9\u6848\uff0c\u5229\u7528",(0,s.kt)("inlineCode",{parentName:"p"},".then"),"\u7684\u65b9\u5f0f\uff0c\u83b7\u53d6\u5f02\u6b65\u7a0b\u5e8f\u7684\u7ed3\u679c\uff0c\u800c\u4e0d\u963b\u585e\u548c Promsie \u65e0\u5173\u7684\u7a0b\u5e8f\u7684\u6267\u884c\uff0c\u4e5f\u5c31\u662f\u8bf4\u548c\u5176\u4ed6\u4e0e\u8be5 Promise \u65e0\u5173\u7684\u7a0b\u5e8f\u4fdd\u6301\u5f02\u6b65\u5173\u7cfb\u3002"),(0,s.kt)("p",null,"\u56de\u8c03\u5730\u72f1\u770b\u8d77\u6765\u53ea\u662f\u987a\u5e26\u89e3\u51b3\u7684\uff0c\u4f46\u662f\u8fd9\u4e0d\u662f\u6700\u4f18\u7684\u89e3\u51b3\u56de\u8c03\u5730\u72f1\u7684\u624b\u6bb5\uff0c\u56e0\u4e3a\u4e0d\u65ad\u7684\u7528\u94fe\u5f0f\u64cd\u4f5c\u62bd\u79bb\u903b\u8f91\u4e5f\u4e0d\u8212\u670d\uff0c\u7406\u60f3\u7684\u662f async/await"),(0,s.kt)("h2",{id:"\u8fdc\u53e4\u65f6\u671f"},"\u8fdc\u53e4\u65f6\u671f"),(0,s.kt)("p",null,"\u4ee5\u524d\u8981\u60f3\u8fdb\u884c\u7f51\u7edc\u8bf7\u6c42\uff0c\u56e0\u4e3a\u662f\u5f02\u6b65\u7684\u5173\u7cfb\uff0c\u6240\u4ee5\u6ca1\u529e\u6cd5\u76f4\u63a5\u5229\u7528\u8fd4\u56de\u503c\u62ff\u5230\u8bf7\u6c42\u7ed3\u679c\uff08\u4f1a\u5f97\u5230 undefined\uff09\uff0c\u9700\u8981\u7528\u56de\u8c03\u51fd\u6570\u62ff\u5230\u8bf7\u6c42\u8fd4\u56de\u7684\u7ed3\u679c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// request.js\nfunction requestData(url, successCallback, failureCallback) {\n  // \u8fd9\u8fb9\u662f\u5229\u7528ajax\u8fdb\u884c\u7f51\u7edc\u8bf7\u6c42\n  // ...\n  xhr.onreadystatechange = function () {\n    if (this.readyState === 4 && this.status) {\n      successCallback(this.response);\n    }\n  };\n  // ...\n}\n\n// main.js\nrequestData(\n  "/",\n  (res) => {\n    console.log(res);\n  },\n  (err) => {\n    console.log(err);\n  }\n);\n')),(0,s.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,s.kt)("p",null,"Promise \u662f\u4e00\u4e2a\u7c7b\uff0c\u5c31\u662f\u627f\u8bfa\u3001\u8bb8\u8bfa \u3001\u671f\u7ea6\u7684\u610f\u601d\uff0c\u5c31\u662f\u8bf4 ",(0,s.kt)("strong",{parentName:"p"},"Promise \u4f1a\u7ed9\u8c03\u7528\u8005\u4e00\u4e2a\u627f\u8bfa\uff1a\u540e\u9762\u5728\u56de\u8c03\u6570\u636e\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a Promise \u5bf9\u8c61\u3002")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u901a\u8fc7 new \u521b\u5efa Promise \u5bf9\u8c61\uff0c\u6211\u4eec\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a executor \u6267\u884c\u5668"),(0,s.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u4f1a\u88ab\u7acb\u5373\u6267\u884c\uff0c\u5e76\u4e14\u9700\u8981\u53e6\u5916\u4e24\u4e2a\u56de\u8c03\u51fd\u6570 resolve\u3001reject\uff1b",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u8c03\u7528 resolve \u56de\u8c03\u51fd\u6570\u65f6\uff0cPromise \u5bf9\u8c61\u7684 then \u65b9\u6cd5\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\u4f1a\u88ab\u6267\u884c\uff1b"),(0,s.kt)("li",{parentName:"ul"},"\u8c03\u7528 reject \u56de\u8c03\u51fd\u6570\u65f6\uff0cPromise \u5bf9\u8c61\u7684 catch \u65b9\u6cd5\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\u4f1a\u88ab\u6267\u884c\uff1b")))),(0,s.kt)("p",null,"Promise \u4f7f\u7528\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u5c06\u5b83\u5212\u5206\u6210\u4e09\u4e2a\u72b6\u6001\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5f85\u5b9a\uff08pending\uff09\uff1a\u6267\u884c executor \u4e2d\u7684\u4ee3\u7801"),(0,s.kt)("li",{parentName:"ul"},"\u5df2\u5151\u73b0\uff08fulfilled\uff09\uff1a\u6267\u884c\u4e86 resolve\uff08resolve \u4f20\u5165\u7684\u503c\u672c\u8eab\u4e0d\u662f\u4e00\u4e2a Promise\uff09"),(0,s.kt)("li",{parentName:"ul"},"\u5df2\u62d2\u7edd\uff08rejected\uff09\uff1a\u6267\u884c\u4e86 reject")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u72b6\u6001\u4e00\u65e6\u786e\u5b9a\u5c31\u662f\u4e0d\u53ef\u66f4\u6539\u7684\uff08\u6ce8\u610f\u662f\u6267\u884c\u4e86 resolve \u540e\u8fd8\u662f\u4f1a\u6267\u884c reject\uff0c\u4f46\u662f\u65e0\u6cd5\u6539\u53d8 Promise \u72b6\u6001\uff09"),(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"\u5f85\u5b9a(pending): \u521d\u59cb\u72b6\u6001\uff0c\u65e2\u6ca1\u6709\u88ab\u5151\u73b0\uff0c\u4e5f\u6ca1\u6709\u88ab\u62d2\u7edd\uff1b"),(0,s.kt)("li",{parentName:"ul"},"\u5df2\u5151\u73b0(fulfilled): \u610f\u5473\u7740\u64cd\u4f5c\u6210\u529f\u5b8c\u6210\uff1b"),(0,s.kt)("li",{parentName:"ul"},"\u5df2\u62d2\u7edd(rejected): \u610f\u5473\u7740\u64cd\u4f5c\u5931\u8d25\uff1b")))),(0,s.kt)("h2",{id:"promise-\u5b9e\u4f8b\u65b9\u6cd5"},"Promise \u5b9e\u4f8b\u65b9\u6cd5"),(0,s.kt)("h3",{id:"resolve-\u53c2\u6570"},"resolve \u53c2\u6570"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c resolve \u4f20\u5165\u4e00\u4e2a\u666e\u901a\u7684\u503c\u6216\u8005\u5bf9\u8c61\uff0c\u90a3\u4e48\u8fd9\u4e2a\u503c\u4f1a\u4f5c\u4e3a then \u56de\u8c03\u7684\u53c2\u6570 res"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c resolve \u4e2d\u4f20\u5165\u7684\u662f\u53e6\u5916\u4e00\u4e2a Promise\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65b0 Promise \u4f1a\u51b3\u5b9a\u539f Promise \u7684\u72b6\u6001\uff0c\u76f8\u5f53\u4e8e\u72b6\u6001\u8fdb\u884c\u4e86\u79fb\u4ea4\uff08\u53c2\u6570\u4f20\u9012\uff09"),(0,s.kt)("li",{parentName:"ul"},"\u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u6709 then \u65b9\u6cd5\uff0c\u90a3\u4e48\u4f1a\u6267\u884c\u8be5 then \u65b9\u6cd5\uff0c\u5e76\u4e14\u6839\u636e then \u65b9\u6cd5\u7684\u7ed3\u679c\u6765\u51b3\u5b9a Promise \u7684\u72b6\u6001")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// \u4f20\u5165\u4e00\u4e2a\u666e\u901a\u503c\u6216\u8005\u5bf9\u8c61\n\nnew Promise((resolve, reject) => {\n  resolve("normal resolve");\n}).then((res) => {\n  console.log("res:", res); // res normal resolve\n});\n\n// \u4f20\u5165\u53e6\u4e00\u4e2apromise\nnew Promise((resolve, reject) => {\n  resolve(\n    new Promise((resolve, reject) => {\n      resolve("\u7b2c\u4e8c\u4e2aPromise\u7684resolve");\n    })\n  );\n}).then(\n  (res) => {\n    console.log("res", res); // res \u7b2c\u4e8c\u4e2aPromise\u7684resolve\n  },\n  (err) => {\n    console.log("err", err);\n  }\n);\n\n// \u4f20\u5165\u4e00\u4e2a\u5b9e\u73b0\u4e86 then \u65b9\u6cd5\u7684\u5bf9\u8c61 (thenable \u63a5\u53e3)\nnew Promise((resolve, reject) => {\n  const obj = {\n    // resolve reject\u4f1a\u88ab\u4f20\u8fdb\u6765\n    then: function (resolve, reject) {\n      resolve("resolve message");\n    },\n  };\n  resolve(obj);\n}).then(\n  (res) => {\n    console.log("res", res); // res resolve message\n  },\n  (err) => {\n    console.log("err", err);\n  }\n);\n')),(0,s.kt)("h3",{id:"then-\u65b9\u6cd5"},"then \u65b9\u6cd5"),(0,s.kt)("p",null,"then \u65b9\u6cd5\u662f Promise \u5bf9\u8c61\u4e0a\u7684\u4e00\u4e2a\u65b9\u6cd5\uff1a\u5b83\u5176\u5b9e\u662f\u653e\u5728 Promise \u7684\u539f\u578b\u4e0a\u7684 Promise.prototype.then"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"class Promsie {\n    // \u5bf9\u8c61\u65b9\u6cd5\n    // const promise = new Promise(); promise.then() \u8c03\u7528\n    then (){\n\n    }\n    // \u7c7b\u65b9\u6cd5\n    // Promise.all()\u8c03\u7528\n    staic all(){\n\n    }\n}\n")),(0,s.kt)("p",null,"then \u65b9\u6cd5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"fulfilled \u7684\u56de\u8c03\u51fd\u6570\uff1a\u5f53\u72b6\u6001\u53d8\u6210 fulfilled \u65f6\u4f1a\u56de\u8c03\u7684\u51fd\u6570\uff08\u6267\u884c\u4e86 resolve \u540e\uff09;"),(0,s.kt)("li",{parentName:"ul"},"reject \u7684\u56de\u8c03\u51fd\u6570\uff1a\u5f53\u72b6\u6001\u53d8\u6210 rejected \u65f6\u4f1a\u56de\u8c03\u7684\u51fd\u6570\uff08\u6267\u884c\u4e86 reject \u540e\uff09;")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Promise \u7684\u5bf9\u8c61\u65b9\u6cd5\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"console.log(Object.getOwnPropertyNames(Promise.prototype))"),"\u4f1a\u8f93\u51fa",(0,s.kt)("inlineCode",{parentName:"p"},"['constructor', 'then', 'catch', 'finally']")))),(0,s.kt)("h4",{id:"\u591a\u6b21\u8c03\u7528-then-\u65b9\u6cd5"},"\u591a\u6b21\u8c03\u7528 then \u65b9\u6cd5"),(0,s.kt)("p",null,"\u4e00\u4e2a Promise \u7684 then \u65b9\u6cd5\u53ef\u4ee5\u88ab\u591a\u6b21\u8c03\u7528\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u8c03\u7528\u6211\u4eec\u90fd\u53ef\u4ee5\u4f20\u5165\u5bf9\u5e94\u7684 fulfilled \u56de\u8c03\uff1b"),(0,s.kt)("li",{parentName:"ul"},"\u5f53 Promise \u7684\u72b6\u6001\u53d8\u6210 fulfilled \u7684\u65f6\u5019\uff0c\u8fd9\u4e9b\u56de\u8c03\u51fd\u6570\u90fd\u4f1a\u88ab\u6267\u884c\uff1b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'promise.then((res) => {\n  console.log("res1:", res);\n});\n\npromise.then((res) => {\n  console.log("res2:", res);\n});\n\npromise.then((res) => {\n  console.log("res3:", res);\n});\n')),(0,s.kt)("h4",{id:"then-\u65b9\u6cd5\u7684\u8fd4\u56de\u503c"},"then \u65b9\u6cd5\u7684\u8fd4\u56de\u503c"),(0,s.kt)("p",null,"then \u65b9\u6cd5\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\u53ef\u4ee5\u6709\u8fd4\u56de\u503c\uff0c\u5b9e\u9645\u4e0a then \u65b9\u6cd5\u672c\u8eab\u5c31\u6709\u8fd4\u56de\u503c\uff0c\u8fd4\u56de\u503c\u662f\u4e00\u4e2a promise\uff0c\u8be5",(0,s.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c\u5b9e\u9645\u4e0a\u4f1a\u4f5c\u4e3a\u8fd4\u56de\u7684 Promise \u7684 resolve \u53c2\u6570"),"\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u666e\u901a\u503c\uff08\u6570\u5b57/\u5b57\u7b26\u4e32/\u666e\u901a\u5bf9\u8c61/undefined\uff09\uff0c\u90a3\u4e2a\u8fd9\u4e2a\u666e\u901a\u503c\u4f1a\u88ab\u4f5c\u4e3a\u65b0\u7684 promise \u7684 resolve \u503c\uff08\u7528 resolve \u8fdb\u884c\u5305\u88f9\uff09")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  resolve("111");\n});\n\npromise.then((res) => {\n  // \u5982\u679c\u8fd9\u91cc\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u76f8\u5f53\u4e8e return undefined\uff0creresolve(undefined)\uff0c\u8fd9\u65f6\u5019\u94fe\u5f0f\u8c03\u7528\u7684res\u5c31\u662fundefinedes\n  return "aaa"; // \u8fd9\u91cc\u76f8\u5f53\u4e8e return new Promise((resolve,reject)=>{resolve("aaa")})\n});\n\n// \u94fe\u5f0f\u8c03\u7528\npromise\n  .then((res) => {\n    return "aaaa";\n  })\n  .then((res) => {\n    console.log("res", res); // res aaaa\n    return "bbbb";\n  })\n  .then((res) => {\n    console.log("res", res); // res bbbb\n  });\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u8fd9\u4e2a promise \u540c\u6837\u4f1a\u4f5c\u4e3a\u65b0\u7684 promise \u7684 resolve \u503c\uff0c\u4e5f\u5c31\u662f\u76f8\u5f53\u4e8e resolve(new Promise(()=>{}))\uff0c\u4f1a\u8fdb\u884c\u72b6\u6001\u79fb\u4ea4\uff0c\u4f5c\u4e3a resolve \u53c2\u6570\u4f20\u5165\u7684 promise \u51b3\u5b9a\u6700\u7ec8\u7684 promise \u503c")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'promise\n  .then((res) => {\n    return new Promise((resolve, reject) => {\n      setTimeout(() => {\n        resolve(1111);\n      }, 3000);\n    });\n  })\n  .then((res) => {\n    console.log("res", res); // \u4e09\u79d2\u540e\u6253\u5370 res 1111\n  });\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5e76\u4e14\u8be5\u5bf9\u8c61\u5b9e\u73b0\u4e86 thenable")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'promise\n  .then((res) => {\n    return {\n      then: function (resolve, reject) {\n        resolve(2222);\n      },\n    };\n  })\n  .then((res) => {\n    console.log("res:", res); // res 2222\n  });\n\n// \u8fd9\u91cc\u5c31\u76f8\u5f53\u4e8e\npromise\n  .then((res) => {\n    return new Promsie((resolve, reject) => {\n      resolve(obj.then(resolve, reject));\n    });\n  })\n  .then((res) => {\n    console.log("res:", res);\n  });\n')),(0,s.kt)("h3",{id:"catch-\u65b9\u6cd5"},"catch \u65b9\u6cd5"),(0,s.kt)("p",null,"catch \u65b9\u6cd5\u540c then \u65b9\u6cd5\u4e00\u6837\uff0c\u4e5f\u662f Promise \u5bf9\u8c61\u4e0a\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u4e5f\u662f\u653e\u5728 Promise \u7684\u539f\u578b\u4e0a\u7684 Promise.prototype.catch\uff1a"),(0,s.kt)("p",null,"\u4e00\u4e2a Promise \u7684 catch \u65b9\u6cd5\u662f\u53ef\u4ee5\u88ab\u591a\u6b21\u8c03\u7528\u7684\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u8c03\u7528\u6211\u4eec\u90fd\u53ef\u4ee5\u4f20\u5165\u5bf9\u5e94\u7684 reject \u56de\u8c03\uff1b"),(0,s.kt)("li",{parentName:"ul"},"\u5f53 Promise \u7684\u72b6\u6001\u53d8\u6210 reject \u7684\u65f6\u5019\uff0c\u8fd9\u4e9b\u56de\u8c03\u51fd\u6570\u90fd\u4f1a\u88ab\u6267\u884c\uff1b")),(0,s.kt)("p",null,"catch \u65b9\u6cd5\u4e5f\u662f\u4f1a\u8fd4\u56de\u4e00\u4e2a Promise \u5bf9\u8c61\u7684\uff0c\u6240\u4ee5 catch \u65b9\u6cd5\u540e\u9762\u6211\u4eec\u53ef\u4ee5\u7ee7\u7eed\u8c03\u7528 then \u65b9\u6cd5\u6216\u8005 catch \u65b9\u6cd5\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  reject("error message");\n});\n\n// \u8fd9\u91cccatch\u5728\u4f20\u5165\u7684\u56de\u8c03\u6267\u884c\u5b8c\u540e\uff0c\u9ed8\u8ba4\u72b6\u6001\u4f9d\u65e7\u662ffulfilled\npromise\n  .catch((err) => {\n    console.log("err1", err); // err1 error message\n    // \u8fd9\u91cc\u76f8\u5f53\u4e8e return undefined => return new Promsie((resolve,reject)=>{resolve(undefined)})\n  })\n  .catch((err) => {\n    console.log("err2", err);\n  })\n  .then((res) => {\n    console.log("res", res); // res undefined\n  });\n\n// \u5982\u679c\u60f3\u8981\u5728\u540e\u7eed\u7ee7\u7eed\u6267\u884ccatch\uff0c\u9700\u8981\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\npromise\n  .catch((err) => {\n    console.log("err1", err); // err1 error message\n    throw new Error("error message");\n  })\n  .catch((err) => {\n    console.log("err2", err); // err2 Error: error message + \u8c03\u7528\u6808\u7684\u76f8\u5173\u4fe1\u606f\n  })\n  .then((res) => {\n    console.log("res", res); // res undefined\n  });\n')),(0,s.kt)("h3",{id:"finally-\u65b9\u6cd5"},"finally \u65b9\u6cd5"),(0,s.kt)("p",null,"finally \u662f\u5728 ES9(ES2018)\u4e2d\u65b0\u589e\u7684\u4e00\u4e2a\u7279\u6027\uff1a\u8868\u793a\u65e0\u8bba Promise \u5bf9\u8c61\u65e0\u8bba\u53d8\u6210 fulfilled \u8fd8\u662f reject \u72b6\u6001\uff0c\u6700\u7ec8\u90fd\u4f1a\u88ab\u6267\u884c\u7684\u4ee3\u7801\u3002"),(0,s.kt)("p",null,"finally \u65b9\u6cd5\u662f\u4e0d\u63a5\u6536\u53c2\u6570\u7684\uff0c\u56e0\u4e3a\u65e0\u8bba\u524d\u9762\u662f fulfilled \u72b6\u6001\uff0c\u8fd8\u662f reject \u72b6\u6001\uff0c\u5b83\u90fd\u4f1a\u6267\u884c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((reslove, reject) => {\n  reject("rejected");\n});\n\npromise\n  .then((res) => {\n    console.log("res", res);\n  })\n  .catch((err) => {\n    console.log("err", err); // err rejected\n  })\n  .finally(() => {\n    console.log("finally action"); // finally action\n    // \u8fd9\u91cc\u4f9d\u7136\u662f\u76f8\u5f53\u4e8ereturn undefined\n  });\n')),(0,s.kt)("h2",{id:"promsie-\u7c7b\u65b9\u6cd5"},"Promsie \u7c7b\u65b9\u6cd5"),(0,s.kt)("h3",{id:"resolve-\u65b9\u6cd5"},"resolve \u65b9\u6cd5"),(0,s.kt)("p",null,"\u524d\u9762\u6211\u4eec\u5b66\u4e60\u7684 then\u3001catch\u3001finally \u65b9\u6cd5\u90fd\u5c5e\u4e8e Promise \u7684\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u90fd\u662f\u5b58\u653e\u5728 Promise \u7684 prototype \u4e0a\u7684\u3002"),(0,s.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u5df2\u7ecf\u6709\u4e00\u4e2a\u73b0\u6210\u7684\u5185\u5bb9\u4e86\uff0c\u5e0c\u671b\u5c06\u5176\u8f6c\u6210 Promise \u6765\u4f7f\u7528\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 Promise.resolve \u65b9\u6cd5\u6765\u5b8c\u6210\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Promise.resolve \u7684\u7528\u6cd5\u76f8\u5f53\u4e8e new Promise\uff0c\u5e76\u4e14\u6267\u884c resolve \u64cd\u4f5c\u3002"),"\uff08\u6240\u4ee5\u4e0e\u524d\u9762\u8bb2\u7684\u5b9e\u4f8b\u65b9\u6cd5 resolve \u662f\u4e00\u81f4\u7684\uff09"),(0,s.kt)("p",null,"resolve \u53c2\u6570\u7684\u5f62\u6001:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u60c5\u51b5\u4e00:\u53c2\u6570\u662f\u4e00\u4e2a\u666e\u901a\u7684\u503c\u6216\u8005\u5bf9\u8c61"),(0,s.kt)("li",{parentName:"ul"},"\u60c5\u51b5\u4e8c:\u53c2\u6570\u672c\u8eab\u662f Promise"),(0,s.kt)("li",{parentName:"ul"},"\u60c5\u51b5\u4e09:\u53c2\u6570\u662f\u4e00\u4e2a thenable")),(0,s.kt)("h3",{id:"reject-\u65b9\u6cd5"},"reject \u65b9\u6cd5"),(0,s.kt)("p",null,"reject \u65b9\u6cd5\u7c7b\u4f3c\u4e8e resolve \u65b9\u6cd5\uff0c\u53ea\u662f\u4f1a\u5c06 Promise \u5bf9\u8c61\u7684\u72b6\u6001\u8bbe\u7f6e\u4e3a reject \u72b6\u6001\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Promise.reject \u7684\u7528\u6cd5\u76f8\u5f53\u4e8e new Promise\uff0c\u53ea\u662f\u4f1a\u8c03\u7528 reject\u3002")),(0,s.kt)("p",null,"Promise.reject \u4f20\u5165\u7684\u53c2\u6570\u65e0\u8bba\u662f\u4ec0\u4e48\u5f62\u6001\uff0c\u90fd\u4f1a\u76f4\u63a5\u4f5c\u4e3a reject \u72b6\u6001\u7684\u53c2\u6570\u4f20\u9012\u5230 catch \u7684\u3002"),(0,s.kt)("h3",{id:"all-\u65b9\u6cd5"},"all \u65b9\u6cd5"),(0,s.kt)("p",null,"Promise.all \u7684\u4f5c\u7528\u662f\u5c06\u591a\u4e2a Promise \u5305\u88f9\u5728\u4e00\u8d77\u5f62\u6210\u4e00\u4e2a\u65b0\u7684 Promise\u3002"),(0,s.kt)("p",null,"\u65b0\u7684 Promise \u72b6\u6001\u7531\u5305\u88f9\u7684\u6240\u6709 Promise \u5171\u540c\u51b3\u5b9a\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5f53\u6240\u6709\u7684 Promise \u72b6\u6001\u53d8\u6210 fulfilled \u72b6\u6001\u65f6\uff0c\u65b0\u7684 Promise \u72b6\u6001\u4e3a fulfilled\uff0c\u5e76\u4e14\u4f1a\u5c06\u6240\u6709 Promise \u7684\u8fd4\u56de\u503c \u7ec4\u6210\u4e00\u4e2a\u6570\u7ec4;"),(0,s.kt)("li",{parentName:"ul"},"\u5f53\u6709\u4e00\u4e2a Promise \u72b6\u6001\u4e3a reject \u65f6\uff0c\u65b0\u7684 Promise \u72b6\u6001\u4e3a reject\uff0c\u5e76\u4e14\u4f1a\u5c06\u7b2c\u4e00\u4e2a reject \u7684\u8fd4\u56de\u503c\u4f5c\u4e3a\u53c2\u6570;")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// \u521b\u5efa\u591a\u4e2aPromise\nconst p1 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve(11111);\n  }, 1000);\n});\n\nconst p2 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    reject(22222);\n  }, 2000);\n});\n\nconst p3 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve(33333);\n  }, 3000);\n});\n\n// \u6240\u6709\u7684Promise\u90fd\u53d8\u6210fulfilled\u65f6, \u518d\u62ff\u5230\u7ed3\u679c\n// \u5728\u62ff\u5230\u6240\u6709\u7ed3\u679c\u4e4b\u524d, \u6709\u4e00\u4e2apromise\u53d8\u6210\u4e86rejected, \u90a3\u4e48\u6574\u4e2apromise\u662frejected\n// "aaa" \u76f8\u5f53\u4e8e Promise.resolve("aaa")\n// \u6309\u7167\u653e\u5165\u6570\u7ec4\u7684\u987a\u5e8f\nPromise.all([p2, p1, p3, "aaaa"])\n  .then((res) => {\n    console.log(res); // \u5982\u679c p2 \u662f resolve\uff0c\u90a3\u4e48\u8fd9\u91cc\u4e09\u79d2\u540e\u6253\u5370  [22222,11111,33333,aaaa]\n  })\n  .catch((err) => {\n    console.log("err:", err); // \u4e24\u79d2\u540e\u6253\u5370 err 22222\n  });\n')),(0,s.kt)("h3",{id:"allsettled-\u65b9\u6cd5"},"allSettled \u65b9\u6cd5"),(0,s.kt)("p",null,"all \u65b9\u6cd5\u6709\u4e00\u4e2a\u7f3a\u9677\uff1a\u5f53\u6709\u5176\u4e2d\u4e00\u4e2a Promise \u53d8\u6210 reject \u72b6\u6001\u65f6\uff0c\u65b0 Promise \u5c31\u4f1a\u7acb\u5373\u53d8\u6210\u5bf9\u5e94\u7684 reject \u72b6\u6001\u3002"),(0,s.kt)("p",null,"\u90a3\u4e48\u5bf9\u4e8e resolved \u7684\uff0c\u4ee5\u53ca\u4f9d\u7136\u5904\u4e8e pending \u72b6\u6001\u7684 Promise\uff0c\u6211\u4eec\u662f\u83b7\u53d6\u4e0d\u5230\u5bf9\u5e94\u7684\u7ed3\u679c\u7684;"),(0,s.kt)("p",null,"\u5728 ES11(ES2020)\u4e2d\uff0c\u6dfb\u52a0\u4e86\u65b0\u7684 API Promise.allSettled\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8be5\u65b9\u6cd5\u4f1a\u5728\u6240\u6709\u7684 Promise \u90fd\u6709\u7ed3\u679c\uff08settled\uff09\uff0c\u65e0\u8bba\u662f fulfilled\uff0c\u8fd8\u662f reject \u65f6\uff0c\u624d\u4f1a\u6709\u6700\u7ec8\u7684\u72b6\u6001\uff1b"),(0,s.kt)("li",{parentName:"ul"},"\u5e76\u4e14\u8fd9\u4e2a Promise \u7684\u7ed3\u679c\u4e00\u5b9a\u662f fulfilled \u7684\uff1b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u521b\u5efa\u591a\u4e2aPromise\nconst p1 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve(11111);\n  }, 1000);\n});\n\nconst p2 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    reject(22222);\n  }, 2000);\n});\n\nconst p3 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve(33333);\n  }, 3000);\n});\n\n// allSettled\nPromise.allSettled([p1, p2, p3])\n  .then((res) => {\n    console.log(res);\n  })\n  .catch((err) => {\n    console.log(err);\n  });\n")),(0,s.kt)("p",null,"\u6253\u5370\u7ed3\u679c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'[\n  { status: "fulfilled", value: 11111 },\n  { status: "rejected", reason: 22222 },\n  { status: "fulfilled", value: 33333 },\n];\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"allSettled \u7684\u7ed3\u679c\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u5b58\u653e\u7740\u6bcf\u4e00\u4e2a Promise \u7684\u7ed3\u679c\uff0c\u5e76\u4e14\u662f\u5bf9\u5e94\u4e00\u4e2a\u5bf9\u8c61\u7684"),(0,s.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u5bf9\u8c61\u4e2d\u5305\u542b status \u72b6\u6001\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684 value \u503c\u6216\u8005 renson \u503c;")),(0,s.kt)("h3",{id:"race-\u65b9\u6cd5"},"race \u65b9\u6cd5"),(0,s.kt)("p",null,"\u5982\u679c\u6709\u4e00\u4e2a Promise \u6709\u4e86\u7ed3\u679c\uff0c\u6211\u4eec\u5c31\u5e0c\u671b\u51b3\u5b9a\u6700\u7ec8\u65b0 Promise \u7684\u72b6\u6001\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528 race \u65b9\u6cd5:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"race \u662f\u7ade\u6280\u3001\u7ade\u8d5b\u7684\u610f\u601d\uff0c\u8868\u793a\u591a\u4e2a Promise \u76f8\u4e92\u7ade\u4e89\uff0c\u8c01\u5148\u6709\u7ed3\u679c\uff0c\u90a3\u4e48\u5c31\u4f7f\u7528\u8c01\u7684\u7ed3\u679c;")),(0,s.kt)("h3",{id:"any-\u65b9\u6cd5"},"any \u65b9\u6cd5"),(0,s.kt)("p",null,"any \u65b9\u6cd5\u662f ES12 \uff08ES2021\uff09\u4e2d\u65b0\u589e\u7684\u65b9\u6cd5\uff0c\u548c race \u65b9\u6cd5\u662f\u7c7b\u4f3c\u7684\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"any \u65b9\u6cd5\u4f1a\u7b49\u5230\u4e00\u4e2a fulfilled \u72b6\u6001\uff0c\u7136\u540e\u51b3\u5b9a\u65b0 Promise \u7684\u72b6\u6001\uff1b"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u6240\u6709\u7684 Promise \u90fd\u662f reject \u7684\uff0c\u90a3\u4e48\u4e5f\u4f1a\u7b49\u5230\u6240\u6709\u7684 Promise \u90fd\u53d8\u6210 rejected \u72b6\u6001\uff1b\u7136\u540e\u4f1a\u62a5\u4e00\u4e2a AggregateError \u7684\u9519\u8bef\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// \u521b\u5efa\u591a\u4e2aPromise\nconst p1 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    // resolve(11111)\n    reject(1111);\n  }, 1000);\n});\n\nconst p2 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    reject(22222);\n  }, 500);\n});\n\nconst p3 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    // resolve(33333)\n    reject(3333);\n  }, 3000);\n});\n\n// any\u65b9\u6cd5\nPromise.any([p1, p2, p3])\n  .then((res) => {\n    console.log("res:", res);\n  })\n  .catch((err) => {\n    console.log("err:", err); // err: AggregateError: All promises were rejected\n    // \u8fd9\u4e2aerr\u91cc\u9762\u6709\u4e00\u4e2a\u5c5e\u6027\u53eb errors\uff0c\u53ef\u4ee5\u62ff\u5230\u9519\u8bef\u503c\uff08\u6240\u6709reject\u7684\u53c2\u6570\u7ec4\u6210\u7684\u6570\u7ec4\uff09\n  });\n')),(0,s.kt)("h2",{id:"\u624b\u5199"},"\u624b\u5199"),(0,s.kt)("p",null,"\u63a8\u8350\u8fd9\u4e00\u7bc7\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6945319439772434469"},"https://juejin.cn/post/6945319439772434469")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// MyPromise.js\n\n// \u5148\u5b9a\u4e49\u4e09\u4e2a\u5e38\u91cf\u8868\u793a\u72b6\u6001\nconst PENDING = "pending";\nconst FULFILLED = "fulfilled";\nconst REJECTED = "rejected";\n\n// \u65b0\u5efa MyPromise \u7c7b\nclass MyPromise {\n  constructor(executor) {\n    // executor \u662f\u4e00\u4e2a\u6267\u884c\u5668\uff0c\u8fdb\u5165\u4f1a\u7acb\u5373\u6267\u884c\n    // \u5e76\u4f20\u5165resolve\u548creject\u65b9\u6cd5\n    try {\n      executor(this.resolve, this.reject);\n    } catch (error) {\n      this.reject(error);\n    }\n  }\n\n  // \u50a8\u5b58\u72b6\u6001\u7684\u53d8\u91cf\uff0c\u521d\u59cb\u503c\u662f pending\n  status = PENDING;\n  // \u6210\u529f\u4e4b\u540e\u7684\u503c\n  value = null;\n  // \u5931\u8d25\u4e4b\u540e\u7684\u539f\u56e0\n  reason = null;\n\n  // \u5b58\u50a8\u6210\u529f\u56de\u8c03\u51fd\u6570\n  onFulfilledCallbacks = [];\n  // \u5b58\u50a8\u5931\u8d25\u56de\u8c03\u51fd\u6570\n  onRejectedCallbacks = [];\n\n  // \u66f4\u6539\u6210\u529f\u540e\u7684\u72b6\u6001\n  resolve = (value) => {\n    // \u53ea\u6709\u72b6\u6001\u662f\u7b49\u5f85\uff0c\u624d\u6267\u884c\u72b6\u6001\u4fee\u6539\n    if (this.status === PENDING) {\n      // \u72b6\u6001\u4fee\u6539\u4e3a\u6210\u529f\n      this.status = FULFILLED;\n      // \u4fdd\u5b58\u6210\u529f\u4e4b\u540e\u7684\u503c\n      this.value = value;\n      // resolve\u91cc\u9762\u5c06\u6240\u6709\u6210\u529f\u7684\u56de\u8c03\u62ff\u51fa\u6765\u6267\u884c\n      while (this.onFulfilledCallbacks.length) {\n        // Array.shift() \u53d6\u51fa\u6570\u7ec4\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u7136\u540e\uff08\uff09\u8c03\u7528\uff0cshift\u4e0d\u662f\u7eaf\u51fd\u6570\uff0c\u53d6\u51fa\u540e\uff0c\u6570\u7ec4\u5c06\u5931\u53bb\u8be5\u5143\u7d20\uff0c\u76f4\u5230\u6570\u7ec4\u4e3a\u7a7a\n        this.onFulfilledCallbacks.shift()(value);\n      }\n    }\n  };\n\n  // \u66f4\u6539\u5931\u8d25\u540e\u7684\u72b6\u6001\n  reject = (reason) => {\n    // \u53ea\u6709\u72b6\u6001\u662f\u7b49\u5f85\uff0c\u624d\u6267\u884c\u72b6\u6001\u4fee\u6539\n    if (this.status === PENDING) {\n      // \u72b6\u6001\u6210\u529f\u4e3a\u5931\u8d25\n      this.status = REJECTED;\n      // \u4fdd\u5b58\u5931\u8d25\u540e\u7684\u539f\u56e0\n      this.reason = reason;\n      // resolve\u91cc\u9762\u5c06\u6240\u6709\u5931\u8d25\u7684\u56de\u8c03\u62ff\u51fa\u6765\u6267\u884c\n      while (this.onRejectedCallbacks.length) {\n        this.onRejectedCallbacks.shift()(reason);\n      }\n    }\n  };\n\n  then(onFulfilled, onRejected) {\n    // \u6839\u636e\u6807\u51c6\uff0c\u5982\u679cthen\u7684\u53c2\u6570\u4e0d\u662ffunction\uff0c\u5219\u6211\u4eec\u9700\u8981\u5ffd\u7565\u5b83\uff0c\u6b64\u5904\u4ee5\u5982\u4e0b\u65b9\u5f0f\u5904\u7406\uff0c\u6240\u4ee5\u4f1a\u53d1\u751f\u503c\u7a7f\u900f\u73b0\u8c61\n    const realOnFulfilled =\n      typeof onFulfilled === "function" ? onFulfilled : (value) => value;\n    const realOnRejected =\n      typeof onRejected === "function"\n        ? onRejected\n        : (reason) => {\n            throw reason;\n          };\n\n    // \u4e3a\u4e86\u94fe\u5f0f\u8c03\u7528\u8fd9\u91cc\u76f4\u63a5\u521b\u5efa\u4e00\u4e2a MyPromise\uff0c\u5e76\u5728\u540e\u9762 return \u51fa\u53bb\n    const promise2 = new MyPromise((resolve, reject) => {\n      const fulfilledMicrotask = () => {\n        // \u521b\u5efa\u4e00\u4e2a\u5fae\u4efb\u52a1\u7b49\u5f85 promise2 \u5b8c\u6210\u521d\u59cb\u5316\n        queueMicrotask(() => {\n          try {\n            // \u83b7\u53d6\u6210\u529f\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u7ed3\u679c\n            const x = realOnFulfilled(this.value);\n            // \u4f20\u5165 resolvePromise \u96c6\u4e2d\u5904\u7406\n            resolvePromise(promise2, x, resolve, reject);\n          } catch (error) {\n            reject(error);\n          }\n        });\n      };\n\n      const rejectedMicrotask = () => {\n        // \u521b\u5efa\u4e00\u4e2a\u5fae\u4efb\u52a1\u7b49\u5f85 promise2 \u5b8c\u6210\u521d\u59cb\u5316\n        queueMicrotask(() => {\n          try {\n            // \u8c03\u7528\u5931\u8d25\u56de\u8c03\uff0c\u5e76\u4e14\u628a\u539f\u56e0\u8fd4\u56de\n            const x = realOnRejected(this.reason);\n            // \u4f20\u5165 resolvePromise \u96c6\u4e2d\u5904\u7406\n            resolvePromise(promise2, x, resolve, reject);\n          } catch (error) {\n            reject(error);\n          }\n        });\n      };\n      // \u5224\u65ad\u72b6\u6001\n      if (this.status === FULFILLED) {\n        fulfilledMicrotask();\n      } else if (this.status === REJECTED) {\n        rejectedMicrotask();\n      } else if (this.status === PENDING) {\n        // \u7b49\u5f85\n        // \u56e0\u4e3a\u4e0d\u77e5\u9053\u540e\u9762\u72b6\u6001\u7684\u53d8\u5316\u60c5\u51b5\uff0c\u6240\u4ee5\u5c06\u6210\u529f\u56de\u8c03\u548c\u5931\u8d25\u56de\u8c03\u5b58\u50a8\u8d77\u6765\n        // \u7b49\u5230\u6267\u884c\u6210\u529f\u5931\u8d25\u51fd\u6570\u7684\u65f6\u5019\u518d\u4f20\u9012\n        this.onFulfilledCallbacks.push(fulfilledMicrotask);\n        this.onRejectedCallbacks.push(rejectedMicrotask);\n      }\n    });\n\n    return promise2;\n  }\n\n  // resolve \u9759\u6001\u65b9\u6cd5\n  static resolve(parameter) {\n    // \u5982\u679c\u4f20\u5165 MyPromise \u5c31\u76f4\u63a5\u8fd4\u56de\n    if (parameter instanceof MyPromise) {\n      return parameter;\n    }\n\n    // \u8f6c\u6210\u5e38\u89c4\u65b9\u5f0f\n    return new MyPromise((resolve) => {\n      resolve(parameter);\n    });\n  }\n\n  // reject \u9759\u6001\u65b9\u6cd5\n  static reject(reason) {\n    return new MyPromise((resolve, reject) => {\n      reject(reason);\n    });\n  }\n}\n\nfunction resolvePromise(promise2, x, resolve, reject) {\n  // \u5982\u679c\u76f8\u7b49\u4e86\uff0c\u8bf4\u660ereturn\u7684\u662f\u81ea\u5df1\uff0c\u629b\u51fa\u7c7b\u578b\u9519\u8bef\u5e76\u8fd4\u56de\n  if (promise2 === x) {\n    return reject(\n      new TypeError("Chaining cycle detected for promise #<Promise>")\n    );\n  }\n  // \u5224\u65adx\u662f\u4e0d\u662f MyPromise \u5b9e\u4f8b\u5bf9\u8c61\n  if (x instanceof MyPromise) {\n    // \u6267\u884c x\uff0c\u8c03\u7528 then \u65b9\u6cd5\uff0c\u76ee\u7684\u662f\u5c06\u5176\u72b6\u6001\u53d8\u4e3a fulfilled \u6216\u8005 rejected\n    // x.then(value => resolve(value), reason => reject(reason))\n    // \u7b80\u5316\u4e4b\u540e\n    x.then(resolve, reject);\n  } else {\n    // \u666e\u901a\u503c\n    resolve(x);\n  }\n}\n\nmodule.exports = MyPromise;\n')),(0,s.kt)("p",null,"\u5173\u4e8e\u503c\u7a7f\u900f\u53ef\u89c1\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/4e8aaa87540a"},"Promise \u503c\u7a7f\u900f")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/21834559"},"\u53f2\u4e0a\u6700\u6613\u8bfb\u61c2\u7684 Promise/A+ \u5b8c\u5168\u5b9e\u73b0"))))}p.isMDXComponent=!0}}]);