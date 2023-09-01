## [2620. Counter](https://leetcode.com/problems/counter/)

![hello world!](https://i.pinimg.com/736x/14/5a/d8/145ad8a8af3318681a705f281a44c3a3.jpg)

Given an integer `n`, return a `counter` function. This `counter` function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).

**Example 1:**

> **Input:** n = 10 ["call","call","call"] > **Output:** [10,11,12] > **Explanation:** counter() = 10 // The first time counter() is called, it returns n. counter() = 11 // Returns 1 more than the previous time.
> counter() = 12 // Returns 1 more than the previous time.

**Example 2:**

> **Input:** n = -2 ["call","call","call","call","call"] > **Output:** [-2,-1,0,1,2] > **Explanation:** counter() initially returns -2. Then increases after each sebsequent call.

**Constraints:**

- `-1000  <= n <= 1000`
- `At most 1000 calls to counter() will be made`

**Resources for the solution**

- [Detailed information about Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

- [Increment (++)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)

- [Solution and explanation](https://www.youtube.com/watch?v=yEGQQAG5V68&t=1s)
