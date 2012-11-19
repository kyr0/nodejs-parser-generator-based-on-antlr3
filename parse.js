// Copyright (c) Aron Homberg, 2012; BSD licensed. All rights reserved.

var fs = require('fs');

// Import ANTLR3 JavaScript parser runtime, export org namespace to GLOBAL
GLOBAL.org = require('./runtime/lib/antlr3-all').runtime.org;

// Check CLI options
if (!process.argv[2] || !process.argv[3]) {

    console.log('Usage: node parse.js $grammarName $fileToParse');

} else {

    var lexerClassName = process.argv[2] + 'Lexer',
        parserClassName = process.argv[2] + 'Parser';

    // Import generated Lexer and Parser
    GLOBAL[lexerClassName]  = require('./parsers/' + process.argv[2] + '/' + lexerClassName + '.js');
    GLOBAL[parserClassName] = require('./parsers/' + process.argv[2] + '/' + parserClassName + '.js');

    // Read file to parse, parse and log the parser's state to the console
    fs.readFile(process.argv[3], function (err, input) {

        if (err) throw err;

        // Read single file and use source code as input
        var cstream = new org.antlr.runtime.ANTLRStringStream(String(input)),
            lexer = new GLOBAL[lexerClassName](cstream),
            tstream = new org.antlr.runtime.CommonTokenStream(lexer),
            parser = new GLOBAL[parserClassName](tstream);

        // Output the parser's state
        console.log(parser.state);
    });
}