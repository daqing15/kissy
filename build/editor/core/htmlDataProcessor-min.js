/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 15 17:22
*/
KISSY.add("editor/core/htmlDataProcessor",function(l,t){return{init:function(u){function v(b){return b.replace(w,function(b,e,a){return"<"+e+a.replace(x,function(b,c){return-1==a.indexOf("_ke_saved_"+c)?" _ke_saved_"+b+" "+b:b})+">"})}function y(b){return b.replace(/<\!--(?!{ke_protected})[\s\S]+?--\>/g,function(b){return"<\!--"+j+"{C}"+encodeURIComponent(b).replace(/--/g,"%2D%2D")+"--\>"})}function z(b){return b.replace(/<\!--\{ke_protected\}\{C\}([\s\S]+?)--\>/g,function(b,e){return decodeURIComponent(e)})}
var o=o,A=l.Node,p=l.UA,e=l.require("htmlparser"),m=new e.Filter,q=new e.Filter,r=new e.Filter;(function(){var b=function(a,b){return function(c,e){var f=[];(""+c).replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(c,h,n){h=h.toLowerCase();"font-family"==h&&(n=n.replace(/["']/g,""));for(var s,d,g,i=0;i<a.length;i++)if(a[i]&&(c=a[i][0],s=a[i][1],d=a[i][2],g=a[i][3],h.match(c)&&(!s||n.match(s)))){h=g||h;b&&(d=d||n);"function"==typeof d&&(d=d(n,e,h));d&&d.push&&(h=d[0],d=
d[1]);"string"==typeof d&&f.push([h,d]);return}!b&&f.push([h,n])});for(var d=0;d<f.length;d++)f[d]=f[d].join(":");return f.length?f.join(";")+";":!1}}([[/mso/i],[/w:WordDocument/i],[/^-ms/i],[/^-moz/i],[/^-webkit/i]],o),c={tagNames:[[/^script$/i,""],[/^iframe$/i,""],[/^style$/i,""],[/^link$/i,""],[/^meta$/i,""],[/^\?xml.*$/i,""],[/^.*namespace.*$/i,""]],root:function(a){a.filterChildren()},tags:{p:function(a){a.filterChildren()},$:function(a){var b=a.nodeName||"";if(-1!=b.indexOf(":")&&!/^ke/.test(b))if("v:imagedata"==
b){if(b=a.getAttribute("o:href"))a.setAttribute("src",b),a.removeAttribute("o:href");if(b=a.getAttribute("o:title"))a.setAttribute("title",b),a.removeAttribute("o:title");a.setTagName("img")}else a.setTagName("")}},attributes:{"class":function(a){return!a||/(^|\s+)Mso/.test(a)?!1:a},style:function(a){a=b(a);return!a?!1:a}},attributeNames:[[/^on/,"ke_on"],[/^lang$/,""]]},g={tagNames:[[/^ke:/,""],[/^\?xml:namespace$/,""]],tags:{$:function(a){if(a.attributes.length)for(var b=["name","href","src"],c,
e=0;e<b.length;e++)c="_ke_saved_"+b[e],a.getAttribute(c)&&a.removeAttribute(b[e]);return a},embed:function(a){var b=a.parentNode;if(b&&"object"==b.nodeName){var c=b.getAttribute("width"),b=b.getAttribute("height");c&&a.setAttribute("width",c);b&&a.setAttribute("width",b)}},a:function(a){if(!a.childNodes.length&&!a.attributes.length)return!1},span:function(a){if(!a.childNodes.length&&!a.attributes.length)return!1}},attributes:{style:function(a){if(!l.trim(a))return!1}},attributeNames:[[/^_ke_saved_/,
""],[/^ke_on/,"on"],[/^_ke.*/,""],[/^_ks.*/,""],[/^ke:.*$/,""]],comment:function(a){return a.substr(0,j.length)==j?(a="{C}"==a.substr(j.length,3)?a.substr(j.length+3):a.substr(j.length),new e.CData(decodeURIComponent(a))):a}};p.ie&&(g.attributes.style=function(a){return a.replace(/(^|;)([^:]+)/g,function(a){return a.toLowerCase()})});m.addRules(g);q.addRules(c);r.addRules(c)})();(function(){function b(a){for(var a=a.childNodes,b=a.length,c=a[b-1];c&&3==c.nodeType&&!l.trim(c.nodeValue);)c=a[--b];return c}
function c(a,c){var d=b(a);d&&((c||!p.ie)&&1==d.nodeType&&"br"==d.nodeName?a.removeChild(d):3==d.nodeType&&i.test(d.nodeValue)&&a.removeChild(d))}function g(a){var c=b(a);return!c||1==c.nodeType&&"br"==c.nodeName||"form"==a.nodeName&&"input"==c.nodeName}function a(a){c(a,!0);g(a)&&(p.ie?a.appendChild(new e.Text(" ")):(a.appendChild(new e.Text("&nbsp;")),a.appendChild(new e.Tag("br"))))}function j(a){c(a,!1);g(a)&&a.appendChild(new e.Text(" "))}var i=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,k=t.XHTML_DTD,f=l.merge(k.$block,
k.$listItem,k.$tableContent),d;for(d in f)f.hasOwnProperty(d)&&("br"in k[d]||delete f[d]);delete f.td;delete f.pre;var k={tags:{}},o={tags:{}};for(d in f)f.hasOwnProperty(d)&&(k.tags[d]=a,o.tags[d]=j);q.addRules(k);m.addRules(o);r.addRules(k)})();(function(){m.addRules({text:function(b){return b.replace(/\xa0/g,"&nbsp;")}})})();var w=/<(a|area|img|input)\b([^>]*)>/gi,x=/\b(href|src|name)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi,j="{ke_protected}";u.htmlDataProcessor={wordFilter:r,dataFilter:q,
htmlFilter:m,toHtml:function(b){var c=new e.BeautifyWriter;(new e.Parser(b)).parse().writeHtml(c,m);return c.getHtml()},toDataFormat:function(b,c,g){g=g||q;p.gecko&&(b=b.replace(/(<\!--\[if[^<]*?\])--\>([\S\s]*?)<\!--(\[endif\]--\>)/gi,"$1$2$3"));b=v(b);c=new A("<div>");c.html("a"+b);b=c.html().substr(1);b=z(b);c=new e.BeautifyWriter;(new e.Parser(b)).parse().writeHtml(c,g);b=c.getHtml();return b=y(b)},toServer:function(b){var c=new e.MinifyWriter;(new e.Parser(b)).parse().writeHtml(c,m);return c.getHtml()}}}}},
{requires:["./base"]});