!function(){let t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.body,o=null;t.addEventListener("click",()=>{o=setInterval(()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3)}),e.addEventListener("click",()=>{clearInterval(o)})}();
//# sourceMappingURL=01-color-switcher.80825928.js.map
