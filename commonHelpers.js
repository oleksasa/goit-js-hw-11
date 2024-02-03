import{S as d,i as m}from"./assets/vendor-9310f15c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const c=document.querySelector(".gallery"),l=document.querySelector(".search-form"),u=document.querySelector(".loader"),g="gallery-link";l.addEventListener("submit",function(r){r.preventDefault();const s=r.target.elements.query.value;s!==""&&(c.innerHTML="",u.style.display="block",y(s).then(function({hits:t,total:a}){if(Array.isArray(t)&&t.length>0){const e=t.map(F).join("");c.innerHTML=e,p(`Was found: ${a} images`),new d(`.${g}`).refresh()}else i("Sorry, there are no images matching your search query. Please try again!")}).catch(function(t){i(`Error fetching images: ${t}`)}).finally(function(){l.reset(),u.style.display="none"}))});const f={titleColor:"#FFFFFF",messageColor:"#FFFFFF",messageSize:"16px",position:"topRight",displayMode:"replace",closeOnEscape:!0,pauseOnHover:!1,maxWidth:432,messageSize:"16px",messageLineHeight:"24px"};function i(r){m.show({message:r,backgroundColor:"#EF4040",progressBarColor:"#FFE0AC",icon:"icon-close",...f})}function p(r){m.show({message:r,backgroundColor:"#59A10D",progressBarColor:"#B5EA7C",icon:"icon-chek",...f})}const h="https://pixabay.com/api/";function y(r){const t=`?${new URLSearchParams({key:"42137546-386b5be41212ccd429cab5a80",q:r,image_type:"photo",orientation:"horizontal",safeSearch:!0})}`,a=h+t;return fetch(a).then(e=>e.json()).catch(e=>{throw i(`Error fetching images: ${e}`),e})}function F({largeImageURL:r,tags:s,webformatURL:t,likes:a,views:e,comments:o,downloads:n}){return`
  <a href="${r}" class="${g}">
     <figure>
      <img src="${t}" alt="${s}" class="gallery-image">
      <figcaption class="gallery__figcaption">
        <div class="image-item">Likes <span class="image-elem">${a}</span></div>
        <div class="image-item">Views <span class="image-elem">${e}</span></div>
        <div class="image-item">Comments <span class="image-elem">${o}</span></div>
        <div class="image-item">Downloads <span class="image-elem">${n}</span></div>
  </figcaption>
  </figure>
</a>
`}
//# sourceMappingURL=commonHelpers.js.map
