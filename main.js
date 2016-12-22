  var argv = process.argv.slice(2);
  var rawOptions = {}; // map from '--foo' or '-f' to array of values
  var rawArgs = [];