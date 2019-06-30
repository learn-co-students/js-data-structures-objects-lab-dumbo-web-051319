// Write your solution in this file!

// Define a 'driver' variable & assign it to an 'object'
// Hint: Various UPDATES will be applied to this variable

let driver = {};

//Function 1: should take in three arguments
// Hint: Check JS Fundamentals: Object. Section "Use Convenience Methods Like Object.assign()" to follow template
  //function nondestructivelyUpdateObject(obj, key, value) {
  // const newObj = { ...obj };
  // newObj[key] = value;
  // return newObj;
function  updateDriverWithKeyAndValue(driver, key, value){
     const newDriver = {...driver};
     newDriver[key] = value;
     return newDriver;
}

//Function 2: should mutate the driver parameter passed in
  // function destructivelyUpdateObject (obj, key, value) {
  //obj[key] = value;
  //return obj;

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

//Function 3: should delete driver
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
// const wednesdayMenu = {
//   cheesePlate: {
//     soft: 'Brie',
//     semiSoft: 'Fontina',
//     hard: 'Provolone'
//   },
//   fries: 'Sweet potato',
//   salad: 'Southwestern'
// };
//
// delete wednesdayMenu.salad;


function deleteFromDriverByKey(driver, key, value){
     const newDriver = {...driver}
     newDriver[key] = value;

     delete newDriver.key
     return newDriver;
}

//Function 4: should work like deleteFromDriverByKey BUT should mutate the driver passed in


function destructivelyDeleteFromDriverByKey(driver, key, value){
  driver[key] = value;
  delete driver.key
  return driver;
}
