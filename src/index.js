import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Map, List} from 'immutable';

// 1. 객체는 Map
const obj = Map({
    foo: 1,
    inner: Map({
        bar: 10
    })
});

// console.log(obj.toJS());

// 2. 배열은 List
const arr = List([
    Map({foo : 1}),
    Map({bar : 2})
])

// console.log(arr.toJS());

// 3. 설정할땐 set
let newObj = obj.set('foo', 5);
console.log(newObj.toJS());
console.log(newObj !== obj); //true : 새로운 객체를 반환한다.

ReactDOM.render(<App />, document.getElementById('root'));

