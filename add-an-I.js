function drawStairs(n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        if (i > 0) {
            result += "\n";
        }
        result += " ".repeat(i) + "I";
    }
    return result;
}

console.log(drawStairs(5));
