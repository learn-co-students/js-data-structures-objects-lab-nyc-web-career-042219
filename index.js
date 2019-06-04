// Write your solution in this file!

//  defines a `driver` driver
let driver = {};
// returns an driver with the original key value pairs and the new key value pair
//  it does not modify the original driver, but rather returns a clone with
// the new data
function updateDriverWithKeyAndValue(driver, key, value) {
    let newDriver = {...driver};
    newDriver[key] = value;
    return newDriver;
}

// updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

// deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
function deleteFromDriverByKey(driver, key) {
    let newDriver = {...driver};
     delete newDriver[key];
     return newDriver;
}

// returns driver without the delete key/value pair:
// modifies the original driver
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}
