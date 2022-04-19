---
sidebar_position: 1
---

## [989. 数组形式的整数加法](https://leetcode-cn.com/problems/add-to-array-form-of-integer/)

4 月 1 日

```
对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。

示例 1：
输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234

示例 2：
输入：A = [2,7,4], K = 181
输出：[4,5,5]
解释：274 + 181 = 455

示例 3：
输入：A = [2,1,5], K = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021

示例 4：
输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
输出：[1,0,0,0,0,0,0,0,0,0,0]
解释：9999999999 + 1 = 10000000000


提示：

1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
如果 A.length > 1，那么 A[0] != 0
```

### 思路

按位求和，用 flag 保存进位，加到下一轮

### 代码

```js
var addToArrayForm = function (num, k) {
  const res = [];
  let order = num.length - 1;
  // 进位
  let flag = 0;
  while (order >= 0 || k != 0) {
    let x = order >= 0 ? num[order] : 0;
    let y = k != 0 ? k % 10 : 0;
    let sum = x + y + flag;
    // 保存余数
    res.push(sum % 10);
    flag = Math.floor(sum / 10);
    k = Math.floor(k / 10);
    order--;
  }
  if (flag) res.push(flag);
  return res.reverse();
};
```

### 复杂度

- 时间复杂度：O(n)
- 空间复杂度：O(n)

### rust 版本

```rs
impl Solution {
    pub fn add_to_array_form(num: Vec<i32>, k: i32) -> Vec<i32> {
        let mut res: Vec<i32> = vec![];
        let len = num.len() - 1;
        let mut i: i32 = len as i32;
        let mut K = k;
        while i >= 0 || K > 0 {
            if (i >= 0) {
                K = K + num[i as usize]
            }
            res.push(K % 10);
            K = K / 10;
            i = i - 1;
        }
        res.reverse();
        res
    }
}
```

## [821. 字符的最短距离](https://leetcode-cn.com/problems/shortest-distance-to-a-character/)

4 月 2 日

```
给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

示例 1:

输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
说明:

- 字符串 S 的长度范围为 [1, 10000]。
- C 是一个单字符，且保证是字符串 S 里的字符。
- S 和 C 中的所有字母均为小写字母。
```

### 思路

中心扩展（双指针），从当前字符向两边找目标字符，计算距离，选取最小值。

### 代码

```js
var shortestToChar = function (s, c) {
  const res = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] == c) {
      continue;
    }
    let l = i,
      r = i,
      shortest = Infinity;
    while (l >= 0) {
      if (s[l] == c) {
        shortest = Math.min(i - l, shortest);
        break;
      }
      l--;
    }
    while (r < s.length) {
      if (s[r] == c) {
        shortest = Math.min(r - i, shortest);
        break;
      }
      r++;
    }
    res[i] = shortest;
  }
  return res;
};
```

### 复杂度分析

- 时间复杂度：O(n^2)，n 为 s 的长度，两层循环
- 空间复杂度：O(n)

### rust 版本

收集字符 c 的位置，对当前元素求其到每一个字符 c 的距离，取最小值

```rust
impl Solution {
    pub fn shortest_to_char(s: String, c: char) -> Vec<i32> {
        // n 用来收集 字符c出现的位置
        let mut n: Vec<i32> = Vec::new();
        let mut a: Vec<i32> = Vec::new();
        // 题目中最大是10^4 次方
        let mut min = 10000;
        for (i, v) in s.chars().enumerate() {
            if v == c {
                n.push(i as i32);
            }
        }
        // 遍历字符串，对当前元素，遍历目标字符组集，得到当前元素和每一个目标字符的距离，记录最小值
        for i in 0..s.len() {
            min = 10000;
            for (_, v) in n.iter().enumerate() {
                let m = i32::abs(v - i as i32);
                if min > m {
                    min = m;
                }
            }
            a.push(min);
        }
        a
    }
}
```

## [1381. 设计一个支持增量操作的栈](https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/)

4 月 3 日

