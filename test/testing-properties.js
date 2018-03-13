let array_of_maps = [];
const spawn_map = {
    name: "spawn_map",
    mainCharacterSpawn: {
        position_x: 500,
        position_y: 500
    },
    npc: {
        beginner_guide: {
            name: "beginner_guide",
            position_x: 250,
            position_y: 250,
            display: true,

        },
        shopkeeper: {
            name: "shopkeeper",
            position_x: 300,
            position_y: 300,
            display: true,
        }
    }
}

array_of_maps.push(spawn_map);

for (let i = 0; i < array_of_maps.length; i++) {
    console.log(array_of_maps[i]);
}