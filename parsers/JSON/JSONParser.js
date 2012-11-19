// $ANTLR 3.3 Nov 30, 2010 12:50:56 ./grammars/JSON.g 2012-11-18 03:50:52

var JSONParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    JSONParser.superclass.constructor.call(this, input, state);


         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(JSONParser, {
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
// public class variables
var EOF= -1,
    OBJECT= 4,
    ELEMENT= 5,
    ARRAY= 6,
    STRING= 7,
    INTEGER= 8,
    DOUBLE= 9,
    Colon= 10,
    Comma= 11,
    LBrace= 12,
    RBrace= 13,
    LBracket= 14,
    RBracket= 15,
    Dot= 16,
    TRUE= 17,
    FALSE= 18,
    NULL= 19,
    Digit= 20,
    HexDigit= 21,
    UnicodeChar= 22,
    EscapeSequence= 23,
    StringChar= 24,
    Int= 25,
    Frac= 26,
    Exp= 27,
    WhiteSpace= 28,
    String= 29,
    Integer= 30,
    Double= 31;

// public instance methods/vars
org.antlr.lang.extend(JSONParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return JSONParser.tokenNames; },
    getGrammarFileName: function() { return "./grammars/JSON.g"; }
});
org.antlr.lang.augmentObject(JSONParser.prototype, {

    // inline static return class
    jsonObject_return: (function() {
        JSONParser.jsonObject_return = function(){};
        org.antlr.lang.extend(JSONParser.jsonObject_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JSON.g:78:1: jsonObject : object ;
    // $ANTLR start "jsonObject"
    jsonObject: function() {
        var retval = new JSONParser.jsonObject_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var object1 = null;


        try {
            // ./grammars/JSON.g:79:2: ( object )
            // ./grammars/JSON.g:79:4: object
            root_0 = this.adaptor.nil();

            this.pushFollow(JSONParser.FOLLOW_object_in_jsonObject390);
            object1=this.object();

            this.state._fsp--;

            this.adaptor.addChild(root_0, object1.getTree());



            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }


        finally {
        }
        return retval;
    },

    // inline static return class
    jsonArray_return: (function() {
        JSONParser.jsonArray_return = function(){};
        org.antlr.lang.extend(JSONParser.jsonArray_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JSON.g:82:1: jsonArray : array ;
    // $ANTLR start "jsonArray"
    jsonArray: function() {
        var retval = new JSONParser.jsonArray_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var array2 = null;


        try {
            // ./grammars/JSON.g:83:2: ( array )
            // ./grammars/JSON.g:83:4: array
            root_0 = this.adaptor.nil();

            this.pushFollow(JSONParser.FOLLOW_array_in_jsonArray401);
            array2=this.array();

            this.state._fsp--;

            this.adaptor.addChild(root_0, array2.getTree());



            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }


        finally {
        }
        return retval;
    },

    // inline static return class
    object_return: (function() {
        JSONParser.object_return = function(){};
        org.antlr.lang.extend(JSONParser.object_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JSON.g:87:1: object : LBrace ( objectElement ( Comma objectElement )* )? RBrace -> ^( OBJECT ( objectElement )* ) ;
    // $ANTLR start "object"
    object: function() {
        var retval = new JSONParser.object_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LBrace3 = null;
        var Comma5 = null;
        var RBrace7 = null;
         var objectElement4 = null;
         var objectElement6 = null;

        var LBrace3_tree=null;
        var Comma5_tree=null;
        var RBrace7_tree=null;
        var stream_LBrace=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LBrace");
        var stream_Comma=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token Comma");
        var stream_RBrace=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token RBrace");
        var stream_objectElement=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule objectElement");
        try {
            // ./grammars/JSON.g:88:2: ( LBrace ( objectElement ( Comma objectElement )* )? RBrace -> ^( OBJECT ( objectElement )* ) )
            // ./grammars/JSON.g:88:4: LBrace ( objectElement ( Comma objectElement )* )? RBrace
            LBrace3=this.match(this.input,LBrace,JSONParser.FOLLOW_LBrace_in_object413);  
            stream_LBrace.add(LBrace3);

            // ./grammars/JSON.g:88:11: ( objectElement ( Comma objectElement )* )?
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0==String) ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // ./grammars/JSON.g:88:12: objectElement ( Comma objectElement )*
                    this.pushFollow(JSONParser.FOLLOW_objectElement_in_object416);
                    objectElement4=this.objectElement();

                    this.state._fsp--;

                    stream_objectElement.add(objectElement4.getTree());
                    // ./grammars/JSON.g:88:26: ( Comma objectElement )*
                    loop1:
                    do {
                        var alt1=2;
                        var LA1_0 = this.input.LA(1);

                        if ( (LA1_0==Comma) ) {
                            alt1=1;
                        }


                        switch (alt1) {
                        case 1 :
                            // ./grammars/JSON.g:88:27: Comma objectElement
                            Comma5=this.match(this.input,Comma,JSONParser.FOLLOW_Comma_in_object419);  
                            stream_Comma.add(Comma5);

                            this.pushFollow(JSONParser.FOLLOW_objectElement_in_object421);
                            objectElement6=this.objectElement();

                            this.state._fsp--;

                            stream_objectElement.add(objectElement6.getTree());


                            break;

                        default :
                            break loop1;
                        }
                    } while (true);



                    break;

            }

            RBrace7=this.match(this.input,RBrace,JSONParser.FOLLOW_RBrace_in_object427);  
            stream_RBrace.add(RBrace7);



            // AST REWRITE
            // elements: objectElement
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 89:4: -> ^( OBJECT ( objectElement )* )
            {
                // ./grammars/JSON.g:89:7: ^( OBJECT ( objectElement )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(OBJECT, "OBJECT"), root_1);

                // ./grammars/JSON.g:89:16: ( objectElement )*
                while ( stream_objectElement.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_objectElement.nextTree());

                }
                stream_objectElement.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }


        finally {
        }
        return retval;
    },

    // inline static return class
    objectElement_return: (function() {
        JSONParser.objectElement_return = function(){};
        org.antlr.lang.extend(JSONParser.objectElement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JSON.g:92:1: objectElement : String Colon value -> ^( ELEMENT String value ) ;
    // $ANTLR start "objectElement"
    objectElement: function() {
        var retval = new JSONParser.objectElement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var String8 = null;
        var Colon9 = null;
         var value10 = null;

        var String8_tree=null;
        var Colon9_tree=null;
        var stream_Colon=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token Colon");
        var stream_String=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token String");
        var stream_value=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule value");
        try {
            // ./grammars/JSON.g:93:2: ( String Colon value -> ^( ELEMENT String value ) )
            // ./grammars/JSON.g:93:4: String Colon value
            String8=this.match(this.input,String,JSONParser.FOLLOW_String_in_objectElement450);  
            stream_String.add(String8);

            Colon9=this.match(this.input,Colon,JSONParser.FOLLOW_Colon_in_objectElement452);  
            stream_Colon.add(Colon9);

            this.pushFollow(JSONParser.FOLLOW_value_in_objectElement454);
            value10=this.value();

            this.state._fsp--;

            stream_value.add(value10.getTree());


            // AST REWRITE
            // elements: String, value
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 94:4: -> ^( ELEMENT String value )
            {
                // ./grammars/JSON.g:94:7: ^( ELEMENT String value )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(ELEMENT, "ELEMENT"), root_1);

                this.adaptor.addChild(root_1, stream_String.nextNode());
                this.adaptor.addChild(root_1, stream_value.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }


        finally {
        }
        return retval;
    },

    // inline static return class
    array_return: (function() {
        JSONParser.array_return = function(){};
        org.antlr.lang.extend(JSONParser.array_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JSON.g:97:1: array : LBracket value ( Comma value )* RBracket -> ^( ARRAY ( value )+ ) ;
    // $ANTLR start "array"
    array: function() {
        var retval = new JSONParser.array_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LBracket11 = null;
        var Comma13 = null;
        var RBracket15 = null;
         var value12 = null;
         var value14 = null;

        var LBracket11_tree=null;
        var Comma13_tree=null;
        var RBracket15_tree=null;
        var stream_RBracket=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token RBracket");
        var stream_LBracket=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LBracket");
        var stream_Comma=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token Comma");
        var stream_value=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule value");
        try {
            // ./grammars/JSON.g:98:2: ( LBracket value ( Comma value )* RBracket -> ^( ARRAY ( value )+ ) )
            // ./grammars/JSON.g:98:4: LBracket value ( Comma value )* RBracket
            LBracket11=this.match(this.input,LBracket,JSONParser.FOLLOW_LBracket_in_array478);  
            stream_LBracket.add(LBracket11);

            this.pushFollow(JSONParser.FOLLOW_value_in_array480);
            value12=this.value();

            this.state._fsp--;

            stream_value.add(value12.getTree());
            // ./grammars/JSON.g:98:19: ( Comma value )*
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( (LA3_0==Comma) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // ./grammars/JSON.g:98:20: Comma value
                    Comma13=this.match(this.input,Comma,JSONParser.FOLLOW_Comma_in_array483);  
                    stream_Comma.add(Comma13);

                    this.pushFollow(JSONParser.FOLLOW_value_in_array485);
                    value14=this.value();

                    this.state._fsp--;

                    stream_value.add(value14.getTree());


                    break;

                default :
                    break loop3;
                }
            } while (true);

            RBracket15=this.match(this.input,RBracket,JSONParser.FOLLOW_RBracket_in_array489);  
            stream_RBracket.add(RBracket15);



            // AST REWRITE
            // elements: value
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 99:4: -> ^( ARRAY ( value )+ )
            {
                // ./grammars/JSON.g:99:7: ^( ARRAY ( value )+ )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(ARRAY, "ARRAY"), root_1);

                if ( !(stream_value.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_value.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_value.nextTree());

                }
                stream_value.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }


        finally {
        }
        return retval;
    },

    // inline static return class
    value_return: (function() {
        JSONParser.value_return = function(){};
        org.antlr.lang.extend(JSONParser.value_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/JSON.g:103:1: value : ( String -> ^( STRING String ) | Integer -> ^( INTEGER Integer ) | Double -> ^( DOUBLE Double ) | object | array | TRUE | FALSE | NULL );
    // $ANTLR start "value"
    value: function() {
        var retval = new JSONParser.value_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var String16 = null;
        var Integer17 = null;
        var Double18 = null;
        var TRUE21 = null;
        var FALSE22 = null;
        var NULL23 = null;
         var object19 = null;
         var array20 = null;

        var String16_tree=null;
        var Integer17_tree=null;
        var Double18_tree=null;
        var TRUE21_tree=null;
        var FALSE22_tree=null;
        var NULL23_tree=null;
        var stream_Double=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token Double");
        var stream_String=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token String");
        var stream_Integer=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token Integer");

        try {
            // ./grammars/JSON.g:104:2: ( String -> ^( STRING String ) | Integer -> ^( INTEGER Integer ) | Double -> ^( DOUBLE Double ) | object | array | TRUE | FALSE | NULL )
            var alt4=8;
            switch ( this.input.LA(1) ) {
            case String:
                alt4=1;
                break;
            case Integer:
                alt4=2;
                break;
            case Double:
                alt4=3;
                break;
            case LBrace:
                alt4=4;
                break;
            case LBracket:
                alt4=5;
                break;
            case TRUE:
                alt4=6;
                break;
            case FALSE:
                alt4=7;
                break;
            case NULL:
                alt4=8;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 4, 0, this.input);

                throw nvae;
            }

            switch (alt4) {
                case 1 :
                    // ./grammars/JSON.g:104:4: String
                    String16=this.match(this.input,String,JSONParser.FOLLOW_String_in_value513);  
                    stream_String.add(String16);



                    // AST REWRITE
                    // elements: String
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 104:11: -> ^( STRING String )
                    {
                        // ./grammars/JSON.g:104:14: ^( STRING String )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(STRING, "STRING"), root_1);

                        this.adaptor.addChild(root_1, stream_String.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 2 :
                    // ./grammars/JSON.g:105:4: Integer
                    Integer17=this.match(this.input,Integer,JSONParser.FOLLOW_Integer_in_value526);  
                    stream_Integer.add(Integer17);



                    // AST REWRITE
                    // elements: Integer
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 105:12: -> ^( INTEGER Integer )
                    {
                        // ./grammars/JSON.g:105:15: ^( INTEGER Integer )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(INTEGER, "INTEGER"), root_1);

                        this.adaptor.addChild(root_1, stream_Integer.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 3 :
                    // ./grammars/JSON.g:106:4: Double
                    Double18=this.match(this.input,Double,JSONParser.FOLLOW_Double_in_value539);  
                    stream_Double.add(Double18);



                    // AST REWRITE
                    // elements: Double
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 106:11: -> ^( DOUBLE Double )
                    {
                        // ./grammars/JSON.g:106:14: ^( DOUBLE Double )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(DOUBLE, "DOUBLE"), root_1);

                        this.adaptor.addChild(root_1, stream_Double.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 4 :
                    // ./grammars/JSON.g:107:4: object
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JSONParser.FOLLOW_object_in_value552);
                    object19=this.object();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, object19.getTree());


                    break;
                case 5 :
                    // ./grammars/JSON.g:108:4: array
                    root_0 = this.adaptor.nil();

                    this.pushFollow(JSONParser.FOLLOW_array_in_value557);
                    array20=this.array();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, array20.getTree());


                    break;
                case 6 :
                    // ./grammars/JSON.g:109:4: TRUE
                    root_0 = this.adaptor.nil();

                    TRUE21=this.match(this.input,TRUE,JSONParser.FOLLOW_TRUE_in_value562); 
                    TRUE21_tree = this.adaptor.create(TRUE21);
                    this.adaptor.addChild(root_0, TRUE21_tree);



                    break;
                case 7 :
                    // ./grammars/JSON.g:110:4: FALSE
                    root_0 = this.adaptor.nil();

                    FALSE22=this.match(this.input,FALSE,JSONParser.FOLLOW_FALSE_in_value567); 
                    FALSE22_tree = this.adaptor.create(FALSE22);
                    this.adaptor.addChild(root_0, FALSE22_tree);



                    break;
                case 8 :
                    // ./grammars/JSON.g:111:4: NULL
                    root_0 = this.adaptor.nil();

                    NULL23=this.match(this.input,NULL,JSONParser.FOLLOW_NULL_in_value572); 
                    NULL23_tree = this.adaptor.create(NULL23);
                    this.adaptor.addChild(root_0, NULL23_tree);



                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }


        finally {
        }
        return retval;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

 

// public class variables
org.antlr.lang.augmentObject(JSONParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "OBJECT", "ELEMENT", "ARRAY", "STRING", "INTEGER", "DOUBLE", "Colon", "Comma", "LBrace", "RBrace", "LBracket", "RBracket", "Dot", "TRUE", "FALSE", "NULL", "Digit", "HexDigit", "UnicodeChar", "EscapeSequence", "StringChar", "Int", "Frac", "Exp", "WhiteSpace", "String", "Integer", "Double"],
    FOLLOW_object_in_jsonObject390: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_array_in_jsonArray401: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LBrace_in_object413: new org.antlr.runtime.BitSet([0x20002000, 0x00000000]),
    FOLLOW_objectElement_in_object416: new org.antlr.runtime.BitSet([0x00002800, 0x00000000]),
    FOLLOW_Comma_in_object419: new org.antlr.runtime.BitSet([0x20000000, 0x00000000]),
    FOLLOW_objectElement_in_object421: new org.antlr.runtime.BitSet([0x00002800, 0x00000000]),
    FOLLOW_RBrace_in_object427: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_String_in_objectElement450: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_Colon_in_objectElement452: new org.antlr.runtime.BitSet([0xE00E5000, 0x00000000]),
    FOLLOW_value_in_objectElement454: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LBracket_in_array478: new org.antlr.runtime.BitSet([0xE00E5000, 0x00000000]),
    FOLLOW_value_in_array480: new org.antlr.runtime.BitSet([0x00008800, 0x00000000]),
    FOLLOW_Comma_in_array483: new org.antlr.runtime.BitSet([0xE00E5000, 0x00000000]),
    FOLLOW_value_in_array485: new org.antlr.runtime.BitSet([0x00008800, 0x00000000]),
    FOLLOW_RBracket_in_array489: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_String_in_value513: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_Integer_in_value526: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_Double_in_value539: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_object_in_value552: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_array_in_value557: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_TRUE_in_value562: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FALSE_in_value567: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NULL_in_value572: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();
module.exports = JSONParser;
