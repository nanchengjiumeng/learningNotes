// import {PatchFlags , PatchFlagNames} from './patchFlags'
// console.log(PatchFlags , PatchFlagNames);
// import { globalsWhitelist } from './globalsWhitelist'

// console.log(globalsWhitelist);


// const EMPTY_OBJ:{ readonly [key: string]: any } = __DEV__ 
//     ? Object.freeze({})
//     : {}

const EMPTY_ARR: [] = []

const NOOP = () => {}

const isOn = (key: string) => key[0] === 'o' && key[1] === 'n'

const extend = <T extends object, U extends object>(
    a: T,
    b: U
): T & U =>{
    for(const key in b){
        ;(a as any)[key] = b[key]
    }
    return a as any
}

const hasOwnProperty = Object.prototype.hasOwnProperty

const hasOwn = (
    val: object,
    key: string | symbol,
    ): key is keyof typeof val => hasOwnProperty.call(val, key)


const isArray = Array.isArray
const isFunction = (val: any): val is Function => 
    typeof val === 'function'

const isString = (val: any): val is string => typeof val === 'string'
const isSymbol = (val: any): val is symbol => typeof val === 'symbol'
const isObject = (val: any): val is Record<any, any> =>
    val !== null && typeof val ==='object'
const objectToString = Object.prototype.toString
const toTypeString = (val: unknown): string => 
    objectToString.call(val)
const isPlainObject = (val: any): val is object =>
    toTypeString(val) === '[object object]'
const vnodeHooksRE = /^vnode/
const camelizeRE = /-(\w)/g
const camelize = (str: string): string =>
    str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase(): ''))
const hyphenateRE = /\B[A-Z]/g
const hyphenate = (str: string): string =>
    str.replace(hyphenateRE, '-$1').toLowerCase()
const capitalize = (str: string): string => 
    str.charAt(0).toUpperCase() + str.slice(1)
