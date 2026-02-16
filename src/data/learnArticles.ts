export type LearnArticleSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type LearnArticle = {
  title: string;
  intro: string;
  heroImage?: string;
  readingTime?: string;
  sections: LearnArticleSection[];
  resources?: { label: string; href: string }[];
};

export const learnArticles: Record<string, LearnArticle> = {
  "all-american-sterilizers": {
    title: "Getting started with All-American sterilisers",
    intro:
      "All-American pressure sterilisers are workhorses, but only when you understand venting, pressure and cooldown discipline. Use this playbook to keep bags intact, cycles consistent and gaskets healthy.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/2023/10/sterilizer-011_1000x1333-300x300.jpeg",
    readingTime: "7 min read",
    sections: [
      {
        title: "Dial in the hardware",
        body: [
          "Inspect the lid, metal-to-metal seal and pressure gauge before every run. If the gauge stalls or reads wildly different from your secondary weight, replace it—guessing the PSI is how bags burst.",
          "Run a dry heat cycle (no jars) the first time you unpack a new unit. It burns off machining oil and helps you learn how long the steriliser takes to vent and reach 15 PSI on your stove or induction plate.",
        ],
        bullets: [
          "Use an induction plate with at least 2000 W for repeatable heat up times.",
          "Keep the petcock open until steam shoots out in a solid jet for a full 10 minutes.",
          "Never use oil on the seal—wipe with isopropyl alcohol only.",
        ],
      },
      {
        title: "Cycle management",
        body: [
          "Once you hit 15 PSI, start your timer only after the pressure stabilises. Grain spawn needs 90 minutes at pressure; sawdust bags often need 120. Set a timer so you are not tempted to open early.",
          "Let pressure drop naturally. Cracking the petcock to speed up cooldown will boil water inside your jars and the vacuum drop can deform bag filters. Plan your workflow so the steriliser can sit untouched for an hour after heat is off.",
        ],
      },
      {
        title: "Long-term care",
        body: [
          "Empty the steriliser once it is cool enough to touch, then rinse the chamber with warm water. Minerals from hard water will pit aluminium over time; wipe it dry and store the unit with the lid resting upside down so moisture can escape.",
          "Replace over-pressure plugs annually or any time they look brittle. A $10 plug is cheaper than warping a lid.",
        ],
      },
    ],
    resources: [
      { label: "Purchase sterilisers", href: "/shop?category=Autoclave%20Sterilizers" },
      { label: "Replacement parts", href: "/shop?category=Accessories" },
    ],
  },
  "mushroom-grains": {
    title: "Mushroom grains decoded",
    intro:
      "Not all spawn grains behave the same. This guide explains how to choose a grain, hydrate it, and test it so your inoculations rip through fast.",
    heroImage: "https://www.rootlab.com.au/wp-content/uploads/2023/12/Grain-bag-300x300.png",
    sections: [
      {
        title: "Match the grain to the job",
        body: [
          "Rye and wheat are forgiving and perfect for beginners. Millet flows better through injection ports and offers more inoculation points, which helps lion's mane or slow-growing cultures. Milo/sorghum split the difference when you need something cheap yet lightweight.",
          "Mixing grains can help balance moisture. A common combo is 80% millet, 20% oats—oats hold water while millet keeps colonisation even.",
        ],
      },
      {
        title: "Hydration targets",
        body: [
          "Aim for 60–63% moisture. After simmering, grains should be plump but the core still intact. Spread them on baking trays to steam dry until the surface feels matte. If you can squeeze a handful without water beading, you are on track.",
          "Add 1–2% gypsum by dry weight. It prevents clumping and offers a small calcium bump that mycelium appreciates.",
        ],
      },
      {
        title: "Quality checks",
        body: [
          "Before loading bags, pressure cook a single jar of hydrated grain without inoculating it. Label it “control” and keep it on a shelf. If it contaminants within a week, the batch was dirty or under-processed and you saved yourself from wasting culture.",
          "Look for sour smells or slime. Bacteria love overcooked oats, so err on the side of shorter simmer times.",
        ],
      },
    ],
  },
  "heat-sealers": {
    title: "Heat sealer roadmap",
    intro:
      "Bag sterility lives or dies on your seal quality. Learn how to pick the right sealer, dial temperatures and keep elements from burning out mid-run.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/2023/10/Heat-impulse-plastic-sealer-01_1000x1333-300x300.jpeg",
    sections: [
      {
        title: "Choose the right platform",
        body: [
          "Impulse sealers pulse power through a nichrome strip for a second or two—perfect for filter patch bags and most 3–5 mil plastics. Constant heat sealers stay hot the entire time and shine when you need to seal thick Unicorn 14A bags or polypropylene tubing.",
          "Handheld sealers are fine for fieldwork but not for production. If you are running more than ten bags at a time, move up to a benchtop unit with adjustable dwell.",
        ],
      },
      {
        title: "Consistent seals",
        body: [
          "Wipe condensation from the inside of bags before sealing. Moisture eats seals. Use a silicone roller to flatten the gusset so layers overlap evenly.",
          "Start with low power settings and increase slowly. A proper seal looks glossy and smooth without melted holes. Mark the sweet spot on your dial with a paint pen.",
        ],
      },
      {
        title: "Maintenance",
        body: [
          "Keep spare elements and PTFE strips on hand. Replace them the moment you see dark scorch marks; once the PTFE tears, plastic sticks to the wire and your seal line becomes uneven.",
          "Unplug the sealer before wiping it down and never use metal tools on the element.",
        ],
      },
    ],
  },
  "bucket-grows": {
    title: "Beginner's bucket grow",
    intro:
      "A single bucket, some pasteurised straw and a kilogram of spawn can keep a household in oysters. Here’s the entire workflow, sized for renters and balcony growers.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/2023/10/Grow-mushrooms-in-buckets1_1000x1000-300x300.jpeg",
    sections: [
      {
        title: "Hardware & prep",
        body: [
          "Use a 10–15 L food-safe bucket. Drill six rows of 12 mm holes in a staggered pattern; they act as fruiting windows. Deburr each hole so the liner does not tear.",
          "Pasteurise chopped straw at 65–70 °C for one hour. Drain it in a laundry basket until it hits field capacity—you should only squeeze out a drop or two of water.",
        ],
      },
      {
        title: "Layering technique",
        body: [
          "Spray the inside of the bucket with isopropyl alcohol, then alternate layers of straw and spawn. Pack everything down firmly to remove air gaps, finishing with a layer of straw.",
          "Snap the lid on, label the date, and incubate between 20–24 °C. Within 10 days, the block should turn white.",
        ],
      },
      {
        title: "Fruiting & harvest",
        body: [
          "Move the bucket somewhere bright but indirect—laundry, bathroom or shaded patio. Mist twice daily and aim a fan nearby if the air is stagnant.",
          "Harvest clusters when caps are still slightly cupped. Twist, do not cut, so the next flush has room to form.",
        ],
      },
    ],
  },
  "mycelium-objects": {
    title: "Start making your own mycelium objects",
    intro:
      "Mycelium composites let you turn agri-waste into lamps, packaging and panels. This guide walks through the growth, moulding and finishing phases.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/2023/10/square-plastic-01_1368x1000-300x300.jpeg",
    sections: [
      {
        title: "Feedstock & spawn",
        body: [
          "Blend hardwood sawdust with hemp hurd or shredded cardboard for structure. Pasteurise the mix, cool it, then add 10–15% vigorous grain spawn.",
          "The goal is airy substrate. Break up clumps so mycelium can run fast and evenly.",
        ],
      },
      {
        title: "Forming and incubation",
        body: [
          "Press the colonised mix into breathable moulds—3D printed forms lined with parchment or reusable silicone shells work well. Cover them with micropore tape to keep humidity in but let CO₂ escape.",
          "Incubate at 22–24 °C until the surface turns white (3–5 days). Unmould and let the piece consolidate for another day.",
        ],
      },
      {
        title: "Finishing",
        body: [
          "Bake the piece at 80–90 °C for two hours to kill the culture and harden the matrix. Sand rough edges, then seal with a breathable finish like shellac if you need moisture resistance.",
        ],
      },
    ],
  },
  "beginner-mushroom-growing-kits": {
    title: "Beginner mushroom growing kits",
    intro:
      "Spray-and-grow kits are the fastest way to taste success. Use this reference to unbox, fruit and troubleshoot them like a pro.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/2023/12/mushroom-kit-1-01-296x300.png",
    sections: [
      {
        title: "Unboxing & site selection",
        body: [
          "Open the box the day it arrives. If you cannot fruit immediately, keep the block refrigerated. Otherwise, pick a counter or shelf with indirect light and airflow.",
          "Cut the X exactly where the manufacturer marks—usually over the biggest knot of mycelium. Mist the plastic, not the exposed substrate, to avoid pooling water.",
        ],
      },
      {
        title: "Daily care",
        body: [
          "Mist two to three times per day and waft a little fresh air in with your hand. The plastic should feel dewy but never dripping.",
          "If pins stall, peel the plastic back slightly for a day to drop CO₂, then reseal once you see growth.",
        ],
      },
      {
        title: "Reset for flush two",
        body: [
          "After harvesting, soak the block (still in its plastic) in cold water for 4–6 hours. Drain thoroughly, pat dry, and cut a fresh X on the opposite face.",
          "Most kits give at least two flushes; lion's mane and shiitake can offer three if hydrated well.",
        ],
      },
    ],
  },
  "agar-plates": {
    title: "Agar plate fundamentals",
    intro:
      "Clean agar work unlocks cloning, isolation and contamination control. These steps keep plates crystal clear and transfers consistent.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-12-at-10.06.17-PM-300x300.jpeg",
    sections: [
      {
        title: "Mix and pour",
        body: [
          "Use 20 g malt extract + 15 g agar + 1 L water as a universal recipe. Simmer until fully dissolved, add optional supplements (yeast, activated charcoal), then distribute into media bottles and sterilise for 30 minutes.",
          "Pour inside a still-air box or flow hood while the media is ~45 °C. Stack plates in a pyramid and leave them slightly ajar until condensation stops forming.",
        ],
      },
      {
        title: "Label and store",
        body: [
          "Write the recipe, pour date and any additives on the bottom of each plate. Store upside down in a sealed container with a desiccant pack.",
          "If you see mystery droplets later, the agar was too wet—dry the next batch longer before sealing.",
        ],
      },
      {
        title: "Transfer discipline",
        body: [
          "Flame-sterilise scalpel blades until they glow red, cool them on unused agar, and work quickly. Close plates as soon as the wedge lands.",
          "Isolate sectors by drawing invisible pies; transfer only the rhizomorphic edge, not the fluffy center.",
        ],
      },
    ],
  },
  "different-mushrooms": {
    title: "Learn about different mushrooms",
    intro:
      "Each species has its own temperature, texture and market. Use this cheat sheet to plan your grow schedule and menu.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/2023/12/Shutterstock_2452794925-300x300.png",
    sections: [
      {
        title: "Core gourmet trio",
        body: [
          "Oyster (Pleurotus) pulls hard in warm rooms and will forgive sloppy technique. Lion's mane demands cleaner spawn but rewards you with premium pricing. Shiitake likes cooler climates and benefits from a cold shock between flushes.",
        ],
      },
      {
        title: "Functional friends",
        body: [
          "Reishi and turkey tail thrive on supplemented sawdust blocks and look stunning on display racks. Cordyceps likes rice-based media and narrow jars with light cycles.",
        ],
      },
      {
        title: "Plan by season",
        body: [
          "Stack warm-loving oysters and pioppino in summer, then swap to chestnut, enoki and lion's mane once your grow room dips below 20 °C.",
          "Rotate species so your equipment stays busy year-round without battling extreme HVAC targets.",
        ],
      },
    ],
  },
  "log-growing": {
    title: "Grow mushrooms on logs",
    intro:
      "Log culture is slow but low-effort. Once you plug the wood, nature does the rest. Here's how to set up beds that fruit for years.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/log-stack-01-rdtr5t5mln34nbc31d3ieax5qh17ytc4nozri8x9ko.png",
    sections: [
      {
        title: "Select wood & timing",
        body: [
          "Cut hardwood logs while trees are dormant—late autumn through winter. Choose oak, beech or eucalyptus with 8–15 cm diameter.",
          "Let logs rest two weeks to let antifungal defenses drop, but inoculate within two months so they do not dry out.",
        ],
      },
      {
        title: "Inoculation methods",
        body: [
          "Drill 12 mm holes in a diamond pattern, 5 cm apart. Hammer in plug spawn or inject sawdust spawn with a palm inoculator.",
          "Seal every hole plus the log ends with food-grade wax to lock in moisture and block pests.",
        ],
      },
      {
        title: "Stacking & fruiting",
        body: [
          "Stack logs in a criss-cross crib under shade cloth. Keep them damp with weekly watering or natural rain.",
          "After 9–12 months, soak logs for 24 hours to trigger the first flush. Rotate which logs you soak so each has time to recover.",
        ],
      },
    ],
  },
  "liquid-culture": {
    title: "Mushroom liquid culture clinic",
    intro:
      "Liquid culture lets you expand genetics fast. Done wrong, it spreads contamination faster. This clinic keeps your jars clean and potent.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-01-23-at-3.18.08-PM-e1737628804196-rhmxl87qsh6mat01qq2xerz0fr6zq46mlwym5toe60.jpeg",
    sections: [
      {
        title: "Recipe & sterilisation",
        body: [
          "Use 4% light malt extract in distilled water. Add a magnetic stir bar and sterilise for 25 minutes. Let the jar cool fully before inoculating through a self-healing port.",
        ],
      },
      {
        title: "Inoculation",
        body: [
          "Inject 1–2 ml of clean culture or drop in an agar wedge. Swirl gently once per day during the first week to prevent the mycelium from clumping.",
          "Keep jars at 22–24 °C. Mycelium should produce fluffy clouds or small tendrils—oily slicks or yellow sediment usually indicate bacteria.",
        ],
      },
      {
        title: "Testing & storage",
        body: [
          "Always test LC on agar before hitting grain. One contaminated syringe can tank dozens of bags.",
          "Store finished LC in the fridge for up to two months. Anything older should be refreshed onto agar first.",
        ],
      },
    ],
  },
  "grow-mushrooms": {
    title: "Grow mushrooms from scratch",
    intro:
      "Ready to graduate from kits? This roadmap shows the entire lifecycle—from culture to harvest—so you can plan equipment and schedule.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/2024/02/Mushroom-Growing-Kit-300x300.png",
    sections: [
      {
        title: "Culture work",
        body: [
          "Start with spores or a clone on agar, clean it up, then move to grain. Keep a master slant so you can revive the strain later.",
        ],
      },
      {
        title: "Spawn production",
        body: [
          "Inoculate sterilised grain bags or jars, shake at 30% and 70% colonisation, then let them finish consolidating. Fresh spawn is fast spawn—use it within two weeks.",
        ],
      },
      {
        title: "Bulk and fruiting",
        body: [
          "Mix spawn into pasteurised substrate, load into monotubs or tents, and dial humidity to 90–95% during pinning. Drop to 85% once fruits form to reduce bacterial blotch.",
          "Harvest before caps flatten fully. Dry or refrigerate immediately.",
        ],
      },
    ],
  },
  "mushroom-supplements": {
    title: "Supplements & bio-enhancers",
    intro:
      "Supplements can double yields—but only if you use them safely. Here's how to pick, dose and blend them into your substrate.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/2025/03/Pouch-with-jar-01-300x300.png",
    sections: [
      {
        title: "Common additives",
        body: [
          "Soy hulls add nitrogen and fats for fast runs. Wheat bran is cheaper but more prone to contamination. Gypsum offers calcium and keeps substrates crumbly.",
        ],
      },
      {
        title: "Safe ratios",
        body: [
          "Keep total supplementation below 20% of dry substrate weight unless you are sterilising. Pasteurised projects (like monotubs) should cap at 5–10% to avoid bacterial blow-ups.",
        ],
      },
      {
        title: "Blending technique",
        body: [
          "Mix supplements into dry base materials before hydrating. This prevents nutrient pockets. If you're experimenting with functional powders (chitin, adaptogen blends), document every batch so you can pinpoint what the mycelium loved—or hated.",
        ],
      },
    ],
  },
  "spray-and-grow": {
    title: "Spray-and-grow kit care",
    intro:
      "Compact blocks deserve big care. Fine-tune humidity, airflow and sanitation so your spray-and-grow kit keeps producing.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/Block-with-spray-01-scaled-rhrk220fsowvig31u5nrfia4vtb4v9alvnppp41vp4.png",
    sections: [
      {
        title: "Set the microclimate",
        body: [
          "Kits like indirect light (3–4k lux) and steady temps of 18–23 °C. Keep them off heaters or drafty windowsills.",
        ],
      },
      {
        title: "Hydration rituals",
        body: [
          "Mist 20–30 cm away so the spray falls like fog. If droplets collect, blot gently with a paper towel.",
          "Fan fresh air in after each mist to exchange CO₂ without drying the block.",
        ],
      },
      {
        title: "Troubleshooting",
        body: [
          "Yellow slime equals bacteria—cut away the section with a sterile knife and increase airflow. Fuzzy stems mean CO₂ is trapped; open the slit wider for a day.",
        ],
      },
    ],
  },
  "lions-mane": {
    title: "Lion's mane deep dive",
    intro:
      "Hericium erinaceus is sensitive but wildly rewarding. Learn how to dial humidity, harvest timing and extract prep.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/Lions-mane-growing-culture-01-scaled-rdtlo0y6jmc3p4mkydck8pohwpvtbl5egr8p786gu0.png",
    sections: [
      {
        title: "Environmental sweet spot",
        body: [
          "Fruit at 18–20 °C with 95% humidity during pinning. Drop to 90% once teeth lengthen. Excess airflow dries the spines, so use gentle circulation.",
        ],
      },
      {
        title: "Bag prep",
        body: [
          "Use supplemented sawdust blocks (Masters mix) and cut a 5 cm slit once the block is dense white. Lion's mane loves vertical fruiting, so orient slits on the side.",
        ],
      },
      {
        title: "Harvest & post-processing",
        body: [
          "Pick when spines reach 1–2 cm and before they yellow. Chill immediately or slice into medallions and dehydrate for powder. For tinctures, dual-extract with 30 days in ethanol followed by a simmer in water.",
        ],
      },
    ],
  },
  "magic-mushroom-guide": {
    title: "Magic mushroom policy guide (Australia)",
    intro:
      "Therapeutic psilocybin is inching forward in Australia. Stay within the law, support harm minimisation and know where regulated access exists.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/Magic-MUSHROOM-with-grass-02-scaled-rhrk0yj7tnetytoe8olfis8rxmppvyxvq8bbjhoeyg.png",
    sections: [
      {
        title: "Current regulations",
        body: [
          "As of 2026, the TGA allows authorised psychiatrists to prescribe psilocybin for treatment-resistant depression under the Authorised Prescriber Scheme. DIY cultivation or possession remains illegal in every state.",
        ],
      },
      {
        title: "Harm minimisation",
        body: [
          "If you support clients or friends, emphasise accurate dosing, sober sitters and integration planning. Encourage reagent testing for any extracts sourced overseas.",
        ],
      },
      {
        title: "Pathways to access",
        body: [
          "Prospective patients should speak with qualified psychiatrists who have AP approval. Clinics such as Mind Medicine Australia maintain directories of providers.",
        ],
      },
      {
        title: "Advocacy & resources",
        body: [
          "Follow state legislation updates and support groups lobbying for evidence-based policy. LalaLab will update this page whenever regulations shift.",
        ],
      },
    ],
    resources: [
      { label: "TGA Authorised Prescriber", href: "https://www.tga.gov.au" },
      { label: "Mind Medicine Australia", href: "https://mindmedicineaustralia.org.au" },
    ],
  },
  "cook-with-mushrooms": {
    title: "Cooking with gourmet mushrooms",
    intro:
      "Show off your harvest with techniques that respect texture and aroma. These methods keep every flush exciting.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/Mushroom-chunks2-02-scaled-rhrk19ta3nu9u580etgycpeb2964gc6nrs55at7ovs.png",
    sections: [
      {
        title: "Prep like a chef",
        body: [
          "Brush dirt away with a soft pastry brush—waterlogged mushrooms lose their bite. Tear king oysters and lion's mane into strips for more surface area and better caramelisation.",
        ],
      },
      {
        title: "Core techniques",
        body: [
          "Dry-sauté oyster slices to evaporate moisture, then add butter or oil. Lion's mane loves to be seared like scallops, while shiitake stems shine in stocks.",
          "Dehydrate surplus harvest at 55 °C, powder it, and sprinkle into broths or rubs.",
        ],
      },
      {
        title: "Pairings",
        body: [
          "Oysters pair with miso, soy and citrus. Chestnut mushrooms handle roasted garlic and thyme. Lion's mane works with cream sauces and nutmeg.",
        ],
      },
    ],
  },
  "mushroom-foraging-australia": {
    title: "Mushroom foraging in Australia",
    intro:
      "Wild mushrooms are magical—but only when you can identify them with certainty. Use this field primer before you head into the bush.",
    heroImage:
      "https://www.rootlab.com.au/wp-content/uploads/elementor/thumbs/MUSHROOM-FORAGING-01-scaled-rhrk0kfmz4vj4o8vj0i0zdsv0un7oidwoaj1cc9bjs.png",
    sections: [
      {
        title: "Know your region",
        body: [
          "Victoria and Tasmania host saffron milk caps and slippery jacks in pine plantations. NSW rainforests hide glow-in-the-dark ghost fungi (spectacular, but toxic). Always learn the local look-alikes.",
        ],
      },
      {
        title: "Safety essentials",
        body: [
          "Never eat anything you cannot ID with 100% confidence. Carry a basket, wax paper bags, a knife, and GPS. Photograph specimens in situ before picking.",
          "Download poisoning hotlines for your state—time matters if someone ingests the wrong species.",
        ],
      },
      {
        title: "Legal & ethical harvesting",
        body: [
          "Respect park regulations; many national parks ban collecting. Take only what you will eat, leave some behind for wildlife, and cover disturbed soil.",
        ],
      },
    ],
    resources: [
      { label: "Victorian Foragers Guide", href: "https://vnst.org.au" },
      { label: "Poisons Information Centre", href: "https://www.healthdirect.gov.au/poisons-information-centre" },
    ],
  },
};
