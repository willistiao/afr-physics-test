(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))T(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const b of i.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&T(b)}).observe(document,{childList:!0,subtree:!0});function k(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function T(t){if(t.ep)return;t.ep=!0;const i=k(t);fetch(t.href,i)}})();function l(e){return Math.round(e/100*window.innerWidth)}function o(e){return Math.round(e/100*window.innerHeight)}const x=Matter.Engine,r=Matter.Bodies,X=Matter.Body,c=Matter.Svg,u=Matter.Vertices;Matter.Constraint;const p=Matter.Composite,Y=Matter.Mouse,N=Matter.MouseConstraint,W=Matter.Render,L=Matter.Runner,y=x.create(),s=y.world,C=W.create({element:document.body,engine:y,options:{wireframes:!1,showInternalEdges:!1,width:l(100),height:o(100),background:"transparent"}});let f=[],B="#fff";var P=r.rectangle(l(100)/2,o(0)-10,l(100),20,{isStatic:!0}),A=r.rectangle(l(100)/2,o(100)+10,l(100),20,{isStatic:!0}),I=r.rectangle(l(100)+10,o(100)/2,20,o(100),{isStatic:!0}),q=r.rectangle(l(0)-10,o(100)/2,20,o(100),{isStatic:!0});P.render.visible=!1;A.render.visible=!1;I.render.visible=!1;q.render.visible=!1;f.push(P);f.push(A);f.push(I);f.push(q);p.add(s,f);let a=[],M,w,F,E,h=l(20),g=o(20),v=l(60),m=o(20),R=v-43,z=m+49,D=v+43,G=m+49,S=.8,V=.8,H=document.getElementById("svg-strawberry").querySelectorAll("path");H.forEach(e=>{svgStrawberry=r.fromVertices(h,g,u.scale(c.pathToVertices(e,3),2,2),{render:{fillStyle:"#F50100",strokeStyle:"#F50100",lineWidth:2}},!0),a.push(svgStrawberry)});let K=document.getElementById("svg-banana").querySelectorAll("path");K.forEach(e=>{svgBanana=r.fromVertices(h,g,u.scale(c.pathToVertices(e,3),2,2),{render:{fillStyle:"#FFC227",strokeStyle:"#FFC227",lineWidth:2}},!0),a.push(svgBanana)});let j=document.getElementById("svg-peach").querySelectorAll("path");j.forEach(e=>{svgPeach=r.fromVertices(h,g,u.scale(c.pathToVertices(e,3),2,2),{render:{fillStyle:"#FFA28D",strokeStyle:"#FFA28D",lineWidth:2}},!0),a.push(svgPeach)});let J=document.getElementById("svg-orange").querySelectorAll("path");J.forEach(e=>{svgOrange=r.fromVertices(h,g,u.scale(c.pathToVertices(e,3),2,2),{render:{fillStyle:"#FF9000",strokeStyle:"#FF9000",lineWidth:2}},!0),a.push(svgOrange)});let Q=document.getElementById("svg-pear").querySelectorAll("path");Q.forEach(e=>{svgPear=r.fromVertices(h,g,u.scale(c.pathToVertices(e,3),2,2),{render:{fillStyle:"#B6EF01",strokeStyle:"#B6EF01",lineWidth:2}},!0),a.push(svgPear)});$("#svg-3").find("path").each(function(e,n){M=r.fromVertices(v,m,u.scale(c.pathToVertices(n,10),S,V),{render:{fillStyle:"#000",strokeStyle:"#000",lineWidth:2}},!0),a.push(M)});$("#svg-3-leg-1").find("path").each(function(e,n){w=r.fromVertices(R,z,u.scale(c.pathToVertices(n,10),S,V),{render:{fillStyle:"#000",strokeStyle:"#000",lineWidth:2,isStatic:!0}},!0),a.push(w)});$("#svg-3-leg-2").find("path").each(function(e,n){F=r.fromVertices(D,G,u.scale(c.pathToVertices(n,10),S,V),{render:{fillStyle:"#000",strokeStyle:"#000",lineWidth:2,isStatic:!0}},!0),a.push(F)});$("#svg-3-counter").find("path").each(function(e,n){E=r.fromVertices(v,m,u.scale(c.pathToVertices(n,10),S,V),{render:{fillStyle:B,strokeStyle:B,lineWidth:2}},!0),a.push(E)});var U=X.create({parts:[M,w,F,E]});p.add(s,U);p.add(s,a);W.run(C);const Z=L.create();L.run(Z,y);let O;function _(){O||(O=setInterval(ee,3e3))}let d=1;function ee(){d===1?(s.gravity.y=.5,s.gravity.x=0,d+=1):d===2?(s.gravity.y=-.5,s.gravity.x=0,d+=1):d===3?(s.gravity.x=.5,s.gravity.y=0,d+=1):(s.gravity.x=-.5,s.gravity.y=0,d=1)}_();let te=Y.create(C.canvas),re=N.create(y,{mouse:te,constraint:{stiffness:.2,render:{visible:!1}}});p.add(s,re);
