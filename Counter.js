function Counter(initialValue = 0, n) {
    let count = initialValue;
    return {
        increment: function () {
            for (i = 0; i < n; i++) {
                count++;
            }

            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        reset: function () {
            count = initialValue;
            return count;
        },
        getValue: function () {
            return count;
        }
    }
}

// console.log(Counter().increment());
console.log(Counter(1,5).increment());