function Ninja(name) {
	const ninja = {};

	ninja.name = name;
	ninja.speed = 3;
	ninja.strength = 3;
	ninja.health = 100;

	ninja.sayName = () => {
		console.log(ninja.name);
	};

	ninja.showStats = () => {
		console.log(`Name: ${ninja.name}, Health: ${ninja.health}, Speed: ${ninja.speed}, Strength: ${ninja.strength}`);
	};

	ninja.drinkSake = () => {
		ninja.health += 10;
	};

	ninja.punch = otherNinja => {
		if (otherNinja instanceof Object) {
			otherNinja.health -= 5;
			console.log(`${otherNinja.name} was punched by ${ninja.name} and lost 5 Health!`);
		} else {
			console.log(`Not a ninja!`);
		}
	};

	ninja.kick = otherNinja => {
		if (otherNinja instanceof Object) {
			const kickValue = ninja.strength * 15;
			otherNinja.health -= kickValue;
			console.log(`${otherNinja.name} was kicked by ${ninja.name} and lost ${kickValue} health!`);
		} else {
			console.log(`Not a ninja!`);
		}
	};
	return ninja;
}

const blueNinja = new Ninja('Goemon');
const redNinja = new Ninja('Bill Gates');

redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
