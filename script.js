function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

class Shape { //parent class
    constructor() {
        this.name = name;
        this.div = document.createElement('div'); //create div to hold shape (?)
        this.div.classList.add('Shape'); //assigns CSS class
        document.getElementById('myCanvas').appendChild(this.div); //shape will append to the shape canvas
        this.div.style.left = randomVal(0, 600) + 'px';
        this.div.style.top = randomVal(0, 600) + 'px';
        this.div.style.position = "absolute";


        this.div.addEventListener('click', () => {
            this.describe();
        })

        this.div.addEventListener('dblclick', () => {
            this.div.remove();
        });

    }
    describe() {
        document.getElementById("myShapeName").textContent = this.name;
        document.getElementById("myShapeWidth").textContent = this.width;
        document.getElementById("myShapeHeight").textContent = this.height;
        document.getElementById("myShapeRadius").textContent = this.radius;
        document.getElementById("myShapeArea").textContent = `${this.area()}`;
        document.getElementById("myShapePerimeter").textContent = `${this.perimeter()}`;
    };
}

document.getElementById("createRectangle").addEventListener('click', function (e) {
    e.preventDefault();
    let width = document.getElementById("recWidth").value;
    let height = document.getElementById("recHeight").value;
    new Rectangle(width, height);
})
document.getElementById("createCircle").addEventListener('click', function (e) {
    e.preventDefault();
    let radius = document.getElementById("circleRadius").value;
    new Circle(radius);
})
document.getElementById("createSquare").addEventListener('click', function (e) {
    e.preventDefault();
    let sideLength = document.getElementById("squareSideLength").value;
    new Square(sideLength);
})
document.getElementById("createTriangle").addEventListener('click', function (e) {
    e.preventDefault();
    let height = document.getElementById("triangleHeight").value;
    if (height > 500) {
        alert('That Triangle iz too big!')
        return
    } else { new Triangle(height) };
})

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.name = "Rectangle";
        this.div.id = "rectangleShape";
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`
        this.div.style.backgroundColor = "green";
    }
    area() {
        return this.width * this.height
    }
    perimeter() {
        return (this.width * 2) + (this.height * 2)
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
        this.div.style.width = `${this.sideLength}px`;
        this.div.style.height = `${this.sideLength}px`;
        this.width = this.sideLength + 'px';
        this.height = this.sideLength + 'px';
        this.name = "Square";
        this.div.id = "squareShape";
        this.div.style.backgroundColor = "red";
    }
    area() {
        return this.sideLength * this.sideLength
    }
    perimeter() {
        return (this.sideLength * 2) + (this.sideLength * 2)
    }
}


class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.div.style.width = `${this.radius}px`;
        this.div.style.height = `${this.radius}px`;
        this.name = "Circle";
        this.div.id = "circleShape";
        this.div.style.backgroundColor = "purple";
        this.div.style.borderRadius = "50%";

    }
    area() {
        return Math.PI * this.radius * this.radius
    }
    perimeter() {
        return 2 * Math.PI * this.radius
    }
}

class Triangle extends Shape {
    constructor(height) {
        super();
        this.height = height; //height/width/base will all be the same
        this.name = "Triangle";
        this.div.id = "triangleShape";
        this.div.style.height = 0;
        this.div.style.width = 0;
        this.div.style.borderWidth = `0 ${this.height}px ${this.height}px ${this.height}px`;
        this.div.style.borderStyle = "solid";
        this.div.style.borderColor = "transparent transparent yellow transparent";
        console.log(height)
    }
    area() {
        return 0.5 * this.height * this.height
    }
    perimeter() {
        return 2 * this.height + (Math.sqrt(2)) * this.height
    }
}

