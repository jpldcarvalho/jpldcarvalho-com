(()=>{"use strict";var e=function(e,t){var n=document.getElementById("canvas"),s=document.createElement("div");s.className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-pastel-grey rounded-2xl "+e;var a=document.createElement("div");a.className="absolute top-0 left-0 w-full h-6 bg-pastel-blue border-b-2 border-pastel-grey rounded-t-2xl";var o="absolute top-1/2 h-4 w-4 border-2 border-pastel-grey rounded-full -translate-y-1/2 cursor-pointer",l="absolute h-3 w-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",c=document.createElement("button");c.className=o+" bg-pastel-green right-10",c.innerHTML="<img src='./assets/icons/plus.png' class='"+l+"'>",c.onclick=function(){s.className="w-full h-full",a.className=a.className.replace(" rounded-t-2xl",""),r.className=r.className.replace(" rounded-b-2xl",""),a.removeChild(c),a.appendChild(i)};var i=document.createElement("button");i.className=o+" bg-pastel-green right-10",i.innerHTML="<img src='./assets/icons/subtract.png' class='"+l+"'>",i.onclick=function(){s.className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-pastel-grey rounded-2xl "+e,a.className=a.className+" rounded-t-2xl",r.className=r.className+" rounded-b-2xl",a.removeChild(i),a.appendChild(c)};var d=document.createElement("button");d.className=o+" bg-pastel-red right-4 !border-pastel-dark-grey",d.innerHTML="<img src='./assets/icons/cancel.svg' class='"+l+" !h-4 !w-4'>",d.onclick=function(){n.removeChild(s)},a.appendChild(c),a.appendChild(d);var r=document.createElement("div");r.className="absolute top-6 left-0 w-full h-[calc(100%-1.5rem)] overflow-y-auto overflow-x-hidden bg-pastel-yellow rounded-b-2xl font-['dynapuff'] text-pastel-dark-grey",r.appendChild(t),s.appendChild(a),s.appendChild(r),n.appendChild(s)},t=[{icon:"./assets/icons/console.png",text:"Shell Version",position:"md:col-span-6 lg:col-span-12",onclick:function(){var e;null===(e=window.open("https://shell.droak.sh","_blank"))||void 0===e||e.focus()}},{icon:"./assets/icons/opened-folder.gif",text:"Documents",position:"md:col-span-6 lg:col-span-12",onclick:function(){!function(){if(!document.getElementById("documents")){var t=document.createElement("div");t.id="documents",t.className="p-4",t.innerHTML='\n    <h1 class="font-semibold text-2xl">Coming Soon!</h1>\n  ',e("w-72 h-28 md:w-1/2 md:h-3/4",t)}}()}},{icon:"./assets/icons/contacts.svg",text:"Contacts",position:"md:col-span-6 lg:col-span-12",onclick:function(){!function(){if(!document.getElementById("contacts")){var t=document.createElement("div");t.id="contacts",t.className="p-4",t.innerHTML='\n    <h1 class="font-semibold text-2xl">Contacts</h1>\n    <div class="mt-2 flex items-end">\n      <img src="./assets/icons/briefcase.svg" class="w-6 h-6 mt-4">\n      <span class="ml-2 text-lg">Business</span>\n    </div>\n    <a href="mailto:oak@tripleoak.vc" class="text-sm md:text-base text-pastel-blue underline">oak[at]tripleoak.vc</a>\n    <div class="mt-2 flex items-end">\n      <img src="./assets/icons/idea.svg" class="w-6 h-6 mt-4">\n      <span class="ml-2 text-lg">Research</span>\n    </div>\n    <a href="mailto:oak@ziku.io" class="text-sm md:text-base text-pastel-blue underline">oak[at]ziku.io</a>\n    <div class="mt-2 flex items-end">\n      <img src="./assets/icons/user.svg" class="w-6 h-6 mt-4">\n      <span class="ml-2 text-lg">Personal</span>\n    </div>\n    <p class="text-xs mt-1 mb-1">Requires proof-of-knowledge in the subject ("PoK quack: " + subject)</p>\n    <a href="mailto:me+website@droak.sh" class="text-sm md:text-base text-pastel-blue underline">me+website[at]droak.sh</a>\n  ',e("w-72 h-96 md:w-[30rem] md:h-96",t)}}()}},{icon:"./assets/icons/brain.png",text:"Knowledge",position:"md:col-span-6 lg:col-span-12 md:row-span-3 align-top items-start",onclick:function(){var e;null===(e=window.open("https://knowledge.droak.sh","_blank"))||void 0===e||e.focus()}},{icon:"./assets/icons/github.svg",text:"GitHub",position:"",onclick:function(){var e;null===(e=window.open("https://github.com/d-roak","_blank"))||void 0===e||e.focus()}},{icon:"./assets/icons/twitter.gif",text:"Twitter",position:"",onclick:function(){var e;null===(e=window.open("https://twitter.com/droak_","_blank"))||void 0===e||e.focus()}},{icon:"./assets/icons/youtube.svg",text:"YouTube",position:"md:col-span-2 lg:col-span-9",onclick:function(){var e;null===(e=window.open("https://www.youtube.com/channel/UC0vboDaMi68l2c-lAkiPAzw","_blank"))||void 0===e||e.focus()}},{icon:"./assets/icons/info.gif",text:"Info",position:"",onclick:function(){!function(){if(!document.getElementById("info")){var t=document.createElement("div");t.id="info",t.className="p-4",t.innerHTML='\n    <h1 class="font-semibold text-2xl">Info</h1>\n    <p class="mt-8">\n      You can check the source code on <a href="https://github.com/d-roak/droak.sh" class="text-pastel-blue underline">GitHub</a>\n    </p>\n    <p class="mt-8">\n      All the icons are from <a href="https://icons8.com/" class="text-pastel-blue underline">Icons8</a>\n    </p>\n  ',e("w-72 h-80 md:w-96 md:h-96",t)}}()}}];!function(){var e=document.getElementById("canvas"),n=document.createElement("div");e.appendChild(n),n.className="h-screen py-5 px-10 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4";for(var s=0,a=t;s<a.length;s++){var o=a[s],l=document.createElement("div"),c=document.createElement("button");c.innerHTML='\n    <img src="'.concat(o.icon,'" class="mx-auto w-16 h-16">\n    <span class="block w-24 mt-2 text-base font-[\'dynapuff\'] text-pastel-dark-grey font-medium">').concat(o.text,"</span>"),l.className=o.position,c.className="align-middle focus-visible:outline-none",c.onclick=o.onclick,l.appendChild(c),n.appendChild(l)}}()})();