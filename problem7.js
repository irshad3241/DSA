class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function middleNode(head) {
    let slow = head;
    let fast = head;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    return slow;
  }
  
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  
  const middle = middleNode(head);
  
  let result = [];
  while (middle) {
    result.push(middle.val);
    middle = middle.next;
  }
  
  console.log(result); 