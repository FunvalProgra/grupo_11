const mergeTwoLists = function(list1, list2) {

  return list1.concat(list2).sort( (a,b) => a - b);

};


let result2 = mergeTwoLists([], [])
let result3 = mergeTwoLists([],[0])
let result1 = mergeTwoLists([1,2,4, 10], [1,3,4])


console.log(result1)
console.log(result2)
console.log(result3)