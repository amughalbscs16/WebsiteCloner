var _yt_www={};(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ca,aaa,ka,la,ma,na,qa,sa,ta,ua,eaa,faa,gaa,haa,yb,Sb,Tb,zc,maa,Dc,naa,Ic,Pc,Qc,Rc,Zc,$c,paa,raa,Kd,saa,taa,Ld,Nd,uaa,waa,Yd,$d,ae,ee,xaa,he,oe,ne,zaa,re,se,te,ue,Aaa,ve,we,Ae,Baa,Be,Ie,Qe,Oe,Le,Daa,Te,Re,Se,We,Caa,Eaa,af,bf,gf,Faa,Gaa,Haa,nf,pf,Jaa,uf,vf,wf,Kaa,Bf,Gf,Hf,If,Jf,Kf,Mf,Pf,Qf,Uf,Rf,Naa,Zf,Oaa,eg,sg,Taa,Saa,Kg,Waa,Yg,$aa,nh,ih,qh,Ch,Fh,Mh,aba,bba,dba,Sh,eba,Th,Uh,fba,Zh,Xh,Vh,gba,ai,bi,ci,di,hba,ki,li,si,vi,iba,jba,kba,yi,Bi,Ci,Fi,Ki,Li,Mi,Oi,lba,oba,Ui,dj,mba,ij,qj,tj,vj,pba,xj,qba,
Cj,Bj,Ej,Aj,Dj,Mj,Kj,Nj,Qj,Lj,Oj,Rj,tba,Uj,Jj,Vj,uba,Sj,Tj,Pj,vba,bk,wba,fk,gk,xba,ik,lk,mk,kk,nk,ok,pk,rk,sk,hk,tk,qk,vk,zba,wk,yk,xk,zk,Ak,Ck,Dk,Fk,Ik,Ek,Jk,Kk,Lk,Rk,Ok,Mk,Dba,Sk,Fba,Tk,Gba,Hba,Vk,Yk,Nba,Mba,Lba,al,Kba,Iba,Jba,Oba,Pba,Qba,Rba,ml,kl,ol,Sba,pl,rl,Tba,Uba,sl,tl,yl,Cl,Dl,El,Il,Jl,Kl,$ba,aca,zl,Bl,xl,Zba,Al,Ol,Ql,Nl,bca,Rl,Pl,cca,gca,dca,jca,fca,eca,hca,ica,lca,Ul,kca,Sl,mca,oca,qca,pca,nca,Vl,Wl,Xl,fa,Yl,caa,va,Fa,daa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
g.da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}};
g.ea=function(a){if(!(a instanceof Array)){a=g.da(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
g.n=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.V=b.prototype};
aaa=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};
ka=function(a,b){if(b){for(var c=ia,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}};
la=function(){la=function(){};
ia.Symbol||(ia.Symbol=baa)};
ma=function(a,b){this.C=a;ja(this,"description",{configurable:!0,writable:!0,value:b})};
g.oa=function(){la();var a=ia.Symbol.iterator;a||(a=ia.Symbol.iterator=ia.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return na(ca(this))}});
g.oa=function(){}};
na=function(a){g.oa();a={next:a};a[ia.Symbol.iterator]=function(){return this};
return a};
qa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
sa=function(a,b){g.oa();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d};
ta=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.t=function(a,b,c){a=a.split(".");c=c||g.q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
g.wa=function(a){if(a&&a!=g.q)return ua(a.document);null===va&&(va=ua(g.q.document));return va};
ua=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&caa.test(a)?a:""};
g.u=function(a,b){for(var c=a.split("."),d=b||g.q,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.xa=function(){};
g.ya=function(a){a.Cc=void 0;a.getInstance=function(){return a.Cc?a.Cc:a.Cc=new a}};
g.za=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.Aa=function(a){return"array"==g.za(a)};
g.Ca=function(a){var b=g.za(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Da=function(a){return"function"==g.za(a)};
g.Ea=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ga=function(a){return Object.prototype.hasOwnProperty.call(a,Fa)&&a[Fa]||(a[Fa]=++daa)};
eaa=function(a,b,c){return a.call.apply(a.bind,arguments)};
faa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.v=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.v=eaa:g.v=faa;return g.v.apply(null,arguments)};
g.w=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.x=function(a,b){function c(){}
c.prototype=b.prototype;a.V=b.prototype;a.prototype=new c;a.prototype.constructor=a};
gaa=function(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;var d=b?c.index:a.length;try{return{au:a.slice(0,d)+"&act=1"+a.slice(d),Yu:decodeURIComponent(c[1])}}catch(f){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;d="";if(b){var e=a.indexOf("&adurl=");0<e&&(c=a.slice(0,e),d=a.slice(e))}return{au:c+"&act=1"+d,Yu:c+"&dct=1"+d}}return null};
g.Ha=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ha);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
haa=function(a){var b=a.url,c=a.tR;this.H=!!a.xH;this.F=gaa(b,c);a=/[?&]dsh=1(&|$)/.test(b);this.D=!a&&/[?&]ae=1(&|$)/.test(b);this.G=!a&&/[?&]ae=2(&|$)/.test(b);this.C=/[?&]adurl=([^&]*)/.exec(b)};
g.Ka=function(a,b,c){b=g.Ja(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
g.Ja=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Ma=function(a,b){return 0<=(0,g.La)(a,b)};
g.Na=function(a){return 0==a.length};
g.Pa=function(a,b){var c=(0,g.La)(a,b),d;(d=0<=c)&&g.Oa(a,c);return d};
g.Oa=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Qa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Ra=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ca(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Sa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Ta=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Ua=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Va=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.Wa=function(a){for(var b in a)return!1;return!0};
g.Xa=function(a,b){b in a&&delete a[b]};
g.Ya=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.Za=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.$a=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.ab=function(a){var b=g.za(a);if("object"==b||"array"==b){if(g.Da(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.ab(a[c]);return b}return a};
g.cb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<bb.length;f++)c=bb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.fb=function(a,b){this.C=a===db&&b||"";this.F=eb};
g.gb=function(a){return a instanceof g.fb&&a.constructor===g.fb&&a.F===eb?a.C:"type_error:Const"};
g.hb=function(a){return new g.fb(db,a)};
g.kb=function(a,b){this.F=a===g.ib&&b||"";this.D=g.jb};
g.lb=function(a){return new g.kb(g.ib,g.gb(a))};
g.mb=function(a,b){return 0==a.lastIndexOf(b,0)};
g.nb=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.ob=function(a){return/^[\s\xa0]*$/.test(a)};
g.vb=function(a,b){if(b)a=a.replace(pb,"&amp;").replace(qb,"&lt;").replace(rb,"&gt;").replace(sb,"&quot;").replace(tb,"&#39;").replace(ub,"&#0;");else{if(!iaa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(pb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(qb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(rb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(tb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ub,"&#0;"))}return a};
g.wb=function(a,b){return-1!=a.indexOf(b)};
g.zb=function(a,b){for(var c=0,d=(0,g.xb)(String(a)).split("."),e=(0,g.xb)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=yb(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||yb(0==l[2].length,0==m[2].length)||yb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
yb=function(a,b){return a<b?-1:a>b?1:0};
g.Cb=function(a,b){this.F=a===Ab&&b||"";this.D=Bb};
g.Db=function(a){if(a instanceof g.Cb&&a.constructor===g.Cb&&a.D===Bb)return a.F;g.za(a);return"type_error:SafeUrl"};
g.Fb=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(jaa);b=b&&kaa.test(b[1]);return g.Eb(b?a:"about:invalid#zClosurez")};
g.Hb=function(a){if(a instanceof g.Cb)return a;a="object"==typeof a&&a.Md?a.Tc():String(a);Gb.test(a)||(a="about:invalid#zClosurez");return g.Eb(a)};
g.Ib=function(a,b){if(a instanceof g.Cb)return a;a="object"==typeof a&&a.Md?a.Tc():String(a);if(b&&/^data:/i.test(a)){var c=g.Fb(a);if(c.Tc()==a)return c}Gb.test(a)||(a="about:invalid#zClosurez");return g.Eb(a)};
g.Eb=function(a){return new g.Cb(Ab,a)};
g.Kb=function(){this.C="";this.F=g.Jb};
g.Lb=function(a){var b=new g.Kb;b.C=a;return b};
g.Nb=function(){this.C="";this.F=g.Mb};
g.Ob=function(a){var b=new g.Nb;b.C=a;return b};
g.Qb=function(a){return g.wb(g.Pb,a)};
g.Rb=function(){return g.Qb("Trident")||g.Qb("MSIE")};
Sb=function(){return g.Qb("Firefox")||g.Qb("FxiOS")};
g.Ub=function(){return g.Qb("Safari")&&!(Tb()||g.Qb("Coast")||g.Qb("Opera")||g.Qb("Edge")||g.Qb("Edg/")||g.Qb("OPR")||Sb()||g.Qb("Silk")||g.Qb("Android"))};
Tb=function(){return(g.Qb("Chrome")||g.Qb("CriOS"))&&!g.Qb("Edge")};
g.Vb=function(){return g.Qb("Android")&&!(Tb()||Sb()||g.Qb("Opera")||g.Qb("Silk"))};
g.Xb=function(){this.F="";this.G=Wb;this.D=null};
g.Zb=function(a){return g.Yb(a).toString()};
g.Yb=function(a){if(a instanceof g.Xb&&a.constructor===g.Xb&&a.G===Wb)return a.F;g.za(a);return"type_error:SafeHtml"};
g.ac=function(a){if(a instanceof g.Xb)return a;var b="object"==typeof a,c=null;b&&a.Vk&&(c=a.C());return g.$b(g.vb(b&&a.Md?a.Tc():String(a)),c)};
g.$b=function(a,b){return g.bc(a,b)};
g.bc=function(a,b){var c=new g.Xb;c.F=a;c.D=b;return c};
g.cc=function(a,b){var c=b instanceof g.Cb?b:g.Ib(b);a.href=g.Db(c)};
g.dc=function(a,b){var c=b instanceof g.Cb?b:g.Ib(b);a.href=g.Db(c)};
g.ec=function(a){return encodeURIComponent(String(a))};
g.fc=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.gc=function(a){return a=g.vb(a,void 0)};
g.ic=function(a,b,c){a=void 0!==c?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return(0,g.hc)("0",Math.max(0,b-c))+a};
g.jc=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.kc=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.lc=function(a){return a?decodeURI(a):a};
g.nc=function(a,b){return b.match(g.mc)[a]||null};
g.oc=function(a){return g.lc(g.nc(3,a))};
g.pc=function(a){a=a.match(g.mc);return g.kc(null,null,null,null,a[5],a[6],a[7])};
g.qc=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.rc=function(a,b){return b?a?a+"&"+b:b:a};
g.sc=function(a,b){if(!b)return a;var c=g.qc(a);c[1]=g.rc(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.tc=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)g.tc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.ec(b)))};
g.uc=function(a){var b=[],c;for(c in a)g.tc(c,a[c],b);return b.join("&")};
g.vc=function(a,b){var c=g.uc(b);return g.sc(a,c)};
g.wc=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.yc=function(a,b){var c=a.search(g.xc),d=g.wc(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.fc(a.substr(d,e-d))};
zc=function(){return g.Qb("iPhone")&&!g.Qb("iPod")&&!g.Qb("iPad")};
g.Ac=function(){return zc()||g.Qb("iPad")||g.Qb("iPod")};
g.Bc=function(a){g.Bc[" "](a);return a};
g.Cc=function(a,b){try{return g.Bc(a[b]),!0}catch(c){}return!1};
maa=function(a,b){var c=laa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
Dc=function(){var a=g.q.document;return a?a.documentMode:void 0};
g.Fc=function(a){return maa(a,function(){return 0<=g.zb(g.Ec,a)})};
g.Hc=function(a){return Number(g.Gc)>=a};
g.Kc=function(a,b){g.Ca(a);void 0===b&&(b=0);Ic();for(var c=Jc[b],d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,p=m?a[e+2]:0,r=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|p>>6;p&=63;m||(p=64,k||(l=64));d.push(c[r],c[f],c[l]||"",c[p]||"")}return d.join("")};
naa=function(){var a=65.25;a%3?a=Math.floor(a):g.wb("=.","k")&&(a=g.wb("=.","1")?a-2:a-1);var b=new Uint8Array(a),c=0;g.Lc("BPr83OIQ0ehMqbAUQWSaFHZOJeRvvXddR5EONgwwQcHR6FRe6G43LgD36pJq1IuGN10mmMv-V7IKSIZludF9G1k",function(d){b[c++]=d});
return b.subarray(0,c)};
g.Lc=function(a,b){function c(m){for(;d<a.length;){var p=a.charAt(d++),r=Mc[p];if(null!=r)return r;if(!g.ob(p))throw Error("Unknown base64 encoding at char: "+p);}return m}
Ic();for(var d=0;;){var e=c(-1),f=c(0),k=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=k&&(b(f<<4&240|k>>2),64!=l&&b(k<<6&192|l))}};
Ic=function(){if(!Mc){Mc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Jc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Mc[f]&&(Mc[f]=e)}}}};
g.Nc=function(a){this.C=0;this.F=a};
g.Oc=function(){};
Pc=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Aa(c))for(var d=0;d<c.length;d++)c[d]&&c[d].Yc();else c&&c.Yc()}};
Qc=function(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)};
Rc=function(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Rc(d):d)}return b}if(g.Sc&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Rc(d):d);return b};
g.Uc=function(a){var b=g.u("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.q.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==
b&&(b=a.constructor&&a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:g.Tc(a.constructor))+'"':"Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})};
g.Tc=function(a){if(Vc[a])return Vc[a];a=String(a);if(!Vc[a]){var b=/function\s+([^\(]+)/m.exec(a);Vc[a]=b?b[1]:"[Anonymous]"}return Vc[a]};
g.Wc=function(a){this.C=a||{cookie:""}};
g.Xc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.xb)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Yc=function(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31};
g.bd=function(a,b,c){"number"===typeof a?(this.date=Zc(a,b||0,c||1),$c(this,c||1)):g.Ea(a)?(this.date=Zc(a.getFullYear(),a.getMonth(),a.getDate()),$c(this,a.getDate())):(this.date=new Date((0,g.ad)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),$c(this,a))};
Zc=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
$c=function(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.date.setUTCHours(a.date.getUTCHours()+c)}};
g.cd=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
g.dd=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.ed=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.fd=function(a,b){this.width=a;this.height=b};
g.A=function(a){return g.gd(document,a)};
g.gd=function(a,b){return"string"===typeof b?a.getElementById(b):b};
g.hd=function(a){return g.gd(document,a)};
g.jd=function(a,b){g.Ta(b,function(c,d){c&&"object"==typeof c&&c.Md&&(c=c.Tc());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:id.hasOwnProperty(d)?a.setAttribute(id[d],c):g.mb(d,"aria-")||g.mb(d,"data-")?a.setAttribute(d,c):a[d]=c})};
g.ld=function(a){return g.kd(a||window)};
g.kd=function(a){a=a.document;a=g.md(a)?a.documentElement:a.body;return new g.fd(a.clientWidth,a.clientHeight)};
g.od=function(a,b,c){return g.nd(document,arguments)};
g.nd=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.gc(d.name),'"');if(d.type){c.push(' type="',g.gc(d.type),'"');var e={};g.cb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=g.qd(a,c);d&&("string"===typeof d?c.className=d:Array.isArray(d)?c.className=d.join(" "):g.jd(c,d));2<b.length&&g.rd(a,c,b,2);return c};
g.rd=function(a,b,c,d){function e(k){k&&b.appendChild("string"===typeof k?a.createTextNode(k):k)}
for(;d<c.length;d++){var f=c[d];!g.Ca(f)||g.Ea(f)&&0<f.nodeType?e(f):(0,g.B)(paa(f)?g.Qa(f):f,e)}};
g.sd=function(a){return g.qd(document,a)};
g.qd=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.md=function(a){return"CSS1Compat"==a.compatMode};
g.td=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.ud=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.vd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.Ea(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Da(a))return"function"==typeof a.item}return!1};
g.wd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.xd=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.yd=function(a){var b=[];g.xd(a,function(c){b.push(c)});
return b};
raa=function(){var a=g.sd("IFRAME"),b={};(0,g.B)(qaa(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
g.Ad=function(){this.C=function(a){return void 0===a?!1:a};
this.F=function(a){return void 0===a?0:a}};
g.Bd=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Cd=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Dd=function(a,b){a.style.width=g.Cd(b,!0)};
g.Ed=function(a,b){return typeof a===b};
g.Gd=function(){var a=void 0===a?g.Fd:a;try{return a.history.length}catch(b){return 0}};
g.Hd=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Gd();a.u_java=!!g.Fd.navigator&&!g.Ed(g.Fd.navigator.javaEnabled,"unknown")&&!!g.Fd.navigator.javaEnabled&&g.Fd.navigator.javaEnabled();g.Fd.screen&&(a.u_h=g.Fd.screen.height,a.u_w=g.Fd.screen.width,a.u_ah=g.Fd.screen.availHeight,a.u_aw=g.Fd.screen.availWidth,a.u_cd=g.Fd.screen.colorDepth);g.Fd.navigator&&g.Fd.navigator.plugins&&(a.u_nplug=g.Fd.navigator.plugins.length);g.Fd.navigator&&g.Fd.navigator.mimeTypes&&(a.u_nmime=g.Fd.navigator.mimeTypes.length)};
g.Id=function(a,b){try{return(void 0===b?0:b)?(new g.fd(a.innerWidth,a.innerHeight)).round():g.ld(a).round()}catch(c){return new g.fd(-12245933,-12245933)}};
g.Jd=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var f=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,k]};
Kd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
saa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;r=p=0}
function b(y){for(var z=k,D=0;64>D;D+=4)z[D/4]=y[D]<<24|y[D+1]<<16|y[D+2]<<8|y[D+3];for(D=16;80>D;D++)y=z[D-3]^z[D-8]^z[D-14]^z[D-16],z[D]=(y<<1|y>>>31)&4294967295;y=e[0];var O=e[1],T=e[2],ra=e[3],Ba=e[4];for(D=0;80>D;D++){if(40>D)if(20>D){var Ia=ra^O&(T^ra);var zd=1518500249}else Ia=O^T^ra,zd=1859775393;else 60>D?(Ia=O&T|ra&(O|T),zd=2400959708):(Ia=O^T^ra,zd=3395469782);Ia=((y<<5|y>>>27)&4294967295)+Ia+Ba+zd+z[D]&4294967295;Ba=ra;ra=T;T=(O<<30|O>>>2)&4294967295;O=y;y=Ia}e[0]=e[0]+y&4294967295;e[1]=
e[1]+O&4294967295;e[2]=e[2]+T&4294967295;e[3]=e[3]+ra&4294967295;e[4]=e[4]+Ba&4294967295}
function c(y,z){if("string"===typeof y){y=unescape(encodeURIComponent(y));for(var D=[],O=0,T=y.length;O<T;++O)D.push(y.charCodeAt(O));y=D}z||(z=y.length);D=0;if(0==p)for(;D+64<z;)b(y.slice(D,D+64)),D+=64,r+=64;for(;D<z;)if(f[p++]=y[D++],r++,64==p)for(p=0,b(f);D+64<z;)b(y.slice(D,D+64)),D+=64,r+=64}
function d(){var y=[],z=8*r;56>p?c(l,56-p):c(l,64-(p-56));for(var D=63;56<=D;D--)f[D]=z&255,z>>>=8;b(f);for(D=z=0;5>D;D++)for(var O=24;0<=O;O-=8)y[z++]=e[D]>>O&255;return y}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var p,r;a();return{reset:a,update:c,digest:d,Fu:function(){for(var y=d(),z="",D=0;D<y.length;D++)z+="0123456789ABCDEF".charAt(Math.floor(y[D]/16))+"0123456789ABCDEF".charAt(y[D]%16);return z}}};
taa=function(a,b,c){var d=[],e=[];if(1==(g.Aa(c)?2:1))return e=[b,a],(0,g.B)(d,function(l){e.push(l)}),Ld(e.join(" "));
var f=[],k=[];(0,g.B)(c,function(l){k.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Na(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.B)(d,function(l){e.push(l)});
a=Ld(e.join(" "));a=[c,a];g.Na(k)||a.push(k.join(""));return a.join("_")};
Ld=function(a){var b=saa();b.update(a);return b.Fu().toLowerCase()};
g.Md=function(a){var b=Kd(String(g.q.location.href)),c;(c=g.q.__SAPISID||g.q.__APISID||g.q.__OVERRIDE_SID)?c=!0:(c=new g.Wc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.q.__SAPISID:g.q.__APISID,c||(c=new g.Wc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(g.q.location.href);return d&&c&&b?[b,taa(Kd(d),c,a||
null)].join(" "):null}return null};
Nd=function(){this.C=[];this.F=-1};
uaa=function(a){-1==a.F&&(a.F=(0,g.Od)(a.C,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.F};
g.Pd=function(){var a=new Nd;g.q.SVGElement&&g.q.document.createElementNS&&a.set(0);var b=raa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.q.crypto&&g.q.crypto.subtle&&a.set(3);g.q.TextDecoder&&g.q.TextEncoder&&a.set(4);return uaa(a)};
g.Qd=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
g.C=function(){this.Qc=this.Qc;this.xf=this.xf};
g.Td=function(a,b){g.Rd(a,g.w(g.Sd,b))};
g.Rd=function(a,b){a.Qc?b():(a.xf||(a.xf=[]),a.xf.push(b))};
g.Sd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Ud=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1};
g.Vd=function(a,b){g.Ud.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.yc=null;a&&this.init(a,b)};
g.Xd=function(a){return!(!a||!a[Wd])};
waa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.bh=e;this.key=++vaa;this.mg=this.Rh=!1};
Yd=function(a){a.mg=!0;a.listener=null;a.C=null;a.src=null;a.bh=null};
g.Zd=function(a){this.src=a;this.listeners={};this.C=0};
$d=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Pa(a.listeners[c],b);d&&(Yd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
ae=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.mg&&f.listener==b&&f.capture==!!c&&f.bh==d)return e}return-1};
g.ce=function(a,b,c,d,e){if(d&&d.once)return g.be(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.ce(a,b[f],c,d,e);return null}c=g.de(c);return g.Xd(a)?a.O(b,c,g.Ea(d)?!!d.capture:!!d,e):ee(a,b,c,!1,d,e)};
ee=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ea(e)?!!e.capture:!!e,l=g.fe(a);l||(a[ge]=l=new g.Zd(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=xaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)yaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(he(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ie++;return c};
xaa=function(){var a=zaa,b=je?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.be=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.be(a,b[f],c,d,e);return null}c=g.de(c);return g.Xd(a)?a.Ae(b,c,g.Ea(d)?!!d.capture:!!d,e):ee(a,b,c,!0,d,e)};
g.ke=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)g.ke(a,b[f],c,d,e);else d=g.Ea(d)?!!d.capture:!!d,c=g.de(c),g.Xd(a)?a.Va(b,c,d,e):a&&(a=g.fe(a))&&(b=a.We(b,c,d,e))&&g.le(b)};
g.le=function(a){if("number"===typeof a||!a||a.mg)return!1;var b=a.src;if(g.Xd(b))return $d(b.vd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(he(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ie--;(c=g.fe(b))?($d(c,a),0==c.C&&(c.src=null,b[ge]=null)):Yd(a);return!0};
he=function(a){return a in me?me[a]:me[a]="on"+a};
oe=function(a,b,c,d){var e=!0;if(a=g.fe(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.mg&&(f=ne(f,d),e=e&&!1!==f)}return e};
ne=function(a,b){var c=a.listener,d=a.bh||a.src;a.Rh&&g.le(a);return c.call(d,b)};
zaa=function(a,b){if(a.mg)return!0;if(!je){var c=b||g.u("window.event"),d=new g.Vd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=oe(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=oe(c[k],f,!1,d),e=e&&l}return e}return ne(a,new g.Vd(b,
this))};
g.fe=function(a){a=a[ge];return a instanceof g.Zd?a:null};
g.de=function(a){if(g.Da(a))return a;a[pe]||(a[pe]=function(b){return a.handleEvent(b)});
return a[pe]};
g.qe=function(){g.C.call(this);this.vd=new g.Zd(this);this.Ot=this;this.Sl=null};
re=function(a,b,c,d){b=a.vd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.mg&&k.capture==c){var l=k.listener,m=k.bh||k.src;k.Rh&&$d(a.vd,k);e=!1!==l.call(m,d)&&e}}return e&&!d.defaultPrevented};
se=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
te=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
ue=function(a){g.q.setTimeout(function(){throw a;},0)};
Aaa=function(){var a=g.q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Qb("Presto")&&(a=function(){var e=g.sd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var k="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.v)(function(m){if(("*"==l||m.origin==l)&&m.data==k)this.port1.onmessage()},
this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,l)}}});
if("undefined"!==typeof a&&!g.Rb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.rn;c.rn=null;e()}};
return function(e){d.next={rn:e};d=d.next;b.port2.postMessage(0)}}return function(e){g.q.setTimeout(e,0)}};
ve=function(){this.F=this.C=null};
we=function(){this.next=this.scope=this.lc=null};
Ae=function(a,b){xe||Baa();ye||(xe(),ye=!0);ze.add(a,b)};
Baa=function(){if(g.q.Promise&&g.q.Promise.resolve){var a=g.q.Promise.resolve(void 0);xe=function(){a.then(Be)}}else xe=function(){var b=Be;
!g.Da(g.q.setImmediate)||g.q.Window&&g.q.Window.prototype&&!g.Qb("Edge")&&g.q.Window.prototype.setImmediate==g.q.setImmediate?(Ce||(Ce=Aaa()),Ce(b)):g.q.setImmediate(b)}};
Be=function(){for(var a;a=ze.remove();){try{a.lc.call(a.scope)}catch(b){ue(b)}te(De,a)}ye=!1};
g.Ee=function(a){a.prototype.$goog_Thenable=!0};
g.Fe=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.He=function(a,b){this.C=0;this.M=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.xa)try{var c=this;a.call(b,function(d){g.Ge(c,2,d)},function(d){g.Ge(c,3,d)})}catch(d){g.Ge(this,3,d)}};
Ie=function(){this.next=this.context=this.onRejected=this.D=this.C=null;this.F=!1};
g.Ke=function(a,b,c){var d=Je.get();d.D=a;d.onRejected=b;d.context=c;return d};
g.Me=function(a,b,c){Le(a,b,c,null)||Ae(g.w(b,a))};
g.Ne=function(a){return new g.He(function(b,c){var d=a.length,e=[];if(d)for(var f=function(p,r){d--;e[p]=r;0==d&&b(e)},k=function(p){c(p)},l=0,m;l<a.length;l++)m=a[l],g.Me(m,g.w(f,l),k);
else b(e)})};
g.Pe=function(a,b){return Oe(a,null,b,void 0)};
Qe=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.F||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Qe(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Re(c),Se(c,e,3,b)))}a.D=null}else g.Ge(a,3,b)};
g.Ue=function(a,b){a.F||2!=a.C&&3!=a.C||Te(a);a.G?a.G.next=b:a.F=b;a.G=b};
Oe=function(a,b,c,d){var e=g.Ke(null,null,null);e.C=new g.He(function(f,k){e.D=b?function(l){try{var m=b.call(d,l);f(m)}catch(p){k(p)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof g.Ve?k(l):f(m)}catch(p){k(p)}}:k});
e.C.D=a;g.Ue(a,e);return e.C};
g.Ge=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Le(c,a.Y,a.N,a)||(a.M=c,a.C=b,a.D=null,Te(a),3!=b||c instanceof g.Ve||Caa(a,c)))};
Le=function(a,b,c,d){if(a instanceof g.He)return g.Ue(a,g.Ke(b||g.xa,c||null,d)),!0;if(g.Fe(a))return a.then(b,c,d),!0;if(g.Ea(a))try{var e=a.then;if(g.Da(e))return Daa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Daa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function k(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Te=function(a){a.L||(a.L=!0,Ae(a.J,a))};
Re=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Se=function(a,b,c,d){if(3==c&&b.onRejected&&!b.F)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,We(b,c,d);else try{b.F?b.D.call(b.context):We(b,c,d)}catch(e){Xe.call(null,e)}te(Je,b)};
We=function(a,b,c){2==b?a.D.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Caa=function(a,b){a.H=!0;Ae(function(){a.H&&Xe.call(null,b)})};
g.Ve=function(a){g.Ha.call(this,a)};
g.Ye=function(a,b,c){if(g.Da(a))c&&(a=(0,g.v)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.v)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.q.setTimeout(a,b||0)};
g.Ze=function(a){g.q.clearTimeout(a)};
g.$e=function(a,b,c){g.C.call(this);this.C=a;this.D=b||0;this.F=c;this.Pb=(0,g.v)(this.Bk,this)};
Eaa=function(){this.F=-1};
af=function(){this.F=64;this.C=[];this.L=[];this.M=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
bf=function(a,b,c){c||(c=0);var d=a.M;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var p=1518500249}else f=c^k^l,p=1859775393;else 60>e?(f=c&k|l&(c|k),p=2400959708):
(f=c^k^l,p=3395469782);f=(b<<5|b>>>27)+f+m+p+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.cf=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
g.df=function(a){return a.classList?a.classList:g.cf(a).match(/\S+/g)||[]};
g.E=function(a,b){return a.classList?a.classList.contains(b):g.Ma(g.df(a),b)};
g.ef=function(){};
gf=function(a){if(a instanceof g.ef)return a;if("function"==typeof a.ad)return a.ad(!1);if(g.Ca(a)){var b=0,c=new g.ef;c.next=function(){for(;;){if(b>=a.length)throw g.ff;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.hf=function(a,b,c){if(g.Ca(a))try{(0,g.B)(a,b,c)}catch(d){if(d!==g.ff)throw d;}else{a=gf(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.ff)throw d;}}};
Faa=function(a){if(g.Ca(a))return g.Qa(a);a=gf(a);var b=[];g.hf(a,function(c){b.push(c)});
return b};
g.kf=function(a,b){this.F={};this.C=[];this.Ie=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.jf(this,a)};
Gaa=function(a,b){return a===b};
g.mf=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.lf(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.lf(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.jf=function(a,b){if(b instanceof g.kf)for(var c=b.xc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.lf=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.of=function(a){var b=[];nf(new Haa,a,b);return b.join("")};
Haa=function(){};
nf=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),nf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),pf(d,c),c.push(":"),nf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":pf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
pf=function(a,b){b.push('"',a.replace(Iaa,function(c){var d=qf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),qf[c]=d);return d}),'"')};
g.rf=function(a){g.C.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.sf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ka(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.od(b)}};
Jaa=function(a,b,c){Ae(function(){a.apply(b,c)})};
g.tf=function(a){this.C=a};
uf=function(a){this.C=a};
vf=function(a){this.data=a};
wf=function(a){return void 0===a||a instanceof vf?a:new vf(a)};
g.xf=function(a){this.C=a};
g.Af=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.ad)()||!!b&&b>(0,g.ad)()};
Kaa=function(){};
Bf=function(){};
g.Cf=function(a){this.C=a};
g.Df=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
Gf=function(a,b){this.F=a;this.C=null;if(g.Ef&&!g.Hc(9)){Ff||(Ff=new g.kf);this.C=Ff.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),Ff.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
Hf=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Laa[b]})};
If=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
Jf=function(a){return a.C.XMLDocument.documentElement};
Kf=function(a,b){this.F=a;this.C=b+"::"};
g.Lf=function(a){var b=new g.Df;return b.isAvailable()?a?new Kf(b,a):b:null};
Mf=function(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])};
g.Of=function(a){Mf(g.Nf,arguments)};
Pf=function(a,b){var c=g.F(a,void 0);c?c.push(b):g.Of(a,[b])};
g.F=function(a,b){return a in g.Nf?g.Nf[a]:b};
Qf=function(a){var b=g.Nf.EXPERIMENT_FLAGS;return b?b[a]:void 0};
g.Sf=function(a){a=Rf(a);return"string"===typeof a&&"false"===a?!1:!!a};
g.Tf=function(a,b){var c=Rf(a);return void 0===c&&void 0!==b?b:Number(c||0)};
Uf=function(a){a=Rf(a);return void 0!==a?String(a):""};
Rf=function(a){var b=g.F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:g.F("EXPERIMENT_FLAGS",{})[a]};
g.Vf=function(){var a=[],b=g.F("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=g.F("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a};
g.G=function(a,b){return a?a.dataset?a.dataset[g.Wf(b)]:a.getAttribute("data-"+b):null};
g.Wf=function(a){return Xf[a]||(Xf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
Naa=function(a){Maa.forEach(function(b){return b(a)})};
Zf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Yf(b),Naa(b)}}:a};
g.Yf=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=g.F("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),g.Of("ERRORS",b))};
g.$f=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=g.F("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),g.Of("ERRORS",b))};
Oaa=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,k=Qf("log_window_onerror_fraction");if(k&&Math.random()<k)f=!0;else{k=document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?k=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,k=a.message,b=a.filename,c=a.lineno,d=a.colno):(k="Unknown error",b="Unknown file",c=0),a=Error(k),a.name="UnhandledWindowError",e=a,e.message=k,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?g.Yf(e):g.$f(e))};
g.ag=function(a,b){g.Da(a)&&(a=Zf(a));return window.setTimeout(a,b)};
g.bg=function(a,b){g.Da(a)&&(a=Zf(a));return window.setInterval(a,b)};
g.cg=function(a){window.clearTimeout(a)};
g.dg=function(a){window.clearInterval(a)};
g.ig=function(a,b,c){var d=eg();if(d){var e=d.subscribe(a,function(){var f=arguments;var k=function(){fg[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{gg[a]?k():g.ag(k,0)}catch(l){g.Yf(l)}},c);
fg[e]=!0;hg[a]||(hg[a]=[]);hg[a].push(e);return e}return 0};
g.jg=function(a){var b=eg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),(0,g.B)(a,function(c){b.unsubscribeByKey(c);delete fg[c]}))};
g.H=function(a,b){var c=eg();return c?c.publish.apply(c,arguments):!1};
g.kg=function(a,b){gg[a]=!0;var c=eg();c=c?c.publish.apply(c,arguments):!1;gg[a]=!1;return c};
eg=function(){return g.u("ytPubsubPubsubInstance")};
g.mg=function(a,b){var c=g.lg(a);spf.script.load(a,c,b)};
g.ng=function(a){a=g.lg(a);spf.script.unload(a)};
g.lg=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Paa,""),b=b.replace(Qaa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.wg=function(){g.cg(g.pg);g.cg(g.qg);g.qg=0;rg&&rg.isReady()?(sg(g.tg),"log_event"in ug&&sg(Object.entries(ug.log_event)),g.tg.clear(),delete ug.log_event):g.vg()};
g.vg=function(){g.Sf("web_gel_timeout_cap")&&!g.qg&&(g.qg=g.ag(g.wg,6E4));g.cg(g.pg);var a=g.Tf("web_gel_debounce_ms",1E4);a=g.F("LOGGING_BATCH_TIMEOUT",g.xg||a);g.Sf("shorten_initial_gel_batch_timeout")&&yg&&(a=Raa);g.pg=g.ag(g.wg,a)};
sg=function(a){var b=rg,c=Math.round((0,g.zg)());a=g.da(a);for(var d=a.next();!d.done;d=a.next()){var e=g.da(d.value);d=e.next().value;var f=e.next().value;e=g.ab(g.Ag(b));e.events=f;(f=Bg[d])&&Saa(e,d,f);delete Bg[d];Taa(e,c);g.Cg(b,"log_event",e,{retry:!0,onSuccess:function(){Dg=Math.round((0,g.zg)()-c)}});
yg=!1}};
Taa=function(a,b){a.requestTimeMs=String(b);g.Sf("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=g.F("EVENT_ID",void 0);if(c){var d=g.F("BATCH_CLIENT_COUNTER",void 0)||0;!d&&g.Sf("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Eg/2));d++;d>Eg&&(d=1);g.Of("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Fg&&Dg&&g.Sf("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Fg,roundtripMs:String(Dg)});
Fg=c;Dg=0}};
Saa=function(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]};
g.Rg=function(){if(g.Sf("use_typescript_transport"))g.wg();else if(g.cg(g.Gg),g.cg(g.Hg),g.Hg=0,!g.Wa(g.Ig)){for(var a in g.Ig){var b=Jg[a];if(b&&b.isReady()){var c=void 0,d=a,e=Uaa[d],f=Math.round((0,g.zg)());for(c in g.Ig[d]){var k=g.ab(g.Ag(b));k[e]=Kg(d,c);var l=Lg[c];if(l)a:{var m=k,p=c;if(l.videoId)var r="VIDEO";else if(l.playlistId)r="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=
[{token:p,scope:r}]}delete Lg[c];l=k;l.requestTimeMs=f;g.Sf("unsplit_gel_payloads_in_logs")&&(l.unsplitGelPayloadsInLogs=!0);if(r=g.F("EVENT_ID",void 0))m=g.F("BATCH_CLIENT_COUNTER",void 0)||0,!m&&g.Sf("web_client_counter_random_seed")&&(m=Math.floor(Math.random()*Mg/2)),m++,m>Mg&&(m=1),g.Of("BATCH_CLIENT_COUNTER",m),r={serializedEventId:r,clientCounter:m},l.serializedClientEventId=r,Ng&&Og&&g.Sf("log_gel_rtt_web")&&(l.previousBatchInfo={serializedClientEventId:Ng,roundtripMs:Og}),Ng=r,Og=0;g.Cg(b,
d,k,{retry:Vaa.has(d),onSuccess:g.w(Waa,(0,g.zg)())})}delete g.Ig[a];Pg=!1}}g.Wa(g.Ig)||g.Qg()}};
g.Qg=function(){g.Sf("web_gel_timeout_cap")&&!g.Hg&&(g.Hg=g.ag(g.Rg,6E4));g.cg(g.Gg);var a=g.Tf("web_gel_debounce_ms",1E4);a=g.F("LOGGING_BATCH_TIMEOUT",g.Sg||a);g.Sf("shorten_initial_gel_batch_timeout")&&Pg&&(a=Xaa);g.Gg=g.ag(g.Rg,a)};
Kg=function(a,b){b=void 0===b?"":b;g.Ig[a]=g.Ig[a]||{};g.Ig[a][b]=g.Ig[a][b]||[];return g.Ig[a][b]};
Waa=function(a){Og=Math.round((0,g.zg)()-a)};
g.Ug=function(a){var b=a.__yt_uid_key;b||(b=Tg(),a.__yt_uid_key=b);return b};
g.Vg=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Yaa+"VisibilityState";if(b in a)return a[b]};
g.Xg=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Zaa||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}}catch(e){}};
Yg=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.Zg=function(a){void 0===a.C&&Yg(a);return a.C};
g.$g=function(a){void 0===a.F&&Yg(a);return a.F};
g.bh=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Va(ah,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,k=g.Ea(e[4])&&g.Ea(d)&&g.Za(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.I=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.bh(a,b,c,d);if(e)return e;e=++ch.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(l){l=new g.Xg(l);if(!g.wd(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new g.Xg(l);
l.currentTarget=a;return c.call(a,l)};
k=Zf(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),dh()||"boolean"===typeof d?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);ah[e]=[a,b,c,k,d];return e};
g.eh=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.B)(a,function(b){if(b in ah){var c=ah[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?dh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ah[b]}}))};
g.fh=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.I(a,b,function(){g.eh(e);c.apply(a,arguments)},d)};
g.gh=function(a){for(var b in ah)ah[b][0]==a&&g.eh(b)};
g.hh=function(a){this.Pb=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.I(window,"mousemove",(0,g.v)(this.Y,this));this.N=g.bg((0,g.v)(this.M,this),25)};
$aa=function(){};
g.jh=function(a,b){return ih(a,0,b)};
g.kh=function(a,b){return ih(a,1,b)};
g.mh=function(a){for(var b=0,c=a.length;b<c;b++)g.lh(a[b])};
nh=function(){};
g.oh=function(){return!!g.u("yt.scheduler.instance")};
ih=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.ag(a,c||0)};
g.lh=function(a){if(!isNaN(a)){var b=g.u("yt.scheduler.instance.cancelJob");b?b(a):g.cg(a)}};
g.rh=function(a){var b=void 0===a?{}:a;a=void 0===b.qy?!0:b.qy;b=void 0===b.ZF?!1:b.ZF;if(null==g.u("_lact",window)){var c=parseInt(g.F("LACT"),10);c=isFinite(c)?(0,g.ad)()-Math.max(c,0):-1;g.t("_lact",c,window);g.t("_fact",c,window);-1==c&&g.ph();g.I(document,"keydown",g.ph);g.I(document,"keyup",g.ph);g.I(document,"mousedown",g.ph);g.I(document,"mouseup",g.ph);a&&(b?g.I(window,"touchmove",function(){qh("touchmove",200)},{passive:!0}):(g.I(window,"resize",function(){qh("resize",200)}),g.I(window,
"scroll",function(){qh("scroll",200)})));
new g.hh(function(){qh("mouse",100)});
g.I(document,"touchstart",g.ph,{passive:!0});g.I(document,"touchend",g.ph,{passive:!0})}};
qh=function(a,b){uh[a]||(uh[a]=!0,g.kh(function(){g.ph();uh[a]=!1},b))};
g.ph=function(){null==g.u("_lact",window)&&g.rh();var a=(0,g.ad)();g.t("_lact",a,window);-1==g.u("_fact",window)&&g.t("_fact",a,window);(a=g.u("ytglobal.ytUtilActivityCallback_"))&&a()};
g.vh=function(){var a=g.u("_lact",window);return null==a?-1:Math.max((0,g.ad)()-a,0)};
g.Bh=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||(0,g.zg)());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:g.vh())};g.Sf("log_sequence_info_on_gel_web")&&d.Ee&&(a=e.context,b=d.Ee,wh[b]=b in wh?wh[b]+1:0,a.sequence={index:wh[b],groupKey:b},d.Su&&delete wh[d.Ee]);d=d.Qf;g.Sf("use_typescript_transport")?(a="",d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Bg[d.token]=a,a=d.token),d=g.tg.get(a)||[],g.tg.set(a,d),d.push(e),
c&&(rg=new c),c=g.Tf("web_logging_max_batch")||100,e=(0,g.zg)(),d.length>=c?g.wg():e-g.xh>=g.yh&&(g.vg(),g.xh=e)):(d?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Lg[d.token]=a,d=Kg("log_event",d.token)):d=Kg("log_event"),d.push(e),c&&(Jg.log_event=new c),c=g.Tf("web_logging_max_batch")||100,e=(0,g.zg)(),d.length>=c?g.Rg():e-g.zh>=g.Ah&&(g.Qg(),g.zh=e))};
Ch=function(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=g.fc(e[0]||""),k=g.fc(e[1]||"");f in b?g.Aa(b[f])?g.Ra(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(m){if("q"!=e[0]){var l=Error("Error decoding URL component");l.params={key:e[0],value:e[1]};g.Yf(l)}}}return b};
g.Dh=function(a){var b=[];g.Ta(a,function(c,d){var e=g.ec(d),f;g.Aa(c)?f=c:f=[c];(0,g.B)(f,function(k){""==k?b.push(e):b.push(e+"="+g.ec(k))})});
return b.join("&")};
g.Eh=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return Ch(a)};
g.Gh=function(a,b){return Fh(a,b||{},!0)};
g.Hh=function(a,b){return Fh(a,b||{},!1)};
Fh=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Eh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return g.vc(a,e)+d};
g.Ih=function(a){if(!b)var b=window.location.href;var c=g.nc(1,a),d=g.oc(a);c&&d?(a=a.match(g.mc),b=b.match(g.mc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.oc(b)==d&&(Number(g.nc(4,b))||null)==(Number(g.nc(4,a))||null):!0;return a};
Mh=function(a){var b=g.Jh;a=void 0===a?g.u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.Kh(b),g.Lh(b));b.ca_type="image";a&&(b.bid=a);return b};
g.Kh=function(a){var b={};b.dt=g.Nh;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Hd(b);return b};
g.Lh=function(a){var b=g.Jd(a.C),c=g.Id(a.C.top),d={};return d.bc=g.Pd(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.Qd(a.F),d.wgl=!!g.Fd.WebGLRenderingContext,d};
aba=function(){if(!Oh)return null;var a=Oh();return"open"in a?a:null};
g.Qh=function(a){switch(g.Ph(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Ph=function(a){return a&&"status"in a?a.status:-1};
bba=function(a,b){b=void 0===b?{}:b;var c=g.Ih(a),d=g.Sf("web_ajax_ignore_global_headers_if_set"),e;for(e in Rh){var f=g.F(Rh[e]);!f||!c&&!Sh(a,e)||d&&void 0!==b[e]||(b[e]=f)}if(c||Sh(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Sh(a,"X-YouTube-Time-Zone"))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||Sh(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=g.Dh(Mh(void 0));
return b};
dba=function(a){var b=window.location.search,c=g.oc(a),d=g.lc(g.nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.Eh(b),f={};(0,g.B)(cba,function(k){e[k]&&(f[k]=e[k])});
return g.Hh(a,f)};
Sh=function(a,b){var c=g.F("CORS_HEADER_WHITELIST")||{},d=g.oc(a);return d?(c=c[d])?g.Ma(c,b):!1:!0};
eba=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Th(a,b);var d=Uh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&g.cg(f);var l=k.ok,m=function(p){p=p||{};var r=b.context||g.q;l?b.onSuccess&&b.onSuccess.call(r,p,k):b.onError&&b.onError.call(r,p,k);b.Xa&&b.Xa.call(r,p,k)};
"JSON"==(b.format||"JSON")&&(l||400<=k.status&&500>k.status)?k.json().then(m,function(){m(null)}):m(null)}});
b.wq&&0<b.timeout&&(f=g.ag(function(){e||(e=!0,g.cg(f),b.wq.call(b.context||g.q))},b.timeout))}else g.J(a,b)};
g.J=function(a,b){var c=b.format||"JSON";a=Th(a,b);var d=Uh(a,b),e=!1,f,k=Vh(a,function(l){if(!e){e=!0;f&&g.cg(f);var m=g.Qh(l),p=null,r=400<=l.status&&500>l.status,y=500<=l.status&&600>l.status;if(m||r||y)p=fba(c,l,b.ob);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(p&&p.return_code,10);break a;case "RAW":m=!0;break a}m=!!p}p=p||{};r=b.context||g.q;m?b.onSuccess&&b.onSuccess.call(r,l,p):b.onError&&b.onError.call(r,l,p);b.Xa&&b.Xa.call(r,l,p)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.Nc&&0<b.timeout&&(f=g.ag(function(){e||(e=!0,k.abort(),g.cg(f),b.Nc.call(b.context||g.q,k))},b.timeout));
return k};
Th=function(a,b){b.sR&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.F("XSRF_FIELD_NAME",void 0),d=b.Ta;d&&(d[c]&&delete d[c],a=g.Gh(a,d));return a};
Uh=function(a,b){var c=g.F("XSRF_FIELD_NAME",void 0),d=g.F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ia,k=g.F("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Wu||g.oc(a)&&!b.withCredentials&&g.oc(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=g.Eh(e),g.cb(e,f),e=b.yr&&"JSON"==b.yr?JSON.stringify(e):g.uc(e));f=e||f&&!g.Wa(f);!Wh&&f&&"POST"!=b.method&&(Wh=!0,g.Yf(Error("AJAX request with postData should use POST")));
return e};
fba=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Xh(b):null)d={},(0,g.B)(b.getElementsByTagName("*"),function(e){d[e.tagName]=g.Yh(e)})}c&&Zh(d);
return d};
Zh=function(a){if(g.Ea(a))for(var b in a)"html_content"==b||g.nb(b,"_html")?a[b]=g.bc(a[b],null):Zh(a[b])};
Xh=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Yh=function(a){var b="";(0,g.B)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.$h=function(a,b){b.method="POST";b.ia||(b.ia={});return g.J(a,b)};
Vh=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Zf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=aba();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.Sf("debug_forward_web_query_parameters")&&(a=dba(a));m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=bba(a,e))for(var p in e)m.setRequestHeader(p,e[p]),"content-type"==p.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m};
gba=function(){for(var a={},b=g.da(Object.entries(g.Eh(g.F("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=g.da(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a};
ai=function(){return"INNERTUBE_API_KEY"in g.Nf&&"INNERTUBE_API_VERSION"in g.Nf};
bi=function(){return{innertubeApiKey:g.F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.F("INNERTUBE_API_VERSION",void 0),sy:g.F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ty:g.F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),vy:g.F("INNERTUBE_CONTEXT_HL",void 0),uy:g.F("INNERTUBE_CONTEXT_GL",void 0),wy:g.F("INNERTUBE_HOST_OVERRIDE",void 0)||"",xy:!!g.F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}};
ci=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.lR||g.F("AUTHORIZATION"))||(a?b="Bearer "+g.u("gapi.auth.getToken")().jR:b=g.Md([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.F("SESSION_INDEX",0),g.Sf("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.F("DELEGATED_SESSION_ID")));return d};
di=function(a){a=Object.assign({},a);delete a.Authorization;var b=g.Md();if(b){var c=new af;c.update(g.F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=g.Kc(c.digest(),3)}return a};
g.fi=function(a,b,c,d,e){g.ei.set(""+a,b,{Al:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})};
g.gi=function(a,b){return g.ei.get(""+a,b)};
g.hi=function(a,b,c){g.ei.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.ii=function(a){var b;(b=g.Lf(a))||(a=new Gf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.xf(a):null;this.F=document.domain||window.location.hostname};
hba=function(a,b,c,d){if(d)return null;d=ji.get("nextId",!0)||1;var e=ji.get("requests",!0)||{};e[d]={method:a,request:b,authState:di(c),requestTime:Math.round((0,g.zg)())};ji.set("nextId",d+1,86400,!0);ji.set("requests",e,86400,!0);return d};
ki=function(a){var b=ji.get("requests",!0)||{};delete b[a];ji.set("requests",b,86400,!0)};
li=function(a){var b=ji.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round((0,g.zg)())-d.requestTime)){var e=d.authState,f=di(ci(!1));g.Za(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round((0,g.zg)())),g.Cg(a,d.method,e,{}));delete b[c]}}ji.set("requests",b,86400,!0)}};
g.mi=function(a){var b=this;this.C=null;a?this.C=a:ai()&&(this.C=bi());g.jh(function(){li(b)},5E3)};
g.Ag=function(a){a=a.C||bi();a={client:{hl:a.vy,gl:a.uy,clientName:a.ty,clientVersion:a.innertubeContextClientVersion,configInfo:a.sy}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=g.F("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=g.Vf();0<b.length&&(a.request={internalExperimentFlags:b});g.F("DELEGATED_SESSION_ID")&&!g.Sf("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.F("DELEGATED_SESSION_ID")});g.Sf("enable_device_forwarding_from_xhr_client")&&
(a.client=Object.assign(a.client,gba()));return{context:a}};
g.Cg=function(a,b,c,d){!g.F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&g.$f(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,yr:"JSON",Nc:function(){d.Nc()},
wq:d.Nc,onSuccess:function(z,D){if(d.onSuccess)d.onSuccess(D)},
cj:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,D){if(d.onError)d.onError(D)},
uq:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.wy;k&&(f=k);k=a.C.xy||!1;var l=ci(k,f,d);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=g.Gh(""+f+("/youtubei/"+a.C.innertubeApiVersion+"/"+b),{alt:"json",key:a.C.innertubeApiKey}),p;if(d.retry&&g.Sf("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(p=hba(b,c,l,k))){var r=e.onSuccess,y=e.cj;e.onSuccess=function(z,D){ki(p);r(z,D)};
c.cj=function(z,D){ki(p);y(z,D)}}try{g.Sf("use_fetch_for_op_xhr")?eba(m,e):g.$h(m,e)}catch(z){if("InvalidAccessError"==z)p&&(ki(p),p=0),g.$f(Error("An extension is blocking network request."));
else throw z;}p&&g.jh(function(){li(a)},5E3)};
g.ni=function(a,b,c){c=void 0===c?{}:c;var d=g.mi;g.F("ytLoggingEventsDefaultDisabled",!1)&&g.mi==g.mi&&(d=null);g.Bh(a,b,d,c)};
g.oi=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(g.ea(c))};
g.qi=function(a){g.pi(a,"WARNING")};
g.pi=function(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||g.F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;d=window&&window.yterr||!1;if(a&&d&&!(5<=ri)&&(g.Sf("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),
window.console.log(d,a)),0!==a.C)){d=a.F;e=a.columnNumber;if(a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){f=a.args[l];var m="params."+l;k+=m.length;if(f)if(Array.isArray(f))for(var p=c,r=0;r<f.length&&!(f[r]&&(k+=si(r,f[r],m,p),500<k));r++);else if("object"===typeof f)for(p in p=void 0,r=c,f){if(f[p]&&(k+=si(p,f[p],m,r),500<k))break}else c[m]=String(JSON.stringify(f)).substring(0,500),k+=c[m].length;else c[m]=String(JSON.stringify(f)).substring(0,500),k+=c[m].length;if(500<=k)break}else if(a.hasOwnProperty("params"))if(f=
a.params,"object"===typeof a.params)for(l in m=0,f){if(f[l]&&(k="params."+l,p=String(JSON.stringify(f[l])).substr(0,500),c[k]=p,m+=k.length+p.length,500<m))break}else c.params=String(JSON.stringify(f)).substr(0,500);a=g.Uc(a);(d=d||a.stack)||(d="Not available");f={stackTrace:d};a.fileName&&(f.filename=a.fileName);l=a.lineNumber.toString();isNaN(l)||!e||isNaN(e)||(f.lineNumber=Number(l),f.columnNumber=Number(e),l=l+":"+e);window.yterr&&g.Da(window.yterr)&&(a.params=c,window.yterr(a));if(!(ti.has(a.message)||
0<=d.indexOf("/YouTubeCenter.js")||0<=d.indexOf("/mytube.js"))){if(g.Sf("kevlar_gel_error_routing")){m=b;e={level:"ERROR_LEVEL_UNKNOWN",message:a.message};"ERROR"===m?e.level="ERROR_LEVEL_ERROR":"WARNING"===m&&(e.level="ERROR_LEVEL_WARNNING");f={isObfuscated:!0,browserStackInfo:f};m={pageUrl:window.location.href,kvPairs:[]};k=g.da(Object.keys(c));for(p=k.next();!p.done;p=k.next())p=p.value,m.kvPairs.push({key:"client."+p,value:String(c[p])});g.ni("clientError",{errorMetadata:m,stackTrace:f,logMessage:e});
g.Rg()}b={Ta:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:l,level:b,"client.name":c.name},ia:{url:g.F("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};c.version&&(b["client.version"]=c.version);if(b.ia){d&&(b.ia.stack=d);d=g.da(Object.keys(c));for(e=d.next();!e.done;e=d.next())e=e.value,b.ia["client."+e]=c[e];if(c=g.F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=g.da(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,b.ia[e]=c[e];c=g.F("SERVER_NAME",
void 0);d=g.F("SERVER_VERSION",void 0);c&&d&&(b.ia["server.name"]=c,b.ia["server.version"]=d)}g.J(g.F("ECATCHER_REPORT_HOST","")+"/error_204",b);ti.add(a.message);ri++}}};
si=function(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length};
g.ui=function(){this.F=!1;this.C=null};
vi=function(a,b,c,d){if(d)try{a.C=new window.botguard.bg(b,c?function(){return c(b)}:g.xa)}catch(e){g.qi(e)}else{try{a.C=new window.botguard.bg(b)}catch(e){g.qi(e)}c&&c(b)}};
g.wi=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
iba=function(){return parseInt(g.F("DCLKSTAT",0),10)};
jba=function(){return g.xi.Nd()};
kba=function(a){a=void 0===a?{}:a;return g.wi(g.xi,a)};
yi=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.zi=function(a){var b=new yi;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.Ai=function(a){var b=new yi;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
Bi=function(){g.C.call(this);this.C=[]};
Ci=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.$a(b);this.assets=a.assets||{};this.attrs=a.attrs||g.$a(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Di=function(a){a instanceof Ci||(a=new Ci(a));return a};
Fi=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.ad)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ei)for(a=1,b=0;b<Ei.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ei.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Hi=function(a){a&&g.Bh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Gi,clientScreenNonce:a},g.mi)};
g.Ii=function(a){this.C=a};
g.Ji=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,void 0!==a.C.veCounter&&(b.veCounter=a.C.veCounter),void 0!==a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.Ji(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
Ki=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
Li=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
Mi=function(a){return g.F(Li(void 0===a?0:a),void 0)};
g.Ni=function(){var a=Mi(0),b;a?b=new g.Ii({veType:a,youtubeData:void 0}):b=null;return b};
Oi=function(){var a=g.F("csn-to-ctt-auth-info");a||(a={},g.Of("csn-to-ctt-auth-info",a));return a};
g.Pi=function(a){a=void 0===a?0:a;var b=g.F(Ki(a));if(!b&&!g.F("USE_CSN_FALLBACK",!0))return null;b||0!=a||(g.Sf("kevlar_client_side_screens")||g.Sf("c3_client_side_screens")?b="UNDEFINED_CSN":b=g.F("EVENT_ID"));return b?b:null};
lba=function(a,b,c){var d=Oi();(c=g.Pi(c))&&delete d[c];b&&(d[a]=b)};
g.Qi=function(a){return Oi()[a]};
g.Ri=function(a,b,c,d){c=void 0===c?0:c;if(a!==g.F(Ki(c))||b!==g.F(Li(c)))if(lba(a,d,c),g.Of(Ki(c),a),g.Of(Li(c),b),0==c||g.Sf("web_screen_associated_all_layers"))b=function(){setTimeout(function(){g.Hi(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()};
g.Si=function(a,b){this.version=a;this.args=b};
g.Ti=function(a,b){this.topic=a;this.C=b};
g.Vi=function(a,b){var c=Ui();c&&c.publish.call(c,a.toString(),a,b)};
g.bj=function(a,b,c){var d=Ui();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,k){var l=g.u("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(Zi[e])try{if(k&&a instanceof g.Ti&&a!=f)try{var m=a.C,p=k;if(!p.args||!p.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.Ie){var r=new m;m.Ie=r.version}var y=m.Ie}catch(z){}if(!y||p.version!=y)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=Reflect.construct(m,
g.Qa(p.args))}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+z.message,z;}b.call(c||window,k)}catch(z){g.Yf(z)}},$i[a.toString()]?g.oh()?g.kh(l):g.ag(l,0):l())});
Zi[e]=!0;aj[a.toString()]||(aj[a.toString()]=[]);aj[a.toString()].push(e);return e};
oba=function(){var a=mba,b=g.bj(nba,function(c){a.apply(void 0,arguments);g.cj(b)},void 0);
return b};
g.cj=function(a){var b=Ui();b&&("number"===typeof a&&(a=[a]),(0,g.B)(a,function(c){b.unsubscribeByKey(c);delete Zi[c]}))};
Ui=function(){return g.u("ytPubsub2Pubsub2Instance")};
dj=function(a){g.Si.call(this,1,arguments);this.csn=a};
g.gj=function(a,b,c){ej.push({payloadName:a,payload:b,options:c});fj||(fj=oba())};
mba=function(a){if(ej){for(var b=g.da(ej),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,g.Bh(c.payloadName,c.payload,null,c.options));ej.length=0}fj=0};
g.hj=function(a,b,c){var d=g.Sf("use_default_events_client")?void 0:g.mi;(0,g.B)(b,function(e){var f=c;f=void 0===f?!1:f;e={csn:a,ve:g.Ji(e),eventType:f?16:8};f={Qf:g.Qi(a),Ee:a,Su:f};"UNDEFINED_CSN"==a?g.gj("visualElementHidden",e,f):d?g.Bh("visualElementHidden",e,d,f):g.ni("visualElementHidden",e,f)})};
ij=function(){var a=g.Ni(),b=g.Pi();b&&a&&g.hj(b,[a],!0)};
g.mj=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(jj==a)return;jj=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.vh()>b)&&"visible"==g.Vg()){b=-1;g.kj&&(b=Math.round((0,g.zg)()-g.kj));var c=String;var d=g.u("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.ad)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:Gi,index:String(lj),lastEventDeltaMs:String(b),trigger:a};g.Bh("foregroundHeartbeat",
a,g.mi);g.t("_fact",-1,window);lj++;g.kj=(0,g.zg)()}};
g.nj=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Zf(d):null;this.H=e?Zf(e):null;this.G=[];this.C=this.F=0};
g.oj=function(a){g.lh(a.F);a.F=g.kh((0,g.v)(a.init,a))};
g.rj=function(a){a.name in pj&&qj(a.name);pj[a.name]={reqs:[],disable:(0,g.v)(a.disable,a)};(0,g.B)(a.deps,function(b){if(!(b in pj))throw Error("Module "+b+" required by "+a.name);pj[b].reqs.push(a.name)});
a.enable()};
qj=function(a){if(a in pj){var b=pj[a];(0,g.B)(b.reqs,function(c){qj(c)});
try{b.disable()}catch(c){}delete pj[a]}};
tj=function(a){Mf(g.sj,arguments)};
g.uj=function(a){return a in g.sj};
vj=function(a){Mf(g.sj,arguments)};
g.wj=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Pb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Db(g.Hb(a)),"about:invalid#zClosurez"===a?a="":(a=g.Zb(g.ac(a)),a=g.ec(g.of(a))),g.ob(a)||(a=g.od("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.vd(a).body.appendChild(a))):e?Vh(a,b,"POST",e,d):g.F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Vh(a,b,"GET","",d):pba(a,b)||qba(a,b))};
pba=function(a,b){if(!Qf("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(Qf("use_sonic_js_library_for_v4_support")){a:{try{var c=new haa({url:a,xH:!0});if(c.H?c.D&&c.C&&c.C[1]||c.G:c.F){var d=g.lc(g.nc(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==g.yc(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=g.lc(g.nc(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==g.yc(a,"ae")||"1"!==g.yc(a,"act"))return!1;return xj(a)?(b&&b(),!0):!1};
xj=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
qba=function(a,b){var c=new Image,d=""+rba++;yj[d]=c;c.onload=c.onerror=function(){b&&yj[d]&&b();delete yj[d]};
c.src=a};
g.zj=function(a,b){a=a||"";var c=a.match(sba);spf.style.load(a,c?c[1]:"",b)};
Cj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Aj(a)||c.some(function(e){return!Aj(e)}))throw Error("Only objects may be merged.");
c=g.da(c);for(d=c.next();!d.done;d=c.next())Bj(a,d.value);return a};
Bj=function(a,b){for(var c in b)if(Aj(b[c])){if(c in a&&!Aj(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Bj(a[c],b[c])}else if(Dj(b[c])){if(c in a&&!Dj(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ej(a[c],b[c])}else a[c]=b[c];return a};
Ej=function(a,b){for(var c=g.da(b),d=c.next();!d.done;d=c.next())d=d.value,Aj(d)?a.push(Bj({},d)):Dj(d)?a.push(Ej([],d)):a.push(d);return a};
Aj=function(a){return"object"===typeof a&&!Array.isArray(a)};
Dj=function(a){return"object"===typeof a&&Array.isArray(a)};
g.Fj=function(a,b,c){var d=void 0===d?!0:d;var e=g.F("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=g.oc(window.location.href);f&&e.push(f);f=g.oc(a);if(g.Ma(e,f)||!f&&g.mb(a,"/"))if(g.Sf("autoescape_tempdata_url")&&(e=document.createElement("a"),g.cc(e,a),a=e.href),a&&(a=g.pc(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.Pi()},b)),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+g.jc(a).toString(36),b=b?g.uc(b):"",g.fi(d,b,c||5))):(c=b,b="ST-"+g.jc(a).toString(36),
c=c?g.uc(c):"",g.fi(b,c,5))};
g.Gj=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.dc(d.location,g.vc(a,b)+c)};
g.Hj=function(a,b){b&&g.Fj(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.Gj(a)};
g.Ij=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.F("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Fj(a,b);if(c)return!1;g.Hj(a);return!0};
Mj=function(a,b,c,d){g.C.call(this);var e=this;this.L=this.Ya=a;this.ha=b;this.M=!1;this.api={};this.na=this.N=null;this.Y=new g.rf;g.Td(this,this.Y);this.G={};this.la=this.qa=this.F=this.nb=this.C=null;this.T=!1;this.H=this.J=null;this.ib={};this.Pd=["onReady"];this.kb=null;this.sb=NaN;this.W={};this.D=d;Jj(this);this.Lh("WATCH_LATER_VIDEO_ADDED",this.wD.bind(this));this.Lh("WATCH_LATER_VIDEO_REMOVED",this.xD.bind(this));this.Lh("onAdAnnounce",this.Nt.bind(this));this.Hb=new Bi(this);g.Td(this,this.Hb);
this.aa=0;c?this.aa=g.ag(function(){e.loadNewVideoConfig(c)},0):d&&(Kj(this),Lj(this))};
Kj=function(a){var b;a.D?b=a.D.rootElementId:b=a.C.attrs.id;a.F=b||a.F;"video-player"==a.F&&(a.F=a.ha,a.C.attrs.id=a.ha);a.L.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F)};
Nj=function(a){a.C&&!a.C.loaded&&(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
Qj=function(a){var b=!0,c=Oj(a);c&&a.C&&(a=Pj(a),b=g.G(c,"version")===a);return b&&!!g.u("yt.player.Application.create")};
Lj=function(a){if(!a.pb()&&!a.T){var b=Qj(a);if(b&&"html5"==(Oj(a)?"html5":null))a.la="html5",a.M||Rj(a);else if(Sj(a),a.la="html5",b&&a.H)a.Ya.appendChild(a.H),Rj(a);else{a.C&&(a.C.loaded=!0);var c=!1;a.J=function(){c=!0;if(a.D)var d=a.D.serializedExperimentFlags;else a.C&&a.C.args&&(d=a.C.args.fflags);d="true"==Ch(d||"").player_bootstrap_method?g.u("yt.player.Application.createAlternate")||g.u("yt.player.Application.create"):g.u("yt.player.Application.create");var e=a.C?a.C.clone():void 0;d(a.Ya,
e,a.D);Rj(a)};
a.T=!0;b?a.J():(g.mg(Pj(a),a.J),(b=a.D?a.D.cssUrl:a.C.assets.css)&&g.zj(b),Tj(a)&&!c&&g.t("yt.player.Application.create",null,void 0))}}};
Oj=function(a){var b=g.A(a.F);!b&&a.L&&a.L.querySelector&&(b=a.L.querySelector("#"+a.F));return b};
Rj=function(a){if(!a.pb()){var b=Oj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.T=!1,b.isNotServable&&a.C&&b.isNotServable(a.C.args.video_id)||tba(a)):a.sb=g.ag(function(){Rj(a)},50)}};
tba=function(a){Jj(a);a.M=!0;var b=Oj(a);b.addEventListener&&(a.N=Uj(a,b,"addEventListener"));b.removeEventListener&&(a.na=Uj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Uj(a,b,e))}for(var f in a.G)a.N(f,a.G[f]);Nj(a);a.qa&&a.qa(a.api);a.Y.oa("onReady",a.api)};
Uj=function(a,b,c){var d=b[c];return function(){try{return a.kb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.kb=e,g.$f(e))}}};
Jj=function(a){a.M=!1;if(a.na)for(var b in a.G)a.na(b,a.G[b]);for(var c in a.W)g.cg(parseInt(c,10));a.W={};a.N=null;a.na=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Lh.bind(a);a.api.removeEventListener=a.fG.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Av.bind(a);a.api.getPlayerType=a.Gv.bind(a);a.api.getCurrentVideoConfig=a.wv.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.rz.bind(a)};
Vj=function(a,b){var c=b;if("string"==typeof b){if(a.ib[b])return a.ib[b];c=function(){var d=g.u(b);d&&d.apply(g.q,arguments)};
a.ib[b]=c}return c?c:null};
uba=function(a,b){var c="ytPlayer"+b+a.ha;a.G[b]=c;g.q[c]=function(d){var e=g.ag(function(){a.pb()||(a.Y.oa(b,d),g.Xa(a.W,String(e)))},0);
g.Ya(a.W,String(e),!0)};
return c};
Sj=function(a){a.cancel();Jj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=Oj(a);b&&(Qj(a)||!Tj(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null));g.td(a.Ya)};
Tj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
Pj=function(a){return a.D?a.D.jsUrl:a.C.assets.js};
g.Yj=function(a,b){var c=void 0===c?!0:c;a="string"===typeof a?g.hd(a):a;var d=g.Wj+"_"+g.Ga(a),e=g.Xj[d];if(e&&c)return b&&b.args&&b.args.fflags&&b.args.fflags.includes("web_player_remove_playerproxy=true")?e.api.loadVideoByPlayerVars(b.args||null):e.loadNewVideoConfig(b),e.api;e=new Mj(a,d,b,void 0);g.Xj[d]=e;g.H("player-added",e.api);g.Rd(e,g.w(vba,e));return e.api};
vba=function(a){delete g.Xj[a.getId()]};
g.Zj=function(a){if(!a)return null;var b=g.Wj+"_"+g.Ga(a),c=g.Xj[b];c||(c=new Mj(a,b),g.Xj[b]=c);return c.api};
g.ak=function(a){return g.Zj(document.getElementById(a))};
g.ck=function(a,b){var c={};c.key=a;c.value=b;return bk().then(function(d){return new Promise(function(e,f){try{var k=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);k.onsuccess=function(){e()};
k.onerror=function(){f()}}catch(l){f(l)}})})};
g.dk=function(a){var b=new g.oi("Error accessing DB");return bk().then(function(c){return new Promise(function(d,e){try{var f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=function(){var k=f.result;d(k?k.value:null)};
f.onerror=function(){b.params={key:a,source:"onerror"};e(b)}}catch(k){b.params={key:a,
thrownError:String(k)},e(b)}})},function(){return null})};
bk=function(){return ek?Promise.resolve(ek):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))ek=d,a(ek);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),bk()};
c.onupgradeneeded=wba})};
wba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
fk=function(a,b){g.Si.call(this,1,arguments)};
gk=function(a,b){g.Si.call(this,1,arguments)};
xba=function(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}};
ik=function(a){var b=hk(a);if(b.aft)return b.aft;a=g.F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
lk=function(){var a;if(g.Sf("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===jk||void 0===jk?void 0:jk.getEntriesByType)||void 0===a?void 0:a.call(jk,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=kk(e.requestStart),e.responseEnd=kk(e.responseEnd),e.redirectStart=kk(e.redirectStart),e.redirectEnd=kk(e.redirectEnd),e.domainLookupEnd=kk(e.domainLookupEnd),e.connectStart=kk(e.connectStart),
e.connectEnd=kk(e.connectEnd),e.responseStart=kk(e.responseStart),e.secureConnectionStart=kk(e.secureConnectionStart),e.domainLookupStart=kk(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=jk.timing}else a=jk.timing;return a};
mk=function(){return g.Sf("csi_use_time_origin")&&jk.timeOrigin?Math.floor(jk.timeOrigin):jk.timing.navigationStart};
kk=function(a){return Math.round(mk()+a)};
nk=function(a){g.t("ytglobal.timingready_",a,void 0)};
ok=function(a){return!!g.u("yt.timing."+(a||"")+"pingSent_")};
pk=function(a,b){g.t("yt.timing."+(b||"")+"pingSent_",a,void 0)};
rk=function(a){return g.u("ytcsi."+(a||"")+"data_")||qk(a)};
sk=function(a){a=rk(a);a.info||(a.info={});return a.info};
hk=function(a){a=rk(a);a.tick||(a.tick={});return a.tick};
tk=function(a){var b=rk(a).nonce;b||(b=Fi(),rk(a).nonce=b);return b};
qk=function(a){var b={tick:{},info:{}};g.t("ytcsi."+(a||"")+"data_",b,void 0);return b};
vk=function(a){var b=hk(a||""),c=ik(a);c&&!uk&&(g.Vi(yba,new fk(Math.round(c-b._start),a)),uk=!0)};
zba=function(){if(jk.getEntriesByType){var a=jk.getEntriesByType("paint");if(a=g.Ka(a,function(b){return"first-paint"===b.name}))return kk(a.startTime)}a=jk.timing;
return a.vz?Math.max(0,a.vz):0};
wk=function(){var a=g.u("ytcsi.debug");a||(a=[],g.t("ytcsi.debug",a,void 0),g.t("ytcsi.reference",{},void 0));return a};
yk=function(a){a=a||"";var b=xk();if(b[a])return b[a];var c=wk(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d};
xk=function(){var a=g.u("ytcsi.reference");if(a)return a;wk();return g.u("ytcsi.reference")};
zk=function(){this.C=0};
Ak=function(){zk.C||(zk.C=new zk);return zk.C};
Ck=function(a,b){Bk[b]=Bk[b]||{count:0};var c=Bk[b];c.count++;c.time=(0,g.zg)();a.C||(a.C=g.jh(function(){var d=(0,g.zg)(),e;for(e in Bk)Bk[e]&&6E4<d-Bk[e].time&&delete Bk[e];a&&(a.C=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new g.oi("CSI data exceeded logging limit with key",b),0===b.indexOf("info")?g.qi(c):g.pi(c)),!0):!1};
Dk=function(a){return!!g.F("FORCE_CSI_ON_GEL",!1)||g.Sf("csi_on_gel")||!!rk(a).useGel};
Fk=function(a,b,c){var d=Ek(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||(0,g.zg)();return Dk(c)?(yk(c||"").tick[a]=b||(0,g.zg)(),d=tk(c),"_start"===a?(a=Ak(),Ck(a,"baseline_"+d)||g.ni("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):Ak().tick(a,d,b),vk(c),!0):!1};
Ik=function(a,b,c){c=Ek(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a in Gk){if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}c=Gk[a];g.Ma(Aba,c)&&(b=!!b);a in Hk&&"string"===typeof b&&(b=Hk[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},k=0;k<b.length-1;k++){var l=b[k];f[l]={};f=f[l]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Cj({},d)}g.Ma(Bba,a)||g.qi(new g.oi("Unknown label logged with GEL CSI",a))};
Ek=function(a){a=rk(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel};
Jk=function(a){a=Ek(a);"gelInfos"in a||(a.gelInfos={});return a.gelInfos};
Kk=function(){qk(void 0);Cba();pk(!1,void 0);g.F("TIMING_ACTION")&&g.Of("PREVIOUS_ACTION",g.F("TIMING_ACTION"));g.Of("TIMING_ACTION","")};
Lk=function(a,b,c){null!==b&&(sk(c)[a]=b,Dk(c)?(a=Ik(a,b,c))&&Dk(c)&&(b=yk(c||""),Cj(b.info,a),Cj(Jk(c),a),c=tk(c),Ak().info(a,c)):yk(c||"").info[a]=b)};
g.Qk=function(a,b,c){var d=hk(c);if(g.Sf("use_first_tick")&&Mk(a,c))return d[a];b||"_"===a[0]||Ok(a,c);var e=b||(0,g.zg)();d[a]=e;Fk(a,b,c)||(g.Pk(!1,c),yk(c||"").tick[a]=b||(0,g.zg)());return d[a]};
Rk=function(a,b,c){if(Dk(c)){var d=Ek(c);if(d.gelSpans)d.gelSpans[a]=!0;else{var e={};d.gelSpans=(e[a]=!0,e)}a={spanName:a,spanLengthUsec:String(Math.round(1E3*b))};yk(c||"").span[String(a.spanName)]=a;b=Ek(c);"gelSpans"in b||(b.gelSpans={});Cj(b.gelSpans,a);c=tk(c);Ak().span(a,c)}};
Ok=function(a,b){jk.mark&&(g.mb(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),jk.mark(a))};
Mk=function(a,b){var c=hk(b);return a in c};
g.Pk=function(a,b){if(!ok(b)){var c=g.F((b||"")+"TIMING_ACTION",void 0),d=hk(b);if(g.u("ytglobal.timing"+(b||"")+"ready_")&&c&&Mk("_start")&&ik(b))if(vk(b),a||b)Sk(b);else{c=!0;var e=g.F("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Sk(b)}}};
Dba=function(){switch(g.Vg()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}};
Sk=function(a){if(!Dk(a)){var b=hk(a),c=sk(a),d=b._start,e=g.F("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:g.F((a||"")+"TIMING_ACTION",void 0)},k=c.srt;void 0!==b.srt&&delete c.srt;b.aft=ik(a);var l=hk(a),m=l.pbr,p=l.vc;l=l.pbs;m&&p&&l&&m<p&&p<l&&sk(a).yt_pvis&&"youtube"===e&&(Lk("yt_lt","hot_bg",a),e=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-e));for(var r in c)"_"!==r.charAt(0)&&(f[r]=c[r]);b.ps=(0,g.zg)();r={};e=[];for(var y in b)"_"!==y.charAt(0)&&(m=Math.round(b[y]-d),r[y]=m,e.push(y+"."+
m));f.rt=e.join(",");b=!!c.ap;g.Sf("debug_csi_data")&&(c=g.u("yt.timing.csiData"),c||(c=[],g.t("yt.timing.csiData",c,void 0)),c.push({page:location.href,time:new Date,args:f}));c="";for(var z in f)f.hasOwnProperty(z)&&(c+="&"+z+"="+f[z]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var D=void 0===D?"":D;xj(f,D)||g.wj(f,void 0,void 0,void 0,D)}else g.wj(f);pk(!0,a);g.Vi(Eba,new gk(r.aft+(Number(k)||0),a))}};
Fba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"===e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"===e&&(d=c.href);g.wa()&&c.setAttribute("nonce",g.wa());return d?(c=jk.getEntriesByName(d))&&c[0]&&(c=c[0],d=mk(),g.Qk("rsf_"+b,d+Math.round(c.fetchStart)),g.Qk("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(d=sk(void 0),e=Jk(void 0),"rc"in d||"rc"in e||Lk("rc",""),0===c.transferSize))?!0:!1:!1};
Tk=function(a){if(!g.Sf("log_deltas_killswitch")){var b,c,d,e;if(jk&&jk.timing){jk.timeOrigin&&jk.timing.navigationStart&&Rk("startTimeDelta",jk.timeOrigin-jk.timing.navigationStart,a);var f=null===(e=null===(d=null===(c=null===(b=jk.getEntriesByType)||void 0===b?void 0:b.call(jk,"navigation"))||void 0===c?void 0:c[0])||void 0===d?void 0:d.toJSON)||void 0===e?void 0:e.call(d);f&&f.responseEnd&&jk.timing.responseEnd&&Rk("responseEndDelta",f.responseEnd-jk.timing.responseEnd,a)}}b=lk();b.isPerformanceNavigationTiming&&
Lk("pnt",1,a);g.Qk("nreqs",b.requestStart,a);g.Qk("nress",b.responseStart,a);g.Qk("nrese",b.responseEnd,a);0<b.redirectEnd-b.redirectStart&&(g.Qk("nrs",b.redirectStart,a),g.Qk("nre",b.redirectEnd,a));0<b.domainLookupEnd-b.domainLookupStart&&(g.Qk("ndnss",b.domainLookupStart,a),g.Qk("ndnse",b.domainLookupEnd,a));0<b.connectEnd-b.connectStart&&(g.Qk("ntcps",b.connectStart,a),g.Qk("ntcpe",b.connectEnd,a));b.secureConnectionStart>=mk()&&0<b.connectEnd-b.secureConnectionStart&&(g.Qk("nstcps",b.secureConnectionStart,
a),g.Qk("ntcpe",b.connectEnd,a))};
Gba=function(){var a=window.location.protocol,b=jk.getEntriesByType("resource");b=(0,g.Uk)(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=(0,g.Od)(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.Qk("wffs",kk(b.startTime)),g.Qk("wffe",kk(b.responseEnd)))};
Hba=function(){var a=g.F("TIMING_ACTION",void 0),b=g.F("TIMING_AFT_KEYS");yk("").info.actionType=a;b&&g.Of("TIMING_AFT_KEYS",b);g.Of("TIMING_ACTION",a);a=g.F("TIMING_INFO",{});for(var c in a)Lk(c,a[c]);Lk("is_nav",1);(c=g.Pi())&&Lk("csn",c);(c=g.F("PREVIOUS_ACTION",void 0))&&!Dk()&&Lk("pa",c);c=sk();a=g.F("CLIENT_PROTOCOL");b=g.F("CLIENT_TRANSPORT");a&&Lk("p",a);b&&Lk("t",b);Lk("yt_vis",Dba());if("cold"==c.yt_lt){Lk("yt_lt","cold");a=lk();if(b=mk())g.Qk("srt",a.responseStart),1!=c.prerender&&Vk("n",
b);c=zba();0<c&&g.Qk("fpt",c);Tk();jk.getEntriesByType&&Gba();c=[];if(document.querySelector&&jk&&jk.getEntriesByName)for(var d in Wk)Wk.hasOwnProperty(d)&&(a=Wk[d],Fba(d,a)&&c.push(a));c.length&&Lk("rc",c.join(","))}Dk(void 0)&&(d={actionType:Xk[g.F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:Xk[g.F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"},c=tk(void 0),Ak().info(d,c));d=sk();a=hk();if("cold"===d.yt_lt&&(c=Ek(),b=c.gelTicks?c.gelTicks:c.gelTicks={},c=c.gelInfos?
c.gelInfos:c.gelInfos={},Dk())){for(var e in a)"tick_"+e in b||Fk(e,a[e]);e=Jk();a=tk();b={};for(var f in d)if(!("info_"+f in c)){var k=Ik(f,d[f]);k&&(Cj(e,k),Cj(b,k))}Ak().info(b,a)}nk(!0);g.Pk(!1)};
Vk=function(a,b){Lk("yt_sts",a,void 0);g.Qk("_start",b,void 0)};
Yk=function(a){if(!Dk(void 0)&&!ok(void 0)){var b=g.F("CSI_SERVICE_NAME","youtube");g.F("TIMING_ACTION",void 0)&&b&&(g.Qk("aa",void 0,void 0),Lk("ap",1,void 0),Lk("yt_fss",a,void 0),Sk(void 0))}};
Nba=function(){Zk++;var a=g.ld(),b=new g.Bd(0,0,a.width,a.height);Lk("vph",a.height,void 0);Lk("vpw",a.width,void 0);g.Qk("vpc",void 0,void 0);a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[];$k.start();for(var e=0;e<c;e++){var f=a[e];al(f,b)&&(f=Iba(f),f.then(Jba),d.push(f),bl.push(f))}g.Qk("vpcc",void 0,void 0);b=g.Ne(d).then(Kba);g.Pe(b,Lba);b.then(Mba);bl.push(b);return b};
Mba=function(){$k.stop()};
Lba=function(){g.Qk("vpr",void 0,void 0)};
al=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.Ug(c);if(e in cl)return!0;if(e in dl)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return dl[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return dl[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)cl[d[c]]=!0;return!0};
Kba=function(a){var b=g.ld();b=new g.Bd(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;al(a[d].py,b)&&c<f&&(c=f)}return c};
Iba=function(a){var b=Zk;return new g.He(function(c,d){var e={py:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){Zk!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},el.push(a))})};
Jba=function(a){$k.start();a=a.time;fl<a&&(fl=a,g.Qk("lim",a,void 0))};
Oba=function(){g.Qk("vptl",fl,void 0);g.Qk("vpl",fl,void 0)};
Pba=function(){bl.forEach(function(a){a.cancel()});
fl=bl.length=0;cl={};dl={};el.forEach(function(a){a.slt=void 0});
el.length=0};
g.gl=function(a,b){g.wj("/gen_204?"+a,b)};
Qba=function(a){if(null==a)return[];var b=[];g.Sf("ima_prevent_mpu_queries_on_cached_playback")&&0>hl.indexOf("ad3_module")&&hl.push("ad3_module");hl.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.il=function(){return g.E(g.A("page-container"),"remote-connected")};
Rba=function(){jl=g.bg(kl,5E3);var a=g.ll();a&&(a.addEventListener("onReady",kl),a.addEventListener("onStateChange",kl))};
ml=function(a){for(var b in g.Xj){var c=g.Xj[b];c&&c.cancel()}if(a=a||null)g.Yj("player-api",a),a=g.Di(a),a.loaded=!0;kl();g.t("ytplayer.config",a,void 0)};
g.ll=function(){return g.ak("player-api")};
kl=function(){var a=g.ll();if(a){var b=1==(a&&a.isReady()?a.getPlayerState():void 0),c="watch"==g.F("PAGE_NAME"),d=g.il();!b||c||d||a.pauseVideo()}};
ol=function(){g.Qk("ol",void 0,void 0);window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){g.Qk("cpt",void 0,void 0);g.H("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(g.Qk("cpt",void 0,void 0),g.H("on_cpt_tick",(new Date).getTime())):setTimeout(function(){g.Qk("cpt",void 0,void 0);
g.H("on_cpt_tick",(new Date).getTime())},0);
Sba();g.F("CSI_VIEWPORT")&&(nl=Nba(),nl.then(function(a){g.Qk("vpl",a,void 0);nl=null},function(){}))};
Sba=function(){pl("init");var a=g.F("PAGE_NAME",void 0);a&&pl("init-"+a)};
pl=function(a){g.oh()?ql.push(g.kh(g.w(g.kg,a),0)):g.H(a)};
rl=function(){g.mh(ql);ql.length=0;Pba();nl&&(nl.cancel(),nl=null);var a=g.F("PAGE_NAME",void 0);a&&g.kg("dispose-"+a);g.kg("dispose")};
Tba=function(){ol()};
Uba=function(){g.F("TIMING_REPORT_ON_UNLOAD")&&g.Pk(!0,void 0);Yk("u");g.mj("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");ij();g.Rg();rl();g.kg("pageunload")};
sl=function(){g.ph()};
tl=function(){window.yt_spf_loaded_history=!0;g.ph()};
yl=function(){ul=1;vl=wl=0;g.F("TIMING_REPORT_ON_UNLOAD")&&g.Pk(!0,void 0);if(g.Sf("warm_load_nav_start_web")){var a=xk();a[""]&&delete a[""];var b={timerName:"",info:{},tick:{},span:{}};wk().push(b);a[""]=b;Yk("n");Kk();nk(!1);g.Of("TIMING_AFT_KEYS",[]);Lk("yt_lt","warm");g.Of("TIMING_ACTION","");g.Of("TIMING_WAIT",[]);delete g.F("TIMING_INFO",{}).yt_lt;Vk("n")}else Yk("n"),Kk(),Vk("n");Ok("nr",void 0);xl(Vba);ij();g.kg("navigate")};
Cl=function(a){a=a.detail.part||a.detail.partial;g.Qk("nc"+wl,void 0,void 0);++wl;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.Qk("bc",void 0,void 0);else{var b=1==ul;ul=2;b?(xl(Wba),zl()):xl(Xba);if(b=a&&a.data&&a.data.swfcfg)Al(a.timing,b.args),Bl(b)}};
Dl=function(){g.Qk("np"+vl,void 0,void 0);++vl};
El=function(a){a=a.detail.response;var b=1==ul;ul=3;b&&(xl(Yba),zl());if(b=a.data&&a.data.swfcfg)Al(a.timing,b.args),Bl(b)};
Il=function(a){g.Qk("nd",void 0,void 0);a=a.detail.response;g.Fl=a.cacheKey;a=a.timing;var b=window._spf_state;g.Gl.navigationCount=b&&b["nav-counter"]||0;g.Sf("warm_load_nav_start_web")?g.Qk("srt",a.responseStart,void 0):(Vk("ne",a.responseStart),b=lk().responseStart,Lk("srt",Math.max(0,b-mk()),void 0));Lk("yt_lt",a.spfCached?"hot":"warm",void 0);g.Qk("pfs",a.fetchStart,void 0);g.Qk("pfrs",a.responseStart,void 0);"redirectStart"in a&&Tk(void 0);xl(Hl);document.getElementById("content").style.height=
"";ol();ul=0};
Jl=function(a){var b=a.detail.url,c=a.detail.err;c&&(a=a.detail.xhr,a&&!a.responseText||a&&a.responseText&&a.responseText.startsWith("<")||(c.params=b,g.$f(c)))};
Kl=function(a){g.gl(g.uc({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
$ba=function(){Zba();window.yt_spf_loaded_history=!1};
aca=function(){};
zl=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");rl();a=g.F("PREVIOUS_ACTION");for(var b in g.Nf)delete g.Nf[b];g.Of("PREVIOUS_ACTION",a);g.Of("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.t("ytplayer.config",null,void 0);(b=g.ll())&&b.stopVideo&&(b.stopVideo(),b.getLastError()&&(b=document.getElementById("movie_player"))&&b.stopVideo&&b.stopVideo());kl()};
Bl=function(a){Mk("cfg",void 0)||g.Qk("cfg",void 0,void 0);ml(a)};
xl=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.lh(Ll);Ll=g.kh(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.cg(Ml);Ml=g.ag(function(){b.className=e},c)},0)};
Zba=function(){var a=Hl[0]+50;g.cg(Ml);Ml=g.ag(function(){var b=document.getElementById("progress");b&&b.parentNode.removeChild(b)},a)};
Al=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Qba(b));g.F("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.gl(g.uc(c)))};
Ol=function(){return"granted"!=Notification.permission?Promise.resolve():Nl().then(function(a){return a?a.pushManager.getSubscription().then(function(b){if(b)return Promise.resolve();b={userVisibleOnly:!0,applicationServerKey:naa()};return a.pushManager.subscribe(b).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
Ql=function(){Pl({type:"notifications_register",data:g.F("ID_TOKEN")})};
Nl=function(){var a=Uf("service_worker_scope");try{return navigator.serviceWorker.getRegistration(a)}catch(b){return Promise.reject(b)}};
bca=function(){return Nl().then(Rl)["catch"](function(){return!1})};
Rl=function(a){return!(!a||!a.pushManager)};
Pl=function(a){return Nl().then(function(b){if(!b||!b.active)return Promise.reject("serviceworker.postMessage");b.active.postMessage(a);return Promise.resolve()})};
cca=function(){if(!g.F("LOGGED_IN",void 0))return Promise.resolve(!1);var a=Uf("service_worker_push_force_notification_prompt_tag");return a?g.dk("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
gca=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?bca():Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=Ol().then(function(){return Pl({type:"notifications_check_registration",data:g.F("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return dca(a)}).then(function(c){if(c)return eca(),fca().then(function(){})})["catch"](function(){})})};
dca=function(a){return g.F("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.F("LOGGED_IN",void 0)&&(void 0===a?0:a)?cca().then(function(b){if(b)return!0;b=[hca(),ica()];g.F("LOGGED_IN",void 0)||b.push(jca());return Promise.all(b).then(function(c){return c.every(function(d){return d})})}):Promise.resolve(!1)};
jca=function(){var a=g.Tf("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.dk("WatchCount").then(function(b){return b>=a})};
fca=function(){var a=arguments;g.Sf("service_worker_push_prompt_modal_enable")&&kca();return Notification.requestPermission().then(function(b){Sl();var c=document.getElementById("ticker");c&&(c.className=c.classList.remove("show"));if("granted"==b)return Ol().then(function(){g.ck("NotificationsDisabled",!1);Ql();return Promise.resolve(!0)});
"denied"==b&&Ql();return Promise.resolve(!1)})["catch"](function(){Sl();
return Promise.reject.apply(Promise,g.ea(a))})};
eca=function(){g.dk("PromptCount").then(function(a){return g.ck("PromptCount",a+1)}).then(function(){return g.ck("PromptTime",(0,g.ad)())}).then(function(){var a=Uf("service_worker_push_force_notification_prompt_tag");
if(a)return g.dk("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.ck("PromptTags",JSON.stringify(c))})})};
hca=function(){return-1==g.Tf("service_worker_push_prompt_cap")?Promise.resolve(!0):g.dk("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.Tf("service_worker_push_prompt_cap"))})};
ica=function(){var a=g.Tf("service_worker_push_prompt_delay_microseconds");return a?g.dk("PromptTime").then(function(b){return Promise.resolve((0,g.ad)()-a>(b||0))}):Promise.resolve(!0)};
lca=function(){Tl||Sl()};
Ul=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
kca=function(){var a=g.A("yt-push-prompt-modal-bg");Tl=g.Sf("service_worker_push_prompt_modal_ignore_click");a?Ul(a):(a=g.od("div",{id:"yt-push-prompt-modal-bg"}),Ul(a),document.body.appendChild(a),g.fh(document,"click",lca))};
Sl=function(){var a=g.A("yt-push-prompt-modal-bg");a&&g.ud(a)};
mca=function(a){return Rl(a)?gca():Promise.resolve()};
oca=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(nca)})};
qca=function(){var a="/sw.js",b=g.F("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);try{var c=Vl(a)["catch"](function(){return new Promise(function(){})});
g.Sf("service_worker_push_enabled")&&c.then(pca).then(mca)}catch(d){if("SecurityError"!=d.name)throw d;}};
pca=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
nca=function(a){a&&Vl("/sw.js?0",a.scope)};
Vl=function(a,b){return navigator.serviceWorker.register(a,{scope:b||Uf("service_worker_scope")||"/"})};
Wl=function(){g.nj.call(this,"www/base");this.D=0};
Xl=function(a){(a=a.detail.name)&&qj(a)};
g.aa=[];fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)Yl=Object.setPrototypeOf;else{var Zl;a:{var rca={a:!0},$l={};try{$l.__proto__=rca;Zl=$l.a;break a}catch(a){}Zl=!1}Yl=Zl?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=Yl,ia=aaa(this),ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ka("Promise",function(a){function b(k){this.F=0;this.D=void 0;this.C=[];var l=this.H();try{k(l.resolve,l.reject)}catch(m){l.reject(m)}}
function c(){this.C=null}
function d(k){return k instanceof b?k:new b(function(l){l(k)})}
if(a)return a;c.prototype.F=function(k){if(null==this.C){this.C=[];var l=this;this.D(function(){l.H()})}this.C.push(k)};
var e=ia.setTimeout;c.prototype.D=function(k){e(k,0)};
c.prototype.H=function(){for(;this.C&&this.C.length;){var k=this.C;this.C=[];for(var l=0;l<k.length;++l){var m=k[l];k[l]=null;try{m()}catch(p){this.G(p)}}}this.C=null};
c.prototype.G=function(k){this.D(function(){throw k;})};
b.prototype.H=function(){function k(p){return function(r){m||(m=!0,p.call(l,r))}}
var l=this,m=!1;return{resolve:k(this.N),reject:k(this.G)}};
b.prototype.N=function(k){if(k===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(k instanceof b)this.T(k);else{a:switch(typeof k){case "object":var l=null!=k;break a;case "function":l=!0;break a;default:l=!1}l?this.Y(k):this.L(k)}};
b.prototype.Y=function(k){var l=void 0;try{l=k.then}catch(m){this.G(m);return}"function"==typeof l?this.la(l,k):this.L(k)};
b.prototype.G=function(k){this.M(2,k)};
b.prototype.L=function(k){this.M(1,k)};
b.prototype.M=function(k,l){if(0!=this.F)throw Error("Cannot settle("+k+", "+l+"): Promise already settled in state"+this.F);this.F=k;this.D=l;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var k=0;k<this.C.length;++k)f.F(this.C[k]);this.C=null}};
var f=new c;b.prototype.T=function(k){var l=this.H();k.Sh(l.resolve,l.reject)};
b.prototype.la=function(k,l){var m=this.H();try{k.call(l,m.resolve,m.reject)}catch(p){m.reject(p)}};
b.prototype.then=function(k,l){function m(z,D){return"function"==typeof z?function(O){try{p(z(O))}catch(T){r(T)}}:D}
var p,r,y=new b(function(z,D){p=z;r=D});
this.Sh(m(k,p),m(l,r));return y};
b.prototype["catch"]=function(k){return this.then(void 0,k)};
b.prototype.Sh=function(k,l){function m(){switch(p.F){case 1:k(p.D);break;case 2:l(p.D);break;default:throw Error("Unexpected state: "+p.F);}}
var p=this;null==this.C?f.F(m):this.C.push(m)};
b.resolve=d;b.reject=function(k){return new b(function(l,m){m(k)})};
b.race=function(k){return new b(function(l,m){for(var p=g.da(k),r=p.next();!r.done;r=p.next())d(r.value).Sh(l,m)})};
b.all=function(k){var l=g.da(k),m=l.next();return m.done?d([]):new b(function(p,r){function y(O){return function(T){z[O]=T;D--;0==D&&p(z)}}
var z=[],D=0;do z.push(void 0),D++,d(m.value).Sh(y(z.length-1),r),m=l.next();while(!m.done)})};
return b});
ma.prototype.toString=function(){return this.C};
var baa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ma("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
ka("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ka("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),l=0;l<f&&k<e;)if(d[k++]!=b[l++])return!1;return l>=f}});
ka("String.prototype.repeat",function(a){return a?a:function(b){var c=qa(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
ka("Array.prototype.keys",function(a){return a?a:function(){return sa(this,function(b){return b})}});
ka("Array.prototype.values",function(a){return a?a:function(){return sa(this,function(b,c){return c})}});
var sca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||sca});
ka("WeakMap",function(a){function b(m){this.rb=(l+=Math.random()+1).toString();if(m){m=g.da(m);for(var p;!(p=m.next()).done;)p=p.value,this.set(p[0],p[1])}}
function c(){}
function d(m){var p=typeof m;return"object"===p&&null!==m||"function"===p}
function e(m){if(!ta(m,k)){var p=new c;ja(m,k,{value:p})}}
function f(m){var p=Object[m];p&&(Object[m]=function(r){if(r instanceof c)return r;e(r);return p(r)})}
if(function(){if(!a||!Object.seal)return!1;try{var m=Object.seal({}),p=Object.seal({}),r=new a([[m,2],[p,3]]);if(2!=r.get(m)||3!=r.get(p))return!1;r["delete"](m);r.set(p,4);return!r.has(m)&&4==r.get(p)}catch(y){return!1}}())return a;
var k="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var l=0;b.prototype.set=function(m,p){if(!d(m))throw Error("Invalid WeakMap key");e(m);if(!ta(m,k))throw Error("WeakMap key fail: "+m);m[k][this.rb]=p;return this};
b.prototype.get=function(m){return d(m)&&ta(m,k)?m[k][this.rb]:void 0};
b.prototype.has=function(m){return d(m)&&ta(m,k)&&ta(m[k],this.rb)};
b.prototype["delete"]=function(m){return d(m)&&ta(m,k)&&ta(m[k],this.rb)?delete m[k][this.rb]:!1};
return b});
ka("Map",function(a){function b(){var l={};return l.previous=l.next=l.head=l}
function c(l,m){var p=l.F;return na(function(){if(p){for(;p.head!=l.F;)p=p.previous;for(;p.next!=p.head;)return p=p.next,{done:!1,value:m(p)};p=null}return{done:!0,value:void 0}})}
function d(l,m){var p=m&&typeof m;"object"==p||"function"==p?f.has(m)?p=f.get(m):(p=""+ ++k,f.set(m,p)):p="p_"+m;var r=l.C[p];if(r&&ta(l.C,p))for(var y=0;y<r.length;y++){var z=r[y];if(m!==m&&z.key!==z.key||m===z.key)return{id:p,list:r,index:y,kc:z}}return{id:p,list:r,index:-1,kc:void 0}}
function e(l){this.C={};this.F=b();this.size=0;if(l){l=g.da(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var l=Object.seal({x:4}),m=new a(g.da([[l,"s"]]));if("s"!=m.get(l)||1!=m.size||m.get({x:4})||m.set({x:4},"t")!=m||2!=m.size)return!1;var p=m.entries(),r=p.next();if(r.done||r.value[0]!=l||"s"!=r.value[1])return!1;r=p.next();return r.done||4!=r.value[0].x||"t"!=r.value[1]||!p.next().done?!1:!0}catch(y){return!1}}())return a;
g.oa();var f=new WeakMap;e.prototype.set=function(l,m){l=0===l?0:l;var p=d(this,l);p.list||(p.list=this.C[p.id]=[]);p.kc?p.kc.value=m:(p.kc={next:this.F,previous:this.F.previous,head:this.F,key:l,value:m},p.list.push(p.kc),this.F.previous.next=p.kc,this.F.previous=p.kc,this.size++);return this};
e.prototype["delete"]=function(l){l=d(this,l);return l.kc&&l.list?(l.list.splice(l.index,1),l.list.length||delete this.C[l.id],l.kc.previous.next=l.kc.next,l.kc.next.previous=l.kc.previous,l.kc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(l){return!!d(this,l).kc};
e.prototype.get=function(l){return(l=d(this,l).kc)&&l.value};
e.prototype.entries=function(){return c(this,function(l){return[l.key,l.value]})};
e.prototype.keys=function(){return c(this,function(l){return l.key})};
e.prototype.values=function(){return c(this,function(l){return l.value})};
e.prototype.forEach=function(l,m){for(var p=this.entries(),r;!(r=p.next()).done;)r=r.value,l.call(m,r[1],r[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var k=0;return e});
ka("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push([d,b[d]]);return c}});
ka("Set",function(a){function b(c){this.C=new Map;if(c){c=g.da(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(g.da([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
g.oa();b.prototype.add=function(c){c=0===c?0:c;this.C.set(c,c);this.size=this.C.size;return this};
b.prototype["delete"]=function(c){c=this.C["delete"](c);this.size=this.C.size;return c};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(c){return this.C.has(c)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.C.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ka("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
ka("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var k=d[f];if(k===b||Object.is(k,b))return!0}return!1}});
ka("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==qa(this,b,"includes").indexOf(b,c||0)}});
var tca=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ka("Reflect.construct",function(){return tca});
ka("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(l){return l};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var k=0;!(f=b.next()).done;)e.push(c.call(d,f.value,k++))}else for(f=b.length,k=0;k<f;k++)e.push(c.call(d,b[k],k));return e}});
ka("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
ka("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
ka("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
ka("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push(b[d]);return c}});
g.am=g.am||{};g.q=this||self;caa=/^[\w+/_-]+[=]{0,2}$/;va=null;Fa="closure_uid_"+(1E9*Math.random()>>>0);daa=0;g.ad=Date.now||function(){return+new Date};g.x(g.Ha,Error);g.Ha.prototype.name="CustomError";g.La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.uca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Uk=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k="string"===typeof a?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.bm=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Od=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.v)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.B)(a,function(f,k){e=b.call(d,e,f,k,a)});
return e};
g.cm=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.dm=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};g.vca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.wca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.em=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");var bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.fb.prototype.Md=!0;g.fb.prototype.Tc=function(){return this.C};
var eb={},db={};g.kb.prototype.Md=!0;g.kb.prototype.Tc=function(){return this.F.toString()};
g.kb.prototype.Vk=!0;g.kb.prototype.C=function(){return 1};
g.jb={};g.ib={};var pb,qb,rb,sb,tb,ub,iaa;g.xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
pb=/&/g;qb=/</g;rb=/>/g;sb=/"/g;tb=/'/g;ub=/\x00/g;iaa=/[\x00&<>"']/;g.Cb.prototype.Md=!0;g.Cb.prototype.Tc=function(){return this.F.toString()};
g.Cb.prototype.Vk=!0;g.Cb.prototype.C=function(){return 1};
var kaa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,jaa=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Gb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Bb={},Ab={};g.Kb.prototype.Md=!0;g.Jb={};g.Kb.prototype.Tc=function(){return this.C};
g.fm=g.Lb("");g.gm=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.hm=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Nb.prototype.Md=!0;g.Mb={};g.Nb.prototype.Tc=function(){return this.C};
g.xca=g.Ob("");a:{var im=g.q.navigator;if(im){var jm=im.userAgent;if(jm){g.Pb=jm;break a}}g.Pb=""};g.Xb.prototype.Vk=!0;g.Xb.prototype.C=function(){return this.D};
g.Xb.prototype.Md=!0;g.Xb.prototype.Tc=function(){return this.F.toString()};
var Wb={};g.bc("<!DOCTYPE html>",0);g.km=g.bc("",0);g.lm=g.bc("<br>",0);g.yca=g.Sa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=g.Yb(g.km);return!b.parentElement});g.hc=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.mc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.xc=/#|$/;g.Bc[" "]=g.xa;var tm,laa,xm;g.mm=g.Qb("Opera");g.Ef=g.Rb();g.nm=g.Qb("Edge");g.om=g.nm||g.Ef;g.pm=g.Qb("Gecko")&&!(g.wb(g.Pb.toLowerCase(),"webkit")&&!g.Qb("Edge"))&&!(g.Qb("Trident")||g.Qb("MSIE"))&&!g.Qb("Edge");g.qm=g.wb(g.Pb.toLowerCase(),"webkit")&&!g.Qb("Edge");g.rm=g.Qb("Macintosh");g.sm=g.Qb("Windows");g.zca=g.Qb("Linux")||g.Qb("CrOS");g.Aca=g.Qb("Android");g.Bca=zc();g.Cca=g.Qb("iPad");g.Dca=g.Qb("iPod");g.Eca=g.Ac();
a:{var um="",vm=function(){var a=g.Pb;if(g.pm)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.nm)return/Edge\/([\d\.]+)/.exec(a);if(g.Ef)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.qm)return/WebKit\/(\S+)/.exec(a);if(g.mm)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
vm&&(um=vm?vm[1]:"");if(g.Ef){var wm=Dc();if(null!=wm&&wm>parseFloat(um)){tm=String(wm);break a}}tm=um}g.Ec=tm;laa={};if(g.q.document&&g.Ef){var ym=Dc();xm=ym?ym:parseInt(g.Ec,10)||void 0}else xm=void 0;g.Gc=xm;g.zm=Sb();g.Am=zc()||g.Qb("iPod");g.Bm=g.Qb("iPad");g.Fca=g.Vb();g.Cm=Tb();g.Dm=g.Ub()&&!g.Ac();var Jc={},Mc=null;g.Nc.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(g.Nc.prototype[Symbol.iterator]=function(){return this});g.Sc="function"==typeof Uint8Array;g.Oc.prototype.Yc=function(){Pc(this);return this.ec};
g.Oc.prototype.F=g.Sc?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return g.Kc(this)};
try{return JSON.stringify(this.ec&&this.Yc(),Qc)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.ec&&this.Yc(),Qc)};
g.Oc.prototype.toString=function(){Pc(this);return this.ec.toString()};
g.Oc.prototype.clone=function(){return new this.constructor(Rc(this.Yc()))};g.Em=document;g.Fd=window;var Vc={};g.h=g.Wc.prototype;g.h.isEnabled=function(){return navigator.cookieEnabled};
g.h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ER;d=c.secure||!1;var f=c.domain||void 0;var k=c.path||void 0;var l=c.Al}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===l&&(l=-1);c=f?";domain="+f:"";k=k?";path="+k:"";d=d?";secure":"";l=0>l?"":0==l?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.ad)()+1E3*l)).toUTCString();this.C.cookie=a+"="+b+c+k+l+d+(null!=e?";samesite="+
e:"")};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.xb)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Al:0,path:b,domain:c});return d};
g.h.xc=function(){return g.Xc(this).keys};
g.h.Eb=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Db=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.ud=g.ba(3);g.h.clear=function(){for(var a=g.Xc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.ei=new g.Wc("undefined"==typeof document?null:document);g.Im={Ha:["BC","AD"],La:["Before Christ","Anno Domini"],Ma:"JFMAMJJASOND".split(""),Na:"JFMAMJJASOND".split(""),wa:"January February March April May June July August September October November December".split(" "),sa:"January February March April May June July August September October November December".split(" "),xa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ca:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ea:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Ka:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ba:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Da:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Pa:"SMTWTFS".split(""),Oa:"SMTWTFS".split(""),Ja:["Q1","Q2","Q3","Q4"],Ia:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Aa:["AM","PM"],ra:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],za:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Ga:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],ua:6,Fa:[5,6],va:5};
g.Jm=g.Im;g.Jm=g.Im;g.h=g.bd.prototype;g.h.we=g.Jm.ua;g.h.Og=g.Jm.va;g.h.clone=function(){var a=new g.bd(this.date);a.we=this.we;a.Og=this.Og;return a};
g.h.getFullYear=function(){return this.date.getFullYear()};
g.h.getYear=function(){return this.getFullYear()};
g.h.getMonth=function(){return this.date.getMonth()};
g.h.getDate=function(){return this.date.getDate()};
g.h.getTime=function(){return this.date.getTime()};
g.h.getDay=function(){return this.date.getDay()};
g.h.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.h.getUTCMonth=function(){return this.date.getUTCMonth()};
g.h.getUTCDate=function(){return this.date.getUTCDate()};
g.h.getUTCDay=function(){return this.date.getDay()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.h.setFullYear=function(a){this.date.setFullYear(a)};
g.h.setYear=function(a){this.setFullYear(a)};
g.h.setMonth=function(a){this.date.setMonth(a)};
g.h.setDate=function(a){this.date.setDate(a)};
g.h.setTime=function(a){this.date.setTime(a)};
g.h.setUTCFullYear=function(a){this.date.setUTCFullYear(a)};
g.h.setUTCMonth=function(a){this.date.setUTCMonth(a)};
g.h.setUTCDate=function(a){this.date.setUTCDate(a)};
g.h.add=function(a){if(a.C||a.months){var b=this.getMonth()+a.months+12*a.C,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);var d=Math.min(g.Yc(c,b),this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate()),$c(this,a.getDate()))};
g.h.be=function(a){return[this.getFullYear(),g.ic(this.getMonth()+1,2),g.ic(this.getDate(),2)].join(a?"-":"")+""};
g.h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.h.toString=function(){return this.be()};
g.h.valueOf=function(){return this.date.valueOf()};var oaa;oaa=!g.Ef||g.Hc(9);g.Gca=!g.pm&&!g.Ef||g.Ef&&g.Hc(9)||g.pm&&g.Fc("1.9.1");g.Km=g.Ef&&!g.Fc("9");g.Hca=g.Ef||g.mm||g.qm;g.h=g.cd.prototype;g.h.clone=function(){return new g.cd(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.cd&&g.dd(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.fd.prototype;g.h.clone=function(){return new g.fd(this.width,this.height)};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!(this.width*this.height)};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var id={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Ica={ZJ:"allow-forms",aK:"allow-modals",bK:"allow-orientation-lock",cK:"allow-pointer-lock",dK:"allow-popups",eK:"allow-popups-to-escape-sandbox",fK:"allow-presentation",gK:"allow-same-origin",hK:"allow-scripts",iK:"allow-top-navigation",jK:"allow-top-navigation-by-user-activation"},qaa=g.Sa(function(){return g.yd(Ica)});g.ya(g.Ad);g.h=g.Bd.prototype;g.h.clone=function(){return new g.Bd(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.cd?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.Lm=g.pm?"MozUserSelect":g.qm||g.nm?"WebkitUserSelect":null;g.Mm=!!window.google_async_iframe_id;g.Nm=g.Mm&&window.parent||window;g.lb(g.hb("//fonts.googleapis.com/css"));g.Nh=(new Date).getTime();/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
Nd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
Nd.prototype.get=function(a){return!!this.C[a]};g.C.prototype.Qc=!1;g.C.prototype.pb=function(){return this.Qc};
g.C.prototype.dispose=function(){this.Qc||(this.Qc=!0,this.X())};
g.C.prototype.X=function(){if(this.xf)for(;this.xf.length;)this.xf.shift()()};g.Ud.prototype.stopPropagation=function(){this.F=!0};
g.Ud.prototype.preventDefault=function(){this.defaultPrevented=!0};var je,Kca,yaa;g.Jca=!g.Ef||g.Hc(9);je=!g.Ef||g.Hc(9);Kca=g.Ef&&!g.Fc("9");yaa=function(){if(!g.q.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.q.addEventListener("test",g.xa,b),g.q.removeEventListener("test",g.xa,b)}catch(c){}return a}();g.Om=g.qm?"webkitTransitionEnd":g.mm?"otransitionend":"transitionend";g.x(g.Vd,g.Ud);var Lca={2:"touch",3:"pen",4:"mouse"};
g.Vd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.pm&&(g.Cc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.rm?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Lca[a.pointerType]||"";this.state=
a.state;this.yc=a;a.defaultPrevented&&this.preventDefault()};
g.Vd.prototype.stopPropagation=function(){g.Vd.V.stopPropagation.call(this);this.yc.stopPropagation?this.yc.stopPropagation():this.yc.cancelBubble=!0};
g.Vd.prototype.preventDefault=function(){g.Vd.V.preventDefault.call(this);var a=this.yc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Kca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Wd="closure_listenable_"+(1E6*Math.random()|0),vaa=0;g.h=g.Zd.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=ae(a,b,d,e);-1<k?(b=a[k],c||(b.Rh=!1)):(b=new waa(b,this.src,f,!!d,e),b.Rh=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ae(e,b,c,d);return-1<b?(Yd(e[b]),g.Oa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Yd(d[e]);delete this.listeners[c];this.C--}return b};
g.h.Xf=g.ba(5);g.h.We=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=ae(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return g.Ua(this.listeners,function(f){for(var k=0;k<f.length;++k)if(!(c&&f[k].type!=d||e&&f[k].capture!=b))return!0;return!1})};var ge="closure_lm_"+(1E6*Math.random()|0),me={},ie=0,pe="__closure_events_fn_"+(1E9*Math.random()>>>0);g.x(g.qe,g.C);g.qe.prototype[Wd]=!0;g.h=g.qe.prototype;g.h.ri=function(){return this.Sl};
g.h.vh=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.ce(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.ke(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.ri();if(b){var c=[];for(var d=1;b;b=b.ri())c.push(b),++d}b=this.Ot;d=a.type||a;if("string"===typeof a)a=new g.Ud(a,b);else if(a instanceof g.Ud)a.target=a.target||b;else{var e=a;a=new g.Ud(d,b);g.cb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=re(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=re(k,d,!0,a)&&e,a.F||(e=re(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=re(k,d,!1,a)&&e;return e};
g.h.X=function(){g.qe.V.X.call(this);this.removeAllListeners();this.Sl=null};
g.h.O=function(a,b,c,d){return this.vd.add(String(a),b,!1,c,d)};
g.h.Ae=function(a,b,c,d){return this.vd.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.vd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.vd?this.vd.removeAll(a):0};
g.h.Xf=g.ba(4);g.h.We=function(a,b,c,d){return this.vd.We(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.vd.hasListener(void 0!==a?String(a):void 0,b)};se.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var Ce;var De=new se(function(){return new we},function(a){a.reset()});
ve.prototype.add=function(a,b){var c=De.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
ve.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
we.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
we.prototype.reset=function(){this.next=this.scope=this.lc=null};var xe,ye=!1,ze=new ve;Ie.prototype.reset=function(){this.context=this.onRejected=this.D=this.C=null;this.F=!1};
var Je=new se(function(){return new Ie},function(a){a.reset()});
g.He.prototype.then=function(a,b,c){return Oe(this,g.Da(a)?a:null,g.Da(b)?b:null,c)};
g.Ee(g.He);g.He.prototype.cancel=function(a){if(0==this.C){var b=new g.Ve(a);Ae(function(){Qe(this,b)},this)}};
g.He.prototype.Y=function(a){this.C=0;g.Ge(this,2,a)};
g.He.prototype.N=function(a){this.C=0;g.Ge(this,3,a)};
g.He.prototype.J=function(){for(var a;a=Re(this);)Se(this,a,this.C,this.M);this.L=!1};
var Xe=ue;g.x(g.Ve,g.Ha);g.Ve.prototype.name="cancel";g.x(g.$e,g.C);g.h=g.$e.prototype;g.h.rb=0;g.h.X=function(){g.$e.V.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.rb=g.Ye(this.Pb,void 0!==a?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Ze(this.rb);this.rb=0};
g.h.isActive=function(){return 0!=this.rb};
g.h.Bk=function(){this.rb=0;this.C&&this.C.call(this.F)};g.x(af,Eaa);af.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
af.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)bf(this,a,d),d+=this.F;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){bf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){bf(this,e);f=0;break}}this.D=f;this.H+=b}};
af.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;bf(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.ff="StopIteration"in g.q?g.q.StopIteration:{message:"StopIteration",stack:""};g.ef.prototype.next=function(){throw g.ff;};
g.ef.prototype.ad=function(){return this};g.h=g.kf.prototype;g.h.Db=function(){return this.D};
g.h.Eb=g.ba(0);g.h.xc=function(){g.mf(this);return this.C.concat()};
g.h.ud=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Db())return!1;var c=b||Gaa;g.mf(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Ie=this.D=this.C.length=0};
g.h.remove=function(a){return g.lf(this.F,a)?(delete this.F[a],this.D--,this.Ie++,this.C.length>2*this.D&&g.mf(this),!0):!1};
g.h.get=function(a,b){return g.lf(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.lf(this.F,a)||(this.D++,this.C.push(a),this.Ie++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.xc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.kf(this)};
g.h.ad=function(a){g.mf(this);var b=0,c=this.Ie,d=this,e=new g.ef;e.next=function(){if(c!=d.Ie)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.ff;var f=d.C[b++];return a?f:d.F[f]};
return e};var qf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Iaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.x(g.rf,g.C);g.h=g.rf.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.od=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.xa):(c&&g.Pa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Jaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.od(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.B)(b,this.od,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Db=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Db(b);return a};
g.h.X=function(){g.rf.V.X.call(this);this.clear();this.D.length=0};g.tf.prototype.set=function(a,b){void 0===b?this.C.remove(a):this.C.set(a,g.of(b))};
g.tf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.tf.prototype.remove=function(a){this.C.remove(a)};g.x(uf,g.tf);uf.prototype.set=function(a,b){uf.V.set.call(this,a,wf(b))};
uf.prototype.F=function(a){a=uf.V.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
uf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.x(g.xf,uf);g.xf.prototype.set=function(a,b,c){if(b=wf(b)){if(c){if(c<(0,g.ad)()){g.xf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.ad)()}g.xf.V.set.call(this,a,b)};
g.xf.prototype.F=function(a,b){var c=g.xf.V.F.call(this,a);if(c)if(!b&&g.Af(c))g.xf.prototype.remove.call(this,a);else return c};g.x(Bf,Kaa);Bf.prototype.Db=function(){var a=0;g.hf(this.ad(!0),function(){a++});
return a};
Bf.prototype.clear=function(){var a=Faa(this.ad(!0)),b=this;(0,g.B)(a,function(c){b.remove(c)})};g.x(g.Cf,Bf);g.h=g.Cf.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Db=function(){return this.C.length};
g.h.ad=function(a){var b=0,c=this.C,d=new g.ef;d.next=function(){if(b>=c.length)throw g.ff;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.x(g.Df,g.Cf);g.x(Gf,Bf);var Laa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ff=null;g.h=Gf.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(Hf(a),b);If(this)};
g.h.get=function(a){a=this.C.getAttribute(Hf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(Hf(a));If(this)};
g.h.Db=function(){return Jf(this).attributes.length};
g.h.ad=function(a){var b=0,c=Jf(this).attributes,d=new g.ef;d.next=function(){if(b>=c.length)throw g.ff;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){for(var a=Jf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);If(this)};g.x(Kf,Bf);Kf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
Kf.prototype.get=function(a){return this.F.get(this.C+a)};
Kf.prototype.remove=function(a){this.F.remove(this.C+a)};
Kf.prototype.ad=function(a){var b=this.F.ad(!0),c=this,d=new g.ef;d.next=function(){for(var e=b.next();e.substr(0,c.C.length)!=c.C;)e=b.next();return a?e.substr(c.C.length):c.F.get(e)};
return d};g.Nf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.t("yt.config_",g.Nf,void 0);var Xf={};var Maa=[];var Mca=g.u("ytPubsubPubsubInstance")||new g.rf;g.rf.prototype.subscribe=g.rf.prototype.subscribe;g.rf.prototype.unsubscribeByKey=g.rf.prototype.od;g.rf.prototype.publish=g.rf.prototype.oa;g.rf.prototype.clear=g.rf.prototype.clear;g.t("ytPubsubPubsubInstance",Mca,void 0);var fg=g.u("ytPubsubPubsubSubscribedKeys")||{};g.t("ytPubsubPubsubSubscribedKeys",fg,void 0);var hg=g.u("ytPubsubPubsubTopicToKeys")||{};g.t("ytPubsubPubsubTopicToKeys",hg,void 0);var gg=g.u("ytPubsubPubsubIsSynchronous")||{};
g.t("ytPubsubPubsubIsSynchronous",gg,void 0);var Paa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Qaa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;var Pm;Pm=window;g.zg=Pm.ytcsi&&Pm.ytcsi.now?Pm.ytcsi.now:Pm.performance&&Pm.performance.timing&&Pm.performance.now&&Pm.performance.timing.navigationStart?function(){return Pm.performance.timing.navigationStart+Pm.performance.now()}:function(){return(new Date).getTime()};var Raa,Eg,Fg,Dg,rg,yg,ug;Raa=g.Tf("initial_gel_batch_timeout",1E3);Eg=Math.pow(2,16)-1;g.yh=10;Fg=null;Dg=0;rg=void 0;g.pg=0;g.qg=0;g.xh=0;yg=!0;ug=g.u("ytLoggingTransportLogPayloadsQueue_")||{};g.t("ytLoggingTransportLogPayloadsQueue_",ug,void 0);g.tg=g.u("ytLoggingTransportGELQueue_")||new Map;g.t("ytLoggingTransportGELQueue_",g.tg,void 0);var Bg=g.u("ytLoggingTransportTokensToCttTargetIds_")||{};g.t("ytLoggingTransportTokensToCttTargetIds_",Bg,void 0);var Xaa,Mg,Ng,Og,Uaa,Vaa,Jg,Pg;Xaa=g.Tf("initial_gel_batch_timeout",1E3);Mg=Math.pow(2,16)-1;g.Ah=10;Ng=null;Og=0;Uaa={log_event:"events",log_interaction:"interactions"};Vaa=new Set(["log_event"]);Jg={};g.Gg=0;g.Hg=0;g.zh=0;Pg=!0;g.Ig=g.u("ytLoggingTransportLogPayloadsQueue_")||{};g.t("ytLoggingTransportLogPayloadsQueue_",g.Ig,void 0);var Lg=g.u("ytLoggingTransportTokensToCttTargetIds_")||{};g.t("ytLoggingTransportTokensToCttTargetIds_",Lg,void 0);var Nca=0,Yaa=g.qm?"webkit":g.pm?"moz":g.Ef?"ms":g.mm?"o":"",Tg=g.u("ytDomDomGetNextId")||function(){return++Nca};
g.t("ytDomDomGetNextId",Tg,void 0);var Zaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.Xg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.Xg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.Xg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ah=g.u("ytEventsEventsListeners")||{};g.t("ytEventsEventsListeners",ah,void 0);var ch=g.u("ytEventsEventsCounter")||{count:0};g.t("ytEventsEventsCounter",ch,void 0);var dh=g.Sa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.Qm=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.Rm="Microsoft Internet Explorer"==navigator.appName;g.x(g.hh,g.C);g.hh.prototype.Y=function(a){this.C=new g.cd(g.Zg(a),g.$g(a))};
g.hh.prototype.M=function(){if(this.C){var a=g.Qm();if(0!=this.D){var b=g.ed(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.Pb();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.hh.prototype.X=function(){g.dg(this.N);g.eh(this.J)};g.n(nh,$aa);nh.prototype.start=function(){var a=g.u("yt.scheduler.instance.start");a&&a()};
nh.prototype.pause=function(){var a=g.u("yt.scheduler.instance.pause");a&&a()};
g.ya(nh);nh.getInstance();var uh={};var wh=g.u("ytLoggingGelSequenceIdObj_")||{};g.t("ytLoggingGelSequenceIdObj_",wh,void 0);g.Jh=new function(){var a=window.document;this.C=window;this.F=a};
g.t("yt.ads_.signals_.getAdSignalsString",function(a){return g.Dh(Mh(a))},void 0);(0,g.ad)();var Oh=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Rh,cba,Wh;Rh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};cba="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Wh=!1;g.Sm=Xh;g.ii.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.ad)()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(g.of(b))}catch(f){return}else e=escape(b);g.fi(a,e,c,this.F)};
g.ii.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.gi(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.ii.prototype.remove=function(a){this.C&&this.C.remove(a);g.hi(a,"/",this.F)};var ji=new g.ii("yt.innertube");g.mi.prototype.isReady=function(){!this.C&&ai()&&(this.C=bi());return!!this.C};g.n(g.oi,Error);var ti=new Set,ri=0;g.ui.prototype.initialize=function(a,b,c,d,e,f){var k=this;f=void 0===f?!1:f;b?(this.F=!0,g.mg(b,function(){k.F=!1;window.botguard?vi(k,c,d,f):(g.ng(b),g.qi(new g.oi("Unable to load Botguard","from "+b)))})):a&&(eval(a),window.botguard?vi(this,c,d,f):g.qi(Error("Unable to load Botguard from JS")))};
g.ui.prototype.Nd=function(){return!!this.C};
g.ui.prototype.dispose=function(){this.C=null};g.xi=new g.ui;yi.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.Fe(a)?a:g.Ai(a)):2===this.F&&b?(a=b.call(c,this.C),g.Fe(a)?a:g.zi(a)):this};
yi.prototype.getValue=function(){return this.C};
g.Ee(yi);g.n(Bi,g.C);Bi.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.callback);break}};
Bi.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.callback)}g.C.prototype.X.call(this)};Ci.prototype.clone=function(){var a=new Ci,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.za(c)?a[b]=g.$a(c):a[b]=c}return a};var Ei=(0,g.ad)().toString();var Gi=g.u("ytLoggingDocDocumentNonce_")||Fi();g.t("ytLoggingDocDocumentNonce_",Gi,void 0);g.Ii.prototype.toString=function(){return JSON.stringify(g.Ji(this))};g.t("yt_logging_screen.getRootVeType",Mi,void 0);g.t("yt_logging_screen.getCurrentCsn",g.Pi,void 0);g.t("yt_logging_screen.getCttAuthInfo",g.Qi,void 0);g.t("yt_logging_screen.setCurrentScreen",g.Ri,void 0);g.Ti.prototype.toString=function(){return this.topic};var Oca=g.u("ytPubsub2Pubsub2Instance")||new g.rf;g.rf.prototype.subscribe=g.rf.prototype.subscribe;g.rf.prototype.unsubscribeByKey=g.rf.prototype.od;g.rf.prototype.publish=g.rf.prototype.oa;g.rf.prototype.clear=g.rf.prototype.clear;g.t("ytPubsub2Pubsub2Instance",Oca,void 0);var Zi=g.u("ytPubsub2Pubsub2SubscribedKeys")||{};g.t("ytPubsub2Pubsub2SubscribedKeys",Zi,void 0);var aj=g.u("ytPubsub2Pubsub2TopicToKeys")||{};g.t("ytPubsub2Pubsub2TopicToKeys",aj,void 0);
var $i=g.u("ytPubsub2Pubsub2IsAsync")||{};g.t("ytPubsub2Pubsub2IsAsync",$i,void 0);g.t("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.n(dj,g.Si);var nba=new g.Ti("screen-created",dj),ej=[],fj=0;var lj,jj;lj=0;g.kj=null;jj=null;g.h=g.nj.prototype;g.h.qG=function(){this.Nd()||this.init()};
g.h.enable=function(){this.C=1;(0,g.B)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.qG,this),this.subscribe("dispose-"+a,this.dispose,this),g.F("PAGE_NAME")==a&&g.oj(this))},this)};
g.h.init=function(){g.lh(this.F);this.C=2;this.L&&this.L()};
g.h.Nd=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.lh(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Yf(a)}};
g.h.subscribe=function(a,b,c){a=g.ig(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.jg(this.G);this.G=[]};var pj=g.u("yt.modules.registry_")||{};g.t("yt.modules.registry_",pj,void 0);g.sj=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.t("yt.msgs_",g.sj,void 0);var yj={},rba=0;var sba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.n(Mj,g.C);g.h=Mj.prototype;g.h.getId=function(){return this.ha};
g.h.loadNewVideoConfig=function(a){if(!this.pb()){this.aa&&(g.cg(this.aa),this.aa=0);this.nb=a=g.Di(a);this.C=a.clone();Kj(this);this.qa||(this.qa=Vj(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.Dd(this.L,Number(a)||a);if(a=this.C.attrs.height)this.L.style.height=g.Cd(Number(a)||a,!0);Lj(this);this.M&&Nj(this)}};
g.h.wv=function(){return this.nb};
g.h.rz=function(){return this.M};
g.h.Lh=function(a,b){var c=this,d=Vj(this,b);if(d){if(!g.Ma(this.Pd,a)&&!this.G[a]){var e=uba(this,a);this.N&&this.N(a,e)}this.Y.subscribe(a,d);"onReady"==a&&this.M&&g.ag(function(){d(c.api)},0)}};
g.h.fG=function(a,b){if(!this.pb()){var c=Vj(this,b);c&&g.sf(this.Y,a,c)}};
g.h.Nt=function(a){g.H("a11y-announce",a)};
g.h.wD=function(a){g.H("WATCH_LATER_VIDEO_ADDED",a)};
g.h.xD=function(a){g.H("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Gv=function(){return this.la||(Oj(this)?"html5":null)};
g.h.Av=function(){return this.kb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.lg(Pj(this));spf.script.ignore(b,a)}g.cg(this.sb);this.T=!1};
g.h.X=function(){Sj(this);if(this.H&&this.C&&this.H.destroy)try{this.H.destroy()}catch(b){g.Yf(b)}this.ib=null;for(var a in this.G)g.q[this.G[a]]=null;this.nb=this.C=this.api=null;delete this.Ya;delete this.L;g.C.prototype.X.call(this)};g.Xj={};g.Wj="player_uid_"+(1E9*Math.random()>>>0);var ek=null;g.Tm=window.performance&&window.performance.memory;g.Gl={};g.n(fk,g.Si);g.n(gk,g.Si);var yba=new g.Ti("aft-recorded",fk),Eba=new g.Ti("timing-sent",gk);var Um=window,jk=Um.performance||Um.mozPerformance||Um.msPerformance||Um.webkitPerformance||new xba;var uk=!1,Wk={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},
Cba=(0,g.v)(jk.clearResourceTimings||jk.webkitClearResourceTimings||jk.mozClearResourceTimings||jk.msClearResourceTimings||jk.oClearResourceTimings||g.xa,jk);var Bk=g.u("ytLoggingLatencyUsageStats_")||{};g.t("ytLoggingLatencyUsageStats_",Bk,void 0);zk.prototype.tick=function(a,b,c){Ck(this,"tick_"+a+"_"+b)||g.ni("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
zk.prototype.info=function(a,b){var c=Object.keys(a).join("");Ck(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,g.ni("latencyActionInfo",a))};
zk.prototype.span=function(a,b){var c=Object.keys(a).join("");Ck(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,g.ni("latencyActionSpan",a))};var Vm={},Xk=(Vm.ad_to_ad="LATENCY_ACTION_AD_TO_AD",Vm.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",Vm.app_startup="LATENCY_ACTION_APP_STARTUP",Vm["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",Vm["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",Vm["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",Vm.browse="LATENCY_ACTION_BROWSE",Vm.channels="LATENCY_ACTION_CHANNELS",Vm.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",Vm["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
Vm["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",Vm["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",Vm["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",Vm["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",Vm["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",Vm["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",Vm.chips="LATENCY_ACTION_CHIPS",Vm["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
Vm["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",Vm.embed="LATENCY_ACTION_EMBED",Vm.home="LATENCY_ACTION_HOME",Vm.library="LATENCY_ACTION_LIBRARY",Vm.live="LATENCY_ACTION_LIVE",Vm.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",Vm.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",Vm.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",Vm.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",Vm.prebuffer="LATENCY_ACTION_PREBUFFER",Vm.prefetch="LATENCY_ACTION_PREFETCH",
Vm.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",Vm.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",Vm.results="LATENCY_ACTION_RESULTS",Vm.search_ui="LATENCY_ACTION_SEARCH_UI",Vm.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",Vm.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",Vm.settings="LATENCY_ACTION_SETTINGS",Vm.tenx="LATENCY_ACTION_TENX",Vm.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",Vm.watch="LATENCY_ACTION_WATCH",Vm.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",Vm["watch,watch7"]=
"LATENCY_ACTION_WATCH",Vm["watch,watch7_html5"]="LATENCY_ACTION_WATCH",Vm["watch,watch7ad"]="LATENCY_ACTION_WATCH",Vm["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",Vm.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",Vm.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",Vm["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",Vm["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",Vm["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",Vm["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",Vm["video.video_editor"]=
"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",Vm["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",Vm["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",Vm.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",Vm.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",Vm),Wm={},Gk=(Wm.ad_allowed="adTypesAllowed",Wm.yt_abt="adBreakType",Wm.ad_cpn="adClientPlaybackNonce",Wm.ad_docid="adVideoId",Wm.yt_ad_an="adNetworks",Wm.ad_at="adType",Wm.browse_id=
"browseId",Wm.p="httpProtocol",Wm.t="transportProtocol",Wm.cpn="clientPlaybackNonce",Wm.ccs="creatorInfo.creatorCanaryState",Wm.cseg="creatorInfo.creatorSegment",Wm.csn="clientScreenNonce",Wm.docid="videoId",Wm.GetHome_rid="requestIds",Wm.GetSearch_rid="requestIds",Wm.GetPlayer_rid="requestIds",Wm.GetWatchNext_rid="requestIds",Wm.GetBrowse_rid="requestIds",Wm.GetLibrary_rid="requestIds",Wm.is_continuation="isContinuation",Wm.is_nav="isNavigation",Wm.b_p="kabukiInfo.browseParams",Wm.is_prefetch="kabukiInfo.isPrefetch",
Wm.is_secondary_nav="kabukiInfo.isSecondaryNav",Wm.prev_browse_id="kabukiInfo.prevBrowseId",Wm.query_source="kabukiInfo.querySource",Wm.voz_type="kabukiInfo.vozType",Wm.yt_lt="loadType",Wm.mver="creatorInfo.measurementVersion",Wm.yt_ad="isMonetized",Wm.nr="webInfo.navigationReason",Wm.nrsu="navigationRequestedSameUrl",Wm.ncnp="webInfo.nonPreloadedNodeCount",Wm.pnt="performanceNavigationTiming",Wm.prt="playbackRequiresTap",Wm.plt="playerInfo.playbackType",Wm.pis="playerInfo.playerInitializedState",
Wm.paused="playerInfo.isPausedOnLoad",Wm.yt_pt="playerType",Wm.fmt="playerInfo.itag",Wm.yt_pl="watchInfo.isPlaylist",Wm.yt_pre="playerInfo.preloadType",Wm.yt_ad_pr="prerollAllowed",Wm.pa="previousAction",Wm.yt_red="isRedSubscriber",Wm.rce="mwebInfo.responseContentEncoding",Wm.scrh="screenHeight",Wm.scrw="screenWidth",Wm.st="serverTimeMs",Wm.aq="tvInfo.appQuality",Wm.br_trs="tvInfo.bedrockTriggerState",Wm.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Wm.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",
Wm.label="tvInfo.label",Wm.is_mdx="tvInfo.isMdx",Wm.preloaded="tvInfo.isPreloaded",Wm.upg_player_vis="playerInfo.visibilityState",Wm.query="unpluggedInfo.query",Wm.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Wm.yt_vst="videoStreamType",Wm.vph="viewportHeight",Wm.vpw="viewportWidth",Wm.yt_vis="isVisible",Wm.rcl="mwebInfo.responseContentLength",Wm.GetSettings_rid="requestIds",Wm.GetTrending_rid="requestIds",Wm.GetMusicSearchSuggestions_rid="requestIds",Wm.REQUEST_ID="requestIds",Wm),Aba="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Xm={},Hk=(Xm.ccs="CANARY_STATE_",Xm.mver="MEASUREMENT_VERSION_",Xm.pis="PLAYER_INITIALIZED_STATE_",Xm.yt_pt="LATENCY_PLAYER_",Xm.pa="LATENCY_ACTION_",Xm.yt_vst="VIDEO_STREAM_TYPE_",Xm),Bba="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");if(g.Sf("overwrite_polyfill_on_logging_lib_loaded")){var Ym=window;Ym.ytcsi&&(Ym.ytcsi.info=Lk,Ym.ytcsi.tick=g.Qk)};var fl=0,bl=[],el=[],Zk=0,cl={},dl={},$k=new g.$e(Oba,1E3);var hl=["server_prefetched_vast","vmap"];var jl;var nl=null,ql=[];var ul,Ml,Ll,wl,vl,Vba,Yba,Wba,Xba,Hl;wl=0;vl=0;Vba=[900,60,"waiting"];Yba=[500,99,"waiting"];Wba=[300,60,"waiting"];Xba=[400,99,"waiting"];Hl=[300,101,"done"];var Tl=!1;window.yt=window.yt||{};g.t("yt.setConfig",g.Of,void 0);g.t("yt.pushConfigArray",Pf,void 0);g.t("yt.getConfig",g.F,void 0);g.t("yt.config.set",g.Of,void 0);g.t("yt.config.pushArray",Pf,void 0);g.t("yt.config.get",g.F,void 0);g.t("yt.hasMsg",g.uj,void 0);g.t("yt.setMsg",tj,void 0);g.t("yt.setGoogMsg",vj,void 0);g.t("yt.msgs.has",g.uj,void 0);g.t("yt.msgs.set",tj,void 0);g.t("yt.msgs.setGoog",vj,void 0);g.t("yt.pubsub.publish",g.H,void 0);g.t("yt.pubsub.subscribe",g.ig,void 0);
g.t("ytcsi.tick",function(a,b,c){return g.Qk(a,b,c)},void 0);
g.x(Wl,g.nj);
Wl.prototype.enable=function(){window.onload=Tba;window.onunload=Uba;window.onerror=Oaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",sl),window.addEventListener("spfhistory",tl),window.addEventListener("spfrequest",yl),window.addEventListener("spfpartprocess",Cl),window.addEventListener("spfpartdone",Dl),window.addEventListener("spfprocess",El),window.addEventListener("spfdone",Il),window.addEventListener("spferror",Jl),window.addEventListener("spfreload",Kl),
window.addEventListener("spfjsbeforeunload",Xl)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",$ba),this.subscribe("dispose",aca)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
Wl.prototype.init=function(){Wl.V.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.F("PAGEFRAME_JS")){var b=g.F("PAGEFRAME_JS",void 0);var c=function(){var e=g.u("ytbin.www.pageframe.setup");e&&(window.ytPageFrameLoaded=!0,e())}}else a&&(a=g.u("yt.www.masthead.loadSearchbox"))&&a();
a=g.F("JS_COMMON_MODULE");var d=g.F("JS_PAGE_MODULES");d||(d=[a]);a=g.F("JS_DELAY_LOAD",0);0<a?(g.cg(this.D),this.D=g.ag(function(){b&&g.mg(b,c);spf.script.require(d)},a)):(b&&g.mg(b,c),spf.script.require(d));
g.t("yt.abuse.player.botguardInitialized",jba,void 0);g.t("yt.abuse.player.invokeBotguard",kba,void 0);g.t("yt.abuse.dclkstatus.checkDclkStatus",iba,void 0);g.t("yt.player.exports.navigate",g.Ij,void 0);g.t("yt.util.activity.init",g.rh,void 0);g.t("yt.util.activity.getTimeSinceActive",g.vh,void 0);g.t("yt.util.activity.setTimestamp",g.ph,void 0);ml(g.u("ytplayer.config"));g.u("ytspf.enabled")&&Rba();Hba();g.F("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.Sf("service_worker_enabled")?qca():oca())};
Wl.prototype.dispose=function(){g.cg(this.D);var a=g.u("ytbin.www.pageframe.cancelSetup");a&&a();g.dg(jl);if(a=g.ll())a.removeEventListener("onReady",kl),a.removeEventListener("onStateChange",kl);nk(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.G(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.gh(a);Wl.V.dispose.call(this)};
Wl.prototype.disable=function(){Wl.V.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",sl),window.removeEventListener("spfhistory",tl),window.removeEventListener("spfrequest",yl),window.removeEventListener("spfpartprocess",Cl),window.removeEventListener("spfpartdone",Dl),window.removeEventListener("spfprocess",El),window.removeEventListener("spfdone",Il),window.removeEventListener("spferror",Jl),window.removeEventListener("spfreload",Kl),window.removeEventListener("spfjsbeforeunload",
Xl));window.onload=null;window.onunload=null;window.onerror=null};
g.rj(new Wl);})(_yt_www);
