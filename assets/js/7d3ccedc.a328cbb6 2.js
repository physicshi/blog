"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8110],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),k=a,d=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7916:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:4},p=void 0,c={unversionedId:"\u6d4f\u89c8\u5668/v8\u7684\u5185\u5b58\u7ba1\u7406",id:"\u6d4f\u89c8\u5668/v8\u7684\u5185\u5b58\u7ba1\u7406",isDocsHomePage:!1,title:"v8\u7684\u5185\u5b58\u7ba1\u7406",description:"\u6211\u4eec\u5728\u5b66\u5230\u6570\u636e\u7c7b\u578b\u7684\u65f6\u5019\u5c31\u77e5\u9053\uff0c\u57fa\u7840\u6570\u636e\u7c7b\u578b\u5206\u914d\u5728\u6808\u4e0a\uff08\u53d8\u91cf\u540d\u3001\u53d8\u91cf\u503c\uff09\uff0c\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5206\u914d\u5728\u5806\u4e0a\uff08\u53d8\u91cf\u540d\u3001\u53d8\u91cf\u503c\u5b58\u7684\u662f\u5806\u4e0a\u7684\u5f15\u7528\u5730\u5740\uff09\u3002",source:"@site/docs/\u6d4f\u89c8\u5668/v8\u7684\u5185\u5b58\u7ba1\u7406.md",sourceDirName:"\u6d4f\u89c8\u5668",slug:"/\u6d4f\u89c8\u5668/v8\u7684\u5185\u5b58\u7ba1\u7406",permalink:"/blog/docs/\u6d4f\u89c8\u5668/v8\u7684\u5185\u5b58\u7ba1\u7406",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/\u6d4f\u89c8\u5668/v8\u7684\u5185\u5b58\u7ba1\u7406.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"v8 \u7684\u5de5\u4f5c\u6d41\u7a0b",permalink:"/blog/docs/\u6d4f\u89c8\u5668/v8\u7684\u5de5\u4f5c\u6d41\u7a0b"},next:{title:"\u6027\u80fd\u68c0\u6d4b",permalink:"/blog/docs/\u6d4f\u89c8\u5668/\u6027\u80fd\u68c0\u6d4b"}},u=[{value:"\u6808 Stack",id:"\u6808-stack",children:[]},{value:"\u5806 Heap",id:"\u5806-heap",children:[]},{value:"\u5185\u5b58\u7684\u751f\u547d\u5468\u671f",id:"\u5185\u5b58\u7684\u751f\u547d\u5468\u671f",children:[{value:"\u5f15\u7528\u8ba1\u6570",id:"\u5f15\u7528\u8ba1\u6570",children:[]},{value:"\u6807\u8bb0\u6e05\u9664",id:"\u6807\u8bb0\u6e05\u9664",children:[]}]},{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",children:[{value:"Performance",id:"performance",children:[]},{value:"Memory",id:"memory",children:[]}]}],m={toc:u};function s(e){var t=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6211\u4eec\u5728\u5b66\u5230\u6570\u636e\u7c7b\u578b\u7684\u65f6\u5019\u5c31\u77e5\u9053\uff0c\u57fa\u7840\u6570\u636e\u7c7b\u578b\u5206\u914d\u5728\u6808\u4e0a\uff08\u53d8\u91cf\u540d\u3001\u53d8\u91cf\u503c\uff09\uff0c\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5206\u914d\u5728\u5806\u4e0a\uff08\u53d8\u91cf\u540d\u3001\u53d8\u91cf\u503c\u5b58\u7684\u662f\u5806\u4e0a\u7684\u5f15\u7528\u5730\u5740\uff09\u3002"),(0,l.kt)("h2",{id:"\u6808-stack"},"\u6808 Stack"),(0,l.kt)("p",null,"\u6808\u7ed3\u6784\u662f\u7a0b\u5e8f\u8fd0\u884c\u7684\u57fa\u7840\uff0c\u56e0\u4e3a\u6bcf\u5f53\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u4e00\u5757\u8fde\u7eed\u7684\u5185\u5b58\u5c31\u4f1a\u5728\u6808\u9876\u88ab\u5206\u914d\u51fa\u6765\uff0c\u8fd9\u5757\u5185\u5b58\u88ab\u79f0\u4e3a\u5e27\uff08frame\uff09\uff1b"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b21\u8f7d\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"JS"),"\u4ee3\u7801\uff0c\u9996\u5148\u4f1a\u521b\u5efa\u4e00\u4e2a\u5168\u5c40\u73af\u5883\uff08\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"main"),"\u51fd\u6570\u5bf9\u5e94\u7684\u5e27\uff09\uff0c\u76f4\u5230\u7a0b\u5e8f\u9000\u51fa\u624d\u4f1a\u88ab\u9500\u6bc1\uff08\u6bd4\u5982\u5173\u95ed\u6d4f\u89c8\u5668\uff09\uff1b\u968f\u7740\u51fd\u6570\u4e00\u5c42\u5c42\u88ab\u8c03\u7528\uff0c\u6808\u4f1a\u4e00\u5c42\u5c42\u6269\u5c55\uff1b\u8c03\u7528\u7ed3\u675f\uff0c\u6808\u53c8\u4f1a\u4e00\u5c42\u5c42\u56de\u6eaf\uff0c\u628a\u5185\u5b58\u91ca\u653e\u56de\u53bb\u3002"),(0,l.kt)("p",null,"\u4e00\u65e6\u5f53\u524d\u7a0b\u5e8f\u7684\u8c03\u7528\u6808\u8d85\u51fa\u4e86\u7cfb\u7edf\u5141\u8bb8\u7684\u6700\u5927\u6808\u7a7a\u95f4\uff0c\u65e0\u6cd5\u521b\u5efa\u65b0\u7684\u5e27\uff0c\u6765\u8fd0\u884c\u4e0b\u4e00\u4e2a\u8981\u6267\u884c\u7684\u51fd\u6570\uff0c\u5c31\u4f1a\u53d1\u751f\u6808\u6ea2\u51fa\uff0c\u8fd9\u65f6\u7a0b\u5e8f\u4f1a\u88ab\u7cfb\u7edf\u7ec8\u6b62\uff0c\u4ea7\u751f\u5d29\u6e83\u4fe1\u606f\u3002\u6700\u5e38\u89c1\u7684\u662f\u9012\u5f52\u51fd\u6570\u6ca1\u6709\u8bbe\u7f6e\u8fb9\u754c\uff0c\u6700\u540e\u6ea2\u51fa\uff0c\u8fd9\u65f6\u7a0b\u5e8f\u4f1a\u88ab\u7cfb\u7edf\u7ec8\u6b62\uff0c\u4ea7\u751f\u5d29\u6e83\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u53ea\u9700\u8981\u79fb\u52a8\u6808\u6307\u9488\uff08stack pointer\uff09\uff0c\u867d\u7136\u51fd\u6570\u5bf9\u5e94\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u867d\u7136\u4fdd\u5b58\u5728\u6808\u5185\u5b58\u4e2d\uff0c\u4f46\u662f\u5df2\u7ecf\u662f\u65e0\u6548\u5185\u5b58\u4e86\uff0c\u518d\u6b21\u8c03\u7528\u53e6\u5916\u4e00\u4e2a\u51fd\u6570\u65f6\uff0c\u8fd9\u5757\u5185\u5bb9\u4f1a\u88ab\u76f4\u63a5\u8986\u76d6\u6389\uff0c\u7528\u6765\u5b58\u653e\u53e6\u5916\u4e00\u4e2a\u51fd\u6570\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u3002"),(0,l.kt)("h2",{id:"\u5806-heap"},"\u5806 Heap"),(0,l.kt)("p",null,"\u5806\u662f\u4e00\u79cd\u7ecf\u8fc7\u6392\u5e8f\u7684\u6811\u5f62\u6570\u636e\u7ed3\u6784\uff0c\u4e14\u80fd\u591f\u4fdd\u8bc1\u7236\u8282\u70b9\u6bd4\u5b50\u8282\u70b9\u5927\uff08\u6216\u5c0f\uff09\u3002\u5806\u7684\u7279\u70b9\u662f\u6839\u7ed3\u70b9\u7684\u503c\u6700\u5c0f\uff08\u6216\u6700\u5927\uff09\uff0c\u4e14\u6839\u7ed3\u70b9\u7684\u4e24\u4e2a\u5b50\u6811\u4e5f\u662f\u4e00\u4e2a\u5806\u3002\u5f53\u6839\u8282\u70b9\u4fdd\u5b58\u5806\u4e2d\u6700\u5927\u503c\u65f6\uff0c\u79f0\u4e3a\u5927\u6839\u5806\uff1b\u53cd\u4e4b\uff0c\u5219\u79f0\u4e3a\u5c0f\u6839\u5806\u3002"),(0,l.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u6240\u8bf4\u7684\u5806\u7684\u6570\u636e\u7ed3\u6784\uff0c\u662f\u6307\u4e8c\u53c9\u5806\u3002\u4e8c\u53c9\u5806\uff08Binary Heap\uff09\u662f\u6700\u7b80\u5355\u3001\u5e38\u7528\u7684\u5806\uff0c\u662f\u4e00\u68f5\u7b26\u5408\u5806\u7684\u6027\u8d28\u7684\u5b8c\u5168\u4e8c\u53c9\u6811\u3002\u5b83\u53ef\u4ee5\u5b9e\u73b0 O(logn) \u5730\u63d2\u5165\u6216\u5220\u9664\u67d0\u4e2a\u503c\uff0c\u5e76\u4e14 O(1) \u5730\u67e5\u8be2\u6700\u5927\uff08\u6216\u6700\u5c0f\uff09\u503c\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u5806\u7684\u8fd9\u4e2a\u7279\u6027\uff0c\u5e38\u7528\u6765\u5b9e\u73b0\u4f18\u5148\u961f\u5217\uff0c\u5806\u7684\u5b58\u53d6\u662f\u968f\u610f\uff0c\u8fd9\u5c31\u5982\u540c\u6211\u4eec\u5728\u56fe\u4e66\u9986\u7684\u4e66\u67b6\u4e0a\u53d6\u4e66\uff0c\u867d\u7136\u4e66\u7684\u6446\u653e\u662f\u6709\u987a\u5e8f\u7684\uff0c\u4f46\u662f\u6211\u4eec\u60f3\u53d6\u4efb\u610f\u4e00\u672c\u65f6\u4e0d\u5fc5\u50cf\u6808\u4e00\u6837\uff0c\u5148\u53d6\u51fa\u524d\u9762\u6240\u6709\u7684\u4e66\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5173\u5fc3\u4e66\u7684\u540d\u5b57\u3002"),(0,l.kt)("h2",{id:"\u5185\u5b58\u7684\u751f\u547d\u5468\u671f"},"\u5185\u5b58\u7684\u751f\u547d\u5468\u671f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5206\u914d\u5185\u5b58\uff08\u521b\u5efa\u65f6\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u8bfb\u5199\u5185\u5b58\uff08\u5bf9\u53d8\u91cf\u7684\u8bfb\u5199\u64cd\u4f5c\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u91ca\u653e\u5185\u5b58")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u662f\u4f7f\u7528\u5783\u573e\u56de\u6536\u7684\u8bed\u8a00\uff0c\u4e5f\u5c31\u662f\u6267\u884c\u73af\u5883\u8d1f\u8d23\u5728\u4ee3\u7801\u6267\u884c\u65f6\u7ba1\u7406\u5185\u5b58\u3002\u91cd\u70b9\u5728\u4e8e\u6807\u8bb0\u4e0d\u518d\u88ab\u4f7f\u7528\u7684\u53d8\u91cf\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6807\u8bb0\u6e05\u9664"),(0,l.kt)("li",{parentName:"ul"},"\u5f15\u7528\u8ba1\u6570")),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u5185\u5b58\u4e0d\u518d\u88ab\u9700\u8981\u4e86\uff0c\u5c31\u9700\u8981\u628a\u5185\u5b58\u91ca\u653e\u6389\uff0c\u4ee5\u4fbf\u5185\u5b58\u7684\u518d\u6b21\u4f7f\u7528\u3002\u8fd9\u91cc\u6bd4\u8f83\u96be\u7684\u95ee\u9898\u5c31\u662f\u201c\u5982\u4f55\u5224\u65ad\u5185\u5b58\u662f\u5426\u4e0d\u518d\u88ab\u9700\u8981\u201d\u3002\u5783\u573e\u56de\u6536\u7b97\u6cd5\u4e3b\u8981\u4f9d\u8d56\u4e8e\u5f15\u7528\uff08reference\uff09\u7684\u6982\u5ff5\uff0c\u6765\u5224\u65ad\u5185\u5b58\u662f\u5426\u88ab\u9700\u8981\u3002\u5728\u5185\u5b58\u7ba1\u7406\u7684\u73af\u5883\u4e2d\uff0c\u4e00\u4e2a\u5bf9\u8c61\u5982\u679c\u6709\u8bbf\u95ee\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u6743\u9650\uff08\u9690\u5f0f\u6216\u8005\u663e\u5f0f\uff09\uff0c\u53eb\u505a\u4e00\u4e2a\u5bf9\u8c61\u5f15\u7528\u53e6\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u5783\u573e\u6536\u96c6\u7b97\u6cd5\u4e2d\uff0cIE 6, 7 \u91c7\u7528\u7684\u662f\u5f15\u7528\u8ba1\u6570\u5783\u573e\u6536\u96c6\u7b97\u6cd5\u3002\u8be5\u7b97\u6cd5\u628a\u201c\u5bf9\u8c61\u662f\u5426\u4e0d\u518d\u9700\u8981\u201d\u7b80\u5316\u5b9a\u4e49\u4e3a\u201c\u5bf9\u8c61\u6709\u6ca1\u6709\u5176\u4ed6\u5bf9\u8c61\u5f15\u7528\u5230\u5b83\u201d\u3002\u5982\u679c\u6ca1\u6709\u5f15\u7528\u6307\u5411\u8be5\u5bf9\u8c61\uff08\u96f6\u5f15\u7528\uff09\uff0c\u5bf9\u8c61\u5c06\u88ab\u5783\u573e\u56de\u6536\u673a\u5236\u56de\u6536\u3002\u8be5\u7b97\u6cd5\u6709\u4e00\u4e2a\u5f0a\u7aef\u5c31\u662f\u201c\u5faa\u73af\u5f15\u7528\u201d\uff0c\u662f\u5bfc\u81f4\u5185\u5b58\u6cc4\u6f0f\u7684\u91cd\u8981\u539f\u56e0\u3002"),(0,l.kt)("p",null,"\u800c\u4ece 2012 \u5e74\u8d77\uff0c\u6240\u6709\u7684\u73b0\u4ee3\u6d4f\u89c8\u5668\u90fd\u6362\u6210\u4e86\u6807\u8bb0-\u6e05\u9664\u7b97\u6cd5,\u8fd9\u4e2a\u7b97\u6cd5\u628a\u201c\u5bf9\u8c61\u662f\u5426\u4e0d\u518d\u9700\u8981\u201d\u7b80\u5316\u5b9a\u4e49\u4e3a\u201c\u5bf9\u8c61\u662f\u5426\u53ef\u4ee5\u83b7\u5f97\u201d\u3002\u662f\u5426\u53ef\u83b7\u5f97\u7684\u5224\u65ad\u6807\u51c6\u5c31\u662f\u8fd9\u4e2a\u5bf9\u8c61\u662f\u5426\u88ab root \u5f15\u7528\uff08\u5305\u542b\u76f4\u63a5\u5f15\u7528\u548c\u95f4\u63a5\u5f15\u7528\uff09\uff0c\u5982\u679c\u4e0d\u88ab\u5f15\u7528\u5230\uff0c\u5c31\u88ab\u6536\u56de\u3002\u8fd9\u6837\u5c31\u5f88\u597d\u7684\u907f\u514d\u4e86\u5faa\u73af\u5f15\u7528\u7684\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u5148\u8bf4\u4e00\u4e0b\u5f15\u7528\u8ba1\u6570\u3002"),(0,l.kt)("h3",{id:"\u5f15\u7528\u8ba1\u6570"},"\u5f15\u7528\u8ba1\u6570"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bb0\u5f55\u6bcf\u4e2a\u503c\u88ab\u5f15\u7528\u7684\u6b21\u6570\u3002")),(0,l.kt)("p",null,"\u58f0\u660e\u53d8\u91cf\u5e76\u4e14\u8d4b\u4e00\u4e2a\u5f15\u7528\u503c\u65f6\uff0c\u8fd9\u4e2a\u503c\u7684\u5f15\u7528\u6570\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\uff1b\u5982\u679c\u540c\u4e00\u4e2a\u503c\u53c8\u8d4b\u7ed9\u53e6\u4e00\u4e2a\u53d8\u91cf\uff0c\u90a3\u4e48\u5f15\u7528\u6570\u4f1a\u589e\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u5982\u679c\u8fd9\u4e2a\u53d8\u91cf\u88ab\u5176\u4ed6\u503c\u8986\u76d6\uff0c\u90a3\u4e48\u5f15\u7528\u6570\u51cf",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\u3002\u5f53\u4e00\u4e2a\u503c\u7684\u5f15\u7528\u6570\u4e3a\u96f6\uff0c\u5c31\u610f\u5473\u7740\u4e0d\u4f1a\u518d\u88ab\u8bbf\u95ee\u5230\uff0c\u6240\u4ee5\u53ef\u4ee5\u5b89\u5168\u91ca\u653e\u5bf9\u5e94\u7684\u5185\u5b58\u7a7a\u95f4\u3002"),(0,l.kt)("p",null,"\u5f15\u7528\u8ba1\u6570\u7684\u95ee\u9898\u5728\u4e8e\u53ef\u80fd\u4f1a\u6709\u5faa\u73af\u5f15\u7528\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5bf9\u8c61 A \u7684\u4e00\u4e2a\u6307\u9488\u6307\u5411",(0,l.kt)("inlineCode",{parentName:"p"},"B"),"\uff0c\u5bf9\u8c61",(0,l.kt)("inlineCode",{parentName:"p"},"B"),"\u4e5f\u5f15\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"A"),"\u5bf9\u8c61\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function badCycle() {\n  var cycleObj1 = {};\n  var cycleObj2 = {};\n  cycleObj1.target = cycleObj2;\n  cycleObj2.target = cycleObj1;\n}\n\nbadCycle();\n")),(0,l.kt)("p",null,"\u5982\u679c\u662f\u5f15\u7528\u8ba1\u6570\uff0c\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"cycleObj1"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"cycleObj2"),"\uff0c\u8fd9\u4e24\u4e2a\u5bf9\u8c61\u7684\u5f15\u7528\u6570\u90fd\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u6240\u4ee5\u4e0d\u4f1a\u88ab\u91ca\u653e\uff1b\u4e0d\u8fc7\u5bf9\u4e8e\u6807\u8bb0\u6e05\u9664\u6765\u8bb2\uff0c\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"badCycle()"),"\u6267\u884c\u5b8c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"cycleObj1"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"cycleObj2"),"\u4e0d\u4f1a\u5728\u4e0a\u4e0b\u6587\u4e2d\u518d\u51fa\u73b0\uff0c\u6240\u4ee5\u5bf9\u5e94\u7684\u5185\u5b58\u4e5f\u4f1a\u88ab\u91ca\u653e\u3002"),(0,l.kt)("h3",{id:"\u6807\u8bb0\u6e05\u9664"},"\u6807\u8bb0\u6e05\u9664"),(0,l.kt)("p",null,"\u5728 V8 \u4e2d\uff0c\u4f7f\u7528\u7684\u662f\u5206\u4ee3\u5783\u573e\u56de\u6536\uff0c\u4f1a\u628a\u5185\u5b58\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a\u65b0\u5206\u914d\u7684\u5bf9\u8c61\u7684\u65b0\u751f\u4ee3\uff08young generation\uff09\u548c\u957f\u671f\u5b58\u5728\u7684\u5bf9\u8c61\u7684\u8001\u5e74\u4ee3\uff08old generation\uff09\uff0c\u65b0\u751f\u4ee3\u7684\u5185\u5b58\u7a7a\u95f4\u8f83\u5c0f\uff081 \uff5e 8M\uff09\uff0c\u7528\u4e8e\u521b\u5efa\u548c\u5206\u914d\u65b0\u7684\u5185\u5b58\uff0c\u8001\u751f\u4ee3\u7684\u7a7a\u95f4\u8f83\u5927\uff0c\u7528\u4e8e\u5b58\u653e\u5b58\u6d3b\u65f6\u95f4\u8f83\u957f\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e\u5927\u591a\u6570\u5bf9\u8c61\u90fd\u6b7b\u4e8e\u5e74\u8f7b\u65f6\uff0c\u56e0\u6b64\u8fd9\u79cd\u5206\u4ee3\u7684\u7b56\u7565\u4f7f\u5783\u573e\u56de\u6536\u5668\u53ef\u4ee5\u5728\u8f83\u5c0f\u7684\u65b0\u751f\u4ee3\uff08\u79f0\u4e3a\u6e05\u9053\u592b\uff09\u4e2d\u6267\u884c\u5e38\u89c4\u7684\u77ed\u65f6\u95f4\u5783\u573e\u56de\u6536\uff0c\u800c\u4e0d\u5fc5\u5728\u8001\u5e74\u4ee3\u4e2d\u8ddf\u8e2a\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,"\u65b0\u751f\u4ee3\u548c\u8001\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536\u662f\u4e24\u4e2a\u65b9\u6848\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b0\u751f\u4ee3\uff1a\u65b0\u751f\u4ee3\u4f7f\u7528\u534a\u7a7a\u95f4\uff08semi-space\uff09\u5206\u914d\u7b56\u7565\uff0c\u5176\u4e2d\u65b0\u5bf9\u8c61\u6700\u521d\u662f\u5728\u65b0\u751f\u4ee3\u7684\u6d3b\u52a8\u534a\u7a7a\u95f4\uff08active semi-space\uff09\u4e2d\u5206\u914d\u7684\u3002\u4e00\u65e6\u8be5\u534a\u7a7a\u95f4\u53d8\u6ee1\uff0c\u6e05\u9664\u64cd\u4f5c\u4f1a\u5c06\u6d3b\u52a8\u5bf9\u8c61\uff08live objects\uff09\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u534a\u7a7a\u95f4\u3002\u66fe\u7ecf\u88ab\u79fb\u52a8\u8fc7\u7684\u5bf9\u8c61\u88ab\u63d0\u5347\u4e3a\u8001\u5e74\u4ee3\uff0c\u5e76\u88ab\u8ba4\u4e3a\u662f\u957f\u671f\u5b58\u6d3b\uff08long-living\uff09\u7684\u3002\u4e00\u65e6\u79fb\u52a8\u4e86\u6d3b\u52a8\u5bf9\u8c61\uff0c\u65b0\u7684\u534a\u7a7a\u95f4\u5c06\u53d8\u4e3a\u6d3b\u52a8\u72b6\u6001\uff0c\u800c\u65e7\u534a\u7a7a\u95f4\u4e2d\u7684\u6240\u6709\u5269\u4f59\u6b7b\u4ea1\u5bf9\u8c61\u90fd\u5c06\u88ab\u4e22\u5f03\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8001\u751f\u4ee3\uff1a",(0,l.kt)("strong",{parentName:"li"},"\u6807\u8bb0\u6e05\u9664\u65b9\u6848\u3002")," \u6807\u8bb0\u9636\u6bb5\u4f1a\u4ece\u6839\u5bf9\u8c61\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"window"),"\uff09\u51fa\u53d1\u904d\u5386\u5806\u4e2d\u6240\u6709\u5bf9\u8c61\uff0c\u5e76\u5bf9",(0,l.kt)("strong",{parentName:"li"},"\u53ef\u4ee5\u8bbf\u95ee\u5230\u7684\u5bf9\u8c61\u8fdb\u884c\u6807\u8bb0"),"\uff1b\u6e05\u9664\u9636\u6bb5\u5219\u662f\u5bf9\u672a\u6807\u8bb0\u5bf9\u8c61\u7684\u7a7a\u95f4\u8fdb\u884c\u56de\u6536\u3002")),(0,l.kt)("p",null,"\u5927\u90e8\u5206\u7684\u5bf9\u8c61\uff0c\u4f1a\u5728\u65b0\u751f\u4ee3\u91cc\u9762\u88ab\u56de\u6536\uff0c\u8fd9\u4e2a\u65f6\u5019\u53d1\u751f\u7684 GC \u5c31\u662f minor GC\uff0c\u800c\u4e0d\u88ab\u56de\u6536\u7684\u5bf9\u8c61\u5c31\u4f1a\u88ab\u79fb\u52a8\u5230\u8001\u751f\u4ee3\u3002\u5728\u8001\u751f\u4ee3\u8fdb\u884c\u7684 GC \u64cd\u4f5c\uff0c\u5c31\u662f major GC."),(0,l.kt)("p",null,"minor GC \u76f8\u5bf9\u4e8e major GC\uff0c\u89e6\u53d1\u7684\u66f4\u52a0\u9891\u7e41\uff0c\u5e76\u4e14\u5904\u7406\u901f\u5ea6\u4e5f\u6bd4\u8f83\u5feb\u3002\u56e0\u4e3a\u4e00\u662f\u5185\u5b58\u7a7a\u95f4\u5c0f\uff0c\u76f8\u5bf9\u6d89\u53ca\u7684\u5bf9\u8c61\u6570\u4e5f\u6bd4\u8f83\u5c11\u3002\u4e8c\u662f\u5206\u6210\u4e86\u4e24\u4e2a\u534a\u533a\uff0c\u907f\u514d\u4e86\u5185\u5b58\u6574\u7406\u538b\u7f29\uff08\u6807\u8bb0\u6574\u7406\u7b97\u6cd5\uff09\u7b49\u64cd\u4f5c\u3002\u65b0\u751f\u4ee3\u6e05\u9664\u7684\u6301\u7eed\u65f6\u95f4\u53d6\u51b3\u4e8e\u65b0\u751f\u4ee3\u4e2d\u6d3b\u52a8\u5bf9\u8c61\u7684\u6570\u91cf\u3002\u5f53\u5927\u591a\u6570\u5bf9\u8c61\u5728\u65b0\u751f\u4ee3\u4e2d\u53d8\u5f97\u65e0\u6cd5\u5230\u8fbe\u65f6\uff0c\u6e05\u9664\u901f\u5ea6\u4f1a\u5f88\u5feb\uff08<1 ms\uff09\u3002\u4f46\u662f\uff0c\u5982\u679c\u5927\u591a\u6570\u5bf9\u8c61\u5728\u6e05\u9664\u8fc7\u7a0b\u4e2d\u5e78\u5b58\u4e0b\u6765\uff0c\u5219\u6e05\u9664\u7684\u6301\u7eed\u65f6\u95f4\u53ef\u80fd\u4f1a\u660e\u663e\u66f4\u957f\u3002"),(0,l.kt)("p",null,"\u5728\u8001\u751f\u4ee3\u91cc\uff0c\u5f53\u5185\u5b58\u4f7f\u7528\u8d85\u51fa\u9650\u5236\u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1 major GC\uff0c\u56de\u6536\u7b97\u6cd5\u5c31\u662f\u4f7f\u7528\u7684\u6211\u4eec\u8bf4\u7684\u6807\u8bb0-\u6e05\u9664\uff08mark-sweep\uff09\u7b97\u6cd5\uff0c\u901a\u5e38\u6765\u8bf4\uff0c\u6807\u8bb0\u6574\u4e2a\u5e74\u8001\u533a\u9700\u8981\u5f88\u957f\u7684\u65f6\u95f4\uff0c\u8fd9\u91cc V8 \u505a\u4e86\u4f18\u5316\uff0c\u652f\u6301\u589e\u91cf\u6807\u8bb0\uff08\u589e\u91cf\u5c31\u662f\u5c06\u4e00\u6b21 GC \u6807\u8bb0\u7684\u8fc7\u7a0b\uff0c\u5206\u6210\u4e86\u5f88\u591a\u5c0f\u6b65\uff0c\u6bcf\u6267\u884c\u5b8c\u4e00\u5c0f\u6b65\u5c31\u8ba9\u5e94\u7528\u903b\u8f91\u6267\u884c\u4e00\u4f1a\u513f\uff0c\u8fd9\u6837\u4ea4\u66ff\u591a\u6b21\u540e\u5b8c\u6210\u4e00\u8f6e GC \u6807\u8bb0\uff09\u3002\u5728\u6e05\u9664\u5b8c\u5783\u573e\u4ee5\u540e\uff0c\u4ee5\u907f\u514d\u6e05\u9664\u540e\u5e74\u8001\u533a\u4ea7\u751f\u7684\u5185\u5b58\u788e\u7247\uff0c\u8fd8\u8981\u8fdb\u884c\u5185\u5b58\u538b\u7f29\u7684\u64cd\u4f5c\uff08\u6807\u8bb0\u6574\u7406\u7b97\u6cd5\uff09\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u4e5f\u6bd4\u8f83\u8017\u65f6\u3002\u6240\u4ee5\u53ef\u4ee5\u770b\u51fa\uff0cmajor GC \u786e\u5b9e\u8981\u6bd4 minor GC \u591a\u82b1\u5f88\u591a\u7684\u65f6\u95f4\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5206\u4ee3\u7684\u76ee\u7684\u4e3b\u8981\u662f\u4e3a\u4e86\u4f18\u5316\uff1a"),(0,l.kt)("p",{parentName:"div"},"\u5206\u4ee3\u5f0f\u673a\u5236\u628a\u4e00\u4e9b\u65b0\u3001\u5c0f\u3001\u5b58\u6d3b\u65f6\u95f4\u77ed\u7684\u5bf9\u8c61\u4f5c\u4e3a\u65b0\u751f\u4ee3\uff0c\u91c7\u7528\u4e00\u5c0f\u5757\u5185\u5b58\u9891\u7387\u8f83\u9ad8\u7684\u5feb\u901f\u6e05\u7406\uff0c\u800c\u4e00\u4e9b\u5927\u3001\u8001\u3001\u5b58\u6d3b\u65f6\u95f4\u957f\u7684\u5bf9\u8c61\u4f5c\u4e3a\u8001\u751f\u4ee3\uff0c\u4f7f\u5176\u5f88\u5c11\u63a5\u53d7\u68c0\u67e5\uff0c\u65b0\u8001\u751f\u4ee3\u7684\u56de\u6536\u673a\u5236\u53ca\u9891\u7387\u662f\u4e0d\u540c\u7684\uff0c\u53ef\u4ee5\u8bf4\u6b64\u673a\u5236\u7684\u51fa\u73b0\u5f88\u5927\u7a0b\u5ea6\u63d0\u9ad8\u4e86\u5783\u573e\u56de\u6536\u673a\u5236\u7684\u6548\u7387\u3002"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6d4f\u89c8\u5668\u7684\u6700\u5feb\u7684\u6e32\u67d3\u9891\u7387\u662f 60fps\uff0c\u4e5f\u5c31\u662f\u662f\u8bf4\u6bcf\u5e27\u7684\u65f6\u95f4\u95f4\u9694\u662f 16.7ms\uff0c\u5982\u679c\u6d4f\u89c8\u5668\u5728 16.7ms \u5185\u5b8c\u6210\u4e86\u6240\u6709\u7684\u64cd\u4f5c\uff08\u5305\u62ec js \u7684\u8fd0\u884c\u548c\u6e32\u67d3\uff09\uff0c\u5269\u4e0b\u7684\u65f6\u95f4\u5c31\u662f\u7a7a\u95f2\u65f6\u95f4\uff0c\u5728\u8fd9\u4e9b\u7a7a\u95f2\u65f6\u95f4\u91cc\u9762\uff0c\u5c31\u4f1a\u6267\u884c GC \u64cd\u4f5c\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u628a GC \u64cd\u4f5c\u7684\u5f71\u54cd\u964d\u5230\u6700\u4f4e\u3002")),(0,l.kt)("p",null,"\u53c2\u8003\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://v8.js.cn/blog/concurrent-marking/"},"https://v8.js.cn/blog/concurrent-marking/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6981588276356317214"},"https://juejin.cn/post/6981588276356317214"))),(0,l.kt)("h2",{id:"\u8c03\u8bd5"},"\u8c03\u8bd5"),(0,l.kt)("p",null,"\u67e5\u770b\u6d4f\u89c8\u5668\u7684 JavaScript \u7684\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"chrome \u7684 dev-tools \u91cc\u9762\u7684 performance\uff0c \u597d\u5904\u662f\u53ef\u4ee5\u770b\u5230\u968f\u7740\u65f6\u95f4\u7684\u53d8\u5316\uff0c\u770b\u5230\u5185\u5b58\u7684\u4f7f\u7528\u7684\u60c5\u51b5\u3002\u53ef\u4ee5\u5f88\u5bb9\u6613\u4e86\u89e3\u5230 GC \u64cd\u4f5c\u548c\u5185\u5b58\u7684\u5206\u914d\uff0c\u4ece\u800c\u53d1\u73b0\u5185\u5b58\u662f\u5426\u6cc4\u6f0f\u548c GC \u662f\u5426\u9891\u7e41\u7684\u95ee\u9898\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"dev-tools \u91cc\u9762\u7684 profiles\u3002\u5185\u5b58\u5feb\u7167\u7684\u4f18\u70b9\u662f\u8be6\u7ec6\u7684\u5c55\u793a\u4e86\u67d0\u4e00\u65f6\u523b\u7684\u5185\u5b58\u7684\u4f7f\u7528\u60c5\u51b5\uff0c\u5305\u62ec\uff1a\u4ec0\u4e48\u7c7b\u578b\u7684\u6570\u636e\u5360\u7528\u4e86\u591a\u5927\u7684\u5185\u5b58\uff0c\u4ee5\u53ca\u53d8\u91cf\u4e4b\u95f4\u7684\u5f15\u7528\u5173\u7cfb\u3002\u901a\u8fc7\u8fd9\u4e9b\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u627e\u5230\u5185\u5b58\u4f7f\u7528\u7684\u95ee\u9898\u6240\u5728\uff0c\u627e\u5230\u89e3\u51b3\u5185\u5b58\u95ee\u9898\u7684\u65b9\u6cd5\u3002"))),(0,l.kt)("h3",{id:"performance"},"Performance"),(0,l.kt)("p",null,"\u70b9\u51fb reload\uff0c\u52fe\u9009 memory"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(2795).Z})),(0,l.kt)("p",null,"\u7b2c\u4e00\u4e2a\u7ea2\u6846\u91cc\uff0c\u968f\u7740\u65f6\u95f4\u589e\u52a0\u5185\u5b58\u4f1a\u6709\u5347\u6709\u964d\uff1b\u7b2c\u4e8c\u4e2a\u7ea2\u6846\u91cc\uff0c\u8868\u793a\u7684\u662f\u5728\u8fd9\u6bb5\u65f6\u95f4\u91cc\u6267\u884c\u7684\u4efb\u52a1\uff0c\u4ee5\u53ca\u4efb\u52a1\u7684\u8017\u65f6\u3002"),(0,l.kt)("p",null,"\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\uff0c\u5185\u5b58\u7684\u4f7f\u7528\u5c31\u4f1a\u5927\u5e45\u7684\u4e0b\u964d\uff0c\u90a3\u5c31\u8bf4\u660e\u6d4f\u89c8\u5668\u8fdb\u884c\u4e86 GC \u64cd\u4f5c\u3002\u53ef\u4ee5\u6ce8\u610f\u5230\uff0cGC \u64cd\u4f5c\u4e5f\u662f\u82b1\u8d39\u65f6\u95f4\u7684\uff0cminor GC \u548c major GC \u4e00\u5171\u82b1\u8d39\u4e86 5.5ms\uff085+0.5ms\uff09\uff0c\u6240\u4ee5\u8fd9\u4e5f\u662f\u6211\u4eec\u9700\u8981\u907f\u514d\u9891\u7e41\u7684 GC \u64cd\u4f5c\u7684\u539f\u56e0\u3002\u907f\u514d\u7684\u65b9\u5f0f\uff0c\u5c31\u662f\u5728\u9891\u7e41\u6267\u884c\u7684\u65b9\u6cd5\u91cc\uff08\u5982\u52a8\u753b\uff09\uff0c\u5c3d\u53ef\u80fd\u7684\u51cf\u5c11\u521b\u5efa\u5bf9\u8c61\uff0c\u5c3d\u53ef\u80fd\u7684\u4f7f\u7528\u7f13\u5b58\u5bf9\u8c61\u6765\u4ee3\u66ff\u521b\u5efa\u65b0\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u6d4b\u8bd5\u4ee3\u7801\nvar run = function () {\n  var d = [];\n\n  for (var i = 0; i < 100000; i++) {\n    d.push(Math.random());\n  }\n};\n\nsetInterval(function () {\n  run();\n}, 100);\n")),(0,l.kt)("h3",{id:"memory"},"Memory"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1445).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Heap snapshot - \u7528\u4ee5\u6253\u5370\u5806\u5feb\u7167\uff0c\u5806\u5feb\u7167\u663e\u793a\u9875\u9762\u7684 js \u5bf9\u8c61\u548c\u76f8\u5173 DOM \u8282\u70b9\u4e4b\u95f4\u7684\u5185\u5b58\u5206\u914d"),(0,l.kt)("li",{parentName:"ul"},"Allocation instrumentation on timeline - \u5728\u65f6\u95f4\u8f74\u4e0a\u8bb0\u5f55\u5185\u5b58\u4fe1\u606f\uff0c\u968f\u7740\u65f6\u95f4\u53d8\u5316\u8bb0\u5f55\u5185\u5b58\u4fe1\u606f\u548c\u5185\u5b58\u88ab\u56de\u6536\u7684\u60c5\u51b5\uff0c\u4e3b\u8981\u7528\u6765\u5206\u6790\u5185\u5b58\u6cc4\u6f0f\u7684\u95ee\u9898\u3002"),(0,l.kt)("li",{parentName:"ul"},"Allocation sampling - \u5185\u5b58\u4fe1\u606f\u91c7\u6837\uff0c\u4f7f\u7528\u91c7\u6837\u7684\u65b9\u6cd5\u8bb0\u5f55\u5185\u5b58\u5206\u914d\u3002\u6b64\u914d\u7f6e\u6587\u4ef6\u7c7b\u578b\u5177\u6709\u6700\u5c0f\u7684\u6027\u80fd\u5f00\u9500\uff0c\u53ef\u7528\u4e8e\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u64cd\u4f5c\u3002\u5b83\u63d0\u4f9b\u4e86\u7531 javascript \u6267\u884c\u5806\u6808\u7ec6\u5206\u7684\u826f\u597d\u8fd1\u4f3c\u503c\u5206\u914d\u3002")),(0,l.kt)("p",null,"\u5177\u4f53\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/ys-ys/p/11336811.html"},"https://www.cnblogs.com/ys-ys/p/11336811.html")))}s.isMDXComponent=!0},2795:function(e,t,n){t.Z=n.p+"assets/images/gcload-7be708a586e069fe2a753231b2e4b05d.png"},1445:function(e,t,n){t.Z=n.p+"assets/images/memory-6008720976b372263ce8c97d107b3cb1.png"}}]);