(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))p(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function f(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function p(r){if(r.ep)return;r.ep=!0;const l=f(r);fetch(r.href,l)}})();function u(e){return Math.round(e/100*window.innerWidth)}function h(e){return Math.round(e/100*window.innerHeight)}const m=new Date,fe=m.getMonth(),ge=m.getDay(),ye=["January","February","March","April","May","June","July","August","September","October","November","December"],pe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],me=ye[fe],Se=pe[ge],ve=m.toLocaleDateString(),ke=ve.split("/"),Be=ke[1],be=`${Se}, ${me} ${Be}`;function Z(){let e=m.getHours(),n="AM";e>12&&(e-=12,n="PM");function f(c){return c<10?c="0"+c:c}e=f(e);const p=f(m.getMinutes()),r=f(m.getSeconds());let l=`${e}:${p}:${r} ${n}`;document.getElementById("time").innerHTML=l}Z();document.getElementById("date").innerHTML=be;setInterval(Z,1e3);const d="#000",Ee=Matter.Engine,t=Matter.Bodies,Me=Matter.Body,a=Matter.Svg,i=Matter.Vertices;Matter.Constraint;const b=Matter.Composite,Ve=Matter.Mouse,Fe=Matter.MouseConstraint,j=Matter.Render,G=Matter.Runner,E=Ee.create(),M=E.world,Q=j.create({element:document.body,engine:E,options:{wireframes:!1,showInternalEdges:!1,width:u(100),height:h(100),background:"transparent"}});let V=[],D="#fff";var _=t.rectangle(u(100)/2,h(0)-10,u(100),20,{isStatic:!0}),ee=t.rectangle(u(100)/2,h(100)+10,u(100),20,{isStatic:!0}),te=t.rectangle(u(100)+10,h(100)/2,20,h(100),{isStatic:!0}),re=t.rectangle(u(0)-10,h(100)/2,20,h(100),{isStatic:!0});_.render.visible=!1;ee.render.visible=!1;te.render.visible=!1;re.render.visible=!1;V.push(_);V.push(ee);V.push(te);V.push(re);b.add(M,V);let S=document.getElementById("link-lookbook"),ne=S.offsetWidth,le=S.offsetHeight,v=document.getElementById("link-soundcloud"),oe=v.offsetWidth,se=v.offsetHeight,k=document.getElementById("link-shop"),ae=k.offsetWidth,ie=k.offsetHeight,B=document.getElementById("link-youtube"),ce=B.offsetWidth,de=B.offsetHeight;var F=t.rectangle(100,100,ne,le,{isStatic:!1,element:S,chamfer:{radius:60},render:{visible:!1}}),T=t.rectangle(300,100,oe,se,{isStatic:!1,element:v,chamfer:{radius:60},render:{visible:!1}}),W=t.rectangle(500,100,ae,ie,{isStatic:!1,element:k,chamfer:{radius:60},render:{visible:!1}}),I=t.rectangle(800,100,ce,de,{isStatic:!1,element:B,chamfer:{radius:60},render:{visible:!1}});b.add(M,[F,T,W,I]);Matter.Events.on(E,"beforeUpdate",function(e){S.style.left=F.position.x-ne/2+"px",S.style.top=F.position.y-le/2+"px";var n=F.angle,f=n*180/Math.PI;S.style.transform="rotate("+f+"deg)",v.style.left=T.position.x-oe/2+"px",v.style.top=T.position.y-se/2+"px";var p=T.angle,r=p*180/Math.PI;v.style.transform="rotate("+r+"deg)",k.style.left=W.position.x-ae/2+"px",k.style.top=W.position.y-ie/2+"px";var l=W.angle,c=l*180/Math.PI;k.style.transform="rotate("+c+"deg)",B.style.left=I.position.x-ce/2+"px",B.style.top=I.position.y-de/2+"px";var ue=I.angle,he=ue*180/Math.PI;B.style.transform="rotate("+he+"deg)"});let s=[],H,O,x,Y,q,C,R,N,X,z,J,K,U,g=u(30),y=h(20),L=u(10),w=h(20),Te=L-43*2.49,We=w+49*2.47,Ie=L+43*2.47,Le=w+49*2.47,o=4,A=2,P=2,we=document.getElementById("svg-strawberry").querySelectorAll("path");we.forEach(e=>{R=t.fromVertices(g,y,i.scale(a.pathToVertices(e,3),o,o),{render:{fillStyle:"#F50100",strokeStyle:"#F50100",lineWidth:2}},!0),s.push(R)});let Ae=document.getElementById("svg-banana").querySelectorAll("path");Ae.forEach(e=>{N=t.fromVertices(g+50,y-50,i.scale(a.pathToVertices(e,3),o,o),{render:{fillStyle:"#FFC227",strokeStyle:"#FFC227",lineWidth:2}},!0),s.push(N)});let Pe=document.getElementById("svg-peach").querySelectorAll("path");Pe.forEach(e=>{z=t.fromVertices(g,y,i.scale(a.pathToVertices(e,3),o,o),{render:{fillStyle:"#FFA28D",strokeStyle:"#FFA28D",lineWidth:2}},!0),s.push(z)});let He=document.getElementById("svg-orange").querySelectorAll("path");He.forEach(e=>{X=t.fromVertices(g,y,i.scale(a.pathToVertices(e,3),o,o),{render:{fillStyle:"#FF9000",strokeStyle:"#FF9000",lineWidth:2}},!0),s.push(X)});let Oe=document.getElementById("svg-pear").querySelectorAll("path");Oe.forEach(e=>{J=t.fromVertices(g-100,y+50,i.scale(a.pathToVertices(e,3),o,o),{render:{fillStyle:"#B6EF01",strokeStyle:"#B6EF01",lineWidth:2}},!0),s.push(J)});let xe=document.getElementById("svg-lemon").querySelectorAll("path");xe.forEach(e=>{K=t.fromVertices(g,y,i.scale(a.pathToVertices(e,3),o,o),{render:{fillStyle:"#EFE940",strokeStyle:"#EFE940",lineWidth:2}},!0),s.push(K)});let Ye=document.getElementById("svg-pom").querySelectorAll("path");Ye.forEach(e=>{U=t.fromVertices(g+300,y-100,i.scale(a.pathToVertices(e,3),o,o),{render:{fillStyle:"#FF45B5",strokeStyle:"#FF45B5",lineWidth:2}},!0),s.push(U)});$("#svg-3").find("path").each(function(e,n){H=t.fromVertices(L,w,i.scale(a.pathToVertices(n,10),A,P),{render:{fillStyle:d,strokeStyle:d,lineWidth:2}},!0),s.push(H)});$("#svg-3-leg-1").find("path").each(function(e,n){O=t.fromVertices(Te,We,i.scale(a.pathToVertices(n,10),A,P),{render:{fillStyle:d,strokeStyle:d,lineWidth:2,isStatic:!0}},!0),s.push(O)});$("#svg-3-leg-2").find("path").each(function(e,n){x=t.fromVertices(Ie,Le,i.scale(a.pathToVertices(n,10),A,P),{render:{fillStyle:d,strokeStyle:d,lineWidth:2,isStatic:!0}},!0),s.push(x)});$("#svg-3-counter").find("path").each(function(e,n){Y=t.fromVertices(L,w,i.scale(a.pathToVertices(n,10),A,P),{render:{fillStyle:D,strokeStyle:D,lineWidth:2}},!0),s.push(Y)});var De=Me.create({parts:[H,O,x,Y]});let $e=document.getElementById("svg-f").querySelectorAll("path");$e.forEach(e=>{q=t.fromVertices(300,100,i.scale(a.pathToVertices(e,3),4.7,4.7),{render:{fillStyle:d,strokeStyle:d,lineWidth:2}},!0),s.push(q)});let qe=document.getElementById("svg-r").querySelectorAll("path");qe.forEach(e=>{C=t.fromVertices(900,100,i.scale(a.pathToVertices(e,3),4.7,4.7),{render:{fillStyle:d,strokeStyle:d,lineWidth:2}},!0),s.push(C)});b.add(M,De);b.add(M,s);j.run(Q);const Ce=G.create();G.run(Ce,E);let Re=Ve.create(Q.canvas),Ne=Fe.create(E,{mouse:Re,constraint:{stiffness:.2,render:{visible:!1}}});b.add(M,Ne);
