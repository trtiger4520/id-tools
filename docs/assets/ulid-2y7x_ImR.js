import{_ as Yt,o as G,c as J,r as vt,d as Me,b as P,w as fe,a as d,n as Te,u as y,e as yt,f as bt,g as wt,h as Jt,i as Kt,j as zt,k as en,s as tn,l as Le,F as nn,t as rn,m as on,p as sn,q as se,v as pe,x as ie,y as R,z as an}from"./app-DKaxLWKv.js";const cn={},ln={class:"mx-a w-full p-sm lg:w-4xl md:w-2xl sm:w-xl"};function un(t,e){return G(),J("div",ln,[vt(t.$slots,"default")])}const dn=Yt(cn,[["render",un]]),fn=t=>{const e=document.createElement("textarea");if(e.value=t,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select(),!document.execCommand("copy"))throw new Error("Oops, unable to copy");document.body.removeChild(e)},hn=async t=>{try{return navigator.clipboard?(await navigator.clipboard.writeText(t),!0):(fn(t),!0)}catch(e){return console.error("Failed to copy text to clipboard",e),!1}};var ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function pn(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Et=pn,mn=typeof ae=="object"&&ae&&ae.Object===Object&&ae,gn=mn,_n=gn,vn=typeof self=="object"&&self&&self.Object===Object&&self,yn=_n||vn||Function("return this")(),Ct=yn,bn=Ct,wn=function(){return bn.Date.now()},Tn=wn,En=/\s/;function Cn(t){for(var e=t.length;e--&&En.test(t.charAt(e)););return e}var $n=Cn,In=$n,Sn=/^\s+/;function On(t){return t&&t.slice(0,In(t)+1).replace(Sn,"")}var An=On,xn=Ct,Un=xn.Symbol,$t=Un,qe=$t,It=Object.prototype,Nn=It.hasOwnProperty,Fn=It.toString,Z=qe?qe.toStringTag:void 0;function Rn(t){var e=Nn.call(t,Z),n=t[Z];try{t[Z]=void 0;var r=!0}catch{}var o=Fn.call(t);return r&&(e?t[Z]=n:delete t[Z]),o}var Vn=Rn,Mn=Object.prototype,Bn=Mn.toString;function jn(t){return Bn.call(t)}var kn=jn,Xe=$t,Dn=Vn,Ln=kn,qn="[object Null]",Xn="[object Undefined]",He=Xe?Xe.toStringTag:void 0;function Hn(t){return t==null?t===void 0?Xn:qn:He&&He in Object(t)?Dn(t):Ln(t)}var Gn=Hn;function Pn(t){return t!=null&&typeof t=="object"}var Wn=Pn,Zn=Gn,Qn=Wn,Yn="[object Symbol]";function Jn(t){return typeof t=="symbol"||Qn(t)&&Zn(t)==Yn}var Kn=Jn,zn=An,Ge=Et,er=Kn,Pe=NaN,tr=/^[-+]0x[0-9a-f]+$/i,nr=/^0b[01]+$/i,rr=/^0o[0-7]+$/i,or=parseInt;function sr(t){if(typeof t=="number")return t;if(er(t))return Pe;if(Ge(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Ge(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=zn(t);var n=nr.test(t);return n||rr.test(t)?or(t.slice(2),n?2:8):tr.test(t)?Pe:+t}var ir=sr,ar=Et,me=Tn,We=ir,cr="Expected a function",lr=Math.max,ur=Math.min;function dr(t,e,n){var r,o,s,i,c,_,m=0,b=!1,h=!1,E=!0;if(typeof t!="function")throw new TypeError(cr);e=We(e)||0,ar(n)&&(b=!!n.leading,h="maxWait"in n,s=h?lr(We(n.maxWait)||0,e):s,E="trailing"in n?!!n.trailing:E);function w(f){var S=r,O=o;return r=o=void 0,m=f,i=t.apply(O,S),i}function N(f){return m=f,c=setTimeout(l,e),b?w(f):i}function C(f){var S=f-_,O=f-m,oe=e-S;return h?ur(oe,s-O):oe}function T(f){var S=f-_,O=f-m;return _===void 0||S>=e||S<0||h&&O>=s}function l(){var f=me();if(T(f))return a(f);c=setTimeout(l,C(f))}function a(f){return c=void 0,E&&r?w(f):(r=o=void 0,i)}function $(){c!==void 0&&clearTimeout(c),m=0,r=_=o=c=void 0}function I(){return c===void 0?i:a(me())}function p(){var f=me(),S=T(f);if(r=arguments,o=this,_=f,S){if(c===void 0)return N(_);if(h)return clearTimeout(c),c=setTimeout(l,e),w(_)}return c===void 0&&(c=setTimeout(l,e)),i}return p.cancel=$,p.flush=I,p}var fr=dr;const Ee=Tt(fr),hr=Me({__name:"CopyBtn",props:{text:{}},setup(t){const e=t,n=P(!1),r=P(!1),o=async i=>{i.preventDefault(),i.stopPropagation(),n.value=!0;const c=await hn(e.text);n.value=!1,r.value=c},s=Ee(()=>{r.value=!1},2e3);return fe(r,i=>i&&s()),(i,c)=>(G(),J("button",{type:"button",class:Te({"bg-green-300":y(r),"bg-blue-300":y(n)}),onClick:o},[d("i",{class:Te({"i-material-symbols-check":y(r),"i-material-symbols-content-copy":!y(r)})},null,2),yt(" COPY ")],2))}}),pr=self.crypto;function mr(t){const e=new Uint8Array(t);return pr.getRandomValues(e),e}var St={randomBytes:mr};const{randomBytes:gr}=St,ge=16;let _r=class{compare(e,n){const r=e.findIndex((o,s)=>o!==n[s]);return~r&&Math.sign(e[r]-n[r])}generateOneFilled(){return new Uint8Array(ge).fill(255)}generateRandomFilled(){return gr(ge)}generateZeroFilled(){return new Uint8Array(ge).fill(0)}};var V=new _r;class W extends Error{get name(){return this.constructor.name}}let vr=class extends W{},yr=class extends W{},br=class extends W{},wr=class extends W{},Tr=class extends W{};var ne={Id128Error:W,ClockSequenceOverflow:vr,InvalidBytes:yr,InvalidEncoding:br,InvalidEpoch:wr,UnsupportedVersion:Tr};const{InvalidEpoch:Ze}=ne,Qe=0,Ye=Math.pow(2,48);let Er=class{fromEpoch(e,n){return new Date(n+e)}toEpoch(e,n=null){const o=(n===null?Date.now():Number.isInteger(n)?n:n instanceof Date?n.getTime():(()=>{throw new Ze(`Failed to coerce time [${n}] to epoch`)})())-e;if(o<Qe||o>=Ye){const s=new Date(Qe+e).toISOString(),i=new Date(Ye-1+e).toISOString();throw new Ze(`Epoch must be between ${s} and ${i}`)}return o}};var he=new Er;const Cr=V,Je=Symbol("bytes");let $r=class{constructor(e){this[Je]=e}clone(){return new this.constructor(this.bytes.slice())}get bytes(){return this[Je]}get[Symbol.toStringTag](){return this.constructor.name}compare(e){return Cr.compare(this.bytes,e.bytes)}equal(e){return this.compare(e)===0}};var Ot={BaseId:$r};const _e=V,Ke=he,{BaseId:Ir}=Ot,At=0,ze=0,Ce=Math.pow(2,32),q=255;function xt(t,e){const n=t%Ce,r=(t-n)/Ce;let o=At-1;e[++o]=r>>>8&q,e[++o]=r>>>0&q,e[++o]=n>>>24&q,e[++o]=n>>>16&q,e[++o]=n>>>8&q,e[++o]=n>>>0&q}let Sr=class extends Ir{static generate({time:e}={}){e=Ke.toEpoch(ze,e);let n=_e.generateRandomFilled();return xt(e,n),new this(n)}static MIN(){return new this(_e.generateZeroFilled())}static MAX(){return new this(_e.generateOneFilled())}get time(){let e=At-1;const n=0|this.bytes[++e]<<8|this.bytes[++e]<<0,r=0|this.bytes[++e]<<24|this.bytes[++e]<<16|this.bytes[++e]<<8|this.bytes[++e]<<0,o=n*Ce+(r>>>0);return Ke.fromEpoch(ze,o)}};var Ut={Ulid:Sr,setTime:xt};const{Ulid:Or,setTime:Ar}=Ut,xr=V,Ur=he,{ClockSequenceOverflow:Nr}=ne,Fr=0,Nt=6,Ft=8,Rr=0;let $e,ve;function Vr(t){for(let e=Ft-1,n=Nt-1;e>n;--e)if(t[e]===255)t[e]=0;else{++t[e];return}throw new Nr("Exhausted clock sequence")}function Mr(t){t[Nt]&=127}function Br(t){for(let e=Fr;e<Ft;++e)t[e]=$e.bytes[e]}let Rt=class extends Or{static reset(){ve=-1,$e=this.MIN()}static generate({time:e}={}){e=Ur.toEpoch(Rr,e);let n=xr.generateRandomFilled();return e<=ve?(Br(n),Vr(n)):(Ar(e,n),Mr(n),ve=e),$e=new this(n)}};Rt.reset();var jr={UlidMonotonic:Rt};const{BaseId:kr}=Ot,et=V,Ie=8,Se=6;function Oe(t,e){e[Ie]&=255>>>t+1,e[Ie]|=(7<<3-t&7)<<5}function Ae(t,e){e[Se]&=15,e[Se]|=t<<4}let Dr=class extends kr{static MIN(){let e=et.generateZeroFilled();return Oe(this.VARIANT,e),Ae(this.VERSION,e),new this(e)}static MAX(){let e=et.generateOneFilled();return Oe(this.VARIANT,e),Ae(this.VERSION,e),new this(e)}get variant(){const e=this.bytes[Ie]>>>5;return e===7?3:(e&6)===6?2:(e&4)===4?1:0}get version(){return this.bytes[Se]>>>4}};var re={Uuid:Dr,setVersion:Ae,setVariant:Oe};const{randomBytes:Lr}=St,ye=Symbol("mac-address");class qr{constructor(){this.reset()}get mac_address(){let e=this[ye];return e||(e=this[ye]=Lr(6),e[0]|=1),e}reset(){this[ye]=null}}var Vt=new qr;const Mt=V,tt=he,Xr=Vt,{Uuid:Hr,setVariant:Gr,setVersion:Pr}=re,Bt=0,nt=2,K=8,jt=10,Be=Math.pow(2,14),rt=Date.parse("1582-10-15Z"),xe=Math.pow(2,12),Ue=Math.pow(2,20),x=255;let D,H,z;function kt(){D=(D+1)%Be}function Wr(t,e){if(D===null){const r=Mt.generateRandomFilled();D=(0|r[K+0]<<8|r[K+1]<<0)%Be}else t<z&&kt();let n=K-1;e[++n]=D>>>8&x,e[++n]=D>>>0&x}function Zr(t,e){for(let n=0;n<6;++n)e[jt+n]=t[n]}function Qr(t,e){H=t>z?0:H+1,H===xe&&(H=0,kt());const n=t%Ue,r=n*xe+H,o=(t-n)/Ue;let s=Bt-1;e[++s]=r>>>24&x,e[++s]=r>>>16&x,e[++s]=r>>>8&x,e[++s]=r>>>0&x,e[++s]=o>>>8&x,e[++s]=o>>>0&x,e[++s]=o>>>24&x,e[++s]=o>>>16&x}let Dt=class extends Hr{static get VARIANT(){return 1}static get VERSION(){return 1}static reset(){D=null,H=-1,z=-1}static generate({node:e,time:n}={}){n=tt.toEpoch(rt,n);let r=Mt.generateZeroFilled();return Qr(n,r),Wr(n,r),Zr(e||Xr.mac_address,r),Gr(this.VARIANT,r),Pr(this.VERSION,r),n>z&&(z=n),new this(r)}get clock_sequence(){return(0|this.bytes[K]<<8|this.bytes[K+1])&Be-1}get hires_time(){return(0|this.bytes[nt]<<8|this.bytes[nt+1])&xe-1}get node(){return this.bytes.slice(jt)}get time(){let e=Bt-1;const n=0|this.bytes[++e]<<12|this.bytes[++e]<<4|this.bytes[++e]>>>4;++e;const o=(0|this.bytes[++e]<<8|this.bytes[++e]<<0|(this.bytes[++e]&15)<<24|this.bytes[++e]<<16)*Ue+n;return tt.fromEpoch(rt,o)}};Dt.reset();var Yr={Uuid1:Dt};const Jr=V,{Uuid:Kr,setVariant:zr,setVersion:eo}=re;let to=class extends Kr{static get VARIANT(){return 1}static get VERSION(){return 4}static generate(){let e=Jr.generateRandomFilled();return zr(this.VARIANT,e),eo(this.VERSION,e),new this(e)}};var no={Uuid4:to};const Lt=V,ot=he,ro=Vt,{Uuid:oo,setVariant:so,setVersion:io}=re,qt=0,st=6,ee=8,Xt=10,je=Math.pow(2,14),it=Date.parse("1582-10-15Z"),Ht=Math.pow(2,12),Ne=Math.pow(2,32),U=255;let L,B,te;function Gt(){L=(L+1)%je}function ao(t,e){if(L===null){const r=Lt.generateRandomFilled();L=(0|r[ee+0]<<8|r[ee+1]<<0)%je}else t<te&&Gt();let n=ee-1;e[++n]=L>>>8&U,e[++n]=L>>>0&U}function co(t,e){for(let n=0;n<6;++n)e[Xt+n]=t[n]}function lo(t,e){B=t>te?0:B+1,B===Ht&&(B=0,Gt());const n=t%Ne,r=(t-n)/Ne;let o=qt-1;e[++o]=r>>>8&U,e[++o]=r>>>0&U,e[++o]=n>>>24&U,e[++o]=n>>>16&U,e[++o]=n>>>8&U,e[++o]=n>>>0&U,e[++o]=B>>>8&U,e[++o]=B>>>0&U}let Pt=class extends oo{static get VARIANT(){return 1}static get VERSION(){return 6}static reset(){L=null,B=-1,te=-1}static generate({node:e,time:n}={}){n=ot.toEpoch(it,n);let r=Lt.generateZeroFilled();return lo(n,r),ao(n,r),co(e||ro.mac_address,r),so(this.VARIANT,r),io(this.VERSION,r),n>te&&(te=n),new this(r)}get clock_sequence(){return(0|this.bytes[ee]<<8|this.bytes[ee+1])&je-1}get hires_time(){return(0|this.bytes[st]<<8|this.bytes[st+1])&Ht-1}get node(){return this.bytes.slice(Xt)}get time(){let e=qt-1;const n=0|this.bytes[++e]<<8|this.bytes[++e]<<0,r=0|this.bytes[++e]<<24|this.bytes[++e]<<16|this.bytes[++e]<<8|this.bytes[++e]<<0,o=n*Ne+(r>>>0);return ot.fromEpoch(it,o)}};Pt.reset();var uo={Uuid6:Pt};const at=V,{Uuid:fo,setVariant:ct,setVersion:lt}=re;let ho=class extends fo{static get VARIANT(){return 0}static get VERSION(){return 0}static generate(){let e=at.generateZeroFilled();return ct(this.VARIANT,e),lt(this.VERSION,e),new this(e)}static MAX(){let e=at.generateZeroFilled();return ct(this.VARIANT,e),lt(this.VERSION,e),new this(e)}};var po={UuidNil:ho};const{InvalidEncoding:mo,InvalidBytes:go}=ne,be=Symbol("valid_encoding_pattern");let _o=class{constructor({valid_encoding_pattern:e}={}){this[be]=e}decode(e){if(this.isValidEncoding(e))return this.decodeTrusted(e);throw new mo(`Encoding [${e}] does not satisfy ${this[be]}`)}decodeTrusted(e){return ByteArray.generateRandomFilled()}encode(e){if(this.isValidBytes(e))return this.encodeTrusted(e);throw new go("Requires a 16-byte Uint8Array")}encodeTrusted(e){return""}isValidBytes(e){return e instanceof Uint8Array&&e.length===16}isValidEncoding(e){return(typeof e=="string"||e instanceof String)&&this[be].test(e)}};var ke={BaseCoder:_o};const{BaseCoder:vo}=ke,A="0123456789ABCDEFGHJKMNPQRSTVWXYZ",yo=31,bo=Array.from(A).reduce((t,e,n)=>(t[e]=t[e.toLowerCase()]=n,t),{I:A.indexOf("1"),i:A.indexOf("1"),L:A.indexOf("1"),l:A.indexOf("1"),O:A.indexOf("0"),o:A.indexOf("0"),U:A.indexOf("V"),u:A.indexOf("V")}),wo=Array.from(A);function To(t){return bo[t]}function Eo(t){return wo[t&yo]}let Co=class extends vo{constructor(){super({valid_encoding_pattern:/^[0-7][^\W_]{25}$/})}decodeTrusted(e){const n=new Uint8Array(16),r=[];for(let o=0,s=e.length;o<s;++o)r.push(To(e[o]));return n[0]=r[0]<<5|r[1],n[1]=r[2]<<3|r[3]>>2,n[2]=r[3]<<6|r[4]<<1|r[5]>>4,n[3]=r[5]<<4|r[6]>>1,n[4]=r[6]<<7|r[7]<<2|r[8]>>3,n[5]=r[8]<<5|r[9],n[6]=r[10]<<3|r[11]>>2,n[7]=r[11]<<6|r[12]<<1|r[13]>>4,n[8]=r[13]<<4|r[14]>>1,n[9]=r[14]<<7|r[15]<<2|r[16]>>3,n[10]=r[16]<<5|r[17],n[11]=r[18]<<3|r[19]>>2,n[12]=r[19]<<6|r[20]<<1|r[21]>>4,n[13]=r[21]<<4|r[22]>>1,n[14]=r[22]<<7|r[23]<<2|r[24]>>3,n[15]=r[24]<<5|r[25],n}encodeTrusted(e){let n=[e[0]>>5,e[0],e[1]>>3,e[1]<<2|e[2]>>6,e[2]>>1,e[2]<<4|e[3]>>4,e[3]<<1|e[4]>>7,e[4]>>2,e[4]<<3|e[5]>>5,e[5],e[6]>>3,e[6]<<2|e[7]>>6,e[7]>>1,e[7]<<4|e[8]>>4,e[8]<<1|e[9]>>7,e[9]>>2,e[9]<<3|e[10]>>5,e[10],e[11]>>3,e[11]<<2|e[12]>>6,e[12]>>1,e[12]<<4|e[13]>>4,e[13]<<1|e[14]>>7,e[14]>>2,e[14]<<3|e[15]>>5,e[15]],r="";for(let o=0,s=n.length;o<s;++o)r+=Eo(n[o]);return r}};var $o=new Co;const{BaseCoder:Io}=ke,j="0123456789ABCDEF",So=Array.from({length:j.length*j.length}).map((t,e)=>""+j.charAt(e/j.length)+j.charAt(e%j.length)),ut=Array.from(j).reduce((t,e,n)=>Object.assign(t,{[e.toUpperCase()]:n,[e.toLowerCase()]:n}),Object.create(null));let Oo=class extends Io{constructor(){super({valid_encoding_pattern:/^[0-9A-Fa-f]{32}$/})}decodeTrusted(e){let n=new Uint8Array(16);for(let r=0,o=!0,s=0,i=e.length;s<i;++s){const c=e[s];o?n[r]=ut[c]<<4:n[r++]|=ut[c],o=!o}return n}encodeTrusted(e){let n="";for(let r=0,o=e.length;r<o;++r)n+=So[e[r]];return n}};var Ao=new Oo;const{BaseCoder:xo}=ke,k="0123456789ABCDEF",g=Array.from({length:k.length*k.length}).map((t,e)=>""+k.charAt(e/k.length)+k.charAt(e%k.length)),dt=Array.from(k).reduce((t,e,n)=>Object.assign(t,{[e.toUpperCase()]:n,[e.toLowerCase()]:n}),Object.create(null));let Uo=class extends xo{constructor(){super({valid_encoding_pattern:/^[0-9A-Fa-f]{4}(?:-?[0-9A-Fa-f]{4}){7}$/})}decodeTrusted(e){let n=new Uint8Array(16);for(let r=0,o=!0,s=0,i=e.length;s<i;++s){const c=e[s];c!=="-"&&(o?n[r]=dt[c]<<4:n[r++]|=dt[c],o=!o)}return n}encodeTrusted(e){let n=-1;return""+g[e[++n]]+g[e[++n]]+g[e[++n]]+g[e[++n]]+"-"+g[e[++n]]+g[e[++n]]+"-"+g[e[++n]]+g[e[++n]]+"-"+g[e[++n]]+g[e[++n]]+"-"+g[e[++n]]+g[e[++n]]+g[e[++n]]+g[e[++n]]+g[e[++n]]+g[e[++n]]}};var No=new Uo;const M=Symbol("id"),Q=Symbol("canonical_coder"),Y=Symbol("raw_coder");let Fo=class{constructor({id:e,canonical_coder:n,raw_coder:r}={}){this[M]=class extends e{static get name(){return e.name}static get[Symbol.species](){return e}get[Symbol.toStringTag](){return`${e.name} ${this.toRaw()}`}toCanonical(){return n.encodeTrusted(this.bytes)}toRaw(){return r.encodeTrusted(this.bytes)}},this[Q]=n,this[Y]=r}get name(){return this[M].name}get type(){return this[M][Symbol.species]}construct(e){return new this[M](e)}generate(){return this[M].generate(...arguments)}MIN(){return this[M].MIN(...arguments)}MAX(){return this[M].MAX(...arguments)}fromCanonical(e){return this.construct(this[Q].decode(e))}fromCanonicalTrusted(e){return this.construct(this[Q].decodeTrusted(e))}fromRaw(e){return this.construct(this[Y].decode(e))}fromRawTrusted(e){return this.construct(this[Y].decodeTrusted(e))}toCanonical(e){return this[Q].encode(e.bytes)}toRaw(e){return this[Y].encode(e.bytes)}compare(e,n){return console.warn("Deprecated: use generic idCompare instead."),e.compare(n)}equal(e,n){return console.warn("Deprecated: use generic idEqual instead."),e.equal(n)}isCanonical(e){return this[Q].isValidEncoding(e)}isRaw(e){return this[Y].isValidEncoding(e)}};var Wt={IdFactory:Fo};const{IdFactory:ft}=Wt,{UnsupportedVersion:Zt}=ne,Fe=Symbol("id_by_version");function ce(t,{version:e}={}){return t[Fe][e]||(()=>{throw new Zt(`No support for version [${e}]`)})()}let Ro=class extends ft{constructor({abstract_id:e,versioned_ids:n,canonical_coder:r,raw_coder:o}){super({id:e,canonical_coder:r,raw_coder:o}),this[Fe]=n.reduce((s,i)=>Object.assign(s,{[i.MIN().version]:new ft({id:i,canonical_coder:r,raw_coder:o})}),Object.create(null))}get versioned_ids(){return Object.values(this[Fe])}construct(e){const n=super.construct(e),r=n.version;try{return ce(this,{version:r}).construct(e)}catch(o){if(o instanceof Zt)return n;throw o}}generate(){return ce(this,...arguments).generate(...arguments)}MIN(){return ce(this,...arguments).MIN()}MAX(){return ce(this,...arguments).MAX()}};var Vo={VersionedIdFactory:Ro};const{Ulid:Mo}=Ut,{UlidMonotonic:Bo}=jr,{Uuid:jo}=re,{Uuid1:ko}=Yr,{Uuid4:Do}=no,{Uuid6:Lo}=uo,{UuidNil:qo}=po,ht=$o,we=Ao,Xo=No,{IdFactory:pt}=Wt,{VersionedIdFactory:Ho}=Vo,Go=ne,Re={idCompare:function(t,e){return t.compare(e)},idEqual:function(t,e){return t.equal(e)},Exception:Go,Ulid:new pt({id:Mo,canonical_coder:ht,raw_coder:we}),UlidMonotonic:new pt({id:Bo,canonical_coder:ht,raw_coder:we}),Uuid:new Ho({abstract_id:jo,versioned_ids:[ko,Do,Lo,qo],canonical_coder:Xo,raw_coder:we})};Re.Uuid.versioned_ids.reduce((t,e)=>Object.assign(t,{[e.name]:e}),Re);var Po=Re;const Wo=Tt(Po);var de;(t=>{t.GUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,t.ULID=/^[0-7][0-9A-HJKMNP-TV-Z]{25}$/})(de||(de={}));function Zo(t){return zt()?(en(t),!0):!1}function De(t){return typeof t=="function"?t():y(t)}const Qo=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Yo=Object.prototype.toString,Jo=t=>Yo.call(t)==="[object Object]",Ko=()=>{};function zo(t,e){function n(...r){return new Promise((o,s)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(o).catch(s)})}return n}const Qt=t=>t();function es(t=Qt){const e=P(!0);function n(){e.value=!1}function r(){e.value=!0}const o=(...s)=>{e.value&&t(...s)};return{isActive:Jt(e),pause:n,resume:r,eventFilter:o}}function ts(t){return Kt()}function ns(t,e,n={}){const{eventFilter:r=Qt,...o}=n;return fe(t,zo(r,e),o)}function rs(t,e,n={}){const{eventFilter:r,...o}=n,{eventFilter:s,pause:i,resume:c,isActive:_}=es(r);return{stop:ns(t,e,{...o,eventFilter:s}),pause:i,resume:c,isActive:_}}function os(t,e=!0,n){ts()?bt(t,n):e?t():wt(t)}function ss(t){var e;const n=De(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Ve=Qo?window:void 0;function mt(...t){let e,n,r,o;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,o]=t,e=Ve):[e,n,r,o]=t,!e)return Ko;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],i=()=>{s.forEach(b=>b()),s.length=0},c=(b,h,E,w)=>(b.addEventListener(h,E,w),()=>b.removeEventListener(h,E,w)),_=fe(()=>[ss(e),De(o)],([b,h])=>{if(i(),!b)return;const E=Jo(h)?{...h}:h;s.push(...n.flatMap(w=>r.map(N=>c(b,w,N,E))))},{immediate:!0,flush:"post"}),m=()=>{_(),i()};return Zo(m),m}const le=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ue="__vueuse_ssr_handlers__",is=as();function as(){return ue in le||(le[ue]=le[ue]||{}),le[ue]}function cs(t,e){return is[t]||e}function ls(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const us={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},gt="vueuse-storage";function _t(t,e,n,r={}){var o;const{flush:s="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:_=!0,mergeDefaults:m=!1,shallow:b,window:h=Ve,eventFilter:E,onError:w=u=>{console.error(u)},initOnMounted:N}=r,C=(b?tn:P)(typeof e=="function"?e():e);if(!n)try{n=cs("getDefaultStorage",()=>{var u;return(u=Ve)==null?void 0:u.localStorage})()}catch(u){w(u)}if(!n)return C;const T=De(e),l=ls(T),a=(o=r.serializer)!=null?o:us[l],{pause:$,resume:I}=rs(C,()=>f(C.value),{flush:s,deep:i,eventFilter:E});h&&c&&os(()=>{mt(h,"storage",O),mt(h,gt,oe),N&&O()}),N||O();function p(u,v){h&&h.dispatchEvent(new CustomEvent(gt,{detail:{key:t,oldValue:u,newValue:v,storageArea:n}}))}function f(u){try{const v=n.getItem(t);if(u==null)p(v,null),n.removeItem(t);else{const F=a.write(u);v!==F&&(n.setItem(t,F),p(v,F))}}catch(v){w(v)}}function S(u){const v=u?u.newValue:n.getItem(t);if(v==null)return _&&T!=null&&n.setItem(t,a.write(T)),T;if(!u&&m){const F=a.read(v);return typeof m=="function"?m(F,T):l==="object"&&!Array.isArray(F)?{...T,...F}:F}else return typeof v!="string"?v:a.read(v)}function O(u){if(!(u&&u.storageArea!==n)){if(u&&u.key==null){C.value=T;return}if(!(u&&u.key!==t)){$();try{(u==null?void 0:u.newValue)!==a.write(C.value)&&(C.value=S(u))}catch(v){w(v)}finally{u?wt(I):I()}}}}function oe(u){O(u.detail)}return C}const ds=["disabled","type"],X=Me({__name:"Button",props:{text:{},icon:{},disabled:{type:Boolean,default:!1},type:{default:"button"}},emits:["click"],setup(t){return(e,n)=>(G(),J("button",{onClick:n[0]||(n[0]=r=>e.$emit("click",r)),disabled:e.disabled,type:e.type},[e.icon?(G(),J("i",{key:0,class:Te(e.icon)},null,2)):Le("",!0),e.$slots.default?vt(e.$slots,"default",{key:1}):e.text?(G(),J(nn,{key:2},[yt(rn(e.text),1)],64)):Le("",!0)],8,ds))}}),fs=d("h1",{class:"mt-none"},"Ulid",-1),hs={class:"mb-sm"},ps={class:"mr-3 inline-block"},ms=d("label",{for:"count"},"Count: ",-1),gs=d("span",{class:"mx-3"},"|",-1),_s={class:"inline-block"},vs=d("label",{for:"autoConvert"},"Auto Convert",-1),ys={class:"mb-lg"},bs={class:"flex items-center space-x-sm"},ws=d("label",{for:"ulid",class:"text-xl"},"ULID",-1),Ts=d("div",{class:"flex-1"},null,-1),Es={class:"flex items-center space-x-sm"},Cs=d("label",{for:"guid",class:"text-xl"},"GUID",-1),$s=d("div",{class:"flex-1"},null,-1),Zs=Me({__name:"ulid",setup(t){const{Ulid:e,Uuid:n}=Wo,r=_t("generate-count",1),o=_t("enable-auto-convert",!0),s=P(""),i=P(""),c=l=>{l.preventDefault(),m()},_=l=>{l.preventDefault(),r.value=1,s.value="",i.value=""},m=()=>{const l=new Array(r.value).fill(null).map(()=>b());s.value=l.map(a=>a.ulid).join(`
`),i.value=l.map(a=>a.guid).join(`
`)},b=()=>{const l=e.generate(),a=l.toCanonical(),$=n.fromRaw(l.toRaw()).toCanonical();return{ulid:a,guid:$}},h=l=>{l.preventDefault(),o.value&&w()},E=l=>{l.preventDefault(),o.value&&N()},w=Ee(()=>{T()},300),N=Ee(()=>{C()},300),C=()=>{const l=[],a=i.value.match(new RegExp(de.GUID,"gim"));if(a){for(const $ of a)try{const I=n.fromCanonical($),p=e.fromRaw(I.toRaw()).toCanonical();l.push(p)}catch{continue}s.value=l.join(`
`)}},T=()=>{const l=[],a=s.value.match(new RegExp(de.ULID,"gim"));if(a){for(const $ of a)try{const I=e.fromCanonical($),p=n.fromRaw(I.toRaw()).toCanonical();l.push(p)}catch{continue}i.value=l.join(`
`)}};return fe(r,()=>m()),bt(()=>{m()}),(l,a)=>{const $=hr,I=dn;return G(),on(I,null,{default:sn(()=>[fs,d("div",hs,[d("form",{onSubmit:c,onReset:_},[d("div",ps,[ms,se(d("input",{id:"count","onUpdate:modelValue":a[0]||(a[0]=p=>ie(r)?r.value=p:null),type:"number",name:"count",min:"1",max:"100"},null,512),[[pe,y(r)]])]),R(X,{type:"submit",text:"Generate ID(s)"}),R(X,{type:"reset",class:"ml-3",text:"Reset"}),gs,d("div",_s,[se(d("input",{id:"autoConvert","onUpdate:modelValue":a[1]||(a[1]=p=>ie(o)?o.value=p:null),type:"checkbox",name:"autoConvert",class:"mr-1"},null,512),[[an,y(o)]]),vs])],32)]),d("div",ys,[d("div",bs,[ws,R($,{text:y(s)},null,8,["text"]),Ts,R(X,{icon:"i-material-symbols-close",text:"CLEAR",onClick:a[2]||(a[2]=()=>s.value="")})]),se(d("textarea",{id:"ulid","onUpdate:modelValue":a[3]||(a[3]=p=>ie(s)?s.value=p:null),name:"ulid",class:"id-input",rows:"10",onInput:h},null,544),[[pe,y(s)]]),d("div",null,[R(X,{disabled:y(o),title:y(o)?"auto convert is enabled":void 0,onClick:T,text:"Convert to ULID"},null,8,["disabled","title"])])]),d("div",null,[d("div",Es,[Cs,R($,{text:y(i)},null,8,["text"]),$s,R(X,{icon:"i-material-symbols-close",text:"CLEAR",onClick:a[4]||(a[4]=()=>i.value="")})]),se(d("textarea",{id:"guid","onUpdate:modelValue":a[5]||(a[5]=p=>ie(i)?i.value=p:null),name:"guid",class:"id-input",rows:"10",onInput:E},null,544),[[pe,y(i)]]),d("div",null,[R(X,{disabled:y(o),title:y(o)?"auto convert is enabled":void 0,onClick:C,text:"Convert to ULID"},null,8,["disabled","title"])])])]),_:1})}}});export{Zs as default};
