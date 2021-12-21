const DATA = [{
  id: 'alpha',
  faction: "Ascendant",
  rank: "S",
  wep: "Katana",
  sig: "sakura",
  name: 'Lucia',
  gift: "Frog Accessory",
  Model: 'Crimson Abyss',
  type: "Attacker",
  gender: "Female",
  img: 'https://gdurl.com/ELT9',
  desc: 'A mysterious enemy encountered by Gray Raven in City 015. Powerful yet mercurial.',
  chibiImg: {
    awaken: "https://drive.google.com/uc?export=download&id=1W-vGMLEQcm-UuLetNRj3PA9kSQbUeT61",
    dorm: "https://drive.google.com/uc?export=download&id=1ThH7AL5hUBHZAkBlfAycJQl35R_zTh-g"
  },
  Speciality: ["Duel - Has strong single attack ability.", "Form Switch - Skills can switch attacking modes."],
  element: [{
    eleType: "Physical(100%)",
    icon: "https://gdurl.com/a3f6"
  }],
  info: {
    serviceTime: "6 Years",
    psychologicalAge: "17",
    activationDate: "15 June",
    height: "165cm",
    weight: "48kg",
    vitalFluidType: "A"
  },
  stats: {
    stats: {
      HP: "1820",
      DEF: "273",
      ATK: "421",
      CRIT: "201"
    },
    chart: "https://gdurl.com/HViB"
  },
  skillOrb: [{
    id: 1,
    cate: "Red Orb",
    name: "Flickering Strike",
    skillDesc: "Leaps forward and attacks targets ahead, dealing 25% / 50% / 75% Physical DMG per hit based on the number of orbs pinged. The last hit deals 75% Physical DMG and knocks back the target if this is a 3-Ping. Gains Super Armor when using this skill.",
    img: "https://gdurl.com/h6s1"
  }, {
    id: 2,
    cate: "Yellow Orb",
    name: "Dazzling Strike",
    skillDesc: "Charges forward and drives through enemies, dealing 250%/500%/750% Physical DMG to enemies in the path based on the number of orbs pinged.",
    img: "https://gdurl.com/C9le"
  }, {
    id: 3,
    cate: "Blue Orb",
    name: "Lightbreak Strike",
    skillDesc: "Boosts energy supply for 5 seconds and increases Movement Speed by 20% / 30% / 50% based on the number of orbs pinged. Deals 4% / 8% / 12% Physical DMG twice when attacking. When unleashing Sword Waves, Extra DMG will be enhanced into extra Sword Waves that deal 8%/16%/24% Physical DMG per hit.",
    img: "https://gdurl.com/C9le"
  }],
  skillPassive: [{
    id: 1,
    cate: "Basic Attack",
    name: "Iaido Will",
    skillDesc: "Basic Attack: Attacks the target in 5 sword styles. Each attack deals 80% / 100% / 120% / 270% / 280% Physical DMG. Can immediately perform the 3rd move of Basic Attack after dodging.",
    img: "https://drive.google.com/uc?export=download&id=1_LW1O68dpRksCOPBiMyahM8IJ5EaYWlS"
  }, {
    id: 2,
    cate: "Signature",
    name: "Abyssal Slash",
    skillDesc: "Signature Move: Costs 85 Energy. Slashes target ahead, dealing 2600% Physical DMG in total.",
    img: "https://drive.google.com/uc?export=download&id=1elnhaSgdUSxGiMS0WSRnJqUFEjljRaqE"
  }, {
    id: 3,
    cate: "QTE",
    name: "Falling Petals",
    skillDesc: "Lucia uses Rising Slashes that deal 600% Physical DMG in total and sends the target airborne.",
    img: "https://drive.google.com/uc?export=download&id=1IIhLn0u9Ce7P5pKt6VHa0NXV4_JTaxHJ"
  }, {
    id: 4,
    cate: "Class",
    name: "Attacker",
    skillDesc: "Extra DMG Bonus increases by 20%.",
    img: "https://gdurl.com/C9le"
  }, {
    id: 5,
    cate: "Awakening",
    name: "Ultima Awaken",
    skillDesc: "Gains 3 Signal Orbs when entering battle.",
    img: "https://gdurl.com/C9le"
  }],
  Rank: [{
    id: 1,
    cate: "Core",
    name: "Blade Will",
    skillDesc: "Core Passive: Any 3-Ping after a Blue 3-Ping causes you to fall back and enter Blade Will mode. Signal Orbs will be converted into Blade Will Orbs and you will gain 2 extra Blade Will Orbs. In Blade Will mode, Signal Orbs gained by Basic Attacks will be converted into Blade Will Orbs. When pinging a Blade Will Orb, unleashes Sword Waves that deal 340% Physical DMG and gains Super Armor while unleashing.",
    img: "https://drive.google.com/uc?export=download&id=1SWbPl0cEecTS2KHXC4NItC4EI7PcLLIF"
  }, {
    id: 2,
    cate: "Leader",
    name: "Abyssal Resonance",
    skillDesc: "ATK and CRIT of all Attacker Constructs increases by 10% and 5%.",
    img: "https://drive.google.com/uc?export=download&id=1til72LPli94GKbbcKImsYM5TyH8h1wAY"
  }, {
    id: 3,
    cate: "SS Rank",
    name: "Crimson Scabbard",
    skillDesc: "Passive: When performing a Red 3-Ping, Physical DMG increases by 10% for 4 seconds.",
    img: "https://drive.google.com/uc?export=download&id=1GMo4g3r4O6pKDCvo2FiYwayXaq4vYUn3"
  }, {
    id: 4,
    cate: "SSS Rank",
    name: "Crimson Will",
    skillDesc: "Passive: Extra DMG increases by 5%. Gains 2 Signal Orbs when the Blade Will mode ends.",
    img: "https://drive.google.com/uc?export=download&id=1YLbTJxCTvfkyMFGTteeltLP4tg0Y1yPI"
  }, {
    id: 5,
    cate: "SSS+ Rank",
    name: "Abyssal Echo",
    skillDesc: "Passive: Under the effects of pinging a Blue Orb, Physical DMG increases by 20%.",
    img: "https://drive.google.com/uc?export=download&id=15aBRLcGcK5uT2CKtOW86R40jrjBmtEBE"
  }]
}, {
  id: 'nanami-pulse',
  faction: "Unidentified",
  rank: "S",
  wep: "Saw",
  sig: "hydro-heat",
  name: 'Nanami',
  gift: "Jack-in-the-box",
  Model: 'Pulse',
  type: "Tank",
  gender: "Female",
  img: 'https://gdurl.com/Tv9k',
  desc: "Nanami’s enhanced model, equipped with IR-005 propulsion wheels, allowing her to speed across the battlefield at ease. “Hehe, you can only see Nanami’s afterimages now.”",
  chibiImg: {
    awaken: "https://drive.google.com/uc?export=download&id=1ZRS_k_tXtwY0Xy99x58evDdiVgmZIF0M",
    dorm: "https://drive.google.com/uc?export=download&id=1xmURyApr_Yv5olxzU8mm6J0ZxnAt9kRU"
  },
  Speciality: ["Mixed Damage - Able to deal Physical and Elemental DMG.", "Resistance Reduction - Able to reduce Elemental Resistance of enemies."],
  element: [{
    eleType: "Fire(50%)",
    icon: "https://gdurl.com/gAnz"
  }, {
    eleType: "Physical(50%)",
    icon: "https://gdurl.com/a3f6"
  }],
  info: {
    serviceTime: "Unknown Years",
    psychologicalAge: "Unknown",
    activationDate: "Unknown",
    height: "145cm",
    weight: "45kg",
    vitalFluidType: "Unknown"
  },
  stats: {
    stats: {
      HP: "2203",
      DEF: "301",
      ATK: "364",
      CRIT: "172"
    },
    chart: "https://gdurl.com/HViB"
  },
  skillOrb: [{
    id: 1,
    cate: "Red Orb",
    name: "Rhythm Charge",
    skillDesc: "Dashes forward and stabs the enemy with a chainsaw, dealing 20% / 40% / 60% Physical DMG per hit based on the number of orbs pinged. Can deal up to 12 hits. Converts Physical DMG into Fire DMG if this is a 3-Ping.",
    img: "https://gdurl.com/h6s1"
  }, {
    id: 2,
    cate: "Yellow Orb",
    name: "Dancing Ring",
    skillDesc: "Deals damage twice by flipping forward and slashes with a chainsaw. Deals 100% / 200% Physical DMG per hit if this is not a 3-Ping. Deals 200% Fire DMG per hit and create a rotating fire ring that deals 30% Fire DMG up to 12 times.",
    img: "https://gdurl.com/C9le"
  }, {
    id: 3,
    cate: "Blue Orb",
    name: "Shattering Shock",
    skillDesc: "Unleashes energy that interrupts enemy attacks and does a heavy strike that deals damage 3 times to nearby enemies. Deals 50% / 100% / 200% Physical DMG per hit based on the number of orbs pinged. Gains a shield equal to 5% / 7.5% / 10% of your maximum HP for 5 seconds and gains Super Armor when the shield is present. Physical DMG is converted to Fire DMG if ths is a 3-Ping.",
    img: "https://drive.google.com/uc?export=download&id=1AS7npReOOKGK7e-MJmANgpjnyoG9Js2D"
  }],
  skillPassive: [{
    id: 1,
    cate: "Basic Attack",
    name: "Sawblade Storm",
    skillDesc: "Basic Attack: Launches consecutive attacks with a sawblade, dealing 620% Physical DMG in total.",
    img: "https://drive.google.com/uc?export=download&id=1_LW1O68dpRksCOPBiMyahM8IJ5EaYWlS"
  }, {
    id: 2,
    cate: "Signature",
    name: "Signature - Pulse",
    skillDesc: "Deals damage twice by flipping forward and slashes with a chainsaw. Deals 100% / 200% Physical DMG per hit if this is not a 3-Ping. Deals 200% Fire DMG per hit and create a rotating fire ring that deals 30% Fire DMG up to 12 times.",
    img: "https://drive.google.com/uc?export=download&id=1elnhaSgdUSxGiMS0WSRnJqUFEjljRaqE"
  }, {
    id: 3,
    cate: "QTE",
    name: "Molten Roundslash",
    skillDesc: "QTE: Deploys a circle of fire on the ground, dealing 480% Fire DMG to nearby targets and reducing their Fire Resistance by 10% for 6 seconds.",
    img: "https://drive.google.com/uc?export=download&id=1IIhLn0u9Ce7P5pKt6VHa0NXV4_JTaxHJ"
  }, {
    id: 4,
    cate: "Class",
    name: "Tank",
    skillDesc: "Attacks lower the target's Extra DMG Reduction by 20% for 5 seconds.",
    img: "https://gdurl.com/C9le"
  }, {
    id: 5,
    cate: "Awakening",
    name: "Ultima Awaken",
    skillDesc: "Gains 3 Signal Orbs when entering battle.",
    img: "https://gdurl.com/C9le"
  }],
  Rank: [{
    id: 1,
    cate: "Core",
    name: "Overclocking Resonance",
    skillDesc: "Core Passive: Nanami enters Overclocking mode after using a Signature Move. Basic Attacks will deal Fire DMG and reduce Fire Resistance of the target by 15% for 8 seconds.",
    img: "https://drive.google.com/uc?export=download&id=1SWbPl0cEecTS2KHXC4NItC4EI7PcLLIF"
  }, {
    id: 2,
    cate: "Leader",
    name: "Protective Pulse",
    skillDesc: "DEF and Fire Resistance of all party members increases by 15% and 10%.",
    img: "https://drive.google.com/uc?export=download&id=1til72LPli94GKbbcKImsYM5TyH8h1wAY"
  }, {
    id: 3,
    cate: "SS Rank",
    name: "Overload Outburst",
    skillDesc: "Passive: Has a 30% chance to cause an explosion that deals 25% Fire DMG when doing Fire DMG attacks.",
    img: "https://drive.google.com/uc?export=download&id=1GMo4g3r4O6pKDCvo2FiYwayXaq4vYUn3"
  }, {
    id: 4,
    cate: "SSS Rank",
    name: "Thermal Growth",
    skillDesc: "Passive: Gains Super Armor after using a Signature Move, Extra DMG Resistance and Fire DMG increase by 10% and 15% for 8 seconds.",
    img: "https://drive.google.com/uc?export=download&id=1YLbTJxCTvfkyMFGTteeltLP4tg0Y1yPI"
  }, {
    id: 5,
    cate: "SSS+ Rank",
    name: "Pulse Synchronization",
    skillDesc: "Passive: After using a Signature Move, Extra DMG Bonus increases by 15% for 8 seconds.",
    img: "https://drive.google.com/uc?export=download&id=15aBRLcGcK5uT2CKtOW86R40jrjBmtEBE"
  }]
}, {
  id: 'watanabe-astral',
  rank: "A",
  wep: "Daggers",
  sig: "peacemaker",
  faction: "The Forsaken",
  name: 'Watanabe',
  gift: "MRE Rations",
  Model: 'Astral',
  type: "Attacker",
  gender: "Male",
  img: 'https://drive.google.com/uc?export=download&id=1YnClY6-5DobteBVerynqBaMADmLhWKi4',
  desc: "A frame specially designed to control spacecraft. It was used by Watanabe when he served in the Task Force.",
  chibiImg: {
    awaken: "https://drive.google.com/uc?export=download&id=1eSEOYFQeZHQKi58Fp4P9IaH3U2Vzs0aT",
    dorm: "https://drive.google.com/uc?export=download&id=1JZaDpJca4nOiQYWhEoZTP7ZM7P9nQNq4"
  },
  Speciality: ["Agility - Able to transport across space instantly.", "Mixed Damage - Able to deal Physical and Elemental DMG."],
  element: [{
    eleType: "Dark(50%)",
    icon: "https://drive.google.com/uc?export=download&id=1ohhNZk9EVXA0yCzrxCkKRM8SpTtk_Xql"
  }, {
    eleType: "Physical(50%)",
    icon: "https://gdurl.com/a3f6"
  }],
  info: {
    serviceTime: "6 Years",
    psychologicalAge: "26",
    activationDate: "12 Apr",
    height: "185cm",
    weight: "76kg",
    vitalFluidType: "O"
  },
  stats: {
    stats: {
      HP: "1544",
      DEF: "215",
      ATK: "345",
      CRIT: "145"
    },
    chart: "https://drive.google.com/uc?export=download&id=1usNTextV0farks7s8kalMl2qIDrNCsqD"
  },
  skillOrb: [{
    id: 1,
    cate: "Red Orb",
    name: "Comet Tail",
    skillDesc: "Hops back and throws darts in a fan-shaped area, dealing 200% / 400% / 600% Physical DMG based on the number of orbs pinged. Triggers Trailblade after clearing. Deals Dark DMG instead on a 3-Ping.",
    img: "https://gdurl.com/h6s1"
  }, {
    id: 2,
    cate: "Yellow Orb",
    name: "Celestial Centrifuge",
    skillDesc: "Spins forward into the air, draws in, and slashes at surrounding targets. Based on the number of orbs pinged, deals 40% / 80% / 120% Physical DMG per hit, then deals 50% / 100% / 150% Physical DMG when landing. Deals Dark DMG instead on a 3-Ping.",
    img: "https://gdurl.com/C9le"
  }, {
    id: 3,
    cate: "Blue Orb",
    name: "Meteoric Strike",
    skillDesc: "Swiftly moves to attack from the target’s rear, dealing 150% / 300% / 450% Physical DMG based on the number of orbs pinged. DMG will be converted into Dark DMG when performing a 3-Ping.",
    img: "https://drive.google.com/uc?export=download&id=1AS7npReOOKGK7e-MJmANgpjnyoG9Js2D"
  }],
  skillPassive: [{
    id: 1,
    cate: "Basic Attack",
    name: "Death Star",
    skillDesc: "Basic Attack: Slashes at the target, dealing 600% Physical DMG in total. After dodging or pinging a Red Orb, Basic Attacks will trigger Trailblade, dealing 200% Physical DMG.",
    img: "https://drive.google.com/uc?export=download&id=1_LW1O68dpRksCOPBiMyahM8IJ5EaYWlS"
  }, {
    id: 2,
    cate: "Signature",
    name: "Signature - Supernova Blast",
    skillDesc: "Signature Move: Costs 100 Energy. Transforms into shadow and damages targets, dealing 600% Dark DMG per hit.",
    img: "https://drive.google.com/uc?export=download&id=1elnhaSgdUSxGiMS0WSRnJqUFEjljRaqE"
  }, {
    id: 3,
    cate: "QTE",
    name: "Shadow Cross",
    skillDesc: "QTE: Watanabe dives at the target, splitting into shadows when he lands and attacks again, dealing 300% Dark DMG per hit.",
    img: "https://drive.google.com/uc?export=download&id=1IIhLn0u9Ce7P5pKt6VHa0NXV4_JTaxHJ"
  }, {
    id: 4,
    cate: "Class",
    name: "Attacker",
    skillDesc: "Extra DMG Bonus increases by 20%.",
    img: "https://gdurl.com/C9le"
  }, {
    id: 5,
    cate: "Awakening",
    name: "Ultima Awaken",
    skillDesc: "Gains 3 Signal Orbs when entering battle.",
    img: "https://gdurl.com/C9le"
  }],
  Rank: [{
    id: 1,
    cate: "Core",
    name: "Cosmic Wave",
    skillDesc: "Core Passive: Pinging a Red Orb after any 3-Ping transforms Watanabe into a shadow that launches consecutive attacks in front of him, dealing 60% Dark DMG per hit. Enters enhanced shadow form at the end of the attack, during which Basic Attacks will deal additional 300% Dark DMG and Trailblade will deal additional 100% Dark DMG for 5 seconds.",
    img: "https://drive.google.com/uc?export=download&id=1SWbPl0cEecTS2KHXC4NItC4EI7PcLLIF"
  }, {
    id: 2,
    cate: "Leader",
    name: "Nameless Shadow",
    skillDesc: "Dark DMG of all members increases by 10% and Attack of Attacker Constructs increases by 5%.",
    img: "https://drive.google.com/uc?export=download&id=1til72LPli94GKbbcKImsYM5TyH8h1wAY"
  }, {
    id: 3,
    cate: "SS Rank",
    name: "Killing Floor",
    skillDesc: "Watanabe deals 10% Extra DMG to targets hit by a Blue Orb skill for 4 seconds.",
    img: "https://drive.google.com/uc?export=download&id=1GMo4g3r4O6pKDCvo2FiYwayXaq4vYUn3"
  }, {
    id: 4,
    cate: "SSS Rank",
    name: "Chaser",
    skillDesc: "Watanabe deals 10% Extra DMG to targets hit by Trailblade.",
    img: "https://drive.google.com/uc?export=download&id=1YLbTJxCTvfkyMFGTteeltLP4tg0Y1yPI"
  }, {
    id: 5,
    cate: "SSS+ Rank",
    name: "Fallen Star",
    skillDesc: "Dark DMG increases by 20% while Core Passive is active.",
    img: "https://drive.google.com/uc?export=download&id=15aBRLcGcK5uT2CKtOW86R40jrjBmtEBE"
  }]
}];
const RANK = [{
  id: 1,
  rank: "B",
  img: "https://drive.google.com/uc?export=download&id=1QulmgDj-4gzSfWbDJvVfiMXc3IHdOYG-"
}, {
  id: 2,
  rank: "A",
  img: "https://drive.google.com/uc?export=download&id=12DKI5kQLDN_yL3x5VlCWpB4UUdpFEpzf"
}, {
  id: 3,
  rank: "S",
  img: "https://drive.google.com/uc?export=download&id=1epj2szPWgROVxBiWA4C2mpJIbLtQBRS1"
}, {
  id: 4,
  rank: "Compositer",
  img: "https://drive.google.com/uc?export=download&id=1epj2szPWgROVxBiWA4C2mpJIbLtQBRS1"
}];
const TYPES = [{
  id: 1,
  type: "Tank",
  img: "https://drive.google.com/uc?export=download&id=1lbe6ReiZXNvhK1nS_VQ3iM8I_2GGYz0R"
}, {
  id: 2,
  type: "Attacker",
  img: "https://drive.google.com/uc?export=download&id=18YZMyQJ3PJa-dPIHuvzpyEh0YDHLMMYy"
}, {
  id: 3,
  type: "Support",
  img: "https://drive.google.com/uc?export=download&id=1irZEUvUS1Yyep_PLd5WJcdojRsOakItg"
}, {
  id: 4,
  type: "Pioneer",
  img: "https://drive.google.com/uc?export=download&id=1tj7SOBRS7NKoV-7d9Bq4D8XEEqnOn-6-"
}, {
  id: 5,
  type: "Amplifier",
  img: "https://drive.google.com/uc?export=download&id=1tExwXTOaKLR_fB73wm270YbRAslj7JY4"
}];
const FACTIONS = [{
  id: 1,
  name: "Gray Raven",
  img: "https://drive.google.com/uc?export=download&id=1T36S0OHmlq8VRM_4ZM0SY7paPvM79C4h"
}, {
  id: 2,
  name: "Unidentified",
  img: "https://drive.google.com/uc?export=download&id=197IMhDAJpX_TwbXifvn5W3AakzdIv-bd"
}, {
  id: 3,
  name: "The Forsaken",
  img: "https://drive.google.com/uc?export=download&id=15wIpRAf79LxhHDJ-iMnpRLSV4xbY2lg_"
}, {
  id: 4,
  name: "Purifying Force",
  img: "https://drive.google.com/uc?export=download&id=1TyXHY5EDeyu5C13JV7YxrTjEIe7W6YpM"
}, {
  id: 5,
  name: "Engineering Force",
  img: "https://drive.google.com/uc?export=download&id=1OvXvRMoLGFf1_3Q9_WF0_JjdSwQQMQU"
}, {
  id: 6,
  name: "Strike Hawk",
  img: "https://drive.google.com/uc?export=download&id=1wpoLY_bJGr_4_otmbjs6gNlReRJUpYrC"
}, {
  id: 7,
  name: "Ascendant",
  img: "https://drive.google.com/uc?export=download&id=1ot1Nevavqc_NDgcsb3kYfFgwJHAKGAPE"
}, {
  id: 8,
  name: "WGAA",
  img: "https://drive.google.com/uc?export=download&id=1F7ByzL9WUYHQHkUwkHP9na7H8ASz-fpW"
}, {
  id: 9,
  name: "Akdilek Commercial Alliance",
  img: "https://drive.google.com/uc?export=download&id=1rpCHQ6djlikJWP8gc7ZSDt2cA-jn1qTX"
}, {
  id: 10,
  name: "Cerberus",
  img: "https://drive.google.com/uc?export=download&id=13WcvZ0LHG7dSKB0t8zDfMo5Gv1W6jOc8"
}];
const WEAPON = [{
  type: "Katana",
  list: [{
    id: "lotus-berserker",
    name: "Lotus Berserker",
    img: "https://drive.google.com/uc?export=download&id=1vWUg1uzy0CdFrma6PEmRG5MRqsRrIa9j",
    ability: "Basic Attack DMG increases by 10%. Physical DMG increases by 5% for 2s after each Basic Attack. Can be stacked up to 5 times. Duration resets every time it is triggered.",
    atk: "428",
    crit: "428",
    const: "lucia-lotus"
  }, {
    id: "inverse-shadow",
    name: "Inverse - Shadow",
    img: "https://drive.google.com/uc?export=download&id=1k6ULlm8iTZOsEMl1biTwlu0jhVRMoCAd",
    ability: "Elemental DMG increases by 5% for 4s when a Signal Orb skill is performed. Can be stacked up to 4 times. Signature Move increases Extra DMG Bonus by 10% for 10s. Both duration will reset every time it is triggered.",
    atk: "445",
    crit: "226",
    const: "lucia-dawn"
  }, {
    id: "sakura",
    name: "Sakura",
    img: "https://drive.google.com/uc?export=download&id=1qZQaG9ZopEiVZPQzCj8ggTMGiNBvHA64",
    ability: "For each orb pinged. Physical DMG increases by 2% for 5s. Can be stacked up to 10 times. Duration resets every time it is triggered. Gains an extra Swordwave Orb in Swordwave Mode. 10s cooldown.",
    atk: "447",
    crit: "447",
    const: "alpha"
  }]
}, {
  type: "Dual Gun",
  list: []
}, {
  type: "Saw",
  list: [{
    id: "hydro-heat",
    name: "Hydro Heat",
    img: "https://drive.google.com/uc?export=download&id=1j0eWF4CMVr2XIAunswL6wrJPqDNhXI3F",
    ability: "Attacks have a 10% chance to reduce the target's Fire Resistance by 5% for 5s. 8s cooldown against the same target. A Signature Move increases Fire DMG by 20% and doubles the chance of reducing the target's Resistance.",
    atk: "436",
    crit: "230",
    const: "nanami-pulse"
  }]
}, {
  type: "Great Sword",
  list: []
}, {
  type: "Cannon",
  list: []
}, {
  type: "Daggers",
  list: [{
    id: "peacemaker",
    name: "Peacemaker",
    img: "https://drive.google.com/uc?export=download&id=1N6M2UWSSsDrOLdY8VMoEe30Y89q6Suh6",
    ability: "Extra DMG Bonus increases by 10%. Dark DMG increases by 10% while under Cosmic Wave state.",
    atk: "463",
    crit: "249",
    const: "watanabe-astral"
  }]
}];
const GIFTS = [{
  id: 1,
  type: "Frog Accessory",
  desc: "Increases Construct Affection. Lucia's favorite gift.",
  flv: "A series of plushies produced by a famous toy-maker brand. Poor sales meant that there are very few of them left.",
  img: "https://drive.google.com/uc?export=download&id=1ndeDyQ8mxZe31II20nOAw-Iud8BzXt_i"
}, {
  id: 2,
  type: "Biosphere",
  desc: "Increases Construct Affection. Liv's favorite gift.",
  flv: "Highly advanced device that holds a self-contained ecosystem, a popular science teaching tool in Babylonia.",
  img: "https://drive.google.com/uc?export=download&id=1PEnK-Qb2KErbNJiEUYZnWhlrFMg0SPHV"
}, {
  id: 3,
  type: "Portable Game Console",
  desc: "Increases Construct Affection. Kamui's favorite gift.",
  flv: "The newest portable game console, perfect for passing the time between missions. Who is behind the anonymous account at the top of the rankings?",
  img: "https://drive.google.com/uc?export=download&id=1rXCRvJ6mozkLAZ1C7-D5VL4O2Hj2vbDf"
}, {
  id: 4,
  type: "Precision Toolkit",
  desc: "Increases Construct Affection. Lee's favorite gift.",
  flv: "Toolkit used for the maintenance of electronics.",
  img: "https://drive.google.com/uc?export=download&id=1i46csfyYT746nvvyuEZmIJf2XmQjRZG3"
}, {
  id: 5,
  type: "Jack-in-the-box",
  desc: "Increases Construct Affection. Nanami's favorite gift.",
  flv: "Trick box that surprises those who touch it.",
  img: "https://drive.google.com/uc?export=download&id=1yjlpKiaN-91KR_nplQ_Qo6vH3owXzcZr"
}, {
  id: 6,
  type: "Prototype Engine",
  desc: "Increases Construct Affection. Karenina's favorite gift.",
  flv: "Simple and powerful, but with a tendency to explode when overloaded - which some people do not see as a flaw.",
  img: "https://drive.google.com/uc?export=download&id=13H7y-rtj_GnYWj0wP7RRCMHA70dTPGj4"
}, {
  id: 7,
  type: "MRE Rations",
  desc: "Increases Construct Affection. Watanabe's favorite gift.",
  flv: "Popular ration set that contains a main dish, a side course, and coffee. You may even get rare seasoning such as miso if you are lucky.",
  img: "https://drive.google.com/uc?export=download&id=1u9JcJLfIid42fwfJ5ZU5t5AuNHMZub75"
}, {
  id: 8,
  type: "Liliy Brooch",
  desc: "Increases Construct Affection. Bianca's favorite gift.",
  flv: "The lily represents selflessness and dignity.",
  img: "https://drive.google.com/uc?export=download&id=1pTcCKIuDA-NFxl8D9180lvhnj0LwnV5G"
}, {
  id: 9,
  type: "High-Power Batteries",
  desc: "Increases Construct Affection. Sophia's favorite gift.",
  flv: "Batteries for power tools. No mechanics want to find themselves out of batteries during work, right?",
  img: "https://drive.google.com/uc?export=download&id=1_0FxCe7n-csJSq8Eounyj69VJMj47Bdd"
}, {
  id: 10,
  type: "R3 Cleaning Robot",
  desc: "Increases Construct Affection. Chrome's favorite gift.",
  flv: "Developed by Cosmos Industries for Babylonia's domestic market, this cleaning robot is the best solution to a nice and clean environment.",
  img: "https://drive.google.com/uc?export=download&id=1aamgXRaEI4n286Y_VjyGVEXP7hsZI3_Y"
}];
export const returnData = () => {
  return DATA;
};
export function getData(id) {
  return DATA.find(data => data.id === id);
}
export function getRank(input) {
  return RANK.find(rank => rank.rank === input);
}
export function getType(input) {
  return TYPES.find(type => type.type === input);
}
export function getFaction(input) {
  return FACTIONS.find(faction => faction.name === input);
}
export function getGift(input) {
  return GIFTS.find(gift => gift.type === input);
}
export function getWeapon(type, id) {
  const weaponType = WEAPON.find(weapon => weapon.type === type);
  return weaponType.list.find(weapon => weapon.id === id);
}