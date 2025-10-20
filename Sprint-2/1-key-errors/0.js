// Predict and explain first...
//  =============> I think that this  is a function in order to capitalize the first letter of any string defined by the variable str

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> I get the following error message:
// SyntaxError: Identifier 'str' has already been declared
//    at wrapSafe (node:internal/modules/cjs/loader:1691:18)
//    at Module._compile (node:internal/modules/cjs/loader:1734:20)
//    at Object..js (node:internal/modules/cjs/loader:1893:10)
//    at Module.load (node:internal/modules/cjs/loader:1480:32)
//    at Module._load (node:internal/modules/cjs/loader:1299:12)
//    at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//    at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
 //   at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
 //   at node:internal/main/run_main_module:33:47
//I realize that by adding a parameter in the function capitalize IS actually declaring the variable str, so we can't redeclare it below with let. I will remove the let and check again.

function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
   return str;
}
