function NPC(name, x, y, radius, dialogue) {
    this.x = x; // spawn position
    this.y = y;
    this.name = name;
    this.event = "";
    this.can_interact = false; // if character is within the same space as NPC
    this.display = false;





    this.defaultRadius(radius);

    this.area_of_focus = {
        min_x: this.x - this.radius,
        min_y: this.y - this.radius,
        max_x: this.x + this.radius,
        max_y: this.y + this.radius
    };

    this.initialize = function(character) {
        if (this.display) {
            this.spr = rect(this.x, this.y, 100, 100);
        }

        if (this.withinInteractionSpace(character.x, character.y)) {
            // this.sendObjectDetailsGlobal();

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
    };

    this.defaultRadius = function(radius) {
        if (radius == null || radius == undefined) {
            this.radius = 50;
        } else {
            this.radius = radius;
        }
    };




}