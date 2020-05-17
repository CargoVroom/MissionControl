(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=(n(0),n(188));const i={id:"ai-behaviours",title:"AI Behaviours"},l=[{value:"Follow Lance",id:"follow-lance",children:[]}],c={id:"features/ai-behaviours",title:"AI Behaviours",description:"Completely new AI behaviours that do not exist in the vanilla game.",source:"@site/docs\\features\\ai-behaviours.md",permalink:"/docs/features/ai-behaviours",sidebar:"docs",previous:{title:"Dynamic Withdraw",permalink:"/docs/features/dynamic-withdraw"},next:{title:"Quick Skirmish",permalink:"/docs/features/quick-skirmish"}},o={rightToc:l,metadata:c};function b({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Completely new AI behaviours that do not exist in the vanilla game."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Follow Lance - Follows the player lance. Used by ally or player AI lances.")),Object(r.b)("h2",{id:"follow-lance"},"Follow Lance"),Object(r.b)("p",null,"You can configure the follow lance AI with the follow ",Object(r.b)("inlineCode",{parentName:"p"},"settings.json")," options."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"AI": {\n  "FollowPlayer": {\n    "Target": "HeaviestMech", // HeaviestMech or LanceOrder\n    "StopWhen": "OnEnemyDetected", // OnEnemyDetected, OnEnemyVisible, WhenNotNeeded\n    "MaxDistanceFromTargetBeforeSprinting": 200, // Distance beyond which the ally will only sprint to catch up\n    "TargetZoneRadius": 120 // The zone radius the following mech will try to get within\n  }\n}\n')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Details"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Target"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"HeaviestMech")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"HeaviestMech")," follows heaviest mech. ",Object(r.b)("inlineCode",{parentName:"td"},"LanceOrder")," follows units 1 (if it dies they follow unit 2 etc)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"StopWhen"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"OnEnemyDetected")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"OnEnemyDetected"),", ",Object(r.b)("inlineCode",{parentName:"td"},"OnEnemyVisible"),", ",Object(r.b)("inlineCode",{parentName:"td"},"WhenNotNeeded"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MaxDistanceFromTargetBeforeSprinting"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"200")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Distance beyond which the ally will only sprint to catch up")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TargetZoneRadius"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"120")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Distance to keep within of the target. 1 grid point = 24 units. Straight line check.")))))}b.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a),i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,u=d[c+"."+p]||d[p]||o[p]||i;return n?r.a.createElement(u,Object.assign({},{ref:t},b,{components:n})):r.a.createElement(u,Object.assign({},{ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var d=2;d<i;d++)l[d]=n[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);