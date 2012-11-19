// Copyright (c) Aron Homberg, 2012; BSD licensed. All rights reserved.

var sys = require('sys'),
    exec = require('child_process').exec;

// Check CLI options
if (!process.argv[2]) {

    console.log('Usage: node generate.js $grammarName');

} else {

    var grammarName = process.argv[2];

    console.log('Generating parser into directory ./parsers/' + grammarName + '.');
    console.log('Using grammar file: ./grammars/' + grammarName + '.g');

    exec('java -jar library/antlr-3.3.jar -fo ./parsers/' + grammarName + ' ./grammars/' + grammarName + '.g',
         function(error, stdout, stderr) {

             if (error) throw error;

             sys.print(stdout);

             exec('echo "\nmodule.exports = ' + grammarName + 'Lexer;" >> parsers/'
                 + grammarName + '/' +grammarName + 'Lexer.js');

             exec('echo "\nmodule.exports = ' + grammarName + 'Parser;" >> parsers/'
                 + grammarName + '/' + grammarName + 'Parser.js');

             console.log('done.');
         });
}