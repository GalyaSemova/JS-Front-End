function inventory(input) {
    let heroes = [];

    for (const line of input) {
        let[hero, level, items] = line.split(" / ");
        level = Number(level);
        heroes.push({hero, level, items});
        
    }
    let sortedHeroes = heroes.sort((heroA, heroB) => heroA.level - heroB.level);
    for (const {hero, level, items} of sortedHeroes) {
        console.log(`Hero: ${hero}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items}`);
        
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )

// output:
// Hero: Hes
// level => 1
// items => Desolator, Sentinel, Antara
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    )