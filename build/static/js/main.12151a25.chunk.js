(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,a){e.exports={container:"Button_container__2GU6h",button:"Button_button__1feF2"}},16:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__Jn0i_",item:"ImageGallery_item__92t2r"}},17:function(e,t,a){e.exports={overlay:"Modal_overlay__1huNG",modal:"Modal_modal__21mnm"}},29:function(e,t,a){e.exports={image:"ImageGalleryItem_image__3bDzy"}},31:function(e,t,a){e.exports={loader:"Loader_loader__ReYoX"}},37:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),i=(a(37),a(18)),s=a(4),u=a(14),l=a.n(u),b=a(28),m=a(12),j=a.n(m);j.a.defaults.baseURL="https://pixabay.com/api",j.a.defaults.params={key:"20826556-19d7dce6dc96816ed1b7dccf7",image_type:"photo",orientation:"horizontal",per_page:12};var d=function(){var e=Object(b.a)(l.a.mark((function e(){var t,a,n,r,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",a=c.length>1?c[1]:void 0,e.prev=2,e.next=5,j.a.get("",{params:{q:t,page:a}});case 5:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 10:return e.prev=10,e.t0=e.catch(2),console.log("error",{error:e.t0}),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),p=a(15),h=a.n(p),f=a(1);var g=function(e){var t=e.text,a=e.buttonAction;return Object(f.jsx)("div",{className:h.a.container,children:Object(f.jsx)("button",{type:"button",onClick:a,className:h.a.button,children:t})})},O=a(29),v=a.n(O);var _=function(e){var t=e.webformatURL,a=e.alt,n=e.largeImageURL,r=e.id,c=e.onImageClick;return Object(f.jsx)("img",{src:t,alt:a,className:v.a.image,"data-largeimageurl":n,"data-id":r,onClick:function(e){c({url:e.target.dataset.largeimageurl,alt:e.target.alt})}})},x=a(16),y=a.n(x);var S=function(e){var t=e.images,a=e.onImageClick;return Object(f.jsx)("ul",{className:y.a.gallery,children:t.map((function(e){return Object(f.jsx)("li",{className:y.a.item,children:Object(f.jsx)(_,{webformatURL:e.webformatURL,alt:e.tags,largeImageURL:e.largeImageURL,id:e.id,onImageClick:a})},e.id)}))})},k=a(5),w=a(6),I=a(8),C=a(7),R=a(17),N=a.n(R),E=function(e){Object(I.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).pressEscBtn=function(t){"Escape"===t.code&&e.props.onCloseModal()},e}return Object(w.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.pressEscBtn)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.pressEscBtn),this.props.onCloseModal()}},{key:"render",value:function(){var e=this.props,t=e.onCloseModal,a=e.children;return Object(f.jsx)("div",{className:N.a.overlay,onClick:t,children:Object(f.jsx)("div",{className:N.a.modal,children:a})})}}]),a}(n.Component),L=a(2),F=a.n(L);function U(e){var t=e.largeImage,a=t.alt,n=t.url;return Object(f.jsx)("img",{src:n,alt:a})}U.protoType={largeImage:F.a.exact({alt:F.a.string.isRequired,url:F.a.string.isRequired}).isRequired};var M=U,V=a(30),B=a.n(V),G=a(31),A=a.n(G),q=function(e){Object(I.a)(a,e);var t=Object(C.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:A.a.loader,children:Object(f.jsx)(B.a,{type:"Puff",color:"#0F7A8F",height:50,width:50,timeout:2e3})})}}]),a}(n.Component),z=a(32),D=a(9),J=a.n(D),H=function(e){Object(I.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.onInputValue=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(z.a)({},n,r))},e.onSubmitSearchForm=function(t){t.preventDefault();var a=e.state.inputValue;e.props.onSubmitForm(a),e.setState({inputValue:""})},e}return Object(w.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return Object(f.jsx)("header",{className:J.a.searchbar,children:Object(f.jsxs)("form",{id:"form",onSubmit:this.onSubmitSearchForm,className:J.a.form,children:[Object(f.jsx)("button",{type:"submit",className:J.a.button,children:Object(f.jsx)("span",{className:J.a.label,children:"Search"})}),Object(f.jsx)("input",{className:J.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"inputValue",value:e,id:"input",onChange:this.onInputValue})]})})}}]),a}(n.Component);var T=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),o=Object(s.a)(c,2),u=o[0],l=o[1],b=Object(n.useState)(!1),m=Object(s.a)(b,2),j=m[0],p=m[1],h=Object(n.useState)(null),O=Object(s.a)(h,2),v=O[0],_=O[1],x=Object(n.useState)(""),y=Object(s.a)(x,2),k=y[0],w=y[1],I=Object(n.useState)(1),C=Object(s.a)(I,2),R=C[0],N=C[1],L=Object(n.useState)(1),F=Object(s.a)(L,2),U=F[0],V=F[1];Object(n.useEffect)((function(){k&&G()}),[k]),Object(n.useEffect)((function(){R>2&&B()}),[R]);var B=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};function G(){p(!0),d(k,R).then((function(e){r((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))})),N((function(e){return e+1})),function(e){var t=e.totalHits-12;V(t<=0)}(e)})).catch((function(e){return _(e)})).finally((function(){return p(!1)}))}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(H,{onSubmitForm:function(e){w(e),N(1),r([])}}),a.length>0&&Object(f.jsx)(S,{images:a,onImageClick:l}),u&&Object(f.jsx)(E,{onCloseModal:function(){l(null)},children:Object(f.jsx)(M,{largeImage:u})}),a.length>0&&!U&&!j&&Object(f.jsx)(g,{text:"Load more",buttonAction:G}),j&&Object(f.jsx)(q,{}),v&&Object(f.jsx)("p",{children:"ERROR"})]})};a(78);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1ulv9",form:"Searchbar_form__1LWas",button:"Searchbar_button__f7Gzx",label:"Searchbar_label__xRO-K",input:"Searchbar_input__QzE4h"}}},[[79,1,2]]]);
//# sourceMappingURL=main.12151a25.chunk.js.map