const driver = {}

const updateDriverWithKeyAndValue = function(driver, key, value){
  const newDriver = Object.assign({}, driver);
  newDriver[key] = value;
  return newDriver
}

const destructivelyUpdateDriverWithKeyAndValue = function(driver, key, value){
  driver[key] = value;
  return driver
}

const deleteFromDriverByKey = function(driver, key, value){
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver
}

const destructivelyDeleteFromDriverByKey = function(driver, key, value){
  delete driver[key];
  return driver
}
