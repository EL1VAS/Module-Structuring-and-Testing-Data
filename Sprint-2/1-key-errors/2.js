
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> The num is not defined.
function square(3) {
    return num * num;
}

// =============>SyntaxError: Unexpected number
//    at wrapSafe (node:internal/modules/cjs/loader:1691:18)
//    at Module._compile (node:internal/modules/cjs/loader:1734:20)
//    at Object..js (node:internal/modules/cjs/loader:1893:10)
//    at Module.load (node:internal/modules/cjs/loader:1480:32)
//    at Module._load (node:internal/modules/cjs/loader:1299:12)
 //   at TracingChannel.traceSync (node:diagnostics_channel:328:14)
 //   at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
 //   at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
 //   at node:internal/main/run_main_module:33:47

//Node.js v24.10.0

// =============> Number 3 was unexpected number where it supposed to be a parameter num

// Finally, correct the code to fix the problem
function square(num) {
    return num * num;
}
console.log(square(5)); //It returned 25 so it works


