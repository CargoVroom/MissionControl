(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(2),l=(a(0),a(188));const b={id:"additional-lances",title:"Additional Lances"},c=[{value:"Settings Breakdown",id:"settings-breakdown",children:[]},{value:"Lance Definition Breakdown",id:"lance-definition-breakdown",children:[]}],i={id:"features/additional-lances",title:"Additional Lances",description:"Additional enemy and ally lances will spawn based on contract type, biome type, faction reputation, allies/enemies, percentage chances, maximum limits and lance configs.",source:"@site/docs\\features\\additional-lances.md",permalink:"/docs/features/additional-lances",sidebar:"docs",previous:{title:"Reuse of Story Maps",permalink:"/docs/features/reuse-of-story-maps"},next:{title:"Random Spawns",permalink:"/docs/features/random-spawns"}},r={rightToc:c,metadata:i};function d({components:e,...t}){return Object(l.b)("wrapper",Object(n.a)({},r,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Additional enemy and ally lances will spawn based on contract type, biome type, faction reputation, allies/enemies, percentage chances, maximum limits and lance configs."),Object(l.b)("p",null,"Additional enemy and ally lances can be spawned in all contract types based on contract type, biome type, percentage chances, maximum limits and lance configs. These are controlled by the files under ",Object(l.b)("inlineCode",{parentName:"p"},"config/AdditionalLances"),". There is a file for each difficulty level. A single difficulty level is the equivalent to 1/2 contract skull value so, for example, the file ",Object(l.b)("inlineCode",{parentName:"p"},"Difficulty6.json")," would be used if you select a 3 skull contract - if the game actually gives you a 3 skull contract. Often you get ",Object(l.b)("inlineCode",{parentName:"p"},"+/- 1")," difficulty level so you may get a ",Object(l.b)("inlineCode",{parentName:"p"},"5")," (2 and 1/2 skulls) or a ",Object(l.b)("inlineCode",{parentName:"p"},"7")," (3 and 1/2 skulls) difficulty contract instead without realising it)."),Object(l.b)("p",null,"Lances are defined using a similar configuration to how they are defined in the contract ",Object(l.b)("inlineCode",{parentName:"p"},".json")," files. They can be lances with specific mechs, or make use of tags for the game to select an appropriate lance. You can find some predefined lance files used by MC under the ",Object(l.b)("inlineCode",{parentName:"p"},"lances")," folder. You can create your own and they will be loaded. You can create a folder structure of lances for organisational purposes and they will be loaded without issue."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#settings-breakdown"}),"Settings Breakdown")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#lance-definition-breakdown"}),"Lance Definition Breakdown"))),Object(l.b)("h2",{id:"settings-breakdown"},"Settings Breakdown"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'  "AdditionalLances": {\n    "IncludeContractTypes": [],\n    "ExcludeContractTypes": [],\n    "LancePool": {\n      "ALL": ["GENERIC_BATTLE_LANCE"]\n    },\n    "RewardsPerLance": [\n      {\n        "Type": "ContractBonusRewardFlat",\n        "Value": "3000000",\n      },\n      {\n        "Type": "ContractBonusRewardPct",\n        "Value": "0.4",\n      },\n      {\n        "Type": "ContractBonusEmployerReputation",\n        "Value": "1",\n      },\n      {\n        "Type": "ContractBonusTargetReputation",\n        "Value": "-1",\n      },\n    ],\n    "Enemy": {\n      "Max": 2,\n      "ExcludeContractTypes": ["Rescue"],\n      "ChanceToSpawn": 0.4,\n      "EliteLances": {\n        "Conditions": ["IsEnemy"],\n        "Suffix": "_Elite",\n        "Overrides": {\n          "ChanceToSpawn": 0.6\n        }\n      },\n      "LancePool": {\n        "ALL": [\n          "GENERIC_BATTLE_LANCE"\n        ],\n        "CONTRACT_TYPE:DestroyBase": [\n          "BRAWLER_LANCE", "DEFENDING_LANCE"\n        ],\n        "CONTRACT_TYPE:DefendBase": [\n          "HEAVY_MISSILE_LANCE", "ATTACKING_LANCE"\n        ],\n        "BIOME:DesertParched": [\n          "BBQ_MASTERS"\n        ],\n        "BIOME:LowlandsSpring": [\n          "IM_LIKE_A_TURRET_IN_WATER_I_RUN_SO_HOT"\n        ],\n        "FACTION:Davion:50:99": [\n          "Heavy_Davion_Battle_Lance"\n        ]\n      },\n\n    },\n    "Allies": {\n      "Max": 1,\n      "ChanceToSpawn": 0.4,\n      "EliteLances": {\n        "Conditions": ["IsAlly"],\n        "Overrides": {\n          "Max": 2,\n          "ChanceToSpawn": 0.6\n        }\n      },\n      "LancePool": {\n        "ALL": [\n          "GENERIC_BATTLE_LANCE"\n        ],\n        "CONTRACT_TYPE:DestroyBase": [\n          "HEAVY_MISSILE_LANCE", "ATTACKING_LANCE"\n        ],\n        "CONTRACT_TYPE:DefendBase": [\n          "BRAWLER_LANCE", "DEFENDING_LANCE"\n        ]\n      }\n    }\n  }\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"IncludeContractTypes")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"All available contract types"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'["Rescue", "DestroyBase"]')," would limit lances to these two contract types ",Object(l.b)("br",null),Object(l.b)("br",null)," ",Object(l.b)("inlineCode",{parentName:"td"},"[]")," would fallback to default"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When set, it overrides ",Object(l.b)("inlineCode",{parentName:"td"},"ExcludeContractTypes")," for this level")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"ExcludeContractTypes")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No contract types"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'["Assasinate", "CaptureBase"]')," would remove these two contract types from the entire list of available contract types. ",Object(l.b)("br",null),Object(l.b)("br",null)," ",Object(l.b)("inlineCode",{parentName:"td"},"[]")," would fallback to default"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to explicitly exclude additional lance spawns for all teams for the specified contract types. Not used if ",Object(l.b)("inlineCode",{parentName:"td"},"IncludeContractTypes")," is set")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"LancePool")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"ALL")," situations will use ",Object(l.b)("inlineCode",{parentName:"td"},"GENERIC_BATTLE_LANCE")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See the above code as a full example. ",Object(l.b)("br",null)," Can match to ",Object(l.b)("inlineCode",{parentName:"td"},"ALL"),", ",Object(l.b)("inlineCode",{parentName:"td"},"CONTRACT_TYPE:{key}"),", ",Object(l.b)("inlineCode",{parentName:"td"},"BIOME:{key}")," and ",Object(l.b)("inlineCode",{parentName:"td"},"FACTION:{factionKey}:{startRepRange}:{endRepRange}")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"All matched conditions will be added to one list of lance pool keys. One key per lance spawn is selected at random for the specific lance. These lance keys reference the lances in the ",Object(l.b)("inlineCode",{parentName:"td"},"/lances")," folder. See ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#lance-definition-breakdown"}),"Lance Definition Breakdown"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"RewardsPerLance")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Children defaults"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies which rewards to provide for every enenmy lance that the player destroys. Max 4.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Enemy")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Children defaults"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls enemy/target specific lance details")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Allies")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Children defaults"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls allies/employer specific lance details")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"RewardsPerLance")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Type")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"ContractBonusRewardFlat"),", ",Object(l.b)("inlineCode",{parentName:"td"},"ContractBonusRewardPct"),", ",Object(l.b)("inlineCode",{parentName:"td"},"ContractBonusEmployerReputation"),", ",Object(l.b)("inlineCode",{parentName:"td"},"ContractBonusTargetReputation")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reward type")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Value")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value for the appropriate type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Enemy or Allies")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Max")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"1")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"3")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of lances to attempt to spawn")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"ExcludeContractTypes")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No contract types"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Same as parent ",Object(l.b)("inlineCode",{parentName:"td"},"ExcludeContractTypes")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specifically exclude additional lances for a team based on contract type")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"ChanceToSpawn")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0.3")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Float number from ",Object(l.b)("inlineCode",{parentName:"td"},"0")," to ",Object(l.b)("inlineCode",{parentName:"td"},"1")," to represent percentage. ",Object(l.b)("inlineCode",{parentName:"td"},"1")," being 100%")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"EliteLances")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies is elite lances should spawn based on set conditions")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"LancePool")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Empty"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Same as parent ",Object(l.b)("inlineCode",{parentName:"td"},"LancePool")," example"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additive process. Adds to the parent ",Object(l.b)("inlineCode",{parentName:"td"},"LancePool"))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"EliteLances")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Conditions")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'["IsAlly"]')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Checks if the player merc company is an ally or enemy to the faction. If this check is true then the settings specified in this object override the general settings. Can match ",Object(l.b)("inlineCode",{parentName:"td"},"IsAlly")," or ",Object(l.b)("inlineCode",{parentName:"td"},"IsEnemy"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Overrides")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the overrides to use if the ",Object(l.b)("inlineCode",{parentName:"td"},"Conditions")," return true")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"EliteLances - Overrides")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Max")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"1")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"3")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the generic ",Object(l.b)("inlineCode",{parentName:"td"},"Max")," setting. Maximum number of lances to attempt to spawn")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"ChanceToSpawn")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0.3")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the generic ",Object(l.b)("inlineCode",{parentName:"td"},"ChanceToSpawn")," setting. Float number from ",Object(l.b)("inlineCode",{parentName:"td"},"0")," to ",Object(l.b)("inlineCode",{parentName:"td"},"1")," to represent percentage. ",Object(l.b)("inlineCode",{parentName:"td"},"1")," being 100%")))),Object(l.b)("h2",{id:"lance-definition-breakdown"},"Lance Definition Breakdown"),Object(l.b)("p",null,"Lance definitions are defined in ",Object(l.b)("inlineCode",{parentName:"p"},"MissionControl/lances")," folder. Each ",Object(l.b)("inlineCode",{parentName:"p"},".json")," file should be its own Mission Control lance. You can specify exact lances, or use tagged lances for the game to select an appropriate lance."),Object(l.b)("p",null,"Each"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "lanceKey": "GENERIC_BATTLE_LANCE",\n  "lanceDefId": "Tagged",\n  "lanceTagSet": {\n    "items": ["lance_type_battle"]\n  },\n  "lanceExcludedTagSet": {\n    "items": []\n  },\n  "spawnEffectTags": {\n    "items": []\n  },\n  "lanceDifficultyAdjustment": 0,\n  "unitSpawnPointOverrideList": [\n    {\n      "unitType": "Mech",\n      "unitDefId": "UseLance",\n      "unitExcludedTagSet": {\n        "items": []\n      },\n      "spawnEffectTags": {\n        "items": ["spawn_poorly_maintained_50"]\n      },\n      "pilotDefId": "pilotDef_InheritLance",\n      "pilotTagSet": {\n        "items": []\n      },\n      "pilotExcludedTagSet": {\n        "items": []\n      }\n    },\n    {\n      "unitType": "Mech"\n    },\n    {\n      "unitType": "Vehicle",\n      "unitTagSet": {\n        "items": ["unit_vehicle_carrier"]\n      }\n    },\n    {\n      "unitType": "Mech"\n    }\n  ]\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"lanceKey")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"GENERIC_BATTLE_LANCE")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key must be unique. It is used by the mod in the ",Object(l.b)("inlineCode",{parentName:"td"},"settings.json")," LancePools to specify the lance selection")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"lanceDefId")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Tagged")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Tagged"),", ",Object(l.b)("inlineCode",{parentName:"td"},"Manual")," or lance def id (e.g. ",Object(l.b)("inlineCode",{parentName:"td"},"lancedef_arena_light_fire"),")"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This specifies what type of lance this definition is. ",Object(l.b)("inlineCode",{parentName:"td"},"Tagged")," uses the lance tags to select an appropriate lance and ",Object(l.b)("inlineCode",{parentName:"td"},"Manual")," allows you to manually create a specific lance. If a specific lance def id is used then it ignores the units specified below and uses the full lance definition. ",Object(l.b)("inlineCode",{parentName:"td"},"lanceTagSet")," and ",Object(l.b)("inlineCode",{parentName:"td"},"lanceExcludedTagSet")," is ignored if a specific mech def id is set.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"supportAutofill")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When set to false, if MC has ",Object(l.b)("inlineCode",{parentName:"td"},"Autofill")," set to ",Object(l.b)("inlineCode",{parentName:"td"},"true")," in ",Object(l.b)("inlineCode",{parentName:"td"},"ExtendedLances")," config, this specific lance config will ",Object(l.b)("strong",{parentName:"td"},"not")," autofill to the specified ",Object(l.b)("inlineCode",{parentName:"td"},"EL")," lance size")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"lanceTagSet")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"items": ["lance_type_battle", "lance_type_notallvehicles"]')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the lance definition to specify what type of lance to select by tags")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"lanceExcludedTagSet")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the lance definition to exclude specific tags when selecting by tag")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"spawnEffectTags")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"items": ["spawn_poorly_maintained_25"]')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the lance definition to specify spawn specific tags that apply to the entire lance")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"lanceDifficultyAdjustment")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"1")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"+/- this amount for the lance difficulty")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"unitSpawnPointOverrideList")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of lance members"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"unitSpawnPointOverrideList")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"unitType")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Mech")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Mech"),", ",Object(l.b)("inlineCode",{parentName:"td"},"Vehicle")," or ",Object(l.b)("inlineCode",{parentName:"td"},"Turret")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of lance member")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"unitDefId")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"UseLance")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"mechDef_None"),", ",Object(l.b)("inlineCode",{parentName:"td"},"mechDef_InheritLance"),", ",Object(l.b)("inlineCode",{parentName:"td"},"vehicleDef_None"),", ",Object(l.b)("inlineCode",{parentName:"td"},"vehicleDef_InheritLance"),", ",Object(l.b)("inlineCode",{parentName:"td"},"turretDef_None"),", ",Object(l.b)("inlineCode",{parentName:"td"},"turretDef_InheritLance"),", ",Object(l.b)("inlineCode",{parentName:"td"},"Tagged")," or a specific mech def id (e.g ",Object(l.b)("inlineCode",{parentName:"td"},"mechdef_orion_ON1-K"),")"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determines how the unit is selected. ",Object(l.b)("inlineCode",{parentName:"td"},"unitTagSet")," is ignored if a specific mech def id is set")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"unitTagSet")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"items": ["unit_vehicle_carrier"]')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tags for selecting the unit if ",Object(l.b)("inlineCode",{parentName:"td"},"Tagged")," is selected")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"unitExcludedTagSet")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the unit definition to exclude specific tags when selecting by tag")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"spawnEffectTags")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"items": ["spawn_poorly_maintained_25"]')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the unit definition to specify spawn specific tags that apply to the specific lance member")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pilotDefId")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pilotDef_InheritLance")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pilotDef_InheritLance"),", ",Object(l.b)("inlineCode",{parentName:"td"},"UseLance"),", ",Object(l.b)("inlineCode",{parentName:"td"},"Tagged"),", ",Object(l.b)("inlineCode",{parentName:"td"},"pilot_default"),", ",Object(l.b)("inlineCode",{parentName:"td"},"pilot_commander")," or a specific pilot def id (e.g. ",Object(l.b)("inlineCode",{parentName:"td"},"pilot_d7_defender"),")"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows for selection system for pilots. ",Object(l.b)("inlineCode",{parentName:"td"},"pilotTagSet")," and ",Object(l.b)("inlineCode",{parentName:"td"},"pilotExcludedTagSet")," is ignored if a specific mech def id is set")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pilotTagSet")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"items": ["pilot_npc_outrider"]')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tags for selecting the unit if ",Object(l.b)("inlineCode",{parentName:"td"},"Tagged")," is selected")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pilotExcludedTagSet")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows the pilot definition to exclude specific tags when selecting by tag")))))}d.isMDXComponent=!0},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n),b=l.a.createContext({}),c=function(e){var t=l.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=c(e.components);return l.a.createElement(b.Provider,{value:t},e.children)};var r={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),O=c(a),p=n,o=O[i+"."+p]||O[p]||r[p]||b;return a?l.a.createElement(o,Object.assign({},{ref:t},d,{components:a})):l.a.createElement(o,Object.assign({},{ref:t},d))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var O=2;O<b;O++)c[O]=a[O];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);