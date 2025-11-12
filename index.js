import{S as u,i as n}from"./assets/vendor-bqRJDAzz.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="53208176-1e9da6e5d5d5253b1447f8259",h="https://pixabay.com/api/";async function m(i){const s=new URLSearchParams({key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(i){return i.map(({webformatURL:s,largeImageURL:t,tags:o,likes:e,views:r,comments:a,downloads:d})=>`<li class="gallery-item">
        <a href="${t}">
          <img src="${s}" alt="${o}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-div">
            <h3 class="params">Likes</h3> 
            <p>${e}</p>
          </div>
          <div class="info-div">
            <h3 class="params">Views</h3> 
            <p>${r}</p>
          </div>
          <div class="info-div">
            <h3 class="params">Comments</h3> 
            <p>${a}</p>
          </div>
          <div class="info-div">
            <h3 class="params">Downloads</h3> 
            <p>${d}</p>
          </div>
        </div>
      </li>`).join("")}const g=document.querySelector("#search-form"),l=document.querySelector("#gallery"),c=document.querySelector("#loader"),y=new u(".gallery a");g.addEventListener("submit",v);function v(i){i.preventDefault();const s=i.target.searchQuery.value.trim();if(l.innerHTML="",!s){n.warning({title:"Warning",message:"Please, enter a search term!"});return}c.classList.remove("hidden"),m(s).then(t=>{if(c.classList.add("hidden"),t.hits.length===0){n.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please, try again!"});return}const o=p(t.hits);l.insertAdjacentHTML("beforeend",o),y.refresh()}).catch(t=>{c.classList.add("hidden"),n.error({title:"Error",message:"Something went wrong while fetching images..."}),console.log(t)})}
//# sourceMappingURL=index.js.map
