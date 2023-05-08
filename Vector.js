class Vector {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    length() {
        return Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y, 2))
    }

    subtract(vector) {
        this.x-=vector.x;
        this.y-=vector.y
        return this;
    }

    multiply(scalar) {
        this.x*=scalar;
        this.y*=scalar;
        return this;
    }

    add(vector) {
        this.x+=vector.x;
        this.y+=vector.y
        return this;
    }

    clone() {
        return new Vector(this.x, this.y);
    }
}