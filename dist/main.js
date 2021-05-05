(()=>{var t={620:()=>{}},n={};function e(s){var a=n[s];if(void 0!==a)return a.exports;var o=n[s]={exports:{}};return t[s](o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{"use strict";const t="https://academic-grade-api.herokuapp.com/teachers",n=async n=>{const e=n?`${t}/${n}`:t;console.log(e);try{const t=await fetch(e);return await t.json()}catch(t){console.log("Fetch Error",t)}},s=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var a=e(620),o=e.n(a);const i="https://academic-grade-api.herokuapp.com/group",d=async t=>{const n=s();return`\n\n    <tr class="tbl-students__header">\n        <th>name</th>\n        <th>period 1</th>\n        <th>period 2</th>\n        <th>period 3</th>\n        <th>period 4</th>\n        <th>total</th>\n        <th></th>\n    </tr>\n    ${(await(async(t,n)=>{const e=t?`${i}/${n}/${t}`:i;try{const t=await fetch(e);return await t.json()}catch(t){console.log("Fetch Error",t)}})(t,n)).groups[0].students.map((t=>`\n\n        \n\n        <tr class="content-student-notes">\n            <td id="student-id" value="${t.id}">${t.firstName}  ${t.lastName}</td>\n            <td>\n                <input class="tbl_input-note" id="noteOne" value="${0===t.notes.note_1?"0.0":t.notes.note_1}"></input>\n            </td>\n            <td>\n                <input class="tbl_input-note" id="noteTwo" value="${0===t.notes.note_2?"0.0":t.notes.note_2}"></input>\n            </td>\n            <td>\n                <input class="tbl_input-note" id="noteThree" value="${0===t.notes.note_3?"0.0":t.notes.note_3}"></input>\n            </td>\n            <td>\n                <input class="tbl_input-note" id="noteFour" value="${0===t.notes.note_4?"0.0":t.notes.note_4}"></input>\n            </td>\n\n            <td><input class="tbl_input-note" id="total-notes" value="${l(t.notes)}" disabled></input></td>\n            <td class="testingID">\n                <button class="btn btn-blue" id="btn-note-${t.id}" value="${t.id}">\n                    <img src="/src/img/student__savebtn.svg"></img>\n                </button>\n            </td>\n        </tr>\n        `)).join("")}\n    \n    `};function l(t){let n=0;return n=t.note_1+t.note_2+t.note_3+t.note_4,n.toFixed(1)}const r={"/":async()=>{const t=await n();let e="";return t.map((t=>e+=`\n        <section class="item">\n            <img src="/src/img/main__img-woman.png" class="item__profile"></img>\n            <p class="item__name">Name: ${t.firstName} ${t.lastName} </p>\n            \n            <a class="btn btn-red" href="#/${t._id}"> + </a>\n        </section>\n        `)),e},"/:id":async()=>{const t=s();return`<section class= "groups">\n            <div class= "groups__header">\n                <p>Groups</p>\n            </div>\n    \n            ${(await n(t)).groups.map((t=>`\n                \n                <div class= "groups__item" id="total-groups">\n                    <div class="item__header" id="item-id" value="${t.id}">\n                        <p>\n                        Grade: ${t.grade}\n                        </p>\n                    </div>\n                    <div class="item__content">\n                        <p>${t.subject}</p>\n                        <button class="btn btn-green" id="btn-getStudent-${t.id}" value="${t.id}">\n                            <img src="/src/img/group__arrowbutton.svg"></img>\n                        </button>\n                    </div>\n                </div>\n            \n            `)).join("")}\n            \n       </section>\n        <section class= "students">\n            <div class="groups__header">\n                <p>Students</p>\n            </div>\n            <div class="students__content" id="students-content">\n                <table class="tbl-students" id="tbl-students"></table>\n            </div>\n        </section>\n    `}},c=async()=>{const t=document.getElementById("main"),n=document.getElementById("dashboard");let e=s(),a=await(t=>t.length<=40?"/"===t?t:"/:id":`/${t}`)(e),i=r[a]?r[a]:o();if("/:id"==a){n.innerHTML=await i(),t.innerHTML=null;let e=document.getElementsByClassName("item__content");for(var c=0;c<e.length;c++){let t=e[c].children[1].getAttribute("value"),n=document.getElementById("btn-getStudent-"+t),s=document.getElementById("tbl-students");const a=async()=>{s.innerHTML=null,s.innerHTML=await d(t);let n=s.getElementsByClassName("testingID");console.log(n);for(var e=0;e<n.length;e++){let t=n[e].children[0].getAttribute("value"),s=document.getElementById("btn-note-"+t),a=document.getElementById("noteOne"),o=document.getElementById("noteTwo"),i=document.getElementById("noteThree"),d=document.getElementById("noteFour"),r=document.getElementById("total-notes");const c=()=>{a.value,o.value,i.value,d.value},u=()=>{let t={note_1:parseFloat(a.value),note_2:parseFloat(o.value),note_3:parseFloat(i.value),note_4:parseFloat(d.value)};r.value=l(t)};s.addEventListener("click",c),a.addEventListener("change",u),o.addEventListener("change",u),i.addEventListener("change",u),d.addEventListener("change",u)}};n.addEventListener("click",a)}}else t.innerHTML=await i(),n.innerHTML=null};window.addEventListener("load",c),window.addEventListener("hashchange",c)})()})();