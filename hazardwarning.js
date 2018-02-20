'use strict';

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    if (warningCounter === 1) {
      console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else {
      console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
		
  };
} 

// // bonus alternative ternary:
// console.log(`The ${typeOfWarning} has triggered ${warningCounter} ${warningCounter === 1 ? 'time' : 'times'}.`);

const rocksWarning1 = hazardWarningCreator('Rocks on the Road');
rocksWarning1('place');
rocksWarning1('street');
rocksWarning1('road');
