// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  debugger;
  const obj = {};
  obj[key] = value;
  return Object.assign({}, driver, obj);
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
