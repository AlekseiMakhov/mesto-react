(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(6),r=n.n(o),i=(n(15),n(9)),u=n(2),l=n.p+"static/media/logo.c2821b38.svg";var d=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e"})})},p=Object(c.createContext)();var j=function(e){var t=e.card,n=e.onCardClick,s=e.onLikeButtonClick,o=e.onCardDeleteClick,r=Object(c.useContext)(p),i=t.owner._id===r._id,u="element__trash-button ".concat(i?"element__trash-button_visible":""),l=t.likes.some((function(e){return e._id===r._id})),d="like__button ".concat(l?"like__button_pressed":"");return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"element",id:t.id,children:[Object(a.jsx)("img",{className:"element__image",src:t.link,alt:"".concat(t.name,".\u0424\u043e\u0442\u043e"),onClick:function(){n(t)}}),Object(a.jsx)("button",{type:"button",className:u,onClick:function(e){return o(t)}}),Object(a.jsx)("h3",{className:"element__text",children:t.name}),Object(a.jsxs)("div",{className:"like",children:[Object(a.jsx)("button",{type:"button",className:d,onClick:function(e){return s(t)}}),Object(a.jsx)("p",{className:"like__count",children:t.likes.length})]})]})})};var b=function(e){var t=e.onEditProfile,n=e.onEditAvatar,s=e.onAddPlace,o=e.onCardClick,r=e.handleCardLike,i=e.handleDeleteCard,u=e.cards,l=Object(c.useContext)(p);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"avatar",onClick:n,children:[Object(a.jsx)("img",{className:"avatar__img",src:l.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("div",{className:"avatar__edit-icon"})]}),Object(a.jsxs)("div",{className:"profile-info",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"profile-info__name",children:l.name}),Object(a.jsx)("p",{className:"profile-info__description",children:l.about})]}),Object(a.jsx)("button",{type:"button",className:"profile-info__edit-button",onClick:t})]}),Object(a.jsx)("button",{type:"button",className:"add-image-button",onClick:s})]}),Object(a.jsx)("section",{className:"elements",children:u.map((function(e){return Object(a.jsx)(j,{card:e,onCardClick:o,onLikeButtonClick:r,onCardDeleteClick:i},e._id)}))})]})};var m=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__logo",children:"\xa9 2020 Mesto Russia"})})};var h=function(e){var t=e.name,n=e.title,c=e.children,s=e.isOpen,o=e.onClose,r=e.buttonText,i=e.onSubmit,u=s?" popup_opened":"";return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{id:"profile-info__edit",className:"popup popup_type_".concat(t).concat(u),children:Object(a.jsxs)("form",{className:"popup-form",name:t,onSubmit:i,children:[Object(a.jsx)("button",{type:"button",name:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup-form__close-button",onClick:o}),Object(a.jsx)("h3",{className:"popup-form__title",children:n}),c,Object(a.jsx)("button",{className:"popup-form__submit-button",children:r})]})})})};var f=function(e){var t=e.isOpen,n=e.onClose,s=e.onAddPlace,o=Object(c.useRef)(""),r=Object(c.useRef)("");return Object(a.jsx)(h,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{ref:r,name:"name",id:"image-input",type:"text",minLength:"1",maxLength:"40",className:"popup-form__text-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}),Object(a.jsx)("span",{id:"image-input-error",className:"popup-form__error-text"}),Object(a.jsx)("input",{ref:o,name:"link",id:"link-input",type:"url",className:"popup-form__text-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{id:"link-input-error",className:"popup-form__error-text"})]}),isOpen:t,onClose:n,buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),s({link:o.current.value,name:r.current.value})}})};var O=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateAvatar,o=Object(c.useRef)("");return Object(a.jsx)(h,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:"avatar",ref:o,id:"avatar",type:"url",className:"popup-form__text-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{id:"avatar-error",className:"popup-form__error-text"})]}),isOpen:t,onClose:n,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),s({avatar:o.current.value}),console.log(o.current.value)}})};var _=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateUser,o=Object(c.useContext)(p),r=Object(c.useState)(o.name),i=Object(u.a)(r,2),l=i[0],d=i[1],j=Object(c.useState)(o.about),b=Object(u.a)(j,2),m=b[0],f=b[1];return Object(c.useEffect)((function(e){d(o.name),f(o.about)}),[o]),Object(a.jsx)(h,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:"name",id:"name-input",type:"text",minLength:"2",maxLength:"40",value:l,onChange:function(e){return d(e.target.value)},className:"popup-form__text-input",placeholder:"\u0418\u043c\u044f",required:!0}),Object(a.jsx)("span",{id:"name-input-error",className:"popup-form__error-text"}),Object(a.jsx)("input",{name:"about",id:"about-input",type:"text",minLength:"2",maxLength:"200",value:m,onChange:function(e){return f(e.target.value)},className:"popup-form__text-input",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0}),Object(a.jsx)("span",{id:"about-input-error",className:"popup-form__error-text"})]}),isOpen:t,onClose:n,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),s({name:l,about:m})}})};var x=function(e){var t=e.isOpen,n=e.onClose,c=e.cardData,s=t?"popup_opened":"";return Object(a.jsx)("section",{id:"view-image",className:"popup popup_type_dark ".concat(s),children:Object(a.jsxs)("div",{className:"popup-image",children:[Object(a.jsx)("button",{type:"button",name:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup-image__close-button",onClick:n}),Object(a.jsx)("img",{className:"popup-image__image",src:c.link,alt:"".concat(c.name).\u0424\u043e\u0442\u043e}),Object(a.jsx)("h3",{className:"popup-image__title",children:c.name})]})})},v=n(7),g=n(8),C=new(function(){function e(t){Object(v.a)(this,e),this._headers=t.headers,this._baseUrl=t.baseUrl}return Object(g.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status," - ").concat(e.statusText))}))}},{key:"editProfileInfo",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"getProfileInfo",value:function(){return this._sendRequest("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"editAvatar",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"createNewCard",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"changeLikeStatus",value:function(e,t){return this._sendRequest("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers})}},{key:"getInitialCards",value:function(){return this._sendRequest("".concat(this._baseUrl,"/cards"),{headers:this._headers})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"83172f60-a4ab-4f2a-9396-1325bbd21612","Content-Type":"application/json"}});var k=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(!1),r=Object(u.a)(o,2),l=r[0],j=r[1],h=Object(c.useState)(!1),v=Object(u.a)(h,2),g=v[0],k=v[1],N=Object(c.useState)(!1),y=Object(u.a)(N,2),S=y[0],P=y[1],U=Object(c.useState)({name:"",link:""}),L=Object(u.a)(U,2),T=L[0],q=L[1],E=Object(c.useState)([]),A=Object(u.a)(E,2),D=A[0],R=A[1],F=Object(c.useState)({}),I=Object(u.a)(F,2),w=I[0],J=I[1];function B(){s(!1),j(!1),k(!1),q({name:"",link:""}),P(!1)}return Object(c.useEffect)((function(){Promise.all([C.getProfileInfo(),C.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];J(n),R(a)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsxs)(p.Provider,{value:w,children:[Object(a.jsx)(d,{}),Object(a.jsx)(b,{onEditProfile:function(){j(!0)},onEditAvatar:function(){s(!0)},onAddPlace:function(){k(!0)},onCardClick:function(e){P(!0),q({name:e.name,link:e.link})},handleCardLike:function(e){var t=e.likes.some((function(e){return e._id===w._id}));C.changeLikeStatus(e._id,!t).then((function(t){var n=D.map((function(n){return n._id===e._id?t:n}));R(n)}))},handleDeleteCard:function(e){C.deleteCard(e._id).then((function(){var t=D.filter((function(t){return t._id!==e._id}));R(t)}))},cards:D}),Object(a.jsx)(m,{}),Object(a.jsx)(_,{isOpen:l,onClose:B,onUpdateUser:function(e){console.log(e),C.editProfileInfo(e).then((function(e){J(e),B()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(O,{isOpen:n,onClose:B,onUpdateAvatar:function(e){console.log(e.avatar),C.editAvatar(e.avatar).then((function(e){J(e),B()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(f,{isOpen:g,onClose:B,onAddPlace:function(e){C.createNewCard(e).then((function(e){R([e].concat(Object(i.a)(D))),B()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(x,{isOpen:S,onClose:B,cardData:T})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.4dc88d20.chunk.js.map