(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{31:function(e,t,a){e.exports={app:"App_app__dWovB"}},32:function(e,t,a){e.exports={root:"MovieSearch_root__2YJjj"}},33:function(e,t,a){e.exports={root:"MovieSearchFields_root__TyTmg"}},35:function(e,t,a){e.exports={root:"MovieSearchResult_root__2pRrA"}},36:function(e,t,a){e.exports={footer:"Footer_footer__11eBj"}},39:function(e,t,a){e.exports=a(49)},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),l=a(9),c=a(10),u=a(11),s=a(12),m=a(72),p=a(37),f=a(30),d=a.n(f),h=Object(p.a)({palette:{primary:{main:"#00acc1"},secondary:d.a},typography:{fontFamily:["Arial"].join(","),h2:{color:"#fafafa",fontSize:"2.6rem",fontWeight:"500"},h3:{color:"#fafafa",fontWeight:"600",fontSize:"1.7rem"},body1:{color:"#fafafa",fontSize:"1.5rem"},body2:{color:"#fafafa",fontSize:"1.8rem"},caption:{color:"#d9d9d9",fontSize:"1.5rem"},subtitle1:{color:"#6C6C6C",fontSize:"1.3rem"},subtitle2:{color:"#f44336",fontSize:"1.5rem"},button:{fontWeight:"600",fontSize:"1.5rem"}}}),v=a(31),y=a.n(v),b=a(32),g=a.n(b),E=a(33),j=a.n(E),x=a(5),O=a(74),S=a(73),k=a(69),C=a(70),_=a(71),B=Object(x.a)({root:{color:"white"},underline:{"&:before":{borderBottom:"2px solid #3F3F3F"},"&:hover:not($disabled):before":{borderBottom:"2px solid #535353 !important"}}})(O.a),M=Object(x.a)({root:{paddingTop:"20px",paddingBottom:"10px",paddingLeft:"30px",paddingRight:"30px"},disabled:{color:"#006064 !important"}})(S.a),R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={titleValue:"",yearValue:"",yearError:""},e.validateYearInput=function(t){e.state.yearError;var a="";console.log(t.target.value),isNaN(t.target.value)&&(a="Please input a valid year, e.g. 1993"),e.setState({yearError:a,yearValue:t.target.value})},e.submitSearch=function(t){var a=e.state,n=a.yearValue,r=a.titleValue;t.preventDefault(),console.log(n,r),e.props.fetchMovie(r,n)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.yearError,n=t.titleValue;return r.a.createElement("div",{className:j.a.root},r.a.createElement("form",{onSubmit:function(t){return e.submitSearch(t)}},r.a.createElement(k.a,{container:!0,direction:"row",style:{height:"100%"}},r.a.createElement(k.a,{xs:9,md:10,item:!0,container:!0,direction:"column"},r.a.createElement(k.a,{item:!0},r.a.createElement(B,{onChange:function(t){return e.setState({titleValue:t.target.value})},placeholder:"Movie name",fullWidth:!0,inputProps:{maxLength:120}})),r.a.createElement(k.a,{item:!0},r.a.createElement(B,{error:!!this.state.yearError,onChange:this.validateYearInput,placeholder:"Release year (optional)",fullWidth:!0,style:{marginTop:"12px"},inputProps:{maxLength:4}}),a?r.a.createElement(C.a,{variant:"subtitle2",style:{marginTop:"5px"}},a):null)),r.a.createElement(k.a,{item:!0,container:!0,xs:3,md:2,alignItems:"center",justify:"center",style:{minHeight:"100%"}},r.a.createElement(k.a,{item:!0},r.a.createElement(M,{disabled:!n,color:"primary",type:"submit"},"Search"))))),r.a.createElement(_.a,{light:!0,style:{marginTop:"33px",marginBottom:"10px",borderTop:"1px solid #6C6C6C"},variant:"fullWidth"}))}}]),a}(n.Component),T=a(35),w=a.n(T),V=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"getMovieRatingValue",value:function(e,t){if(t){var a=t.find((function(t){return t.Source.toLowerCase()===e.toLowerCase()}));if(a)return a.Value}return"N/A"}},{key:"render",value:function(){var e=this.props.movie,t="N/A";return console.log(e?e.Title:"xd"),r.a.createElement("div",{className:w.a.root},e?"True"===e.Response?r.a.createElement("div",null,r.a.createElement(C.a,{variant:"h2",style:{paddingBottom:"8px"}},e.Title),r.a.createElement(C.a,{style:{display:"inline-block",paddingBottom:"5px",paddingRight:"8px"},variant:"caption"},e.Year||t),r.a.createElement(C.a,{style:{display:"inline-block",paddingBottom:"20px"},variant:"caption"},e.Genre||t),r.a.createElement(C.a,{variant:"h3",style:{paddingBottom:"5px"}},"IMDb: ".concat(this.getMovieRatingValue("Internet Movie Database",e.Ratings))),r.a.createElement(C.a,{variant:"h3",style:{paddingBottom:"18px"}},"Rotten Tomatoes: ".concat(this.getMovieRatingValue("Rotten Tomatoes",e.Ratings))),r.a.createElement(C.a,{variant:"body1",style:{paddingBottom:"5px"}},"Directed by "," ",r.a.createElement("b",null,e.Director||t)),r.a.createElement(C.a,{variant:"body1",style:{paddingBottom:"20px"}},"Starred by ",e.Actors?e.Actors.split(", ").map((function(e,t){return 0===t?r.a.createElement("b",{key:t},"".concat(e)):r.a.createElement("b",{key:t},", ".concat(e))})):t),r.a.createElement(C.a,{variant:"body1"},e.Plot||t)):r.a.createElement(C.a,{variant:"subtitle1"},"Movie not found. Check spelling of the name and try searching without release year."):null)}}]),a}(n.Component),A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movie:null},e}return Object(c.a)(a,[{key:"fetchMovie",value:function(e,t){var a=this;(function(e,t){return fetch("http://www.omdbapi.com/?t=".concat(e,"&apikey=").concat("40439b0","&type=movie&y=").concat(t)).then((function(e){return e.json()})).catch((function(e){return console.log(e),e}))})(e,t).then((function(e){return console.log(e),a.setState({movie:e}),e}))}},{key:"render",value:function(){var e=this,t=this.state.movie;return r.a.createElement("div",{className:g.a.root},r.a.createElement(R,{fetchMovie:function(t,a){return e.fetchMovie(t,a)}}),r.a.createElement(V,{movie:t}))}}]),a}(n.Component),N=a(36),z=a.n(N),W=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:z.a.footer},r.a.createElement(C.a,{variant:"subtitle1"},"Joni Tuhkanen",r.a.createElement("br",null),"joni.tuhkanen@protonmail.com"))}}]),a}(n.Component),F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,{theme:h},r.a.createElement("div",{className:y.a.app},r.a.createElement(A,null)),r.a.createElement(W,null))}}]),a}(n.Component);a(48);i.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d423343c.chunk.js.map