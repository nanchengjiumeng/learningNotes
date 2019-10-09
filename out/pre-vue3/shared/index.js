// import {PatchFlags , PatchFlagNames} from './patchFlags'
// console.log(PatchFlags , PatchFlagNames);
// import { globalsWhitelist } from './globalsWhitelist'
// console.log(globalsWhitelist);
// const EMPTY_OBJ:{ readonly [key: string]: any } = __DEV__ 
//     ? Object.freeze({})
//     : {}
const EMPTY_ARR = [];
const NOOP = () => { };
const isOn = (key) => key[0] === 'o' && key[1] === 'n';
const extend = (a, b) => {
    for (const key in b) {
        ;
        a[key] = b[key];
    }
    return a;
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
console.log(isFunction('123'));
//# sourceMappingURL=index.js.map