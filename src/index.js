//  lodash/fp is the functional programming libary in lodash
import { compose, pipe } from 'lodash/fp';

let input = '  Java  ';

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();
const wrap = type => str => {
    console.log('wrapStr', '[' + str + ']')
    return `<${type}>${str}</${type}>`;
}
const transform = pipe(trim, toLowerCase, wrap('span'));

console.log("--:" + transform(input));


 const person = { name: "Mike"};

 