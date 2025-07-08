class TreeNode{
    constructor(val, left, right){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var sortedArrayToBST=function(nums){
   function convert(left,right){
    if(left>right){
        return null;
    }
    const mid= Math.floor((left+right)/2);
    const node = new TreeNode(nums[mid]);

    node.left = convert(left, mid-1);
    node.right = convert(mid+1,right);

    return node;
   }
   return convert(0,nums.length-1);
}

// console.log(JSON.stringify(sortedArrayToBST([-10, -3, 0, 5, 9]), null, 2));
function printTree(node, prefix = '', isLeft = true) {
    if (node === null) return;

    if (node.right) {
        printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false);
    }

    console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.val);

    if (node.left) {
        printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true);
    }
}

// Example:
const tree = sortedArrayToBST([1, 2, 3, 4, 5, 6, 7]);
printTree(tree);
