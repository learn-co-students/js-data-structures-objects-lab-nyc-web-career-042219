const driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, {[key]: value});
    //new [key]: value at same key will override original and update
};


function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
};

function deleteFromDriverByKey(obj, key){
    let newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj;
;}

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key];
    return obj;
};