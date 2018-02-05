function ninjaConstructor(name) {
    const ninja = {};

    ninja.name = name;
    ninja.speed = 3;
    ninja.strength = 3;
    ninja.health = 100;

    ninja.sayName = () => {
        console.log(ninja.name);
    }

    ninja.showStats = () => {
        console.log(`Name: ${ninja.name}, Health: ${ninja.health}, Speed: ${ninja.speed}, Strength: ${ninja.strength}`);
    }

    ninja.drinkSake = () => {
        ninja.health += 10;
    }
    return ninja;
}

const ninja1 = new ninjaConstructor("Danny");
ninja1.drinkSake();
ninja1.showStats();