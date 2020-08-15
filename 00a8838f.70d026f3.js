(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{102:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return d}));var n=i(2),r=i(6),a=(i(0),i(144)),o={id:"advantages",title:"The DODO Advantage",sidebar_label:"The DODO Advantage"},s={id:"advantages",isDocsHomePage:!1,title:"The DODO Advantage",description:"Overview",source:"@site/docs/advantages.md",permalink:"/docs/docs/advantages",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/advantages.md",sidebar_label:"The DODO Advantage",sidebar:"someSidebar",previous:{title:"Introduction to DODO",permalink:"/docs/docs/"},next:{title:"Core Concept",permalink:"/docs/docs/coreConcept"}},c=[{value:"Overview",id:"overview",children:[]},{value:"High Fund Utilization",id:"high-fund-utilization",children:[]},{value:"Single Risk Exposure",id:"single-risk-exposure",children:[]},{value:"No impermanent loss",id:"no-impermanent-loss",children:[]},{value:"Why do we think DODO is the next generation liquidity solution",id:"why-do-we-think-dodo-is-the-next-generation-liquidity-solution",children:[]}],l={rightToc:c};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"DODO is powered by a ground-breaking algorithm called ",Object(a.b)("strong",{parentName:"p"},"Proactive Market Maker (PMM)"),". PMM leverages price oracles to retrieve accurate market prices of assets as input. It then aims to provide sufficient liquidity near the market price for every asset. The result is that liquidity decreases rapidly when far away from the market price. The following graphs compare the price curves of DODO (PMM) and Uniswap (AMM)."),Object(a.b)("p",null,"With everything else fixed, it is clear that the PMM curve is significantly flatter than the AMM curve near the market price, indicating higher fund utilization and lower slippage. Prices provided by PMM are more favorable than AMM."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_curve.jpeg",alt:null}))),Object(a.b)("p",null,"As the market price changes, AMM passively relies on arbitrage trading to change prices. On the other hand, PMM proactively shifts the price curve in the same direction to ensure that the section in the vicinity of the market price remains flat. This ensures the constant provision of sufficient liquidity."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_curve_move.jpeg",alt:null}))),Object(a.b)("p",null,"PMM outperforms AMM solutions in several important aspects."),Object(a.b)("h2",{id:"high-fund-utilization"},"High Fund Utilization"),Object(a.b)("p",null,"As seen in the above graphs, PMM, like AMMs, provides liquidity in the price range of zero to positive infinity, but the PMM price curve is significantly flatter in the area near the oracle (market) price. That is, most of the funds are gathered near the market price, which allows for more active, frequent trading, increasing fund utilization."),Object(a.b)("h2",{id:"single-risk-exposure"},"Single Risk Exposure"),Object(a.b)("p",null,"The PMM price curve consists of two parts, bidding and asking. These two parts may have different depth(liquidity). The asking liquidity is only determined by the amount of base token in the pool, while the bidding liquidity by the amount of quote tokens."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_segment.jpeg",alt:null}))),Object(a.b)("p",null,"It allows the base and quote pools to have different sizes, and therefore allows liquidity providers deposit any amount of quote or base token. In brief, you can just deposit what you hold."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The design is very easy to understand, because when you take an asking order, you take up liquidity providers\u2019 base token and it has nothing to do with the quote token."))),Object(a.b)("h2",{id:"no-impermanent-loss"},"No impermanent loss"),Object(a.b)("p",null,"The question is the same as how to guarantee liquidity providers withdraw what they have deposited. The key here is arbitrageurs. When users buy base token, PMM slightly increases the price to attract arbitrageurs to sell base token. And this arbitrageur behavior helps to maintain the balance in the pool is always equal to the amount that liquidity providers have staked."),Object(a.b)("h2",{id:"why-do-we-think-dodo-is-the-next-generation-liquidity-solution"},"Why do we think DODO is the next generation liquidity solution"),Object(a.b)("p",null,"Liquidity is the most important resource in the Defi world and the basis for the operation of all projects. There are only two proven liquidity solutions in the Defi field today:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Algorithmic market maker (e.g. uniswap)"),Object(a.b)("li",{parentName:"ul"},"Orderbook-based order matching (e.g. dydx)")),Object(a.b)("p",null,"But each of them has drawbacks:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Algorithmic market makers cannot provide sufficient liquidity on mainstream tokens compared with centralized exchanges. Only the most basic liquidity support can be provided on the long tail coin."),Object(a.b)("li",{parentName:"ul"},"Orderbook-based order matching relays on market makers mirroring centralized exchanges liquidity. Experienced market makers are expensive, and only a few teams can afford. Moreover, this kind of liquidity is difficult to be filled by smart contracts and thus, the usage scenarios are very narrow.")),Object(a.b)("p",null,"DODO benefits from the proactive market maker algorithm, which is also a kind of algorithmic market maker but avoids these two defects while gathering the advantages of both. That is, sufficient and contract-fillable liquidity on chain for any defi projects. We have strong confidence that DOOD will become an important infrastructure in the defi world."))}d.isMDXComponent=!0},144:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return b}));var n=i(0),r=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(i),p=n,b=u["".concat(o,".").concat(p)]||u[p]||h[p]||a;return i?r.a.createElement(b,s(s({ref:t},l),{},{components:i})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);