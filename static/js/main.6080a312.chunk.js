(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__21VNw",SearchForm:"Searchbar_SearchForm__2loZC",SearchButton:"Searchbar_SearchButton__3FOyx",animate:"Searchbar_animate__1-VMT"}},13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2tgg8",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1czcK"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__lrIzO",Modal:"Modal_Modal__3tWXt"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1OoxJ"}},17:function(e,t,a){e.exports={Button:"Button_Button__3QmkX",animate:"Button_animate__Y294a"}},18:function(e,t,a){e.exports={Loader:"Loader_Loader__wrLus"}},24:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=(a(24),a(9)),i=a.n(s),l=a(15),u=a(10),h=a(3),m=a(4),d=a(6),p=a(5),g=a(8),b=(a(26),a(11)),j=a.n(b),f=a(1),O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.value.trim()?(e.props.onSubmit(e.state.value),e.setState({value:""})):g.b.error("Please enter your search term!",{position:"top-right",autoClose:3e3,theme:"dark"})},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:j.a.Searchbar,children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:j.a.SearchButton,children:"Search"}),Object(f.jsx)("input",{className:j.a.SearchForm,type:"text",autoComplete:"off",placeholder:"Search images and photos",onChange:this.handleChange,value:this.state.value})]})})}}]),a}(n.Component),v=O,y=a(16),x=a.n(y),I=a(13),_=a.n(I),w=a(2),S=a.n(w),k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(f.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(f.jsx)("img",{src:this.props.webformatURL,alt:"",className:_.a.ImageGalleryItemImage,onClick:this.props.showImageHandle})})}}]),a}(n.Component);k.propType={img:S.a.string.isRequired,showImageHandle:S.a.func.isRequired};var H=k,L=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsx)("ul",{className:x.a.ImageGallery,children:this.props.images.map((function(t,a){return Object(f.jsx)(H,{webformatURL:t.webformatURL,showImageHandle:e.props.showImageHandler(t.largeImageURL),index:a},t.id)}))})}}]),a}(n.Component),C=L,M=a(17),R=a.n(M),G=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(f.jsx)("button",{type:"button",className:R.a.Button,onClick:this.props.loadMoreHandler,children:"Load more"})}}]),a}(n.Component);G.propType={loadMoreHandler:S.a.func.isRequired};var N=G,U=a(14),B=a.n(U),T=document.querySelector("#modal-root"),F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).keyDownHandler=function(t){"Escape"===t.code&&e.props.onClose()},e.clickOverlay=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keyDownHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keyDownHandler)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:B.a.Overlay,onClick:this.clickOverlay,children:Object(f.jsx)("div",{className:B.a.Modal,children:Object(f.jsx)("img",{src:this.props.largeImgURL,alt:""})})}),T)}}]),a}(n.Component),P=F,D=a(18),E=a.n(D),q=a(19),z=a.n(q),A=(a(48),function(){return Object(f.jsx)("div",{className:E.a.Loader,children:Object(f.jsx)(z.a,{type:"Circles",color:"#00BFFF",height:80,width:80})})}),J=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("23121176-a6e266cf1dd110f625e6378e3","&order=latest&image_type=photo&orientation=horizontal&per_page=12"));case 2:if((n=e.sent).ok){e.next=5;break}throw n;case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),V=J,W=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchImage:"",openModal:!1,isLoading:!1,page:1,error:""},e.maxPages=0,e.largeImgURL="",e.newElementHight=0,e.closeModal=function(){e.largeImgURL="",e.setState({openModal:!1})},e.showImageHandler=function(t){return function(){e.largeImgURL=t,e.setState({openModal:!0})}},e.scrollToHandler=function(){var e=document.documentElement.scrollHeight-150;setTimeout((function(){window.scrollTo({top:e,behavior:"smooth"})}),500)},e.searchImagesHandler=Object(u.a)(i.a.mark((function t(){var a,n,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.searchImage,r=a.page,e.setState({isLoading:!0,error:""}),t.prev=2,t.next=5,V(n,r);case 5:0!==(o=t.sent).total?(e.maxPages=Math.ceil(o.totalHits/12),e.setState((function(e){var t=e.images;return{images:[].concat(Object(l.a)(t),Object(l.a)(o.hits))}}))):(g.b.info("Nothing found for ".concat(n,"!"),{position:"top-right",autoClose:3e3,theme:"dark"}),e.setState((function(){return{images:[]}}))),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),console.error(t.t0),e.setState((function(){return{error:t.t0.toString()}}));case 13:return t.prev=13,e.setState({isLoading:!1}),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,9,13,16]])}))),e.loadMoreHandler=function(){e.scrollToHandler(),e.setState((function(){return{page:Math.min(e.maxPages,e.state.page+1)}}))},e.onSubmitHandler=function(t){e.maxPages=0,e.setState((function(){return{images:[],searchImage:t,page:1}}))},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){(t.searchImage!==this.state.searchImage&&""!==this.state.searchImage||t.page!==this.state.page)&&this.searchImagesHandler()}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(g.a,{autoClose:3e3}),Object(f.jsx)(v,{onSubmit:this.onSubmitHandler}),this.state.openModal&&Object(f.jsx)(P,{largeImgURL:this.largeImgURL,onClose:this.closeModal}),this.state.error?Object(f.jsx)("p",{children:this.state.error}):Object(f.jsx)(C,{images:this.state.images,showImageHandler:this.showImageHandler,scrollToHandler:this.scrollToHandler}),this.state.isLoading&&Object(f.jsx)(A,{}),this.state.page<this.maxPages&&Object(f.jsx)(N,{loadMoreHandler:this.loadMoreHandler})]})}}]),a}(n.Component),X=W;c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(X,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.6080a312.chunk.js.map