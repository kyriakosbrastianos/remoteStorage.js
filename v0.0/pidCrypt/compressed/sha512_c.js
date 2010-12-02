if(typeof(pidCrypt)!="undefined"){function Int_64(b,a){this.highOrder=b;this.lowOrder=a}function jsSHA(b){jsSHA.charSize=8;jsSHA.b64pad="";jsSHA.hexCase=0;var p=null;var m=null;var o=function(w){var u=[];var s=(1<<jsSHA.charSize)-1;var v=w.length*jsSHA.charSize;for(var t=0;t<v;t+=jsSHA.charSize){u[t>>5]|=(w.charCodeAt(t/jsSHA.charSize)&s)<<(32-jsSHA.charSize-t%32)}return u};var h=b.length*jsSHA.charSize;var d=o(b);var e=function(v){var u=jsSHA.hexCase?"0123456789ABCDEF":"0123456789abcdef";var w="";var t=v.length*4;for(var s=0;s<t;s++){w+=u.charAt((v[s>>2]>>((3-s%4)*8+4))&15)+u.charAt((v[s>>2]>>((3-s%4)*8))&15)}return w};var j=function(w){var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var y="";var v=w.length*4;for(var t=0;t<v;t+=3){var x=(((w[t>>2]>>8*(3-t%4))&255)<<16)|(((w[t+1>>2]>>8*(3-(t+1)%4))&255)<<8)|((w[t+2>>2]>>8*(3-(t+2)%4))&255);for(var s=0;s<4;s++){if(t*8+s*6>w.length*32){y+=jsSHA.b64pad}else{y+=u.charAt((x>>6*(3-s))&63)}}}return y};var f=function(s,t){if(t<32){return new Int_64((s.highOrder>>>t)|(s.lowOrder<<(32-t)),(s.lowOrder>>>t)|(s.highOrder<<(32-t)))}else{if(t===32){return new Int_64(s.lowOrder,s.highOrder)}else{return f(f(s,32),t-32)}}};var l=function(s,t){if(t<32){return new Int_64(s.highOrder>>>t,s.lowOrder>>>t|(s.highOrder<<(32-t)))}else{if(t===32){return new Int_64(0,s.highOrder)}else{return l(l(s,32),t-32)}}};var g=function(s,u,t){return new Int_64((s.highOrder&u.highOrder)^(~s.highOrder&t.highOrder),(s.lowOrder&u.lowOrder)^(~s.lowOrder&t.lowOrder))};var a=function(s,u,t){return new Int_64((s.highOrder&u.highOrder)^(s.highOrder&t.highOrder)^(u.highOrder&t.highOrder),(s.lowOrder&u.lowOrder)^(s.lowOrder&t.lowOrder)^(u.lowOrder&t.lowOrder))};var k=function(s){var t=f(s,28);var v=f(s,34);var u=f(s,39);return new Int_64(t.highOrder^v.highOrder^u.highOrder,t.lowOrder^v.lowOrder^u.lowOrder)};var i=function(t){var v=f(t,14);var s=f(t,18);var u=f(t,41);return new Int_64(v.highOrder^s.highOrder^u.highOrder,v.lowOrder^s.lowOrder^u.lowOrder)};var r=function(s){var v=f(s,1);var t=f(s,8);var u=l(s,7);return new Int_64(v.highOrder^t.highOrder^u.highOrder,v.lowOrder^t.lowOrder^u.lowOrder)};var q=function(s){var v=f(s,19);var u=f(s,61);var t=l(s,6);return new Int_64(v.highOrder^u.highOrder^t.highOrder,v.lowOrder^u.lowOrder^t.lowOrder)};var n=function(s,z){var v=(s.lowOrder&65535)+(z.lowOrder&65535);var t=(s.lowOrder>>>16)+(z.lowOrder>>>16)+(v>>>16);var w=((t&65535)<<16)|(v&65535);v=(s.highOrder&65535)+(z.highOrder&65535)+(t>>>16);t=(s.highOrder>>>16)+(z.highOrder>>>16)+(v>>>16);var u=((t&65535)<<16)|(v&65535);return new Int_64(u,w)};var c=function(u){var s=[];var M,L,J,I,G,F,E,D;var A,z;var x;var v=[new Int_64(1116352408,3609767458),new Int_64(1899447441,602891725),new Int_64(3049323471,3964484399),new Int_64(3921009573,2173295548),new Int_64(961987163,4081628472),new Int_64(1508970993,3053834265),new Int_64(2453635748,2937671579),new Int_64(2870763221,3664609560),new Int_64(3624381080,2734883394),new Int_64(310598401,1164996542),new Int_64(607225278,1323610764),new Int_64(1426881987,3590304994),new Int_64(1925078388,4068182383),new Int_64(2162078206,991336113),new Int_64(2614888103,633803317),new Int_64(3248222580,3479774868),new Int_64(3835390401,2666613458),new Int_64(4022224774,944711139),new Int_64(264347078,2341262773),new Int_64(604807628,2007800933),new Int_64(770255983,1495990901),new Int_64(1249150122,1856431235),new Int_64(1555081692,3175218132),new Int_64(1996064986,2198950837),new Int_64(2554220882,3999719339),new Int_64(2821834349,766784016),new Int_64(2952996808,2566594879),new Int_64(3210313671,3203337956),new Int_64(3336571891,1034457026),new Int_64(3584528711,2466948901),new Int_64(113926993,3758326383),new Int_64(338241895,168717936),new Int_64(666307205,1188179964),new Int_64(773529912,1546045734),new Int_64(1294757372,1522805485),new Int_64(1396182291,2643833823),new Int_64(1695183700,2343527390),new Int_64(1986661051,1014477480),new Int_64(2177026350,1206759142),new Int_64(2456956037,344077627),new Int_64(2730485921,1290863460),new Int_64(2820302411,3158454273),new Int_64(3259730800,3505952657),new Int_64(3345764771,106217008),new Int_64(3516065817,3606008344),new Int_64(3600352804,1432725776),new Int_64(4094571909,1467031594),new Int_64(275423344,851169720),new Int_64(430227734,3100823752),new Int_64(506948616,1363258195),new Int_64(659060556,3750685593),new Int_64(883997877,3785050280),new Int_64(958139571,3318307427),new Int_64(1322822218,3812723403),new Int_64(1537002063,2003034995),new Int_64(1747873779,3602036899),new Int_64(1955562222,1575990012),new Int_64(2024104815,1125592928),new Int_64(2227730452,2716904306),new Int_64(2361852424,442776044),new Int_64(2428436474,593698344),new Int_64(2756734187,3733110249),new Int_64(3204031479,2999351573),new Int_64(3329325298,3815920427),new Int_64(3391569614,3928383900),new Int_64(3515267271,566280711),new Int_64(3940187606,3454069534),new Int_64(4118630271,4000239992),new Int_64(116418474,1914138554),new Int_64(174292421,2731055270),new Int_64(289380356,3203993006),new Int_64(460393269,320620315),new Int_64(685471733,587496836),new Int_64(852142971,1086792851),new Int_64(1017036298,365543100),new Int_64(1126000580,2618297676),new Int_64(1288033470,3409855158),new Int_64(1501505948,4234509866),new Int_64(1607167915,987167468),new Int_64(1816402316,1246189591)];if(u==="SHA-384"){x=[new Int_64(3418070365,3238371032),new Int_64(1654270250,914150663),new Int_64(2438529370,812702999),new Int_64(355462360,4144912697),new Int_64(1731405415,4290775857),new Int_64(41048885895,1750603025),new Int_64(3675008525,1694076839),new Int_64(1203062813,3204075428)]}else{x=[new Int_64(1779033703,4089235720),new Int_64(3144134277,2227873595),new Int_64(1013904242,4271175723),new Int_64(2773480762,1595750129),new Int_64(1359893119,2917565137),new Int_64(2600822924,725511199),new Int_64(528734635,4215389547),new Int_64(1541459225,327033209)]}var w=d.slice();w[h>>5]|=128<<(24-h%32);w[((h+1+128>>10)<<5)+31]=h;var B=w.length;for(var C=0;C<B;C+=32){M=x[0];L=x[1];J=x[2];I=x[3];G=x[4];F=x[5];E=x[6];D=x[7];for(var y=0;y<80;y++){if(y<16){s[y]=new Int_64(w[y*2+C],w[y*2+C+1])}else{s[y]=n(n(n(q(s[y-2]),s[y-7]),r(s[y-15])),s[y-16])}A=n(n(n(n(D,i(G)),g(G,F,E)),v[y]),s[y]);z=n(k(M),a(M,L,J));D=E;E=F;F=G;G=n(I,A);I=J;J=L;L=M;M=n(A,z)}x[0]=n(M,x[0]);x[1]=n(L,x[1]);x[2]=n(J,x[2]);x[3]=n(I,x[3]);x[4]=n(G,x[4]);x[5]=n(F,x[5]);x[6]=n(E,x[6]);x[7]=n(D,x[7])}switch(u){case"SHA-384":return[x[0].highOrder,x[0].lowOrder,x[1].highOrder,x[1].lowOrder,x[2].highOrder,x[2].lowOrder,x[3].highOrder,x[3].lowOrder,x[4].highOrder,x[4].lowOrder,x[5].highOrder,x[5].lowOrder];case"SHA-512":return[x[0].highOrder,x[0].lowOrder,x[1].highOrder,x[1].lowOrder,x[2].highOrder,x[2].lowOrder,x[3].highOrder,x[3].lowOrder,x[4].highOrder,x[4].lowOrder,x[5].highOrder,x[5].lowOrder,x[6].highOrder,x[6].lowOrder,x[7].highOrder,x[7].lowOrder];default:return[]}};this.getHash=function(s,u){var t=null;switch(u){case"HEX":t=e;break;case"B64":t=j;break;default:return"FORMAT NOT RECOGNIZED"}switch(s){case"SHA-384":if(p===null){p=c(s)}return t(p);case"SHA-512":if(m===null){m=c(s)}return t(m);default:return"HASH NOT RECOGNIZED"}}}pidCrypt.SHA512=function(c,b){if(!b){b="HEX"}var a=new jsSHA(c);return a.getHash("SHA-512",b)};pidCrypt.SHA384=function(c,b){if(!b){b="HEX"}var a=new jsSHA(c);return a.getHash("SHA-384",b)}};