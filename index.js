import{i as u,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="46087693-e119c112526bf06fb7b15b331",d="https://pixabay.com/api/",p=o=>fetch(`${d}?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error("Error fetching images");return r.json()}).then(r=>r.hits),y=o=>{const r=document.querySelector(".gallery");if(r.innerHTML="",o.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:a,comments:l,downloads:c})=>`
            <li class="gallery-item">
                <a href="${e}" class="gallery-link">
                    <img src="${i}" alt="${t}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes:</span> ${n}</p>
                    <p class="info-item"><span>Views:</span> ${a}</p>
                    <p class="info-item"><span>Comments:</span> ${l}</p>
                    <p class="info-item"><span>Downloads:</span> ${c}</p>
                </div>
            </li>
        `).join("");r.innerHTML=s},h=()=>{const o=document.querySelector(".loader");o.style.display="block"},g=()=>{const o=document.querySelector(".loader");o.style.display="none"},L=document.querySelector(".search-form"),b=new f(".gallery a");L.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.query.value.trim();r&&(h(),p(r).then(s=>{y(s),b.refresh()}).catch(s=>{console.error(s),iziToast.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{g()}))});
//# sourceMappingURL=index.js.map
