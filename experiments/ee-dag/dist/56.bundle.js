var _0x3ba2=["comment","comment.content","comment.content.invalid","webpackJsonp","push","conf","language","\x3c!--",".xml","delimiter","tag","metatag","@tag","delimiter.cdata","attribute.value","attribute.name","@pop"];!function(e,t){!function(t){for(;--t;)e.push(e.shift())}(++t)}(_0x3ba2,224);var _0x1d46=function(e,t){return _0x3ba2[e-=0]};(self[_0x1d46("0x0")]=self[_0x1d46("0x0")]||[])[_0x1d46("0x1")]([[56],{245:function(e,t,x){"use strict";x.r(t),x.d(t,_0x1d46("0x2"),function(){return n}),x.d(t,_0x1d46("0x3"),function(){return a});var n={comments:{blockComment:[_0x1d46("0x4"),"--\x3e"]},brackets:[["<",">"]],autoClosingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],surroundingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}]},a={defaultToken:"",tokenPostfix:_0x1d46("0x5"),ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:_0x1d46("0x6")},{token:_0x1d46("0x7"),next:"@tag"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:_0x1d46("0x6")},{token:_0x1d46("0x7")},"",{token:_0x1d46("0x6")}]],[/(<\?)(@qualifiedName)/,[{token:_0x1d46("0x6")},{token:"metatag",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:_0x1d46("0x6")},{token:_0x1d46("0x8"),next:_0x1d46("0x9")}]],[/<\!\[CDATA\[/,{token:_0x1d46("0xa"),next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","",_0x1d46("0xb")]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,[_0x1d46("0xc"),"",_0x1d46("0xb")]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,[_0x1d46("0xc"),"","attribute.value"]],[/@qualifiedName/,_0x1d46("0xc")],[/\?>/,{token:_0x1d46("0x6"),next:_0x1d46("0xd")}],[/(\/)(>)/,[{token:_0x1d46("0x7")},{token:_0x1d46("0x6"),next:_0x1d46("0xd")}]],[/>/,{token:_0x1d46("0x6"),next:_0x1d46("0xd")}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:_0x1d46("0xe"),next:"@comment"}]],comment:[[/[^<\-]+/,_0x1d46("0xf")],[/-->/,{token:"comment",next:_0x1d46("0xd")}],[/<!--/,_0x1d46("0x10")],[/[<\-]/,_0x1d46("0xf")]]}}}}]);