const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.body;let a=null;t.addEventListener("click",()=>{a=setInterval(()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3)}),e.addEventListener("click",()=>{clearInterval(a)});
//# sourceMappingURL=01-color-switcher.56a39d17.js.map
