//Skill caps
sknovice = 20
skapprentice=40
skjourneyman=60
skadvanced = 80
skmaster = 100
yes = 101;

var levelText = {
  20:"Novice",
  40:"Apprentice",
  60:"Journeyman",
  80:"Advanced",
  100:"Master",
  101:"Yes"
}

//Skill organization
skills = {
  misc:{
    karma:"Karma"
  },
  psionics:{
    contact:'Contact',
    barrier:'Barrier',
    expel:"Expel"
  },
  combat:{
    archery:"Archery",
    backstab:"Backstab",
    bash:"Bash",
    blindfighting:"Blind fighting",
    blowgunuse:"Blowguns",
    charge:"Charge",
    crossbowuse:"Crossbows",
    disarm:"Disarm",
    dualwield:"Dual wield",
    flee:"Flee",
    guarding:"Guard",
    hack:"Hack",
    kick:"Kick",
    parry:"Parry",
    rescue:"Rescue",
    riposte:"Riposte",
    sap:"Sap",
    slinguse:"Sling use",
    shielduse:"Shield use",
    subdue:"Subdue",
    throw:"Throw",
    threaten:"Threaten", 
    twohanded:"Two handed"
  },
  weapons:{
    bludgeoningweapons:"Bludgeoning", 
    choppingweapons:"Chopping",
    piercingweapons:"Piercing",
    slashingweapons:"Slashing"
  },
  stealth:{
    climb:"Climb",
    hidecity:"Hide (City)",
    hidewild:"Hide (Wild)",
    sneakcity:"Sneak (City)",    
    sneakwild:"Sneak (Wild)",
  },
  manipulation:{
    bandage:"Bandage",
    pick:"Pick",
    pilot:"Pilot",
    poisoning:"Poisoning",
    ride:"Ride",    	  
    skinning:"Skinning",
    sleightofhand:"Sleight of hand",
    steal:"Steal"
  },
  perception:{
    directionsense:"Direction sense",
    forage:"Forage",
    huntwild:"Hunt (Wild)",
    huntcity:"Hunt (City)",
    listenwild:"Listen (Wild)",
    listencity:"Listen (City)",
    peek:"Peek",
    scan:"Scan",
    search:"Search",
    watch:"Watch",
  },
  languages:{
    allundean:"Allundean",
    bendune:"Bendune",
    cavilish:"Cavilish",
    mirukkim:"Mirukkim",
  }, 
   crafting:{
    armormaking:"Armor Making",
    armorrepair:"Armor Repair",
    axemaking:"Axe making",
    bandagemaking:"Bandagemaking",
    basketweaving:"Basket weaving",
    bowmaking:"Bow making",
    brew:"Brew",
    clayworking:"Clayworking",
    clothworking:"Clothworking",
    clubmaking:"Club making",
    cooking:"Cooking",   
    dyeing:"Dyeing",
    featherworking:"Featherworking", 
    fletchery:"Fletchery",
    floristry:"Floristry",    
    knifemaking:"Knife making",
    instrumentmaking:"Instrument making",    
    jewelrymaking:"Jewelrymaking",    
    leatherworking:"Leatherworking",
    lumberjacking:"Lumberjacking",
    pickmaking:"Pick making",
    stonecrafting:"Stonecrafting",  
    spearmaking:"Spear making",
    swordmaking:"Sword making",
    tanning:"Tanning",
    tentmaking:"Tent making",
    toolmaking:"Toolmaking",   
    wagonmaking:"Wagonmaking",  
    woodworking:"Woodworking",
  },
  barter:{
    haggle:"Haggle",
    value:"Value"    
  },

  special:{
    languagebonus:"Adept at picking up new languages",
    
    custom:"Custom Crafting",

    foragefoodwild:"Forage for food in the wilderness",
    foragefoodcity:"Forage for scraps in cities",
    
    recovery:"Fair recovery from exertion",
    goodrecovery:"Good recovery from exertion",
    

    hitchdouble:"Hitch two mounts",
    alcoholtolerance:"Increased tolerance for alcohol",
    paintolerance:"Increased tolerance for pain",
    tamemount:"May eventually tame mounts",
    wildquit:"Wilderness quit",
  }
}
skillRef = {};
buildSkillRef();
//Guild templates
guildtemplate = {
  enforcer:{    
    master:["contact","barrier","bash","crossbowuse","flee","guarding","kick","parry","threaten","shielduse","dualwield","twohanded","slashingweapons","piercingweapons","choppingweapons","bludgeoningweapons"],
    advanced:["subdue","hidecity"],
    journeyman:["forage","cooking"],
    exmaster:['expel', 'blowgunuse', 'backstab', 'blindfighting', 'disarm', 'rescue', 'sap', "throw"],
    exadvanced:["sneakcity","climb","sleightofhand"],
    exjourneyman:[],
    branching:{
      expel:"barrier",
      sneakcity:"hidecity",
      sleightofhand:"climb",
      climb:"hidecity",
      disarm:"bash",
      blindfighting:"parry",
      rescue:"guarding",
      backstab:"piercingweapons",
      sap:"bludgeoningweapons",
      throw:"crossbowuse",
      blowgunuse:"crossbowuse"
    }
  },
  infiltrator:{
    yes:["foragefoodcity"],
    master:["contact", 'barrier', 'backstab', 'crossbowuse', 'throw', 'dualwield', 'twohanded'],
    advanced:["flee","parry","sap","shielduse","slashingweapons","piercingweapons","choppingweapons","bludgeoningweapons","sneakcity","hidecity","climb","poisoning","sleightofhand","huntcity","listencity","search","watch","forage","value","cooking"],
    journeyman:[],
    exmaster:["expel","blowgunuse"],
    exadvanced:["bash","blindfighting","pick","peek","scan"],
    exjourneyman:["subdue","pickmaking"],
    branching:{
      expel:"barrier",
      peek:"sneakcity",
      scan:"hidecity",
      bash:"parry",
      blindfighting:"parry",
      blowgunuse:"poisoning",
      subdue:"flee",
      pick:"sleightofhand",
      pickmaking:"pick",
    }
  },
  miscreant:{
    yes:["foragefoodcity"],
    master:["contact","barrier","sneakcity","hidecity","climb","pick","poisoning","sleightofhand","steal","huntcity","listencity","peek","scan","search","watch","forage"],
    advanced:["crossbowuse","flee","parry","throw","shielduse","dualwield","twohanded","piercingweapons","bludgeoningweapons","cooking"],
    journeyman:[],
    exmaster:["expel"],
    exadvanced:["backstab","blindfighting","blowgunuse","sap","haggle","value","brew","pickmaking"],
    exjourneyman:[],
    branching:{
      expel:"barrier",
      value:"steal",
      haggle:"value",
      pickmaking:"pick",
      blindfighting:"parry",
      backstab:"throw",
      sap:"throw",
      blowgunuse:"poisoning",
      brew:"cooking"
    }
  },
  pilferer:{
    master:["contact","barrier","value","clothworking","dyeing","knifemaking","stonecrafting","toolmaking","cooking"],
    advanced:["crossbowuse","throw","dualwield","twohanded","hidecity","climb","steal","huntcity","listencity","peek","scan","watch","forage","pickmaking"],
    journeyman:["flee","shielduse","piercingweapons","bludgeoningweapons"],
    exmaster:["expel","sleightofhand","haggle","bowmaking","brew","clayworking","clubmaking","fletchery","jewelrymaking"],
    exadvanced:["sneakcity","pick","search"],
    exjourneyman:["sap"],
    branching:{
      expel:"barrier",
      search:"peek",
      sneakcity:"hidecity",
      sap:"throw",
      haggle:"value",
      pick:"pickmaking",
      clubmaking:"knifemaking",
      brew:"cooking",
      clayworking:"stonecrafting",
      jewelrymaking:"clayworking",
      sleightofhand:"steal",
      fletchery:"toolmaking",
      bowmaking:"fletchery"
    }
  },
  fence:{
    yes:['allundean','foragefoodcity'],
    master:['contact', 'barrier',"haggle","value","clayworking","clothworking","dyeing","fletchery","knifemaking","stonecrafting","tanning","toolmaking","cooking"],
    advanced:["sneakcity","hidecity","peek"],
    journeyman:["shielduse","dualwield","twohanded","forage"],
    exmaster:["expel","armormaking","armorrepair","bandagemaking","brew","clubmaking","featherworking","jewelrymaking","leatherworking","pickmaking","spearmaking","swordmaking"],
    exadvanced:["poisoning","sleightofhand","steal","listencity"],
    exjourneyman:["piercingweapons","crossbowuse"],
    branching:{
      expel:"barrier",
      steal:"peek",
      listencity:"sneakcity",
      leatherworking:"tanning",
      armormaking:"leatherworking",
      armorrepair:"armormaking",
      featherworking:"fletchery",
      crossbowuse:"fletchery",
      piercingweapons:"knifemaking",
      swordmaking:"knifemaking",
      spearmaking:"knifemaking",
      clubmaking:"knifemaking",
      brew:"cooking",
      poisoning:"brew",
      jewelrymaking:"stonecrafting",
      bandagemaking:"clothworking",
      pickmaking:"toolmaking",
      sleightofhand:"pickmaking"
    }
  },
  raider:{
    yes:["hitchdouble"],
    master:["contact","barrier","archery","bash","flee","kick","parry","rescue","slinguse","threaten","shielduse","dualwield","twohanded","slashingweapons","piercingweapons","choppingweapons","bludgeoningweapons"],
    advanced:["subdue","climb","listenwild","ride","directionsense"],
    journeyman:["forage","cooking"],
    exmaster:["expel","blindfighting","crossbowuse","charge","disarm","guarding","throw"],
    exadvanced:["sneakwild","hidewild","scan"],
    exjourneyman:[],
    branching:{
      expel:"barrier",
      throw:"archery",
      crossbowuse:"archery",
      disarm:"kick",
      guarding:"rescue",
      blindfighting:"parry",
      sneakwild:"climb",
      hidewild:"climb",
      charge:"ride",
      scan:"directionsense"
    }
  },
  scout:{
    yes:['tamemount','wildquit','hitchdouble','foragefoodwild','recovery'],
    master:["contact","barrier","archery","slinguse","throw","dualwield","twohanded","skinning"],
    advanced:["flee","parry","shielduse","slashingweapons","piercingweapons","choppingweapons","bludgeoningweapons","climb","bandage","poisoning","ride","directionsense","huntwild","listenwild","scan","forage","fletchery","cooking"],
    journeyman:[],
    exmaster:["expel","blowgunuse","crossbowuse","guarding","rescue"],
    exadvanced:["blindfighting","charge","kick","sneakwild","hidewild","bandagemaking"],
    exjourneyman:[],
    branching:{
      expel:"barrier",
      crossbowuse:"archery",
      blowgunuse:"archery",
      kick:"parry",
      rescue:"parry",
      guarding:"parry",
      blindfighting:"parry",
      sneakwild:"climb",
      bandagemaking:"bandage",
      hidewild:"scan",
      charge:"ride"
    }
  },
  stalker:{
    yes:["foragefoodwild",'wildquit','goodrecovery','hitchdouble','tamemount'],
    master:["contact","barrier","sneakwild","hidewild","climb","bandage","poisoning","skinning","ride","directionsense","huntwild","listenwild","scan","watch","forage"],
    advanced:["archery","crossbowuse","flee","parry","throw","shielduse","dualwield","twohanded","piercingweapons","bludgeoningweapons","cooking"],
    journeyman:[],
    exmaster:['expel'],
    exadvanced:["blindfighting","blowgunuse","charge","guarding","rescue","bandagemaking","brew","fletchery","floristry","leatherworking","tanning"],
    exjourneyman:[],
    branching:{
      expel:"barrier",
      rescue:"parry",
      guarding:"parry",
      blindfighting:"parry",
      fletchery:"huntwild",
      floristry:"huntwild",
      bandagemaking:"bandage",
      charge:"ride",
      blowgunuse:"poisoning",
      tanning:"skinning",
      leatherworking:"tanning",
      brew:"cooking"
    }
  },
  adventurer:{
    yes:["wildquit",'recovery','hitchdouble','tamemount'],
    master:["contact","barrier","pilot","skinning","armorrepair","bandagemaking","fletchery","lumberjacking","spearmaking","toolmaking","cooking"],
    advanced:["archery","dualwield","twohanded","sneakwild","climb","ride","directionsense","huntwild","listenwild","scan","forage"],
    journeyman:["flee","shielduse","piercingweapons","bludgeoningweapons"],
    exmaster:["expel","brew","bowmaking","floristry","knifemaking","leatherworking","tanning","tentmaking"],
    exadvanced:["crossbowuse","rescue","hidewild","bandage","search"],
    exjourneyman:["parry"],
    branching:{
      expel:"barrier",
      crossbowuse:"archery",
      hidewild:"scan",
      search:"scan",
      parry:"flee",
      rescue:"parry",
      bowmaking:"fletchery",
      knifemaking:"fletchery",
      bandage:"bandagemaking",
      brew:"cooking",
      floristry:"brew",
      tanning:"toolmaking",
      leatherworking:"tanning",
      tentmaking:"toolmaking"
    }
  },
  dunetrader:{    
    yes:["bendune",'foragefoodwild','hitchdouble'],
    master:["contact","barrier","pilot","haggle","value","axemaking","basketweaving","bowmaking","dyeing","fletchery","lumberjacking","spearmaking","tentmaking","toolmaking","cooking"],
    advanced:["skinning","ride","directionsense","scan"],
    journeyman:["shielduse","dualwield","twohanded","forage"],
    exmaster:["expel","armormaking","armorrepair","bandagemaking","brew","clothworking","clubmaking","featherworking","floristry","instrumentmaking","jewelrymaking","knifemaking","leatherworking","stonecrafting","tanning","woodworking"],
    exadvanced:["listenwild"],
    exjourneyman:["archery","crossbowuse","piercingweapons"],
    branching:{
      expel:"barrier",
      listenwild:"scan",
      tanning:"skinning",
      featherworking:"skinning",
      leatherworking:"skinning",
      armorrepair:"leatherworking",
      armormaking:"armorrepair",
      floristry:"forage",
      stonecrafting:"forage",
      jewelrymaking:"stonecrafting",
      woodworking:"lumberjacking",
      instrumentmaking:"woodworking",
      archery:"bowmaking",
      crossbowuse:"archery",
      clubmaking:"bowmaking",
      brew:"cooking",
      bandagemaking:"tentmaking",
      clothworking:"tentmaking",
      piercingweapons:"spearmaking",
      knifemaking:"spearmaking"
    }
  },
  fighter:{
    yes:["alcoholtolerance"],
    master:["contact","barrier","bash","crossbowuse","disarm","flee","guarding","hack","kick","parry","rescue","riposte","slinguse","shielduse","dualwield","twohanded","slashingweapons","piercingweapons","choppingweapons","bludgeoningweapons"],
    advanced:["subdue","listencity"],
    journeyman:["forage","cooking"],
    exmaster:["expel","archery","blindfighting","threaten","throw"],
    exadvanced:["bandage","armorrepair"],
    exjourneyman:["watch"],
    branching:{
      expel:"barrier",
      bandage:"parry",
      blindfighting:"parry",
      watch:"listencity",
      threaten:"guarding",
      armorrepair:"shielduse",
      archery:"crossbowuse",
      throw:"slinguse"
    }
  },
  soldier:{
    yes:['alcoholtolerance','paintolerance'],
    master:["contact","barrier","crossbowuse","guarding","rescue","slinguse","dualwield","twohanded"],
    advanced:["bash","flee","kick","parry","shielduse","slashingweapons","piercingweapons","choppingweapons","bludgeoningweapons","bandage","listencity","forage","armorrepair","bandagemaking","fletchery","cooking"],
    journeyman:["subdue"],
    exmaster:['expel',"archery","hack","riposte"],
    exadvanced:["disarm","watch","axemaking","clubmaking","knifemaking","spearmaking","swordmaking"],
    exjourneyman:[],
    branching:{
      expel:"barrier",
      disarm:"parry",
      watch:"listencity",
      riposte:"slashingweapons",
      hack:"choppingweapons",
      knifemaking:"fletchery",
      swordmaking:"knifemaking",
      spearmaking:"fletchery",
      axemaking:"spearmaking",
      clubmaking:"fletchery",
      archery:"crossbowuse"
    }
  },
  laborer:{
    yes:['alcoholtolerance','paintolerance'],
    master:["contact","barrier","bandage","listencity","scan","watch","forage"],
    advanced:["crossbowuse","flee","guarding","kick","parry","rescue","slinguse","shielduse","dualwield","twohanded","slashingweapons","piercingweapons","choppingweapons","bludgeoningweapons","armorrepair","bandagemaking","fletchery","knifemaking","lumberjacking","toolmaking","cooking"],
    journeyman:[],
    exmaster:["expel"],
    exadvanced:["bash","disarm","hack","axemaking","basketweaving","clayworking","clothworking","stonecrafting","swordmaking","tanning"],
    exjourneyman:[],
    exapprentice:['subdue'],
    branching:{
      expel:"barrier",
      disarm:"parry",
      bash:"shielduse",
      stonecrafting:"forage",
      clayworking:"forage",
      subdue:"flee",
      swordmaking:"fletchery",
      basketweaving:"lumberjacking",
      clothworking:"basketweaving",
      axemaking:"lumberjacking",
      hack:"axemaking",
      tanning:"toolmaking"
    }
  },
  craftsperson:{
    master:["contact","barrier","pilot","value","armormaking","bandagemaking","clothworking","dyeing","fletchery","knifemaking","lumberjacking","stonecrafting","toolmaking","woodworking","cooking"],
    advanced:["crossbowuse","slinguse","dualwield","twohanded","listencity","watch","forage"],
    journeyman:["flee","kick","shielduse","slashingweapons","piercingweapons","choppingweapons","bludgeoningweapons"],
    exmaster:["expel","haggle","armorrepair","axemaking","basketweaving","clayworking","clubmaking","jewelrymaking","leatherworking","spearmaking","swordmaking","tanning","tentmaking"],
    exadvanced:["bandage"],
    exjourneyman:[],
    branching:{
      expel:"barrier",
      haggle:"value",
      basketweaving:"forage",
      clayworking:"forage",
      axemaking:"lumberjacking",
      bandage:"bandagemaking",
      clubmaking:"woodworking",
      armorrepair:"armormaking",
      swordmaking:"knifemaking",
      spearmaking:"knifemaking",
      jewelrymaking:"stonecrafting",
      tentmaking:"clothworking",
      tanning:"toolmaking",
      leatherworking:"tanning"
    }
  },
  artisan:{
    yes:['cavilish'],
    master:["contact","barrier","pilot","haggle","value","armormaking","bandagemaking","bowmaking","clayworking","clothworking","clubmaking","dyeing","fletchery","knifemaking","lumberjacking","stonecrafting","toolmaking","cooking"],
    advanced:[],
    journeyman:["shielduse","dualwield","twohanded","bludgeoningweapons","forage"],
    exmaster:["expel","armorrepair","axemaking","basketweaving","featherworking","floristry","instrumentmaking","jewelrymaking","leatherworking","spearmaking","swordmaking","tanning","tentmaking","wagonmaking","woodworking"],
    exadvanced:["bandage"],
    exjourneyman:["crossbowuse","piercingweapons"],
    branching:{
      expel:"barrier",
      featherworking:"fletchery",
      floristry:"dyeing",
      woodworking:"lumberjacking",
      wagonmaking:"woodworking",
      axemaking:"lumberjacking",
      crossbowuse:"bowmaking",
      bandage:"bandagemaking",
      armorrepair:"armormaking",
      piercingweapons:"knifemaking",
      swordmaking:"knifemaking",
      spearmaking:"knifemaking",
      jewelrymaking:"stonecrafting",
      basketweaving:"clothworking",
      tentmaking:"clothworking",
      tanning:"toolmaking",
      leatherworking:"toolmaking",
      instrumentmaking:"toolmaking"
    }
  },
}

