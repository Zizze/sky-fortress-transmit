export const locationRarity = ["mythic", "rare", "common"];

const common = [
	{
		name: "Desert",
		options: [
			{ name: "firearms", heroes: ["newton", "linsey"] },
			{ name: "fencing", heroes: ["corvus", "nemo", "ethan"] },
			{ name: "medical", heroes: ["sekhmet"] },
		],
	},
	{
		name: "Restaurant",
		options: [{ name: "firearms", heroes: ["newton", "linsey", "ethan"] }],
	},
	{
		name: "Bookstore",
		options: [
			{ name: "damage", heroes: ["newton"] },
			{ name: "control", heroes: ["beatrice"] },
		],
	},
	{
		name: "Street corner",
		options: [
			{ name: "hat", heroes: ["andre", "brynhild", "tricia"] },
			{ name: "girl", heroes: ["tricia"] },
			{ name: "glasses", heroes: ["ethan"] },
		],
	},
	{
		name: "Railway Platform",
		options: [
			{ name: "hat", heroes: ["nemo"] },
			{ name: "elegant lady", heroes: ["brynhild"] },
		],
	},
	{
		name: "Stage",
		options: [
			{ name: "elegant lady", heroes: ["hong kui", "nemo", "beatrice", "brynhild"] },
			{ name: "short hair", heroes: ["ethan"] },
		],
	},
	{
		name: "Inn",
		options: [
			{ name: "medical", heroes: ["hong kui"] },
			{ name: "firearms", heroes: ["tricia"] },
			{ name: "control", heroes: ["tricia"] },
		],
	},
	{
		name: "Field",
		options: [
			{ name: "boy", heroes: ["albert"] },
			{ name: "inspiration", heroes: ["hong kui"] },
		],
	},
	{
		name: "Wilderness",
		options: [
			{ name: "fencing", heroes: ["nemo"] },
			{ name: "elegant lady", heroes: ["beatrice"] },
			{ name: "glasses", heroes: ["ethan", "tricia"] },

			{ name: "inspiration", heroes: ["hong kui"] },
		],
	},
	{
		name: "Town",
		options: [
			{ name: "firearms", heroes: ["lynn", "ethan"] },
			{ name: "glasses", heroes: ["ethan", "tricia"] },
		],
	},
	{
		name: "Railway",
		options: [
			{ name: "short hair", heroes: ["ethan"] },
			{ name: "glasses", heroes: ["tricia"] },
			{ name: "boy", heroes: ["ethan"] },
		],
	},
];

const rare = [
	{
		name: "Laboratory",
		options: [
			{
				name: "elegant lady",
				heroes: ["newton", "nemo", "beatrice", "brynhild", "margaret", "hong kui"],
			},
			{ name: "elderly", heroes: ["augus", "beatrice"] },
			{ name: "long hair", heroes: ["nemo", "wiyanna", "brynhild", "hong kui", "tricia"] },
			{ name: "medical", heroes: ["wiyanna", "hong kui", "albert", "lynn", "tricia"] },
			// { name: "protection", heroes: [""] },
		],
	},
	{
		name: "Ancient Castle",
		options: [
			{
				name: "firearms",
				heroes: ["newton", "linsey", "lynn", "ethan", "tricia", "margaret", "corvus"],
			},
			{
				name: "hat",
				heroes: [
					"augus",
					"corvus",
					"margaret",
					"nemo",
					"nicholas",
					"hong kui",
					"beatrice",
					"tricia",
				],
			},
			{ name: "long hair", heroes: ["carna", "hong kui", "tricia", "margaret", "newton"] },
			{ name: "boy", heroes: ["albert", "new1", "ethan", "nicholas"] },
			{ name: "inspiration", heroes: ["newton", "hong kui", "nemo"] },
		],
	},
	{
		name: "Opera",
		options: [
			{ name: "girl", heroes: ["newton", "lynn", "sekhmet"] },
			{ name: "damage", heroes: ["corvus", "ethan"] },
			{ name: "elegant lady", heroes: ["margaret", "carna", "brynhild", "beatrice"] },
			{ name: "long hair", heroes: ["brynhild"] },
			{ name: "medical", heroes: ["hong kui", "sekhmet", "albert", "tricia"] },
		],
	},
	{
		name: "Street food",
		options: [
			{ name: "firearms", heroes: ["newton", "linsey", "lynn", "tricia", "ethan"] },
			{ name: "girl", heroes: ["freyja", "wiyanna", "sekhmet", "tricia", "newton"] },
			{ name: "inspiration", heroes: ["hong kui", "lynn"] },
			{ name: "protection", heroes: ["nemo", "brynhild", "nicholas", "ling"] },
			{ name: "hat", heroes: ["corvus", "beatrice"] },
		],
	},
	{
		name: "Administrative office",
		options: [
			{ name: "firearms", heroes: ["newton", "linsey", "lynn", "tricia", "ethan"] },
			{ name: "fencing", heroes: ["qian sui", "corvus", "tsukuyo", "ling"] },
			{ name: "elderly", heroes: ["augus", "nemo"] },
			{ name: "glasses", heroes: ["tricia", "ethan"] },
			{ name: "short hair", heroes: ["qian sui", "albert", "nicholas", "ethan"] },
		],
	},
	{
		name: "Exhibition Hall",
		options: [
			{ name: "damage", heroes: ["newton", "corvus", "andre", "freyja", "ethan"] },
			{ name: "fencing", heroes: ["qian sui", "corvus", "nemo", "ling", "nicholas"] },
			{
				name: "elderly",
				heroes: ["augus", "andre", "margaret", "brynhild", "hong kui", "beatrice", "nemo"],
			},
			{ name: "elegant lady", heroes: ["margaret", "brynhild", "hong kui"] },
			{ name: "glasses", heroes: ["ethan", "tricia"] },
		],
	},
	{
		name: "Sports field",
		options: [
			{ name: "glasses", heroes: ["ethan", "tricia"] },
			{
				name: "girl",
				heroes: ["linsey", "freyja", "ling", "wiyanna", "sekhmet", "tsukuyo", "tricia"],
			},
			{ name: "short hair", heroes: ["albert"] },
			{ name: "boy", heroes: ["albert", "new1"] },
			{ name: "control", heroes: ["beatrice", "newton", "tricia"] },
		],
	},
	{
		name: "Chinese restaurant ",
		options: [
			{ name: "fencing", heroes: ["qian sui", "corvus", "nemo", "ling", "tsukuyo"] },
			{
				name: "hat",
				heroes: ["augus", "corvus", "margaret", "brynhild", "sekhmet", "tricia", "nemo"],
			},
			{ name: "short hair", heroes: ["nicholas"] },
			{ name: "boy", heroes: ["nicholas", "albert", "new1", "ethan"] },
			{ name: "control", heroes: ["beatrice", "newton", "tricia"] },
		],
	},
];

