JSX: 是js的语法扩展。表面上像html，实际上是通过babel转换为js执行。
     在JSX语法中，可以在{}内放置任何有效的js语法。
     其本质上是转换为React.createElement在react内部构件虚拟DOM，渲染页面
     
     
diff算法：
    策略：1.web ui中DOM节点跨层级的移动操作特别少，可以忽略不计。
          2.拥有相同类的两个组件会生成相似的树形结构，拥有不同类的两个组件会生成不同的属性结构。
          3.对于同一层级的一组子节点，他们可以通过唯一id进行区分。
          
        基于以上3个前提策略，react分别对 tree diff， component diff， 以及 element diff 进行算法优化。
        事实证明这3个前提策略是合理且准确的，它保证了整体界面构建的性能。
        
    element diff
        当节点处于同一层级时，react diff提供了三种节点操作，分别为 INSERT_MAKEUP(插入)、MOVE_EXSITING(移动)和REMOVE_NODE(删除)
        
        INSERT_MAKEUP,新的component类型不在老集合里，即是全新的节点，需要对新节点执行插入操作。
        MOVE_EXSITING,在老集合有新component类型，且element是可更新的类型，generateComponentChildren已调用receiveComponent,
                      这种情况下prevChild = nentChild, 就需要做移动操作，可以复用以前的DOM节点。
        REMOVE_NODE,老component类型，在新集合里也有，但对应的element不同则不能直接复用和更新，需要执行删除操作，
                    或者老component不在新集合里的，也需要执行删除操作。