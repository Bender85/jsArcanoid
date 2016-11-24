var player = {
    level: 1,
    hp: 5,
    x: 0,
    y: 455,
    width: 100,
    height: 20,
    color: 'yellow',
    speed: 5 ,
    draw: function () {
        drawRect(this.x, this.y, this.width, this.height, this.color);
    },
    move: function () {
        if (isKeyDown('LEFT')) {
            this.x -= this.speed;
        };
        if (isKeyDown('RIGHT')) {
            this.x += this.speed;
        };
    },
    init: function (x, w, color) {
        this.x = x; 
        this.width = w;
        this.color = color;
    }
};