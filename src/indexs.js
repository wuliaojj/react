import { createStore } from 'redux';

// 1、新建store
// 2、通过reducer创建
// 3、根据老的状态和action，生成新的store

function counter(state=0,action) {
    switch (action.type) {
        case '加机关枪':
            return state+1
        case '减机关枪':
            return state - 1   
        default:
        return 10
            
    }
}


// 1、新建store
const store = createStore(counter)
const init = store.getState()
console.log(init);

function listener() {
    const current = store.getState()
    console.log(`现在有${current}把机关枪`);

}
store.subscribe(listener)       //订阅，相当于监听每一次的状态变化，状态一变化，就触发
//派发事件，就是传递action
store.dispatch({ type:'加机关枪'})
console.log(store.getState());
