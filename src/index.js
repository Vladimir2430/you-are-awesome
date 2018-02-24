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

var count=0;
const incrementor = () => {
  count++;
  Function.prototype.valueOf = function () {
      return count;
  }
  return incrementor;
};

var sum=0;
const asyncIncrementor = () => {
  return new Promise((resolve, reject) => {
    sum++;
    return resolve(sum);
    })
};

const createIncrementer = () => {
  return {
    iterator: 1,
    next() {
      return {value: this.iterator++}
    },
    [Symbol.iterator]: function() {
      return {
        next: () => {
          return this.next()
        }
      }
    }
  }
};

// return same argument not earlier than in one second, and not later, than in two

const returnBackInSecond = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result), 1000);
  });
};

const getDeepPropertiesCount = (obj) => {
  var arr=Object.getOwnPropertyNames(obj).length;
  Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
    if (Object.getOwnPropertyNames(obj[val]).length>0) {
      arr+=getDeepPropertiesCount(obj[val]);
    }
  })
  return arr;
};

const createSerializedObject = () => {return null;};

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
