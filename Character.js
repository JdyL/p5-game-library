function Character(posX, posY, display) {
    this.posX = posX;
    this.posY = posY;
    this.display = display;

    this.initialize = function () {

    }


    function hide() {
        this.display = false;
    }

    function show() {
        this.display = true;
    }

}