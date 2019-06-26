// Write your solution in this file!
// driver - object, key, value
// const obj = {foo: "bar"};
// const newObj = Object.assign({}, obj);
// const thirdOption = {...obj, name: "greg"}
let driver = {}


const updateDriverWithKeyAndValue = (driver, key, value ) => {
  return {...driver, [key]: value}
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value

   // debugger
   return driver
   console.log('hii');
}

//
const deleteFromDriverByKey = (driver,key) => {
  const newDriver = {...driver}
  delete newDriver[key]
  return newDriver
}



deleteFromDriverByKey
const destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key]
  return driver
}
