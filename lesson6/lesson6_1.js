"use strict";

function Robot() {
	var self = this;

	this.work = function() {
		console.log('I\'m Robot. I just work !');
	}
}

function CoffeeRobot() {
	Robot.call(this);
	var self = this;

	this.work = function() {
		console.log('I\'m CoffeeRobot. I just make coffee !');
	}
}

function RobotDancer() {
	Robot.call(this);
	var self = this;

	this.work = function() {
		console.log('I\'m RobotDancer. I just dance !');
	}
}

function RobotCoocker() {
	Robot.call(this);
	var self = this;

	this.work = function() {
		console.log('I\'m RobotDancer. I just coock !');
	}
}

var robot = new Robot();
var coffeeRobot = new CoffeeRobot();
var robotDancer = new RobotDancer();
var robotCoocker = new RobotCoocker();

robot.work();
coffeeRobot.work();
robotDancer.work();
robotCoocker.work();

console.log('----------------------------');

var myArray = [ robot, coffeeRobot, robotDancer, robotCoocker ];

for (var i = 0; i < myArray.length; i++) {
	myArray[i].work();
}
