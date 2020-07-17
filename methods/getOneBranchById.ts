const treeData = [
  {
    id: 'a',
    sex: 0,
    children: [
      {
        id: 'a1',
        sex: 1,
        children: [
          {
            id: 'a3',
            sex: 1,
            children: [],
          }
        ],
      },
      {
        id: 'a2',
        sex: 0,
        children: [
          {
            id: 'a4',
            sex: 1,
            children: [],
          }
        ],
      }
    ]
  },
  {
    id: 'b',
    sex: 0,
    children: [
      {
        id: 'b1',
        sex: 1,
        children: [
          {
            id: 'b3',
            sex: 1,
            children: [],
          }
        ],
      },
      {
        id: 'b2',
        sex: 0,
        children: [
          {
            id: 'b4',
            sex: 1,
            children: [],
          }
        ],
      }
    ]
  }
]

type user = {
  id?: string,
  sex?: number,
  children?: any,
}

/**
 * 在树节点中找到指定标识所在的那一个分支
 * @param nodeList 节点数据
 * @param id 要匹配的标识
 */
function getOneBranchById(nodeList: Array<user>, id: string) {
  const newData: Array<user> = [];
  nodeList.forEach((node: user) => {
    if (node.children && node.children.length > 0 && node.id !== id) {
      const childrenItem = getOneBranchById(node.children, id);
      if (childrenItem.length > 0) {
        node.children = childrenItem;
        newData.push(node);
      }
    } else if (node.id === id) {
      newData.push({
        id: node.id,
        sex: node.sex,
        // 看情况是否需要
        children: [],
      });
    }
  });
  return newData;
}

const result: Array<user> = getOneBranchById(treeData, 'b1');
console.log(result);