// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import React from './reactTest';
import ReactDOM from './reactTestDom';


// 1.component 组件化
// 2.render 渲染虚拟DOM到页面上
// 3.createElement  创建虚拟DOM

// class MyReact extends React.Component{
//     render(){
//         return <h1>hello react</h1>
//     }
// }


function Test(props){
    return <h1>这是一个函数组件 {props.name}</h1>
}


class TestClass extends React.Component{
    render(){
        return <h2>这是一个class组件{this.props.name}</h2>
    }
}



// 递归调用 createElement
ReactDOM.render(
    (<div id="reactTest">
        react Elements
        {/* <span id="testSpan">next elements</span> */}
        <Test name="方法测试" />
        <TestClass name="class测试" />
    </div>),
    document.getElementById('root'));


