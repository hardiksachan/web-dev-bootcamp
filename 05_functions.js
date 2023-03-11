// function greet(name) {
//     console.log("Hello, " + name);
// }
//
// function add(x, y) {
//     return x + y;
// }
//
// const diff = function (x, y) {
//     return x - y;
// }
//
// const diff2 = (x, y) => {
//     return x - y;
// }
//
// console.log(diff2)

// const result = diff(5, 7);
// console.log(result);

// HIGHER ORDER FUNCTIONS

// clamp: x min max
// x < min -> min
// max > x > min -> x
// x > max -> max

function clamp(x, min, max) {
    if (x < min) {
        return min;
    } else if (x < max) {
        return x
    } else {
        return max
    }
}

//
// console.log(clamp(4, 5, 10))
// console.log(clamp(7, 5, 10))
// console.log(clamp(25, 5, 10))

// clamp1 : 5, 10           -> clamp(x, 5, 10)
// console.log(clamp(7, 5, 10))
// console.log(clamp(12, 5, 10))
// clamp2 : 100, 1000       -> clamp(x, 100, 1000)
// clamp3 : 50, 90

// approaches: using clamp
// newFxn
// function clamp1(x) {
//     if (x < 5) {
//         return 5;
//     } else if (x < 10) {
//         return x
//     } else {
//         return 10
//     }
// }
//
// console.log(clamp1(5))
// console.log(clamp1(8))
// console.log(clamp1(12))

// clampGenerator(min, max) -> clamp(x) -> clampedValue

function clampGenerator(min, max) {
    console.log("New clamp generated")

    function clamp(x) {
        if (x < min) {
            return min;
        } else if (x < max) {
            return x
        } else {
            return max
        }
    }

    return clamp
}

// const newClamper = clampGenerator(5, 10)
// console.log(newClamper(2))
// console.log(newClamper(7))
// console.log(newClamper(12))
//
// const clamp2 = clampGenerator(11, 20)
// console.log(clamp2(2)) // 11
// console.log(clamp2(7)) // 11
// console.log(clamp2(12)) // 12
// console.log(clamp2(999)) // 20

function addTwo(x, fn) {
    return fn(x, 12) + 2
}

const f = (a, b) => {
    return a + b
}
const result2 = addTwo(5, f)

const result3 = addTwo(5, (a, b) => {
    return a + b;
})

console.log(result)

