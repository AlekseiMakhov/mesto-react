(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),i=n.n(o),s=n(7),r=n.n(s),c=(n(16),n(10)),l=n(3),u=n.p+"static/media/logo.c2821b38.svg";var d=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"header__logo",src:u,alt:"\u041b\u043e\u0433\u043e"})})},p=Object(o.createContext)();var b=function(e){var t=e.card,n=e.onCardClick,i=e.onLikeButtonClick,s=e.onCardDeleteClick,r=Object(o.useContext)(p),c=t.owner._id===r._id,l="element__trash-button ".concat(c?"element__trash-button_visible":""),u=t.likes.some((function(e){return e._id===r._id})),d="like__button ".concat(u?"like__button_pressed":"");return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"element",id:t.id,children:[Object(a.jsx)("img",{className:"element__image",src:t.link,alt:"".concat(t.name,".\u0424\u043e\u0442\u043e"),onClick:function(){n(t)}}),Object(a.jsx)("button",{type:"button",className:l,onClick:function(e){return s(t)}}),Object(a.jsx)("h3",{className:"element__text",children:t.name}),Object(a.jsxs)("div",{className:"like",children:[Object(a.jsx)("button",{type:"button",className:d,onClick:function(e){return i(t)}}),Object(a.jsx)("p",{className:"like__count",children:t.likes.length})]})]})})};var j=function(e){var t=e.onEditProfile,n=e.onEditAvatar,i=e.onAddPlace,s=e.onCardClick,r=e.onCardLike,c=e.onDeleteCard,l=e.cards,u=Object(o.useContext)(p);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"avatar",onClick:n,children:[Object(a.jsx)("img",{className:"avatar__img",src:u.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("div",{className:"avatar__edit-icon"})]}),Object(a.jsxs)("div",{className:"profile-info",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"profile-info__name",children:u.name}),Object(a.jsx)("p",{className:"profile-info__description",children:u.about})]}),Object(a.jsx)("button",{type:"button",className:"profile-info__edit-button",onClick:t})]}),Object(a.jsx)("button",{type:"button",className:"add-image-button",onClick:i})]}),Object(a.jsx)("section",{className:"elements",children:l.map((function(e){return Object(a.jsx)(b,{card:e,onCardClick:s,onLikeButtonClick:r,onCardDeleteClick:c},e._id)}))})]})};var m=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__logo",children:"\xa9 2020 Mesto Russia"})})},_=n(2),f=n.n(_),h=Object(o.createContext)();var O=function(e){var t=e.name,n=e.title,i=e.children,s=e.isOpen,r=e.onClose,c=e.buttonText,l=e.onSubmit,u=e.noClose,d=Object(o.useContext)(h);return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:f()("popup popup_type_".concat(t),{popup_opened:s}),onClick:r,children:Object(a.jsxs)("form",{className:"popup-form",name:t,onSubmit:l,onClick:u,children:[Object(a.jsx)("button",{type:"button",name:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup-form__close-button",onClick:r}),Object(a.jsx)("h3",{className:"popup-form__title",children:n}),i,Object(a.jsx)("button",{className:f()("popup-form__submit-button",{"popup-form__submit-button_disabled":!d.isValid}),children:c})]})})})};var v=function(e){var t=e.isOpen,n=e.onClose,i=e.onAddPlace,s=e.noClose,r=e.onInput,c=Object(o.useContext)(h),l=Object(o.useRef)(""),u=Object(o.useRef)("");return Object(a.jsx)(O,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onInput:r,ref:u,name:"name",id:"0",type:"text",minLength:"1",maxLength:"40",className:f()("popup-form__text-input",{"popup-form__text-input_type_error":!c.validation[0]}),placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}),Object(a.jsx)("span",{id:"image-input-error",className:f()("popup-form__error-text",{"popup-form__error-text_show":!c.validation[0]}),children:c.validationText[0]}),Object(a.jsx)("input",{onInput:r,ref:l,name:"link",id:"1",type:"url",className:f()("popup-form__text-input",{"popup-form__text-input_type_error":!c.validation[1]}),placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{id:"link-input-error",className:f()("popup-form__error-text",{"popup-form__error-text_show":!c.validation[1]}),children:c.validationText[1]})]}),isOpen:t,onClose:n,buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),c.isValid&&(i({link:l.current.value,name:u.current.value}),e.target.reset())},noClose:s})};var x=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateAvatar,s=e.noClose,r=e.onInput,c=Object(o.useContext)(h),l=Object(o.useRef)("");return Object(a.jsx)(O,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onInput:r,name:"avatar",ref:l,id:"0",type:"url",className:f()("popup-form__text-input",{"popup-form__text-input_type_error":!c.validation[0]}),placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{id:"avatar-error",className:f()("popup-form__error-text",{"popup-form__error-text_show":!c.validation[0]}),children:c.validationText[0]})]}),isOpen:t,onClose:n,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),c.isValid&&(i({avatar:l.current.value}),e.target.reset())},noClose:s})};var C=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateUser,s=e.noClose,r=e.onInput,c=Object(o.useContext)(p),u=Object(o.useContext)(h),d=Object(o.useState)(c.name),b=Object(l.a)(d,2),j=b[0],m=b[1],_=Object(o.useState)(c.about),v=Object(l.a)(_,2),x=v[0],C=v[1];return Object(o.useEffect)((function(e){m(c.name),C(c.about)}),[c]),Object(a.jsx)(O,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onInput:r,name:"name",id:"0",type:"text",minLength:"2",maxLength:"40",value:j,onChange:function(e){return m(e.target.value)},className:f()("popup-form__text-input",{"popup-form__text-input_type_error":!u.validation[0]}),placeholder:"\u0418\u043c\u044f",required:!0}),Object(a.jsx)("span",{id:"name-input-error",className:f()("popup-form__error-text",{"popup-form__error-text_show":!u.validation[0]}),children:u.validationText[0]}),Object(a.jsx)("input",{onInput:r,name:"about",id:"1",type:"text",minLength:"2",maxLength:"200",value:x,onChange:function(e){return C(e.target.value)},className:f()("popup-form__text-input",{"popup-form__text-input_type_error":!u.validation[1]}),placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0}),Object(a.jsx)("span",{id:"about-input-error",className:f()("popup-form__error-text",{"popup-form__error-text_show":!u.validation[1]}),children:u.validationText[1]})]}),isOpen:t,onClose:n,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),u.isValid&&(i({name:j,about:x}),e.target.reset())},noClose:s})};var g=function(e){var t=e.isOpen,n=e.onClose,o=e.card,i=e.noClose;return Object(a.jsx)("section",{id:"view-image",className:f()("popup popup_type_dark",{popup_opened:t}),onClick:n,children:Object(a.jsxs)("div",{className:"popup-image",onClick:i,children:[Object(a.jsx)("button",{type:"button",name:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup-image__close-button",onClick:n}),Object(a.jsx)("img",{className:"popup-image__image",src:o.link,alt:"".concat(o.name).\u0424\u043e\u0442\u043e}),Object(a.jsx)("h3",{className:"popup-image__title",children:o.name})]})})};var k=function(e){var t=e.isOpen,n=e.onClose,o=e.noClose,i=e.onDeleteCard,s=e.card;return Object(a.jsx)(O,{name:"submit",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:t,onClose:n,buttonText:"\u0414\u0430",onSubmit:function(e){e.preventDefault(),i(s)},noClose:o})},N=n(8),y=n(9),T=new(function(){function e(t){Object(N.a)(this,e),this._headers=t.headers,this._baseUrl=t.baseUrl}return Object(y.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status," - ").concat(e.statusText))}))}},{key:"editProfileInfo",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"getProfileInfo",value:function(){return this._sendRequest("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"editAvatar",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"createNewCard",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"changeLikeStatus",value:function(e,t){return this._sendRequest("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers})}},{key:"getInitialCards",value:function(){return this._sendRequest("".concat(this._baseUrl,"/cards"),{headers:this._headers})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"83172f60-a4ab-4f2a-9396-1325bbd21612","Content-Type":"application/json"}});var S=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(o.useState)(!1),r=Object(l.a)(s,2),u=r[0],b=r[1],_=Object(o.useState)(!1),f=Object(l.a)(_,2),O=f[0],N=f[1],y=Object(o.useState)(!1),S=Object(l.a)(y,2),L=S[0],P=S[1],E=Object(o.useState)(!1),I=Object(l.a)(E,2),w=I[0],U=I[1],q=Object(o.useState)({}),D=Object(l.a)(q,2),A=D[0],R=D[1],V=Object(o.useState)([]),F=Object(l.a)(V,2),J=F[0],B=F[1],M=Object(o.useState)({}),H=Object(l.a)(M,2),z=H[0],G=H[1],K=Object(o.useState)({validation:[],validationText:[],isValid:!1}),Q=Object(l.a)(K,2),W=Q[0],X=Q[1];function Y(e){var t=W.validation,n=W.validationText,a=Number(e.target.id),o=0;t[a]=e.target.validity.valid,n[a]=e.target.validationMessage;for(var i=0;i<t.length;i++)o+=Number(t[i]);X({validation:t,validationText:n,isValid:o===t.length})}function Z(e){"Escape"===e.key&&ee()}function $(e){e.stopPropagation()}function ee(){i(!1),b(!1),N(!1),P(!1),U(!1),document.removeEventListener("keydown",Z),X({validation:[],validationText:[],isValid:!1}),R({})}return Object(o.useEffect)((function(){Promise.all([T.getProfileInfo(),T.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];G(n),B(a)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsxs)(p.Provider,{value:z,children:[Object(a.jsx)(d,{}),Object(a.jsx)(j,{onEditProfile:function(){b(!0),X({validation:[!0,!0],validationText:["",""],isValid:!0}),document.addEventListener("keydown",Z)},onEditAvatar:function(){i(!0),X({validation:[!0],validationText:[""],isValid:!1}),document.addEventListener("keydown",Z)},onAddPlace:function(){N(!0),X({validation:[!0,!0],validationText:["",""],isValid:!1}),document.addEventListener("keydown",Z)},onCardClick:function(e){U(!0),R(e),document.addEventListener("keydown",Z)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===z._id}));T.changeLikeStatus(e._id,!t).then((function(t){var n=J.map((function(n){return n._id===e._id?t:n}));B(n)})).catch((function(e){console.log(e)}))},onDeleteCard:function(e){P(!0),X({validation:[],validationText:[],isValid:!0}),R(e),document.addEventListener("keydown",Z)},cards:J}),Object(a.jsx)(m,{}),Object(a.jsxs)(h.Provider,{value:W,children:[Object(a.jsx)(C,{isOpen:u,onClose:ee,onUpdateUser:function(e){T.editProfileInfo(e).then((function(e){G(e),ee()})).catch((function(e){console.log(e)}))},noClose:$,onInput:Y}),Object(a.jsx)(x,{isOpen:n,onClose:ee,onUpdateAvatar:function(e){T.editAvatar(e.avatar).then((function(e){G(e),ee()})).catch((function(e){console.log(e)}))},noClose:$,onInput:Y}),Object(a.jsx)(v,{isOpen:O,onClose:ee,onAddPlace:function(e){T.createNewCard(e).then((function(e){B([e].concat(Object(c.a)(J))),ee()})).catch((function(e){console.log(e)}))},noClose:$,onInput:Y}),Object(a.jsx)(k,{isOpen:L,onClose:ee,noClose:$,onDeleteCard:function(e){T.deleteCard(e._id).then((function(){var t=J.filter((function(t){return t._id!==e._id}));B(t),ee()})).catch((function(e){console.log(e)}))},card:A})]}),Object(a.jsx)(g,{isOpen:w,onClose:ee,card:A,noClose:$})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),i(e),s(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),L()}},[[17,1,2]]]);
//# sourceMappingURL=main.e8a85892.chunk.js.map