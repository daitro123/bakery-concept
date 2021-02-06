// create element for nabidka :)
const createPecivoElement = (item) => {
	return `<div class="nabidka__item">
				<h4 class="nabidka__item-title">${item.title}</h4>
				<span class="nabidka__item-weight">${item.price}Kč</span>
				<span class="nabidka__item-price">${item.weight}g</span>
			</div>`;
};

const pecivoArr = {
	svetle: [
		{
			title: "Francouzská bageta",
			price: 12,
			weight: 65,
		},
		{
			title: "Staročeský rohlík",
			price: 3,
			weight: 24,
		},
		{
			title: "Kaiserka podmáslová",
			price: 4,
			weight: 43,
		},
		{
			title: "Houska staročeská",
			price: 12,
			weight: 65,
		},
	],
	tmave: [
		{
			title: "Rohlík sedlácký",
			price: 5,
			weight: 61,
		},
		{
			title: "Bageta dřevorubecká",
			price: 15,
			weight: 89,
		},
		{
			title: "Dalamánek chlebový",
			price: 6,
			weight: 63,
		},
		{
			title: "Malá bageta tmavá",
			price: 8,
			weight: 45,
		},
	],
	sladke: [
		{
			title: "Donut s kakaovou polevou",
			price: 18,
			weight: 65,
		},
		{
			title: "Croissant máslový",
			price: 10,
			weight: 47,
		},
		{
			title: "Makovka",
			price: 4,
			weight: 80,
		},
		{
			title: "Pletenec pekanový",
			price: 25,
			weight: 74,
		},
	],
};