//Guilds
guilds = {

}

//Unpack templates
for (i in guildtemplate)
{
  guildUnpack(i,guildtemplate[i]);
}

//Subguilds
subguilds = {
	archer:new skillSet({
		archery:[skjourneyman],
		dyeing:[skjourneyman],
		directionsense:[skjourneyman],
		fletchery:[skadvanced],
		featherworking:[skadvanced],
		bowmaking:[skadvanced]
	}),
  armormaker:new skillSet({
    armorrepair:[skadvanced],
    leatherworking:[skadvanced],
    armormaking:[skadvanced],
    toolmaking:[skjourneyman]
  }),
  bard:new skillSet({
    languagebonus:[yes],
    listencity:[skjourneyman],
    sleightofhand:[skadvanced],
    haggle:[skjourneyman],
    watch:[skjourneyman],
  }),
  bountyhunter:new skillSet({
    ride:[skadvanced],
    directionsense:[skadvanced],
    subdue:[skjourneyman],
    sap:[skjourneyman],
    huntcity:[skjourneyman],
    huntwild:[skjourneyman]
  }),
  caravanguide:new skillSet({
    bendune:[yes],
    ride:[skadvanced],
    pilot:[skadvanced],
    value:[skjourneyman],
    directionsense:[skjourneyman]
  }),
  conartist:new skillSet({
    hidecity:[skadvanced],
    watch:[skadvanced],
    sleightofhand:[skadvanced],
    value:[skjourneyman],
    haggle:[skjourneyman]
  }),
  crafter:new skillSet({
    basketweaving:[skadvanced],
    clayworking:[skadvanced],
    stonecrafting:[skadvanced],
    forage:[skadvanced]
  }),
  customcrafter:new skillSet({
    custom:[skmaster]
  }),
  forester:new skillSet({
    woodworking:[skadvanced],
    lumberjacking:[skadvanced],
    axemaking:[skadvanced],
    huntwild:[skjourneyman],
    skinning:[skjourneyman],
    directionsense:[skjourneyman]
  }),
  gladiator:new skillSet({
    kick:[skjourneyman],
    bash:[skjourneyman],
    disarm:[skjourneyman],
    slashingweapons:[skapprentice]
  }),
  guard:new skillSet({
    rescue:[skjourneyman],
    subdue:[skjourneyman],
    guarding:[skjourneyman],
    shielduse:[skjourneyman],
    watch:[skadvanced]
  }),
  houseservant:new skillSet({
    pilot:[skadvanced],
    floristry:[skadvanced],
    cooking:[skadvanced],
    hidecity:[skadvanced],
    listencity:[skjourneyman]
  }),
  hunter:new skillSet({
    ride:[skadvanced],
    archery:[skjourneyman],
    huntwild:[skjourneyman],
    skinning:[skjourneyman],
    directionsense:[skjourneyman],
  }),
  jeweler:new skillSet({
    featherworking:[skadvanced],
    jewelrymaking:[skadvanced],
    value:[skjourneyman],
    toolmaking:[skjourneyman],
    haggle:[skjourneyman],
  }),
  linguist:new skillSet({
    languagebonus:[yes],
    allundean:[yes],
    mirukkim:[yes]
  }),
  mercenary:new skillSet({
    ride:[skadvanced],
    knifemaking:[skadvanced],
    armorrepair:[skadvanced],
    watch:[skadvanced],
    directionsense:[skjourneyman]
  }),
  nomad:new skillSet({
    bendune:[yes],
    ride:[skadvanced],
    spearmaking:[skadvanced],
    directionsense:[skadvanced],
    haggle:[skjourneyman]
  }),
  outlaw:new skillSet({
    knifemaking:[skadvanced],
    armorrepair:[skadvanced],
    directionsense:[skadvanced],
    sneakwild:[skjourneyman],
    climb:[skjourneyman]
  }),
  physician:new skillSet({
    bandage:[skadvanced],
    brew:[skadvanced],
    bandagemaking:[skadvanced],
    floristry:[skadvanced],
    forage:[skadvanced]
  }),
  tailor:new skillSet({
    haggle:[skadvanced],
    dyeing:[skadvanced],
    clothworking:[skadvanced],
    toolmaking:[skjourneyman]
  }),
  thief:new skillSet({
    sleightofhand:[skadvanced],
    sneakcity:[skjourneyman],
    steal:[skjourneyman],
    peek:[skjourneyman],
    hidecity:[skjourneyman]
  }),
  thug:new skillSet({
    kick:[skjourneyman],
    subdue:[skjourneyman],
    sap:[skjourneyman],
    watch:[skjourneyman],
    bash:[skjourneyman]
  }),
  weaponscrafter:new skillSet({
    knifemaking:[skadvanced],
    swordmaking:[skadvanced],
    spearmaking:[skadvanced],
    toolmaking:[skjourneyman],
  }),
  //Extended subguilds
  aggressor:new skillSet({
    karma:[2],
    slashingweapons:[skadvanced],
    kick:[skjourneyman],
    bash:[skjourneyman],
    subdue:[skadvanced,"bash"],
    blindfighting:[skadvanced,"kick"],
    disarm:[skjourneyman,"kick"]
  }),
  apothecary:new skillSet({
    karma:[1],
    bandage:[skadvanced],
    brew:[skmaster,"bandage"],
    forage:[skadvanced],
    bandagemaking:[skmaster],
    floristry:[skmaster],
    custom:[yes]
  }),
  berserker:new skillSet({
    karma:[2],
    choppingweapons:[skadvanced],
    kick:[skjourneyman],
    bash:[skjourneyman],
    subdue:[skadvanced,"bash"],
    blindfighting:[skadvanced,"kick"],
    disarm:[skjourneyman,"kick"]
  }),
  bruiser:new skillSet({
    karma:[2],
    bludgeoningweapons:[skadvanced],
    kick:[skjourneyman],
    bash:[skjourneyman],
    subdue:[skadvanced,"bash"],
    blindfighting:[skadvanced,"kick"],
    disarm:[skjourneyman,"kick"]
  }),
  cutpurse:new skillSet({
    karma:[1],
    peek:[skadvanced],
    scan:[skadvanced,'peek'],
    steal:[skadvanced],
    sneakcity:[skadvanced],
    sap:[skjourneyman,'steal'],
    sleightofhand:[skjourneyman,'steal'],
  }),
  grebber:new skillSet({
    karma:[1],
    huntwild:[skadvanced],
    huntcity:[skadvanced],
    forage:[skadvanced],
    ride:[skadvanced],
    directionsense:[skadvanced],
    search:[skadvanced,'forage'],
    climb:[skadvanced,'huntcity']
  }),
  bruiser:new skillSet({
    karma:[2],
    piercingweapons:[skadvanced],
    kick:[skjourneyman],
    bash:[skjourneyman],
    subdue:[skadvanced,"bash"],
    blindfighting:[skadvanced,"kick"],
    disarm:[skjourneyman,"kick"]
  }),
  majordomo:new skillSet({
    karma:[1],
    listencity:[skmaster],
    pilot:[skmaster],
    guarding:[skadvanced],
    cooking:[skadvanced],
    sleightofhand:[skadvanced],
    watch:[skadvanced]
  }),
  masterarmorsmith:new skillSet({
    karma:[1],
    tanning:[skmaster],
    armorrepair:[skmaster],
    haggle:[skadvanced],
    leatherworking:[skmaster],
    armormaking:[skmaster],
    custom:[yes]
  }),
  masterchef:new skillSet({
    karma:[1],
    cooking:[skmaster],
    skinning:[skmaster],
    haggle:[skadvanced],
    custom:[yes]
  }),
  mastercrafter:new skillSet({
    karma:[1],
    basketweaving:[skmaster],
    stonecrafting:[skmaster],
    haggle:[skadvanced],
    tanning:[skadvanced],
    dyeing:[skadvanced],
    custom:[yes]
  }),
  masterjeweler:new skillSet({
    karma:[1],
    jewelrymaking:[skmaster],
    stonecrafting:[skadvanced],
    haggle:[skadvanced],
    featherworking:[skadvanced],
    value:[skjourneyman],
    custom:[yes]
  }),
  masterpotter:new skillSet({
    karma:[1],
    haggle:[skadvanced],
    dyeing:[skmaster],
    clayworking:[skmaster],
    value:[skjourneyman],
    custom:[yes]
  }),
  mastertailor:new skillSet({
    karma:[1],
    haggle:[skadvanced],
    tanning:[skadvanced],
    dyeing:[skadvanced],
    clothworking:[skmaster],
    custom:[yes]
  }),
  mastertrader:new skillSet({
    karma:[1],
    cavilish:[yes],
    listencity:[skmaster],
    value:[skmaster],
    pilot:[skmaster],
    haggle:[skadvanced],
    ride:[skadvanced],
    directionsense:[skadvanced]
  }),
  minstrel:new skillSet({
    karma:[1],
    instrumentmaking:[skmaster],
    listencity:[skadvanced],
    haggle:[skjourneyman],
    watch:[skjourneyman],
    sleightofhand:[skadvanced]
  }),
  outdoorsman:new skillSet({
    karma:[2],
    archery:[skadvanced],
    sneakwild:[skadvanced],
    hidewild:[skadvanced],
    directionsense:[skadvanced],
    skinning:[skmaster],
    scan:[skadvanced,'hidewild'],
    huntwild:[skjourneyman,'skinning']
  }),
  protector:new skillSet({
    karma:[2],
    parry:[skmaster],
    guarding:[skmaster],
    shielduse:[skmaster],
    rescue:[skjourneyman,'parry'],
    bandage:[skjourneyman,'shielduse']
  }),
  rogue:new skillSet({
    karma:[1],
    watch:[skadvanced],
    sneakcity:[skadvanced],
    pick:[skjourneyman],
    scan:[skadvanced,'watch'],
    hidecity:[skadvanced,'sneakcity']
  }),
  roughrider:new skillSet({
    karma:[2],
    ride:[skadvanced],
    charge:[skadvanced],
    hitchdouble:[yes],
    tamemount:[yes]
  }),
  reaver:new skillSet({
    karma:[2],
    choppingweapons:[skadvanced],
    hack:[skadvanced],
    disarm:[skadvanced],
    shielduse:[skadvanced],
    armorrepair:[skadvanced]
  }),
  wastelander:new skillSet({
    karma:[1],
    directionsense:[skadvanced],
    bendune:[yes],
    foragefoodwild:[yes],
    wildquit:[yes],
  }),
  swordsman:new skillSet({
    karma:[2],
    slashingweapons:[skadvanced],
    parry:[skadvanced],
    watch:[skadvanced],
    riposte:[skadvanced,'parry'],
  }),
  masterwoodworker:new skillSet({
    karma:[1],
    axemaking:[skmaster],
    clubmaking:[skmaster],
    woodworking:[skmaster],
    haggle:[skadvanced],
    lumberjacking:[skadvanced],
    custom:[yes]
  }),
  marksman:new skillSet({ //eThey can achieve mastery in fletchery, and by practicing this can learn to craft their own weapons with bow making, achieving mastery in this area as well. They are able to custom craft both their weapons and ammunition, creating pieces tuned to the needs of the owner.
    karma:[1],
    archery:[skadvanced],
    blowgunuse:[skadvanced],
    crossbowuse:[skadvanced],
    slinguse:[skadvanced],
    fletchery:[skmaster],
    bowmaking:[skmaster,'fletchery'],
    custom:[yes]
  }),
  slipknife:new skillSet({
    karma:[1],
    hidecity:[skadvanced],
    sneakcity:[skadvanced],
    backstab:[skadvanced],
    poisoning:[skadvanced],
    throw:[skjourneyman,'hidecity'],
    sap:[skjourneyman,'backstab']
  }),
  masterweaponsmith:new skillSet({
    karma:[1],
    haggle:[skadvanced],
    fletchery:[skmaster],
    swordmaking:[skmaster],
    knifemaking:[skmaster],
    spearmaking:[skmaster],
    custom:[yes]
  })
}
function skillSet(skilllist)
{
    skillset = {}
    for (var i in skilllist)
    {
      skillset[i] = {
        name:getName(i),
        category:getCategory(i),
        max: skilllist[i][0],
        branched:skilllist[i][1]
      };
    }
    return skillset;
}
function buildSkillRef()
{
  skillRef = {};
  for (let i in skills)
  {
    for (let j in skills[i])
    {
      skillRef[j] = skills[i][j];
    }
  }
}
function guildUnpack(name,template)
{
  newguild = {};
  for (i in template)
  {
    for (j in template[i])
    {
      switch (i)
      {
        case 'yes': newguild[ template[i][j] ] = [yes]; break;
        case 'master': newguild[ template[i][j] ] = [skmaster]; break;
        case 'advanced': newguild[ template[i][j] ] = [skadvanced]; break;
        case 'journeyman': newguild[ template[i][j] ] = [skjourneyman]; break;
        case 'exmaster': newguild[ template[i][j] ] = [skmaster,' ']; break;
        case 'exadvanced': newguild[ template[i][j] ] = [skadvanced,' ']; break;
        case 'exjourneyman': newguild[ template[i][j] ] = [skjourneyman,' ']; break;
        case 'exapprentice': newguild[ template[i][j] ] = [skapprentice,' ']; break;
      }
    }
  }  
  //Sort out branching.
  for (let x in template.branching)
  {
    let branchingSkill = x;
    let branchFrom = template.branching[x];
    if (newguild[branchingSkill])
    {
      if (newguild[branchingSkill][1] ==' ')
      {
        if (skillRef[branchFrom])
        {
          newguild[branchingSkill][1] = skillRef[branchFrom];
        }
        else
        {
          console.log("ERROR: Could not find skill reference for: "+branchFrom);
        }
      }
      else
      {
        console.log("ERROR: Skill '"+branchingSkill+"' is not a branching skill.");
      }
    }
    else
    {
        console.log("ERROR: "+branchingSkill+" does not exist.");
    }
    
  }
  guilds[name] = new skillSet(newguild);
}
function populateCharPage()
{
  $("#showchar").append('<div id="skills"></div>')
  for (let i in skills)
  {    
    var title = pretty(i);
    var section = $("<section class="+i+"></section>")
    if (title != 'Misc')
    {
      section.append('<h1>'+title+"</h1>");
      section.append('<div class="skilllist">Nothing!</div>')
    }
    $("#skills").append(section)  
  }  
}
function showChar(name)
{
  populateCharPage();

  $("#showchar").removeClass("hide");
  $(".container").addClass("hide");
  $("#charName").html(name);

  var spl = name.toLowerCase().split("/");

  guild = spl[0];
  subguild = spl[1];
  guild = guilds[guild];
  subguild = subguilds[subguild];  
  for (var i in guild)    
  {
    if (guild[i].branched)
    {

    }
    else {
      addSkill(guild[i],'class')
    }
  }
  for (var i in guild)
  {
    if (guild[i].branched)
    {
      addSkill(guild[i],'class')
    }
  }
  for (var i in subguild)
  {
    if (subguild[i].branched)
    {

    }
    else {
      addSkill(subguild[i],'subclass')
    }
  }
  for (var i in subguild)
  {
    if (subguild[i].branched)
    {
      addSkill(subguild[i],'subclass')
    }
  }
}
function addSkill(skill, source) //Skill {category, name, max,[branched]}
{ 
  //Is this karma?
  if (skill.name == "Karma")
  {
    $('#charName').append("<span>Karma: "+skill.max+"</span>")
    return;
  }
  //Check if this skill is in already.
  var check = $('.skillcontainer[name="'+skill.name.toLowerCase().replace(' ','')+'"]');
  if (check.length > 0)
  {
    let skillname = skill.name.toLowerCase().replace(' ','');
    console.log(skill,source);
    //Skill is in already.
    //Check if we need to update the source.
    if ( $('.skillcontainer[name="'+skillname+'"] .sourcetext').html() != source ){
      //We do. Set this to branched by both.
      $('.skillcontainer[name="'+skillname+'"] .sourcetext').html('(both)');
    }
    //Is it branched?
    if (skill.branched)
    {

        //This version is branched, is the original branched?
        if ($('.skillcontainer[name="'+skillname+'"]').hasClass('branched'))
        {
          //Two things branch this skill, we'll adjust the max, then add it to the label saying what branches it.
          //Display the level overlaid over the bar
          let level = levelText[skill.max];
          level = level.toUpperCase();
          $('.skillcontainer[name="'+skillname+'"].branched .levelname').html(level);
          $('.skillcontainer[name="'+skillname+'"].branched .branchtext').append(' / '+pretty(skill.branched));

        }        
    }
    else {      
        //This version isn't branched, if the original is branched, it now isn't.
        $('.skillcontainer[name="'+skillname+'"].branched').removeClass('branched');
    }
  }
  else {
    var container = $("<div class='skillcontainer'>");
    var skilltext = $("<div class='skilltext'>");
    var bar = $("<div class='skillbar'>");
    var barcontents = $("<div class='barcontents'>");

    container.attr('name',skill.name.toLowerCase().replace(' ',''));

    for (var i=1;i<=4;i++)
    {
      var marker = $('<div class="marker">')
      bar.append(marker);
      marker.css('left',(i*20)+'%');
    }

    skilltext.append(skill.name)
    bar.append(barcontents)

    //Check if this is an 'all or nothing' skill.
    if (skill.max == yes)
    {
      barcontents.css('width','100%');
      bar.find('.marker').remove();
    }
    else
    {
      barcontents.css('width',skill.max+'%')
    }
   
    bar.attr('value',skill.max)
    bar.attr('start',skill.start)

    //Display the level overlaid over the bar
    let level = levelText[skill.max];
    level = level.toUpperCase();
    bar.append('<span class="levelname">'+level+'</span>')

    container.append(skilltext);
    container.append(bar);

    //Where does this come from?
    skilltext.append('<p class="sourcetext">('+source+')</p>')

    //Check if this is the first skill of this type
    if ($('#skills .'+skill.category+' .skilllist .skillcontainer').length == 0)
    {
      $('#skills .'+skill.category+' .skilllist').html('');
    }
    //First check for branching
    if (skill.branched)
    {
      container.addClass('branched');
      skilltext.append('<p class="branchtext">'+pretty(skill.branched) +'</p>')      

      $('#skills .'+skill.category+' .skilllist').append(container);
    }
    else {      
      $('#skills .'+skill.category+' .skilllist').append(container);
    }
  }
}
function getName(skillname)
{
  var name = undefined;
  for (var i in skills)
  {
    if (skills[i][skillname])
    {
      name = skills[i][skillname];
    }
  }
  if (name)
  {
      return name;
  }
  else {
    console.log("WARNING! Name '"+skillname+"' was not found.")
  }
}
function getCategory(skillname)
{
  var category;
  for (j in skills)
  {
    if (skills[j][skillname])
    {
      category = j;
    }
  }
  if (category === undefined)
  {
    console.log("WARNING: No category for '"+skillname+"'")
  }
  return category;
}

