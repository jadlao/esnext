(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        main: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/main.js", "vendors~main" ]);
    return checkDeferredModules();
})({
    "./assets/js/main.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ \"./node_modules/util/util.js\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n // // Promises\n// // get product\n// // get price\n// // print to screen the price\n// var products = [\n// \t{\n// \t\tid: 1,\n// \t\ttitle: 'Sneakers',\n// \t\tprice: 300\n// \t}\n// ];\n// const getProducts = new Promise((resolve, reject) => {\n// \tsetTimeout(() => {\n// \t\tif (products.length >= 1) {\n// \t\t\tresolve(products);\n// \t\t} else {\n// \t\t\treject('Error: there is no product available');\n// \t\t}\n// \t}, 2000);\n// });\n// getProducts\n// \t.then(products => {\n// \t\tconsole.log(products);\n// \t\treturn products[0];\n// \t})\n// \t.then(products => {\n// \t\tconsole.log(products);\n// \t\treturn products.price;\n// \t})\n// \t.then(price => {\n// \t\tconsole.log(price);\n// \t\treturn price;\n// \t})\n// \t.catch(error => {\n// \t\tconsole.log(error);\n// \t});\n// // ES7\n// Includes\n// const array = [1, 2, 3, 4, 5, 6];\n// console.log(array.includes(7)); // returns false\n// if (array.includes(6)) {\n// \tconsole.log('yes we do');\n// } else {\n// \tconsole.log('sorry not here');\n// }\n// Exponentiation infix\n// console.log(2 ** 4);\n// ES8 / ES2017\n// Object.values\n// const user = {\n// \tid: 345,\n// \tname: 'joe',\n// \tage: 30,\n// \tlocation: 'NY'\n// };\n// console.log(Object.values(user));\n// console.table(Object.values(user));\n// // Object.entries\n// console.table(Object.entries(user));\n// for (let [key, value] of Object.entries(user)) {\n// \tconsole.log(`key: ${key} value: ${value}`);\n// }\n// string padding\n// const letter = 'A'\n// console.log(letter.padStart(10, '*'))\n// Object.getOwnPropertyDescriptors\n// var product = {\n// \ttitle: 'yeezy',\n// \tprice: 360,\n// \tset discount(x) {\n// \t\tthis.d = x;\n// \t},\n// \tget discount() {\n// \t\treturn this.d;\n// \t}\n// };\n// var product2 = Object.defineProperties(\n// \t{},\n// \tObject.getOwnPropertyDescriptors(product)\n// );\n// console.log(product2);\n// Trailing commas\n// const printUser = function(name, age) {\n// \tconsole.log(`${name} ${age}`);\n// };\n// printUser('joe', 30);\n// Async await***\n\nconst getUser = fname => {\n  var user = {\n    id: 3,\n    fname: 'Jane'\n  };\n  return new Promise((resolve, reject) => {\n    console.log('getting user');\n    setTimeout(() => {\n      if (fname == user.fname) {\n        resolve(user);\n      } else {\n        reject('error');\n      }\n    }, 2000);\n  });\n};\n\nconst getTweet = id => {\n  var tweet = {\n    user_id: 6,\n    post: 'Love star wars'\n  };\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('getting tweet');\n\n      if (tweet.user_id === id) {\n        resolve(tweet);\n      } else {\n        reject('error no tweets');\n      }\n    }, 2000);\n  });\n};\n\nconst printUserTweet =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(function* (fname) {\n    try {\n      const user = yield getUser(fname); // waits for promise to resolve and then assigns to variable\n\n      const tweet = yield getTweet(user.id);\n      console.log(`${user.fname} tweeted ${tweet.post}`);\n      return `${user.fname} tweeted ${tweet.post}`;\n    } catch (error) {\n      console.log(`error: ${error}`);\n    }\n  });\n\n  return function printUserTweet(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nprintUserTweet('Jane'); // ES9 / 2018\n// Rest properties for objects\n// let user = {\n// \tfname: 'Joe',\n// \tlname: 'Santos',\n// \tage: 30,\n// \tphone: '718-294-8978'\n// };\n// let { fname, lname, ...others } = user; // destructuring with spread operator\n// console.log(`${fname} ${lname}`);\n// console.log(others); // rest of the properties in object\n// spread properties for objects\n// let car = {\n// \ttitle: 'benz',\n// \tprice: 100000,\n// \tcountry: 'germany'\n// };\n// const newObject = {\n// \t...user,\n// \t...car\n// };\n// console.log(newObject);\n// Asynchronous iteration - loop over bunch of promises in order\n// const steps = [\n// \tnew Promise(resolve => resolve('We wake up')),\n// \tnew Promise(resolve => resolve('Eat breakfast')),\n// \tnew Promise(resolve => resolve('Code'))\n// ];\n// async function runSteps() {\n// \tfor await (const step of steps) {\n// \t\tconsole.log(step);\n// \t}\n// }\n// runSteps();\n// ES10 / 2019\n// Array.flat\n// const names = [['Joe', 'Billy'], ['cindy', 'joe', [23, 4, 56]]];\n// console.log(names.flat(3)); // Infinity\n// Array.flatMap\n// const names = ['Joe is at the store', 'Billy is programming'];\n// let newArray = names.flatMap(value => value.split(' '));\n// console.log(names);\n// Trim start and trim end\n// const user = '       Joe';\n// console.log(user.trimStart()); // removes white space at start\n// functionToString - prints function as a string\n// const printName = () => {\n// \tconsole.log('joe');\n// };\n// console.log(printName.toString());\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});