```
请你设计一个支持下述操作的栈。

实现自定义栈类 CustomStack ：

CustomStack(int maxSize)：用 maxSize 初始化对象，maxSize 是栈中最多能容纳的元素数量，栈在增长到 maxSize 之后则不支持 push 操作。
void push(int x)：如果栈还未增长到 maxSize ，就将 x 添加到栈顶。
int pop()：弹出栈顶元素，并返回栈顶的值，或栈为空时返回 -1 。
void inc(int k, int val)：栈底的 k 个元素的值都增加 val 。如果栈中元素总数小于 k ，则栈中的所有元素都增加 val 。


示例：

输入：
["CustomStack","push","push","pop","push","push","push","increment","increment","pop","pop","pop","pop"]
[[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
输出：
[null,null,null,2,null,null,null,null,null,103,202,201,-1]
解释：
CustomStack customStack = new CustomStack(3); // 栈是空的 []
customStack.push(1); // 栈变为 [1]
customStack.push(2); // 栈变为 [1, 2]
customStack.pop(); // 返回 2 --> 返回栈顶值 2，栈变为 [1]
customStack.push(2); // 栈变为 [1, 2]
customStack.push(3); // 栈变为 [1, 2, 3]
customStack.push(4); // 栈仍然是 [1, 2, 3]，不能添加其他元素使栈大小变为 4
customStack.increment(5, 100); // 栈变为 [101, 102, 103]
customStack.increment(2, 100); // 栈变为 [201, 202, 103]
customStack.pop(); // 返回 103 --> 返回栈顶值 103，栈变为 [201, 202]
customStack.pop(); // 返回 202 --> 返回栈顶值 202，栈变为 [201]
customStack.pop(); // 返回 201 --> 返回栈顶值 201，栈变为 []
customStack.pop(); // 返回 -1 --> 栈为空，返回 -1


提示：

1 <= maxSize <= 1000
1 <= x <= 1000
1 <= k <= 1000
0 <= val <= 100
每种方法 increment，push 以及 pop 分别最多调用 1000 次
```

### 思路

直接按着题意即可。

### 代码

```js
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = [];
  this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length === this.maxSize) {
    return null;
  }
  this.stack.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  var x = this.stack.pop();
  return x === undefined ? -1 : x;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  for (let i = 0; i < k && i < this.stack.length; i++) {
    this.stack[i] = this.stack[i] + val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
```

### 复杂度

- 时间复杂度：push 操作和 pop 操作的渐进时间复杂度为 O(1)，inc 操作的渐进时间复杂度为 O(k)
- 空间复杂度：O(maxSize)

### rust 版本

```rust
struct CustomStack {
    vec: Vec<i32>,
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl CustomStack {

    fn new(maxSize: i32) -> Self {
        CustomStack {
            vec: Vec::with_capacity(maxSize as usize),
        }
    }

    fn push(&mut self, x: i32) {
        if self.vec.len() + 1 <= self.vec.capacity() {
            self.vec.push(x)
        }
    }

    fn pop(&mut self) -> i32 {
        self.vec.pop().unwrap_or(-1)
    }

    fn increment(&mut self, k: i32, val: i32) {
        // iter_mut() 方法返回的迭代元素是一个 引用类型。我们可以通过对迭代变量 解引用 的方式来重新赋值。
        // take 创建一个迭代器
        for num in self.vec.iter_mut().take(k as usize){
            *num = val + *num
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * let obj = CustomStack::new(maxSize);
 * obj.push(x);
 * let ret_2: i32 = obj.pop();
 * obj.increment(k, val);
 */
```

## [394.字符串编码](https://leetcode-cn.com/problems/decode-string/)

4 月 4 日

### 思路

维护一个栈，遍历判断

### 代码

```js
// 维护一个栈
var decodeString = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != "]") {
      stack.push(s[i]);
      continue;
    }
    let str = "";
    let cur = stack.pop();
    while (cur != "[") {
      // 加在当前的后面
      str = cur + str;
      cur = stack.pop();
    }
    let num = "";
    // 排除 "["
    cur = stack.pop();
    // 对于数字
    while (!isNaN(cur)) {
      // 字符串相加
      num = cur + num;
      cur = stack.pop();
    }
    // 字母 或者 "["
    stack.push(cur);
    stack.push(str.repeat(num));
  }
  return stack.join("");
};
```

