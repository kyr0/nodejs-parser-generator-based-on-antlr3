/*
Copyright (c) 2003-2008 Terence Parr. All rights reserved.
Code licensed under the BSD License:
http://www.antlr.org/license.html

Some parts of the ANTLR class:
Copyright (c) 2008, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.txt
*/
org.antlr.runtime.ANTLRFileStream=function(b,c){this.fileName=b;if(!org.antlr.env.ua.rhino)throw Error("ANTLR File I/O is not supported in this JS implementation.");var a=this.loadFileUsingJava(b,c);org.antlr.runtime.ANTLRFileStream.superclass.constructor.call(this,a)};
org.antlr.lang.extend(org.antlr.runtime.ANTLRFileStream,org.antlr.runtime.ANTLRStringStream,{getSourceName:function(){return this.fileName},loadFileUsingJava:function(b,c){var a=new java.io.File(b),d=a.length(),a=new java.io.FileInputStream(a),a=c?new java.io.InputStreamReader(a,c):new java.io.InputStreamReader(a),e=java.lang.reflect.Array.newInstance(java.lang.Character.TYPE,d);a.read(e,0,d);return new String(new java.lang.String(e))}});
