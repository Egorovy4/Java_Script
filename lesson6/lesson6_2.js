"use strict";

function Robot() {
}
Robot.prototype.work = function() {
	console.log('I\'m Robot. I just work !');
};

function CoffeeRobot() {
}
CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = CoffeeRobot;
CoffeeRobot.prototype.work = function() {
	console.log('I\'m CoffeeRobot. I just make coffee !');
};

function RobotDancer() {
}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
RobotDancer.prototype.work = function() {
	console.log('I\'m RobotDancer. I just dance !');
};

function RobotCoocker() {
}
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;
RobotCoocker.prototype.work = function() {
	console.log('I\'m RobotDancer. I just coock !');
};

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
