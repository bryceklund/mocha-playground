function sum(arr) {
    result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            result += arr[i];
        } else if (typeof arr[i] === "string") {
            if (parseInt(arr[i])) {
                result += parseInt(arr[i]);
            }
        }
    };
    return result;
}


console.log(sum(["b", "c", "d", "a"]));