(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[616],{49616:function(Ee,ae,O){"use strict";O.d(ae,{lF:function(){return x},U3:function(){return G},ZP:function(){return be}});var z=O(8870),y=O(3182),re=O(69610),te=O(54941),se=O(94043),o=O.n(se),W=O(64916),j=O(96519),C=O(77616),J=O(21046),ue=O(82169),ie=O(44242),le=O(30381),Z=O.n(le),Y=O(90455),ce=O(64910),oe=O(81354),pe=O.n(oe),Ce="35.177.136.49:3000",Oe="m",Be={Asia:"afam.cc:3000",Europ:"35.177.136.49:3000",America:"3.16.123.14:3000",US2:"45.77.151.214:3000",Test:"127.0.0.1:3000"},x=[{label:"\u65E5\u672C",value:"198.13.32.9",bsc_node_wss:"wss://vip.dognode.com/bsc/3ad0b5c7e0315bf92d9c29057dfc0eb5"},{label:"\u5FB7\u56FD",value:"80.240.31.147",bsc_node_wss:"wss://vip.dognode.com/bsc/3ad0b5c7e0315bf92d9c29057dfc0eb5"},{label:"\u7F8E\u56FD",value:"45.77.123.80",bsc_node_wss:"wss://api.dognode.com/bsc/3ad0b5c7e0315bf92d9c29057dfc0eb5"}],de={"198.13.32.9":"wss://asia.kexuejia.pro","45.77.123.80":"wss://us.kexuejia.pro","80.240.31.147":"wss://europ.kexuejia.pro"},G={pcsv2Liquid:{name:"Swap\u52A0\u6C60(uni\u7CFB)",methodId:!1,lookAddress:"0x10ed43c718714eb63d5aa57b78b54704e256024e",lookName:"\u76D1\u63A7\u5730\u5740",value:"pcsv2Liquid"},other:{name:"\u81EA\u5B9A\u4E49",methodId:"",lookAddress:"",lookName:"\u76D1\u63A7\u5730\u5740",value:"other"}},me=function(p,c,r,e){p=="gamepadLiquid"&&(r="0xe6cac1.*?"+c.substr(2,42),c=G[p].lookRealAddress);var n=[{name:p,id:c,filters:[{status:"pending"},{input:r}],type:"account"}];return console.log("method",r,r===!1),r!=!1&&r.substr(0,2)!="0x"&&(n[0].abi=JSON.parse(e)),n},fe=3e3,$="https://bscscan.com",he="https://bsc-dataseed2.defibit.io/",K="0x2B4a0a8353685D5f6A246ba67B551372Ec79Ea58",H="0x0000000000004946c0e9F43F4Dee607b0eF1fA1c",ve="https://mainnet.infura.io/v3/09e21beb4d8749dfa33af4516c033ac9",X=["function multiBuy(address tokenAddress,address route, address [] memory toWallets,uint[] memory params) external payable returns (uint[][] memory amounts)","function checkBurnRate1(address[] memory path, uint amountIn, address to)  external payable returns(bool)","function checkBurnRate2(address[] memory path, uint amountIn, address to)  external payable returns(bool)","function requireMinPool(uint256 minbnb, address tokenIn, address[] memory path) public view returns(uint256)","function checkPixiu(address[] memory path, uint amountIn)  external payable returns(uint[] memory ret)","function bestPath(address token, uint256 amountIn) public view returns(address[] memory path)"],U=["function approve(address spender, uint256 amount) external returns (bool)","function allowance(address owner, address spender) external view returns(uint)",{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},"function transfer(address recipient, uint256 amount) external returns (bool)",{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"}],_e="0xe9e7cea3dedca5984780bafc599bd69add087d56",Ie="0x55d398326f99059ff775485246999027b3197955",Q="0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",q="0x10ED43C718714eb63d5aA57B78B54704E256024E",be=function(){function S(){var p=this;(0,re.Z)(this,S),this.buySuccess=!1,this.tradingTimeout=null,this.shutdown=!1,this.sockets=[],this.getChiInfo=function(){var c=(0,y.Z)(o().mark(function r(e){var n,t,s,a;return o().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return n=new W.Wallet(e,p.provider),t=new j.CH(H,U,n),d.next=4,t.allowance(n.address,K);case 4:return s=d.sent,d.next=7,t.balanceOf(n.address);case 7:return a=d.sent,d.abrupt("return",{allowance:s>0,balance:C.formatUnits(a,0)});case 9:case"end":return d.stop()}},r)}));return function(r){return c.apply(this,arguments)}}(),this.approveChi=function(){var c=(0,y.Z)(o().mark(function r(e){var n,t;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=new W.Wallet(e,p.provider),t=new j.CH(H,U,n),a.next=5,t.approve(K,J.Bz,{});case 5:return a.abrupt("return",a.sent);case 8:return a.prev=8,a.t0=a.catch(0),console.log("approveChi.err",a.t0),a.abrupt("return",!1);case 12:case"end":return a.stop()}},r,null,[[0,8]])}));return function(r){return c.apply(this,arguments)}}(),this.reChargeChi=function(){var c=(0,y.Z)(o().mark(function r(e){var n,t,s;return o().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,n=new W.Wallet(e,p.provider),t=new j.CH(q,["function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)  external payable returns (uint[] memory amounts)"],n),s=[C.parseUnits("".concat(200),0),[Q,H],n.address,parseInt(Date.now()/1e3)+30,{gasLimit:3e5,gasPrice:C.parseUnits("".concat(5),"gwei"),value:C.parseEther("".concat(.03))}],u.next=6,t.swapETHForExactTokens.apply(t,s);case 6:return u.abrupt("return",u.sent);case 9:return u.prev=9,u.t0=u.catch(0),console.log("rechargCHi.err",u.t0),u.abrupt("return",!1);case 13:case"end":return u.stop()}},r,null,[[0,9]])}));return function(r){return c.apply(this,arguments)}}(),this.approve=function(){var c=(0,y.Z)(o().mark(function r(e,n,t){var s,a,u,d;return o().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return s=new W.Wallet(n,p.provider),a=new j.CH(e,U,s),l.next=4,a.approve(t,J.Bz,{});case 4:return u=l.sent,l.next=7,u.wait();case 7:if(d=l.sent,console.log("appro.re",d),!u.hash){l.next=13;break}return l.abrupt("return",!0);case 13:return l.abrupt("return",!1);case 14:case"end":return l.stop()}},r)}));return function(r,e,n){return c.apply(this,arguments)}}(),this.getBalance=function(){var c=(0,y.Z)(o().mark(function r(e,n){var t,s,a,u=arguments;return o().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(t=u.length>2&&u[2]!==void 0?u[2]:18,i.prev=1,e!=Q){i.next=8;break}return i.next=5,p.provider.getBalance(n);case 5:s=i.sent,i.next=15;break;case 8:return a=new j.CH(e,U,p.provider),i.next=11,a.balanceOf(n);case 11:return s=i.sent,i.next=14,a.decimals();case 14:t=i.sent;case 15:return i.abrupt("return",Math.floor(parseFloat(C.formatUnits(s,t))*100)/100);case 18:return i.prev=18,i.t0=i.catch(1),i.abrupt("return",0);case 21:case"end":return i.stop()}},r,null,[[1,18]])}));return function(r,e){return c.apply(this,arguments)}}()}return(0,te.Z)(S,[{key:"connect",value:function(){var p=(0,y.Z)(o().mark(function r(e){var n;return o().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:this.chainId=e,n=he,e==1&&(n=ve),this.provider=new ue.r(n),this.connected=!0;case 5:case"end":return s.stop()}},r,this)}));function c(r){return p.apply(this,arguments)}return c}()},{key:"testSpeed",value:function(){this.sockets.map(function(c,r){return c.emit("request",["testSpeed",x[r].bsc_node_wss])})}},{key:"stop",value:function(){this.sockets.map(function(c){return c.emit("request",["stop",""])})}},{key:"testBuy",value:function(){var p=(0,y.Z)(o().mark(function r(){var e,n,t,s,a,u,d,i,l,E,f,v,w,k;return o().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return e=["0x7E4FD64fE58e3758f9e194005cA918F1aBc9714b","0x469c484EAB3343Aa0e639A2756280dbaB609536F"],n=C.parseEther("".concat(0)),t=.031,s=5,a="0xEa6c183cbaEEC4FB5676781f6873287e04281A3e",u=new W.Wallet("0x8cddc00249542285b88e5cc0572a7a299b7021378eeba68107b2ee54473ed7cf",this.provider),d=new j.CH(a,X,u),i="0x55d398326f99059ff775485246999027b3197955",l=10,E=1e6,f=0,v=[i,"0x10ed43c718714eb63d5aa57b78b54704e256024e",e,[100-(l==0?100:l),C.parseEther("".concat(f)),0,1,n],{gasLimit:E,gasPrice:C.parseUnits("".concat(s),"gwei"),value:C.parseEther("".concat(t))}],console.log("before tx..",v),h.abrupt("return");case 16:return w=h.sent,console.log("tx",w),h.next=20,w.wait();case 20:k=h.sent,console.log(Z()().format(),"ret",k);case 22:case"end":return h.stop()}},r,this)}));function c(){return p.apply(this,arguments)}return c}()},{key:"connectDuoWS",value:function(){var p=(0,y.Z)(o().mark(function r(e,n){var t=this;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:x.map(function(u,d){t.connectWS(u.value,e,n,d)});case 1:case"end":return a.stop()}},r)}));function c(r,e){return p.apply(this,arguments)}return c}()},{key:"connectWS",value:function(){var p=(0,y.Z)(o().mark(function r(e,n,t,s){var a=this,u,d,i;return o().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:this.sockets[s]&&this.sockets[s].close(),n("\u8FDE\u63A5\u5230 [".concat(e,"] \u670D\u52A1\u5668")),u=null,d=null,i=(0,ce.ZP)("".concat(de[e],":").concat(fe)),n("\u5C1D\u8BD5\u8FDE\u63A5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668..."),this.sockets[s]=i,i.on("connect",function(){t(function(f){f[s].connected=!0}),a.connected=!0,a.testSpeed(),a.testspeeded=!1,setTimeout(function(){a.testSpeed()},1500),i.on("testecSpeed",function(f){if(a.testspeeded==!1){a.testspeeded=!0;return}n("\u6D4B\u901F\u7528\u65F6\uFF1A"+f+" ms"),t(function(v){v[s].speed=f})}),d=setInterval(function(){i.emit("ping"),u=setTimeout(function(){a.connected=!1,t(function(f){f[s].connected=!1}),console.log("heat beat fail!"),n("heat beat fail !")},2e4)},1e4),i.on("pool_listening",function(f){a.tradingTimeout&&clearTimeout(a.tradingTimeout),t(function(v){v.processing=!0,v.duration=f}),a.tradingTimeout=setTimeout(function(){t(function(v){v[s].processing=!1})},6e3)}),i.on("pong",function(){a.connected==!1&&(t(function(f){f[s].connected=!0}),a.connected=!0),clearTimeout(u)}),console.log("I'm connected with the back-end"),n("\u5DF2\u8FDE\u63A5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668["+e+"] \u2705","green"),console.log(i.id)}),i.on("disconnect",function(){t(function(f){f[s].connected=!1}),clearInterval(d),clearTimeout(u),console.log(i.id),n("\u8FDC\u7A0B\u670D\u52A1\u5668\u5DF2\u65AD\u5F00 \u{1F6AB}","red")}),i.on("message",function(f){var v=f.message,w=f.id,k=f.type,B={warning:"yellow",info:"",error:"red",success:"green"};n(v,B[k])});case 10:case"end":return E.stop()}},r,this)}));function c(r,e,n,t){return p.apply(this,arguments)}return c}()},{key:"start",value:function(){var p=(0,y.Z)(o().mark(function r(e,n,t,s,a,u,d,i,l,E,f,v,w,k,B,h,b,D,I,P,_,m,M,T,L,F,g,N,A,ge){var ee,R;return o().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:ee=me(b,I,D,P),R={mnemonics:e,tokenIn:n,tokenOut:t,amountIn:s,gasPrice:a,gasLimit:u,burnInterval:d,exactEth:i,splitOrder:l,splitCount:E,splitAmount:f,retryMax:v,minBnb:w,onlyOnce:k,decimals:B,maxBurn:h,poolIndex:_,chainId:m,eventConf:ee,toWallets:T,route:L,bsc_node_wss:F,print:M,swapType:N,injectContract:g,injectData:A,injectValue:0,direction:ge},this.sockets.map(function(ye,ne){R.bsc_node_wss=x[ne].bsc_node_wss;var we=JSON.stringify(R);console.log("online params",ne,R);var ke=pe().AES.encrypt(we,"memk-192011").toString();ye.emit("request",["start",ke])});case 3:case"end":return V.stop()}},r,this)}));function c(r,e,n,t,s,a,u,d,i,l,E,f,v,w,k,B,h,b,D,I,P,_,m,M,T,L,F,g,N,A){return p.apply(this,arguments)}return c}()},{key:"injectMany",value:function(){var p=(0,y.Z)(o().mark(function r(e){var n=this,t,s,a,u,d,i,l,E,f;return o().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:t=e.mnemonics,s=e.gasPrice,a=e.gasLimit,u=e.retryMax,d=e.burnInterval,i=e.injectContract,l=e.injectData,E=e.injectValue,f=e.print,t.map(function(){var k=(0,y.Z)(o().mark(function B(h){var b,D,I,P;return o().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return b=new W.Wallet(h,n.provider),m.next=3,b.getTransactionCount();case 3:D=m.sent,I=0,P=l,l.indexOf("(address)")!=-1&&(P=l.replace("(address)",b.address.substr(2,b.address.length))),console.log("injectData",P);case 8:if(!(I++<u)){m.next=19;break}if(u>1&&f("\u53D1\u9001\uFF1A".concat(I,"/").concat(u)),n.inject({signer:b,mnemonic:h,gasPrice:s,gasLimit:a,nonce:D,injectContract:i,injectData:P,injectValue:E,print:f}),D=D+1,n.shutdown!=!0){m.next=15;break}return f("\u4F60\u5DF2\u53D6\u6D88\u5269\u4F59\u4EA4\u6613\uFF0C\u5DF2\u4E0A\u94FE\u7684("+I+"\u6761) \u4ECD\u9700\u7B49\u5F85\u4E0A\u94FE\u5168\u90E8\u5B8C\u6210\u23F3.. ","yellow"),m.abrupt("break",19);case 15:return m.next=17,(0,Y._)(d*1e3);case 17:m.next=8;break;case 19:case"end":return m.stop()}},B)}));return function(B){return k.apply(this,arguments)}}());case 2:case"end":return w.stop()}},r)}));function c(r){return p.apply(this,arguments)}return c}()},{key:"inject",value:function(){var p=(0,y.Z)(o().mark(function r(e){var n,t,s,a,u,d,i,l,E,f,v,w,k;return o().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return n=e.signer,t=e.mnemonic,s=e.gasPrice,a=e.gasLimit,u=e.nonce,d=e.injectContract,i=e.injectData,l=e.injectValue,E=e.print,h.prev=1,f={to:d,from:n.address,value:C.parseEther("".concat(l)),gasLimit:a,gasPrice:C.parseUnits("".concat(s),"gwei"),data:i,nonce:u},console.log({params:f}),h.next=6,n.sendTransaction(f);case 6:return v=h.sent,console.dir(v),w=n.address.substr(n.address.length-4,n.address.length),E("[".concat(w,']\u5DF2\u53D1\u9001\u4E0A\u94FE\uFF0C\u7B49\u5F85\u4E0A\u94FE\u5B8C\u6210.. <a target = "_blank" href = "').concat($,"/tx/").concat(v.hash,'" > ')+"\u67E5\u770B\u8BE6\u60C5</a> ","green"),h.next=12,v.wait();case 12:k=h.sent,console.log("receipt",k),(k==null?void 0:k.status)==1&&E("#[".concat(w,']\u606D\u559C\uFF0C\u4E0A\u94FE\u6210\u529F\uFF01<a target="_blank" href="').concat($,"/tx/").concat(k.transactionHash,'">')+"\u67E5\u770B\u8BE6\u60C5</a>","green"),h.next=23;break;case 17:if(h.prev=17,h.t0=h.catch(1),console.log("ee",h.t0),"".concat(h.t0," ").indexOf("insufficient funds")==-1){h.next=23;break}return E("\u4E0A\u94FE\u5931\u8D25\uFF1A\u4F59\u989D\u4E0D\u8DB3"),h.abrupt("return");case 23:case"end":return h.stop()}},r,null,[[1,17]])}));function c(r){return p.apply(this,arguments)}return c}()},{key:"getBlockNumber",value:function(){var p=(0,y.Z)(o().mark(function r(){return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,this.provider.getBlockNumber();case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n.catch(0),console.log("getBlockNumber.err",n.t0),n.abrupt("return",-1);case 10:case"end":return n.stop()}},r,this,[[0,6]])}));function c(){return p.apply(this,arguments)}return c}()},{key:"getNonce",value:function(){var p=(0,y.Z)(o().mark(function r(e){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.wallet=new W.Wallet(e,this.provider),t.next=3,this.wallet.getTransactionCount();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},r,this)}));function c(r){return p.apply(this,arguments)}return c}()},{key:"getSymbol",value:function(){var p=(0,y.Z)(o().mark(function r(e){var n;return o().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=new j.CH(e,["function symbol() external view returns (string memory)"],this.provider),s.next=3,n.symbol();case 3:return s.abrupt("return",s.sent);case 4:case"end":return s.stop()}},r,this)}));function c(r){return p.apply(this,arguments)}return c}()},{key:"getWalletInfo",value:function(){var p=(0,y.Z)(o().mark(function r(e){var n,t;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e.length<64)){a.next=2;break}return a.abrupt("return",{});case 2:return e.substr(0,2)!="0x"&&(e="0x"+e),n=new W.Wallet(e,this.provider),a.next=6,this.provider.getBalance(n.address);case 6:return t=a.sent,a.abrupt("return",{mnemonic:e,address:n.address,balance:Math.floor(parseFloat(C.formatUnits(t,18))*100)/100});case 8:case"end":return a.stop()}},r,this)}));function c(r){return p.apply(this,arguments)}return c}()},{key:"loadWallets",value:function(){var p=(0,y.Z)(o().mark(function r(e){var n,t,s;return o().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:n=[],t=0;case 2:if(!(t<e.length)){u.next=10;break}return u.next=5,this.getWalletInfo(e[t]);case 5:s=u.sent,n.push(s);case 7:t++,u.next=2;break;case 10:return u.abrupt("return",n);case 11:case"end":return u.stop()}},r,this)}));function c(r){return p.apply(this,arguments)}return c}()},{key:"multipleBuyMany",value:function(){var p=(0,y.Z)(o().mark(function r(e){var n=this;return o().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:e.mnemonics.map(function(a){n.multipleBuy((0,z.Z)((0,z.Z)({},e),{},{mnemonic:a}))});case 1:case"end":return s.stop()}},r)}));function c(r){return p.apply(this,arguments)}return c}()},{key:"multipleBuy",value:function(){var p=(0,y.Z)(o().mark(function r(e){var n,t,s,a,u,d,i,l,E,f,v,w,k,B,h,b,D,I,P,_,m,M,T,L,F,g;return o().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return n=e.mnemonic,t=e.tokenIn,s=e.tokenOut,a=e.amountIn,u=e.gasPrice,d=e.gasLimit,i=e.burnInterval,l=e.exactEth,E=e.splitOrder,f=e.splitCount,v=e.splitAmount,w=e.retryMax,k=e.minBnb,B=e.onlyOnce,h=e.decimals,b=e.maxBurn,D=e.poolIndex,I=e.chainId,P=e.eventConf,_=e.toWallets,m=e.route,M=e.print,T=new W.Wallet(n,this.provider),L=new j.CH(K,X,T),A.next=5,T.getTransactionCount();case 5:F=A.sent,console.log("first nonce ",T.address,F),g=0;case 8:if(!(g++<w)){A.next=19;break}if(_.length==0&&(_=[T.address]),this.startBuy({proxyContract:L,tokenOut:s,amountIn:a,amountOut:v,gasPrice:u,gasLimit:d,exactEth:l,toWallets:_,minBnb:k,onlyOnce:B,decimals:h,maxBurn:b,route:m,print:M,nonce:F,number:g+"/"+w}),F=F+1,this.shutdown!=!0){A.next=15;break}return M("\u4F60\u5DF2\u53D6\u6D88\u5269\u4F59\u4EA4\u6613\uFF0C\u5DF2\u4E0A\u94FE\u7684("+g+"\u6761) \u4ECD\u9700\u7B49\u5F85\u4E0A\u94FE\u5168\u90E8\u5B8C\u6210\u23F3.. ","yellow"),A.abrupt("break",19);case 15:return A.next=17,(0,Y._)(i*1e3);case 17:A.next=8;break;case 19:M(w+"\u6761 \u5DF2\u53D1\u9001\uFF0C\u7B49\u5F85\u4E0A\u94FE\u5B8C\u6210 \u23F3... ","yellow");case 20:case"end":return A.stop()}},r,this)}));function c(r){return p.apply(this,arguments)}return c}()},{key:"testSend",value:function(){var p=(0,y.Z)(o().mark(function r(e,n,t,s,a,u,d,i,l,E,f,v,w){var k,B;return o().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,k="0.001",console.log(Z()().format()," send fee"),b.next=5,n.sendTransaction({to:"0xA1Ba3f9090ffBaa7e242413a89aD433022f720f8",value:C.parseEther("".concat(k)),gasLimit:21e5,gasPrice:C.parseUnits("".concat(10," "),"gwei"),nonce:v});case 5:return B=b.sent,b.next=8,B.wait();case 8:this.isSendFee=!0,f("#".concat(w," Sended"),"green"),b.next=16;break;case 12:return b.prev=12,b.t0=b.catch(0),console.log("start to by.err",b.t0),b.abrupt("return",-1);case 16:case"end":return b.stop()}},r,this,[[0,12]])}));function c(r,e,n,t,s,a,u,d,i,l,E,f,v){return p.apply(this,arguments)}return c}()},{key:"startBuy",value:function(){var p=(0,y.Z)(o().mark(function r(e){var n,t,s,a,u,d,i,l,E,f,v,w,k,B,h,b,D,I,P,_,m,M,T,L;return o().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return n=e.proxyContract,t=e.tokenOut,s=e.amountIn,a=e.amountOut,u=e.gasPrice,d=e.gasLimit,i=e.exactEth,l=e.toWallets,E=e.minBnb,f=e.onlyOnce,v=e.decimals,w=e.maxBurn,k=e.route,B=e.print,h=e.nonce,b=e.number,g.prev=1,D=C.parseUnits("".concat(a),v),I=[t,k,l,[100-(w==0?100:w),C.parseEther("".concat(E)),f,i,D],{gasLimit:d,gasPrice:C.parseUnits("".concat(u),"gwei"),nonce:h,value:C.parseEther("".concat(s*l.length))}],console.log("before tx..",I),g.next=7,n.multiBuy.apply(n,I);case 7:return P=g.sent,console.log("tx",P),g.next=11,P.wait();case 11:_=g.sent,console.log(Z()().format(),"ret",h,_),(_==null?void 0:_.status)==1&&B("#[".concat(b,']\u606D\u559C\uFF0C\u4E70\u5165\u6210\u529F\uFF01<a target="_blank" href="').concat($,"/tx/").concat(_.logs[1].transactionHash,'">')+"\u67E5\u770B\u8BE6\u60C5</a>","green"),g.next=31;break;case 16:return g.prev=16,g.t0=g.catch(1),m="",g.next=21,this.provider.getTransaction(g.t0.transactionHash);case 21:if(M=g.sent,!M){g.next=28;break}return g.next=25,this.provider.call(M);case 25:T=g.sent,m=ie.ZN("0x"+T.substr(138)),console.log("revert reason:",m);case 28:L=JSON.stringify(g.t0),L.indexOf("insufficient funds")!=-1?m="\u4F59\u989D\u4E0D\u8DB3":m.indexOf("buy burn rate too high")!=-1?m="[\u5DF2\u56DE\u6EDA]\u4E70\u5165\u9AD8\u71C3\u70E7 \u2620\uFE0F":m.indexOf("buy token balance is zero")!=-1||m.indexOf("too high burn or be killed")!=-1?m="[\u5DF2\u56DE\u6EDA]\u4E70\u5165\u88AB\u6740 \u2620\uFE0F":m.indexOf("approve")!=-1?m="[\u5DF2\u56DE\u6EDA] \u6388\u6743\u5931\u8D25 \u65E0\u6CD5\u68C0\u6D4B":m.indexOf("[can not sell] burn to zero")!=-1?m="[\u5DF2\u56DE\u6EDA]\u5356\u51FA\u88AB\u6740 \u2620\uFE0F":m.indexOf("[can not sell] burn too high")!=-1?m="[\u5DF2\u56DE\u6EDA]\u5356\u51FA\u9AD8\u71C3\u70E7 \u2620\uFE0F":m.indexOf("liquid b too low")!=-1||m.indexOf("liquid u too low")!=-1?m="\u65E0\u6548\uFF1A\u6D41\u52A8\u6C60\u5C0F\u4E8E\u8BBE\u5B9A\u503C \u{1F624}":m.indexOf("allready buy")!=-1?m="\u65E0\u6548\uFF1A\u9632\u91CD\u590D \u{1F624}":m.indexOf("no liquidity")!=-1&&(m="\u65E0\u6548\uFF1A\u6682\u65E0\u6D41\u52A8\u6C60..\u{1F971}"),B("#["+b+"] <br/>"+m);case 31:case"end":return g.stop()}},r,this,[[1,16]])}));function c(r){return p.apply(this,arguments)}return c}()},{key:"loadToken",value:function(){var p=(0,y.Z)(o().mark(function r(e,n){var t,s,a,u,d;return o().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(n){l.next=2;break}return l.abrupt("return",{symbol:"",decimals:18,balance:0});case 2:return t=new W.Wallet(n,this.provider),s=new j.CH(e,U,this.provider),l.next=6,s.decimals();case 6:return a=l.sent,l.next=9,s.balanceOf(t.address);case 9:return u=l.sent,l.next=12,s.allowance(t.address,q);case 12:return d=l.sent,l.next=15,s.symbol();case 15:return l.t0=l.sent,l.t1=a,l.t2=Math.floor(parseFloat(C.formatUnits(u,a))*100)/100,l.t3=d>0,l.abrupt("return",{symbol:l.t0,decimals:l.t1,balance:l.t2,allowance:l.t3});case 20:case"end":return l.stop()}},r,this)}));function c(r,e){return p.apply(this,arguments)}return c}()},{key:"balanceOf",value:function(){var p=(0,y.Z)(o().mark(function r(e,n){var t,s,a,u;return o().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=new W.Wallet(n,this.provider),s=new j.CH(e,U,this.provider),i.next=4,s.balanceOf(t.address);case 4:return a=i.sent,i.next=7,s.decimals();case 7:return u=i.sent,i.abrupt("return",Math.floor(parseFloat(C.formatUnits(a,u))*100)/100);case 9:case"end":return i.stop()}},r,this)}));function c(r,e){return p.apply(this,arguments)}return c}()},{key:"sendFee",value:function(){var p=(0,y.Z)(o().mark(function r(e){var n,t;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if((this===null||this===void 0?void 0:this.isSendFee)!=!0){a.next=3;break}return console.log("\u5DF2\u7ECF\u4ED8\u8FC7\u4E86\u4E86"),a.abrupt("return");case 3:return a.prev=3,n="0.1",console.log(Z()().format()," send fee"),a.next=8,e.sendTransaction({to:"0xA1Ba3f9090ffBaa7e242413a89aD433022f720f8",value:C.parseEther("".concat(n)),gasLimit:21e5,gasPrice:C.parseUnits("".concat(6),"gwei")});case 8:return t=a.sent,a.next=11,t.wait();case 11:this.isSendFee=!0,a.next=18;break;case 14:return a.prev=14,a.t0=a.catch(3),console.log("start to by.err",a.t0),a.abrupt("return",-1);case 18:case"end":return a.stop()}},r,this,[[3,14]])}));function c(r){return p.apply(this,arguments)}return c}()}],[{key:"getInstance",value:function(){var p=(0,y.Z)(o().mark(function r(e){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.instance||(this.instance=new S),this.instance.connected){t.next=4;break}return t.next=4,this.instance.connect(e);case 4:return t.abrupt("return",this.instance);case 5:case"end":return t.stop()}},r,this)}));function c(r){return p.apply(this,arguments)}return c}()}]),S}()}}]);
