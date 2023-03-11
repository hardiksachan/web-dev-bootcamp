function greet(name) {
    console.log("Hello, " + name);
}

function add(x, y) {
    return x + y;
}

const diff = (function (x, y) {
    return x - y;
})(8, 9)

console.log(diff)

// const result = diff(5, 7);
// console.log(result);