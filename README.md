# Immutable

>create-react-app immutable-study

```javascript
yarn add immutable
```

```javascript
import {Map, List} from 'immutable';
```
### Immutable 을 사용 할 때는 다음 규칙들을 기억하세요:

1. 객체는 Map
1. 배열은 List
1. 설정할땐 set
1. 읽을땐 get
1. 읽은다음에 설정 할 땐 update
1. 내부에 있는걸 ~ 할땐 뒤에 In 을 붙인다: setIn, getIn, updateIn
1. 일반 자바스크립트 객체로 변환 할 땐 toJS
1. List 엔 배열 내장함수와 비슷한 함수들이 있다 – push, slice, filter, sort, concat… 전부 불변함을 유지함
1. 특정 key 를 지울때 (혹은 List 에서 원소를 지울 때) delete 사용

### index.js
immutable 메서드를 사용하고 콘솔에서 확인만 해볼것임
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Map, List } from 'immutable';

ReactDOM.render(<App />, document.getElementById('root'));
```

### 1. 객체는 Map
```javascript
// 1. 객체는 Map

const obj = Map({
    foo: 1,
    inner: Map({
        bar: 10
    })
});

console.log(obj.toJS());
```

### 2. 배열은 List
```javascript
// 2. 배열은 List
const arr = List([
    Map({foo : 1}),
    Map({bar : 2})
]);

console.log(arr.toJS());
```

### 3. 설정할땐 set
```javascript
// 3. 설정할땐 set
let newObj = obj.set('foo', 5);
console.log(newObj.toJS());
console.log(newObj !== obj); //true : 새로운 객체를 반환한다.
```

### 4. 값을 읽을 때는 get
```javascript
// 4. 값을 읽을 때는 get
let getObj = obj.get('foo'); // 객체는 key 값으로 읽음
let getArr = arr.get(0).toJS();

console.log(getObj);
console.log(getArr);
```

### 5. 읽은다음에 설정 할 때는 update
```javascript
// 5. 읽은다음에 설정 할 때는 update
// 두번째 파라미터로는 updater 함수가 들어감 

newObj = newObj.update('foo', value => value + 1);
console.log(newObj.toJS());
```

### 6. 내부에 있는걸 ~ 할땐 In 을 붙인다
```javascript
// 6. 내부에 있는걸 ~ 할땐 In 을 붙인다
newObj = newObj.setIn(['inner','bar'],20);
console.log(newObj.toJS());

let newArr = arr.setIn([0,'foo'],77);
console.log(newArr.toJS());
```

### 8. List 내장함수는 배열이랑 비슷하다
```javascript
// 8. List 내장함수는 배열이랑 비슷하다
newArr = arr.push(Map({qaz : 3}));
console.log(newArr.toJS());

newArr = arr.filter(item => item.get('foo') === 1);
console.log(newArr.toJS());
```

### 9. delete 로 key 를 지울 수 있음
```javascript
// 9. delete 로 key 를 지울 수 있음
console.log(newObj.toJS());
console.log('delete 함수실행');
newObj = newObj.delete('foo');
console.log(newObj.toJS());

console.log(newArr.toJS());
console.log('delete 함수실행');
newArr = newArr.delete(0);
console.log(newArr.toJS());
```