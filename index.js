// Write your solution in this file!

    let driver = {
        name: "Bob"
     };

    
 updateDriverWithKeyAndValue = (driver, key, value) => {
    const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver;

 }

  destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value; 
    return driver;
} 

    
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
  
    return driver;
  }



function deleteFromDriverByKey(driver, key) {
    // Alternate using ES6 Spread operators:
    // const newObj = { ...driver }
    const newObj = {... driver}
  
    delete newObj[key];
  
    return newObj;
  }
  

  
  function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
  
    return driver;
  }


