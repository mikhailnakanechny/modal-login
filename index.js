!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){var n=document.querySelector(".c-auth"),r=document.querySelector(".c-auth__login"),c=document.querySelector(".c-auth__register"),o=document.querySelector(".c-auth__reset"),u=document.querySelector(".c-auth__sel-login"),d=document.querySelector(".c-auth__sel-register"),i=document.querySelector(".c-header__select"),l=document.getElementById("signin-pass"),a=document.getElementById("signup-pass"),s=document.querySelector(".hide-pass-login"),f=document.querySelector(".hide-pass-register");function h(){event.preventDefault(),n.hidden=!1,r.hidden=!1,c.hidden=!0,o.hidden=!0,u.classList.add("selected"),d.classList.remove("selected")}function _(){event.preventDefault(),n.hidden=!1,r.hidden=!0,c.hidden=!1,o.hidden=!0,d.classList.add("selected"),u.classList.remove("selected")}function m(){event.preventDefault(),n.hidden=!1,r.hidden=!0,c.hidden=!0,o.hidden=!1}function p(){event.preventDefault(),n.hidden=!0,r.hidden=!0,c.hidden=!0,o.hidden=!0}function y(e){"password"===e.type?e.type="text":e.type="password"}s.onclick=function(){return y(l)},f.onclick=function(){return y(a)},i.onclick=function(e){var t=e.target;"c-header__sel c-header__sel-login"===t.className&&h(),"c-header__sel c-header__sel-register c-header__sel--colored"===t.className&&_()},n.onclick=function(e){var t=e.target;"c-auth__sel-login"!==t.className&&"c-auth__outer-login"!==t.className||h(),"c-auth__sel-register"===t.className&&_(),"c-auth__outer-reset"===t.className&&m(),"c-auth"===t.className&&p()},document.onkeydown=function(e){"Escape"===e.key&&p()};for(var g=document.getElementsByTagName("INPUT"),v=0;v<g.length;v+=1)g[v].oninvalid=function(){document.querySelectorAll(".c-auth__error").forEach(function(e){e.hidden=!1})}},function(e,t,n){}]);