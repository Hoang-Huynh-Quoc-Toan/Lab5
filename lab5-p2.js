

class Retangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }

    perimeter () {
        let perimeter = new Retangle;
        return perimeter = (this.width + this.length)*2;
    }

    acreage () {
        let acreage = new Retangle;
        return acreage = this.width * this.length;
    }
}

let hcn = new Retangle(16, 20);

console.log("Chu vi của hình chữ nhật là:", hcn.perimeter());
console.log("Diện tích của hình chữ nhật là:", hcn.acreage());

