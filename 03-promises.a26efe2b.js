function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i.register;var l=i("7Y9D8");document.querySelector(".form").addEventListener("submit",function(t){t.preventDefault();let n=parseInt(this.elements.delay.value),o=parseInt(this.elements.step.value),i=parseInt(this.elements.amount.value);for(let t=0;t<i;t++){let i=n+o*t;(function(e,t){return new Promise((n,o)=>{let i=Math.random()>.3;setTimeout(()=>{i?n({position:e,delay:t}):o({position:e,delay:t})},t)})})(t+1,i).then(({position:t,delay:n})=>{console.log(`\u{2705} Fulfilled promise ${t} in ${n}ms`),e(l).Notify.success(` Fulfilled promise ${t} in ${n}ms`)}).catch(({position:t,delay:n})=>{console.log(`\u{274C} Rejected promise ${t} in ${n}ms`),e(l).Notify.failure(` Rejected promise ${t} in ${n}ms`)})}});
//# sourceMappingURL=03-promises.a26efe2b.js.map