const mythic = [
	{
		name: "Gate of Truth",
		options: [
			{
				name: "firearms",
				heroes: ["newton", "linsey", "freyja", "ethan", "tricia", "corvus", "lynn"],
			},
			{
				name: "long hair",
				heroes: [
					"newton",
					"margaret",
					"freyja",
					"nemo",
					"ling",
					"wiyanna",
					"brynhild",
					"hong kui",
					"beatrice",
					"tricia",
				],
			},
			{ name: "protection", heroes: ["nemo", "ling", "nicholas", "brynhild"] },
			{ name: "medical", heroes: ["ling", "hong kui", "sekhmet", "albert", "tricia"] },
			{ name: "boy", heroes: ["nicholas", "new1", "ethan", "albert"] },
		],
	},
	{
		name: "High-Tech Forum",
		options: [
			{
				name: "damage",
				heroes: [
					"newton",
					"qian sui",
					"linsey",
					"corvus",
					"andre",
					"margaret",
					"freyja",
					"ethan",
					"carna",
				],
			},
			{ name: "elderly", heroes: ["andre", "nemo", "hong kui", "beatrice"] },
			{
				name: "elegant lady",
				heroes: ["margaret", "nemo", "brynhild", "hong kui", "beatrice", "carna"],
			},
			{ name: "protection", heroes: ["nemo", "ling", "nicholas", "brynhild"] },
			{ name: "medical", heroes: ["sekhmet", "albert", "hong kui"] },
		],
	},
	{
		name: "Glorious Battlefield",
		options: [
			{ name: "short hair", heroes: ["qian sui", "augus", "andre", "new1", "nicholas"] },
			{ name: "protection", heroes: ["nemo", "wiyanna", "brynhild", "ling"] },
			{ name: "boy", heroes: ["nicholas", "albert", "new1", "ethan", "qian sui"] },
			{ name: "inspiration", heroes: ["hong kui"] },
			{ name: "control", heroes: ["beatrice", "tricia"] },
		],
	},
	{
		name: "Aethyrine Mine",
		options: [
			{ name: "firearms", heroes: ["newton", "linsey", "lynn", "tricia", "ethan"] },
			{ name: "fencing", heroes: ["qian sui", "corvus", "nemo", "tsukuyo", "ling"] },
			{ name: "short hair", heroes: ["qian sui", "albert"] },
			{ name: "damage", heroes: ["linsey", "augus", "andre", "newton"] },
			{ name: "hat", heroes: ["augus", "corvus", "andre", "sekhmet", "brynhild"] },
		],
	},
	{
		name: "Morning Assembly",
		options: [
			{ name: "girl", heroes: ["newton", "linsey", "sekhmet", "lynn", "tsukuyo", "tricia"] },
			{ name: "elegant lady", heroes: ["margaret", "carna", "hong kui", "beatrice"] },
			{ name: "inspiration", heroes: ["hong kui", "lynn"] },
			// { name: "control", heroes: [""] },
			// { name: "midical", heroes: [""] },
		],
	},
	{
		name: "Cutting Edge Auction",
		options: [
			{ name: "long hair", heroes: ["newton", "ling", "brynhild"] },
			{ name: "elderly", heroes: ["andre", "nemo"] },
			{ name: "hat", heroes: ["wiyanna", "tricia", "freyja"] },
			{ name: "inspiration", heroes: ["lynn", "hong kui"] },
			{ name: "control", heroes: ["beatrice"] },
		],
	},
	{
		name: "Path of Exploration",
		options: [
			{ name: "fencing", heroes: ["qian sui", "nemo", "tsukuyo", "corvus"] },
			{ name: "girl", heroes: ["linsey", "freyja", "tricia"] },
			{ name: "firearms", heroes: ["linsey", "newton", "ethan"] },
			{ name: "control", heroes: ["newton"] },
			{ name: "inspiration", heroes: ["hong kui"] },
		],
	},
	{
		name: "Silent Square",
		options: [
			{ name: "damage", heroes: ["qian sui", "augus"] },
			{ name: "elderly", heroes: ["augus"] },
			{ name: "hat", heroes: ["augus", "corvus", "andre"] },
			{ name: "girl", heroes: ["freyja", "wiyanna", "lynn", "tricia", "newton"] },
			{ name: "inspiration", heroes: ["hong kui", "lynn"] },
		],
	},
];

export const data = { mythic, rare, common };
