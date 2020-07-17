/**
 * formmat one tree structure to another structure that you want.
 * 
 * 会遇到从接口拿到的数据的结构并不是你想要的，经过沟通对方仍然不改的，
 * 那么这段代码就可以用来把接收到的结构改成你想要的结构。
 */

const oldTree = [
  {
    user: 'a',
    sex: 0,
    child: [
      {
        user: 'a1',
        sex: 1,
      },
      {
        user: 'a2',
        sex: 0,
      }
    ]
  },
  {
    user: 'b',
    sex: 0,
    child: [
      {
        user: 'b1',
        sex: 1,
      },
      {
        user: 'b2',
        sex: 0,
      }
    ]
  }
]

// A tree structure that you received
type oldTree = {
  user: string,
  sex: number,
  child?: Array<oldTree>,
}

// The aime tree structure that you want
type newTree = {
  user: string,
  sex: number,
  children?: Array<newTree>,
}

/**
 * Format A tree structure to B tree structure
 * @param nodes A tree structure that you received
 * @return New tree
 */
function format(nodes: Array<oldTree>): Array<newTree> {
  // First, define a const as return result
  const data: Array<newTree> = [];
  nodes.forEach((node: oldTree) => {
    // tmp is use to hold new structure
    const tmp: newTree = {
      user: node.user,
      sex: node.sex,
    };
    if (node.child && node.child.length > 0) {
      // If old tree node has child node, then recur it,
      // and set leaf node as tmp's children.
      tmp.children = format(node.child);
    }
    data.push(tmp);
  })
  return data;
}

const res = format(oldTree);

console.log(res);