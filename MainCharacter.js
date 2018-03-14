function MainCharacter(posX, posY, display) {
    this.posX = posX;
    this.posY = posY;
    this.display = display;
    const initialMovementSpeed = 7;
    var movementSpeed = initialMovementSpeed;
    const movementMultiplier = 2;
    mainCharacter = new Character(posX, posY, display);

    const width = 50;
    const height = 50;

    const movementAfterMultiplier = movementSpeed * movementMultiplier;

    this.initialize = function () {
        if (this.display == true) {
            fill(255);
            ellipse(this.posX, this.posY, width, height); // should be the character itself
            this.keys();
        }
    }

    this.keys = function () {
        // remove else for multidirectional - diagonal movements
        if (keyIsDown(LEFT_ARROW)) {
            this.posX -= movementSpeed;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.posX += movementSpeed;
        } else if (keyIsDown(UP_ARROW)) {
            this.posY -= movementSpeed;
        } else if (keyIsDown(DOWN_ARROW)) {
            this.posY += movementSpeed;
        }

        if (keyIsDown(SHIFT)) {
            movementSpeed = movementAfterMultiplier;
        } else {
            movementSpeed = initialMovementSpeed;
        }




    }



}