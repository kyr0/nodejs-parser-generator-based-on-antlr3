// $ANTLR 3.3 Nov 30, 2010 12:50:56 ./grammars/JSON.g 2012-11-18 03:50:52

var JSONLexer = function(input, state) {
// alternate constructor @todo
// public JSONLexer(CharStream input)
// public JSONLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa12 = new JSONLexer.DFA12(this);
    JSONLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(JSONLexer, {
    EOF: -1,
    OBJECT: 4,
    ELEMENT: 5,
    ARRAY: 6,
    STRING: 7,
    INTEGER: 8,
    DOUBLE: 9,
    Colon: 10,
    Comma: 11,
    LBrace: 12,
    RBrace: 13,
    LBracket: 14,
    RBracket: 15,
    Dot: 16,
    TRUE: 17,
    FALSE: 18,
    NULL: 19,
    Digit: 20,
    HexDigit: 21,
    UnicodeChar: 22,
    EscapeSequence: 23,
    StringChar: 24,
    Int: 25,
    Frac: 26,
    Exp: 27,
    WhiteSpace: 28,
    String: 29,
    Integer: 30,
    Double: 31
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(JSONLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    OBJECT : 4,
    ELEMENT : 5,
    ARRAY : 6,
    STRING : 7,
    INTEGER : 8,
    DOUBLE : 9,
    Colon : 10,
    Comma : 11,
    LBrace : 12,
    RBrace : 13,
    LBracket : 14,
    RBracket : 15,
    Dot : 16,
    TRUE : 17,
    FALSE : 18,
    NULL : 19,
    Digit : 20,
    HexDigit : 21,
    UnicodeChar : 22,
    EscapeSequence : 23,
    StringChar : 24,
    Int : 25,
    Frac : 26,
    Exp : 27,
    WhiteSpace : 28,
    String : 29,
    Integer : 30,
    Double : 31,
    getGrammarFileName: function() { return "./grammars/JSON.g"; }
});
org.antlr.lang.augmentObject(JSONLexer.prototype, {
    // $ANTLR start Colon
    mColon: function()  {
        try {
            var _type = this.Colon;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:47:6: ( ':' )
            // ./grammars/JSON.g:47:8: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "Colon",

    // $ANTLR start Comma
    mComma: function()  {
        try {
            var _type = this.Comma;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:48:6: ( ',' )
            // ./grammars/JSON.g:48:8: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "Comma",

    // $ANTLR start LBrace
    mLBrace: function()  {
        try {
            var _type = this.LBrace;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:49:7: ( '{' )
            // ./grammars/JSON.g:49:9: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LBrace",

    // $ANTLR start RBrace
    mRBrace: function()  {
        try {
            var _type = this.RBrace;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:50:7: ( '}' )
            // ./grammars/JSON.g:50:9: '}'
            this.match('}'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RBrace",

    // $ANTLR start LBracket
    mLBracket: function()  {
        try {
            var _type = this.LBracket;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:51:9: ( '[' )
            // ./grammars/JSON.g:51:11: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LBracket",

    // $ANTLR start RBracket
    mRBracket: function()  {
        try {
            var _type = this.RBracket;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:52:9: ( ']' )
            // ./grammars/JSON.g:52:11: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RBracket",

    // $ANTLR start Dot
    mDot: function()  {
        try {
            // ./grammars/JSON.g:53:13: ( '.' )
            // ./grammars/JSON.g:53:15: '.'
            this.match('.'); 



        }
        finally {
        }
    },
    // $ANTLR end "Dot",

    // $ANTLR start TRUE
    mTRUE: function()  {
        try {
            var _type = this.TRUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:54:5: ( 'true' )
            // ./grammars/JSON.g:54:8: 'true'
            this.match("true"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TRUE",

    // $ANTLR start FALSE
    mFALSE: function()  {
        try {
            var _type = this.FALSE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:55:6: ( 'false' )
            // ./grammars/JSON.g:55:8: 'false'
            this.match("false"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FALSE",

    // $ANTLR start NULL
    mNULL: function()  {
        try {
            var _type = this.NULL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:56:5: ( 'null' )
            // ./grammars/JSON.g:56:7: 'null'
            this.match("null"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NULL",

    // $ANTLR start Digit
    mDigit: function()  {
        try {
            // ./grammars/JSON.g:58:15: ( '0' .. '9' )
            // ./grammars/JSON.g:58:17: '0' .. '9'
            this.matchRange('0','9'); 



        }
        finally {
        }
    },
    // $ANTLR end "Digit",

    // $ANTLR start HexDigit
    mHexDigit: function()  {
        try {
            // ./grammars/JSON.g:59:18: ( ( '0' .. '9' | 'A' .. 'F' | 'a' .. 'f' ) )
            // ./grammars/JSON.g:59:20: ( '0' .. '9' | 'A' .. 'F' | 'a' .. 'f' )
            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='F')||(this.input.LA(1)>='a' && this.input.LA(1)<='f') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "HexDigit",

    // $ANTLR start UnicodeChar
    mUnicodeChar: function()  {
        try {
            // ./grammars/JSON.g:60:21: (~ ( '\"' | '\\\\' ) )
            // ./grammars/JSON.g:60:23: ~ ( '\"' | '\\\\' )
            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "UnicodeChar",

    // $ANTLR start StringChar
    mStringChar: function()  {
        try {
            // ./grammars/JSON.g:61:21: ( UnicodeChar | EscapeSequence )
            var alt1=2;
            var LA1_0 = this.input.LA(1);

            if ( ((LA1_0>='\u0000' && LA1_0<='!')||(LA1_0>='#' && LA1_0<='[')||(LA1_0>=']' && LA1_0<='\uFFFF')) ) {
                alt1=1;
            }
            else if ( (LA1_0=='\\') ) {
                alt1=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 1, 0, this.input);

                throw nvae;
            }
            switch (alt1) {
                case 1 :
                    // ./grammars/JSON.g:61:24: UnicodeChar
                    this.mUnicodeChar(); 


                    break;
                case 2 :
                    // ./grammars/JSON.g:61:38: EscapeSequence
                    this.mEscapeSequence(); 


                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "StringChar",

    // $ANTLR start EscapeSequence
    mEscapeSequence: function()  {
        try {
            // ./grammars/JSON.g:64:2: ( '\\\\' ( '\\\"' | '\\\\' | '/' | 'b' | 'f' | 'n' | 'r' | 't' | 'u' HexDigit HexDigit HexDigit HexDigit ) )
            // ./grammars/JSON.g:64:4: '\\\\' ( '\\\"' | '\\\\' | '/' | 'b' | 'f' | 'n' | 'r' | 't' | 'u' HexDigit HexDigit HexDigit HexDigit )
            this.match('\\'); 
            // ./grammars/JSON.g:64:9: ( '\\\"' | '\\\\' | '/' | 'b' | 'f' | 'n' | 'r' | 't' | 'u' HexDigit HexDigit HexDigit HexDigit )
            var alt2=9;
            switch ( this.input.LA(1) ) {
            case '\"':
                alt2=1;
                break;
            case '\\':
                alt2=2;
                break;
            case '/':
                alt2=3;
                break;
            case 'b':
                alt2=4;
                break;
            case 'f':
                alt2=5;
                break;
            case 'n':
                alt2=6;
                break;
            case 'r':
                alt2=7;
                break;
            case 't':
                alt2=8;
                break;
            case 'u':
                alt2=9;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 2, 0, this.input);

                throw nvae;
            }

            switch (alt2) {
                case 1 :
                    // ./grammars/JSON.g:64:10: '\\\"'
                    this.match('\"'); 


                    break;
                case 2 :
                    // ./grammars/JSON.g:64:17: '\\\\'
                    this.match('\\'); 


                    break;
                case 3 :
                    // ./grammars/JSON.g:64:24: '/'
                    this.match('/'); 


                    break;
                case 4 :
                    // ./grammars/JSON.g:64:30: 'b'
                    this.match('b'); 


                    break;
                case 5 :
                    // ./grammars/JSON.g:64:36: 'f'
                    this.match('f'); 


                    break;
                case 6 :
                    // ./grammars/JSON.g:64:42: 'n'
                    this.match('n'); 


                    break;
                case 7 :
                    // ./grammars/JSON.g:64:48: 'r'
                    this.match('r'); 


                    break;
                case 8 :
                    // ./grammars/JSON.g:64:54: 't'
                    this.match('t'); 


                    break;
                case 9 :
                    // ./grammars/JSON.g:64:60: 'u' HexDigit HexDigit HexDigit HexDigit
                    this.match('u'); 
                    this.mHexDigit(); 
                    this.mHexDigit(); 
                    this.mHexDigit(); 
                    this.mHexDigit(); 


                    break;

            }




        }
        finally {
        }
    },
    // $ANTLR end "EscapeSequence",

    // $ANTLR start Int
    mInt: function()  {
        try {
            // ./grammars/JSON.g:67:13: ( ( '-' )? ( '0' | '1' .. '9' ( Digit )* ) )
            // ./grammars/JSON.g:67:15: ( '-' )? ( '0' | '1' .. '9' ( Digit )* )
            // ./grammars/JSON.g:67:15: ( '-' )?
            var alt3=2;
            var LA3_0 = this.input.LA(1);

            if ( (LA3_0=='-') ) {
                alt3=1;
            }
            switch (alt3) {
                case 1 :
                    // ./grammars/JSON.g:67:15: '-'
                    this.match('-'); 


                    break;

            }

            // ./grammars/JSON.g:67:20: ( '0' | '1' .. '9' ( Digit )* )
            var alt5=2;
            var LA5_0 = this.input.LA(1);

            if ( (LA5_0=='0') ) {
                alt5=1;
            }
            else if ( ((LA5_0>='1' && LA5_0<='9')) ) {
                alt5=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 5, 0, this.input);

                throw nvae;
            }
            switch (alt5) {
                case 1 :
                    // ./grammars/JSON.g:67:21: '0'
                    this.match('0'); 


                    break;
                case 2 :
                    // ./grammars/JSON.g:67:27: '1' .. '9' ( Digit )*
                    this.matchRange('1','9'); 
                    // ./grammars/JSON.g:67:36: ( Digit )*
                    loop4:
                    do {
                        var alt4=2;
                        var LA4_0 = this.input.LA(1);

                        if ( ((LA4_0>='0' && LA4_0<='9')) ) {
                            alt4=1;
                        }


                        switch (alt4) {
                        case 1 :
                            // ./grammars/JSON.g:67:36: Digit
                            this.mDigit(); 


                            break;

                        default :
                            break loop4;
                        }
                    } while (true);



                    break;

            }




        }
        finally {
        }
    },
    // $ANTLR end "Int",

    // $ANTLR start Frac
    mFrac: function()  {
        try {
            // ./grammars/JSON.g:68:14: ( Dot ( Digit )+ )
            // ./grammars/JSON.g:68:16: Dot ( Digit )+
            this.mDot(); 
            // ./grammars/JSON.g:68:20: ( Digit )+
            var cnt6=0;
            loop6:
            do {
                var alt6=2;
                var LA6_0 = this.input.LA(1);

                if ( ((LA6_0>='0' && LA6_0<='9')) ) {
                    alt6=1;
                }


                switch (alt6) {
                case 1 :
                    // ./grammars/JSON.g:68:20: Digit
                    this.mDigit(); 


                    break;

                default :
                    if ( cnt6 >= 1 ) {
                        break loop6;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(6, this.input);
                        throw eee;
                }
                cnt6++;
            } while (true);




        }
        finally {
        }
    },
    // $ANTLR end "Frac",

    // $ANTLR start Exp
    mExp: function()  {
        try {
            // ./grammars/JSON.g:69:13: ( ( 'e' | 'E' ) ( '+' | '-' )? ( Digit )+ )
            // ./grammars/JSON.g:69:15: ( 'e' | 'E' ) ( '+' | '-' )? ( Digit )+
            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // ./grammars/JSON.g:69:27: ( '+' | '-' )?
            var alt7=2;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0=='+'||LA7_0=='-') ) {
                alt7=1;
            }
            switch (alt7) {
                case 1 :
                    // ./grammars/JSON.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // ./grammars/JSON.g:69:40: ( Digit )+
            var cnt8=0;
            loop8:
            do {
                var alt8=2;
                var LA8_0 = this.input.LA(1);

                if ( ((LA8_0>='0' && LA8_0<='9')) ) {
                    alt8=1;
                }


                switch (alt8) {
                case 1 :
                    // ./grammars/JSON.g:69:40: Digit
                    this.mDigit(); 


                    break;

                default :
                    if ( cnt8 >= 1 ) {
                        break loop8;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(8, this.input);
                        throw eee;
                }
                cnt8++;
            } while (true);




        }
        finally {
        }
    },
    // $ANTLR end "Exp",

    // $ANTLR start WhiteSpace
    mWhiteSpace: function()  {
        try {
            var _type = this.WhiteSpace;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:71:11: ( ( ' ' | '\\r' | '\\t' | '\\u000C' | '\\n' ) )
            // ./grammars/JSON.g:71:13: ( ' ' | '\\r' | '\\t' | '\\u000C' | '\\n' )
            if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||(this.input.LA(1)>='\f' && this.input.LA(1)<='\r')||this.input.LA(1)==' ' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

             _channel=HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WhiteSpace",

    // $ANTLR start String
    mString: function()  {
        try {
            var _type = this.String;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:73:7: ( '\"' ( StringChar )* '\"' )
            // ./grammars/JSON.g:73:9: '\"' ( StringChar )* '\"'
            this.match('\"'); 
            // ./grammars/JSON.g:73:13: ( StringChar )*
            loop9:
            do {
                var alt9=2;
                var LA9_0 = this.input.LA(1);

                if ( ((LA9_0>='\u0000' && LA9_0<='!')||(LA9_0>='#' && LA9_0<='\uFFFF')) ) {
                    alt9=1;
                }


                switch (alt9) {
                case 1 :
                    // ./grammars/JSON.g:73:13: StringChar
                    this.mStringChar(); 


                    break;

                default :
                    break loop9;
                }
            } while (true);

            this.match('\"'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "String",

    // $ANTLR start Integer
    mInteger: function()  {
        try {
            var _type = this.Integer;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:74:8: ( Int )
            // ./grammars/JSON.g:74:10: Int
            this.mInt(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "Integer",

    // $ANTLR start Double
    mDouble: function()  {
        try {
            var _type = this.Double;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./grammars/JSON.g:75:7: ( Int ( Frac ( Exp )? | Exp ) )
            // ./grammars/JSON.g:75:10: Int ( Frac ( Exp )? | Exp )
            this.mInt(); 
            // ./grammars/JSON.g:75:14: ( Frac ( Exp )? | Exp )
            var alt11=2;
            var LA11_0 = this.input.LA(1);

            if ( (LA11_0=='.') ) {
                alt11=1;
            }
            else if ( (LA11_0=='E'||LA11_0=='e') ) {
                alt11=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 11, 0, this.input);

                throw nvae;
            }
            switch (alt11) {
                case 1 :
                    // ./grammars/JSON.g:75:15: Frac ( Exp )?
                    this.mFrac(); 
                    // ./grammars/JSON.g:75:20: ( Exp )?
                    var alt10=2;
                    var LA10_0 = this.input.LA(1);

                    if ( (LA10_0=='E'||LA10_0=='e') ) {
                        alt10=1;
                    }
                    switch (alt10) {
                        case 1 :
                            // ./grammars/JSON.g:75:20: Exp
                            this.mExp(); 


                            break;

                    }



                    break;
                case 2 :
                    // ./grammars/JSON.g:75:27: Exp
                    this.mExp(); 


                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "Double",

    mTokens: function() {
        // ./grammars/JSON.g:1:8: ( Colon | Comma | LBrace | RBrace | LBracket | RBracket | TRUE | FALSE | NULL | WhiteSpace | String | Integer | Double )
        var alt12=13;
        alt12 = this.dfa12.predict(this.input);
        switch (alt12) {
            case 1 :
                // ./grammars/JSON.g:1:10: Colon
                this.mColon(); 


                break;
            case 2 :
                // ./grammars/JSON.g:1:16: Comma
                this.mComma(); 


                break;
            case 3 :
                // ./grammars/JSON.g:1:22: LBrace
                this.mLBrace(); 


                break;
            case 4 :
                // ./grammars/JSON.g:1:29: RBrace
                this.mRBrace(); 


                break;
            case 5 :
                // ./grammars/JSON.g:1:36: LBracket
                this.mLBracket(); 


                break;
            case 6 :
                // ./grammars/JSON.g:1:45: RBracket
                this.mRBracket(); 


                break;
            case 7 :
                // ./grammars/JSON.g:1:54: TRUE
                this.mTRUE(); 


                break;
            case 8 :
                // ./grammars/JSON.g:1:59: FALSE
                this.mFALSE(); 


                break;
            case 9 :
                // ./grammars/JSON.g:1:65: NULL
                this.mNULL(); 


                break;
            case 10 :
                // ./grammars/JSON.g:1:70: WhiteSpace
                this.mWhiteSpace(); 


                break;
            case 11 :
                // ./grammars/JSON.g:1:81: String
                this.mString(); 


                break;
            case 12 :
                // ./grammars/JSON.g:1:88: Integer
                this.mInteger(); 


                break;
            case 13 :
                // ./grammars/JSON.g:1:96: Double
                this.mDouble(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(JSONLexer, {
    DFA12_eotS:
        "\u000d\uffff\u0002\u000f\u0002\uffff\u0001\u000f",
    DFA12_eofS:
        "\u0012\uffff",
    DFA12_minS:
        "\u0001\u0009\u000b\uffff\u0001\u0030\u0002\u002e\u0002\uffff\u0001"+
    "\u002e",
    DFA12_maxS:
        "\u0001\u007d\u000b\uffff\u0001\u0039\u0002\u0065\u0002\uffff\u0001"+
    "\u0065",
    DFA12_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\u0002\u0001\u0003\u0001\u0004\u0001"+
    "\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001\u000a\u0001"+
    "\u000b\u0003\uffff\u0001\u000c\u0001\u000d\u0001\uffff",
    DFA12_specialS:
        "\u0012\uffff}>",
    DFA12_transitionS: [
            "\u0002\u000a\u0001\uffff\u0002\u000a\u0012\uffff\u0001\u000a"+
            "\u0001\uffff\u0001\u000b\u0009\uffff\u0001\u0002\u0001\u000c"+
            "\u0002\uffff\u0001\u000d\u0009\u000e\u0001\u0001\u0020\uffff"+
            "\u0001\u0005\u0001\uffff\u0001\u0006\u0008\uffff\u0001\u0008"+
            "\u0007\uffff\u0001\u0009\u0005\uffff\u0001\u0007\u0006\uffff"+
            "\u0001\u0003\u0001\uffff\u0001\u0004",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u000d\u0009\u000e",
            "\u0001\u0010\u0016\uffff\u0001\u0010\u001f\uffff\u0001\u0010",
            "\u0001\u0010\u0001\uffff\u000a\u0011\u000b\uffff\u0001\u0010"+
            "\u001f\uffff\u0001\u0010",
            "",
            "",
            "\u0001\u0010\u0001\uffff\u000a\u0011\u000b\uffff\u0001\u0010"+
            "\u001f\uffff\u0001\u0010"
    ]
});

org.antlr.lang.augmentObject(JSONLexer, {
    DFA12_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JSONLexer.DFA12_eotS),
    DFA12_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JSONLexer.DFA12_eofS),
    DFA12_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JSONLexer.DFA12_minS),
    DFA12_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JSONLexer.DFA12_maxS),
    DFA12_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JSONLexer.DFA12_acceptS),
    DFA12_special:
        org.antlr.runtime.DFA.unpackEncodedString(JSONLexer.DFA12_specialS),
    DFA12_transition: (function() {
        var a = [],
            i,
            numStates = JSONLexer.DFA12_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JSONLexer.DFA12_transitionS[i]));
        }
        return a;
    })()
});

JSONLexer.DFA12 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 12;
    this.eot = JSONLexer.DFA12_eot;
    this.eof = JSONLexer.DFA12_eof;
    this.min = JSONLexer.DFA12_min;
    this.max = JSONLexer.DFA12_max;
    this.accept = JSONLexer.DFA12_accept;
    this.special = JSONLexer.DFA12_special;
    this.transition = JSONLexer.DFA12_transition;
};

org.antlr.lang.extend(JSONLexer.DFA12, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( Colon | Comma | LBrace | RBrace | LBracket | RBracket | TRUE | FALSE | NULL | WhiteSpace | String | Integer | Double );";
    },
    dummy: null
});
 
})();
module.exports = JSONLexer;