### 复杂度

- 时间复杂度：O(n)
- 空间复杂度：O(n)

### rust 版本

```rust
impl Solution {
    pub fn decode_string(s: String) -> String {
        let mut stack: Vec<(usize, String)> = Vec::new();
        let (mut n, mut str) = (0, String::new());
        for c in s.chars() {
            // 模式匹配
            match c {
                // 缓存前面的字符，以及下一组的重复次数
                '[' => {
                    stack.push((n, str.clone()));
                    n = 0;
                    str.clear();
                }
                // 解码字符串
                ']' => {
                    if let Some(last) = stack.pop() {
                        str = last.1 + str.repeat(last.0).as_str();
                    }
                }
                // 注意要 n*10
                '0'..='9' => n = n * 10 + (c as u8 - b'0') as usize,
                // 缓存字符
                c => str.push(c),
            }
        }
        str
    }
}
```

## [232. 用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

4 月 5 日

### 思路

rust 双栈实现队列

### 代码

```js
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.input = [];
  this.output = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.input.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.output.length) {
    while (this.input.length) {
      this.output.push(this.input.pop());
    }
  }
  return this.output.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.output.length) {
    while (this.input.length) {
      this.output.push(this.input.pop());
    }
  }
  return this.output[this.output.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.input.length == 0 && this.output.length == 0;
};
```

### 复杂度

> 针对于 rust 来说

push ：

- 时间复杂度：O(1)
- 空间复杂度：O(n)

pop ：

- 时间复杂度：O(1)
- 空间复杂度：O(1)

peek：

- 时间复杂度：最好的情况 O(1) 最坏的情况 O(n)
- 空间复杂度：O(1)

empty：

- 时间复杂度：O(1)
- 空间复杂度：O(1)

### rust 版本

```rust
struct MyQueue {
    input: Vec<i32>,
    output: Vec<i32>,
}

impl MyQueue {

    fn new() -> Self {
        Self {
            input: vec![],
            output: vec![],
        }
    }

    fn push(&mut self, x: i32) {
        self.input.push(x);
    }

    fn pop(&mut self) -> i32 {
        self.peek();
        self.output.pop().unwrap()
    }

    fn peek(&mut self) -> i32 {
        if self.output.is_empty() {
            while self.input.len() > 0 {
                self.output.push(self.input.pop().unwrap());
            }

        }
        self.output.last().cloned().unwrap()
    }

    fn empty(&mut self) -> bool {
        self.input.is_empty() && self.output.is_empty()
    }
}
```

## [768. 最多能完成排序的块 II](https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/)

4 月 6 日

### 思路

前缀和

### 代码

```js
var maxChunksToSorted = function (arr) {
  let sum1 = 0;
  let sum2 = 0;
  let ans = 0;
  let arr2 = [...arr].sort((a, b) => a - b);
  for (let i in arr) {
    sum1 = sum1 + arr[i];
    sum2 = sum2 + arr2[i];
    if (sum1 == sum2) {
      ans += 1;
      sum1 = 0;
      sum2 = 0;
    }
  }
  return ans;
};
```

### 复杂度

- 时间复杂度：O(n)
- 空间复杂度：O(n)

### rust 版本

```rust
impl Solution {
    pub fn max_chunks_to_sorted(arr: Vec<i32>) -> i32 {
        let mut sum1 = 0;
        let mut sum2 = 0;
        let mut ans = 0;
        let mut arr_sorted = arr.to_vec();
        arr_sorted.sort();
        for i in 0..arr.len() {
            sum1 = sum1 + arr[i];
            sum2 = sum2 + arr_sorted[i];
            if sum1 == sum2 {
                ans += 1;
                sum1 = 0;
                sum2 = 0;
            }
        }
        ans
    }
}
```

## [61. 旋转链表](https://leetcode-cn.com/problems/rotate-list/)

