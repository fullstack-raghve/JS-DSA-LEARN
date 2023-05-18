Program to check if two stacks are equal
Posted on August 14, 2019 | by Prashant Yadav

Posted in Algorithms, Stack | Tagged Easy

An algorithm to check if two stacks are equal in javascript.

Example
Input:
2 9 3 7 5
2 9 3 7 5

Output:
trueCopy
Two stacks are equal
Implementation
First we will check if the length of both the stacks are same, if they are not equal then return false.
If the length are same, then check each element in both the stacks by peeking the elements.
If they are equal then pop the elements else return false.
At the end if all elements are same in both the stack then return true.
let equalStacks = (stack1, stack2) => {
  //If length is not equal
  //Then return false
  if(stack1.size() !== stack2.size()){
    return false;
  }
  
  //Check if each element in both the stack are equal
  while(!stack1.isEmpty()){
    if(stack1.peek() === stack2.peek()){
      stack1.pop();
      stack2.pop();
    }else{
      return false;
    }
  }
  
  return true;
}Copy
Input:
let stack1 = new stackUsingLL();
stack1.push(2);
stack1.push(9);
stack1.push(3);
stack1.push(7);
stack1.push(5);

let stack2 = new stackUsingLL();
stack2.push(2);
stack2.push(9);
stack2.push(3);
stack2.push(7);
stack2.push(5);

console.log(equalStacks(stack1, stack2));

Output:
trueCopy
Time complexity: O(n).
Space complexity: O(1).

Time and Space complexity
We are checking each element in both the stack, so Time complexity is O(n).
We are using constant space, so Space complexity is O(1).
