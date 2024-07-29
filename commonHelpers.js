import{S as n,i}from"./assets/vendor-8c59ed88.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function c(o){const r=`https://pixabay.com/api?${new URLSearchParams({key:"45176737-eefebace9d6de0f5929b63080",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return document.querySelector(".loader").style.display="inline-block",document.querySelector(".gallery").style.display="none",fetch(r).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits).catch(t=>{console.log(t)}).finally(()=>{document.querySelector(".loader").style.display="none",document.querySelector(".gallery").style.display="flex"})}function d(o){const l=document.querySelector(".gallery");l.innerHTML="";const r=o.map(e=>`<li class="gallery-item">
              <a class="gallery-link" href="${e.largeImageURL}">
              <img
                  class="gallery-image"
                  src="${e.previewURL}"
                  data-source="${e.largeImageURL}"
                  alt="${e.tags}"
              />
              <div class="image-details">
            <div class="details-element">
              <p class="details-title">Likes</p>
              <p class="details-value">${e.likes}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Views</p>
              <p class="details-value">${e.views}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Comments</p>
              <p class="details-value">${e.comments}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Downloads</p>
              <p class="details-value">${e.downloads}</p>
            </div>
          </div>
              </a>
              </li>`).join("");l.insertAdjacentHTML("beforeend",r);let t=new n(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});t.on("show.simplelightbox",function(e){e.preventDefault()}),t.refresh()}const u=document.querySelector(".search-form");u.addEventListener("submit",o=>{o.preventDefault();const l=document.querySelector(".search-input").value.trim();l===""?i.error({id:"error",message:"The search field cannot be empty",position:"topRight",transitionIn:"fadeInDown"}):c(l).then(r=>{console.log(r),r.length===0?i.error({id:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"}):d(r)}).catch(r=>{console.error("Error:",r)})});
//# sourceMappingURL=commonHelpers.js.map
