"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4125],{9613:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return f}});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),k=c(t),f=r,m=k["".concat(u,".").concat(f)]||k[f]||p[f]||o;return t?a.createElement(m,s(s({ref:n},i),{},{components:t})):a.createElement(m,s({ref:n},i))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=k;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3589:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return i}});var a=t(2848),r=t(9213),o=(t(9496),t(9613)),s=["components"],l={sidebar_position:2},u=void 0,c={unversionedId:"React/hooks\u539f\u7406",id:"React/hooks\u539f\u7406",isDocsHomePage:!1,title:"hooks\u539f\u7406",description:"\u9996\u5148 hook \u662f react 16.8 \u7684\u65b0\u589e\u7279\u6027\uff0c\u6211\u4eec\u5148\u8bf4\u4e00\u4e0b\u7c7b\u7ec4\u4ef6\u7684\u75db\u70b9\uff1a",source:"@site/docs/React/hooks\u539f\u7406.md",sourceDirName:"React",slug:"/React/hooks\u539f\u7406",permalink:"/blog/docs/React/hooks\u539f\u7406",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/React/hooks\u539f\u7406.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6982\u89c8",permalink:"/blog/docs/React/\u6982\u89c8"},next:{title:"router",permalink:"/blog/docs/React/router"}},i=[{value:"hooks \u7684\u6838\u5fc3",id:"hooks-\u7684\u6838\u5fc3",children:[{value:"useCallback",id:"usecallback",children:[]}]},{value:"hooks \u95ed\u5305",id:"hooks-\u95ed\u5305",children:[{value:"\u4ea7\u751f\u7684\u539f\u56e0",id:"\u4ea7\u751f\u7684\u539f\u56e0",children:[]},{value:"\u89e3\u51b3\u7684\u65b9\u6cd5",id:"\u89e3\u51b3\u7684\u65b9\u6cd5",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}]}],p={toc:i};function k(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9996\u5148 hook \u662f react 16.8 \u7684\u65b0\u589e\u7279\u6027\uff0c\u6211\u4eec\u5148\u8bf4\u4e00\u4e0b\u7c7b\u7ec4\u4ef6\u7684\u75db\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u903b\u8f91\u590d\u7528\u56f0\u96be",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"HOC \u7ec4\u4ef6\u6811\u5d4c\u5957\u4f1a\u5f88\u6df1 ",(0,o.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000023962500"},"Function \u7ec4\u4ef6(Hooks) vs Class \u7ec4\u4ef6")))),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u7ec4\u4ef6\u4e2d\u7684 this \u589e\u52a0\u7406\u89e3\u6210\u672c",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5173\u4e8e\u8fd9\u4e2a this \u7684\u95ee\u9898\uff0c\u6709\u4e00\u7bc7\u6587\u7ae0",(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903825220829198"},"React \u51fd\u6570\u7ec4\u4ef6\u548c\u7c7b\u7ec4\u4ef6\u7684\u5dee\u5f02"))))),(0,o.kt)("p",null,"\u5f53\u7136\u6211\u89c9\u5f97\u6700\u597d\u7684\u65b9\u5f0f\u662f\u5199\u4e00\u4e2a react demo\uff0c\u7136\u540e\u6253\u65ad\u70b9\u5728\u6d4f\u89c8\u5668\u91cc\u770b\u53d1\u751f\u4e86\u4ec0\u4e48\u3002"),(0,o.kt)("h2",{id:"hooks-\u7684\u6838\u5fc3"},"hooks \u7684\u6838\u5fc3"),(0,o.kt)("p",null,"\u6240\u6709\u51fd\u6570\u7ec4\u4ef6\u7684\u89e6\u53d1\u662f\u5728 renderWithHooks \u65b9\u6cd5\u4e2d\uff0crenderWithHooks \u91cc\u9762\u6709\u4e2a workInProgress \u7684\u5bf9\u8c61\u5c31\u662f\u5f53\u524d\u7684 fiber \u8282\u70b9\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tvax1.sinaimg.cn/large/006T9etDly1h0k5i0r786j30nu0jwgug.jpg",alt:"image"})),(0,o.kt)("p",null,"workInProgress \u7684 memoizedstate \u5b58\u7740 hooks \u7684\u94fe\u8868\u4fe1\u606f\uff08\u5176\u5b9e\u5c31\u662f\u653e\u7740\u7b2c\u4e00\u4e2a\u94fe\u8868\uff09\uff0c"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva3.sinaimg.cn/mw690/006T9etDly1h0k8fae5r1j30ne072diz.jpg",alt:"image"})),(0,o.kt)("p",null,"\u94fe\u8868\u6709\u4e00\u4e2a next \u5c5e\u6027\uff0c\u6302\u7740\u4e0b\u4e00\u4e2a\u94fe\u8868\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva3.sinaimg.cn/mw690/006T9etDly1h0k8cpj5vyj30me0wgn67.jpg",alt:"image"})),(0,o.kt)("p",null,"\u51fd\u6570\u7ec4\u4ef6 fiber \uff0cupdateQueue \u5b58\u653e\u6bcf\u4e2a useEffect/useLayoutEffect \u4ea7\u751f\u7684\u526f\u4f5c\u7528\u7ec4\u6210\u7684\u94fe\u8868\u3002\u5728 commit \u9636\u6bb5\u66f4\u65b0\u8fd9\u4e9b\u526f\u4f5c\u7528\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva2.sinaimg.cn/large/006T9etDly1h0k5b8bv7pj30n008g76x.jpg",alt:"image"})),(0,o.kt)("p",null,"mountXxx \u662f\u521b\u5efa memorizedState \u94fe\u8868\u7684\u8fc7\u7a0b\uff0c\u6bcf\u4e2a useXxx \u7684 hooks \u90fd\u6709 mountXxx \u548c updateXxx \u4e24\u4e2a\u9636\u6bb5\uff0c\u6838\u5fc3\u5c31\u662f mountWorkInProgressHook \u548c updateWorkInProgressHook\uff0c\u521b\u5efa\u5bf9\u5e94\u7684 memorizedState \u5bf9\u8c61\uff0c\u7136\u540e\u7528 next \u4e32\u8054\u8d77\u6765\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function mountWorkInProgressHook() {\n  var hook = {\n    memoizedState: null,\n    baseState: null,\n    baseQueue: null,\n    queue: null,\n    next: null,\n  };\n\n  if (workInProgressHook === null) {\n    // This is the first hook in the list\n    currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;\n  } else {\n    // Append to the end of the list\n    workInProgressHook = workInProgressHook.next = hook;\n  }\n\n  return workInProgressHook;\n}\n\n// updateWorkInProgressHook \u903b\u8f91\u592a\u591a\u8fd9\u91cc\u7565\u53bb\n")),(0,o.kt)("h3",{id:"usecallback"},"useCallback"),(0,o.kt)("p",null,"\u4ee5 useCallback \u4e3a\u4f8b\uff1a"),(0,o.kt)("p",null,"useCallback \u5728 memorizedState \u4e0a\u653e\u4e86\u4e00\u4e2a\u6570\u7ec4\uff0c\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u662f\u4f20\u5165\u7684 deps\uff08\u5bf9 deps \u505a\u4e86\u4e0b undefined \u7684\u5904\u7406\uff09\u3002"),(0,o.kt)("p",null,"\u66f4\u65b0\u7684\u65f6\u5019\u628a\u4e4b\u524d\u7684\u90a3\u4e2a memorizedState \u53d6\u51fa\u6765\uff08prevDeps\uff09\uff0c\u548c\u65b0\u4f20\u5165\u7684 deps \u505a\u4e0b\u5bf9\u6bd4\uff0c\u5982\u679c\u6ca1\u53d8\uff0c\u90a3\u5c31\u8fd4\u56de\u4e4b\u524d\u7684\u56de\u8c03\u51fd\u6570\uff0c\u4e5f\u5c31\u662f prevState","[0]","\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u53d8\u4e86\uff0c\u90a3\u5c31\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\uff0c\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u662f\u4f20\u5165\u7684 deps\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\uff0cuseCallback \u7684\u529f\u80fd\u4e5f\u5c31\u547c\u4e4b\u6b32\u51fa\u4e86\uff1auseCallback \u53ef\u4ee5\u5b9e\u73b0\u51fd\u6570\u7684\u7f13\u5b58\uff0c\u5982\u679c deps \u6ca1\u53d8\u5c31\u4e0d\u4f1a\u521b\u5efa\u65b0\u7684\uff0c\u5426\u5219\u624d\u4f1a\u8fd4\u56de\u65b0\u4f20\u5165\u7684\u51fd\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function mountCallback(callback, deps) {\n  var hook = mountWorkInProgressHook();\n  var nextDeps = deps === undefined ? null : deps;\n  hook.memoizedState = [callback, nextDeps];\n  return callback;\n}\n\nfunction updateCallback(callback, deps) {\n  var hook = updateWorkInProgressHook();\n  var nextDeps = deps === undefined ? null : deps;\n  var prevState = hook.memoizedState;\n\n  if (prevState !== null) {\n    if (nextDeps !== null) {\n      var prevDeps = prevState[1];\n\n      if (areHookInputsEqual(nextDeps, prevDeps)) {\n        return prevState[0];\n      }\n    }\n  }\n\n  hook.memoizedState = [callback, nextDeps];\n  return callback;\n}\n")),(0,o.kt)("h4",{id:"objectis"},"Object.is"),(0,o.kt)("p",null,"\u8fd9\u91cc\u8981\u63d0\u4e00\u4e0b\u5224\u65ad\u4e24\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"deps"),"\u662f\u5426\u76f8\u7b49",(0,o.kt)("inlineCode",{parentName:"p"},"areHookInputsEqual"),"\uff0c\u672c\u8d28\u4e0a\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"ployfill"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"object.is"),"\u3002"),(0,o.kt)("p",null,"\u4e0d\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"==="),"\u6709\u4e2a\u95ee\u9898\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"+0 === -0; //true\nNaN === NaN; // false\n")),(0,o.kt)("p",null,"\u6240\u4ee5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Object.defineProperty(Object, "is", {\n  value: function (x, y) {\n    if (x === y) {\n      // \u9488\u5bf9+0 \u4e0d\u7b49\u4e8e -0\u7684\u60c5\u51b5\n      // \u671f\u671b\u7684\u662f +0 \u4e0d\u7b49\u4e8e -0 \uff0c +0 -0 false\uff1b1/0 = Infinity\n      return x !== 0 || 1 / x === 1 / y;\n    }\n    // \u9488\u5bf9NaN\u7684\u60c5\u51b5\n    // \u671f\u671b\u7684\u662f NaN\u7b49\u4e8eNaN NaN NaN true\n    return x !== x && y !== y;\n  },\n  configurable: true,\n  enumerable: false,\n  writable: true,\n});\n')),(0,o.kt)("p",null,"\u8fd9\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"react"),"\u5b98\u65b9\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"polyfill"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// react/packages/shared/objectIs.js\nfunction is(x, y) {\n  return (\n    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare\n  );\n}\n\nvar objectIs = typeof Object.is === "function" ? Object.is : is;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function areHookInputsEqual(nextDeps, prevDeps) {\n  // ...\n\n  if (nextDeps.length !== prevDeps.length) {\n    error(\n      "The final argument passed to %s changed size between renders. The " +\n        "order and size of this array must remain constant.\\n\\n" +\n        "Previous: %s\\n" +\n        "Incoming: %s",\n      currentHookNameInDev,\n      "[" + prevDeps.join(", ") + "]",\n      "[" + nextDeps.join(", ") + "]"\n    );\n  }\n  // \u5bf9\u6bd4\u4f9d\u8d56\u7684\u6bcf\u4e00\u9879\n  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {\n    if (objectIs(nextDeps[i], prevDeps[i])) {\n      continue;\n    }\n\n    return false;\n  }\n\n  return true;\n}\n')),(0,o.kt)("h2",{id:"hooks-\u95ed\u5305"},"hooks \u95ed\u5305"),(0,o.kt)("p",null,"React \u7684\u95ed\u5305\u95ee\u9898"),(0,o.kt)("p",null,"\u5148\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useState, useEffect } from "react";\n\nexport default () => {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    setInterval(() => {\n      console.log("setInterval:", count);\n    }, 1000);\n  }, []);\n\n  return (\n    <div>\n      count: {count}\n      <br />\n      <button onClick={() => setCount((val) => val + 1)}>\u589e\u52a0 1</button>\n    </div>\n  );\n};\n')),(0,o.kt)("p",null,"\u5f53\u6211\u70b9\u51fb\u6309\u94ae\u7684\u65f6\u5019\uff0c\u53d1\u73b0 setInterval \u4e2d\u6253\u5370\u51fa\u6765\u7684\u503c\u5e76\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u59cb\u7ec8\u90fd\u662f 0\u3002\u8fd9\u5c31\u662f React \u7684\u95ed\u5305\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"\u4ea7\u751f\u7684\u539f\u56e0"},"\u4ea7\u751f\u7684\u539f\u56e0"),(0,o.kt)("p",null,"\u4e3a\u4e86\u7ef4\u62a4 Function Component \u7684 state\uff0cReact \u7528\u94fe\u8868\u7684\u65b9\u5f0f\u6765\u5b58\u50a8 Function Component \u91cc\u9762\u7684 hooks\uff0c\u5e76\u4e3a\u6bcf\u4e00\u4e2a hooks \u521b\u5efa\u4e86\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type Hook = {\n  memoizedState: any,\n  baseState: any,\n  baseUpdate: Update<any, any> | null,\n  queue: UpdateQueue<any, any> | null,\n  next: Hook | null,\n};\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u5bf9\u8c61\u7684 memoizedState \u5c5e\u6027\u5c31\u662f\u7528\u6765\u5b58\u50a8\u7ec4\u4ef6\u4e0a\u4e00\u6b21\u66f4\u65b0\u540e\u7684 state\uff0cnext \u6307\u5411\u4e0b\u4e00\u4e2a hook \u5bf9\u8c61\u3002\u5728\u7ec4\u4ef6\u66f4\u65b0\u7684\u8fc7\u7a0b\u4e2d\uff0chooks \u51fd\u6570\u6267\u884c\u7684\u987a\u5e8f\u662f\u4e0d\u53d8\u7684\uff0c\u5c31\u53ef\u4ee5\u6839\u636e\u8fd9\u4e2a\u94fe\u8868\u62ff\u5230\u5f53\u524d hooks \u5bf9\u5e94\u7684 Hook \u5bf9\u8c61\uff0c\u51fd\u6570\u5f0f\u7ec4\u4ef6\u5c31\u662f\u8fd9\u6837\u62e5\u6709\u4e86 state \u7684\u80fd\u529b\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\u5236\u5b9a\u4e86\u4e00\u7cfb\u5217\u7684\u89c4\u5219\uff0c\u6bd4\u5982\u4e0d\u80fd\u5c06 hooks \u5199\u5165\u5230 if...else... \u4e2d\u3002\u4ece\u800c\u4fdd\u8bc1\u80fd\u591f\u6b63\u786e\u62ff\u5230\u76f8\u5e94 hook \u7684 state\u3002"),(0,o.kt)("p",null,"useEffect \u63a5\u6536\u4e86\u4e24\u4e2a\u53c2\u6570\uff0c\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u548c\u4e00\u4e2a\u6570\u7ec4\u3002\u6570\u7ec4\u91cc\u9762\u5c31\u662f useEffect \u7684\u4f9d\u8d56\uff0c\u5f53\u4e3a [] \u7684\u65f6\u5019\uff0c\u56de\u8c03\u51fd\u6570\u53ea\u4f1a\u5728\u7ec4\u4ef6\u7b2c\u4e00\u6b21\u6e32\u67d3\u540e\uff08DOM \u7ed3\u6784\u6e32\u67d3\u5b8c\uff09\u7684\u65f6\u5019\u6267\u884c\u4e00\u6b21\u3002\u5982\u679c\u6709\u4f9d\u8d56\u5176\u4ed6\u9879\uff0creact \u4f1a\u5224\u65ad\u5176\u4f9d\u8d56\u662f\u5426\u6539\u53d8\uff0c\u5982\u679c\u6539\u53d8\u4e86\u5c31\u4f1a\u6267\u884c\u56de\u8c03\u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u56de\u5230\u521a\u521a\u90a3\u4e2a\u4f8b\u5b50:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const [count, setCount] = useState(0);\n\nuseEffect(() => {\n  setInterval(() => {\n    console.log("setInterval:", count);\n  }, 1000);\n}, []);\n')),(0,o.kt)("p",null,"\u5b83\u7b2c\u4e00\u6b21\u6267\u884c\u7684\u65f6\u5019\uff0c\u6267\u884c useState\uff0ccount \u4e3a 0\u3002\u6267\u884c useEffect\uff0c\u6267\u884c\u5176\u56de\u8c03\u4e2d\u7684\u903b\u8f91\uff0c\u542f\u52a8\u5b9a\u65f6\u5668\uff0c\u6bcf\u9694 1s \u8f93\u51fa setInterval: 0\u3002"),(0,o.kt)("p",null,'\u5f53\u6211\u70b9\u51fb\u6309\u94ae\u4f7f count \u589e\u52a0 1 \u7684\u65f6\u5019\uff0c\u6574\u4e2a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u8fd9\u4e2a\u65f6\u5019\u524d\u4e00\u4e2a\u6267\u884c\u7684\u94fe\u8868\u5df2\u7ecf\u5b58\u5728\u4e86\u3002useState \u5c06 Hook \u5bf9\u8c61 \u4e0a\u4fdd\u5b58\u7684\u72b6\u6001\u7f6e\u4e3a 1\uff0c \u90a3\u4e48\u6b64\u65f6 count \u4e5f\u4e3a 1 \u4e86\u3002\u6267\u884c useEffect\uff0c\u5176\u4f9d\u8d56\u9879\u4e3a\u7a7a\uff0c\u4e0d\u6267\u884c\u56de\u8c03\u51fd\u6570\u3002\u4f46\u662f\u4e4b\u524d\u7684\u56de\u8c03\u51fd\u6570\u8fd8\u662f\u5728\u7684\uff0c\u5b83\u8fd8\u662f\u4f1a\u6bcf\u9694 1s \u6267\u884c console.log("setInterval:", count);\uff0c\u4f46\u8fd9\u91cc\u7684 count \u662f\u4e4b\u524d\u7b2c\u4e00\u6b21\u6267\u884c\u65f6\u5019\u7684 count \u503c\uff0c\u56e0\u4e3a\u5728\u5b9a\u65f6\u5668\u7684\u56de\u8c03\u51fd\u6570\u91cc\u9762\u88ab\u5f15\u7528\u4e86\uff0c\u5f62\u6210\u4e86\u95ed\u5305\u4e00\u76f4\u88ab\u4fdd\u5b58\u3002'),(0,o.kt)("h3",{id:"\u89e3\u51b3\u7684\u65b9\u6cd5"},"\u89e3\u51b3\u7684\u65b9\u6cd5"),(0,o.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\u4e00\uff1a\u7ed9 useEffect \u8bbe\u7f6e\u4f9d\u8d56\u9879\uff0c\u91cd\u65b0\u6267\u884c\u51fd\u6570\uff0c\u8bbe\u7f6e\u65b0\u7684\u5b9a\u65f6\u5668\uff0c\u62ff\u5230\u6700\u65b0\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u89e3\u51b3\u65b9\u6cd5\u4e00\nuseEffect(() => {\n  if (timer.current) {\n    clearInterval(timer.current);\n  }\n  timer.current = setInterval(() => {\n    console.log("setInterval:", count);\n  }, 1000);\n}, [count]);\n')),(0,o.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\u4e8c\uff1a\u4f7f\u7528 useRef\u3002useRef \u8fd4\u56de\u4e00\u4e2a\u53ef\u53d8\u7684 ref \u5bf9\u8c61\uff0c\u5176 .current \u5c5e\u6027\u88ab\u521d\u59cb\u5316\u4e3a\u4f20\u5165\u7684\u53c2\u6570\uff08initialValue\uff09\u3002\nuseRef \u521b\u5efa\u7684\u662f\u4e00\u4e2a\u666e\u901a Javascript \u5bf9\u8c61\uff0c\u800c\u4e14\u4f1a\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u8fd4\u56de\u540c\u4e00\u4e2a ref \u5bf9\u8c61\uff0c\u5f53\u6211\u4eec\u53d8\u5316\u5b83\u7684 current \u5c5e\u6027\u7684\u65f6\u5019\uff0c\u5bf9\u8c61\u7684\u5f15\u7528\u90fd\u662f\u540c\u4e00\u4e2a\uff0c\u6240\u4ee5\u5b9a\u65f6\u5668\u4e2d\u80fd\u591f\u8bfb\u5230\u6700\u65b0\u7684\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const lastCount = useRef(count);\n\n// \u89e3\u51b3\u65b9\u6cd5\u4e8c\nuseEffect(() => {\n  setInterval(() => {\n    console.log("setInterval:", lastCount.current);\n  }, 1000);\n}, []);\n\nreturn (\n  <div>\n    count: {count}\n    <br />\n    <button\n      onClick={() => {\n        setCount((val) => val + 1);\n        // +1\n        lastCount.current += 1;\n      }}\n    >\n      \u589e\u52a0 1\n    </button>\n  </div>\n);\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"setState \u53ef\u4ee5\u51fd\u6570\u5f0f\u66f4\u65b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"val => val + 1"),"\uff0c\u4fdd\u8bc1\u6bcf\u6b21\u62ff\u5230\u7684 val \u53c2\u6570\u662f\u6700\u65b0\u7684\u503c"))),(0,o.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728 useEffect \u4f9d\u8d56 deps \u6570\u7ec4\u91cc\u52a0\u5165\u5f15\u7528\u7684\u4f9d\u8d56 count"),(0,o.kt)("li",{parentName:"ul"},"\u5229\u7528 useRef")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4ea7\u751f\u95ed\u5305\u9677\u9631\u7684\u539f\u56e0\u662f\uff0cReact \u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u90fd\u4f1a\u4ee5\u94fe\u8868\u7684\u65b9\u5f0f\u53bb\u7ef4\u62a4 hooks\uff0c\u5e76\u4e3a\u6bcf\u4e00\u4e2a hook \u521b\u5efa\u4e00\u4e2a Hook \u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u7684 memoizedState \u5c5e\u6027\u5c31\u662f\u7528\u6765\u5b58\u50a8\u7ec4\u4ef6\u4e0a\u4e00\u6b21\u66f4\u65b0\u540e\u7684 state\uff0cnext \u6307\u5411\u4e0b\u4e00\u4e2a hook \u5bf9\u8c61\u3002"),(0,o.kt)("p",{parentName:"div"},"\u521d\u59cb\u5316\uff0c\u5373\u7b2c\u4e00\u6b21\u6267\u884c\u7684\u65f6\u5019\uff0c\u6267\u884c useState\uff0ccount \u4e3a 0\u3002\u6267\u884c useEffect\uff0c\u6267\u884c\u5176\u56de\u8c03\u4e2d\u7684\u903b\u8f91\uff0c\u542f\u52a8\u5b9a\u65f6\u5668\uff0cseState \u5c06 Hook \u5bf9\u8c61 \u4e0a\u4fdd\u5b58\u7684\u72b6\u6001\u7f6e\u4e3a 1\uff1b\u6267\u884c\u7b2c\u4e8c\u4e2a useEffect\uff0c\u6267\u884c\u5176\u56de\u8c03\u4e2d\u7684\u903b\u8f91\uff0c\u542f\u52a8\u5b9a\u65f6\u5668\uff0c\u6bcf\u9694 0.5s \u8f93\u51fa 0\u3002"),(0,o.kt)("p",{parentName:"div"},"\u7b2c\u4e8c\u6b21\u6267\u884c\u7684\u65f6\u5019\uff0c\u6267\u884c useEffect\uff0c\u5176\u4f9d\u8d56\u9879\u4e3a\u7a7a\uff0c\u4e0d\u6267\u884c\u56de\u8c03\u51fd\u6570\uff0c\u4f46\u662f\u4e4b\u524d\u7684\u56de\u8c03\u51fd\u6570\u8fd8\u662f\u5728\u7684\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u8fd9\u91cc\u7684 count \u662f\u4e4b\u524d\u7b2c\u4e00\u6b21\u6267\u884c\u65f6\u5019\u7684 count \u503c (0)\uff0c\u56e0\u4e3a\u5728\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u5c31\u88ab\u5b9a\u65f6\u5668\u7684\u56de\u8c03\u51fd\u6570\u91cc\u9762\u5f15\u7528\u4e86\uff0c\u5f62\u6210\u4e86\u95ed\u5305\u4e00\u76f4\u88ab\u4fdd\u5b58\u3002"),"\u5bf9\u4e8e\u7b2c\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u5c31\u662f\u5c06 Hook \u5bf9\u8c61 \u4e0a\u4fdd\u5b58\u7684\u72b6\u6001\u7f6e\u4e3a 1\uff0c\u5bf9\u4e8e\u7b2c\u4e8c\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u5c31\u662f\u4e0d\u65ad\u7684\u8f93\u51fa 0"))),(0,o.kt)("p",null,"\u539f\u59cb\u7684\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useEffect, useState } from "react";\n\nfunction App() {\n  const [count, setCount] = useState<number>(0);\n  useEffect(() => {\n    setInterval(() => {\n      setCount(count + 1);\n    }, 500);\n  }, []);\n  // useEffect \u6ca1\u6709\u7b2c\u4e8c\u4e2a\u53c2\u6570\u65f6\uff0c\u7ec4\u4ef6\u7684\u521d\u59cb\u5316\u548c\u66f4\u65b0\u90fd\u4f1a\u6267\u884c\n  useEffect(() => {\n    setInterval(() => {\n      console.log(count);\n    }, 500);\n  }, []);\n\n  return (\n    <div>\n      <button\n        onClick={() => {\n          setCount(count + 1);\n        }}\n      >\n        +1\n      </button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"\u6253\u5370\u7684\u5e76\u4e0d\u662f\u9884\u671f\u7684 0\u30011\u30012\u30013\uff0c\u800c\u662f 0\u30010\u30010\u30010"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008cOUgNgy1h3w0jfqjy3j30ee0dgwhq.jpg",alt:"image"})),(0,o.kt)("h4",{id:"\u65b9\u6848\u4e00"},"\u65b9\u6848\u4e00"),(0,o.kt)("p",null,"\u95ed\u5305\u9677\u9631\u4ea7\u751f\u7684\u539f\u56e0\u5c31\u662f useEffect \u7b49 hook \u91cc\u7528\u5230\u4e86\u67d0\u4e2a state\uff0c\u4f46\u662f\u6ca1\u6709\u52a0\u5230 deps \u6570\u7ec4\u91cc\uff0c\u8fd9\u6837\u5bfc\u81f4 state \u53d8\u4e86\u5374\u6ca1\u6709\u6267\u884c\u65b0\u4f20\u5165\u7684\u51fd\u6570\uff0c\u4f9d\u7136\u5f15\u7528\u7684\u4e4b\u524d\u7684 state\u3002"),(0,o.kt)("p",null,"\u95ed\u5305\u9677\u9631\u7684\u89e3\u51b3\u4e5f\u5f88\u7b80\u5355\uff0c\u6b63\u786e\u8bbe\u7f6e deps \u6570\u7ec4\u5c31\u53ef\u4ee5\u4e86\uff0c\u8fd9\u6837\u6bcf\u6b21\u7528\u5230\u7684 state \u53d8\u4e86\u5c31\u4f1a\u6267\u884c\u65b0\u51fd\u6570\uff0c\u5f15\u7528\u65b0\u7684 state\u3002\u4e0d\u8fc7\u8fd8\u8981\u6ce8\u610f\u8981\u6e05\u7406\u4e0b\u4e0a\u6b21\u7684\u5b9a\u65f6\u5668\u3001\u4e8b\u4ef6\u76d1\u542c\u5668\u7b49\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useEffect, useState } from "react";\n\nfunction App() {\n  const [count, setCount] = useState<number>(0);\n  useEffect(() => {\n    const timer = setInterval(() => {\n      setCount(count + 1);\n    }, 500);\n    // return \u6267\u884c\u5f53\u524d effect \u4e4b\u524d\u5bf9\u4e0a\u4e00\u4e2a effect \u8fdb\u884c\u6e05\u9664\n    // \u52a0\u4e0a\u4e86 clearInterval\uff0c\u6bcf\u6b21\u6267\u884c\u65b0\u7684\u51fd\u6570\u4e4b\u524d\u4f1a\u628a\u4e0a\u6b21\u8bbe\u7f6e\u7684\u5b9a\u65f6\u5668\u6e05\u6389\u3002\n    return () => clearInterval(timer);\n  }, [count]);\n\n  useEffect(() => {\n    const timer = setInterval(() => {\n      console.log(count);\n    }, 500);\n    return () => clearInterval(timer);\n  }, [count]);\n\n  return (\n    <div>\n      <button\n        onClick={() => {\n          setCount(count + 1);\n        }}\n      >\n        +1\n      </button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tvax4.sinaimg.cn/large/008cOUgNgy1h3w0kypi7aj30dq0i8dj6.jpg",alt:"image"})),(0,o.kt)("h4",{id:"\u65b9\u6848\u4e8c"},"\u65b9\u6848\u4e8c"),(0,o.kt)("p",null,"\u65e2\u7136\u95ed\u5305\u9677\u9631\u4ea7\u751f\u7684\u539f\u56e0\u5c31\u662f useEffect \u7684\u51fd\u6570\u91cc\u5f15\u7528\u4e86\u67d0\u4e2a state\uff0c\u5f62\u6210\u4e86\u95ed\u5305\uff0c\u6240\u4ee5\u53ef\u4ee5\u4e0d\u76f4\u63a5\u5f15\u7528 state\uff0c\u800c\u662f\u4f7f\u7528 useRef \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ref \u5bf9\u8c61\uff0c\u7136\u540e\u628a state \u7684\u503c\u8d4b\u7ed9 ref \u5bf9\u8c61\u7684 current \u5c5e\u6027\uff0c\u6bcf\u6b21\u62ff\u5230\u6700\u65b0\u7684\u3002"),(0,o.kt)("p",null,"useRef \u662f\u5728 memorizedState \u94fe\u8868\u4e2d\u653e\u4e00\u4e2a\u5bf9\u8c61\uff0ccurrent \u4fdd\u5b58\u67d0\u4e2a\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fn = () => {\n  console.log(count);\n};\n// \u8fd4\u56de\u2f00\u4e2a\u53ef\u53d8\u7684 ref \u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u53ea\u6709\u4e2a current \u5c5e\u6027\uff0c\u521d\u59cb\u503c\u4e3a\u4f20\u2f0a\u7684\u53c2\u6570( initialValue )\nconst ref = useRef(fn);\n\nuseLayoutEffect(() => {\n  ref.current = fn;\n});\n\nuseEffect(() => {\n  setInterval(() => ref.current(), 500);\n}, []);\n")),(0,o.kt)("p",null,"useEffect \u91cc\u6267\u884c\u5b9a\u65f6\u5668\uff0cdeps \u8bbe\u7f6e\u4e3a\u4e86 []\uff0c\u6240\u4ee5\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u56de\u8c03\u51fd\u6570\u7528\u7684\u662f ref.current\uff0c\u6ca1\u6709\u76f4\u63a5\u4f9d\u8d56\u67d0\u4e2a state\uff0c\u6240\u4ee5\u4e0d\u4f1a\u6709\u95ed\u5305\u9677\u9631\u3002\n\u7528 useRef \u521b\u5efa\u4e2a ref \u5bf9\u8c61\uff0c\u521d\u59cb\u503c\u4e3a\u6253\u5370 count \u7684\u56de\u8c03\u51fd\u6570\uff0c\u6bcf\u6b21 render \u90fd\u4fee\u6539\u4e0b\u5176\u4e2d\u7684\u51fd\u6570\u4e3a\u65b0\u521b\u5efa\u7684\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u91cc\u5f15\u7528\u7684 count \u5c31\u662f\u6700\u65b0\u7684\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u7528\u4e86 useLayoutEffect \u800c\u4e0d\u662f useEffect \u662f\u56e0\u4e3a useLayoutEffect \u662f\u5728 render \u540e\u540c\u6b65\u6267\u884c\u7684\uff0cuseEffect \u662f\u5728 render \u540e\u5f02\u6b65\u6267\u884c\u7684\uff0c\u6240\u4ee5\u7528 useLayoutEffect \u80fd\u4fdd\u8bc1\u5728 useEffect \u4e4b\u524d\u88ab\u8c03\u7528\u3002"),(0,o.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u907f\u514d\u4e86 useEffect \u91cc\u76f4\u63a5\u5bf9 state \u7684\u5f15\u7528\uff0c\u4ece\u800c\u907f\u514d\u4e86\u95ed\u5305\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u4fee\u6539 count \u7684\u5730\u65b9\uff0c\u53ef\u4ee5\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"setCount(count => count + 1)")," \u4ee3\u66ff ",(0,o.kt)("inlineCode",{parentName:"p"},"setCount(count + 1)")," \uff08\u51fd\u6570\u5f0f\u66f4\u65b0\u7684 count \u6bcf\u6b21\u80fd\u62ff\u5230\u6700\u65b0\u7684 count\uff09\uff0c\u8fd9\u6837\u4e5f\u5c31\u907f\u514d\u4e86\u95ed\u5305\u95ee\u9898\uff08\u4e0d\u7136\u5c31\u8981\u5728 deps \u91cc\u52a0\u5165 count \u4f9d\u8d56\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useEffect(() => {\n  setInterval(() => {\n    setCount((count) => count + 1);\n  }, 500);\n}, []);\n")),(0,o.kt)("p",null,"\u73b0\u5728\u7ec4\u4ef6\u7684\u4ee3\u7801\u662f\u8fd9\u6837\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { useEffect, useLayoutEffect, useRef, useState } from "react";\n\nfunction App() {\n  const [count, setCount] = useState < number > 0;\n\n  const fn = () => {\n    console.log(count);\n  };\n  const ref = useRef(fn);\n\n  useLayoutEffect(() => {\n    ref.current = fn;\n  });\n\n  useEffect(() => {\n    setInterval(() => ref.current(), 500);\n  }, []);\n\n  useEffect(() => {\n    setInterval(() => {\n      setCount((count) => count + 1);\n    }, 500);\n  }, []);\n\n  return (\n    <div>\n      <button\n        onClick={() => {\n          setCount(count + 1);\n        }}\n      >\n        +1\n      </button>\n    </div>\n  );\n}\n\nexport default App;\n')))}k.isMDXComponent=!0}}]);