export const maps = [
	{
		mapID: "0101",
		message: "You are in Fairy Woods.",
		messageColor: "green",
		enemies: 0,
		choices: [
			{
				choice: "North",
				result: "0103"
			},
			{
				choice: "West",
				result: "0102"
			}
		]
	},
	{
		mapID: "0102",
		message: "There is a merchant.",
		messageColor: "red",
		enemies: 0,
		choices: [
			{
				choice: "North",
				result: "0104"
			},
			{
				choice: "East",
				result: "0101"
			},
			{
				choice: "Merchant",
				result: ""
			}
		]
	},	{
		mapID: "0103",
		message: "A bug approaches.",
		messageColor: "purple",
		enemies: 1,
		choices: [
			{
				choice: "South",
				result: "0101"
			},
			{
				choice: "West",
				result: "0104"
			}
		]
	},	{
		mapID: "0104",
		message: "Be careful. Some bugs are nearby.",
		messageColor: "green",
		enemies: 2,
		choices: [
			{
				choice: "East",
				result: "0103"
			},
			{
				choice: "South",
				result: "0102"
			}
		]
	}
];