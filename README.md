# Node.JS parser generator, based on ANTLR 3

This repository contains the JavaScript runtime of ANTLR 3 which was modified to work
inside of a Node.js environment. It also contains scripts to generate grammar parsers
and lexers for any compatible ANTLR 3 grammar / computer programming language.

In practice:
Using this project, you may generate a JavaScript CSV parser or JavaScript JavaScript parser easily.

Credits:
This project was built on ANTLR 3. Thanks to Terence Parr and the developers of ANTLR.
See the LICENSE file for more details on licensing. (http://www.antlr.org)

## Usage

1) Generating a parser/lexer:

   node generate.js $grammarName

   Example:

   node generate.js JavaScript

   (Displayed output is the recent parser state.)

   Notice:
   Before generating a parser for a grammar, not contained in this repository,
   write it yourself or download it from: http://www.antlr.org/grammar/list
   and save it to ./grammars/$grammarName.g

2) Parsing source code by a generated parser/lexer (and log parser's state):

   node parse.js $grammarName $sourceFile

   Example:

   node parse.js JavaScript examples/JavaScript.js

## Dependencies

1) parse.js and generate.js runs on Unix and Linux. Windows is known to be unsupported.
   You can call all shell commands to generate a parser manually too. (Read the code.)

2) Requires a Java 1.5+ JVM to be installed to be able to generate parsers using ANTLR 3.
   Generated parsers and their runtime are JavaScript-only and don't belong to Java anymore.

## Limitations

Doesn't work with grammars that make use of @members or @header directives. (Due to non-JS code)

These directives contain Java code which would be copied into the JavaScript parser/lexer code
and would fail while parser/lexer execution (JavaScript parse error).
Attention: @members code of grammars needs to be ported to JavaScript.