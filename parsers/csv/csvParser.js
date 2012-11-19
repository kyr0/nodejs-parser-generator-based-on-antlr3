// $ANTLR 3.3 Nov 30, 2010 12:50:56 ./grammars/csv.g 2012-11-18 03:45:01

var csvParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    csvParser.superclass.constructor.call(this, input, state);


         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(csvParser, {
    EOF: -1,
    NEWLINE: 4,
    COMMA: 5,
    DQUOTE: 6,
    CHAR: 7
});

(function(){
// public class variables
var EOF= -1,
    NEWLINE= 4,
    COMMA= 5,
    DQUOTE= 6,
    CHAR= 7;

// public instance methods/vars
org.antlr.lang.extend(csvParser, org.antlr.runtime.Parser, {
        

    getTokenNames: function() { return csvParser.tokenNames; },
    getGrammarFileName: function() { return "./grammars/csv.g"; }
});
org.antlr.lang.augmentObject(csvParser.prototype, {


    // ./grammars/csv.g:23:1: file : record ( NEWLINE record )* EOF ;
    // $ANTLR start "file"
    file: function() {
        try {
            // ./grammars/csv.g:24:5: ( record ( NEWLINE record )* EOF )
            // ./grammars/csv.g:24:7: record ( NEWLINE record )* EOF
            this.pushFollow(csvParser.FOLLOW_record_in_file28);
            this.record();

            this.state._fsp--;

            // ./grammars/csv.g:24:14: ( NEWLINE record )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0==NEWLINE) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // ./grammars/csv.g:24:15: NEWLINE record
                    this.match(this.input,NEWLINE,csvParser.FOLLOW_NEWLINE_in_file31); 
                    this.pushFollow(csvParser.FOLLOW_record_in_file33);
                    this.record();

                    this.state._fsp--;



                    break;

                default :
                    break loop1;
                }
            } while (true);

            this.match(this.input,EOF,csvParser.FOLLOW_EOF_in_file37); 



        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // ./grammars/csv.g:27:1: record : ( quoted_field | unquoted_field ) ( COMMA ( quoted_field | unquoted_field ) )* ;
    // $ANTLR start "record"
    record: function() {
        try {
            // ./grammars/csv.g:28:5: ( ( quoted_field | unquoted_field ) ( COMMA ( quoted_field | unquoted_field ) )* )
            // ./grammars/csv.g:28:7: ( quoted_field | unquoted_field ) ( COMMA ( quoted_field | unquoted_field ) )*
            // ./grammars/csv.g:28:7: ( quoted_field | unquoted_field )
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0==DQUOTE) ) {
                alt2=1;
            }
            else if ( (LA2_0==EOF||(LA2_0>=NEWLINE && LA2_0<=COMMA)||LA2_0==CHAR) ) {
                alt2=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 2, 0, this.input);

                throw nvae;
            }
            switch (alt2) {
                case 1 :
                    // ./grammars/csv.g:28:8: quoted_field
                    this.pushFollow(csvParser.FOLLOW_quoted_field_in_record55);
                    this.quoted_field();

                    this.state._fsp--;



                    break;
                case 2 :
                    // ./grammars/csv.g:28:23: unquoted_field
                    this.pushFollow(csvParser.FOLLOW_unquoted_field_in_record59);
                    this.unquoted_field();

                    this.state._fsp--;



                    break;

            }

            // ./grammars/csv.g:28:39: ( COMMA ( quoted_field | unquoted_field ) )*
            loop4:
            do {
                var alt4=2;
                var LA4_0 = this.input.LA(1);

                if ( (LA4_0==COMMA) ) {
                    alt4=1;
                }


                switch (alt4) {
                case 1 :
                    // ./grammars/csv.g:28:40: COMMA ( quoted_field | unquoted_field )
                    this.match(this.input,COMMA,csvParser.FOLLOW_COMMA_in_record63); 
                    // ./grammars/csv.g:28:46: ( quoted_field | unquoted_field )
                    var alt3=2;
                    var LA3_0 = this.input.LA(1);

                    if ( (LA3_0==DQUOTE) ) {
                        alt3=1;
                    }
                    else if ( (LA3_0==EOF||(LA3_0>=NEWLINE && LA3_0<=COMMA)||LA3_0==CHAR) ) {
                        alt3=2;
                    }
                    else {
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 3, 0, this.input);

                        throw nvae;
                    }
                    switch (alt3) {
                        case 1 :
                            // ./grammars/csv.g:28:47: quoted_field
                            this.pushFollow(csvParser.FOLLOW_quoted_field_in_record66);
                            this.quoted_field();

                            this.state._fsp--;



                            break;
                        case 2 :
                            // ./grammars/csv.g:28:62: unquoted_field
                            this.pushFollow(csvParser.FOLLOW_unquoted_field_in_record70);
                            this.unquoted_field();

                            this.state._fsp--;



                            break;

                    }



                    break;

                default :
                    break loop4;
                }
            } while (true);




        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // ./grammars/csv.g:31:1: quoted_field : DQUOTE ( CHAR | COMMA | DQUOTE DQUOTE | NEWLINE )* DQUOTE ;
    // $ANTLR start "quoted_field"
    quoted_field: function() {
        try {
            // ./grammars/csv.g:32:5: ( DQUOTE ( CHAR | COMMA | DQUOTE DQUOTE | NEWLINE )* DQUOTE )
            // ./grammars/csv.g:32:7: DQUOTE ( CHAR | COMMA | DQUOTE DQUOTE | NEWLINE )* DQUOTE
            this.match(this.input,DQUOTE,csvParser.FOLLOW_DQUOTE_in_quoted_field90); 
            // ./grammars/csv.g:33:5: ( CHAR | COMMA | DQUOTE DQUOTE | NEWLINE )*
            loop5:
            do {
                var alt5=5;
                switch ( this.input.LA(1) ) {
                case DQUOTE:
                    var LA5_1 = this.input.LA(2);

                    if ( (LA5_1==DQUOTE) ) {
                        alt5=3;
                    }


                    break;
                case CHAR:
                    alt5=1;
                    break;
                case COMMA:
                    alt5=2;
                    break;
                case NEWLINE:
                    alt5=4;
                    break;

                }

                switch (alt5) {
                case 1 :
                    // ./grammars/csv.g:33:7: CHAR
                    this.match(this.input,CHAR,csvParser.FOLLOW_CHAR_in_quoted_field98); 


                    break;
                case 2 :
                    // ./grammars/csv.g:34:7: COMMA
                    this.match(this.input,COMMA,csvParser.FOLLOW_COMMA_in_quoted_field106); 


                    break;
                case 3 :
                    // ./grammars/csv.g:35:7: DQUOTE DQUOTE
                    this.match(this.input,DQUOTE,csvParser.FOLLOW_DQUOTE_in_quoted_field114); 
                    this.match(this.input,DQUOTE,csvParser.FOLLOW_DQUOTE_in_quoted_field116); 


                    break;
                case 4 :
                    // ./grammars/csv.g:36:7: NEWLINE
                    this.match(this.input,NEWLINE,csvParser.FOLLOW_NEWLINE_in_quoted_field124); 


                    break;

                default :
                    break loop5;
                }
            } while (true);

            this.match(this.input,DQUOTE,csvParser.FOLLOW_DQUOTE_in_quoted_field133); 



        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    },


    // ./grammars/csv.g:40:1: unquoted_field : ( CHAR )* ;
    // $ANTLR start "unquoted_field"
    unquoted_field: function() {
        try {
            // ./grammars/csv.g:41:5: ( ( CHAR )* )
            // ./grammars/csv.g:41:7: ( CHAR )*
            // ./grammars/csv.g:41:7: ( CHAR )*
            loop6:
            do {
                var alt6=2;
                var LA6_0 = this.input.LA(1);

                if ( (LA6_0==CHAR) ) {
                    alt6=1;
                }


                switch (alt6) {
                case 1 :
                    // ./grammars/csv.g:41:7: CHAR
                    this.match(this.input,CHAR,csvParser.FOLLOW_CHAR_in_unquoted_field150); 


                    break;

                default :
                    break loop6;
                }
            } while (true);




        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return ;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

 

// public class variables
org.antlr.lang.augmentObject(csvParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "NEWLINE", "COMMA", "DQUOTE", "CHAR"],
    FOLLOW_record_in_file28: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_NEWLINE_in_file31: new org.antlr.runtime.BitSet([0x000000E0, 0x00000000]),
    FOLLOW_record_in_file33: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_EOF_in_file37: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_quoted_field_in_record55: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_unquoted_field_in_record59: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_COMMA_in_record63: new org.antlr.runtime.BitSet([0x000000E0, 0x00000000]),
    FOLLOW_quoted_field_in_record66: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_unquoted_field_in_record70: new org.antlr.runtime.BitSet([0x00000022, 0x00000000]),
    FOLLOW_DQUOTE_in_quoted_field90: new org.antlr.runtime.BitSet([0x000000F0, 0x00000000]),
    FOLLOW_CHAR_in_quoted_field98: new org.antlr.runtime.BitSet([0x000000F0, 0x00000000]),
    FOLLOW_COMMA_in_quoted_field106: new org.antlr.runtime.BitSet([0x000000F0, 0x00000000]),
    FOLLOW_DQUOTE_in_quoted_field114: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_DQUOTE_in_quoted_field116: new org.antlr.runtime.BitSet([0x000000F0, 0x00000000]),
    FOLLOW_NEWLINE_in_quoted_field124: new org.antlr.runtime.BitSet([0x000000F0, 0x00000000]),
    FOLLOW_DQUOTE_in_quoted_field133: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_CHAR_in_unquoted_field150: new org.antlr.runtime.BitSet([0x00000082, 0x00000000])
});

})();
module.exports = csvParser;
