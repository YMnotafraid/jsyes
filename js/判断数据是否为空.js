function isEmpty(data) {
    if (typeof data === "undefined" || data === null) return true;
    else if (typeof data === "string" && data.trim() === "") return true;
    else if (Array.isArray(data) && data.length === 0) return true;
    else if (typeof data === "object" && Object.keys(data).length === 0)
        return true;
    else return false;
}

function isEmpty(data) {
    if (typeof data === "undefined" || data === null) return true;
    else if (typeof data === "string" && data.trim() === "") return true;
    else if (Array.isArray(data) && data.length === 0) return true;
    else if (typeof data === "object" && Object.keys(data).length === 0) return true;
    else return false;
}

console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty("")); // true
console.log(isEmpty([])); // true
console.log(isEmpty({})); // true

console.log(isEmpty(0)); // false
console.log(isEmpty(false)); // false
console.log(isEmpty("Hello")); // false
console.log(isEmpty([1, 2, 3])); // false
console.log(isEmpty({ a: 1, b: 2 })); // false


function fn(data) {
    if (typeof data === "undefined" || data === null) return true;
    else if (typeof data === "string" && data.trim() === "") return true;
    else if (Array.isArray(data) && data.length === 0) return true;
    else if (typeof data === "object" && Object.keys(data).length === 0) return true;
    return false;
}