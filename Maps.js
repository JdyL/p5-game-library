function Maps() {
    var array_of_maps = [];
    create_maps();

    for (let i = 0; i < array_of_maps.length; i++) {
        console.log(array_of_maps[i]);
    }

    //todo: add map with template

    this.get_map = function(name) {
        for (let i = 0; i < array_of_maps.length; i++) {
            if (array_of_maps[i].name == name) {
                return array_of_maps[i];
            }
        }
    };

    function create_maps() {
        const spawn_map = {
            name: "spawn_map",
            mainCharacterSpawn: {
                position_x: 100,
                position_y: 100
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
    }

}