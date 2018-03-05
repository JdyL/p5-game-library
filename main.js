var state_list = [];
var npc_list = [];
var dialogue_counter = 0;

var current_object_can_interact = false;
var current_object_name = "";
var current_object_event = "";

var radius = 50;


function preload() {
    state_list.push(new Dialogue());

    npc_list.push(new NPC("test", 100, 100, radius));
}

function setup() {
    state_list[0].createDialogue("test", "", ["test1", "test2", "test3"]);
}

function draw() {
    createCanvas(400, 400);
    background(200);
    fill(100);
    state_list[0].initialize();
    npc_list[0].initialize();
    npc_list[0].show();

    //if state is true for a criteria. e.g interact with specific object
    //state changes to specified state

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

function NPC(name, x, y, radius) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.event = "";
    this.can_interact = false;
    this.display = false;

    this.radius = radius,

        this.area_of_focus = {

            min_x: this.x - this.radius,
            min_y: this.y - this.radius,
            max_x: this.x + this.radius,
            max_y: this.y + this.radius
        }



    this.initialize = function() {
        if (this.display) {
            this.spr = rect(this.x, this.y, 100, 100);
        }

        if (this.withinInteractionSpace(mouseX, mouseY)) {
            this.sendObjectDetailsGlobal();
            console.log("in space")
        } else {
            current_object_can_interact = false;
            console.log("not in space")
        }
        // if within x,y, 
        //this name and this event -> global variable
        //return can_interact = true
    };

    this.show = function() {
        this.display = true;
    };

    this.sendObjectDetailsGlobal = function() {
        current_object_can_interact = true;
        current_object_name = this.name;
        current_object_event = this.event;
    };

    this.withinInteractionSpace = function(x, y) {
        if (x > this.area_of_focus.min_x && x < this.area_of_focus.max_x && y > this.area_of_focus.min_y && y < this.area_of_focus.max_y) {
            return true;
        } else {
            return false;
        }
    }




}

function Dialogue() {
    this.name = "Dialogue";
    this.display = false;
    var dialogue_array = [];
    var dialogue_current_element = "";

    this.initialize = function() {

        if (this.display) {
            pauseAllButThis(); //pause everything
            circle = ellipse(100, 100, 100, 100);
            showText(dialogue_current_element);
        } else {

        }
    }

    this.createDialogue = function(object_name, event_name, array) {
        var new_dialogue = {
            name: object_name,
            event: event_name,
            object: array
        }
        dialogue_array.push(new_dialogue);
    }

    function getDialogue(object_name) {
        for (var i = 0; i < dialogue_array.length; i++) {
            if (dialogue_array[i].name == object_name) {
                return dialogue_array[i].object;
            }
        }
        console.log("Cannot find event: " + object_name);
        return false;
    }

    function pauseAllButThis() {
        //TODO
    }

    this.visible = function() {
        this.display = true;
    }

    this.stop = function() {
        this.hide();
        resetDialogueCounter();
    }

    this.hide = function() {
        this.display = false;
    }

    this.displayDialogue = function(object_name, event_name, number) {
        pauseAllButThis(); //pause everything on screen
        this.visible();

        if (getDialogue(object_name)[number] == undefined) {
            this.stop();
        } else {

            console.log(getDialogue(object_name)[number]);
            dialogue_current_element = getDialogue(object_name)[number];
            dialogue_counter++;
        }
    }

    function showText(string) {
        textSize(32);
        show_text = text(string, 10, 10);
        fill(0, 102, 153);
    }
}

function Event(obj) {
    this.obj = obj;

}

function Maps() {
    array_of_maps = [];
    map = {
        name: "",
        npcs: []
    };

    function addMap(map) {
        array_of_maps.push(map);
    }

    function getListOfMaps() {
        return array_of_maps;
    }
}



// event manage
// maps


// array of events
// when do something that triggers event, run that specific event function which also resets the other values
// also have a function that is inverse of the triggered event to put everything back together


// a Game has Maps - each Map has its own: NPCs which contains different Dialogue as per Event Storyline
// NPC class should handle key presses within a radius









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