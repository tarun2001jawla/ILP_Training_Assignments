// Class-based alternative for the vector object

class Vector {
    constructor(x, y) {
        this._x = x || 0;
        this._y = y || 0;
    }

    setX(x) {
        this._x = x;
    }

    setY(y) {
        this._y = y;
    }

    getX() {
        return this._x;
    }

    getY() {
        return this._y;
    }

    static create(x, y) {
        return new Vector(x, y);
    }
}


let vec = new Vector(3, 4);
console.log("X:", vec.getX()); // Output: X: 3
console.log("Y:", vec.getY()); // Output: Y: 4

