// Write your solution in this file!
let driver = {name: "idk"}

// function updateDriverWithKeyAndValue(driver, key, value){
//     const newDriver = {...driver}
//     newDriver[key] = value
//     return newDriver
// }

// ^^ works the same as vvv

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]: value})
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key){
const newDriver = Object.assign({}, driver)
    delete newDriver[key]
    return newDriver
}

function  destructivelyDeleteFromDriverByKey(driver, key){
    Object.assign({}, driver);
    delete driver[key];
    return driver
}


///    const newDriver = delete driver.key
//return newDriver
