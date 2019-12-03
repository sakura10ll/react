

export function createVnode(vtype, type, props) {
    // 创建虚拟DOM
    // dom => vnode
    return {vtype, type, props};
}

export function initVnode(vnode) {
    // {vtype, type, props}
    // 初始化vnode
    // vnode => dom
    console.info(vnode);
    const { vtype, type, props } = vnode;

    if(!vtype){
        // 如果没有vtype值，其实就是普通的文本
        return document.createTextNode(vnode);
    }
    if(vtype == 1){
        // 普通组件
        return initVelement(vnode);
    }
    if(vtype == 2){
        // 函数组件
        return initFuncComp(vnode);
    }
    if(vtype == 3){
        // class 组件
        return initClassComp(vnode);
    }
}


// 初始化普通组件
function initVelement(vnode) {
    const { type, props } = vnode;
    const node = document.createElement(type);
    const { key, style, children, ...reset } = props;
    console.info(key, style, children, reset);
    Object.keys(reset).forEach(k => {
        node.setAttribute(k, reset[k]);
    });

    console.info(node);
    // 初始化子元素
    initChildren(node,children);
    return node;
}


function initChildren(node,children) {
    // 初始化子元素
    children.forEach( c => {
        node.appendChild(initVnode(c));
    })
}


// 初始化函数组件
function initFuncComp(vnode) {
    const { type, props } = vnode;
    let newNode = type(props);
    return initVnode(newNode);
}

// 初始化class组件
function initClassComp(vnode) {
    const { type, props } = vnode;
    let component = new type(props);
    const newNode = component.render();
    return initVnode(newNode);
}