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
// console.log(newObj.toJS());
// console.log(newObj !== obj); //true : 새로운 객체를 반환한다.

// 4. 값을 읽을 때는 get
let getObj = obj.get('foo'); // 객체는 key 값으로 읽음
let getArr = arr.get(0).toJS();

// console.log(getObj);
// console.log(getArr);

// 5. 읽은다음에 설정 할 때는 update
// 두번째 파라미터로는 updater 함수가 들어감 

newObj = newObj.update('foo', value => value + 1);
// console.log(newObj.toJS());

// 6. 내부에 있는걸 ~ 할땐 In 을 붙인다
newObj = newObj.setIn(['inner','bar'],20);
// console.log(newObj.toJS());

let newArr = arr.setIn([0,'foo'],77);
// console.log(newArr.toJS());

// 8. List 내장함수는 배열이랑 비슷하다
newArr = arr.push(Map({qaz : 3}));
// console.log(newArr.toJS());

newArr = arr.filter(item => item.get('foo') === 1);
// console.log(newArr.toJS());

// 9. delete 로 key 를 지울 수 있음
// console.log(newObj.toJS());
// console.log('delete 함수실행');
newObj = newObj.delete('foo');
// console.log(newObj.toJS());

// console.log(newArr.toJS());
// console.log('delete 함수실행');
newArr = newArr.delete(0);
// console.log(newArr.toJS());


ReactDOM.render(<App />, document.getElementById('root'));

