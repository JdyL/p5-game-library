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