// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  const newdriver = { ...driver };

 newdriver[key] = value;

 return newdriver;

};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
};

function deleteFromDriverByKey(driver, key){
  const new_driver = Object.assign({}, driver[key]);
  delete new_driver.key;
  return new_driver;
};

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
