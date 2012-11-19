// $ANTLR 3.3 Nov 30, 2010 12:50:56 ./grammars/JavaScript.g 2012-11-18 03:45:22

var JavaScriptParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    JavaScriptParser.superclass.constructor.call(this, input, state);

    this.dfa4 = new JavaScriptParser.DFA4(this);
    this.dfa5 = new JavaScriptParser.DFA5(this);
    this.dfa17 = new JavaScriptParser.DFA17(this);
    this.dfa16 = new JavaScriptParser.DFA16(this);
    this.dfa21 = new JavaScriptParser.DFA21(this);
    this.dfa26 = new JavaScriptParser.DFA26(this);
    this.dfa30 = new JavaScriptParser.DFA30(this);
    this.dfa33 = new JavaScriptParser.DFA33(this);
    this.dfa57 = new JavaScriptParser.DFA57(this);
    this.dfa60 = new JavaScriptParser.DFA60(this);
    this.dfa63 = new JavaScriptParser.DFA63(this);
    this.dfa90 = new JavaScriptParser.DFA90(this);
    this.dfa94 = new JavaScriptParser.DFA94(this);
    this.dfa93 = new JavaScriptParser.DFA93(this);
    this.dfa106 = new JavaScriptParser.DFA106(this);
    this.dfa115 = new JavaScriptParser.DFA115(this);
    this.dfa118 = new JavaScriptParser.DFA118(this);
    this.dfa121 = new JavaScriptParser.DFA121(this);
    this.dfa124 = new JavaScriptParser.DFA124(this);
    this.dfa125 = new JavaScriptParser.DFA125(this);
    this.dfa127 = new JavaScriptParser.DFA127(this);
    this.dfa132 = new JavaScriptParser.DFA132(this);
    this.dfa136 = new JavaScriptParser.DFA136(this);
    this.dfa142 = new JavaScriptParser.DFA142(this);
    this.dfa141 = new JavaScriptParser.DFA141(this);
    this.dfa151 = new JavaScriptParser.DFA151(this);
    this.dfa156 = new JavaScriptParser.DFA156(this);
    this.dfa159 = new JavaScriptParser.DFA159(this);
    this.dfa162 = new JavaScriptParser.DFA162(this);
    this.dfa165 = new JavaScriptParser.DFA165(this);
    this.dfa168 = new JavaScriptParser.DFA168(this);
    this.dfa171 = new JavaScriptParser.DFA171(this);
    this.dfa174 = new JavaScriptParser.DFA174(this);
    this.dfa177 = new JavaScriptParser.DFA177(this);
    this.dfa180 = new JavaScriptParser.DFA180(this);
    this.dfa183 = new JavaScriptParser.DFA183(this);
    this.dfa186 = new JavaScriptParser.DFA186(this);
    this.dfa189 = new JavaScriptParser.DFA189(this);
    this.dfa192 = new JavaScriptParser.DFA192(this);
    this.dfa195 = new JavaScriptParser.DFA195(this);
    this.dfa198 = new JavaScriptParser.DFA198(this);
    this.dfa201 = new JavaScriptParser.DFA201(this);
    this.dfa204 = new JavaScriptParser.DFA204(this);
    this.dfa207 = new JavaScriptParser.DFA207(this);
    this.dfa218 = new JavaScriptParser.DFA218(this);
    this.dfa217 = new JavaScriptParser.DFA217(this);
    this.dfa223 = new JavaScriptParser.DFA223(this);

        this.state.ruleMemo = {};
         
         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(JavaScriptParser, {
    EOF: -1,
    T__31: 31,
    T__32: 32,
    T__33: 33,
    T__34: 34,
    T__35: 35,
    T__36: 36,
    T__37: 37,
    T__38: 38,
    T__39: 39,
    T__40: 40,
    T__41: 41,
    T__42: 42,
    T__43: 43,
    T__44: 44,
    T__45: 45,
    T__46: 46,
    T__47: 47,
    T__48: 48,
    T__49: 49,
    T__50: 50,
    T__51: 51,
    T__52: 52,
    T__53: 53,
    T__54: 54,
    T__55: 55,
    T__56: 56,
    T__57: 57,
    T__58: 58,
    T__59: 59,
    T__60: 60,
    T__61: 61,
    T__62: 62,
    T__63: 63,
    T__64: 64,
    T__65: 65,
    T__66: 66,
    T__67: 67,
    T__68: 68,
    T__69: 69,
    T__70: 70,
    T__71: 71,
    T__72: 72,
    T__73: 73,
    T__74: 74,
    T__75: 75,
    T__76: 76,
    T__77: 77,
    T__78: 78,
    T__79: 79,
    T__80: 80,
    T__81: 81,
    T__82: 82,
    T__83: 83,
    T__84: 84,
    T__85: 85,
    T__86: 86,
    T__87: 87,
    T__88: 88,
    T__89: 89,
    T__90: 90,
    T__91: 91,
    T__92: 92,
    T__93: 93,
    T__94: 94,
    T__95: 95,
    T__96: 96,
    T__97: 97,
    T__98: 98,
    T__99: 99,
    T__100: 100,
    T__101: 101,
    T__102: 102,
    T__103: 103,
    T__104: 104,
    T__105: 105,
    T__106: 106,
    LT: 4,
    Identifier: 5,
    StringLiteral: 6,
    NumericLiteral: 7,
    DoubleStringCharacter: 8,
    SingleStringCharacter: 9,
    EscapeSequence: 10,
    CharacterEscapeSequence: 11,
    HexEscapeSequence: 12,
    UnicodeEscapeSequence: 13,
    SingleEscapeCharacter: 14,
    NonEscapeCharacter: 15,
    EscapeCharacter: 16,
    DecimalDigit: 17,
    HexDigit: 18,
    DecimalLiteral: 19,
    HexIntegerLiteral: 20,
    ExponentPart: 21,
    IdentifierStart: 22,
    IdentifierPart: 23,
    UnicodeLetter: 24,
    UnicodeDigit: 25,
    UnicodeConnectorPunctuation: 26,
    UnicodeCombiningMark: 27,
    Comment: 28,
    LineComment: 29,
    WhiteSpace: 30
});

(function(){
// public class variables
var EOF= -1,
    T__31= 31,
    T__32= 32,
    T__33= 33,
    T__34= 34,
    T__35= 35,
    T__36= 36,
    T__37= 37,
    T__38= 38,
    T__39= 39,
    T__40= 40,
    T__41= 41,
    T__42= 42,
    T__43= 43,
    T__44= 44,
    T__45= 45,
    T__46= 46,
    T__47= 47,
    T__48= 48,
    T__49= 49,
    T__50= 50,
    T__51= 51,
    T__52= 52,
    T__53= 53,
    T__54= 54,
    T__55= 55,
    T__56= 56,
    T__57= 57,
    T__58= 58,
    T__59= 59,
    T__60= 60,
    T__61= 61,
    T__62= 62,
    T__63= 63,
    T__64= 64,
    T__65= 65,
    T__66= 66,
    T__67= 67,
    T__68= 68,
    T__69= 69,
    T__70= 70,
    T__71= 71,
    T__72= 72,
    T__73= 73,
    T__74= 74,
    T__75= 75,
    T__76= 76,
    T__77= 77,
    T__78= 78,
    T__79= 79,
    T__80= 80,
    T__81= 81,
    T__82= 82,
    T__83= 83,
    T__84= 84,
    T__85= 85,
    T__86= 86,
    T__87= 87,
    T__88= 88,
    T__89= 89,
    T__90= 90,
    T__91= 91,
    T__92= 92,
    T__93= 93,
    T__94= 94,
    T__95= 95,
    T__96= 96,
    T__97= 97,
    T__98= 98,
    T__99= 99,
    T__100= 100,
    T__101= 101,
    T__102= 102,
    T__103= 103,
    T__104= 104,
    T__105= 105,
    T__106= 106,
    LT= 4,
    Identifier= 5,
    StringLiteral= 6,
    NumericLiteral= 7,
    DoubleStringCharacter= 8,
    SingleStringCharacter= 9,
    EscapeSequence= 10,
    CharacterEscapeSequence= 11,
    HexEscapeSequence= 12,
    UnicodeEscapeSequence= 13,
    SingleEscapeCharacter= 14,
    NonEscapeCharacter= 15,
    EscapeCharacter= 16,
    DecimalDigit= 17,
    HexDigit= 18,
    DecimalLiteral= 19,
    HexIntegerLiteral= 20,
    ExponentPart= 21,
    IdentifierStart= 22,
    IdentifierPart= 23,
    UnicodeLetter= 24,
    UnicodeDigit= 25,
    UnicodeConnectorPunctuation= 26,
    UnicodeCombiningMark= 27,
    Comment= 28,
    LineComment= 29,
    WhiteSpace= 30;

// public instance methods/vars
org.antlr.lang.extend(JavaScriptParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return JavaScriptParser.tokenNames; },
    getGrammarFileName: function() { return "./grammars/JavaScript.g"; }
});
org.antlr.lang.augmentObject(JavaScriptParser.prototype, {

    // inline static return class
    program_return: (function() {
        JavaScriptParser.program_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.program_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:20:1: program : ( LT )* sourceElements ( LT )* EOF ;
    // $ANTLR start "program"
    program: function() {
        var retval = new JavaScriptParser.program_return();
        retval.start = this.input.LT(1);
        var program_StartIndex = this.input.index();
        var root_0 = null;

        var LT1 = null;
        var LT3 = null;
        var EOF4 = null;
         var sourceElements2 = null;

        var LT1_tree=null;
        var LT3_tree=null;
        var EOF4_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 1) ) { return retval; }
            // ./grammars/JavaScript.g:21:2: ( ( LT )* sourceElements ( LT )* EOF )
            // ./grammars/JavaScript.g:21:4: ( LT )* sourceElements ( LT )* EOF
            root_0 = this.adaptor.nil();

            // ./grammars/JavaScript.g:21:6: ( LT )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0==LT) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT1=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_program42); if (this.state.failed) return retval;


                    break;

                default :
                    break loop1;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_sourceElements_in_program46);
            sourceElements2=this.sourceElements();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, sourceElements2.getTree());
            // ./grammars/JavaScript.g:21:26: ( LT )*
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( (LA2_0==LT) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT3=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_program48); if (this.state.failed) return retval;


                    break;

                default :
                    break loop2;
                }
            } while (true);

            EOF4=this.match(this.input,EOF,JavaScriptParser.FOLLOW_EOF_in_program52); if (this.state.failed) return retval;



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 1, program_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    sourceElements_return: (function() {
        JavaScriptParser.sourceElements_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.sourceElements_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:24:1: sourceElements : sourceElement ( ( LT )* sourceElement )* ;
    // $ANTLR start "sourceElements"
    sourceElements: function() {
        var retval = new JavaScriptParser.sourceElements_return();
        retval.start = this.input.LT(1);
        var sourceElements_StartIndex = this.input.index();
        var root_0 = null;

        var LT6 = null;
         var sourceElement5 = null;
         var sourceElement7 = null;

        var LT6_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 2) ) { return retval; }
            // ./grammars/JavaScript.g:25:2: ( sourceElement ( ( LT )* sourceElement )* )
            // ./grammars/JavaScript.g:25:4: sourceElement ( ( LT )* sourceElement )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_sourceElement_in_sourceElements65);
            sourceElement5=this.sourceElement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, sourceElement5.getTree());
            // ./grammars/JavaScript.g:25:18: ( ( LT )* sourceElement )*
            loop4:
            do {
                var alt4=2;
                alt4 = this.dfa4.predict(this.input);
                switch (alt4) {
                case 1 :
                    // ./grammars/JavaScript.g:25:19: ( LT )* sourceElement
                    // ./grammars/JavaScript.g:25:21: ( LT )*
                    loop3:
                    do {
                        var alt3=2;
                        var LA3_0 = this.input.LA(1);

                        if ( (LA3_0==LT) ) {
                            alt3=1;
                        }


                        switch (alt3) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT6=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_sourceElements68); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop3;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_sourceElement_in_sourceElements72);
                    sourceElement7=this.sourceElement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, sourceElement7.getTree());


                    break;

                default :
                    break loop4;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 2, sourceElements_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    sourceElement_return: (function() {
        JavaScriptParser.sourceElement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.sourceElement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:28:1: sourceElement : ( functionDeclaration | statement );
    // $ANTLR start "sourceElement"
    sourceElement: function() {
        var retval = new JavaScriptParser.sourceElement_return();
        retval.start = this.input.LT(1);
        var sourceElement_StartIndex = this.input.index();
        var root_0 = null;

         var functionDeclaration8 = null;
         var statement9 = null;


        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 3) ) { return retval; }
            // ./grammars/JavaScript.g:29:2: ( functionDeclaration | statement )
            var alt5=2;
            alt5 = this.dfa5.predict(this.input);
            switch (alt5) {
                case 1 :
                    // ./grammars/JavaScript.g:29:4: functionDeclaration
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_functionDeclaration_in_sourceElement86);
                    functionDeclaration8=this.functionDeclaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, functionDeclaration8.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:30:4: statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_statement_in_sourceElement91);
                    statement9=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement9.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 3, sourceElement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    functionDeclaration_return: (function() {
        JavaScriptParser.functionDeclaration_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.functionDeclaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:34:1: functionDeclaration : 'function' ( LT )* Identifier ( LT )* formalParameterList ( LT )* functionBody ;
    // $ANTLR start "functionDeclaration"
    functionDeclaration: function() {
        var retval = new JavaScriptParser.functionDeclaration_return();
        retval.start = this.input.LT(1);
        var functionDeclaration_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal10 = null;
        var LT11 = null;
        var Identifier12 = null;
        var LT13 = null;
        var LT15 = null;
         var formalParameterList14 = null;
         var functionBody16 = null;

        var string_literal10_tree=null;
        var LT11_tree=null;
        var Identifier12_tree=null;
        var LT13_tree=null;
        var LT15_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 4) ) { return retval; }
            // ./grammars/JavaScript.g:35:2: ( 'function' ( LT )* Identifier ( LT )* formalParameterList ( LT )* functionBody )
            // ./grammars/JavaScript.g:35:4: 'function' ( LT )* Identifier ( LT )* formalParameterList ( LT )* functionBody
            root_0 = this.adaptor.nil();

            string_literal10=this.match(this.input,31,JavaScriptParser.FOLLOW_31_in_functionDeclaration104); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal10_tree = this.adaptor.create(string_literal10);
            this.adaptor.addChild(root_0, string_literal10_tree);
            }
            // ./grammars/JavaScript.g:35:17: ( LT )*
            loop6:
            do {
                var alt6=2;
                var LA6_0 = this.input.LA(1);

                if ( (LA6_0==LT) ) {
                    alt6=1;
                }


                switch (alt6) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT11=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_functionDeclaration106); if (this.state.failed) return retval;


                    break;

                default :
                    break loop6;
                }
            } while (true);

            Identifier12=this.match(this.input,Identifier,JavaScriptParser.FOLLOW_Identifier_in_functionDeclaration110); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            Identifier12_tree = this.adaptor.create(Identifier12);
            this.adaptor.addChild(root_0, Identifier12_tree);
            }
            // ./grammars/JavaScript.g:35:33: ( LT )*
            loop7:
            do {
                var alt7=2;
                var LA7_0 = this.input.LA(1);

                if ( (LA7_0==LT) ) {
                    alt7=1;
                }


                switch (alt7) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT13=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_functionDeclaration112); if (this.state.failed) return retval;


                    break;

                default :
                    break loop7;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_formalParameterList_in_functionDeclaration116);
            formalParameterList14=this.formalParameterList();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, formalParameterList14.getTree());
            // ./grammars/JavaScript.g:35:58: ( LT )*
            loop8:
            do {
                var alt8=2;
                var LA8_0 = this.input.LA(1);

                if ( (LA8_0==LT) ) {
                    alt8=1;
                }


                switch (alt8) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT15=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_functionDeclaration118); if (this.state.failed) return retval;


                    break;

                default :
                    break loop8;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_functionBody_in_functionDeclaration122);
            functionBody16=this.functionBody();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, functionBody16.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 4, functionDeclaration_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    functionExpression_return: (function() {
        JavaScriptParser.functionExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.functionExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:38:1: functionExpression : 'function' ( LT )* ( Identifier )? ( LT )* formalParameterList ( LT )* functionBody ;
    // $ANTLR start "functionExpression"
    functionExpression: function() {
        var retval = new JavaScriptParser.functionExpression_return();
        retval.start = this.input.LT(1);
        var functionExpression_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal17 = null;
        var LT18 = null;
        var Identifier19 = null;
        var LT20 = null;
        var LT22 = null;
         var formalParameterList21 = null;
         var functionBody23 = null;

        var string_literal17_tree=null;
        var LT18_tree=null;
        var Identifier19_tree=null;
        var LT20_tree=null;
        var LT22_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 5) ) { return retval; }
            // ./grammars/JavaScript.g:39:2: ( 'function' ( LT )* ( Identifier )? ( LT )* formalParameterList ( LT )* functionBody )
            // ./grammars/JavaScript.g:39:4: 'function' ( LT )* ( Identifier )? ( LT )* formalParameterList ( LT )* functionBody
            root_0 = this.adaptor.nil();

            string_literal17=this.match(this.input,31,JavaScriptParser.FOLLOW_31_in_functionExpression134); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal17_tree = this.adaptor.create(string_literal17);
            this.adaptor.addChild(root_0, string_literal17_tree);
            }
            // ./grammars/JavaScript.g:39:17: ( LT )*
            loop9:
            do {
                var alt9=2;
                var LA9_0 = this.input.LA(1);

                if ( (LA9_0==LT) ) {
                    var LA9_2 = this.input.LA(2);

                    if ( (this.synpred9_JavaScript()) ) {
                        alt9=1;
                    }


                }


                switch (alt9) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT18=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_functionExpression136); if (this.state.failed) return retval;


                    break;

                default :
                    break loop9;
                }
            } while (true);

            // ./grammars/JavaScript.g:39:20: ( Identifier )?
            var alt10=2;
            var LA10_0 = this.input.LA(1);

            if ( (LA10_0==Identifier) ) {
                alt10=1;
            }
            switch (alt10) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: Identifier
                    Identifier19=this.match(this.input,Identifier,JavaScriptParser.FOLLOW_Identifier_in_functionExpression140); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    Identifier19_tree = this.adaptor.create(Identifier19);
                    this.adaptor.addChild(root_0, Identifier19_tree);
                    }


                    break;

            }

            // ./grammars/JavaScript.g:39:34: ( LT )*
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( (LA11_0==LT) ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT20=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_functionExpression143); if (this.state.failed) return retval;


                    break;

                default :
                    break loop11;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_formalParameterList_in_functionExpression147);
            formalParameterList21=this.formalParameterList();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, formalParameterList21.getTree());
            // ./grammars/JavaScript.g:39:59: ( LT )*
            loop12:
            do {
                var alt12=2;
                var LA12_0 = this.input.LA(1);

                if ( (LA12_0==LT) ) {
                    alt12=1;
                }


                switch (alt12) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT22=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_functionExpression149); if (this.state.failed) return retval;


                    break;

                default :
                    break loop12;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_functionBody_in_functionExpression153);
            functionBody23=this.functionBody();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, functionBody23.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 5, functionExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    formalParameterList_return: (function() {
        JavaScriptParser.formalParameterList_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.formalParameterList_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:42:1: formalParameterList : '(' ( ( LT )* Identifier ( ( LT )* ',' ( LT )* Identifier )* )? ( LT )* ')' ;
    // $ANTLR start "formalParameterList"
    formalParameterList: function() {
        var retval = new JavaScriptParser.formalParameterList_return();
        retval.start = this.input.LT(1);
        var formalParameterList_StartIndex = this.input.index();
        var root_0 = null;

        var char_literal24 = null;
        var LT25 = null;
        var Identifier26 = null;
        var LT27 = null;
        var char_literal28 = null;
        var LT29 = null;
        var Identifier30 = null;
        var LT31 = null;
        var char_literal32 = null;

        var char_literal24_tree=null;
        var LT25_tree=null;
        var Identifier26_tree=null;
        var LT27_tree=null;
        var char_literal28_tree=null;
        var LT29_tree=null;
        var Identifier30_tree=null;
        var LT31_tree=null;
        var char_literal32_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 6) ) { return retval; }
            // ./grammars/JavaScript.g:43:2: ( '(' ( ( LT )* Identifier ( ( LT )* ',' ( LT )* Identifier )* )? ( LT )* ')' )
            // ./grammars/JavaScript.g:43:4: '(' ( ( LT )* Identifier ( ( LT )* ',' ( LT )* Identifier )* )? ( LT )* ')'
            root_0 = this.adaptor.nil();

            char_literal24=this.match(this.input,32,JavaScriptParser.FOLLOW_32_in_formalParameterList165); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal24_tree = this.adaptor.create(char_literal24);
            this.adaptor.addChild(root_0, char_literal24_tree);
            }
            // ./grammars/JavaScript.g:43:8: ( ( LT )* Identifier ( ( LT )* ',' ( LT )* Identifier )* )?
            var alt17=2;
            alt17 = this.dfa17.predict(this.input);
            switch (alt17) {
                case 1 :
                    // ./grammars/JavaScript.g:43:9: ( LT )* Identifier ( ( LT )* ',' ( LT )* Identifier )*
                    // ./grammars/JavaScript.g:43:11: ( LT )*
                    loop13:
                    do {
                        var alt13=2;
                        var LA13_0 = this.input.LA(1);

                        if ( (LA13_0==LT) ) {
                            alt13=1;
                        }


                        switch (alt13) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT25=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_formalParameterList168); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop13;
                        }
                    } while (true);

                    Identifier26=this.match(this.input,Identifier,JavaScriptParser.FOLLOW_Identifier_in_formalParameterList172); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    Identifier26_tree = this.adaptor.create(Identifier26);
                    this.adaptor.addChild(root_0, Identifier26_tree);
                    }
                    // ./grammars/JavaScript.g:43:25: ( ( LT )* ',' ( LT )* Identifier )*
                    loop16:
                    do {
                        var alt16=2;
                        alt16 = this.dfa16.predict(this.input);
                        switch (alt16) {
                        case 1 :
                            // ./grammars/JavaScript.g:43:26: ( LT )* ',' ( LT )* Identifier
                            // ./grammars/JavaScript.g:43:28: ( LT )*
                            loop14:
                            do {
                                var alt14=2;
                                var LA14_0 = this.input.LA(1);

                                if ( (LA14_0==LT) ) {
                                    alt14=1;
                                }


                                switch (alt14) {
                                case 1 :
                                    // ./grammars/JavaScript.g:0:0: LT
                                    LT27=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_formalParameterList175); if (this.state.failed) return retval;


                                    break;

                                default :
                                    break loop14;
                                }
                            } while (true);

                            char_literal28=this.match(this.input,33,JavaScriptParser.FOLLOW_33_in_formalParameterList179); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            char_literal28_tree = this.adaptor.create(char_literal28);
                            this.adaptor.addChild(root_0, char_literal28_tree);
                            }
                            // ./grammars/JavaScript.g:43:37: ( LT )*
                            loop15:
                            do {
                                var alt15=2;
                                var LA15_0 = this.input.LA(1);

                                if ( (LA15_0==LT) ) {
                                    alt15=1;
                                }


                                switch (alt15) {
                                case 1 :
                                    // ./grammars/JavaScript.g:0:0: LT
                                    LT29=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_formalParameterList181); if (this.state.failed) return retval;


                                    break;

                                default :
                                    break loop15;
                                }
                            } while (true);

                            Identifier30=this.match(this.input,Identifier,JavaScriptParser.FOLLOW_Identifier_in_formalParameterList185); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            Identifier30_tree = this.adaptor.create(Identifier30);
                            this.adaptor.addChild(root_0, Identifier30_tree);
                            }


                            break;

                        default :
                            break loop16;
                        }
                    } while (true);



                    break;

            }

            // ./grammars/JavaScript.g:43:57: ( LT )*
            loop18:
            do {
                var alt18=2;
                var LA18_0 = this.input.LA(1);

                if ( (LA18_0==LT) ) {
                    alt18=1;
                }


                switch (alt18) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT31=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_formalParameterList191); if (this.state.failed) return retval;


                    break;

                default :
                    break loop18;
                }
            } while (true);

            char_literal32=this.match(this.input,34,JavaScriptParser.FOLLOW_34_in_formalParameterList195); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal32_tree = this.adaptor.create(char_literal32);
            this.adaptor.addChild(root_0, char_literal32_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 6, formalParameterList_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    functionBody_return: (function() {
        JavaScriptParser.functionBody_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.functionBody_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:46:1: functionBody : '{' ( LT )* sourceElements ( LT )* '}' ;
    // $ANTLR start "functionBody"
    functionBody: function() {
        var retval = new JavaScriptParser.functionBody_return();
        retval.start = this.input.LT(1);
        var functionBody_StartIndex = this.input.index();
        var root_0 = null;

        var char_literal33 = null;
        var LT34 = null;
        var LT36 = null;
        var char_literal37 = null;
         var sourceElements35 = null;

        var char_literal33_tree=null;
        var LT34_tree=null;
        var LT36_tree=null;
        var char_literal37_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 7) ) { return retval; }
            // ./grammars/JavaScript.g:47:2: ( '{' ( LT )* sourceElements ( LT )* '}' )
            // ./grammars/JavaScript.g:47:4: '{' ( LT )* sourceElements ( LT )* '}'
            root_0 = this.adaptor.nil();

            char_literal33=this.match(this.input,35,JavaScriptParser.FOLLOW_35_in_functionBody206); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal33_tree = this.adaptor.create(char_literal33);
            this.adaptor.addChild(root_0, char_literal33_tree);
            }
            // ./grammars/JavaScript.g:47:10: ( LT )*
            loop19:
            do {
                var alt19=2;
                var LA19_0 = this.input.LA(1);

                if ( (LA19_0==LT) ) {
                    alt19=1;
                }


                switch (alt19) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT34=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_functionBody208); if (this.state.failed) return retval;


                    break;

                default :
                    break loop19;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_sourceElements_in_functionBody212);
            sourceElements35=this.sourceElements();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, sourceElements35.getTree());
            // ./grammars/JavaScript.g:47:30: ( LT )*
            loop20:
            do {
                var alt20=2;
                var LA20_0 = this.input.LA(1);

                if ( (LA20_0==LT) ) {
                    alt20=1;
                }


                switch (alt20) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT36=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_functionBody214); if (this.state.failed) return retval;


                    break;

                default :
                    break loop20;
                }
            } while (true);

            char_literal37=this.match(this.input,36,JavaScriptParser.FOLLOW_36_in_functionBody218); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal37_tree = this.adaptor.create(char_literal37);
            this.adaptor.addChild(root_0, char_literal37_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 7, functionBody_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    statement_return: (function() {
        JavaScriptParser.statement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:51:1: statement : ( statementBlock | variableStatement | emptyStatement | expressionStatement | ifStatement | iterationStatement | continueStatement | breakStatement | returnStatement | withStatement | labelledStatement | switchStatement | throwStatement | tryStatement );
    // $ANTLR start "statement"
    statement: function() {
        var retval = new JavaScriptParser.statement_return();
        retval.start = this.input.LT(1);
        var statement_StartIndex = this.input.index();
        var root_0 = null;

         var statementBlock38 = null;
         var variableStatement39 = null;
         var emptyStatement40 = null;
         var expressionStatement41 = null;
         var ifStatement42 = null;
         var iterationStatement43 = null;
         var continueStatement44 = null;
         var breakStatement45 = null;
         var returnStatement46 = null;
         var withStatement47 = null;
         var labelledStatement48 = null;
         var switchStatement49 = null;
         var throwStatement50 = null;
         var tryStatement51 = null;


        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 8) ) { return retval; }
            // ./grammars/JavaScript.g:52:2: ( statementBlock | variableStatement | emptyStatement | expressionStatement | ifStatement | iterationStatement | continueStatement | breakStatement | returnStatement | withStatement | labelledStatement | switchStatement | throwStatement | tryStatement )
            var alt21=14;
            alt21 = this.dfa21.predict(this.input);
            switch (alt21) {
                case 1 :
                    // ./grammars/JavaScript.g:52:4: statementBlock
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_statementBlock_in_statement230);
                    statementBlock38=this.statementBlock();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statementBlock38.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:53:4: variableStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_variableStatement_in_statement235);
                    variableStatement39=this.variableStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, variableStatement39.getTree());


                    break;
                case 3 :
                    // ./grammars/JavaScript.g:54:4: emptyStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_emptyStatement_in_statement240);
                    emptyStatement40=this.emptyStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, emptyStatement40.getTree());


                    break;
                case 4 :
                    // ./grammars/JavaScript.g:55:4: expressionStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_expressionStatement_in_statement245);
                    expressionStatement41=this.expressionStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expressionStatement41.getTree());


                    break;
                case 5 :
                    // ./grammars/JavaScript.g:56:4: ifStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_ifStatement_in_statement250);
                    ifStatement42=this.ifStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, ifStatement42.getTree());


                    break;
                case 6 :
                    // ./grammars/JavaScript.g:57:4: iterationStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_iterationStatement_in_statement255);
                    iterationStatement43=this.iterationStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, iterationStatement43.getTree());


                    break;
                case 7 :
                    // ./grammars/JavaScript.g:58:4: continueStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_continueStatement_in_statement260);
                    continueStatement44=this.continueStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, continueStatement44.getTree());


                    break;
                case 8 :
                    // ./grammars/JavaScript.g:59:4: breakStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_breakStatement_in_statement265);
                    breakStatement45=this.breakStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, breakStatement45.getTree());


                    break;
                case 9 :
                    // ./grammars/JavaScript.g:60:4: returnStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_returnStatement_in_statement270);
                    returnStatement46=this.returnStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, returnStatement46.getTree());


                    break;
                case 10 :
                    // ./grammars/JavaScript.g:61:4: withStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_withStatement_in_statement275);
                    withStatement47=this.withStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, withStatement47.getTree());


                    break;
                case 11 :
                    // ./grammars/JavaScript.g:62:4: labelledStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_labelledStatement_in_statement280);
                    labelledStatement48=this.labelledStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, labelledStatement48.getTree());


                    break;
                case 12 :
                    // ./grammars/JavaScript.g:63:4: switchStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_switchStatement_in_statement285);
                    switchStatement49=this.switchStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, switchStatement49.getTree());


                    break;
                case 13 :
                    // ./grammars/JavaScript.g:64:4: throwStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_throwStatement_in_statement290);
                    throwStatement50=this.throwStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, throwStatement50.getTree());


                    break;
                case 14 :
                    // ./grammars/JavaScript.g:65:4: tryStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_tryStatement_in_statement295);
                    tryStatement51=this.tryStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, tryStatement51.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 8, statement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    statementBlock_return: (function() {
        JavaScriptParser.statementBlock_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.statementBlock_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:68:1: statementBlock : '{' ( LT )* ( statementList )? ( LT )* '}' ;
    // $ANTLR start "statementBlock"
    statementBlock: function() {
        var retval = new JavaScriptParser.statementBlock_return();
        retval.start = this.input.LT(1);
        var statementBlock_StartIndex = this.input.index();
        var root_0 = null;

        var char_literal52 = null;
        var LT53 = null;
        var LT55 = null;
        var char_literal56 = null;
         var statementList54 = null;

        var char_literal52_tree=null;
        var LT53_tree=null;
        var LT55_tree=null;
        var char_literal56_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 9) ) { return retval; }
            // ./grammars/JavaScript.g:69:2: ( '{' ( LT )* ( statementList )? ( LT )* '}' )
            // ./grammars/JavaScript.g:69:4: '{' ( LT )* ( statementList )? ( LT )* '}'
            root_0 = this.adaptor.nil();

            char_literal52=this.match(this.input,35,JavaScriptParser.FOLLOW_35_in_statementBlock307); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal52_tree = this.adaptor.create(char_literal52);
            this.adaptor.addChild(root_0, char_literal52_tree);
            }
            // ./grammars/JavaScript.g:69:10: ( LT )*
            loop22:
            do {
                var alt22=2;
                var LA22_0 = this.input.LA(1);

                if ( (LA22_0==LT) ) {
                    var LA22_2 = this.input.LA(2);

                    if ( (this.synpred34_JavaScript()) ) {
                        alt22=1;
                    }


                }


                switch (alt22) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT53=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_statementBlock309); if (this.state.failed) return retval;


                    break;

                default :
                    break loop22;
                }
            } while (true);

            // ./grammars/JavaScript.g:69:13: ( statementList )?
            var alt23=2;
            var LA23_0 = this.input.LA(1);

            if ( ((LA23_0>=Identifier && LA23_0<=NumericLiteral)||(LA23_0>=31 && LA23_0<=32)||LA23_0==35||(LA23_0>=37 && LA23_0<=38)||LA23_0==40||(LA23_0>=42 && LA23_0<=44)||(LA23_0>=46 && LA23_0<=49)||LA23_0==51||(LA23_0>=54 && LA23_0<=55)||(LA23_0>=58 && LA23_0<=59)||(LA23_0>=91 && LA23_0<=92)||(LA23_0>=96 && LA23_0<=106)) ) {
                alt23=1;
            }
            switch (alt23) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: statementList
                    this.pushFollow(JavaScriptParser.FOLLOW_statementList_in_statementBlock313);
                    statementList54=this.statementList();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statementList54.getTree());


                    break;

            }

            // ./grammars/JavaScript.g:69:30: ( LT )*
            loop24:
            do {
                var alt24=2;
                var LA24_0 = this.input.LA(1);

                if ( (LA24_0==LT) ) {
                    alt24=1;
                }


                switch (alt24) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT55=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_statementBlock316); if (this.state.failed) return retval;


                    break;

                default :
                    break loop24;
                }
            } while (true);

            char_literal56=this.match(this.input,36,JavaScriptParser.FOLLOW_36_in_statementBlock320); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal56_tree = this.adaptor.create(char_literal56);
            this.adaptor.addChild(root_0, char_literal56_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 9, statementBlock_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    statementList_return: (function() {
        JavaScriptParser.statementList_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.statementList_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:72:1: statementList : statement ( ( LT )* statement )* ;
    // $ANTLR start "statementList"
    statementList: function() {
        var retval = new JavaScriptParser.statementList_return();
        retval.start = this.input.LT(1);
        var statementList_StartIndex = this.input.index();
        var root_0 = null;

        var LT58 = null;
         var statement57 = null;
         var statement59 = null;

        var LT58_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 10) ) { return retval; }
            // ./grammars/JavaScript.g:73:2: ( statement ( ( LT )* statement )* )
            // ./grammars/JavaScript.g:73:4: statement ( ( LT )* statement )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_statement_in_statementList332);
            statement57=this.statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement57.getTree());
            // ./grammars/JavaScript.g:73:14: ( ( LT )* statement )*
            loop26:
            do {
                var alt26=2;
                alt26 = this.dfa26.predict(this.input);
                switch (alt26) {
                case 1 :
                    // ./grammars/JavaScript.g:73:15: ( LT )* statement
                    // ./grammars/JavaScript.g:73:17: ( LT )*
                    loop25:
                    do {
                        var alt25=2;
                        var LA25_0 = this.input.LA(1);

                        if ( (LA25_0==LT) ) {
                            alt25=1;
                        }


                        switch (alt25) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT58=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_statementList335); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop25;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_statement_in_statementList339);
                    statement59=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement59.getTree());


                    break;

                default :
                    break loop26;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 10, statementList_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    variableStatement_return: (function() {
        JavaScriptParser.variableStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.variableStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:76:1: variableStatement : 'var' ( LT )* variableDeclarationList ( LT | ';' ) ;
    // $ANTLR start "variableStatement"
    variableStatement: function() {
        var retval = new JavaScriptParser.variableStatement_return();
        retval.start = this.input.LT(1);
        var variableStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal60 = null;
        var LT61 = null;
        var set63 = null;
         var variableDeclarationList62 = null;

        var string_literal60_tree=null;
        var LT61_tree=null;
        var set63_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 11) ) { return retval; }
            // ./grammars/JavaScript.g:77:2: ( 'var' ( LT )* variableDeclarationList ( LT | ';' ) )
            // ./grammars/JavaScript.g:77:4: 'var' ( LT )* variableDeclarationList ( LT | ';' )
            root_0 = this.adaptor.nil();

            string_literal60=this.match(this.input,37,JavaScriptParser.FOLLOW_37_in_variableStatement353); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal60_tree = this.adaptor.create(string_literal60);
            this.adaptor.addChild(root_0, string_literal60_tree);
            }
            // ./grammars/JavaScript.g:77:12: ( LT )*
            loop27:
            do {
                var alt27=2;
                var LA27_0 = this.input.LA(1);

                if ( (LA27_0==LT) ) {
                    alt27=1;
                }


                switch (alt27) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT61=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_variableStatement355); if (this.state.failed) return retval;


                    break;

                default :
                    break loop27;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_variableDeclarationList_in_variableStatement359);
            variableDeclarationList62=this.variableDeclarationList();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, variableDeclarationList62.getTree());
            set63=this.input.LT(1);
            if ( this.input.LA(1)==LT||this.input.LA(1)==38 ) {
                this.input.consume();
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 11, variableStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    variableDeclarationList_return: (function() {
        JavaScriptParser.variableDeclarationList_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.variableDeclarationList_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:80:1: variableDeclarationList : variableDeclaration ( ( LT )* ',' ( LT )* variableDeclaration )* ;
    // $ANTLR start "variableDeclarationList"
    variableDeclarationList: function() {
        var retval = new JavaScriptParser.variableDeclarationList_return();
        retval.start = this.input.LT(1);
        var variableDeclarationList_StartIndex = this.input.index();
        var root_0 = null;

        var LT65 = null;
        var char_literal66 = null;
        var LT67 = null;
         var variableDeclaration64 = null;
         var variableDeclaration68 = null;

        var LT65_tree=null;
        var char_literal66_tree=null;
        var LT67_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 12) ) { return retval; }
            // ./grammars/JavaScript.g:81:2: ( variableDeclaration ( ( LT )* ',' ( LT )* variableDeclaration )* )
            // ./grammars/JavaScript.g:81:4: variableDeclaration ( ( LT )* ',' ( LT )* variableDeclaration )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_variableDeclaration_in_variableDeclarationList380);
            variableDeclaration64=this.variableDeclaration();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, variableDeclaration64.getTree());
            // ./grammars/JavaScript.g:81:24: ( ( LT )* ',' ( LT )* variableDeclaration )*
            loop30:
            do {
                var alt30=2;
                alt30 = this.dfa30.predict(this.input);
                switch (alt30) {
                case 1 :
                    // ./grammars/JavaScript.g:81:25: ( LT )* ',' ( LT )* variableDeclaration
                    // ./grammars/JavaScript.g:81:27: ( LT )*
                    loop28:
                    do {
                        var alt28=2;
                        var LA28_0 = this.input.LA(1);

                        if ( (LA28_0==LT) ) {
                            alt28=1;
                        }


                        switch (alt28) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT65=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_variableDeclarationList383); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop28;
                        }
                    } while (true);

                    char_literal66=this.match(this.input,33,JavaScriptParser.FOLLOW_33_in_variableDeclarationList387); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal66_tree = this.adaptor.create(char_literal66);
                    this.adaptor.addChild(root_0, char_literal66_tree);
                    }
                    // ./grammars/JavaScript.g:81:36: ( LT )*
                    loop29:
                    do {
                        var alt29=2;
                        var LA29_0 = this.input.LA(1);

                        if ( (LA29_0==LT) ) {
                            alt29=1;
                        }


                        switch (alt29) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT67=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_variableDeclarationList389); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop29;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_variableDeclaration_in_variableDeclarationList393);
                    variableDeclaration68=this.variableDeclaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, variableDeclaration68.getTree());


                    break;

                default :
                    break loop30;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 12, variableDeclarationList_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    variableDeclarationListNoIn_return: (function() {
        JavaScriptParser.variableDeclarationListNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.variableDeclarationListNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:84:1: variableDeclarationListNoIn : variableDeclarationNoIn ( ( LT )* ',' ( LT )* variableDeclarationNoIn )* ;
    // $ANTLR start "variableDeclarationListNoIn"
    variableDeclarationListNoIn: function() {
        var retval = new JavaScriptParser.variableDeclarationListNoIn_return();
        retval.start = this.input.LT(1);
        var variableDeclarationListNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var LT70 = null;
        var char_literal71 = null;
        var LT72 = null;
         var variableDeclarationNoIn69 = null;
         var variableDeclarationNoIn73 = null;

        var LT70_tree=null;
        var char_literal71_tree=null;
        var LT72_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 13) ) { return retval; }
            // ./grammars/JavaScript.g:85:2: ( variableDeclarationNoIn ( ( LT )* ',' ( LT )* variableDeclarationNoIn )* )
            // ./grammars/JavaScript.g:85:4: variableDeclarationNoIn ( ( LT )* ',' ( LT )* variableDeclarationNoIn )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_variableDeclarationNoIn_in_variableDeclarationListNoIn407);
            variableDeclarationNoIn69=this.variableDeclarationNoIn();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, variableDeclarationNoIn69.getTree());
            // ./grammars/JavaScript.g:85:28: ( ( LT )* ',' ( LT )* variableDeclarationNoIn )*
            loop33:
            do {
                var alt33=2;
                alt33 = this.dfa33.predict(this.input);
                switch (alt33) {
                case 1 :
                    // ./grammars/JavaScript.g:85:29: ( LT )* ',' ( LT )* variableDeclarationNoIn
                    // ./grammars/JavaScript.g:85:31: ( LT )*
                    loop31:
                    do {
                        var alt31=2;
                        var LA31_0 = this.input.LA(1);

                        if ( (LA31_0==LT) ) {
                            alt31=1;
                        }


                        switch (alt31) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT70=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_variableDeclarationListNoIn410); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop31;
                        }
                    } while (true);

                    char_literal71=this.match(this.input,33,JavaScriptParser.FOLLOW_33_in_variableDeclarationListNoIn414); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal71_tree = this.adaptor.create(char_literal71);
                    this.adaptor.addChild(root_0, char_literal71_tree);
                    }
                    // ./grammars/JavaScript.g:85:40: ( LT )*
                    loop32:
                    do {
                        var alt32=2;
                        var LA32_0 = this.input.LA(1);

                        if ( (LA32_0==LT) ) {
                            alt32=1;
                        }


                        switch (alt32) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT72=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_variableDeclarationListNoIn416); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop32;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_variableDeclarationNoIn_in_variableDeclarationListNoIn420);
                    variableDeclarationNoIn73=this.variableDeclarationNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, variableDeclarationNoIn73.getTree());


                    break;

                default :
                    break loop33;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 13, variableDeclarationListNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    variableDeclaration_return: (function() {
        JavaScriptParser.variableDeclaration_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.variableDeclaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:88:1: variableDeclaration : Identifier ( LT )* ( initialiser )? ;
    // $ANTLR start "variableDeclaration"
    variableDeclaration: function() {
        var retval = new JavaScriptParser.variableDeclaration_return();
        retval.start = this.input.LT(1);
        var variableDeclaration_StartIndex = this.input.index();
        var root_0 = null;

        var Identifier74 = null;
        var LT75 = null;
         var initialiser76 = null;

        var Identifier74_tree=null;
        var LT75_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 14) ) { return retval; }
            // ./grammars/JavaScript.g:89:2: ( Identifier ( LT )* ( initialiser )? )
            // ./grammars/JavaScript.g:89:4: Identifier ( LT )* ( initialiser )?
            root_0 = this.adaptor.nil();

            Identifier74=this.match(this.input,Identifier,JavaScriptParser.FOLLOW_Identifier_in_variableDeclaration434); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            Identifier74_tree = this.adaptor.create(Identifier74);
            this.adaptor.addChild(root_0, Identifier74_tree);
            }
            // ./grammars/JavaScript.g:89:17: ( LT )*
            loop34:
            do {
                var alt34=2;
                var LA34_0 = this.input.LA(1);

                if ( (LA34_0==LT) ) {
                    var LA34_2 = this.input.LA(2);

                    if ( (this.synpred47_JavaScript()) ) {
                        alt34=1;
                    }


                }


                switch (alt34) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT75=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_variableDeclaration436); if (this.state.failed) return retval;


                    break;

                default :
                    break loop34;
                }
            } while (true);

            // ./grammars/JavaScript.g:89:20: ( initialiser )?
            var alt35=2;
            var LA35_0 = this.input.LA(1);

            if ( (LA35_0==39) ) {
                alt35=1;
            }
            switch (alt35) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: initialiser
                    this.pushFollow(JavaScriptParser.FOLLOW_initialiser_in_variableDeclaration440);
                    initialiser76=this.initialiser();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, initialiser76.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 14, variableDeclaration_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    variableDeclarationNoIn_return: (function() {
        JavaScriptParser.variableDeclarationNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.variableDeclarationNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:92:1: variableDeclarationNoIn : Identifier ( LT )* ( initialiserNoIn )? ;
    // $ANTLR start "variableDeclarationNoIn"
    variableDeclarationNoIn: function() {
        var retval = new JavaScriptParser.variableDeclarationNoIn_return();
        retval.start = this.input.LT(1);
        var variableDeclarationNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var Identifier77 = null;
        var LT78 = null;
         var initialiserNoIn79 = null;

        var Identifier77_tree=null;
        var LT78_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 15) ) { return retval; }
            // ./grammars/JavaScript.g:93:2: ( Identifier ( LT )* ( initialiserNoIn )? )
            // ./grammars/JavaScript.g:93:4: Identifier ( LT )* ( initialiserNoIn )?
            root_0 = this.adaptor.nil();

            Identifier77=this.match(this.input,Identifier,JavaScriptParser.FOLLOW_Identifier_in_variableDeclarationNoIn453); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            Identifier77_tree = this.adaptor.create(Identifier77);
            this.adaptor.addChild(root_0, Identifier77_tree);
            }
            // ./grammars/JavaScript.g:93:17: ( LT )*
            loop36:
            do {
                var alt36=2;
                var LA36_0 = this.input.LA(1);

                if ( (LA36_0==LT) ) {
                    var LA36_2 = this.input.LA(2);

                    if ( (this.synpred49_JavaScript()) ) {
                        alt36=1;
                    }


                }


                switch (alt36) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT78=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_variableDeclarationNoIn455); if (this.state.failed) return retval;


                    break;

                default :
                    break loop36;
                }
            } while (true);

            // ./grammars/JavaScript.g:93:20: ( initialiserNoIn )?
            var alt37=2;
            var LA37_0 = this.input.LA(1);

            if ( (LA37_0==39) ) {
                alt37=1;
            }
            switch (alt37) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: initialiserNoIn
                    this.pushFollow(JavaScriptParser.FOLLOW_initialiserNoIn_in_variableDeclarationNoIn459);
                    initialiserNoIn79=this.initialiserNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, initialiserNoIn79.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 15, variableDeclarationNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    initialiser_return: (function() {
        JavaScriptParser.initialiser_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.initialiser_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:96:1: initialiser : '=' ( LT )* assignmentExpression ;
    // $ANTLR start "initialiser"
    initialiser: function() {
        var retval = new JavaScriptParser.initialiser_return();
        retval.start = this.input.LT(1);
        var initialiser_StartIndex = this.input.index();
        var root_0 = null;

        var char_literal80 = null;
        var LT81 = null;
         var assignmentExpression82 = null;

        var char_literal80_tree=null;
        var LT81_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 16) ) { return retval; }
            // ./grammars/JavaScript.g:97:2: ( '=' ( LT )* assignmentExpression )
            // ./grammars/JavaScript.g:97:4: '=' ( LT )* assignmentExpression
            root_0 = this.adaptor.nil();

            char_literal80=this.match(this.input,39,JavaScriptParser.FOLLOW_39_in_initialiser472); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal80_tree = this.adaptor.create(char_literal80);
            this.adaptor.addChild(root_0, char_literal80_tree);
            }
            // ./grammars/JavaScript.g:97:10: ( LT )*
            loop38:
            do {
                var alt38=2;
                var LA38_0 = this.input.LA(1);

                if ( (LA38_0==LT) ) {
                    alt38=1;
                }


                switch (alt38) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT81=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_initialiser474); if (this.state.failed) return retval;


                    break;

                default :
                    break loop38;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpression_in_initialiser478);
            assignmentExpression82=this.assignmentExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpression82.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 16, initialiser_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    initialiserNoIn_return: (function() {
        JavaScriptParser.initialiserNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.initialiserNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:100:1: initialiserNoIn : '=' ( LT )* assignmentExpressionNoIn ;
    // $ANTLR start "initialiserNoIn"
    initialiserNoIn: function() {
        var retval = new JavaScriptParser.initialiserNoIn_return();
        retval.start = this.input.LT(1);
        var initialiserNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var char_literal83 = null;
        var LT84 = null;
         var assignmentExpressionNoIn85 = null;

        var char_literal83_tree=null;
        var LT84_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 17) ) { return retval; }
            // ./grammars/JavaScript.g:101:2: ( '=' ( LT )* assignmentExpressionNoIn )
            // ./grammars/JavaScript.g:101:4: '=' ( LT )* assignmentExpressionNoIn
            root_0 = this.adaptor.nil();

            char_literal83=this.match(this.input,39,JavaScriptParser.FOLLOW_39_in_initialiserNoIn490); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal83_tree = this.adaptor.create(char_literal83);
            this.adaptor.addChild(root_0, char_literal83_tree);
            }
            // ./grammars/JavaScript.g:101:10: ( LT )*
            loop39:
            do {
                var alt39=2;
                var LA39_0 = this.input.LA(1);

                if ( (LA39_0==LT) ) {
                    alt39=1;
                }


                switch (alt39) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT84=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_initialiserNoIn492); if (this.state.failed) return retval;


                    break;

                default :
                    break loop39;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpressionNoIn_in_initialiserNoIn496);
            assignmentExpressionNoIn85=this.assignmentExpressionNoIn();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpressionNoIn85.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 17, initialiserNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    emptyStatement_return: (function() {
        JavaScriptParser.emptyStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.emptyStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:104:1: emptyStatement : ';' ;
    // $ANTLR start "emptyStatement"
    emptyStatement: function() {
        var retval = new JavaScriptParser.emptyStatement_return();
        retval.start = this.input.LT(1);
        var emptyStatement_StartIndex = this.input.index();
        var root_0 = null;

        var char_literal86 = null;

        var char_literal86_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 18) ) { return retval; }
            // ./grammars/JavaScript.g:105:2: ( ';' )
            // ./grammars/JavaScript.g:105:4: ';'
            root_0 = this.adaptor.nil();

            char_literal86=this.match(this.input,38,JavaScriptParser.FOLLOW_38_in_emptyStatement508); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal86_tree = this.adaptor.create(char_literal86);
            this.adaptor.addChild(root_0, char_literal86_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 18, emptyStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    expressionStatement_return: (function() {
        JavaScriptParser.expressionStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.expressionStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:108:1: expressionStatement : expression ( LT | ';' ) ;
    // $ANTLR start "expressionStatement"
    expressionStatement: function() {
        var retval = new JavaScriptParser.expressionStatement_return();
        retval.start = this.input.LT(1);
        var expressionStatement_StartIndex = this.input.index();
        var root_0 = null;

        var set88 = null;
         var expression87 = null;

        var set88_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 19) ) { return retval; }
            // ./grammars/JavaScript.g:109:2: ( expression ( LT | ';' ) )
            // ./grammars/JavaScript.g:109:4: expression ( LT | ';' )
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_expression_in_expressionStatement520);
            expression87=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression87.getTree());
            set88=this.input.LT(1);
            if ( this.input.LA(1)==LT||this.input.LA(1)==38 ) {
                this.input.consume();
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 19, expressionStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    ifStatement_return: (function() {
        JavaScriptParser.ifStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.ifStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:112:1: ifStatement : 'if' ( LT )* '(' ( LT )* expression ( LT )* ')' ( LT )* statement ( ( LT )* 'else' ( LT )* statement )? ;
    // $ANTLR start "ifStatement"
    ifStatement: function() {
        var retval = new JavaScriptParser.ifStatement_return();
        retval.start = this.input.LT(1);
        var ifStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal89 = null;
        var LT90 = null;
        var char_literal91 = null;
        var LT92 = null;
        var LT94 = null;
        var char_literal95 = null;
        var LT96 = null;
        var LT98 = null;
        var string_literal99 = null;
        var LT100 = null;
         var expression93 = null;
         var statement97 = null;
         var statement101 = null;

        var string_literal89_tree=null;
        var LT90_tree=null;
        var char_literal91_tree=null;
        var LT92_tree=null;
        var LT94_tree=null;
        var char_literal95_tree=null;
        var LT96_tree=null;
        var LT98_tree=null;
        var string_literal99_tree=null;
        var LT100_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 20) ) { return retval; }
            // ./grammars/JavaScript.g:113:2: ( 'if' ( LT )* '(' ( LT )* expression ( LT )* ')' ( LT )* statement ( ( LT )* 'else' ( LT )* statement )? )
            // ./grammars/JavaScript.g:113:4: 'if' ( LT )* '(' ( LT )* expression ( LT )* ')' ( LT )* statement ( ( LT )* 'else' ( LT )* statement )?
            root_0 = this.adaptor.nil();

            string_literal89=this.match(this.input,40,JavaScriptParser.FOLLOW_40_in_ifStatement541); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal89_tree = this.adaptor.create(string_literal89);
            this.adaptor.addChild(root_0, string_literal89_tree);
            }
            // ./grammars/JavaScript.g:113:11: ( LT )*
            loop40:
            do {
                var alt40=2;
                var LA40_0 = this.input.LA(1);

                if ( (LA40_0==LT) ) {
                    alt40=1;
                }


                switch (alt40) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT90=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_ifStatement543); if (this.state.failed) return retval;


                    break;

                default :
                    break loop40;
                }
            } while (true);

            char_literal91=this.match(this.input,32,JavaScriptParser.FOLLOW_32_in_ifStatement547); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal91_tree = this.adaptor.create(char_literal91);
            this.adaptor.addChild(root_0, char_literal91_tree);
            }
            // ./grammars/JavaScript.g:113:20: ( LT )*
            loop41:
            do {
                var alt41=2;
                var LA41_0 = this.input.LA(1);

                if ( (LA41_0==LT) ) {
                    alt41=1;
                }


                switch (alt41) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT92=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_ifStatement549); if (this.state.failed) return retval;


                    break;

                default :
                    break loop41;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_expression_in_ifStatement553);
            expression93=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression93.getTree());
            // ./grammars/JavaScript.g:113:36: ( LT )*
            loop42:
            do {
                var alt42=2;
                var LA42_0 = this.input.LA(1);

                if ( (LA42_0==LT) ) {
                    alt42=1;
                }


                switch (alt42) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT94=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_ifStatement555); if (this.state.failed) return retval;


                    break;

                default :
                    break loop42;
                }
            } while (true);

            char_literal95=this.match(this.input,34,JavaScriptParser.FOLLOW_34_in_ifStatement559); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal95_tree = this.adaptor.create(char_literal95);
            this.adaptor.addChild(root_0, char_literal95_tree);
            }
            // ./grammars/JavaScript.g:113:45: ( LT )*
            loop43:
            do {
                var alt43=2;
                var LA43_0 = this.input.LA(1);

                if ( (LA43_0==LT) ) {
                    alt43=1;
                }


                switch (alt43) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT96=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_ifStatement561); if (this.state.failed) return retval;


                    break;

                default :
                    break loop43;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_statement_in_ifStatement565);
            statement97=this.statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement97.getTree());
            // ./grammars/JavaScript.g:113:58: ( ( LT )* 'else' ( LT )* statement )?
            var alt46=2;
            var LA46_0 = this.input.LA(1);

            if ( (LA46_0==LT) ) {
                var LA46_1 = this.input.LA(2);

                if ( (this.synpred60_JavaScript()) ) {
                    alt46=1;
                }
            }
            else if ( (LA46_0==41) ) {
                var LA46_2 = this.input.LA(2);

                if ( (this.synpred60_JavaScript()) ) {
                    alt46=1;
                }
            }
            switch (alt46) {
                case 1 :
                    // ./grammars/JavaScript.g:113:59: ( LT )* 'else' ( LT )* statement
                    // ./grammars/JavaScript.g:113:61: ( LT )*
                    loop44:
                    do {
                        var alt44=2;
                        var LA44_0 = this.input.LA(1);

                        if ( (LA44_0==LT) ) {
                            alt44=1;
                        }


                        switch (alt44) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT98=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_ifStatement568); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop44;
                        }
                    } while (true);

                    string_literal99=this.match(this.input,41,JavaScriptParser.FOLLOW_41_in_ifStatement572); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal99_tree = this.adaptor.create(string_literal99);
                    this.adaptor.addChild(root_0, string_literal99_tree);
                    }
                    // ./grammars/JavaScript.g:113:73: ( LT )*
                    loop45:
                    do {
                        var alt45=2;
                        var LA45_0 = this.input.LA(1);

                        if ( (LA45_0==LT) ) {
                            alt45=1;
                        }


                        switch (alt45) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT100=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_ifStatement574); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop45;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_statement_in_ifStatement578);
                    statement101=this.statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement101.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 20, ifStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    iterationStatement_return: (function() {
        JavaScriptParser.iterationStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.iterationStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:116:1: iterationStatement : ( doWhileStatement | whileStatement | forStatement | forInStatement );
    // $ANTLR start "iterationStatement"
    iterationStatement: function() {
        var retval = new JavaScriptParser.iterationStatement_return();
        retval.start = this.input.LT(1);
        var iterationStatement_StartIndex = this.input.index();
        var root_0 = null;

         var doWhileStatement102 = null;
         var whileStatement103 = null;
         var forStatement104 = null;
         var forInStatement105 = null;


        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 21) ) { return retval; }
            // ./grammars/JavaScript.g:117:2: ( doWhileStatement | whileStatement | forStatement | forInStatement )
            var alt47=4;
            switch ( this.input.LA(1) ) {
            case 42:
                alt47=1;
                break;
            case 43:
                alt47=2;
                break;
            case 44:
                var LA47_3 = this.input.LA(2);

                if ( (this.synpred63_JavaScript()) ) {
                    alt47=3;
                }
                else if ( (true) ) {
                    alt47=4;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 47, 3, this.input);

                    throw nvae;
                }
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 47, 0, this.input);

                throw nvae;
            }

            switch (alt47) {
                case 1 :
                    // ./grammars/JavaScript.g:117:4: doWhileStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_doWhileStatement_in_iterationStatement592);
                    doWhileStatement102=this.doWhileStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, doWhileStatement102.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:118:4: whileStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_whileStatement_in_iterationStatement597);
                    whileStatement103=this.whileStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, whileStatement103.getTree());


                    break;
                case 3 :
                    // ./grammars/JavaScript.g:119:4: forStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_forStatement_in_iterationStatement602);
                    forStatement104=this.forStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, forStatement104.getTree());


                    break;
                case 4 :
                    // ./grammars/JavaScript.g:120:4: forInStatement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_forInStatement_in_iterationStatement607);
                    forInStatement105=this.forInStatement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, forInStatement105.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 21, iterationStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    doWhileStatement_return: (function() {
        JavaScriptParser.doWhileStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.doWhileStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:123:1: doWhileStatement : 'do' ( LT )* statement ( LT )* 'while' ( LT )* '(' expression ')' ( LT | ';' ) ;
    // $ANTLR start "doWhileStatement"
    doWhileStatement: function() {
        var retval = new JavaScriptParser.doWhileStatement_return();
        retval.start = this.input.LT(1);
        var doWhileStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal106 = null;
        var LT107 = null;
        var LT109 = null;
        var string_literal110 = null;
        var LT111 = null;
        var char_literal112 = null;
        var char_literal114 = null;
        var set115 = null;
         var statement108 = null;
         var expression113 = null;

        var string_literal106_tree=null;
        var LT107_tree=null;
        var LT109_tree=null;
        var string_literal110_tree=null;
        var LT111_tree=null;
        var char_literal112_tree=null;
        var char_literal114_tree=null;
        var set115_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 22) ) { return retval; }
            // ./grammars/JavaScript.g:124:2: ( 'do' ( LT )* statement ( LT )* 'while' ( LT )* '(' expression ')' ( LT | ';' ) )
            // ./grammars/JavaScript.g:124:4: 'do' ( LT )* statement ( LT )* 'while' ( LT )* '(' expression ')' ( LT | ';' )
            root_0 = this.adaptor.nil();

            string_literal106=this.match(this.input,42,JavaScriptParser.FOLLOW_42_in_doWhileStatement619); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal106_tree = this.adaptor.create(string_literal106);
            this.adaptor.addChild(root_0, string_literal106_tree);
            }
            // ./grammars/JavaScript.g:124:11: ( LT )*
            loop48:
            do {
                var alt48=2;
                var LA48_0 = this.input.LA(1);

                if ( (LA48_0==LT) ) {
                    alt48=1;
                }


                switch (alt48) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT107=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_doWhileStatement621); if (this.state.failed) return retval;


                    break;

                default :
                    break loop48;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_statement_in_doWhileStatement625);
            statement108=this.statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement108.getTree());
            // ./grammars/JavaScript.g:124:26: ( LT )*
            loop49:
            do {
                var alt49=2;
                var LA49_0 = this.input.LA(1);

                if ( (LA49_0==LT) ) {
                    alt49=1;
                }


                switch (alt49) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT109=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_doWhileStatement627); if (this.state.failed) return retval;


                    break;

                default :
                    break loop49;
                }
            } while (true);

            string_literal110=this.match(this.input,43,JavaScriptParser.FOLLOW_43_in_doWhileStatement631); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal110_tree = this.adaptor.create(string_literal110);
            this.adaptor.addChild(root_0, string_literal110_tree);
            }
            // ./grammars/JavaScript.g:124:39: ( LT )*
            loop50:
            do {
                var alt50=2;
                var LA50_0 = this.input.LA(1);

                if ( (LA50_0==LT) ) {
                    alt50=1;
                }


                switch (alt50) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT111=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_doWhileStatement633); if (this.state.failed) return retval;


                    break;

                default :
                    break loop50;
                }
            } while (true);

            char_literal112=this.match(this.input,32,JavaScriptParser.FOLLOW_32_in_doWhileStatement637); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal112_tree = this.adaptor.create(char_literal112);
            this.adaptor.addChild(root_0, char_literal112_tree);
            }
            this.pushFollow(JavaScriptParser.FOLLOW_expression_in_doWhileStatement639);
            expression113=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression113.getTree());
            char_literal114=this.match(this.input,34,JavaScriptParser.FOLLOW_34_in_doWhileStatement641); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal114_tree = this.adaptor.create(char_literal114);
            this.adaptor.addChild(root_0, char_literal114_tree);
            }
            set115=this.input.LT(1);
            if ( this.input.LA(1)==LT||this.input.LA(1)==38 ) {
                this.input.consume();
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 22, doWhileStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    whileStatement_return: (function() {
        JavaScriptParser.whileStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.whileStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:127:1: whileStatement : 'while' ( LT )* '(' ( LT )* expression ( LT )* ')' ( LT )* statement ;
    // $ANTLR start "whileStatement"
    whileStatement: function() {
        var retval = new JavaScriptParser.whileStatement_return();
        retval.start = this.input.LT(1);
        var whileStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal116 = null;
        var LT117 = null;
        var char_literal118 = null;
        var LT119 = null;
        var LT121 = null;
        var char_literal122 = null;
        var LT123 = null;
         var expression120 = null;
         var statement124 = null;

        var string_literal116_tree=null;
        var LT117_tree=null;
        var char_literal118_tree=null;
        var LT119_tree=null;
        var LT121_tree=null;
        var char_literal122_tree=null;
        var LT123_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 23) ) { return retval; }
            // ./grammars/JavaScript.g:128:2: ( 'while' ( LT )* '(' ( LT )* expression ( LT )* ')' ( LT )* statement )
            // ./grammars/JavaScript.g:128:4: 'while' ( LT )* '(' ( LT )* expression ( LT )* ')' ( LT )* statement
            root_0 = this.adaptor.nil();

            string_literal116=this.match(this.input,43,JavaScriptParser.FOLLOW_43_in_whileStatement662); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal116_tree = this.adaptor.create(string_literal116);
            this.adaptor.addChild(root_0, string_literal116_tree);
            }
            // ./grammars/JavaScript.g:128:14: ( LT )*
            loop51:
            do {
                var alt51=2;
                var LA51_0 = this.input.LA(1);

                if ( (LA51_0==LT) ) {
                    alt51=1;
                }


                switch (alt51) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT117=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_whileStatement664); if (this.state.failed) return retval;


                    break;

                default :
                    break loop51;
                }
            } while (true);

            char_literal118=this.match(this.input,32,JavaScriptParser.FOLLOW_32_in_whileStatement668); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal118_tree = this.adaptor.create(char_literal118);
            this.adaptor.addChild(root_0, char_literal118_tree);
            }
            // ./grammars/JavaScript.g:128:23: ( LT )*
            loop52:
            do {
                var alt52=2;
                var LA52_0 = this.input.LA(1);

                if ( (LA52_0==LT) ) {
                    alt52=1;
                }


                switch (alt52) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT119=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_whileStatement670); if (this.state.failed) return retval;


                    break;

                default :
                    break loop52;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_expression_in_whileStatement674);
            expression120=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression120.getTree());
            // ./grammars/JavaScript.g:128:39: ( LT )*
            loop53:
            do {
                var alt53=2;
                var LA53_0 = this.input.LA(1);

                if ( (LA53_0==LT) ) {
                    alt53=1;
                }


                switch (alt53) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT121=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_whileStatement676); if (this.state.failed) return retval;


                    break;

                default :
                    break loop53;
                }
            } while (true);

            char_literal122=this.match(this.input,34,JavaScriptParser.FOLLOW_34_in_whileStatement680); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal122_tree = this.adaptor.create(char_literal122);
            this.adaptor.addChild(root_0, char_literal122_tree);
            }
            // ./grammars/JavaScript.g:128:48: ( LT )*
            loop54:
            do {
                var alt54=2;
                var LA54_0 = this.input.LA(1);

                if ( (LA54_0==LT) ) {
                    alt54=1;
                }


                switch (alt54) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT123=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_whileStatement682); if (this.state.failed) return retval;


                    break;

                default :
                    break loop54;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_statement_in_whileStatement686);
            statement124=this.statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement124.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 23, whileStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    forStatement_return: (function() {
        JavaScriptParser.forStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.forStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:131:1: forStatement : 'for' ( LT )* '(' ( ( LT )* forStatementInitialiserPart )? ( LT )* ';' ( ( LT )* expression )? ( LT )* ';' ( ( LT )* expression )? ( LT )* ')' ( LT )* statement ;
    // $ANTLR start "forStatement"
    forStatement: function() {
        var retval = new JavaScriptParser.forStatement_return();
        retval.start = this.input.LT(1);
        var forStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal125 = null;
        var LT126 = null;
        var char_literal127 = null;
        var LT128 = null;
        var LT130 = null;
        var char_literal131 = null;
        var LT132 = null;
        var LT134 = null;
        var char_literal135 = null;
        var LT136 = null;
        var LT138 = null;
        var char_literal139 = null;
        var LT140 = null;
         var forStatementInitialiserPart129 = null;
         var expression133 = null;
         var expression137 = null;
         var statement141 = null;

        var string_literal125_tree=null;
        var LT126_tree=null;
        var char_literal127_tree=null;
        var LT128_tree=null;
        var LT130_tree=null;
        var char_literal131_tree=null;
        var LT132_tree=null;
        var LT134_tree=null;
        var char_literal135_tree=null;
        var LT136_tree=null;
        var LT138_tree=null;
        var char_literal139_tree=null;
        var LT140_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 24) ) { return retval; }
            // ./grammars/JavaScript.g:132:2: ( 'for' ( LT )* '(' ( ( LT )* forStatementInitialiserPart )? ( LT )* ';' ( ( LT )* expression )? ( LT )* ';' ( ( LT )* expression )? ( LT )* ')' ( LT )* statement )
            // ./grammars/JavaScript.g:132:4: 'for' ( LT )* '(' ( ( LT )* forStatementInitialiserPart )? ( LT )* ';' ( ( LT )* expression )? ( LT )* ';' ( ( LT )* expression )? ( LT )* ')' ( LT )* statement
            root_0 = this.adaptor.nil();

            string_literal125=this.match(this.input,44,JavaScriptParser.FOLLOW_44_in_forStatement698); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal125_tree = this.adaptor.create(string_literal125);
            this.adaptor.addChild(root_0, string_literal125_tree);
            }
            // ./grammars/JavaScript.g:132:12: ( LT )*
            loop55:
            do {
                var alt55=2;
                var LA55_0 = this.input.LA(1);

                if ( (LA55_0==LT) ) {
                    alt55=1;
                }


                switch (alt55) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT126=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forStatement700); if (this.state.failed) return retval;


                    break;

                default :
                    break loop55;
                }
            } while (true);

            char_literal127=this.match(this.input,32,JavaScriptParser.FOLLOW_32_in_forStatement704); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal127_tree = this.adaptor.create(char_literal127);
            this.adaptor.addChild(root_0, char_literal127_tree);
            }
            // ./grammars/JavaScript.g:132:19: ( ( LT )* forStatementInitialiserPart )?
            var alt57=2;
            alt57 = this.dfa57.predict(this.input);
            switch (alt57) {
                case 1 :
                    // ./grammars/JavaScript.g:132:20: ( LT )* forStatementInitialiserPart
                    // ./grammars/JavaScript.g:132:22: ( LT )*
                    loop56:
                    do {
                        var alt56=2;
                        var LA56_0 = this.input.LA(1);

                        if ( (LA56_0==LT) ) {
                            alt56=1;
                        }


                        switch (alt56) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT128=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forStatement707); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop56;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_forStatementInitialiserPart_in_forStatement711);
                    forStatementInitialiserPart129=this.forStatementInitialiserPart();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, forStatementInitialiserPart129.getTree());


                    break;

            }

            // ./grammars/JavaScript.g:132:57: ( LT )*
            loop58:
            do {
                var alt58=2;
                var LA58_0 = this.input.LA(1);

                if ( (LA58_0==LT) ) {
                    alt58=1;
                }


                switch (alt58) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT130=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forStatement715); if (this.state.failed) return retval;


                    break;

                default :
                    break loop58;
                }
            } while (true);

            char_literal131=this.match(this.input,38,JavaScriptParser.FOLLOW_38_in_forStatement719); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal131_tree = this.adaptor.create(char_literal131);
            this.adaptor.addChild(root_0, char_literal131_tree);
            }
            // ./grammars/JavaScript.g:132:64: ( ( LT )* expression )?
            var alt60=2;
            alt60 = this.dfa60.predict(this.input);
            switch (alt60) {
                case 1 :
                    // ./grammars/JavaScript.g:132:65: ( LT )* expression
                    // ./grammars/JavaScript.g:132:67: ( LT )*
                    loop59:
                    do {
                        var alt59=2;
                        var LA59_0 = this.input.LA(1);

                        if ( (LA59_0==LT) ) {
                            alt59=1;
                        }


                        switch (alt59) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT132=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forStatement722); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop59;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_expression_in_forStatement726);
                    expression133=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression133.getTree());


                    break;

            }

            // ./grammars/JavaScript.g:132:85: ( LT )*
            loop61:
            do {
                var alt61=2;
                var LA61_0 = this.input.LA(1);

                if ( (LA61_0==LT) ) {
                    alt61=1;
                }


                switch (alt61) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT134=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forStatement730); if (this.state.failed) return retval;


                    break;

                default :
                    break loop61;
                }
            } while (true);

            char_literal135=this.match(this.input,38,JavaScriptParser.FOLLOW_38_in_forStatement734); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal135_tree = this.adaptor.create(char_literal135);
            this.adaptor.addChild(root_0, char_literal135_tree);
            }
            // ./grammars/JavaScript.g:132:92: ( ( LT )* expression )?
            var alt63=2;
            alt63 = this.dfa63.predict(this.input);
            switch (alt63) {
                case 1 :
                    // ./grammars/JavaScript.g:132:93: ( LT )* expression
                    // ./grammars/JavaScript.g:132:95: ( LT )*
                    loop62:
                    do {
                        var alt62=2;
                        var LA62_0 = this.input.LA(1);

                        if ( (LA62_0==LT) ) {
                            alt62=1;
                        }


                        switch (alt62) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT136=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forStatement737); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop62;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_expression_in_forStatement741);
                    expression137=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression137.getTree());


                    break;

            }

            // ./grammars/JavaScript.g:132:113: ( LT )*
            loop64:
            do {
                var alt64=2;
                var LA64_0 = this.input.LA(1);

                if ( (LA64_0==LT) ) {
                    alt64=1;
                }


                switch (alt64) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT138=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forStatement745); if (this.state.failed) return retval;


                    break;

                default :
                    break loop64;
                }
            } while (true);

            char_literal139=this.match(this.input,34,JavaScriptParser.FOLLOW_34_in_forStatement749); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal139_tree = this.adaptor.create(char_literal139);
            this.adaptor.addChild(root_0, char_literal139_tree);
            }
            // ./grammars/JavaScript.g:132:122: ( LT )*
            loop65:
            do {
                var alt65=2;
                var LA65_0 = this.input.LA(1);

                if ( (LA65_0==LT) ) {
                    alt65=1;
                }


                switch (alt65) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT140=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forStatement751); if (this.state.failed) return retval;


                    break;

                default :
                    break loop65;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_statement_in_forStatement755);
            statement141=this.statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement141.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 24, forStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    forStatementInitialiserPart_return: (function() {
        JavaScriptParser.forStatementInitialiserPart_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.forStatementInitialiserPart_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:135:1: forStatementInitialiserPart : ( expressionNoIn | 'var' ( LT )* variableDeclarationListNoIn );
    // $ANTLR start "forStatementInitialiserPart"
    forStatementInitialiserPart: function() {
        var retval = new JavaScriptParser.forStatementInitialiserPart_return();
        retval.start = this.input.LT(1);
        var forStatementInitialiserPart_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal143 = null;
        var LT144 = null;
         var expressionNoIn142 = null;
         var variableDeclarationListNoIn145 = null;

        var string_literal143_tree=null;
        var LT144_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 25) ) { return retval; }
            // ./grammars/JavaScript.g:136:2: ( expressionNoIn | 'var' ( LT )* variableDeclarationListNoIn )
            var alt67=2;
            var LA67_0 = this.input.LA(1);

            if ( ((LA67_0>=Identifier && LA67_0<=NumericLiteral)||(LA67_0>=31 && LA67_0<=32)||LA67_0==35||(LA67_0>=58 && LA67_0<=59)||(LA67_0>=91 && LA67_0<=92)||(LA67_0>=96 && LA67_0<=106)) ) {
                alt67=1;
            }
            else if ( (LA67_0==37) ) {
                alt67=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 67, 0, this.input);

                throw nvae;
            }
            switch (alt67) {
                case 1 :
                    // ./grammars/JavaScript.g:136:4: expressionNoIn
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_expressionNoIn_in_forStatementInitialiserPart767);
                    expressionNoIn142=this.expressionNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expressionNoIn142.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:137:4: 'var' ( LT )* variableDeclarationListNoIn
                    root_0 = this.adaptor.nil();

                    string_literal143=this.match(this.input,37,JavaScriptParser.FOLLOW_37_in_forStatementInitialiserPart772); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal143_tree = this.adaptor.create(string_literal143);
                    this.adaptor.addChild(root_0, string_literal143_tree);
                    }
                    // ./grammars/JavaScript.g:137:12: ( LT )*
                    loop66:
                    do {
                        var alt66=2;
                        var LA66_0 = this.input.LA(1);

                        if ( (LA66_0==LT) ) {
                            alt66=1;
                        }


                        switch (alt66) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT144=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forStatementInitialiserPart774); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop66;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_variableDeclarationListNoIn_in_forStatementInitialiserPart778);
                    variableDeclarationListNoIn145=this.variableDeclarationListNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, variableDeclarationListNoIn145.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 25, forStatementInitialiserPart_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    forInStatement_return: (function() {
        JavaScriptParser.forInStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.forInStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:140:1: forInStatement : 'for' ( LT )* '(' ( LT )* forInStatementInitialiserPart ( LT )* 'in' ( LT )* expression ( LT )* ')' ( LT )* statement ;
    // $ANTLR start "forInStatement"
    forInStatement: function() {
        var retval = new JavaScriptParser.forInStatement_return();
        retval.start = this.input.LT(1);
        var forInStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal146 = null;
        var LT147 = null;
        var char_literal148 = null;
        var LT149 = null;
        var LT151 = null;
        var string_literal152 = null;
        var LT153 = null;
        var LT155 = null;
        var char_literal156 = null;
        var LT157 = null;
         var forInStatementInitialiserPart150 = null;
         var expression154 = null;
         var statement158 = null;

        var string_literal146_tree=null;
        var LT147_tree=null;
        var char_literal148_tree=null;
        var LT149_tree=null;
        var LT151_tree=null;
        var string_literal152_tree=null;
        var LT153_tree=null;
        var LT155_tree=null;
        var char_literal156_tree=null;
        var LT157_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 26) ) { return retval; }
            // ./grammars/JavaScript.g:141:2: ( 'for' ( LT )* '(' ( LT )* forInStatementInitialiserPart ( LT )* 'in' ( LT )* expression ( LT )* ')' ( LT )* statement )
            // ./grammars/JavaScript.g:141:4: 'for' ( LT )* '(' ( LT )* forInStatementInitialiserPart ( LT )* 'in' ( LT )* expression ( LT )* ')' ( LT )* statement
            root_0 = this.adaptor.nil();

            string_literal146=this.match(this.input,44,JavaScriptParser.FOLLOW_44_in_forInStatement790); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal146_tree = this.adaptor.create(string_literal146);
            this.adaptor.addChild(root_0, string_literal146_tree);
            }
            // ./grammars/JavaScript.g:141:12: ( LT )*
            loop68:
            do {
                var alt68=2;
                var LA68_0 = this.input.LA(1);

                if ( (LA68_0==LT) ) {
                    alt68=1;
                }


                switch (alt68) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT147=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forInStatement792); if (this.state.failed) return retval;


                    break;

                default :
                    break loop68;
                }
            } while (true);

            char_literal148=this.match(this.input,32,JavaScriptParser.FOLLOW_32_in_forInStatement796); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal148_tree = this.adaptor.create(char_literal148);
            this.adaptor.addChild(root_0, char_literal148_tree);
            }
            // ./grammars/JavaScript.g:141:21: ( LT )*
            loop69:
            do {
                var alt69=2;
                var LA69_0 = this.input.LA(1);

                if ( (LA69_0==LT) ) {
                    alt69=1;
                }


                switch (alt69) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT149=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forInStatement798); if (this.state.failed) return retval;


                    break;

                default :
                    break loop69;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_forInStatementInitialiserPart_in_forInStatement802);
            forInStatementInitialiserPart150=this.forInStatementInitialiserPart();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, forInStatementInitialiserPart150.getTree());
            // ./grammars/JavaScript.g:141:56: ( LT )*
            loop70:
            do {
                var alt70=2;
                var LA70_0 = this.input.LA(1);

                if ( (LA70_0==LT) ) {
                    alt70=1;
                }


                switch (alt70) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT151=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forInStatement804); if (this.state.failed) return retval;


                    break;

                default :
                    break loop70;
                }
            } while (true);

            string_literal152=this.match(this.input,45,JavaScriptParser.FOLLOW_45_in_forInStatement808); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal152_tree = this.adaptor.create(string_literal152);
            this.adaptor.addChild(root_0, string_literal152_tree);
            }
            // ./grammars/JavaScript.g:141:66: ( LT )*
            loop71:
            do {
                var alt71=2;
                var LA71_0 = this.input.LA(1);

                if ( (LA71_0==LT) ) {
                    alt71=1;
                }


                switch (alt71) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT153=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forInStatement810); if (this.state.failed) return retval;


                    break;

                default :
                    break loop71;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_expression_in_forInStatement814);
            expression154=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression154.getTree());
            // ./grammars/JavaScript.g:141:82: ( LT )*
            loop72:
            do {
                var alt72=2;
                var LA72_0 = this.input.LA(1);

                if ( (LA72_0==LT) ) {
                    alt72=1;
                }


                switch (alt72) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT155=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forInStatement816); if (this.state.failed) return retval;


                    break;

                default :
                    break loop72;
                }
            } while (true);

            char_literal156=this.match(this.input,34,JavaScriptParser.FOLLOW_34_in_forInStatement820); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal156_tree = this.adaptor.create(char_literal156);
            this.adaptor.addChild(root_0, char_literal156_tree);
            }
            // ./grammars/JavaScript.g:141:91: ( LT )*
            loop73:
            do {
                var alt73=2;
                var LA73_0 = this.input.LA(1);

                if ( (LA73_0==LT) ) {
                    alt73=1;
                }


                switch (alt73) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT157=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forInStatement822); if (this.state.failed) return retval;


                    break;

                default :
                    break loop73;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_statement_in_forInStatement826);
            statement158=this.statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement158.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 26, forInStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    forInStatementInitialiserPart_return: (function() {
        JavaScriptParser.forInStatementInitialiserPart_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.forInStatementInitialiserPart_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:144:1: forInStatementInitialiserPart : ( leftHandSideExpression | 'var' ( LT )* variableDeclarationNoIn );
    // $ANTLR start "forInStatementInitialiserPart"
    forInStatementInitialiserPart: function() {
        var retval = new JavaScriptParser.forInStatementInitialiserPart_return();
        retval.start = this.input.LT(1);
        var forInStatementInitialiserPart_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal160 = null;
        var LT161 = null;
         var leftHandSideExpression159 = null;
         var variableDeclarationNoIn162 = null;

        var string_literal160_tree=null;
        var LT161_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 27) ) { return retval; }
            // ./grammars/JavaScript.g:145:2: ( leftHandSideExpression | 'var' ( LT )* variableDeclarationNoIn )
            var alt75=2;
            var LA75_0 = this.input.LA(1);

            if ( ((LA75_0>=Identifier && LA75_0<=NumericLiteral)||(LA75_0>=31 && LA75_0<=32)||LA75_0==35||(LA75_0>=58 && LA75_0<=59)||(LA75_0>=103 && LA75_0<=106)) ) {
                alt75=1;
            }
            else if ( (LA75_0==37) ) {
                alt75=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 75, 0, this.input);

                throw nvae;
            }
            switch (alt75) {
                case 1 :
                    // ./grammars/JavaScript.g:145:4: leftHandSideExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_leftHandSideExpression_in_forInStatementInitialiserPart838);
                    leftHandSideExpression159=this.leftHandSideExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, leftHandSideExpression159.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:146:4: 'var' ( LT )* variableDeclarationNoIn
                    root_0 = this.adaptor.nil();

                    string_literal160=this.match(this.input,37,JavaScriptParser.FOLLOW_37_in_forInStatementInitialiserPart843); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal160_tree = this.adaptor.create(string_literal160);
                    this.adaptor.addChild(root_0, string_literal160_tree);
                    }
                    // ./grammars/JavaScript.g:146:12: ( LT )*
                    loop74:
                    do {
                        var alt74=2;
                        var LA74_0 = this.input.LA(1);

                        if ( (LA74_0==LT) ) {
                            alt74=1;
                        }


                        switch (alt74) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT161=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_forInStatementInitialiserPart845); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop74;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_variableDeclarationNoIn_in_forInStatementInitialiserPart849);
                    variableDeclarationNoIn162=this.variableDeclarationNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, variableDeclarationNoIn162.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 27, forInStatementInitialiserPart_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    continueStatement_return: (function() {
        JavaScriptParser.continueStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.continueStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:149:1: continueStatement : 'continue' ( Identifier )? ( LT | ';' ) ;
    // $ANTLR start "continueStatement"
    continueStatement: function() {
        var retval = new JavaScriptParser.continueStatement_return();
        retval.start = this.input.LT(1);
        var continueStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal163 = null;
        var Identifier164 = null;
        var set165 = null;

        var string_literal163_tree=null;
        var Identifier164_tree=null;
        var set165_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 28) ) { return retval; }
            // ./grammars/JavaScript.g:150:2: ( 'continue' ( Identifier )? ( LT | ';' ) )
            // ./grammars/JavaScript.g:150:4: 'continue' ( Identifier )? ( LT | ';' )
            root_0 = this.adaptor.nil();

            string_literal163=this.match(this.input,46,JavaScriptParser.FOLLOW_46_in_continueStatement860); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal163_tree = this.adaptor.create(string_literal163);
            this.adaptor.addChild(root_0, string_literal163_tree);
            }
            // ./grammars/JavaScript.g:150:15: ( Identifier )?
            var alt76=2;
            var LA76_0 = this.input.LA(1);

            if ( (LA76_0==Identifier) ) {
                alt76=1;
            }
            switch (alt76) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: Identifier
                    Identifier164=this.match(this.input,Identifier,JavaScriptParser.FOLLOW_Identifier_in_continueStatement862); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    Identifier164_tree = this.adaptor.create(Identifier164);
                    this.adaptor.addChild(root_0, Identifier164_tree);
                    }


                    break;

            }

            set165=this.input.LT(1);
            if ( this.input.LA(1)==LT||this.input.LA(1)==38 ) {
                this.input.consume();
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 28, continueStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    breakStatement_return: (function() {
        JavaScriptParser.breakStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.breakStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:153:1: breakStatement : 'break' ( Identifier )? ( LT | ';' ) ;
    // $ANTLR start "breakStatement"
    breakStatement: function() {
        var retval = new JavaScriptParser.breakStatement_return();
        retval.start = this.input.LT(1);
        var breakStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal166 = null;
        var Identifier167 = null;
        var set168 = null;

        var string_literal166_tree=null;
        var Identifier167_tree=null;
        var set168_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 29) ) { return retval; }
            // ./grammars/JavaScript.g:154:2: ( 'break' ( Identifier )? ( LT | ';' ) )
            // ./grammars/JavaScript.g:154:4: 'break' ( Identifier )? ( LT | ';' )
            root_0 = this.adaptor.nil();

            string_literal166=this.match(this.input,47,JavaScriptParser.FOLLOW_47_in_breakStatement883); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal166_tree = this.adaptor.create(string_literal166);
            this.adaptor.addChild(root_0, string_literal166_tree);
            }
            // ./grammars/JavaScript.g:154:12: ( Identifier )?
            var alt77=2;
            var LA77_0 = this.input.LA(1);

            if ( (LA77_0==Identifier) ) {
                alt77=1;
            }
            switch (alt77) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: Identifier
                    Identifier167=this.match(this.input,Identifier,JavaScriptParser.FOLLOW_Identifier_in_breakStatement885); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    Identifier167_tree = this.adaptor.create(Identifier167);
                    this.adaptor.addChild(root_0, Identifier167_tree);
                    }


                    break;

            }

            set168=this.input.LT(1);
            if ( this.input.LA(1)==LT||this.input.LA(1)==38 ) {
                this.input.consume();
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 29, breakStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    returnStatement_return: (function() {
        JavaScriptParser.returnStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.returnStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:157:1: returnStatement : 'return' ( expression )? ( LT | ';' ) ;
    // $ANTLR start "returnStatement"
    returnStatement: function() {
        var retval = new JavaScriptParser.returnStatement_return();
        retval.start = this.input.LT(1);
        var returnStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal169 = null;
        var set171 = null;
         var expression170 = null;

        var string_literal169_tree=null;
        var set171_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 30) ) { return retval; }
            // ./grammars/JavaScript.g:158:2: ( 'return' ( expression )? ( LT | ';' ) )
            // ./grammars/JavaScript.g:158:4: 'return' ( expression )? ( LT | ';' )
            root_0 = this.adaptor.nil();

            string_literal169=this.match(this.input,48,JavaScriptParser.FOLLOW_48_in_returnStatement906); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal169_tree = this.adaptor.create(string_literal169);
            this.adaptor.addChild(root_0, string_literal169_tree);
            }
            // ./grammars/JavaScript.g:158:13: ( expression )?
            var alt78=2;
            var LA78_0 = this.input.LA(1);

            if ( ((LA78_0>=Identifier && LA78_0<=NumericLiteral)||(LA78_0>=31 && LA78_0<=32)||LA78_0==35||(LA78_0>=58 && LA78_0<=59)||(LA78_0>=91 && LA78_0<=92)||(LA78_0>=96 && LA78_0<=106)) ) {
                alt78=1;
            }
            switch (alt78) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: expression
                    this.pushFollow(JavaScriptParser.FOLLOW_expression_in_returnStatement908);
                    expression170=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression170.getTree());


                    break;

            }

            set171=this.input.LT(1);
            if ( this.input.LA(1)==LT||this.input.LA(1)==38 ) {
                this.input.consume();
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 30, returnStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    withStatement_return: (function() {
        JavaScriptParser.withStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.withStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:161:1: withStatement : 'with' ( LT )* '(' ( LT )* expression ( LT )* ')' ( LT )* statement ;
    // $ANTLR start "withStatement"
    withStatement: function() {
        var retval = new JavaScriptParser.withStatement_return();
        retval.start = this.input.LT(1);
        var withStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal172 = null;
        var LT173 = null;
        var char_literal174 = null;
        var LT175 = null;
        var LT177 = null;
        var char_literal178 = null;
        var LT179 = null;
         var expression176 = null;
         var statement180 = null;

        var string_literal172_tree=null;
        var LT173_tree=null;
        var char_literal174_tree=null;
        var LT175_tree=null;
        var LT177_tree=null;
        var char_literal178_tree=null;
        var LT179_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 31) ) { return retval; }
            // ./grammars/JavaScript.g:162:2: ( 'with' ( LT )* '(' ( LT )* expression ( LT )* ')' ( LT )* statement )
            // ./grammars/JavaScript.g:162:4: 'with' ( LT )* '(' ( LT )* expression ( LT )* ')' ( LT )* statement
            root_0 = this.adaptor.nil();

            string_literal172=this.match(this.input,49,JavaScriptParser.FOLLOW_49_in_withStatement930); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal172_tree = this.adaptor.create(string_literal172);
            this.adaptor.addChild(root_0, string_literal172_tree);
            }
            // ./grammars/JavaScript.g:162:13: ( LT )*
            loop79:
            do {
                var alt79=2;
                var LA79_0 = this.input.LA(1);

                if ( (LA79_0==LT) ) {
                    alt79=1;
                }


                switch (alt79) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT173=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_withStatement932); if (this.state.failed) return retval;


                    break;

                default :
                    break loop79;
                }
            } while (true);

            char_literal174=this.match(this.input,32,JavaScriptParser.FOLLOW_32_in_withStatement936); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal174_tree = this.adaptor.create(char_literal174);
            this.adaptor.addChild(root_0, char_literal174_tree);
            }
            // ./grammars/JavaScript.g:162:22: ( LT )*
            loop80:
            do {
                var alt80=2;
                var LA80_0 = this.input.LA(1);

                if ( (LA80_0==LT) ) {
                    alt80=1;
                }


                switch (alt80) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT175=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_withStatement938); if (this.state.failed) return retval;


                    break;

                default :
                    break loop80;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_expression_in_withStatement942);
            expression176=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression176.getTree());
            // ./grammars/JavaScript.g:162:38: ( LT )*
            loop81:
            do {
                var alt81=2;
                var LA81_0 = this.input.LA(1);

                if ( (LA81_0==LT) ) {
                    alt81=1;
                }


                switch (alt81) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT177=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_withStatement944); if (this.state.failed) return retval;


                    break;

                default :
                    break loop81;
                }
            } while (true);

            char_literal178=this.match(this.input,34,JavaScriptParser.FOLLOW_34_in_withStatement948); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal178_tree = this.adaptor.create(char_literal178);
            this.adaptor.addChild(root_0, char_literal178_tree);
            }
            // ./grammars/JavaScript.g:162:47: ( LT )*
            loop82:
            do {
                var alt82=2;
                var LA82_0 = this.input.LA(1);

                if ( (LA82_0==LT) ) {
                    alt82=1;
                }


                switch (alt82) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT179=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_withStatement950); if (this.state.failed) return retval;


                    break;

                default :
                    break loop82;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_statement_in_withStatement954);
            statement180=this.statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement180.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 31, withStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    labelledStatement_return: (function() {
        JavaScriptParser.labelledStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.labelledStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:165:1: labelledStatement : Identifier ( LT )* ':' ( LT )* statement ;
    // $ANTLR start "labelledStatement"
    labelledStatement: function() {
        var retval = new JavaScriptParser.labelledStatement_return();
        retval.start = this.input.LT(1);
        var labelledStatement_StartIndex = this.input.index();
        var root_0 = null;

        var Identifier181 = null;
        var LT182 = null;
        var char_literal183 = null;
        var LT184 = null;
         var statement185 = null;

        var Identifier181_tree=null;
        var LT182_tree=null;
        var char_literal183_tree=null;
        var LT184_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 32) ) { return retval; }
            // ./grammars/JavaScript.g:166:2: ( Identifier ( LT )* ':' ( LT )* statement )
            // ./grammars/JavaScript.g:166:4: Identifier ( LT )* ':' ( LT )* statement
            root_0 = this.adaptor.nil();

            Identifier181=this.match(this.input,Identifier,JavaScriptParser.FOLLOW_Identifier_in_labelledStatement965); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            Identifier181_tree = this.adaptor.create(Identifier181);
            this.adaptor.addChild(root_0, Identifier181_tree);
            }
            // ./grammars/JavaScript.g:166:17: ( LT )*
            loop83:
            do {
                var alt83=2;
                var LA83_0 = this.input.LA(1);

                if ( (LA83_0==LT) ) {
                    alt83=1;
                }


                switch (alt83) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT182=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_labelledStatement967); if (this.state.failed) return retval;


                    break;

                default :
                    break loop83;
                }
            } while (true);

            char_literal183=this.match(this.input,50,JavaScriptParser.FOLLOW_50_in_labelledStatement971); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal183_tree = this.adaptor.create(char_literal183);
            this.adaptor.addChild(root_0, char_literal183_tree);
            }
            // ./grammars/JavaScript.g:166:26: ( LT )*
            loop84:
            do {
                var alt84=2;
                var LA84_0 = this.input.LA(1);

                if ( (LA84_0==LT) ) {
                    alt84=1;
                }


                switch (alt84) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT184=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_labelledStatement973); if (this.state.failed) return retval;


                    break;

                default :
                    break loop84;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_statement_in_labelledStatement977);
            statement185=this.statement();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement185.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 32, labelledStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    switchStatement_return: (function() {
        JavaScriptParser.switchStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.switchStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:169:1: switchStatement : 'switch' ( LT )* '(' ( LT )* expression ( LT )* ')' ( LT )* caseBlock ;
    // $ANTLR start "switchStatement"
    switchStatement: function() {
        var retval = new JavaScriptParser.switchStatement_return();
        retval.start = this.input.LT(1);
        var switchStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal186 = null;
        var LT187 = null;
        var char_literal188 = null;
        var LT189 = null;
        var LT191 = null;
        var char_literal192 = null;
        var LT193 = null;
         var expression190 = null;
         var caseBlock194 = null;

        var string_literal186_tree=null;
        var LT187_tree=null;
        var char_literal188_tree=null;
        var LT189_tree=null;
        var LT191_tree=null;
        var char_literal192_tree=null;
        var LT193_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 33) ) { return retval; }
            // ./grammars/JavaScript.g:170:2: ( 'switch' ( LT )* '(' ( LT )* expression ( LT )* ')' ( LT )* caseBlock )
            // ./grammars/JavaScript.g:170:4: 'switch' ( LT )* '(' ( LT )* expression ( LT )* ')' ( LT )* caseBlock
            root_0 = this.adaptor.nil();

            string_literal186=this.match(this.input,51,JavaScriptParser.FOLLOW_51_in_switchStatement989); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal186_tree = this.adaptor.create(string_literal186);
            this.adaptor.addChild(root_0, string_literal186_tree);
            }
            // ./grammars/JavaScript.g:170:15: ( LT )*
            loop85:
            do {
                var alt85=2;
                var LA85_0 = this.input.LA(1);

                if ( (LA85_0==LT) ) {
                    alt85=1;
                }


                switch (alt85) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT187=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_switchStatement991); if (this.state.failed) return retval;


                    break;

                default :
                    break loop85;
                }
            } while (true);

            char_literal188=this.match(this.input,32,JavaScriptParser.FOLLOW_32_in_switchStatement995); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal188_tree = this.adaptor.create(char_literal188);
            this.adaptor.addChild(root_0, char_literal188_tree);
            }
            // ./grammars/JavaScript.g:170:24: ( LT )*
            loop86:
            do {
                var alt86=2;
                var LA86_0 = this.input.LA(1);

                if ( (LA86_0==LT) ) {
                    alt86=1;
                }


                switch (alt86) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT189=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_switchStatement997); if (this.state.failed) return retval;


                    break;

                default :
                    break loop86;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_expression_in_switchStatement1001);
            expression190=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression190.getTree());
            // ./grammars/JavaScript.g:170:40: ( LT )*
            loop87:
            do {
                var alt87=2;
                var LA87_0 = this.input.LA(1);

                if ( (LA87_0==LT) ) {
                    alt87=1;
                }


                switch (alt87) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT191=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_switchStatement1003); if (this.state.failed) return retval;


                    break;

                default :
                    break loop87;
                }
            } while (true);

            char_literal192=this.match(this.input,34,JavaScriptParser.FOLLOW_34_in_switchStatement1007); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal192_tree = this.adaptor.create(char_literal192);
            this.adaptor.addChild(root_0, char_literal192_tree);
            }
            // ./grammars/JavaScript.g:170:49: ( LT )*
            loop88:
            do {
                var alt88=2;
                var LA88_0 = this.input.LA(1);

                if ( (LA88_0==LT) ) {
                    alt88=1;
                }


                switch (alt88) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT193=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_switchStatement1009); if (this.state.failed) return retval;


                    break;

                default :
                    break loop88;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_caseBlock_in_switchStatement1013);
            caseBlock194=this.caseBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, caseBlock194.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 33, switchStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    caseBlock_return: (function() {
        JavaScriptParser.caseBlock_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.caseBlock_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:173:1: caseBlock : '{' ( ( LT )* caseClause )* ( ( LT )* defaultClause ( ( LT )* caseClause )* )? ( LT )* '}' ;
    // $ANTLR start "caseBlock"
    caseBlock: function() {
        var retval = new JavaScriptParser.caseBlock_return();
        retval.start = this.input.LT(1);
        var caseBlock_StartIndex = this.input.index();
        var root_0 = null;

        var char_literal195 = null;
        var LT196 = null;
        var LT198 = null;
        var LT200 = null;
        var LT202 = null;
        var char_literal203 = null;
         var caseClause197 = null;
         var defaultClause199 = null;
         var caseClause201 = null;

        var char_literal195_tree=null;
        var LT196_tree=null;
        var LT198_tree=null;
        var LT200_tree=null;
        var LT202_tree=null;
        var char_literal203_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 34) ) { return retval; }
            // ./grammars/JavaScript.g:174:2: ( '{' ( ( LT )* caseClause )* ( ( LT )* defaultClause ( ( LT )* caseClause )* )? ( LT )* '}' )
            // ./grammars/JavaScript.g:174:4: '{' ( ( LT )* caseClause )* ( ( LT )* defaultClause ( ( LT )* caseClause )* )? ( LT )* '}'
            root_0 = this.adaptor.nil();

            char_literal195=this.match(this.input,35,JavaScriptParser.FOLLOW_35_in_caseBlock1025); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal195_tree = this.adaptor.create(char_literal195);
            this.adaptor.addChild(root_0, char_literal195_tree);
            }
            // ./grammars/JavaScript.g:174:8: ( ( LT )* caseClause )*
            loop90:
            do {
                var alt90=2;
                alt90 = this.dfa90.predict(this.input);
                switch (alt90) {
                case 1 :
                    // ./grammars/JavaScript.g:174:9: ( LT )* caseClause
                    // ./grammars/JavaScript.g:174:11: ( LT )*
                    loop89:
                    do {
                        var alt89=2;
                        var LA89_0 = this.input.LA(1);

                        if ( (LA89_0==LT) ) {
                            alt89=1;
                        }


                        switch (alt89) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT196=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_caseBlock1028); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop89;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_caseClause_in_caseBlock1032);
                    caseClause197=this.caseClause();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, caseClause197.getTree());


                    break;

                default :
                    break loop90;
                }
            } while (true);

            // ./grammars/JavaScript.g:174:27: ( ( LT )* defaultClause ( ( LT )* caseClause )* )?
            var alt94=2;
            alt94 = this.dfa94.predict(this.input);
            switch (alt94) {
                case 1 :
                    // ./grammars/JavaScript.g:174:28: ( LT )* defaultClause ( ( LT )* caseClause )*
                    // ./grammars/JavaScript.g:174:30: ( LT )*
                    loop91:
                    do {
                        var alt91=2;
                        var LA91_0 = this.input.LA(1);

                        if ( (LA91_0==LT) ) {
                            alt91=1;
                        }


                        switch (alt91) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT198=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_caseBlock1037); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop91;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_defaultClause_in_caseBlock1041);
                    defaultClause199=this.defaultClause();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, defaultClause199.getTree());
                    // ./grammars/JavaScript.g:174:47: ( ( LT )* caseClause )*
                    loop93:
                    do {
                        var alt93=2;
                        alt93 = this.dfa93.predict(this.input);
                        switch (alt93) {
                        case 1 :
                            // ./grammars/JavaScript.g:174:48: ( LT )* caseClause
                            // ./grammars/JavaScript.g:174:50: ( LT )*
                            loop92:
                            do {
                                var alt92=2;
                                var LA92_0 = this.input.LA(1);

                                if ( (LA92_0==LT) ) {
                                    alt92=1;
                                }


                                switch (alt92) {
                                case 1 :
                                    // ./grammars/JavaScript.g:0:0: LT
                                    LT200=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_caseBlock1044); if (this.state.failed) return retval;


                                    break;

                                default :
                                    break loop92;
                                }
                            } while (true);

                            this.pushFollow(JavaScriptParser.FOLLOW_caseClause_in_caseBlock1048);
                            caseClause201=this.caseClause();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, caseClause201.getTree());


                            break;

                        default :
                            break loop93;
                        }
                    } while (true);



                    break;

            }

            // ./grammars/JavaScript.g:174:70: ( LT )*
            loop95:
            do {
                var alt95=2;
                var LA95_0 = this.input.LA(1);

                if ( (LA95_0==LT) ) {
                    alt95=1;
                }


                switch (alt95) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT202=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_caseBlock1054); if (this.state.failed) return retval;


                    break;

                default :
                    break loop95;
                }
            } while (true);

            char_literal203=this.match(this.input,36,JavaScriptParser.FOLLOW_36_in_caseBlock1058); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal203_tree = this.adaptor.create(char_literal203);
            this.adaptor.addChild(root_0, char_literal203_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 34, caseBlock_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    caseClause_return: (function() {
        JavaScriptParser.caseClause_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.caseClause_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:177:1: caseClause : 'case' ( LT )* expression ( LT )* ':' ( LT )* ( statementList )? ;
    // $ANTLR start "caseClause"
    caseClause: function() {
        var retval = new JavaScriptParser.caseClause_return();
        retval.start = this.input.LT(1);
        var caseClause_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal204 = null;
        var LT205 = null;
        var LT207 = null;
        var char_literal208 = null;
        var LT209 = null;
         var expression206 = null;
         var statementList210 = null;

        var string_literal204_tree=null;
        var LT205_tree=null;
        var LT207_tree=null;
        var char_literal208_tree=null;
        var LT209_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 35) ) { return retval; }
            // ./grammars/JavaScript.g:178:2: ( 'case' ( LT )* expression ( LT )* ':' ( LT )* ( statementList )? )
            // ./grammars/JavaScript.g:178:4: 'case' ( LT )* expression ( LT )* ':' ( LT )* ( statementList )?
            root_0 = this.adaptor.nil();

            string_literal204=this.match(this.input,52,JavaScriptParser.FOLLOW_52_in_caseClause1069); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal204_tree = this.adaptor.create(string_literal204);
            this.adaptor.addChild(root_0, string_literal204_tree);
            }
            // ./grammars/JavaScript.g:178:13: ( LT )*
            loop96:
            do {
                var alt96=2;
                var LA96_0 = this.input.LA(1);

                if ( (LA96_0==LT) ) {
                    alt96=1;
                }


                switch (alt96) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT205=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_caseClause1071); if (this.state.failed) return retval;


                    break;

                default :
                    break loop96;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_expression_in_caseClause1075);
            expression206=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression206.getTree());
            // ./grammars/JavaScript.g:178:29: ( LT )*
            loop97:
            do {
                var alt97=2;
                var LA97_0 = this.input.LA(1);

                if ( (LA97_0==LT) ) {
                    alt97=1;
                }


                switch (alt97) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT207=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_caseClause1077); if (this.state.failed) return retval;


                    break;

                default :
                    break loop97;
                }
            } while (true);

            char_literal208=this.match(this.input,50,JavaScriptParser.FOLLOW_50_in_caseClause1081); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal208_tree = this.adaptor.create(char_literal208);
            this.adaptor.addChild(root_0, char_literal208_tree);
            }
            // ./grammars/JavaScript.g:178:38: ( LT )*
            loop98:
            do {
                var alt98=2;
                var LA98_0 = this.input.LA(1);

                if ( (LA98_0==LT) ) {
                    var LA98_2 = this.input.LA(2);

                    if ( (this.synpred118_JavaScript()) ) {
                        alt98=1;
                    }


                }


                switch (alt98) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT209=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_caseClause1083); if (this.state.failed) return retval;


                    break;

                default :
                    break loop98;
                }
            } while (true);

            // ./grammars/JavaScript.g:178:41: ( statementList )?
            var alt99=2;
            var LA99_0 = this.input.LA(1);

            if ( ((LA99_0>=Identifier && LA99_0<=NumericLiteral)||(LA99_0>=31 && LA99_0<=32)||LA99_0==35||(LA99_0>=37 && LA99_0<=38)||LA99_0==40||(LA99_0>=42 && LA99_0<=44)||(LA99_0>=46 && LA99_0<=49)||LA99_0==51||(LA99_0>=54 && LA99_0<=55)||(LA99_0>=58 && LA99_0<=59)||(LA99_0>=91 && LA99_0<=92)||(LA99_0>=96 && LA99_0<=106)) ) {
                alt99=1;
            }
            switch (alt99) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: statementList
                    this.pushFollow(JavaScriptParser.FOLLOW_statementList_in_caseClause1087);
                    statementList210=this.statementList();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statementList210.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 35, caseClause_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    defaultClause_return: (function() {
        JavaScriptParser.defaultClause_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.defaultClause_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:181:1: defaultClause : 'default' ( LT )* ':' ( LT )* ( statementList )? ;
    // $ANTLR start "defaultClause"
    defaultClause: function() {
        var retval = new JavaScriptParser.defaultClause_return();
        retval.start = this.input.LT(1);
        var defaultClause_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal211 = null;
        var LT212 = null;
        var char_literal213 = null;
        var LT214 = null;
         var statementList215 = null;

        var string_literal211_tree=null;
        var LT212_tree=null;
        var char_literal213_tree=null;
        var LT214_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 36) ) { return retval; }
            // ./grammars/JavaScript.g:182:2: ( 'default' ( LT )* ':' ( LT )* ( statementList )? )
            // ./grammars/JavaScript.g:182:4: 'default' ( LT )* ':' ( LT )* ( statementList )?
            root_0 = this.adaptor.nil();

            string_literal211=this.match(this.input,53,JavaScriptParser.FOLLOW_53_in_defaultClause1100); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal211_tree = this.adaptor.create(string_literal211);
            this.adaptor.addChild(root_0, string_literal211_tree);
            }
            // ./grammars/JavaScript.g:182:16: ( LT )*
            loop100:
            do {
                var alt100=2;
                var LA100_0 = this.input.LA(1);

                if ( (LA100_0==LT) ) {
                    alt100=1;
                }


                switch (alt100) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT212=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_defaultClause1102); if (this.state.failed) return retval;


                    break;

                default :
                    break loop100;
                }
            } while (true);

            char_literal213=this.match(this.input,50,JavaScriptParser.FOLLOW_50_in_defaultClause1106); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal213_tree = this.adaptor.create(char_literal213);
            this.adaptor.addChild(root_0, char_literal213_tree);
            }
            // ./grammars/JavaScript.g:182:25: ( LT )*
            loop101:
            do {
                var alt101=2;
                var LA101_0 = this.input.LA(1);

                if ( (LA101_0==LT) ) {
                    var LA101_2 = this.input.LA(2);

                    if ( (this.synpred121_JavaScript()) ) {
                        alt101=1;
                    }


                }


                switch (alt101) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT214=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_defaultClause1108); if (this.state.failed) return retval;


                    break;

                default :
                    break loop101;
                }
            } while (true);

            // ./grammars/JavaScript.g:182:28: ( statementList )?
            var alt102=2;
            var LA102_0 = this.input.LA(1);

            if ( ((LA102_0>=Identifier && LA102_0<=NumericLiteral)||(LA102_0>=31 && LA102_0<=32)||LA102_0==35||(LA102_0>=37 && LA102_0<=38)||LA102_0==40||(LA102_0>=42 && LA102_0<=44)||(LA102_0>=46 && LA102_0<=49)||LA102_0==51||(LA102_0>=54 && LA102_0<=55)||(LA102_0>=58 && LA102_0<=59)||(LA102_0>=91 && LA102_0<=92)||(LA102_0>=96 && LA102_0<=106)) ) {
                alt102=1;
            }
            switch (alt102) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: statementList
                    this.pushFollow(JavaScriptParser.FOLLOW_statementList_in_defaultClause1112);
                    statementList215=this.statementList();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statementList215.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 36, defaultClause_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    throwStatement_return: (function() {
        JavaScriptParser.throwStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.throwStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:185:1: throwStatement : 'throw' expression ( LT | ';' ) ;
    // $ANTLR start "throwStatement"
    throwStatement: function() {
        var retval = new JavaScriptParser.throwStatement_return();
        retval.start = this.input.LT(1);
        var throwStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal216 = null;
        var set218 = null;
         var expression217 = null;

        var string_literal216_tree=null;
        var set218_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 37) ) { return retval; }
            // ./grammars/JavaScript.g:186:2: ( 'throw' expression ( LT | ';' ) )
            // ./grammars/JavaScript.g:186:4: 'throw' expression ( LT | ';' )
            root_0 = this.adaptor.nil();

            string_literal216=this.match(this.input,54,JavaScriptParser.FOLLOW_54_in_throwStatement1125); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal216_tree = this.adaptor.create(string_literal216);
            this.adaptor.addChild(root_0, string_literal216_tree);
            }
            this.pushFollow(JavaScriptParser.FOLLOW_expression_in_throwStatement1127);
            expression217=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression217.getTree());
            set218=this.input.LT(1);
            if ( this.input.LA(1)==LT||this.input.LA(1)==38 ) {
                this.input.consume();
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 37, throwStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    tryStatement_return: (function() {
        JavaScriptParser.tryStatement_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.tryStatement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:189:1: tryStatement : 'try' ( LT )* statementBlock ( LT )* ( finallyClause | catchClause ( ( LT )* finallyClause )? ) ;
    // $ANTLR start "tryStatement"
    tryStatement: function() {
        var retval = new JavaScriptParser.tryStatement_return();
        retval.start = this.input.LT(1);
        var tryStatement_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal219 = null;
        var LT220 = null;
        var LT222 = null;
        var LT225 = null;
         var statementBlock221 = null;
         var finallyClause223 = null;
         var catchClause224 = null;
         var finallyClause226 = null;

        var string_literal219_tree=null;
        var LT220_tree=null;
        var LT222_tree=null;
        var LT225_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 38) ) { return retval; }
            // ./grammars/JavaScript.g:190:2: ( 'try' ( LT )* statementBlock ( LT )* ( finallyClause | catchClause ( ( LT )* finallyClause )? ) )
            // ./grammars/JavaScript.g:190:4: 'try' ( LT )* statementBlock ( LT )* ( finallyClause | catchClause ( ( LT )* finallyClause )? )
            root_0 = this.adaptor.nil();

            string_literal219=this.match(this.input,55,JavaScriptParser.FOLLOW_55_in_tryStatement1147); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal219_tree = this.adaptor.create(string_literal219);
            this.adaptor.addChild(root_0, string_literal219_tree);
            }
            // ./grammars/JavaScript.g:190:12: ( LT )*
            loop103:
            do {
                var alt103=2;
                var LA103_0 = this.input.LA(1);

                if ( (LA103_0==LT) ) {
                    alt103=1;
                }


                switch (alt103) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT220=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_tryStatement1149); if (this.state.failed) return retval;


                    break;

                default :
                    break loop103;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_statementBlock_in_tryStatement1153);
            statementBlock221=this.statementBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statementBlock221.getTree());
            // ./grammars/JavaScript.g:190:32: ( LT )*
            loop104:
            do {
                var alt104=2;
                var LA104_0 = this.input.LA(1);

                if ( (LA104_0==LT) ) {
                    alt104=1;
                }


                switch (alt104) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT222=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_tryStatement1155); if (this.state.failed) return retval;


                    break;

                default :
                    break loop104;
                }
            } while (true);

            // ./grammars/JavaScript.g:190:35: ( finallyClause | catchClause ( ( LT )* finallyClause )? )
            var alt107=2;
            var LA107_0 = this.input.LA(1);

            if ( (LA107_0==57) ) {
                alt107=1;
            }
            else if ( (LA107_0==56) ) {
                alt107=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 107, 0, this.input);

                throw nvae;
            }
            switch (alt107) {
                case 1 :
                    // ./grammars/JavaScript.g:190:36: finallyClause
                    this.pushFollow(JavaScriptParser.FOLLOW_finallyClause_in_tryStatement1160);
                    finallyClause223=this.finallyClause();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, finallyClause223.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:190:52: catchClause ( ( LT )* finallyClause )?
                    this.pushFollow(JavaScriptParser.FOLLOW_catchClause_in_tryStatement1164);
                    catchClause224=this.catchClause();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, catchClause224.getTree());
                    // ./grammars/JavaScript.g:190:64: ( ( LT )* finallyClause )?
                    var alt106=2;
                    alt106 = this.dfa106.predict(this.input);
                    switch (alt106) {
                        case 1 :
                            // ./grammars/JavaScript.g:190:65: ( LT )* finallyClause
                            // ./grammars/JavaScript.g:190:67: ( LT )*
                            loop105:
                            do {
                                var alt105=2;
                                var LA105_0 = this.input.LA(1);

                                if ( (LA105_0==LT) ) {
                                    alt105=1;
                                }


                                switch (alt105) {
                                case 1 :
                                    // ./grammars/JavaScript.g:0:0: LT
                                    LT225=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_tryStatement1167); if (this.state.failed) return retval;


                                    break;

                                default :
                                    break loop105;
                                }
                            } while (true);

                            this.pushFollow(JavaScriptParser.FOLLOW_finallyClause_in_tryStatement1171);
                            finallyClause226=this.finallyClause();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, finallyClause226.getTree());


                            break;

                    }



                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 38, tryStatement_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    catchClause_return: (function() {
        JavaScriptParser.catchClause_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.catchClause_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:193:1: catchClause : 'catch' ( LT )* '(' ( LT )* Identifier ( LT )* ')' ( LT )* statementBlock ;
    // $ANTLR start "catchClause"
    catchClause: function() {
        var retval = new JavaScriptParser.catchClause_return();
        retval.start = this.input.LT(1);
        var catchClause_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal227 = null;
        var LT228 = null;
        var char_literal229 = null;
        var LT230 = null;
        var Identifier231 = null;
        var LT232 = null;
        var char_literal233 = null;
        var LT234 = null;
         var statementBlock235 = null;

        var string_literal227_tree=null;
        var LT228_tree=null;
        var char_literal229_tree=null;
        var LT230_tree=null;
        var Identifier231_tree=null;
        var LT232_tree=null;
        var char_literal233_tree=null;
        var LT234_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 39) ) { return retval; }
            // ./grammars/JavaScript.g:194:2: ( 'catch' ( LT )* '(' ( LT )* Identifier ( LT )* ')' ( LT )* statementBlock )
            // ./grammars/JavaScript.g:194:4: 'catch' ( LT )* '(' ( LT )* Identifier ( LT )* ')' ( LT )* statementBlock
            root_0 = this.adaptor.nil();

            string_literal227=this.match(this.input,56,JavaScriptParser.FOLLOW_56_in_catchClause1192); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal227_tree = this.adaptor.create(string_literal227);
            this.adaptor.addChild(root_0, string_literal227_tree);
            }
            // ./grammars/JavaScript.g:194:14: ( LT )*
            loop108:
            do {
                var alt108=2;
                var LA108_0 = this.input.LA(1);

                if ( (LA108_0==LT) ) {
                    alt108=1;
                }


                switch (alt108) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT228=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_catchClause1194); if (this.state.failed) return retval;


                    break;

                default :
                    break loop108;
                }
            } while (true);

            char_literal229=this.match(this.input,32,JavaScriptParser.FOLLOW_32_in_catchClause1198); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal229_tree = this.adaptor.create(char_literal229);
            this.adaptor.addChild(root_0, char_literal229_tree);
            }
            // ./grammars/JavaScript.g:194:23: ( LT )*
            loop109:
            do {
                var alt109=2;
                var LA109_0 = this.input.LA(1);

                if ( (LA109_0==LT) ) {
                    alt109=1;
                }


                switch (alt109) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT230=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_catchClause1200); if (this.state.failed) return retval;


                    break;

                default :
                    break loop109;
                }
            } while (true);

            Identifier231=this.match(this.input,Identifier,JavaScriptParser.FOLLOW_Identifier_in_catchClause1204); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            Identifier231_tree = this.adaptor.create(Identifier231);
            this.adaptor.addChild(root_0, Identifier231_tree);
            }
            // ./grammars/JavaScript.g:194:39: ( LT )*
            loop110:
            do {
                var alt110=2;
                var LA110_0 = this.input.LA(1);

                if ( (LA110_0==LT) ) {
                    alt110=1;
                }


                switch (alt110) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT232=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_catchClause1206); if (this.state.failed) return retval;


                    break;

                default :
                    break loop110;
                }
            } while (true);

            char_literal233=this.match(this.input,34,JavaScriptParser.FOLLOW_34_in_catchClause1210); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal233_tree = this.adaptor.create(char_literal233);
            this.adaptor.addChild(root_0, char_literal233_tree);
            }
            // ./grammars/JavaScript.g:194:48: ( LT )*
            loop111:
            do {
                var alt111=2;
                var LA111_0 = this.input.LA(1);

                if ( (LA111_0==LT) ) {
                    alt111=1;
                }


                switch (alt111) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT234=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_catchClause1212); if (this.state.failed) return retval;


                    break;

                default :
                    break loop111;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_statementBlock_in_catchClause1216);
            statementBlock235=this.statementBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statementBlock235.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 39, catchClause_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    finallyClause_return: (function() {
        JavaScriptParser.finallyClause_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.finallyClause_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:197:1: finallyClause : 'finally' ( LT )* statementBlock ;
    // $ANTLR start "finallyClause"
    finallyClause: function() {
        var retval = new JavaScriptParser.finallyClause_return();
        retval.start = this.input.LT(1);
        var finallyClause_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal236 = null;
        var LT237 = null;
         var statementBlock238 = null;

        var string_literal236_tree=null;
        var LT237_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 40) ) { return retval; }
            // ./grammars/JavaScript.g:198:2: ( 'finally' ( LT )* statementBlock )
            // ./grammars/JavaScript.g:198:4: 'finally' ( LT )* statementBlock
            root_0 = this.adaptor.nil();

            string_literal236=this.match(this.input,57,JavaScriptParser.FOLLOW_57_in_finallyClause1228); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            string_literal236_tree = this.adaptor.create(string_literal236);
            this.adaptor.addChild(root_0, string_literal236_tree);
            }
            // ./grammars/JavaScript.g:198:16: ( LT )*
            loop112:
            do {
                var alt112=2;
                var LA112_0 = this.input.LA(1);

                if ( (LA112_0==LT) ) {
                    alt112=1;
                }


                switch (alt112) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT237=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_finallyClause1230); if (this.state.failed) return retval;


                    break;

                default :
                    break loop112;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_statementBlock_in_finallyClause1234);
            statementBlock238=this.statementBlock();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statementBlock238.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 40, finallyClause_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    expression_return: (function() {
        JavaScriptParser.expression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:202:1: expression : assignmentExpression ( ( LT )* ',' ( LT )* assignmentExpression )* ;
    // $ANTLR start "expression"
    expression: function() {
        var retval = new JavaScriptParser.expression_return();
        retval.start = this.input.LT(1);
        var expression_StartIndex = this.input.index();
        var root_0 = null;

        var LT240 = null;
        var char_literal241 = null;
        var LT242 = null;
         var assignmentExpression239 = null;
         var assignmentExpression243 = null;

        var LT240_tree=null;
        var char_literal241_tree=null;
        var LT242_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 41) ) { return retval; }
            // ./grammars/JavaScript.g:203:2: ( assignmentExpression ( ( LT )* ',' ( LT )* assignmentExpression )* )
            // ./grammars/JavaScript.g:203:4: assignmentExpression ( ( LT )* ',' ( LT )* assignmentExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpression_in_expression1246);
            assignmentExpression239=this.assignmentExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpression239.getTree());
            // ./grammars/JavaScript.g:203:25: ( ( LT )* ',' ( LT )* assignmentExpression )*
            loop115:
            do {
                var alt115=2;
                alt115 = this.dfa115.predict(this.input);
                switch (alt115) {
                case 1 :
                    // ./grammars/JavaScript.g:203:26: ( LT )* ',' ( LT )* assignmentExpression
                    // ./grammars/JavaScript.g:203:28: ( LT )*
                    loop113:
                    do {
                        var alt113=2;
                        var LA113_0 = this.input.LA(1);

                        if ( (LA113_0==LT) ) {
                            alt113=1;
                        }


                        switch (alt113) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT240=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_expression1249); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop113;
                        }
                    } while (true);

                    char_literal241=this.match(this.input,33,JavaScriptParser.FOLLOW_33_in_expression1253); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal241_tree = this.adaptor.create(char_literal241);
                    this.adaptor.addChild(root_0, char_literal241_tree);
                    }
                    // ./grammars/JavaScript.g:203:37: ( LT )*
                    loop114:
                    do {
                        var alt114=2;
                        var LA114_0 = this.input.LA(1);

                        if ( (LA114_0==LT) ) {
                            alt114=1;
                        }


                        switch (alt114) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT242=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_expression1255); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop114;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpression_in_expression1259);
                    assignmentExpression243=this.assignmentExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpression243.getTree());


                    break;

                default :
                    break loop115;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 41, expression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    expressionNoIn_return: (function() {
        JavaScriptParser.expressionNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.expressionNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:206:1: expressionNoIn : assignmentExpressionNoIn ( ( LT )* ',' ( LT )* assignmentExpressionNoIn )* ;
    // $ANTLR start "expressionNoIn"
    expressionNoIn: function() {
        var retval = new JavaScriptParser.expressionNoIn_return();
        retval.start = this.input.LT(1);
        var expressionNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var LT245 = null;
        var char_literal246 = null;
        var LT247 = null;
         var assignmentExpressionNoIn244 = null;
         var assignmentExpressionNoIn248 = null;

        var LT245_tree=null;
        var char_literal246_tree=null;
        var LT247_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 42) ) { return retval; }
            // ./grammars/JavaScript.g:207:2: ( assignmentExpressionNoIn ( ( LT )* ',' ( LT )* assignmentExpressionNoIn )* )
            // ./grammars/JavaScript.g:207:4: assignmentExpressionNoIn ( ( LT )* ',' ( LT )* assignmentExpressionNoIn )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpressionNoIn_in_expressionNoIn1273);
            assignmentExpressionNoIn244=this.assignmentExpressionNoIn();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpressionNoIn244.getTree());
            // ./grammars/JavaScript.g:207:29: ( ( LT )* ',' ( LT )* assignmentExpressionNoIn )*
            loop118:
            do {
                var alt118=2;
                alt118 = this.dfa118.predict(this.input);
                switch (alt118) {
                case 1 :
                    // ./grammars/JavaScript.g:207:30: ( LT )* ',' ( LT )* assignmentExpressionNoIn
                    // ./grammars/JavaScript.g:207:32: ( LT )*
                    loop116:
                    do {
                        var alt116=2;
                        var LA116_0 = this.input.LA(1);

                        if ( (LA116_0==LT) ) {
                            alt116=1;
                        }


                        switch (alt116) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT245=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_expressionNoIn1276); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop116;
                        }
                    } while (true);

                    char_literal246=this.match(this.input,33,JavaScriptParser.FOLLOW_33_in_expressionNoIn1280); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal246_tree = this.adaptor.create(char_literal246);
                    this.adaptor.addChild(root_0, char_literal246_tree);
                    }
                    // ./grammars/JavaScript.g:207:41: ( LT )*
                    loop117:
                    do {
                        var alt117=2;
                        var LA117_0 = this.input.LA(1);

                        if ( (LA117_0==LT) ) {
                            alt117=1;
                        }


                        switch (alt117) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT247=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_expressionNoIn1282); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop117;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpressionNoIn_in_expressionNoIn1286);
                    assignmentExpressionNoIn248=this.assignmentExpressionNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpressionNoIn248.getTree());


                    break;

                default :
                    break loop118;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 42, expressionNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    assignmentExpression_return: (function() {
        JavaScriptParser.assignmentExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.assignmentExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:210:1: assignmentExpression : ( conditionalExpression | leftHandSideExpression ( LT )* assignmentOperator ( LT )* assignmentExpression );
    // $ANTLR start "assignmentExpression"
    assignmentExpression: function() {
        var retval = new JavaScriptParser.assignmentExpression_return();
        retval.start = this.input.LT(1);
        var assignmentExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT251 = null;
        var LT253 = null;
         var conditionalExpression249 = null;
         var leftHandSideExpression250 = null;
         var assignmentOperator252 = null;
         var assignmentExpression254 = null;

        var LT251_tree=null;
        var LT253_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 43) ) { return retval; }
            // ./grammars/JavaScript.g:211:2: ( conditionalExpression | leftHandSideExpression ( LT )* assignmentOperator ( LT )* assignmentExpression )
            var alt121=2;
            alt121 = this.dfa121.predict(this.input);
            switch (alt121) {
                case 1 :
                    // ./grammars/JavaScript.g:211:4: conditionalExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_conditionalExpression_in_assignmentExpression1300);
                    conditionalExpression249=this.conditionalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, conditionalExpression249.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:212:4: leftHandSideExpression ( LT )* assignmentOperator ( LT )* assignmentExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_leftHandSideExpression_in_assignmentExpression1305);
                    leftHandSideExpression250=this.leftHandSideExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, leftHandSideExpression250.getTree());
                    // ./grammars/JavaScript.g:212:29: ( LT )*
                    loop119:
                    do {
                        var alt119=2;
                        var LA119_0 = this.input.LA(1);

                        if ( (LA119_0==LT) ) {
                            alt119=1;
                        }


                        switch (alt119) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT251=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_assignmentExpression1307); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop119;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_assignmentOperator_in_assignmentExpression1311);
                    assignmentOperator252=this.assignmentOperator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentOperator252.getTree());
                    // ./grammars/JavaScript.g:212:53: ( LT )*
                    loop120:
                    do {
                        var alt120=2;
                        var LA120_0 = this.input.LA(1);

                        if ( (LA120_0==LT) ) {
                            alt120=1;
                        }


                        switch (alt120) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT253=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_assignmentExpression1313); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop120;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpression_in_assignmentExpression1317);
                    assignmentExpression254=this.assignmentExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpression254.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 43, assignmentExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    assignmentExpressionNoIn_return: (function() {
        JavaScriptParser.assignmentExpressionNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.assignmentExpressionNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:215:1: assignmentExpressionNoIn : ( conditionalExpressionNoIn | leftHandSideExpression ( LT )* assignmentOperator ( LT )* assignmentExpressionNoIn );
    // $ANTLR start "assignmentExpressionNoIn"
    assignmentExpressionNoIn: function() {
        var retval = new JavaScriptParser.assignmentExpressionNoIn_return();
        retval.start = this.input.LT(1);
        var assignmentExpressionNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var LT257 = null;
        var LT259 = null;
         var conditionalExpressionNoIn255 = null;
         var leftHandSideExpression256 = null;
         var assignmentOperator258 = null;
         var assignmentExpressionNoIn260 = null;

        var LT257_tree=null;
        var LT259_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 44) ) { return retval; }
            // ./grammars/JavaScript.g:216:2: ( conditionalExpressionNoIn | leftHandSideExpression ( LT )* assignmentOperator ( LT )* assignmentExpressionNoIn )
            var alt124=2;
            alt124 = this.dfa124.predict(this.input);
            switch (alt124) {
                case 1 :
                    // ./grammars/JavaScript.g:216:4: conditionalExpressionNoIn
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_conditionalExpressionNoIn_in_assignmentExpressionNoIn1329);
                    conditionalExpressionNoIn255=this.conditionalExpressionNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, conditionalExpressionNoIn255.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:217:4: leftHandSideExpression ( LT )* assignmentOperator ( LT )* assignmentExpressionNoIn
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_leftHandSideExpression_in_assignmentExpressionNoIn1334);
                    leftHandSideExpression256=this.leftHandSideExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, leftHandSideExpression256.getTree());
                    // ./grammars/JavaScript.g:217:29: ( LT )*
                    loop122:
                    do {
                        var alt122=2;
                        var LA122_0 = this.input.LA(1);

                        if ( (LA122_0==LT) ) {
                            alt122=1;
                        }


                        switch (alt122) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT257=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_assignmentExpressionNoIn1336); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop122;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_assignmentOperator_in_assignmentExpressionNoIn1340);
                    assignmentOperator258=this.assignmentOperator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentOperator258.getTree());
                    // ./grammars/JavaScript.g:217:53: ( LT )*
                    loop123:
                    do {
                        var alt123=2;
                        var LA123_0 = this.input.LA(1);

                        if ( (LA123_0==LT) ) {
                            alt123=1;
                        }


                        switch (alt123) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT259=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_assignmentExpressionNoIn1342); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop123;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpressionNoIn_in_assignmentExpressionNoIn1346);
                    assignmentExpressionNoIn260=this.assignmentExpressionNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpressionNoIn260.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 44, assignmentExpressionNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    leftHandSideExpression_return: (function() {
        JavaScriptParser.leftHandSideExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.leftHandSideExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:220:1: leftHandSideExpression : ( callExpression | newExpression );
    // $ANTLR start "leftHandSideExpression"
    leftHandSideExpression: function() {
        var retval = new JavaScriptParser.leftHandSideExpression_return();
        retval.start = this.input.LT(1);
        var leftHandSideExpression_StartIndex = this.input.index();
        var root_0 = null;

         var callExpression261 = null;
         var newExpression262 = null;


        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 45) ) { return retval; }
            // ./grammars/JavaScript.g:221:2: ( callExpression | newExpression )
            var alt125=2;
            alt125 = this.dfa125.predict(this.input);
            switch (alt125) {
                case 1 :
                    // ./grammars/JavaScript.g:221:4: callExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_callExpression_in_leftHandSideExpression1358);
                    callExpression261=this.callExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, callExpression261.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:222:4: newExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_newExpression_in_leftHandSideExpression1363);
                    newExpression262=this.newExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, newExpression262.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 45, leftHandSideExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    newExpression_return: (function() {
        JavaScriptParser.newExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.newExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:225:1: newExpression : ( memberExpression | 'new' ( LT )* newExpression );
    // $ANTLR start "newExpression"
    newExpression: function() {
        var retval = new JavaScriptParser.newExpression_return();
        retval.start = this.input.LT(1);
        var newExpression_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal264 = null;
        var LT265 = null;
         var memberExpression263 = null;
         var newExpression266 = null;

        var string_literal264_tree=null;
        var LT265_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 46) ) { return retval; }
            // ./grammars/JavaScript.g:226:2: ( memberExpression | 'new' ( LT )* newExpression )
            var alt127=2;
            alt127 = this.dfa127.predict(this.input);
            switch (alt127) {
                case 1 :
                    // ./grammars/JavaScript.g:226:4: memberExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_memberExpression_in_newExpression1375);
                    memberExpression263=this.memberExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, memberExpression263.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:227:4: 'new' ( LT )* newExpression
                    root_0 = this.adaptor.nil();

                    string_literal264=this.match(this.input,58,JavaScriptParser.FOLLOW_58_in_newExpression1380); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal264_tree = this.adaptor.create(string_literal264);
                    this.adaptor.addChild(root_0, string_literal264_tree);
                    }
                    // ./grammars/JavaScript.g:227:12: ( LT )*
                    loop126:
                    do {
                        var alt126=2;
                        var LA126_0 = this.input.LA(1);

                        if ( (LA126_0==LT) ) {
                            alt126=1;
                        }


                        switch (alt126) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT265=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_newExpression1382); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop126;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_newExpression_in_newExpression1386);
                    newExpression266=this.newExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, newExpression266.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 46, newExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    memberExpression_return: (function() {
        JavaScriptParser.memberExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.memberExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:230:1: memberExpression : ( primaryExpression | functionExpression | 'new' ( LT )* memberExpression ( LT )* arguments ) ( ( LT )* memberExpressionSuffix )* ;
    // $ANTLR start "memberExpression"
    memberExpression: function() {
        var retval = new JavaScriptParser.memberExpression_return();
        retval.start = this.input.LT(1);
        var memberExpression_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal269 = null;
        var LT270 = null;
        var LT272 = null;
        var LT274 = null;
         var primaryExpression267 = null;
         var functionExpression268 = null;
         var memberExpression271 = null;
         var arguments273 = null;
         var memberExpressionSuffix275 = null;

        var string_literal269_tree=null;
        var LT270_tree=null;
        var LT272_tree=null;
        var LT274_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 47) ) { return retval; }
            // ./grammars/JavaScript.g:231:2: ( ( primaryExpression | functionExpression | 'new' ( LT )* memberExpression ( LT )* arguments ) ( ( LT )* memberExpressionSuffix )* )
            // ./grammars/JavaScript.g:231:4: ( primaryExpression | functionExpression | 'new' ( LT )* memberExpression ( LT )* arguments ) ( ( LT )* memberExpressionSuffix )*
            root_0 = this.adaptor.nil();

            // ./grammars/JavaScript.g:231:4: ( primaryExpression | functionExpression | 'new' ( LT )* memberExpression ( LT )* arguments )
            var alt130=3;
            switch ( this.input.LA(1) ) {
            case Identifier:
            case StringLiteral:
            case NumericLiteral:
            case 32:
            case 35:
            case 59:
            case 103:
            case 104:
            case 105:
            case 106:
                alt130=1;
                break;
            case 31:
                alt130=2;
                break;
            case 58:
                alt130=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 130, 0, this.input);

                throw nvae;
            }

            switch (alt130) {
                case 1 :
                    // ./grammars/JavaScript.g:231:5: primaryExpression
                    this.pushFollow(JavaScriptParser.FOLLOW_primaryExpression_in_memberExpression1399);
                    primaryExpression267=this.primaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primaryExpression267.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:231:25: functionExpression
                    this.pushFollow(JavaScriptParser.FOLLOW_functionExpression_in_memberExpression1403);
                    functionExpression268=this.functionExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, functionExpression268.getTree());


                    break;
                case 3 :
                    // ./grammars/JavaScript.g:231:46: 'new' ( LT )* memberExpression ( LT )* arguments
                    string_literal269=this.match(this.input,58,JavaScriptParser.FOLLOW_58_in_memberExpression1407); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal269_tree = this.adaptor.create(string_literal269);
                    this.adaptor.addChild(root_0, string_literal269_tree);
                    }
                    // ./grammars/JavaScript.g:231:54: ( LT )*
                    loop128:
                    do {
                        var alt128=2;
                        var LA128_0 = this.input.LA(1);

                        if ( (LA128_0==LT) ) {
                            alt128=1;
                        }


                        switch (alt128) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT270=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_memberExpression1409); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop128;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_memberExpression_in_memberExpression1413);
                    memberExpression271=this.memberExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, memberExpression271.getTree());
                    // ./grammars/JavaScript.g:231:76: ( LT )*
                    loop129:
                    do {
                        var alt129=2;
                        var LA129_0 = this.input.LA(1);

                        if ( (LA129_0==LT) ) {
                            alt129=1;
                        }


                        switch (alt129) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT272=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_memberExpression1415); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop129;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_arguments_in_memberExpression1419);
                    arguments273=this.arguments();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, arguments273.getTree());


                    break;

            }

            // ./grammars/JavaScript.g:231:90: ( ( LT )* memberExpressionSuffix )*
            loop132:
            do {
                var alt132=2;
                alt132 = this.dfa132.predict(this.input);
                switch (alt132) {
                case 1 :
                    // ./grammars/JavaScript.g:231:91: ( LT )* memberExpressionSuffix
                    // ./grammars/JavaScript.g:231:93: ( LT )*
                    loop131:
                    do {
                        var alt131=2;
                        var LA131_0 = this.input.LA(1);

                        if ( (LA131_0==LT) ) {
                            alt131=1;
                        }


                        switch (alt131) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT274=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_memberExpression1423); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop131;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_memberExpressionSuffix_in_memberExpression1427);
                    memberExpressionSuffix275=this.memberExpressionSuffix();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, memberExpressionSuffix275.getTree());


                    break;

                default :
                    break loop132;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 47, memberExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    memberExpressionSuffix_return: (function() {
        JavaScriptParser.memberExpressionSuffix_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.memberExpressionSuffix_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:234:1: memberExpressionSuffix : ( indexSuffix | propertyReferenceSuffix );
    // $ANTLR start "memberExpressionSuffix"
    memberExpressionSuffix: function() {
        var retval = new JavaScriptParser.memberExpressionSuffix_return();
        retval.start = this.input.LT(1);
        var memberExpressionSuffix_StartIndex = this.input.index();
        var root_0 = null;

         var indexSuffix276 = null;
         var propertyReferenceSuffix277 = null;


        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 48) ) { return retval; }
            // ./grammars/JavaScript.g:235:2: ( indexSuffix | propertyReferenceSuffix )
            var alt133=2;
            var LA133_0 = this.input.LA(1);

            if ( (LA133_0==59) ) {
                alt133=1;
            }
            else if ( (LA133_0==61) ) {
                alt133=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 133, 0, this.input);

                throw nvae;
            }
            switch (alt133) {
                case 1 :
                    // ./grammars/JavaScript.g:235:4: indexSuffix
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_indexSuffix_in_memberExpressionSuffix1441);
                    indexSuffix276=this.indexSuffix();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, indexSuffix276.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:236:4: propertyReferenceSuffix
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_propertyReferenceSuffix_in_memberExpressionSuffix1446);
                    propertyReferenceSuffix277=this.propertyReferenceSuffix();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, propertyReferenceSuffix277.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 48, memberExpressionSuffix_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    callExpression_return: (function() {
        JavaScriptParser.callExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.callExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:239:1: callExpression : memberExpression ( LT )* arguments ( ( LT )* callExpressionSuffix )* ;
    // $ANTLR start "callExpression"
    callExpression: function() {
        var retval = new JavaScriptParser.callExpression_return();
        retval.start = this.input.LT(1);
        var callExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT279 = null;
        var LT281 = null;
         var memberExpression278 = null;
         var arguments280 = null;
         var callExpressionSuffix282 = null;

        var LT279_tree=null;
        var LT281_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 49) ) { return retval; }
            // ./grammars/JavaScript.g:240:2: ( memberExpression ( LT )* arguments ( ( LT )* callExpressionSuffix )* )
            // ./grammars/JavaScript.g:240:4: memberExpression ( LT )* arguments ( ( LT )* callExpressionSuffix )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_memberExpression_in_callExpression1457);
            memberExpression278=this.memberExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, memberExpression278.getTree());
            // ./grammars/JavaScript.g:240:23: ( LT )*
            loop134:
            do {
                var alt134=2;
                var LA134_0 = this.input.LA(1);

                if ( (LA134_0==LT) ) {
                    alt134=1;
                }


                switch (alt134) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT279=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_callExpression1459); if (this.state.failed) return retval;


                    break;

                default :
                    break loop134;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_arguments_in_callExpression1463);
            arguments280=this.arguments();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, arguments280.getTree());
            // ./grammars/JavaScript.g:240:36: ( ( LT )* callExpressionSuffix )*
            loop136:
            do {
                var alt136=2;
                alt136 = this.dfa136.predict(this.input);
                switch (alt136) {
                case 1 :
                    // ./grammars/JavaScript.g:240:37: ( LT )* callExpressionSuffix
                    // ./grammars/JavaScript.g:240:39: ( LT )*
                    loop135:
                    do {
                        var alt135=2;
                        var LA135_0 = this.input.LA(1);

                        if ( (LA135_0==LT) ) {
                            alt135=1;
                        }


                        switch (alt135) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT281=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_callExpression1466); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop135;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_callExpressionSuffix_in_callExpression1470);
                    callExpressionSuffix282=this.callExpressionSuffix();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, callExpressionSuffix282.getTree());


                    break;

                default :
                    break loop136;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 49, callExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    callExpressionSuffix_return: (function() {
        JavaScriptParser.callExpressionSuffix_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.callExpressionSuffix_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:243:1: callExpressionSuffix : ( arguments | indexSuffix | propertyReferenceSuffix );
    // $ANTLR start "callExpressionSuffix"
    callExpressionSuffix: function() {
        var retval = new JavaScriptParser.callExpressionSuffix_return();
        retval.start = this.input.LT(1);
        var callExpressionSuffix_StartIndex = this.input.index();
        var root_0 = null;

         var arguments283 = null;
         var indexSuffix284 = null;
         var propertyReferenceSuffix285 = null;


        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 50) ) { return retval; }
            // ./grammars/JavaScript.g:244:2: ( arguments | indexSuffix | propertyReferenceSuffix )
            var alt137=3;
            switch ( this.input.LA(1) ) {
            case 32:
                alt137=1;
                break;
            case 59:
                alt137=2;
                break;
            case 61:
                alt137=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 137, 0, this.input);

                throw nvae;
            }

            switch (alt137) {
                case 1 :
                    // ./grammars/JavaScript.g:244:4: arguments
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_arguments_in_callExpressionSuffix1484);
                    arguments283=this.arguments();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, arguments283.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:245:4: indexSuffix
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_indexSuffix_in_callExpressionSuffix1489);
                    indexSuffix284=this.indexSuffix();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, indexSuffix284.getTree());


                    break;
                case 3 :
                    // ./grammars/JavaScript.g:246:4: propertyReferenceSuffix
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_propertyReferenceSuffix_in_callExpressionSuffix1494);
                    propertyReferenceSuffix285=this.propertyReferenceSuffix();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, propertyReferenceSuffix285.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 50, callExpressionSuffix_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    arguments_return: (function() {
        JavaScriptParser.arguments_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.arguments_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:249:1: arguments : '(' ( ( LT )* assignmentExpression ( ( LT )* ',' ( LT )* assignmentExpression )* )? ( LT )* ')' ;
    // $ANTLR start "arguments"
    arguments: function() {
        var retval = new JavaScriptParser.arguments_return();
        retval.start = this.input.LT(1);
        var arguments_StartIndex = this.input.index();
        var root_0 = null;

        var char_literal286 = null;
        var LT287 = null;
        var LT289 = null;
        var char_literal290 = null;
        var LT291 = null;
        var LT293 = null;
        var char_literal294 = null;
         var assignmentExpression288 = null;
         var assignmentExpression292 = null;

        var char_literal286_tree=null;
        var LT287_tree=null;
        var LT289_tree=null;
        var char_literal290_tree=null;
        var LT291_tree=null;
        var LT293_tree=null;
        var char_literal294_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 51) ) { return retval; }
            // ./grammars/JavaScript.g:250:2: ( '(' ( ( LT )* assignmentExpression ( ( LT )* ',' ( LT )* assignmentExpression )* )? ( LT )* ')' )
            // ./grammars/JavaScript.g:250:4: '(' ( ( LT )* assignmentExpression ( ( LT )* ',' ( LT )* assignmentExpression )* )? ( LT )* ')'
            root_0 = this.adaptor.nil();

            char_literal286=this.match(this.input,32,JavaScriptParser.FOLLOW_32_in_arguments1505); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal286_tree = this.adaptor.create(char_literal286);
            this.adaptor.addChild(root_0, char_literal286_tree);
            }
            // ./grammars/JavaScript.g:250:8: ( ( LT )* assignmentExpression ( ( LT )* ',' ( LT )* assignmentExpression )* )?
            var alt142=2;
            alt142 = this.dfa142.predict(this.input);
            switch (alt142) {
                case 1 :
                    // ./grammars/JavaScript.g:250:9: ( LT )* assignmentExpression ( ( LT )* ',' ( LT )* assignmentExpression )*
                    // ./grammars/JavaScript.g:250:11: ( LT )*
                    loop138:
                    do {
                        var alt138=2;
                        var LA138_0 = this.input.LA(1);

                        if ( (LA138_0==LT) ) {
                            alt138=1;
                        }


                        switch (alt138) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT287=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_arguments1508); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop138;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpression_in_arguments1512);
                    assignmentExpression288=this.assignmentExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpression288.getTree());
                    // ./grammars/JavaScript.g:250:35: ( ( LT )* ',' ( LT )* assignmentExpression )*
                    loop141:
                    do {
                        var alt141=2;
                        alt141 = this.dfa141.predict(this.input);
                        switch (alt141) {
                        case 1 :
                            // ./grammars/JavaScript.g:250:36: ( LT )* ',' ( LT )* assignmentExpression
                            // ./grammars/JavaScript.g:250:38: ( LT )*
                            loop139:
                            do {
                                var alt139=2;
                                var LA139_0 = this.input.LA(1);

                                if ( (LA139_0==LT) ) {
                                    alt139=1;
                                }


                                switch (alt139) {
                                case 1 :
                                    // ./grammars/JavaScript.g:0:0: LT
                                    LT289=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_arguments1515); if (this.state.failed) return retval;


                                    break;

                                default :
                                    break loop139;
                                }
                            } while (true);

                            char_literal290=this.match(this.input,33,JavaScriptParser.FOLLOW_33_in_arguments1519); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            char_literal290_tree = this.adaptor.create(char_literal290);
                            this.adaptor.addChild(root_0, char_literal290_tree);
                            }
                            // ./grammars/JavaScript.g:250:47: ( LT )*
                            loop140:
                            do {
                                var alt140=2;
                                var LA140_0 = this.input.LA(1);

                                if ( (LA140_0==LT) ) {
                                    alt140=1;
                                }


                                switch (alt140) {
                                case 1 :
                                    // ./grammars/JavaScript.g:0:0: LT
                                    LT291=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_arguments1521); if (this.state.failed) return retval;


                                    break;

                                default :
                                    break loop140;
                                }
                            } while (true);

                            this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpression_in_arguments1525);
                            assignmentExpression292=this.assignmentExpression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpression292.getTree());


                            break;

                        default :
                            break loop141;
                        }
                    } while (true);



                    break;

            }

            // ./grammars/JavaScript.g:250:77: ( LT )*
            loop143:
            do {
                var alt143=2;
                var LA143_0 = this.input.LA(1);

                if ( (LA143_0==LT) ) {
                    alt143=1;
                }


                switch (alt143) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT293=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_arguments1531); if (this.state.failed) return retval;


                    break;

                default :
                    break loop143;
                }
            } while (true);

            char_literal294=this.match(this.input,34,JavaScriptParser.FOLLOW_34_in_arguments1535); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal294_tree = this.adaptor.create(char_literal294);
            this.adaptor.addChild(root_0, char_literal294_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 51, arguments_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    indexSuffix_return: (function() {
        JavaScriptParser.indexSuffix_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.indexSuffix_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:253:1: indexSuffix : '[' ( LT )* expression ( LT )* ']' ;
    // $ANTLR start "indexSuffix"
    indexSuffix: function() {
        var retval = new JavaScriptParser.indexSuffix_return();
        retval.start = this.input.LT(1);
        var indexSuffix_StartIndex = this.input.index();
        var root_0 = null;

        var char_literal295 = null;
        var LT296 = null;
        var LT298 = null;
        var char_literal299 = null;
         var expression297 = null;

        var char_literal295_tree=null;
        var LT296_tree=null;
        var LT298_tree=null;
        var char_literal299_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 52) ) { return retval; }
            // ./grammars/JavaScript.g:254:2: ( '[' ( LT )* expression ( LT )* ']' )
            // ./grammars/JavaScript.g:254:4: '[' ( LT )* expression ( LT )* ']'
            root_0 = this.adaptor.nil();

            char_literal295=this.match(this.input,59,JavaScriptParser.FOLLOW_59_in_indexSuffix1547); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal295_tree = this.adaptor.create(char_literal295);
            this.adaptor.addChild(root_0, char_literal295_tree);
            }
            // ./grammars/JavaScript.g:254:10: ( LT )*
            loop144:
            do {
                var alt144=2;
                var LA144_0 = this.input.LA(1);

                if ( (LA144_0==LT) ) {
                    alt144=1;
                }


                switch (alt144) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT296=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_indexSuffix1549); if (this.state.failed) return retval;


                    break;

                default :
                    break loop144;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_expression_in_indexSuffix1553);
            expression297=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression297.getTree());
            // ./grammars/JavaScript.g:254:26: ( LT )*
            loop145:
            do {
                var alt145=2;
                var LA145_0 = this.input.LA(1);

                if ( (LA145_0==LT) ) {
                    alt145=1;
                }


                switch (alt145) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT298=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_indexSuffix1555); if (this.state.failed) return retval;


                    break;

                default :
                    break loop145;
                }
            } while (true);

            char_literal299=this.match(this.input,60,JavaScriptParser.FOLLOW_60_in_indexSuffix1559); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal299_tree = this.adaptor.create(char_literal299);
            this.adaptor.addChild(root_0, char_literal299_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 52, indexSuffix_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    propertyReferenceSuffix_return: (function() {
        JavaScriptParser.propertyReferenceSuffix_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.propertyReferenceSuffix_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:257:1: propertyReferenceSuffix : '.' ( LT )* Identifier ;
    // $ANTLR start "propertyReferenceSuffix"
    propertyReferenceSuffix: function() {
        var retval = new JavaScriptParser.propertyReferenceSuffix_return();
        retval.start = this.input.LT(1);
        var propertyReferenceSuffix_StartIndex = this.input.index();
        var root_0 = null;

        var char_literal300 = null;
        var LT301 = null;
        var Identifier302 = null;

        var char_literal300_tree=null;
        var LT301_tree=null;
        var Identifier302_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 53) ) { return retval; }
            // ./grammars/JavaScript.g:258:2: ( '.' ( LT )* Identifier )
            // ./grammars/JavaScript.g:258:4: '.' ( LT )* Identifier
            root_0 = this.adaptor.nil();

            char_literal300=this.match(this.input,61,JavaScriptParser.FOLLOW_61_in_propertyReferenceSuffix1572); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal300_tree = this.adaptor.create(char_literal300);
            this.adaptor.addChild(root_0, char_literal300_tree);
            }
            // ./grammars/JavaScript.g:258:10: ( LT )*
            loop146:
            do {
                var alt146=2;
                var LA146_0 = this.input.LA(1);

                if ( (LA146_0==LT) ) {
                    alt146=1;
                }


                switch (alt146) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT301=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_propertyReferenceSuffix1574); if (this.state.failed) return retval;


                    break;

                default :
                    break loop146;
                }
            } while (true);

            Identifier302=this.match(this.input,Identifier,JavaScriptParser.FOLLOW_Identifier_in_propertyReferenceSuffix1578); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            Identifier302_tree = this.adaptor.create(Identifier302);
            this.adaptor.addChild(root_0, Identifier302_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 53, propertyReferenceSuffix_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    assignmentOperator_return: (function() {
        JavaScriptParser.assignmentOperator_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.assignmentOperator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:261:1: assignmentOperator : ( '=' | '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '>>>=' | '&=' | '^=' | '|=' );
    // $ANTLR start "assignmentOperator"
    assignmentOperator: function() {
        var retval = new JavaScriptParser.assignmentOperator_return();
        retval.start = this.input.LT(1);
        var assignmentOperator_StartIndex = this.input.index();
        var root_0 = null;

        var set303 = null;

        var set303_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 54) ) { return retval; }
            // ./grammars/JavaScript.g:262:2: ( '=' | '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '>>>=' | '&=' | '^=' | '|=' )
            // ./grammars/JavaScript.g:
            root_0 = this.adaptor.nil();

            set303=this.input.LT(1);
            if ( this.input.LA(1)==39||(this.input.LA(1)>=62 && this.input.LA(1)<=72) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set303));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 54, assignmentOperator_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    conditionalExpression_return: (function() {
        JavaScriptParser.conditionalExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.conditionalExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:265:1: conditionalExpression : logicalORExpression ( ( LT )* '?' ( LT )* assignmentExpression ( LT )* ':' ( LT )* assignmentExpression )? ;
    // $ANTLR start "conditionalExpression"
    conditionalExpression: function() {
        var retval = new JavaScriptParser.conditionalExpression_return();
        retval.start = this.input.LT(1);
        var conditionalExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT305 = null;
        var char_literal306 = null;
        var LT307 = null;
        var LT309 = null;
        var char_literal310 = null;
        var LT311 = null;
         var logicalORExpression304 = null;
         var assignmentExpression308 = null;
         var assignmentExpression312 = null;

        var LT305_tree=null;
        var char_literal306_tree=null;
        var LT307_tree=null;
        var LT309_tree=null;
        var char_literal310_tree=null;
        var LT311_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 55) ) { return retval; }
            // ./grammars/JavaScript.g:266:2: ( logicalORExpression ( ( LT )* '?' ( LT )* assignmentExpression ( LT )* ':' ( LT )* assignmentExpression )? )
            // ./grammars/JavaScript.g:266:4: logicalORExpression ( ( LT )* '?' ( LT )* assignmentExpression ( LT )* ':' ( LT )* assignmentExpression )?
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_logicalORExpression_in_conditionalExpression1645);
            logicalORExpression304=this.logicalORExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalORExpression304.getTree());
            // ./grammars/JavaScript.g:266:24: ( ( LT )* '?' ( LT )* assignmentExpression ( LT )* ':' ( LT )* assignmentExpression )?
            var alt151=2;
            alt151 = this.dfa151.predict(this.input);
            switch (alt151) {
                case 1 :
                    // ./grammars/JavaScript.g:266:25: ( LT )* '?' ( LT )* assignmentExpression ( LT )* ':' ( LT )* assignmentExpression
                    // ./grammars/JavaScript.g:266:27: ( LT )*
                    loop147:
                    do {
                        var alt147=2;
                        var LA147_0 = this.input.LA(1);

                        if ( (LA147_0==LT) ) {
                            alt147=1;
                        }


                        switch (alt147) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT305=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_conditionalExpression1648); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop147;
                        }
                    } while (true);

                    char_literal306=this.match(this.input,73,JavaScriptParser.FOLLOW_73_in_conditionalExpression1652); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal306_tree = this.adaptor.create(char_literal306);
                    this.adaptor.addChild(root_0, char_literal306_tree);
                    }
                    // ./grammars/JavaScript.g:266:36: ( LT )*
                    loop148:
                    do {
                        var alt148=2;
                        var LA148_0 = this.input.LA(1);

                        if ( (LA148_0==LT) ) {
                            alt148=1;
                        }


                        switch (alt148) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT307=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_conditionalExpression1654); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop148;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpression_in_conditionalExpression1658);
                    assignmentExpression308=this.assignmentExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpression308.getTree());
                    // ./grammars/JavaScript.g:266:62: ( LT )*
                    loop149:
                    do {
                        var alt149=2;
                        var LA149_0 = this.input.LA(1);

                        if ( (LA149_0==LT) ) {
                            alt149=1;
                        }


                        switch (alt149) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT309=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_conditionalExpression1660); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop149;
                        }
                    } while (true);

                    char_literal310=this.match(this.input,50,JavaScriptParser.FOLLOW_50_in_conditionalExpression1664); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal310_tree = this.adaptor.create(char_literal310);
                    this.adaptor.addChild(root_0, char_literal310_tree);
                    }
                    // ./grammars/JavaScript.g:266:71: ( LT )*
                    loop150:
                    do {
                        var alt150=2;
                        var LA150_0 = this.input.LA(1);

                        if ( (LA150_0==LT) ) {
                            alt150=1;
                        }


                        switch (alt150) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT311=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_conditionalExpression1666); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop150;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpression_in_conditionalExpression1670);
                    assignmentExpression312=this.assignmentExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpression312.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 55, conditionalExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    conditionalExpressionNoIn_return: (function() {
        JavaScriptParser.conditionalExpressionNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.conditionalExpressionNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:269:1: conditionalExpressionNoIn : logicalORExpressionNoIn ( ( LT )* '?' ( LT )* assignmentExpressionNoIn ( LT )* ':' ( LT )* assignmentExpressionNoIn )? ;
    // $ANTLR start "conditionalExpressionNoIn"
    conditionalExpressionNoIn: function() {
        var retval = new JavaScriptParser.conditionalExpressionNoIn_return();
        retval.start = this.input.LT(1);
        var conditionalExpressionNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var LT314 = null;
        var char_literal315 = null;
        var LT316 = null;
        var LT318 = null;
        var char_literal319 = null;
        var LT320 = null;
         var logicalORExpressionNoIn313 = null;
         var assignmentExpressionNoIn317 = null;
         var assignmentExpressionNoIn321 = null;

        var LT314_tree=null;
        var char_literal315_tree=null;
        var LT316_tree=null;
        var LT318_tree=null;
        var char_literal319_tree=null;
        var LT320_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 56) ) { return retval; }
            // ./grammars/JavaScript.g:270:2: ( logicalORExpressionNoIn ( ( LT )* '?' ( LT )* assignmentExpressionNoIn ( LT )* ':' ( LT )* assignmentExpressionNoIn )? )
            // ./grammars/JavaScript.g:270:4: logicalORExpressionNoIn ( ( LT )* '?' ( LT )* assignmentExpressionNoIn ( LT )* ':' ( LT )* assignmentExpressionNoIn )?
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_logicalORExpressionNoIn_in_conditionalExpressionNoIn1683);
            logicalORExpressionNoIn313=this.logicalORExpressionNoIn();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalORExpressionNoIn313.getTree());
            // ./grammars/JavaScript.g:270:28: ( ( LT )* '?' ( LT )* assignmentExpressionNoIn ( LT )* ':' ( LT )* assignmentExpressionNoIn )?
            var alt156=2;
            alt156 = this.dfa156.predict(this.input);
            switch (alt156) {
                case 1 :
                    // ./grammars/JavaScript.g:270:29: ( LT )* '?' ( LT )* assignmentExpressionNoIn ( LT )* ':' ( LT )* assignmentExpressionNoIn
                    // ./grammars/JavaScript.g:270:31: ( LT )*
                    loop152:
                    do {
                        var alt152=2;
                        var LA152_0 = this.input.LA(1);

                        if ( (LA152_0==LT) ) {
                            alt152=1;
                        }


                        switch (alt152) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT314=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_conditionalExpressionNoIn1686); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop152;
                        }
                    } while (true);

                    char_literal315=this.match(this.input,73,JavaScriptParser.FOLLOW_73_in_conditionalExpressionNoIn1690); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal315_tree = this.adaptor.create(char_literal315);
                    this.adaptor.addChild(root_0, char_literal315_tree);
                    }
                    // ./grammars/JavaScript.g:270:40: ( LT )*
                    loop153:
                    do {
                        var alt153=2;
                        var LA153_0 = this.input.LA(1);

                        if ( (LA153_0==LT) ) {
                            alt153=1;
                        }


                        switch (alt153) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT316=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_conditionalExpressionNoIn1692); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop153;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpressionNoIn_in_conditionalExpressionNoIn1696);
                    assignmentExpressionNoIn317=this.assignmentExpressionNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpressionNoIn317.getTree());
                    // ./grammars/JavaScript.g:270:70: ( LT )*
                    loop154:
                    do {
                        var alt154=2;
                        var LA154_0 = this.input.LA(1);

                        if ( (LA154_0==LT) ) {
                            alt154=1;
                        }


                        switch (alt154) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT318=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_conditionalExpressionNoIn1698); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop154;
                        }
                    } while (true);

                    char_literal319=this.match(this.input,50,JavaScriptParser.FOLLOW_50_in_conditionalExpressionNoIn1702); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal319_tree = this.adaptor.create(char_literal319);
                    this.adaptor.addChild(root_0, char_literal319_tree);
                    }
                    // ./grammars/JavaScript.g:270:79: ( LT )*
                    loop155:
                    do {
                        var alt155=2;
                        var LA155_0 = this.input.LA(1);

                        if ( (LA155_0==LT) ) {
                            alt155=1;
                        }


                        switch (alt155) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT320=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_conditionalExpressionNoIn1704); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop155;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpressionNoIn_in_conditionalExpressionNoIn1708);
                    assignmentExpressionNoIn321=this.assignmentExpressionNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpressionNoIn321.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 56, conditionalExpressionNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    logicalORExpression_return: (function() {
        JavaScriptParser.logicalORExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.logicalORExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:273:1: logicalORExpression : logicalANDExpression ( ( LT )* '||' ( LT )* logicalANDExpression )* ;
    // $ANTLR start "logicalORExpression"
    logicalORExpression: function() {
        var retval = new JavaScriptParser.logicalORExpression_return();
        retval.start = this.input.LT(1);
        var logicalORExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT323 = null;
        var string_literal324 = null;
        var LT325 = null;
         var logicalANDExpression322 = null;
         var logicalANDExpression326 = null;

        var LT323_tree=null;
        var string_literal324_tree=null;
        var LT325_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 57) ) { return retval; }
            // ./grammars/JavaScript.g:274:2: ( logicalANDExpression ( ( LT )* '||' ( LT )* logicalANDExpression )* )
            // ./grammars/JavaScript.g:274:4: logicalANDExpression ( ( LT )* '||' ( LT )* logicalANDExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_logicalANDExpression_in_logicalORExpression1721);
            logicalANDExpression322=this.logicalANDExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalANDExpression322.getTree());
            // ./grammars/JavaScript.g:274:25: ( ( LT )* '||' ( LT )* logicalANDExpression )*
            loop159:
            do {
                var alt159=2;
                alt159 = this.dfa159.predict(this.input);
                switch (alt159) {
                case 1 :
                    // ./grammars/JavaScript.g:274:26: ( LT )* '||' ( LT )* logicalANDExpression
                    // ./grammars/JavaScript.g:274:28: ( LT )*
                    loop157:
                    do {
                        var alt157=2;
                        var LA157_0 = this.input.LA(1);

                        if ( (LA157_0==LT) ) {
                            alt157=1;
                        }


                        switch (alt157) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT323=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_logicalORExpression1724); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop157;
                        }
                    } while (true);

                    string_literal324=this.match(this.input,74,JavaScriptParser.FOLLOW_74_in_logicalORExpression1728); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal324_tree = this.adaptor.create(string_literal324);
                    this.adaptor.addChild(root_0, string_literal324_tree);
                    }
                    // ./grammars/JavaScript.g:274:38: ( LT )*
                    loop158:
                    do {
                        var alt158=2;
                        var LA158_0 = this.input.LA(1);

                        if ( (LA158_0==LT) ) {
                            alt158=1;
                        }


                        switch (alt158) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT325=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_logicalORExpression1730); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop158;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_logicalANDExpression_in_logicalORExpression1734);
                    logicalANDExpression326=this.logicalANDExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalANDExpression326.getTree());


                    break;

                default :
                    break loop159;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 57, logicalORExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    logicalORExpressionNoIn_return: (function() {
        JavaScriptParser.logicalORExpressionNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.logicalORExpressionNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:277:1: logicalORExpressionNoIn : logicalANDExpressionNoIn ( ( LT )* '||' ( LT )* logicalANDExpressionNoIn )* ;
    // $ANTLR start "logicalORExpressionNoIn"
    logicalORExpressionNoIn: function() {
        var retval = new JavaScriptParser.logicalORExpressionNoIn_return();
        retval.start = this.input.LT(1);
        var logicalORExpressionNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var LT328 = null;
        var string_literal329 = null;
        var LT330 = null;
         var logicalANDExpressionNoIn327 = null;
         var logicalANDExpressionNoIn331 = null;

        var LT328_tree=null;
        var string_literal329_tree=null;
        var LT330_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 58) ) { return retval; }
            // ./grammars/JavaScript.g:278:2: ( logicalANDExpressionNoIn ( ( LT )* '||' ( LT )* logicalANDExpressionNoIn )* )
            // ./grammars/JavaScript.g:278:4: logicalANDExpressionNoIn ( ( LT )* '||' ( LT )* logicalANDExpressionNoIn )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_logicalANDExpressionNoIn_in_logicalORExpressionNoIn1748);
            logicalANDExpressionNoIn327=this.logicalANDExpressionNoIn();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalANDExpressionNoIn327.getTree());
            // ./grammars/JavaScript.g:278:29: ( ( LT )* '||' ( LT )* logicalANDExpressionNoIn )*
            loop162:
            do {
                var alt162=2;
                alt162 = this.dfa162.predict(this.input);
                switch (alt162) {
                case 1 :
                    // ./grammars/JavaScript.g:278:30: ( LT )* '||' ( LT )* logicalANDExpressionNoIn
                    // ./grammars/JavaScript.g:278:32: ( LT )*
                    loop160:
                    do {
                        var alt160=2;
                        var LA160_0 = this.input.LA(1);

                        if ( (LA160_0==LT) ) {
                            alt160=1;
                        }


                        switch (alt160) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT328=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_logicalORExpressionNoIn1751); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop160;
                        }
                    } while (true);

                    string_literal329=this.match(this.input,74,JavaScriptParser.FOLLOW_74_in_logicalORExpressionNoIn1755); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal329_tree = this.adaptor.create(string_literal329);
                    this.adaptor.addChild(root_0, string_literal329_tree);
                    }
                    // ./grammars/JavaScript.g:278:42: ( LT )*
                    loop161:
                    do {
                        var alt161=2;
                        var LA161_0 = this.input.LA(1);

                        if ( (LA161_0==LT) ) {
                            alt161=1;
                        }


                        switch (alt161) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT330=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_logicalORExpressionNoIn1757); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop161;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_logicalANDExpressionNoIn_in_logicalORExpressionNoIn1761);
                    logicalANDExpressionNoIn331=this.logicalANDExpressionNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logicalANDExpressionNoIn331.getTree());


                    break;

                default :
                    break loop162;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 58, logicalORExpressionNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    logicalANDExpression_return: (function() {
        JavaScriptParser.logicalANDExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.logicalANDExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:281:1: logicalANDExpression : bitwiseORExpression ( ( LT )* '&&' ( LT )* bitwiseORExpression )* ;
    // $ANTLR start "logicalANDExpression"
    logicalANDExpression: function() {
        var retval = new JavaScriptParser.logicalANDExpression_return();
        retval.start = this.input.LT(1);
        var logicalANDExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT333 = null;
        var string_literal334 = null;
        var LT335 = null;
         var bitwiseORExpression332 = null;
         var bitwiseORExpression336 = null;

        var LT333_tree=null;
        var string_literal334_tree=null;
        var LT335_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 59) ) { return retval; }
            // ./grammars/JavaScript.g:282:2: ( bitwiseORExpression ( ( LT )* '&&' ( LT )* bitwiseORExpression )* )
            // ./grammars/JavaScript.g:282:4: bitwiseORExpression ( ( LT )* '&&' ( LT )* bitwiseORExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_bitwiseORExpression_in_logicalANDExpression1775);
            bitwiseORExpression332=this.bitwiseORExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bitwiseORExpression332.getTree());
            // ./grammars/JavaScript.g:282:24: ( ( LT )* '&&' ( LT )* bitwiseORExpression )*
            loop165:
            do {
                var alt165=2;
                alt165 = this.dfa165.predict(this.input);
                switch (alt165) {
                case 1 :
                    // ./grammars/JavaScript.g:282:25: ( LT )* '&&' ( LT )* bitwiseORExpression
                    // ./grammars/JavaScript.g:282:27: ( LT )*
                    loop163:
                    do {
                        var alt163=2;
                        var LA163_0 = this.input.LA(1);

                        if ( (LA163_0==LT) ) {
                            alt163=1;
                        }


                        switch (alt163) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT333=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_logicalANDExpression1778); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop163;
                        }
                    } while (true);

                    string_literal334=this.match(this.input,75,JavaScriptParser.FOLLOW_75_in_logicalANDExpression1782); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal334_tree = this.adaptor.create(string_literal334);
                    this.adaptor.addChild(root_0, string_literal334_tree);
                    }
                    // ./grammars/JavaScript.g:282:37: ( LT )*
                    loop164:
                    do {
                        var alt164=2;
                        var LA164_0 = this.input.LA(1);

                        if ( (LA164_0==LT) ) {
                            alt164=1;
                        }


                        switch (alt164) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT335=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_logicalANDExpression1784); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop164;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_bitwiseORExpression_in_logicalANDExpression1788);
                    bitwiseORExpression336=this.bitwiseORExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bitwiseORExpression336.getTree());


                    break;

                default :
                    break loop165;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 59, logicalANDExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    logicalANDExpressionNoIn_return: (function() {
        JavaScriptParser.logicalANDExpressionNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.logicalANDExpressionNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:285:1: logicalANDExpressionNoIn : bitwiseORExpressionNoIn ( ( LT )* '&&' ( LT )* bitwiseORExpressionNoIn )* ;
    // $ANTLR start "logicalANDExpressionNoIn"
    logicalANDExpressionNoIn: function() {
        var retval = new JavaScriptParser.logicalANDExpressionNoIn_return();
        retval.start = this.input.LT(1);
        var logicalANDExpressionNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var LT338 = null;
        var string_literal339 = null;
        var LT340 = null;
         var bitwiseORExpressionNoIn337 = null;
         var bitwiseORExpressionNoIn341 = null;

        var LT338_tree=null;
        var string_literal339_tree=null;
        var LT340_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 60) ) { return retval; }
            // ./grammars/JavaScript.g:286:2: ( bitwiseORExpressionNoIn ( ( LT )* '&&' ( LT )* bitwiseORExpressionNoIn )* )
            // ./grammars/JavaScript.g:286:4: bitwiseORExpressionNoIn ( ( LT )* '&&' ( LT )* bitwiseORExpressionNoIn )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_bitwiseORExpressionNoIn_in_logicalANDExpressionNoIn1802);
            bitwiseORExpressionNoIn337=this.bitwiseORExpressionNoIn();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bitwiseORExpressionNoIn337.getTree());
            // ./grammars/JavaScript.g:286:28: ( ( LT )* '&&' ( LT )* bitwiseORExpressionNoIn )*
            loop168:
            do {
                var alt168=2;
                alt168 = this.dfa168.predict(this.input);
                switch (alt168) {
                case 1 :
                    // ./grammars/JavaScript.g:286:29: ( LT )* '&&' ( LT )* bitwiseORExpressionNoIn
                    // ./grammars/JavaScript.g:286:31: ( LT )*
                    loop166:
                    do {
                        var alt166=2;
                        var LA166_0 = this.input.LA(1);

                        if ( (LA166_0==LT) ) {
                            alt166=1;
                        }


                        switch (alt166) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT338=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_logicalANDExpressionNoIn1805); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop166;
                        }
                    } while (true);

                    string_literal339=this.match(this.input,75,JavaScriptParser.FOLLOW_75_in_logicalANDExpressionNoIn1809); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal339_tree = this.adaptor.create(string_literal339);
                    this.adaptor.addChild(root_0, string_literal339_tree);
                    }
                    // ./grammars/JavaScript.g:286:41: ( LT )*
                    loop167:
                    do {
                        var alt167=2;
                        var LA167_0 = this.input.LA(1);

                        if ( (LA167_0==LT) ) {
                            alt167=1;
                        }


                        switch (alt167) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT340=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_logicalANDExpressionNoIn1811); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop167;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_bitwiseORExpressionNoIn_in_logicalANDExpressionNoIn1815);
                    bitwiseORExpressionNoIn341=this.bitwiseORExpressionNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bitwiseORExpressionNoIn341.getTree());


                    break;

                default :
                    break loop168;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 60, logicalANDExpressionNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    bitwiseORExpression_return: (function() {
        JavaScriptParser.bitwiseORExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.bitwiseORExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:289:1: bitwiseORExpression : bitwiseXORExpression ( ( LT )* '|' ( LT )* bitwiseXORExpression )* ;
    // $ANTLR start "bitwiseORExpression"
    bitwiseORExpression: function() {
        var retval = new JavaScriptParser.bitwiseORExpression_return();
        retval.start = this.input.LT(1);
        var bitwiseORExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT343 = null;
        var char_literal344 = null;
        var LT345 = null;
         var bitwiseXORExpression342 = null;
         var bitwiseXORExpression346 = null;

        var LT343_tree=null;
        var char_literal344_tree=null;
        var LT345_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 61) ) { return retval; }
            // ./grammars/JavaScript.g:290:2: ( bitwiseXORExpression ( ( LT )* '|' ( LT )* bitwiseXORExpression )* )
            // ./grammars/JavaScript.g:290:4: bitwiseXORExpression ( ( LT )* '|' ( LT )* bitwiseXORExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_bitwiseXORExpression_in_bitwiseORExpression1829);
            bitwiseXORExpression342=this.bitwiseXORExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bitwiseXORExpression342.getTree());
            // ./grammars/JavaScript.g:290:25: ( ( LT )* '|' ( LT )* bitwiseXORExpression )*
            loop171:
            do {
                var alt171=2;
                alt171 = this.dfa171.predict(this.input);
                switch (alt171) {
                case 1 :
                    // ./grammars/JavaScript.g:290:26: ( LT )* '|' ( LT )* bitwiseXORExpression
                    // ./grammars/JavaScript.g:290:28: ( LT )*
                    loop169:
                    do {
                        var alt169=2;
                        var LA169_0 = this.input.LA(1);

                        if ( (LA169_0==LT) ) {
                            alt169=1;
                        }


                        switch (alt169) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT343=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_bitwiseORExpression1832); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop169;
                        }
                    } while (true);

                    char_literal344=this.match(this.input,76,JavaScriptParser.FOLLOW_76_in_bitwiseORExpression1836); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal344_tree = this.adaptor.create(char_literal344);
                    this.adaptor.addChild(root_0, char_literal344_tree);
                    }
                    // ./grammars/JavaScript.g:290:37: ( LT )*
                    loop170:
                    do {
                        var alt170=2;
                        var LA170_0 = this.input.LA(1);

                        if ( (LA170_0==LT) ) {
                            alt170=1;
                        }


                        switch (alt170) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT345=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_bitwiseORExpression1838); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop170;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_bitwiseXORExpression_in_bitwiseORExpression1842);
                    bitwiseXORExpression346=this.bitwiseXORExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bitwiseXORExpression346.getTree());


                    break;

                default :
                    break loop171;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 61, bitwiseORExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    bitwiseORExpressionNoIn_return: (function() {
        JavaScriptParser.bitwiseORExpressionNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.bitwiseORExpressionNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:293:1: bitwiseORExpressionNoIn : bitwiseXORExpressionNoIn ( ( LT )* '|' ( LT )* bitwiseXORExpressionNoIn )* ;
    // $ANTLR start "bitwiseORExpressionNoIn"
    bitwiseORExpressionNoIn: function() {
        var retval = new JavaScriptParser.bitwiseORExpressionNoIn_return();
        retval.start = this.input.LT(1);
        var bitwiseORExpressionNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var LT348 = null;
        var char_literal349 = null;
        var LT350 = null;
         var bitwiseXORExpressionNoIn347 = null;
         var bitwiseXORExpressionNoIn351 = null;

        var LT348_tree=null;
        var char_literal349_tree=null;
        var LT350_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 62) ) { return retval; }
            // ./grammars/JavaScript.g:294:2: ( bitwiseXORExpressionNoIn ( ( LT )* '|' ( LT )* bitwiseXORExpressionNoIn )* )
            // ./grammars/JavaScript.g:294:4: bitwiseXORExpressionNoIn ( ( LT )* '|' ( LT )* bitwiseXORExpressionNoIn )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_bitwiseXORExpressionNoIn_in_bitwiseORExpressionNoIn1856);
            bitwiseXORExpressionNoIn347=this.bitwiseXORExpressionNoIn();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bitwiseXORExpressionNoIn347.getTree());
            // ./grammars/JavaScript.g:294:29: ( ( LT )* '|' ( LT )* bitwiseXORExpressionNoIn )*
            loop174:
            do {
                var alt174=2;
                alt174 = this.dfa174.predict(this.input);
                switch (alt174) {
                case 1 :
                    // ./grammars/JavaScript.g:294:30: ( LT )* '|' ( LT )* bitwiseXORExpressionNoIn
                    // ./grammars/JavaScript.g:294:32: ( LT )*
                    loop172:
                    do {
                        var alt172=2;
                        var LA172_0 = this.input.LA(1);

                        if ( (LA172_0==LT) ) {
                            alt172=1;
                        }


                        switch (alt172) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT348=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_bitwiseORExpressionNoIn1859); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop172;
                        }
                    } while (true);

                    char_literal349=this.match(this.input,76,JavaScriptParser.FOLLOW_76_in_bitwiseORExpressionNoIn1863); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal349_tree = this.adaptor.create(char_literal349);
                    this.adaptor.addChild(root_0, char_literal349_tree);
                    }
                    // ./grammars/JavaScript.g:294:41: ( LT )*
                    loop173:
                    do {
                        var alt173=2;
                        var LA173_0 = this.input.LA(1);

                        if ( (LA173_0==LT) ) {
                            alt173=1;
                        }


                        switch (alt173) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT350=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_bitwiseORExpressionNoIn1865); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop173;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_bitwiseXORExpressionNoIn_in_bitwiseORExpressionNoIn1869);
                    bitwiseXORExpressionNoIn351=this.bitwiseXORExpressionNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bitwiseXORExpressionNoIn351.getTree());


                    break;

                default :
                    break loop174;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 62, bitwiseORExpressionNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    bitwiseXORExpression_return: (function() {
        JavaScriptParser.bitwiseXORExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.bitwiseXORExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:297:1: bitwiseXORExpression : bitwiseANDExpression ( ( LT )* '^' ( LT )* bitwiseANDExpression )* ;
    // $ANTLR start "bitwiseXORExpression"
    bitwiseXORExpression: function() {
        var retval = new JavaScriptParser.bitwiseXORExpression_return();
        retval.start = this.input.LT(1);
        var bitwiseXORExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT353 = null;
        var char_literal354 = null;
        var LT355 = null;
         var bitwiseANDExpression352 = null;
         var bitwiseANDExpression356 = null;

        var LT353_tree=null;
        var char_literal354_tree=null;
        var LT355_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 63) ) { return retval; }
            // ./grammars/JavaScript.g:298:2: ( bitwiseANDExpression ( ( LT )* '^' ( LT )* bitwiseANDExpression )* )
            // ./grammars/JavaScript.g:298:4: bitwiseANDExpression ( ( LT )* '^' ( LT )* bitwiseANDExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_bitwiseANDExpression_in_bitwiseXORExpression1883);
            bitwiseANDExpression352=this.bitwiseANDExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bitwiseANDExpression352.getTree());
            // ./grammars/JavaScript.g:298:25: ( ( LT )* '^' ( LT )* bitwiseANDExpression )*
            loop177:
            do {
                var alt177=2;
                alt177 = this.dfa177.predict(this.input);
                switch (alt177) {
                case 1 :
                    // ./grammars/JavaScript.g:298:26: ( LT )* '^' ( LT )* bitwiseANDExpression
                    // ./grammars/JavaScript.g:298:28: ( LT )*
                    loop175:
                    do {
                        var alt175=2;
                        var LA175_0 = this.input.LA(1);

                        if ( (LA175_0==LT) ) {
                            alt175=1;
                        }


                        switch (alt175) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT353=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_bitwiseXORExpression1886); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop175;
                        }
                    } while (true);

                    char_literal354=this.match(this.input,77,JavaScriptParser.FOLLOW_77_in_bitwiseXORExpression1890); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal354_tree = this.adaptor.create(char_literal354);
                    this.adaptor.addChild(root_0, char_literal354_tree);
                    }
                    // ./grammars/JavaScript.g:298:37: ( LT )*
                    loop176:
                    do {
                        var alt176=2;
                        var LA176_0 = this.input.LA(1);

                        if ( (LA176_0==LT) ) {
                            alt176=1;
                        }


                        switch (alt176) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT355=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_bitwiseXORExpression1892); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop176;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_bitwiseANDExpression_in_bitwiseXORExpression1896);
                    bitwiseANDExpression356=this.bitwiseANDExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bitwiseANDExpression356.getTree());


                    break;

                default :
                    break loop177;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 63, bitwiseXORExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    bitwiseXORExpressionNoIn_return: (function() {
        JavaScriptParser.bitwiseXORExpressionNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.bitwiseXORExpressionNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:301:1: bitwiseXORExpressionNoIn : bitwiseANDExpressionNoIn ( ( LT )* '^' ( LT )* bitwiseANDExpressionNoIn )* ;
    // $ANTLR start "bitwiseXORExpressionNoIn"
    bitwiseXORExpressionNoIn: function() {
        var retval = new JavaScriptParser.bitwiseXORExpressionNoIn_return();
        retval.start = this.input.LT(1);
        var bitwiseXORExpressionNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var LT358 = null;
        var char_literal359 = null;
        var LT360 = null;
         var bitwiseANDExpressionNoIn357 = null;
         var bitwiseANDExpressionNoIn361 = null;

        var LT358_tree=null;
        var char_literal359_tree=null;
        var LT360_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 64) ) { return retval; }
            // ./grammars/JavaScript.g:302:2: ( bitwiseANDExpressionNoIn ( ( LT )* '^' ( LT )* bitwiseANDExpressionNoIn )* )
            // ./grammars/JavaScript.g:302:4: bitwiseANDExpressionNoIn ( ( LT )* '^' ( LT )* bitwiseANDExpressionNoIn )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_bitwiseANDExpressionNoIn_in_bitwiseXORExpressionNoIn1910);
            bitwiseANDExpressionNoIn357=this.bitwiseANDExpressionNoIn();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bitwiseANDExpressionNoIn357.getTree());
            // ./grammars/JavaScript.g:302:29: ( ( LT )* '^' ( LT )* bitwiseANDExpressionNoIn )*
            loop180:
            do {
                var alt180=2;
                alt180 = this.dfa180.predict(this.input);
                switch (alt180) {
                case 1 :
                    // ./grammars/JavaScript.g:302:30: ( LT )* '^' ( LT )* bitwiseANDExpressionNoIn
                    // ./grammars/JavaScript.g:302:32: ( LT )*
                    loop178:
                    do {
                        var alt178=2;
                        var LA178_0 = this.input.LA(1);

                        if ( (LA178_0==LT) ) {
                            alt178=1;
                        }


                        switch (alt178) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT358=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_bitwiseXORExpressionNoIn1913); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop178;
                        }
                    } while (true);

                    char_literal359=this.match(this.input,77,JavaScriptParser.FOLLOW_77_in_bitwiseXORExpressionNoIn1917); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal359_tree = this.adaptor.create(char_literal359);
                    this.adaptor.addChild(root_0, char_literal359_tree);
                    }
                    // ./grammars/JavaScript.g:302:41: ( LT )*
                    loop179:
                    do {
                        var alt179=2;
                        var LA179_0 = this.input.LA(1);

                        if ( (LA179_0==LT) ) {
                            alt179=1;
                        }


                        switch (alt179) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT360=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_bitwiseXORExpressionNoIn1919); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop179;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_bitwiseANDExpressionNoIn_in_bitwiseXORExpressionNoIn1923);
                    bitwiseANDExpressionNoIn361=this.bitwiseANDExpressionNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, bitwiseANDExpressionNoIn361.getTree());


                    break;

                default :
                    break loop180;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 64, bitwiseXORExpressionNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    bitwiseANDExpression_return: (function() {
        JavaScriptParser.bitwiseANDExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.bitwiseANDExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:305:1: bitwiseANDExpression : equalityExpression ( ( LT )* '&' ( LT )* equalityExpression )* ;
    // $ANTLR start "bitwiseANDExpression"
    bitwiseANDExpression: function() {
        var retval = new JavaScriptParser.bitwiseANDExpression_return();
        retval.start = this.input.LT(1);
        var bitwiseANDExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT363 = null;
        var char_literal364 = null;
        var LT365 = null;
         var equalityExpression362 = null;
         var equalityExpression366 = null;

        var LT363_tree=null;
        var char_literal364_tree=null;
        var LT365_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 65) ) { return retval; }
            // ./grammars/JavaScript.g:306:2: ( equalityExpression ( ( LT )* '&' ( LT )* equalityExpression )* )
            // ./grammars/JavaScript.g:306:4: equalityExpression ( ( LT )* '&' ( LT )* equalityExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_equalityExpression_in_bitwiseANDExpression1937);
            equalityExpression362=this.equalityExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equalityExpression362.getTree());
            // ./grammars/JavaScript.g:306:23: ( ( LT )* '&' ( LT )* equalityExpression )*
            loop183:
            do {
                var alt183=2;
                alt183 = this.dfa183.predict(this.input);
                switch (alt183) {
                case 1 :
                    // ./grammars/JavaScript.g:306:24: ( LT )* '&' ( LT )* equalityExpression
                    // ./grammars/JavaScript.g:306:26: ( LT )*
                    loop181:
                    do {
                        var alt181=2;
                        var LA181_0 = this.input.LA(1);

                        if ( (LA181_0==LT) ) {
                            alt181=1;
                        }


                        switch (alt181) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT363=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_bitwiseANDExpression1940); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop181;
                        }
                    } while (true);

                    char_literal364=this.match(this.input,78,JavaScriptParser.FOLLOW_78_in_bitwiseANDExpression1944); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal364_tree = this.adaptor.create(char_literal364);
                    this.adaptor.addChild(root_0, char_literal364_tree);
                    }
                    // ./grammars/JavaScript.g:306:35: ( LT )*
                    loop182:
                    do {
                        var alt182=2;
                        var LA182_0 = this.input.LA(1);

                        if ( (LA182_0==LT) ) {
                            alt182=1;
                        }


                        switch (alt182) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT365=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_bitwiseANDExpression1946); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop182;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_equalityExpression_in_bitwiseANDExpression1950);
                    equalityExpression366=this.equalityExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equalityExpression366.getTree());


                    break;

                default :
                    break loop183;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 65, bitwiseANDExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    bitwiseANDExpressionNoIn_return: (function() {
        JavaScriptParser.bitwiseANDExpressionNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.bitwiseANDExpressionNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:309:1: bitwiseANDExpressionNoIn : equalityExpressionNoIn ( ( LT )* '&' ( LT )* equalityExpressionNoIn )* ;
    // $ANTLR start "bitwiseANDExpressionNoIn"
    bitwiseANDExpressionNoIn: function() {
        var retval = new JavaScriptParser.bitwiseANDExpressionNoIn_return();
        retval.start = this.input.LT(1);
        var bitwiseANDExpressionNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var LT368 = null;
        var char_literal369 = null;
        var LT370 = null;
         var equalityExpressionNoIn367 = null;
         var equalityExpressionNoIn371 = null;

        var LT368_tree=null;
        var char_literal369_tree=null;
        var LT370_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 66) ) { return retval; }
            // ./grammars/JavaScript.g:310:2: ( equalityExpressionNoIn ( ( LT )* '&' ( LT )* equalityExpressionNoIn )* )
            // ./grammars/JavaScript.g:310:4: equalityExpressionNoIn ( ( LT )* '&' ( LT )* equalityExpressionNoIn )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_equalityExpressionNoIn_in_bitwiseANDExpressionNoIn1964);
            equalityExpressionNoIn367=this.equalityExpressionNoIn();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equalityExpressionNoIn367.getTree());
            // ./grammars/JavaScript.g:310:27: ( ( LT )* '&' ( LT )* equalityExpressionNoIn )*
            loop186:
            do {
                var alt186=2;
                alt186 = this.dfa186.predict(this.input);
                switch (alt186) {
                case 1 :
                    // ./grammars/JavaScript.g:310:28: ( LT )* '&' ( LT )* equalityExpressionNoIn
                    // ./grammars/JavaScript.g:310:30: ( LT )*
                    loop184:
                    do {
                        var alt184=2;
                        var LA184_0 = this.input.LA(1);

                        if ( (LA184_0==LT) ) {
                            alt184=1;
                        }


                        switch (alt184) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT368=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_bitwiseANDExpressionNoIn1967); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop184;
                        }
                    } while (true);

                    char_literal369=this.match(this.input,78,JavaScriptParser.FOLLOW_78_in_bitwiseANDExpressionNoIn1971); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal369_tree = this.adaptor.create(char_literal369);
                    this.adaptor.addChild(root_0, char_literal369_tree);
                    }
                    // ./grammars/JavaScript.g:310:39: ( LT )*
                    loop185:
                    do {
                        var alt185=2;
                        var LA185_0 = this.input.LA(1);

                        if ( (LA185_0==LT) ) {
                            alt185=1;
                        }


                        switch (alt185) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT370=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_bitwiseANDExpressionNoIn1973); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop185;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_equalityExpressionNoIn_in_bitwiseANDExpressionNoIn1977);
                    equalityExpressionNoIn371=this.equalityExpressionNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equalityExpressionNoIn371.getTree());


                    break;

                default :
                    break loop186;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 66, bitwiseANDExpressionNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    equalityExpression_return: (function() {
        JavaScriptParser.equalityExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.equalityExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:313:1: equalityExpression : relationalExpression ( ( LT )* ( '==' | '!=' | '===' | '!==' ) ( LT )* relationalExpression )* ;
    // $ANTLR start "equalityExpression"
    equalityExpression: function() {
        var retval = new JavaScriptParser.equalityExpression_return();
        retval.start = this.input.LT(1);
        var equalityExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT373 = null;
        var set374 = null;
        var LT375 = null;
         var relationalExpression372 = null;
         var relationalExpression376 = null;

        var LT373_tree=null;
        var set374_tree=null;
        var LT375_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 67) ) { return retval; }
            // ./grammars/JavaScript.g:314:2: ( relationalExpression ( ( LT )* ( '==' | '!=' | '===' | '!==' ) ( LT )* relationalExpression )* )
            // ./grammars/JavaScript.g:314:4: relationalExpression ( ( LT )* ( '==' | '!=' | '===' | '!==' ) ( LT )* relationalExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_relationalExpression_in_equalityExpression1991);
            relationalExpression372=this.relationalExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relationalExpression372.getTree());
            // ./grammars/JavaScript.g:314:25: ( ( LT )* ( '==' | '!=' | '===' | '!==' ) ( LT )* relationalExpression )*
            loop189:
            do {
                var alt189=2;
                alt189 = this.dfa189.predict(this.input);
                switch (alt189) {
                case 1 :
                    // ./grammars/JavaScript.g:314:26: ( LT )* ( '==' | '!=' | '===' | '!==' ) ( LT )* relationalExpression
                    // ./grammars/JavaScript.g:314:28: ( LT )*
                    loop187:
                    do {
                        var alt187=2;
                        var LA187_0 = this.input.LA(1);

                        if ( (LA187_0==LT) ) {
                            alt187=1;
                        }


                        switch (alt187) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT373=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_equalityExpression1994); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop187;
                        }
                    } while (true);

                    set374=this.input.LT(1);
                    if ( (this.input.LA(1)>=79 && this.input.LA(1)<=82) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set374));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    // ./grammars/JavaScript.g:314:63: ( LT )*
                    loop188:
                    do {
                        var alt188=2;
                        var LA188_0 = this.input.LA(1);

                        if ( (LA188_0==LT) ) {
                            alt188=1;
                        }


                        switch (alt188) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT375=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_equalityExpression2014); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop188;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_relationalExpression_in_equalityExpression2018);
                    relationalExpression376=this.relationalExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relationalExpression376.getTree());


                    break;

                default :
                    break loop189;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 67, equalityExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    equalityExpressionNoIn_return: (function() {
        JavaScriptParser.equalityExpressionNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.equalityExpressionNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:317:1: equalityExpressionNoIn : relationalExpressionNoIn ( ( LT )* ( '==' | '!=' | '===' | '!==' ) ( LT )* relationalExpressionNoIn )* ;
    // $ANTLR start "equalityExpressionNoIn"
    equalityExpressionNoIn: function() {
        var retval = new JavaScriptParser.equalityExpressionNoIn_return();
        retval.start = this.input.LT(1);
        var equalityExpressionNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var LT378 = null;
        var set379 = null;
        var LT380 = null;
         var relationalExpressionNoIn377 = null;
         var relationalExpressionNoIn381 = null;

        var LT378_tree=null;
        var set379_tree=null;
        var LT380_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 68) ) { return retval; }
            // ./grammars/JavaScript.g:318:2: ( relationalExpressionNoIn ( ( LT )* ( '==' | '!=' | '===' | '!==' ) ( LT )* relationalExpressionNoIn )* )
            // ./grammars/JavaScript.g:318:4: relationalExpressionNoIn ( ( LT )* ( '==' | '!=' | '===' | '!==' ) ( LT )* relationalExpressionNoIn )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_relationalExpressionNoIn_in_equalityExpressionNoIn2031);
            relationalExpressionNoIn377=this.relationalExpressionNoIn();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relationalExpressionNoIn377.getTree());
            // ./grammars/JavaScript.g:318:29: ( ( LT )* ( '==' | '!=' | '===' | '!==' ) ( LT )* relationalExpressionNoIn )*
            loop192:
            do {
                var alt192=2;
                alt192 = this.dfa192.predict(this.input);
                switch (alt192) {
                case 1 :
                    // ./grammars/JavaScript.g:318:30: ( LT )* ( '==' | '!=' | '===' | '!==' ) ( LT )* relationalExpressionNoIn
                    // ./grammars/JavaScript.g:318:32: ( LT )*
                    loop190:
                    do {
                        var alt190=2;
                        var LA190_0 = this.input.LA(1);

                        if ( (LA190_0==LT) ) {
                            alt190=1;
                        }


                        switch (alt190) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT378=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_equalityExpressionNoIn2034); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop190;
                        }
                    } while (true);

                    set379=this.input.LT(1);
                    if ( (this.input.LA(1)>=79 && this.input.LA(1)<=82) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set379));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    // ./grammars/JavaScript.g:318:67: ( LT )*
                    loop191:
                    do {
                        var alt191=2;
                        var LA191_0 = this.input.LA(1);

                        if ( (LA191_0==LT) ) {
                            alt191=1;
                        }


                        switch (alt191) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT380=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_equalityExpressionNoIn2054); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop191;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_relationalExpressionNoIn_in_equalityExpressionNoIn2058);
                    relationalExpressionNoIn381=this.relationalExpressionNoIn();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relationalExpressionNoIn381.getTree());


                    break;

                default :
                    break loop192;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 68, equalityExpressionNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    relationalExpression_return: (function() {
        JavaScriptParser.relationalExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.relationalExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:321:1: relationalExpression : shiftExpression ( ( LT )* ( '<' | '>' | '<=' | '>=' | 'instanceof' | 'in' ) ( LT )* shiftExpression )* ;
    // $ANTLR start "relationalExpression"
    relationalExpression: function() {
        var retval = new JavaScriptParser.relationalExpression_return();
        retval.start = this.input.LT(1);
        var relationalExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT383 = null;
        var set384 = null;
        var LT385 = null;
         var shiftExpression382 = null;
         var shiftExpression386 = null;

        var LT383_tree=null;
        var set384_tree=null;
        var LT385_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 69) ) { return retval; }
            // ./grammars/JavaScript.g:322:2: ( shiftExpression ( ( LT )* ( '<' | '>' | '<=' | '>=' | 'instanceof' | 'in' ) ( LT )* shiftExpression )* )
            // ./grammars/JavaScript.g:322:4: shiftExpression ( ( LT )* ( '<' | '>' | '<=' | '>=' | 'instanceof' | 'in' ) ( LT )* shiftExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_shiftExpression_in_relationalExpression2072);
            shiftExpression382=this.shiftExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, shiftExpression382.getTree());
            // ./grammars/JavaScript.g:322:20: ( ( LT )* ( '<' | '>' | '<=' | '>=' | 'instanceof' | 'in' ) ( LT )* shiftExpression )*
            loop195:
            do {
                var alt195=2;
                alt195 = this.dfa195.predict(this.input);
                switch (alt195) {
                case 1 :
                    // ./grammars/JavaScript.g:322:21: ( LT )* ( '<' | '>' | '<=' | '>=' | 'instanceof' | 'in' ) ( LT )* shiftExpression
                    // ./grammars/JavaScript.g:322:23: ( LT )*
                    loop193:
                    do {
                        var alt193=2;
                        var LA193_0 = this.input.LA(1);

                        if ( (LA193_0==LT) ) {
                            alt193=1;
                        }


                        switch (alt193) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT383=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_relationalExpression2075); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop193;
                        }
                    } while (true);

                    set384=this.input.LT(1);
                    if ( this.input.LA(1)==45||(this.input.LA(1)>=83 && this.input.LA(1)<=87) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set384));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    // ./grammars/JavaScript.g:322:76: ( LT )*
                    loop194:
                    do {
                        var alt194=2;
                        var LA194_0 = this.input.LA(1);

                        if ( (LA194_0==LT) ) {
                            alt194=1;
                        }


                        switch (alt194) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT385=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_relationalExpression2103); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop194;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_shiftExpression_in_relationalExpression2107);
                    shiftExpression386=this.shiftExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, shiftExpression386.getTree());


                    break;

                default :
                    break loop195;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 69, relationalExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    relationalExpressionNoIn_return: (function() {
        JavaScriptParser.relationalExpressionNoIn_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.relationalExpressionNoIn_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:325:1: relationalExpressionNoIn : shiftExpression ( ( LT )* ( '<' | '>' | '<=' | '>=' | 'instanceof' ) ( LT )* shiftExpression )* ;
    // $ANTLR start "relationalExpressionNoIn"
    relationalExpressionNoIn: function() {
        var retval = new JavaScriptParser.relationalExpressionNoIn_return();
        retval.start = this.input.LT(1);
        var relationalExpressionNoIn_StartIndex = this.input.index();
        var root_0 = null;

        var LT388 = null;
        var set389 = null;
        var LT390 = null;
         var shiftExpression387 = null;
         var shiftExpression391 = null;

        var LT388_tree=null;
        var set389_tree=null;
        var LT390_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 70) ) { return retval; }
            // ./grammars/JavaScript.g:326:2: ( shiftExpression ( ( LT )* ( '<' | '>' | '<=' | '>=' | 'instanceof' ) ( LT )* shiftExpression )* )
            // ./grammars/JavaScript.g:326:4: shiftExpression ( ( LT )* ( '<' | '>' | '<=' | '>=' | 'instanceof' ) ( LT )* shiftExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_shiftExpression_in_relationalExpressionNoIn2120);
            shiftExpression387=this.shiftExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, shiftExpression387.getTree());
            // ./grammars/JavaScript.g:326:20: ( ( LT )* ( '<' | '>' | '<=' | '>=' | 'instanceof' ) ( LT )* shiftExpression )*
            loop198:
            do {
                var alt198=2;
                alt198 = this.dfa198.predict(this.input);
                switch (alt198) {
                case 1 :
                    // ./grammars/JavaScript.g:326:21: ( LT )* ( '<' | '>' | '<=' | '>=' | 'instanceof' ) ( LT )* shiftExpression
                    // ./grammars/JavaScript.g:326:23: ( LT )*
                    loop196:
                    do {
                        var alt196=2;
                        var LA196_0 = this.input.LA(1);

                        if ( (LA196_0==LT) ) {
                            alt196=1;
                        }


                        switch (alt196) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT388=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_relationalExpressionNoIn2123); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop196;
                        }
                    } while (true);

                    set389=this.input.LT(1);
                    if ( (this.input.LA(1)>=83 && this.input.LA(1)<=87) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set389));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    // ./grammars/JavaScript.g:326:69: ( LT )*
                    loop197:
                    do {
                        var alt197=2;
                        var LA197_0 = this.input.LA(1);

                        if ( (LA197_0==LT) ) {
                            alt197=1;
                        }


                        switch (alt197) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT390=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_relationalExpressionNoIn2147); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop197;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_shiftExpression_in_relationalExpressionNoIn2151);
                    shiftExpression391=this.shiftExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, shiftExpression391.getTree());


                    break;

                default :
                    break loop198;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 70, relationalExpressionNoIn_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    shiftExpression_return: (function() {
        JavaScriptParser.shiftExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.shiftExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:329:1: shiftExpression : additiveExpression ( ( LT )* ( '<<' | '>>' | '>>>' ) ( LT )* additiveExpression )* ;
    // $ANTLR start "shiftExpression"
    shiftExpression: function() {
        var retval = new JavaScriptParser.shiftExpression_return();
        retval.start = this.input.LT(1);
        var shiftExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT393 = null;
        var set394 = null;
        var LT395 = null;
         var additiveExpression392 = null;
         var additiveExpression396 = null;

        var LT393_tree=null;
        var set394_tree=null;
        var LT395_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 71) ) { return retval; }
            // ./grammars/JavaScript.g:330:2: ( additiveExpression ( ( LT )* ( '<<' | '>>' | '>>>' ) ( LT )* additiveExpression )* )
            // ./grammars/JavaScript.g:330:4: additiveExpression ( ( LT )* ( '<<' | '>>' | '>>>' ) ( LT )* additiveExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_additiveExpression_in_shiftExpression2164);
            additiveExpression392=this.additiveExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, additiveExpression392.getTree());
            // ./grammars/JavaScript.g:330:23: ( ( LT )* ( '<<' | '>>' | '>>>' ) ( LT )* additiveExpression )*
            loop201:
            do {
                var alt201=2;
                alt201 = this.dfa201.predict(this.input);
                switch (alt201) {
                case 1 :
                    // ./grammars/JavaScript.g:330:24: ( LT )* ( '<<' | '>>' | '>>>' ) ( LT )* additiveExpression
                    // ./grammars/JavaScript.g:330:26: ( LT )*
                    loop199:
                    do {
                        var alt199=2;
                        var LA199_0 = this.input.LA(1);

                        if ( (LA199_0==LT) ) {
                            alt199=1;
                        }


                        switch (alt199) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT393=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_shiftExpression2167); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop199;
                        }
                    } while (true);

                    set394=this.input.LT(1);
                    if ( (this.input.LA(1)>=88 && this.input.LA(1)<=90) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set394));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    // ./grammars/JavaScript.g:330:53: ( LT )*
                    loop200:
                    do {
                        var alt200=2;
                        var LA200_0 = this.input.LA(1);

                        if ( (LA200_0==LT) ) {
                            alt200=1;
                        }


                        switch (alt200) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT395=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_shiftExpression2183); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop200;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_additiveExpression_in_shiftExpression2187);
                    additiveExpression396=this.additiveExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, additiveExpression396.getTree());


                    break;

                default :
                    break loop201;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 71, shiftExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    additiveExpression_return: (function() {
        JavaScriptParser.additiveExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.additiveExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:333:1: additiveExpression : multiplicativeExpression ( ( LT )* ( '+' | '-' ) ( LT )* multiplicativeExpression )* ;
    // $ANTLR start "additiveExpression"
    additiveExpression: function() {
        var retval = new JavaScriptParser.additiveExpression_return();
        retval.start = this.input.LT(1);
        var additiveExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT398 = null;
        var set399 = null;
        var LT400 = null;
         var multiplicativeExpression397 = null;
         var multiplicativeExpression401 = null;

        var LT398_tree=null;
        var set399_tree=null;
        var LT400_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 72) ) { return retval; }
            // ./grammars/JavaScript.g:334:2: ( multiplicativeExpression ( ( LT )* ( '+' | '-' ) ( LT )* multiplicativeExpression )* )
            // ./grammars/JavaScript.g:334:4: multiplicativeExpression ( ( LT )* ( '+' | '-' ) ( LT )* multiplicativeExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_multiplicativeExpression_in_additiveExpression2200);
            multiplicativeExpression397=this.multiplicativeExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multiplicativeExpression397.getTree());
            // ./grammars/JavaScript.g:334:29: ( ( LT )* ( '+' | '-' ) ( LT )* multiplicativeExpression )*
            loop204:
            do {
                var alt204=2;
                alt204 = this.dfa204.predict(this.input);
                switch (alt204) {
                case 1 :
                    // ./grammars/JavaScript.g:334:30: ( LT )* ( '+' | '-' ) ( LT )* multiplicativeExpression
                    // ./grammars/JavaScript.g:334:32: ( LT )*
                    loop202:
                    do {
                        var alt202=2;
                        var LA202_0 = this.input.LA(1);

                        if ( (LA202_0==LT) ) {
                            alt202=1;
                        }


                        switch (alt202) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT398=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_additiveExpression2203); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop202;
                        }
                    } while (true);

                    set399=this.input.LT(1);
                    if ( (this.input.LA(1)>=91 && this.input.LA(1)<=92) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set399));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    // ./grammars/JavaScript.g:334:49: ( LT )*
                    loop203:
                    do {
                        var alt203=2;
                        var LA203_0 = this.input.LA(1);

                        if ( (LA203_0==LT) ) {
                            alt203=1;
                        }


                        switch (alt203) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT400=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_additiveExpression2215); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop203;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_multiplicativeExpression_in_additiveExpression2219);
                    multiplicativeExpression401=this.multiplicativeExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multiplicativeExpression401.getTree());


                    break;

                default :
                    break loop204;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 72, additiveExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    multiplicativeExpression_return: (function() {
        JavaScriptParser.multiplicativeExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.multiplicativeExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:337:1: multiplicativeExpression : unaryExpression ( ( LT )* ( '*' | '/' | '%' ) ( LT )* unaryExpression )* ;
    // $ANTLR start "multiplicativeExpression"
    multiplicativeExpression: function() {
        var retval = new JavaScriptParser.multiplicativeExpression_return();
        retval.start = this.input.LT(1);
        var multiplicativeExpression_StartIndex = this.input.index();
        var root_0 = null;

        var LT403 = null;
        var set404 = null;
        var LT405 = null;
         var unaryExpression402 = null;
         var unaryExpression406 = null;

        var LT403_tree=null;
        var set404_tree=null;
        var LT405_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 73) ) { return retval; }
            // ./grammars/JavaScript.g:338:2: ( unaryExpression ( ( LT )* ( '*' | '/' | '%' ) ( LT )* unaryExpression )* )
            // ./grammars/JavaScript.g:338:4: unaryExpression ( ( LT )* ( '*' | '/' | '%' ) ( LT )* unaryExpression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_unaryExpression_in_multiplicativeExpression2232);
            unaryExpression402=this.unaryExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unaryExpression402.getTree());
            // ./grammars/JavaScript.g:338:20: ( ( LT )* ( '*' | '/' | '%' ) ( LT )* unaryExpression )*
            loop207:
            do {
                var alt207=2;
                alt207 = this.dfa207.predict(this.input);
                switch (alt207) {
                case 1 :
                    // ./grammars/JavaScript.g:338:21: ( LT )* ( '*' | '/' | '%' ) ( LT )* unaryExpression
                    // ./grammars/JavaScript.g:338:23: ( LT )*
                    loop205:
                    do {
                        var alt205=2;
                        var LA205_0 = this.input.LA(1);

                        if ( (LA205_0==LT) ) {
                            alt205=1;
                        }


                        switch (alt205) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT403=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_multiplicativeExpression2235); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop205;
                        }
                    } while (true);

                    set404=this.input.LT(1);
                    if ( (this.input.LA(1)>=93 && this.input.LA(1)<=95) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set404));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    // ./grammars/JavaScript.g:338:46: ( LT )*
                    loop206:
                    do {
                        var alt206=2;
                        var LA206_0 = this.input.LA(1);

                        if ( (LA206_0==LT) ) {
                            alt206=1;
                        }


                        switch (alt206) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT405=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_multiplicativeExpression2251); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop206;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_unaryExpression_in_multiplicativeExpression2255);
                    unaryExpression406=this.unaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unaryExpression406.getTree());


                    break;

                default :
                    break loop207;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 73, multiplicativeExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    unaryExpression_return: (function() {
        JavaScriptParser.unaryExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.unaryExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:341:1: unaryExpression : ( postfixExpression | ( 'delete' | 'void' | 'typeof' | '++' | '--' | '+' | '-' | '~' | '!' ) unaryExpression );
    // $ANTLR start "unaryExpression"
    unaryExpression: function() {
        var retval = new JavaScriptParser.unaryExpression_return();
        retval.start = this.input.LT(1);
        var unaryExpression_StartIndex = this.input.index();
        var root_0 = null;

        var set408 = null;
         var postfixExpression407 = null;
         var unaryExpression409 = null;

        var set408_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 74) ) { return retval; }
            // ./grammars/JavaScript.g:342:2: ( postfixExpression | ( 'delete' | 'void' | 'typeof' | '++' | '--' | '+' | '-' | '~' | '!' ) unaryExpression )
            var alt208=2;
            var LA208_0 = this.input.LA(1);

            if ( ((LA208_0>=Identifier && LA208_0<=NumericLiteral)||(LA208_0>=31 && LA208_0<=32)||LA208_0==35||(LA208_0>=58 && LA208_0<=59)||(LA208_0>=103 && LA208_0<=106)) ) {
                alt208=1;
            }
            else if ( ((LA208_0>=91 && LA208_0<=92)||(LA208_0>=96 && LA208_0<=102)) ) {
                alt208=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 208, 0, this.input);

                throw nvae;
            }
            switch (alt208) {
                case 1 :
                    // ./grammars/JavaScript.g:342:4: postfixExpression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_postfixExpression_in_unaryExpression2268);
                    postfixExpression407=this.postfixExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, postfixExpression407.getTree());


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:343:4: ( 'delete' | 'void' | 'typeof' | '++' | '--' | '+' | '-' | '~' | '!' ) unaryExpression
                    root_0 = this.adaptor.nil();

                    set408=this.input.LT(1);
                    if ( (this.input.LA(1)>=91 && this.input.LA(1)<=92)||(this.input.LA(1)>=96 && this.input.LA(1)<=102) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set408));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(JavaScriptParser.FOLLOW_unaryExpression_in_unaryExpression2309);
                    unaryExpression409=this.unaryExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unaryExpression409.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 74, unaryExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    postfixExpression_return: (function() {
        JavaScriptParser.postfixExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.postfixExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:346:1: postfixExpression : leftHandSideExpression ( '++' | '--' )? ;
    // $ANTLR start "postfixExpression"
    postfixExpression: function() {
        var retval = new JavaScriptParser.postfixExpression_return();
        retval.start = this.input.LT(1);
        var postfixExpression_StartIndex = this.input.index();
        var root_0 = null;

        var set411 = null;
         var leftHandSideExpression410 = null;

        var set411_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 75) ) { return retval; }
            // ./grammars/JavaScript.g:347:2: ( leftHandSideExpression ( '++' | '--' )? )
            // ./grammars/JavaScript.g:347:4: leftHandSideExpression ( '++' | '--' )?
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_leftHandSideExpression_in_postfixExpression2321);
            leftHandSideExpression410=this.leftHandSideExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, leftHandSideExpression410.getTree());
            // ./grammars/JavaScript.g:347:27: ( '++' | '--' )?
            var alt209=2;
            var LA209_0 = this.input.LA(1);

            if ( ((LA209_0>=99 && LA209_0<=100)) ) {
                alt209=1;
            }
            switch (alt209) {
                case 1 :
                    // ./grammars/JavaScript.g:
                    set411=this.input.LT(1);
                    if ( (this.input.LA(1)>=99 && this.input.LA(1)<=100) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set411));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }



                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 75, postfixExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    primaryExpression_return: (function() {
        JavaScriptParser.primaryExpression_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.primaryExpression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:350:1: primaryExpression : ( 'this' | Identifier | literal | arrayLiteral | objectLiteral | '(' ( LT )* expression ( LT )* ')' );
    // $ANTLR start "primaryExpression"
    primaryExpression: function() {
        var retval = new JavaScriptParser.primaryExpression_return();
        retval.start = this.input.LT(1);
        var primaryExpression_StartIndex = this.input.index();
        var root_0 = null;

        var string_literal412 = null;
        var Identifier413 = null;
        var char_literal417 = null;
        var LT418 = null;
        var LT420 = null;
        var char_literal421 = null;
         var literal414 = null;
         var arrayLiteral415 = null;
         var objectLiteral416 = null;
         var expression419 = null;

        var string_literal412_tree=null;
        var Identifier413_tree=null;
        var char_literal417_tree=null;
        var LT418_tree=null;
        var LT420_tree=null;
        var char_literal421_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 76) ) { return retval; }
            // ./grammars/JavaScript.g:351:2: ( 'this' | Identifier | literal | arrayLiteral | objectLiteral | '(' ( LT )* expression ( LT )* ')' )
            var alt212=6;
            switch ( this.input.LA(1) ) {
            case 103:
                alt212=1;
                break;
            case Identifier:
                alt212=2;
                break;
            case StringLiteral:
            case NumericLiteral:
            case 104:
            case 105:
            case 106:
                alt212=3;
                break;
            case 59:
                alt212=4;
                break;
            case 35:
                alt212=5;
                break;
            case 32:
                alt212=6;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 212, 0, this.input);

                throw nvae;
            }

            switch (alt212) {
                case 1 :
                    // ./grammars/JavaScript.g:351:4: 'this'
                    root_0 = this.adaptor.nil();

                    string_literal412=this.match(this.input,103,JavaScriptParser.FOLLOW_103_in_primaryExpression2341); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    string_literal412_tree = this.adaptor.create(string_literal412);
                    this.adaptor.addChild(root_0, string_literal412_tree);
                    }


                    break;
                case 2 :
                    // ./grammars/JavaScript.g:352:4: Identifier
                    root_0 = this.adaptor.nil();

                    Identifier413=this.match(this.input,Identifier,JavaScriptParser.FOLLOW_Identifier_in_primaryExpression2346); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    Identifier413_tree = this.adaptor.create(Identifier413);
                    this.adaptor.addChild(root_0, Identifier413_tree);
                    }


                    break;
                case 3 :
                    // ./grammars/JavaScript.g:353:4: literal
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_literal_in_primaryExpression2351);
                    literal414=this.literal();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, literal414.getTree());


                    break;
                case 4 :
                    // ./grammars/JavaScript.g:354:4: arrayLiteral
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_arrayLiteral_in_primaryExpression2356);
                    arrayLiteral415=this.arrayLiteral();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, arrayLiteral415.getTree());


                    break;
                case 5 :
                    // ./grammars/JavaScript.g:355:4: objectLiteral
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JavaScriptParser.FOLLOW_objectLiteral_in_primaryExpression2361);
                    objectLiteral416=this.objectLiteral();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, objectLiteral416.getTree());


                    break;
                case 6 :
                    // ./grammars/JavaScript.g:356:4: '(' ( LT )* expression ( LT )* ')'
                    root_0 = this.adaptor.nil();

                    char_literal417=this.match(this.input,32,JavaScriptParser.FOLLOW_32_in_primaryExpression2366); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal417_tree = this.adaptor.create(char_literal417);
                    this.adaptor.addChild(root_0, char_literal417_tree);
                    }
                    // ./grammars/JavaScript.g:356:10: ( LT )*
                    loop210:
                    do {
                        var alt210=2;
                        var LA210_0 = this.input.LA(1);

                        if ( (LA210_0==LT) ) {
                            alt210=1;
                        }


                        switch (alt210) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT418=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_primaryExpression2368); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop210;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_expression_in_primaryExpression2372);
                    expression419=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression419.getTree());
                    // ./grammars/JavaScript.g:356:26: ( LT )*
                    loop211:
                    do {
                        var alt211=2;
                        var LA211_0 = this.input.LA(1);

                        if ( (LA211_0==LT) ) {
                            alt211=1;
                        }


                        switch (alt211) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT420=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_primaryExpression2374); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop211;
                        }
                    } while (true);

                    char_literal421=this.match(this.input,34,JavaScriptParser.FOLLOW_34_in_primaryExpression2378); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal421_tree = this.adaptor.create(char_literal421);
                    this.adaptor.addChild(root_0, char_literal421_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 76, primaryExpression_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    arrayLiteral_return: (function() {
        JavaScriptParser.arrayLiteral_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.arrayLiteral_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:360:1: arrayLiteral : '[' ( LT )* ( assignmentExpression )? ( ( LT )* ',' ( ( LT )* assignmentExpression )? )* ( LT )* ']' ;
    // $ANTLR start "arrayLiteral"
    arrayLiteral: function() {
        var retval = new JavaScriptParser.arrayLiteral_return();
        retval.start = this.input.LT(1);
        var arrayLiteral_StartIndex = this.input.index();
        var root_0 = null;

        var char_literal422 = null;
        var LT423 = null;
        var LT425 = null;
        var char_literal426 = null;
        var LT427 = null;
        var LT429 = null;
        var char_literal430 = null;
         var assignmentExpression424 = null;
         var assignmentExpression428 = null;

        var char_literal422_tree=null;
        var LT423_tree=null;
        var LT425_tree=null;
        var char_literal426_tree=null;
        var LT427_tree=null;
        var LT429_tree=null;
        var char_literal430_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 77) ) { return retval; }
            // ./grammars/JavaScript.g:361:2: ( '[' ( LT )* ( assignmentExpression )? ( ( LT )* ',' ( ( LT )* assignmentExpression )? )* ( LT )* ']' )
            // ./grammars/JavaScript.g:361:4: '[' ( LT )* ( assignmentExpression )? ( ( LT )* ',' ( ( LT )* assignmentExpression )? )* ( LT )* ']'
            root_0 = this.adaptor.nil();

            char_literal422=this.match(this.input,59,JavaScriptParser.FOLLOW_59_in_arrayLiteral2391); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal422_tree = this.adaptor.create(char_literal422);
            this.adaptor.addChild(root_0, char_literal422_tree);
            }
            // ./grammars/JavaScript.g:361:10: ( LT )*
            loop213:
            do {
                var alt213=2;
                var LA213_0 = this.input.LA(1);

                if ( (LA213_0==LT) ) {
                    var LA213_2 = this.input.LA(2);

                    if ( (this.synpred280_JavaScript()) ) {
                        alt213=1;
                    }


                }


                switch (alt213) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT423=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_arrayLiteral2393); if (this.state.failed) return retval;


                    break;

                default :
                    break loop213;
                }
            } while (true);

            // ./grammars/JavaScript.g:361:13: ( assignmentExpression )?
            var alt214=2;
            var LA214_0 = this.input.LA(1);

            if ( ((LA214_0>=Identifier && LA214_0<=NumericLiteral)||(LA214_0>=31 && LA214_0<=32)||LA214_0==35||(LA214_0>=58 && LA214_0<=59)||(LA214_0>=91 && LA214_0<=92)||(LA214_0>=96 && LA214_0<=106)) ) {
                alt214=1;
            }
            switch (alt214) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: assignmentExpression
                    this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpression_in_arrayLiteral2397);
                    assignmentExpression424=this.assignmentExpression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpression424.getTree());


                    break;

            }

            // ./grammars/JavaScript.g:361:35: ( ( LT )* ',' ( ( LT )* assignmentExpression )? )*
            loop218:
            do {
                var alt218=2;
                alt218 = this.dfa218.predict(this.input);
                switch (alt218) {
                case 1 :
                    // ./grammars/JavaScript.g:361:36: ( LT )* ',' ( ( LT )* assignmentExpression )?
                    // ./grammars/JavaScript.g:361:38: ( LT )*
                    loop215:
                    do {
                        var alt215=2;
                        var LA215_0 = this.input.LA(1);

                        if ( (LA215_0==LT) ) {
                            alt215=1;
                        }


                        switch (alt215) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT425=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_arrayLiteral2401); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop215;
                        }
                    } while (true);

                    char_literal426=this.match(this.input,33,JavaScriptParser.FOLLOW_33_in_arrayLiteral2405); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal426_tree = this.adaptor.create(char_literal426);
                    this.adaptor.addChild(root_0, char_literal426_tree);
                    }
                    // ./grammars/JavaScript.g:361:45: ( ( LT )* assignmentExpression )?
                    var alt217=2;
                    alt217 = this.dfa217.predict(this.input);
                    switch (alt217) {
                        case 1 :
                            // ./grammars/JavaScript.g:361:46: ( LT )* assignmentExpression
                            // ./grammars/JavaScript.g:361:48: ( LT )*
                            loop216:
                            do {
                                var alt216=2;
                                var LA216_0 = this.input.LA(1);

                                if ( (LA216_0==LT) ) {
                                    alt216=1;
                                }


                                switch (alt216) {
                                case 1 :
                                    // ./grammars/JavaScript.g:0:0: LT
                                    LT427=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_arrayLiteral2408); if (this.state.failed) return retval;


                                    break;

                                default :
                                    break loop216;
                                }
                            } while (true);

                            this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpression_in_arrayLiteral2412);
                            assignmentExpression428=this.assignmentExpression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpression428.getTree());


                            break;

                    }



                    break;

                default :
                    break loop218;
                }
            } while (true);

            // ./grammars/JavaScript.g:361:78: ( LT )*
            loop219:
            do {
                var alt219=2;
                var LA219_0 = this.input.LA(1);

                if ( (LA219_0==LT) ) {
                    alt219=1;
                }


                switch (alt219) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT429=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_arrayLiteral2418); if (this.state.failed) return retval;


                    break;

                default :
                    break loop219;
                }
            } while (true);

            char_literal430=this.match(this.input,60,JavaScriptParser.FOLLOW_60_in_arrayLiteral2422); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal430_tree = this.adaptor.create(char_literal430);
            this.adaptor.addChild(root_0, char_literal430_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 77, arrayLiteral_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    objectLiteral_return: (function() {
        JavaScriptParser.objectLiteral_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.objectLiteral_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:365:1: objectLiteral : '{' ( LT )* propertyNameAndValue ( ( LT )* ',' ( LT )* propertyNameAndValue )* ( LT )* '}' ;
    // $ANTLR start "objectLiteral"
    objectLiteral: function() {
        var retval = new JavaScriptParser.objectLiteral_return();
        retval.start = this.input.LT(1);
        var objectLiteral_StartIndex = this.input.index();
        var root_0 = null;

        var char_literal431 = null;
        var LT432 = null;
        var LT434 = null;
        var char_literal435 = null;
        var LT436 = null;
        var LT438 = null;
        var char_literal439 = null;
         var propertyNameAndValue433 = null;
         var propertyNameAndValue437 = null;

        var char_literal431_tree=null;
        var LT432_tree=null;
        var LT434_tree=null;
        var char_literal435_tree=null;
        var LT436_tree=null;
        var LT438_tree=null;
        var char_literal439_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 78) ) { return retval; }
            // ./grammars/JavaScript.g:366:2: ( '{' ( LT )* propertyNameAndValue ( ( LT )* ',' ( LT )* propertyNameAndValue )* ( LT )* '}' )
            // ./grammars/JavaScript.g:366:4: '{' ( LT )* propertyNameAndValue ( ( LT )* ',' ( LT )* propertyNameAndValue )* ( LT )* '}'
            root_0 = this.adaptor.nil();

            char_literal431=this.match(this.input,35,JavaScriptParser.FOLLOW_35_in_objectLiteral2441); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal431_tree = this.adaptor.create(char_literal431);
            this.adaptor.addChild(root_0, char_literal431_tree);
            }
            // ./grammars/JavaScript.g:366:10: ( LT )*
            loop220:
            do {
                var alt220=2;
                var LA220_0 = this.input.LA(1);

                if ( (LA220_0==LT) ) {
                    alt220=1;
                }


                switch (alt220) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT432=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_objectLiteral2443); if (this.state.failed) return retval;


                    break;

                default :
                    break loop220;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_propertyNameAndValue_in_objectLiteral2447);
            propertyNameAndValue433=this.propertyNameAndValue();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, propertyNameAndValue433.getTree());
            // ./grammars/JavaScript.g:366:34: ( ( LT )* ',' ( LT )* propertyNameAndValue )*
            loop223:
            do {
                var alt223=2;
                alt223 = this.dfa223.predict(this.input);
                switch (alt223) {
                case 1 :
                    // ./grammars/JavaScript.g:366:35: ( LT )* ',' ( LT )* propertyNameAndValue
                    // ./grammars/JavaScript.g:366:37: ( LT )*
                    loop221:
                    do {
                        var alt221=2;
                        var LA221_0 = this.input.LA(1);

                        if ( (LA221_0==LT) ) {
                            alt221=1;
                        }


                        switch (alt221) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT434=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_objectLiteral2450); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop221;
                        }
                    } while (true);

                    char_literal435=this.match(this.input,33,JavaScriptParser.FOLLOW_33_in_objectLiteral2454); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    char_literal435_tree = this.adaptor.create(char_literal435);
                    this.adaptor.addChild(root_0, char_literal435_tree);
                    }
                    // ./grammars/JavaScript.g:366:46: ( LT )*
                    loop222:
                    do {
                        var alt222=2;
                        var LA222_0 = this.input.LA(1);

                        if ( (LA222_0==LT) ) {
                            alt222=1;
                        }


                        switch (alt222) {
                        case 1 :
                            // ./grammars/JavaScript.g:0:0: LT
                            LT436=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_objectLiteral2456); if (this.state.failed) return retval;


                            break;

                        default :
                            break loop222;
                        }
                    } while (true);

                    this.pushFollow(JavaScriptParser.FOLLOW_propertyNameAndValue_in_objectLiteral2460);
                    propertyNameAndValue437=this.propertyNameAndValue();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, propertyNameAndValue437.getTree());


                    break;

                default :
                    break loop223;
                }
            } while (true);

            // ./grammars/JavaScript.g:366:74: ( LT )*
            loop224:
            do {
                var alt224=2;
                var LA224_0 = this.input.LA(1);

                if ( (LA224_0==LT) ) {
                    alt224=1;
                }


                switch (alt224) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT438=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_objectLiteral2464); if (this.state.failed) return retval;


                    break;

                default :
                    break loop224;
                }
            } while (true);

            char_literal439=this.match(this.input,36,JavaScriptParser.FOLLOW_36_in_objectLiteral2468); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal439_tree = this.adaptor.create(char_literal439);
            this.adaptor.addChild(root_0, char_literal439_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 78, objectLiteral_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    propertyNameAndValue_return: (function() {
        JavaScriptParser.propertyNameAndValue_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.propertyNameAndValue_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:369:1: propertyNameAndValue : propertyName ( LT )* ':' ( LT )* assignmentExpression ;
    // $ANTLR start "propertyNameAndValue"
    propertyNameAndValue: function() {
        var retval = new JavaScriptParser.propertyNameAndValue_return();
        retval.start = this.input.LT(1);
        var propertyNameAndValue_StartIndex = this.input.index();
        var root_0 = null;

        var LT441 = null;
        var char_literal442 = null;
        var LT443 = null;
         var propertyName440 = null;
         var assignmentExpression444 = null;

        var LT441_tree=null;
        var char_literal442_tree=null;
        var LT443_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 79) ) { return retval; }
            // ./grammars/JavaScript.g:370:2: ( propertyName ( LT )* ':' ( LT )* assignmentExpression )
            // ./grammars/JavaScript.g:370:4: propertyName ( LT )* ':' ( LT )* assignmentExpression
            root_0 = this.adaptor.nil();

            this.pushFollow(JavaScriptParser.FOLLOW_propertyName_in_propertyNameAndValue2480);
            propertyName440=this.propertyName();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, propertyName440.getTree());
            // ./grammars/JavaScript.g:370:19: ( LT )*
            loop225:
            do {
                var alt225=2;
                var LA225_0 = this.input.LA(1);

                if ( (LA225_0==LT) ) {
                    alt225=1;
                }


                switch (alt225) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT441=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_propertyNameAndValue2482); if (this.state.failed) return retval;


                    break;

                default :
                    break loop225;
                }
            } while (true);

            char_literal442=this.match(this.input,50,JavaScriptParser.FOLLOW_50_in_propertyNameAndValue2486); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            char_literal442_tree = this.adaptor.create(char_literal442);
            this.adaptor.addChild(root_0, char_literal442_tree);
            }
            // ./grammars/JavaScript.g:370:28: ( LT )*
            loop226:
            do {
                var alt226=2;
                var LA226_0 = this.input.LA(1);

                if ( (LA226_0==LT) ) {
                    alt226=1;
                }


                switch (alt226) {
                case 1 :
                    // ./grammars/JavaScript.g:0:0: LT
                    LT443=this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_propertyNameAndValue2488); if (this.state.failed) return retval;


                    break;

                default :
                    break loop226;
                }
            } while (true);

            this.pushFollow(JavaScriptParser.FOLLOW_assignmentExpression_in_propertyNameAndValue2492);
            assignmentExpression444=this.assignmentExpression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignmentExpression444.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 79, propertyNameAndValue_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    propertyName_return: (function() {
        JavaScriptParser.propertyName_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.propertyName_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:373:1: propertyName : ( Identifier | StringLiteral | NumericLiteral );
    // $ANTLR start "propertyName"
    propertyName: function() {
        var retval = new JavaScriptParser.propertyName_return();
        retval.start = this.input.LT(1);
        var propertyName_StartIndex = this.input.index();
        var root_0 = null;

        var set445 = null;

        var set445_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 80) ) { return retval; }
            // ./grammars/JavaScript.g:374:2: ( Identifier | StringLiteral | NumericLiteral )
            // ./grammars/JavaScript.g:
            root_0 = this.adaptor.nil();

            set445=this.input.LT(1);
            if ( (this.input.LA(1)>=Identifier && this.input.LA(1)<=NumericLiteral) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set445));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 80, propertyName_StartIndex); }
        }
        return retval;
    },

    // inline static return class
    literal_return: (function() {
        JavaScriptParser.literal_return = function(){};
        org.antlr.lang.extend(JavaScriptParser.literal_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JavaScript.g:380:1: literal : ( 'null' | 'true' | 'false' | StringLiteral | NumericLiteral );
    // $ANTLR start "literal"
    literal: function() {
        var retval = new JavaScriptParser.literal_return();
        retval.start = this.input.LT(1);
        var literal_StartIndex = this.input.index();
        var root_0 = null;

        var set446 = null;

        var set446_tree=null;

        try {
            if ( this.state.backtracking>0 && this.alreadyParsedRule(this.input, 81) ) { return retval; }
            // ./grammars/JavaScript.g:381:2: ( 'null' | 'true' | 'false' | StringLiteral | NumericLiteral )
            // ./grammars/JavaScript.g:
            root_0 = this.adaptor.nil();

            set446=this.input.LT(1);
            if ( (this.input.LA(1)>=StringLiteral && this.input.LA(1)<=NumericLiteral)||(this.input.LA(1)>=104 && this.input.LA(1)<=106) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set446));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
            if ( this.state.backtracking>0 ) { this.memoize(this.input, 81, literal_StartIndex); }
        }
        return retval;
    },

    // $ANTLR start "synpred5_JavaScript"
    synpred5_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:29:4: ( functionDeclaration )
        // ./grammars/JavaScript.g:29:4: functionDeclaration
        this.pushFollow(JavaScriptParser.FOLLOW_functionDeclaration_in_synpred5_JavaScript86);
        this.functionDeclaration();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred5_JavaScript",

    // $ANTLR start "synpred9_JavaScript"
    synpred9_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:39:15: ( LT )
        // ./grammars/JavaScript.g:39:15: LT
        this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred9_JavaScript136); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred9_JavaScript",

    // $ANTLR start "synpred21_JavaScript"
    synpred21_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:52:4: ( statementBlock )
        // ./grammars/JavaScript.g:52:4: statementBlock
        this.pushFollow(JavaScriptParser.FOLLOW_statementBlock_in_synpred21_JavaScript230);
        this.statementBlock();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred21_JavaScript",

    // $ANTLR start "synpred24_JavaScript"
    synpred24_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:55:4: ( expressionStatement )
        // ./grammars/JavaScript.g:55:4: expressionStatement
        this.pushFollow(JavaScriptParser.FOLLOW_expressionStatement_in_synpred24_JavaScript245);
        this.expressionStatement();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred24_JavaScript",

    // $ANTLR start "synpred31_JavaScript"
    synpred31_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:62:4: ( labelledStatement )
        // ./grammars/JavaScript.g:62:4: labelledStatement
        this.pushFollow(JavaScriptParser.FOLLOW_labelledStatement_in_synpred31_JavaScript280);
        this.labelledStatement();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred31_JavaScript",

    // $ANTLR start "synpred34_JavaScript"
    synpred34_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:69:8: ( LT )
        // ./grammars/JavaScript.g:69:8: LT
        this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred34_JavaScript309); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred34_JavaScript",

    // $ANTLR start "synpred47_JavaScript"
    synpred47_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:89:15: ( LT )
        // ./grammars/JavaScript.g:89:15: LT
        this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred47_JavaScript436); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred47_JavaScript",

    // $ANTLR start "synpred49_JavaScript"
    synpred49_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:93:15: ( LT )
        // ./grammars/JavaScript.g:93:15: LT
        this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred49_JavaScript455); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred49_JavaScript",

    // $ANTLR start "synpred60_JavaScript"
    synpred60_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:113:59: ( ( LT )* 'else' ( LT )* statement )
        // ./grammars/JavaScript.g:113:59: ( LT )* 'else' ( LT )* statement
        // ./grammars/JavaScript.g:113:61: ( LT )*
        loop239:
        do {
            var alt239=2;
            var LA239_0 = this.input.LA(1);

            if ( (LA239_0==LT) ) {
                alt239=1;
            }


            switch (alt239) {
            case 1 :
                // ./grammars/JavaScript.g:0:0: LT
                this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred60_JavaScript568); if (this.state.failed) return ;


                break;

            default :
                break loop239;
            }
        } while (true);

        this.match(this.input,41,JavaScriptParser.FOLLOW_41_in_synpred60_JavaScript572); if (this.state.failed) return ;
        // ./grammars/JavaScript.g:113:73: ( LT )*
        loop240:
        do {
            var alt240=2;
            var LA240_0 = this.input.LA(1);

            if ( (LA240_0==LT) ) {
                alt240=1;
            }


            switch (alt240) {
            case 1 :
                // ./grammars/JavaScript.g:0:0: LT
                this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred60_JavaScript574); if (this.state.failed) return ;


                break;

            default :
                break loop240;
            }
        } while (true);

        this.pushFollow(JavaScriptParser.FOLLOW_statement_in_synpred60_JavaScript578);
        this.statement();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred60_JavaScript",

    // $ANTLR start "synpred63_JavaScript"
    synpred63_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:119:4: ( forStatement )
        // ./grammars/JavaScript.g:119:4: forStatement
        this.pushFollow(JavaScriptParser.FOLLOW_forStatement_in_synpred63_JavaScript602);
        this.forStatement();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred63_JavaScript",

    // $ANTLR start "synpred118_JavaScript"
    synpred118_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:178:36: ( LT )
        // ./grammars/JavaScript.g:178:36: LT
        this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred118_JavaScript1083); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred118_JavaScript",

    // $ANTLR start "synpred121_JavaScript"
    synpred121_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:182:23: ( LT )
        // ./grammars/JavaScript.g:182:23: LT
        this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred121_JavaScript1108); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred121_JavaScript",

    // $ANTLR start "synpred140_JavaScript"
    synpred140_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:211:4: ( conditionalExpression )
        // ./grammars/JavaScript.g:211:4: conditionalExpression
        this.pushFollow(JavaScriptParser.FOLLOW_conditionalExpression_in_synpred140_JavaScript1300);
        this.conditionalExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred140_JavaScript",

    // $ANTLR start "synpred143_JavaScript"
    synpred143_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:216:4: ( conditionalExpressionNoIn )
        // ./grammars/JavaScript.g:216:4: conditionalExpressionNoIn
        this.pushFollow(JavaScriptParser.FOLLOW_conditionalExpressionNoIn_in_synpred143_JavaScript1329);
        this.conditionalExpressionNoIn();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred143_JavaScript",

    // $ANTLR start "synpred146_JavaScript"
    synpred146_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:221:4: ( callExpression )
        // ./grammars/JavaScript.g:221:4: callExpression
        this.pushFollow(JavaScriptParser.FOLLOW_callExpression_in_synpred146_JavaScript1358);
        this.callExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred146_JavaScript",

    // $ANTLR start "synpred147_JavaScript"
    synpred147_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:226:4: ( memberExpression )
        // ./grammars/JavaScript.g:226:4: memberExpression
        this.pushFollow(JavaScriptParser.FOLLOW_memberExpression_in_synpred147_JavaScript1375);
        this.memberExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred147_JavaScript",

    // $ANTLR start "synpred154_JavaScript"
    synpred154_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:231:91: ( ( LT )* memberExpressionSuffix )
        // ./grammars/JavaScript.g:231:91: ( LT )* memberExpressionSuffix
        // ./grammars/JavaScript.g:231:93: ( LT )*
        loop254:
        do {
            var alt254=2;
            var LA254_0 = this.input.LA(1);

            if ( (LA254_0==LT) ) {
                alt254=1;
            }


            switch (alt254) {
            case 1 :
                // ./grammars/JavaScript.g:0:0: LT
                this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred154_JavaScript1423); if (this.state.failed) return ;


                break;

            default :
                break loop254;
            }
        } while (true);

        this.pushFollow(JavaScriptParser.FOLLOW_memberExpressionSuffix_in_synpred154_JavaScript1427);
        this.memberExpressionSuffix();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred154_JavaScript",

    // $ANTLR start "synpred158_JavaScript"
    synpred158_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:240:37: ( ( LT )* callExpressionSuffix )
        // ./grammars/JavaScript.g:240:37: ( LT )* callExpressionSuffix
        // ./grammars/JavaScript.g:240:39: ( LT )*
        loop255:
        do {
            var alt255=2;
            var LA255_0 = this.input.LA(1);

            if ( (LA255_0==LT) ) {
                alt255=1;
            }


            switch (alt255) {
            case 1 :
                // ./grammars/JavaScript.g:0:0: LT
                this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred158_JavaScript1466); if (this.state.failed) return ;


                break;

            default :
                break loop255;
            }
        } while (true);

        this.pushFollow(JavaScriptParser.FOLLOW_callExpressionSuffix_in_synpred158_JavaScript1470);
        this.callExpressionSuffix();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred158_JavaScript",

    // $ANTLR start "synpred256_JavaScript"
    synpred256_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:334:30: ( ( LT )* ( '+' | '-' ) ( LT )* multiplicativeExpression )
        // ./grammars/JavaScript.g:334:30: ( LT )* ( '+' | '-' ) ( LT )* multiplicativeExpression
        // ./grammars/JavaScript.g:334:32: ( LT )*
        loop300:
        do {
            var alt300=2;
            var LA300_0 = this.input.LA(1);

            if ( (LA300_0==LT) ) {
                alt300=1;
            }


            switch (alt300) {
            case 1 :
                // ./grammars/JavaScript.g:0:0: LT
                this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred256_JavaScript2203); if (this.state.failed) return ;


                break;

            default :
                break loop300;
            }
        } while (true);

        if ( (this.input.LA(1)>=91 && this.input.LA(1)<=92) ) {
            this.input.consume();
            this.state.errorRecovery=false;this.state.failed=false;
        }
        else {
            if (this.state.backtracking>0) {this.state.failed=true; return ;}
            var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
            throw mse;
        }

        // ./grammars/JavaScript.g:334:49: ( LT )*
        loop301:
        do {
            var alt301=2;
            var LA301_0 = this.input.LA(1);

            if ( (LA301_0==LT) ) {
                alt301=1;
            }


            switch (alt301) {
            case 1 :
                // ./grammars/JavaScript.g:0:0: LT
                this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred256_JavaScript2215); if (this.state.failed) return ;


                break;

            default :
                break loop301;
            }
        } while (true);

        this.pushFollow(JavaScriptParser.FOLLOW_multiplicativeExpression_in_synpred256_JavaScript2219);
        this.multiplicativeExpression();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred256_JavaScript",

    // $ANTLR start "synpred280_JavaScript"
    synpred280_JavaScript_fragment: function() {
        // ./grammars/JavaScript.g:361:8: ( LT )
        // ./grammars/JavaScript.g:361:8: LT
        this.match(this.input,LT,JavaScriptParser.FOLLOW_LT_in_synpred280_JavaScript2393); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred280_JavaScript"

    // Delegated rules



    synpred60_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred60_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred121_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred121_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred146_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred146_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred154_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred154_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred34_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred34_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred147_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred147_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred63_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred63_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred47_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred47_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred256_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred256_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred280_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred280_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred118_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred118_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred158_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred158_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred9_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred9_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred21_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred21_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred31_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred31_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred49_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred49_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred24_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred24_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred143_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred143_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred140_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred140_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred5_JavaScript: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred5_JavaScript_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA4_eotS:
        "\u0004\uffff",
    DFA4_eofS:
        "\u0002\u0002\u0002\uffff",
    DFA4_minS:
        "\u0002\u0004\u0002\uffff",
    DFA4_maxS:
        "\u0002\u006a\u0002\uffff",
    DFA4_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA4_specialS:
        "\u0004\uffff}>",
    DFA4_transitionS: [
            "\u0001\u0001\u0003\u0003\u0017\uffff\u0002\u0003\u0002\uffff"+
            "\u0001\u0003\u0001\u0002\u0002\u0003\u0001\uffff\u0001\u0003"+
            "\u0001\uffff\u0003\u0003\u0001\uffff\u0004\u0003\u0001\uffff"+
            "\u0001\u0003\u0002\uffff\u0002\u0003\u0002\uffff\u0002\u0003"+
            "\u001f\uffff\u0002\u0003\u0003\uffff\u000b\u0003",
            "\u0001\u0001\u0003\u0003\u0017\uffff\u0002\u0003\u0002\uffff"+
            "\u0001\u0003\u0001\u0002\u0002\u0003\u0001\uffff\u0001\u0003"+
            "\u0001\uffff\u0003\u0003\u0001\uffff\u0004\u0003\u0001\uffff"+
            "\u0001\u0003\u0002\uffff\u0002\u0003\u0002\uffff\u0002\u0003"+
            "\u001f\uffff\u0002\u0003\u0003\uffff\u000b\u0003",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA4_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA4_eotS),
    DFA4_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA4_eofS),
    DFA4_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA4_minS),
    DFA4_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA4_maxS),
    DFA4_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA4_acceptS),
    DFA4_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA4_specialS),
    DFA4_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA4_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA4_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA4 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 4;
    this.eot = JavaScriptParser.DFA4_eot;
    this.eof = JavaScriptParser.DFA4_eof;
    this.min = JavaScriptParser.DFA4_min;
    this.max = JavaScriptParser.DFA4_max;
    this.accept = JavaScriptParser.DFA4_accept;
    this.special = JavaScriptParser.DFA4_special;
    this.transition = JavaScriptParser.DFA4_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA4, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 25:18: ( ( LT )* sourceElement )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA5_eotS:
        "\u0018\uffff",
    DFA5_eofS:
        "\u0018\uffff",
    DFA5_minS:
        "\u0001\u0005\u0001\u0000\u0016\uffff",
    DFA5_maxS:
        "\u0001\u006a\u0001\u0000\u0016\uffff",
    DFA5_acceptS:
        "\u0002\uffff\u0001\u0002\u0014\uffff\u0001\u0001",
    DFA5_specialS:
        "\u0001\uffff\u0001\u0000\u0016\uffff}>",
    DFA5_transitionS: [
            "\u0003\u0002\u0017\uffff\u0001\u0001\u0001\u0002\u0002\uffff"+
            "\u0001\u0002\u0001\uffff\u0002\u0002\u0001\uffff\u0001\u0002"+
            "\u0001\uffff\u0003\u0002\u0001\uffff\u0004\u0002\u0001\uffff"+
            "\u0001\u0002\u0002\uffff\u0002\u0002\u0002\uffff\u0002\u0002"+
            "\u001f\uffff\u0002\u0002\u0003\uffff\u000b\u0002",
            "\u0001\uffff",
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
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA5_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA5_eotS),
    DFA5_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA5_eofS),
    DFA5_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA5_minS),
    DFA5_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA5_maxS),
    DFA5_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA5_acceptS),
    DFA5_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA5_specialS),
    DFA5_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA5_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA5_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA5 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 5;
    this.eot = JavaScriptParser.DFA5_eot;
    this.eof = JavaScriptParser.DFA5_eof;
    this.min = JavaScriptParser.DFA5_min;
    this.max = JavaScriptParser.DFA5_max;
    this.accept = JavaScriptParser.DFA5_accept;
    this.special = JavaScriptParser.DFA5_special;
    this.transition = JavaScriptParser.DFA5_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA5, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "28:1: sourceElement : ( functionDeclaration | statement );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA5_1 = input.LA(1);

                             
                            var index5_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred5_JavaScript()) ) {s = 23;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index5_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 5, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA17_eotS:
        "\u0004\uffff",
    DFA17_eofS:
        "\u0004\uffff",
    DFA17_minS:
        "\u0002\u0004\u0002\uffff",
    DFA17_maxS:
        "\u0002\u0022\u0002\uffff",
    DFA17_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002",
    DFA17_specialS:
        "\u0004\uffff}>",
    DFA17_transitionS: [
            "\u0001\u0001\u0001\u0002\u001c\uffff\u0001\u0003",
            "\u0001\u0001\u0001\u0002\u001c\uffff\u0001\u0003",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA17_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA17_eotS),
    DFA17_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA17_eofS),
    DFA17_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA17_minS),
    DFA17_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA17_maxS),
    DFA17_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA17_acceptS),
    DFA17_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA17_specialS),
    DFA17_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA17_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA17_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA17 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 17;
    this.eot = JavaScriptParser.DFA17_eot;
    this.eof = JavaScriptParser.DFA17_eof;
    this.min = JavaScriptParser.DFA17_min;
    this.max = JavaScriptParser.DFA17_max;
    this.accept = JavaScriptParser.DFA17_accept;
    this.special = JavaScriptParser.DFA17_special;
    this.transition = JavaScriptParser.DFA17_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA17, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "43:8: ( ( LT )* Identifier ( ( LT )* ',' ( LT )* Identifier )* )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA16_eotS:
        "\u0004\uffff",
    DFA16_eofS:
        "\u0004\uffff",
    DFA16_minS:
        "\u0002\u0004\u0002\uffff",
    DFA16_maxS:
        "\u0002\u0022\u0002\uffff",
    DFA16_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA16_specialS:
        "\u0004\uffff}>",
    DFA16_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0001\u0002",
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0001\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA16_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA16_eotS),
    DFA16_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA16_eofS),
    DFA16_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA16_minS),
    DFA16_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA16_maxS),
    DFA16_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA16_acceptS),
    DFA16_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA16_specialS),
    DFA16_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA16_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA16_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA16 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 16;
    this.eot = JavaScriptParser.DFA16_eot;
    this.eof = JavaScriptParser.DFA16_eof;
    this.min = JavaScriptParser.DFA16_min;
    this.max = JavaScriptParser.DFA16_max;
    this.accept = JavaScriptParser.DFA16_accept;
    this.special = JavaScriptParser.DFA16_special;
    this.transition = JavaScriptParser.DFA16_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA16, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 43:25: ( ( LT )* ',' ( LT )* Identifier )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA21_eotS:
        "\u0019\uffff",
    DFA21_eofS:
        "\u0019\uffff",
    DFA21_minS:
        "\u0001\u0005\u0001\u0000\u0003\uffff\u0001\u0000\u0013\uffff",
    DFA21_maxS:
        "\u0001\u006a\u0001\u0000\u0003\uffff\u0001\u0000\u0013\uffff",
    DFA21_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0003\u0001\u0004\u0007\uffff\u0001"+
    "\u0005\u0001\u0006\u0002\uffff\u0001\u0007\u0001\u0008\u0001\u0009\u0001"+
    "\u000a\u0001\u000c\u0001\u000d\u0001\u000e\u0001\u0001\u0001\u000b",
    DFA21_specialS:
        "\u0001\uffff\u0001\u0000\u0003\uffff\u0001\u0001\u0013\uffff}>",
    DFA21_transitionS: [
            "\u0001\u0005\u0002\u0004\u0017\uffff\u0002\u0004\u0002\uffff"+
            "\u0001\u0001\u0001\uffff\u0001\u0002\u0001\u0003\u0001\uffff"+
            "\u0001\u000c\u0001\uffff\u0003\u000d\u0001\uffff\u0001\u0010"+
            "\u0001\u0011\u0001\u0012\u0001\u0013\u0001\uffff\u0001\u0014"+
            "\u0002\uffff\u0001\u0015\u0001\u0016\u0002\uffff\u0002\u0004"+
            "\u001f\uffff\u0002\u0004\u0003\uffff\u000b\u0004",
            "\u0001\uffff",
            "",
            "",
            "",
            "\u0001\uffff",
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
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA21_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA21_eotS),
    DFA21_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA21_eofS),
    DFA21_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA21_minS),
    DFA21_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA21_maxS),
    DFA21_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA21_acceptS),
    DFA21_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA21_specialS),
    DFA21_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA21_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA21_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA21 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 21;
    this.eot = JavaScriptParser.DFA21_eot;
    this.eof = JavaScriptParser.DFA21_eof;
    this.min = JavaScriptParser.DFA21_min;
    this.max = JavaScriptParser.DFA21_max;
    this.accept = JavaScriptParser.DFA21_accept;
    this.special = JavaScriptParser.DFA21_special;
    this.transition = JavaScriptParser.DFA21_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA21, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "51:1: statement : ( statementBlock | variableStatement | emptyStatement | expressionStatement | ifStatement | iterationStatement | continueStatement | breakStatement | returnStatement | withStatement | labelledStatement | switchStatement | throwStatement | tryStatement );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA21_1 = input.LA(1);

                             
                            var index21_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred21_JavaScript()) ) {s = 23;}

                            else if ( (this.synpred24_JavaScript()) ) {s = 4;}

                             
                            input.seek(index21_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA21_5 = input.LA(1);

                             
                            var index21_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred24_JavaScript()) ) {s = 4;}

                            else if ( (this.synpred31_JavaScript()) ) {s = 24;}

                             
                            input.seek(index21_5);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 21, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA26_eotS:
        "\u0004\uffff",
    DFA26_eofS:
        "\u0001\u0002\u0003\uffff",
    DFA26_minS:
        "\u0002\u0004\u0002\uffff",
    DFA26_maxS:
        "\u0002\u006a\u0002\uffff",
    DFA26_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA26_specialS:
        "\u0004\uffff}>",
    DFA26_transitionS: [
            "\u0001\u0001\u0003\u0003\u0017\uffff\u0002\u0003\u0002\uffff"+
            "\u0001\u0003\u0001\u0002\u0002\u0003\u0001\uffff\u0001\u0003"+
            "\u0001\uffff\u0003\u0003\u0001\uffff\u0004\u0003\u0001\uffff"+
            "\u0001\u0003\u0002\u0002\u0002\u0003\u0002\uffff\u0002\u0003"+
            "\u001f\uffff\u0002\u0003\u0003\uffff\u000b\u0003",
            "\u0001\u0001\u0003\u0003\u0017\uffff\u0002\u0003\u0002\uffff"+
            "\u0001\u0003\u0001\u0002\u0002\u0003\u0001\uffff\u0001\u0003"+
            "\u0001\uffff\u0003\u0003\u0001\uffff\u0004\u0003\u0001\uffff"+
            "\u0001\u0003\u0002\u0002\u0002\u0003\u0002\uffff\u0002\u0003"+
            "\u001f\uffff\u0002\u0003\u0003\uffff\u000b\u0003",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA26_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA26_eotS),
    DFA26_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA26_eofS),
    DFA26_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA26_minS),
    DFA26_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA26_maxS),
    DFA26_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA26_acceptS),
    DFA26_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA26_specialS),
    DFA26_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA26_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA26_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA26 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 26;
    this.eot = JavaScriptParser.DFA26_eot;
    this.eof = JavaScriptParser.DFA26_eof;
    this.min = JavaScriptParser.DFA26_min;
    this.max = JavaScriptParser.DFA26_max;
    this.accept = JavaScriptParser.DFA26_accept;
    this.special = JavaScriptParser.DFA26_special;
    this.transition = JavaScriptParser.DFA26_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA26, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 73:14: ( ( LT )* statement )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA30_eotS:
        "\u0005\uffff",
    DFA30_eofS:
        "\u0001\uffff\u0001\u0002\u0002\uffff\u0001\u0002",
    DFA30_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004",
    DFA30_maxS:
        "\u0001\u0026\u0001\u006a\u0002\uffff\u0001\u006a",
    DFA30_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\uffff",
    DFA30_specialS:
        "\u0005\uffff}>",
    DFA30_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0004\uffff\u0001\u0002",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0002\u0002\u0001\u0003"+
            "\u0001\uffff\u0004\u0002\u0001\uffff\u0005\u0002\u0001\uffff"+
            "\u0004\u0002\u0001\uffff\u0005\u0002\u0002\uffff\u0002\u0002"+
            "\u001f\uffff\u0002\u0002\u0003\uffff\u000b\u0002",
            "",
            "",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0002\u0002\u0001\u0003"+
            "\u0001\uffff\u0004\u0002\u0001\uffff\u0005\u0002\u0001\uffff"+
            "\u0004\u0002\u0001\uffff\u0005\u0002\u0002\uffff\u0002\u0002"+
            "\u001f\uffff\u0002\u0002\u0003\uffff\u000b\u0002"
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA30_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA30_eotS),
    DFA30_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA30_eofS),
    DFA30_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA30_minS),
    DFA30_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA30_maxS),
    DFA30_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA30_acceptS),
    DFA30_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA30_specialS),
    DFA30_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA30_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA30_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA30 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 30;
    this.eot = JavaScriptParser.DFA30_eot;
    this.eof = JavaScriptParser.DFA30_eof;
    this.min = JavaScriptParser.DFA30_min;
    this.max = JavaScriptParser.DFA30_max;
    this.accept = JavaScriptParser.DFA30_accept;
    this.special = JavaScriptParser.DFA30_special;
    this.transition = JavaScriptParser.DFA30_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA30, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 81:24: ( ( LT )* ',' ( LT )* variableDeclaration )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA33_eotS:
        "\u0004\uffff",
    DFA33_eofS:
        "\u0001\u0002\u0003\uffff",
    DFA33_minS:
        "\u0002\u0004\u0002\uffff",
    DFA33_maxS:
        "\u0002\u0026\u0002\uffff",
    DFA33_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA33_specialS:
        "\u0004\uffff}>",
    DFA33_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0004\uffff\u0001\u0002",
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0004\uffff\u0001\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA33_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA33_eotS),
    DFA33_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA33_eofS),
    DFA33_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA33_minS),
    DFA33_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA33_maxS),
    DFA33_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA33_acceptS),
    DFA33_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA33_specialS),
    DFA33_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA33_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA33_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA33 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 33;
    this.eot = JavaScriptParser.DFA33_eot;
    this.eof = JavaScriptParser.DFA33_eof;
    this.min = JavaScriptParser.DFA33_min;
    this.max = JavaScriptParser.DFA33_max;
    this.accept = JavaScriptParser.DFA33_accept;
    this.special = JavaScriptParser.DFA33_special;
    this.transition = JavaScriptParser.DFA33_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA33, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 85:28: ( ( LT )* ',' ( LT )* variableDeclarationNoIn )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA57_eotS:
        "\u0004\uffff",
    DFA57_eofS:
        "\u0004\uffff",
    DFA57_minS:
        "\u0002\u0004\u0002\uffff",
    DFA57_maxS:
        "\u0002\u006a\u0002\uffff",
    DFA57_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002",
    DFA57_specialS:
        "\u0004\uffff}>",
    DFA57_transitionS: [
            "\u0001\u0001\u0003\u0002\u0017\uffff\u0002\u0002\u0002\uffff"+
            "\u0001\u0002\u0001\uffff\u0001\u0002\u0001\u0003\u0013\uffff"+
            "\u0002\u0002\u001f\uffff\u0002\u0002\u0003\uffff\u000b\u0002",
            "\u0001\u0001\u0003\u0002\u0017\uffff\u0002\u0002\u0002\uffff"+
            "\u0001\u0002\u0001\uffff\u0001\u0002\u0001\u0003\u0013\uffff"+
            "\u0002\u0002\u001f\uffff\u0002\u0002\u0003\uffff\u000b\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA57_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA57_eotS),
    DFA57_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA57_eofS),
    DFA57_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA57_minS),
    DFA57_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA57_maxS),
    DFA57_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA57_acceptS),
    DFA57_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA57_specialS),
    DFA57_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA57_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA57_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA57 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 57;
    this.eot = JavaScriptParser.DFA57_eot;
    this.eof = JavaScriptParser.DFA57_eof;
    this.min = JavaScriptParser.DFA57_min;
    this.max = JavaScriptParser.DFA57_max;
    this.accept = JavaScriptParser.DFA57_accept;
    this.special = JavaScriptParser.DFA57_special;
    this.transition = JavaScriptParser.DFA57_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA57, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "132:19: ( ( LT )* forStatementInitialiserPart )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA60_eotS:
        "\u0004\uffff",
    DFA60_eofS:
        "\u0004\uffff",
    DFA60_minS:
        "\u0002\u0004\u0002\uffff",
    DFA60_maxS:
        "\u0002\u006a\u0002\uffff",
    DFA60_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002",
    DFA60_specialS:
        "\u0004\uffff}>",
    DFA60_transitionS: [
            "\u0001\u0001\u0003\u0002\u0017\uffff\u0002\u0002\u0002\uffff"+
            "\u0001\u0002\u0002\uffff\u0001\u0003\u0013\uffff\u0002\u0002"+
            "\u001f\uffff\u0002\u0002\u0003\uffff\u000b\u0002",
            "\u0001\u0001\u0003\u0002\u0017\uffff\u0002\u0002\u0002\uffff"+
            "\u0001\u0002\u0002\uffff\u0001\u0003\u0013\uffff\u0002\u0002"+
            "\u001f\uffff\u0002\u0002\u0003\uffff\u000b\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA60_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA60_eotS),
    DFA60_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA60_eofS),
    DFA60_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA60_minS),
    DFA60_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA60_maxS),
    DFA60_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA60_acceptS),
    DFA60_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA60_specialS),
    DFA60_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA60_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA60_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA60 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 60;
    this.eot = JavaScriptParser.DFA60_eot;
    this.eof = JavaScriptParser.DFA60_eof;
    this.min = JavaScriptParser.DFA60_min;
    this.max = JavaScriptParser.DFA60_max;
    this.accept = JavaScriptParser.DFA60_accept;
    this.special = JavaScriptParser.DFA60_special;
    this.transition = JavaScriptParser.DFA60_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA60, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "132:64: ( ( LT )* expression )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA63_eotS:
        "\u0004\uffff",
    DFA63_eofS:
        "\u0004\uffff",
    DFA63_minS:
        "\u0002\u0004\u0002\uffff",
    DFA63_maxS:
        "\u0002\u006a\u0002\uffff",
    DFA63_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002",
    DFA63_specialS:
        "\u0004\uffff}>",
    DFA63_transitionS: [
            "\u0001\u0001\u0003\u0002\u0017\uffff\u0002\u0002\u0001\uffff"+
            "\u0001\u0003\u0001\u0002\u0016\uffff\u0002\u0002\u001f\uffff"+
            "\u0002\u0002\u0003\uffff\u000b\u0002",
            "\u0001\u0001\u0003\u0002\u0017\uffff\u0002\u0002\u0001\uffff"+
            "\u0001\u0003\u0001\u0002\u0016\uffff\u0002\u0002\u001f\uffff"+
            "\u0002\u0002\u0003\uffff\u000b\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA63_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA63_eotS),
    DFA63_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA63_eofS),
    DFA63_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA63_minS),
    DFA63_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA63_maxS),
    DFA63_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA63_acceptS),
    DFA63_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA63_specialS),
    DFA63_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA63_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA63_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA63 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 63;
    this.eot = JavaScriptParser.DFA63_eot;
    this.eof = JavaScriptParser.DFA63_eof;
    this.min = JavaScriptParser.DFA63_min;
    this.max = JavaScriptParser.DFA63_max;
    this.accept = JavaScriptParser.DFA63_accept;
    this.special = JavaScriptParser.DFA63_special;
    this.transition = JavaScriptParser.DFA63_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA63, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "132:92: ( ( LT )* expression )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA90_eotS:
        "\u0004\uffff",
    DFA90_eofS:
        "\u0004\uffff",
    DFA90_minS:
        "\u0002\u0004\u0002\uffff",
    DFA90_maxS:
        "\u0002\u0035\u0002\uffff",
    DFA90_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA90_specialS:
        "\u0004\uffff}>",
    DFA90_transitionS: [
            "\u0001\u0001\u001f\uffff\u0001\u0002\u000f\uffff\u0001\u0003"+
            "\u0001\u0002",
            "\u0001\u0001\u001f\uffff\u0001\u0002\u000f\uffff\u0001\u0003"+
            "\u0001\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA90_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA90_eotS),
    DFA90_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA90_eofS),
    DFA90_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA90_minS),
    DFA90_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA90_maxS),
    DFA90_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA90_acceptS),
    DFA90_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA90_specialS),
    DFA90_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA90_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA90_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA90 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 90;
    this.eot = JavaScriptParser.DFA90_eot;
    this.eof = JavaScriptParser.DFA90_eof;
    this.min = JavaScriptParser.DFA90_min;
    this.max = JavaScriptParser.DFA90_max;
    this.accept = JavaScriptParser.DFA90_accept;
    this.special = JavaScriptParser.DFA90_special;
    this.transition = JavaScriptParser.DFA90_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA90, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 174:8: ( ( LT )* caseClause )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA94_eotS:
        "\u0004\uffff",
    DFA94_eofS:
        "\u0004\uffff",
    DFA94_minS:
        "\u0002\u0004\u0002\uffff",
    DFA94_maxS:
        "\u0002\u0035\u0002\uffff",
    DFA94_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002",
    DFA94_specialS:
        "\u0004\uffff}>",
    DFA94_transitionS: [
            "\u0001\u0001\u001f\uffff\u0001\u0003\u0010\uffff\u0001\u0002",
            "\u0001\u0001\u001f\uffff\u0001\u0003\u0010\uffff\u0001\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA94_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA94_eotS),
    DFA94_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA94_eofS),
    DFA94_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA94_minS),
    DFA94_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA94_maxS),
    DFA94_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA94_acceptS),
    DFA94_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA94_specialS),
    DFA94_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA94_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA94_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA94 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 94;
    this.eot = JavaScriptParser.DFA94_eot;
    this.eof = JavaScriptParser.DFA94_eof;
    this.min = JavaScriptParser.DFA94_min;
    this.max = JavaScriptParser.DFA94_max;
    this.accept = JavaScriptParser.DFA94_accept;
    this.special = JavaScriptParser.DFA94_special;
    this.transition = JavaScriptParser.DFA94_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA94, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "174:27: ( ( LT )* defaultClause ( ( LT )* caseClause )* )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA93_eotS:
        "\u0004\uffff",
    DFA93_eofS:
        "\u0004\uffff",
    DFA93_minS:
        "\u0002\u0004\u0002\uffff",
    DFA93_maxS:
        "\u0002\u0034\u0002\uffff",
    DFA93_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA93_specialS:
        "\u0004\uffff}>",
    DFA93_transitionS: [
            "\u0001\u0001\u001f\uffff\u0001\u0002\u000f\uffff\u0001\u0003",
            "\u0001\u0001\u001f\uffff\u0001\u0002\u000f\uffff\u0001\u0003",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA93_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA93_eotS),
    DFA93_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA93_eofS),
    DFA93_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA93_minS),
    DFA93_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA93_maxS),
    DFA93_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA93_acceptS),
    DFA93_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA93_specialS),
    DFA93_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA93_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA93_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA93 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 93;
    this.eot = JavaScriptParser.DFA93_eot;
    this.eof = JavaScriptParser.DFA93_eof;
    this.min = JavaScriptParser.DFA93_min;
    this.max = JavaScriptParser.DFA93_max;
    this.accept = JavaScriptParser.DFA93_accept;
    this.special = JavaScriptParser.DFA93_special;
    this.transition = JavaScriptParser.DFA93_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA93, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 174:47: ( ( LT )* caseClause )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA106_eotS:
        "\u0004\uffff",
    DFA106_eofS:
        "\u0002\u0003\u0002\uffff",
    DFA106_minS:
        "\u0002\u0004\u0002\uffff",
    DFA106_maxS:
        "\u0002\u006a\u0002\uffff",
    DFA106_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002",
    DFA106_specialS:
        "\u0004\uffff}>",
    DFA106_transitionS: [
            "\u0001\u0001\u0003\u0003\u0017\uffff\u0002\u0003\u0002\uffff"+
            "\u0004\u0003\u0001\uffff\u0005\u0003\u0001\uffff\u0004\u0003"+
            "\u0001\uffff\u0005\u0003\u0001\uffff\u0001\u0002\u0002\u0003"+
            "\u001f\uffff\u0002\u0003\u0003\uffff\u000b\u0003",
            "\u0001\u0001\u0003\u0003\u0017\uffff\u0002\u0003\u0002\uffff"+
            "\u0004\u0003\u0001\uffff\u0005\u0003\u0001\uffff\u0004\u0003"+
            "\u0001\uffff\u0005\u0003\u0001\uffff\u0001\u0002\u0002\u0003"+
            "\u001f\uffff\u0002\u0003\u0003\uffff\u000b\u0003",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA106_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA106_eotS),
    DFA106_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA106_eofS),
    DFA106_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA106_minS),
    DFA106_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA106_maxS),
    DFA106_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA106_acceptS),
    DFA106_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA106_specialS),
    DFA106_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA106_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA106_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA106 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 106;
    this.eot = JavaScriptParser.DFA106_eot;
    this.eof = JavaScriptParser.DFA106_eof;
    this.min = JavaScriptParser.DFA106_min;
    this.max = JavaScriptParser.DFA106_max;
    this.accept = JavaScriptParser.DFA106_accept;
    this.special = JavaScriptParser.DFA106_special;
    this.transition = JavaScriptParser.DFA106_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA106, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "190:64: ( ( LT )* finallyClause )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA115_eotS:
        "\u0005\uffff",
    DFA115_eofS:
        "\u0002\u0002\u0002\uffff\u0001\u0002",
    DFA115_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004",
    DFA115_maxS:
        "\u0001\u003c\u0001\u006a\u0002\uffff\u0001\u006a",
    DFA115_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\uffff",
    DFA115_specialS:
        "\u0005\uffff}>",
    DFA115_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0001\u0002\u0003\uffff"+
            "\u0001\u0002\u000b\uffff\u0001\u0002\u0009\uffff\u0001\u0002",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0002\u0002\u0001\u0003"+
            "\u0005\u0002\u0001\uffff\u0005\u0002\u0001\uffff\u000a\u0002"+
            "\u0002\uffff\u0003\u0002\u001e\uffff\u0002\u0002\u0003\uffff"+
            "\u000b\u0002",
            "",
            "",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0002\u0002\u0001\u0003"+
            "\u0005\u0002\u0001\uffff\u0005\u0002\u0001\uffff\u000a\u0002"+
            "\u0002\uffff\u0003\u0002\u001e\uffff\u0002\u0002\u0003\uffff"+
            "\u000b\u0002"
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA115_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA115_eotS),
    DFA115_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA115_eofS),
    DFA115_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA115_minS),
    DFA115_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA115_maxS),
    DFA115_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA115_acceptS),
    DFA115_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA115_specialS),
    DFA115_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA115_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA115_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA115 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 115;
    this.eot = JavaScriptParser.DFA115_eot;
    this.eof = JavaScriptParser.DFA115_eof;
    this.min = JavaScriptParser.DFA115_min;
    this.max = JavaScriptParser.DFA115_max;
    this.accept = JavaScriptParser.DFA115_accept;
    this.special = JavaScriptParser.DFA115_special;
    this.transition = JavaScriptParser.DFA115_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA115, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 203:25: ( ( LT )* ',' ( LT )* assignmentExpression )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA118_eotS:
        "\u0004\uffff",
    DFA118_eofS:
        "\u0001\u0002\u0003\uffff",
    DFA118_minS:
        "\u0002\u0004\u0002\uffff",
    DFA118_maxS:
        "\u0002\u0026\u0002\uffff",
    DFA118_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA118_specialS:
        "\u0004\uffff}>",
    DFA118_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0004\uffff\u0001\u0002",
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0004\uffff\u0001\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA118_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA118_eotS),
    DFA118_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA118_eofS),
    DFA118_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA118_minS),
    DFA118_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA118_maxS),
    DFA118_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA118_acceptS),
    DFA118_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA118_specialS),
    DFA118_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA118_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA118_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA118 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 118;
    this.eot = JavaScriptParser.DFA118_eot;
    this.eof = JavaScriptParser.DFA118_eof;
    this.min = JavaScriptParser.DFA118_min;
    this.max = JavaScriptParser.DFA118_max;
    this.accept = JavaScriptParser.DFA118_accept;
    this.special = JavaScriptParser.DFA118_special;
    this.transition = JavaScriptParser.DFA118_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA118, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 207:29: ( ( LT )* ',' ( LT )* assignmentExpressionNoIn )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA121_eotS:
        "\u000b\uffff",
    DFA121_eofS:
        "\u000b\uffff",
    DFA121_minS:
        "\u0001\u0005\u0008\u0000\u0002\uffff",
    DFA121_maxS:
        "\u0001\u006a\u0008\u0000\u0002\uffff",
    DFA121_acceptS:
        "\u0009\uffff\u0001\u0001\u0001\u0002",
    DFA121_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0002\uffff}>",
    DFA121_transitionS: [
            "\u0001\u0002\u0002\u0003\u0017\uffff\u0001\u0007\u0001\u0006"+
            "\u0002\uffff\u0001\u0005\u0016\uffff\u0001\u0008\u0001\u0004"+
            "\u001f\uffff\u0002\u0009\u0003\uffff\u0007\u0009\u0001\u0001"+
            "\u0003\u0003",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA121_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA121_eotS),
    DFA121_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA121_eofS),
    DFA121_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA121_minS),
    DFA121_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA121_maxS),
    DFA121_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA121_acceptS),
    DFA121_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA121_specialS),
    DFA121_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA121_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA121_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA121 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 121;
    this.eot = JavaScriptParser.DFA121_eot;
    this.eof = JavaScriptParser.DFA121_eof;
    this.min = JavaScriptParser.DFA121_min;
    this.max = JavaScriptParser.DFA121_max;
    this.accept = JavaScriptParser.DFA121_accept;
    this.special = JavaScriptParser.DFA121_special;
    this.transition = JavaScriptParser.DFA121_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA121, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "210:1: assignmentExpression : ( conditionalExpression | leftHandSideExpression ( LT )* assignmentOperator ( LT )* assignmentExpression );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA121_1 = input.LA(1);

                             
                            var index121_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred140_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index121_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA121_2 = input.LA(1);

                             
                            var index121_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred140_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index121_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA121_3 = input.LA(1);

                             
                            var index121_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred140_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index121_3);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA121_4 = input.LA(1);

                             
                            var index121_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred140_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index121_4);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA121_5 = input.LA(1);

                             
                            var index121_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred140_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index121_5);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA121_6 = input.LA(1);

                             
                            var index121_6 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred140_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index121_6);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA121_7 = input.LA(1);

                             
                            var index121_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred140_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index121_7);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA121_8 = input.LA(1);

                             
                            var index121_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred140_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index121_8);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 121, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA124_eotS:
        "\u000b\uffff",
    DFA124_eofS:
        "\u000b\uffff",
    DFA124_minS:
        "\u0001\u0005\u0008\u0000\u0002\uffff",
    DFA124_maxS:
        "\u0001\u006a\u0008\u0000\u0002\uffff",
    DFA124_acceptS:
        "\u0009\uffff\u0001\u0001\u0001\u0002",
    DFA124_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0002\uffff}>",
    DFA124_transitionS: [
            "\u0001\u0002\u0002\u0003\u0017\uffff\u0001\u0007\u0001\u0006"+
            "\u0002\uffff\u0001\u0005\u0016\uffff\u0001\u0008\u0001\u0004"+
            "\u001f\uffff\u0002\u0009\u0003\uffff\u0007\u0009\u0001\u0001"+
            "\u0003\u0003",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA124_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA124_eotS),
    DFA124_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA124_eofS),
    DFA124_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA124_minS),
    DFA124_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA124_maxS),
    DFA124_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA124_acceptS),
    DFA124_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA124_specialS),
    DFA124_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA124_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA124_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA124 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 124;
    this.eot = JavaScriptParser.DFA124_eot;
    this.eof = JavaScriptParser.DFA124_eof;
    this.min = JavaScriptParser.DFA124_min;
    this.max = JavaScriptParser.DFA124_max;
    this.accept = JavaScriptParser.DFA124_accept;
    this.special = JavaScriptParser.DFA124_special;
    this.transition = JavaScriptParser.DFA124_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA124, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "215:1: assignmentExpressionNoIn : ( conditionalExpressionNoIn | leftHandSideExpression ( LT )* assignmentOperator ( LT )* assignmentExpressionNoIn );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA124_1 = input.LA(1);

                             
                            var index124_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred143_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index124_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA124_2 = input.LA(1);

                             
                            var index124_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred143_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index124_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA124_3 = input.LA(1);

                             
                            var index124_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred143_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index124_3);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA124_4 = input.LA(1);

                             
                            var index124_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred143_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index124_4);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA124_5 = input.LA(1);

                             
                            var index124_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred143_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index124_5);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA124_6 = input.LA(1);

                             
                            var index124_6 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred143_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index124_6);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA124_7 = input.LA(1);

                             
                            var index124_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred143_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index124_7);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA124_8 = input.LA(1);

                             
                            var index124_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred143_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index124_8);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 124, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA125_eotS:
        "\u000b\uffff",
    DFA125_eofS:
        "\u000b\uffff",
    DFA125_minS:
        "\u0001\u0005\u0008\u0000\u0002\uffff",
    DFA125_maxS:
        "\u0001\u006a\u0008\u0000\u0002\uffff",
    DFA125_acceptS:
        "\u0009\uffff\u0001\u0001\u0001\u0002",
    DFA125_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0002\uffff}>",
    DFA125_transitionS: [
            "\u0001\u0002\u0002\u0003\u0017\uffff\u0001\u0007\u0001\u0006"+
            "\u0002\uffff\u0001\u0005\u0016\uffff\u0001\u0008\u0001\u0004"+
            "\u002b\uffff\u0001\u0001\u0003\u0003",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA125_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA125_eotS),
    DFA125_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA125_eofS),
    DFA125_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA125_minS),
    DFA125_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA125_maxS),
    DFA125_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA125_acceptS),
    DFA125_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA125_specialS),
    DFA125_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA125_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA125_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA125 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 125;
    this.eot = JavaScriptParser.DFA125_eot;
    this.eof = JavaScriptParser.DFA125_eof;
    this.min = JavaScriptParser.DFA125_min;
    this.max = JavaScriptParser.DFA125_max;
    this.accept = JavaScriptParser.DFA125_accept;
    this.special = JavaScriptParser.DFA125_special;
    this.transition = JavaScriptParser.DFA125_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA125, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "220:1: leftHandSideExpression : ( callExpression | newExpression );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA125_1 = input.LA(1);

                             
                            var index125_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred146_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index125_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA125_2 = input.LA(1);

                             
                            var index125_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred146_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index125_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA125_3 = input.LA(1);

                             
                            var index125_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred146_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index125_3);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA125_4 = input.LA(1);

                             
                            var index125_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred146_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index125_4);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA125_5 = input.LA(1);

                             
                            var index125_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred146_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index125_5);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA125_6 = input.LA(1);

                             
                            var index125_6 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred146_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index125_6);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA125_7 = input.LA(1);

                             
                            var index125_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred146_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index125_7);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA125_8 = input.LA(1);

                             
                            var index125_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred146_JavaScript()) ) {s = 9;}

                            else if ( (true) ) {s = 10;}

                             
                            input.seek(index125_8);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 125, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA127_eotS:
        "\u000a\uffff",
    DFA127_eofS:
        "\u000a\uffff",
    DFA127_minS:
        "\u0001\u0005\u0007\uffff\u0001\u0000\u0001\uffff",
    DFA127_maxS:
        "\u0001\u006a\u0007\uffff\u0001\u0000\u0001\uffff",
    DFA127_acceptS:
        "\u0001\uffff\u0001\u0001\u0007\uffff\u0001\u0002",
    DFA127_specialS:
        "\u0008\uffff\u0001\u0000\u0001\uffff}>",
    DFA127_transitionS: [
            "\u0003\u0001\u0017\uffff\u0002\u0001\u0002\uffff\u0001\u0001"+
            "\u0016\uffff\u0001\u0008\u0001\u0001\u002b\uffff\u0004\u0001",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\uffff",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA127_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA127_eotS),
    DFA127_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA127_eofS),
    DFA127_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA127_minS),
    DFA127_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA127_maxS),
    DFA127_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA127_acceptS),
    DFA127_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA127_specialS),
    DFA127_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA127_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA127_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA127 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 127;
    this.eot = JavaScriptParser.DFA127_eot;
    this.eof = JavaScriptParser.DFA127_eof;
    this.min = JavaScriptParser.DFA127_min;
    this.max = JavaScriptParser.DFA127_max;
    this.accept = JavaScriptParser.DFA127_accept;
    this.special = JavaScriptParser.DFA127_special;
    this.transition = JavaScriptParser.DFA127_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA127, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "225:1: newExpression : ( memberExpression | 'new' ( LT )* newExpression );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA127_8 = input.LA(1);

                             
                            var index127_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred147_JavaScript()) ) {s = 1;}

                            else if ( (true) ) {s = 9;}

                             
                            input.seek(index127_8);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 127, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA132_eotS:
        "\u001a\uffff",
    DFA132_eofS:
        "\u0001\u0002\u0019\uffff",
    DFA132_minS:
        "\u0001\u0004\u0001\u0000\u0018\uffff",
    DFA132_maxS:
        "\u0001\u0064\u0001\u0000\u0018\uffff",
    DFA132_acceptS:
        "\u0002\uffff\u0001\u0002\u0015\uffff\u0001\u0001\u0001\uffff",
    DFA132_specialS:
        "\u0001\uffff\u0001\u0000\u0018\uffff}>",
    DFA132_transitionS: [
            "\u0001\u0001\u001b\uffff\u0003\u0002\u0001\uffff\u0001\u0002"+
            "\u0001\uffff\u0002\u0002\u0005\uffff\u0001\u0002\u0004\uffff"+
            "\u0001\u0002\u0008\uffff\u0001\u0018\u0001\u0002\u0001\u0018"+
            "\u0022\u0002\u0003\uffff\u0002\u0002",
            "\u0001\uffff",
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
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA132_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA132_eotS),
    DFA132_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA132_eofS),
    DFA132_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA132_minS),
    DFA132_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA132_maxS),
    DFA132_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA132_acceptS),
    DFA132_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA132_specialS),
    DFA132_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA132_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA132_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA132 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 132;
    this.eot = JavaScriptParser.DFA132_eot;
    this.eof = JavaScriptParser.DFA132_eof;
    this.min = JavaScriptParser.DFA132_min;
    this.max = JavaScriptParser.DFA132_max;
    this.accept = JavaScriptParser.DFA132_accept;
    this.special = JavaScriptParser.DFA132_special;
    this.transition = JavaScriptParser.DFA132_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA132, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 231:90: ( ( LT )* memberExpressionSuffix )*";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA132_1 = input.LA(1);

                             
                            var index132_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred154_JavaScript()) ) {s = 24;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index132_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 132, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA136_eotS:
        "\u001a\uffff",
    DFA136_eofS:
        "\u0001\u0002\u0019\uffff",
    DFA136_minS:
        "\u0001\u0004\u0001\u0000\u0018\uffff",
    DFA136_maxS:
        "\u0001\u0064\u0001\u0000\u0018\uffff",
    DFA136_acceptS:
        "\u0002\uffff\u0001\u0002\u0014\uffff\u0001\u0001\u0002\uffff",
    DFA136_specialS:
        "\u0001\uffff\u0001\u0000\u0018\uffff}>",
    DFA136_transitionS: [
            "\u0001\u0001\u001b\uffff\u0001\u0017\u0002\u0002\u0001\uffff"+
            "\u0001\u0002\u0001\uffff\u0002\u0002\u0005\uffff\u0001\u0002"+
            "\u0004\uffff\u0001\u0002\u0008\uffff\u0001\u0017\u0001\u0002"+
            "\u0001\u0017\u0022\u0002\u0003\uffff\u0002\u0002",
            "\u0001\uffff",
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
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA136_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA136_eotS),
    DFA136_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA136_eofS),
    DFA136_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA136_minS),
    DFA136_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA136_maxS),
    DFA136_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA136_acceptS),
    DFA136_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA136_specialS),
    DFA136_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA136_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA136_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA136 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 136;
    this.eot = JavaScriptParser.DFA136_eot;
    this.eof = JavaScriptParser.DFA136_eof;
    this.min = JavaScriptParser.DFA136_min;
    this.max = JavaScriptParser.DFA136_max;
    this.accept = JavaScriptParser.DFA136_accept;
    this.special = JavaScriptParser.DFA136_special;
    this.transition = JavaScriptParser.DFA136_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA136, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 240:36: ( ( LT )* callExpressionSuffix )*";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA136_1 = input.LA(1);

                             
                            var index136_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred158_JavaScript()) ) {s = 23;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index136_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 136, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA142_eotS:
        "\u0004\uffff",
    DFA142_eofS:
        "\u0004\uffff",
    DFA142_minS:
        "\u0002\u0004\u0002\uffff",
    DFA142_maxS:
        "\u0002\u006a\u0002\uffff",
    DFA142_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002",
    DFA142_specialS:
        "\u0004\uffff}>",
    DFA142_transitionS: [
            "\u0001\u0001\u0003\u0002\u0017\uffff\u0002\u0002\u0001\uffff"+
            "\u0001\u0003\u0001\u0002\u0016\uffff\u0002\u0002\u001f\uffff"+
            "\u0002\u0002\u0003\uffff\u000b\u0002",
            "\u0001\u0001\u0003\u0002\u0017\uffff\u0002\u0002\u0001\uffff"+
            "\u0001\u0003\u0001\u0002\u0016\uffff\u0002\u0002\u001f\uffff"+
            "\u0002\u0002\u0003\uffff\u000b\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA142_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA142_eotS),
    DFA142_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA142_eofS),
    DFA142_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA142_minS),
    DFA142_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA142_maxS),
    DFA142_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA142_acceptS),
    DFA142_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA142_specialS),
    DFA142_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA142_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA142_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA142 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 142;
    this.eot = JavaScriptParser.DFA142_eot;
    this.eof = JavaScriptParser.DFA142_eof;
    this.min = JavaScriptParser.DFA142_min;
    this.max = JavaScriptParser.DFA142_max;
    this.accept = JavaScriptParser.DFA142_accept;
    this.special = JavaScriptParser.DFA142_special;
    this.transition = JavaScriptParser.DFA142_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA142, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "250:8: ( ( LT )* assignmentExpression ( ( LT )* ',' ( LT )* assignmentExpression )* )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA141_eotS:
        "\u0004\uffff",
    DFA141_eofS:
        "\u0004\uffff",
    DFA141_minS:
        "\u0002\u0004\u0002\uffff",
    DFA141_maxS:
        "\u0002\u0022\u0002\uffff",
    DFA141_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA141_specialS:
        "\u0004\uffff}>",
    DFA141_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0001\u0002",
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0001\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA141_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA141_eotS),
    DFA141_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA141_eofS),
    DFA141_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA141_minS),
    DFA141_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA141_maxS),
    DFA141_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA141_acceptS),
    DFA141_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA141_specialS),
    DFA141_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA141_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA141_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA141 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 141;
    this.eot = JavaScriptParser.DFA141_eot;
    this.eof = JavaScriptParser.DFA141_eof;
    this.min = JavaScriptParser.DFA141_min;
    this.max = JavaScriptParser.DFA141_max;
    this.accept = JavaScriptParser.DFA141_accept;
    this.special = JavaScriptParser.DFA141_special;
    this.transition = JavaScriptParser.DFA141_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA141, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 250:35: ( ( LT )* ',' ( LT )* assignmentExpression )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA151_eotS:
        "\u0005\uffff",
    DFA151_eofS:
        "\u0002\u0003\u0002\uffff\u0001\u0003",
    DFA151_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004",
    DFA151_maxS:
        "\u0001\u0049\u0001\u006a\u0002\uffff\u0001\u006a",
    DFA151_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002\u0001\uffff",
    DFA151_specialS:
        "\u0005\uffff}>",
    DFA151_transitionS: [
            "\u0001\u0001\u001c\uffff\u0002\u0003\u0001\uffff\u0001\u0003"+
            "\u0001\uffff\u0001\u0003\u000b\uffff\u0001\u0003\u0009\uffff"+
            "\u0001\u0003\u000c\uffff\u0001\u0002",
            "\u0001\u0004\u0003\u0003\u0017\uffff\u0008\u0003\u0001\uffff"+
            "\u0005\u0003\u0001\uffff\u000a\u0003\u0002\uffff\u0003\u0003"+
            "\u000c\uffff\u0001\u0002\u0011\uffff\u0002\u0003\u0003\uffff"+
            "\u000b\u0003",
            "",
            "",
            "\u0001\u0004\u0003\u0003\u0017\uffff\u0008\u0003\u0001\uffff"+
            "\u0005\u0003\u0001\uffff\u000a\u0003\u0002\uffff\u0003\u0003"+
            "\u000c\uffff\u0001\u0002\u0011\uffff\u0002\u0003\u0003\uffff"+
            "\u000b\u0003"
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA151_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA151_eotS),
    DFA151_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA151_eofS),
    DFA151_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA151_minS),
    DFA151_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA151_maxS),
    DFA151_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA151_acceptS),
    DFA151_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA151_specialS),
    DFA151_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA151_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA151_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA151 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 151;
    this.eot = JavaScriptParser.DFA151_eot;
    this.eof = JavaScriptParser.DFA151_eof;
    this.min = JavaScriptParser.DFA151_min;
    this.max = JavaScriptParser.DFA151_max;
    this.accept = JavaScriptParser.DFA151_accept;
    this.special = JavaScriptParser.DFA151_special;
    this.transition = JavaScriptParser.DFA151_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA151, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "266:24: ( ( LT )* '?' ( LT )* assignmentExpression ( LT )* ':' ( LT )* assignmentExpression )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA156_eotS:
        "\u0004\uffff",
    DFA156_eofS:
        "\u0001\u0003\u0003\uffff",
    DFA156_minS:
        "\u0002\u0004\u0002\uffff",
    DFA156_maxS:
        "\u0002\u0049\u0002\uffff",
    DFA156_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002",
    DFA156_specialS:
        "\u0004\uffff}>",
    DFA156_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0004\uffff\u0001\u0003"+
            "\u0006\uffff\u0001\u0003\u0004\uffff\u0001\u0003\u0016\uffff"+
            "\u0001\u0002",
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0004\uffff\u0001\u0003"+
            "\u0006\uffff\u0001\u0003\u0004\uffff\u0001\u0003\u0016\uffff"+
            "\u0001\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA156_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA156_eotS),
    DFA156_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA156_eofS),
    DFA156_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA156_minS),
    DFA156_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA156_maxS),
    DFA156_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA156_acceptS),
    DFA156_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA156_specialS),
    DFA156_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA156_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA156_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA156 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 156;
    this.eot = JavaScriptParser.DFA156_eot;
    this.eof = JavaScriptParser.DFA156_eof;
    this.min = JavaScriptParser.DFA156_min;
    this.max = JavaScriptParser.DFA156_max;
    this.accept = JavaScriptParser.DFA156_accept;
    this.special = JavaScriptParser.DFA156_special;
    this.transition = JavaScriptParser.DFA156_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA156, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "270:28: ( ( LT )* '?' ( LT )* assignmentExpressionNoIn ( LT )* ':' ( LT )* assignmentExpressionNoIn )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA159_eotS:
        "\u0005\uffff",
    DFA159_eofS:
        "\u0002\u0002\u0002\uffff\u0001\u0002",
    DFA159_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004",
    DFA159_maxS:
        "\u0001\u004a\u0001\u006a\u0002\uffff\u0001\u006a",
    DFA159_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\uffff",
    DFA159_specialS:
        "\u0005\uffff}>",
    DFA159_transitionS: [
            "\u0001\u0001\u001c\uffff\u0002\u0002\u0001\uffff\u0001\u0002"+
            "\u0001\uffff\u0001\u0002\u000b\uffff\u0001\u0002\u0009\uffff"+
            "\u0001\u0002\u000c\uffff\u0001\u0002\u0001\u0003",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\uffff\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u0001\u0002\u0001\u0003\u0010\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002",
            "",
            "",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\uffff\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u0001\u0002\u0001\u0003\u0010\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002"
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA159_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA159_eotS),
    DFA159_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA159_eofS),
    DFA159_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA159_minS),
    DFA159_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA159_maxS),
    DFA159_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA159_acceptS),
    DFA159_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA159_specialS),
    DFA159_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA159_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA159_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA159 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 159;
    this.eot = JavaScriptParser.DFA159_eot;
    this.eof = JavaScriptParser.DFA159_eof;
    this.min = JavaScriptParser.DFA159_min;
    this.max = JavaScriptParser.DFA159_max;
    this.accept = JavaScriptParser.DFA159_accept;
    this.special = JavaScriptParser.DFA159_special;
    this.transition = JavaScriptParser.DFA159_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA159, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 274:25: ( ( LT )* '||' ( LT )* logicalANDExpression )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA162_eotS:
        "\u0004\uffff",
    DFA162_eofS:
        "\u0001\u0002\u0003\uffff",
    DFA162_minS:
        "\u0002\u0004\u0002\uffff",
    DFA162_maxS:
        "\u0002\u004a\u0002\uffff",
    DFA162_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA162_specialS:
        "\u0004\uffff}>",
    DFA162_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u0001\u0002\u0001\u0003",
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u0001\u0002\u0001\u0003",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA162_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA162_eotS),
    DFA162_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA162_eofS),
    DFA162_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA162_minS),
    DFA162_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA162_maxS),
    DFA162_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA162_acceptS),
    DFA162_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA162_specialS),
    DFA162_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA162_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA162_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA162 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 162;
    this.eot = JavaScriptParser.DFA162_eot;
    this.eof = JavaScriptParser.DFA162_eof;
    this.min = JavaScriptParser.DFA162_min;
    this.max = JavaScriptParser.DFA162_max;
    this.accept = JavaScriptParser.DFA162_accept;
    this.special = JavaScriptParser.DFA162_special;
    this.transition = JavaScriptParser.DFA162_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA162, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 278:29: ( ( LT )* '||' ( LT )* logicalANDExpressionNoIn )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA165_eotS:
        "\u0005\uffff",
    DFA165_eofS:
        "\u0002\u0002\u0002\uffff\u0001\u0002",
    DFA165_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004",
    DFA165_maxS:
        "\u0001\u004b\u0001\u006a\u0002\uffff\u0001\u006a",
    DFA165_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\uffff",
    DFA165_specialS:
        "\u0005\uffff}>",
    DFA165_transitionS: [
            "\u0001\u0001\u001c\uffff\u0002\u0002\u0001\uffff\u0001\u0002"+
            "\u0001\uffff\u0001\u0002\u000b\uffff\u0001\u0002\u0009\uffff"+
            "\u0001\u0002\u000c\uffff\u0002\u0002\u0001\u0003",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\uffff\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u0002\u0002\u0001\u0003\u000f\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002",
            "",
            "",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\uffff\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u0002\u0002\u0001\u0003\u000f\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002"
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA165_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA165_eotS),
    DFA165_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA165_eofS),
    DFA165_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA165_minS),
    DFA165_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA165_maxS),
    DFA165_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA165_acceptS),
    DFA165_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA165_specialS),
    DFA165_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA165_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA165_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA165 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 165;
    this.eot = JavaScriptParser.DFA165_eot;
    this.eof = JavaScriptParser.DFA165_eof;
    this.min = JavaScriptParser.DFA165_min;
    this.max = JavaScriptParser.DFA165_max;
    this.accept = JavaScriptParser.DFA165_accept;
    this.special = JavaScriptParser.DFA165_special;
    this.transition = JavaScriptParser.DFA165_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA165, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 282:24: ( ( LT )* '&&' ( LT )* bitwiseORExpression )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA168_eotS:
        "\u0004\uffff",
    DFA168_eofS:
        "\u0001\u0002\u0003\uffff",
    DFA168_minS:
        "\u0002\u0004\u0002\uffff",
    DFA168_maxS:
        "\u0002\u004b\u0002\uffff",
    DFA168_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA168_specialS:
        "\u0004\uffff}>",
    DFA168_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u0002\u0002\u0001\u0003",
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u0002\u0002\u0001\u0003",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA168_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA168_eotS),
    DFA168_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA168_eofS),
    DFA168_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA168_minS),
    DFA168_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA168_maxS),
    DFA168_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA168_acceptS),
    DFA168_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA168_specialS),
    DFA168_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA168_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA168_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA168 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 168;
    this.eot = JavaScriptParser.DFA168_eot;
    this.eof = JavaScriptParser.DFA168_eof;
    this.min = JavaScriptParser.DFA168_min;
    this.max = JavaScriptParser.DFA168_max;
    this.accept = JavaScriptParser.DFA168_accept;
    this.special = JavaScriptParser.DFA168_special;
    this.transition = JavaScriptParser.DFA168_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA168, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 286:28: ( ( LT )* '&&' ( LT )* bitwiseORExpressionNoIn )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA171_eotS:
        "\u0005\uffff",
    DFA171_eofS:
        "\u0002\u0002\u0002\uffff\u0001\u0002",
    DFA171_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004",
    DFA171_maxS:
        "\u0001\u004c\u0001\u006a\u0002\uffff\u0001\u006a",
    DFA171_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\uffff",
    DFA171_specialS:
        "\u0005\uffff}>",
    DFA171_transitionS: [
            "\u0001\u0001\u001c\uffff\u0002\u0002\u0001\uffff\u0001\u0002"+
            "\u0001\uffff\u0001\u0002\u000b\uffff\u0001\u0002\u0009\uffff"+
            "\u0001\u0002\u000c\uffff\u0003\u0002\u0001\u0003",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\uffff\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u0003\u0002\u0001\u0003\u000e\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002",
            "",
            "",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\uffff\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u0003\u0002\u0001\u0003\u000e\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002"
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA171_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA171_eotS),
    DFA171_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA171_eofS),
    DFA171_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA171_minS),
    DFA171_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA171_maxS),
    DFA171_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA171_acceptS),
    DFA171_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA171_specialS),
    DFA171_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA171_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA171_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA171 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 171;
    this.eot = JavaScriptParser.DFA171_eot;
    this.eof = JavaScriptParser.DFA171_eof;
    this.min = JavaScriptParser.DFA171_min;
    this.max = JavaScriptParser.DFA171_max;
    this.accept = JavaScriptParser.DFA171_accept;
    this.special = JavaScriptParser.DFA171_special;
    this.transition = JavaScriptParser.DFA171_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA171, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 290:25: ( ( LT )* '|' ( LT )* bitwiseXORExpression )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA174_eotS:
        "\u0004\uffff",
    DFA174_eofS:
        "\u0001\u0002\u0003\uffff",
    DFA174_minS:
        "\u0002\u0004\u0002\uffff",
    DFA174_maxS:
        "\u0002\u004c\u0002\uffff",
    DFA174_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA174_specialS:
        "\u0004\uffff}>",
    DFA174_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u0003\u0002\u0001\u0003",
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u0003\u0002\u0001\u0003",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA174_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA174_eotS),
    DFA174_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA174_eofS),
    DFA174_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA174_minS),
    DFA174_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA174_maxS),
    DFA174_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA174_acceptS),
    DFA174_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA174_specialS),
    DFA174_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA174_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA174_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA174 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 174;
    this.eot = JavaScriptParser.DFA174_eot;
    this.eof = JavaScriptParser.DFA174_eof;
    this.min = JavaScriptParser.DFA174_min;
    this.max = JavaScriptParser.DFA174_max;
    this.accept = JavaScriptParser.DFA174_accept;
    this.special = JavaScriptParser.DFA174_special;
    this.transition = JavaScriptParser.DFA174_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA174, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 294:29: ( ( LT )* '|' ( LT )* bitwiseXORExpressionNoIn )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA177_eotS:
        "\u0005\uffff",
    DFA177_eofS:
        "\u0002\u0002\u0002\uffff\u0001\u0002",
    DFA177_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004",
    DFA177_maxS:
        "\u0001\u004d\u0001\u006a\u0002\uffff\u0001\u006a",
    DFA177_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\uffff",
    DFA177_specialS:
        "\u0005\uffff}>",
    DFA177_transitionS: [
            "\u0001\u0001\u001c\uffff\u0002\u0002\u0001\uffff\u0001\u0002"+
            "\u0001\uffff\u0001\u0002\u000b\uffff\u0001\u0002\u0009\uffff"+
            "\u0001\u0002\u000c\uffff\u0004\u0002\u0001\u0003",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\uffff\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u0004\u0002\u0001\u0003\u000d\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002",
            "",
            "",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\uffff\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u0004\u0002\u0001\u0003\u000d\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002"
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA177_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA177_eotS),
    DFA177_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA177_eofS),
    DFA177_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA177_minS),
    DFA177_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA177_maxS),
    DFA177_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA177_acceptS),
    DFA177_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA177_specialS),
    DFA177_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA177_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA177_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA177 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 177;
    this.eot = JavaScriptParser.DFA177_eot;
    this.eof = JavaScriptParser.DFA177_eof;
    this.min = JavaScriptParser.DFA177_min;
    this.max = JavaScriptParser.DFA177_max;
    this.accept = JavaScriptParser.DFA177_accept;
    this.special = JavaScriptParser.DFA177_special;
    this.transition = JavaScriptParser.DFA177_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA177, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 298:25: ( ( LT )* '^' ( LT )* bitwiseANDExpression )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA180_eotS:
        "\u0004\uffff",
    DFA180_eofS:
        "\u0001\u0002\u0003\uffff",
    DFA180_minS:
        "\u0002\u0004\u0002\uffff",
    DFA180_maxS:
        "\u0002\u004d\u0002\uffff",
    DFA180_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA180_specialS:
        "\u0004\uffff}>",
    DFA180_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u0004\u0002\u0001\u0003",
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u0004\u0002\u0001\u0003",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA180_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA180_eotS),
    DFA180_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA180_eofS),
    DFA180_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA180_minS),
    DFA180_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA180_maxS),
    DFA180_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA180_acceptS),
    DFA180_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA180_specialS),
    DFA180_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA180_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA180_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA180 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 180;
    this.eot = JavaScriptParser.DFA180_eot;
    this.eof = JavaScriptParser.DFA180_eof;
    this.min = JavaScriptParser.DFA180_min;
    this.max = JavaScriptParser.DFA180_max;
    this.accept = JavaScriptParser.DFA180_accept;
    this.special = JavaScriptParser.DFA180_special;
    this.transition = JavaScriptParser.DFA180_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA180, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 302:29: ( ( LT )* '^' ( LT )* bitwiseANDExpressionNoIn )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA183_eotS:
        "\u0005\uffff",
    DFA183_eofS:
        "\u0002\u0002\u0002\uffff\u0001\u0002",
    DFA183_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004",
    DFA183_maxS:
        "\u0001\u004e\u0001\u006a\u0002\uffff\u0001\u006a",
    DFA183_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\uffff",
    DFA183_specialS:
        "\u0005\uffff}>",
    DFA183_transitionS: [
            "\u0001\u0001\u001c\uffff\u0002\u0002\u0001\uffff\u0001\u0002"+
            "\u0001\uffff\u0001\u0002\u000b\uffff\u0001\u0002\u0009\uffff"+
            "\u0001\u0002\u000c\uffff\u0005\u0002\u0001\u0003",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\uffff\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u0005\u0002\u0001\u0003\u000c\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002",
            "",
            "",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\uffff\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u0005\u0002\u0001\u0003\u000c\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002"
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA183_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA183_eotS),
    DFA183_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA183_eofS),
    DFA183_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA183_minS),
    DFA183_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA183_maxS),
    DFA183_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA183_acceptS),
    DFA183_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA183_specialS),
    DFA183_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA183_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA183_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA183 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 183;
    this.eot = JavaScriptParser.DFA183_eot;
    this.eof = JavaScriptParser.DFA183_eof;
    this.min = JavaScriptParser.DFA183_min;
    this.max = JavaScriptParser.DFA183_max;
    this.accept = JavaScriptParser.DFA183_accept;
    this.special = JavaScriptParser.DFA183_special;
    this.transition = JavaScriptParser.DFA183_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA183, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 306:23: ( ( LT )* '&' ( LT )* equalityExpression )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA186_eotS:
        "\u0004\uffff",
    DFA186_eofS:
        "\u0001\u0002\u0003\uffff",
    DFA186_minS:
        "\u0002\u0004\u0002\uffff",
    DFA186_maxS:
        "\u0002\u004e\u0002\uffff",
    DFA186_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA186_specialS:
        "\u0004\uffff}>",
    DFA186_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u0005\u0002\u0001\u0003",
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u0005\u0002\u0001\u0003",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA186_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA186_eotS),
    DFA186_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA186_eofS),
    DFA186_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA186_minS),
    DFA186_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA186_maxS),
    DFA186_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA186_acceptS),
    DFA186_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA186_specialS),
    DFA186_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA186_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA186_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA186 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 186;
    this.eot = JavaScriptParser.DFA186_eot;
    this.eof = JavaScriptParser.DFA186_eof;
    this.min = JavaScriptParser.DFA186_min;
    this.max = JavaScriptParser.DFA186_max;
    this.accept = JavaScriptParser.DFA186_accept;
    this.special = JavaScriptParser.DFA186_special;
    this.transition = JavaScriptParser.DFA186_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA186, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 310:27: ( ( LT )* '&' ( LT )* equalityExpressionNoIn )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA189_eotS:
        "\u0005\uffff",
    DFA189_eofS:
        "\u0002\u0002\u0002\uffff\u0001\u0002",
    DFA189_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004",
    DFA189_maxS:
        "\u0001\u0052\u0001\u006a\u0002\uffff\u0001\u006a",
    DFA189_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\uffff",
    DFA189_specialS:
        "\u0005\uffff}>",
    DFA189_transitionS: [
            "\u0001\u0001\u001c\uffff\u0002\u0002\u0001\uffff\u0001\u0002"+
            "\u0001\uffff\u0001\u0002\u000b\uffff\u0001\u0002\u0009\uffff"+
            "\u0001\u0002\u000c\uffff\u0006\u0002\u0004\u0003",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\uffff\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u0006\u0002\u0004\u0003\u0008\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002",
            "",
            "",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\uffff\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u0006\u0002\u0004\u0003\u0008\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002"
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA189_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA189_eotS),
    DFA189_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA189_eofS),
    DFA189_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA189_minS),
    DFA189_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA189_maxS),
    DFA189_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA189_acceptS),
    DFA189_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA189_specialS),
    DFA189_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA189_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA189_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA189 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 189;
    this.eot = JavaScriptParser.DFA189_eot;
    this.eof = JavaScriptParser.DFA189_eof;
    this.min = JavaScriptParser.DFA189_min;
    this.max = JavaScriptParser.DFA189_max;
    this.accept = JavaScriptParser.DFA189_accept;
    this.special = JavaScriptParser.DFA189_special;
    this.transition = JavaScriptParser.DFA189_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA189, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 314:25: ( ( LT )* ( '==' | '!=' | '===' | '!==' ) ( LT )* relationalExpression )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA192_eotS:
        "\u0004\uffff",
    DFA192_eofS:
        "\u0001\u0002\u0003\uffff",
    DFA192_minS:
        "\u0002\u0004\u0002\uffff",
    DFA192_maxS:
        "\u0002\u0052\u0002\uffff",
    DFA192_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA192_specialS:
        "\u0004\uffff}>",
    DFA192_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u0006\u0002\u0004\u0003",
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u0006\u0002\u0004\u0003",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA192_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA192_eotS),
    DFA192_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA192_eofS),
    DFA192_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA192_minS),
    DFA192_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA192_maxS),
    DFA192_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA192_acceptS),
    DFA192_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA192_specialS),
    DFA192_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA192_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA192_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA192 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 192;
    this.eot = JavaScriptParser.DFA192_eot;
    this.eof = JavaScriptParser.DFA192_eof;
    this.min = JavaScriptParser.DFA192_min;
    this.max = JavaScriptParser.DFA192_max;
    this.accept = JavaScriptParser.DFA192_accept;
    this.special = JavaScriptParser.DFA192_special;
    this.transition = JavaScriptParser.DFA192_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA192, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 318:29: ( ( LT )* ( '==' | '!=' | '===' | '!==' ) ( LT )* relationalExpressionNoIn )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA195_eotS:
        "\u0005\uffff",
    DFA195_eofS:
        "\u0002\u0002\u0002\uffff\u0001\u0002",
    DFA195_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004",
    DFA195_maxS:
        "\u0001\u0057\u0001\u006a\u0002\uffff\u0001\u006a",
    DFA195_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\uffff",
    DFA195_specialS:
        "\u0005\uffff}>",
    DFA195_transitionS: [
            "\u0001\u0001\u001c\uffff\u0002\u0002\u0001\uffff\u0001\u0002"+
            "\u0001\uffff\u0001\u0002\u0006\uffff\u0001\u0003\u0004\uffff"+
            "\u0001\u0002\u0009\uffff\u0001\u0002\u000c\uffff\u000a\u0002"+
            "\u0005\u0003",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\u0003\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u000a\u0002\u0005\u0003\u0003\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002",
            "",
            "",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0005\u0002\u0001\u0003\u000a\u0002\u0002\uffff\u0003\u0002"+
            "\u000c\uffff\u000a\u0002\u0005\u0003\u0003\uffff\u0002\u0002"+
            "\u0003\uffff\u000b\u0002"
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA195_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA195_eotS),
    DFA195_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA195_eofS),
    DFA195_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA195_minS),
    DFA195_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA195_maxS),
    DFA195_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA195_acceptS),
    DFA195_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA195_specialS),
    DFA195_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA195_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA195_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA195 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 195;
    this.eot = JavaScriptParser.DFA195_eot;
    this.eof = JavaScriptParser.DFA195_eof;
    this.min = JavaScriptParser.DFA195_min;
    this.max = JavaScriptParser.DFA195_max;
    this.accept = JavaScriptParser.DFA195_accept;
    this.special = JavaScriptParser.DFA195_special;
    this.transition = JavaScriptParser.DFA195_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA195, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 322:20: ( ( LT )* ( '<' | '>' | '<=' | '>=' | 'instanceof' | 'in' ) ( LT )* shiftExpression )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA198_eotS:
        "\u0004\uffff",
    DFA198_eofS:
        "\u0001\u0002\u0003\uffff",
    DFA198_minS:
        "\u0002\u0004\u0002\uffff",
    DFA198_maxS:
        "\u0002\u0057\u0002\uffff",
    DFA198_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA198_specialS:
        "\u0004\uffff}>",
    DFA198_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u000a\u0002\u0005\u0003",
            "\u0001\u0001\u001c\uffff\u0001\u0002\u0004\uffff\u0001\u0002"+
            "\u0006\uffff\u0001\u0002\u0004\uffff\u0001\u0002\u0016\uffff"+
            "\u000a\u0002\u0005\u0003",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA198_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA198_eotS),
    DFA198_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA198_eofS),
    DFA198_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA198_minS),
    DFA198_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA198_maxS),
    DFA198_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA198_acceptS),
    DFA198_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA198_specialS),
    DFA198_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA198_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA198_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA198 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 198;
    this.eot = JavaScriptParser.DFA198_eot;
    this.eof = JavaScriptParser.DFA198_eof;
    this.min = JavaScriptParser.DFA198_min;
    this.max = JavaScriptParser.DFA198_max;
    this.accept = JavaScriptParser.DFA198_accept;
    this.special = JavaScriptParser.DFA198_special;
    this.transition = JavaScriptParser.DFA198_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA198, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 326:20: ( ( LT )* ( '<' | '>' | '<=' | '>=' | 'instanceof' ) ( LT )* shiftExpression )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA201_eotS:
        "\u0005\uffff",
    DFA201_eofS:
        "\u0002\u0002\u0002\uffff\u0001\u0002",
    DFA201_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004",
    DFA201_maxS:
        "\u0001\u005a\u0001\u006a\u0002\uffff\u0001\u006a",
    DFA201_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\uffff",
    DFA201_specialS:
        "\u0005\uffff}>",
    DFA201_transitionS: [
            "\u0001\u0001\u001c\uffff\u0002\u0002\u0001\uffff\u0001\u0002"+
            "\u0001\uffff\u0001\u0002\u0006\uffff\u0001\u0002\u0004\uffff"+
            "\u0001\u0002\u0009\uffff\u0001\u0002\u000c\uffff\u000f\u0002"+
            "\u0003\u0003",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0010\u0002\u0002\uffff\u0003\u0002\u000c\uffff\u000f\u0002"+
            "\u0003\u0003\u0002\u0002\u0003\uffff\u000b\u0002",
            "",
            "",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0010\u0002\u0002\uffff\u0003\u0002\u000c\uffff\u000f\u0002"+
            "\u0003\u0003\u0002\u0002\u0003\uffff\u000b\u0002"
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA201_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA201_eotS),
    DFA201_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA201_eofS),
    DFA201_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA201_minS),
    DFA201_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA201_maxS),
    DFA201_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA201_acceptS),
    DFA201_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA201_specialS),
    DFA201_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA201_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA201_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA201 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 201;
    this.eot = JavaScriptParser.DFA201_eot;
    this.eof = JavaScriptParser.DFA201_eof;
    this.min = JavaScriptParser.DFA201_min;
    this.max = JavaScriptParser.DFA201_max;
    this.accept = JavaScriptParser.DFA201_accept;
    this.special = JavaScriptParser.DFA201_special;
    this.transition = JavaScriptParser.DFA201_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA201, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 330:23: ( ( LT )* ( '<<' | '>>' | '>>>' ) ( LT )* additiveExpression )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA204_eotS:
        "\u0014\uffff",
    DFA204_eofS:
        "\u0001\u0002\u0013\uffff",
    DFA204_minS:
        "\u0001\u0004\u0001\u0000\u0012\uffff",
    DFA204_maxS:
        "\u0001\u005c\u0001\u0000\u0012\uffff",
    DFA204_acceptS:
        "\u0002\uffff\u0001\u0002\u0010\uffff\u0001\u0001",
    DFA204_specialS:
        "\u0001\uffff\u0001\u0000\u0012\uffff}>",
    DFA204_transitionS: [
            "\u0001\u0001\u001c\uffff\u0002\u0002\u0001\uffff\u0001\u0002"+
            "\u0001\uffff\u0001\u0002\u0006\uffff\u0001\u0002\u0004\uffff"+
            "\u0001\u0002\u0009\uffff\u0001\u0002\u000c\uffff\u0012\u0002"+
            "\u0002\u0013",
            "\u0001\uffff",
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
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA204_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA204_eotS),
    DFA204_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA204_eofS),
    DFA204_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA204_minS),
    DFA204_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA204_maxS),
    DFA204_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA204_acceptS),
    DFA204_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA204_specialS),
    DFA204_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA204_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA204_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA204 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 204;
    this.eot = JavaScriptParser.DFA204_eot;
    this.eof = JavaScriptParser.DFA204_eof;
    this.min = JavaScriptParser.DFA204_min;
    this.max = JavaScriptParser.DFA204_max;
    this.accept = JavaScriptParser.DFA204_accept;
    this.special = JavaScriptParser.DFA204_special;
    this.transition = JavaScriptParser.DFA204_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA204, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 334:29: ( ( LT )* ( '+' | '-' ) ( LT )* multiplicativeExpression )*";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA204_1 = input.LA(1);

                             
                            var index204_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred256_JavaScript()) ) {s = 19;}

                            else if ( (true) ) {s = 2;}

                             
                            input.seek(index204_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 204, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA207_eotS:
        "\u0005\uffff",
    DFA207_eofS:
        "\u0002\u0002\u0002\uffff\u0001\u0002",
    DFA207_minS:
        "\u0002\u0004\u0002\uffff\u0001\u0004",
    DFA207_maxS:
        "\u0001\u005f\u0001\u006a\u0002\uffff\u0001\u006a",
    DFA207_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\uffff",
    DFA207_specialS:
        "\u0005\uffff}>",
    DFA207_transitionS: [
            "\u0001\u0001\u001c\uffff\u0002\u0002\u0001\uffff\u0001\u0002"+
            "\u0001\uffff\u0001\u0002\u0006\uffff\u0001\u0002\u0004\uffff"+
            "\u0001\u0002\u0009\uffff\u0001\u0002\u000c\uffff\u0014\u0002"+
            "\u0003\u0003",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0010\u0002\u0002\uffff\u0003\u0002\u000c\uffff\u0014\u0002"+
            "\u0003\u0003\u000b\u0002",
            "",
            "",
            "\u0001\u0004\u0003\u0002\u0017\uffff\u0008\u0002\u0001\uffff"+
            "\u0010\u0002\u0002\uffff\u0003\u0002\u000c\uffff\u0014\u0002"+
            "\u0003\u0003\u000b\u0002"
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA207_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA207_eotS),
    DFA207_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA207_eofS),
    DFA207_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA207_minS),
    DFA207_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA207_maxS),
    DFA207_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA207_acceptS),
    DFA207_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA207_specialS),
    DFA207_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA207_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA207_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA207 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 207;
    this.eot = JavaScriptParser.DFA207_eot;
    this.eof = JavaScriptParser.DFA207_eof;
    this.min = JavaScriptParser.DFA207_min;
    this.max = JavaScriptParser.DFA207_max;
    this.accept = JavaScriptParser.DFA207_accept;
    this.special = JavaScriptParser.DFA207_special;
    this.transition = JavaScriptParser.DFA207_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA207, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 338:20: ( ( LT )* ( '*' | '/' | '%' ) ( LT )* unaryExpression )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA218_eotS:
        "\u0004\uffff",
    DFA218_eofS:
        "\u0004\uffff",
    DFA218_minS:
        "\u0002\u0004\u0002\uffff",
    DFA218_maxS:
        "\u0002\u003c\u0002\uffff",
    DFA218_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA218_specialS:
        "\u0004\uffff}>",
    DFA218_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0003\u001a\uffff\u0001\u0002",
            "\u0001\u0001\u001c\uffff\u0001\u0003\u001a\uffff\u0001\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA218_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA218_eotS),
    DFA218_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA218_eofS),
    DFA218_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA218_minS),
    DFA218_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA218_maxS),
    DFA218_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA218_acceptS),
    DFA218_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA218_specialS),
    DFA218_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA218_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA218_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA218 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 218;
    this.eot = JavaScriptParser.DFA218_eot;
    this.eof = JavaScriptParser.DFA218_eof;
    this.min = JavaScriptParser.DFA218_min;
    this.max = JavaScriptParser.DFA218_max;
    this.accept = JavaScriptParser.DFA218_accept;
    this.special = JavaScriptParser.DFA218_special;
    this.transition = JavaScriptParser.DFA218_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA218, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 361:35: ( ( LT )* ',' ( ( LT )* assignmentExpression )? )*";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA217_eotS:
        "\u0004\uffff",
    DFA217_eofS:
        "\u0004\uffff",
    DFA217_minS:
        "\u0002\u0004\u0002\uffff",
    DFA217_maxS:
        "\u0002\u006a\u0002\uffff",
    DFA217_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002",
    DFA217_specialS:
        "\u0004\uffff}>",
    DFA217_transitionS: [
            "\u0001\u0001\u0003\u0002\u0017\uffff\u0002\u0002\u0001\u0003"+
            "\u0001\uffff\u0001\u0002\u0016\uffff\u0002\u0002\u0001\u0003"+
            "\u001e\uffff\u0002\u0002\u0003\uffff\u000b\u0002",
            "\u0001\u0001\u0003\u0002\u0017\uffff\u0002\u0002\u0001\u0003"+
            "\u0001\uffff\u0001\u0002\u0016\uffff\u0002\u0002\u0001\u0003"+
            "\u001e\uffff\u0002\u0002\u0003\uffff\u000b\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA217_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA217_eotS),
    DFA217_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA217_eofS),
    DFA217_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA217_minS),
    DFA217_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA217_maxS),
    DFA217_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA217_acceptS),
    DFA217_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA217_specialS),
    DFA217_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA217_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA217_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA217 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 217;
    this.eot = JavaScriptParser.DFA217_eot;
    this.eof = JavaScriptParser.DFA217_eof;
    this.min = JavaScriptParser.DFA217_min;
    this.max = JavaScriptParser.DFA217_max;
    this.accept = JavaScriptParser.DFA217_accept;
    this.special = JavaScriptParser.DFA217_special;
    this.transition = JavaScriptParser.DFA217_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA217, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "361:45: ( ( LT )* assignmentExpression )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA223_eotS:
        "\u0004\uffff",
    DFA223_eofS:
        "\u0004\uffff",
    DFA223_minS:
        "\u0002\u0004\u0002\uffff",
    DFA223_maxS:
        "\u0002\u0024\u0002\uffff",
    DFA223_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001",
    DFA223_specialS:
        "\u0004\uffff}>",
    DFA223_transitionS: [
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0002\uffff\u0001\u0002",
            "\u0001\u0001\u001c\uffff\u0001\u0003\u0002\uffff\u0001\u0002",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(JavaScriptParser, {
    DFA223_eot:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA223_eotS),
    DFA223_eof:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA223_eofS),
    DFA223_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA223_minS),
    DFA223_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(JavaScriptParser.DFA223_maxS),
    DFA223_accept:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA223_acceptS),
    DFA223_special:
        org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA223_specialS),
    DFA223_transition: (function() {
        var a = [],
            i,
            numStates = JavaScriptParser.DFA223_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(JavaScriptParser.DFA223_transitionS[i]));
        }
        return a;
    })()
});

JavaScriptParser.DFA223 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 223;
    this.eot = JavaScriptParser.DFA223_eot;
    this.eof = JavaScriptParser.DFA223_eof;
    this.min = JavaScriptParser.DFA223_min;
    this.max = JavaScriptParser.DFA223_max;
    this.accept = JavaScriptParser.DFA223_accept;
    this.special = JavaScriptParser.DFA223_special;
    this.transition = JavaScriptParser.DFA223_transition;
};

org.antlr.lang.extend(JavaScriptParser.DFA223, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "()* loopback of 366:34: ( ( LT )* ',' ( LT )* propertyNameAndValue )*";
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(JavaScriptParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "LT", "Identifier", "StringLiteral", "NumericLiteral", "DoubleStringCharacter", "SingleStringCharacter", "EscapeSequence", "CharacterEscapeSequence", "HexEscapeSequence", "UnicodeEscapeSequence", "SingleEscapeCharacter", "NonEscapeCharacter", "EscapeCharacter", "DecimalDigit", "HexDigit", "DecimalLiteral", "HexIntegerLiteral", "ExponentPart", "IdentifierStart", "IdentifierPart", "UnicodeLetter", "UnicodeDigit", "UnicodeConnectorPunctuation", "UnicodeCombiningMark", "Comment", "LineComment", "WhiteSpace", "'function'", "'('", "','", "')'", "'{'", "'}'", "'var'", "';'", "'='", "'if'", "'else'", "'do'", "'while'", "'for'", "'in'", "'continue'", "'break'", "'return'", "'with'", "':'", "'switch'", "'case'", "'default'", "'throw'", "'try'", "'catch'", "'finally'", "'new'", "'['", "']'", "'.'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", "'?'", "'||'", "'&&'", "'|'", "'^'", "'&'", "'=='", "'!='", "'==='", "'!=='", "'<'", "'>'", "'<='", "'>='", "'instanceof'", "'<<'", "'>>'", "'>>>'", "'+'", "'-'", "'*'", "'/'", "'%'", "'delete'", "'void'", "'typeof'", "'++'", "'--'", "'~'", "'!'", "'this'", "'null'", "'true'", "'false'"],
    FOLLOW_LT_in_program42: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_sourceElements_in_program46: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_LT_in_program48: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_EOF_in_program52: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_sourceElement_in_sourceElements65: new org.antlr.runtime.BitSet([0x800000F2, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_sourceElements68: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_sourceElement_in_sourceElements72: new org.antlr.runtime.BitSet([0x800000F2, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_functionDeclaration_in_sourceElement86: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_statement_in_sourceElement91: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_31_in_functionDeclaration104: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_LT_in_functionDeclaration106: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_Identifier_in_functionDeclaration110: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_LT_in_functionDeclaration112: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_formalParameterList_in_functionDeclaration116: new org.antlr.runtime.BitSet([0x00000010, 0x00000008]),
    FOLLOW_LT_in_functionDeclaration118: new org.antlr.runtime.BitSet([0x00000010, 0x00000008]),
    FOLLOW_functionBody_in_functionDeclaration122: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_31_in_functionExpression134: new org.antlr.runtime.BitSet([0x00000030, 0x00000001]),
    FOLLOW_LT_in_functionExpression136: new org.antlr.runtime.BitSet([0x00000030, 0x00000001]),
    FOLLOW_Identifier_in_functionExpression140: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_LT_in_functionExpression143: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_formalParameterList_in_functionExpression147: new org.antlr.runtime.BitSet([0x00000010, 0x00000008]),
    FOLLOW_LT_in_functionExpression149: new org.antlr.runtime.BitSet([0x00000010, 0x00000008]),
    FOLLOW_functionBody_in_functionExpression153: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_32_in_formalParameterList165: new org.antlr.runtime.BitSet([0x00000030, 0x00000004]),
    FOLLOW_LT_in_formalParameterList168: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_Identifier_in_formalParameterList172: new org.antlr.runtime.BitSet([0x00000010, 0x00000006]),
    FOLLOW_LT_in_formalParameterList175: new org.antlr.runtime.BitSet([0x00000010, 0x00000002]),
    FOLLOW_33_in_formalParameterList179: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_LT_in_formalParameterList181: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_Identifier_in_formalParameterList185: new org.antlr.runtime.BitSet([0x00000010, 0x00000006]),
    FOLLOW_LT_in_formalParameterList191: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_34_in_formalParameterList195: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_35_in_functionBody206: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_functionBody208: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_sourceElements_in_functionBody212: new org.antlr.runtime.BitSet([0x00000010, 0x00000010]),
    FOLLOW_LT_in_functionBody214: new org.antlr.runtime.BitSet([0x00000010, 0x00000010]),
    FOLLOW_36_in_functionBody218: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_statementBlock_in_statement230: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_variableStatement_in_statement235: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_emptyStatement_in_statement240: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expressionStatement_in_statement245: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ifStatement_in_statement250: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_iterationStatement_in_statement255: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_continueStatement_in_statement260: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_breakStatement_in_statement265: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_returnStatement_in_statement270: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_withStatement_in_statement275: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_labelledStatement_in_statement280: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_switchStatement_in_statement285: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_throwStatement_in_statement290: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_tryStatement_in_statement295: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_35_in_statementBlock307: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD79,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_statementBlock309: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD79,0x18000000, 0x000007FF]),
    FOLLOW_statementList_in_statementBlock313: new org.antlr.runtime.BitSet([0x00000010, 0x00000010]),
    FOLLOW_LT_in_statementBlock316: new org.antlr.runtime.BitSet([0x00000010, 0x00000010]),
    FOLLOW_36_in_statementBlock320: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_statement_in_statementList332: new org.antlr.runtime.BitSet([0x800000F2, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_statementList335: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_statement_in_statementList339: new org.antlr.runtime.BitSet([0x800000F2, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_37_in_variableStatement353: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_LT_in_variableStatement355: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_variableDeclarationList_in_variableStatement359: new org.antlr.runtime.BitSet([0x00000010, 0x00000040]),
    FOLLOW_set_in_variableStatement361: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_variableDeclaration_in_variableDeclarationList380: new org.antlr.runtime.BitSet([0x00000012, 0x00000002]),
    FOLLOW_LT_in_variableDeclarationList383: new org.antlr.runtime.BitSet([0x00000010, 0x00000002]),
    FOLLOW_33_in_variableDeclarationList387: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_LT_in_variableDeclarationList389: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_variableDeclaration_in_variableDeclarationList393: new org.antlr.runtime.BitSet([0x00000012, 0x00000002]),
    FOLLOW_variableDeclarationNoIn_in_variableDeclarationListNoIn407: new org.antlr.runtime.BitSet([0x00000012, 0x00000002]),
    FOLLOW_LT_in_variableDeclarationListNoIn410: new org.antlr.runtime.BitSet([0x00000010, 0x00000002]),
    FOLLOW_33_in_variableDeclarationListNoIn414: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_LT_in_variableDeclarationListNoIn416: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_variableDeclarationNoIn_in_variableDeclarationListNoIn420: new org.antlr.runtime.BitSet([0x00000012, 0x00000002]),
    FOLLOW_Identifier_in_variableDeclaration434: new org.antlr.runtime.BitSet([0x00000012, 0x00000080]),
    FOLLOW_LT_in_variableDeclaration436: new org.antlr.runtime.BitSet([0x00000012, 0x00000080]),
    FOLLOW_initialiser_in_variableDeclaration440: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_Identifier_in_variableDeclarationNoIn453: new org.antlr.runtime.BitSet([0x00000012, 0x00000080]),
    FOLLOW_LT_in_variableDeclarationNoIn455: new org.antlr.runtime.BitSet([0x00000012, 0x00000080]),
    FOLLOW_initialiserNoIn_in_variableDeclarationNoIn459: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_39_in_initialiser472: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_initialiser474: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpression_in_initialiser478: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_39_in_initialiserNoIn490: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_initialiserNoIn492: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpressionNoIn_in_initialiserNoIn496: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_38_in_emptyStatement508: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_in_expressionStatement520: new org.antlr.runtime.BitSet([0x00000010, 0x00000040]),
    FOLLOW_set_in_expressionStatement522: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_40_in_ifStatement541: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_LT_in_ifStatement543: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_32_in_ifStatement547: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_ifStatement549: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_ifStatement553: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_LT_in_ifStatement555: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_34_in_ifStatement559: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_ifStatement561: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_statement_in_ifStatement565: new org.antlr.runtime.BitSet([0x00000012, 0x00000200]),
    FOLLOW_LT_in_ifStatement568: new org.antlr.runtime.BitSet([0x00000010, 0x00000200]),
    FOLLOW_41_in_ifStatement572: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_ifStatement574: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_statement_in_ifStatement578: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_doWhileStatement_in_iterationStatement592: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_whileStatement_in_iterationStatement597: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forStatement_in_iterationStatement602: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forInStatement_in_iterationStatement607: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_42_in_doWhileStatement619: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_doWhileStatement621: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_statement_in_doWhileStatement625: new org.antlr.runtime.BitSet([0x00000010, 0x00000800]),
    FOLLOW_LT_in_doWhileStatement627: new org.antlr.runtime.BitSet([0x00000010, 0x00000800]),
    FOLLOW_43_in_doWhileStatement631: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_LT_in_doWhileStatement633: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_32_in_doWhileStatement637: new org.antlr.runtime.BitSet([0x800000E0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_doWhileStatement639: new org.antlr.runtime.BitSet([0x00000000, 0x00000004]),
    FOLLOW_34_in_doWhileStatement641: new org.antlr.runtime.BitSet([0x00000010, 0x00000040]),
    FOLLOW_set_in_doWhileStatement643: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_43_in_whileStatement662: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_LT_in_whileStatement664: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_32_in_whileStatement668: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_whileStatement670: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_whileStatement674: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_LT_in_whileStatement676: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_34_in_whileStatement680: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_whileStatement682: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_statement_in_whileStatement686: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_forStatement698: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_LT_in_forStatement700: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_32_in_forStatement704: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000069,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_forStatement707: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000029,0x18000000, 0x000007FF]),
    FOLLOW_forStatementInitialiserPart_in_forStatement711: new org.antlr.runtime.BitSet([0x00000010, 0x00000040]),
    FOLLOW_LT_in_forStatement715: new org.antlr.runtime.BitSet([0x00000010, 0x00000040]),
    FOLLOW_38_in_forStatement719: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000049,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_forStatement722: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_forStatement726: new org.antlr.runtime.BitSet([0x00000010, 0x00000040]),
    FOLLOW_LT_in_forStatement730: new org.antlr.runtime.BitSet([0x00000010, 0x00000040]),
    FOLLOW_38_in_forStatement734: new org.antlr.runtime.BitSet([0x800000F0, 0x0C00000D,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_forStatement737: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_forStatement741: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_LT_in_forStatement745: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_34_in_forStatement749: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_forStatement751: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_statement_in_forStatement755: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expressionNoIn_in_forStatementInitialiserPart767: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_37_in_forStatementInitialiserPart772: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_LT_in_forStatementInitialiserPart774: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_variableDeclarationListNoIn_in_forStatementInitialiserPart778: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_44_in_forInStatement790: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_LT_in_forInStatement792: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_32_in_forInStatement796: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000029,0x00000000, 0x00000780]),
    FOLLOW_LT_in_forInStatement798: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000029,0x00000000, 0x00000780]),
    FOLLOW_forInStatementInitialiserPart_in_forInStatement802: new org.antlr.runtime.BitSet([0x00000010, 0x00002000]),
    FOLLOW_LT_in_forInStatement804: new org.antlr.runtime.BitSet([0x00000010, 0x00002000]),
    FOLLOW_45_in_forInStatement808: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_forInStatement810: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_forInStatement814: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_LT_in_forInStatement816: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_34_in_forInStatement820: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_forInStatement822: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_statement_in_forInStatement826: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_leftHandSideExpression_in_forInStatementInitialiserPart838: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_37_in_forInStatementInitialiserPart843: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_LT_in_forInStatementInitialiserPart845: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_variableDeclarationNoIn_in_forInStatementInitialiserPart849: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_46_in_continueStatement860: new org.antlr.runtime.BitSet([0x00000030, 0x00000040]),
    FOLLOW_Identifier_in_continueStatement862: new org.antlr.runtime.BitSet([0x00000010, 0x00000040]),
    FOLLOW_set_in_continueStatement865: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_47_in_breakStatement883: new org.antlr.runtime.BitSet([0x00000030, 0x00000040]),
    FOLLOW_Identifier_in_breakStatement885: new org.antlr.runtime.BitSet([0x00000010, 0x00000040]),
    FOLLOW_set_in_breakStatement888: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_48_in_returnStatement906: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000049,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_returnStatement908: new org.antlr.runtime.BitSet([0x00000010, 0x00000040]),
    FOLLOW_set_in_returnStatement911: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_49_in_withStatement930: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_LT_in_withStatement932: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_32_in_withStatement936: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_withStatement938: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_withStatement942: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_LT_in_withStatement944: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_34_in_withStatement948: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_withStatement950: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_statement_in_withStatement954: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_Identifier_in_labelledStatement965: new org.antlr.runtime.BitSet([0x00000010, 0x00040000]),
    FOLLOW_LT_in_labelledStatement967: new org.antlr.runtime.BitSet([0x00000010, 0x00040000]),
    FOLLOW_50_in_labelledStatement971: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_labelledStatement973: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_statement_in_labelledStatement977: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_51_in_switchStatement989: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_LT_in_switchStatement991: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_32_in_switchStatement995: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_switchStatement997: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_switchStatement1001: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_LT_in_switchStatement1003: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_34_in_switchStatement1007: new org.antlr.runtime.BitSet([0x00000010, 0x00000008]),
    FOLLOW_LT_in_switchStatement1009: new org.antlr.runtime.BitSet([0x00000010, 0x00000008]),
    FOLLOW_caseBlock_in_switchStatement1013: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_35_in_caseBlock1025: new org.antlr.runtime.BitSet([0x00000010, 0x00300010]),
    FOLLOW_LT_in_caseBlock1028: new org.antlr.runtime.BitSet([0x00000010, 0x00100000]),
    FOLLOW_caseClause_in_caseBlock1032: new org.antlr.runtime.BitSet([0x00000010, 0x00300010]),
    FOLLOW_LT_in_caseBlock1037: new org.antlr.runtime.BitSet([0x00000010, 0x00200000]),
    FOLLOW_defaultClause_in_caseBlock1041: new org.antlr.runtime.BitSet([0x00000010, 0x00100010]),
    FOLLOW_LT_in_caseBlock1044: new org.antlr.runtime.BitSet([0x00000010, 0x00100000]),
    FOLLOW_caseClause_in_caseBlock1048: new org.antlr.runtime.BitSet([0x00000010, 0x00100010]),
    FOLLOW_LT_in_caseBlock1054: new org.antlr.runtime.BitSet([0x00000010, 0x00000010]),
    FOLLOW_36_in_caseBlock1058: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_52_in_caseClause1069: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_caseClause1071: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_caseClause1075: new org.antlr.runtime.BitSet([0x00000010, 0x00040000]),
    FOLLOW_LT_in_caseClause1077: new org.antlr.runtime.BitSet([0x00000010, 0x00040000]),
    FOLLOW_50_in_caseClause1081: new org.antlr.runtime.BitSet([0x800000F2, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_caseClause1083: new org.antlr.runtime.BitSet([0x800000F2, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_statementList_in_caseClause1087: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_53_in_defaultClause1100: new org.antlr.runtime.BitSet([0x00000010, 0x00040000]),
    FOLLOW_LT_in_defaultClause1102: new org.antlr.runtime.BitSet([0x00000010, 0x00040000]),
    FOLLOW_50_in_defaultClause1106: new org.antlr.runtime.BitSet([0x800000F2, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_defaultClause1108: new org.antlr.runtime.BitSet([0x800000F2, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_statementList_in_defaultClause1112: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_54_in_throwStatement1125: new org.antlr.runtime.BitSet([0x800000E0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_throwStatement1127: new org.antlr.runtime.BitSet([0x00000010, 0x00000040]),
    FOLLOW_set_in_throwStatement1129: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_55_in_tryStatement1147: new org.antlr.runtime.BitSet([0x00000010, 0x00000008]),
    FOLLOW_LT_in_tryStatement1149: new org.antlr.runtime.BitSet([0x00000010, 0x00000008]),
    FOLLOW_statementBlock_in_tryStatement1153: new org.antlr.runtime.BitSet([0x00000010, 0x03000000]),
    FOLLOW_LT_in_tryStatement1155: new org.antlr.runtime.BitSet([0x00000010, 0x03000000]),
    FOLLOW_finallyClause_in_tryStatement1160: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_catchClause_in_tryStatement1164: new org.antlr.runtime.BitSet([0x00000012, 0x02000000]),
    FOLLOW_LT_in_tryStatement1167: new org.antlr.runtime.BitSet([0x00000010, 0x02000000]),
    FOLLOW_finallyClause_in_tryStatement1171: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_56_in_catchClause1192: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_LT_in_catchClause1194: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_32_in_catchClause1198: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_LT_in_catchClause1200: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_Identifier_in_catchClause1204: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_LT_in_catchClause1206: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_34_in_catchClause1210: new org.antlr.runtime.BitSet([0x00000010, 0x00000008]),
    FOLLOW_LT_in_catchClause1212: new org.antlr.runtime.BitSet([0x00000010, 0x00000008]),
    FOLLOW_statementBlock_in_catchClause1216: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_57_in_finallyClause1228: new org.antlr.runtime.BitSet([0x00000010, 0x00000008]),
    FOLLOW_LT_in_finallyClause1230: new org.antlr.runtime.BitSet([0x00000010, 0x00000008]),
    FOLLOW_statementBlock_in_finallyClause1234: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignmentExpression_in_expression1246: new org.antlr.runtime.BitSet([0x00000012, 0x00000002]),
    FOLLOW_LT_in_expression1249: new org.antlr.runtime.BitSet([0x00000010, 0x00000002]),
    FOLLOW_33_in_expression1253: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_expression1255: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpression_in_expression1259: new org.antlr.runtime.BitSet([0x00000012, 0x00000002]),
    FOLLOW_assignmentExpressionNoIn_in_expressionNoIn1273: new org.antlr.runtime.BitSet([0x00000012, 0x00000002]),
    FOLLOW_LT_in_expressionNoIn1276: new org.antlr.runtime.BitSet([0x00000010, 0x00000002]),
    FOLLOW_33_in_expressionNoIn1280: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_expressionNoIn1282: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpressionNoIn_in_expressionNoIn1286: new org.antlr.runtime.BitSet([0x00000012, 0x00000002]),
    FOLLOW_conditionalExpression_in_assignmentExpression1300: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_leftHandSideExpression_in_assignmentExpression1305: new org.antlr.runtime.BitSet([0x00000010, 0xC0000080,0x000001FF, 0x00000000]),
    FOLLOW_LT_in_assignmentExpression1307: new org.antlr.runtime.BitSet([0x00000010, 0xC0000080,0x000001FF, 0x00000000]),
    FOLLOW_assignmentOperator_in_assignmentExpression1311: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_assignmentExpression1313: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpression_in_assignmentExpression1317: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_conditionalExpressionNoIn_in_assignmentExpressionNoIn1329: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_leftHandSideExpression_in_assignmentExpressionNoIn1334: new org.antlr.runtime.BitSet([0x00000010, 0xC0000080,0x000001FF, 0x00000000]),
    FOLLOW_LT_in_assignmentExpressionNoIn1336: new org.antlr.runtime.BitSet([0x00000010, 0xC0000080,0x000001FF, 0x00000000]),
    FOLLOW_assignmentOperator_in_assignmentExpressionNoIn1340: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_assignmentExpressionNoIn1342: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpressionNoIn_in_assignmentExpressionNoIn1346: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_callExpression_in_leftHandSideExpression1358: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_newExpression_in_leftHandSideExpression1363: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_memberExpression_in_newExpression1375: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_58_in_newExpression1380: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x00000000, 0x00000780]),
    FOLLOW_LT_in_newExpression1382: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x00000000, 0x00000780]),
    FOLLOW_newExpression_in_newExpression1386: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primaryExpression_in_memberExpression1399: new org.antlr.runtime.BitSet([0x00000012, 0x28000000]),
    FOLLOW_functionExpression_in_memberExpression1403: new org.antlr.runtime.BitSet([0x00000012, 0x28000000]),
    FOLLOW_58_in_memberExpression1407: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x00000000, 0x00000780]),
    FOLLOW_LT_in_memberExpression1409: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x00000000, 0x00000780]),
    FOLLOW_memberExpression_in_memberExpression1413: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_LT_in_memberExpression1415: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_arguments_in_memberExpression1419: new org.antlr.runtime.BitSet([0x00000012, 0x28000000]),
    FOLLOW_LT_in_memberExpression1423: new org.antlr.runtime.BitSet([0x00000010, 0x28000000]),
    FOLLOW_memberExpressionSuffix_in_memberExpression1427: new org.antlr.runtime.BitSet([0x00000012, 0x28000000]),
    FOLLOW_indexSuffix_in_memberExpressionSuffix1441: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_propertyReferenceSuffix_in_memberExpressionSuffix1446: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_memberExpression_in_callExpression1457: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_LT_in_callExpression1459: new org.antlr.runtime.BitSet([0x00000010, 0x00000001]),
    FOLLOW_arguments_in_callExpression1463: new org.antlr.runtime.BitSet([0x00000012, 0x28000001]),
    FOLLOW_LT_in_callExpression1466: new org.antlr.runtime.BitSet([0x00000010, 0x28000001]),
    FOLLOW_callExpressionSuffix_in_callExpression1470: new org.antlr.runtime.BitSet([0x00000012, 0x28000001]),
    FOLLOW_arguments_in_callExpressionSuffix1484: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_indexSuffix_in_callExpressionSuffix1489: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_propertyReferenceSuffix_in_callExpressionSuffix1494: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_32_in_arguments1505: new org.antlr.runtime.BitSet([0x800000F0, 0x0C00000D,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_arguments1508: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpression_in_arguments1512: new org.antlr.runtime.BitSet([0x00000010, 0x00000006]),
    FOLLOW_LT_in_arguments1515: new org.antlr.runtime.BitSet([0x00000010, 0x00000002]),
    FOLLOW_33_in_arguments1519: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_arguments1521: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpression_in_arguments1525: new org.antlr.runtime.BitSet([0x00000010, 0x00000006]),
    FOLLOW_LT_in_arguments1531: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_34_in_arguments1535: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_59_in_indexSuffix1547: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_indexSuffix1549: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_indexSuffix1553: new org.antlr.runtime.BitSet([0x00000010, 0x10000000]),
    FOLLOW_LT_in_indexSuffix1555: new org.antlr.runtime.BitSet([0x00000010, 0x10000000]),
    FOLLOW_60_in_indexSuffix1559: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_61_in_propertyReferenceSuffix1572: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_LT_in_propertyReferenceSuffix1574: new org.antlr.runtime.BitSet([0x00000030, 0x00000000]),
    FOLLOW_Identifier_in_propertyReferenceSuffix1578: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_assignmentOperator0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logicalORExpression_in_conditionalExpression1645: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_LT_in_conditionalExpression1648: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_73_in_conditionalExpression1652: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_conditionalExpression1654: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpression_in_conditionalExpression1658: new org.antlr.runtime.BitSet([0x00000010, 0x00040000]),
    FOLLOW_LT_in_conditionalExpression1660: new org.antlr.runtime.BitSet([0x00000010, 0x00040000]),
    FOLLOW_50_in_conditionalExpression1664: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_conditionalExpression1666: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpression_in_conditionalExpression1670: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logicalORExpressionNoIn_in_conditionalExpressionNoIn1683: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_LT_in_conditionalExpressionNoIn1686: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_73_in_conditionalExpressionNoIn1690: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_conditionalExpressionNoIn1692: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpressionNoIn_in_conditionalExpressionNoIn1696: new org.antlr.runtime.BitSet([0x00000010, 0x00040000]),
    FOLLOW_LT_in_conditionalExpressionNoIn1698: new org.antlr.runtime.BitSet([0x00000010, 0x00040000]),
    FOLLOW_50_in_conditionalExpressionNoIn1702: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_conditionalExpressionNoIn1704: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpressionNoIn_in_conditionalExpressionNoIn1708: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logicalANDExpression_in_logicalORExpression1721: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00000400, 0x00000000]),
    FOLLOW_LT_in_logicalORExpression1724: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00000400, 0x00000000]),
    FOLLOW_74_in_logicalORExpression1728: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_logicalORExpression1730: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_logicalANDExpression_in_logicalORExpression1734: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00000400, 0x00000000]),
    FOLLOW_logicalANDExpressionNoIn_in_logicalORExpressionNoIn1748: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00000400, 0x00000000]),
    FOLLOW_LT_in_logicalORExpressionNoIn1751: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00000400, 0x00000000]),
    FOLLOW_74_in_logicalORExpressionNoIn1755: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_logicalORExpressionNoIn1757: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_logicalANDExpressionNoIn_in_logicalORExpressionNoIn1761: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00000400, 0x00000000]),
    FOLLOW_bitwiseORExpression_in_logicalANDExpression1775: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_LT_in_logicalANDExpression1778: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_75_in_logicalANDExpression1782: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_logicalANDExpression1784: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_bitwiseORExpression_in_logicalANDExpression1788: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_bitwiseORExpressionNoIn_in_logicalANDExpressionNoIn1802: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_LT_in_logicalANDExpressionNoIn1805: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_75_in_logicalANDExpressionNoIn1809: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_logicalANDExpressionNoIn1811: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_bitwiseORExpressionNoIn_in_logicalANDExpressionNoIn1815: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00000800, 0x00000000]),
    FOLLOW_bitwiseXORExpression_in_bitwiseORExpression1829: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00001000, 0x00000000]),
    FOLLOW_LT_in_bitwiseORExpression1832: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00001000, 0x00000000]),
    FOLLOW_76_in_bitwiseORExpression1836: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_bitwiseORExpression1838: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_bitwiseXORExpression_in_bitwiseORExpression1842: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00001000, 0x00000000]),
    FOLLOW_bitwiseXORExpressionNoIn_in_bitwiseORExpressionNoIn1856: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00001000, 0x00000000]),
    FOLLOW_LT_in_bitwiseORExpressionNoIn1859: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00001000, 0x00000000]),
    FOLLOW_76_in_bitwiseORExpressionNoIn1863: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_bitwiseORExpressionNoIn1865: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_bitwiseXORExpressionNoIn_in_bitwiseORExpressionNoIn1869: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00001000, 0x00000000]),
    FOLLOW_bitwiseANDExpression_in_bitwiseXORExpression1883: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00002000, 0x00000000]),
    FOLLOW_LT_in_bitwiseXORExpression1886: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00002000, 0x00000000]),
    FOLLOW_77_in_bitwiseXORExpression1890: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_bitwiseXORExpression1892: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_bitwiseANDExpression_in_bitwiseXORExpression1896: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00002000, 0x00000000]),
    FOLLOW_bitwiseANDExpressionNoIn_in_bitwiseXORExpressionNoIn1910: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00002000, 0x00000000]),
    FOLLOW_LT_in_bitwiseXORExpressionNoIn1913: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00002000, 0x00000000]),
    FOLLOW_77_in_bitwiseXORExpressionNoIn1917: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_bitwiseXORExpressionNoIn1919: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_bitwiseANDExpressionNoIn_in_bitwiseXORExpressionNoIn1923: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00002000, 0x00000000]),
    FOLLOW_equalityExpression_in_bitwiseANDExpression1937: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00004000, 0x00000000]),
    FOLLOW_LT_in_bitwiseANDExpression1940: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00004000, 0x00000000]),
    FOLLOW_78_in_bitwiseANDExpression1944: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_bitwiseANDExpression1946: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_equalityExpression_in_bitwiseANDExpression1950: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00004000, 0x00000000]),
    FOLLOW_equalityExpressionNoIn_in_bitwiseANDExpressionNoIn1964: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00004000, 0x00000000]),
    FOLLOW_LT_in_bitwiseANDExpressionNoIn1967: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00004000, 0x00000000]),
    FOLLOW_78_in_bitwiseANDExpressionNoIn1971: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_bitwiseANDExpressionNoIn1973: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_equalityExpressionNoIn_in_bitwiseANDExpressionNoIn1977: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00004000, 0x00000000]),
    FOLLOW_relationalExpression_in_equalityExpression1991: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00078000, 0x00000000]),
    FOLLOW_LT_in_equalityExpression1994: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00078000, 0x00000000]),
    FOLLOW_set_in_equalityExpression1998: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_equalityExpression2014: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_relationalExpression_in_equalityExpression2018: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00078000, 0x00000000]),
    FOLLOW_relationalExpressionNoIn_in_equalityExpressionNoIn2031: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00078000, 0x00000000]),
    FOLLOW_LT_in_equalityExpressionNoIn2034: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00078000, 0x00000000]),
    FOLLOW_set_in_equalityExpressionNoIn2038: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_equalityExpressionNoIn2054: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_relationalExpressionNoIn_in_equalityExpressionNoIn2058: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00078000, 0x00000000]),
    FOLLOW_shiftExpression_in_relationalExpression2072: new org.antlr.runtime.BitSet([0x00000012, 0x00002000,0x00F80000, 0x00000000]),
    FOLLOW_LT_in_relationalExpression2075: new org.antlr.runtime.BitSet([0x00000010, 0x00002000,0x00F80000, 0x00000000]),
    FOLLOW_set_in_relationalExpression2079: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_relationalExpression2103: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_shiftExpression_in_relationalExpression2107: new org.antlr.runtime.BitSet([0x00000012, 0x00002000,0x00F80000, 0x00000000]),
    FOLLOW_shiftExpression_in_relationalExpressionNoIn2120: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00F80000, 0x00000000]),
    FOLLOW_LT_in_relationalExpressionNoIn2123: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00F80000, 0x00000000]),
    FOLLOW_set_in_relationalExpressionNoIn2127: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_relationalExpressionNoIn2147: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_shiftExpression_in_relationalExpressionNoIn2151: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x00F80000, 0x00000000]),
    FOLLOW_additiveExpression_in_shiftExpression2164: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x07000000, 0x00000000]),
    FOLLOW_LT_in_shiftExpression2167: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x07000000, 0x00000000]),
    FOLLOW_set_in_shiftExpression2171: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_shiftExpression2183: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_additiveExpression_in_shiftExpression2187: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x07000000, 0x00000000]),
    FOLLOW_multiplicativeExpression_in_additiveExpression2200: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x18000000, 0x00000000]),
    FOLLOW_LT_in_additiveExpression2203: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x18000000, 0x00000000]),
    FOLLOW_set_in_additiveExpression2207: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_additiveExpression2215: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_multiplicativeExpression_in_additiveExpression2219: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0x18000000, 0x00000000]),
    FOLLOW_unaryExpression_in_multiplicativeExpression2232: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0xE0000000, 0x00000000]),
    FOLLOW_LT_in_multiplicativeExpression2235: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0xE0000000, 0x00000000]),
    FOLLOW_set_in_multiplicativeExpression2239: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_multiplicativeExpression2251: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_unaryExpression_in_multiplicativeExpression2255: new org.antlr.runtime.BitSet([0x00000012, 0x00000000,0xE0000000, 0x00000000]),
    FOLLOW_postfixExpression_in_unaryExpression2268: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_unaryExpression2273: new org.antlr.runtime.BitSet([0x800000E0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_unaryExpression_in_unaryExpression2309: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_leftHandSideExpression_in_postfixExpression2321: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000018]),
    FOLLOW_set_in_postfixExpression2323: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_103_in_primaryExpression2341: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_Identifier_in_primaryExpression2346: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_literal_in_primaryExpression2351: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_arrayLiteral_in_primaryExpression2356: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_objectLiteral_in_primaryExpression2361: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_32_in_primaryExpression2366: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_primaryExpression2368: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_expression_in_primaryExpression2372: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_LT_in_primaryExpression2374: new org.antlr.runtime.BitSet([0x00000010, 0x00000004]),
    FOLLOW_34_in_primaryExpression2378: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_59_in_arrayLiteral2391: new org.antlr.runtime.BitSet([0x800000F0, 0x1C00000B,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_arrayLiteral2393: new org.antlr.runtime.BitSet([0x800000F0, 0x1C00000B,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpression_in_arrayLiteral2397: new org.antlr.runtime.BitSet([0x00000010, 0x10000002]),
    FOLLOW_LT_in_arrayLiteral2401: new org.antlr.runtime.BitSet([0x00000010, 0x00000002]),
    FOLLOW_33_in_arrayLiteral2405: new org.antlr.runtime.BitSet([0x800000F0, 0x1C00000B,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_arrayLiteral2408: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpression_in_arrayLiteral2412: new org.antlr.runtime.BitSet([0x00000010, 0x10000002]),
    FOLLOW_LT_in_arrayLiteral2418: new org.antlr.runtime.BitSet([0x00000010, 0x10000000]),
    FOLLOW_60_in_arrayLiteral2422: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_35_in_objectLiteral2441: new org.antlr.runtime.BitSet([0x000000F0, 0x00000000]),
    FOLLOW_LT_in_objectLiteral2443: new org.antlr.runtime.BitSet([0x000000F0, 0x00000000]),
    FOLLOW_propertyNameAndValue_in_objectLiteral2447: new org.antlr.runtime.BitSet([0x00000010, 0x00000012]),
    FOLLOW_LT_in_objectLiteral2450: new org.antlr.runtime.BitSet([0x00000010, 0x00000002]),
    FOLLOW_33_in_objectLiteral2454: new org.antlr.runtime.BitSet([0x000000F0, 0x00000000]),
    FOLLOW_LT_in_objectLiteral2456: new org.antlr.runtime.BitSet([0x000000F0, 0x00000000]),
    FOLLOW_propertyNameAndValue_in_objectLiteral2460: new org.antlr.runtime.BitSet([0x00000010, 0x00000012]),
    FOLLOW_LT_in_objectLiteral2464: new org.antlr.runtime.BitSet([0x00000010, 0x00000010]),
    FOLLOW_36_in_objectLiteral2468: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_propertyName_in_propertyNameAndValue2480: new org.antlr.runtime.BitSet([0x00000010, 0x00040000]),
    FOLLOW_LT_in_propertyNameAndValue2482: new org.antlr.runtime.BitSet([0x00000010, 0x00040000]),
    FOLLOW_50_in_propertyNameAndValue2486: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_propertyNameAndValue2488: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_assignmentExpression_in_propertyNameAndValue2492: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_propertyName0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_literal0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_functionDeclaration_in_synpred5_JavaScript86: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LT_in_synpred9_JavaScript136: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_statementBlock_in_synpred21_JavaScript230: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expressionStatement_in_synpred24_JavaScript245: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_labelledStatement_in_synpred31_JavaScript280: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LT_in_synpred34_JavaScript309: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LT_in_synpred47_JavaScript436: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LT_in_synpred49_JavaScript455: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LT_in_synpred60_JavaScript568: new org.antlr.runtime.BitSet([0x00000010, 0x00000200]),
    FOLLOW_41_in_synpred60_JavaScript572: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_synpred60_JavaScript574: new org.antlr.runtime.BitSet([0x800000F0, 0x0CCBDD69,0x18000000, 0x000007FF]),
    FOLLOW_statement_in_synpred60_JavaScript578: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_forStatement_in_synpred63_JavaScript602: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LT_in_synpred118_JavaScript1083: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LT_in_synpred121_JavaScript1108: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_conditionalExpression_in_synpred140_JavaScript1300: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_conditionalExpressionNoIn_in_synpred143_JavaScript1329: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_callExpression_in_synpred146_JavaScript1358: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_memberExpression_in_synpred147_JavaScript1375: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LT_in_synpred154_JavaScript1423: new org.antlr.runtime.BitSet([0x00000010, 0x28000000]),
    FOLLOW_memberExpressionSuffix_in_synpred154_JavaScript1427: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LT_in_synpred158_JavaScript1466: new org.antlr.runtime.BitSet([0x00000010, 0x28000001]),
    FOLLOW_callExpressionSuffix_in_synpred158_JavaScript1470: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LT_in_synpred256_JavaScript2203: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x18000000, 0x00000000]),
    FOLLOW_set_in_synpred256_JavaScript2207: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_LT_in_synpred256_JavaScript2215: new org.antlr.runtime.BitSet([0x800000F0, 0x0C000009,0x18000000, 0x000007FF]),
    FOLLOW_multiplicativeExpression_in_synpred256_JavaScript2219: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LT_in_synpred280_JavaScript2393: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();
module.exports = JavaScriptParser;
