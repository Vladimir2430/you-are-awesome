const createEnumerableProperty = (property) =>  property;

const createNotEnumerableProperty = (property) => {
  Object.defineProperty(Object.prototype, property, {
    enumerable: false,
    value: 'value'
  });
  return property;
};

const createProtoMagicObject = () => {
  let noProto = new Function();
  noProto.prototype = noProto.__proto__;
  return noProto;
};

let count = 0;
const incrementor = () => {
  count++;
  Function.prototype.valueOf = () => count;
  return incrementor;
};

let sum = 0;
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
        next: () => this.next()
      }
    }
  }
};

const returnBackInSecond = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result), 1000);
  });
};

const getDeepPropertiesCount = (obj) => {
  let arr = Object.getOwnPropertyNames(obj).length;
  Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
    if (Object.getOwnPropertyNames(obj[val]).length > 0) {
      arr += getDeepPropertiesCount(obj[val]);
    }
  })
  return arr;
};

const createSerializedObject = () => null;

const toBuffer = () => {};

const sortByProto = (obj) => {
  let first = obj.map(function(value, index) {
    let count = 0;
    while (value = value.__proto__) {
      count += 1;
    }
    return [count, obj[index]];
  });

  let second = first.sort((a, b) => a[0] - b[0]);

  return second.map(([value, index]) => index);
};

exports.createEnumerableProperty    = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject      = createProtoMagicObject;
exports.incrementor                 = incrementor;
exports.asyncIncrementor            = asyncIncrementor;
exports.createIncrementer           = createIncrementer;
exports.returnBackInSecond          = returnBackInSecond;
exports.getDeepPropertiesCount      = getDeepPropertiesCount;
exports.createSerializedObject      = createSerializedObject;
exports.sortByProto                 = sortByProto;
