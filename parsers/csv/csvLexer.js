// $ANTLR 3.3 Nov 30, 2010 12:50:56 ./grammars/csv.g 2012-11-18 03:45:01

var csvLexer = function(input, state) {
// alternate constructor @todo
// public csvLexer(CharStream input)
// public csvLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    csvLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(csvLexer, {
    EOF: -1,
    NEWLINE: 4,
    COMMA: 5,
    DQUOTE: 6,
    CHAR: 7
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(csvLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    NEWLINE : 4,
    COMMA : 5,
    DQUOTE : 6,
    CHAR : 7,
    getGrammarFileName: function() { return "./grammars/csv.g"; }
});
org.antlr.lang.augmentObject(csvLexer.prototype, {
    // $ANTLR start CHAR
    mCHAR: function()  {
        try {
            var _type = this.CHAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/csv.g:45:5: ( '\\u0000' .. '\\u0009' | '\\u000b' .. '\\u000c' | '\\u000e' .. '\\u0021' | '\\u0023' .. '\\u002b' | '\\u002d' .. '\\uffff' )
            // ./grammars/csv.g:
            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='+')||(this.input.LA(1)>='-' && this.input.LA(1)<='\uFFFF') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHAR",

    // $ANTLR start COMMA
    mCOMMA: function()  {
        try {
            var _type = this.COMMA;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/csv.g:53:5: ( '\\u002c' )
            // ./grammars/csv.g:53:7: '\\u002c'
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMA",

    // $ANTLR start DQUOTE
    mDQUOTE: function()  {
        try {
            var _type = this.DQUOTE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/csv.g:57:5: ( '\\u0022' )
            // ./grammars/csv.g:57:7: '\\u0022'
            this.match('\"'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DQUOTE",

    // $ANTLR start NEWLINE
    mNEWLINE: function()  {
        try {
            var _type = this.NEWLINE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/csv.g:61:5: ( ( '\\u000d' )? '\\u000a' | '\\u000d' )
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0=='\r') ) {
                var LA2_1 = this.input.LA(2);

                if ( (LA2_1=='\n') ) {
                    alt2=1;
                }
                else {
                    alt2=2;}
            }
            else if ( (LA2_0=='\n') ) {
                alt2=1;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 2, 0, this.input);

                throw nvae;
            }
            switch (alt2) {
                case 1 :
                    // ./grammars/csv.g:61:7: ( '\\u000d' )? '\\u000a'
                    // ./grammars/csv.g:61:7: ( '\\u000d' )?
                    var alt1=2;
                    var LA1_0 = this.input.LA(1);

                    if ( (LA1_0=='\r') ) {
                        alt1=1;
                    }
                    switch (alt1) {
                        case 1 :
                            // ./grammars/csv.g:61:7: '\\u000d'
                            this.match('\r'); 


                            break;

                    }

                    this.match('\n'); 


                    break;
                case 2 :
                    // ./grammars/csv.g:62:7: '\\u000d'
                    this.match('\r'); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NEWLINE",

    mTokens: function() {
        // ./grammars/csv.g:1:8: ( CHAR | COMMA | DQUOTE | NEWLINE )
        var alt3=4;
        var LA3_0 = this.input.LA(1);

        if ( ((LA3_0>='\u0000' && LA3_0<='\t')||(LA3_0>='\u000B' && LA3_0<='\f')||(LA3_0>='\u000E' && LA3_0<='!')||(LA3_0>='#' && LA3_0<='+')||(LA3_0>='-' && LA3_0<='\uFFFF')) ) {
            alt3=1;
        }
        else if ( (LA3_0==',') ) {
            alt3=2;
        }
        else if ( (LA3_0=='\"') ) {
            alt3=3;
        }
        else if ( (LA3_0=='\n'||LA3_0=='\r') ) {
            alt3=4;
        }
        else {
            var nvae =
                new org.antlr.runtime.NoViableAltException("", 3, 0, this.input);

            throw nvae;
        }
        switch (alt3) {
            case 1 :
                // ./grammars/csv.g:1:10: CHAR
                this.mCHAR(); 


                break;
            case 2 :
                // ./grammars/csv.g:1:15: COMMA
                this.mCOMMA(); 


                break;
            case 3 :
                // ./grammars/csv.g:1:21: DQUOTE
                this.mDQUOTE(); 


                break;
            case 4 :
                // ./grammars/csv.g:1:28: NEWLINE
                this.mNEWLINE(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

 
})();
module.exports = csvLexer;
