## [2667. Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/)

![hello world!](https://miro.medium.com/v2/resize:fit:1024/1*OohqW5DGh9CQS4hLY5FXzA.png)

Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.

**Example 1:**

> **Input:** args = []
> **Output:** "Hello World"
> **Explanation:** const f = createHelloWorld(); f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".

**Example 2:**

> **Input:** args = [{},null,42] > **Output:** "Hello World"
> **Explanation:** const f = createHelloWorld(); f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".

**Constraints:**

- `0 <= args.length <= 10`

**Resources for the solution**

- [Detailed information about Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Solution and explanation](https://www.youtube.com/watch?v=P9Ldx1eTlRc)
