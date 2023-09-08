/**
 * @param {Function} fn
 */
function memoize(fn) {
    let cache = {}
    return function(...args) {
        let strArgs = args.toString();

        if (strArgs in cache){
            return cache[strArgs];
        }
        
        cache[strArgs] = fn(...args)
        return cache[strArgs];
    }
};
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */