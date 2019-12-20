(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),l=(n(0),n(154)),b={id:"settings",title:"Settings"},c=[{value:"Settings Breakdown",id:"settings-breakdown",children:[]},{value:"Random Spawns",id:"random-spawns",children:[]}],o={id:"features/settings",title:"Settings",description:"Mission Control is designed from the very beginning to be entirely configurable for every feature. Due to this, there's a large level of control the player or modder has over the settings.",source:"@site/docs\\features\\settings.md",permalink:"/MissionControl/docs/features/settings",sidebar:"docs",previous:{title:"Install",permalink:"/MissionControl/docs/overview/install"},next:{title:"Custom Contract Types",permalink:"/MissionControl/docs/features/custom-contract-types"}},i={rightToc:c,metadata:o},s="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)(s,Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Mission Control is designed from the very beginning to be entirely configurable for every feature. Due to this, there's a large level of control the player or modder has over the settings."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#settings-breakdown"}),"Settings Breakdown")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#random-spawns"}),"Random Spawns"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "DebugMode": true,\n  "DebugSkirmishMode": true,\n  "DisableIfFlashpointContract": true,\n  "RandomSpawns": {\n    "Enable": true,\n    "IncludeContractTypes": [],\n    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"]\n  },\n  "HotDrop": {\n    "Enable": true,\n    "IncludeContractTypes": [],\n    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],\n    "GuardOnHotDrop": false,\n    "EvasionPipsOnHotDrop": 4,\n    "IncludeEnemies": true,\n    "IncludeAllyTurrets": false,\n    "IncludeEnemyTurrets": false\n  },\n  "AdditionalLances": {\n    "Enable": true,\n    "IncludeContractTypes": [],\n    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],\n    "UseElites": true,\n    "UseDialogue": true,\n    "SkullValueMatters": true,\n    "BasedOnVisibleSkullValue": true,\n    "UseGeneralProfileForSkirmish": true,\n    "DisableIfFlashpointContract": true,\n    "DisableWhenMaxTonnage": {\n      "Enable": true,\n      "Limited": false,\n      "LimitedToUnder": 300\n    }\n  },\n  "ExtendedLances": {\n    "Enable": true,\n    "Autofill": true,\n    "IncludeContractTypes": [],\n    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],\n    "LanceSizes": {\n      "5": [],\n      "6": []\n    }\n  },\n  "ExtendedBoundaries": {\n    "Enable": true,\n    "IncludeContractTypes": [],\n    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],\n    "IncreaseBoundarySizeByPercentage": 0.3\n  },\n  "DynamicWithdraw": {\n    "Enable": true,\n    "IncludeContractTypes": [],\n    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],\n    "MinDistanceForZone": 50,\n    "MaxDistanceForZone": 400,\n    "DisorderlyWithdrawalCompatibility": false\n  }\n}\n')),Object(l.b)("h3",{id:"settings-breakdown"},"Settings Breakdown"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DebugMode"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enable debug logging and debug skirmish mode, if it's enabled")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DebugSkirmishMode"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enables the 'Quick Skirmish' feature")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DisableIfFlashpointContract"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Disables MC for Flashpoints if ",Object(l.b)("inlineCode",{parentName:"td"},"true"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RandomSpawns"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#random-spawns"}),"Object")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Random spawn settings")))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},Object(l.b)("strong",{parentName:"em"},"More to come soon"))),Object(l.b)("h3",{id:"random-spawns"},"Random Spawns"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enable"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enables the Random Spawn feature")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"IncludeContractTypes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All available contract types"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'["Rescue", "DestroyBase"]')," would limit lances to these two contract types ",Object(l.b)("br",null),Object(l.b)("br",null)," ",Object(l.b)("inlineCode",{parentName:"td"},"[]")," would fallback to default"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When set, it overrides ",Object(l.b)("inlineCode",{parentName:"td"},"ExcludeContractTypes")," for this level")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"ExcludeContractTypes")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No contract types"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'["Assasinate", "CaptureBase"]')," would remove these two contract types from the entire list of available contract types. ",Object(l.b)("br",null),Object(l.b)("br",null)," ",Object(l.b)("inlineCode",{parentName:"td"},"[]")," would fallback to default")))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},Object(l.b)("strong",{parentName:"em"},"More to come soon"))))}u.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var o="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s[c+"."+u]||s[u]||i[u]||l;return n?r.a.createElement(d,Object.assign({},{ref:t},o,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[o]="string"==typeof e?e:a,b[1]=c;for(var u=2;u<l;u++)b[u]=n[u];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);