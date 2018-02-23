// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {return property;};

const createNotEnumerableProperty = (property) => {
  Object.defineProperty(Object.prototype, property, {
    enumerable: false,
    value: 'value'
});
  return property;
};

const createProtoMagicObject = () => {
  var noProto = new Function();
  noProto.prototype = noProto.__proto__;
  return noProto;
};

const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
