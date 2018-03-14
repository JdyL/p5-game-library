function MainCharacter(posX, posY, display) {
    this.posX = posX;
    this.posY = posY;
    this.display = display;
    const movementSpeed = 20;
    mainCharacter = new Character(posX, posY, display);

    this.initialize = function () {
        if (this.display == true) {
            fill(255);
            console.log(this.posX, this.posY)
            ellipse(this.posX, this.posY, 200, 200);
            this.keys();
        }
    }

    this.keys = function () {
        // if (key == 'Z') {
        //     console.log("You pressed Z!")
        // }

        if (keyIsDown(LEFT_ARROW)) {
            console.log("this works");

        }

    }

    function update_pos_X() {
        this.posX += 20;
    }

    function update_pos_Y() {
        this.posX += 20;
    }



}