4 月 7 日

### 思路

将后 k 个后面接上前 n-k 个节点

![image.png](https://pic.rmb.bdstatic.com/bjh/b8afad81f7caec9df5cfd245a7cd14af.png)

### 代码

```js
var rotateRight = function (head, k) {
  let curNode = new ListNode(0, head);
  let count = 0;
  // 链表长度
  while (curNode.next) {
    curNode = curNode.next;
    count++;
  }
  // 考虑到 k 可能很大
  let n = k % count;
  let p = new ListNode(0, head);
  // 找到第 n-k 的位置
  for (let i = 0; i < count - n; i++) {
    p = p.next;
  }
  curNode.next = head;
  head = p.next;
  p.next = null;
  return head;
};
```

### 复杂度

- 时间复杂度：O(n)
- 空间复杂度：O(n)

### rust 版本

```rust
impl Solution {
    pub fn rotate_right(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
        let mut v: Vec<i32> = Vec::new();
        let mut node = &head;
        // 获取总长度
        while let Some(n) = node {
            v.push(n.val);
            node = &n.next;
        }
        // 缓存新链表
        let mut answer = None;
        // 构建链表
        for i in (0..v.len()).rev() {
            let j = k as usize % v.len();
            answer = Some(Box::new(ListNode {
                val: v[(v.len() + i - j) % v.len()],
                next: answer,
            }))
        }
        answer
    }
}
```

## [24. 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

4 月 8 日

### 思路

rust 写链表题很不方便，同一时刻，只能拥有一个可变引用，所以下面的代码没办法编译通过：

```rust
let mut prev = head;
let mut current = prev.next.unwrap();
```

所以需要利用 `take()` 取出 `Option<T>` 后在原来位置放入 None 来“打断”链表，这样就能获得两个拥有所有权的变量，一个是前面部分，一个是后面部分

### 代码

```js
var swapPairs = function (head) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy;
  while (head && head.next) {
    // 临时保存head.next，因为head.next待会要改变
    let next = head.next;
    head.next = next.next;
    next.next = head;
    pre.next = next;
    // 指针更新 先变pre
    pre = head;
    head = head.next;
  }
  return dummy.next;
};
```

### 复杂度

- 时间复杂度：O(n)
- 空间复杂度：O(1)

### rust 版本

```rust
impl Solution {
  pub fn swap_pairs(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut list = ListNode::new(0);
    let mut tail = &mut list.next;
    let mut temp = None;
    while let Some(mut node) = head.take() {
        head = node.next.take();

        match temp.take() {
            None => temp = Some(node),
            Some(temp) => {
                node.next = Some(temp);
                *tail = Some(node);
                tail = &mut tail.as_mut().unwrap().next.as_mut().unwrap().next;
            }
        }
    }
    *tail = temp;
    list.next.take()
  }
}
```

## [109. 有序链表转换二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/)

4 月 9 日

### 思路

递归数组，取中间节点，构建 bst

### 代码

```js
var sortedListToBST = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const buildBst = (arr) => {
    if (arr.length == 0) return null;
    let mid = Math.floor(arr.length / 2);
    const root = new TreeNode(arr[mid]);
    root.left = buildBst(arr.slice(0, mid));
    root.right = buildBst(arr.slice(mid + 1));
    return root;
  };
  return buildBst(arr);
};
```

### 复杂度

- 时间复杂度：O(n)
- 空间复杂度：O(logn)

### rust 版本

```rust
use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn sorted_list_to_bst(mut head: Option<Box<ListNode>>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut stack = Vec::new();
        // 收集链表节点值
        while let Some(node) = head {
            stack.push(node.val);
            head = node.next;
        }
        Solution::s(&stack[..])
    }
    pub fn s(nums: &[i32]) -> Option<Rc<RefCell<TreeNode>>> {
        let mut n = nums.len();
        if n == 0 {
            return None;
        }
        let mid = n / 2;
        let mut node = TreeNode::new(nums[mid]);
        // 递归创建左子树
        node.left = Solution::s(&nums[..mid]);
        // 递归创建右子树
        node.right = Solution::s(&nums[mid + 1..]);
        Some(Rc::new(RefCell::new(node)))
    }
}
```

## [160. 相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)

4 月 10 日

### 思路

双指针，两个指针的遍历总长度是一样的

### 代码

```js
var getIntersectionNode = function (headA, headB) {
  let a = headA,
    b = headB;
  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};
```

### 复杂度

- 时间复杂度：O(m+n)，其中 m 和 n 是分别是链表 headA 和 headB 的长度。两个指针同时遍历两个链表，每个指针遍历两个链表各一次
- 空间复杂度：0(1)

## [142. 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)

4 月 11 日

### 思路

快慢指针，slow 走 1 步，fast 走 2 步，假设最终相遇 slow 走了 k 步，则 fast 走了 2k 步，从 head 到入环点是 k-m，从入环点到相遇点是 m，所以 fast 从相遇点再到入环点走了 k-m

![image](https://tva2.sinaimg.cn/large/006T9etDly1h15qy1rhifj310u0nitd2.jpg)

### 代码

```js
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast) {
    if (fast.next == null) {
      // fast.next走出链表了，说明无环
      return null;
    }
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      fast = head;
      while (true) {
        if (slow == fast) {
          return slow;
        }
        slow = slow.next;
        fast = fast.next;
      }
    }
  }
  return null;
};
```

### 复杂度

- 时间复杂度：O(n)
- 空间复杂度：O(1)

## [146. LRU 缓存](https://leetcode-cn.com/problems/lru-cache/)

4 月 12 日

### 思路

利用 Map 来做，新的 k-v 放到末尾，头部就是最近最久使用的值，可以利用 map.keys()拿到头部的 k

- 利用 map 来保存数据
  - get：访问 key，访问完将其放在最后。所以，若 key 存在，先保存 value 值，删除 key，再添加 key，最后返回保存的 value 值。若 key 不存在，返回-1
  - put：新增 key，将其放在最后。所以，若 key 存在，先删除，再添加。如果容量超出范围了，将 map 中的头部删除。

关键在于删除 map 中的头部 key：

- map.keys()返回一个迭代器
- 迭代器调用 next 方法，返回 value 字段和 done 字段组成的对象

### 代码

```js
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const temp = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, temp);
    return temp;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  // 要将其放在最后，所以若存在key，先删除
  if (this.map.has(key)) this.map.delete(key);
  // 设置key、value
  this.map.set(key, value);
  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value);
  }
};
```

### 复杂度

- 时间复杂度：O(1)
- 空间复杂度：O(n)

## [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

4 月 13 日

### 思路

DFS 和 BFS

### 代码

```js
// 本质上就是一个层序遍历
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 1;
  while (queue.length) {
    let len = queue.length;
    // 收集每一层的节点
    for (let i = 0; i < len; i++) {
      const top = queue.shift();
      if (top.left) {
        queue.push(top.left);
      }
      if (top.right) {
        queue.push(top.right);
      }
    }
    // 只要有收集的节点就说明层数+1
    queue.length && depth++;
  }
  return depth;
};
```

### 复杂度

对于 dfs：

- 时间复杂度：O(n)，其中 n 为二叉树节点的个数。每个节点在递归中只被遍历一次
- 空间复杂度：O(maxHeight)，其中 maxHeight 表示二叉树的高度。递归函数需要栈空间，而栈空间取决于递归的深度，因此空间复杂度等价于二叉树的高度

对于 bfs：

- 时间复杂度：O(n)，其中 n 为二叉树的节点个数。每个节点只会被访问一次
- 空间复杂度：此方法空间的消耗取决于队列存储的元素数量，其在最坏情况下会达到 O(n)

### rust 版本

```rust
use std::rc::Rc;
use std::cell::RefCell;
use std::cmp::max;
impl Solution {
    pub fn max_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut max_val = 0;

        if let Some(node) = root {
            let left = 1 + Solution::max_depth(node.borrow_mut().left.take());
            let right = 1 + Solution::max_depth(node.borrow_mut().right.take());

            max_val = max(left, right);
        }

        max_val
    }
}
```

## [100. 相同的树](https://leetcode-cn.com/problems/same-tree/)

4 月 14 日

### 思路

dfs

### 代码

```js
var isSameTree = function (p, q) {
  if (p == null && q == null) {
    return true;
  }
  if (p == null || q == null) {
    return false;
  }
  if (p.val != q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```

### 复杂度

- 时间复杂度：O(min(m,n))，其中 m 和 n 分别是两个二叉树的节点数。对两个二叉树同时进行深度优先搜索，只有当两个二叉树中的对应节点都不为空时才会访问到该节点，因此被访问到的节点数不会超过较小的二叉树的节点数

- 空间复杂度：O(min(m,n))，其中 m 和 n 分别是两个二叉树的节点数。空间复杂度取决于递归调用的层数，递归调用的层数不会超过较小的二叉树的最大高度，最坏情况下，二叉树的高度等于节点数

### rust 版本

```rust
use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn is_same_tree(
        p: Option<Rc<RefCell<TreeNode>>>,
        q: Option<Rc<RefCell<TreeNode>>>,
    ) -> bool {
        Solution::is_same_tree_impl(&p, &q)
    }
    pub fn is_same_tree_impl(
        p: &Option<Rc<RefCell<TreeNode>>>,
        q: &Option<Rc<RefCell<TreeNode>>>,
    ) -> bool {
        if p.is_none() && q.is_none() {
            return true;
        }
        if p.is_none() || q.is_none() {
            return false;
        }
        let a: &TreeNode = &p.as_ref().unwrap().borrow();
        let b: &TreeNode = &q.as_ref().unwrap().borrow();

        if a.val != b.val {
            return false;
        }
        Solution::is_same_tree_impl(&a.left, &b.left)
            && Solution::is_same_tree_impl(&a.right, &b.right)
    }
}
```

## [129. 求根节点到叶节点数字之和](https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/)

4 月 15 日

### 思路

DFS

### 代码

```js
var sumNumbers = function (root) {
  const calcTree = (node, cur) => {
    if (node === null) {
      return 0;
    }
    cur = 10 * cur + node.val;
    if (node.left === null && node.right === null) {
      return cur;
    }
    return calcTree(node.left, cur) + calcTree(node.right, cur);
  };
  return calcTree(root, 0);
};
```

### 复杂度

- 时间复杂度：O(n)，其中 n 是二叉树的节点个数。对每个节点访问一次。
- 空间复杂度：O(n)，其中 n 是二叉树的节点个数。空间复杂度主要取决于递归调用的栈空间，递归栈的深度等于二叉树的高度，最坏情况下，二叉树的高度等于节点个数，空间复杂度为 O(n)。

### rust 版本

```rust
use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn sum_numbers(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut res = 0;
        let mut stack = vec![(root, 0)];

        while let Some(node_sum) = stack.pop() {
            if let Some(node) = node_sum.0 {
                let node = node.borrow();
                let cur_sum = 10 * node_sum.1 + node.val;

                if node.left.is_none() && node.right.is_none() {
                    res += cur_sum;
                    continue;
                }

                stack.push((node.left.clone(), cur_sum));
                stack.push((node.right.clone(), cur_sum));
            }
        }
        res
    }
}
```

## [513. 找树左下角的值](https://leetcode-cn.com/problems/find-bottom-left-tree-value/)

4 月 16 日

### 思路

bfs

### 代码

```js
var findBottomLeftValue = function (root) {
  if (!root) return null;
  const queue = [root];
  let Left;
  while (queue.length) {
    let curLevel = queue.length;
    Left = queue[0];
    for (let i = 0; i < curLevel; i++) {
      let curNode = queue.shift();

      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
  }
  return Left.val;
};
```

### 复杂度

- 时间复杂度：O(n)，节点个数，对每个节点访问一次
- 空间复杂度：O(max_size)，层最大宽度

## [297. 二叉树的序列化与反序列化](https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/)

4 月 17 日

### 思路

dfs

### 代码

```js
var serialize = function (root) {
  if (root == null) {
    return "X";
  }
  let left = serialize(root.left);
  let right = serialize(root.right);
  return root.val + "," + left + "," + right;
};

var deserialize = function (data) {
  const arr = data.split(",");
  const builtTree = (node) => {
    let front = arr.shift();
    if (front == "X") {
      return null;
    }
    let root = new TreeNode(front);
    root.left = builtTree(root);
    root.right = builtTree(root);
    return root;
  };
  return builtTree(arr);
};
```

### 复杂度

n 为节点的数量

- 时间复杂度：O(n)，每个节点访问一次
- 空间复杂度：O(n)

## [987. 二叉树的垂序遍历](https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree/)

4 月 18 日

### 思路

这个题的重点在于排序，观察题目可知，坐标反映的是 `(depth,order)`，我们需要对 order 升序，order 一样的（是一组）按 depth 升序，depth 一样的按 `node.val` 升序

### 代码

```js
// 坐标是 (depth,order)
var verticalTraversal = function (root) {
  if (!root) return [];
  let queue = [[root, 0, 0]];
  // map缓存的是 order, [[node, depth],[node, depth]]
  let map = new Map();
  let min = Infinity;
  let max = -Infinity;
  let finalArr = [];
  while (queue.length > 0) {
    let first = queue.pop();
    let node = first[0];
    let order = first[2];
    let depth = first[1];
    min = Math.min(order, min);
    max = Math.max(order, max);
    if (map.has(order)) {
      let arr = map.get(order);
      arr.push([node, depth]);
      map.set(order, arr);
    } else {
      map.set(order, [[node, depth]]);
    }
    if (node.left) {
      queue.unshift([node.left, depth + 1, order - 1]);
    }
    if (node.right) {
      queue.unshift([node.right, depth + 1, order + 1]);
    }
  }
  for (let i = min; i <= max; i++) {
    let arr = map.get(i);
    arr.sort((a, b) => {
      // 如果depth相同，就按照 node.val 升序排列
      if (a[1] === b[1]) {
        return a[0].val - b[0].val;
      }
      // 否则就按着 depth 升序排列
      return a[1] - b[1];
    });
    // 我们最后要缓存的只是 node.val
    arr = arr.map((elem) => elem[0].val);
    finalArr.push(arr);
  }
  return finalArr;
};
```

### 复杂度

- 时间复杂度：O(nlogn)，考虑到 sort 操作是 O(nlogn)， O(n) < O(nlogn)
- 空间复杂度：O(n)

## [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

4 月 19 日

### 思路

- 暴力 （后面可以优化成 排序+双指针 时间复杂度就是 O(nlogn)）
- HashMap

### 代码

```js
var twoSum = function (nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let l = i;
    let r = len - 1;
    while (l < r) {
      if (nums[l] + nums[r] === target) {
        return [l, r];
      }
      r--;
    }
  }
};

const twoSum = (nums, target) => {
  const prevNums = {};

  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    const targetNum = target - curNum; // key
    const targetNumIndex = prevNums[targetNum]; // value
    if (targetNumIndex !== undefined) {
      return [targetNumIndex, i];
    } else {
      prevNums[curNum] = i;
    }
  }
};
```

### 复杂度

暴力解法：

- 时间复杂度：O(n^2)
- 空间复杂度：O(n)

HashMap 解法：

- 时间复杂度：O(n)
- 空间复杂度：O(n)

### rust 版本

```rust
// 暴力
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let len = nums.len();
        for i in 0..len {
            let mut left = i;
            let mut right = len - 1;
            while left < right {
                if nums[left] + nums[right] == target {
                    return vec![left as i32, right as i32];
                }
                right = right - 1;
            }
        }
        Vec::new()
    }
}

// hashmap
use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map = HashMap::new();

        for i in 0..nums.len() {
            if let Some(val) = map.get(&(target - nums[i])) {
                if i != *val {
                    return vec![i as i32, *val as i32];
                }
            }
            map.insert(nums[i], i);
        }
        Vec::new()
    }
}
```
