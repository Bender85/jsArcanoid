var grid = {
    nodes: [],

    add: function (x, y, w, h, c) {
        var tmp = new Enemy(x, y, w, h, c);
        this.nodes.push(tmp);
    },
    destroy: function (id) {
        this.nodes.splice(id, 1);
    },
    generate: function (count, w, h, color) {
        var dW = 5,
            dX = dW, dY = dW,
            dCountX = Math.ceil(width / (w + dW)) - 1,
            dAllw = Math.ceil((width - (w + dW) * dCountX) / 2);
        dY = dAllw;
        for (var i = 0; i < count; i += 1) {
            for (var j = 0; j < dCountX; j += 1) {
                if (j == 0) {
                    dX += Math.ceil(dAllw - dW / 2);
                }
                this.add(dX, dY, w, h, color);
                dX += w + dW;
            }
            dY += h + dW;
            dX = dW;
        }
    },
    draw: function () {
        for (en  in this.nodes) {
            this.nodes[en].draw();
        }
    }
};

var Enemy = function (x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = color;
};

Enemy.prototype.draw = function () {
    drawRect(this.x, this.y, this.width, this.height, this.color)
};