let keywords = {};
$(document).ready(function(){
  var url = window.location.href;
  var param = url.split('?')[1];
  if (param === undefined || param.indexOf('/') == -1)
  {
    //Open normal page
    populateSkills();
    $('.skillToggle').click(skillToggleClick);
  }
  else {
    showChar(param);
    $('.keywords, .suggestions, .classSelect').addClass('hide')
  }
})
function populateSkills()
{
  var sections = $('.chooseskills section');
  for (let i in skills)
  {
    var title = pretty(i);
    if (title != 'Misc') $('.chooseskills').append('<h1>'+title+"</h1>");
    for (let j in skills[i])
    {
      if (j != 'karma')
      {
        $('.chooseskills').append('<div class="skillToggle" name="'+j+'">'+skills[i][j]+'</div>')        
      }
    }
  }
}
function skillToggleClick(e)
{
  var button = $(e.target);
  button.toggleClass('on');
  if (button.hasClass('on'))
  {
    keywords[button.attr('name')] = true;
  }
  else
  {
    delete keywords[button.attr('name')];
  }
  $('.sidebar').animate({scrollTop:0},0);
  listSuggestions(Object.keys(keywords));
}
function suggest(str)
{
  let arr = str.split(' ');
  let last = arr[arr.length-1];
  if (last.length < 2)
  {
    $('.keywordSuggest').html('');
  }
  else
  {
    let suggestions = [];
    for (let i in skills)
    {
      for (let j in skills[i])
      { 
        last = last.toLowerCase();
        let check = j.toLowerCase();
        if (check.startsWith(last) && check != last)
        {          
          suggestions.push(check);
        }
      }
    }
    suggestions = "<span class='keyword'>"+suggestions.join("</span><span class='keyword'>")+'</span>';    
    $('.keywordSuggest').html(suggestions);
    $('.keyword').click(keywordClicked);
  }
}
function suggestCheck(e)
{
  suggest(e.target.value);
}
function listSuggestions(keywords)
{  
  var toAdd = [];
  if (keywords.length == 0)
  {
    $('.suggestions').html('Choose some skills on the left!');
    return;
  }
  $('.suggestions').html('')  
  for (var i in guilds)
  {
    for (var j in subguilds)
    {
      var check = keywords.slice();
      for (k=check.length-1;k>=0;k--)
      {
        if (guilds[i][keywords[k]])
        {
          check.splice(k,1)
        }
        else if (subguilds[j][keywords[k]])
        {
          check.splice(k,1)
        }
      }
      if (check.length == 0)
      {
        var link = $('<a target="_blank">');
        link.attr('href',"index.html?"+pretty(i)+'/'+pretty(j));
        link.html(pretty(i)+'/'+pretty(j));
        //Check for karma
        if (subguilds[j] && subguilds[j].karma)
        {
          link.append('<span>'+subguilds[j].karma.max+'K</span>')
          toAdd.push([link,subguilds[j].karma.max])
        }
        else {
          toAdd.push([link,0]);
        }        
      }
    }
  }
  toAdd = toAdd.sort(function(one,two){
    return (one[1] - two[1]);
  });
  console.log(toAdd);
  for (var i in toAdd)
  {
    $('.suggestions').append(toAdd[i][0]);
  }
  if ($('.suggestions a').length == 0 )
  {
    $('.suggestions').html("Sorry! There is no class that gets all those skills.")
  }
}
function pretty(str)
{
  return str[0].toUpperCase()+str.substring(1,str.length);
}
function reset()
{
  $('.on').removeClass("on");
  keywords= {};
  listSuggestions(Object.keys(keywords))
  $('.suggestions').html('Choose some skills on the left!');
}