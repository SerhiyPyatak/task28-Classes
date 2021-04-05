'use strict';
// ----------- Task 1 area ---------------------------
class Circle {
	constructor() {
		this.__radius = 0;
	}

	get getRadius() {
		return this.__radius;
	}

	set setRadius(radiusValue) {
		this.__radius = radiusValue;
	}

	get getDiameter() {
		return (2 * this.__radius);
	}

	getArea() {
		return (Math.PI * Math.pow(this.__radius, 2));
	}

	getLength() {
		return (2 * Math.PI * this.__radius);
	}
}

function exploreCircle() {
	let myCircle = new Circle();
	myCircle.setRadius = +prompt('Enter radius value please');
	alert(`*** Your circle investigation *** \n
	---> radius: ${myCircle.getRadius} \n
	---> diameter: ${myCircle.getDiameter} \n
	---> area: ${myCircle.getArea()} \n
	---> length: ${myCircle.getLength()}`);
}

//------------- Task 2 Area -----------------------
class Marker {
	constructor() {
		this.__color = 'black';
		this.__ink = 100;
	}

	get getColor() {
		return this.__color;
	}

	set setColor(color) {
		this.__color = color;
	}

	get getInk() {
		return this.__ink;
	}

	set setInk(amount) {
		this.__ink = amount;
	}

	print(userString) {
		const symbols = [];
		userString.split('').forEach(element => {
			if (element !== ' ') {
				this.setInk = this.getInk - .5;
			}
			if (this.getInk > 0) symbols.push(element);
		});
		return {
			printedString: symbols.join(''),
			inkRemainder: this.getInk,
		};
	}
}

let mySimpleMarker;
let myRenewableMarker;
let isSimpleMarkerCreated = false;
let isRenewableMarkerCreated = false;

function useSimpleMarker() {
	if (!isSimpleMarkerCreated) {
		mySimpleMarker = new Marker;
		mySimpleMarker.setColor = prompt('Enter marker color, please :)');
		isSimpleMarkerCreated = true;
	}
	let drawInput = prompt('Type string for whiteboard');
	let oWrite = mySimpleMarker.print(drawInput);
	let drawBox = document.createElement('p');
	drawBox.style.color = mySimpleMarker.getColor;
	drawBox.innerHTML = oWrite.printedString;
	document.getElementById('marker-whiteboard').appendChild(drawBox);
	
	alert(`Ink remainder in your simple marker is: ${oWrite.inkRemainder}%`);
}