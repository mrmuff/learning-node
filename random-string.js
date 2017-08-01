var randomstring = require("randomstring")
randomstring.generate();
// process.stdout.write("hello: ");
process.stdout.write(randomstring.generate(6));
