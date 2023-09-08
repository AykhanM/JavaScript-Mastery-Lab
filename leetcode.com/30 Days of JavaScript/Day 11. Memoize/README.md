## [2623. Memoize](https://leetcode.com/problems/memoize/)

![memoize](https://media.geeksforgeeks.org/wp-content/uploads/20220624154237/WhatisMemoizationACompletetutorial5-660x310.jpg)

Given a function `fn`, return a **memoized** version of that function.

A **memoized** function is a function that will never be called twice with the same inputs. Instead, it will return a cached value.

You can assume there are **3** possible input functions: `sum`**,** `fib`**,** and `factorial`**.**

- `sum` accepts two integers `a` and `b` and returns `a + b`.
- `fib` accepts a single integer `n` and returns `1` if `n <= 1` or `fib(n - 1) + fib(n - 2)` otherwise.
- `factorial` accepts a single integer `n` and returns `1` if `n <= 1` or `factorial(n - 1) * n` otherwise.

**Example 1:**

> **Input** "sum" ["call","call","getCallCount","call","getCallCount"] [[2,2],[2,2],[],[1,2],[]] > **Output** [4,4,1,3,2] > **Explanation** : [2623. Memoize](https://leetcode.com/problems/memoize/)

**Example 2:**

> **Input** "factorial" ["call","call","call","getCallCount","call","getCallCount"] > [[2],[3],[2],[],[3],[]] > **Output** [2,6,2,2,6,2] > **Explanation** : [2623. Memoize](https://leetcode.com/problems/memoize/)

**Example 3:**

> **Input** "fib" ["call","getCallCount"] [[5],[]] > **Output** [8,1] >**Explanation** : [2623. Memoize](https://leetcode.com/problems/memoize/)

**Constraints:**

- `0 <= a, b <= 105`
- `1 <= n <= 10`
- `at most 105 function calls`
- `at most 105 attempts to access callCount`
- `input function is sum, fib, or factorial`

**Resources for the solution**
- [My solution](https://github.com/AykhanM/JavaScript-Mastery-Lab/blob/master/leetcode.com/30%20Days%20of%20JavaScript/Day%2011.%20Memoize/memoize.js)
- [Solution inspired by NeetCode](https://github.com/AykhanM/JavaScript-Mastery-Lab/blob/master/leetcode.com/30%20Days%20of%20JavaScript/Day%2011.%20Memoize/solution.js)
- [What is Memoization?](https://www.freecodecamp.org/news/memoization-in-javascript-and-react/)
- [Explanation by NeetCode](https://youtu.be/oFXyzJt9VeU?si=wfc4Is7pjCZuCo72)
