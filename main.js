const commandLineArgs = require('command-line-args')

const optionDefinitions = [
    { name: 'setting', alias: 's', type: String },
    { name: 'help', alias: 'h', type: Boolean, default: true}
]

const options = commandLineArgs(optionDefinitions);

var printHelp = function() {
    console.log("this is help");
}

async function sleep(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
    }, timeout);
  });
}

(async function() {
  console.log('Do some thing, ' + new Date());
  await sleep(3000);
  console.log('Do other things, ' + new Date());
})();