function drawStairs(n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        if (i > 0) {
            result += "\n";
        }
        return (result += " ".repeat(n) + "I");
    }
    return result;
}

console.log(drawStairs(5));
