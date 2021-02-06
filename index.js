const overlay = document.querySelector(".overlay");
const darkerBackground = `rgba(0, 0, 0, 0.5)`;
const lightBackground = `rgba(0, 0, 0, 0.3)`;
const aHrefs = document.querySelectorAll("a[href]");

// stops issue refreshing current page - user click link to the page where he currently is
aHrefs.forEach((link) => {
	link.addEventListener("click", (e) => {
		let currPage = window.location.href;
		if (currPage === e.currentTarget.href) {
			e.preventDefault();
			e.stopPropagation();
		}
	});
});

barba.init({
	transitions: [
		{
			sync: true,
			leave(data) {
				return gsap.to(data.current.container, { /* x: -500, */ opacity: 0 });
			},
			enter(data) {
				if (data.next.namespace !== "home") {
					overlay.style.background = darkerBackground;
				} else {
					overlay.style.background = lightBackground;
				}

				return gsap.from(data.next.container, { /*x: 500,*/ opacity: 0 });
			},
		},
	],
	views: [
		{
			namespace: "nabidka",

			beforeEnter() {
				gsap.from(".nabidka__selection-item", {
					opacity: 0,
					y: -30,
					duration: 1,
					stagger: 0.3,
				});
			},
			afterEnter() {
				// load the pecivo.js file
				let scriptTag = document.querySelector('script[src="/pecivo.js"]');
				if (!scriptTag) {
					let script = document.createElement("script");
					script.src = "/pecivo.js";
					document.querySelector("body").appendChild(script);
				}

				const nabidkaDruhy = document.querySelectorAll(".nabidka__selection-item");
				nabidkaDruhy.forEach((selection) => {
					const nabidkaList = document.querySelector(".nabidka__items");

					selection.addEventListener("click", (e) => {
						//clear previous list
						nabidkaList.innerHTML = "";

						// get type
						let druhPeciva = e.target.dataset.type;

						// output all pecivo
						let i = 1;
						pecivoArr[druhPeciva].forEach((pecivoObj) => {
							nabidkaList.insertAdjacentHTML(
								"beforeend",
								createPecivoElement(pecivoObj)
							);
						});

						gsap.to(".nabidka__item", { opacity: 1, y: 0, stagger: 0.2 });
					});
				});
			},
		},
	],
});

// burger menu

const burger = document.querySelector(".burger");
const navMobile = document.querySelector(".nav__mobile");
const links = document.querySelectorAll(".nav__mobile .nav__link");

function toggleMenu() {
	burger.classList.toggle("burger--active");
	navMobile.classList.toggle("nav__mobile--visible");
}

burger.addEventListener("click", (e) => {
	toggleMenu();
});

links.forEach((link) => {
	link.addEventListener("click", (e) => {
		toggleMenu();
	});
});
