// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const {PI, E, SQRT} = Math;

// Somewhere in a React app.

// const {Component, Fragment, useState} = require('react');
// useState();

const circle ={
    label:'circleX',
    radius : 2,
};

// const circleArea = ({radius}) =>
//     (PI* radius*radius).toFixed(2);

// console.log(
//     circleArea(circle)
// );

// const circleArea = ({radius},{precision = 2} = {} )  =>
//     (PI* radius*radius).toFixed(precision);

// console.log(
//     circleArea(circle,{precision :5})
// );

// console.log(
//     circleArea(circle)
// );

// Destructuring Arrays

const[first, second,,fourth]= [10,20,30,40];
console.log(fourth);

// const [value, setValue] = useState(initialValue);

// Rest Operator
const [first, ...restOfItems] = [10,20,30,40];

const data = {
        temp1 : '001',
        temp2 : '002',
        firstName : 'John',
        lastName : 'Doe',

};

const {temp1, temp2, ...person} = data;

//Spread Operator

const newArray = [...restOfItems];

const newObject = {
    ...person
};