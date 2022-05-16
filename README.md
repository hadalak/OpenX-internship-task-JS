# OpenX internship taks - JavaScript


Task 1: Create a data structure which is able to represent the following model (assume that node values
are integers).

### tree1.js
Calculating the number of nodes that do not have any children. For the example given
above, there are 5 leafs (nodes without child), i.e .: 2, 5, 1, 2, 5
```
node tree1.js  
```

### tree2.js
Calculating the largest number of edges in a path from the root node to a leaf node
(node without child). For the example given above the largest number of edges between
root node and leaf is 4 for the path 5 → 7 → 0 → 8 → 5
```
node tree2.js  
```

### tree3.js
Checking if two instances of above data structures are equivalent to each other. Let us
assume that two independent instances of the structure described above are equivalent
if each node (starting from the root) in both of them has the same value and children.
```
node tree3.js  
```

## Jest Installation and testing

```
npm install --save-dev jest
npm test
```

## Summary
I added 3 files to the repository. Each of them corresponds to a different sub-item from the task. I have placed tests for each of them in the 'tests' folder. JSON files are responsible for the Jest configuration.
