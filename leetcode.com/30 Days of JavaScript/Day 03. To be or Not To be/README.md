## [2704. To Be Or Not To Be](https://leetcode.com/problems/to-be-or-not-to-be/)

![tobeornottobe](https://events.veneziaunica.it/files/styles/event_header/public/events/covers/to_be_or_not_to_be.jpg?itok=ImcGY8f9)

Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions.

- `toBe(val)` accepts another value and returns `true` if the two values `===` each other. If they are not equal, it should throw an error `"Not Equal"`.
- `notToBe(val)` accepts another value and returns `true` if the two values `!==` each other. If they are equal, it should throw an error `"Equal"`.

**Example 1:**

> **Input:** func = () => expect(5).toBe(5)
> **Output:** {"value": true}
> **Explanation:** 5 === 5 so this expression returns true.

**Example 2:**

> **Input:** func = () => expect(5).toBe(null)
> **Output:** {"error": "Not Equal"}
> **Explanation:** 5 !== null so this expression throw the error "Not Equal".

**Example 3:**

> **Input:** func = () => expect(5).notToBe(null)
> **Output:** {"value": true}
> **Explanation:** 5 !== null so this expression returns true.

**Resources for the solution**

- [Detailed information about Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

- [Solution and explanation](https://github.com/AykhanM/JavaScript-Mastery-Lab/blob/master/leetcode.com/30%20Days%20of%20JavaScript/Day%203.%20To%20be%20or%20Not%20To%20be/shakeshpeare.js)
