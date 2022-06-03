"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4706],{9613:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var l=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),d=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=d(e.components);return l.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},k=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=d(t),c=a,s=k["".concat(p,".").concat(c)]||k[c]||u[c]||i;return t?l.createElement(s,r(r({ref:n},m),{},{components:t})):l.createElement(s,r({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var d=2;d<i;d++)r[d]=t[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}k.displayName="MDXCreateElement"},171:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var l=t(2848),a=t(9213),i=(t(9496),t(9613)),r=["components"],o={sidebar_position:10},p=void 0,d={unversionedId:"\u63a2\u7d22/Vim",id:"\u63a2\u7d22/Vim",isDocsHomePage:!1,title:"Vim",description:"day01",source:"@site/docs/\u63a2\u7d22/Vim.md",sourceDirName:"\u63a2\u7d22",slug:"/\u63a2\u7d22/Vim",permalink:"/docs/\u63a2\u7d22/Vim",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/\u63a2\u7d22/Vim.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u4e9b\u9762\u8bd5",permalink:"/docs/\u63a2\u7d22/\u4e00\u4e9b\u9762\u8bd5"},next:{title:"leetcode\u65e5\u8bb0",permalink:"/docs/leetcode/leetcode\u65e5\u8bb0"}},m=[{value:"day01",id:"day01",children:[]},{value:"day 02",id:"day-02",children:[]},{value:"day 03",id:"day-03",children:[]}],u={toc:m};function k(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"day01"},"day01"),(0,i.kt)("p",null,"vscode \u5b89\u88c5 vim \u63d2\u4ef6\u3002"),(0,i.kt)("p",null,"\u521a\u6253\u5f00\u65f6\u662f normal \u6a21\u5f0f\uff0c\u5229\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"h"),"\uff08\u5de6\uff09\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"j"),"\uff08\u4e0b\uff09\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"k"),"\uff08\u4e0a\uff09\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"l"),"\uff08\u53f3\uff09 \u53ef\u4ee5\u79fb\u52a8\u5149\u6807\uff1b"),(0,i.kt)("p",null,"\u6309\u952e ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," \u8fdb\u5165 insert \u63d2\u5165\u6a21\u5f0f\uff08\u6b64\u65f6\u5149\u6807\u5728\u5f53\u524d\u5355\u4f4d\u524d\uff0c\u6309\u952e ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," \u8fdb\u5165 insert \u6a21\u5f0f\uff0c\u5149\u6807\u5728\u5f53\u524d\u5355\u4f4d\u540e\u9762\uff09\uff0c\u6309\u952e ",(0,i.kt)("inlineCode",{parentName:"p"},"esc")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"control")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"[")," \u7ec4\u5408\u952e\uff0c\u9000\u51fa insert \u6a21\u5f0f\uff1b"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u7ec8\u7aef\u4e2d\u9000\u51fa Vim\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":q!")," \u2014\u2014 \u5f3a\u5236\u9000\u51fa"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":wq")," \u2014\u2014 \u9000\u51fa\u5e76\u4fdd\u5b58")))),(0,i.kt)("p",null,"vscode \u4e2d\u7684 Esc \u952e\u7684\u4fee\u6539\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// \u5728 settings.json \u4e2d\u914d\u7f6e\n\n"vim.insertModeKeyBindings": [{ "before": ["j", "k"], "after": ["<Esc>"] }],\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/VSCodeVim/Vim#mac"},"\u5feb\u901f\u79fb\u52a8"),"\uff1a"),(0,i.kt)("p",null,"Mac\uff0cTo enable key-repeating, execute the following in your Terminal, log out and back in, and then restart VS Code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false              # For VS Code\n$ defaults write com.microsoft.VSCodeInsiders ApplePressAndHoldEnabled -bool false      # For VS Code Insider\n$ defaults write com.visualstudio.code.oss ApplePressAndHoldEnabled -bool false         # For VS Codium\n$ defaults write com.microsoft.VSCodeExploration ApplePressAndHoldEnabled -bool false   # For VS Codium Exploration users\n$ defaults delete -g ApplePressAndHoldEnabled                                           # If necessary, reset global default\n")),(0,i.kt)("p",null,"We also recommend increasing Key Repeat and Delay Until Repeat settings in System Preferences -> Keyboard."),(0,i.kt)("h2",{id:"day-02"},"day 02"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u884c\u76f8\u5173\u7684\u547d\u4ee4")),(0,i.kt)("p",null,"\u79fb\u52a8\u5230\u884c\u9996\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," \u2014\u2014 \u5230\u884c\u9996"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"^")," \u2014\u2014 \u5230\u672c\u884c\u7b2c\u4e00\u4e2a\u4e0d\u662f blank \u7684\u4f4d\u7f6e\uff08\u7a7a\u683c\u3001tab\u3001\u6362\u884c\u3001\u56de\u8f66\u7b49\uff09")),(0,i.kt)("p",null,"\u79fb\u52a8\u5230\u884c\u5c3e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$")," \u2014\u2014 \u5230\u884c\u5c3e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"g"),"+",(0,i.kt)("inlineCode",{parentName:"li"},"_")," \u2014\u2014 \u5230\u672c\u884c\u6700\u540e\u4e00\u4e2a\u4e0d\u662f blank \u7684\u4f4d\u7f6e\uff08\u7a7a\u683c\u3001tab\u3001\u6362\u884c\u3001\u56de\u8f66\u7b49\uff09")),(0,i.kt)("p",null,"\u6539\u952e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"vim.normalModeKeyBindings": [\n    {\n      "before": ["H"],\n      "after": ["^"]\n    },\n    {\n      "before": ["L"],\n      "after": ["g", "_"]\n    }\n  ],\n')),(0,i.kt)("p",null,"\u63d2\u5165\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u884c\u9996\u63d2\u5165\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"I")),(0,i.kt)("li",{parentName:"ul"},"\u884c\u5c3e\u63d2\u5165\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"A")),(0,i.kt)("li",{parentName:"ul"},"\u884c\u524d\u63d2\u5165\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"O")),(0,i.kt)("li",{parentName:"ul"},"\u884c\u540e\u63d2\u5165\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"o"))),(0,i.kt)("p",null,"\u590d\u5236\u5f53\u524d\u884c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yy"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u548c ctrl + c \u4e0d\u51b2\u7a81")),(0,i.kt)("p",null,"\u7c98\u8d34\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"p"))),(0,i.kt)("p",null,"\u5220\u9664\u5f53\u524d\u884c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dd"))),(0,i.kt)("h2",{id:"day-03"},"day 03"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"vim \u7684\u8bed\u6cd5")),(0,i.kt)("p",null,"vim \u8bed\u6cd5\u7684\u5185\u5bb9\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"\u64cd\u4f5c\u7b26+\u52a8\u4f5c\uff08\u8303\u56f4\uff09"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u64cd\u4f5c\u7b26"),"\uff1a\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"d"),"\uff08delete\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u52a8\u4f5c"),"\uff1a\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"h"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"j"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"k"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"l"))),(0,i.kt)("p",null,"\u5220\u9664\u64cd\u4f5c\u7b26\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"d"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6bd4\u5982\u6309\u4e0b ",(0,i.kt)("inlineCode",{parentName:"li"},"d")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"L"),"\uff1a\u5c31\u662f\u5220\u9664\u5f53\u524d\u5149\u6807\u5230\u884c\u5c3e\u7684\u5185\u5bb9\uff08\u8fd9\u91cc\u5f53\u524d\u5149\u6807\u5230\u884c\u5c3e\u5c31\u662f\u64cd\u4f5c\u7b26\u4f5c\u7528\u7684",(0,i.kt)("strong",{parentName:"li"},"\u8303\u56f4"),"\uff09")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"vim.operatorPendingModeKeyBindings": [\n    {\n      "before": ["H"],\n      "after": ["^"]\n    },\n    {\n      "before": ["L"],\n      "after": ["g", "_"]\n    }\n  ],\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"c"),"\uff1a\u5220\u9664\u5b8c\u6210\u540e\uff0c\u8fdb\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"insert")," \u6a21\u5f0f\uff0c\u5269\u4e0b\u7684\u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"d")," \u4e00\u6837")),(0,i.kt)("p",null,"\u590d\u5236\u64cd\u4f5c\u7b26\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6bd4\u5982\u6309\u4e0b ",(0,i.kt)("inlineCode",{parentName:"li"},"y")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"L"),"\uff1a\u5c31\u662f\u590d\u5236\u5f53\u524d\u5149\u6807\u5230\u884c\u5c3e\u7684\u5185\u5bb9\uff08\u518d\u6309\u4e0b ",(0,i.kt)("inlineCode",{parentName:"li"},"p")," \u5c31\u53ef\u4ee5\u7c98\u8d34\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u4e0a\u5bf9\u4e8e\u5220\u9664\u64cd\u4f5c\u7b26\uff0c\u6bd4\u5982",(0,i.kt)("inlineCode",{parentName:"li"},"d"),"+",(0,i.kt)("inlineCode",{parentName:"li"},"L"),"\uff0c\u662f\u628a\u5149\u6807\u5230\u884c\u5c3e\u7684\u5185\u5bb9\u590d\u5236\u5230 vim \u7684\u5bc4\u5b58\u5668\uff0c\u7136\u540e\u5220\u9664\uff0c\u8fd9\u91cc\u662f\u4e00\u6837\u7684\uff0c\u4e5f\u53ef\u4ee5\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"p")," \u53d6\u5230")))),(0,i.kt)("p",null,"\u57fa\u4e8e\u5355\u8bcd\u7684\u79fb\u52a8\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u79fb\u52a8\u5230\u5355\u8bcd\u7684\u7ed3\u5c3e\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"e")," (\u4ece\u5de6\u5230\u53f3)"),(0,i.kt)("li",{parentName:"ul"},"\u79fb\u52a8\u5230\u4e0a\u4e00\u4e2a\u5355\u8bcd\u7684\u5f00\u5934\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"b")," \uff08\u4ece\u53f3\u5230\u5de6\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u79fb\u52a8\u5230\u5355\u8bcd\u7684\u5f00\u5934\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"w")),(0,i.kt)("li",{parentName:"ul"},"\u79fb\u52a8\u5230\u4e0a\u4e00\u4e2a\u5355\u8bcd\u7684\u7ed3\u5c3e\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"ge"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u7b26\u53f7\u4f1a\u88ab\u89c6\u4f5c\u4e00\u4e2a\u5355\u8bcd\uff0c\u5b57\u4e32\u662f\u4ee5\u7a7a\u683c\u5206\u9694\u7684\u5355\u8bcd\uff0c\u5c06\u4e0a\u9762\u57fa\u4e8e\u5355\u8bcd\u7684\u79fb\u52a8\u64cd\u4f5c\u7b26\u6539\u4e3a\u5927\u5199\u5373\u53ef")),(0,i.kt)("p",null,"\u4ee5\u4e0a\u64cd\u4f5c\u7b26\u7684\u7ec4\u5408\u4e3e\u4f8b\uff0c\u8986\u76d6\u5e38\u7528\u573a\u666f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cw"),"\uff1a\u5220\u9664\u5f53\u524d\u5355\u8bcd"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ea"),"\uff1a\u5728\u5f53\u524d\u5355\u8bcd\u7ed3\u5c3e\u5904\u6dfb\u52a0")))}k.isMDXComponent=!0}}]);