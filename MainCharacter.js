function MainCharacter(posX, posY, display) {
    this.posX = posX;
    this.posY = posY;
    this.display = display;

    mainCharacter = new Character(posX, posY, display);

    function initialize() {
        if (this.display == true) {

        }
    }

    function keys() {
        if (key == 'Z') {
            console.log("You pressed Z!")
        }
    }



}