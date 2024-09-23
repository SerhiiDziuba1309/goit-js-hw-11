import{i as u,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const m="46087693-e119c112526bf06fb7b15b331",d="https://pixabay.com/api/",p=o=>fetch(`${d}?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(`Error fetching images: ${e.status} ${e.statusText}`);return e.json()}).then(e=>e.hits.length===0?[]:e.hits),y=o=>{const e=document.querySelector(".gallery");if(e.innerHTML="",o.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=o.map(({webformatURL:i,largeImageURL:r,tags:t,likes:s,views:a,comments:l,downloads:c})=>`
            <li class="gallery-item">
                <a href="${r}" class="gallery-link">
                    <img src="${i}" alt="${t}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes</span> ${s}</p>
                    <p class="info-item"><span>Views</span> ${a}</p>
                    <p class="info-item"><span>Comments</span> ${l}</p>
                    <p class="info-item"><span>Downloads</span> ${c}</p>
                </div>
            </li>
        `).join("");e.innerHTML=n},h=()=>{const o=document.querySelector(".loader");o.style.display="block"},g=()=>{const o=document.querySelector(".loader");o.style.display="none"},L=document.querySelector(".search-form"),$=document.querySelector(".gallery"),b=new f(".gallery a");L.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements.query.value.trim();e&&($.innerHTML="",h(),p(e).then(n=>{n.length!==0&&(y(n),b.refresh())}).catch(n=>{console.error(n)}).finally(()=>{g()}))});
//# sourceMappingURL=index.js.map
