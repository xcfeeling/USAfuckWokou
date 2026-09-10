var Gx=Object.create;var Dp=Object.defineProperty;var Wx=Object.getOwnPropertyDescriptor;var qx=Object.getOwnPropertyNames;var Xx=Object.getPrototypeOf,Yx=Object.prototype.hasOwnProperty;var Nt=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var jx=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of qx(e))!Yx.call(s,i)&&i!==t&&Dp(s,i,{get:()=>e[i],enumerable:!(n=Wx(e,i))||n.enumerable});return s};var Zx=(s,e,t)=>(t=s!=null?Gx(Xx(s)):{},jx(e||!s||!s.__esModule?Dp(t,"default",{value:s,enumerable:!0}):t,s));var h0=Nt((u0,qa)=>{(function(){var s,e,t,n,i,r,o,a,l,c,u,h,f,d,g;t=Math.floor,c=Math.min,e=function(x,m){return x<m?-1:x>m?1:0},l=function(x,m,p,v,b){var y;if(p==null&&(p=0),b==null&&(b=e),p<0)throw new Error("lo must be non-negative");for(v==null&&(v=x.length);p<v;)y=t((p+v)/2),b(m,x[y])<0?v=y:p=y+1;return[].splice.apply(x,[p,p-p].concat(m)),m},r=function(x,m,p){return p==null&&(p=e),x.push(m),d(x,0,x.length-1,p)},i=function(x,m){var p,v;return m==null&&(m=e),p=x.pop(),x.length?(v=x[0],x[0]=p,g(x,0,m)):v=p,v},a=function(x,m,p){var v;return p==null&&(p=e),v=x[0],x[0]=m,g(x,0,p),v},o=function(x,m,p){var v;return p==null&&(p=e),x.length&&p(x[0],m)<0&&(v=[x[0],m],m=v[0],x[0]=v[1],g(x,0,p)),m},n=function(x,m){var p,v,b,y,w,S,R,C;for(m==null&&(m=e),S=(function(){C=[];for(var M=0,_=t(x.length/2);0<=_?M<_:M>_;0<=_?M++:M--)C.push(M);return C}).apply(this).reverse(),R=[],v=0,y=S.length;v<y;v++)p=S[v],R.push(g(x,p,m));return R},f=function(x,m,p){var v;if(p==null&&(p=e),v=x.indexOf(m),v!==-1)return d(x,0,v,p),g(x,v,p)},u=function(x,m,p){var v,b,y,w,S;if(p==null&&(p=e),b=x.slice(0,m),!b.length)return b;for(n(b,p),S=x.slice(m),y=0,w=S.length;y<w;y++)v=S[y],o(b,v,p);return b.sort(p).reverse()},h=function(x,m,p){var v,b,y,w,S,R,C,M,_,T;if(p==null&&(p=e),m*10<=x.length){if(w=x.slice(0,m).sort(p),!w.length)return w;for(y=w[w.length-1],M=x.slice(m),S=0,C=M.length;S<C;S++)v=M[S],p(v,y)<0&&(l(w,v,0,null,p),w.pop(),y=w[w.length-1]);return w}for(n(x,p),T=[],b=R=0,_=c(m,x.length);0<=_?R<_:R>_;b=0<=_?++R:--R)T.push(i(x,p));return T},d=function(x,m,p,v){var b,y,w;for(v==null&&(v=e),b=x[p];p>m;){if(w=p-1>>1,y=x[w],v(b,y)<0){x[p]=y,p=w;continue}break}return x[p]=b},g=function(x,m,p){var v,b,y,w,S;for(p==null&&(p=e),b=x.length,S=m,y=x[m],v=2*m+1;v<b;)w=v+1,w<b&&!(p(x[v],x[w])<0)&&(v=w),x[m]=x[v],m=v,v=2*m+1;return x[m]=y,d(x,S,m,p)},s=(function(){x.push=r,x.pop=i,x.replace=a,x.pushpop=o,x.heapify=n,x.updateItem=f,x.nlargest=u,x.nsmallest=h;function x(m){this.cmp=m??e,this.nodes=[]}return x.prototype.push=function(m){return r(this.nodes,m,this.cmp)},x.prototype.pop=function(){return i(this.nodes,this.cmp)},x.prototype.peek=function(){return this.nodes[0]},x.prototype.contains=function(m){return this.nodes.indexOf(m)!==-1},x.prototype.replace=function(m){return a(this.nodes,m,this.cmp)},x.prototype.pushpop=function(m){return o(this.nodes,m,this.cmp)},x.prototype.heapify=function(){return n(this.nodes,this.cmp)},x.prototype.updateItem=function(m){return f(this.nodes,m,this.cmp)},x.prototype.clear=function(){return this.nodes=[]},x.prototype.empty=function(){return this.nodes.length===0},x.prototype.size=function(){return this.nodes.length},x.prototype.clone=function(){var m;return m=new x,m.nodes=this.nodes.slice(0),m},x.prototype.toArray=function(){return this.nodes.slice(0)},x.prototype.insert=x.prototype.push,x.prototype.top=x.prototype.peek,x.prototype.front=x.prototype.peek,x.prototype.has=x.prototype.contains,x.prototype.copy=x.prototype.clone,x})(),typeof qa<"u"&&qa!==null&&qa.exports?qa.exports=s:window.Heap=s}).call(u0)});var Xa=Nt((WP,f0)=>{f0.exports=h0()});var qu=Nt((qP,d0)=>{function vE(s,e,t){this.x=s,this.y=e,this.walkable=t===void 0?!0:t}d0.exports=vE});var On=Nt((XP,p0)=>{var yE={Always:1,Never:2,IfAtMostOneObstacle:3,OnlyWhenNoObstacles:4};p0.exports=yE});var x0=Nt((YP,g0)=>{var m0=qu(),Xu=On();function ps(s,e,t){var n;typeof s!="object"?n=s:(e=s.length,n=s[0].length,t=s),this.width=n,this.height=e,this.nodes=this._buildNodes(n,e,t)}ps.prototype._buildNodes=function(s,e,t){var n,i,r=new Array(e);for(n=0;n<e;++n)for(r[n]=new Array(s),i=0;i<s;++i)r[n][i]=new m0(i,n);if(t===void 0)return r;if(t.length!==e||t[0].length!==s)throw new Error("Matrix size does not fit");for(n=0;n<e;++n)for(i=0;i<s;++i)t[n][i]&&(r[n][i].walkable=!1);return r};ps.prototype.getNodeAt=function(s,e){return this.nodes[e][s]};ps.prototype.isWalkableAt=function(s,e){return this.isInside(s,e)&&this.nodes[e][s].walkable};ps.prototype.isInside=function(s,e){return s>=0&&s<this.width&&e>=0&&e<this.height};ps.prototype.setWalkableAt=function(s,e,t){this.nodes[e][s].walkable=t};ps.prototype.getNeighbors=function(s,e){var t=s.x,n=s.y,i=[],r=!1,o=!1,a=!1,l=!1,c=!1,u=!1,h=!1,f=!1,d=this.nodes;if(this.isWalkableAt(t,n-1)&&(i.push(d[n-1][t]),r=!0),this.isWalkableAt(t+1,n)&&(i.push(d[n][t+1]),a=!0),this.isWalkableAt(t,n+1)&&(i.push(d[n+1][t]),c=!0),this.isWalkableAt(t-1,n)&&(i.push(d[n][t-1]),h=!0),e===Xu.Never)return i;if(e===Xu.OnlyWhenNoObstacles)o=h&&r,l=r&&a,u=a&&c,f=c&&h;else if(e===Xu.IfAtMostOneObstacle)o=h||r,l=r||a,u=a||c,f=c||h;else if(e===Xu.Always)o=!0,l=!0,u=!0,f=!0;else throw new Error("Incorrect value of diagonalMovement");return o&&this.isWalkableAt(t-1,n-1)&&i.push(d[n-1][t-1]),l&&this.isWalkableAt(t+1,n-1)&&i.push(d[n-1][t+1]),u&&this.isWalkableAt(t+1,n+1)&&i.push(d[n+1][t+1]),f&&this.isWalkableAt(t-1,n+1)&&i.push(d[n+1][t-1]),i};ps.prototype.clone=function(){var s,e,t=this.width,n=this.height,i=this.nodes,r=new ps(t,n),o=new Array(n);for(s=0;s<n;++s)for(o[s]=new Array(t),e=0;e<t;++e)o[s][e]=new m0(e,s,i[s][e].walkable);return r.nodes=o,r};g0.exports=ps});var Fs=Nt(Bs=>{function Zd(s){for(var e=[[s.x,s.y]];s.parent;)s=s.parent,e.push([s.x,s.y]);return e.reverse()}Bs.backtrace=Zd;function bE(s,e){var t=Zd(s),n=Zd(e);return t.concat(n.reverse())}Bs.biBacktrace=bE;function ME(s){var e,t=0,n,i,r,o;for(e=1;e<s.length;++e)n=s[e-1],i=s[e],r=n[0]-i[0],o=n[1]-i[1],t+=Math.sqrt(r*r+o*o);return t}Bs.pathLength=ME;function Kd(s,e,t,n){var i=Math.abs,r=[],o,a,l,c,u,h;for(l=i(t-s),c=i(n-e),o=s<t?1:-1,a=e<n?1:-1,u=l-c;r.push([s,e]),!(s===t&&e===n);)h=2*u,h>-c&&(u=u-c,s=s+o),h<l&&(u=u+l,e=e+a);return r}Bs.interpolate=Kd;function _E(s){var e=[],t=s.length,n,i,r,o,a,l;if(t<2)return e;for(a=0;a<t-1;++a)for(n=s[a],i=s[a+1],r=Kd(n[0],n[1],i[0],i[1]),o=r.length,l=0;l<o-1;++l)e.push(r[l]);return e.push(s[t-1]),e}Bs.expandPath=_E;function wE(s,e){var t=e.length,n=e[0][0],i=e[0][1],r=e[t-1][0],o=e[t-1][1],a,l,c,u,h,f,d,g,x,m,p;for(a=n,l=i,h=[[a,l]],f=2;f<t;++f){for(g=e[f],c=g[0],u=g[1],x=Kd(a,l,c,u),p=!1,d=1;d<x.length;++d)if(m=x[d],!s.isWalkableAt(m[0],m[1])){p=!0;break}p&&(lastValidCoord=e[f-1],h.push(lastValidCoord),a=lastValidCoord[0],l=lastValidCoord[1])}return h.push([r,o]),h}Bs.smoothenPath=wE;function SE(s){if(s.length<3)return s;var e=[],t=s[0][0],n=s[0][1],i=s[1][0],r=s[1][1],o=i-t,a=r-n,l,c,u,h,f,d;for(f=Math.sqrt(o*o+a*a),o/=f,a/=f,e.push([t,n]),d=2;d<s.length;d++)l=i,c=r,u=o,h=a,i=s[d][0],r=s[d][1],o=i-l,a=r-c,f=Math.sqrt(o*o+a*a),o/=f,a/=f,(o!==u||a!==h)&&e.push([l,c]);return e.push([i,r]),e}Bs.compressPath=SE});var vo=Nt((ZP,v0)=>{v0.exports={manhattan:function(s,e){return s+e},euclidean:function(s,e){return Math.sqrt(s*s+e*e)},octile:function(s,e){var t=Math.SQRT2-1;return s<e?t*s+e:t*e+s},chebyshev:function(s,e){return Math.max(s,e)}}});var ju=Nt((KP,b0)=>{var EE=Xa(),TE=Fs(),Jd=vo(),Yu=On();function y0(s){s=s||{},this.allowDiagonal=s.allowDiagonal,this.dontCrossCorners=s.dontCrossCorners,this.heuristic=s.heuristic||Jd.manhattan,this.weight=s.weight||1,this.diagonalMovement=s.diagonalMovement,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=Yu.OnlyWhenNoObstacles:this.diagonalMovement=Yu.IfAtMostOneObstacle:this.diagonalMovement=Yu.Never),this.diagonalMovement===Yu.Never?this.heuristic=s.heuristic||Jd.manhattan:this.heuristic=s.heuristic||Jd.octile}y0.prototype.findPath=function(s,e,t,n,i){var r=new EE(function(w,S){return w.f-S.f}),o=i.getNodeAt(s,e),a=i.getNodeAt(t,n),l=this.heuristic,c=this.diagonalMovement,u=this.weight,h=Math.abs,f=Math.SQRT2,d,g,x,m,p,v,b,y;for(o.g=0,o.f=0,r.push(o),o.opened=!0;!r.empty();){if(d=r.pop(),d.closed=!0,d===a)return TE.backtrace(a);for(g=i.getNeighbors(d,c),m=0,p=g.length;m<p;++m)x=g[m],!x.closed&&(v=x.x,b=x.y,y=d.g+(v-d.x===0||b-d.y===0?1:f),(!x.opened||y<x.g)&&(x.g=y,x.h=x.h||u*l(h(v-t),h(b-n)),x.f=x.g+x.h,x.parent=d,x.opened?r.updateItem(x):(r.push(x),x.opened=!0)))}return[]};b0.exports=y0});var w0=Nt((JP,_0)=>{var M0=ju();function Zu(s){M0.call(this,s);var e=this.heuristic;this.heuristic=function(t,n){return e(t,n)*1e6}}Zu.prototype=new M0;Zu.prototype.constructor=Zu;_0.exports=Zu});var T0=Nt((QP,E0)=>{var AE=Fs(),Qd=On();function S0(s){s=s||{},this.allowDiagonal=s.allowDiagonal,this.dontCrossCorners=s.dontCrossCorners,this.diagonalMovement=s.diagonalMovement,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=Qd.OnlyWhenNoObstacles:this.diagonalMovement=Qd.IfAtMostOneObstacle:this.diagonalMovement=Qd.Never)}S0.prototype.findPath=function(s,e,t,n,i){var r=[],o=this.diagonalMovement,a=i.getNodeAt(s,e),l=i.getNodeAt(t,n),c,u,h,f,d;for(r.push(a),a.opened=!0;r.length;){if(h=r.shift(),h.closed=!0,h===l)return AE.backtrace(l);for(c=i.getNeighbors(h,o),f=0,d=c.length;f<d;++f)u=c[f],!(u.closed||u.opened)&&(r.push(u),u.opened=!0,u.parent=h)}return[]};E0.exports=S0});var R0=Nt(($P,C0)=>{var A0=ju();function Ku(s){A0.call(this,s),this.heuristic=function(e,t){return 0}}Ku.prototype=new A0;Ku.prototype.constructor=Ku;C0.exports=Ku});var Qu=Nt((eI,D0)=>{var P0=Xa(),I0=Fs(),$d=vo(),Ju=On();function L0(s){s=s||{},this.allowDiagonal=s.allowDiagonal,this.dontCrossCorners=s.dontCrossCorners,this.diagonalMovement=s.diagonalMovement,this.heuristic=s.heuristic||$d.manhattan,this.weight=s.weight||1,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=Ju.OnlyWhenNoObstacles:this.diagonalMovement=Ju.IfAtMostOneObstacle:this.diagonalMovement=Ju.Never),this.diagonalMovement===Ju.Never?this.heuristic=s.heuristic||$d.manhattan:this.heuristic=s.heuristic||$d.octile}L0.prototype.findPath=function(s,e,t,n,i){var r=function(M,_){return M.f-_.f},o=new P0(r),a=new P0(r),l=i.getNodeAt(s,e),c=i.getNodeAt(t,n),u=this.heuristic,h=this.diagonalMovement,f=this.weight,d=Math.abs,g=Math.SQRT2,x,m,p,v,b,y,w,S,R=1,C=2;for(l.g=0,l.f=0,o.push(l),l.opened=R,c.g=0,c.f=0,a.push(c),c.opened=C;!o.empty()&&!a.empty();){for(x=o.pop(),x.closed=!0,m=i.getNeighbors(x,h),v=0,b=m.length;v<b;++v)if(p=m[v],!p.closed){if(p.opened===C)return I0.biBacktrace(x,p);y=p.x,w=p.y,S=x.g+(y-x.x===0||w-x.y===0?1:g),(!p.opened||S<p.g)&&(p.g=S,p.h=p.h||f*u(d(y-t),d(w-n)),p.f=p.g+p.h,p.parent=x,p.opened?o.updateItem(p):(o.push(p),p.opened=R))}for(x=a.pop(),x.closed=!0,m=i.getNeighbors(x,h),v=0,b=m.length;v<b;++v)if(p=m[v],!p.closed){if(p.opened===R)return I0.biBacktrace(p,x);y=p.x,w=p.y,S=x.g+(y-x.x===0||w-x.y===0?1:g),(!p.opened||S<p.g)&&(p.g=S,p.h=p.h||f*u(d(y-s),d(w-e)),p.f=p.g+p.h,p.parent=x,p.opened?a.updateItem(p):(a.push(p),p.opened=C))}}return[]};D0.exports=L0});var F0=Nt((tI,B0)=>{var N0=Qu();function $u(s){N0.call(this,s);var e=this.heuristic;this.heuristic=function(t,n){return e(t,n)*1e6}}$u.prototype=new N0;$u.prototype.constructor=$u;B0.exports=$u});var k0=Nt((nI,z0)=>{var U0=Fs(),ep=On();function O0(s){s=s||{},this.allowDiagonal=s.allowDiagonal,this.dontCrossCorners=s.dontCrossCorners,this.diagonalMovement=s.diagonalMovement,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=ep.OnlyWhenNoObstacles:this.diagonalMovement=ep.IfAtMostOneObstacle:this.diagonalMovement=ep.Never)}O0.prototype.findPath=function(s,e,t,n,i){var r=i.getNodeAt(s,e),o=i.getNodeAt(t,n),a=[],l=[],c,u,h,f=this.diagonalMovement,d=0,g=1,x,m;for(a.push(r),r.opened=!0,r.by=d,l.push(o),o.opened=!0,o.by=g;a.length&&l.length;){for(h=a.shift(),h.closed=!0,c=i.getNeighbors(h,f),x=0,m=c.length;x<m;++x)if(u=c[x],!u.closed){if(u.opened){if(u.by===g)return U0.biBacktrace(h,u);continue}a.push(u),u.parent=h,u.opened=!0,u.by=d}for(h=l.shift(),h.closed=!0,c=i.getNeighbors(h,f),x=0,m=c.length;x<m;++x)if(u=c[x],!u.closed){if(u.opened){if(u.by===d)return U0.biBacktrace(u,h);continue}l.push(u),u.parent=h,u.opened=!0,u.by=g}}return[]};z0.exports=O0});var G0=Nt((iI,V0)=>{var H0=Qu();function eh(s){H0.call(this,s),this.heuristic=function(e,t){return 0}}eh.prototype=new H0;eh.prototype.constructor=eh;V0.exports=eh});var Y0=Nt((rI,X0)=>{var sI=Fs(),tp=vo(),W0=qu(),th=On();function q0(s){s=s||{},this.allowDiagonal=s.allowDiagonal,this.dontCrossCorners=s.dontCrossCorners,this.diagonalMovement=s.diagonalMovement,this.heuristic=s.heuristic||tp.manhattan,this.weight=s.weight||1,this.trackRecursion=s.trackRecursion||!1,this.timeLimit=s.timeLimit||1/0,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=th.OnlyWhenNoObstacles:this.diagonalMovement=th.IfAtMostOneObstacle:this.diagonalMovement=th.Never),this.diagonalMovement===th.Never?this.heuristic=s.heuristic||tp.manhattan:this.heuristic=s.heuristic||tp.octile}q0.prototype.findPath=function(s,e,t,n,i){var r=0,o=new Date().getTime(),a=function(m,p){return this.heuristic(Math.abs(p.x-m.x),Math.abs(p.y-m.y))}.bind(this),l=function(m,p){return m.x===p.x||m.y===p.y?1:Math.SQRT2},c=function(m,p,v,b,y){if(r++,this.timeLimit>0&&new Date().getTime()-o>this.timeLimit*1e3)return 1/0;var w=p+a(m,h)*this.weight;if(w>v)return w;if(m==h)return b[y]=[m.x,m.y],m;var S,R,C,M,_=i.getNeighbors(m,this.diagonalMovement);for(C=0,S=1/0;M=_[C];++C){if(this.trackRecursion&&(M.retainCount=M.retainCount+1||1,M.tested!==!0&&(M.tested=!0)),R=c(M,p+l(m,M),v,b,y+1),R instanceof W0)return b[y]=[m.x,m.y],R;this.trackRecursion&&--M.retainCount===0&&(M.tested=!1),R<S&&(S=R)}return S}.bind(this),u=i.getNodeAt(s,e),h=i.getNodeAt(t,n),f=a(u,h),d,g,x;for(d=0;;++d){if(g=[],x=c(u,0,f,g,0),x===1/0)return[];if(x instanceof W0)return g;f=x}return[]};X0.exports=q0});var Ya=Nt((aI,K0)=>{var CE=Xa(),j0=Fs(),Z0=vo(),oI=On();function np(s){s=s||{},this.heuristic=s.heuristic||Z0.manhattan,this.trackJumpRecursion=s.trackJumpRecursion||!1}np.prototype.findPath=function(s,e,t,n,i){var r=this.openList=new CE(function(c,u){return c.f-u.f}),o=this.startNode=i.getNodeAt(s,e),a=this.endNode=i.getNodeAt(t,n),l;for(this.grid=i,o.g=0,o.f=0,r.push(o),o.opened=!0;!r.empty();){if(l=r.pop(),l.closed=!0,l===a)return j0.expandPath(j0.backtrace(a));this._identifySuccessors(l)}return[]};np.prototype._identifySuccessors=function(s){var e=this.grid,t=this.heuristic,n=this.openList,i=this.endNode.x,r=this.endNode.y,o,a,l,c,u,h=s.x,f=s.y,d,g,x,m,p,v,b,y=Math.abs,w=Math.max;for(o=this._findNeighbors(s),c=0,u=o.length;c<u;++c)if(a=o[c],l=this._jump(a[0],a[1],h,f),l){if(d=l[0],g=l[1],b=e.getNodeAt(d,g),b.closed)continue;p=Z0.octile(y(d-h),y(g-f)),v=s.g+p,(!b.opened||v<b.g)&&(b.g=v,b.h=b.h||t(y(d-i),y(g-r)),b.f=b.g+b.h,b.parent=s,b.opened?n.updateItem(b):(n.push(b),b.opened=!0))}};K0.exports=np});var $0=Nt((lI,Q0)=>{var J0=Ya(),RE=On();function yo(s){J0.call(this,s)}yo.prototype=new J0;yo.prototype.constructor=yo;yo.prototype._jump=function(s,e,t,n){var i=this.grid,r=s-t,o=e-n;if(!i.isWalkableAt(s,e))return null;if(this.trackJumpRecursion===!0&&(i.getNodeAt(s,e).tested=!0),i.getNodeAt(s,e)===this.endNode)return[s,e];if(r!==0){if(i.isWalkableAt(s,e-1)&&!i.isWalkableAt(s-r,e-1)||i.isWalkableAt(s,e+1)&&!i.isWalkableAt(s-r,e+1))return[s,e]}else if(o!==0){if(i.isWalkableAt(s-1,e)&&!i.isWalkableAt(s-1,e-o)||i.isWalkableAt(s+1,e)&&!i.isWalkableAt(s+1,e-o))return[s,e];if(this._jump(s+1,e,s,e)||this._jump(s-1,e,s,e))return[s,e]}else throw new Error("Only horizontal and vertical movements are allowed");return this._jump(s+r,e+o,s,e)};yo.prototype._findNeighbors=function(s){var e=s.parent,t=s.x,n=s.y,i=this.grid,r,o,a,l,c,u,h=[],f,d,g,x;if(e)r=e.x,o=e.y,c=(t-r)/Math.max(Math.abs(t-r),1),u=(n-o)/Math.max(Math.abs(n-o),1),c!==0?(i.isWalkableAt(t,n-1)&&h.push([t,n-1]),i.isWalkableAt(t,n+1)&&h.push([t,n+1]),i.isWalkableAt(t+c,n)&&h.push([t+c,n])):u!==0&&(i.isWalkableAt(t-1,n)&&h.push([t-1,n]),i.isWalkableAt(t+1,n)&&h.push([t+1,n]),i.isWalkableAt(t,n+u)&&h.push([t,n+u]));else for(f=i.getNeighbors(s,RE.Never),g=0,x=f.length;g<x;++g)d=f[g],h.push([d.x,d.y]);return h};Q0.exports=yo});var nx=Nt((cI,tx)=>{var ex=Ya(),PE=On();function bo(s){ex.call(this,s)}bo.prototype=new ex;bo.prototype.constructor=bo;bo.prototype._jump=function(s,e,t,n){var i=this.grid,r=s-t,o=e-n;if(!i.isWalkableAt(s,e))return null;if(this.trackJumpRecursion===!0&&(i.getNodeAt(s,e).tested=!0),i.getNodeAt(s,e)===this.endNode)return[s,e];if(r!==0&&o!==0){if(i.isWalkableAt(s-r,e+o)&&!i.isWalkableAt(s-r,e)||i.isWalkableAt(s+r,e-o)&&!i.isWalkableAt(s,e-o))return[s,e];if(this._jump(s+r,e,s,e)||this._jump(s,e+o,s,e))return[s,e]}else if(r!==0){if(i.isWalkableAt(s+r,e+1)&&!i.isWalkableAt(s,e+1)||i.isWalkableAt(s+r,e-1)&&!i.isWalkableAt(s,e-1))return[s,e]}else if(i.isWalkableAt(s+1,e+o)&&!i.isWalkableAt(s+1,e)||i.isWalkableAt(s-1,e+o)&&!i.isWalkableAt(s-1,e))return[s,e];return this._jump(s+r,e+o,s,e)};bo.prototype._findNeighbors=function(s){var e=s.parent,t=s.x,n=s.y,i=this.grid,r,o,a,l,c,u,h=[],f,d,g,x;if(e)r=e.x,o=e.y,c=(t-r)/Math.max(Math.abs(t-r),1),u=(n-o)/Math.max(Math.abs(n-o),1),c!==0&&u!==0?(i.isWalkableAt(t,n+u)&&h.push([t,n+u]),i.isWalkableAt(t+c,n)&&h.push([t+c,n]),i.isWalkableAt(t+c,n+u)&&h.push([t+c,n+u]),i.isWalkableAt(t-c,n)||h.push([t-c,n+u]),i.isWalkableAt(t,n-u)||h.push([t+c,n-u])):c===0?(i.isWalkableAt(t,n+u)&&h.push([t,n+u]),i.isWalkableAt(t+1,n)||h.push([t+1,n+u]),i.isWalkableAt(t-1,n)||h.push([t-1,n+u])):(i.isWalkableAt(t+c,n)&&h.push([t+c,n]),i.isWalkableAt(t,n+1)||h.push([t+c,n+1]),i.isWalkableAt(t,n-1)||h.push([t+c,n-1]));else for(f=i.getNeighbors(s,PE.Always),g=0,x=f.length;g<x;++g)d=f[g],h.push([d.x,d.y]);return h};tx.exports=bo});var rx=Nt((uI,sx)=>{var ix=Ya(),IE=On();function Mo(s){ix.call(this,s)}Mo.prototype=new ix;Mo.prototype.constructor=Mo;Mo.prototype._jump=function(s,e,t,n){var i=this.grid,r=s-t,o=e-n;if(!i.isWalkableAt(s,e))return null;if(this.trackJumpRecursion===!0&&(i.getNodeAt(s,e).tested=!0),i.getNodeAt(s,e)===this.endNode)return[s,e];if(r!==0&&o!==0){if(this._jump(s+r,e,s,e)||this._jump(s,e+o,s,e))return[s,e]}else if(r!==0){if(i.isWalkableAt(s,e-1)&&!i.isWalkableAt(s-r,e-1)||i.isWalkableAt(s,e+1)&&!i.isWalkableAt(s-r,e+1))return[s,e]}else if(o!==0&&(i.isWalkableAt(s-1,e)&&!i.isWalkableAt(s-1,e-o)||i.isWalkableAt(s+1,e)&&!i.isWalkableAt(s+1,e-o)))return[s,e];return i.isWalkableAt(s+r,e)&&i.isWalkableAt(s,e+o)?this._jump(s+r,e+o,s,e):null};Mo.prototype._findNeighbors=function(s){var e=s.parent,t=s.x,n=s.y,i=this.grid,r,o,a,l,c,u,h=[],f,d,g,x;if(e)if(r=e.x,o=e.y,c=(t-r)/Math.max(Math.abs(t-r),1),u=(n-o)/Math.max(Math.abs(n-o),1),c!==0&&u!==0)i.isWalkableAt(t,n+u)&&h.push([t,n+u]),i.isWalkableAt(t+c,n)&&h.push([t+c,n]),i.isWalkableAt(t,n+u)&&i.isWalkableAt(t+c,n)&&h.push([t+c,n+u]);else{var m;if(c!==0){m=i.isWalkableAt(t+c,n);var p=i.isWalkableAt(t,n+1),v=i.isWalkableAt(t,n-1);m&&(h.push([t+c,n]),p&&h.push([t+c,n+1]),v&&h.push([t+c,n-1])),p&&h.push([t,n+1]),v&&h.push([t,n-1])}else if(u!==0){m=i.isWalkableAt(t,n+u);var b=i.isWalkableAt(t+1,n),y=i.isWalkableAt(t-1,n);m&&(h.push([t,n+u]),b&&h.push([t+1,n+u]),y&&h.push([t-1,n+u])),b&&h.push([t+1,n]),y&&h.push([t-1,n])}}else for(f=i.getNeighbors(s,IE.OnlyWhenNoObstacles),g=0,x=f.length;g<x;++g)d=f[g],h.push([d.x,d.y]);return h};sx.exports=Mo});var lx=Nt((hI,ax)=>{var ox=Ya(),LE=On();function _o(s){ox.call(this,s)}_o.prototype=new ox;_o.prototype.constructor=_o;_o.prototype._jump=function(s,e,t,n){var i=this.grid,r=s-t,o=e-n;if(!i.isWalkableAt(s,e))return null;if(this.trackJumpRecursion===!0&&(i.getNodeAt(s,e).tested=!0),i.getNodeAt(s,e)===this.endNode)return[s,e];if(r!==0&&o!==0){if(i.isWalkableAt(s-r,e+o)&&!i.isWalkableAt(s-r,e)||i.isWalkableAt(s+r,e-o)&&!i.isWalkableAt(s,e-o))return[s,e];if(this._jump(s+r,e,s,e)||this._jump(s,e+o,s,e))return[s,e]}else if(r!==0){if(i.isWalkableAt(s+r,e+1)&&!i.isWalkableAt(s,e+1)||i.isWalkableAt(s+r,e-1)&&!i.isWalkableAt(s,e-1))return[s,e]}else if(i.isWalkableAt(s+1,e+o)&&!i.isWalkableAt(s+1,e)||i.isWalkableAt(s-1,e+o)&&!i.isWalkableAt(s-1,e))return[s,e];return i.isWalkableAt(s+r,e)||i.isWalkableAt(s,e+o)?this._jump(s+r,e+o,s,e):null};_o.prototype._findNeighbors=function(s){var e=s.parent,t=s.x,n=s.y,i=this.grid,r,o,a,l,c,u,h=[],f,d,g,x;if(e)r=e.x,o=e.y,c=(t-r)/Math.max(Math.abs(t-r),1),u=(n-o)/Math.max(Math.abs(n-o),1),c!==0&&u!==0?(i.isWalkableAt(t,n+u)&&h.push([t,n+u]),i.isWalkableAt(t+c,n)&&h.push([t+c,n]),(i.isWalkableAt(t,n+u)||i.isWalkableAt(t+c,n))&&h.push([t+c,n+u]),!i.isWalkableAt(t-c,n)&&i.isWalkableAt(t,n+u)&&h.push([t-c,n+u]),!i.isWalkableAt(t,n-u)&&i.isWalkableAt(t+c,n)&&h.push([t+c,n-u])):c===0?i.isWalkableAt(t,n+u)&&(h.push([t,n+u]),i.isWalkableAt(t+1,n)||h.push([t+1,n+u]),i.isWalkableAt(t-1,n)||h.push([t-1,n+u])):i.isWalkableAt(t+c,n)&&(h.push([t+c,n]),i.isWalkableAt(t,n+1)||h.push([t+c,n+1]),i.isWalkableAt(t,n-1)||h.push([t+c,n-1]));else for(f=i.getNeighbors(s,LE.IfAtMostOneObstacle),g=0,x=f.length;g<x;++g)d=f[g],h.push([d.x,d.y]);return h};ax.exports=_o});var ux=Nt((fI,cx)=>{var ip=On(),DE=$0(),NE=nx(),BE=rx(),FE=lx();function UE(s){return s=s||{},s.diagonalMovement===ip.Never?new DE(s):s.diagonalMovement===ip.Always?new NE(s):s.diagonalMovement===ip.OnlyWhenNoObstacles?new BE(s):new FE(s)}cx.exports=UE});var fx=Nt((dI,hx)=>{hx.exports={Heap:Xa(),Node:qu(),Grid:x0(),Util:Fs(),DiagonalMovement:On(),Heuristic:vo(),AStarFinder:ju(),BestFirstFinder:w0(),BreadthFirstFinder:T0(),DijkstraFinder:R0(),BiAStarFinder:Qu(),BiBestFirstFinder:F0(),BiBreadthFirstFinder:k0(),BiDijkstraFinder:G0(),IDAStarFinder:Y0(),JumpPointFinder:ux()}});var px=Nt((pI,dx)=>{dx.exports=fx()});var pm=0,hf=1,mm=2;var ff=1,fc=2,Fi=3,xi=0,En=1,Bt=2,wi=0,Ys=1,yn=2,df=3,pf=4,gm=5,Es=100,xm=101,vm=102,ym=103,bm=104,Mm=200,_m=201,wm=202,Sm=203,Bl=204,Fl=205,Em=206,Tm=207,Am=208,Cm=209,Rm=210,Pm=211,Im=212,Lm=213,Dm=214,dc=0,pc=1,mc=2,js=3,gc=4,xc=5,vc=6,yc=7,mf=0,Nm=1,Bm=2,os=0,bc=1,Mc=2,_c=3,sr=4,wc=5,Sc=6,Ec=7;var gf=300,rr=301,or=302,Kr=303,Tc=304,va=306,vi=1e3,Di=1001,Fr=1002,un=1003,Fm=1004;var ya=1005;var Jt=1006,Ac=1007;var as=1008;var Si=1009,xf=1010,vf=1011,Jr=1012,Cc=1013,Ps=1014,Tn=1015,jt=1016,Rc=1017,Pc=1018,Qr=1020,yf=35902,bf=1021,Mf=1022,li=1023,Ur=1026,$r=1027,Ic=1028,Lc=1029,_f=1030,Dc=1031;var Nc=1033,ba=33776,Ma=33777,_a=33778,wa=33779,Bc=35840,Fc=35841,Uc=35842,Oc=35843,zc=36196,kc=37492,Hc=37496,Vc=37808,Gc=37809,Wc=37810,qc=37811,Xc=37812,Yc=37813,jc=37814,Zc=37815,Kc=37816,Jc=37817,Qc=37818,$c=37819,eu=37820,tu=37821,Sa=36492,nu=36494,iu=36495,wf=36283,su=36284,ru=36285,ou=36286;var Ho=2300,Ul=2301,Dl=2302,Kh=2400,Jh=2401,Qh=2402;var Um=3200,Om=3201;var Sf=0,zm=1,ls="",Mt="srgb",ns="srgb-linear",Vo="linear",ft="srgb";var Xs=7680;var $h=519,km=512,Hm=513,Vm=514,Ef=515,Gm=516,Wm=517,qm=518,Xm=519,ef=35044,Ei=35048;var Tf="300 es",gi=2e3,Go=2001;var is=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nl=Math.PI/180,Ol=180/Math.PI;function eo(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function ot(s,e,t){return Math.max(e,Math.min(t,s))}function Kx(s,e){return(s%e+e)%e}function Mh(s,e,t){return(1-t)*s+t*e}function Ro(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var de=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ss=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a,p=l*f+c*d+u*g+h*x,v=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let w=Math.sqrt(b),S=Math.atan2(w,p*v);m=Math.sin(m*S)/w,a=Math.sin(a*S)/w}let y=a*v;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Np.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_h=new I,Np=new ss,nt=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],v=i[1],b=i[4],y=i[7],w=i[2],S=i[5],R=i[8];return r[0]=o*x+a*v+l*w,r[3]=o*m+a*b+l*S,r[6]=o*p+a*y+l*R,r[1]=c*x+u*v+h*w,r[4]=c*m+u*b+h*S,r[7]=c*p+u*y+h*R,r[2]=f*x+d*v+g*w,r[5]=f*m+d*b+g*S,r[8]=f*p+d*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wh.makeScale(e,t)),this}rotate(e){return this.premultiply(wh.makeRotation(-e)),this}translate(e,t){return this.premultiply(wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wh=new nt;function Af(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ym(){let s=Or("canvas");return s.style.display="block",s}var Bp={};function Zs(s){s in Bp||(Bp[s]=!0,console.warn(s))}function jm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Fp=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Up=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jx(){let s={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(i.r=ts(i.r),i.g=ts(i.g),i.b=ts(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(i.r=Nr(i.r),i.g=Nr(i.g),i.b=Nr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ls?Vo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ns]:{primaries:e,whitePoint:n,transfer:Vo,toXYZ:Fp,fromXYZ:Up,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Fp,fromXYZ:Up,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),s}var ut=Jx();function ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Nr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var br,zl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=Or("canvas")),br.width=e.width,br.height=e.height;let i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ts(t[n]/255)*255):t[n]=ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qx=0,zr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Sh(i[o].image)):r.push(Sh(i[o]))}else r=Sh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Sh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $x=0,Eh=new I,Qt=class s extends is{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Di,i=Di,r=Jt,o=as,a=li,l=Si,c=s.DEFAULT_ANISOTROPY,u=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=eo(),this.name="",this.source=new zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vi:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vi:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=gf;Qt.DEFAULT_ANISOTROPY=1;var _t=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(d+1)/2,w=(p+1)/2,S=(u+f)/4,R=(h+x)/4,C=(g+m)/4;return b>y&&b>w?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=S/n,r=R/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=C/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=R/r,i=C/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kl=class extends is{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Qt(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new zr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends kl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wo=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hl=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sl.copy(n.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),rl.subVectors(this.max,Po),Mr.subVectors(e.a,Po),_r.subVectors(e.b,Po),wr.subVectors(e.c,Po),ys.subVectors(_r,Mr),bs.subVectors(wr,_r),Vs.subVectors(Mr,wr);let t=[0,-ys.z,ys.y,0,-bs.z,bs.y,0,-Vs.z,Vs.y,ys.z,0,-ys.x,bs.z,0,-bs.x,Vs.z,0,-Vs.x,-ys.y,ys.x,0,-bs.y,bs.x,0,-Vs.y,Vs.x,0];return!Th(t,Mr,_r,wr,rl)||(t=[1,0,0,0,1,0,0,0,1],!Th(t,Mr,_r,wr,rl))?!1:(ol.crossVectors(ys,bs),t=[ol.x,ol.y,ol.z],Th(t,Mr,_r,wr,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new I,new I,new I,new I,new I,new I,new I,new I],di=new I,sl=new Sn,Mr=new I,_r=new I,wr=new I,ys=new I,bs=new I,Vs=new I,Po=new I,rl=new I,ol=new I,Gs=new I;function Th(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Gs.fromArray(s,r);let a=i.x*Math.abs(Gs.x)+i.y*Math.abs(Gs.y)+i.z*Math.abs(Gs.z),l=e.dot(Gs),c=t.dot(Gs),u=n.dot(Gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ev=new Sn,Io=new I,Ah=new I,Ln=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ev.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);let t=Io.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Io,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Ah)),this.expandByPoint(Io.copy(e.center).sub(Ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ji=new I,Ch=new I,al=new I,Ms=new I,Rh=new I,ll=new I,Ph=new I,yi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ch.copy(e).add(t).multiplyScalar(.5),al.copy(t).sub(e).normalize(),Ms.copy(this.origin).sub(Ch);let r=e.distanceTo(t)*.5,o=-this.direction.dot(al),a=Ms.dot(this.direction),l=-Ms.dot(al),c=Ms.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ch).addScaledVector(al,f),d}intersectSphere(e,t){ji.subVectors(e.center,this.origin);let n=ji.dot(this.direction),i=ji.dot(ji)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,i,r){Rh.subVectors(t,e),ll.subVectors(n,e),Ph.crossVectors(Rh,ll);let o=this.direction.dot(Ph),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ms.subVectors(this.origin,e);let l=a*this.direction.dot(ll.crossVectors(Ms,ll));if(l<0)return null;let c=a*this.direction.dot(Rh.cross(Ms));if(c<0||l+c>o)return null;let u=-a*Ms.dot(Ph);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class s{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Sr.setFromMatrixColumn(e,0).length(),r=1/Sr.setFromMatrixColumn(e,1).length(),o=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tv,e,nv)}lookAt(e,t,n){let i=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),_s.crossVectors(n,qn),_s.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),_s.crossVectors(n,qn)),_s.normalize(),cl.crossVectors(qn,_s),i[0]=_s.x,i[4]=cl.x,i[8]=qn.x,i[1]=_s.y,i[5]=cl.y,i[9]=qn.y,i[2]=_s.z,i[6]=cl.z,i[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],b=n[7],y=n[11],w=n[15],S=i[0],R=i[4],C=i[8],M=i[12],_=i[1],T=i[5],z=i[9],L=i[13],O=i[2],F=i[6],D=i[10],ee=i[14],V=i[3],te=i[7],q=i[11],G=i[15];return r[0]=o*S+a*_+l*O+c*V,r[4]=o*R+a*T+l*F+c*te,r[8]=o*C+a*z+l*D+c*q,r[12]=o*M+a*L+l*ee+c*G,r[1]=u*S+h*_+f*O+d*V,r[5]=u*R+h*T+f*F+d*te,r[9]=u*C+h*z+f*D+d*q,r[13]=u*M+h*L+f*ee+d*G,r[2]=g*S+x*_+m*O+p*V,r[6]=g*R+x*T+m*F+p*te,r[10]=g*C+x*z+m*D+p*q,r[14]=g*M+x*L+m*ee+p*G,r[3]=v*S+b*_+y*O+w*V,r[7]=v*R+b*T+y*F+w*te,r[11]=v*C+b*z+y*D+w*q,r[15]=v*M+b*L+y*ee+w*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,b=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,w=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,S=t*v+n*b+i*y+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return e[0]=v*R,e[1]=(x*f*r-h*m*r-x*i*d+n*m*d+h*i*p-n*f*p)*R,e[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*R,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*R,e[4]=b*R,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*R,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*R,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*R,e[8]=y*R,e[9]=(g*h*r-u*x*r-g*n*d+t*x*d+u*n*p-t*h*p)*R,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*R,e[12]=w*R,e[13]=(u*x*i-g*h*i+g*n*f-t*x*f-u*n*m+t*h*m)*R,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*m-t*a*m)*R,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,v=l*c,b=l*u,y=l*h,w=n.x,S=n.y,R=n.z;return i[0]=(1-(x+p))*w,i[1]=(d+y)*w,i[2]=(g-b)*w,i[3]=0,i[4]=(d-y)*S,i[5]=(1-(f+p))*S,i[6]=(m+v)*S,i[7]=0,i[8]=(g+b)*R,i[9]=(m-v)*R,i[10]=(1-(f+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Sr.set(i[0],i[1],i[2]).length(),o=Sr.set(i[4],i[5],i[6]).length(),a=Sr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pi.copy(this);let c=1/r,u=1/o,h=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=h,pi.elements[9]*=h,pi.elements[10]*=h,t.setFromRotationMatrix(pi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=gi,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===gi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Go)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=gi,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===gi)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Go)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Sr=new I,pi=new dt,tv=new I(0,0,0),nv=new I(1,1,1),_s=new I,cl=new I,qn=new I,Op=new dt,zp=new ss,Yn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},iv=0,kp=new I,Er=new ss,Zi=new dt,ul=new I,Lo=new I,sv=new I,rv=new ss,Hp=new I(1,0,0),Vp=new I(0,1,0),Gp=new I(0,0,1),Wp={type:"added"},ov={type:"removed"},Tr={type:"childadded",child:null},Ih={type:"childremoved",child:null},Ct=class s extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new Yn,n=new ss,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dt},normalMatrix:{value:new nt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,t){return kp.copy(e).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ul.copy(e):ul.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Lo,ul,this.up):Zi.lookAt(ul,Lo,this.up),this.quaternion.setFromRotationMatrix(Zi),i&&(Zi.extractRotation(i.matrixWorld),Er.setFromRotationMatrix(Zi),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wp),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ov),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wp),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ct.DEFAULT_UP=new I(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=new I,Ki=new I,Lh=new I,Ji=new I,Ar=new I,Cr=new I,qp=new I,Dh=new I,Nh=new I,Bh=new I,Fh=new _t,Uh=new _t,Oh=new _t,$i=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mi.subVectors(i,t),Ki.subVectors(n,t),Lh.subVectors(e,t);let o=mi.dot(mi),a=mi.dot(Ki),l=mi.dot(Lh),c=Ki.dot(Ki),u=Ki.dot(Lh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Fh.setScalar(0),Uh.setScalar(0),Oh.setScalar(0),Fh.fromBufferAttribute(e,t),Uh.fromBufferAttribute(e,n),Oh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Fh,r.x),o.addScaledVector(Uh,r.y),o.addScaledVector(Oh,r.z),o}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),Ki.subVectors(e,t),mi.cross(Ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),mi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ar.subVectors(i,n),Cr.subVectors(r,n),Dh.subVectors(e,n);let l=Ar.dot(Dh),c=Cr.dot(Dh);if(l<=0&&c<=0)return t.copy(n);Nh.subVectors(e,i);let u=Ar.dot(Nh),h=Cr.dot(Nh);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ar,o);Bh.subVectors(e,r);let d=Ar.dot(Bh),g=Cr.dot(Bh);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Cr,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return qp.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(qp,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Ar,o).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},hl={h:0,s:0,l:0};function zh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Kx(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zh(o,r,e+1/3),this.g=zh(o,r,e),this.b=zh(o,r,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Zm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return ut.workingToColorSpace(vn.copy(this),e),Math.round(ot(vn.r*255,0,255))*65536+Math.round(ot(vn.g*255,0,255))*256+Math.round(ot(vn.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(vn.copy(this),t);let n=vn.r,i=vn.g,r=vn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Mt){ut.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,i=vn.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ws),this.setHSL(ws.h+e,ws.s+t,ws.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ws),e.getHSL(hl);let n=Mh(ws.h,hl.h,t),i=Mh(ws.s,hl.s,t),r=Mh(ws.l,hl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Ve;Ve.NAMES=Zm;var av=0,Bi=class extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Ys,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=Fl,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bl&&(n.blendSrc=this.blendSrc),this.blendDst!==Fl&&(n.blendDst=this.blendDst),this.blendEquation!==Es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rt=class extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=mf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},es=lv();function lv(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function cv(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ot(s,-65504,65504),es.floatView[0]=s;let e=es.uint32View[0],t=e>>23&511;return es.baseTable[t]+((e&8388607)>>es.shiftTable[t])}function uv(s){let e=s>>10;return es.uint32View[0]=es.mantissaTable[es.offsetTable[e]+(s&1023)]+es.exponentTable[e],es.floatView[0]}var Ts=class{static toHalfFloat(e){return cv(e)}static fromHalfFloat(e){return uv(e)}},Yt=new I,fl=new de,hv=0,Vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ef,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fl.fromBufferAttribute(this,t),fl.applyMatrix3(e),this.setXY(t,fl.x,fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ro(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ro(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ro(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ro(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ro(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),i=In(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),i=In(i,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ef&&(e.usage=this.usage),e}};var qo=class extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xo=class extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},fv=0,si=new dt,kh=new Ct,Rr=new I,Xn=new Sn,Do=new Sn,rn=new I,wt=class s extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Af(e)?Xo:qo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Xn.min,Do.min),Xn.expandByPoint(rn),rn.addVectors(Xn.max,Do.max),Xn.expandByPoint(rn)):(Xn.expandByPoint(Do.min),Xn.expandByPoint(Do.max))}Xn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)rn.fromBufferAttribute(a,c),l&&(Rr.fromBufferAttribute(e,c),rn.add(Rr)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;let c=new I,u=new I,h=new I,f=new de,d=new de,g=new de,x=new I,m=new I;function p(C,M,_){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,_),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(T),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(T),a[C].add(x),a[M].add(x),a[_].add(x),l[C].add(m),l[M].add(m),l[_].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,M=v.length;C<M;++C){let _=v[C],T=_.start,z=_.count;for(let L=T,O=T+z;L<O;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let b=new I,y=new I,w=new I,S=new I;function R(C){w.fromBufferAttribute(i,C),S.copy(w);let M=a[C];b.copy(M),b.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(S,M);let T=y.dot(l[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,T)}for(let C=0,M=v.length;C<M;++C){let _=v[C],T=_.start,z=_.count;for(let L=T,O=T+z;L<O;L+=3)R(e.getX(L+0)),R(e.getX(L+1)),R(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Vt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xp=new dt,Ws=new yi,dl=new Ln,Yp=new I,pl=new I,ml=new I,gl=new I,Hh=new I,xl=new I,jp=new I,vl=new I,it=class extends Ct{constructor(e=new wt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){xl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Hh.fromBufferAttribute(h,e),o?xl.addScaledVector(Hh,u):xl.addScaledVector(Hh.sub(t),u))}t.add(xl)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(r),Ws.copy(e.ray).recast(e.near),!(dl.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(dl,Yp)===null||Ws.origin.distanceToSquared(Yp)>(e.far-e.near)**2))&&(Xp.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(Xp),!(n.boundingBox!==null&&Ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ws)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,w=b;y<w;y+=3){let S=a.getX(y),R=a.getX(y+1),C=a.getX(y+2);i=yl(this,p,e,n,c,u,h,S,R,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);i=yl(this,o,e,n,c,u,h,v,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,w=b;y<w;y+=3){let S=y,R=y+1,C=y+2;i=yl(this,p,e,n,c,u,h,S,R,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,b=m+1,y=m+2;i=yl(this,o,e,n,c,u,h,v,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function dv(s,e,t,n,i,r,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===xi,a),l===null)return null;vl.copy(a),vl.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(vl);return c<t.near||c>t.far?null:{distance:c,point:vl.clone(),object:s}}function yl(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,pl),s.getVertexPosition(l,ml),s.getVertexPosition(c,gl);let u=dv(s,e,t,n,pl,ml,gl,jp);if(u){let h=new I;$i.getBarycoord(jp,pl,ml,gl,h),i&&(u.uv=$i.getInterpolatedAttribute(i,a,l,c,h,new de)),r&&(u.uv1=$i.getInterpolatedAttribute(r,a,l,c,h,new de)),o&&(u.normal=$i.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};$i.getNormal(pl,ml,gl,f.normal),u.face=f,u.barycoord=h}return u}var Xt=class s extends wt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2));function g(x,m,p,v,b,y,w,S,R,C,M){let _=y/R,T=w/C,z=y/2,L=w/2,O=S/2,F=R+1,D=C+1,ee=0,V=0,te=new I;for(let q=0;q<D;q++){let G=q*T-L;for(let K=0;K<F;K++){let ge=K*_-z;te[x]=ge*v,te[m]=G*b,te[p]=O,c.push(te.x,te.y,te.z),te[x]=0,te[m]=0,te[p]=S>0?1:-1,u.push(te.x,te.y,te.z),h.push(K/R),h.push(1-q/C),ee+=1}}for(let q=0;q<C;q++)for(let G=0;G<R;G++){let K=f+G+F*q,ge=f+G+F*(q+1),xe=f+(G+1)+F*(q+1),Y=f+(G+1)+F*q;l.push(K,ge,Y),l.push(ge,xe,Y),V+=6}a.addGroup(d,V,M),d+=V,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ar(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(s){let e={};for(let t=0;t<s.length;t++){let n=ar(s[t]);for(let i in n)e[i]=n[i]}return e}function pv(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Cf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Kn={clone:ar,merge:bn},mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mv,this.fragmentShader=gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=pv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Yo=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ss=new I,Zp=new de,Kp=new de,cn=class extends Yo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,Zp,Kp),t.subVectors(Kp,Zp)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Nl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pr=-90,Ir=1,Vl=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new cn(Pr,Ir,e,t);i.layers=this.layers,this.add(i);let r=new cn(Pr,Ir,e,t);r.layers=this.layers,this.add(r);let o=new cn(Pr,Ir,e,t);o.layers=this.layers,this.add(o);let a=new cn(Pr,Ir,e,t);a.layers=this.layers,this.add(a);let l=new cn(Pr,Ir,e,t);l.layers=this.layers,this.add(l);let c=new cn(Pr,Ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jo=class extends Qt{constructor(e=[],t=rr,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gl=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xt(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:wi});r.uniforms.tEquirect.value=t;let o=new it(i,r),a=t.minFilter;return t.minFilter===as&&(t.minFilter=Jt),new Vl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Ge=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},xv={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Zo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vr=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ko=class extends Qt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=un,u=un,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bi=class extends Vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Lr=new dt,Jp=new dt,bl=[],Qp=new Sn,vv=new dt,No=new it,Bo=new Ln,Dn=class extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Lr),Qp.copy(e.boundingBox).applyMatrix4(Lr),this.boundingBox.union(Qp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Lr),Bo.copy(e.boundingSphere).applyMatrix4(Lr),this.boundingSphere.union(Bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(n),e.ray.intersectsSphere(Bo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Lr),Jp.multiplyMatrices(n,Lr),No.matrixWorld=Jp,No.raycast(e,bl);for(let o=0,a=bl.length;o<a;o++){let l=bl[o];l.instanceId=r,l.object=this,t.push(l)}bl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ko(new Float32Array(i*this.count),i,this.count,Ic,Tn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vh=new I,yv=new I,bv=new nt,ri=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Vh.subVectors(n,t).cross(yv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Vh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bv.getNormalMatrix(e),i=this.coplanarPoint(Vh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qs=new Ln,Mv=new de(.5,.5),Ml=new I,Gr=class{constructor(e=new ri,t=new ri,n=new ri,i=new ri,r=new ri,o=new ri){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],b=r[13],y=r[14],w=r[15];if(i[0].setComponents(c-o,d-u,p-g,w-v).normalize(),i[1].setComponents(c+o,d+u,p+g,w+v).normalize(),i[2].setComponents(c+a,d+h,p+x,w+b).normalize(),i[3].setComponents(c-a,d-h,p-x,w-b).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,d-f,p-m,w-y).normalize();else if(i[4].setComponents(c-l,d-f,p-m,w-y).normalize(),t===gi)i[5].setComponents(c+l,d+f,p+m,w+y).normalize();else if(t===Go)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);let t=Mv.distanceTo(e.center);return qs.radius=.7071067811865476+t,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ml.x=i.normal.x>0?e.max.x:e.min.x,Ml.y=i.normal.y>0?e.max.y:e.min.y,Ml.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wr=class extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wl=new I,ql=new I,$p=new dt,Fo=new yi,_l=new Ln,Gh=new I,em=new I,Xl=class extends Ct{constructor(e=new wt,t=new Wr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Wl.fromBufferAttribute(t,i-1),ql.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wl.distanceTo(ql);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(i),_l.radius+=r,e.ray.intersectsSphere(_l)===!1)return;$p.copy(i).invert(),Fo.copy(e.ray).applyMatrix4($p);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),v=u.getX(x+1),b=wl(this,e,Fo,l,p,v,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=wl(this,e,Fo,l,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=wl(this,e,Fo,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=wl(this,e,Fo,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wl(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Wl.fromBufferAttribute(a,i),ql.fromBufferAttribute(a,r),t.distanceSqToSegment(Wl,ql,Gh,em)>n)return;Gh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Gh);if(!(c<e.near||c>e.far))return{distance:c,point:em.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var tm=new I,nm=new I,Jo=class extends Xl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)tm.fromBufferAttribute(t,i),nm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+tm.distanceTo(nm);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Yl=class extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},im=new dt,tf=new yi,Sl=new Ln,El=new I,Qo=class extends Ct{constructor(e=new wt,t=new Yl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sl.copy(n.boundingSphere),Sl.applyMatrix4(i),Sl.radius+=r,e.ray.intersectsSphere(Sl)===!1)return;im.copy(i).invert(),tf.copy(e.ray).applyMatrix4(im);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);El.fromBufferAttribute(h,m),sm(El,m,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)El.fromBufferAttribute(h,g),sm(El,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sm(s,e,t,n,i,r,o){let a=tf.distanceSqToPoint(s);if(a<t){let l=new I;tf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Gt=class extends Qt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$o=class extends Qt{constructor(e,t,n=Ps,i,r,o,a=un,l=un,c,u=Ur,h=1){if(u!==Ur&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var ea=class s extends wt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,u=new de;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},kt=class s extends wt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(d,2));function v(){let y=new I,w=new I,S=0,R=(t-e)/n;for(let C=0;C<=r;C++){let M=[],_=C/r,T=_*(t-e)+e;for(let z=0;z<=i;z++){let L=z/i,O=L*l+a,F=Math.sin(O),D=Math.cos(O);w.x=T*F,w.y=-_*n+m,w.z=T*D,h.push(w.x,w.y,w.z),y.set(F,R,D).normalize(),f.push(y.x,y.y,y.z),d.push(L,1-_),M.push(g++)}x.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){let _=x[M][C],T=x[M+1][C],z=x[M+1][C+1],L=x[M][C+1];(e>0||M!==0)&&(u.push(_,T,L),S+=3),(t>0||M!==r-1)&&(u.push(T,z,L),S+=3)}c.addGroup(p,S,0),p+=S}function b(y){let w=g,S=new de,R=new I,C=0,M=y===!0?e:t,_=y===!0?1:-1;for(let z=1;z<=i;z++)h.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),g++;let T=g;for(let z=0;z<=i;z++){let O=z/i*l+a,F=Math.cos(O),D=Math.sin(O);R.x=M*D,R.y=m*_,R.z=M*F,h.push(R.x,R.y,R.z),f.push(0,_,0),S.x=F*.5+.5,S.y=D*.5*_+.5,d.push(S.x,S.y),g++}for(let z=0;z<i;z++){let L=w+z,O=T+z;y===!0?u.push(O,O+1,L):u.push(O+1,O,L),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nn=class s extends kt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ta=class s extends wt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new I,y=new I,w=new I;for(let S=0;S<t.length;S+=3)d(t[S+0],b),d(t[S+1],y),d(t[S+2],w),l(b,y,w,v)}function l(v,b,y,w){let S=w+1,R=[];for(let C=0;C<=S;C++){R[C]=[];let M=v.clone().lerp(y,C/S),_=b.clone().lerp(y,C/S),T=S-C;for(let z=0;z<=T;z++)z===0&&C===S?R[C][z]=M:R[C][z]=M.clone().lerp(_,z/T)}for(let C=0;C<S;C++)for(let M=0;M<2*(S-C)-1;M++){let _=Math.floor(M/2);M%2===0?(f(R[C][_+1]),f(R[C+1][_]),f(R[C][_])):(f(R[C][_+1]),f(R[C+1][_+1]),f(R[C+1][_]))}}function c(v){let b=new I;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(v),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function u(){let v=new I;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let y=m(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;o.push(y,1-w)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){let b=o[v+0],y=o[v+2],w=o[v+4],S=Math.max(b,y,w),R=Math.min(b,y,w);S>.9&&R<.1&&(b<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,b){let y=v*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function g(){let v=new I,b=new I,y=new I,w=new I,S=new de,R=new de,C=new de;for(let M=0,_=0;M<r.length;M+=9,_+=6){v.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),S.set(o[_+0],o[_+1]),R.set(o[_+2],o[_+3]),C.set(o[_+4],o[_+5]),w.copy(v).add(b).add(y).divideScalar(3);let T=m(w);x(S,_+0,v,T),x(R,_+2,b,T),x(C,_+4,y,T)}}function x(v,b,y,w){w<0&&v.x===1&&(o[b]=v.x-1),y.x===0&&y.z===0&&(o[b]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},na=class s extends ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Tl=new I,Al=new I,Wh=new I,Cl=new $i,ia=class extends wt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Nl*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:p}=Cl;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Cl.getNormal(Wh),h[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){let b=(v+1)%3,y=h[v],w=h[b],S=Cl[u[v]],R=Cl[u[b]],C=`${y}_${w}`,M=`${w}_${y}`;M in f&&f[M]?(Wh.dot(f[M].normal)<=r&&(d.push(S.x,S.y,S.z),d.push(R.x,R.y,R.z)),f[M]=null):C in f||(f[C]={index0:c[v],index1:c[b],normal:Wh.clone()})}}for(let g in f)if(f[g]){let{index0:x,index1:m}=f[g];Tl.fromBufferAttribute(a,x),Al.fromBufferAttribute(a,m),d.push(Tl.x,Tl.y,Tl.z),d.push(Al.x,Al.y,Al.z)}this.setAttribute("position",new je(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new de:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,i=[],r=[],o=[],a=new I,l=new dt;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ot(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(ot(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qr=class extends jn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new de){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jl=class extends qr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Rf(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Rl=new I,qh=new Rf,Xh=new Rf,Yh=new Rf,oi=class extends jn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Rl.subVectors(i[0],i[1]).add(i[0]),c=Rl);let h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Rl.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Rl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),qh.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),Xh.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),Yh.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(qh.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Xh.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Yh.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(qh.calc(l),Xh.calc(l),Yh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function rm(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function _v(s,e){let t=1-s;return t*t*e}function wv(s,e){return 2*(1-s)*s*e}function Sv(s,e){return s*s*e}function zo(s,e,t,n){return _v(s,e)+wv(s,t)+Sv(s,n)}function Ev(s,e){let t=1-s;return t*t*t*e}function Tv(s,e){let t=1-s;return 3*t*t*s*e}function Av(s,e){return 3*(1-s)*s*s*e}function Cv(s,e){return s*s*s*e}function ko(s,e,t,n,i){return Ev(s,e)+Tv(s,t)+Av(s,n)+Cv(s,i)}var sa=class extends jn{constructor(e=new de,t=new de,n=new de,i=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new de){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ko(e,i.x,r.x,o.x,a.x),ko(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zl=class extends jn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ko(e,i.x,r.x,o.x,a.x),ko(e,i.y,r.y,o.y,a.y),ko(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends jn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kl=class extends jn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends jn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(zo(e,i.x,r.x,o.x),zo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends jn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(zo(e,i.x,r.x,o.x),zo(e,i.y,r.y,o.y),zo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(rm(a,l.x,c.x,u.x,h.x),rm(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new de().fromArray(i))}return this}},Jl=Object.freeze({__proto__:null,ArcCurve:jl,CatmullRomCurve3:oi,CubicBezierCurve:sa,CubicBezierCurve3:Zl,EllipseCurve:qr,LineCurve:ra,LineCurve3:Kl,QuadraticBezierCurve:oa,QuadraticBezierCurve3:aa,SplineCurve:la}),Ql=class extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Jl[i.type]().fromJSON(i))}return this}},Ks=class extends Ql{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ra(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new oa(this.currentPoint.clone(),new de(e,t),new de(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new sa(this.currentPoint.clone(),new de(e,t),new de(n,i),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new la(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new qr(e,t,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},en=class extends Ks{constructor(e){super(e),this.uuid=eo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ks().fromJSON(i))}return this}};function Rv(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Km(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Nv(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<i;f+=t){let d=s[f],g=s[f+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return ca(r,o,t,a,l,c,0),o}function Km(s,e,t,n,i){let r;if(i===qv(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=om(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=om(o/n|0,s[o],s[o+1],r);return r&&Xr(r,r.next)&&(ha(r),r=r.next),r}function Js(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Xr(t,t.next)||zt(t.prev,t,t.next)===0)){if(ha(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ca(s,e,t,n,i,r,o){if(!s)return;!o&&r&&zv(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Iv(s,n,i,r):Pv(s)){e.push(l.i,s.i,c.i),ha(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Lv(Js(s),e),ca(s,e,t,n,i,r,2)):o===2&&Dv(s,e,t,n,i,r):ca(Js(s),e,t,n,i,r,1);break}}}function Pv(s){let e=s.prev,t=s,n=s.next;if(zt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,r,o),h=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Oo(i,a,r,l,o,c,g.x,g.y)&&zt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Iv(s,e,t,n){let i=s.prev,r=s,o=s.next;if(zt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(u,h,f),x=Math.max(a,l,c),m=Math.max(u,h,f),p=nf(d,g,e,t,n),v=nf(x,m,e,t,n),b=s.prevZ,y=s.nextZ;for(;b&&b.z>=p&&y&&y.z<=v;){if(b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&Oo(a,u,l,h,c,f,b.x,b.y)&&zt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Oo(a,u,l,h,c,f,y.x,y.y)&&zt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&Oo(a,u,l,h,c,f,b.x,b.y)&&zt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Oo(a,u,l,h,c,f,y.x,y.y)&&zt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Lv(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Xr(n,i)&&Qm(n,t,t.next,i)&&ua(n,i)&&ua(i,n)&&(e.push(n.i,t.i,i.i),ha(t),ha(t.next),t=s=i),t=t.next}while(t!==s);return Js(t)}function Dv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vv(o,a)){let l=$m(o,a);o=Js(o,o.next),l=Js(l,l.next),ca(o,e,t,n,i,r,0),ca(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Nv(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Km(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Hv(c))}i.sort(Bv);for(let r=0;r<i.length;r++)t=Fv(i[r],t);return t}function Bv(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Fv(s,e){let t=Uv(s,e);if(!t)return e;let n=$m(t,s);return Js(n,n.next),Js(t,t.next)}function Uv(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(Xr(s,t))return t;do{if(Xr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Jm(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let h=Math.abs(i-t.y)/(n-t.x);ua(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Ov(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Ov(s,e){return zt(s.prev,s,e.prev)<0&&zt(e.next,s,s.next)<0}function zv(s,e,t,n){let i=s;do i.z===0&&(i.z=nf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,kv(i)}function kv(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function nf(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Hv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Jm(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Oo(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Jm(s,e,t,n,i,r,o,a)}function Vv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Gv(s,e)&&(ua(s,e)&&ua(e,s)&&Wv(s,e)&&(zt(s.prev,s,e.prev)||zt(s,e.prev,e))||Xr(s,e)&&zt(s.prev,s,s.next)>0&&zt(e.prev,e,e.next)>0)}function zt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Xr(s,e){return s.x===e.x&&s.y===e.y}function Qm(s,e,t,n){let i=Il(zt(s,e,t)),r=Il(zt(s,e,n)),o=Il(zt(t,n,s)),a=Il(zt(t,n,e));return!!(i!==r&&o!==a||i===0&&Pl(s,t,e)||r===0&&Pl(s,n,e)||o===0&&Pl(t,s,n)||a===0&&Pl(t,e,n))}function Pl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Il(s){return s>0?1:s<0?-1:0}function Gv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Qm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ua(s,e){return zt(s.prev,s,s.next)<0?zt(s,e,s.next)>=0&&zt(s,s.prev,e)>=0:zt(s,e,s.prev)<0||zt(s,s.next,e)<0}function Wv(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function $m(s,e){let t=sf(s.i,s.x,s.y),n=sf(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function om(s,e,t,n){let i=sf(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ha(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sf(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qv(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var rf=class{static triangulate(e,t,n=2){return Rv(e,t,n)}},Ni=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];am(e),lm(n,e);let o=e.length;t.forEach(am);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,lm(n,t[l]);let a=rf.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function am(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function lm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Bn=class s extends wt{constructor(e=new en([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new je(i,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Xv,b,y=!1,w,S,R,C;p&&(b=p.getSpacedPoints(u),y=!0,f=!1,w=p.computeFrenetFrames(u,!1),S=new I,R=new I,C=new I),f||(m=0,d=0,g=0,x=0);let M=a.extractPoints(c),_=M.shape,T=M.holes;if(!Ni.isClockWise(_)){_=_.reverse();for(let pe=0,ae=T.length;pe<ae;pe++){let he=T[pe];Ni.isClockWise(he)&&(T[pe]=he.reverse())}}function L(pe){let he=10000000000000001e-36,me=pe[0];for(let Te=1;Te<=pe.length;Te++){let be=Te%pe.length,Ce=pe[be],Ze=Ce.x-me.x,qe=Ce.y-me.y,B=Ze*Ze+qe*qe,E=Math.max(Math.abs(Ce.x),Math.abs(Ce.y),Math.abs(me.x),Math.abs(me.y)),$=he*E*E;if(B<=$){pe.splice(be,1),Te--;continue}me=Ce}}L(_),T.forEach(L);let O=T.length,F=_;for(let pe=0;pe<O;pe++){let ae=T[pe];_=_.concat(ae)}function D(pe,ae,he){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(ae,he)}let ee=_.length;function V(pe,ae,he){let me,Te,be,Ce=pe.x-ae.x,Ze=pe.y-ae.y,qe=he.x-pe.x,B=he.y-pe.y,E=Ce*Ce+Ze*Ze,$=Ce*B-Ze*qe;if(Math.abs($)>Number.EPSILON){let oe=Math.sqrt(E),ye=Math.sqrt(qe*qe+B*B),le=ae.x-Ze/oe,Ue=ae.y+Ce/oe,Ee=he.x-B/ye,ke=he.y+qe/ye,ze=((Ee-le)*B-(ke-Ue)*qe)/(Ce*B-Ze*qe);me=le+Ce*ze-pe.x,Te=Ue+Ze*ze-pe.y;let _e=me*me+Te*Te;if(_e<=2)return new de(me,Te);be=Math.sqrt(_e/2)}else{let oe=!1;Ce>Number.EPSILON?qe>Number.EPSILON&&(oe=!0):Ce<-Number.EPSILON?qe<-Number.EPSILON&&(oe=!0):Math.sign(Ze)===Math.sign(B)&&(oe=!0),oe?(me=-Ze,Te=Ce,be=Math.sqrt(E)):(me=Ce,Te=Ze,be=Math.sqrt(E/2))}return new de(me/be,Te/be)}let te=[];for(let pe=0,ae=F.length,he=ae-1,me=pe+1;pe<ae;pe++,he++,me++)he===ae&&(he=0),me===ae&&(me=0),te[pe]=V(F[pe],F[he],F[me]);let q=[],G,K=te.concat();for(let pe=0,ae=O;pe<ae;pe++){let he=T[pe];G=[];for(let me=0,Te=he.length,be=Te-1,Ce=me+1;me<Te;me++,be++,Ce++)be===Te&&(be=0),Ce===Te&&(Ce=0),G[me]=V(he[me],he[be],he[Ce]);q.push(G),K=K.concat(G)}let ge;if(m===0)ge=Ni.triangulateShape(F,T);else{let pe=[],ae=[];for(let he=0;he<m;he++){let me=he/m,Te=d*Math.cos(me*Math.PI/2),be=g*Math.sin(me*Math.PI/2)+x;for(let Ce=0,Ze=F.length;Ce<Ze;Ce++){let qe=D(F[Ce],te[Ce],be);Ae(qe.x,qe.y,-Te),me===0&&pe.push(qe)}for(let Ce=0,Ze=O;Ce<Ze;Ce++){let qe=T[Ce];G=q[Ce];let B=[];for(let E=0,$=qe.length;E<$;E++){let oe=D(qe[E],G[E],be);Ae(oe.x,oe.y,-Te),me===0&&B.push(oe)}me===0&&ae.push(B)}}ge=Ni.triangulateShape(pe,ae)}let xe=ge.length,Y=g+x;for(let pe=0;pe<ee;pe++){let ae=f?D(_[pe],K[pe],Y):_[pe];y?(R.copy(w.normals[0]).multiplyScalar(ae.x),S.copy(w.binormals[0]).multiplyScalar(ae.y),C.copy(b[0]).add(R).add(S),Ae(C.x,C.y,C.z)):Ae(ae.x,ae.y,0)}for(let pe=1;pe<=u;pe++)for(let ae=0;ae<ee;ae++){let he=f?D(_[ae],K[ae],Y):_[ae];y?(R.copy(w.normals[pe]).multiplyScalar(he.x),S.copy(w.binormals[pe]).multiplyScalar(he.y),C.copy(b[pe]).add(R).add(S),Ae(C.x,C.y,C.z)):Ae(he.x,he.y,h/u*pe)}for(let pe=m-1;pe>=0;pe--){let ae=pe/m,he=d*Math.cos(ae*Math.PI/2),me=g*Math.sin(ae*Math.PI/2)+x;for(let Te=0,be=F.length;Te<be;Te++){let Ce=D(F[Te],te[Te],me);Ae(Ce.x,Ce.y,h+he)}for(let Te=0,be=T.length;Te<be;Te++){let Ce=T[Te];G=q[Te];for(let Ze=0,qe=Ce.length;Ze<qe;Ze++){let B=D(Ce[Ze],G[Ze],me);y?Ae(B.x,B.y+b[u-1].y,b[u-1].x+he):Ae(B.x,B.y,h+he)}}}ue(),ce();function ue(){let pe=i.length/3;if(f){let ae=0,he=ee*ae;for(let me=0;me<xe;me++){let Te=ge[me];Pe(Te[2]+he,Te[1]+he,Te[0]+he)}ae=u+m*2,he=ee*ae;for(let me=0;me<xe;me++){let Te=ge[me];Pe(Te[0]+he,Te[1]+he,Te[2]+he)}}else{for(let ae=0;ae<xe;ae++){let he=ge[ae];Pe(he[2],he[1],he[0])}for(let ae=0;ae<xe;ae++){let he=ge[ae];Pe(he[0]+ee*u,he[1]+ee*u,he[2]+ee*u)}}n.addGroup(pe,i.length/3-pe,0)}function ce(){let pe=i.length/3,ae=0;Re(F,ae),ae+=F.length;for(let he=0,me=T.length;he<me;he++){let Te=T[he];Re(Te,ae),ae+=Te.length}n.addGroup(pe,i.length/3-pe,1)}function Re(pe,ae){let he=pe.length;for(;--he>=0;){let me=he,Te=he-1;Te<0&&(Te=pe.length-1);for(let be=0,Ce=u+m*2;be<Ce;be++){let Ze=ee*be,qe=ee*(be+1),B=ae+me+Ze,E=ae+Te+Ze,$=ae+Te+qe,oe=ae+me+qe;tt(B,E,$,oe)}}}function Ae(pe,ae,he){l.push(pe),l.push(ae),l.push(he)}function Pe(pe,ae,he){Ne(pe),Ne(ae),Ne(he);let me=i.length/3,Te=v.generateTopUV(n,i,me-3,me-2,me-1);H(Te[0]),H(Te[1]),H(Te[2])}function tt(pe,ae,he,me){Ne(pe),Ne(ae),Ne(me),Ne(ae),Ne(he),Ne(me);let Te=i.length/3,be=v.generateSideWallUV(n,i,Te-6,Te-3,Te-2,Te-1);H(be[0]),H(be[1]),H(be[3]),H(be[1]),H(be[2]),H(be[3])}function Ne(pe){i.push(l[pe*3+0]),i.push(l[pe*3+1]),i.push(l[pe*3+2])}function H(pe){r.push(pe.x),r.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Yv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Jl[i.type]().fromJSON(i)),new s(n,e.options)}},Xv={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new de(r,o),new de(a,l),new de(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-h),new de(f,1-g),new de(x,1-p)]:[new de(a,1-l),new de(u,1-h),new de(d,1-g),new de(m,1-p)]}};function Yv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Qs=class s extends ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var yt=class s extends wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let v=p*f-o;for(let b=0;b<c;b++){let y=b*h-r;g.push(y,-v,0),x.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let b=v+c*p,y=v+c*(p+1),w=v+1+c*(p+1),S=v+1+c*p;d.push(b,y,S),d.push(y,w,S)}this.setIndex(d),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},$s=class s extends wt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/i,d=new I,g=new de;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let v=p+m,b=v,y=v+n+1,w=v+n+2,S=v+1;a.push(b,y,S),a.push(y,w,S)}}this.setIndex(a),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},er=class s extends wt{constructor(e=new en([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new je(i,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function c(u){let h=i.length/3,f=u.extractPoints(t),d=f.shape,g=f.holes;Ni.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];Ni.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=Ni.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){let v=d[m];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){let v=x[m],b=v[0]+h,y=v[1]+h,w=v[2]+h;n.push(b,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return jv(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function jv(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var ai=class s extends wt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,f=new I,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],b=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let S=w/t;h.x=-e*Math.cos(i+S*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(i+S*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(S+y,1-b),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let b=u[p][v+1],y=u[p][v],w=u[p+1][v],S=u[p+1][v+1];(p!==0||o>0)&&d.push(b,y,S),(p!==n-1||l<Math.PI)&&d.push(y,w,S)}this.setIndex(d),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var hn=class s extends wt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new I,h=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let x=g/i*r,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let x=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Mi=class s extends wt{constructor(e=new aa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new de,u=new I,h=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(d,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),v(),p()}function m(b){u=e.getPointAt(b/t,u);let y=o.normals[b],w=o.binormals[b];for(let S=0;S<=i;S++){let R=S/i*Math.PI*2,C=Math.sin(R),M=-Math.cos(R);l.x=M*y.x+C*w.x,l.y=M*y.y+C*w.y,l.z=M*y.z+C*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=t;b++)for(let y=1;y<=i;y++){let w=(i+1)*(b-1)+(y-1),S=(i+1)*b+(y-1),R=(i+1)*b+y,C=(i+1)*(b-1)+y;g.push(w,S,C),g.push(S,R,C)}}function v(){for(let b=0;b<=t;b++)for(let y=0;y<=i;y++)c.x=b/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Jl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var fa=class extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wt=class extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_i=class extends Wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $l=class extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ec=class extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ll(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Zv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var tr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tc=class extends tr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kh,endingEnd:Kh}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jh:r=e,a=2*t-n;break;case Qh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jh:o=e,l=2*n-t;break;case Qh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+v*o[c+w]+b*o[l+w]+y*o[h+w];return r}},nc=class extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},ic=class extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ll(t,this.TimeBufferType),this.values=Ll(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ll(e.times,Array),values:Ll(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ho:t=this.InterpolantFactoryMethodDiscrete;break;case Ul:t=this.InterpolantFactoryMethodLinear;break;case Dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ho;case this.InterpolantFactoryMethodLinear:return Ul;case this.InterpolantFactoryMethodSmooth:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Zv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Dl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Ul;var As=class extends Zn{constructor(e,t,n){super(e,t,n)}};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Ho;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}};sc.prototype.ValueTypeName="color";var rc=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}};rc.prototype.ValueTypeName="number";var oc=class extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)ss.slerpFlat(r,0,o,c-a,o,c,l);return r}},da=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}};da.prototype.ValueTypeName="quaternion";da.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends Zn{constructor(e,t,n){super(e,t,n)}};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Ho;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}};ac.prototype.ValueTypeName="vector";var Br={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Yr=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},eg=new Yr,Rs=class{constructor(e){this.manager=e!==void 0?e:eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Rs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qi={},of=class extends Error{constructor(e,t){super(e),this.response=t}},lc=class extends Rs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Br.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:n,onError:i});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Qi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){v();function v(){h.read().then(({done:b,value:y})=>{if(b)p.close();else{x+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let S=0,R=u.length;S<R;S++){let C=u[S];C.onProgress&&C.onProgress(w)}p.enqueue(y),v()}},b=>{p.error(b)})}}});return new Response(m)}else throw new of(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Br.add(`file:${e}`,c);let u=Qi[e];delete Qi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Qi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Qi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Dr=new WeakMap,cc=class extends Rs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Br.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Dr.get(o);h===void 0&&(h=[],Dr.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=Or("img");function l(){u(),t&&t(this);let h=Dr.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Dr.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),Br.remove(`image:${e}`);let f=Dr.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(h)}Dr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Br.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var pa=class extends Rs{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new Ko,a=new lc(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Di,o.wrapT=c.wrapT!==void 0?c.wrapT:Di,o.magFilter=c.magFilter!==void 0?c.magFilter:Jt,o.minFilter=c.minFilter!==void 0?c.minFilter:Jt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=as),c.mipmapCount===1&&(o.minFilter=Jt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}},ma=class extends Rs{constructor(e){super(e)}load(e,t,n,i){let r=new Qt,o=new cc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},jr=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Zr=class extends jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},jh=new dt,cm=new I,um=new I,uc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;cm.setFromMatrixPosition(e.matrixWorld),t.position.copy(cm),um.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(um),t.updateMatrixWorld(),jh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var hm=new dt,Uo=new I,Zh=new I,af=class extends uc{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Uo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Uo),Zh.copy(n.position),Zh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zh),n.updateMatrixWorld(),i.makeTranslation(-Uo.x,-Uo.y,-Uo.z),hm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hm,n.coordinateSystem,n.reversedDepth)}},ga=class extends jr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new af}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},rs=class extends Yo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lf=class extends uc{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nr=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new lf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var hc=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},xa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Pf="\\[\\]\\.:\\/",Kv=new RegExp("["+Pf+"]","g"),If="[^"+Pf+"]",Jv="[^"+Pf.replace("\\.","")+"]",Qv=/((?:WC+[\/:])*)/.source.replace("WC",If),$v=/(WCOD+)?/.source.replace("WCOD",Jv),ey=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",If),ty=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",If),ny=new RegExp("^"+Qv+$v+ey+ty+"$"),iy=["material","materials","bones","map"],cf=class{constructor(e,t,n){let i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kv,"")}static parseTrackName(e){let t=ny.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);iy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=cf;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fT=new Float32Array(1);var fm=new dt,ir=class{constructor(e,t,n=0,i=1/0){this.ray=new yi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fm),this}intersectObject(e,t=!0,n=[]){return uf(e,this,n,t),n.sort(dm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)uf(e[i],this,n,t);return n.sort(dm),n}};function dm(s,e){return s.distance-e.distance}function uf(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)uf(r[o],e,t,!0)}}function Lf(s,e,t,n){let i=sy(n);switch(t){case bf:return s*e;case Ic:return s*e/i.components*i.byteLength;case Lc:return s*e/i.components*i.byteLength;case _f:return s*e*2/i.components*i.byteLength;case Dc:return s*e*2/i.components*i.byteLength;case Mf:return s*e*3/i.components*i.byteLength;case li:return s*e*4/i.components*i.byteLength;case Nc:return s*e*4/i.components*i.byteLength;case ba:case Ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _a:case wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fc:case Oc:return Math.max(s,16)*Math.max(e,8)/4;case Bc:case Uc:return Math.max(s,8)*Math.max(e,8)/2;case zc:case kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case jc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case eu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case tu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sa:case nu:case iu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case wf:case su:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ru:case ou:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sy(s){switch(s){case Si:case xf:return{byteLength:1,components:1};case Jr:case vf:case jt:return{byteLength:2,components:1};case Rc:case Pc:return{byteLength:2,components:4};case Ps:case Cc:case Tn:return{byteLength:4,components:1};case yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="179");function Sg(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function fy(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,by=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ey=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ty=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ay=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,By=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Oy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,h1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,V1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,J1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ob=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ab=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ib=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Db=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ub=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:dy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:xy,alphatest_pars_fragment:vy,aomap_fragment:yy,aomap_pars_fragment:by,batching_pars_vertex:My,batching_vertex:_y,begin_vertex:wy,beginnormal_vertex:Sy,bsdfs:Ey,iridescence_fragment:Ty,bumpmap_pars_fragment:Ay,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:Ry,clipping_planes_pars_vertex:Py,clipping_planes_vertex:Iy,color_fragment:Ly,color_pars_fragment:Dy,color_pars_vertex:Ny,color_vertex:By,common:Fy,cube_uv_reflection_fragment:Uy,defaultnormal_vertex:Oy,displacementmap_pars_vertex:zy,displacementmap_vertex:ky,emissivemap_fragment:Hy,emissivemap_pars_fragment:Vy,colorspace_fragment:Gy,colorspace_pars_fragment:Wy,envmap_fragment:qy,envmap_common_pars_fragment:Xy,envmap_pars_fragment:Yy,envmap_pars_vertex:jy,envmap_physical_pars_fragment:r1,envmap_vertex:Zy,fog_vertex:Ky,fog_pars_vertex:Jy,fog_fragment:Qy,fog_pars_fragment:$y,gradientmap_pars_fragment:e1,lightmap_pars_fragment:t1,lights_lambert_fragment:n1,lights_lambert_pars_fragment:i1,lights_pars_begin:s1,lights_toon_fragment:o1,lights_toon_pars_fragment:a1,lights_phong_fragment:l1,lights_phong_pars_fragment:c1,lights_physical_fragment:u1,lights_physical_pars_fragment:h1,lights_fragment_begin:f1,lights_fragment_maps:d1,lights_fragment_end:p1,logdepthbuf_fragment:m1,logdepthbuf_pars_fragment:g1,logdepthbuf_pars_vertex:x1,logdepthbuf_vertex:v1,map_fragment:y1,map_pars_fragment:b1,map_particle_fragment:M1,map_particle_pars_fragment:_1,metalnessmap_fragment:w1,metalnessmap_pars_fragment:S1,morphinstance_vertex:E1,morphcolor_vertex:T1,morphnormal_vertex:A1,morphtarget_pars_vertex:C1,morphtarget_vertex:R1,normal_fragment_begin:P1,normal_fragment_maps:I1,normal_pars_fragment:L1,normal_pars_vertex:D1,normal_vertex:N1,normalmap_pars_fragment:B1,clearcoat_normal_fragment_begin:F1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:z1,opaque_fragment:k1,packing:H1,premultiplied_alpha_fragment:V1,project_vertex:G1,dithering_fragment:W1,dithering_pars_fragment:q1,roughnessmap_fragment:X1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:j1,shadowmap_pars_vertex:Z1,shadowmap_vertex:K1,shadowmask_pars_fragment:J1,skinbase_vertex:Q1,skinning_pars_vertex:$1,skinning_vertex:eb,skinnormal_vertex:tb,specularmap_fragment:nb,specularmap_pars_fragment:ib,tonemapping_fragment:sb,tonemapping_pars_fragment:rb,transmission_fragment:ob,transmission_pars_fragment:ab,uv_pars_fragment:lb,uv_pars_vertex:cb,uv_vertex:ub,worldpos_vertex:hb,background_vert:fb,background_frag:db,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:xb,depth_vert:vb,depth_frag:yb,distanceRGBA_vert:bb,distanceRGBA_frag:Mb,equirect_vert:_b,equirect_frag:wb,linedashed_vert:Sb,linedashed_frag:Eb,meshbasic_vert:Tb,meshbasic_frag:Ab,meshlambert_vert:Cb,meshlambert_frag:Rb,meshmatcap_vert:Pb,meshmatcap_frag:Ib,meshnormal_vert:Lb,meshnormal_frag:Db,meshphong_vert:Nb,meshphong_frag:Bb,meshphysical_vert:Fb,meshphysical_frag:Ub,meshtoon_vert:Ob,meshtoon_frag:zb,points_vert:kb,points_frag:Hb,shadow_vert:Vb,shadow_frag:Gb,sprite_vert:Wb,sprite_frag:qb},Ie={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Ui={basic:{uniforms:bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:bn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:bn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:bn([Ie.points,Ie.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:bn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:bn([Ie.common,Ie.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:bn([Ie.sprite,Ie.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:bn([Ie.common,Ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:bn([Ie.lights,Ie.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ui.physical={uniforms:bn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var au={r:0,b:0,g:0},lr=new Yn,Xb=new dt;function Yb(s,e,t,n,i,r,o){let a=new Ve(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,w=g(b);w===null?p(a,l):w&&w.isColor&&(p(w,1),y=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,y){let w=g(y);w&&(w.isCubeTexture||w.mapping===va)?(u===void 0&&(u=new it(new Xt(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:ar(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),lr.copy(y.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(lr)),u.material.toneMapped=ut.getTransfer(w.colorSpace)!==ft,(h!==w||f!==w.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new it(new yt(2,2),new vt({name:"BackgroundMaterial",uniforms:ar(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ut.getTransfer(w.colorSpace)!==ft,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(au,Cf(s)),n.buffers.color.setClear(au.r,au.g,au.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:m,dispose:v}}function jb(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(_,T,z,L,O){let F=!1,D=h(L,z,T);r!==D&&(r=D,c(r.object)),F=d(_,L,z,O),F&&g(_,L,z,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,y(_,T,z,L),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function u(_){return s.deleteVertexArray(_)}function h(_,T,z){let L=z.wireframe===!0,O=n[_.id];O===void 0&&(O={},n[_.id]=O);let F=O[T.id];F===void 0&&(F={},O[T.id]=F);let D=F[L];return D===void 0&&(D=f(l()),F[L]=D),D}function f(_){let T=[],z=[],L=[];for(let O=0;O<t;O++)T[O]=0,z[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:L,object:_,attributes:{},index:null}}function d(_,T,z,L){let O=r.attributes,F=T.attributes,D=0,ee=z.getAttributes();for(let V in ee)if(ee[V].location>=0){let q=O[V],G=F[V];if(G===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(G=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(G=_.instanceColor)),q===void 0||q.attribute!==G||G&&q.data!==G.data)return!0;D++}return r.attributesNum!==D||r.index!==L}function g(_,T,z,L){let O={},F=T.attributes,D=0,ee=z.getAttributes();for(let V in ee)if(ee[V].location>=0){let q=F[V];q===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(q=_.instanceColor));let G={};G.attribute=q,q&&q.data&&(G.data=q.data),O[V]=G,D++}r.attributes=O,r.attributesNum=D,r.index=L}function x(){let _=r.newAttributes;for(let T=0,z=_.length;T<z;T++)_[T]=0}function m(_){p(_,0)}function p(_,T){let z=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;z[_]=1,L[_]===0&&(s.enableVertexAttribArray(_),L[_]=1),O[_]!==T&&(s.vertexAttribDivisor(_,T),O[_]=T)}function v(){let _=r.newAttributes,T=r.enabledAttributes;for(let z=0,L=T.length;z<L;z++)T[z]!==_[z]&&(s.disableVertexAttribArray(z),T[z]=0)}function b(_,T,z,L,O,F,D){D===!0?s.vertexAttribIPointer(_,T,z,O,F):s.vertexAttribPointer(_,T,z,L,O,F)}function y(_,T,z,L){x();let O=L.attributes,F=z.getAttributes(),D=T.defaultAttributeValues;for(let ee in F){let V=F[ee];if(V.location>=0){let te=O[ee];if(te===void 0&&(ee==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),ee==="instanceColor"&&_.instanceColor&&(te=_.instanceColor)),te!==void 0){let q=te.normalized,G=te.itemSize,K=e.get(te);if(K===void 0)continue;let ge=K.buffer,xe=K.type,Y=K.bytesPerElement,ue=xe===s.INT||xe===s.UNSIGNED_INT||te.gpuType===Cc;if(te.isInterleavedBufferAttribute){let ce=te.data,Re=ce.stride,Ae=te.offset;if(ce.isInstancedInterleavedBuffer){for(let Pe=0;Pe<V.locationSize;Pe++)p(V.location+Pe,ce.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)m(V.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Pe=0;Pe<V.locationSize;Pe++)b(V.location+Pe,G/V.locationSize,xe,q,Re*Y,(Ae+G/V.locationSize*Pe)*Y,ue)}else{if(te.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,te.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let ce=0;ce<V.locationSize;ce++)b(V.location+ce,G/V.locationSize,xe,q,G*Y,G/V.locationSize*ce*Y,ue)}}else if(D!==void 0){let q=D[ee];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(V.location,q);break;case 3:s.vertexAttrib3fv(V.location,q);break;case 4:s.vertexAttrib4fv(V.location,q);break;default:s.vertexAttrib1fv(V.location,q)}}}}v()}function w(){C();for(let _ in n){let T=n[_];for(let z in T){let L=T[z];for(let O in L)u(L[O].object),delete L[O];delete T[z]}delete n[_]}}function S(_){if(n[_.id]===void 0)return;let T=n[_.id];for(let z in T){let L=T[z];for(let O in L)u(L[O].object),delete L[O];delete T[z]}delete n[_.id]}function R(_){for(let T in n){let z=n[T];if(z[_.id]===void 0)continue;let L=z[_.id];for(let O in L)u(L[O].object),delete L[O];delete z[_.id]}}function C(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Zb(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Kb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==li&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let C=R===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Si&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Tn&&!C)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:w,maxSamples:S}}function Jb(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ri,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,b=v*4,y=p.clippingState||null;l.value=y,y=u(g,f,b,d);for(let w=0;w!==b;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=d;b!==x;++b,y+=4)o.copy(h[b]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Qb(s){let e=new WeakMap;function t(o,a){return a===Kr?o.mapping=rr:a===Tc&&(o.mapping=or),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Kr||a===Tc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Gl(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var no=4,tg=[.125,.215,.35,.446,.526,.582],hr=20,Df=new rs,ng=new Ve,Nf=null,Bf=0,Ff=0,Uf=!1,ur=(1+Math.sqrt(5))/2,to=1/ur,ig=[new I(-ur,to,0),new I(ur,to,0),new I(-to,0,ur),new I(to,0,ur),new I(0,ur,-to),new I(0,ur,to),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],$b=new I,so=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=$b}=r;Nf=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nf,Bf,Ff),this._renderer.xr.enabled=Uf,e.scissorTest=!1,lu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nf=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:jt,format:li,colorSpace:ns,depthBuffer:!1},i=sg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sg(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eM(r)),this._blurMaterial=tM(r,e,t)}return i}_compileMaterial(e){let t=new it(this._lodPlanes[0],e);this._renderer.compile(t,Df)}_sceneToCubeUV(e,t,n,i,r){let l=new cn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ng),h.toneMapping=os,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let x=new Rt({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),m=new it(new Xt,x),p=!1,v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,p=!0):(x.color.copy(ng),p=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let w=this._cubeSize;lu(i,y*w,b>2?w:0,w,w),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===rr||e.mapping===or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=og()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;lu(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Df)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ig[(i-r-1)%ig.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new it(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hr-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):hr;m>hr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);let p=[],v=0;for(let R=0;R<hr;++R){let C=R/x,M=Math.exp(-C*C/2);p.push(M),R===0?v+=M:R<m&&(v+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let y=this._sizeLods[i],w=3*y*(i>b-no?i-b+no:0),S=4*(this._cubeSize-y);lu(t,w,S,3*y,2*y),l.setRenderTarget(t),l.render(h,Df)}};function eM(s){let e=[],t=[],n=[],i=s,r=s-no+1+tg.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-no?l=tg[o-s+no-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*d),b=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let S=0;S<d;S++){let R=S%3*2/3-1,C=S>2?0:-1,M=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];v.set(M,x*g*S),b.set(f,m*g*S);let _=[S,S,S,S,S,S];y.set(_,p*g*S)}let w=new wt;w.setAttribute("position",new Vt(v,x)),w.setAttribute("uv",new Vt(b,m)),w.setAttribute("faceIndex",new Vt(y,p)),e.push(w),i>no&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sg(s,e,t){let n=new $t(s,e,t);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lu(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function tM(s,e,t){let n=new Float32Array(hr),i=new I(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function rg(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function og(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Yf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Kr||l===Tc,u=l===rr||l===or;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new so(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new so(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function iM(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function sM(s,e,t,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let b=0,y=v.length;b<y;b+=3){let w=v[b+0],S=v[b+1],R=v[b+2];f.push(w,S,S,R,R,w)}}else if(g!==void 0){let v=g.array;x=g.version;for(let b=0,y=v.length/3-1;b<y;b+=3){let w=b+0,S=b+1,R=b+2;f.push(w,S,S,R,R,w)}}else return;let m=new(Af(f)?Xo:qo)(f,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function rM(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*x[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function oM(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function aM(s,e,t){let n=new WeakMap,i=new _t;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*w*4*h),R=new Wo(S,y,w,h);R.type=Tn,R.needsUpdate=!0;let C=b*4;for(let _=0;_<h;_++){let T=m[_],z=p[_],L=v[_],O=y*w*4*_;for(let F=0;F<T.count;F++){let D=F*C;d===!0&&(i.fromBufferAttribute(T,F),S[O+D+0]=i.x,S[O+D+1]=i.y,S[O+D+2]=i.z,S[O+D+3]=0),g===!0&&(i.fromBufferAttribute(z,F),S[O+D+4]=i.x,S[O+D+5]=i.y,S[O+D+6]=i.z,S[O+D+7]=0),x===!0&&(i.fromBufferAttribute(L,F),S[O+D+8]=i.x,S[O+D+9]=i.y,S[O+D+10]=i.z,S[O+D+11]=L.itemSize===4?i.w:1)}}f={count:h,texture:R,size:new de(y,w)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function lM(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Eg=new Qt,ag=new $o(1,1),Tg=new Wo,Ag=new Hl,Cg=new jo,lg=[],cg=[],ug=new Float32Array(16),hg=new Float32Array(9),fg=new Float32Array(4);function ro(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=lg[i];if(r===void 0&&(r=new Float32Array(i),lg[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function hu(s,e){let t=cg[e];t===void 0&&(t=new Int32Array(e),cg[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function cM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function uM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function hM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function fM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function dM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;fg.set(n),s.uniformMatrix2fv(this.addr,!1,fg),nn(t,n)}}function pM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;hg.set(n),s.uniformMatrix3fv(this.addr,!1,hg),nn(t,n)}}function mM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;ug.set(n),s.uniformMatrix4fv(this.addr,!1,ug),nn(t,n)}}function gM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function xM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function vM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function yM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function bM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function MM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function _M(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function wM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function SM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ag.compareFunction=Ef,r=ag):r=Eg,t.setTexture2D(e||r,i)}function EM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ag,i)}function TM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cg,i)}function AM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tg,i)}function CM(s){switch(s){case 5126:return cM;case 35664:return uM;case 35665:return hM;case 35666:return fM;case 35674:return dM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return xM;case 35668:case 35672:return vM;case 35669:case 35673:return yM;case 5125:return bM;case 36294:return MM;case 36295:return _M;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}function RM(s,e){s.uniform1fv(this.addr,e)}function PM(s,e){let t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function IM(s,e){let t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function LM(s,e){let t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function DM(s,e){let t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function NM(s,e){let t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function BM(s,e){let t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function FM(s,e){s.uniform1iv(this.addr,e)}function UM(s,e){s.uniform2iv(this.addr,e)}function OM(s,e){s.uniform3iv(this.addr,e)}function zM(s,e){s.uniform4iv(this.addr,e)}function kM(s,e){s.uniform1uiv(this.addr,e)}function HM(s,e){s.uniform2uiv(this.addr,e)}function VM(s,e){s.uniform3uiv(this.addr,e)}function GM(s,e){s.uniform4uiv(this.addr,e)}function WM(s,e,t){let n=this.cache,i=e.length,r=hu(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Eg,r[o])}function qM(s,e,t){let n=this.cache,i=e.length,r=hu(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ag,r[o])}function XM(s,e,t){let n=this.cache,i=e.length,r=hu(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Cg,r[o])}function YM(s,e,t){let n=this.cache,i=e.length,r=hu(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tg,r[o])}function jM(s){switch(s){case 5126:return RM;case 35664:return PM;case 35665:return IM;case 35666:return LM;case 35674:return DM;case 35675:return NM;case 35676:return BM;case 5124:case 35670:return FM;case 35667:case 35671:return UM;case 35668:case 35672:return OM;case 35669:case 35673:return zM;case 5125:return kM;case 36294:return HM;case 36295:return VM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return YM}}var zf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=CM(t.type)}},kf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jM(t.type)}},Hf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Of=/(\w+)(\])?(\[|\.)?/g;function dg(s,e){s.seq.push(e),s.map[e.id]=e}function ZM(s,e,t){let n=s.name,i=n.length;for(Of.lastIndex=0;;){let r=Of.exec(n),o=Of.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){dg(t,c===void 0?new zf(a,s,e):new kf(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Hf(a),dg(t,h)),t=h}}}var io=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ZM(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function pg(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var KM=37297,JM=0;function QM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var mg=new nt;function $M(s){ut._getMatrix(mg,ut.workingColorSpace,s);let e=`mat3( ${mg.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(s)){case Vo:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gg(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+QM(s.getShaderSource(e),a)}else return r}function e_(s,e){let t=$M(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function t_(s,e){let t;switch(e){case bc:t="Linear";break;case Mc:t="Reinhard";break;case _c:t="Cineon";break;case sr:t="ACESFilmic";break;case Sc:t="AgX";break;case Ec:t="Neutral";break;case wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cu=new I;function n_(){ut.getLuminanceCoefficients(cu);let s=cu.x.toFixed(4),e=cu.y.toFixed(4),t=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function s_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ea(s){return s!==""}function xg(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vf(s){return s.replace(o_,l_)}var a_=new Map;function l_(s,e){let t=rt[e];if(t===void 0){let n=a_.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vf(t)}var c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yg(s){return s.replace(c_,u_)}function u_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function f_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rr:case or:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function p_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mf:e="ENVMAP_BLENDING_MULTIPLY";break;case Nm:e="ENVMAP_BLENDING_MIX";break;case Bm:e="ENVMAP_BLENDING_ADD";break}return e}function m_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=h_(t),c=f_(t),u=d_(t),h=p_(t),f=m_(t),d=i_(t),g=s_(r),x=i.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ea).join(`
`),p.length>0&&(p+=`
`)):(m=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),p=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?rt.tonemapping_pars_fragment:"",t.toneMapping!==os?t_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,e_("linearToOutputTexel",t.outputColorSpace),n_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),o=Vf(o),o=xg(o,t),o=vg(o,t),a=Vf(a),a=xg(a,t),a=vg(a,t),o=yg(o),a=yg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=v+m+o,y=v+p+a,w=pg(i,i.VERTEX_SHADER,b),S=pg(i,i.FRAGMENT_SHADER,y);i.attachShader(x,w),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(T){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(x)||"",L=i.getShaderInfoLog(w)||"",O=i.getShaderInfoLog(S)||"",F=z.trim(),D=L.trim(),ee=O.trim(),V=!0,te=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,w,S);else{let q=gg(i,w,"vertex"),G=gg(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+q+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(D===""||ee==="")&&(te=!1);te&&(T.diagnostics={runnable:V,programLog:F,vertexShader:{log:D,prefix:m},fragmentShader:{log:ee,prefix:p}})}i.deleteShader(w),i.deleteShader(S),C=new io(i,x),M=r_(i,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,KM)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=S,this}var x_=0,Gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wf(e),t.set(e,n)),n}},Wf=class{constructor(e){this.id=x_++,this.code=e,this.usedTimes=0}};function v_(s,e,t,n,i,r,o){let a=new kr,l=new Gf,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,T,z,L){let O=z.fog,F=L.geometry,D=M.isMeshStandardMaterial?z.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||D),V=ee&&ee.mapping===va?ee.image.height:null,te=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,G=q!==void 0?q.length:0,K=0;F.morphAttributes.position!==void 0&&(K=1),F.morphAttributes.normal!==void 0&&(K=2),F.morphAttributes.color!==void 0&&(K=3);let ge,xe,Y,ue;if(te){let xt=Ui[te];ge=xt.vertexShader,xe=xt.fragmentShader}else ge=M.vertexShader,xe=M.fragmentShader,l.update(M),Y=l.getVertexShaderID(M),ue=l.getFragmentShaderID(M);let ce=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Ae=L.isInstancedMesh===!0,Pe=L.isBatchedMesh===!0,tt=!!M.map,Ne=!!M.matcap,H=!!ee,pe=!!M.aoMap,ae=!!M.lightMap,he=!!M.bumpMap,me=!!M.normalMap,Te=!!M.displacementMap,be=!!M.emissiveMap,Ce=!!M.metalnessMap,Ze=!!M.roughnessMap,qe=M.anisotropy>0,B=M.clearcoat>0,E=M.dispersion>0,$=M.iridescence>0,oe=M.sheen>0,ye=M.transmission>0,le=qe&&!!M.anisotropyMap,Ue=B&&!!M.clearcoatMap,Ee=B&&!!M.clearcoatNormalMap,ke=B&&!!M.clearcoatRoughnessMap,ze=$&&!!M.iridescenceMap,_e=$&&!!M.iridescenceThicknessMap,Le=oe&&!!M.sheenColorMap,k=oe&&!!M.sheenRoughnessMap,W=!!M.specularMap,X=!!M.specularColorMap,j=!!M.specularIntensityMap,U=ye&&!!M.transmissionMap,Z=ye&&!!M.thicknessMap,re=!!M.gradientMap,we=!!M.alphaMap,ve=M.alphaTest>0,fe=!!M.alphaHash,Be=!!M.extensions,et=os;M.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(et=s.toneMapping);let At={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:xe,defines:M.defines,customVertexShaderID:Y,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&L._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&L.instanceColor!==null,instancingMorph:Ae&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ns,alphaToCoverage:!!M.alphaToCoverage,map:tt,matcap:Ne,envMap:H,envMapMode:H&&ee.mapping,envMapCubeUVHeight:V,aoMap:pe,lightMap:ae,bumpMap:he,normalMap:me,displacementMap:f&&Te,emissiveMap:be,normalMapObjectSpace:me&&M.normalMapType===zm,normalMapTangentSpace:me&&M.normalMapType===Sf,metalnessMap:Ce,roughnessMap:Ze,anisotropy:qe,anisotropyMap:le,clearcoat:B,clearcoatMap:Ue,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ke,dispersion:E,iridescence:$,iridescenceMap:ze,iridescenceThicknessMap:_e,sheen:oe,sheenColorMap:Le,sheenRoughnessMap:k,specularMap:W,specularColorMap:X,specularIntensityMap:j,transmission:ye,transmissionMap:U,thicknessMap:Z,gradientMap:re,opaque:M.transparent===!1&&M.blending===Ys&&M.alphaToCoverage===!1,alphaMap:we,alphaTest:ve,alphaHash:fe,combine:M.combine,mapUv:tt&&x(M.map.channel),aoMapUv:pe&&x(M.aoMap.channel),lightMapUv:ae&&x(M.lightMap.channel),bumpMapUv:he&&x(M.bumpMap.channel),normalMapUv:me&&x(M.normalMap.channel),displacementMapUv:Te&&x(M.displacementMap.channel),emissiveMapUv:be&&x(M.emissiveMap.channel),metalnessMapUv:Ce&&x(M.metalnessMap.channel),roughnessMapUv:Ze&&x(M.roughnessMap.channel),anisotropyMapUv:le&&x(M.anisotropyMap.channel),clearcoatMapUv:Ue&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:k&&x(M.sheenRoughnessMap.channel),specularMapUv:W&&x(M.specularMap.channel),specularColorMapUv:X&&x(M.specularColorMap.channel),specularIntensityMapUv:j&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:Z&&x(M.thicknessMap.channel),alphaMapUv:we&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(me||qe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(tt||we),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:K,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,decodeVideoTexture:tt&&M.map.isVideoTexture===!0&&ut.getTransfer(M.map.colorSpace)===ft,decodeVideoTextureEmissive:be&&M.emissiveMap.isVideoTexture===!0&&ut.getTransfer(M.emissiveMap.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bt,flipSided:M.side===En,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function p(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let T in M.defines)_.push(T),_.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(v(_,M),b(_,M),_.push(s.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function v(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function b(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let _=g[M.type],T;if(_){let z=Ui[_];T=Kn.clone(z.uniforms)}else T=M.uniforms;return T}function w(M,_){let T;for(let z=0,L=u.length;z<L;z++){let O=u[z];if(O.cacheKey===_){T=O,++T.usedTimes;break}}return T===void 0&&(T=new g_(s,_,M,r),u.push(T)),T}function S(M){if(--M.usedTimes===0){let _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:S,releaseShaderCache:R,programs:u,dispose:C}}function y_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function b_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Mg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _g(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,x,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||b_),n.length>1&&n.sort(f||Mg),i.length>1&&i.sort(f||Mg)}function u(){for(let h=e,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function M_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new _g,s.set(n,[o])):i>=r.length?(o=new _g,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function __(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ve};break;case"SpotLight":t={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function w_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var S_=0;function E_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function T_(s){let e=new __,t=w_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new dt,o=new dt;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,b=0,y=0,w=0,S=0,R=0;c.sort(E_);for(let M=0,_=c.length;M<_;M++){let T=c[M],z=T.color,L=T.intensity,O=T.distance,F=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=z.r*L,h+=z.g*L,f+=z.b*L;else if(T.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(T.sh.coefficients[D],L);R++}else if(T.isDirectionalLight){let D=e.get(T);if(D.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let ee=T.shadow,V=t.get(T);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=T.shadow.matrix,v++}n.directional[d]=D,d++}else if(T.isSpotLight){let D=e.get(T);D.position.setFromMatrixPosition(T.matrixWorld),D.color.copy(z).multiplyScalar(L),D.distance=O,D.coneCos=Math.cos(T.angle),D.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),D.decay=T.decay,n.spot[x]=D;let ee=T.shadow;if(T.map&&(n.spotLightMap[w]=T.map,w++,ee.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[x]=ee.matrix,T.castShadow){let V=t.get(T);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=F,y++}x++}else if(T.isRectAreaLight){let D=e.get(T);D.color.copy(z).multiplyScalar(L),D.halfWidth.set(T.width*.5,0,0),D.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=D,m++}else if(T.isPointLight){let D=e.get(T);if(D.color.copy(T.color).multiplyScalar(T.intensity),D.distance=T.distance,D.decay=T.decay,T.castShadow){let ee=T.shadow,V=t.get(T);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=T.shadow.matrix,b++}n.point[g]=D,g++}else if(T.isHemisphereLight){let D=e.get(T);D.skyColor.copy(T.color).multiplyScalar(L),D.groundColor.copy(T.groundColor).multiplyScalar(L),n.hemi[p]=D,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==b||C.numSpotShadows!==y||C.numSpotMaps!==w||C.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,C.directionalLength=d,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=b,C.numSpotShadows=y,C.numSpotMaps=w,C.numLightProbes=R,n.version=S_++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let b=c[p];if(b.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(b.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function wg(s){let e=new T_(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function A_(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new wg(s),e.set(i,[a])):r>=o.length?(a=new wg(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P_(s,e,t){let n=new Gr,i=new de,r=new de,o=new _t,a=new $l({depthPacking:Om}),l=new ec,c={},u=t.maxTextureSize,h={[xi]:En,[En]:xi,[Bt]:Bt},f=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:C_,fragmentShader:R_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new wt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ff;let p=this.type;this.render=function(S,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let M=s.getRenderTarget(),_=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),z=s.state;z.setBlending(wi),z.buffers.depth.getReversed()?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let L=p!==Fi&&this.type===Fi,O=p===Fi&&this.type!==Fi;for(let F=0,D=S.length;F<D;F++){let ee=S[F],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let te=V.getFrameExtents();if(i.multiply(te),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/te.x),i.x=r.x*te.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/te.y),i.y=r.y*te.y,V.mapSize.y=r.y)),V.map===null||L===!0||O===!0){let G=this.type!==Fi?{minFilter:un,magFilter:un}:{};V.map!==null&&V.map.dispose(),V.map=new $t(i.x,i.y,G),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let q=V.getViewportCount();for(let G=0;G<q;G++){let K=V.getViewport(G);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(o),V.updateMatrices(ee,G),n=V.getFrustum(),y(R,C,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===Fi&&v(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,_,T)};function v(S,R){let C=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new $t(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(R,null,C,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(R,null,C,d,x,null)}function b(S,R,C,M){let _=null,T=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)_=T;else if(_=C.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=_.uuid,L=R.uuid,O=c[z];O===void 0&&(O={},c[z]=O);let F=O[L];F===void 0&&(F=_.clone(),O[L]=F,R.addEventListener("dispose",w)),_=F}if(_.visible=R.visible,_.wireframe=R.wireframe,M===Fi?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:h[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let z=s.properties.get(_);z.light=C}return _}function y(S,R,C,M,_){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===Fi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let L=e.update(S),O=S.material;if(Array.isArray(O)){let F=L.groups;for(let D=0,ee=F.length;D<ee;D++){let V=F[D],te=O[V.materialIndex];if(te&&te.visible){let q=b(S,te,M,_);S.onBeforeShadow(s,S,R,C,L,q,V),s.renderBufferDirect(C,null,L,q,S,V),S.onAfterShadow(s,S,R,C,L,q,V)}}}else if(O.visible){let F=b(S,O,M,_);S.onBeforeShadow(s,S,R,C,L,F,null),s.renderBufferDirect(C,null,L,F,S,null),S.onAfterShadow(s,S,R,C,L,F,null)}}let z=S.children;for(let L=0,O=z.length;L<O;L++)y(z[L],R,C,M,_)}function w(S){S.target.removeEventListener("dispose",w);for(let C in c){let M=c[C],_=S.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var I_={[dc]:pc,[mc]:vc,[gc]:yc,[js]:xc,[pc]:dc,[vc]:mc,[yc]:gc,[xc]:js};function L_(s,e){function t(){let U=!1,Z=new _t,re=null,we=new _t(0,0,0,0);return{setMask:function(ve){re!==ve&&!U&&(s.colorMask(ve,ve,ve,ve),re=ve)},setLocked:function(ve){U=ve},setClear:function(ve,fe,Be,et,At){At===!0&&(ve*=et,fe*=et,Be*=et),Z.set(ve,fe,Be,et),we.equals(Z)===!1&&(s.clearColor(ve,fe,Be,et),we.copy(Z))},reset:function(){U=!1,re=null,we.set(-1,0,0,0)}}}function n(){let U=!1,Z=!1,re=null,we=null,ve=null;return{setReversed:function(fe){if(Z!==fe){let Be=e.get("EXT_clip_control");fe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Z=fe;let et=ve;ve=null,this.setClear(et)}},getReversed:function(){return Z},setTest:function(fe){fe?ce(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(fe){re!==fe&&!U&&(s.depthMask(fe),re=fe)},setFunc:function(fe){if(Z&&(fe=I_[fe]),we!==fe){switch(fe){case dc:s.depthFunc(s.NEVER);break;case pc:s.depthFunc(s.ALWAYS);break;case mc:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case gc:s.depthFunc(s.EQUAL);break;case xc:s.depthFunc(s.GEQUAL);break;case vc:s.depthFunc(s.GREATER);break;case yc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=fe}},setLocked:function(fe){U=fe},setClear:function(fe){ve!==fe&&(Z&&(fe=1-fe),s.clearDepth(fe),ve=fe)},reset:function(){U=!1,re=null,we=null,ve=null,Z=!1}}}function i(){let U=!1,Z=null,re=null,we=null,ve=null,fe=null,Be=null,et=null,At=null;return{setTest:function(xt){U||(xt?ce(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(xt){Z!==xt&&!U&&(s.stencilMask(xt),Z=xt)},setFunc:function(xt,Xi,Li){(re!==xt||we!==Xi||ve!==Li)&&(s.stencilFunc(xt,Xi,Li),re=xt,we=Xi,ve=Li)},setOp:function(xt,Xi,Li){(fe!==xt||Be!==Xi||et!==Li)&&(s.stencilOp(xt,Xi,Li),fe=xt,Be=Xi,et=Li)},setLocked:function(xt){U=xt},setClear:function(xt){At!==xt&&(s.clearStencil(xt),At=xt)},reset:function(){U=!1,Z=null,re=null,we=null,ve=null,fe=null,Be=null,et=null,At=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,b=null,y=null,w=null,S=null,R=new Ve(0,0,0),C=0,M=!1,_=null,T=null,z=null,L=null,O=null,F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,ee=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),D=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),D=ee>=2);let te=null,q={},G=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ge=new _t().fromArray(G),xe=new _t().fromArray(K);function Y(U,Z,re,we){let ve=new Uint8Array(4),fe=s.createTexture();s.bindTexture(U,fe),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<re;Be++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(Z,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(Z+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return fe}let ue={};ue[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(s.DEPTH_TEST),o.setFunc(js),he(!1),me(hf),ce(s.CULL_FACE),pe(wi);function ce(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function Re(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function Ae(U,Z){return h[U]!==Z?(s.bindFramebuffer(U,Z),h[U]=Z,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Z),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Z),!0):!1}function Pe(U,Z){let re=d,we=!1;if(U){re=f.get(Z),re===void 0&&(re=[],f.set(Z,re));let ve=U.textures;if(re.length!==ve.length||re[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,Be=ve.length;fe<Be;fe++)re[fe]=s.COLOR_ATTACHMENT0+fe;re.length=ve.length,we=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,we=!0);we&&s.drawBuffers(re)}function tt(U){return g!==U?(s.useProgram(U),g=U,!0):!1}let Ne={[Es]:s.FUNC_ADD,[xm]:s.FUNC_SUBTRACT,[vm]:s.FUNC_REVERSE_SUBTRACT};Ne[ym]=s.MIN,Ne[bm]=s.MAX;let H={[Mm]:s.ZERO,[_m]:s.ONE,[wm]:s.SRC_COLOR,[Bl]:s.SRC_ALPHA,[Rm]:s.SRC_ALPHA_SATURATE,[Am]:s.DST_COLOR,[Em]:s.DST_ALPHA,[Sm]:s.ONE_MINUS_SRC_COLOR,[Fl]:s.ONE_MINUS_SRC_ALPHA,[Cm]:s.ONE_MINUS_DST_COLOR,[Tm]:s.ONE_MINUS_DST_ALPHA,[Pm]:s.CONSTANT_COLOR,[Im]:s.ONE_MINUS_CONSTANT_COLOR,[Lm]:s.CONSTANT_ALPHA,[Dm]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(U,Z,re,we,ve,fe,Be,et,At,xt){if(U===wi){x===!0&&(Re(s.BLEND),x=!1);return}if(x===!1&&(ce(s.BLEND),x=!0),U!==gm){if(U!==m||xt!==M){if((p!==Es||y!==Es)&&(s.blendEquation(s.FUNC_ADD),p=Es,y=Es),xt)switch(U){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yn:s.blendFunc(s.ONE,s.ONE);break;case df:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case df:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,b=null,w=null,S=null,R.set(0,0,0),C=0,m=U,M=xt}return}ve=ve||Z,fe=fe||re,Be=Be||we,(Z!==p||ve!==y)&&(s.blendEquationSeparate(Ne[Z],Ne[ve]),p=Z,y=ve),(re!==v||we!==b||fe!==w||Be!==S)&&(s.blendFuncSeparate(H[re],H[we],H[fe],H[Be]),v=re,b=we,w=fe,S=Be),(et.equals(R)===!1||At!==C)&&(s.blendColor(et.r,et.g,et.b,At),R.copy(et),C=At),m=U,M=!1}function ae(U,Z){U.side===Bt?Re(s.CULL_FACE):ce(s.CULL_FACE);let re=U.side===En;Z&&(re=!re),he(re),U.blending===Ys&&U.transparent===!1?pe(wi):pe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let we=U.stencilWrite;a.setTest(we),we&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function he(U){_!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),_=U)}function me(U){U!==pm?(ce(s.CULL_FACE),U!==T&&(U===hf?s.cullFace(s.BACK):U===mm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),T=U}function Te(U){U!==z&&(D&&s.lineWidth(U),z=U)}function be(U,Z,re){U?(ce(s.POLYGON_OFFSET_FILL),(L!==Z||O!==re)&&(s.polygonOffset(Z,re),L=Z,O=re)):Re(s.POLYGON_OFFSET_FILL)}function Ce(U){U?ce(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function Ze(U){U===void 0&&(U=s.TEXTURE0+F-1),te!==U&&(s.activeTexture(U),te=U)}function qe(U,Z,re){re===void 0&&(te===null?re=s.TEXTURE0+F-1:re=te);let we=q[re];we===void 0&&(we={type:void 0,texture:void 0},q[re]=we),(we.type!==U||we.texture!==Z)&&(te!==re&&(s.activeTexture(re),te=re),s.bindTexture(U,Z||ue[U]),we.type=U,we.texture=Z)}function B(){let U=q[te];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(U){ge.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ge.copy(U))}function k(U){xe.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),xe.copy(U))}function W(U,Z){let re=c.get(Z);re===void 0&&(re=new WeakMap,c.set(Z,re));let we=re.get(U);we===void 0&&(we=s.getUniformBlockIndex(Z,U.name),re.set(U,we))}function X(U,Z){let we=c.get(Z).get(U);l.get(Z)!==we&&(s.uniformBlockBinding(Z,we,U.__bindingPointIndex),l.set(Z,we))}function j(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},te=null,q={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,b=null,y=null,w=null,S=null,R=new Ve(0,0,0),C=0,M=!1,_=null,T=null,z=null,L=null,O=null,ge.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Re,bindFramebuffer:Ae,drawBuffers:Pe,useProgram:tt,setBlending:pe,setMaterial:ae,setFlipSided:he,setCullFace:me,setLineWidth:Te,setPolygonOffset:be,setScissorTest:Ce,activeTexture:Ze,bindTexture:qe,unbindTexture:B,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:ze,texImage3D:_e,updateUBOMapping:W,uniformBlockBinding:X,texStorage2D:Ee,texStorage3D:ke,texSubImage2D:oe,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:Ue,scissor:Le,viewport:k,reset:j}}function D_(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(B,E){return d?new OffscreenCanvas(B,E):Or("canvas")}function x(B,E,$){let oe=1,ye=qe(B);if((ye.width>$||ye.height>$)&&(oe=$/Math.max(ye.width,ye.height)),oe<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let le=Math.floor(oe*ye.width),Ue=Math.floor(oe*ye.height);h===void 0&&(h=g(le,Ue));let Ee=E?g(le,Ue):h;return Ee.width=le,Ee.height=Ue,Ee.getContext("2d").drawImage(B,0,0,le,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+le+"x"+Ue+")."),Ee}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),B;return B}function m(B){return B.generateMipmaps}function p(B){s.generateMipmap(B)}function v(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(B,E,$,oe,ye=!1){if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let le=E;if(E===s.RED&&($===s.FLOAT&&(le=s.R32F),$===s.HALF_FLOAT&&(le=s.R16F),$===s.UNSIGNED_BYTE&&(le=s.R8)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(le=s.R8UI),$===s.UNSIGNED_SHORT&&(le=s.R16UI),$===s.UNSIGNED_INT&&(le=s.R32UI),$===s.BYTE&&(le=s.R8I),$===s.SHORT&&(le=s.R16I),$===s.INT&&(le=s.R32I)),E===s.RG&&($===s.FLOAT&&(le=s.RG32F),$===s.HALF_FLOAT&&(le=s.RG16F),$===s.UNSIGNED_BYTE&&(le=s.RG8)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(le=s.RG8UI),$===s.UNSIGNED_SHORT&&(le=s.RG16UI),$===s.UNSIGNED_INT&&(le=s.RG32UI),$===s.BYTE&&(le=s.RG8I),$===s.SHORT&&(le=s.RG16I),$===s.INT&&(le=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(le=s.RGB8UI),$===s.UNSIGNED_SHORT&&(le=s.RGB16UI),$===s.UNSIGNED_INT&&(le=s.RGB32UI),$===s.BYTE&&(le=s.RGB8I),$===s.SHORT&&(le=s.RGB16I),$===s.INT&&(le=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),$===s.UNSIGNED_INT&&(le=s.RGBA32UI),$===s.BYTE&&(le=s.RGBA8I),$===s.SHORT&&(le=s.RGBA16I),$===s.INT&&(le=s.RGBA32I)),E===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),E===s.RGBA){let Ue=ye?Vo:ut.getTransfer(oe);$===s.FLOAT&&(le=s.RGBA32F),$===s.HALF_FLOAT&&(le=s.RGBA16F),$===s.UNSIGNED_BYTE&&(le=Ue===ft?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function y(B,E){let $;return B?E===null||E===Ps||E===Qr?$=s.DEPTH24_STENCIL8:E===Tn?$=s.DEPTH32F_STENCIL8:E===Jr&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ps||E===Qr?$=s.DEPTH_COMPONENT24:E===Tn?$=s.DEPTH_COMPONENT32F:E===Jr&&($=s.DEPTH_COMPONENT16),$}function w(B,E){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==un&&B.minFilter!==Jt?Math.log2(Math.max(E.width,E.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?E.mipmaps.length:1}function S(B){let E=B.target;E.removeEventListener("dispose",S),C(E),E.isVideoTexture&&u.delete(E)}function R(B){let E=B.target;E.removeEventListener("dispose",R),_(E)}function C(B){let E=n.get(B);if(E.__webglInit===void 0)return;let $=B.source,oe=f.get($);if(oe){let ye=oe[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&M(B),Object.keys(oe).length===0&&f.delete($)}n.remove(B)}function M(B){let E=n.get(B);s.deleteTexture(E.__webglTexture);let $=B.source,oe=f.get($);delete oe[E.__cacheKey],o.memory.textures--}function _(B){let E=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let ye=0;ye<E.__webglFramebuffer[oe].length;ye++)s.deleteFramebuffer(E.__webglFramebuffer[oe][ye]);else s.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)s.deleteFramebuffer(E.__webglFramebuffer[oe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let $=B.textures;for(let oe=0,ye=$.length;oe<ye;oe++){let le=n.get($[oe]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove($[oe])}n.remove(B)}let T=0;function z(){T=0}function L(){let B=T;return B>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+i.maxTextures),T+=1,B}function O(B){let E=[];return E.push(B.wrapS),E.push(B.wrapT),E.push(B.wrapR||0),E.push(B.magFilter),E.push(B.minFilter),E.push(B.anisotropy),E.push(B.internalFormat),E.push(B.format),E.push(B.type),E.push(B.generateMipmaps),E.push(B.premultiplyAlpha),E.push(B.flipY),E.push(B.unpackAlignment),E.push(B.colorSpace),E.join()}function F(B,E){let $=n.get(B);if(B.isVideoTexture&&Ce(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&$.__version!==B.version){let oe=B.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue($,B,E);return}}else B.isExternalTexture&&($.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function D(B,E){let $=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&$.__version!==B.version){ue($,B,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function ee(B,E){let $=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&$.__version!==B.version){ue($,B,E);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function V(B,E){let $=n.get(B);if(B.version>0&&$.__version!==B.version){ce($,B,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}let te={[vi]:s.REPEAT,[Di]:s.CLAMP_TO_EDGE,[Fr]:s.MIRRORED_REPEAT},q={[un]:s.NEAREST,[Fm]:s.NEAREST_MIPMAP_NEAREST,[ya]:s.NEAREST_MIPMAP_LINEAR,[Jt]:s.LINEAR,[Ac]:s.LINEAR_MIPMAP_NEAREST,[as]:s.LINEAR_MIPMAP_LINEAR},G={[km]:s.NEVER,[Xm]:s.ALWAYS,[Hm]:s.LESS,[Ef]:s.LEQUAL,[Vm]:s.EQUAL,[qm]:s.GEQUAL,[Gm]:s.GREATER,[Wm]:s.NOTEQUAL};function K(B,E){if(E.type===Tn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Jt||E.magFilter===Ac||E.magFilter===ya||E.magFilter===as||E.minFilter===Jt||E.minFilter===Ac||E.minFilter===ya||E.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,te[E.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,te[E.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,te[E.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,q[E.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,q[E.minFilter]),E.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,G[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===un||E.minFilter!==ya&&E.minFilter!==as||E.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ge(B,E){let $=!1;B.__webglInit===void 0&&(B.__webglInit=!0,E.addEventListener("dispose",S));let oe=E.source,ye=f.get(oe);ye===void 0&&(ye={},f.set(oe,ye));let le=O(E);if(le!==B.__cacheKey){ye[le]===void 0&&(ye[le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ye[le].usedTimes++;let Ue=ye[B.__cacheKey];Ue!==void 0&&(ye[B.__cacheKey].usedTimes--,Ue.usedTimes===0&&M(E)),B.__cacheKey=le,B.__webglTexture=ye[le].texture}return $}function xe(B,E,$){return Math.floor(Math.floor(B/$)/E)}function Y(B,E,$,oe){let le=B.updateRanges;if(le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,$,oe,E.data);else{le.sort((_e,Le)=>_e.start-Le.start);let Ue=0;for(let _e=1;_e<le.length;_e++){let Le=le[Ue],k=le[_e],W=Le.start+Le.count,X=xe(k.start,E.width,4),j=xe(Le.start,E.width,4);k.start<=W+1&&X===j&&xe(k.start+k.count-1,E.width,4)===X?Le.count=Math.max(Le.count,k.start+k.count-Le.start):(++Ue,le[Ue]=k)}le.length=Ue+1;let Ee=s.getParameter(s.UNPACK_ROW_LENGTH),ke=s.getParameter(s.UNPACK_SKIP_PIXELS),ze=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let _e=0,Le=le.length;_e<Le;_e++){let k=le[_e],W=Math.floor(k.start/4),X=Math.ceil(k.count/4),j=W%E.width,U=Math.floor(W/E.width),Z=X,re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,j),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,j,U,Z,re,$,oe,E.data)}B.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ee),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,ze)}}function ue(B,E,$){let oe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=s.TEXTURE_3D);let ye=ge(B,E),le=E.source;t.bindTexture(oe,B.__webglTexture,s.TEXTURE0+$);let Ue=n.get(le);if(le.version!==Ue.__version||ye===!0){t.activeTexture(s.TEXTURE0+$);let Ee=ut.getPrimaries(ut.workingColorSpace),ke=E.colorSpace===ls?null:ut.getPrimaries(E.colorSpace),ze=E.colorSpace===ls||Ee===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let _e=x(E.image,!1,i.maxTextureSize);_e=Ze(E,_e);let Le=r.convert(E.format,E.colorSpace),k=r.convert(E.type),W=b(E.internalFormat,Le,k,E.colorSpace,E.isVideoTexture);K(oe,E);let X,j=E.mipmaps,U=E.isVideoTexture!==!0,Z=Ue.__version===void 0||ye===!0,re=le.dataReady,we=w(E,_e);if(E.isDepthTexture)W=y(E.format===$r,E.type),Z&&(U?t.texStorage2D(s.TEXTURE_2D,1,W,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,W,_e.width,_e.height,0,Le,k,null));else if(E.isDataTexture)if(j.length>0){U&&Z&&t.texStorage2D(s.TEXTURE_2D,we,W,j[0].width,j[0].height);for(let ve=0,fe=j.length;ve<fe;ve++)X=j[ve],U?re&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,X.width,X.height,Le,k,X.data):t.texImage2D(s.TEXTURE_2D,ve,W,X.width,X.height,0,Le,k,X.data);E.generateMipmaps=!1}else U?(Z&&t.texStorage2D(s.TEXTURE_2D,we,W,_e.width,_e.height),re&&Y(E,_e,Le,k)):t.texImage2D(s.TEXTURE_2D,0,W,_e.width,_e.height,0,Le,k,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&Z&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,W,j[0].width,j[0].height,_e.depth);for(let ve=0,fe=j.length;ve<fe;ve++)if(X=j[ve],E.format!==li)if(Le!==null)if(U){if(re)if(E.layerUpdates.size>0){let Be=Lf(X.width,X.height,E.format,E.type);for(let et of E.layerUpdates){let At=X.data.subarray(et*Be/X.data.BYTES_PER_ELEMENT,(et+1)*Be/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,et,X.width,X.height,1,Le,At)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,X.width,X.height,_e.depth,Le,X.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,W,X.width,X.height,_e.depth,0,X.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,X.width,X.height,_e.depth,Le,k,X.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,W,X.width,X.height,_e.depth,0,Le,k,X.data)}else{U&&Z&&t.texStorage2D(s.TEXTURE_2D,we,W,j[0].width,j[0].height);for(let ve=0,fe=j.length;ve<fe;ve++)X=j[ve],E.format!==li?Le!==null?U?re&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,X.width,X.height,Le,X.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,W,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?re&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,X.width,X.height,Le,k,X.data):t.texImage2D(s.TEXTURE_2D,ve,W,X.width,X.height,0,Le,k,X.data)}else if(E.isDataArrayTexture)if(U){if(Z&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,W,_e.width,_e.height,_e.depth),re)if(E.layerUpdates.size>0){let ve=Lf(_e.width,_e.height,E.format,E.type);for(let fe of E.layerUpdates){let Be=_e.data.subarray(fe*ve/_e.data.BYTES_PER_ELEMENT,(fe+1)*ve/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,_e.width,_e.height,1,Le,k,Be)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Le,k,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,W,_e.width,_e.height,_e.depth,0,Le,k,_e.data);else if(E.isData3DTexture)U?(Z&&t.texStorage3D(s.TEXTURE_3D,we,W,_e.width,_e.height,_e.depth),re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Le,k,_e.data)):t.texImage3D(s.TEXTURE_3D,0,W,_e.width,_e.height,_e.depth,0,Le,k,_e.data);else if(E.isFramebufferTexture){if(Z)if(U)t.texStorage2D(s.TEXTURE_2D,we,W,_e.width,_e.height);else{let ve=_e.width,fe=_e.height;for(let Be=0;Be<we;Be++)t.texImage2D(s.TEXTURE_2D,Be,W,ve,fe,0,Le,k,null),ve>>=1,fe>>=1}}else if(j.length>0){if(U&&Z){let ve=qe(j[0]);t.texStorage2D(s.TEXTURE_2D,we,W,ve.width,ve.height)}for(let ve=0,fe=j.length;ve<fe;ve++)X=j[ve],U?re&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Le,k,X):t.texImage2D(s.TEXTURE_2D,ve,W,Le,k,X);E.generateMipmaps=!1}else if(U){if(Z){let ve=qe(_e);t.texStorage2D(s.TEXTURE_2D,we,W,ve.width,ve.height)}re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,k,_e)}else t.texImage2D(s.TEXTURE_2D,0,W,Le,k,_e);m(E)&&p(oe),Ue.__version=le.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function ce(B,E,$){if(E.image.length!==6)return;let oe=ge(B,E),ye=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+$);let le=n.get(ye);if(ye.version!==le.__version||oe===!0){t.activeTexture(s.TEXTURE0+$);let Ue=ut.getPrimaries(ut.workingColorSpace),Ee=E.colorSpace===ls?null:ut.getPrimaries(E.colorSpace),ke=E.colorSpace===ls||Ue===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ze=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let fe=0;fe<6;fe++)!ze&&!_e?Le[fe]=x(E.image[fe],!0,i.maxCubemapSize):Le[fe]=_e?E.image[fe].image:E.image[fe],Le[fe]=Ze(E,Le[fe]);let k=Le[0],W=r.convert(E.format,E.colorSpace),X=r.convert(E.type),j=b(E.internalFormat,W,X,E.colorSpace),U=E.isVideoTexture!==!0,Z=le.__version===void 0||oe===!0,re=ye.dataReady,we=w(E,k);K(s.TEXTURE_CUBE_MAP,E);let ve;if(ze){U&&Z&&t.texStorage2D(s.TEXTURE_CUBE_MAP,we,j,k.width,k.height);for(let fe=0;fe<6;fe++){ve=Le[fe].mipmaps;for(let Be=0;Be<ve.length;Be++){let et=ve[Be];E.format!==li?W!==null?U?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be,0,0,et.width,et.height,W,et.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be,j,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be,0,0,et.width,et.height,W,X,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be,j,et.width,et.height,0,W,X,et.data)}}}else{if(ve=E.mipmaps,U&&Z){ve.length>0&&we++;let fe=qe(Le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,we,j,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(_e){U?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Le[fe].width,Le[fe].height,W,X,Le[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,j,Le[fe].width,Le[fe].height,0,W,X,Le[fe].data);for(let Be=0;Be<ve.length;Be++){let At=ve[Be].image[fe].image;U?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be+1,0,0,At.width,At.height,W,X,At.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be+1,j,At.width,At.height,0,W,X,At.data)}}else{U?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,W,X,Le[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,j,W,X,Le[fe]);for(let Be=0;Be<ve.length;Be++){let et=ve[Be];U?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be+1,0,0,W,X,et.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be+1,j,W,X,et.image[fe])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),le.__version=ye.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function Re(B,E,$,oe,ye,le){let Ue=r.convert($.format,$.colorSpace),Ee=r.convert($.type),ke=b($.internalFormat,Ue,Ee,$.colorSpace),ze=n.get(E),_e=n.get($);if(_e.__renderTarget=E,!ze.__hasExternalTextures){let Le=Math.max(1,E.width>>le),k=Math.max(1,E.height>>le);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,le,ke,Le,k,E.depth,0,Ue,Ee,null):t.texImage2D(ye,le,ke,Le,k,0,Ue,Ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,B),be(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,ye,_e.__webglTexture,0,Te(E)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,ye,_e.__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(B,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,B),E.depthBuffer){let oe=E.depthTexture,ye=oe&&oe.isDepthTexture?oe.type:null,le=y(E.stencilBuffer,ye),Ue=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=Te(E);be(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,le,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,le,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,le,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,B)}else{let oe=E.textures;for(let ye=0;ye<oe.length;ye++){let le=oe[ye],Ue=r.convert(le.format,le.colorSpace),Ee=r.convert(le.type),ke=b(le.internalFormat,Ue,Ee,le.colorSpace),ze=Te(E);$&&be(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,ke,E.width,E.height):be(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ze,ke,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ke,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(B,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,B),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let oe=n.get(E.depthTexture);oe.__renderTarget=E,(!oe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);let ye=oe.__webglTexture,le=Te(E);if(E.depthTexture.format===Ur)be(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(E.depthTexture.format===$r)be(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function tt(B){let E=n.get(B),$=B.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==B.depthTexture){let oe=B.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){let ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",ye)};oe.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=oe}if(B.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");let oe=B.texture.mipmaps;oe&&oe.length>0?Pe(E.__webglFramebuffer[0],B):Pe(E.__webglFramebuffer,B)}else if($){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=s.createRenderbuffer(),Ae(E.__webglDepthbuffer[oe],B,!1);else{let ye=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,le)}}else{let oe=B.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ae(E.__webglDepthbuffer,B,!1);else{let ye=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,le)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(B,E,$){let oe=n.get(B);E!==void 0&&Re(oe.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&tt(B)}function H(B){let E=B.texture,$=n.get(B),oe=n.get(E);B.addEventListener("dispose",R);let ye=B.textures,le=B.isWebGLCubeRenderTarget===!0,Ue=ye.length>1;if(Ue||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=E.version,o.memory.textures++),le){$.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Ee]=[];for(let ke=0;ke<E.mipmaps.length;ke++)$.__webglFramebuffer[Ee][ke]=s.createFramebuffer()}else $.__webglFramebuffer[Ee]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)$.__webglFramebuffer[Ee]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let Ee=0,ke=ye.length;Ee<ke;Ee++){let ze=n.get(ye[Ee]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),o.memory.textures++)}if(B.samples>0&&be(B)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ye.length;Ee++){let ke=ye[Ee];$.__webglColorRenderbuffer[Ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ee]);let ze=r.convert(ke.format,ke.colorSpace),_e=r.convert(ke.type),Le=b(ke.internalFormat,ze,_e,ke.colorSpace,B.isXRRenderTarget===!0),k=Te(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,k,Le,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae($.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),K(s.TEXTURE_CUBE_MAP,E);for(let Ee=0;Ee<6;Ee++)if(E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)Re($.__webglFramebuffer[Ee][ke],B,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ke);else Re($.__webglFramebuffer[Ee],B,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let Ee=0,ke=ye.length;Ee<ke;Ee++){let ze=ye[Ee],_e=n.get(ze),Le=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Le=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Le,_e.__webglTexture),K(Le,ze),Re($.__webglFramebuffer,B,ze,s.COLOR_ATTACHMENT0+Ee,Le,0),m(ze)&&p(Le)}t.unbindTexture()}else{let Ee=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ee=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ee,oe.__webglTexture),K(Ee,E),E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)Re($.__webglFramebuffer[ke],B,E,s.COLOR_ATTACHMENT0,Ee,ke);else Re($.__webglFramebuffer,B,E,s.COLOR_ATTACHMENT0,Ee,0);m(E)&&p(Ee),t.unbindTexture()}B.depthBuffer&&tt(B)}function pe(B){let E=B.textures;for(let $=0,oe=E.length;$<oe;$++){let ye=E[$];if(m(ye)){let le=v(B),Ue=n.get(ye).__webglTexture;t.bindTexture(le,Ue),p(le),t.unbindTexture()}}}let ae=[],he=[];function me(B){if(B.samples>0){if(be(B)===!1){let E=B.textures,$=B.width,oe=B.height,ye=s.COLOR_BUFFER_BIT,le=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=n.get(B),Ee=E.length>1;if(Ee)for(let ze=0;ze<E.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);let ke=B.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let ze=0;ze<E.length;ze++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[ze]);let _e=n.get(E[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,$,oe,0,0,$,oe,ye,s.NEAREST),l===!0&&(ae.length=0,he.length=0,ae.push(s.COLOR_ATTACHMENT0+ze),B.depthBuffer&&B.resolveDepthBuffer===!1&&(ae.push(le),he.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,he)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ee)for(let ze=0;ze<E.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[ze]);let _e=n.get(E[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,_e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){let E=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Te(B){return Math.min(i.maxSamples,B.samples)}function be(B){let E=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ce(B){let E=o.render.frame;u.get(B)!==E&&(u.set(B,E),B.update())}function Ze(B,E){let $=B.colorSpace,oe=B.format,ye=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||$!==ns&&$!==ls&&(ut.getTransfer($)===ft?(oe!==li||ye!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function qe(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=F,this.setTexture2DArray=D,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=Ne,this.setupRenderTarget=H,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=be}function N_(s,e){function t(n,i=ls){let r,o=ut.getTransfer(i);if(n===Si)return s.UNSIGNED_BYTE;if(n===Rc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===yf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xf)return s.BYTE;if(n===vf)return s.SHORT;if(n===Jr)return s.UNSIGNED_SHORT;if(n===Cc)return s.INT;if(n===Ps)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===jt)return s.HALF_FLOAT;if(n===bf)return s.ALPHA;if(n===Mf)return s.RGB;if(n===li)return s.RGBA;if(n===Ur)return s.DEPTH_COMPONENT;if(n===$r)return s.DEPTH_STENCIL;if(n===Ic)return s.RED;if(n===Lc)return s.RED_INTEGER;if(n===_f)return s.RG;if(n===Dc)return s.RG_INTEGER;if(n===Nc)return s.RGBA_INTEGER;if(n===ba||n===Ma||n===_a||n===wa)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bc||n===Fc||n===Uc||n===Oc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zc||n===kc||n===Hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zc||n===kc)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vc||n===Gc||n===Wc||n===qc||n===Xc||n===Yc||n===jc||n===Zc||n===Kc||n===Jc||n===Qc||n===$c||n===eu||n===tu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$c)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eu)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tu)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===nu||n===iu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sa)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===iu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wf||n===su||n===ru||n===ou)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===su)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ru)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ou)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var uu=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}},B_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new uu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vt({vertexShader:B_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xf=class extends is{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=new qf,m={},p=t.getContextAttributes(),v=null,b=null,y=[],w=[],S=new de,R=null,C=new cn;C.viewport=new _t;let M=new cn;M.viewport=new _t;let _=[C,M],T=new hc,z=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ue=y[Y];return ue===void 0&&(ue=new Hr,y[Y]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Y){let ue=y[Y];return ue===void 0&&(ue=new Hr,y[Y]=ue),ue.getGripSpace()},this.getHand=function(Y){let ue=y[Y];return ue===void 0&&(ue=new Hr,y[Y]=ue),ue.getHandSpace()};function O(Y){let ue=w.indexOf(Y.inputSource);if(ue===-1)return;let ce=y[ue];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,c||o),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",D);for(let Y=0;Y<y.length;Y++){let ue=w[Y];ue!==null&&(w[Y]=null,y[Y].disconnect(ue))}z=null,L=null,x.reset();for(let Y in m)delete m[Y];e.setRenderTarget(v),d=null,f=null,h=null,i=null,b=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",F),i.addEventListener("inputsourceschange",D),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(i,t)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Re=null,Ae=null;p.depth&&(Ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=p.stencil?$r:Ur,Re=p.stencil?Qr:Ps);let Pe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};f=h.createProjectionLayer(Pe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new $t(f.textureWidth,f.textureHeight,{format:li,type:Si,depthTexture:new $o(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ce={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new $t(d.framebufferWidth,d.framebufferHeight,{format:li,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),xe.setContext(i),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function D(Y){for(let ue=0;ue<Y.removed.length;ue++){let ce=Y.removed[ue],Re=w.indexOf(ce);Re>=0&&(w[Re]=null,y[Re].disconnect(ce))}for(let ue=0;ue<Y.added.length;ue++){let ce=Y.added[ue],Re=w.indexOf(ce);if(Re===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=w.length){w.push(ce),Re=Pe;break}else if(w[Pe]===null){w[Pe]=ce,Re=Pe;break}if(Re===-1)break}let Ae=y[Re];Ae&&Ae.connect(ce)}}let ee=new I,V=new I;function te(Y,ue,ce){ee.setFromMatrixPosition(ue.matrixWorld),V.setFromMatrixPosition(ce.matrixWorld);let Re=ee.distanceTo(V),Ae=ue.projectionMatrix.elements,Pe=ce.projectionMatrix.elements,tt=Ae[14]/(Ae[10]-1),Ne=Ae[14]/(Ae[10]+1),H=(Ae[9]+1)/Ae[5],pe=(Ae[9]-1)/Ae[5],ae=(Ae[8]-1)/Ae[0],he=(Pe[8]+1)/Pe[0],me=tt*ae,Te=tt*he,be=Re/(-ae+he),Ce=be*-ae;if(ue.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ce),Y.translateZ(be),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let Ze=tt+be,qe=Ne+be,B=me-Ce,E=Te+(Re-Ce),$=H*Ne/qe*Ze,oe=pe*Ne/qe*Ze;Y.projectionMatrix.makePerspective(B,E,$,oe,Ze,qe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function q(Y,ue){ue===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ue.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ue=Y.near,ce=Y.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),T.near=M.near=C.near=ue,T.far=M.far=C.far=ce,(z!==T.near||L!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),z=T.near,L=T.far),T.layers.mask=Y.layers.mask|6,C.layers.mask=T.layers.mask&3,M.layers.mask=T.layers.mask&5;let Re=Y.parent,Ae=T.cameras;q(T,Re);for(let Pe=0;Pe<Ae.length;Pe++)q(Ae[Pe],Re);Ae.length===2?te(T,C,M):T.projectionMatrix.copy(C.projectionMatrix),G(Y,T,Re)};function G(Y,ue,ce){ce===null?Y.matrix.copy(ue.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ue.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ol*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(T)},this.getCameraTexture=function(Y){return m[Y]};let K=null;function ge(Y,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){let ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Re=!1;ce.length!==T.cameras.length&&(T.cameras.length=0,Re=!0);for(let Ne=0;Ne<ce.length;Ne++){let H=ce[Ne],pe=null;if(d!==null)pe=d.getViewport(H);else{let he=h.getViewSubImage(f,H);pe=he.viewport,Ne===0&&(e.setRenderTargetTextures(b,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(b))}let ae=_[Ne];ae===void 0&&(ae=new cn,ae.layers.enable(Ne),ae.viewport=new _t,_[Ne]=ae),ae.matrix.fromArray(H.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(H.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(pe.x,pe.y,pe.width,pe.height),Ne===0&&(T.matrix.copy(ae.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Re===!0&&T.cameras.push(ae)}let Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){let Ne=h.getDepthInformation(ce[0]);Ne&&Ne.isValid&&Ne.texture&&x.init(Ne,i.renderState)}if(Ae&&Ae.includes("camera-access")&&(e.state.unbindTexture(),h))for(let Ne=0;Ne<ce.length;Ne++){let H=ce[Ne].camera;if(H){let pe=m[H];pe||(pe=new uu,m[H]=pe);let ae=h.getCameraImage(H);pe.sourceTexture=ae}}}for(let ce=0;ce<y.length;ce++){let Re=w[ce],Ae=y[ce];Re!==null&&Ae!==void 0&&Ae.update(Re,ue,c||o)}K&&K(Y,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}let xe=new Sg;xe.setAnimationLoop(ge),this.setAnimationLoop=function(Y){K=Y},this.dispose=function(){}}},cr=new Yn,U_=new dt;function O_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Cf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),b=v.envMap,y=v.envMapRotation;b&&(m.envMap.value=b,cr.copy(y),cr.x*=-1,cr.y*=-1,cr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),m.envMapRotation.value.setFromMatrix4(U_.makeRotationFromEuler(cr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function z_(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let y=b.program;n.uniformBlockBinding(v,y)}function c(v,b){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));let w=b.program;n.updateUBOMapping(v,w);let S=e.render.frame;r[v.id]!==S&&(f(v),r[v.id]=S)}function u(v){let b=h();v.__bindingPointIndex=b;let y=s.createBuffer(),w=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let b=i[v.id],y=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let S=0,R=y.length;S<R;S++){let C=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,_=C.length;M<_;M++){let T=C[M];if(d(T,S,M,w)===!0){let z=T.__offset,L=Array.isArray(T.value)?T.value:[T.value],O=0;for(let F=0;F<L.length;F++){let D=L[F],ee=x(D);typeof D=="number"||typeof D=="boolean"?(T.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,z+O,T.__data)):D.isMatrix3?(T.__data[0]=D.elements[0],T.__data[1]=D.elements[1],T.__data[2]=D.elements[2],T.__data[3]=0,T.__data[4]=D.elements[3],T.__data[5]=D.elements[4],T.__data[6]=D.elements[5],T.__data[7]=0,T.__data[8]=D.elements[6],T.__data[9]=D.elements[7],T.__data[10]=D.elements[8],T.__data[11]=0):(D.toArray(T.__data,O),O+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,b,y,w){let S=v.value,R=b+"_"+y;if(w[R]===void 0)return typeof S=="number"||typeof S=="boolean"?w[R]=S:w[R]=S.clone(),!0;{let C=w[R];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return w[R]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(v){let b=v.uniforms,y=0,w=16;for(let R=0,C=b.length;R<C;R++){let M=Array.isArray(b[R])?b[R]:[b[R]];for(let _=0,T=M.length;_<T;_++){let z=M[_],L=Array.isArray(z.value)?z.value:[z.value];for(let O=0,F=L.length;O<F;O++){let D=L[O],ee=x(D),V=y%w,te=V%ee.boundary,q=V+te;y+=te,q!==0&&w-q<ee.storage&&(y+=w-q),z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=ee.storage}}}let S=y%w;return S>0&&(y+=w-S),v.__size=y,v.__cache={},this}function x(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){let b=v.target;b.removeEventListener("dispose",m);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Ta=class{constructor(e={}){let{canvas:t=Ym(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,w=!1;this._outputColorSpace=Mt;let S=0,R=0,C=null,M=-1,_=null,T=new _t,z=new _t,L=null,O=new Ve(0),F=0,D=t.width,ee=t.height,V=1,te=null,q=null,G=new _t(0,0,D,ee),K=new _t(0,0,D,ee),ge=!1,xe=new Gr,Y=!1,ue=!1,ce=new dt,Re=new I,Ae=new _t,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function Ne(){return C===null?V:1}let H=n;function pe(P,J){return t.getContext(P,J)}try{let P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"179"}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ve,!1),H===null){let J="webgl2";if(H=pe(J,P),H===null)throw pe(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ae,he,me,Te,be,Ce,Ze,qe,B,E,$,oe,ye,le,Ue,Ee,ke,ze,_e,Le,k,W,X,j;function U(){ae=new iM(H),ae.init(),W=new N_(H,ae),he=new Kb(H,ae,e,W),me=new L_(H,ae),he.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),Te=new oM(H),be=new y_,Ce=new D_(H,ae,me,be,he,W,Te),Ze=new Qb(y),qe=new nM(y),B=new fy(H),X=new jb(H,B),E=new sM(H,B,Te,X),$=new lM(H,E,B,Te),_e=new aM(H,he,Ce),Ee=new Jb(be),oe=new v_(y,Ze,qe,ae,he,X,Ee),ye=new O_(y,be),le=new M_,Ue=new A_(ae),ze=new Yb(y,Ze,qe,me,$,d,l),ke=new P_(y,$,he),j=new z_(H,Te,he,me),Le=new Zb(H,ae,Te),k=new rM(H,ae,Te),Te.programs=oe.programs,y.capabilities=he,y.extensions=ae,y.properties=be,y.renderLists=le,y.shadowMap=ke,y.state=me,y.info=Te}U();let Z=new Xf(y,H);this.xr=Z,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let P=ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(D,ee,!1))},this.getSize=function(P){return P.set(D,ee)},this.setSize=function(P,J,ie=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=P,ee=J,t.width=Math.floor(P*V),t.height=Math.floor(J*V),ie===!0&&(t.style.width=P+"px",t.style.height=J+"px"),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(D*V,ee*V).floor()},this.setDrawingBufferSize=function(P,J,ie){D=P,ee=J,V=ie,t.width=Math.floor(P*ie),t.height=Math.floor(J*ie),this.setViewport(0,0,P,J)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(G)},this.setViewport=function(P,J,ie,se){P.isVector4?G.set(P.x,P.y,P.z,P.w):G.set(P,J,ie,se),me.viewport(T.copy(G).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(K)},this.setScissor=function(P,J,ie,se){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,J,ie,se),me.scissor(z.copy(K).multiplyScalar(V).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(P){me.setScissorTest(ge=P)},this.setOpaqueSort=function(P){te=P},this.setTransparentSort=function(P){q=P},this.getClearColor=function(P){return P.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(P=!0,J=!0,ie=!0){let se=0;if(P){let Q=!1;if(C!==null){let Se=C.texture.format;Q=Se===Nc||Se===Dc||Se===Lc}if(Q){let Se=C.texture.type,De=Se===Si||Se===Ps||Se===Jr||Se===Qr||Se===Rc||Se===Pc,He=ze.getClearColor(),Oe=ze.getClearAlpha(),Ke=He.r,Je=He.g,Xe=He.b;De?(g[0]=Ke,g[1]=Je,g[2]=Xe,g[3]=Oe,H.clearBufferuiv(H.COLOR,0,g)):(x[0]=Ke,x[1]=Je,x[2]=Xe,x[3]=Oe,H.clearBufferiv(H.COLOR,0,x))}else se|=H.COLOR_BUFFER_BIT}J&&(se|=H.DEPTH_BUFFER_BIT),ie&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ze.dispose(),le.dispose(),Ue.dispose(),be.dispose(),Ze.dispose(),qe.dispose(),$.dispose(),X.dispose(),j.dispose(),oe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Li),Z.removeEventListener("sessionend",Ap),ks.stop()};function re(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let P=Te.autoReset,J=ke.enabled,ie=ke.autoUpdate,se=ke.needsUpdate,Q=ke.type;U(),Te.autoReset=P,ke.enabled=J,ke.autoUpdate=ie,ke.needsUpdate=se,ke.type=Q}function ve(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function fe(P){let J=P.target;J.removeEventListener("dispose",fe),Be(J)}function Be(P){et(P),be.remove(P)}function et(P){let J=be.get(P).programs;J!==void 0&&(J.forEach(function(ie){oe.releaseProgram(ie)}),P.isShaderMaterial&&oe.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,ie,se,Q,Se){J===null&&(J=Pe);let De=Q.isMesh&&Q.matrixWorld.determinant()<0,He=Ux(P,J,ie,se,Q);me.setMaterial(se,De);let Oe=ie.index,Ke=1;if(se.wireframe===!0){if(Oe=E.getWireframeAttribute(ie),Oe===void 0)return;Ke=2}let Je=ie.drawRange,Xe=ie.attributes.position,ct=Je.start*Ke,Et=(Je.start+Je.count)*Ke;Se!==null&&(ct=Math.max(ct,Se.start*Ke),Et=Math.min(Et,(Se.start+Se.count)*Ke)),Oe!==null?(ct=Math.max(ct,0),Et=Math.min(Et,Oe.count)):Xe!=null&&(ct=Math.max(ct,0),Et=Math.min(Et,Xe.count));let Ht=Et-ct;if(Ht<0||Ht===1/0)return;X.setup(Q,se,He,ie,Oe);let It,Tt=Le;if(Oe!==null&&(It=B.get(Oe),Tt=k,Tt.setIndex(It)),Q.isMesh)se.wireframe===!0?(me.setLineWidth(se.wireframeLinewidth*Ne()),Tt.setMode(H.LINES)):Tt.setMode(H.TRIANGLES);else if(Q.isLine){let Ye=se.linewidth;Ye===void 0&&(Ye=1),me.setLineWidth(Ye*Ne()),Q.isLineSegments?Tt.setMode(H.LINES):Q.isLineLoop?Tt.setMode(H.LINE_LOOP):Tt.setMode(H.LINE_STRIP)}else Q.isPoints?Tt.setMode(H.POINTS):Q.isSprite&&Tt.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Ye=Q._multiDrawStarts,Ut=Q._multiDrawCounts,ht=Q._multiDrawCount,Gn=Oe?B.get(Oe).bytesPerElement:1,yr=be.get(se).currentProgram.getUniforms();for(let Wn=0;Wn<ht;Wn++)yr.setValue(H,"_gl_DrawID",Wn),Tt.render(Ye[Wn]/Gn,Ut[Wn])}else if(Q.isInstancedMesh)Tt.renderInstances(ct,Ht,Q.count);else if(ie.isInstancedBufferGeometry){let Ye=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ut=Math.min(ie.instanceCount,Ye);Tt.renderInstances(ct,Ht,Ut)}else Tt.render(ct,Ht)};function At(P,J,ie){P.transparent===!0&&P.side===Bt&&P.forceSinglePass===!1?(P.side=En,P.needsUpdate=!0,il(P,J,ie),P.side=xi,P.needsUpdate=!0,il(P,J,ie),P.side=Bt):il(P,J,ie)}this.compile=function(P,J,ie=null){ie===null&&(ie=P),p=Ue.get(ie),p.init(J),b.push(p),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),P!==ie&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights();let se=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Se=Q.material;if(Se)if(Array.isArray(Se))for(let De=0;De<Se.length;De++){let He=Se[De];At(He,ie,Q),se.add(He)}else At(Se,ie,Q),se.add(Se)}),p=b.pop(),se},this.compileAsync=function(P,J,ie=null){let se=this.compile(P,J,ie);return new Promise(Q=>{function Se(){if(se.forEach(function(De){be.get(De).currentProgram.isReady()&&se.delete(De)}),se.size===0){Q(P);return}setTimeout(Se,10)}ae.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let xt=null;function Xi(P){xt&&xt(P)}function Li(){ks.stop()}function Ap(){ks.start()}let ks=new Sg;ks.setAnimationLoop(Xi),typeof self<"u"&&ks.setContext(self),this.setAnimationLoop=function(P){xt=P,Z.setAnimationLoop(P),P===null?ks.stop():ks.start()},Z.addEventListener("sessionstart",Li),Z.addEventListener("sessionend",Ap),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(J),J=Z.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,J,C),p=Ue.get(P,b.length),p.init(J),b.push(p),ce.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),xe.setFromProjectionMatrix(ce,gi,J.reversedDepth),ue=this.localClippingEnabled,Y=Ee.init(this.clippingPlanes,ue),m=le.get(P,v.length),m.init(),v.push(m),Z.enabled===!0&&Z.isPresenting===!0){let Se=y.xr.getDepthSensingMesh();Se!==null&&yh(Se,J,-1/0,y.sortObjects)}yh(P,J,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(te,q),tt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,tt&&ze.addToRenderList(m,P),this.info.render.frame++,Y===!0&&Ee.beginShadows();let ie=p.state.shadowsArray;ke.render(ie,P,J),Y===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let se=m.opaque,Q=m.transmissive;if(p.setupLights(),J.isArrayCamera){let Se=J.cameras;if(Q.length>0)for(let De=0,He=Se.length;De<He;De++){let Oe=Se[De];Rp(se,Q,P,Oe)}tt&&ze.render(P);for(let De=0,He=Se.length;De<He;De++){let Oe=Se[De];Cp(m,P,Oe,Oe.viewport)}}else Q.length>0&&Rp(se,Q,P,J),tt&&ze.render(P),Cp(m,P,J);C!==null&&R===0&&(Ce.updateMultisampleRenderTarget(C),Ce.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(y,P,J),X.resetDefaultState(),M=-1,_=null,b.pop(),b.length>0?(p=b[b.length-1],Y===!0&&Ee.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function yh(P,J,ie,se){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||xe.intersectsSprite(P)){se&&Ae.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ce);let De=$.update(P),He=P.material;He.visible&&m.push(P,De,He,ie,Ae.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||xe.intersectsObject(P))){let De=$.update(P),He=P.material;if(se&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ae.copy(P.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ae.copy(De.boundingSphere.center)),Ae.applyMatrix4(P.matrixWorld).applyMatrix4(ce)),Array.isArray(He)){let Oe=De.groups;for(let Ke=0,Je=Oe.length;Ke<Je;Ke++){let Xe=Oe[Ke],ct=He[Xe.materialIndex];ct&&ct.visible&&m.push(P,De,ct,ie,Ae.z,Xe)}}else He.visible&&m.push(P,De,He,ie,Ae.z,null)}}let Se=P.children;for(let De=0,He=Se.length;De<He;De++)yh(Se[De],J,ie,se)}function Cp(P,J,ie,se){let Q=P.opaque,Se=P.transmissive,De=P.transparent;p.setupLightsView(ie),Y===!0&&Ee.setGlobalState(y.clippingPlanes,ie),se&&me.viewport(T.copy(se)),Q.length>0&&nl(Q,J,ie),Se.length>0&&nl(Se,J,ie),De.length>0&&nl(De,J,ie),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Rp(P,J,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new $t(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?jt:Si,minFilter:as,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let Se=p.state.transmissionRenderTarget[se.id],De=se.viewport||T;Se.setSize(De.z*y.transmissionResolutionScale,De.w*y.transmissionResolutionScale);let He=y.getRenderTarget(),Oe=y.getActiveCubeFace(),Ke=y.getActiveMipmapLevel();y.setRenderTarget(Se),y.getClearColor(O),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),tt&&ze.render(ie);let Je=y.toneMapping;y.toneMapping=os;let Xe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),Y===!0&&Ee.setGlobalState(y.clippingPlanes,se),nl(P,ie,se),Ce.updateMultisampleRenderTarget(Se),Ce.updateRenderTargetMipmap(Se),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Et=0,Ht=J.length;Et<Ht;Et++){let It=J[Et],Tt=It.object,Ye=It.geometry,Ut=It.material,ht=It.group;if(Ut.side===Bt&&Tt.layers.test(se.layers)){let Gn=Ut.side;Ut.side=En,Ut.needsUpdate=!0,Pp(Tt,ie,se,Ye,Ut,ht),Ut.side=Gn,Ut.needsUpdate=!0,ct=!0}}ct===!0&&(Ce.updateMultisampleRenderTarget(Se),Ce.updateRenderTargetMipmap(Se))}y.setRenderTarget(He,Oe,Ke),y.setClearColor(O,F),Xe!==void 0&&(se.viewport=Xe),y.toneMapping=Je}function nl(P,J,ie){let se=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,Se=P.length;Q<Se;Q++){let De=P[Q],He=De.object,Oe=De.geometry,Ke=De.group,Je=De.material;Je.allowOverride===!0&&se!==null&&(Je=se),He.layers.test(ie.layers)&&Pp(He,J,ie,Oe,Je,Ke)}}function Pp(P,J,ie,se,Q,Se){P.onBeforeRender(y,J,ie,se,Q,Se),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(y,J,ie,se,P,Se),Q.transparent===!0&&Q.side===Bt&&Q.forceSinglePass===!1?(Q.side=En,Q.needsUpdate=!0,y.renderBufferDirect(ie,J,se,Q,P,Se),Q.side=xi,Q.needsUpdate=!0,y.renderBufferDirect(ie,J,se,Q,P,Se),Q.side=Bt):y.renderBufferDirect(ie,J,se,Q,P,Se),P.onAfterRender(y,J,ie,se,Q,Se)}function il(P,J,ie){J.isScene!==!0&&(J=Pe);let se=be.get(P),Q=p.state.lights,Se=p.state.shadowsArray,De=Q.state.version,He=oe.getParameters(P,Q.state,Se,J,ie),Oe=oe.getProgramCacheKey(He),Ke=se.programs;se.environment=P.isMeshStandardMaterial?J.environment:null,se.fog=J.fog,se.envMap=(P.isMeshStandardMaterial?qe:Ze).get(P.envMap||se.environment),se.envMapRotation=se.environment!==null&&P.envMap===null?J.environmentRotation:P.envMapRotation,Ke===void 0&&(P.addEventListener("dispose",fe),Ke=new Map,se.programs=Ke);let Je=Ke.get(Oe);if(Je!==void 0){if(se.currentProgram===Je&&se.lightsStateVersion===De)return Lp(P,He),Je}else He.uniforms=oe.getUniforms(P),P.onBeforeCompile(He,y),Je=oe.acquireProgram(He,Oe),Ke.set(Oe,Je),se.uniforms=He.uniforms;let Xe=se.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=Ee.uniform),Lp(P,He),se.needsLights=zx(P),se.lightsStateVersion=De,se.needsLights&&(Xe.ambientLightColor.value=Q.state.ambient,Xe.lightProbe.value=Q.state.probe,Xe.directionalLights.value=Q.state.directional,Xe.directionalLightShadows.value=Q.state.directionalShadow,Xe.spotLights.value=Q.state.spot,Xe.spotLightShadows.value=Q.state.spotShadow,Xe.rectAreaLights.value=Q.state.rectArea,Xe.ltc_1.value=Q.state.rectAreaLTC1,Xe.ltc_2.value=Q.state.rectAreaLTC2,Xe.pointLights.value=Q.state.point,Xe.pointLightShadows.value=Q.state.pointShadow,Xe.hemisphereLights.value=Q.state.hemi,Xe.directionalShadowMap.value=Q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xe.spotShadowMap.value=Q.state.spotShadowMap,Xe.spotLightMatrix.value=Q.state.spotLightMatrix,Xe.spotLightMap.value=Q.state.spotLightMap,Xe.pointShadowMap.value=Q.state.pointShadowMap,Xe.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=Je,se.uniformsList=null,Je}function Ip(P){if(P.uniformsList===null){let J=P.currentProgram.getUniforms();P.uniformsList=io.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function Lp(P,J){let ie=be.get(P);ie.outputColorSpace=J.outputColorSpace,ie.batching=J.batching,ie.batchingColor=J.batchingColor,ie.instancing=J.instancing,ie.instancingColor=J.instancingColor,ie.instancingMorph=J.instancingMorph,ie.skinning=J.skinning,ie.morphTargets=J.morphTargets,ie.morphNormals=J.morphNormals,ie.morphColors=J.morphColors,ie.morphTargetsCount=J.morphTargetsCount,ie.numClippingPlanes=J.numClippingPlanes,ie.numIntersection=J.numClipIntersection,ie.vertexAlphas=J.vertexAlphas,ie.vertexTangents=J.vertexTangents,ie.toneMapping=J.toneMapping}function Ux(P,J,ie,se,Q){J.isScene!==!0&&(J=Pe),Ce.resetTextureUnits();let Se=J.fog,De=se.isMeshStandardMaterial?J.environment:null,He=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ns,Oe=(se.isMeshStandardMaterial?qe:Ze).get(se.envMap||De),Ke=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Je=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Xe=!!ie.morphAttributes.position,ct=!!ie.morphAttributes.normal,Et=!!ie.morphAttributes.color,Ht=os;se.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ht=y.toneMapping);let It=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Tt=It!==void 0?It.length:0,Ye=be.get(se),Ut=p.state.lights;if(Y===!0&&(ue===!0||P!==_)){let wn=P===_&&se.id===M;Ee.setState(se,P,wn)}let ht=!1;se.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Ut.state.version||Ye.outputColorSpace!==He||Q.isBatchedMesh&&Ye.batching===!1||!Q.isBatchedMesh&&Ye.batching===!0||Q.isBatchedMesh&&Ye.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ye.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ye.instancing===!1||!Q.isInstancedMesh&&Ye.instancing===!0||Q.isSkinnedMesh&&Ye.skinning===!1||!Q.isSkinnedMesh&&Ye.skinning===!0||Q.isInstancedMesh&&Ye.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ye.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ye.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ye.instancingMorph===!1&&Q.morphTexture!==null||Ye.envMap!==Oe||se.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ee.numPlanes||Ye.numIntersection!==Ee.numIntersection)||Ye.vertexAlphas!==Ke||Ye.vertexTangents!==Je||Ye.morphTargets!==Xe||Ye.morphNormals!==ct||Ye.morphColors!==Et||Ye.toneMapping!==Ht||Ye.morphTargetsCount!==Tt)&&(ht=!0):(ht=!0,Ye.__version=se.version);let Gn=Ye.currentProgram;ht===!0&&(Gn=il(se,J,Q));let yr=!1,Wn=!1,Co=!1,Ot=Gn.getUniforms(),ni=Ye.uniforms;if(me.useProgram(Gn.program)&&(yr=!0,Wn=!0,Co=!0),se.id!==M&&(M=se.id,Wn=!0),yr||_!==P){me.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ot.setValue(H,"projectionMatrix",P.projectionMatrix),Ot.setValue(H,"viewMatrix",P.matrixWorldInverse);let Pn=Ot.map.cameraPosition;Pn!==void 0&&Pn.setValue(H,Re.setFromMatrixPosition(P.matrixWorld)),he.logarithmicDepthBuffer&&Ot.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ot.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,Wn=!0,Co=!0)}if(Q.isSkinnedMesh){Ot.setOptional(H,Q,"bindMatrix"),Ot.setOptional(H,Q,"bindMatrixInverse");let wn=Q.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Ot.setValue(H,"boneTexture",wn.boneTexture,Ce))}Q.isBatchedMesh&&(Ot.setOptional(H,Q,"batchingTexture"),Ot.setValue(H,"batchingTexture",Q._matricesTexture,Ce),Ot.setOptional(H,Q,"batchingIdTexture"),Ot.setValue(H,"batchingIdTexture",Q._indirectTexture,Ce),Ot.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ot.setValue(H,"batchingColorTexture",Q._colorsTexture,Ce));let ii=ie.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&_e.update(Q,ie,Gn),(Wn||Ye.receiveShadow!==Q.receiveShadow)&&(Ye.receiveShadow=Q.receiveShadow,Ot.setValue(H,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(ni.envMap.value=Oe,ni.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&J.environment!==null&&(ni.envMapIntensity.value=J.environmentIntensity),Wn&&(Ot.setValue(H,"toneMappingExposure",y.toneMappingExposure),Ye.needsLights&&Ox(ni,Co),Se&&se.fog===!0&&ye.refreshFogUniforms(ni,Se),ye.refreshMaterialUniforms(ni,se,V,ee,p.state.transmissionRenderTarget[P.id]),io.upload(H,Ip(Ye),ni,Ce)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(io.upload(H,Ip(Ye),ni,Ce),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ot.setValue(H,"center",Q.center),Ot.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Ot.setValue(H,"normalMatrix",Q.normalMatrix),Ot.setValue(H,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let wn=se.uniformsGroups;for(let Pn=0,bh=wn.length;Pn<bh;Pn++){let Hs=wn[Pn];j.update(Hs,Gn),j.bind(Hs,Gn)}}return Gn}function Ox(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function zx(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,J,ie){let se=be.get(P);se.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),be.get(P.texture).__webglTexture=J,be.get(P.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ie,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,J){let ie=be.get(P);ie.__webglFramebuffer=J,ie.__useDefaultFramebuffer=J===void 0};let kx=H.createFramebuffer();this.setRenderTarget=function(P,J=0,ie=0){C=P,S=J,R=ie;let se=!0,Q=null,Se=!1,De=!1;if(P){let Oe=be.get(P);if(Oe.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(Oe.__webglFramebuffer===void 0)Ce.setupRenderTarget(P);else if(Oe.__hasExternalTextures)Ce.rebindTextures(P,be.get(P.texture).__webglTexture,be.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Xe=P.depthTexture;if(Oe.__boundDepthTexture!==Xe){if(Xe!==null&&be.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ce.setupDepthRenderbuffer(P)}}let Ke=P.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);let Je=be.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Je[J])?Q=Je[J][ie]:Q=Je[J],Se=!0):P.samples>0&&Ce.useMultisampledRTT(P)===!1?Q=be.get(P).__webglMultisampledFramebuffer:Array.isArray(Je)?Q=Je[ie]:Q=Je,T.copy(P.viewport),z.copy(P.scissor),L=P.scissorTest}else T.copy(G).multiplyScalar(V).floor(),z.copy(K).multiplyScalar(V).floor(),L=ge;if(ie!==0&&(Q=kx),me.bindFramebuffer(H.FRAMEBUFFER,Q)&&se&&me.drawBuffers(P,Q),me.viewport(T),me.scissor(z),me.setScissorTest(L),Se){let Oe=be.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+J,Oe.__webglTexture,ie)}else if(De){let Oe=J;for(let Ke=0;Ke<P.textures.length;Ke++){let Je=be.get(P.textures[Ke]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ke,Je.__webglTexture,ie,Oe)}}else if(P!==null&&ie!==0){let Oe=be.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Oe.__webglTexture,ie)}M=-1},this.readRenderTargetPixels=function(P,J,ie,se,Q,Se,De,He=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){me.bindFramebuffer(H.FRAMEBUFFER,Oe);try{let Ke=P.textures[He],Je=Ke.format,Xe=Ke.type;if(!he.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-se&&ie>=0&&ie<=P.height-Q&&(P.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+He),H.readPixels(J,ie,se,Q,W.convert(Je),W.convert(Xe),Se))}finally{let Ke=C!==null?be.get(C).__webglFramebuffer:null;me.bindFramebuffer(H.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(P,J,ie,se,Q,Se,De,He=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe)if(J>=0&&J<=P.width-se&&ie>=0&&ie<=P.height-Q){me.bindFramebuffer(H.FRAMEBUFFER,Oe);let Ke=P.textures[He],Je=Ke.format,Xe=Ke.type;if(!he.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ct),H.bufferData(H.PIXEL_PACK_BUFFER,Se.byteLength,H.STREAM_READ),P.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+He),H.readPixels(J,ie,se,Q,W.convert(Je),W.convert(Xe),0);let Et=C!==null?be.get(C).__webglFramebuffer:null;me.bindFramebuffer(H.FRAMEBUFFER,Et);let Ht=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await jm(H,Ht,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ct),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Se),H.deleteBuffer(ct),H.deleteSync(Ht),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,J=null,ie=0){let se=Math.pow(2,-ie),Q=Math.floor(P.image.width*se),Se=Math.floor(P.image.height*se),De=J!==null?J.x:0,He=J!==null?J.y:0;Ce.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,ie,0,0,De,He,Q,Se),me.unbindTexture()};let Hx=H.createFramebuffer(),Vx=H.createFramebuffer();this.copyTextureToTexture=function(P,J,ie=null,se=null,Q=0,Se=null){Se===null&&(Q!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Q,Q=0):Se=0);let De,He,Oe,Ke,Je,Xe,ct,Et,Ht,It=P.isCompressedTexture?P.mipmaps[Se]:P.image;if(ie!==null)De=ie.max.x-ie.min.x,He=ie.max.y-ie.min.y,Oe=ie.isBox3?ie.max.z-ie.min.z:1,Ke=ie.min.x,Je=ie.min.y,Xe=ie.isBox3?ie.min.z:0;else{let ii=Math.pow(2,-Q);De=Math.floor(It.width*ii),He=Math.floor(It.height*ii),P.isDataArrayTexture?Oe=It.depth:P.isData3DTexture?Oe=Math.floor(It.depth*ii):Oe=1,Ke=0,Je=0,Xe=0}se!==null?(ct=se.x,Et=se.y,Ht=se.z):(ct=0,Et=0,Ht=0);let Tt=W.convert(J.format),Ye=W.convert(J.type),Ut;J.isData3DTexture?(Ce.setTexture3D(J,0),Ut=H.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Ce.setTexture2DArray(J,0),Ut=H.TEXTURE_2D_ARRAY):(Ce.setTexture2D(J,0),Ut=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,J.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,J.unpackAlignment);let ht=H.getParameter(H.UNPACK_ROW_LENGTH),Gn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),yr=H.getParameter(H.UNPACK_SKIP_PIXELS),Wn=H.getParameter(H.UNPACK_SKIP_ROWS),Co=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,It.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,It.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ke),H.pixelStorei(H.UNPACK_SKIP_ROWS,Je),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xe);let Ot=P.isDataArrayTexture||P.isData3DTexture,ni=J.isDataArrayTexture||J.isData3DTexture;if(P.isDepthTexture){let ii=be.get(P),wn=be.get(J),Pn=be.get(ii.__renderTarget),bh=be.get(wn.__renderTarget);me.bindFramebuffer(H.READ_FRAMEBUFFER,Pn.__webglFramebuffer),me.bindFramebuffer(H.DRAW_FRAMEBUFFER,bh.__webglFramebuffer);for(let Hs=0;Hs<Oe;Hs++)Ot&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,be.get(P).__webglTexture,Q,Xe+Hs),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,be.get(J).__webglTexture,Se,Ht+Hs)),H.blitFramebuffer(Ke,Je,De,He,ct,Et,De,He,H.DEPTH_BUFFER_BIT,H.NEAREST);me.bindFramebuffer(H.READ_FRAMEBUFFER,null),me.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||be.has(P)){let ii=be.get(P),wn=be.get(J);me.bindFramebuffer(H.READ_FRAMEBUFFER,Hx),me.bindFramebuffer(H.DRAW_FRAMEBUFFER,Vx);for(let Pn=0;Pn<Oe;Pn++)Ot?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ii.__webglTexture,Q,Xe+Pn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ii.__webglTexture,Q),ni?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wn.__webglTexture,Se,Ht+Pn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wn.__webglTexture,Se),Q!==0?H.blitFramebuffer(Ke,Je,De,He,ct,Et,De,He,H.COLOR_BUFFER_BIT,H.NEAREST):ni?H.copyTexSubImage3D(Ut,Se,ct,Et,Ht+Pn,Ke,Je,De,He):H.copyTexSubImage2D(Ut,Se,ct,Et,Ke,Je,De,He);me.bindFramebuffer(H.READ_FRAMEBUFFER,null),me.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ni?P.isDataTexture||P.isData3DTexture?H.texSubImage3D(Ut,Se,ct,Et,Ht,De,He,Oe,Tt,Ye,It.data):J.isCompressedArrayTexture?H.compressedTexSubImage3D(Ut,Se,ct,Et,Ht,De,He,Oe,Tt,It.data):H.texSubImage3D(Ut,Se,ct,Et,Ht,De,He,Oe,Tt,Ye,It):P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Se,ct,Et,De,He,Tt,Ye,It.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Se,ct,Et,It.width,It.height,Tt,It.data):H.texSubImage2D(H.TEXTURE_2D,Se,ct,Et,De,He,Tt,Ye,It);H.pixelStorei(H.UNPACK_ROW_LENGTH,ht),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Gn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,yr),H.pixelStorei(H.UNPACK_SKIP_ROWS,Wn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Co),Se===0&&J.generateMipmaps&&H.generateMipmap(Ut),me.unbindTexture()},this.copyTextureToTexture3D=function(P,J,ie=null,se=null,Q=0){return Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,J,ie,se,Q)},this.initRenderTarget=function(P){be.get(P).__webglFramebuffer===void 0&&Ce.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Ce.setTextureCube(P,0):P.isData3DTexture?Ce.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ce.setTexture2DArray(P,0):Ce.setTexture2D(P,0),me.unbindTexture()},this.resetState=function(){S=0,R=0,C=null,me.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var oo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var An=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},k_=new rs(-1,1,1,-1,0,1),jf=class extends wt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},H_=new jf,Oi=class{constructor(e){this._mesh=new it(H_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,k_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var fu=class extends An{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Kn.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Oi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Aa=class extends An{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},du=class extends An{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var pu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fu(oo),this.copyPass.material.blending=wi,this.clock=new xa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Aa!==void 0&&(o instanceof Aa?n=!0:o instanceof du&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var mu=class extends An{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var Ca={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new de(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Ra={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new de(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},gu={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new de(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var xu=class extends An{constructor(){super(),this._edgesRT=new $t(1,1,{depthBuffer:!1,type:jt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new $t(1,1,{depthBuffer:!1,type:jt}),this._weightsRT.texture.name="SMAAPass.weights";let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Qt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=Jt,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Qt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=un,this._searchTexture.minFilter=un,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Kn.clone(Ca.uniforms),this._materialEdges=new vt({defines:Object.assign({},Ca.defines),uniforms:this._uniformsEdges,vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader}),this._uniformsWeights=Kn.clone(Ra.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new vt({defines:Object.assign({},Ra.defines),uniforms:this._uniformsWeights,vertexShader:Ra.vertexShader,fragmentShader:Ra.fragmentShader}),this._uniformsBlend=Kn.clone(gu.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new vt({uniforms:this._uniformsBlend,vertexShader:gu.vertexShader,fragmentShader:gu.fragmentShader}),this._fsQuad=new Oi(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}};var Rg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ao=class s extends An{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(r,o,{type:jt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new $t(r,o,{type:jt});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new $t(r,o,{type:jt});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Rg;this.highPassUniforms=Kn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new de(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Kn.clone(oo.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:oo.vertexShader,fragmentShader:oo.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ve,this._oldClearAlpha=1,this._basic=new Rt,this._fsQuad=new Oi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ao.BlurDirectionX=new de(1,0);ao.BlurDirectionY=new de(0,1);var Pa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var vu=class extends An{constructor(){super(),this.uniforms=Kn.clone(Pa.uniforms),this.material=new fa({name:Pa.name,uniforms:this.uniforms,vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader}),this._fsQuad=new Oi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===wc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Pg=(s,e,t=[])=>{let n=document.createElementNS("http://www.w3.org/2000/svg",s);return Object.keys(e).forEach(i=>{n.setAttribute(i,String(e[i]))}),t.length&&t.forEach(i=>{let r=Pg(...i);n.appendChild(r)}),n},Ig=([s,e,t])=>Pg(s,e,t);var V_=s=>Array.from(s.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),G_=s=>typeof s=="string"?s:!s||!s.class?"":s.class&&typeof s.class=="string"?s.class.split(" "):s.class&&Array.isArray(s.class)?s.class:"",W_=s=>s.flatMap(G_).map(t=>t.trim()).filter(Boolean).filter((t,n,i)=>i.indexOf(t)===n).join(" "),q_=s=>s.replace(/(\w)(\w*)(_|-|\s*)/g,(e,t,n)=>t.toUpperCase()+n.toLowerCase()),Zf=(s,{nameAttr:e,icons:t,attrs:n})=>{let i=s.getAttribute(e);if(i==null)return;let r=q_(i),o=t[r];if(!o)return console.warn(`${s.outerHTML} icon name was not found in the provided icons object.`);let a=V_(s),[l,c,u]=o,h={...c,"data-lucide":i,...n,...a},f=W_(["lucide",`lucide-${i}`,a,n]);f&&Object.assign(h,{class:f});let d=Ig([l,h,u]);return s.parentNode?.replaceChild(d,s)};var Qe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Kf=["svg",Qe,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];var Jf=["svg",Qe,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];var Qf=["svg",Qe,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];var $f=["svg",Qe,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];var ed=["svg",Qe,[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]]];var td=["svg",Qe,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];var nd=["svg",Qe,[["path",{d:"M20 6 9 17l-5-5"}]]];var id=["svg",Qe,[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]]];var sd=["svg",Qe,[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]]];var rd=["svg",Qe,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];var od=["svg",Qe,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];var ad=["svg",Qe,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];var ld=["svg",Qe,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];var cd=["svg",Qe,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];var ud=["svg",Qe,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]]];var hd=["svg",Qe,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];var yu=["svg",Qe,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];var fd=["svg",Qe,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]]];var dd=["svg",Qe,[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"}]]];var pd=["svg",Qe,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];var md=["svg",Qe,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];var gd=["svg",Qe,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];var xd=["svg",Qe,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];var Lg=({icons:s={},nameAttr:e="data-lucide",attrs:t={}}={})=>{if(!Object.values(s).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");let n=document.querySelectorAll(`[${e}]`);if(Array.from(n).forEach(i=>Zf(i,{nameAttr:e,icons:s,attrs:t})),e==="data-lucide"){let i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(r=>Zf(r,{nameAttr:"icon-name",icons:s,attrs:t})))}};var bu=class extends pa{constructor(e){super(e),this.type=jt}parse(e){let o=function(C,M){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(M||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(M||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(M||""))}},h=function(C,M,_){M=M||1024;let z=C.pos,L=-1,O=0,F="",D=String.fromCharCode.apply(null,new Uint16Array(C.subarray(z,z+128)));for(;0>(L=D.indexOf(`
`))&&O<M&&z<C.byteLength;)F+=D,O+=D.length,z+=128,D+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(z,z+128)));return-1<L?(_!==!1&&(C.pos+=O+L+1),F+D.slice(0,L)):!1},f=function(C){let M=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,O={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},F,D;for((C.pos>=C.byteLength||!(F=h(C)))&&o(1,"no header found"),(D=F.match(M))||o(3,"bad initial token"),O.valid|=1,O.programtype=D[1],O.string+=F+`
`;F=h(C),F!==!1;){if(O.string+=F+`
`,F.charAt(0)==="#"){O.comments+=F+`
`;continue}if((D=F.match(_))&&(O.gamma=parseFloat(D[1])),(D=F.match(T))&&(O.exposure=parseFloat(D[1])),(D=F.match(z))&&(O.valid|=2,O.format=D[1]),(D=F.match(L))&&(O.valid|=4,O.height=parseInt(D[1],10),O.width=parseInt(D[2],10)),O.valid&2&&O.valid&4)break}return O.valid&2||o(3,"missing format specifier"),O.valid&4||o(3,"missing image size specifier"),O},d=function(C,M,_){let T=M;if(T<8||T>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);T!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");let z=new Uint8Array(4*M*_);z.length||o(4,"unable to allocate buffer space");let L=0,O=0,F=4*T,D=new Uint8Array(4),ee=new Uint8Array(F),V=_;for(;V>0&&O<C.byteLength;){O+4>C.byteLength&&o(1),D[0]=C[O++],D[1]=C[O++],D[2]=C[O++],D[3]=C[O++],(D[0]!=2||D[1]!=2||(D[2]<<8|D[3])!=T)&&o(3,"bad rgbe scanline format");let te=0,q;for(;te<F&&O<C.byteLength;){q=C[O++];let K=q>128;if(K&&(q-=128),(q===0||te+q>F)&&o(3,"bad scanline data"),K){let ge=C[O++];for(let xe=0;xe<q;xe++)ee[te++]=ge}else ee.set(C.subarray(O,O+q),te),te+=q,O+=q}let G=T;for(let K=0;K<G;K++){let ge=0;z[L]=ee[K+ge],ge+=T,z[L+1]=ee[K+ge],ge+=T,z[L+2]=ee[K+ge],ge+=T,z[L+3]=ee[K+ge],L+=4}V--}return z},g=function(C,M,_,T){let z=C[M+3],L=Math.pow(2,z-128)/255;_[T+0]=C[M+0]*L,_[T+1]=C[M+1]*L,_[T+2]=C[M+2]*L,_[T+3]=1},x=function(C,M,_,T){let z=C[M+3],L=Math.pow(2,z-128)/255;_[T+0]=Ts.toHalfFloat(Math.min(C[M+0]*L,65504)),_[T+1]=Ts.toHalfFloat(Math.min(C[M+1]*L,65504)),_[T+2]=Ts.toHalfFloat(Math.min(C[M+2]*L,65504)),_[T+3]=Ts.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=f(m),v=p.width,b=p.height,y=d(m.subarray(m.pos),v,b),w,S,R;switch(this.type){case Tn:R=y.length/4;let C=new Float32Array(R*4);for(let _=0;_<R;_++)g(y,_*4,C,_*4);w=C,S=Tn;break;case jt:R=y.length/4;let M=new Uint16Array(R*4);for(let _=0;_<R;_++)x(y,_*4,M,_*4);w=M,S=jt;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:b,data:w,header:p.string,gamma:p.gamma,exposure:p.exposure,type:S}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case Tn:case jt:o.colorSpace=ns,o.minFilter=Jt,o.magFilter=Jt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}};async function Dg(s){let e=new Yr;e.onProgress=(M,_,T)=>s(15+_/T*70);let t=new ma(e),n=async(M,_,T=!0)=>{let z=await t.loadAsync(`./assets/${M}`);return z.wrapS=z.wrapT=vi,z.repeat.set(..._),z.anisotropy=8,T&&(z.colorSpace=Mt),z},[i,r,o,a,l,c,u,h,f,d,g,x,m,p,v]=await Promise.all([n("asphalt_02-diffuse.jpg",[5,1.5]),n("asphalt_02-nor_gl.jpg",[5,1.5],!1),n("asphalt_02-rough.jpg",[5,1.5],!1),n("aerial_grass_rock-diffuse.jpg",[8,8]),n("bark_brown_02-diffuse.jpg",[1,2]),n("waternormals.jpg",[1,1],!1),new bu(e).loadAsync("./assets/kloppenheim_06_puresky-hdri.hdr"),n("island_tree_02-leaves_diff.jpg",[1,1]),n("island_tree_02-leaves_alpha.jpg",[1,1],!1),n("island_tree_02-leaves_nor_gl.jpg",[1,1],!1),n("concrete_wall_007-diffuse.jpg",[2,2]),n("concrete_wall_007-nor_gl.jpg",[2,2],!1),n("asphalt_01-diffuse.jpg",[1,1]),n("asphalt_01-nor_gl.jpg",[1,1],!1),n("asphalt_01-rough.jpg",[1,1],!1)]);u.mapping=Kr;let b=document.createElement("canvas");b.width=b.height=256;let y=b.getContext("2d");y.fillStyle="#deded5",y.fillRect(0,0,256,256);for(let M=0;M<12e3;M++){let _=Math.round(170+Math.random()*80);y.strokeStyle=`rgb(${_},${_},${_-5})`;let T=Math.random()*256,z=Math.random()*256;y.beginPath(),y.moveTo(T,z),y.lineTo(T+Math.random()*2,z+2+Math.random()*6),y.stroke()}let w=new Gt(b);w.wrapS=w.wrapT=vi,w.repeat.set(3,3);let S=(M,_={})=>new Wt({color:M,roughness:.7,..._}),R={whiteFur:S("#eeede1",{map:w,bumpMap:w,bumpScale:.035,roughness:1}),blackFur:S("#181f22",{bumpMap:w,bumpScale:.02,roughness:.95}),silver:S("#bbc9c9",{metalness:.94,roughness:.23}),red:S("#a7313e",{metalness:.55,roughness:.32}),ivory:new _i({color:"#d6e3dc",metalness:.32,roughness:.24,clearcoat:1,clearcoatRoughness:.15}),teal:S("#337e75",{metalness:.38,roughness:.3}),rubber:S("#121b21",{roughness:.87,bumpMap:w,bumpScale:.008}),leather:S("#303533",{roughness:.8,bumpMap:w,bumpScale:.01}),steel:S("#546775",{metalness:.82,roughness:.38}),copper:S("#b29360",{metalness:.78,roughness:.36}),alien:S("#a6bfa1",{roughness:.54}),eye:new _i({color:"#070e14",roughness:.08,clearcoat:1}),suit:S("#416075",{roughness:.86,bumpMap:w,bumpScale:.008}),glow:S("#e9f7df",{emissive:"#d5ffe4",emissiveIntensity:2.8,roughness:.1}),blueGlow:S("#9ce4e5",{emissive:"#63dbe1",emissiveIntensity:2.2}),tail:S("#c33332",{emissive:"#e84221",emissiveIntensity:1.5}),wood:S("#978463",{roughness:.87,bumpMap:w,bumpScale:.025}),bark:S("#b9b3a0",{map:l,roughness:1}),leaves:[S("#688253"),S("#4d714f"),S("#8d995b"),S("#3d6450")],concrete:S("#adb2a8",{map:g,normalMap:x,normalScale:new de(.55,.55),roughness:.97}),darkConcrete:S("#737e80",{map:g,normalMap:x,roughness:.95}),foliage:S("#d4dcaa",{map:h,alphaMap:f,alphaTest:.48,normalMap:d,normalScale:new de(.3,.3),side:Bt,roughness:.82}),road:S("#a4b0b0",{map:i,normalMap:r,normalScale:new de(.45,.45),roughnessMap:o,roughness:.84}),grass:S("#c3c89b",{map:a,roughness:1}),yellow:S("#dab777",{roughness:.74}),orange:S("#c56b42",{roughness:.76}),paint:S("#d8d8ba",{roughness:.95}),glass:new _i({color:"#a4c5cc",metalness:.1,roughness:.1,transmission:.35,transparent:!0,opacity:.2,depthWrite:!1})},C={value:0};return R.foliage.onBeforeCompile=M=>{M.uniforms.windTime=C,M.vertexShader=`uniform float windTime;
${M.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
vec3 anchor=instanceMatrix[3].xyz;transformed.x+=sin(windTime*1.4+anchor.x*.8+anchor.z)*.12*uv.y;transformed.z+=cos(windTime+anchor.y)*.07;
#endif`)},{mats:R,environment:u,water:c,wind:C,maps:{road:i,normal:r,rough:o,grass:a,bark:l,battleRoad:m,battleNormal:p,battleRough:v}}}var Ia=new I;function ci(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Ia.copy(e),Ia[n]=0,Ia.normalize();let c=.5*o/(o+a),u=1-Ia.angleTo(s)/l;return Math.sign(Ia[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Is=class s extends Xt{constructor(e=1,t=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new I,c=new I,u=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,x=new I,m=.5/o;for(let p=0,v=0;p<h.length;p+=3,v+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*r,h[p+1]=u.y*Math.sign(l.y)+c.y*r,h[p+2]=u.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[v+0]=ci(x,c,"z","y",r,n),d[v+1]=1-ci(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),d[v+0]=1-ci(x,c,"z","y",r,n),d[v+1]=1-ci(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),d[v+0]=1-ci(x,c,"x","z",r,e),d[v+1]=ci(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[v+0]=1-ci(x,c,"x","z",r,e),d[v+1]=1-ci(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[v+0]=1-ci(x,c,"x","y",r,e),d[v+1]=1-ci(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),d[v+0]=ci(x,c,"x","y",r,e),d[v+1]=1-ci(x,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};var vd=new Map;function Zt(s){if(vd.has(s))return vd.get(s);let e=512,t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=n.createImageData(e,e),r=s==="cloth"?7451:s==="metal"?1319:5793,o=()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296);for(let h=0;h<e;h++)for(let f=0;f<e;f++){let d=(h*e+f)*4,g=o()*26,x=Math.sin(f*.044+Math.cos(h*.031)*2)*Math.sin(h*.055)*12,m=s==="cloth"?((f%4<2?1:-1)+(h%4<2?1:-1))*12:0,p=175+g+x+m;i.data[d]=i.data[d+1]=i.data[d+2]=p,i.data[d+3]=255}if(n.putImageData(i,0,0),s!=="cloth"){for(let h=0;h<370;h++){let f=o()*e,d=o()*e;n.strokeStyle=h%3?"#e7e6df65":"#20272265",n.lineWidth=.4+o()*1.4,n.beginPath(),n.moveTo(f,d),n.lineTo(f+2+o()*24,d+o()*3),n.stroke()}if(s==="paint")for(let h=0;h<130;h++){let f=o()*e,d=o()*e,g=1+o()*7;n.fillStyle=h%3?"#725649aa":"#3c4948",n.beginPath(),n.ellipse(f,d,g,g*.45,o()*6,0,Math.PI*2),n.fill()}}let a=new Gt(t);a.colorSpace=Mt;let l=new Gt(t),c=new Gt(t);for(let h of[a,l,c])h.wrapS=h.wrapT=vi,h.anisotropy=8,h.userData.shared=!0;let u={map:a,bumpMap:l,roughnessMap:c};return vd.set(s,u),u}function Ng(s,e){let t=document.createElement("canvas");t.width=t.height=2048;let n=t.getContext("2d"),i=91637,r=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),o=c=>(c/s+.5)*2048,a=c=>(c/e+.5)*2048;for(let c=0;c<140;c++){let u=r()*2048,h=r()*2048,f=25+r()*95;n.fillStyle=c%3?"#1c211c0c":"#77694f09";for(let d=0;d<5;d++){n.beginPath();for(let g=0;g<18;g++){let x=g/18*Math.PI*2,m=f*(.75+Math.sin(x*3+c)*.23)*(1-d*.1),p=u+Math.cos(x)*m*1.6,v=h+Math.sin(x)*m*.5;g?n.lineTo(p,v):n.moveTo(p,v)}n.closePath(),n.fill()}}for(let c of[-s*.24,s*.3])for(let u of[-.65,.65]){n.save(),n.translate(o(c+u),0),n.rotate(c>0?-.13:.045),n.fillStyle="#121d162a",n.fillRect(-7,-60,14,2180);for(let h=0;h<2180;h+=10)n.fillStyle="#111b1738",n.fillRect(-9,h,18,4);n.restore()}for(let c=0;c<7e3;c++){let u=r()*2048,h=r()*2048;n.fillStyle=c%2?"#d0cbb64a":"#18241c40",n.fillRect(u,h,1+r()*2,1+r()*2)}for(let[c,u]of[[-s*.29,-e*.23],[s*.22,e*.2]]){let h=o(c),f=a(u),d=54,g=n.createRadialGradient(h,f,7,h,f,d);g.addColorStop(0,"#101714aa"),g.addColorStop(.48,"#21271e77"),g.addColorStop(.66,"#443d2c44"),g.addColorStop(1,"#22291f00"),n.fillStyle=g,n.fillRect(h-d,f-d,d*2,d*2);for(let x=0;x<11;x++){let m=r()*Math.PI*2;n.strokeStyle="#151d1750",n.lineWidth=1+r()*2,n.beginPath(),n.moveTo(h+Math.cos(m)*23,f+Math.sin(m)*23),n.lineTo(h+Math.cos(m+.08)*64,f+Math.sin(m+.08)*64),n.lineTo(h+Math.cos(m)*83,f+Math.sin(m)*83),n.stroke()}}let l=new Gt(t);return l.colorSpace=Mt,l.anisotropy=8,l}function Mu(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new wt,c=0;for(let u=0;u<s.length;++u){let h=s[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Bg(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let g=Bg(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Bg(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Vt(o,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}var yd=new Map;function lo(s){let e=[];s.traverse(t=>{t.isGroup&&e.push(t)});for(let t of e){let n=new Map;for(let i of t.children){if(!i.isMesh||i.material.transparent||i.userData.animated)continue;let r=i.material,o=r.metalness>=.5?.78:.06,a=r.metalness>=.5?.4:r.isMeshPhysicalMaterial?r.roughness>=.5?.65:.4:.88,l=[r.type,o,a,r.clearcoat,r.clearcoatRoughness,r.map?.uuid,r.normalMap?.uuid,r.bumpMap?.uuid,r.roughnessMap?.uuid,r.bumpScale,r.side].join("/");if(!yd.has(l)){let c=r.clone();c.color.set("#ffffff"),c.vertexColors=!0,c.metalness=o,c.roughness=a,c.userData.shared=!0,yd.set(l,c)}n.has(l)||n.set(l,[]),n.get(l).push(i)}for(let[i,r]of n){let o=r.map(c=>{c.updateMatrix();let u=c.geometry.clone().applyMatrix4(c.matrix),h=c.material.color,f=new Float32Array(u.attributes.position.count*3);for(let d=0;d<f.length;d+=3)f[d]=h.r,f[d+1]=h.g,f[d+2]=h.b;return u.setAttribute("color",new Vt(f,3)),u.index||u.setIndex(Array.from({length:u.attributes.position.count},(d,g)=>g)),u}),a=Mu(o,!1);if(o.forEach(c=>c.dispose()),!a)continue;a.computeBoundingSphere();let l=new it(a,yd.get(i));l.castShadow=l.receiveShadow=!0,t.add(l);for(let c of r)c.geometry.dispose(),c.removeFromParent()}}}function La(s){s.traverse(e=>{e.geometry&&(e.geometry.userData.shared=!0),e.material&&(e.material.userData.shared=!0)})}function Fg(s="emperor"){let e=s==="emperor",t=new Ge,n=new Ge,i=new Ge,r=[],o=[];t.add(n),n.add(i),i.position.set(0,1.94,.02);let a=(F,D={})=>new Wt({color:F,roughness:.77,...D}),l=document.createElement("canvas");l.width=l.height=256;let c=l.getContext("2d");c.fillStyle=e?"#eeeade":"#684847",c.fillRect(0,0,256,256),c.strokeStyle=e?"#cdc4ac":"#99765b",c.lineWidth=1;for(let F=0;F<=256;F+=32)for(let D=0;D<=256;D+=32){let ee=D+(F%64?16:0);for(let V=0;V<6;V++){let te=V*Math.PI/3;c.beginPath(),c.ellipse(ee+Math.cos(te)*5,F+Math.sin(te)*5,5,2,te,0,Math.PI*2),c.stroke()}c.beginPath(),c.arc(ee,F,2.2,0,Math.PI*2),c.stroke()}let u=new Gt(l);u.colorSpace=Mt,u.wrapS=u.wrapT=vi,u.repeat.set(2,2);let h=a(e?"#eee9df":"#bd9b92",{...Zt("cloth"),map:u,bumpScale:.015}),f=a(e?"#c8c5b7":"#353f42",{...Zt("cloth"),bumpScale:.015}),d=a("#b92d35",{...Zt("cloth"),bumpScale:.016}),g=a("#ead6b5"),x=a("#202522"),m=a("#b19852",{metalness:.72,roughness:.35}),p=a("#cfd9d5",{metalness:.9,roughness:.24});function v(F,D,ee,V=[0,0,0]){let te=new it(D,ee);return te.position.set(...V),te.castShadow=te.receiveShadow=!0,te.userData.ownedMaterial=!0,F.add(te),te}function b(F,D,ee,V){let te=v(F,new ai(1,28,18),D,V);return te.scale.set(...ee),te}function y(F,D,ee,V,te=.035){return v(F,Math.min(...ee)<.035?new Xt(...ee):new Is(...ee,1,te),D,V)}function w(F,D,ee,V=.014){return v(F,new Mi(new oi(ee.map(te=>new I(...te))),20,V,6,!1),D)}b(n,h,[.62,.77,.38],[0,1.13,0]);for(let F of[-1,1]){let D=new Ge;D.position.set(F*.25,.77,0),t.add(D),o.push(D),y(D,d,[.51,.65,.47],[0,-.3,0],.09),y(D,x,[.34,.16,.53],[0,-.69,.09],.05);for(let G=0;G<3;G++)y(D,f,[.013,.46,.015],[-.14+G*.14,-.31,.24],.004);let ee=b(n,h,[.45,.51,.33],[F*.39,.64,.06]);ee.rotation.z=F*.16;let V=y(n,f,[.105,.83,.06],[F*.17,1.36,.354]);V.rotation.z=F*.39;let te=y(n,h,[.07,.84,.075],[F*.19,1.37,.39]);te.rotation.z=F*.39;let q=new Ge;q.position.set(F*.55,1.57,0),n.add(q),r.push(q),b(q,h,[.47,.3,.37],[F*.28,-.02,.04]),y(q,h,[.65,.76,.65],[F*.47,-.33,.02],.12),y(q,d,[.045,.39,.43],[F*.8,-.13,.09],.025),b(q,g,[.13,.13,.14],[F*.79,-.1,.12]);for(let G=0;G<3;G++)w(q,f,[[F*.16,-.13-G*.1,.37],[F*.43,-.19-G*.12,.36],[F*.69,-.1-G*.15,.35]],.008)}y(n,d,[1.04,.14,.8],[0,.95,.035]),y(n,m,[.15,.14,.065],[0,.95,.456]),w(n,m,[[-.5,.96,.4],[0,.9,.465],[.5,.96,.4]],.014),b(i,g,[.405,.47,.343],[0,0,.03]),b(i,x,[.41,.28,.33],[0,.25,-.045]),b(i,g,[.38,.43,.21],[0,-.01,.22]);for(let F of[-1,1])b(i,g,[.065,.1,.05],[F*.395,-.02,.04]),w(i,x,[[F*.06,.08,.421],[F*.16,.095,.418],[F*.26,.065,.38]],.012),w(i,x,[[F*.065,.205,.38],[F*.15,.224,.395],[F*.255,.19,.36]],.014),b(i,x,[.024,.021,.014],[F*.15,.073,.428]);b(i,g,[.055,.1,.055],[0,-.05,.428]),w(i,d,[[-.085,-.228,.386],[0,-.236,.404],[.085,-.228,.386]],.009);let S;if(e){b(i,x,[.4,.095,.34],[0,.46,-.03]);let F=b(i,x,[.135,.32,.15],[0,.73,-.105]);F.rotation.z=-.13,b(i,x,[.22,.055,.12],[-.2,.5,.08]);let D=new en;D.moveTo(0,.56),D.bezierCurveTo(.18,.93,.95,1.29,1.55,1.21),D.lineTo(1.62,1.07),D.bezierCurveTo(.95,1.18,.38,.94,.035,.49),D.closePath(),S=v(i,new Bn(D,{depth:.035,bevelEnabled:!0,bevelSize:.009,bevelThickness:.007,bevelSegments:1}),x,[-.018,0,-.08]),S.rotation.y=.18,S.userData.animated=!0}else{let F=a("#3b494c",{...Zt("metal"),metalness:.7});b(i,F,[.48,.3,.43],[0,.35,-.02]),y(i,m,[.99,.065,.15],[0,.36,.34]);for(let D of[-1,1]){w(i,m,[[D*.12,.51,.26],[D*.46,.7,.2],[D*.54,1.01,.06]],.047);for(let ee=0;ee<3;ee++)y(i,F,[.23,.14,.57],[D*.43,.18-ee*.14,-.07]);for(let ee=0;ee<3;ee++)y(r[D===-1?0:1],F,[.64,.16,.72],[D*.29,.13-ee*.17,.03])}for(let D=0;D<4;D++){y(n,F,[1.05,.15,.1],[0,1.56-D*.17,.37]);for(let ee of[-1,1])y(n,m,[.035,.15,.025],[ee*.3,1.56-D*.17,.436])}}let R=new Ge;r[1].add(R),R.position.set(.81,-.09,.17);let C=v(R,new kt(.048,.048,.33,12),x,[0,0,.14]);C.rotation.x=Math.PI/2;for(let F=0;F<5;F++)y(R,m,[.09,.016,.014],[0,.045,.025+F*.054],.003);let M=v(R,new kt(.14,.14,.035,16),m,[0,0,.325]);M.rotation.x=Math.PI/2;let _=new en;_.moveTo(-.043,0),_.lineTo(-.015,1.37),_.quadraticCurveTo(.025,1.58,.12,1.69),_.lineTo(.062,.05),_.closePath();let T=v(R,new Bn(_,{depth:.022,bevelEnabled:!0,bevelSize:.006,bevelThickness:.005,bevelSegments:1}),p,[0,0,.34]);T.rotation.x=Math.PI/2;let z;e&&(z=new Ge,z.position.set(-.82,-.08,.22),r[0].add(z),w(z,m,[[0,-1.1,.2],[0,-.7,-.22],[0,.1,-.34],[0,.8,-.18],[0,1.3,.2]],.035),w(z,f,[[0,-1.1,.2],[0,.1,.28],[0,1.3,.2]],.009),y(z,x,[.09,.26,.1],[0,.08,-.3]));let L=e?1.4:1.3;t.scale.setScalar(L),lo(t);function O(F,D,ee=0,V=""){let te=Math.sin(F*8),q=Math.sin(ee*Math.PI);o[0].rotation.x=te*.42*D,o[1].rotation.x=-te*.42*D,n.position.y=Math.abs(te)*.036*D,n.rotation.x=V==="stagger"?-.18:D*.055,n.rotation.y=q*.35,i.rotation.y=-.1-n.rotation.y*.5,r[0].rotation.set(Math.sin(F*3)*.035,0,.13+te*.05*D),r[1].rotation.set(V==="windup"?-1.1:-.12-q*.65,-.25+q*1.6,-.16),S&&(S.rotation.z=Math.sin(F*3.5)*.03+D*.045),z&&(z.visible=V==="bow",R.visible=!z.visible,z.visible&&(r[0].rotation.set(-.65,-.75,-.25),r[1].rotation.set(-.72,.85,.2),n.rotation.y=-.45))}return O(0,0),{group:t,animate:O,scale:L,radius:.72,hitRadius:1.03,barHeight:4.85}}var Sd=Object.freeze({raider:"倭寇",heavy:"武士",boss:"鬼子头目",emperor:"鬼子天皇"}),fn=s=>s==="boss"||s==="emperor",Ba=[{id:"captain",name:"蓝盾队长",title:"先锋",detail:"生命 120 · 守护护盾",health:120,speed:4.2,skill:"守护护盾",color:"#19b6e0"},{id:"armor",name:"赤焰战甲",title:"火力",detail:"生命 100 · 超载火力",health:100,speed:4.1,skill:"超载火力",color:"#e74748"},{id:"ranger",name:"星际游侠",title:"机动",detail:"生命 90 · 时间减速",health:90,speed:4.9,skill:"时间减速",color:"#8de094"},{id:"panda",name:"熊猫卫士",title:"守卫",detail:"生命 140 · 震荡冲击",health:140,speed:3.9,skill:"震荡冲击",color:"#f2df9c"}],Jn=[{id:"pistol",name:"制式手枪",detail:"精准 · 单发",damage:22,interval:.28,range:24,pellets:1,spread:0,color:"#ffe3a0"},{id:"rifle",name:"突击步枪",detail:"全自动 · 连射",damage:19,interval:.14,range:25,pellets:1,spread:.015,color:"#93eadc",ammoPickup:72,maxAmmo:216},{id:"scatter",name:"双管霰弹枪",detail:"近战 · 五发散射",damage:18,interval:.67,range:11,pellets:5,spread:.3,color:"#ffaa7d",ammoPickup:14,maxAmmo:42},{id:"rail",name:"重型狙击枪",detail:"重击 · 穿透",damage:84,interval:.87,range:31,pellets:1,spread:0,pierce:3,color:"#a8d6ff",ammoPickup:10,maxAmmo:30}],uo=new Map;function on(s,e=.25,t=.32){let n=`${s}-${e}-${t}`;return uo.has(n)||uo.set(n,new _i({color:s,metalness:e,roughness:t,clearcoat:e>=.25?.65:.12,clearcoatRoughness:.2})),uo.get(n)}function wu(s){let e=`fabric-${s}`;return uo.has(e)||uo.set(e,new Wt({color:s,...Zt("cloth"),roughness:.88,bumpScale:.008})),uo.get(e)}var Ai=on("#faf6eb",.1),Cn=on("#121b25",.12),Ug=on("#f6c3a4",0,.52),zi=on("#80969e",.8),Ls=on("#bc3049",.45),Da=on("#dbad48",.65),X_=on("#081225",.2,.12),bd=on("#087aaf",.35),Y_=wu("#15518a");function qt(s,e,t,n=0,i=0,r=0){let o=new it(e,t);return o.position.set(n,i,r),o.castShadow=o.receiveShadow=!0,s.add(o),o}function lt(s,e,t,n,i=28){let r=qt(s,new ai(1,e.isMeshPhysicalMaterial?i:Math.min(20,i),e.isMeshPhysicalMaterial?18:12),e,...n);return r.scale.set(...t),r}function We(s,e,t,n,i=.06){return qt(s,Math.min(...t)<.035?new Xt(...t):new Is(...t,1,i),e,...n)}function co(s,e,t,n,i){let r=qt(s,new kt(t,t,n,14),e,...i);return r.rotation.x=Math.PI/2,r}function Og(s,e,t,n,i,r){let o=new en;for(let a=0;a<10;a++){let l=Math.PI/2+a*Math.PI/5,c=a%2?t*.44:t,u=Math.cos(l)*c,h=Math.sin(l)*c;a?o.lineTo(u,h):o.moveTo(u,h)}return o.closePath(),qt(s,new Bn(o,{depth:.015,bevelEnabled:!1}),e,n,i,r)}function j_(s,e,t,n,i,r,o){let a=document.createElement("canvas");a.width=a.height=128;let l=a.getContext("2d");l.fillStyle="#fff7ef",l.font="900 105px Arial",l.textAlign="center",l.textBaseline="middle",l.fillText(s,64,70);let c=new Gt(a);c.colorSpace=Mt;let u=new Rt({map:c,transparent:!0,depthWrite:!1}),h=qt(e,new yt(r,o),u,t,n,i);return h.userData.ownedMaterial=!0,h}function _u(s,e,t){for(let n of[-1,1]){let i=n*.29;e&&lt(s,e,[.285,.292,.078],[i,.05,.552]),lt(s,Ai,[.235,.249,.09],[i,.045,.613]),lt(s,X_,[.146,.171,.053],[i-n*.025,.044,.69]),lt(s,Ai,[.044,.041,.016],[i-.036,.116,.739],12);let r=We(s,t==="armor"?Da:e||Cn,[.4,.052,.07],[i,.239,.671],.019);r.rotation.z=-n*.24}}function Ed(s){let e=new Ge,t=new Ge,n=new Ge,i=new Ge,r=[];e.add(t),t.add(n,i),n.position.y=1.56;let o=s==="captain",a=s==="armor",l=s==="panda",c=o?Y_:a?Ls:wu(l?"#222a2a":"#4c8470"),u=o?bd:a?Ls:l?Ai:on("#cad9c6",.3),h=o||a?Ls:Cn;lt(t,c,[.34,.42,.25],[0,.69,0]),We(t,l?Ai:u,[.56,.42,.2],[0,.82,.2],.1),We(t,Cn,[.61,.12,.46],[0,.44,0],.04),We(t,Da,[.13,.13,.04],[0,.44,.255],.02);for(let p of[-1,1])We(t,wu("#46524c"),[.14,.2,.11],[p*.25,.46,.25],.025),We(t,zi,[.06,.035,.02],[p*.25,.49,.313],.006),We(t,c,[.045,.31,.025],[p*.205,.82,.31],.012);for(let p of[-1,1]){let v=new Ge;v.position.set(p*.19,.43,0),e.add(v),r.push(v),lt(v,c,[.14,.22,.145],[0,-.13,0]),We(v,h,[.29,.24,.36],[0,-.32,.07],.085),lt(i,c,[.15,.21,.145],[p*.36,.91,.1]);let b=We(i,c,[.23,.21,.31],[p*.37,.78,.27],.09);b.rotation.x=-.3,lt(i,h,[.135,.135,.14],[p*.32,.78,.44])}if(lt(n,u,[.69,.68,.625],[0,0,0],40),o){lt(n,Ug,[.51,.265,.36],[0,-.36,.31]),_u(n,bd,s),j_("A",n,0,.43,.555,.3,.34);for(let v of[-1,1]){lt(n,zi,[.072,.19,.2],[v*.635,-.04,-.02]);let b=We(n,Ai,[.045,.27,.1],[v*.66,.2,-.02],.015);b.rotation.z=-v*.4}Og(t,Ai,.17,0,.85,.317);for(let v of[-.16,0,.16])We(t,Ai,[.075,.2,.03],[v,.6,.251],.01);let p=new Ge;p.position.set(-.12,.83,-.36),p.rotation.y=Math.PI,t.add(p);for(let[v,b,y]of[[.48,Ls,0],[.39,zi,.025],[.31,Ls,.05],[.23,bd,.08]]){let w=qt(p,new kt(v,v,.045,40),b,0,0,y);w.rotation.x=Math.PI/2}Og(p,Ai,.19,0,0,.12)}else if(a)lt(n,Da,[.574,.55,.15],[0,-.035,.49]),_u(n,Da,s),We(n,Ls,[.2,.27,.08],[0,.4,.567],.025),We(n,Cn,[.26,.035,.035],[0,-.4,.625],.01),lt(t,Ai,[.11,.11,.04],[0,.84,.32]);else if(l){for(let p of[-1,1])lt(n,Cn,[.205,.21,.15],[p*.46,.52,-.03]);_u(n,Cn,s),lt(n,Cn,[.11,.07,.06],[0,-.24,.624]),lt(n,Ai,[.23,.12,.09],[0,-.36,.559])}else{lt(n,on("#abd2ac",0,.38),[.55,.49,.16],[0,-.03,.52]),_u(n,on("#447569",.2),s);for(let p of[-1,1])lt(n,zi,[.08,.2,.22],[p*.625,-.01,0]);We(n,Ls,[.095,.22,.06],[0,.44,.55],.023),We(t,Da,[.23,.09,.03],[0,.84,.322],.02)}!a&&!l&&(lt(n,Ug,[.065,.055,.06],[0,-.24,.651]),We(n,Ls,[.11,.032,.023],[0,-.405,.57],.012));let f=new Ge;f.position.set(.31,.8,.4),i.add(f);let d=new Ct;f.add(d),lo(e);let g;function x(p){g&&Kt(g),g=Su(p),f.add(g),d.position.set(0,.032,p==="rail"?1.16:p==="rifle"?.96:.78)}x("pistol");function m(p,v,b=0,y=0){let w=Math.sin(p*13)*v;r[0].rotation.x=w*.75,r[1].rotation.x=-w*.75,t.position.y=Math.abs(w)*.07+Math.sin(p*2.3)*.012*(1-v),t.rotation.x=v*.045+b*.018,t.rotation.z=w*.035,n.rotation.z=w*-.025,n.rotation.x=-b*.025,f.position.z=.4-b*.1,f.rotation.x=-b*.12,i.rotation.z=Math.sin(p*14)*y*.12}return{group:e,animate:m,equip:x,muzzle:d,head:n}}var Md=new Map;function Su(s){if(Md.has(s))return Md.get(s).clone(!0);let e=new Ge,t=s==="rifle",n=s==="scatter",i=s==="rail",r=t?on("#687e62",.4):n?on("#8d503c",.25):i?on("#638b9a",.4):zi;We(e,r,[.24,.22,.59],[0,.02,.24],.06),We(e,Cn,[.17,.26,.2],[0,-.19,.08],.035).rotation.x=-.22,We(e,Cn,[.19,.1,.3],[0,.17,.19],.025);let o=i?.66:t?.46:.28;for(let l of n?[-.077,.077]:[0])co(e,zi,.065,o,[l,.032,.62+o/2-.13]),co(e,Cn,.041,.014,[l,.032,.625+o-.13]);(t||i)&&(We(e,r,[.22,.21,.27],[0,-.01,-.18],.05),We(e,Cn,[.135,.28,.15],[0,-.22,.3],.035).rotation.x=.12),i&&(co(e,Cn,.09,.36,[0,.285,.26]),co(e,on("#78e3f1",.1),.062,.013,[0,.285,.446])),We(e,on(Jn.find(l=>l.id===s).color,.3),[.247,.035,.21],[0,.05,.4],.012);for(let l of[-1,1]){We(e,Cn,[.015,.1,.25],[l*.124,.015,.24],.004);for(let c=0;c<4;c++)We(e,zi,[.012,.025,.016],[l*.135,.052,.16+c*.047],.003)}We(e,zi,[.035,.035,.07],[0,.18,.45],.006);let a=qt(e,new hn(.09,.012,4,12,Math.PI),Cn,0,-.13,.245);return a.rotation.y=Math.PI/2,lo(e),La(e),Md.set(s,e),e.clone(!0)}var _d=new Map;function Ti(s,e="cloth",t=0,n=.9){let i=`${s}-${e}-${t}-${n}`;return _d.has(i)||_d.set(i,new Wt({color:s,...Zt(e),metalness:t,roughness:n,bumpScale:e==="cloth"?.013:.006})),_d.get(i)}var wd=new Map,Na=new Map;function ho(s){s.group.removeFromParent(),s.group.rotation.set(0,0,0),s.group.scale.setScalar(s.scale),Na.has(s.type)||Na.set(s.type,[]),Na.get(s.type).push(s)}function Td(s){if(Na.get(s)?.length)return Na.get(s).pop();if(fn(s))return{...Fg(s),type:s};if(wd.has(s))return zg(s);let e=new Ge,t=new Ge,n=new Ge,i=[],r=[],o=new Ge,a=new Ge;e.add(t),t.add(n,o,a),n.position.set(0,1.64,.025);let l=s!=="raider",c=Ti(s==="raider"?"#7b5550":"#613b39"),u=Ti(s==="raider"?"#393e42":"#2a3034"),h=Ti("#414a50","metal",.62,.59),f=Ti("#a08b57","metal",.66,.45),d=Ti("#b9a48b"),g=Ti("#c7a38b","cloth",0,.86),x=Ti("#242322","cloth",0,.98),m=Ti("#c4cbd0","metal",.92,.29),p=Ti("#363b34"),v=Ti("#d1bf96");lt(t,c,[.31,.42,.215],[0,1.02,0]),We(t,v,[.62,.12,.45],[0,.8,.015],.025),We(t,p,[.19,.12,.09],[.03,.8,.262],.026);let b=We(t,d,[.068,.54,.032],[-.07,1.12,.206],.009);b.rotation.z=-.42;for(let M=0;M<4;M++){let _=We(t,u,[.025,.22,.025],[-.2+M*.12,1,.203],.007);_.rotation.z=(M-1.5)*.14}lt(n,g,[.305,.344,.275],[0,0,0],32),lt(n,g,[.22,.18,.2],[0,-.2,.095]);for(let M of[-1,1]){lt(n,g,[.052,.084,.044],[M*.303,-.016,0],16),lt(n,x,[.097,.052,.018],[M*.126,.039,.249],20),lt(n,Ai,[.075,.033,.015],[M*.126,.035,.265],20),lt(n,x,[.032,.032,.013],[M*.113,.033,.278],16),We(n,x,[.18,.029,.03],[M*.13,.105,.255],.007).rotation.z=M*.22;let _=new Ge,T=new Ge;_.position.set(M*.18,.76,0),T.position.y=-.31,_.add(T),e.add(_),i.push(_),r.push(T),lt(_,c,[.175,.265,.155],[0,-.13,0]);for(let z of[-.07,.07])We(_,u,[.019,.34,.028],[z,-.15,.142],.006);lt(T,u,[.1,.22,.105],[0,-.17,0]);for(let z=0;z<4;z++){let L=qt(T,new kt(.108,.108,.025,12),v,0,-.1-z*.055,0);L.scale.z=.95}We(T,p,[.23,.12,.32],[0,-.385,.07],.042),We(T,d,[.22,.025,.11],[0,-.324,.1],.008)}if(lt(n,g,[.042,.09,.055],[0,-.065,.268]),We(n,u,[.11,.018,.018],[0,-.204,.267],.005),We(n,d,[.08,.012,.014],[.175,-.07,.242],.003).rotation.z=-.65,l){let M=qt(n,new ai(.345,32,18,0,Math.PI*2,0,Math.PI*.57),h,0,.085,-.027);M.scale.y=.83;for(let T=0;T<8;T++){let z=T/8*Math.PI*2,L=new oi([new I(0,.362,-.026),new I(Math.sin(z)*.23,.255,-.026+Math.cos(z)*.23),new I(Math.sin(z)*.342,.07,-.026+Math.cos(z)*.342)]);qt(n,new Mi(L,12,.009,4,!1),f)}We(n,h,[.58,.07,.17],[0,.12,.284],.015);for(let T of[-1,1]){for(let L=0;L<4;L++)We(n,h,[.09,.068,.38-L*.024],[T*.35,.015-L*.071,-.04],.016),lt(n,f,[.016,.015,.012],[T*.38,.015-L*.071,.1],10);let z=qt(n,new Nn(.045,.34,12),f,T*.22,.4,.2);z.rotation.z=-T*.52;for(let L=0;L<4;L++)We(t,h,[.24,.085,.23],[T*.38,1.3-L*.09,.035],.013),We(t,d,[.015,.1,.018],[T*.4,1.29-L*.09,.159],.004),We(t,h,[.26,.085,.12],[T*.19,.76-L*.085,.21],.012)}lt(n,h,[.22,.14,.066],[0,-.19,.244]);let _=qt(n,new hn(.24,.034,5,18,Math.PI*1.2),f,0,.38,.31);_.rotation.z=-.1*Math.PI;for(let T of[-1,1])We(t,f,[.021,.42,.023],[T*.29,1.09,.27],.004),We(t,c,[.11,.6,.018],[T*.2,.59,-.23],.007);for(let T=0;T<5;T++){We(t,h,[.56,.082,.135],[0,1.32-T*.09,.208],.014);for(let z of[-.2,-.085,.085,.2])We(t,d,[.014,.08,.02],[z,1.32-T*.09,.281],.004);We(t,f,[.54,.012,.013],[0,1.283-T*.09,.279],.004)}}else{lt(n,x,[.306,.18,.271],[0,.235,-.025]),lt(n,x,[.092,.135,.095],[0,.383,-.092],20),We(n,v,[.58,.072,.14],[0,.177,.215],.02),We(n,g,[.028,.11,.016],[-.18,.001,.258],.004).rotation.z=-.4;for(let T of[-1,1]){let z=We(t,c,[.23,.25,.065],[T*.19,.68,.16],.025);z.rotation.z=T*.12}for(let T of[1.2,1.05])We(t,v,[.035,.13,.022],[.235,T,.16],.009).rotation.z=-.3;let M=Ti("#9e956d");qt(n,new Nn(.45,.23,24,1,!0),M,0,.49,-.035);let _=qt(n,new hn(.445,.012,4,24),d,0,.375,-.035);_.rotation.x=Math.PI/2;for(let T=0;T<12;T++){let z=T*Math.PI/6,L=new I(Math.sin(z)*.44,-.225,Math.cos(z)*.44);qt(n,new kt(.004,.004,L.length(),4),d,L.x*.5,.61+L.y*.5,-.035+L.z*.5).quaternion.setFromUnitVectors(new I(0,1,0),L.normalize())}}o.position.set(.35,1.22,.04),a.position.set(-.35,1.22,.04);for(let M of[o,a])lt(M,c,[.14,.245,.16],[0,-.12,.015]),lt(M,g,[.082,.17,.085],[0,-.32,.074]),We(M,l?h:v,[.16,.2,.1],[0,-.33,.127],.022),lt(M,g,[.088,.103,.09],[0,-.46,.115],20);co(o,p,.037,.27,[0,-.43,.24]);for(let M=0;M<5;M++)We(o,d,[.072,.013,.014],[0,-.397,.16+M*.045],.004).rotation.y=M%2?.65:-.65;let y=qt(o,new kt(.087,.087,.027,12),f,0,-.43,.388);y.rotation.x=Math.PI/2;let w=new en;w.moveTo(-.029,0),w.lineTo(-.012,.81),w.quadraticCurveTo(.065,1,.079,1.02),w.lineTo(.054,.05),w.closePath();let S=qt(o,new Bn(w,{depth:.018,bevelEnabled:!0,bevelSize:.004,bevelThickness:.003,bevelSegments:1}),m,0,-.426,.4);S.rotation.x=Math.PI/2;let R=co(t,p,.036,.89,[-.34,.75,-.12]);R.rotation.x=1.28,R.rotation.z=.25;for(let M of[.59,.85])We(t,v,[.12,.046,.085],[-.31,M,-.15],.01);for(let[M,_]of Object.entries({head:n,torso:t,swordArm:o,freeArm:a,leg0:i[0],leg1:i[1],knee0:r[0],knee1:r[1]}))_.name=M;lo(e),La(e);let C=s==="heavy"?1.14:.96;return e.scale.setScalar(C),wd.set(s,{group:e,scale:C}),zg(s)}function zg(s){let e=wd.get(s),t=e.group.clone(!0),n=e.scale,[i,r,o,a,l,c,u,h]=["head","torso","swordArm","freeArm","leg0","leg1","knee0","knee1"].map(x=>t.getObjectByName(x)),f=[l,c],d=[u,h];function g(x,m,p=0,v=""){let b=Math.sin(x*10),y=Math.sin(p*Math.PI);f[0].rotation.x=b*.58*m,f[1].rotation.x=-b*.58*m,d[0].rotation.x=Math.max(0,-b)*.55*m,d[1].rotation.x=Math.max(0,b)*.55*m,r.position.y=Math.abs(b)*.045*m,r.rotation.x=v==="stagger"?-.18:m*.085,r.rotation.y=b*.045*m,o.rotation.set(v==="windup"?-1.45:-.6-y*.65,-.16+y*2.1,-.16),a.rotation.x=-b*.46*m,a.rotation.z=.12,i.rotation.y=-r.rotation.y*.7}return g(0,0),{group:t,animate:g,scale:n,type:s}}function Ad(){let s=new Ge,e=on("#526346",.4,.64),t=on("#303b30",.55,.45);lt(s,e,[.18,.235,.18],[0,0,0],20);for(let i of[-.12,0,.12]){let r=qt(s,new hn(.174,.017,5,20),t,0,i,0);r.rotation.x=Math.PI/2}We(s,zi,[.14,.06,.12],[0,.245,0],.02),We(s,t,[.065,.32,.06],[.145,.14,0],.012).rotation.z=.24;let n=qt(s,new hn(.066,.012,5,16),zi,-.09,.26,0);return n.rotation.y=Math.PI/2,s}function Fa(s){let e=new Ge,t=s==="grenade"?Ad():Su(s);t.rotation.set(-.2,.3,-.4),t.scale.setScalar(1.1),t.position.set(0,.8,-.25),e.add(t),s==="grenade"&&t.scale.setScalar(1.55);let n=s==="grenade"?"#b9e385":Jn.find(c=>c.id===s).color,i=new Rt({color:n,transparent:!0,opacity:.8,depthWrite:!1}),r=qt(e,new hn(.56,.027,6,40),i,0,.04,0);r.rotation.x=Math.PI/2,r.userData.ownedMaterial=!0;let o=We(e,Cn,[1.05,.09,.82],[0,.085,0],.025);o.castShadow=!1;for(let c of[-1,1]){let u=qt(e,new Xt(.1,.012,.46),i,c*.43,.14,0);u.castShadow=!1}let a=new Rt({color:n,transparent:!0,opacity:.055,blending:yn,depthWrite:!1,side:Bt}),l=qt(e,new kt(.06,.52,2.4,12,1,!0),a,0,1.24,0);return l.userData.ownedMaterial=!0,l.castShadow=!1,e.userData.gun=t,e}function Kt(s){s.removeFromParent();let e=new Set,t=new Set;s.traverse(n=>{n.geometry&&!n.geometry.userData.shared&&e.add(n.geometry),n.userData.ownedMaterial&&!n.material.userData.shared&&t.add(n.material)}),e.forEach(n=>n.dispose()),t.forEach(n=>{n.map&&!n.map.userData.shared&&n.map.dispose(),n.dispose()})}var Z_=new I(0,1,0),Cd=new I,Ua=new I;function pt(s,e,t=[0,0,0],n){let i=new it(s,e);return i.position.set(...t),i.castShadow=i.receiveShadow=!0,n&&n.add(i),i}function Me(s,e,t,n,i=0){return pt(new Xt(...t),e,n,s)}function Rd(s,e,t,n,i=24){let r=pt(new ai(1,i,Math.floor(i*.65)),e,n,s);return r.scale.set(...t),r}function dn(s,e,t,n,i,r=t,o=16){return pt(new kt(r,t,n,o),e,i,s)}function K_(s,e,t){Cd.set(...e),Ua.set(...t),s.position.copy(Cd).add(Ua).multiplyScalar(.5),Ua.sub(Cd),s.scale.y=Ua.length(),s.quaternion.setFromUnitVectors(Z_,Ua.normalize())}function mt(s,e,t,n,i,r=10){let o=dn(s,e,t,1,[0,0,0],t,r);return K_(o,n,i),o}function Oa(s,e="",t="#28483e",n="#edf0db"){let i=document.createElement("canvas");i.width=512,i.height=192;let r=i.getContext("2d");r.fillStyle=n,r.fillRect(0,0,512,192),r.fillStyle=t,r.textAlign="center",r.font='600 53px "Microsoft YaHei",sans-serif',r.fillText(s,256,92),e&&(r.font='22px "Microsoft YaHei",sans-serif',r.fillText(e,256,143));let o=new Gt(i);return o.colorSpace=Mt,o}var fo=Object.freeze([{id:"beach",name:"海边登陆",missions:["抢滩先锋","滩头防线","夺取海岸指挥所"],sky:"#a4c7cf",sun:"#fff4dc",ground:"#bfbb98",road:"#b5b29a",map:"#777c67",spawns:[[-36,30],[0,0],[36,-30]]},{id:"jungle",name:"丛林作战",missions:["林间遭遇","穿越伏击圈","清剿密林营地"],sky:"#a7b9a2",sun:"#eaf4cd",ground:"#6f8767",road:"#84907b",map:"#334d3a",spawns:[[-36,30],[0,0],[36,-30]]},{id:"mountain",name:"山地打击",missions:["山口争夺","高地压制","攻克山顶要塞"],sky:"#aebdc6",sun:"#f4f4ed",ground:"#8d999a",road:"#a3aba7",map:"#59676b",spawns:[[-36,30],[0,0],[36,-30]]},{id:"city",name:"城市巷战",missions:["突破外街","十字路口围攻","肃清城市中枢"],sky:"#a3b0b8",sun:"#fff1dc",ground:"#a2adae",road:"#87979d",map:"#505d61",spawns:[[-36,30],[0,0],[36,-30]]},{id:"fuji",name:"富士山下猛攻",missions:["山麓前进","参道鏖战","决胜雪峰防线"],sky:"#b7c9d1",sun:"#fff0eb",ground:"#91a299",road:"#aab1a8",map:"#5c6f6a",spawns:[[0,16],[0,-15],[24,-34]]},{id:"palace",name:"皇宫大决战",missions:["最后的决战"],sky:"#adbfc4",sun:"#ffecd6",ground:"#a8aeaa",road:"#bfc0b4",map:"#626764",spawns:[[0,12]]}]),J_=[8,12,16,17,20,24,25,28,32,33,36,40,41,44,48,40],Eu=Object.freeze(fo.flatMap((s,e)=>s.missions.map((t,n)=>{let i=e*3+n+1;return Object.freeze({level:i,name:t,chapter:s.id,chapterIndex:e,stage:n,spawn:s.spawns[n],boss:s.id==="palace"?"emperor":n===2?"boss":null,total:J_[i-1],maxAlive:Math.min(18,4+i),spawnInterval:Math.max(.48,1.55-i*.065),heavyChance:Math.min(.55,(i-1)*.036),healthScale:1+(i-1)*.12,speedScale:1+(i-1)*.052,bossHealth:s.id==="palace"?6400:1400+e*720})}))),ki=s=>Eu[s-1],fr=s=>fo[ki(s).chapterIndex];function kg(s,{root:e,assets:t,material:n,obstacle:i,ownedMaps:r,fires:o}){let a=1996+["beach","jungle","mountain","city","fuji","palace"].indexOf(s)*617,l=()=>(a=a*1664525+1013904223>>>0,a/4294967296),c=n(s==="fuji"?"#899491":"#a5aea3",{map:t.mats.concrete.map,normalMap:t.mats.concrete.normalMap,vertexColors:!0}),u=n("#aea18c",{map:t.maps.bark,bumpMap:t.maps.bark,bumpScale:.035}),h=["#648764","#819967","#a2af76"].map(q=>n(q,{roughness:.86,side:Bt,vertexColors:!0})),f=n("#b2b9b4",{map:t.mats.concrete.map,normalMap:t.mats.concrete.normalMap}),d=n("#a44740",{...Zt("paint"),roughness:.7}),g=n("#455354",{...Zt("metal"),metalness:.25,roughness:.7}),x=n("#d6b778",{metalness:.6,roughness:.4}),m=n("#313c3b"),p=n("#deded0",{...Zt("cloth"),bumpScale:.008}),v=[],b=[],y=[],w=[],S=0,R,C,M=-1,_=new I(0,0,-21);function T(q,G,K=1.8,ge=K,xe=!0,Y=e){let ue=new Qs(1,2),ce=ue.attributes.position,Re=[];for(let Pe=0;Pe<ce.count;Pe++){let tt=ce.getX(Pe),Ne=ce.getY(Pe),H=ce.getZ(Pe),pe=Math.sin(tt*9+H*11+Ne*5),ae=1+pe*.12;ce.setXYZ(Pe,tt*ae,Ne*ae,H*ae);let he=.72+Ne*.16+pe*.08;Re.push(he,he*1.02,he*.97)}ue.setAttribute("color",new je(Re,3)),ue.computeVertexNormals();let Ae=pt(ue,c,[q,ge*.35,G],Y);return Ae.scale.set(K,ge,K*.75),Ae.rotation.y=l()*6,xe&&i(q,G,K*.87,K*.7,ge*1.35),Ae}function z(q,G,K=1){i(q,G,.43*K,.43*K,5.6*K);let ge=new Ge;ge.position.set(q,0,G),ge.scale.setScalar(K),e.add(ge),mt(ge,u,.19,[0,0,0],[.5,5.4,.15],8);for(let xe=0;xe<12;xe++){let Y=dn(ge,u,.205-xe*.004,.08,[xe/12*.5,.3+xe*.42,xe/12*.15],.19-xe*.004,8);Y.rotation.z=-.09}for(let xe=0;xe<8;xe++){let Y=new Ge;Y.position.set(.5,5.35,.15),Y.rotation.y=xe*Math.PI/4+l()*.2,ge.add(Y);let ue=[],ce=[],Re=[],Ae=[];for(let tt=0;tt<=28;tt++){let Ne=tt/28,H=Math.sin(Ne*Math.PI)*.66*(tt%2?.26:1),pe=Math.sin(Ne*Math.PI)*.68-Ne*.8;ue.push(-H,pe-.1,Ne*3.1-.08,0,pe,Ne*3.1,H,pe-.1,Ne*3.1-.08),Re.push(0,Ne,.5,Ne,1,Ne);let ae=.6+Math.sin(Ne*Math.PI)*.35;if(Ae.push(ae,ae,ae,.86,.92,.7,ae,ae,ae),tt<28){let he=tt*3;ce.push(he,he+1,he+4,he,he+4,he+3,he+1,he+2,he+5,he+1,he+5,he+4)}}let Pe=new wt;Pe.setAttribute("position",new je(ue,3)),Pe.setAttribute("uv",new je(Re,2)),Pe.setAttribute("color",new je(Ae,3)),Pe.setIndex(ce),Pe.computeVertexNormals(),pt(Pe,h[xe%3],[0,0,0],Y),mt(Y,u,.014,[0,0,0],[0,-.8,3.1],4)}}function L(q,G,K=1){for(let ge=0;ge<7;ge++){let xe=ge*Math.PI*2/7;y.push({x:q+Math.sin(xe)*.32*K,y:.42*K,z:G+Math.cos(xe)*.32*K,rx:-.7,ry:xe,rz:(l()-.5)*.35,scale:K})}}function O(q,G){if(!q.length)return;let K=new yt(1.35,1.2,2,3),ge=new Map;for(let xe of q){let Y=`${Math.floor(xe.x/24)}:${Math.floor(xe.z/24)}`;ge.has(Y)||ge.set(Y,[]),ge.get(Y).push(xe)}for(let xe of ge.values()){let Y=new Dn(K,G,xe.length),ue=new Ct;xe.forEach((ce,Re)=>{ue.position.set(ce.x,ce.y,ce.z),ue.rotation.set(ce.rx,ce.ry,ce.rz),ue.scale.setScalar(ce.scale),ue.updateMatrix(),Y.setMatrixAt(Re,ue.matrix)}),Y.receiveShadow=!0,Y.castShadow=G!==t.mats.foliage,Y.computeBoundingSphere(),Y.boundingSphere.radius+=.2,e.add(Y)}}function F(q,G,K,ge,xe=!1){let Y=t.water.clone();Y.repeat.set(K/8,ge/8),r.add(Y);let ue=n(xe?"#397b8a":"#638f92",{normalMap:Y,normalScale:new de(.4,.4),metalness:.25,roughness:.28,envMapIntensity:.9}),ce=pt(new yt(K,ge),ue,[q,-.022,G],e);if(ce.rotation.x=-Math.PI/2,ce.castShadow=!1,v.push(Y),xe){let Re=n("#d5e8db",{transparent:!0,opacity:.6,vertexColors:!0,depthWrite:!1,side:Bt});for(let Ae=0;Ae<4;Ae++){let Pe=[],tt=[],Ne=[];for(let ae=-100+Ae*2;ae<100;ae+=10+l()*5){let he=4+l()*5,me=Pe.length/3;for(let Te=0;Te<=12;Te++){let be=Te/12,Ce=ae+be*he,Ze=q+K/2-.25-Ae*.95+Math.sin(Ce*.43+Ae)*.17,qe=Math.sin(be*Math.PI),B=(.1+Ae*.025)*qe;if(Pe.push(Ze-B,.015,Ce,Ze,.015,Ce,Ze+B,.015,Ce),tt.push(1,1,1,0,1,1,1,qe*(1-Ae*.18),1,1,1,0),Te<12){let E=me+Te*3;Ne.push(E,E+1,E+4,E,E+4,E+3,E+1,E+2,E+5,E+1,E+5,E+4)}}}let H=new wt;H.setAttribute("position",new je(Pe,3)),H.setAttribute("color",new je(tt,4)),H.setIndex(Ne),H.computeVertexNormals();let pe=pt(H,Re,[0,0,0],e);pe.castShadow=!1,pe.userData.phase=Ae,b.push(pe)}}}function D(q,G,K=7){for(let xe of[-1,1])dn(e,d,.25,4.8,[q+xe*K*.42,2.4,G],.34,10),dn(e,m,.36,.55,[q+xe*K*.42,.27,G],.36,10),i(q+xe*K*.42,G,.4,.4,4.8);Me(e,d,[K+.5,.28,.36],[q,3.8,G]);let ge=new oi([[-K*.6,4.95,0],[0,4.65,0],[K*.6,4.95,0]].map(xe=>new I(...xe)));pt(new Mi(ge,18,.21,6,!1),m,[q,0,G],e),Me(e,x,[.7,.85,.1],[q,4.2,G+.23])}function ee(q,G){i(q,G,.48,.48,2.15),Me(e,f,[.95,.25,.95],[q,.12,G]),dn(e,f,.2,1.12,[q,.77,G],.25,6),Me(e,f,[.72,.12,.72],[q,1.4,G]),Me(e,x,[.42,.42,.42],[q,1.65,G]);for(let ge of[-1,1])for(let xe of[-1,1])Me(e,f,[.1,.5,.1],[q+ge*.28,1.67,G+xe*.28]);let K=pt(new Nn(.64,.35,4),f,[q,2.06,G],e);K.rotation.y=Math.PI/4}function V(q,G,K,ge,xe,Y){let ue=new en;ue.moveTo(-Y/2,.4),ue.quadraticCurveTo(-Y*.3,0,0,1.5),ue.quadraticCurveTo(Y*.3,0,Y/2,.4),ue.lineTo(Y/2,.18),ue.quadraticCurveTo(Y*.3,-.25,0,1.25),ue.quadraticCurveTo(-Y*.3,-.25,-Y/2,.18),ue.closePath();let ce=pt(new Bn(ue,{depth:xe,bevelEnabled:!1,curveSegments:8}),g,[G-xe/2,K,ge],q);ce.rotation.y=Math.PI/2,Me(q,x,[xe+.3,.15,.19],[G,K+1.51,ge]);for(let Re of[-1,1])mt(q,x,.06,[G-xe/2,K+.43,ge+Re*Y/2],[G+xe/2,K+.43,ge+Re*Y/2],6);for(let Re=-xe/2+.25;Re<xe/2;Re+=.45)for(let Ae of[-1,1])mt(q,g,.052,[G+Re,K+1.44,ge],[G+Re,K+.43,ge+Ae*Y/2],4)}function te(q,G,K,ge,xe){i(q,G,K/2+.3,ge/2+.3,xe+3),Me(R,f,[K+1.8,.7,ge+1.8],[q,.35,G]),Me(R,p,[K,xe,ge],[q,.7+xe/2,G]);for(let Y=-K/2+.65;Y<K/2;Y+=1.45){Me(R,d,[.2,xe,.26],[q+Y,.7+xe/2,G+ge/2+.04]),Me(R,m,[1.04,xe*.55,.04],[q+Y+.65,.9+xe*.45,G+ge/2+.03]);for(let ue=0;ue<4;ue++)Me(R,x,[.026,xe*.55,.05],[q+Y+.25+ue*.23,.9+xe*.45,G+ge/2+.07])}V(R,q,xe+.55,G,K+2,ge+2.5),Me(R,p,[K*.62,1.8,ge*.65],[q,xe+2.3,G]),V(R,q,xe+3.05,G,K*.72,ge*.84);for(let Y=0;Y<3;Y++)Me(R,f,[K*.38+Y*.7,.22,.65],[q,.6-Y*.2,G+ge/2+.9+Y*.55]);Me(C,f,[K+1.8,.35,ge+1.8],[q,.17,G]);for(let Y=0;Y<50;Y++){let ue=q+(l()-.5)*(K+4),ce=G+(l()-.5)*(ge+4);Me(C,Y%3?f:g,[.3+l()*1.9,.16+l()*.5,.3+l()],[ue,.2+l()*.6,ce]).rotation.set(l()*.5,l()*6,l()*.45)}for(let Y=0;Y<6;Y++){let ue=Me(C,Y%2?d:p,[.3,1+l()*1.4,.4],[q+(l()-.5)*K,.6,G+ge*.42]);ue.rotation.z=(l()-.5)*.7}}if(s==="beach"){F(-89,0,80,200,!0),i(-80,0,31,50,2,0,!0);for(let q of[-29,3,32]){let G=new Ge;G.position.set(-45,0,q),G.rotation.y=Math.PI/2,e.add(G);let K=n("#727f79",{...Zt("metal"),metalness:.5});Me(G,K,[3,.45,6],[0,.25,0]);for(let xe of[-1,1])Me(G,K,[.15,1.3,6],[xe*1.42,.8,0]);Me(G,K,[3,1.2,.2],[0,.8,-2.9]);let ge=Me(G,K,[2.8,.13,2.7],[0,.18,4.1]);ge.rotation.x=.13,i(-45,q,3.2,1.5,1.5)}for(let q=0;q<18;q++){let G=-38+q%3*10,K=-43+Math.floor(q/3)*16;T(G-4,K-4,.65,.5);for(let ge of[-.8,.8]){let xe=Me(e,g,[.2,2,.2],[G,.6,K]);xe.rotation.z=ge}i(G,K,.8,.4,1.2)}for(let q=0;q<12;q++)z(22+q%3*15,-42+Math.floor(q/3)*27,.7+l()*.2)}if(s==="jungle"){for(let q of[-40,-10,20,42])for(let G of[-48,-23,14,48]){z(G,q,.85+l()*.24),z(G+3.2,q+3,.65+l()*.22);for(let K=0;K<4;K++)L(G+(l()-.5)*9,q+(l()-.5)*7,.7+l()*.7);T(G-3,q-1.8,1+l(),.7)}for(let q of[-68,68])for(let G=-50;G<=50;G+=10)z(q,G,1.3)}if(s==="mountain"||s==="fuji"){for(let q of[-72,72])for(let G=-55;G<60;G+=22)T(q,G,14+l()*5,12+l()*10,!1);for(let q=0;q<12;q++)T(-49+q%4*31,-40+Math.floor(q/4)*36,2+l()*1.3,1.5+l()*2);if(s==="mountain")for(let q=0;q<6;q++){let G=-46+q*18;T(G,-66,14,16+l()*9,!1)}}if(s==="fuji"){let q=n("#7d8b88",{map:t.mats.concrete.map,normalMap:t.mats.concrete.normalMap}),G=pt(new Nn(34,44,56,10),q,[16,20,-76],e),K=n("#eef2ef",{roughness:.94});pt(new Nn(10.6,13.8,56,5),K,[16,35.3,-76],e),i(16,-76,32,33,44),G.castShadow=!1;for(let ce of[-31,0,31]){D(0,ce);for(let Re of[-8,8])ee(Re,ce+4)}let ge=document.createElement("canvas");ge.width=ge.height=512;let xe=ge.getContext("2d");xe.filter="grayscale(1) brightness(1.5)",xe.drawImage(t.mats.foliage.map.image,0,0,512,512);let Y=new Gt(ge);Y.colorSpace=Mt,r.add(Y);let ue=n("#e5bccb",{map:Y,alphaMap:t.mats.foliage.alphaMap,alphaTest:.48,normalMap:t.mats.foliage.normalMap,normalScale:new de(.3,.3),roughness:.9,side:Bt});ue.onBeforeCompile=t.mats.foliage.onBeforeCompile;for(let ce of[-43,-19,19,43])for(let Re of[-37,17]){i(ce,Re,.45,.45,4.4),mt(e,u,.17,[ce,0,Re],[ce+.3,4.5,Re+.15],7);for(let Ae=0;Ae<5;Ae++){let Pe=Math.sin(Ae*2.4)*1.35,tt=Math.cos(Ae*2.4)*1.35;mt(e,u,.07,[ce,2.7,Re],[ce+Pe,4.1,Re+tt],5);for(let Ne=0;Ne<9;Ne++)w.push({x:ce+Pe+(l()-.5)*1.4,y:4.1+l()*1.15,z:Re+tt+(l()-.5)*1.4,rx:-l()*1.7,ry:l()*6.28,rz:l()*3,scale:.7+l()*.6})}}O(w,ue)}if(s==="palace"){R=new Ge,C=new Ge,e.add(R,C),C.visible=!1,F(-48,0,18,94),F(48,0,18,94),i(-48,0,9,47,2,0,!0),i(48,0,9,47,2,0,!0);let q=n("#b9beb7",{map:t.maps.battleRoad,normalMap:t.maps.battleNormal,roughness:.82});Me(e,q,[70,.12,83],[0,-.1,1]);for(let G=-35;G<42;G+=3)Me(e,f,[69,.012,.035],[0,-.026,G]);for(let G=-33;G<=33;G+=3)Me(e,f,[.035,.012,78],[G,-.025,3]);te(0,-22,23,11,4.2),te(-26,-17,10,9,3.1),te(26,-17,10,9,3.1);for(let G of[-34,34])Me(R,p,[.65,2.8,65],[G,1.4,2]),i(G,2,.55,32.5,2.8),Me(C,f,[1.4,.6,65],[G,.3,2]);for(let G of[-6,9,24,37])for(let K of[-8,8])ee(K,G);for(let G of[-13,13])Me(R,d,[.55,5.4,.55],[G,2.7,-3]),i(G,-3,.5,.5,5.4);V(R,0,5,-3,29,3.4);for(let G of[-23,23])for(let K of[8,27])T(G,K,1.4,1.2),L(G+2,K,1.6);for(let G of[R,C])G.traverse(K=>{K.isMesh&&(K.userData.batchRoot=G)})}return O(y,t.mats.foliage),{palaceCenter:s==="palace"?_:null,update(q){S+=q;for(let G of v)G.offset.x+=q*.018,G.offset.y+=q*.007;for(let G of b)G.position.x=Math.sin(S*.65+G.userData.phase)*.35,G.updateMatrix();M>=0&&M<2.2&&(M+=q,R.position.y=-Math.min(1,M/1.8)*10,R.rotation.z=Math.sin(M*1.4)*.055,R.updateMatrix(),M>=1.8&&(R.visible=!1))},destroyPalace(q){if(!(!R||M>=0)){M=0,C.visible=!0;for(let G=0;G<9;G++){let K=new I(-26+G%3*26,.7,-25+Math.floor(G/3)*6);q.debrisBurst(K,10,"#b7b4a4"),q.smoke(K,6,"#858984",3.8),o.push(K)}}}}}var $e=Object.freeze({x:60,z:50});function Hg(s,e){let t=fo.find(k=>k.id===s),n=["beach","jungle","mountain","fuji"].includes(s),i=new Ge,{mats:r}=e,o=[],a=[],l=[],c=new Set,u=new Set;function h(k,W={}){let X=new Wt({color:k,roughness:.92,...W});return c.add(X),X}function f(k,W,X){let j=k.clone();return j.repeat.set(W,X),u.add(j),j}let d=$e.x,g=$e.z,x=-g-4.6;function m(k,W,X,j,U,Z=0,re=!1){let we=Math.abs(Math.cos(Z)),ve=Math.abs(Math.sin(Z));a.push({x:k,z:W,halfX:X*we+j*ve,halfZ:X*ve+j*we,height:U,walkOnly:re})}function p(k,W,X,j,U=.035){return pt(Math.min(...X)<.06?new Xt(...X):new Is(...X,1,U),W,j,k)}let v=h(t.ground,{map:f(s==="jungle"||s==="fuji"?e.maps.grass:e.maps.battleRoad,38,35),normalMap:f(e.maps.battleNormal,38,35),roughnessMap:f(e.maps.battleRough,38,35),normalScale:new de(.45,.45)});for(let k of[v.map,v.normalMap,v.roughnessMap])k.center.set(.5,.5),k.rotation=.23;let b=pt(new yt(220,200),v,[0,-.065,0],i);b.rotation.x=-Math.PI/2,b.castShadow=!1;let y=h(t.road,{map:f(n?e.maps.battleRoad:e.maps.road,30,1.8),normalMap:f(e.maps.normal,30,1.8),roughnessMap:f(e.maps.rough,30,1.8),normalScale:new de(.5,.5)});for(let k of[-30,0,30]){let W=pt(new yt(d*2,7),y,[0,-.058,k],i);W.rotation.x=-Math.PI/2,W.castShadow=!1}for(let k of[-36,0,36]){let W=pt(new yt(g*2,7),y,[k,-.054,0],i);W.rotation.set(-Math.PI/2,0,Math.PI/2),W.castShadow=!1}let w=Ng(36,30);w.wrapS=w.wrapT=Fr,w.repeat.set((d*2+9)/36,(g*2+8)/30),u.add(w);let S=new Rt({map:w,transparent:!0,depthWrite:!1});c.add(S);let R=pt(new yt(d*2+9,g*2+8),S,[0,-.047,0],i);R.rotation.x=-Math.PI/2,R.castShadow=!1;let C=h("#b5b2a9",{map:r.concrete.map,normalMap:r.concrete.normalMap,normalScale:new de(.9,.9)}),M=h("#627969",{...Zt("paint"),metalness:.38,roughness:.8,bumpScale:.018}),_=h("#b3a16c"),T=h("#a3b0a7"),z=h("#8e5844"),L=h("#373e3e"),O=h("#a57763",{map:r.concrete.map,normalMap:r.concrete.normalMap}),F=h("#242827",{...Zt("cloth"),roughness:.98,bumpScale:.025}),D=h("#afa68a",{...Zt("cloth"),bumpScale:.03}),ee=h("#655f4d",{roughness:1}),V=h("#a1aaa9",{...Zt("metal"),metalness:.82,roughness:.43,bumpScale:.008}),te=new _i({color:"#586864",metalness:.25,roughness:.2,envMapIntensity:.6,normalMap:e.water,normalScale:new de(.025,.025),transparent:!0,opacity:.28,depthWrite:!1});c.add(te);for(let k=0;k<65;k++){let W=Math.sin(k*9.17)*d,X=Math.cos(k*3.47)*g,j=new en;for(let Z=0;Z<64;Z++){let re=Z/64*Math.PI*2,we=.86+Math.sin(re*3+k)*.12+Math.cos(re*5)*.07;Z?j.lineTo(Math.cos(re)*we,Math.sin(re)*we):j.moveTo(Math.cos(re)*we,Math.sin(re)*we)}j.closePath();let U=pt(new er(j),te,[W,-.033,X],i);U.rotation.x=-Math.PI/2,U.scale.set(.8+k%4*.55,.36+k%3*.25,1),U.castShadow=!1}for(let k of[-d-.55,d+.55])for(let W=-g-.6;W<g+.6;W+=.52)Me(i,_,[.07,.009,.4],[k,-.026,W]);for(let k of[-g-.55,g+.55])for(let W=-d-.5;W<d+.5;W+=1.1)Me(i,_,[.55,.009,.07],[W,-.026,k]);if(!n&&s!=="palace")for(let k of[-30,0,30])for(let W=-d+2;W<d-1;W+=4)[-36,0,36].every(X=>Math.abs(W-X)>4)&&Me(i,T,[1.8,.008,.09],[W,-.027,k]);if(!n&&s!=="palace")for(let k of[-36,0,36])for(let W=-g+2;W<g-1;W+=4)[-30,0,30].every(X=>Math.abs(W-X)>4)&&Me(i,T,[.09,.008,1.8],[k,-.027,W]);if(s==="city"){for(let k of[-36,0,36])for(let W of[-1,1])Me(i,_,[.045,.008,g*2],[k+W*3.3,-.029,0]);for(let k of[-30,0,30])for(let W of[-1,1])Me(i,_,[d*2,.008,.045],[0,-.028,k+W*3.3])}let q=pt(new $s(2.05,2.11,64),_,[0,-.025,0],i);q.rotation.x=-Math.PI/2,q.castShadow=!1,Me(i,_,[3.1,.01,.12],[0,-.025,-1]),Me(i,_,[3.1,.01,.12],[0,-.025,1]);for(let k of[-1.35,1.35])Me(i,_,[.12,.01,2.05],[k,-.025,0]);function G(k,W,X=0){m(k+Math.cos(X)*1.8,W-Math.sin(X)*1.8,2.25,.29,.7,X);let j=new Ge;j.position.set(k,0,W),j.rotation.y=X,i.add(j);for(let U=0;U<2;U++)for(let Z=0;Z<6-U;Z++){let re=Z*.72+U*.3,we=U*.33+.18,ve=Rd(j,D,[.44,.2,.28],[re,we,0],16);ve.rotation.y=(Z%2-.5)*.1;let fe=pt(new hn(1,.014,4,24),ee,[re,we,0],j);fe.rotation.x=Math.PI/2,fe.scale.set(.435,.273,.7);for(let Be of[-1,1])Rd(j,D,[.055,.07,.12],[re+Be*.42,we,.01],10)}}G(-d-1.2,-g-1.6),G(d-3,-g-1.6),G(-d-1.7,1,Math.PI/2),G(d+1.7,-4,Math.PI/2),G(-d+.2,g+1.7),G(d-4,g+1.7);let K=Oa("AMMUNITION","LOT 96 / 7.62 MM","#d5cfac","#4d6151");u.add(K);let ge=h("#ffffff",{map:K});function xe(k,W){m(k,W,.58,.48,.85),p(i,M,[1.15,.83,.92],[k,.41,W]);for(let X of[-.37,.37]){Me(i,L,[.06,.85,.95],[k+X,.41,W]);for(let j of[.14,.67])dn(i,V,.026,.017,[k+X,j,W+.483],.026,8).rotation.x=Math.PI/2}pt(new yt(.6,.23),ge,[k,.46,W+.469],i)}for(let k=0;k<7;k++)xe(k<4?-d-3.2:d+3.2,-4+k*2);function Y(k,W,X=!1){m(k,W,.41,.41,.99),dn(i,X?z:M,.39,.95,[k,.48,W],.39,24);for(let j of[.12,.72])dn(i,L,.401,.038,[k,j,W],.401,24);dn(i,L,.31,.01,[k,.965,W],.31,24),dn(i,V,.035,.018,[k+.15,.98,W],.035,10),X&&o.push(new I(k,.96,W))}Y(-d-2.5,g*.65,!0),Y(d+2.5,-g*.67,!0),Y(d+3.15,-g*.69),Y(-d-3.2,g*.67);function ue(k,W,X){m(k,W+.5,2.65,2.55,X);let j=new Ge;j.position.set(k,0,W),i.add(j),Me(j,C,[5.2,.22,4.1],[0,.11,0]);let U=new en;U.moveTo(-2.5,0),U.lineTo(2.5,0),U.lineTo(2.5,X-.5);for(let[Z,re]of[[2.1,X-.4],[1.85,X-.9],[1.35,X-.77],[1.05,X-1.4],[.48,X-1.25],[.1,X-1.8],[-.55,X-1.5],[-.92,X-.4],[-1.35,X-.17],[-1.8,X-.45],[-2.5,X]])U.lineTo(Z,re);U.closePath();for(let Z of[-1.55,.2,1.65]){let re=new Ks;re.moveTo(Z-.46,.82),re.lineTo(Z-.46,2),re.lineTo(Z+.41,2),re.lineTo(Z+.48,.82),re.closePath(),U.holes.push(re)}pt(new Bn(U,{depth:.3,bevelEnabled:!0,bevelSize:.026,bevelThickness:.022,bevelSegments:1}),C,[0,0,1.7],j),Me(j,O,[.26,X-1,3.8],[-2.4,(X-1)/2,-.1]),Me(j,L,[4.8,.16,3.7],[0,2.55,-.1]),Me(j,C,[4.8,.17,3.7],[0,2.66,-.1]),Me(j,C,[.26,X-.7,.28],[2.35,(X-.7)/2,-1.7]);for(let Z of[-1.55,.2,1.65]){Me(j,L,[.9,1.12,.025],[Z,1.4,1.67]),Me(j,V,[.032,1.18,.04],[Z,1.41,2.03]),Me(j,V,[.94,.025,.04],[Z,1.57,2.03]);for(let re=0;re<3;re++)Me(j,O,[.26,.12,.033],[Z-.35+re*.29,.69,2.019])}for(let Z=0;Z<9;Z++){let re=-2.35+Z*.58,we=X-1.5+Math.sin(Z*1.8)*.7;mt(j,z,.015,[re,we,1.82],[re+Math.sin(Z)*.1,we+.85,1.9])}for(let Z=0;Z<25;Z++){let re=pt(new na(1,0),Z%3?C:O,[Math.sin(Z*4.7)*2.8,.12+Z%3*.055,2.25+Z%5*.19],j);re.scale.set(.19+Z%3*.16,.08+Z%2*.08,.23+Z%4*.11),re.rotation.set(Z*.08,Z*.9,.12)}mt(j,z,.055,[-2.3,.4,2.5],[1.7,1.1,2.7]);for(let Z of[-1,1]){Me(j,C,[.17,X-.5,.2],[Z*2.32,(X-.5)/2,1.99]);for(let re=0;re<5;re++)Me(j,O,[.44,.17,.035],[Z*1.5,2.2+re*.24,2.026])}if(Me(j,T,[4.95,.1,.4],[0,.67,1.89]),s==="city"){let Z=Me(j,M,[4.6,.08,1.35],[0,2.5,2.2]);Z.rotation.x=-.13;let re=Oa("五金商行","HARDWARE / EST. 1978","#d9d3b6","#405b63");u.add(re),pt(new yt(3.1,.46),h("#ffffff",{map:re}),[0,2.89,2.04],j);for(let we of[-1,1]){let ve=Me(j,r.wood,[.17,1.4,.08],[we*1.55,1.45,2.09]);ve.rotation.z=we*.38}}}for(let k of[-d-3.4,-d+3,d-3,d+3.4])ue(k,x,s==="city"?5.3:4.4);function ce(k,W,X){m(k,W,2.5,.27,1.9,X);let j=new Ge;j.position.set(k,0,W),j.rotation.y=X,i.add(j);for(let U=0;U<7;U++)for(let Z=0;Z<8-U*.45;Z++)p(j,(U+Z)%6===0?C:O,[.53,.24,.25],[(Z-3.5)*.57+U%2*.26,.13+U*.27,0],.012);for(let U=0;U<11;U++){let Z=Me(j,U%3?C:O,[.3+U%3*.12,.15,.2+U%2*.17],[Math.sin(U*7.2)*2.4,.08,.7+Math.cos(U*4)*.5]);Z.rotation.y=U}}ce(-d-3.1,g*.4,.6),ce(d+3.1,g*.6,-.4);function Re(k,W,X){m(k,W,1.15,2.5,2.1,X);let j=new Ge;j.position.set(k,0,W),j.rotation.y=X,i.add(j),Me(j,L,[1.65,.28,3.9],[0,.63,0]),p(j,M,[1.82,.57,2.12],[0,1,-.88]),p(j,M,[1.77,1.25,1.35],[0,1.36,1]),Me(j,L,[1.48,.58,.04],[0,1.64,1.69]),p(j,M,[1.8,.18,1.42],[0,2,1.03]),p(j,z,[1.65,.35,.7],[0,1.11,1.98]),Me(j,L,[1.77,.15,.14],[0,.75,2.38]),Me(j,tt,[.65,.28,.07],[0,1,2.35]);for(let Z=-3;Z<=3;Z++)Me(j,L,[.04,.25,.015],[Z*.075,1.01,2.391]);for(let Z of[-1,1])mt(j,V,.012,[Z*.3,1.39,1.72],[Z*.42,1.7,1.72]),mt(j,V,.024,[Z*.88,1.59,1.37],[Z*1.12,1.7,1.49]),p(j,L,[.08,.22,.17],[Z*1.13,1.72,1.51]);for(let[Z,re]of[[[.1,1.53,1.721],[.35,1.81,1.721]],[[.19,1.62,1.722],[-.16,1.83,1.722]],[[.19,1.62,1.722],[.53,1.64,1.722]]])mt(j,V,.005,Z,re,4);for(let Z of[-1,1]){Me(j,L,[.03,.58,.75],[Z*.9,1.6,1.06]),Me(j,_,[.21,.16,.06],[Z*.65,1.06,2.35]);for(let re of[-1.32,1.22]){let we=dn(j,F,.46,.25,[Z*.92,.46,re],.46,24);we.rotation.z=Math.PI/2;let ve=dn(j,V,.19,.28,[Z*.94,.46,re],.19,16);ve.rotation.z=Math.PI/2;for(let fe=0;fe<16;fe++){let Be=fe/16*Math.PI*2,et=Me(j,L,[.27,.055,.15],[Z*.92,.46+Math.cos(Be)*.455,re+Math.sin(Be)*.455]);et.rotation.x=-Be}}Me(j,M,[.07,.75,2.1],[Z*.89,1.29,-.88]),Me(j,V,[.026,.03,.21],[Z*.9,1.29,.68]);for(let re of[.46,1.62])Me(j,L,[.012,.88,.019],[Z*.895,1.13,re])}for(let Z=0;Z<3;Z++)Me(j,L,[.5,.45,.6],[(Z%2-.5)*.7,1.29,-1.5+Z*.5]);let U=new I(0,1.3,2.02).applyAxisAngle(new I(0,1,0),X).add(j.position);o.push(U)}let Ae=new Map;function Pe(k,W,X){Ae.has(X)||Ae.set(X,h(X,{...Zt("paint"),metalness:.45,roughness:.75,bumpScale:.015}));let j=Ae.get(X);m(k,W,3.25,1.36,2.3),p(i,j,[6.4,2.3,2.5],[k,1.15,W]);for(let U=-2.95;U<3;U+=.28)Me(i,j,[.045,2.19,.06],[k+U,1.15,W+1.28]);for(let U of[-1,1]){Me(i,V,[.04,2.25,.05],[k+U*2.9,1.16,W+1.32]);for(let Z of[.2,2.12])Me(i,z,[.18,.15,.08],[k+U*2.9,Z,W+1.33])}pt(new yt(1.1,.4),ge,[k-1.8,1.65,W+1.34],i)}let tt=h("#8c9690",{metalness:.65});Re(-d-3.1,-g*.4,-.25);for(let k=0;k<8;k++){let W=d+1.1+k%3*.65,X=-g*.6+k*.85,j=Me(i,k%2?C:z,[.35+k%3*.15,.12,.35],[W,.07,X]);j.rotation.y=k*1.6}for(let k of[-1,1]){let W=k*(d+1.7);for(let X=-g+1;X<g-1;X+=2.7)mt(i,z,.024,[W,0,X],[W,1.05,X]);for(let X of[.55,.9]){mt(i,r.steel,.012,[W,X,-g+1],[W,X,g-1]);for(let j=-g+1;j<g-1;j+=.75)mt(i,V,.008,[W-.06,X-.07,j],[W+.06,X+.07,j],4),mt(i,V,.008,[W-.06,X+.07,j],[W+.06,X-.07,j],4)}}let Ne=h("#768167",{...Zt("cloth"),bumpScale:.035,roughness:1});function H(k,W){m(k,W,2.55,1.94,2.5);let X=new Ge;X.position.set(k,0,W),i.add(X),Me(X,Ne,[5,1.6,3.6],[0,.8,0]);for(let j of[-1,1]){let U=Me(X,Ne,[5.1,.09,2.2],[0,1.9,j*.91]);U.rotation.x=j*.47;for(let Z of[-2.3,0,2.3])mt(X,ee,.008,[Z,2.4,0],[Z,1.42,j*1.88]);for(let Z of[-2.4,2.4])mt(X,ee,.012,[Z,1.7,j*1.7],[Z*1.25,.06,j*2.6]),dn(X,z,.018,.2,[Z*1.25,.08,j*2.6],.018,6)}Me(X,L,[1.8,1.56,.05],[0,.79,1.85]);for(let j of[-1,1]){let U=Me(X,Ne,[.75,1.56,.035],[j*1.05,.79,1.89]);U.rotation.y=j*.32}}function pe(k,W){m(k,W,1.55,1.45,5.2);for(let j of[-1,1])for(let U of[-1,1])Me(i,M,[.17,4.25,.17],[k+j*1.28,2.1,W+U*1.13]),mt(i,V,.025,[k+j*1.28,.3,W+U*1.13],[k-j*1.28,3.5,W+U*1.13]);Me(i,M,[3,.17,2.75],[k,3.5,W]),Me(i,M,[2.9,.78,.08],[k,3.95,W-1.28]);for(let j of[-1,1])Me(i,M,[.08,.78,2.6],[k+j*1.42,3.95,W]);for(let j=0;j<9;j++)Me(i,V,[.62,.045,.06],[k+.65,.35+j*.35,W+1.34]);let X=Me(i,Ne,[3.2,.1,3],[k,5,W]);X.rotation.z=.07,mt(i,V,.025,[k-1,3.5,W-1],[k-1,6.4,W-1]),mt(i,V,.019,[k-1.6,6.1,W-1],[k-.4,6.1,W-1])}function ae(k,W){dn(i,L,.12,.32,[k,.16,W],.16,12),mt(i,V,.06,[k,0,W],[k,4.5,W]),mt(i,V,.045,[k,4.5,W],[k+.85,4.65,W]),p(i,L,[.6,.13,.34],[k+.85,4.6,W]),Me(i,r.glow,[.43,.014,.25],[k+.85,4.526,W])}function he(k,W){m(k,W,4.7,1.42,3.2);let X=new Ge;X.position.set(k,0,W),i.add(X),p(X,z,[9.2,2.1,2.6],[0,2.02,0]),Me(X,L,[9.5,.26,2.68],[0,.84,0]);for(let j=-4;j<=4;j++)Me(X,V,[.055,2,.065],[j,2.03,1.33]),Me(X,z,[.045,.11,2.6],[j,3.14,0]);for(let j of[-3.1,-2.25,2.25,3.1])for(let U of[-1,1]){let Z=dn(X,L,.38,.14,[j,.46,U*1.09],.38,12);Z.rotation.x=Math.PI/2}for(let j of[-1,1])Me(X,V,[.06,2.1,.08],[j*.82,2.01,1.38]);pt(new yt(1.1,.4),ge,[-2.7,2.22,1.351],X)}function me(k,W){for(let X of[-1,1])m(k+X*5.1,W,.36,.46,5.3),Me(i,_,[.34,5.25,.5],[k+X*5.1,2.6,W]),Me(i,L,[.75,.15,1.1],[k+X*5.1,.12,W]);Me(i,_,[10.9,.38,.55],[k,5.35,W]);for(let X=-4;X<=4;X++)mt(i,L,.026,[k+X,5.6,W],[k+X+.5,5.12,W]);Me(i,M,[1.1,.65,.9],[k+2,5.3,W]),mt(i,V,.014,[k+2,5,W],[k+2,2.6,W])}if(s==="depot"){for(let k of[x+.8,x-.5])Me(i,tt,[d*2+17,.13,.13],[0,.05,k]);for(let k=-d-8;k<d+8;k+=.7)Me(i,r.wood,[.16,.1,2.4],[k,-.025,x+.15]);Pe(-4.2,x-3.5,"#607f93"),Pe(3,x-3.5,"#9e5d49")}else H(-3.8,x-1.1),Pe(4,x-1.5,"#667e84");let Te={beach:["北侧海滩","海岸工事","海岸指挥所","登陆航道","滩头防线","椰林哨区","抢滩阵地","运输集结区","东岸补给点"],jungle:["西北密林","前进营地","密林指挥所","沼泽边缘","林间空地","伏击林道","侦察入口","南侧林区","补给营地"],mountain:["西侧山口","高地阵地","山顶要塞","西侧石坡","山间通路","东坡防线","山谷入口","南侧隘口","运输坡道"],city:["西北住宅区","北部厂房","城市中枢","西街废墟","中央路口","东部街区","南侧残楼","南部街道","东南车场"],fuji:["西麓树林","雪峰参道","雪峰防线","西侧营地","鸟居大道","东侧石庭","山麓入口","南部神社","战地营地"],palace:["西侧御殿","皇宫正殿","东侧御殿","西侧护城河","决战庭院","东侧护城河","西侧城门","正门参道","东侧城门"]}[s];for(let k=0;k<3;k++)for(let W=0;W<3;W++){let X=(W-1)*36,j=(k-1)*30,U=k*3+W;if(l.push({x:X,z:j,name:Te[U]}),s==="palace")continue;n&&U%2===0?H(X-11,j-10):s==="depot"&&U%2===0?he(X-11,j-13):ue(X-11,j-10,s==="city"?5.3:3.2),s==="depot"||U%3===2?Pe(X+10,j-10,U%2?"#9e5d49":"#607f93"):s==="city"||s==="mountain"&&U%3===0?ue(X+11,j-10,4.6):H(X+9,j-10),G(X-11,j+8,U%2*.15),(s==="city"||s==="mountain")&&ce(X-12,j+3.8,(U%2-.5)*.5),Re(X+11,j+8,(U%3-1)*.35),xe(X+7,j+6.8),xe(X+7,j+8.1),Y(X+14,j+7,U%2===0),Y(X-7,j-9),U%3===2&&Pe(X-10,j+12,"#667e84");let Z=Oa(String(U+1).padStart(2,"0"),"作战区域","#c4c9ae","#47554d");u.add(Z);let re=pt(new yt(2.6,1.1),h("#ffffff",{map:Z}),[X-2.2,-.024,j+4.9],i);if(re.rotation.x=-Math.PI/2,re.castShadow=!1,s==="city"){for(let we of[-1,1])for(let ve=0;ve<7;ve++)Me(i,C,[.25,.13,1.18],[X+we*4.1,.005,j-9+ve*1.25]),Me(i,T,[.8,.012,.2],[X+we*2.3,-.025,j-2+ve*.66]);ae(X+5,j-5.5)}else(s==="jungle"||s==="beach")&&U%2===0?pe(X-16,j+10):s==="depot"&&U%2===0&&me(X+10,j-10)}if(s==="depot")for(let k of[-43,-13,17,43]){for(let W of[-.65,.65])Me(i,tt,[d*2,.1,.1],[0,.01,k+W]);for(let W=-d+1;W<d;W+=.8)Me(i,r.wood,[.18,.08,2.05],[W,-.015,k])}for(let k of[-d-3.8,d+3.8]){mt(i,r.steel,.065,[k,0,-g-1.7],[k,5,-g-1.7]),mt(i,r.steel,.045,[k-.55,4.9,-g-1.7],[k+.55,4.9,-g-1.7]);for(let W of[-.38,.38])p(i,L,[.43,.32,.2],[k+W,4.8,-g-1.6]),Me(i,r.glow,[.33,.23,.024],[k+W,4.8,-g-1.482])}for(let k=0;k<7;k++)mt(i,r.steel,.025,[d+4,.6,x-2+k*.42],[d+4,3.3-k*.27,x-2+k*.42]);mt(i,r.steel,.035,[d+4,0,x-1],[d+4,7,x-1]);let be=Oa(t.name,"老美大战倭寇","#f5e3b3","#2e4544");u.add(be);let Ce=h("#ffffff",{map:be});pt(new yt(3.3,1.24),Ce,[0,2.1,-g-2.4],i);for(let k of[-1.4,1.4])mt(i,r.steel,.04,[k,0,-g-2.5],[k,3,-g-2.5]);let Ze=kg(s,{root:i,assets:e,material:h,obstacle:m,ownedMaps:u,fires:o}),qe=document.createElement("canvas");qe.width=qe.height=64;let B=qe.getContext("2d"),E=B.createRadialGradient(32,32,8,32,32,32);E.addColorStop(0,"#081012bb"),E.addColorStop(.58,"#10171b65"),E.addColorStop(1,"#10171b00"),B.fillStyle=E,B.fillRect(0,0,64,64);let $=new Gt(qe);u.add($);let oe=new Rt({map:$,transparent:!0,depthWrite:!1,opacity:.65});c.add(oe);let ye=a.filter(k=>!k.walkOnly),le=new Dn(new yt(1,1),oe,ye.length),Ue=new Ct;ye.forEach((k,W)=>{Ue.position.set(k.x,-.021,k.z),Ue.rotation.x=-Math.PI/2,Ue.scale.set(k.halfX*2+1.8,k.halfZ*2+1.8,1),Ue.updateMatrix(),le.setMatrixAt(W,Ue.matrix)}),le.computeBoundingSphere(),i.add(le),i.updateMatrixWorld(!0);let Ee=new Map,ke=new Set,ze=new I;i.traverse(k=>{if(!k.isMesh||k.isInstancedMesh||k.material.transparent)return;k.getWorldPosition(ze);let W=(k.userData.batchRoot||i).uuid+"-"+k.material.uuid+"-"+k.castShadow+"-"+Math.floor(ze.x/24)+"-"+Math.floor(ze.z/24);Ee.has(W)||Ee.set(W,[]),Ee.get(W).push(k)});for(let k of Ee.values()){if(k.length<2)continue;let W=k[0].userData.batchRoot||i,X=W.matrixWorld.clone().invert(),j=k.map(re=>{let we=re.geometry.clone().applyMatrix4(new dt().multiplyMatrices(X,re.matrixWorld));return we.index||we.setIndex(Array.from({length:we.attributes.position.count},(ve,fe)=>fe)),we}),U=Mu(j,!1);if(j.forEach(re=>re.dispose()),!U)continue;let Z=pt(U,k[0].material,[0,0,0],W);Z.castShadow=k[0].castShadow,U.computeBoundingSphere();for(let re of k)ke.add(re.geometry),re.removeFromParent()}ke.forEach(k=>k.dispose());let _e=[];i.traverse(k=>{k.isGroup&&k!==i&&_e.push(k)});for(let k of _e.reverse())k.children.length||k.removeFromParent();i.updateMatrixWorld(!0),i.traverse(k=>{k.matrixAutoUpdate=!1});function Le(){i.removeFromParent();let k=new Set;i.traverse(W=>{W.geometry&&k.add(W.geometry)}),k.forEach(W=>W.dispose()),c.forEach(W=>W.dispose()),u.forEach(W=>W.dispose())}return{root:i,fires:o,obstacles:a,districts:l,dispose:Le,type:s,chapter:t,...Ze}}var Tu=class{constructor(e,t,n,i,r,o,a){Object.assign(this,{scene:e,effects:t,battlefield:n,enemy:i,nuclear:o,onImpact:a,time:0,impacted:!1,done:!1,flash:0}),this.target=i.model.group.position.clone();let l=new Sn().setFromPoints([this.target,r,n.palaceCenter.clone().add(new I(-34,0,-12)),n.palaceCenter.clone().add(new I(34,0,18))]);if(this.focus=l.getCenter(new I),this.focus.y=1.5,this.extent=l.getSize(new I),this.impactTime=o?2.1:.35,o){this.missile=new Ge;let c=new Wt({color:"#e2e6dc",metalness:.7,roughness:.3}),u=new Wt({color:"#b85840",metalness:.4,roughness:.4}),h=new it(new kt(.2,.2,1.5,12),c),f=new it(new Nn(.2,.55,12),u);f.rotation.z=Math.PI,f.position.y=-1,this.missile.add(h,f);for(let d of[0,Math.PI/2]){let g=new it(new Xt(.8,.42,.05),u);g.position.y=.64,g.rotation.y=d,this.missile.add(g)}this.missile.traverse(d=>{d.isMesh&&(d.userData.ownedMaterial=!0)}),this.missile.position.copy(this.target).setY(34),e.add(this.missile),t.ring(this.target,"#ffdb9d",3.5)}}update(e){if(this.time+=e,this.missile&&!this.impacted){this.missile.position.y=34*(1-Math.min(1,this.time/this.impactTime))+.8;let t=this.missile.position.clone().add(new I(0,1,0));this.effects.emit(t,4,"#ffe5b1",{speed:.5,up:4,gravity:-1,life:.4,size:.17,energy:2.5})}if(!this.impacted&&this.time>=this.impactTime&&(this.impacted=!0,this.missile&&(Kt(this.missile),this.missile=null),this.enemy.health=0,this.enemy.bar.visible=this.enemy.warning.visible=!1,this.nuclear?this.effects.nuclearBlast(this.target):(this.effects.explosion(this.target),this.effects.ring(this.target,"#e6efc6",12)),this.battlefield.destroyPalace(this.effects),this.onImpact()),this.impacted){let t=this.time-this.impactTime,n=Math.min(1,t/.9),i=this.enemy.model.group;this.enemy.model.animate(this.time,0,0,"stagger"),i.rotation.x=-Math.sin(n*Math.PI/2)*1.51,i.rotation.z=.12*n,i.position.y=Math.sin(n*Math.PI)*.35+.2*n,this.flash=this.nuclear?Math.exp(-t*6)*.82:0,t>(this.nuclear?6.2:4.4)&&(this.done=!0)}}dispose(){this.missile&&Kt(this.missile)}};var Ns=class s{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new A);let t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new A);let n=this.elements,i=e.x,r=e.y,o=e.z;return t.x=n[0]*i+n[1]*r+n[2]*o,t.y=n[3]*i+n[4]*r+n[5]*o,t.z=n[6]*i+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new s);let n=this.elements,i=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],h=n[5],f=n[6],d=n[7],g=n[8],x=i[0],m=i[1],p=i[2],v=i[3],b=i[4],y=i[5],w=i[6],S=i[7],R=i[8];return r[0]=o*x+a*v+l*w,r[1]=o*m+a*b+l*S,r[2]=o*p+a*y+l*R,r[3]=c*x+u*v+h*w,r[4]=c*m+u*b+h*S,r[5]=c*p+u*y+h*R,r[6]=f*x+d*v+g*w,r[7]=f*m+d*b+g*S,r[8]=f*p+d*y+g*R,t}scale(e,t){t===void 0&&(t=new s);let n=this.elements,i=t.elements;for(let r=0;r!==3;r++)i[3*r+0]=e.x*n[3*r+0],i[3*r+1]=e.y*n[3*r+1],i[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new A);let n=3,i=4,r=[],o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let l=3,c=l,u,h=4,f;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){u=h;do f=h-u,r[f+i*o]+=r[f+i*a];while(--u);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){let d=r[o+i*a]/r[o+i*o];u=h;do f=h-u,r[f+i*a]=f<=o?0:r[f+i*a]-r[f+i*o]*d;while(--u)}}while(--l);if(t.z=r[2*i+3]/r[2*i+2],t.y=(r[1*i+3]-r[1*i+2]*t.z)/r[1*i+1],t.x=(r[0*i+3]-r[0*i+2]*t.z-r[0*i+1]*t.y)/r[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new s);let t=3,n=6,i=Q_,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3,l=a,c,u=n,h;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=u;do h=u-c,i[h+n*r]+=i[h+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){let f=i[r+n*o]/i[r+n*r];c=u;do h=u-c,i[h+n*o]=h<=r?0:i[h+n*o]-i[h+n*r]*f;while(--c)}}while(--a);r=2;do{o=r-1;do{let f=i[r+n*o]/i[r+n*r];c=n;do h=n-c,i[h+n*o]=i[h+n*o]-i[h+n*r]*f;while(--c)}while(o--)}while(--r);r=2;do{let f=1/i[r+n*r];c=n;do h=n-c,i[h+n*r]=i[h+n*r]*f;while(--c)}while(r--);r=2;do{o=2;do{if(h=i[t+o+n*r],isNaN(h)||h===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,h)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){let t=e.x,n=e.y,i=e.z,r=e.w,o=t+t,a=n+n,l=i+i,c=t*o,u=t*a,h=t*l,f=n*a,d=n*l,g=i*l,x=r*o,m=r*a,p=r*l,v=this.elements;return v[0]=1-(f+g),v[1]=u-p,v[2]=h+m,v[3]=u+p,v[4]=1-(c+g),v[5]=d-x,v[6]=h-m,v[7]=d+x,v[8]=1-(c+f),this}transpose(e){e===void 0&&(e=new s);let t=this.elements,n=e.elements,i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}},Q_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],A=class s{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new s);let n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*i,t.y=l*n-o*r,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new s(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new s(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Ns([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){let r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new s);let t=this.x,n=this.y,i=this.z,r=Math.sqrt(t*t+n*n+i*i);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=i*r):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new s);let n=this.x,i=this.y,r=this.z;return t.x=e*n,t.y=e*i,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new s),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new s),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new s),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){let n=this.length();if(n>0){let i=$_,r=1/n;i.set(this.x*r,this.y*r,this.z*r);let o=ew;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){let i=this.x,r=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Vg),Vg.almostEquals(e,t)}clone(){return new s(this.x,this.y,this.z)}};A.ZERO=new A(0,0,0);A.UNIT_X=new A(1,0,0);A.UNIT_Y=new A(0,1,0);A.UNIT_Z=new A(0,0,1);var $_=new A,ew=new A,Vg=new A,Qn=class s{constructor(e){e===void 0&&(e={}),this.lowerBound=new A,this.upperBound=new A,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Gg),c=Gg),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new s().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound,o=i.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){let e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){let t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound;return t.x<=i.x&&n.x>=r.x&&t.y<=i.y&&n.y>=r.y&&t.z<=i.z&&n.z>=r.z}getCorners(e,t,n,i,r,o,a,l){let c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){let n=Wg,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7];this.getCorners(i,r,o,a,l,c,u,h);for(let f=0;f!==8;f++){let d=n[f];e.pointToLocal(d,d)}return t.setFromPoints(n)}toWorldFrame(e,t){let n=Wg,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7];this.getCorners(i,r,o,a,l,c,u,h);for(let f=0;f!==8;f++){let d=n[f];e.pointToWorld(d,d)}return t.setFromPoints(n)}overlapsRay(e){let{direction:t,from:n}=e,i=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,h=(this.lowerBound.z-n.z)*o,f=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(h,f)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(h,f));return!(g<0||d>g)}},Gg=new A,Wg=[new A,new A,new A,new A,new A,new A,new A,new A],Lu=class{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){let r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:r}=t;if(r>i){let o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},Du=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;let n=this._listeners;if(n[e]===void 0)return this;let i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,e)}return this}},Rn=class s{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){let n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new A),this.normalize();let t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){let n=tw,i=nw;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new s);let n=this.x,i=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=n*u+o*a+i*c-r*l,t.y=i*u+o*l+r*a-n*c,t.z=r*u+o*c+n*l-i*a,t.w=o*u-n*a-i*l-r*c,t}inverse(e){e===void 0&&(e=new s);let t=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(e);let o=1/(t*t+n*n+i*i+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new s),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new A);let n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*i,h=c*i+l*n-o*r,f=c*r+o*i-a*n,d=-o*n-a*i-l*r;return t.x=u*c+d*-o+h*-l-f*-a,t.y=h*c+d*-a+f*-o-u*-l,t.z=f*c+d*-l+u*-a-h*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,r,o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":let u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){let h=o*o,f=a*a,d=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*f-2*d),i=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*h-2*d)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=r}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");let r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):i==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):i==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):i==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):i==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):i==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new s(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new s);let i=this.x,r=this.y,o=this.z,a=this.w,l=e.x,c=e.y,u=e.z,h=e.w,f,d,g,x,m;return d=i*l+r*c+o*u+a*h,d<0&&(d=-d,l=-l,c=-c,u=-u,h=-h),1-d>1e-6?(f=Math.acos(d),g=Math.sin(f),x=Math.sin((1-t)*f)/g,m=Math.sin(t*f)/g):(x=1-t,m=t),n.x=x*i+m*l,n.y=x*r+m*c,n.z=x*o+m*u,n.w=x*a+m*h,n}integrate(e,t,n,i){i===void 0&&(i=new s);let r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,u=this.z,h=this.w,f=t*.5;return i.x+=f*(r*h+o*u-a*c),i.y+=f*(o*h+a*l-r*u),i.z+=f*(a*h+r*c-o*l),i.w+=f*(-r*l-o*c-a*u),i}},tw=new A,nw=new A,iw={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Fe=class s{constructor(e){e===void 0&&(e={}),this.id=s.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Fe.idCounter=0;Fe.types=iw;var bt=class s{constructor(e){e===void 0&&(e={}),this.position=new A,this.quaternion=new Rn,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return s.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return s.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new A),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new A),n.vsub(e,i),t.conjugate(qg),qg.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new A),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new A),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new A),t.w*=-1,t.vmult(n,i),t.w*=-1,i}},qg=new Rn,Fd=class s extends Fe{constructor(e){e===void 0&&(e={});let{vertices:t=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=e;super({type:Fe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;let i=new A;for(let r=0;r!==e.length;r++){let o=e[r],a=o.length;for(let l=0;l!==a;l++){let c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let u=!1;for(let h=0;h!==n.length;h++)if(n[h].almostEquals(i)||n[h].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);let t=this.faceNormals[e]||new A;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;let n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){let n=this.faces[e],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];s.computeNormal(i,r,o,t)}static computeNormal(e,t,n,i){let r=new A,o=new A;t.vsub(e,o),n.vsub(t,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,r,o,a,l,c){let u=new A,h=-1,f=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),r.vmult(u,u);let x=u.dot(o);x>f&&(f=x,h=g)}let d=[];for(let g=0;g<n.faces[h].length;g++){let x=n.vertices[n.faces[h][g]],m=new A;m.copy(x),r.vmult(m,m),i.vadd(m,m),d.push(m)}h>=0&&this.clipFaceAgainstHull(o,e,t,d,a,l,c)}findSeparatingAxis(e,t,n,i,r,o,a,l){let c=new A,u=new A,h=new A,f=new A,d=new A,g=new A,x=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);let v=m.testSepAxis(c,e,t,n,i,r);if(v===!1)return!1;v<x&&(x=v,o.copy(c))}else{let p=a?a.length:m.faces.length;for(let v=0;v<p;v++){let b=a?a[v]:v;c.copy(m.faceNormals[b]),n.vmult(c,c);let y=m.testSepAxis(c,e,t,n,i,r);if(y===!1)return!1;y<x&&(x=y,o.copy(c))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){r.vmult(e.uniqueAxes[p],u);let v=m.testSepAxis(u,e,t,n,i,r);if(v===!1)return!1;v<x&&(x=v,o.copy(u))}else{let p=l?l.length:e.faces.length;for(let v=0;v<p;v++){let b=l?l[v]:v;u.copy(e.faceNormals[b]),r.vmult(u,u);let y=m.testSepAxis(u,e,t,n,i,r);if(y===!1)return!1;y<x&&(x=y,o.copy(u))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],f);for(let v=0;v!==e.uniqueEdges.length;v++)if(r.vmult(e.uniqueEdges[v],d),f.cross(d,g),!g.almostZero()){g.normalize();let b=m.testSepAxis(g,e,t,n,i,r);if(b===!1)return!1;b<x&&(x=b,o.copy(g))}}return i.vsub(t,h),h.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,r,o){let a=this;s.project(a,e,n,i,Pd),s.project(t,e,r,o,Id);let l=Pd[0],c=Pd[1],u=Id[0],h=Id[1];if(l<h||u<c)return!1;let f=l-h,d=u-c;return f<d?f:d}calculateLocalInertia(e,t){let n=new A,i=new A;this.computeLocalAABB(i,n);let r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){let t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,r,o,a){let l=new A,c=new A,u=new A,h=new A,f=new A,d=new A,g=new A,x=new A,m=this,p=[],v=i,b=p,y=-1,w=Number.MAX_VALUE;for(let _=0;_<m.faces.length;_++){l.copy(m.faceNormals[_]),n.vmult(l,l);let T=l.dot(e);T<w&&(w=T,y=_)}if(y<0)return;let S=m.faces[y];S.connectedFaces=[];for(let _=0;_<m.faces.length;_++)for(let T=0;T<m.faces[_].length;T++)S.indexOf(m.faces[_][T])!==-1&&_!==y&&S.connectedFaces.indexOf(_)===-1&&S.connectedFaces.push(_);let R=S.length;for(let _=0;_<R;_++){let T=m.vertices[S[_]],z=m.vertices[S[(_+1)%R]];T.vsub(z,c),u.copy(c),n.vmult(u,u),t.vadd(u,u),h.copy(this.faceNormals[y]),n.vmult(h,h),t.vadd(h,h),u.cross(h,f),f.negate(f),d.copy(T),n.vmult(d,d),t.vadd(d,d);let L=S.connectedFaces[_];g.copy(this.faceNormals[L]);let O=this.getPlaneConstantOfFace(L);x.copy(g),n.vmult(x,x);let F=O-x.dot(t);for(this.clipFaceAgainstPlane(v,b,x,F);v.length;)v.shift();for(;b.length;)v.push(b.shift())}g.copy(this.faceNormals[y]);let C=this.getPlaneConstantOfFace(y);x.copy(g),n.vmult(x,x);let M=C-x.dot(t);for(let _=0;_<v.length;_++){let T=x.dot(v[_])+M;if(T<=r&&(console.log(`clamped: depth=${T} to minDist=${r}`),T=r),T<=o){let z=v[_];if(T<=1e-6){let L={point:z,normal:x,depth:T};a.push(L)}}}}clipFaceAgainstPlane(e,t,n,i){let r,o,a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+i;for(let u=0;u<a;u++){if(c=e[u],o=n.dot(c)+i,r<0)if(o<0){let h=new A;h.copy(c),t.push(h)}else{let h=new A;l.lerp(c,r/(r-o),h),t.push(h)}else if(o<0){let h=new A;l.lerp(c,r/(r-o),h),t.push(h),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new A);let n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],i[r]),e.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){let n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let r=n[i];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){let t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new A);let n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,t=this.vertices;for(let n=0;n!==t.length;n++){let i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){let r=this.vertices,o,a,l,c,u,h,f=new A;for(let d=0;d<r.length;d++){f.copy(r[d]),t.vmult(f,f),e.vadd(f,f);let g=f;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(h===void 0||g.z>h)&&(h=g.z)}n.set(o,a,l),i.set(c,u,h)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new A);let t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){let n=this.vertices.length,i=this.vertices;if(t){for(let r=0;r<n;r++){let o=i[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){let o=i[r];o.vadd(e,o)}}pointIsInside(e){let t=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new A;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a],c=t[n[a][0]],u=new A;e.vsub(c,u);let h=l.dot(u),f=new A;o.vsub(c,f);let d=l.dot(f);if(h<0&&d>0||h>0&&d<0)return!1}return r?1:-1}static project(e,t,n,i,r){let o=e.vertices.length,a=rw,l=0,c=0,u=ow,h=e.vertices;u.setZero(),bt.vectorToLocalFrame(n,i,t,a),bt.pointToLocalFrame(n,i,u,u);let f=u.dot(a);c=l=h[0].dot(a);for(let d=1;d<o;d++){let g=h[d].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=f,l-=f,c>l){let d=c;c=l,l=d}r[0]=l,r[1]=c}},Pd=[],Id=[],sw=new A,rw=new A,ow=new A,go=class s extends Fe{constructor(e){super({type:Fe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=A,r=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Fd({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new A),s.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){let i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){let n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){let i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)Ds.set(r[o][0],r[o][1],r[o][2]),t.vmult(Ds,Ds),e.vadd(Ds,Ds),n(Ds.x,Ds.y,Ds.z)}calculateWorldAABB(e,t,n,i){let r=this.halfExtents;Hi[0].set(r.x,r.y,r.z),Hi[1].set(-r.x,r.y,r.z),Hi[2].set(-r.x,-r.y,r.z),Hi[3].set(-r.x,-r.y,-r.z),Hi[4].set(r.x,-r.y,-r.z),Hi[5].set(r.x,r.y,-r.z),Hi[6].set(-r.x,r.y,-r.z),Hi[7].set(r.x,-r.y,r.z);let o=Hi[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){let l=Hi[a];t.vmult(l,l),e.vadd(l,l);let c=l.x,u=l.y,h=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),h>i.z&&(i.z=h),c<n.x&&(n.x=c),u<n.y&&(n.y=u),h<n.z&&(n.z=h)}}},Ds=new A,Hi=[new A,new A,new A,new A,new A,new A,new A,new A],Xd={DYNAMIC:1,STATIC:2,KINEMATIC:4},Yd={AWAKE:0,SLEEPY:1,SLEEPING:2},st=class s extends Du{constructor(e){e===void 0&&(e={}),super(),this.id=s.idCounter++,this.index=-1,this.world=null,this.vlambda=new A,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new A,this.previousPosition=new A,this.interpolatedPosition=new A,this.initPosition=new A,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new A,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new A,this.force=new A;let t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?s.STATIC:s.DYNAMIC,typeof e.type==typeof s.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=s.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new A,this.quaternion=new Rn,this.initQuaternion=new Rn,this.previousQuaternion=new Rn,this.interpolatedQuaternion=new Rn,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new A,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new A,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new A,this.invInertia=new A,this.invInertiaWorld=new Ns,this.invMassSolve=0,this.invInertiaSolve=new A,this.invInertiaWorldSolve=new Ns,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new A(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new A(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Qn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new A,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=s.AWAKE,this.wakeUpAfterNarrowphase=!1,e===s.SLEEPING&&this.dispatchEvent(s.wakeupEvent)}sleep(){this.sleepState=s.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===s.AWAKE&&n<i?(this.sleepState=s.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(s.sleepyEvent)):t===s.SLEEPY&&n>i?this.wakeUp():t===s.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(s.sleepEvent))}}updateSolveMassProperties(){this.sleepState===s.SLEEPING||this.type===s.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new A),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new A),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new A),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new A),this.quaternion.vmult(e,t),t}addShape(e,t,n){let i=new A,r=new Rn;return t&&i.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,t=this.shapeOffsets,n=e.length,i=0;for(let r=0;r!==n;r++){let o=e[r];o.updateBoundingSphereRadius();let a=t[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){let e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,r=aw,o=lw,a=this.quaternion,l=this.aabb,c=cw;for(let u=0;u!==i;u++){let h=e[u];a.vmult(t[u],r),r.vadd(this.position,r),a.mult(n[u],o),h.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){let n=uw,i=hw;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new A),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=dw;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new A),this.type!==s.DYNAMIC)return;let n=pw,i=mw;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===s.DYNAMIC&&(this.sleepState===s.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new A),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=t,i=gw;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let r=xw;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new A),this.type!==s.DYNAMIC)return;let n=vw,i=yw;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){let e=bw;this.invMass=this.mass>0?1/this.mass:0;let t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),go.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){let n=new A;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===s.DYNAMIC||this.type===s.KINEMATIC)||this.sleepState===s.SLEEPING)return;let i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,h=this.invInertiaWorld,f=this.linearFactor,d=u*e;i.x+=a.x*d*f.x,i.y+=a.y*d*f.y,i.z+=a.z*d*f.z;let g=h.elements,x=this.angularFactor,m=l.x*x.x,p=l.y*x.y,v=l.z*x.z;r.x+=e*(g[0]*m+g[1]*p+g[2]*v),r.y+=e*(g[3]*m+g[4]*p+g[5]*v),r.z+=e*(g[6]*m+g[7]*p+g[8]*v),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};st.idCounter=0;st.COLLIDE_EVENT_NAME="collide";st.DYNAMIC=Xd.DYNAMIC;st.STATIC=Xd.STATIC;st.KINEMATIC=Xd.KINEMATIC;st.AWAKE=Yd.AWAKE;st.SLEEPY=Yd.SLEEPY;st.SLEEPING=Yd.SLEEPING;st.wakeupEvent={type:"wakeup"};st.sleepyEvent={type:"sleepy"};st.sleepEvent={type:"sleep"};var aw=new A,lw=new Rn,cw=new Qn,uw=new Ns,hw=new Ns,fw=new Ns,dw=new A,pw=new A,mw=new A,gw=new A,xw=new A,vw=new A,yw=new A,bw=new A,Nu=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&st.STATIC)!==0||e.sleepState===st.SLEEPING)&&((t.type&st.STATIC)!==0||t.sleepState===st.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){let r=Mw;t.position.vsub(e.position,r);let o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){let n=_w,i=ww,r=Sw,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){let l=i[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){let n=new A;e.position.vsub(t.position,n);let i=e.shapes[0],r=t.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},Mw=new A;new A;new Rn;new A;var _w={keys:[]},ww=[],Sw=[];new A;var w3=new A;new A;var Ud=class extends Nu{constructor(){super()}collisionPairs(e,t,n){let i=e.bodies,r=i.length,o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){let r=e.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}},xo=class{constructor(){this.rayFromWorld=new A,this.rayToWorld=new A,this.hitNormalWorld=new A,this.hitPointWorld=new A,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}},i0,s0,r0,o0,a0,l0,c0,jd={CLOSEST:1,ANY:2,ALL:4};i0=Fe.types.SPHERE;s0=Fe.types.PLANE;r0=Fe.types.BOX;o0=Fe.types.CYLINDER;a0=Fe.types.CONVEXPOLYHEDRON;l0=Fe.types.HEIGHTFIELD;c0=Fe.types.TRIMESH;var ui=class s{get[i0](){return this._intersectSphere}get[s0](){return this._intersectPlane}get[r0](){return this._intersectBox}get[o0](){return this._intersectConvex}get[a0](){return this._intersectConvex}get[l0](){return this._intersectHeightfield}get[c0](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new A),t===void 0&&(t=new A),this.from=e.clone(),this.to=t.clone(),this.direction=new A,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=s.ANY,this.result=new xo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||s.ANY,this.result=t.result||new xo,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Xg),Ld.length=0,e.broadphase.aabbQuery(e,Xg,Ld),this.intersectBodies(Ld),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=Ew,r=Tw;for(let o=0,a=e.shapes.length;o<a;o++){let l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,r,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){let r=this.from;if(Vw(r,this.direction,n)>e.boundingSphereRadius)return;let a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,r)}_intersectPlane(e,t,n,i,r){let o=this.from,a=this.to,l=this.direction,c=new A(0,0,1);t.vmult(c,c);let u=new A;o.vsub(n,u);let h=u.dot(c);a.vsub(n,u);let f=u.dot(c);if(h*f>0||o.distanceTo(a)<h)return;let d=c.dot(l);if(Math.abs(d)<this.precision)return;let g=new A,x=new A,m=new A;o.vsub(n,g);let p=-c.dot(g)/d;l.scale(p,x),o.vadd(x,m),this.reportIntersection(c,m,r,i,-1)}getAABB(e){let{lowerBound:t,upperBound:n}=e,i=this.to,r=this.from;t.x=Math.min(i.x,r.x),t.y=Math.min(i.y,r.y),t.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(e,t,n,i,r){e.data,e.elementSize;let o=Aw;o.from.copy(this.from),o.to.copy(this.to),bt.pointToLocalFrame(n,t,o.from,o.from),bt.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();let a=Cw,l,c,u,h;l=c=0,u=h=e.data.length-1;let f=new Qn;o.getAABB(f),e.getIndexOfPosition(f.lowerBound.x,f.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(f.upperBound.x,f.upperBound.y,a,!0),u=Math.min(u,a[0]+1),h=Math.min(h,a[1]+1);for(let d=l;d<u;d++)for(let g=c;g<h;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(d,g,f),!!f.overlapsRay(o)){if(e.getConvexTrianglePillar(d,g,!1),bt.pointToWorldFrame(n,t,e.pillarOffset,Au),this._intersectConvex(e.pillarConvex,t,Au,i,r,Yg),this.result.shouldStop)return;e.getConvexTrianglePillar(d,g,!0),bt.pointToWorldFrame(n,t,e.pillarOffset,Au),this._intersectConvex(e.pillarConvex,t,Au,i,r,Yg)}}}_intersectSphere(e,t,n,i,r){let o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),h=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,f=u**2-4*c*h,d=Rw,g=Pw;if(!(f<0))if(f===0)o.lerp(a,f,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,i,-1);else{let x=(-u-Math.sqrt(f))/(2*c),m=(-u+Math.sqrt(f))/(2*c);if(x>=0&&x<=1&&(o.lerp(a,x,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,i,-1))}}_intersectConvex(e,t,n,i,r,o){let a=Iw,l=jg,c=o&&o.faceList||null,u=e.faces,h=e.vertices,f=e.faceNormals,d=this.direction,g=this.from,x=this.to,m=g.distanceTo(x),p=c?c.length:u.length,v=this.result;for(let b=0;!v.shouldStop&&b<p;b++){let y=c?c[b]:b,w=u[y],S=f[y],R=t,C=n;l.copy(h[w[0]]),R.vmult(l,l),l.vadd(C,l),l.vsub(g,l),R.vmult(S,a);let M=d.dot(a);if(Math.abs(M)<this.precision)continue;let _=a.dot(l)/M;if(!(_<0)){d.scale(_,Un),Un.vadd(g,Un),Ci.copy(h[w[0]]),R.vmult(Ci,Ci),C.vadd(Ci,Ci);for(let T=1;!v.shouldStop&&T<w.length-1;T++){Vi.copy(h[w[T]]),Gi.copy(h[w[T+1]]),R.vmult(Vi,Vi),R.vmult(Gi,Gi),C.vadd(Vi,Vi),C.vadd(Gi,Gi);let z=Un.distanceTo(g);!(s.pointInTriangle(Un,Ci,Vi,Gi)||s.pointInTriangle(Un,Vi,Ci,Gi))||z>m||this.reportIntersection(a,Un,r,i,y)}}}}_intersectTrimesh(e,t,n,i,r,o){let a=Nw,l=kw,c=Hw,u=jg,h=Bw,f=Fw,d=Uw,g=zw,x=Ow,m=e.indices;e.vertices;let p=this.from,v=this.to,b=this.direction;c.position.copy(n),c.quaternion.copy(t),bt.vectorToLocalFrame(n,t,b,h),bt.pointToLocalFrame(n,t,p,f),bt.pointToLocalFrame(n,t,v,d),d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,d.vsub(f,h),h.normalize();let y=f.distanceSquared(d);e.tree.rayQuery(this,c,l);for(let w=0,S=l.length;!this.result.shouldStop&&w!==S;w++){let R=l[w];e.getNormal(R,a),e.getVertex(m[R*3],Ci),Ci.vsub(f,u);let C=h.dot(a),M=a.dot(u)/C;if(M<0)continue;h.scale(M,Un),Un.vadd(f,Un),e.getVertex(m[R*3+1],Vi),e.getVertex(m[R*3+2],Gi);let _=Un.distanceSquared(f);!(s.pointInTriangle(Un,Vi,Ci,Gi)||s.pointInTriangle(Un,Ci,Vi,Gi))||_>y||(bt.vectorToWorldFrame(t,a,x),bt.pointToWorldFrame(n,t,Un,g),this.reportIntersection(x,g,r,i,R))}l.length=0}reportIntersection(e,t,n,i,r){let o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case s.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case s.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case s.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,pr),n.vsub(t,za),e.vsub(t,Dd);let r=pr.dot(pr),o=pr.dot(za),a=pr.dot(Dd),l=za.dot(za),c=za.dot(Dd),u,h;return(u=l*a-o*c)>=0&&(h=r*c-o*a)>=0&&u+h<r*l-o*o}};ui.CLOSEST=jd.CLOSEST;ui.ANY=jd.ANY;ui.ALL=jd.ALL;var Xg=new Qn,Ld=[],za=new A,Dd=new A,Ew=new A,Tw=new Rn,Un=new A,Ci=new A,Vi=new A,Gi=new A;new A;new xo;var Yg={faceList:[0]},Au=new A,Aw=new ui,Cw=[],Rw=new A,Pw=new A,Iw=new A,Lw=new A,Dw=new A,jg=new A,Nw=new A,Bw=new A,Fw=new A,Uw=new A,Ow=new A,zw=new A;new Qn;var kw=[],Hw=new bt,pr=new A,Cu=new A;function Vw(s,e,t){t.vsub(s,pr);let n=pr.dot(e);return e.scale(n,Cu),Cu.vadd(s,Cu),t.distanceTo(Cu)}var Bu=class s extends Nu{static checkBounds(e,t,n){let i,r;n===0?(i=e.position.x,r=t.position.x):n===1?(i=e.position.y,r=t.position.y):n===2&&(i=e.position.z,r=t.position.z);let o=e.boundingRadius,a=t.boundingRadius,l=i+o;return r-a<l}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){let i=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.x<=i.aabb.lowerBound.x);r--)e[r+1]=e[r];e[r+1]=i}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){let i=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.y<=i.aabb.lowerBound.y);r--)e[r+1]=e[r];e[r+1]=i}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){let i=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.z<=i.aabb.lowerBound.z);r--)e[r+1]=e[r];e[r+1]=i}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;let t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{let i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){let i=this.axisList,r=i.length,o=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let c=i[a];for(l=a+1;l<r;l++){let u=i[l];if(this.needBroadphaseCollision(c,u)){if(!s.checkBounds(c,u,o))break;this.intersectionTest(c,u,t,n)}}}}sortList(){let e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){let r=e[i];r.aabbNeedsUpdate&&r.updateAABB()}t===0?s.insertionSortX(e):t===1?s.insertionSortY(e):t===2&&s.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,r=0,o=0,a=this.axisList,l=a.length,c=1/l;for(let d=0;d!==l;d++){let g=a[d],x=g.position.x;e+=x,t+=x*x;let m=g.position.y;n+=m,i+=m*m;let p=g.position.z;r+=p,o+=p*p}let u=t-e*e*c,h=i-n*n*c,f=o-r*r*c;u>h?u>f?this.axisIndex=0:this.axisIndex=2:h>f?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let i=this.axisIndex,r="x";i===1&&(r="y"),i===2&&(r="z");let o=this.axisList;t.lowerBound[r],t.upperBound[r];for(let a=0;a<o.length;a++){let l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(t)&&n.push(l)}return n}},Fu=class{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}},Od=class s{constructor(e,t,n){n===void 0&&(n={}),n=Fu.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=s.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}};Od.idCounter=0;var Uu=class{constructor(){this.spatial=new A,this.rotational=new A}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}},Ga=class s{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=s.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Uu,this.jacobianElementB=new Uu,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){let i=t,r=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(e,t,n){let i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-i*t-o*n}computeGq(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return r.scale(c,Zg),a.scale(u,Kg),n.invInertiaWorldSolve.vmult(o,Jg),i.invInertiaWorldSolve.vmult(l,Qg),e.multiplyVectors(Zg,Jg)+t.multiplyVectors(Kg,Qg)}computeGiMGt(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve,c=r+o;return a.vmult(e.rotational,Ru),c+=Ru.dot(e.rotational),l.vmult(t.rotational,Ru),c+=Ru.dot(t.rotational),c}addToWlambda(e){let t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=Gw;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Ga.idCounter=0;var Zg=new A,Kg=new A,Jg=new A,Qg=new A,Ru=new A,Gw=new A,zd=class extends Ga{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new A,this.rj=new A,this.ni=new A}computeB(e){let t=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=Ww,c=qw,u=i.velocity,h=i.angularVelocity;i.force,i.torque;let f=r.velocity,d=r.angularVelocity;r.force,r.torque;let g=Xw,x=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(x.spatial),l.negate(x.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);let v=p.dot(g),b=this.restitution+1,y=b*f.dot(p)-b*u.dot(p)+d.dot(c)-h.dot(l),w=this.computeGiMf();return-v*t-y*n-e*w}getImpactVelocityAlongNormal(){let e=Yw,t=jw,n=Zw,i=Kw,r=Jw;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,r),this.ni.dot(r)}},Ww=new A,qw=new A,Xw=new A,Yw=new A,jw=new A,Zw=new A,Kw=new A,Jw=new A;var S3=new A,E3=new A;var T3=new A,A3=new A;new A;new A;var C3=new A,R3=new A;var P3=new A,I3=new A,Ou=class extends Ga{constructor(e,t,n){super(e,t,-n,n),this.ri=new A,this.rj=new A,this.t=new A}computeB(e){this.a;let t=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,r=Qw,o=$w,a=this.t;n.cross(a,r),i.cross(a,o);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);let u=this.computeGW(),h=this.computeGiMf();return-u*t-e*h}},Qw=new A,$w=new A,zu=class s{constructor(e,t,n){n=Fu.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};zu.idCounter=0;var ku=class s{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=s.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}};ku.idCounter=0;var L3=new A,D3=new A,N3=new A,B3=new A,F3=new A,U3=new A,O3=new A,z3=new A,k3=new A,H3=new A,V3=new A;var G3=new A,W3=new A;new A;new A;new A;var q3=new A,X3=new A,Y3=new A;new ui;new A;var j3=new A,Z3=new A,K3=[new A(1,0,0),new A(0,1,0),new A(0,0,1)],J3=new A;var Q3=new A,$3=new A,eP=new A;var tP=new A,nP=new A,iP=new A,sP=new A;var rP=new A,oP=new A,aP=new A;var Wa=class extends Fe{constructor(e){if(super({type:Fe.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new A);let n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){let r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){let l=o[a];n[l]=e[l]-r,i[l]=e[l]+r}}};var lP=new A,cP=new A;var uP=new A,hP=new A,fP=new A,dP=new A,pP=new A,mP=new A,gP=new A;var Hu=class extends Fe{constructor(){super({type:Fe.types.PLANE}),this.worldNormal=new A,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){let t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new A),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){cs.set(0,0,1),t.vmult(cs,cs);let r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),cs.x===1?i.x=e.x:cs.x===-1&&(n.x=e.x),cs.y===1?i.y=e.y:cs.y===-1&&(n.y=e.y),cs.z===1?i.z=e.z:cs.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}},cs=new A;var xP=new A,vP=new A,yP=new A,bP=new A,MP=new A,_P=new A,wP=new A,SP=new A,EP=new A;var TP=new A,AP=new Qn;var CP=new A,RP=new Qn,PP=new A,IP=new A,LP=new A,DP=new A,NP=new A,BP=new A,FP=new A,UP=new Qn,OP=new A,zP=new bt,kP=new Qn,kd=class{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}},Hd=class extends kd{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0,i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,u=e,h,f,d,g,x,m;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();let p=tS,v=nS,b=eS;p.length=a,v.length=a,b.length=a;for(let y=0;y!==a;y++){let w=o[y];b[y]=0,v[y]=w.computeB(u),p[y]=1/w.computeC()}if(a!==0){for(let S=0;S!==c;S++){let R=l[S],C=R.vlambda,M=R.wlambda;C.set(0,0,0),M.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let S=0;S!==a;S++){let R=o[S];h=v[S],f=p[S],m=b[S],x=R.computeGWlambda(),d=f*(h-x-R.eps*m),m+d<R.minForce?d=R.minForce-m:m+d>R.maxForce&&(d=R.maxForce-m),b[S]+=d,g+=d>0?d:-d,R.addToWlambda(d)}if(g*g<r)break}for(let S=0;S!==c;S++){let R=l[S],C=R.velocity,M=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),C.vadd(R.vlambda,C),R.wlambda.vmul(R.angularFactor,R.wlambda),M.vadd(R.wlambda,M)}let y=o.length,w=1/u;for(;y--;)o[y].multiplier=b[y]*w}return n}},eS=[],tS=[],nS=[];var HP=st.STATIC;var Vd=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){let t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}},Gd=class extends Vd{constructor(){super(...arguments),this.type=A}constructObject(){return new A}},Dt={sphereSphere:Fe.types.SPHERE,spherePlane:Fe.types.SPHERE|Fe.types.PLANE,boxBox:Fe.types.BOX|Fe.types.BOX,sphereBox:Fe.types.SPHERE|Fe.types.BOX,planeBox:Fe.types.PLANE|Fe.types.BOX,convexConvex:Fe.types.CONVEXPOLYHEDRON,sphereConvex:Fe.types.SPHERE|Fe.types.CONVEXPOLYHEDRON,planeConvex:Fe.types.PLANE|Fe.types.CONVEXPOLYHEDRON,boxConvex:Fe.types.BOX|Fe.types.CONVEXPOLYHEDRON,sphereHeightfield:Fe.types.SPHERE|Fe.types.HEIGHTFIELD,boxHeightfield:Fe.types.BOX|Fe.types.HEIGHTFIELD,convexHeightfield:Fe.types.CONVEXPOLYHEDRON|Fe.types.HEIGHTFIELD,sphereParticle:Fe.types.PARTICLE|Fe.types.SPHERE,planeParticle:Fe.types.PLANE|Fe.types.PARTICLE,boxParticle:Fe.types.BOX|Fe.types.PARTICLE,convexParticle:Fe.types.PARTICLE|Fe.types.CONVEXPOLYHEDRON,cylinderCylinder:Fe.types.CYLINDER,sphereCylinder:Fe.types.SPHERE|Fe.types.CYLINDER,planeCylinder:Fe.types.PLANE|Fe.types.CYLINDER,boxCylinder:Fe.types.BOX|Fe.types.CYLINDER,convexCylinder:Fe.types.CONVEXPOLYHEDRON|Fe.types.CYLINDER,heightfieldCylinder:Fe.types.HEIGHTFIELD|Fe.types.CYLINDER,particleCylinder:Fe.types.PARTICLE|Fe.types.CYLINDER,sphereTrimesh:Fe.types.SPHERE|Fe.types.TRIMESH,planeTrimesh:Fe.types.PLANE|Fe.types.TRIMESH},Wd=class{get[Dt.sphereSphere](){return this.sphereSphere}get[Dt.spherePlane](){return this.spherePlane}get[Dt.boxBox](){return this.boxBox}get[Dt.sphereBox](){return this.sphereBox}get[Dt.planeBox](){return this.planeBox}get[Dt.convexConvex](){return this.convexConvex}get[Dt.sphereConvex](){return this.sphereConvex}get[Dt.planeConvex](){return this.planeConvex}get[Dt.boxConvex](){return this.boxConvex}get[Dt.sphereHeightfield](){return this.sphereHeightfield}get[Dt.boxHeightfield](){return this.boxHeightfield}get[Dt.convexHeightfield](){return this.convexHeightfield}get[Dt.sphereParticle](){return this.sphereParticle}get[Dt.planeParticle](){return this.planeParticle}get[Dt.boxParticle](){return this.boxParticle}get[Dt.convexParticle](){return this.convexParticle}get[Dt.cylinderCylinder](){return this.convexConvex}get[Dt.sphereCylinder](){return this.sphereConvex}get[Dt.planeCylinder](){return this.planeConvex}get[Dt.boxCylinder](){return this.boxConvex}get[Dt.convexCylinder](){return this.convexConvex}get[Dt.heightfieldCylinder](){return this.heightfieldCylinder}get[Dt.particleCylinder](){return this.particleCylinder}get[Dt.sphereTrimesh](){return this.sphereTrimesh}get[Dt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Gd,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new zd(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||e.material,u=i.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){let n=e.bi,i=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,u=r.material||n.material,h=o.material||i.material;if(u&&h&&u.friction>=0&&h.friction>=0&&(c=u.friction*h.friction),c>0){let f=c*(a.frictionGravity||a.gravity).length(),d=n.invMass+i.invMass;d>0&&(d=1/d);let g=this.frictionEquationPool,x=g.length?g.pop():new Ou(n,i,f*d),m=g.length?g.pop():new Ou(n,i,f*d);return x.bi=m.bi=n,x.bj=m.bj=i,x.minForce=m.minForce=-f*d,x.maxForce=m.maxForce=f*d,x.ri.copy(e.ri),x.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(x.t,m.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=m.enabled=e.enabled,t.push(x,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];dr.setZero(),po.setZero(),mo.setZero();let r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(dr.vadd(t.ni,dr),po.vadd(t.ri,po),mo.vadd(t.rj,mo)):(dr.vsub(t.ni,dr),po.vadd(t.rj,po),mo.vadd(t.ri,mo));let o=1/e;po.scale(o,n.ri),mo.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),dr.normalize(),dr.tangents(n.t,i.t)}getContacts(e,t,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let l=rS,c=oS,u=iS,h=sS;for(let f=0,d=e.length;f!==d;f++){let g=e[f],x=t[f],m=null;g.material&&x.material&&(m=n.getContactMaterial(g.material,x.material)||null);let p=g.type&st.KINEMATIC&&x.type&st.STATIC||g.type&st.STATIC&&x.type&st.KINEMATIC||g.type&st.KINEMATIC&&x.type&st.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);let b=g.shapes[v];for(let y=0;y<x.shapes.length;y++){x.quaternion.mult(x.shapeOrientations[y],c),x.quaternion.vmult(x.shapeOffsets[y],h),h.vadd(x.position,h);let w=x.shapes[y];if(!(b.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&b.collisionFilterGroup)||u.distanceTo(h)>b.boundingSphereRadius+w.boundingSphereRadius)continue;let S=null;b.material&&w.material&&(S=n.getContactMaterial(b.material,w.material)||null),this.currentContactMaterial=S||m||n.defaultContactMaterial;let R=b.type|w.type,C=this[R];if(C){let M=!1;b.type<w.type?M=C.call(this,b,w,u,h,l,c,g,x,b,w,p):M=C.call(this,w,b,h,u,c,l,x,g,b,w,p),M&&p&&(n.shapeOverlapKeeper.set(b.id,w.id),n.bodyOverlapKeeper.set(g.id,x.id))}}}}}sphereSphere(e,t,n,i,r,o,a,l,c,u,h){if(h)return n.distanceSquared(i)<(e.radius+t.radius)**2;let f=this.createContactEquation(a,l,e,t,c,u);i.vsub(n,f.ni),f.ni.normalize(),f.ri.copy(f.ni),f.rj.copy(f.ni),f.ri.scale(e.radius,f.ri),f.rj.scale(-t.radius,f.rj),f.ri.vadd(n,f.ri),f.ri.vsub(a.position,f.ri),f.rj.vadd(i,f.rj),f.rj.vsub(l.position,f.rj),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}spherePlane(e,t,n,i,r,o,a,l,c,u,h){let f=this.createContactEquation(a,l,e,t,c,u);if(f.ni.set(0,0,1),o.vmult(f.ni,f.ni),f.ni.negate(f.ni),f.ni.normalize(),f.ni.scale(e.radius,f.ri),n.vsub(i,Pu),f.ni.scale(f.ni.dot(Pu),$g),Pu.vsub($g,f.rj),-Pu.dot(f.ni)<=e.radius){if(h)return!0;let d=f.ri,g=f.rj;d.vadd(n,d),d.vsub(a.position,d),g.vadd(i,g),g.vsub(l.position,g),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxBox(e,t,n,i,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,h)}sphereBox(e,t,n,i,r,o,a,l,c,u,h){let f=this.v3pool,d=LS;n.vsub(i,Iu),t.getSideNormals(d,o);let g=e.radius,x=!1,m=NS,p=BS,v=FS,b=null,y=0,w=0,S=0,R=null;for(let D=0,ee=d.length;D!==ee&&x===!1;D++){let V=RS;V.copy(d[D]);let te=V.length();V.normalize();let q=Iu.dot(V);if(q<te+g&&q>0){let G=PS,K=IS;G.copy(d[(D+1)%3]),K.copy(d[(D+2)%3]);let ge=G.length(),xe=K.length();G.normalize(),K.normalize();let Y=Iu.dot(G),ue=Iu.dot(K);if(Y<ge&&Y>-ge&&ue<xe&&ue>-xe){let ce=Math.abs(q-te-g);if((R===null||ce<R)&&(R=ce,w=Y,S=ue,b=te,m.copy(V),p.copy(G),v.copy(K),y++,h))return!0}}}if(y){x=!0;let D=this.createContactEquation(a,l,e,t,c,u);m.scale(-g,D.ri),D.ni.copy(m),D.ni.negate(D.ni),m.scale(b,m),p.scale(w,p),m.vadd(p,m),v.scale(S,v),m.vadd(v,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let C=f.get(),M=DS;for(let D=0;D!==2&&!x;D++)for(let ee=0;ee!==2&&!x;ee++)for(let V=0;V!==2&&!x;V++)if(C.set(0,0,0),D?C.vadd(d[0],C):C.vsub(d[0],C),ee?C.vadd(d[1],C):C.vsub(d[1],C),V?C.vadd(d[2],C):C.vsub(d[2],C),i.vadd(C,M),M.vsub(n,M),M.lengthSquared()<g*g){if(h)return!0;x=!0;let te=this.createContactEquation(a,l,e,t,c,u);te.ri.copy(M),te.ri.normalize(),te.ni.copy(te.ri),te.ri.scale(g,te.ri),te.rj.copy(C),te.ri.vadd(n,te.ri),te.ri.vsub(a.position,te.ri),te.rj.vadd(i,te.rj),te.rj.vsub(l.position,te.rj),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult)}f.release(C),C=null;let _=f.get(),T=f.get(),z=f.get(),L=f.get(),O=f.get(),F=d.length;for(let D=0;D!==F&&!x;D++)for(let ee=0;ee!==F&&!x;ee++)if(D%3!==ee%3){d[ee].cross(d[D],_),_.normalize(),d[D].vadd(d[ee],T),z.copy(n),z.vsub(T,z),z.vsub(i,z);let V=z.dot(_);_.scale(V,L);let te=0;for(;te===D%3||te===ee%3;)te++;O.copy(n),O.vsub(L,O),O.vsub(T,O),O.vsub(i,O);let q=Math.abs(V),G=O.length();if(q<d[te].length()&&G<g){if(h)return!0;x=!0;let K=this.createContactEquation(a,l,e,t,c,u);T.vadd(L,K.rj),K.rj.copy(K.rj),O.negate(K.ni),K.ni.normalize(),K.ri.copy(K.rj),K.ri.vadd(i,K.ri),K.ri.vsub(n,K.ri),K.ri.normalize(),K.ri.scale(g,K.ri),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(l.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}}f.release(_,T,z,L,O)}planeBox(e,t,n,i,r,o,a,l,c,u,h){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,h)}convexConvex(e,t,n,i,r,o,a,l,c,u,h,f,d){let g=JS;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,i,o,g,f,d)){let x=[],m=QS;e.clipAgainstHull(n,r,t,i,o,g,-100,100,x);let p=0;for(let v=0;v!==x.length;v++){if(h)return!0;let b=this.createContactEquation(a,l,e,t,c,u),y=b.ri,w=b.rj;g.negate(b.ni),x[v].normal.negate(m),m.scale(x[v].depth,m),x[v].point.vadd(m,y),w.copy(x[v].point),y.vsub(n,y),w.vsub(i,w),y.vadd(n,y),y.vsub(a.position,y),w.vadd(i,w),w.vsub(l.position,w),this.result.push(b),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,i,r,o,a,l,c,u,h){let f=this.v3pool;n.vsub(i,US);let d=t.faceNormals,g=t.faces,x=t.vertices,m=e.radius,p=!1;for(let v=0;v!==x.length;v++){let b=x[v],y=HS;o.vmult(b,y),i.vadd(y,y);let w=kS;if(y.vsub(n,w),w.lengthSquared()<m*m){if(h)return!0;p=!0;let S=this.createContactEquation(a,l,e,t,c,u);S.ri.copy(w),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(m,S.ri),y.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(l.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let v=0,b=g.length;v!==b&&p===!1;v++){let y=d[v],w=g[v],S=VS;o.vmult(y,S);let R=GS;o.vmult(x[w[0]],R),R.vadd(i,R);let C=WS;S.scale(-m,C),n.vadd(C,C);let M=qS;C.vsub(R,M);let _=M.dot(S),T=XS;if(n.vsub(R,T),_<0&&T.dot(S)>0){let z=[];for(let L=0,O=w.length;L!==O;L++){let F=f.get();o.vmult(x[w[L]],F),i.vadd(F,F),z.push(F)}if(CS(z,S,n)){if(h)return!0;p=!0;let L=this.createContactEquation(a,l,e,t,c,u);S.scale(-m,L.ri),S.negate(L.ni);let O=f.get();S.scale(-_,O);let F=f.get();S.scale(-m,F),n.vsub(i,L.rj),L.rj.vadd(F,L.rj),L.rj.vadd(O,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(l.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),f.release(O),f.release(F),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let D=0,ee=z.length;D!==ee;D++)f.release(z[D]);return}else for(let L=0;L!==w.length;L++){let O=f.get(),F=f.get();o.vmult(x[w[(L+1)%w.length]],O),o.vmult(x[w[(L+2)%w.length]],F),i.vadd(O,O),i.vadd(F,F);let D=OS;F.vsub(O,D);let ee=zS;D.unit(ee);let V=f.get(),te=f.get();n.vsub(O,te);let q=te.dot(ee);ee.scale(q,V),V.vadd(O,V);let G=f.get();if(V.vsub(n,G),q>0&&q*q<D.lengthSquared()&&G.lengthSquared()<m*m){if(h)return!0;let K=this.createContactEquation(a,l,e,t,c,u);V.vsub(i,K.rj),V.vsub(n,K.ni),K.ni.normalize(),K.ni.scale(m,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(l.position,K.rj),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult);for(let ge=0,xe=z.length;ge!==xe;ge++)f.release(z[ge]);f.release(O),f.release(F),f.release(V),f.release(G),f.release(te);return}f.release(O),f.release(F),f.release(V),f.release(G),f.release(te)}for(let L=0,O=z.length;L!==O;L++)f.release(z[L])}}}planeConvex(e,t,n,i,r,o,a,l,c,u,h){let f=YS,d=jS;d.set(0,0,1),r.vmult(d,d);let g=0,x=ZS;for(let m=0;m!==t.vertices.length;m++)if(f.copy(t.vertices[m]),o.vmult(f,f),i.vadd(f,f),f.vsub(n,x),d.dot(x)<=0){if(h)return!0;let v=this.createContactEquation(a,l,e,t,c,u),b=KS;d.scale(d.dot(x),b),f.vsub(b,b),b.vsub(n,v.ri),v.ni.copy(d),f.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,h)}sphereHeightfield(e,t,n,i,r,o,a,l,c,u,h){let f=t.data,d=e.radius,g=t.elementSize,x=uE,m=cE;bt.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-d)/g)-1,v=Math.ceil((m.x+d)/g)+1,b=Math.floor((m.y-d)/g)-1,y=Math.ceil((m.y+d)/g)+1;if(v<0||y<0||p>f.length||b>f[0].length)return;p<0&&(p=0),v<0&&(v=0),b<0&&(b=0),y<0&&(y=0),p>=f.length&&(p=f.length-1),v>=f.length&&(v=f.length-1),y>=f[0].length&&(y=f[0].length-1),b>=f[0].length&&(b=f[0].length-1);let w=[];t.getRectMinMax(p,b,v,y,w);let S=w[0],R=w[1];if(m.z-d>R||m.z+d<S)return;let C=this.result;for(let M=p;M<v;M++)for(let _=b;_<y;_++){let T=C.length,z=!1;if(t.getConvexTrianglePillar(M,_,!1),bt.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.sphereConvex(e,t.pillarConvex,n,x,r,o,a,l,e,t,h)),h&&z||(t.getConvexTrianglePillar(M,_,!0),bt.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.sphereConvex(e,t.pillarConvex,n,x,r,o,a,l,e,t,h)),h&&z))return!0;if(C.length-T>2)return}}boxHeightfield(e,t,n,i,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,h)}convexHeightfield(e,t,n,i,r,o,a,l,c,u,h){let f=t.data,d=t.elementSize,g=e.boundingSphereRadius,x=aE,m=lE,p=oE;bt.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-g)/d)-1,b=Math.ceil((p.x+g)/d)+1,y=Math.floor((p.y-g)/d)-1,w=Math.ceil((p.y+g)/d)+1;if(b<0||w<0||v>f.length||y>f[0].length)return;v<0&&(v=0),b<0&&(b=0),y<0&&(y=0),w<0&&(w=0),v>=f.length&&(v=f.length-1),b>=f.length&&(b=f.length-1),w>=f[0].length&&(w=f[0].length-1),y>=f[0].length&&(y=f[0].length-1);let S=[];t.getRectMinMax(v,y,b,w,S);let R=S[0],C=S[1];if(!(p.z-g>C||p.z+g<R))for(let M=v;M<b;M++)for(let _=y;_<w;_++){let T=!1;if(t.getConvexTrianglePillar(M,_,!1),bt.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(T=this.convexConvex(e,t.pillarConvex,n,x,r,o,a,l,null,null,h,m,null)),h&&T||(t.getConvexTrianglePillar(M,_,!0),bt.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(T=this.convexConvex(e,t.pillarConvex,n,x,r,o,a,l,null,null,h,m,null)),h&&T))return!0}}sphereParticle(e,t,n,i,r,o,a,l,c,u,h){let f=nE;if(f.set(0,0,1),i.vsub(n,f),f.lengthSquared()<=e.radius*e.radius){if(h)return!0;let g=this.createContactEquation(l,a,t,e,c,u);f.normalize(),g.rj.copy(f),g.rj.scale(e.radius,g.rj),g.ni.copy(f),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,r,o,a,l,c,u,h){let f=$S;f.set(0,0,1),a.quaternion.vmult(f,f);let d=eE;if(i.vsub(a.position,d),f.dot(d)<=0){if(h)return!0;let x=this.createContactEquation(l,a,t,e,c,u);x.ni.copy(f),x.ni.negate(x.ni),x.ri.set(0,0,0);let m=tE;f.scale(f.dot(i),m),i.vsub(m,m),x.rj.copy(m),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(e,t,n,i,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,h)}convexParticle(e,t,n,i,r,o,a,l,c,u,h){let f=-1,d=sE,g=rE,x=null,m=iE;if(m.copy(i),m.vsub(n,m),r.conjugate(e0),e0.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let p=0,v=e.faces.length;p!==v;p++){let b=[e.worldVertices[e.faces[p][0]]],y=e.worldFaceNormals[p];i.vsub(b[0],t0);let w=-y.dot(t0);if(x===null||Math.abs(w)<Math.abs(x)){if(h)return!0;x=w,f=p,d.copy(y)}}if(f!==-1){let p=this.createContactEquation(l,a,t,e,c,u);d.scale(x,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),d.negate(p.ni),p.ri.set(0,0,0);let v=p.ri,b=p.rj;v.vadd(i,v),v.vsub(l.position,v),b.vadd(n,b),b.vsub(a.position,b),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,r,o,a,l,c,u,h){return this.convexHeightfield(t,e,i,n,o,r,l,a,c,u,h)}particleCylinder(e,t,n,i,r,o,a,l,c,u,h){return this.convexParticle(t,e,i,n,o,r,l,a,c,u,h)}sphereTrimesh(e,t,n,i,r,o,a,l,c,u,h){let f=pS,d=mS,g=gS,x=xS,m=vS,p=yS,v=wS,b=dS,y=hS,w=SS;bt.pointToLocalFrame(i,o,n,m);let S=e.radius;v.lowerBound.set(m.x-S,m.y-S,m.z-S),v.upperBound.set(m.x+S,m.y+S,m.z+S),t.getTrianglesInAABB(v,w);let R=fS,C=e.radius*e.radius;for(let L=0;L<w.length;L++)for(let O=0;O<3;O++)if(t.getVertex(t.indices[w[L]*3+O],R),R.vsub(m,y),y.lengthSquared()<=C){if(b.copy(R),bt.pointToWorldFrame(i,o,b,R),R.vsub(n,y),h)return!0;let F=this.createContactEquation(a,l,e,t,c,u);F.ni.copy(y),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.copy(R),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let L=0;L<w.length;L++)for(let O=0;O<3;O++){t.getVertex(t.indices[w[L]*3+O],f),t.getVertex(t.indices[w[L]*3+(O+1)%3],d),d.vsub(f,g),m.vsub(d,p);let F=p.dot(g);m.vsub(f,p);let D=p.dot(g);if(D>0&&F<0&&(m.vsub(f,p),x.copy(g),x.normalize(),D=p.dot(x),x.scale(D,p),p.vadd(f,p),p.distanceTo(m)<e.radius)){if(h)return!0;let V=this.createContactEquation(a,l,e,t,c,u);p.vsub(m,V.ni),V.ni.normalize(),V.ni.scale(e.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),bt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,V.rj),bt.vectorToWorldFrame(o,V.ni,V.ni),bt.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}let M=bS,_=MS,T=_S,z=uS;for(let L=0,O=w.length;L!==O;L++){t.getTriangleVertices(w[L],M,_,T),t.getNormal(w[L],z),m.vsub(M,p);let F=p.dot(z);if(z.scale(F,p),m.vsub(p,p),F=p.distanceTo(m),ui.pointInTriangle(p,M,_,T)&&F<e.radius){if(h)return!0;let D=this.createContactEquation(a,l,e,t,c,u);p.vsub(m,D.ni),D.ni.normalize(),D.ni.scale(e.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),bt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,D.rj),bt.vectorToWorldFrame(o,D.ni,D.ni),bt.vectorToWorldFrame(o,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}w.length=0}planeTrimesh(e,t,n,i,r,o,a,l,c,u,h){let f=new A,d=aS;d.set(0,0,1),r.vmult(d,d);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,f);let x=new A;x.copy(f),bt.pointToWorldFrame(i,o,x,f);let m=lS;if(f.vsub(n,m),d.dot(m)<=0){if(h)return!0;let v=this.createContactEquation(a,l,e,t,c,u);v.ni.copy(d);let b=cS;d.scale(m.dot(d),b),f.vsub(b,b),v.ri.copy(b),v.ri.vsub(a.position,v.ri),v.rj.copy(f),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}},dr=new A,po=new A,mo=new A,iS=new A,sS=new A,rS=new Rn,oS=new Rn,aS=new A,lS=new A,cS=new A,uS=new A,hS=new A;new A;var fS=new A,dS=new A,pS=new A,mS=new A,gS=new A,xS=new A,vS=new A,yS=new A,bS=new A,MS=new A,_S=new A,wS=new Qn,SS=[],Pu=new A,$g=new A,ES=new A,TS=new A,AS=new A;function CS(s,e,t){let n=null,i=s.length;for(let r=0;r!==i;r++){let o=s[r],a=ES;s[(r+1)%i].vsub(o,a);let l=TS;a.cross(e,l);let c=AS;t.vsub(o,c);let u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}var Iu=new A,RS=new A,PS=new A,IS=new A,LS=[new A,new A,new A,new A,new A,new A],DS=new A,NS=new A,BS=new A,FS=new A,US=new A,OS=new A,zS=new A,kS=new A,HS=new A,VS=new A,GS=new A,WS=new A,qS=new A,XS=new A;new A;new A;var YS=new A,jS=new A,ZS=new A,KS=new A,JS=new A,QS=new A,$S=new A,eE=new A,tE=new A,nE=new A,e0=new Rn,iE=new A;new A;var sE=new A,t0=new A,rE=new A,oE=new A,aE=new A,lE=[0],cE=new A,uE=new A,Vu=class{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){let n=t;t=e,e=n}return e<<16|t}set(e,t){let n=this.getKey(e,t),i=this.current,r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){let n=this.current,i=this.previous,r=n.length,o=i.length,a=0;for(let l=0;l<r;l++){let c=!1,u=n[l];for(;u>i[a];)a++;c=u===i[a],c||n0(e,u)}a=0;for(let l=0;l<o;l++){let c=!1,u=i[l];for(;u>n[a];)a++;c=n[a]===u,c||n0(t,u)}}};function n0(s,e){s.push((e&4294901760)>>16,e&65535)}var Nd=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`,qd=class{constructor(){this.data={keys:[]}}get(e,t){let n=Nd(e,t);return this.data[n]}set(e,t,n){let i=Nd(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){let n=Nd(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let e=this.data,t=e.keys;for(;t.length>0;){let n=t.pop();delete e[n]}}},Gu=class extends Du{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new A,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new A,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Ud,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Hd,this.constraints=[],this.narrowphase=new Wd(this),this.collisionMatrix=new Lu,this.collisionMatrixPrevious=new Lu,this.bodyOverlapKeeper=new Vu,this.shapeOverlapKeeper=new Vu,this.contactmaterials=[],this.contactMaterialTable=new qd,this.defaultMaterial=new ku("default"),this.defaultContactMaterial=new zu(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof xo?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=ui.ALL,n.from=e,n.to=t,n.callback=i,Bd.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=ui.ANY,n.from=e,n.to=t,n.result=i,Bd.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=ui.CLOSEST,n.from=e,n.to=t,n.result=i,Bd.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof st&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let t=this.bodies;for(let n=0;n<t.length;n++){let i=t[n].shapes;for(let r=0;r<i.length;r++){let o=i[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);let n=sn.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{let i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;let i=sn.now(),r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(sn.now()-i>e*1e3)););this.accumulator=this.accumulator%e;let o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;let t=this.contacts,n=mE,i=gE,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,h=st.DYNAMIC,f=-1/0,d=this.constraints,g=pE;l.length();let x=l.x,m=l.y,p=l.z,v=0;for(c&&(f=sn.now()),v=0;v!==r;v++){let L=o[v];if(L.type===h){let O=L.force,F=L.mass;O.x+=F*x,O.y+=F*m,O.z+=F*p}}for(let L=0,O=this.subsystems.length;L!==O;L++)this.subsystems[L].update();c&&(f=sn.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=sn.now()-f);let b=d.length;for(v=0;v!==b;v++){let L=d[v];if(!L.collideConnected)for(let O=n.length-1;O>=0;O-=1)(L.bodyA===n[O]&&L.bodyB===i[O]||L.bodyB===n[O]&&L.bodyA===i[O])&&(n.splice(O,1),i.splice(O,1))}this.collisionMatrixTick(),c&&(f=sn.now());let y=dE,w=t.length;for(v=0;v!==w;v++)y.push(t[v]);t.length=0;let S=this.frictionEquations.length;for(v=0;v!==S;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,y,this.frictionEquations,g),c&&(u.narrowphase=sn.now()-f),c&&(f=sn.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);let R=t.length;for(let L=0;L!==R;L++){let O=t[L],F=O.bi,D=O.bj,ee=O.si,V=O.sj,te;if(F.material&&D.material?te=this.getContactMaterial(F.material,D.material)||this.defaultContactMaterial:te=this.defaultContactMaterial,te.friction,F.material&&D.material&&(F.material.friction>=0&&D.material.friction>=0&&F.material.friction*D.material.friction,F.material.restitution>=0&&D.material.restitution>=0&&(O.restitution=F.material.restitution*D.material.restitution)),a.addEquation(O),F.allowSleep&&F.type===st.DYNAMIC&&F.sleepState===st.SLEEPING&&D.sleepState===st.AWAKE&&D.type!==st.STATIC){let q=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),G=D.sleepSpeedLimit**2;q>=G*2&&(F.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===st.DYNAMIC&&D.sleepState===st.SLEEPING&&F.sleepState===st.AWAKE&&F.type!==st.STATIC){let q=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),G=F.sleepSpeedLimit**2;q>=G*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,D,!0),this.collisionMatrixPrevious.get(F,D)||(ka.body=D,ka.contact=O,F.dispatchEvent(ka),ka.body=F,D.dispatchEvent(ka)),this.bodyOverlapKeeper.set(F.id,D.id),this.shapeOverlapKeeper.set(ee.id,V.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=sn.now()-f,f=sn.now()),v=0;v!==r;v++){let L=o[v];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(b=d.length,v=0;v!==b;v++){let L=d[v];L.update();for(let O=0,F=L.equations.length;O!==F;O++){let D=L.equations[O];a.addEquation(D)}}a.solve(e,this),c&&(u.solve=sn.now()-f),a.removeAllEquations();let C=Math.pow;for(v=0;v!==r;v++){let L=o[v];if(L.type&h){let O=C(1-L.linearDamping,e),F=L.velocity;F.scale(O,F);let D=L.angularVelocity;if(D){let ee=C(1-L.angularDamping,e);D.scale(ee,D)}}}this.dispatchEvent(fE),c&&(f=sn.now());let _=this.stepnumber%(this.quatNormalizeSkip+1)===0,T=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(e,_,T);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=sn.now()-f),this.stepnumber+=1,this.dispatchEvent(hE);let z=!0;if(this.allowSleep)for(z=!1,v=0;v!==r;v++){let L=o[v];L.sleepTick(this.time),L.sleepState!==st.SLEEPING&&(z=!0)}this.hasActiveBodies=z}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(us,hs),e){for(let r=0,o=us.length;r<o;r+=2)Ha.bodyA=this.getBodyById(us[r]),Ha.bodyB=this.getBodyById(us[r+1]),this.dispatchEvent(Ha);Ha.bodyA=Ha.bodyB=null}if(t){for(let r=0,o=hs.length;r<o;r+=2)Va.bodyA=this.getBodyById(hs[r]),Va.bodyB=this.getBodyById(hs[r+1]),this.dispatchEvent(Va);Va.bodyA=Va.bodyB=null}us.length=hs.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(us,hs),n){for(let r=0,o=us.length;r<o;r+=2){let a=this.getShapeById(us[r]),l=this.getShapeById(us[r+1]);fs.shapeA=a,fs.shapeB=l,a&&(fs.bodyA=a.body),l&&(fs.bodyB=l.body),this.dispatchEvent(fs)}fs.bodyA=fs.bodyB=fs.shapeA=fs.shapeB=null}if(i){for(let r=0,o=hs.length;r<o;r+=2){let a=this.getShapeById(hs[r]),l=this.getShapeById(hs[r+1]);ds.shapeA=a,ds.shapeB=l,a&&(ds.bodyA=a.body),l&&(ds.bodyB=l.body),this.dispatchEvent(ds)}ds.bodyA=ds.bodyB=ds.shapeA=ds.shapeB=null}}clearForces(){let e=this.bodies,t=e.length;for(let n=0;n!==t;n++){let i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new Qn;var Bd=new ui,sn=globalThis.performance||{};if(!sn.now){let s=Date.now();sn.timing&&sn.timing.navigationStart&&(s=sn.timing.navigationStart),sn.now=()=>Date.now()-s}new A;var hE={type:"postStep"},fE={type:"preStep"},ka={type:st.COLLIDE_EVENT_NAME,body:null,contact:null},dE=[],pE=[],mE=[],gE=[],us=[],hs=[],Ha={type:"beginContact",bodyA:null,bodyB:null},Va={type:"endContact",bodyA:null,bodyB:null},fs={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ds={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var Wu=class{constructor(){this.world=new Gu({gravity:new A(0,0,0)}),this.world.broadphase=new Bu(this.world),this.world.solver.iterations=5,this.world.defaultContactMaterial.friction=0,this.world.defaultContactMaterial.restitution=0,this.enemies=[],this.walls=[],this.obstacles=[],this.grenades=[];let e=new st({mass:0,shape:new Hu,collisionFilterGroup:4,collisionFilterMask:2,position:new A(0,-.06,0)});e.quaternion.setFromEuler(-Math.PI/2,0,0),this.world.addBody(e),this.world.addEventListener("preStep",()=>{for(let t of this.grenades)t.force.y-=14*t.mass}),this.player=this.addPawn(.52,3);for(let[t,n,i,r]of[[-$e.x-.6,0,.5,$e.z+1],[$e.x+.6,0,.5,$e.z+1],[0,-$e.z-.6,$e.x+1,.5],[0,$e.z+.6,$e.x+1,.5]]){let o=new st({mass:0,shape:new go(new A(i,3,r)),position:new A(t,1,n),collisionFilterGroup:4});this.world.addBody(o),this.walls.push(o)}}setObstacles(e){for(let t of this.obstacles)this.world.removeBody(t);this.obstacles=e.map(({x:t,z:n,halfX:i,halfZ:r,height:o,walkOnly:a})=>{let l=new st({mass:0,shape:new go(new A(i,o/2,r)),position:new A(t,o/2,n),collisionFilterGroup:4,collisionFilterMask:a?1:3});return this.world.addBody(l),l})}addPawn(e,t=1){let n=new st({mass:t,shape:new Wa(e),position:new A(0,.6,0),fixedRotation:!0,linearDamping:0,collisionFilterGroup:1,collisionFilterMask:5});return n.linearFactor.set(1,0,1),this.world.addBody(n),n}addEnemy(e,t,n,i=1){let r=this.addPawn(n,i);return r.position.set(e,.6,t),this.enemies.push(r),r}addGrenade(e,t){let n=new st({mass:.3,shape:new Wa(.16),position:new A(e.x,e.y,e.z),linearDamping:.12,angularDamping:.1,collisionFilterGroup:2,collisionFilterMask:4});return n.velocity.set(t.x*6.6,4.8,t.z*6.6),n.angularVelocity.set(6,2,4),this.world.addBody(n),this.grenades.push(n),n}removeGrenade(e){this.world.removeBody(e);let t=this.grenades.indexOf(e);t!==-1&&this.grenades.splice(t,1)}knockback(e,t,n){e.applyImpulse(new A(t.x*n*e.mass,0,t.z*n*e.mass))}removeEnemy(e){this.world.removeBody(e),this.enemies.splice(this.enemies.indexOf(e),1)}clear(){for(let e of this.enemies)this.world.removeBody(e);for(let e of[...this.grenades])this.removeGrenade(e);this.enemies.length=0,this.player.position.set(0,.6,0),this.player.velocity.setZero(),this.world.accumulator=0}step(e){this.world.step(1/60,e,4);for(let t of[this.player,...this.enemies])t.position.y=.6,t.velocity.y=0,t.position.x=Math.max(-$e.x,Math.min($e.x,t.position.x)),t.position.z=Math.max(-$e.z,Math.min($e.z,t.position.z))}};var wo=Zx(px(),1);var nh=class{constructor(e){this.boxes=e.map(({x:o,z:a,halfX:l,halfZ:c,height:u})=>new Sn(new I(o-l,-.1,a-c),new I(o+l,u,a+c))),this.shotBoxes=this.boxes.filter((o,a)=>!e[a].walkOnly),this.clearance=this.boxes.map(o=>new Sn(new I(o.min.x-.82,-1,o.min.z-.82),new I(o.max.x+.82,8,o.max.z+.82))),this.grid=new wo.default.Grid($e.x*2,$e.z*2),this.ray=new yi,this.hit=new I,this.origin=new I,this.direction=new I;for(let o=0;o<$e.z*2;o++)for(let a=0;a<$e.x*2;a++)this.isOpen(a-$e.x+.5,o-$e.z+.5)||this.grid.setWalkableAt(a,o,!1);this.finder=new wo.default.AStarFinder({diagonalMovement:wo.default.DiagonalMovement.OnlyWhenNoObstacles}),this.searchGrid=this.grid.clone(),this.dirtyNodes=[],this.searchesRemaining=2;let t=o=>(o&&!o.dirty&&(o.dirty=!0,this.dirtyNodes.push(o)),o),n=this.searchGrid.getNodeAt.bind(this.searchGrid),i=this.searchGrid.getNeighbors.bind(this.searchGrid);this.searchGrid.getNodeAt=(o,a)=>t(n(o,a)),this.searchGrid.getNeighbors=(...o)=>{let a=i(...o);for(let l of a)t(l);return a},this.regions=new Int32Array($e.x*2*$e.z*2);let r=0;for(let o=0;o<$e.z*2;o++)for(let a=0;a<$e.x*2;a++){if(!this.grid.isWalkableAt(a,o)||this.regions[o*$e.x*2+a])continue;let l=[this.grid.getNodeAt(a,o)];this.regions[o*$e.x*2+a]=++r;for(let c=0;c<l.length;c++)for(let u of this.grid.getNeighbors(l[c],wo.default.DiagonalMovement.OnlyWhenNoObstacles)){let h=u.y*$e.x*2+u.x;this.regions[h]||(this.regions[h]=r,l.push(u))}}}isOpen(e,t){return Math.abs(e)>$e.x-1||Math.abs(t)>$e.z-1?!1:!this.clearance.some(n=>e>=n.min.x&&e<=n.max.x&&t>=n.min.z&&t<=n.max.z)}unobstructed(e,t,n=!0){this.origin.set(e.x,.6,e.z),this.direction.set(t.x-e.x,0,t.z-e.z);let i=this.direction.length();if(i<.001)return!0;this.ray.set(this.origin,this.direction.divideScalar(i));for(let r of n?this.clearance:this.boxes)if(r.containsPoint(this.origin)||this.ray.intersectBox(r,this.hit)&&this.origin.distanceTo(this.hit)<i)return!1;return!0}nearestCell(e){let t=Math.max(0,Math.min($e.x*2-1,Math.floor(e.x+$e.x))),n=Math.max(0,Math.min($e.z*2-1,Math.floor(e.z+$e.z)));for(let i=0;i<=6;i++){let r,o=1/0;for(let a=-i;a<=i;a++)for(let l=-i;l<=i;l++){if(Math.max(Math.abs(l),Math.abs(a))!==i||!this.grid.isWalkableAt(t+l,n+a))continue;let c={x:t+l-$e.x+.5,z:n+a-$e.z+.5};if(!this.unobstructed(e,c,!1))continue;let u=(c.x-e.x)**2+(c.z-e.z)**2;u<o&&(o=u,r=[t+l,n+a])}if(r)return r}return null}path(e,t){let n=this.nearestCell(e),i=this.nearestCell(t);if(!n||!i)return[];for(let o of this.dirtyNodes)o.opened=o.closed=o.dirty=!1,o.g=o.h=o.f=0,o.parent=null;this.dirtyNodes.length=0;let r=this.finder.findPath(...n,...i,this.searchGrid);return wo.default.Util.compressPath(r).map(([o,a])=>({x:o-$e.x+.5,z:a-$e.z+.5}))}connected(e,t){let n=this.nearestCell(e),i=this.nearestCell(t);return!!(n&&i&&this.regions[n[1]*$e.x*2+n[0]]===this.regions[i[1]*$e.x*2+i[0]])}shotDistance(e,t){let n=t;for(let i of this.shotBoxes){if(i.containsPoint(e.origin))return 0;e.intersectBox(i,this.hit)&&(n=Math.min(n,e.origin.distanceTo(this.hit)))}return n}};var ih=class{constructor(e,t,n){this.canvas=e,this.ctx=e.getContext("2d"),this.label=t,this.coordinates=n,this.background=document.createElement("canvas"),this.background.width=e.width,this.background.height=e.height,this.scaleX=(e.width-16)/($e.x*2),this.scaleZ=(e.height-16)/($e.z*2),this.ray=new ir,this.plane=new ri(new I(0,1,0),0),this.point=new I,this.corners=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([i,r])=>new de(i,r)),this.nextUpdate=0}x(e){return 8+(e+$e.x)*this.scaleX}z(e){return 8+(e+$e.z)*this.scaleZ}setBattlefield(e){this.battlefield=e,this.nextUpdate=0;let t=this.background.getContext("2d");t.fillStyle=e.chapter.map,t.fillRect(0,0,this.canvas.width,this.canvas.height),t.fillStyle="#52605b";for(let n of[-36,0,36])t.fillRect(this.x(n-3.5),8,7*this.scaleX,this.canvas.height-16);for(let n of[-30,0,30])t.fillRect(8,this.z(n-3.5),this.canvas.width-16,7*this.scaleZ);for(let n of e.obstacles)t.fillStyle=n.walkOnly?"#467a89":"#9eab96",t.fillRect(this.x(n.x-n.halfX),this.z(n.z-n.halfZ),n.halfX*2*this.scaleX,n.halfZ*2*this.scaleZ);t.strokeStyle="#98b2a866",t.lineWidth=1,t.strokeRect(8,8,this.canvas.width-16,this.canvas.height-16)}update(e,t,n,i,r,o){if(performance.now()<this.nextUpdate)return;this.nextUpdate=performance.now()+80;let a=this.ctx;a.drawImage(this.background,0,0),a.save(),a.beginPath(),a.rect(8,8,this.canvas.width-16,this.canvas.height-16),a.clip(),a.beginPath(),this.corners.forEach((h,f)=>{this.ray.setFromCamera(h,o),this.ray.ray.intersectPlane(this.plane,this.point),f?a.lineTo(this.x(this.point.x),this.z(this.point.z)):a.moveTo(this.x(this.point.x),this.z(this.point.z))}),a.closePath(),a.fillStyle="#d9efc817",a.fill(),a.lineWidth=1.5,a.strokeStyle="#dcebd384",a.stroke();for(let h of r)a.strokeStyle="#e69f86",a.beginPath(),a.arc(this.x(h.position.x),this.z(h.position.z),4,0,Math.PI*2),a.stroke();for(let h of i){a.fillStyle="#ffda88";let f=this.x(h.group.position.x),d=this.z(h.group.position.z);a.fillRect(f-3,d-3,6,6)}for(let h of n)h.health<=0||(a.fillStyle=fn(h.type)?"#ffca6b":"#ff8379",a.beginPath(),a.arc(this.x(h.body.position.x),this.z(h.body.position.z),fn(h.type)?4.5:3,0,Math.PI*2),a.fill());let l=this.x(e.x),c=this.z(e.z);a.beginPath(),a.arc(l,c,9,0,Math.PI*2),a.fillStyle="#92e8f52a",a.fill(),a.beginPath(),a.moveTo(l+t.x*8,c+t.z*8),a.lineTo(l-t.x*5-t.z*4,c-t.z*5+t.x*4),a.lineTo(l-t.x*5+t.z*4,c-t.z*5-t.x*4),a.closePath(),a.fillStyle="#bcf2f5",a.strokeStyle="#152f36",a.lineWidth=1.5,a.fill(),a.stroke(),a.restore();let u=this.battlefield.districts.reduce((h,f)=>Math.hypot(f.x-e.x,f.z-e.z)<Math.hypot(h.x-e.x,h.z-e.z)?f:h);this.label.textContent=u.name,this.coordinates.textContent=`${Math.round(e.x)} : ${Math.round(-e.z)}`}};var sh=class{constructor(e,t){this.scene=e,this.effects=t,this.shots=[],this.ray=new yi,this.hit=new I}clearMarker(e){e.telegraph&&(Kt(e.telegraph),e.telegraph=null)}interrupt(e){this.clearMarker(e),e.bossMode="recover",e.modeTime=.55,e.strike=0,e.routeTimer=0}remove(e){this.clearMarker(e);for(let t of[...this.shots])t.owner===e&&this.removeShot(t)}clear(){for(let e of[...this.shots])this.removeShot(e)}removeShot(e){Kt(e.mesh);let t=this.shots.indexOf(e);t!==-1&&this.shots.splice(t,1)}marker(e,t,n){let i=new Ge,r=t==="arrows"?"#eaca71":t==="cleave"?"#f1ad58":t==="volley"?"#efd786":"#ef6e5e",o=new Rt({color:r,transparent:!0,opacity:.23,depthWrite:!1,side:Bt}),a;if(t==="cleave")a=new ea(4.25,64);else if(t==="charge")a=new yt(2.2,n);else{let u=new en,h=t==="arrows"?23:12;u.moveTo(0,0);for(let f=0;f<=24;f++){let d=-.48+f/24*.96;u.lineTo(Math.sin(d)*h,-Math.cos(d)*h)}u.closePath(),a=new er(u)}let l=new it(a,o);l.rotation.x=-Math.PI/2,l.position.z=t==="charge"?n/2:0,l.userData.ownedMaterial=!0,i.add(l);let c=new Jo(new ia(a),new Wr({color:r,transparent:!0,opacity:.88,depthWrite:!1}));c.rotation.copy(l.rotation),c.position.copy(l.position),c.userData.ownedMaterial=!0,i.add(c),i.position.set(e.body.position.x,.045,e.body.position.z),i.rotation.y=Math.atan2(e.aim.x,e.aim.z),this.scene.add(i),e.telegraph=i}volley(e){let t=e.enraged?5:3;for(let n=0;n<t;n++){let i=(n/(t-1)-.5)*.88,r=e.aim.clone().applyAxisAngle(new I(0,1,0),i),o=new Rt({color:"#ffcd8b",transparent:!0,opacity:.95,blending:yn,depthWrite:!1}),a=new it(new hn(.4,.045,6,24,Math.PI*1.25),o);a.userData.ownedMaterial=!0,a.position.set(e.body.position.x,.85,e.body.position.z),a.position.addScaledVector(r,1.3),a.rotation.set(-Math.PI/2,0,Math.atan2(r.x,r.z)),this.scene.add(a),this.shots.push({mesh:a,direction:r,owner:e,life:3.2,speed:e.enraged?8:6.5,trail:0})}}arrows(e){if(!this.arrowTemplate){this.arrowTemplate=new Ge;let n=new Wt({color:"#bc8c55",roughness:.65}),i=new Wt({color:"#eee6c3",metalness:.75,roughness:.3}),r=new it(new kt(.025,.025,1.2,6),n);r.rotation.x=Math.PI/2;let o=new it(new Nn(.1,.32,4),i);o.rotation.x=Math.PI/2,o.position.z=.76,this.arrowTemplate.add(r,o);for(let a of[0,Math.PI/2]){let l=new it(new Xt(.22,.025,.26),i);l.position.z=-.42,l.rotation.z=a,this.arrowTemplate.add(l)}La(this.arrowTemplate)}let t=e.enraged?7:5;for(let n=0;n<t;n++){let i=e.aim.clone().applyAxisAngle(new I(0,1,0),(n/(t-1)-.5)*.92),r=this.arrowTemplate.clone(!0);r.position.set(e.body.position.x,.85,e.body.position.z),r.position.addScaledVector(i,1.4),r.rotation.y=Math.atan2(i.x,i.z),this.scene.add(r),this.shots.push({mesh:r,direction:i,owner:e,kind:"arrow",life:3.2,speed:e.enraged?14:11,trail:0})}}updateShots(e,t,n,i,r,o){let a=new Ln(new I(t.x,.85,t.z),.77);for(let l of[...this.shots]){let c=e*l.speed*r;l.life-=e*r,this.ray.set(l.mesh.position,l.direction);let u=n.shotDistance(this.ray,c),h=this.ray.intersectSphere(a,this.hit)&&l.mesh.position.distanceTo(this.hit)<=u;if(h&&(i(l.kind==="arrow"?28:15+Math.min(10,o)),this.effects.emit(this.hit,20,"#ffbe8c",{speed:2.4,up:1,life:.4})),h||u<c||l.life<=0){this.removeShot(l);continue}l.mesh.position.addScaledVector(l.direction,c),l.kind!=="arrow"&&(l.mesh.rotation.z+=e*5),l.trail-=e,l.trail<=0&&(this.effects.emit(l.mesh.position,l.kind==="arrow"?1:3,"#ffe7bc",{speed:.3,up:.2,gravity:0,life:.3,size:.08}),l.trail=.055)}}update(e,t,{player:n,time:i,level:r,slow:o,navigation:a,takeDamage:l,toast:c}){let u=e.body.position,h=Math.hypot(n.x-u.x,n.z-u.z),f=t*o;if(e.bossMode||="approach",e.modeTime??=1.6,!e.enraged&&e.health<=e.maxHealth*.5&&(e.enraged=!0,this.effects.ring(new I(u.x,.04,u.z),"#ed8870",5),this.effects.emit(new I(u.x,1,u.z),85,"#f7c780",{speed:3.5,up:3.8,life:1,energy:2.5}),c(`${e.name} · 怒意觉醒`)),e.modeTime-=f,e.bossMode==="approach"){if(e.modeTime>0||h>(e.type==="emperor"?25:15)||!a.unobstructed(u,n,!1))return!1;e.aim=new I(n.x-u.x,0,n.z-u.z).normalize(),e.aim.lengthSq()<.01&&e.aim.set(0,0,1),e.attackCount=(e.attackCount||0)+1,e.bossAttack=e.type==="emperor"&&(h>12||e.attackCount%2===1)?"arrows":h<4.8?"cleave":e.attackCount%3===0?"volley":"charge",this.ray.set(new I(u.x,.6,u.z),e.aim),e.chargeLength=Math.max(1,Math.min(12,h+2.5,a.shotDistance(this.ray,14)-.8)),e.bossMode="windup",e.modeTime=e.bossAttack==="arrows"?e.enraged?.85:1.25:e.enraged?.78:1.08,e.windupLength=e.modeTime,this.marker(e,e.bossAttack,e.chargeLength)}if(e.bossMode==="windup"){if(e.body.velocity.setZero(),e.model.group.rotation.y=Math.atan2(e.aim.x,e.aim.z),e.model.animate(i,0,0,e.bossAttack==="arrows"?"bow":"windup"),e.telegraph.children[0].material.opacity=.18+(1-e.modeTime/e.windupLength)*.23,e.modeTime>0)return!0;if(this.clearMarker(e),e.strike=1,e.bossAttack==="charge")e.bossMode="charge",e.modeTime=e.chargeLength/12,e.chargeHit=!1;else{if(e.bossAttack==="cleave"){let d=new I(u.x,.045,u.z);this.effects.ring(d,"#ffd393",4.25),this.effects.arc(d.clone().setY(.8),"#ffe4b0",3.2,1.5),this.effects.emit(d,85,"#efb278",{speed:6,up:1.5,gravity:7,life:.6,size:.1}),h<4.65&&a.unobstructed(u,n,!1)&&l(28+Math.min(12,r*1.5))}else e.bossAttack==="arrows"?this.arrows(e):this.volley(e);e.bossMode="recover",e.modeTime=e.enraged?1.2:1.85}}if(e.bossMode==="charge"){if(e.body.velocity.set(e.aim.x*12*o,0,e.aim.z*12*o),e.model.animate(i,1.5,.65),!e.chargeHit&&h<1.8&&a.unobstructed(u,n,!1)&&(l(30+Math.min(12,r*1.5)),e.chargeHit=!0),Math.sin(i*36)>.3&&this.effects.emit(new I(u.x,.1,u.z),3,"#e6d4b3",{speed:.7,up:.6,life:.35}),e.modeTime>0)return!0;e.bossMode="recover",e.modeTime=e.enraged?1.3:2}return e.body.velocity.setZero(),e.model.animate(i,0,Math.max(0,e.strike)),e.strike=Math.max(0,e.strike-t*2.8),e.modeTime<=0&&(e.bossMode="approach",e.modeTime=e.enraged?.6:1,e.routeTimer=0),!0}};function sp(s=!1){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");if(s){for(let i=0;i<170;i++){let r=64+(Math.random()-.5)*70,o=64+(Math.random()-.5)*70,a=9+Math.random()*22,l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"#e1e5dc22"),l.addColorStop(1,"#b2b7af00"),t.fillStyle=l,t.fillRect(r-a,o-a,a*2,a*2)}let n=t.createRadialGradient(64,64,12,64,64,61);n.addColorStop(0,"#ffffffff"),n.addColorStop(.55,"#ffffffaa"),n.addColorStop(1,"#ffffff00"),t.globalCompositeOperation="destination-in",t.fillStyle=n,t.fillRect(0,0,128,128),t.globalCompositeOperation="source-over"}else{let n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"#ffffff"),n.addColorStop(.08,"#ffffffee"),n.addColorStop(.24,"#ffffff77"),n.addColorStop(1,"#ffffff00"),t.fillStyle=n,t.fillRect(0,0,128,128)}return new Gt(e)}var rh=class{constructor(e,t){this.scene=e,this.camera=t,this.particles=[],this.smokes=[],this.rings=[],this.lights=[],this.arcs=[],this.fragments=[],this.max=1400,this.freeParticles=Array.from({length:this.max},()=>({})),this.emitColor=new Ve,this.geometry=new wt,this.positions=new Float32Array(this.max*3),this.colors=new Float32Array(this.max*3),this.sizes=new Float32Array(this.max),this.geometry.setAttribute("position",new Vt(this.positions,3).setUsage(Ei)),this.geometry.setAttribute("aColor",new Vt(this.colors,3).setUsage(Ei)),this.geometry.setAttribute("aSize",new Vt(this.sizes,1).setUsage(Ei)),this.material=new vt({uniforms:{map:{value:sp()},height:{value:700}},transparent:!0,depthWrite:!1,blending:yn,vertexShader:"attribute vec3 aColor;attribute float aSize;varying vec3 vColor;uniform float height;void main(){vColor=aColor;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(aSize*height,0.,100.);}",fragmentShader:"uniform sampler2D map;varying vec3 vColor;void main(){vec4 tex=texture2D(map,gl_PointCoord);gl_FragColor=vec4(vColor*tex.rgb,tex.a);}"}),this.geometry.setDrawRange(0,0),this.points=new Qo(this.geometry,this.material),this.points.frustumCulled=!1,e.add(this.points);let n=new yt(1,1);n.setAttribute("aOpacity",new bi(new Float32Array(140),1)),n.setAttribute("aTint",new bi(new Float32Array(420),3)),this.smokeMaterial=new vt({uniforms:{map:{value:sp(!0)}},transparent:!0,depthWrite:!1,side:Bt,vertexShader:"attribute float aOpacity;attribute vec3 aTint;varying float vOpacity;varying vec3 vTint;varying vec2 vUv;void main(){vOpacity=aOpacity;vTint=aTint;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D map;varying float vOpacity;varying vec3 vTint;varying vec2 vUv;void main(){vec4 t=texture2D(map,vUv);gl_FragColor=vec4(vTint*t.rgb,t.a*vOpacity);}"}),this.smokeMesh=new Dn(n,this.smokeMaterial,140),this.smokeMesh.frustumCulled=!1,this.smokeMesh.count=0,e.add(this.smokeMesh);let i=new yt(1,1);i.setAttribute("aHeat",new bi(new Float32Array(64),1).setUsage(Ei));let r=new vt({uniforms:{map:{value:this.smokeMaterial.uniforms.map.value}},transparent:!0,depthWrite:!1,blending:yn,vertexShader:"attribute float aHeat;varying float vHeat;varying vec2 vUv;void main(){vHeat=aHeat;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D map;varying float vHeat;varying vec2 vUv;void main(){float cloud=texture2D(map,vUv).a;float core=smoothstep(.18,.8,cloud)*(1.-vUv.y*.4);vec3 fire=mix(vec3(2.5,.23,.012),vec3(3.2,1.5,.24),core);gl_FragColor=vec4(fire,cloud*vHeat);}"});this.flames=[],this.flameMesh=new Dn(i,r,64),this.flameMesh.instanceMatrix.setUsage(Ei),this.flameMesh.frustumCulled=!1,this.flameMesh.count=0,e.add(this.flameMesh),this.dummy=new Ct,this.shieldMaterial=new vt({uniforms:{strength:{value:0},tint:{value:new Ve("#8de8d1")}},transparent:!0,depthWrite:!1,blending:yn,side:xi,vertexShader:"varying vec3 vNormal;varying vec3 vView;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vNormal=normalize(normalMatrix*normal);vView=normalize(-p.xyz);gl_Position=projectionMatrix*p;}",fragmentShader:"varying vec3 vNormal;varying vec3 vView;uniform float strength;uniform vec3 tint;void main(){float rim=pow(1.-abs(dot(normalize(vNormal),normalize(vView))),3.);gl_FragColor=vec4(tint*(.5+rim),rim*strength*.48);}"}),this.shield=new it(new ai(1,32,20),this.shieldMaterial),this.shield.visible=!1,e.add(this.shield),this.debris=new Dn(new Qs(1,0),new Wt({color:"#787e79",roughness:.88}),120),this.debris.frustumCulled=!1,this.debris.count=0,e.add(this.debris),this.debris.setColorAt(0,new Ve("#ffffff"));for(let l=0;l<2;l++){let c=new ga("#ffd59d",0,10,2);e.add(c),this.lights.push({light:c,life:0,power:0})}let o=new kt(1,1,1,4,1);o.setAttribute("aFade",new bi(new Float32Array(128),1).setUsage(Ei));let a=new vt({transparent:!0,depthWrite:!1,blending:yn,vertexShader:"attribute float aFade;varying vec3 vColor;varying float vFade;void main(){vColor=instanceColor;vFade=aFade;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vColor;varying float vFade;void main(){gl_FragColor=vec4(vColor*1.8,vFade);}"});this.streakMesh=new Dn(o,a,128),this.streakMesh.instanceMatrix.setUsage(Ei),this.streakMesh.setColorAt(0,new Ve),this.streakMesh.count=0,this.streakMesh.frustumCulled=!1,e.add(this.streakMesh),this.streaks=[],this.freeStreaks=Array.from({length:128},()=>({start:new I,end:new I,color:new Ve})),this.direction=new I,this.up=new I(0,1,0),this.casings=[],this.casingMesh=new Dn(new kt(.021,.025,.085,5),new Wt({color:"#c9a053",metalness:.7,roughness:.4}),160),this.casingMesh.count=0,this.casingMesh.frustumCulled=!1,this.casingMesh.instanceMatrix.setUsage(Ei),e.add(this.casingMesh),this.contactMesh=new Dn(new yt(1,1),new Rt({color:"#0a1314",map:sp(),transparent:!0,opacity:.55,depthWrite:!1}),24),this.contactMesh.count=0,this.contactMesh.frustumCulled=!1,this.contactMesh.instanceMatrix.setUsage(Ei),e.add(this.contactMesh)}emit(e,t=25,n="#bbebe0",i={}){let r=this.emitColor.set(n).multiplyScalar(i.energy||1.6),o=i.direction;for(let a=0;a<t&&this.particles.length<this.max;a++){let l=Math.random()*Math.PI*2,c=(i.speed||2)*(.2+Math.random()),u=this.freeParticles.pop();Object.assign(u,{x:e.x,y:e.y,z:e.z,vx:Math.cos(l)*c*(o?.35:1)+(o?.x||0)*c*2-(i.backward||0),vy:(i.up??2)*Math.random()+.2,vz:Math.sin(l)*c*(o?.35:1)+(o?.z||0)*c*2,gravity:i.gravity??8,life:i.life||.7,max:i.life||.7,size:(i.size||.12)*(.4+Math.random()),r:r.r,g:r.g,b:r.b,ground:i.ground??.03}),this.particles.push(u)}}clear(){this.freeParticles.push(...this.particles),this.freeStreaks.push(...this.streaks),this.particles.length=this.smokes.length=this.fragments.length=this.streaks.length=this.casings.length=this.flames.length=0,this.streakMesh.count=this.casingMesh.count=this.debris.count=this.smokeMesh.count=this.flameMesh.count=0,this.geometry.setDrawRange(0,0);for(let e of[...this.rings.map(t=>t.mesh),...this.arcs.map(t=>t.mesh)])this.scene.remove(e),e.geometry.dispose(),e.material.dispose();for(let e of this.lights)e.life=0,e.light.intensity=0;this.rings.length=this.arcs.length=0}smoke(e,t=5,n="#aba68e",i=1){for(let r=0;r<t&&this.smokes.length<140;r++)this.smokes.push({x:e.x+(Math.random()-.5)*.5,y:e.y+.1,z:e.z+(Math.random()-.5)*.6,vx:(Math.random()-.5)*.6,vy:.25+Math.random()*.8,vz:(Math.random()-.5)*.35,size:i*(.5+Math.random()),life:1.4+Math.random(),max:2.4,color:new Ve(n),rotation:Math.random()*6})}flame(e,t=.65,n=.38){this.flames.length<64&&this.flames.push({x:e.x,y:e.y+t*.3,z:e.z,size:t,life:n,max:n,rotation:Math.random()*6})}explosion(e){this.debrisBurst(e,28),this.emit(e,110,"#ffc46e",{speed:7,up:5,gravity:12,life:.8,size:.085,energy:3});let t=new I;for(let n=0;n<10;n++){let i=n*Math.PI*.2,r=.3+Math.random()*.65;t.set(e.x+Math.cos(i)*r,e.y+Math.random()*.65,e.z+Math.sin(i)*r),this.flame(t,1.5+Math.random(),.2+Math.random()*.22),t.set(e.x+Math.cos(i)*.8,.1,e.z+Math.sin(i)*.8);let o=this.smokes.length;if(this.smoke(t,1,"#a5a291",1),this.smokes.length>o){let a=this.smokes.at(-1);a.vx=Math.cos(i)*3.8,a.vz=Math.sin(i)*3.8,a.vy=.2,a.life=a.max=1.35}}this.smoke(e,6,"#6e7474",1.65),this.flash(e,"#ffc17d",48)}nuclearBlast(e){this.emit(e,420,"#ffd7a0",{speed:22,up:16,gravity:9,life:2.4,size:.15,energy:3}),this.debrisBurst(e,45,"#969d98"),this.flash(e,"#fff0ce",100);for(let t of[18,38,65]){this.ring(e,"#ffe7b9",t);let n=this.rings.at(-1);n.life=n.max=2.8}for(let t=0;t<20;t++){let n=t/20*Math.PI*2,i=new I(e.x+Math.cos(n)*3,.4,e.z+Math.sin(n)*3);this.flame(i,4.5,.8);let r=this.smokes.length;if(this.smoke(i,1,"#a7aaa2",3.8),this.smokes.length>r){let o=this.smokes.at(-1);o.vx=Math.cos(n)*8,o.vz=Math.sin(n)*8,o.vy=.35,o.life=o.max=5}}for(let t=0;t<28;t++){let n=t>=10,i=t*2.4,r=n?3.3:1,o=new I(e.x+Math.cos(i)*r,n?11+t%3*.65:1+t*.9,e.z+Math.sin(i)*r),a=this.smokes.length;if(this.smoke(o,1,n?"#8b8c82":"#a2a18d",n?4.8:2.5),this.smokes.length>a){let l=this.smokes.at(-1);l.vy=n?1.3:1,l.life=l.max=7.5}}}ring(e,t="#b5ead7",n=2.2){let i=new Rt({color:t,transparent:!0,opacity:.6,blending:yn,depthWrite:!1}),r=new it(new hn(1,.009,6,64),i);r.rotation.x=-Math.PI/2,r.position.copy(e),r.position.y=Math.max(.035,e.y),this.scene.add(r),this.rings.push({mesh:r,life:.75,max:.75,size:n})}flash(e,t="#ffd59d",n=25){let i=this.lights.reduce((r,o)=>o.life<r.life?o:r);i.light.color.set(t),i.light.position.copy(e),i.life=.18,i.power=n,i.light.intensity=n}tracer(e,t,n="#fff0c9",i=.023,r=.085){if(!this.freeStreaks.length)return;let o=this.freeStreaks.pop();o.start.copy(e),o.end.copy(t),o.color.set(n),o.width=i,o.life=o.max=r,this.streaks.push(o)}muzzle(e,t,n){let i=n.id==="scatter"||n.id==="rail",r=i?.76:.43;this.direction.copy(e).addScaledVector(t,r),this.tracer(e,this.direction,"#fff8d8",i?.072:.045,.055),this.emit(e,i?13:6,"#ffc378",{direction:t,speed:i?1.7:1,up:.3,gravity:1,life:.11,size:.09,energy:3}),this.flame(e,i?.28:.17,.075),i&&this.smoke(e,2,"#aeb9b9",.27),this.flash(e,"#ffcc83",i?12:7),this.casings.length>=160&&this.casings.shift(),this.casings.push({x:e.x-t.x*.42,y:e.y,z:e.z-t.z*.42,vx:t.z*(1.5+Math.random()),vy:2.3+Math.random(),vz:-t.x*(1.5+Math.random()),angle:Math.random()*6,life:4})}hit(e,t,n=!1){if(this.emit(e,n?14:8,n?"#ffe4aa":"#e5c29a",{direction:t,speed:n?2.5:1.2,up:2,gravity:12,life:.3,size:.065,energy:n?3:1.3}),n)for(let i=0;i<4;i++)this.direction.copy(e).addScaledVector(t,-.1-Math.random()*.25),this.direction.x+=(Math.random()-.5)*.5,this.direction.y+=.06+Math.random()*.28,this.direction.z+=(Math.random()-.5)*.5,this.tracer(e,this.direction,"#ffe2a0",.009,.1+Math.random()*.04);this.smoke(e,1,n?"#a8b3b5":"#a58e7d",.25)}slash(e,t,n=1){let i=new I,r=new I;for(let o=0;o<7;o++){let a=t-.9+o*.24,l=a+.24;i.set(e.x+Math.sin(a)*n,e.y+.12*Math.sin(o*.5),e.z+Math.cos(a)*n),r.set(e.x+Math.sin(l)*n,e.y+.12*Math.sin((o+1)*.5),e.z+Math.cos(l)*n),this.tracer(i,r,"#ffe7c9",.016,.13)}}contacts(e,t){let n=0;for(let i of[e,...t]){if(n>=24)break;let r=i.body?.position||i,o=i.model?.scale||1;this.dummy.position.set(r.x,.006,r.z),this.dummy.rotation.set(-Math.PI/2,0,0),this.dummy.scale.set(1.9*o,1.4*o,1),this.dummy.updateMatrix(),this.contactMesh.setMatrixAt(n++,this.dummy.matrix)}this.contactMesh.count=n,this.contactMesh.instanceMatrix.needsUpdate=!0}debrisBurst(e,t=22,n="#828784"){let i=new Ve(n);for(let r=0;r<t&&this.fragments.length<120;r++){let o=Math.random()*Math.PI*2,a=2+Math.random()*3.5;this.fragments.push({position:e.clone(),velocity:new I(Math.cos(o)*a,2+Math.random()*5,Math.sin(o)*a),rotation:new Yn(Math.random()*6,Math.random()*6,0),size:.045+Math.random()*.12,life:2.5,color:i})}}arc(e,t,n=1.4,i=0,r=!1){let o=[];for(let u=0;u<=32;u++){let h=u/32*Math.PI*1.68;o.push(new I(Math.cos(h)*n,Math.sin(h)*n,Math.sin(h*2)*.18))}let a=new oi(o),l=new Rt({color:t,transparent:!0,opacity:.85,blending:yn,depthWrite:!1}),c=new it(new Mi(a,48,.024,5,!1),l);c.position.copy(e),c.rotation.set(.45,i,.1),this.scene.add(c),this.arcs.push({mesh:c,life:.9,boost:r})}power(e,t,n=!1){let i=t==="hero"?"#90eaff":t==="alien"?"#b7aaff":"#d5efab";this.emit(e,110,i,{speed:n?3.6:2.4,up:4,gravity:1,life:1.2,size:.19,energy:3});for(let r=0;r<3;r++)this.arc(e,i,.9+r*.36,r*1.7,n);this.flash(e,i,25)}burst(e,t="success"){t==="crash"?this.explosion(e):t==="jump"?(this.emit(e,25,"#b8e5dd",{speed:2.2,up:.7,gravity:4,life:.42,size:.085}),this.smoke(e,4,"#b4b09c",.65),this.ring(e,"#ccece1",1.7)):t==="revive"?(this.emit(e,95,"#b0efdb",{speed:2,up:5.5,gravity:-.5,life:1.05,size:.14}),this.flash(e,"#bfeddd",19),this.ring(e,"#c2f3df",3.1)):(this.emit(e,85,"#d9efb8",{speed:3.2,up:4,gravity:3,life:1.1,size:.115}),this.emit(e,25,"#ffe0a1",{speed:2.4,up:3,gravity:6,life:1.1,size:.09}),this.flash(e,"#daf2c3",15),this.ring(e,"#cef1c4",2.4))}update(e,t,n){for(let i=this.flames.length-1;i>=0;i--){let r=this.flames[i];if(r.life-=e,r.life<=0){this.flames[i]=this.flames.at(-1),this.flames.pop();continue}r.y+=e*.9}this.flames.forEach((i,r)=>{let o=1-i.life/i.max;this.dummy.position.set(i.x,i.y,i.z),this.dummy.quaternion.copy(this.camera.quaternion),this.dummy.rotateZ(i.rotation),this.dummy.scale.set(i.size*(.65+o),i.size*(.8+o*1.6),1),this.dummy.updateMatrix(),this.flameMesh.setMatrixAt(r,this.dummy.matrix),this.flameMesh.geometry.attributes.aHeat.setX(r,Math.min(1,o*8)*(1-o)**1.6*.8)}),this.flameMesh.count=this.flames.length,this.flameMesh.instanceMatrix.needsUpdate=!0,this.flameMesh.geometry.attributes.aHeat.needsUpdate=!0;for(let i=this.streaks.length-1;i>=0;i--){let r=this.streaks[i];r.life-=e,r.life<=0&&(this.freeStreaks.push(r),this.streaks[i]=this.streaks.at(-1),this.streaks.pop())}this.streaks.forEach((i,r)=>{this.direction.copy(i.end).sub(i.start);let o=this.direction.length();this.dummy.position.copy(i.start).add(i.end).multiplyScalar(.5),this.dummy.quaternion.setFromUnitVectors(this.up,this.direction.divideScalar(o||1)),this.dummy.scale.set(i.width,o,i.width),this.dummy.updateMatrix(),this.streakMesh.setMatrixAt(r,this.dummy.matrix),this.streakMesh.setColorAt(r,i.color),this.streakMesh.geometry.attributes.aFade.setX(r,Math.min(1,i.life/i.max*1.5))}),this.streakMesh.count=this.streaks.length,this.streakMesh.instanceMatrix.needsUpdate=!0,this.streakMesh.instanceColor.needsUpdate=!0,this.streakMesh.geometry.attributes.aFade.needsUpdate=!0;for(let i=this.casings.length-1;i>=0;i--){let r=this.casings[i];if(r.life-=e,r.life<=0){this.casings[i]=this.casings.at(-1),this.casings.pop();continue}r.x+=r.vx*e,r.z+=r.vz*e,r.y+=r.vy*e,r.vy-=12*e,r.y<.045?(r.y=.045,r.vy=Math.abs(r.vy)>.35?Math.abs(r.vy)*.24:0,r.vx*=Math.exp(-e*12),r.vz*=Math.exp(-e*12)):r.angle+=e*14}this.casings.forEach((i,r)=>{this.dummy.position.set(i.x,i.y,i.z),this.dummy.rotation.set(i.angle,0,i.angle*.73),this.dummy.scale.setScalar(Math.min(1,i.life*2)),this.dummy.updateMatrix(),this.casingMesh.setMatrixAt(r,this.dummy.matrix)}),this.casingMesh.count=this.casings.length,this.casingMesh.instanceMatrix.needsUpdate=!0;for(let i=this.fragments.length-1;i>=0;i--){let r=this.fragments[i];if(r.life-=e,r.life<=0){this.fragments.splice(i,1);continue}r.position.addScaledVector(r.velocity,e),r.position.x-=t*e,r.velocity.y-=12*e,r.rotation.x+=e*5,r.rotation.z+=e*3,r.position.y<r.size&&(r.position.y=r.size,r.velocity.y=Math.abs(r.velocity.y)*.32,r.velocity.x*=.8,r.velocity.z*=.8)}this.fragments.forEach((i,r)=>{this.dummy.position.copy(i.position),this.dummy.rotation.copy(i.rotation),this.dummy.scale.setScalar(i.size*Math.min(1,i.life*2)),this.dummy.updateMatrix(),this.debris.setMatrixAt(r,this.dummy.matrix),this.debris.setColorAt(r,i.color)}),this.debris.count=this.fragments.length,this.debris.instanceMatrix.needsUpdate=!0,this.debris.instanceColor.needsUpdate=!0;for(let i=this.arcs.length-1;i>=0;i--){let r=this.arcs[i];if(r.life-=e,r.life<=0){this.scene.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),this.arcs.splice(i,1);continue}r.mesh.position.x+=(r.boost?5:-t*.25)*e,r.mesh.rotation.z+=e*2.6,r.mesh.scale.setScalar(1+(1-r.life/.9)*.6),r.mesh.material.opacity=(r.life/.9)**1.4}for(let i=this.particles.length-1;i>=0;i--){let r=this.particles[i];if(r.life-=e,r.life<=0){this.freeParticles.push(r),this.particles[i]=this.particles.at(-1),this.particles.pop();continue}r.x+=(r.vx-t)*e,r.y+=r.vy*e,r.z+=r.vz*e,r.vy-=r.gravity*e,r.vx*=Math.pow(.98,e*60),r.y<r.ground&&(r.y=r.ground,r.vy=Math.abs(r.vy)*.23,r.life=Math.min(r.life,.3))}this.particles.forEach((i,r)=>{let o=i.life/i.max,a=r*3;this.positions[a]=i.x,this.positions[a+1]=i.y,this.positions[a+2]=i.z,this.colors[a]=i.r*o,this.colors[a+1]=i.g*o,this.colors[a+2]=i.b*o,this.sizes[r]=i.size*(.4+o*.6)}),this.geometry.setDrawRange(0,this.particles.length);for(let i of["position","aColor","aSize"])this.geometry.attributes[i].needsUpdate=!0;for(let i=this.smokes.length-1;i>=0;i--){let r=this.smokes[i];if(r.life-=e,r.life<=0){this.smokes.splice(i,1);continue}r.x+=(r.vx-t)*e,r.y+=r.vy*e,r.z+=r.vz*e}this.smokes.forEach((i,r)=>{let o=1-i.life/i.max;this.dummy.position.set(i.x,i.y,i.z),this.dummy.quaternion.copy(this.camera.quaternion),this.dummy.rotateZ(i.rotation+o*.4),this.dummy.scale.setScalar(i.size*(1+o*1.9)),this.dummy.updateMatrix(),this.smokeMesh.setMatrixAt(r,this.dummy.matrix),this.smokeMesh.geometry.attributes.aOpacity.setX(r,Math.min(1,o*5)*Math.min(1,i.life)*.6),this.smokeMesh.geometry.attributes.aTint.setXYZ(r,i.color.r,i.color.g,i.color.b)}),this.smokeMesh.count=this.smokes.length,this.smokeMesh.instanceMatrix.needsUpdate=!0,this.smokeMesh.geometry.attributes.aOpacity.needsUpdate=!0,this.smokeMesh.geometry.attributes.aTint.needsUpdate=!0;for(let i=this.rings.length-1;i>=0;i--){let r=this.rings[i];if(r.life-=e,r.mesh.position.x-=t*e,r.life<=0){this.scene.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),this.rings.splice(i,1);continue}let o=1-r.life/r.max;r.mesh.scale.setScalar(.3+r.size*Math.sqrt(o)),r.mesh.material.opacity=(1-o)**2*.5}for(let i of this.lights)i.life=Math.max(0,i.life-e),i.light.position.x-=t*e,i.light.intensity=i.power*(i.life/.18)**2;this.shield.visible=n.strength>0,this.shield.position.set(n.x||0,n.y+1.2,n.z),this.shield.scale.set(n.length+.55,1.65,.75+n.width),this.shieldMaterial.uniforms.strength.value=n.strength}};function rp(s,e,t){e=Math.round(e*1e3)/1e3;let n=t==="victory"?Math.round(s*.6/(1+e/900)):0;return{base:s,seconds:e,bonus:n,total:s+n}}var oh=s=>s.normalize("NFKC").trim().replace(/\s+/gu," "),op=s=>[...s].length>=1&&[...s].length<=16&&!/[\p{Cc}\p{Cf}\p{Cs}]/u.test(s);var mx="laomei-leaderboard-player-v1",gx=s=>s.toLocaleString("zh-CN"),OE=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`,ah=class{constructor(e){this.root=e,this.form=e.querySelector("form"),this.input=e.querySelector("input"),this.submitButton=e.querySelector("[type=submit]"),this.refreshButton=e.querySelector(".leaderboard-refresh"),this.message=e.querySelector(".leaderboard-message"),this.list=e.querySelector(".leaderboard-list"),this.summary=e.querySelector(".leaderboard-personal"),this.version=0,this.player={id:crypto.randomUUID(),nickname:""};try{let t=JSON.parse(localStorage.getItem(mx));t&&/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t.id)&&(this.player.id=t.id),typeof t?.nickname=="string"&&op(oh(t.nickname))&&(this.player.nickname=oh(t.nickname))}catch{}this.remember(),this.form.addEventListener("submit",t=>{t.preventDefault(),this.submit()}),this.input.addEventListener("input",()=>this.input.setCustomValidity("")),this.refreshButton.addEventListener("click",()=>this.refresh())}remember(){try{localStorage.setItem(mx,JSON.stringify(this.player))}catch{}}show(e,t){this.hide(),this.result={...e},this.submitted=!1,this.input.value=this.player.nickname,this.input.setCustomValidity(""),this.input.disabled=!1,this.summary.hidden=!0,this.list.replaceChildren(),t.appendChild(this.root),this.root.hidden=!1,this.setBusy(!1),this.refresh(),this.input.focus({preventScroll:!0})}hide(){this.version++,this.controller?.abort(),this.root.hidden=!0,this.result=null}setBusy(e){this.busy=e,this.root.setAttribute("aria-busy",String(e)),this.submitButton.disabled=e||this.submitted,this.refreshButton.disabled=e,this.submitButton.querySelector("span").textContent=this.submitted?"已提交":"提交战绩"}status(e,t=!1){this.message.textContent=e,this.message.classList.toggle("error",t)}async request(e){this.controller?.abort();let t=new AbortController;this.controller=t;let n=setTimeout(()=>t.abort(),1e4);try{let i=await fetch(`/api/leaderboard?playerId=${encodeURIComponent(this.player.id)}`,{...e,signal:t.signal,cache:"no-store"});if(!i.headers.get("content-type")?.includes("application/json"))throw new Error("排行榜暂时无法连接");let r=await i.json();if(!i.ok)throw new Error(r.error||"排行榜暂时无法连接");return r}catch(i){throw i.name==="AbortError"?new Error("连接超时，请重试"):i instanceof TypeError?new Error("网络连接失败，请重试"):i}finally{clearTimeout(n)}}render(e){let t=e.entries.map(n=>{let i=document.createElement("li");i.className=n.isPlayer?"leaderboard-row is-player":"leaderboard-row";let r=document.createElement("span");r.className="leaderboard-rank",r.textContent=String(n.rank).padStart(2,"0");let o=document.createElement("div");o.className="leaderboard-identity";let a=document.createElement("strong");a.textContent=`抗日英雄：${n.nickname}`;let l=document.createElement("small");l.textContent=`${n.outcome==="victory"?"战役通关":`第 ${n.level} 关`} · ${OE(n.seconds)}`,o.append(a,l);let c=document.createElement("span");return c.className="leaderboard-score",c.textContent=`得分：${gx(n.score)}`,i.append(r,o,c),i});if(!t.length){let n=document.createElement("li");n.className="leaderboard-empty",n.textContent="暂无上榜战绩",t.push(n)}this.list.replaceChildren(...t),this.summary.hidden=!e.personal,e.personal&&(this.summary.textContent=`个人最佳：${gx(e.personal.score)}${e.personal.rank?` · 第 ${e.personal.rank} 名`:" · 未进入前 50 名"}`)}async refresh(){if(this.busy)return;let e=this.version;this.setBusy(!0),this.status("正在加载榜单");try{let t=await this.request();if(e!==this.version)return;this.render(t),this.status(this.submitted?"战绩已提交":"")}catch(t){e===this.version&&this.status(t.message,!0)}finally{e===this.version&&this.setBusy(!1)}}async submit(){if(!this.result||this.busy||this.submitted)return;let e=oh(this.input.value);if(!op(e)){this.input.setCustomValidity("昵称需为 1 至 16 个可见字符"),this.input.reportValidity();return}this.input.value=e,this.player.nickname=e,this.remember();let t=this.version,n=this.result;this.setBusy(!0),this.status("正在提交战绩");try{let i=await this.request({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({playerId:this.player.id,nickname:e,baseScore:n.base,seconds:n.seconds,level:n.level,outcome:n.outcome})});if(t!==this.version)return;this.submitted=!0,this.input.disabled=!0,this.render(i),this.status(i.personal.score>i.submittedScore?"提交成功，已保留历史最高战绩":"战绩已提交")}catch(i){t===this.version&&this.status(i.message,!0)}finally{t===this.version&&this.setBusy(!1)}}};var ap=new Map,ne=s=>(ap.has(s)||ap.set(s,document.getElementById(s)),ap.get(s)),fi=(s,e)=>s+Math.random()*(e-s),Ax=s=>s[Math.floor(Math.random()*s.length)],zE={Camera:td,VolumeX:md,Volume2:pd,Pause:rd,Play:od,X:gd,ArrowRight:Qf,ArrowLeft:Jf,ArrowUp:$f,ArrowDown:Kf,RotateCcw:ld,Sparkles:yu,SlidersHorizontal:hd,Dices:id,Check:nd,Target:fd,Shield:ud,Zap:xd,Bomb:ed,Monitor:sd,Trophy:dd,RefreshCw:ad,Send:cd},tl=()=>Lg({icons:zE,attrs:{"stroke-width":1.8}}),xp={character:Ba},Pt={character:"captain",sound:!1,quality:"balanced"};try{let s=JSON.parse(localStorage.getItem("frontline-arena-v8")||"{}");for(let[e,t]of Object.entries(xp))t.some(n=>n.id===s[e])&&(Pt[e]=s[e]);Pt.sound=s.sound===!0,["performance","balanced","high"].includes(s.quality)&&(Pt.quality=s.quality)}catch{}var hh=()=>{try{localStorage.setItem("frontline-arena-v8",JSON.stringify(Pt))}catch{}},ln=()=>Ba.find(s=>s.id===Pt.character),vp=()=>Jn.find(s=>s.id===N.weapon),Cx=()=>Object.fromEntries(Jn.map(s=>[s.id,{owned:s.id==="pistol",ammo:s.id==="pistol"?-1:0,rank:0}])),hp=(s=vp())=>s.damage*(1+N.inventory[s.id].rank*.08),kn,St,Wi,fp,Ft,Qa,hi,Vn,at,Mn,an,pn,yp,vs,mr,zn,gr="character",To,lp,mn,mh,gn=[],Os=[],gs=[],xs=[],zs=[],Ri=new Set,xr=new Set,cp=new Map,up=new Map,uh=0,Pi=!0,Ka=1,Eo=0,Ja=0,lh=null,gt=new I,_n=new I(0,0,1),Us=new I,ms=new I(0,.5,0),kE=new I(0,23.5,34),HE=new I(-16,28,16),ja=new I,VE=new I(0,1,0),vr=new ir,ch=new I,Za=new I,$a=new Ge,dp=[],GE=new Rt({color:"#87dce8",transparent:!0,opacity:.22,depthTest:!1,depthWrite:!1}),N={ready:!1,phase:"playing",paused:!1,time:0,previous:0,level:1,total:8,scheduled:0,kills:0,score:0,health:120,weapon:"pistol",inventory:Cx(),grenades:2,grenadeCooldown:0,spawnTimer:2.2,shotTimer:0,recoil:0,hurt:0,invulnerable:0,dash:0,dashCooldown:0,skill:0,skillCooldown:0,combo:0,comboTimer:0,clearTimer:0,toast:0,ambientTimer:0,dropPity:0,transitioning:!1,hitMarker:0,supportUnlocked:!1,combatSeconds:0,result:null,settingsOpen:!1};function Rx(){return N.ready&&!N.transitioning&&!N.paused&&!ne("garage").open&&!N.settingsOpen&&!document.hidden}function Hn(){return Rx()&&N.phase==="playing"}function ti(s=performance.now()){s=Math.max(s,lh??s),lh!==null&&(N.combatSeconds+=Math.max(0,s-lh)/1e3),lh=Hn()?s:null}function bp(s){let e=Math.floor(s),t=Math.floor(e/3600);return`${t?`${t}:`:""}${String(Math.floor(e/60)%60).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function $n(){Ri.clear(),xr.clear(),Us.set(0,0,0)}function ei(s=.8){return new I(gt.x,s,gt.z)}function Ii(s){ne("toast").textContent=s,ne("toast").classList.add("show"),N.toast=2.2}function qi(s){if(!Pt.sound)return;zn||=new AudioContext,zn.state==="suspended"&&zn.resume();let e=zn.currentTime;if(s==="shot"||s==="hurt"||s==="explosion"){let t=s==="shot"?.075:s==="explosion"?.55:.18;if(!up.has(s)){let o=zn.createBuffer(1,Math.ceil(zn.sampleRate*t),zn.sampleRate),a=o.getChannelData(0);for(let l=0;l<a.length;l++)a[l]=(Math.random()*2-1)*(1-l/a.length)**3;up.set(s,o)}let n=zn.createBufferSource(),i=zn.createBiquadFilter(),r=zn.createGain();n.buffer=up.get(s),i.type="lowpass",i.frequency.value=s==="shot"?1700:s==="explosion"?320:450,r.gain.value=s==="shot"?.13:s==="explosion"?.48:.22,n.connect(i),i.connect(r),r.connect(zn.destination),n.start()}else[523,659,784].forEach((t,n)=>{let i=zn.createOscillator(),r=zn.createGain(),o=e+n*.065;i.type="sine",i.frequency.value=t,r.gain.setValueAtTime(.04,o),r.gain.exponentialRampToValueAtTime(.001,o+.23),i.connect(r),r.connect(zn.destination),i.start(o),i.stop(o+.25)})}function WE(s){let e=fr(s),t=Hg(e.id,Qa);hi?.dispose(),hi=t,Ft.add(hi.root),Vn.setObstacles(hi.obstacles),pn=new nh(hi.obstacles),yp.setBattlefield(hi),document.body.dataset.scene=e.id,Ft.background=new Ve(e.sky),Ft.fog=new Zo(Ft.background,65,145),an.color.set(e.sun),Ft.environmentIntensity=e.id==="city"?.55:.45}function Px(){Mn&&Kt(Mn.group),Mn=Ed(Pt.character),Mn.equip(N.weapon),Ft.add(Mn.group),ne("hero-name").textContent=ln().name,ne("hero-portrait").src=vh("character",Pt.character),ne("health-max").textContent=ln().health,ne("skill").dataset.tooltip=ln().skill,ne("skill").setAttribute("aria-label",ln().skill)}function Mp(){$a.clear(),dp.length=0,Mn.group.traverse(s=>{if(s.isMesh&&!s.material.transparent){let e=new it(s.geometry,GE);e.matrixAutoUpdate=!1,e.renderOrder=20,$a.add(e),dp.push([s,e])}})}function qE(s){if(s.character===Pt.character)return;let e=N.health/ln().health;Pt.character==="captain"&&N.skill>0&&!N.supportUnlocked&&(N.invulnerable=Math.min(N.invulnerable,.65)),N.skill=0,Pt.character=s.character,N.health=e*ln().health,Px(),Ep(),Mp(),gh(),Ao(),hh(),Pi=!0}function gh(){let s=vp(),e=Math.round(hp(s));ne("weapon-name").textContent=s.name,ne("weapon-rank").textContent=`+${N.inventory[s.id].rank}`,ne("weapon-detail").textContent=`伤害 ${e}${s.pellets>1?` × ${s.pellets}`:""} · 火力 ${Math.round(hp(s)*s.pellets/s.interval)}`,ne("current-kit").textContent=ln().name,_p()}function _p(){for(let e of Jn){let t=N.inventory[e.id],n=ne(`slot-${e.id}`);n.setAttribute("aria-pressed",String(N.weapon===e.id)),n.classList.toggle("empty",!t.owned||t.ammo===0),n.querySelector(".slot-ammo").textContent=t.owned?t.ammo===-1?"∞":t.ammo:"--",n.querySelector(".slot-rank").textContent=t.rank?`+${t.rank}`:"",n.setAttribute("aria-label",`${e.name}，${t.owned?t.ammo===-1?"无限子弹":`剩余 ${t.ammo} 发`:"尚未获取"}`)}ne("grenade-count").textContent=N.grenades;let s=N.inventory[N.weapon];ne("weapon-name-bottom").textContent=s.ammo===-1?"弹药 ∞":`弹药 ${s.ammo}`}function fh(s){let e=N.inventory[s];if(!e.owned||e.ammo===0){Ii(e.owned?"弹药耗尽":"尚未获取这件武器");return}N.weapon!==s&&(N.weapon=s,Mn.equip(s),N.shotTimer=Math.max(N.shotTimer,.18),Mp(),gh())}function wp(s,e,t=.75){let n=new Rt({color:s,transparent:!0,opacity:t,depthWrite:!1,side:Bt}),i=new it(new $s(e-.05,e,48),n);return i.rotation.x=-Math.PI/2,i.position.y=.035,i.userData.ownedMaterial=!0,Ft.add(i),i}function XE(s){let e=new Ge,t=new Rt({color:"#251f22",transparent:!0,opacity:.8}),n=new Rt({color:fn(s.type)?"#f8bb62":"#ed7771"});for(let[i,r]of[[t,0],[n,.001]]){let o=new it(new yt(.94,.075),i);o.position.z=r,o.userData.ownedMaterial=!0,e.add(o)}return s.fill=e.children[1],e.quaternion.copy(St.quaternion),Ft.add(e),e}function YE(){let s=N.scheduled,e=s%4,t=ki(N.level),n=t.boss&&s===N.total-1?t.boss:Math.random()<t.heavyChance?"heavy":"raider",i=fn(n),r;for(let a=0;a<32;a++){let l=a<8?e*Math.PI/2+fi(-.7,.7):fi(0,Math.PI*2),c=fi(i?12:9,i?18:14),u=new I(gt.x+Math.sin(l)*c,.035,gt.z+Math.cos(l)*c);if(pn.isOpen(u.x,u.z)&&xs.every(h=>h.position.distanceTo(u)>1.8)&&pn.connected(u,gt)){r=u;break}}if(!r)return;N.scheduled++;let o=wp(i?"#ffc45b":"#fa685d",i?1.8:.8);o.position.copy(r),xs.push({marker:o,position:r,type:n,remaining:i?2.2:1.25}),i&&Ii(`${Sd[n]}即将现身`)}function jE(s){let e=Td(s.type),t=fn(s.type),n=ki(N.level),i=Math.round(t?n.bossHealth:34*n.healthScale*(s.type==="heavy"?2.4:1)),r=Vn.addEnemy(s.position.x,s.position.z,e.radius||.42*e.scale,t?5:1),o={model:e,body:r,type:s.type,name:Sd[s.type],health:i,maxHealth:i,speed:t?2.05+n.chapterIndex*.13:1.4*n.speedScale*(s.type==="raider"?1:.76),attack:fi(.4,.8),windup:0,strike:0,stagger:0,hit:0,phase:fi(0,10),route:[],routeTimer:fi(0,.3)};e.group.position.set(r.position.x,0,r.position.z),Ft.add(e.group),o.bar=XE(o),o.warning=wp("#fa7464",1.1,0),gn.push(o),o.bar.visible=o.warning.visible=!1,at.emit(s.position,14,"#d2ba98",{speed:1.4,up:1,life:.6,size:.11}),e.animate(N.time,0),s.type==="emperor"&&N.health<=ln().health*.05&&Lx()}function ZE(s){for(let t=xs.length-1;t>=0;t--){let n=xs[t];n.remaining-=s,n.marker.scale.setScalar(.85+Math.sin(N.time*12)*.14),n.marker.material.opacity=.4+Math.abs(Math.sin(N.time*8))*.5,n.remaining<=0&&(jE(n),Kt(n.marker),xs.splice(t,1))}N.spawnTimer-=s;let e=ki(N.level);e.boss&&N.scheduled===N.total-1&&N.kills<N.total-1||N.scheduled<N.total&&gn.length+xs.length<e.maxAlive&&N.spawnTimer<=0&&(YE(),N.spawnTimer=e.spawnInterval*fi(.65,1.4))}function xx(s,e){let t=Jn.slice(1).filter(r=>!N.inventory[r.id].owned),n=e?Jn.find(r=>r.id===e):Ax(t.length&&Math.random()<.7?t:Jn.slice(1)),i=Fa(n.id);i.position.copy(s),Ft.add(i),gs.push({group:i,kind:"weapon",weapon:n,life:45,phase:fi(0,6)}),at.ring(s,n.color,1.5)}function vx(s){let e=Fa("grenade");e.position.copy(s),Ft.add(e),pn.isOpen(s.x+.85,s.z)&&(e.position.x+=.85),gs.push({group:e,kind:"grenade",life:45,phase:fi(0,6)}),at.ring(s,"#b9e385",1.5)}function Ix(s,e=!1){let t=gn.indexOf(s);t!==-1&&(fn(s.type)&&vs.remove(s),gn.splice(t,1),Vn.removeEnemy(s.body),Kt(s.bar),Kt(s.warning),e?(Os.length>=8&&ho(Os.shift().model),Os.push({model:s.model,life:1.25,direction:_n.clone(),angle:fi(-.3,.3)})):ho(s.model))}function Sp(s,e,t,n="bullet"){if(N.phase!=="playing"||!gn.includes(s)||(fn(s.type)&&n==="bullet"&&(e*=s.stagger>0||s.bossMode==="recover"?1.3:.78),s.health-=e,s.hit=.15,N.hitMarker=.13,at.hit(t,_n,s.type!=="raider"),s.health>0))return;if(s.type==="emperor"){Dx(s,!1);return}let i=s.model.group.position.clone();if(N.kills++,N.score+=(s.type==="boss"?600:s.type==="heavy"?180:100)*N.level,N.combo++,N.comboTimer=3,N.dropPity++,at.emit(i.clone().setY(.85),18,s.type==="boss"?"#ffd186":"#edc493",{direction:_n,speed:2.6,up:2.5,gravity:9,life:.45,size:.09}),at.debrisBurst(i.clone().setY(.7),s.type==="heavy"?9:4,s.type==="heavy"?"#90999d":"#a99e82"),at.smoke(i,3,"#a4a499",.65),s.type==="boss")at.burst(i,"crash"),xx(i),vx(i);else{let r=N.level===1&&N.kills===2&&!N.inventory.rifle.owned;(r||N.dropPity>=4||Math.random()<.32)&&(xx(i,r?"rifle":void 0),N.dropPity=0),Math.random()<.18&&vx(i)}Ix(s,!0),N.kills===N.total&&iT()}function KE(s,e,t){s.distanceToSquared(e)<1e-4||at.tracer(s,e,t,N.weapon==="rail"?.028:.013,N.weapon==="rail"?.13:.065)}function pp(){if(!Hn()||N.shotTimer>0)return;let s=vp(),e=N.skill>0&&Pt.character==="armor"?1.65:1,t=N.inventory[s.id];if(!t.owned||t.ammo===0)return;t.ammo>0&&t.ammo--,N.shotTimer=s.interval/e,N.recoil=1,Mn.group.updateMatrixWorld(!0),Mn.muzzle.getWorldPosition(ja);let n=ei(ja.y),i=new I,r=new Ln,o=new I;for(let a=0;a<s.pellets;a++){let l=s.pellets>1?(a/(s.pellets-1)-.5)*s.spread*2:fi(-s.spread,s.spread);ch.copy(_n).applyAxisAngle(VE,l),vr.set(n,ch);let c=pn.shotDistance(vr.ray,s.range),u=[];for(let g of gn)if(i.set(g.body.position.x,n.y,g.body.position.z),r.set(i,g.model.hitRadius||.53*g.model.scale),vr.ray.intersectSphere(r,o)){let x=n.distanceTo(o);x<c&&u.push({enemy:g,distance:x,point:o.clone()})}u.sort((g,x)=>g.distance-x.distance);let h=u.slice(0,s.pierce||1),f=h.at(-1),d=f&&!s.pierce?f.point:n.clone().addScaledVector(ch,c);KE(n.clone().lerp(ja,Math.min(1,c/n.distanceTo(ja))),d,s.color),c<s.range&&(!f||s.pierce)&&at.hit(d,ch.clone().negate(),!0);for(let g of h)Sp(g.enemy,hp(s),g.point)}at.muzzle(ja,_n,s),qi("shot"),t.ammo===0&&(fh("pistol"),Ii(`${s.name}弹药耗尽`)),_p()}function yx(){if(!Hn()||N.grenades===0||N.grenadeCooldown>0)return;N.grenades--,N.grenadeCooldown=1.8;let s=Vn.addGrenade(ei(1.05).addScaledVector(_n,.2),_n),e=Ad(),t=wp("#f6c487",.65,.75);Ft.add(e),zs.push({body:s,model:e,marker:t,fuse:1.15,trail:0}),_p()}function xh(s){Vn.removeGrenade(s.body),Kt(s.model),Kt(s.marker);let e=zs.indexOf(s);e!==-1&&zs.splice(e,1)}function JE(s){for(let e of[...zs]){if(!zs.includes(e))continue;let t=new I(e.body.position.x,e.body.position.y,e.body.position.z);if(e.model.position.copy(t),e.model.quaternion.copy(e.body.quaternion),e.fuse-=s,e.trail-=s,e.marker.position.set(t.x,.04,t.z),e.marker.scale.setScalar(1+.18*Math.sin(N.time*23)),e.trail<=0&&(at.emit(t,3,"#ffdb91",{speed:.35,up:.5,life:.25,size:.08,energy:2.6}),e.trail=.07),!(e.fuse>0)){xh(e),at.burst(t,"crash"),qi("explosion");for(let n of[...gn]){let i=new I(n.body.position.x-t.x,0,n.body.position.z-t.z),r=i.length();if(r>5.5+(n.model.radius||.42))continue;let o=new I(n.body.position.x,.85,n.body.position.z),a=t.clone().add(new I(0,.12,0)),l=o.distanceTo(a);vr.set(a,o.sub(a).normalize()),!(pn.shotDistance(vr.ray,l)<l-.05)&&(Sp(n,190*Math.max(.5,1-r/12),n.model.group.position.clone().setY(.8),"grenade"),!(N.phase!=="playing"||!gn.includes(n))&&(i.lengthSq()<.01?i.copy(_n):i.normalize(),Vn.knockback(n.body,i,fn(n.type)?9:12),n.stagger=fn(n.type)?.9:1.1,n.windup=0,n.routeTimer=0,fn(n.type)&&vs.interrupt(n)))}}}}function mp(s){N.invulnerable>0||N.phase!=="playing"||(N.health=Math.max(0,N.health-s),N.hurt=.24,N.invulnerable=.65,!N.supportUnlocked&&N.health<=ln().health*.05&&gn.some(e=>e.type==="emperor")&&(N.health=Math.max(N.health,ln().health*.05),Lx()),at.emit(ei(),21,"#ff8879",{speed:3,up:2,life:.4,size:.12}),qi("hurt"),N.health||(N.phase="gameover",ti(),$n(),ne("game-over").hidden=!1,ne("game-over-score").textContent=N.score.toLocaleString("zh-CN"),ne("failed-level").textContent=N.level,N.result=rp(N.score,N.combatSeconds,"defeat"),ne("game-over-time").textContent=bp(N.result.seconds),document.body.classList.add("result-shown"),mh.show({...N.result,level:N.level,outcome:"defeat"},ne("defeat-leaderboard"))))}function Lx(){N.supportUnlocked||(N.supportUnlocked=!0,N.invulnerable=Math.max(N.invulnerable,8),ne("nuclear-support").hidden=!1,Ii("紧急支援已就绪 · 按 N 召唤核弹"),qi("pickup"))}function bx(){if(!Hn()||!N.supportUnlocked)return;let s=gn.find(e=>e.type==="emperor");s&&Dx(s,!0)}function Dx(s,e){if(N.phase==="playing"){N.phase="ending",ti(),$n(),Vn.player.velocity.setZero(),s.body.velocity.setZero(),vs.remove(s),vs.clear();for(let t of[...zs])xh(t);ne("nuclear-support").hidden=!0,document.body.classList.add("cinematic"),mn=new Tu(Ft,at,hi,s,gt,e,()=>{N.kills=N.total,N.score+=1800*N.level,qi("explosion")}),Ii(e?"核弹支援抵达":"最终目标已击破"),Ao()}}function QE(){N.phase==="ending"&&(N.phase="victory",ne("campaign-victory").hidden=!1,N.result=rp(N.score,N.combatSeconds,"victory"),ne("victory-score").textContent=N.result.total.toLocaleString("zh-CN"),ne("victory-base").textContent=N.score.toLocaleString("zh-CN"),ne("victory-time").textContent=bp(N.result.seconds),ne("victory-bonus").textContent=`+${N.result.bonus.toLocaleString("zh-CN")}`,ne("victory-result").textContent=mn.nuclear?"核弹命中 · 皇宫已化为废墟":"最终首领击败 · 皇宫防线崩溃",document.body.classList.add("victory-shown","result-shown"),mh.show({...N.result,level:N.level,outcome:"victory"},ne("victory-leaderboard")),qi("pickup"),Ao())}function Mx(){!Hn()||N.dashCooldown>0||(N.dash=.2,N.dashCooldown=2.3,N.invulnerable=Math.max(N.invulnerable,.45),at.ring(ei(.05),"#b9e7e6",2),at.emit(ei(.15),25,"#cce9e6",{speed:2,up:.5,life:.4}))}function _x(){if(!Hn()||N.skillCooldown>0)return;N.skillCooldown=12,N.skill=3.5;let s=ln().color;at.emit(ei(1),100,s,{speed:3.2,up:4.2,gravity:2,life:1.1,size:.18,energy:2.8});for(let e=0;e<3;e++)at.arc(ei(1),s,1+e*.4,e*1.8);if(Pt.character==="captain"&&(N.invulnerable=Math.max(N.invulnerable,N.skill)),Pt.character==="panda"){at.ring(ei(.03),"#ffdf9d",8);for(let e of[...gn])e.model.group.position.distanceTo(gt)<6&&pn.unobstructed(gt,e.body.position,!1)&&Sp(e,110*(1+Math.min(10,N.level-1)*.06),e.model.group.position.clone().setY(.8));N.skill=.9}Ii(ln().skill),qi("pickup")}function $E(s){Us.set(Number(Ri.has("ArrowRight")||Ri.has("KeyD"))-Number(Ri.has("ArrowLeft")||Ri.has("KeyA")),0,Number(Ri.has("ArrowDown")||Ri.has("KeyS"))-Number(Ri.has("ArrowUp")||Ri.has("KeyW"))),Us.lengthSq()&&(Us.normalize(),_n.copy(Us));let e=ln().speed;Vn.player.velocity.set(N.dash>0?_n.x*13:Us.x*e,0,N.dash>0?_n.z*13:Us.z*e);for(let t of["shotTimer","recoil","hurt","invulnerable","dash","dashCooldown","skill","skillCooldown","comboTimer","grenadeCooldown"])N[t]=Math.max(0,N[t]-s*(t==="recoil"?9:1));N.comboTimer===0&&(N.combo=0)}function eT(s){let e=N.skill>0&&Pt.character==="ranger"?.32:1;pn.searchesRemaining=2;for(let t of gn){if(t.hit=Math.max(0,t.hit-s),t.stagger>0){t.stagger=Math.max(0,t.stagger-s),t.body.velocity.x*=Math.exp(-s*3.4),t.body.velocity.z*=Math.exp(-s*3.4),t.model.animate(N.time,0,0,"stagger");continue}if(fn(t.type)&&vs.update(t,s,{player:gt,time:N.time,level:N.level,slow:e,navigation:pn,takeDamage:mp,toast:Ii}))continue;let n=gt.x-t.body.position.x,i=gt.z-t.body.position.z,r=Math.hypot(n,i),o=1.25+(t.model.scale-1)*.5,a=!fn(t.type)&&r<o+.55&&pn.unobstructed(t.body.position,gt,!1);t.strike=Math.max(0,t.strike-s*3),t.attack=Math.max(0,t.attack-s*e),t.windup>0?(t.windup-=s*e,t.windup<=0&&(t.strike=1,t.attack=Math.max(.65,1.3-N.level*.025),a&&mp(t.type==="boss"?27:t.type==="heavy"?18:11),at.slash(t.model.group.position.clone().setY(.8),t.model.group.rotation.y,1.05))):a&&r<o+.3&&t.attack===0&&(t.windup=.48);let l=gt;if(t.routeTimer-=s,pn.unobstructed(t.body.position,gt))t.route.length=0,t.routeTimer=0;else{for(t.routeTimer<=0&&pn.searchesRemaining>0&&(pn.searchesRemaining--,t.route=pn.path(t.body.position,gt),t.routeTimer=fi(.85,1.25));t.route.length&&Math.hypot(t.route[0].x-t.body.position.x,t.route[0].z-t.body.position.z)<.3;)t.route.shift();l=t.route[0]||t.body.position}let c=l.x-t.body.position.x,u=l.z-t.body.position.z,h=Math.hypot(c,u),f=t.windup<=0&&(!a||r>o)&&h>.03,d=t.speed*e*(t.enraged?1.23:1);t.body.velocity.set(f?c/h*d:0,0,f?u/h*d:0),t.model.group.rotation.y=Math.atan2(f?c:n,f?u:i),t.model.animate(N.time+t.phase,f?e:0,t.strike,t.windup>0?"windup":t.hit>0?"stagger":"")}}function Ep(){gt.set(Vn.player.position.x,0,Vn.player.position.z),Mn.group.position.copy(gt),Mn.group.rotation.y=Math.atan2(_n.x,_n.z),Mn.animate(N.time,Us.lengthSq()>0?1:0,N.recoil,N.phase==="clear"?1:0);for(let s of gn){s.model.group.position.set(s.body.position.x,0,s.body.position.z);let e=Math.max(0,s.health/s.maxHealth);s.bar.position.set(s.body.position.x,s.model.barHeight||2.38*s.model.scale,s.body.position.z),s.fill.scale.x=e,s.fill.position.x=-.47*(1-e),s.warning.position.set(s.body.position.x,.04,s.body.position.z),s.warning.material.opacity=s.windup>0?.35+(.48-s.windup):0,s.warning.visible=s.windup>0,s.bar.visible=s.health<s.maxHealth&&!fn(s.type)}}function tT(s){for(let e=Os.length-1;e>=0;e--){let t=Os[e];if(t.life-=s,t.life<=0){ho(t.model),Os.splice(e,1);continue}let n=Math.min(1,(1.25-t.life)/.33),i=t.model.group;i.rotation.x=-Math.sin(n*Math.PI/2)*1.48,i.rotation.z=t.angle*n,i.position.y=Math.sin(n*Math.PI)*.22+.1*n,i.position.addScaledVector(t.direction,s*Math.max(0,1-n)*2),i.scale.setScalar(t.model.scale*Math.min(1,t.life/.26))}}function nT(s){let e="#b9e385";if(s.kind==="grenade")N.grenades=Math.min(6,N.grenades+1),Ii("手雷 +1");else{let t=N.inventory[s.weapon.id],n=t.owned,i=t.ammo;t.owned=!0,t.rank=Math.min(10,t.rank+(n?1:0)),t.ammo=Math.min(s.weapon.maxAmmo,t.ammo+s.weapon.ammoPickup),e=s.weapon.color,!n&&N.weapon==="pistol"&&fh(s.weapon.id),Ii(`${s.weapon.name} · 弹药 +${t.ammo-i}${t.rank?` · 强化 +${t.rank}`:""}`)}gh(),qi("pickup"),at.emit(ei(.7),50,e,{speed:2.4,up:3.5,gravity:1.6,life:.9,size:.13}),at.ring(ei(.04),e,2.1)}function wx(s){for(let e=gs.length-1;e>=0;e--){let t=gs[e],n=Math.hypot(t.group.position.x-gt.x,t.group.position.z-gt.z),i=t.kind==="grenade"?N.grenades<6:N.inventory[t.weapon.id].ammo<t.weapon.maxAmmo||N.inventory[t.weapon.id].rank<10;t.life-=s,t.group.position.y=.06+Math.sin(N.time*3+t.phase)*.06,t.group.userData.gun.rotation.y+=s;let r=N.phase==="clear"||n<2.2&&pn.unobstructed(gt,t.group.position,!1);i&&r&&t.group.position.lerp(gt,1-Math.exp(-s*(N.phase==="clear"?3.5:6))),i&&r&&n<.9?(nT(t),Kt(t.group),gs.splice(e,1)):t.life<=0&&(Kt(t.group),gs.splice(e,1))}}function iT(){if(N.phase==="playing"&&ki(N.level+1)){N.phase="clear",ti(),N.clearTimer=3,$n();for(let s of[...zs])xh(s);vs.clear(),ne("level-clear").hidden=!1,ne("level-clear-value").textContent=N.level,ne("next-level").textContent=`下一关 · ${fr(N.level+1).name} / ${ki(N.level+1).name}`,at.burst(ei(.3),"success"),qi("pickup")}}function sT(){mh.hide(),N.result=null,mn?.dispose(),mn=null,St.zoom=1,St.updateProjectionMatrix(),document.body.classList.remove("cinematic","victory-shown","result-shown"),ne("finale-flash").style.opacity=0,ne("campaign-victory").hidden=ne("nuclear-support").hidden=!0;for(let s of[...zs])xh(s);vs.clear();for(let s of[...gn])Ix(s);for(let s of gs)Kt(s.group);for(let s of xs)Kt(s.marker);for(let s of Os)ho(s.model);gs.length=xs.length=Os.length=0,Vn.clear(),at.clear(),$n()}function dh(s,e=!1,t){let n=ki(s);if(!n)return;let i=t||(e?lp.position.clone():new I(n.spawn[0],0,n.spawn[1])),r=!hi||hi.type!==n.chapter||!!mn;sT(),e&&Object.assign(N,structuredClone(lp.loadout)),N.level=s,N.total=n.total,N.supportUnlocked=!1,r&&WE(s),N.health=e||s===1?ln().health:Math.min(ln().health,N.health+Math.round(ln().health*.25)),N.phase="playing",N.scheduled=N.kills=N.dropPity=0,N.spawnTimer=2.1,N.invulnerable=1.5;for(let o of["shotTimer","recoil","hurt","dash","dashCooldown","skill","skillCooldown","combo","comboTimer","clearTimer","grenadeCooldown"])N[o]=0;Vn.player.position.set(i.x,.6,i.z),gt.copy(i),_n.set(0,0,1),Mn.equip(N.weapon),lp={loadout:structuredClone({score:N.score,inventory:N.inventory,weapon:N.weapon,grenades:N.grenades}),position:i.clone()},ne("place").textContent=`${fr(s).name} / ${n.name}`,ne("chapter-progress").textContent=`${n.stage+1} / ${fr(s).missions.length}`,document.querySelectorAll(".campaign-route li").forEach((o,a)=>{o.classList.toggle("current",a===n.chapterIndex),o.classList.toggle("complete",a<n.chapterIndex),a===n.chapterIndex?o.setAttribute("aria-current","step"):o.removeAttribute("aria-current")}),ne("game-over").hidden=ne("level-clear").hidden=!0,So(!1),Ep(),Nx(0,!0),Mp(),gh(),Ao(),Ii(`第 ${s} / ${Eu.length} 关 · ${n.name}${n.boss?" · 首领战":""}`)}async function rT(){if(N.transitioning||!ki(N.level+1))return;let s=N.level+1;if(!(hi.type!==ki(s).chapter)){dh(s);return}N.transitioning=!0,ti(),$n(),ne("loading").hidden=!1,ne("loading").classList.remove("done"),ne("loading-state").textContent=`正在前往${fr(s).name}`,ne("load-progress").value=85,await new Promise(t=>requestAnimationFrame(()=>requestAnimationFrame(t))),dh(s),await Fx(),N.transitioning=!1,N.previous=0,ti(),Pi=!0,ne("loading").hidden=!0,ne("loading").classList.add("done"),ne("view").focus({preventScroll:!0})}async function gp(){N.transitioning||(N.transitioning=!0,ti(),$n(),ne("loading").hidden=!1,ne("loading").classList.remove("done"),ne("loading-state").textContent="正在部署战场",ne("load-progress").value=90,await new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s))),N.score=N.combatSeconds=0,N.result=null,N.weapon="pistol",N.inventory=Cx(),N.grenades=2,Px(),dh(1),el(),await Fx(),hh(),N.transitioning=!1,N.previous=0,ti(),Pi=!0,Ja=Eo=0,Ao(),ne("loading").classList.add("done"),ne("loading").hidden=!0,ne("load-progress").value=100,ne("view").focus({preventScroll:!0}))}function So(s){$n(),N.paused=s,ti(),N.previous=0,Pi=!0,uh=0,ne("pause-screen").hidden=!s,ne("pause").innerHTML=`<i data-lucide="${s?"play":"pause"}"></i>`,ne("pause").setAttribute("aria-label",s?"继续":"暂停"),ne("pause").dataset.tooltip=s?"继续":"暂停",tl()}function Ao(){ne("level").textContent=String(N.level).padStart(2,"0"),ne("kills").textContent=`${N.kills} / ${N.total}`,ne("score").textContent=N.score.toLocaleString("zh-CN"),ne("battle-time").textContent=bp(N.combatSeconds),ne("health-value").textContent=Math.ceil(N.health),ne("health-bar").style.width=`${N.health/ln().health*100}%`,ne("wave-progress").style.width=`${N.kills/N.total*100}%`,ne("skill-time").textContent=Math.ceil(N.skillCooldown)||"",ne("skill").classList.toggle("cooling",N.skillCooldown>0),ne("skill").disabled=N.skillCooldown>0||N.phase!=="playing",ne("dodge").disabled=N.dashCooldown>0||N.phase!=="playing",ne("combo").classList.toggle("show",N.combo>1),ne("combo-value").textContent=N.combo,ne("grenade").disabled=!Hn()||N.grenades===0||N.grenadeCooldown>0,ne("fire").disabled=!Hn();for(let e of Jn){let t=N.inventory[e.id];ne(`slot-${e.id}`).disabled=!Hn()||!t.owned||t.ammo===0}let s=N.phase==="playing"?gn.find(e=>fn(e.type)):null;ne("boss-panel").hidden=!s,document.body.classList.toggle("boss-active",!!s),s&&(ne("boss-name").textContent=s.name,ne("boss-health").textContent=`${Math.ceil(s.health)} / ${s.maxHealth}`,ne("boss-health-bar").style.width=`${Math.max(0,s.health/s.maxHealth*100)}%`,ne("boss-phase").textContent=s.stagger>0?"失衡":s.bossMode==="recover"?"破绽":s.bossMode==="windup"?{charge:"拔刀突进",cleave:"回旋斩",volley:"刀气齐射",arrows:"弓箭齐射"}[s.bossAttack]:s.bossMode==="charge"?"突进":s.enraged?"狂怒":"逼近",ne("boss-panel").classList.toggle("enraged",!!s.enraged),ne("boss-panel").classList.toggle("vulnerable",s.stagger>0||s.bossMode==="recover")),ne("damage-overlay").classList.toggle("show",N.hurt>0),ne("fire").classList.toggle("active",xr.size>0&&Hn()),ne("nuclear-support").hidden=!N.supportUnlocked||N.phase!=="playing",ne("summon-nuclear").disabled=!Hn(),ne("support-status").textContent=N.invulnerable>0?`紧急保护 ${Math.ceil(N.invulnerable)} 秒`:"紧急支援已就绪",ne("configure").disabled=N.phase==="ending"||N.phase==="victory",ne("pause").disabled=N.phase==="victory",document.querySelector(".status-label").textContent={gameover:"失去战斗能力",clear:"区域安全",ending:"最终目标击破",victory:"战役胜利"}[N.phase]||"作战中"}function oT(){Za.copy(gt).addScaledVector(_n,2.5),Za.y=.2,Za.project(St),ne("crosshair").style.transform=`translate(${(Za.x*.5+.5)*innerWidth}px,${(-Za.y*.5+.5)*innerHeight}px)`,ne("crosshair").hidden=N.phase!=="playing",ne("crosshair").classList.toggle("hit",N.hitMarker>0)}function Nx(s,e=!1){let t=e?1:1-Math.exp(-s*9),n=mn?mn.focus:gt,i=mn?1-Math.exp(-s*1.5):t;ms.x+=(n.x-ms.x)*i,ms.z+=(n.z-ms.z)*i;let r=mn?Math.min(.78,24/Math.max(32,mn.extent.z*.8+20,mn.extent.x/(innerWidth/innerHeight)+14)):1;Math.abs(St.zoom-r)>1e-4&&(St.zoom+=(r-St.zoom)*(e?1:1-Math.exp(-s*1.5)),St.updateProjectionMatrix()),at.material.uniforms.height.value=innerHeight*kn.getPixelRatio()/24*St.zoom,St.position.copy(ms).add(kE),St.lookAt(ms),St.updateMatrixWorld(),an.target.position.set(ms.x,0,ms.z),an.position.copy(an.target.position).add(HE),an.target.updateMatrixWorld();let o=ei(.85),a=St.position.distanceTo(o);if(vr.set(St.position,o.sub(St.position).normalize()),$a.visible=pn.shotDistance(vr.ray,a)<a-.1,$a.visible){Mn.group.updateMatrixWorld(!0);for(let[l,c]of dp)c.matrix.copy(l.matrixWorld)}}function el(){let s={performance:{pixels:145e4,ratio:1,shadow:1024},balanced:{pixels:23e5,ratio:1.25,shadow:2048},high:{pixels:4e6,ratio:1.5,shadow:2048}}[Pt.quality],e=Math.min(devicePixelRatio||1,s.ratio,Math.sqrt(s.pixels/(innerWidth*innerHeight)))*Ka;kn.setPixelRatio(e),kn.setSize(innerWidth,innerHeight,!1),Wi.setPixelRatio(e),Wi.setSize(innerWidth,innerHeight),fp.enabled=Pt.quality!=="performance",an.shadow.mapSize.x!==s.shadow&&(an.shadow.mapSize.setScalar(s.shadow),an.shadow.map?.dispose(),an.shadow.map=null);let t=innerWidth/innerHeight,n=24;St.left=-n*t/2,St.right=n*t/2,St.top=n/2,St.bottom=-n/2,St.updateProjectionMatrix(),at.material.uniforms.height.value=innerHeight*kn.getPixelRatio()/n,Pi=!0}function Bx(s){requestAnimationFrame(Bx);let e=N.previous?s-N.previous:16.67,t=Math.min(.05,e/1e3);N.previous=s,ti(s);let n=Rx()&&!["victory","gameover"].includes(N.phase);if(!(!n&&!Pi||N.transitioning)){if(n&&(e<100&&(Ja+=e,Eo++),Eo>=180&&(Ja/Eo>21&&Ka>.75&&(Ka=Math.max(.75,Ka-.1),el()),Ja=Eo=0),N.time+=t,Qa.wind.value=N.time,N.toast=Math.max(0,N.toast-t),N.hitMarker=Math.max(0,N.hitMarker-t),N.phase!=="playing"&&(N.hurt=Math.max(0,N.hurt-t)),N.phase==="playing"?($E(t),eT(t),Vn.step(t),Ep(),xr.size&&pp(),N.phase==="playing"&&JE(t),N.phase==="playing"&&vs.updateShots(t,gt,pn,mp,N.skill>0&&Pt.character==="ranger"?.32:1,N.level),N.phase==="playing"&&ZE(t),(N.phase==="playing"||N.phase==="clear")&&wx(t)):N.phase==="clear"?(Mn.animate(N.time,0,0,1),wx(t),N.clearTimer-=t,N.clearTimer<=0&&rT().catch(ph)):N.phase==="ending"&&(mn.update(t),ne("finale-flash").style.opacity=mn.flash,Mn.animate(N.time,0,0,mn.impacted?1:0),mn.done&&QE()),hi.update(t),tT(t),N.ambientTimer-=t,N.ambientTimer<=0)){N.ambientTimer=.17;let i=mn?ms:gt,r=32/St.zoom;for(let o of hi.fires)o.distanceToSquared(i)<r*r&&(at.flame(o,.48,.33),at.emit(o,2,"#f7b35d",{speed:.35,up:2,gravity:-1,life:.65,size:.09}),at.smoke(o,1,"#85867b",.65))}at.update(n?t:0,0,{strength:N.phase==="playing"&&N.invulnerable>0||N.phase==="ending"&&mn.nuclear?.65:0,x:gt.x,y:-.2,z:gt.z,length:.4,width:.3}),at.contacts(gt,gn),Nx(n?t:0),oT(),yp.update(gt,_n,gn,gs,xs,St),uh-=t,(uh<=0||Pi)&&(N.toast||ne("toast").classList.remove("show"),Ao(),uh=.1),Wi.render(),Pi=!1}}function vh(s,e){let t=`${s}-${e}`;if(cp.has(t))return cp.get(t);mr||(mr=new Ta({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),mr.setSize(400,300),mr.outputColorSpace=Mt,mr.toneMapping=sr);let n=new Vr;n.background=new Ve("#dce5dd"),n.environment=Qa.environment,n.environmentIntensity=.7;let i=new nr("#fff0d3",3);i.position.set(-3,6,5),n.add(i,new Zr("#f2fbff","#5e6d5a",1.8));let r=new cn(34,4/3,.1,200),o;s==="character"?(o=Ed(e).group,r.position.set(1.35,2.15,5.6),r.lookAt(0,1.12,0)):s==="weapon"&&(o=Su(e),o.rotation.z=-.18,r.position.set(2.15,1.5,2.2),r.lookAt(0,0,.32)),n.add(o),mr.render(n,r);let a=mr.domElement.toDataURL("image/png");return Kt(o),cp.set(t,a),a}function Sx(){ne("garage-summary").textContent=`${Ba.find(s=>s.id===To.character).name} · ${fr(N.level).name}`,ne("depart").innerHTML='确认英雄<i data-lucide="check"></i>',tl()}function Tp(){ne("choices").replaceChildren(),ne("choices").setAttribute("aria-labelledby",`tab-${gr}`);for(let s of xp[gr]){let e=document.createElement("label");e.className="choice";let t=document.createElement("input");t.type="radio",t.name=gr,t.value=s.id,t.checked=To[gr]===s.id;let n=document.createElement("img");n.src=vh(gr,s.id),n.alt=s.name,n.width=400,n.height=300;let i=document.createElement("span");i.textContent=s.name;let r=document.createElement("small");r.textContent=s.detail;let o=document.createElement("i");o.dataset.lucide="check",e.append(t,n,i,r,o),ne("choices").appendChild(e),t.addEventListener("change",()=>{To[gr]=s.id,Sx()})}tl(),Sx()}function aT(){N.ready&&!N.transitioning&&!["ending","victory"].includes(N.phase)&&($n(),To={...Pt},ne("garage").showModal(),ti(),Tp())}function Ex(){$n(),ne("garage").close(),ti(),Pi=!0,ne("view").focus({preventScroll:!0})}function Tx(s){gr=s.dataset.tab,document.querySelectorAll("[data-tab]").forEach(e=>{e.setAttribute("aria-selected",String(e===s)),e.tabIndex=e===s?0:-1}),Tp()}function lT(s,e,t){s.addEventListener("pointerdown",n=>{n.button===0&&(n.preventDefault(),s.setPointerCapture(n.pointerId),e())});for(let n of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(n,t)}function cT(){mh=new ah(ne("leaderboard"));let s=document.querySelector(".campaign-route");fo.forEach((n,i)=>{let r=document.createElement("li"),o=document.createElement("span"),a=document.createElement("small");o.textContent=n.name,a.textContent=i===5?"16":`${i*3+1} - ${i*3+3}`,r.append(o,a),s.appendChild(r)}),lT(ne("fire"),()=>{Hn()&&(xr.add("touch"),pp())},()=>xr.delete("touch")),ne("skill").addEventListener("click",_x),ne("dodge").addEventListener("click",Mx),ne("grenade").addEventListener("click",yx),ne("summon-nuclear").addEventListener("click",bx),ne("campaign-restart").addEventListener("click",()=>gp().catch(ph));for(let n of Jn){let i=ne(`slot-${n.id}`);i.querySelector("img").src=vh("weapon",n.id),i.addEventListener("click",()=>{Hn()&&fh(n.id)})}ne("pause").addEventListener("click",()=>So(!N.paused)),ne("resume").addEventListener("click",()=>So(!1)),ne("configure").addEventListener("click",aT),ne("garage-close").addEventListener("click",Ex),ne("garage").addEventListener("cancel",$n),ne("garage").addEventListener("close",()=>{ti(),N.previous=0,Pi=!0}),ne("depart").addEventListener("click",()=>{qE(To),Ex()}),ne("randomize").addEventListener("click",()=>{for(let[n,i]of Object.entries(xp))To[n]=Ax(i).id;Tp()}),ne("restart").addEventListener("click",()=>dh(N.level,!0)),ne("new-run").addEventListener("click",()=>gp().catch(ph)),ne("render-settings").addEventListener("beforetoggle",n=>{N.settingsOpen=n.newState==="open",$n(),ti(),N.previous=0,Pi=!0}),ne("render-settings").addEventListener("toggle",n=>{n.newState==="closed"&&ne("view").focus({preventScroll:!0})}),ne("quality").value=Pt.quality,ne("quality").addEventListener("change",()=>{Pt.quality=ne("quality").value,Ka=1,Ja=Eo=0,el(),hh(),ne("render-settings").hidePopover(),ne("view").focus({preventScroll:!0})});let e=()=>{ne("sound").innerHTML=`<i data-lucide="${Pt.sound?"volume-2":"volume-x"}"></i>`,ne("sound").setAttribute("aria-label",Pt.sound?"关闭声音":"开启声音"),ne("sound").dataset.tooltip=Pt.sound?"关闭声音":"开启声音",tl()};e(),ne("sound").addEventListener("click",()=>{Pt.sound=!Pt.sound,hh(),e(),qi("pickup")}),ne("photo").addEventListener("click",()=>{Wi.render();let n=document.createElement("a");n.href=kn.domElement.toDataURL("image/png"),n.download=`老美大战倭寇-${Date.now()}.png`,n.click(),Ii("战场留影已保存")});let t=[...document.querySelectorAll("[data-tab]")];for(let n of t)n.addEventListener("click",()=>Tx(n)),n.addEventListener("keydown",i=>{if(i.code==="ArrowRight"||i.code==="ArrowLeft"){i.preventDefault();let r=t[(t.indexOf(n)+(i.code==="ArrowRight"?1:t.length-1))%t.length];Tx(r),r.focus()}});window.addEventListener("keydown",n=>{if(!(ne("garage").open||/INPUT|TEXTAREA|SELECT/.test(n.target.tagName))){if(n.code==="Escape"||n.code==="KeyP"){!n.repeat&&N.ready&&!["victory","gameover"].includes(N.phase)&&So(!N.paused);return}if(Hn()){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n.code)&&n.preventDefault(),n.code==="Space"){xr.add("keyboard"),n.repeat||pp();return}if(/^(Digit|Numpad)[1-4]$/.test(n.code)){n.preventDefault(),n.repeat||fh(Jn[Number(n.code.at(-1))-1].id);return}if(n.code==="KeyG"&&!n.repeat){yx();return}if(n.code==="KeyN"&&!n.repeat){n.preventDefault(),bx();return}if(n.code==="KeyE"&&!n.repeat){_x();return}if((n.code==="ShiftLeft"||n.code==="ShiftRight")&&!n.repeat){Mx();return}Ri.add(n.code)}}}),window.addEventListener("keyup",n=>{Ri.delete(n.code),n.code==="Space"&&xr.delete("keyboard")}),ne("view").addEventListener("contextmenu",n=>n.preventDefault()),window.addEventListener("blur",()=>{$n(),N.ready&&!["gameover","victory"].includes(N.phase)&&!ne("garage").open&&So(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden&&($n(),N.ready&&!["gameover","victory"].includes(N.phase)&&So(!0))}),window.addEventListener("resize",el)}async function uT(){tl(),kn=new Ta({canvas:ne("view"),antialias:!1,powerPreference:"high-performance"}),kn.outputColorSpace=Mt,kn.toneMapping=sr,kn.toneMappingExposure=1.08,kn.shadowMap.enabled=!0,kn.shadowMap.type=fc,Ft=new Vr,Ft.add($a),St=new rs(-18,18,12,-12,.1,260),St.position.set(0,24,34),St.lookAt(0,.5,0),St.updateMatrixWorld(),Qa=await Dg(t=>ne("load-progress").value=t);let s=new so(kn);Ft.environment=s.fromEquirectangular(Qa.environment).texture,Ft.environmentIntensity=.65,s.dispose(),an=new nr("#fff2d8",3.2),an.position.set(-16,28,16),an.castShadow=!0,an.shadow.mapSize.set(2048,2048),an.shadow.bias=-2e-4,an.shadow.normalBias=.035,Object.assign(an.shadow.camera,{left:-27,right:27,top:27,bottom:-27,near:1,far:90}),Ft.add(an,an.target,new Zr("#dff0ff","#777b65",1.2));let e=new nr("#bfdcd9",1.1);e.position.set(8,8,-12),Ft.add(e),Wi=new pu(kn),Wi.addPass(new mu(Ft,St)),fp=new ao(new de(900,600),.28,.45,1.25),Wi.addPass(fp),Wi.addPass(new vu),Wi.addPass(new xu),at=new rh(Ft,St),el(),Vn=new Wu,vs=new sh(Ft,at),yp=new ih(ne("tactical-map"),ne("district-name"),ne("map-position"));for(let t of Ba)vh("character",t.id);cT(),N.ready=!0,await gp(),ne("load-progress").value=100,requestAnimationFrame(Bx)}async function Fx(){let s=new Ge,e=["raider","heavy","boss","emperor"].map(Td),t=[...Jn.map(n=>Fa(n.id)),Fa("grenade")];e.forEach((n,i)=>{n.group.position.set(-3+i*3,0,-4),s.add(n.group)}),t.forEach((n,i)=>{n.position.set(-3+i*2,0,3),s.add(n)}),s.position.copy(gt),Ft.add(s),at.arc(ei(1),ln().color,1.4,0),at.shield.visible=!0;try{await kn.compileAsync(Ft,St),Wi.render()}finally{e.forEach(ho),t.forEach(Kt),s.removeFromParent(),at.clear(),at.shield.visible=!1}}function ph(s){console.error(s),ne("loading-state").textContent="战场加载失败";let e=document.createElement("button");e.className="depart",e.textContent="重新加载",e.addEventListener("click",()=>location.reload()),ne("loading-state").after(e)}uT().catch(ph);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

lucide/dist/esm/createElement.js:
lucide/dist/esm/replaceElement.js:
lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/icons/arrow-down.js:
lucide/dist/esm/icons/arrow-left.js:
lucide/dist/esm/icons/arrow-right.js:
lucide/dist/esm/icons/arrow-up.js:
lucide/dist/esm/icons/bomb.js:
lucide/dist/esm/icons/camera.js:
lucide/dist/esm/icons/check.js:
lucide/dist/esm/icons/dices.js:
lucide/dist/esm/icons/monitor.js:
lucide/dist/esm/icons/pause.js:
lucide/dist/esm/icons/play.js:
lucide/dist/esm/icons/refresh-cw.js:
lucide/dist/esm/icons/rotate-ccw.js:
lucide/dist/esm/icons/send.js:
lucide/dist/esm/icons/shield.js:
lucide/dist/esm/icons/sliders-horizontal.js:
lucide/dist/esm/icons/sparkles.js:
lucide/dist/esm/icons/target.js:
lucide/dist/esm/icons/trophy.js:
lucide/dist/esm/icons/volume-2.js:
lucide/dist/esm/icons/volume-x.js:
lucide/dist/esm/icons/x.js:
lucide/dist/esm/icons/zap.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
