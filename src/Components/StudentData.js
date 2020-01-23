const StudentData = [
	{ name: 'Evelyn', assignment: 'W1-SCRUM', difficultyRating: 3, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W1D1-1', difficultyRating: 3, funRating: 3 },
	{ name: 'Evelyn', assignment: 'W1D2-1', difficultyRating: 1, funRating: 3 },
	{ name: 'Evelyn', assignment: 'W1D2-2', difficultyRating: 1, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W1D2-3', difficultyRating: 2, funRating: 3 },
	{ name: 'Evelyn', assignment: 'W1D2-4', difficultyRating: 3, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W1D2-5', difficultyRating: 3, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W1D3-1', difficultyRating: 3, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W1D3-2', difficultyRating: 3, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W1D3-4', difficultyRating: 4, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W1D3-5', difficultyRating: 4, funRating: 4 },
	{
		name: 'Evelyn',
		assignment: 'W1D3-Guess-the-number',
		difficultyRating: 5,
		funRating: 5
	},
	{ name: 'Evelyn', assignment: 'W1D4-1', difficultyRating: 4, funRating: 5 },
	{
		name: 'Evelyn',
		assignment: 'W1D4-Kleurentoggle',
		difficultyRating: 3,
		funRating: 4
	},
	{
		name: 'Evelyn',
		assignment: 'W1D5-Galgje',
		difficultyRating: 3,
		funRating: 3
	},
	{ name: 'Evelyn', assignment: 'W2D1-1', difficultyRating: 1, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W2D1-2', difficultyRating: 2, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W2D2-1', difficultyRating: 3, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W2D2-2', difficultyRating: 3, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W2D2-3', difficultyRating: 3, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W2D3-1', difficultyRating: 4, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W2D3-2', difficultyRating: 1, funRating: 3 },
	{ name: 'Evelyn', assignment: 'W2D3-3', difficultyRating: 4, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W2D4-1', difficultyRating: 1, funRating: 3 },
	{ name: 'Evelyn', assignment: 'W2D4-2', difficultyRating: 4, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W2D4-3', difficultyRating: 1, funRating: 3 },
	{
		name: 'Evelyn',
		assignment: 'W2D5-Filmzoeker',
		difficultyRating: 3,
		funRating: 4
	},
	{ name: 'Evelyn', assignment: 'W3D1-1', difficultyRating: 3, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W3D1-2', difficultyRating: 2, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W3D1-3', difficultyRating: 3, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W3D1-4', difficultyRating: 3, funRating: 3 },
	{ name: 'Evelyn', assignment: 'W3D2-1', difficultyRating: 2, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W3D2-2', difficultyRating: 3, funRating: 3 },
	{ name: 'Evelyn', assignment: 'W3D2-3', difficultyRating: 3, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W3D3-1', difficultyRating: 4, funRating: 4 },
	{ name: 'Evelyn', assignment: 'W3D3-2', difficultyRating: 4, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W3D3-3', difficultyRating: 3, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W3D3-4', difficultyRating: 4, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W3D4-1', difficultyRating: 5, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W3D4-2', difficultyRating: 1, funRating: 5 },
	{
		name: 'Evelyn',
		assignment: 'W3D5-Todo-List',
		difficultyRating: 2,
		funRating: 5
	},
	{ name: 'Evelyn', assignment: 'W4D2-1', difficultyRating: 1, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W4D2-2', difficultyRating: 1, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W4D2-3', difficultyRating: 1, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W4D2-4', difficultyRating: 1, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W4D3-1', difficultyRating: 1, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W4D3-2', difficultyRating: 1, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W4D3-3', difficultyRating: 1, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W4D3-4', difficultyRating: 1, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W4D3-5', difficultyRating: 1, funRating: 5 },
	{
		name: 'Evelyn',
		assignment: 'W4D3-Next-Level CSS',
		difficultyRating: 1,
		funRating: 5
	},
	{ name: 'Evelyn', assignment: 'W5D4-1', difficultyRating: 3, funRating: 4 },
	{
		name: 'Evelyn',
		assignment: 'W5D5-Lil_Playlist',
		difficultyRating: 4,
		funRating: 3
	},
	{ name: 'Evelyn', assignment: 'W6D1-1', difficultyRating: 5, funRating: 5 },
	{ name: 'Evelyn', assignment: 'W6D2-1', difficultyRating: 4, funRating: 3 },
	{
		name: 'Evelyn',
		assignment: 'W6D2-Eindopdracht',
		difficultyRating: 5,
		funRating: 5
	},
	{ name: 'Aranka', assignment: 'W1-SCRUM', difficultyRating: 1, funRating: 1 },
	{ name: 'Aranka', assignment: 'W1D1-1', difficultyRating: 4, funRating: 3 },
	{ name: 'Aranka', assignment: 'W1D2-1', difficultyRating: 3, funRating: 1 },
	{ name: 'Aranka', assignment: 'W1D2-2', difficultyRating: 3, funRating: 2 },
	{ name: 'Aranka', assignment: 'W1D2-3', difficultyRating: 4, funRating: 1 },
	{ name: 'Aranka', assignment: 'W1D2-4', difficultyRating: 2, funRating: 3 },
	{ name: 'Aranka', assignment: 'W1D2-5', difficultyRating: 4, funRating: 2 },
	{ name: 'Aranka', assignment: 'W1D3-1', difficultyRating: 3, funRating: 2 },
	{ name: 'Aranka', assignment: 'W1D3-2', difficultyRating: 2, funRating: 1 },
	{ name: 'Aranka', assignment: 'W1D3-4', difficultyRating: 1, funRating: 2 },
	{ name: 'Aranka', assignment: 'W1D3-5', difficultyRating: 4, funRating: 1 },
	{
		name: 'Aranka',
		assignment: 'W1D3-Guess-the-number',
		difficultyRating: 2,
		funRating: 3
	},
	{ name: 'Aranka', assignment: 'W1D4-1', difficultyRating: 3, funRating: 2 },
	{
		name: 'Aranka',
		assignment: 'W1D4-Kleurentoggle',
		difficultyRating: 4,
		funRating: 3
	},
	{
		name: 'Aranka',
		assignment: 'W1D5-Galgje',
		difficultyRating: 4,
		funRating: 1
	},
	{ name: 'Aranka', assignment: 'W2D1-1', difficultyRating: 2, funRating: 4 },
	{ name: 'Aranka', assignment: 'W2D1-2', difficultyRating: 4, funRating: 4 },
	{ name: 'Aranka', assignment: 'W2D2-1', difficultyRating: 3, funRating: 4 },
	{ name: 'Aranka', assignment: 'W2D2-2', difficultyRating: 3, funRating: 4 },
	{ name: 'Aranka', assignment: 'W2D2-3', difficultyRating: 1, funRating: 4 },
	{ name: 'Aranka', assignment: 'W2D3-1', difficultyRating: 4, funRating: 3 },
	{ name: 'Aranka', assignment: 'W2D3-2', difficultyRating: 4, funRating: 1 },
	{ name: 'Aranka', assignment: 'W2D3-3', difficultyRating: 1, funRating: 1 },
	{ name: 'Aranka', assignment: 'W2D4-1', difficultyRating: 1, funRating: 4 },
	{ name: 'Aranka', assignment: 'W2D4-2', difficultyRating: 2, funRating: 3 },
	{ name: 'Aranka', assignment: 'W2D4-3', difficultyRating: 2, funRating: 3 },
	{
		name: 'Aranka',
		assignment: 'W2D5-Filmzoeker',
		difficultyRating: 2,
		funRating: 2
	},
	{ name: 'Aranka', assignment: 'W3D1-1', difficultyRating: 4, funRating: 2 },
	{ name: 'Aranka', assignment: 'W3D1-2', difficultyRating: 3, funRating: 2 },
	{ name: 'Aranka', assignment: 'W3D1-3', difficultyRating: 1, funRating: 4 },
	{ name: 'Aranka', assignment: 'W3D1-4', difficultyRating: 1, funRating: 3 },
	{ name: 'Aranka', assignment: 'W3D2-1', difficultyRating: 1, funRating: 3 },
	{ name: 'Aranka', assignment: 'W3D2-2', difficultyRating: 2, funRating: 3 },
	{ name: 'Aranka', assignment: 'W3D2-3', difficultyRating: 2, funRating: 3 },
	{ name: 'Aranka', assignment: 'W3D3-1', difficultyRating: 2, funRating: 2 },
	{ name: 'Aranka', assignment: 'W3D3-2', difficultyRating: 4, funRating: 3 },
	{ name: 'Aranka', assignment: 'W3D3-3', difficultyRating: 3, funRating: 3 },
	{ name: 'Aranka', assignment: 'W3D3-4', difficultyRating: 1, funRating: 3 },
	{ name: 'Aranka', assignment: 'W3D4-1', difficultyRating: 1, funRating: 1 },
	{ name: 'Aranka', assignment: 'W3D4-2', difficultyRating: 3, funRating: 2 },
	{
		name: 'Aranka',
		assignment: 'W3D5-Todo-List',
		difficultyRating: 1,
		funRating: 1
	},
	{ name: 'Aranka', assignment: 'W4D2-1', difficultyRating: 2, funRating: 1 },
	{ name: 'Aranka', assignment: 'W4D2-2', difficultyRating: 3, funRating: 2 },
	{ name: 'Aranka', assignment: 'W4D2-3', difficultyRating: 2, funRating: 2 },
	{ name: 'Aranka', assignment: 'W4D2-4', difficultyRating: 3, funRating: 4 },
	{ name: 'Aranka', assignment: 'W4D3-1', difficultyRating: 2, funRating: 1 },
	{ name: 'Aranka', assignment: 'W4D3-2', difficultyRating: 4, funRating: 4 },
	{ name: 'Aranka', assignment: 'W4D3-3', difficultyRating: 3, funRating: 1 },
	{ name: 'Aranka', assignment: 'W4D3-4', difficultyRating: 3, funRating: 1 },
	{ name: 'Aranka', assignment: 'W4D3-5', difficultyRating: 4, funRating: 3 },
	{
		name: 'Aranka',
		assignment: 'W4D3-Next-Level CSS',
		difficultyRating: 4,
		funRating: 4
	},
	{ name: 'Aranka', assignment: 'W5D4-1', difficultyRating: 1, funRating: 3 },
	{
		name: 'Aranka',
		assignment: 'W5D5-Lil_Playlist',
		difficultyRating: 3,
		funRating: 2
	},
	{ name: 'Aranka', assignment: 'W6D1-1', difficultyRating: 1, funRating: 1 },
	{ name: 'Aranka', assignment: 'W6D2-1', difficultyRating: 2, funRating: 2 },
	{
		name: 'Aranka',
		assignment: 'W6D2-Eindopdracht',
		difficultyRating: 3,
		funRating: 4
	},
	{ name: 'Floris', assignment: 'W1-SCRUM', difficultyRating: 1, funRating: 4 },
	{ name: 'Floris', assignment: 'W1D1-1', difficultyRating: 3, funRating: 3 },
	{ name: 'Floris', assignment: 'W1D2-1', difficultyRating: 1, funRating: 3 },
	{ name: 'Floris', assignment: 'W1D2-2', difficultyRating: 2, funRating: 4 },
	{ name: 'Floris', assignment: 'W1D2-3', difficultyRating: 1, funRating: 3 },
	{ name: 'Floris', assignment: 'W1D2-4', difficultyRating: 3, funRating: 4 },
	{ name: 'Floris', assignment: 'W1D2-5', difficultyRating: 2, funRating: 4 },
	{ name: 'Floris', assignment: 'W1D3-1', difficultyRating: 2, funRating: 4 },
	{ name: 'Floris', assignment: 'W1D3-2', difficultyRating: 1, funRating: 4 },
	{ name: 'Floris', assignment: 'W1D3-4', difficultyRating: 2, funRating: 4 },
	{ name: 'Floris', assignment: 'W1D3-5', difficultyRating: 1, funRating: 4 },
	{
		name: 'Floris',
		assignment: 'W1D3-Guess-the-number',
		difficultyRating: 3,
		funRating: 5
	},
	{ name: 'Floris', assignment: 'W1D4-1', difficultyRating: 2, funRating: 5 },
	{
		name: 'Floris',
		assignment: 'W1D4-Kleurentoggle',
		difficultyRating: 3,
		funRating: 4
	},
	{
		name: 'Floris',
		assignment: 'W1D5-Galgje',
		difficultyRating: 1,
		funRating: 3
	},
	{ name: 'Floris', assignment: 'W2D1-1', difficultyRating: 4, funRating: 5 },
	{ name: 'Floris', assignment: 'W2D1-2', difficultyRating: 4, funRating: 5 },
	{ name: 'Floris', assignment: 'W2D2-1', difficultyRating: 4, funRating: 4 },
	{ name: 'Floris', assignment: 'W2D2-2', difficultyRating: 4, funRating: 4 },
	{ name: 'Floris', assignment: 'W2D2-3', difficultyRating: 4, funRating: 4 },
	{ name: 'Floris', assignment: 'W2D3-1', difficultyRating: 3, funRating: 4 },
	{ name: 'Floris', assignment: 'W2D3-2', difficultyRating: 1, funRating: 3 },
	{ name: 'Floris', assignment: 'W2D3-3', difficultyRating: 1, funRating: 4 },
	{ name: 'Floris', assignment: 'W2D4-1', difficultyRating: 4, funRating: 3 },
	{ name: 'Floris', assignment: 'W2D4-2', difficultyRating: 3, funRating: 4 },
	{ name: 'Floris', assignment: 'W2D4-3', difficultyRating: 3, funRating: 3 },
	{
		name: 'Floris',
		assignment: 'W2D5-Filmzoeker',
		difficultyRating: 2,
		funRating: 4
	},
	{ name: 'Floris', assignment: 'W3D1-1', difficultyRating: 2, funRating: 4 },
	{ name: 'Floris', assignment: 'W3D1-2', difficultyRating: 2, funRating: 4 },
	{ name: 'Floris', assignment: 'W3D1-3', difficultyRating: 4, funRating: 4 },
	{ name: 'Floris', assignment: 'W3D1-4', difficultyRating: 3, funRating: 3 },
	{ name: 'Floris', assignment: 'W3D2-1', difficultyRating: 3, funRating: 4 },
	{ name: 'Floris', assignment: 'W3D2-2', difficultyRating: 3, funRating: 3 },
	{ name: 'Floris', assignment: 'W3D2-3', difficultyRating: 3, funRating: 5 },
	{ name: 'Floris', assignment: 'W3D3-1', difficultyRating: 2, funRating: 4 },
	{ name: 'Floris', assignment: 'W3D3-2', difficultyRating: 3, funRating: 5 },
	{ name: 'Floris', assignment: 'W3D3-3', difficultyRating: 3, funRating: 5 },
	{ name: 'Floris', assignment: 'W3D3-4', difficultyRating: 3, funRating: 5 },
	{ name: 'Floris', assignment: 'W3D4-1', difficultyRating: 1, funRating: 5 },
	{ name: 'Floris', assignment: 'W3D4-2', difficultyRating: 2, funRating: 5 },
	{
		name: 'Floris',
		assignment: 'W3D5-Todo-List',
		difficultyRating: 1,
		funRating: 5
	},
	{ name: 'Floris', assignment: 'W4D2-1', difficultyRating: 1, funRating: 5 },
	{ name: 'Floris', assignment: 'W4D2-2', difficultyRating: 2, funRating: 5 },
	{ name: 'Floris', assignment: 'W4D2-3', difficultyRating: 2, funRating: 5 },
	{ name: 'Floris', assignment: 'W4D2-4', difficultyRating: 4, funRating: 5 },
	{ name: 'Floris', assignment: 'W4D3-1', difficultyRating: 1, funRating: 5 },
	{ name: 'Floris', assignment: 'W4D3-2', difficultyRating: 4, funRating: 5 },
	{ name: 'Floris', assignment: 'W4D3-3', difficultyRating: 1, funRating: 5 },
	{ name: 'Floris', assignment: 'W4D3-4', difficultyRating: 1, funRating: 5 },
	{ name: 'Floris', assignment: 'W4D3-5', difficultyRating: 3, funRating: 5 },
	{
		name: 'Floris',
		assignment: 'W4D3-Next-Level CSS',
		difficultyRating: 4,
		funRating: 5
	},
	{ name: 'Floris', assignment: 'W5D4-1', difficultyRating: 3, funRating: 4 },
	{
		name: 'Floris',
		assignment: 'W5D5-Lil_Playlist',
		difficultyRating: 2,
		funRating: 3
	},
	{ name: 'Floris', assignment: 'W6D1-1', difficultyRating: 1, funRating: 5 },
	{ name: 'Floris', assignment: 'W6D2-1', difficultyRating: 2, funRating: 3 },
	{
		name: 'Floris',
		assignment: 'W6D2-Eindopdracht',
		difficultyRating: 4,
		funRating: 5
	},
	{ name: 'Hector', assignment: 'W1-SCRUM', difficultyRating: 4, funRating: 1 },
	{ name: 'Hector', assignment: 'W1D1-1', difficultyRating: 4, funRating: 3 },
	{ name: 'Hector', assignment: 'W1D2-1', difficultyRating: 4, funRating: 1 },
	{ name: 'Hector', assignment: 'W1D2-2', difficultyRating: 4, funRating: 2 },
	{ name: 'Hector', assignment: 'W1D2-3', difficultyRating: 4, funRating: 1 },
	{ name: 'Hector', assignment: 'W1D2-4', difficultyRating: 4, funRating: 3 },
	{ name: 'Hector', assignment: 'W1D2-5', difficultyRating: 4, funRating: 2 },
	{ name: 'Hector', assignment: 'W1D3-1', difficultyRating: 4, funRating: 2 },
	{ name: 'Hector', assignment: 'W1D3-2', difficultyRating: 4, funRating: 1 },
	{ name: 'Hector', assignment: 'W1D3-4', difficultyRating: 4, funRating: 2 },
	{ name: 'Hector', assignment: 'W1D3-5', difficultyRating: 4, funRating: 1 },
	{
		name: 'Hector',
		assignment: 'W1D3-Guess-the-number',
		difficultyRating: 4,
		funRating: 3
	},
	{ name: 'Hector', assignment: 'W1D4-1', difficultyRating: 4, funRating: 2 },
	{
		name: 'Hector',
		assignment: 'W1D4-Kleurentoggle',
		difficultyRating: 4,
		funRating: 3
	},
	{
		name: 'Hector',
		assignment: 'W1D5-Galgje',
		difficultyRating: 4,
		funRating: 1
	},
	{ name: 'Hector', assignment: 'W2D1-1', difficultyRating: 4, funRating: 4 },
	{ name: 'Hector', assignment: 'W2D1-2', difficultyRating: 4, funRating: 4 },
	{ name: 'Hector', assignment: 'W2D2-1', difficultyRating: 4, funRating: 4 },
	{ name: 'Hector', assignment: 'W2D2-2', difficultyRating: 4, funRating: 4 },
	{ name: 'Hector', assignment: 'W2D2-3', difficultyRating: 4, funRating: 4 },
	{ name: 'Hector', assignment: 'W2D3-1', difficultyRating: 4, funRating: 3 },
	{ name: 'Hector', assignment: 'W2D3-2', difficultyRating: 4, funRating: 1 },
	{ name: 'Hector', assignment: 'W2D3-3', difficultyRating: 4, funRating: 1 },
	{ name: 'Hector', assignment: 'W2D4-1', difficultyRating: 4, funRating: 4 },
	{ name: 'Hector', assignment: 'W2D4-2', difficultyRating: 4, funRating: 3 },
	{ name: 'Hector', assignment: 'W2D4-3', difficultyRating: 4, funRating: 3 },
	{
		name: 'Hector',
		assignment: 'W2D5-Filmzoeker',
		difficultyRating: 4,
		funRating: 2
	},
	{ name: 'Hector', assignment: 'W3D1-1', difficultyRating: 4, funRating: 2 },
	{ name: 'Hector', assignment: 'W3D1-2', difficultyRating: 4, funRating: 2 },
	{ name: 'Hector', assignment: 'W3D1-3', difficultyRating: 4, funRating: 4 },
	{ name: 'Hector', assignment: 'W3D1-4', difficultyRating: 4, funRating: 3 },
	{ name: 'Hector', assignment: 'W3D2-1', difficultyRating: 4, funRating: 3 },
	{ name: 'Hector', assignment: 'W3D2-2', difficultyRating: 4, funRating: 3 },
	{ name: 'Hector', assignment: 'W3D2-3', difficultyRating: 4, funRating: 3 },
	{ name: 'Hector', assignment: 'W3D3-1', difficultyRating: 4, funRating: 2 },
	{ name: 'Hector', assignment: 'W3D3-2', difficultyRating: 4, funRating: 3 },
	{ name: 'Hector', assignment: 'W3D3-3', difficultyRating: 4, funRating: 3 },
	{ name: 'Hector', assignment: 'W3D3-4', difficultyRating: 4, funRating: 3 },
	{ name: 'Hector', assignment: 'W3D4-1', difficultyRating: 4, funRating: 1 },
	{ name: 'Hector', assignment: 'W3D4-2', difficultyRating: 4, funRating: 2 },
	{
		name: 'Hector',
		assignment: 'W3D5-Todo-List',
		difficultyRating: 4,
		funRating: 1
	},
	{ name: 'Hector', assignment: 'W4D2-1', difficultyRating: 4, funRating: 1 },
	{ name: 'Hector', assignment: 'W4D2-2', difficultyRating: 4, funRating: 2 },
	{ name: 'Hector', assignment: 'W4D2-3', difficultyRating: 4, funRating: 2 },
	{ name: 'Hector', assignment: 'W4D2-4', difficultyRating: 4, funRating: 4 },
	{ name: 'Hector', assignment: 'W4D3-1', difficultyRating: 4, funRating: 1 },
	{ name: 'Hector', assignment: 'W4D3-2', difficultyRating: 4, funRating: 4 },
	{ name: 'Hector', assignment: 'W4D3-3', difficultyRating: 4, funRating: 1 },
	{ name: 'Hector', assignment: 'W4D3-4', difficultyRating: 4, funRating: 1 },
	{ name: 'Hector', assignment: 'W4D3-5', difficultyRating: 4, funRating: 3 },
	{
		name: 'Hector',
		assignment: 'W4D3-Next-Level CSS',
		difficultyRating: 4,
		funRating: 4
	},
	{ name: 'Hector', assignment: 'W5D4-1', difficultyRating: 4, funRating: 3 },
	{
		name: 'Hector',
		assignment: 'W5D5-Lil_Playlist',
		difficultyRating: 4,
		funRating: 2
	},
	{ name: 'Hector', assignment: 'W6D1-1', difficultyRating: 4, funRating: 1 },
	{ name: 'Hector', assignment: 'W6D2-1', difficultyRating: 4, funRating: 2 },
	{
		name: 'Hector',
		assignment: 'W6D2-Eindopdracht',
		difficultyRating: 4,
		funRating: 4
	}
];
export default StudentData;