// var state_list = [];
// var npc_list = [];
// var dialogue_counter = 0;

// var current_object_can_interact = false;
// var current_object_name = "";
// var current_object_event = "";

// var radius = 50;

var current_map = "spawn_map";



function preload() {
    // state_list.push(new Dialogue());

    // npc_list.push(new NPC("test", 100, 100, radius));
    maps = new Maps();
}

function setup() {
    // state_list[0].createDialogue("test", "", ["test1", "test2", "test3"]);
}

function draw() {
    createCanvas(400, 400);
    background(200);
    fill(100);

    //console.log(maps.get_map("spawn_map"));
    get_current_map = maps.get_map(current_map);
    ellipse(get_current_map.mainCharacterSpawn.position_x, 200, 20, 20);

    // state_list[0].initialize();
    // npc_list[0].initialize();
    // npc_list[0].show();

    // //if state is true for a criteria. e.g interact with specific object
    // //state changes to specified state

}

function spawnMainCharacter() {
    // make character
    //character.initialize
}

function spawnNPC() {

}

function mapInitialize() {

}

function updateCurrentMap(new_map) {
    current_map = new_map;
}





function resetDialogueCounter() {
    dialogue_counter = 0;
}

function keyReleased() {

    if (key == "Z" && current_object_can_interact == true) {
        console.log("works");
        state_list[0].displayDialogue(current_object_name, current_object_event, dialogue_counter);

    }
}





function Event(obj) {
    this.obj = obj;

}

// function Maps() {
//     array_of_maps = [];
//     map = {
//         name: "",
//         npcs: []
//     };

//     function addMap(map) {
//         array_of_maps.push(map);
//     }

//     function getListOfMaps() {
//         return array_of_maps;
//     }
// }



// event manage
// maps


// array of events
// when do something that triggers event, run that specific event function which also resets the other values
// also have a function that is inverse of the triggered event to put everything back together


// a Game has Maps - each Map has its own: NPCs which contains different Dialogue as per Event Storyline
// NPC class should handle key presses within a radius

//Game Class

//start with MAP01

// MapManager Class
// array of Maps with different settings
// Create Character
// Also create requirements for map changing, e.g. character goes to a home etc. load the other map

// Character Class


// Map Class
// Create NPCS


//NPC Class









// var show = true;
// var showDiag = false;
// var showReleasedButton = false;
// var counter = 0;

// function preload() {
//     otherClass = new OtherClass();
//     diag = new Dialogue();
// }

// function setup() {
//     // put setup code here
//     clear();
//     createCanvas(500, 500);
//     background(123);
//     // put drawing code here
//     ellipse(10, 10, 10, 10);

// }

// function draw() {
//     sceneChange();
//     if (key == '1') {
//         otherClass.setup();
//         show = false;

//     }

//     if (key == '2') {

//         setup();
//         show = true;

//     }

//     if (key == '3') {
//         show = false;
//         showDiag = true;
//     }

//     if (key == '4') {
//         show = false;
//         showDiag = false;
//         showReleasedButton = true;
//     }

//     if (showDiag) {
//         // diag = new Dialogue();
//         diag.setup();
//         show = false;
//     }

//     if (showReleasedButton) {
//         rel = new releasedButton();
//     }

// }

// function keyReleased() {
//     if (key == 'Z' && showDiag) {
//         counter++;
//         console.log("Z: " + counter);
//     }

// }

// function sceneChange() {
//     if (show == true) {
//         ellipse(10, 10, 10, 10);
//     }
// }

// function OtherClass() {
//     this.setup = function() {
//         clear();
//         this.draw();
//     }
//     this.draw = function draw() {
//         // background(0);
//         ellipse(mouseX, mouseY, 100, 100);
//         // loop();
//     }
// };

// // function setup() {
// //   background(123);
// //   ellipse(20,20,20,20);
// // }

// function Dialogue() {
//     var counter = 0;
//     this.setup = function() {
//         clear();
//         this.draw();

//     };
//     this.draw = function() {
//         background(100);
//         fill(255);
//         rect(mouseX, mouseY, 300, 300);

//     };

//     function keyReleased() {

//         counter++;
//         console.log("z: " + counter);

//     }
// }

// function releasedButton() {
//     function setup() {
//         clear();
//     }

//     function draw() {
//         ellipse(mouseX, mouseY, 20, 20);
//     }


// }