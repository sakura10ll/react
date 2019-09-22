import { createVnode } from './reactTestVDom';

// JSX 就是这个函数
function createElement(type,props,...children) {

    // 如果是组件 type 就是一个函数
    // console.info(type,props,children);

    delete props.__source;
    props.children = children;

    // 区分不同的组件类型
    let vtype;

    if(typeof type == "string"){
        // 是字符串，就是普通的div这种元素
        vtype = 1;
    }else if(typeof type == "function"){
        // 是函数，就是组件
        if(type.isReactComponent){
            // class组件
            vtype = 3;
        }else{
            vtype = 2;
        }
    }


    // console.info({type,vtype,props});
    // console.info(JSON.stringify({type,props},null,2));

    return createVnode(vtype,type,props);
}

class Component {

    // 用于区别class组件 和 function组件 的参数
    static isReactComponent = true;

    constructor(props){
        this.props = props;
        this.state = {};
    }


    setState(){
    //  异步更新队列 push 一个任务

    }
}


class Updater {
    // 更新异步队列
    constructor(){

    }
}


export default { createElement,Component };