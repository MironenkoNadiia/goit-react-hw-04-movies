(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{30:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return l}));var r=n(36),c=n.n(r),a="https://api.themoviedb.org/3",i="3860fcb92da4251802f0dff28fa48025";function o(){return c.a.get("".concat(a,"/trending/movie/day?api_key=").concat(i))}function s(t){return c.a.get("".concat(a,"/search/movie?api_key=").concat(i,"&query=").concat(t))}function u(t){return c.a.get("".concat(a,"/movie/").concat(t,"?api_key=").concat(i))}function d(t){return c.a.get("".concat(a,"/movie/").concat(t,"/credits?api_key=").concat(i)).then((function(t){return t.data}))}function l(t){return c.a.get("".concat(a,"/movie/").concat(t,"/reviews?api_key=").concat(i)).then((function(t){return t.data}))}},68:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return V}));var r,c=n(31),a=n(32),i=n(34),o=n(33),s=n(0),u=n(30),d=n(7),l=n(2),j=new Uint8Array(16);function p(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(j)}var h=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var f=function(t){return"string"===typeof t&&h.test(t)},v=[],b=0;b<256;++b)v.push((b+256).toString(16).substr(1));var m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(v[t[e+0]]+v[t[e+1]]+v[t[e+2]]+v[t[e+3]]+"-"+v[t[e+4]]+v[t[e+5]]+"-"+v[t[e+6]]+v[t[e+7]]+"-"+v[t[e+8]]+v[t[e+9]]+"-"+v[t[e+10]]+v[t[e+11]]+v[t[e+12]]+v[t[e+13]]+v[t[e+14]]+v[t[e+15]]).toLowerCase();if(!f(n))throw TypeError("Stringified UUID is invalid");return n};var O=function(t,e,n){var r=(t=t||{}).random||(t.rng||p)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var c=0;c<16;++c)e[n+c]=r[c];return e}return m(r)},x=n(1);var g=function(t){var e=t.film,n=e.title,r=e.poster_path,c=e.overview,a=e.vote_average,i=e.genres,o=e.vote_count,s=e.production_countries,u=e.production_companies;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(r),alt:"poster"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:n}),Object(x.jsxs)("h2",{children:[Object(x.jsx)("span",{children:"Overview:"})," ",c]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Votes:"})," ",o]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Vote average:"})," ",a]}),Object(x.jsxs)("ul",{children:["Genres:",void 0!==i&&i.map((function(t){var e=t.id,n=t.name;return Object(x.jsx)("li",{children:n},e)}))]}),Object(x.jsxs)("ul",{children:[" ",Object(x.jsx)("span",{children:"Production countries:"}),void 0!==s&&s.map((function(t){var e=t.name;return Object(x.jsx)("li",{children:e},O())}))]}),Object(x.jsxs)("ul",{children:[" ",Object(x.jsx)("span",{children:"Production companies:"}),void 0!==u&&u.map((function(t){var e=t.name;return Object(x.jsx)("li",{children:e},O())}))]})]})]}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"Additional information:"})})]})};function y(t){var e=t.casts;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("ul",{children:e&&e.map((function(t){var e=t.id,n=t.original_name,r=t.profile_path;return Object(x.jsxs)("li",{children:[Object(x.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(r),alt:"profile"}),Object(x.jsx)("p",{children:n})]},e)}))}),Object(x.jsx)("span",{children:"And Others..."})]})}var w=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={cast:[]},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;Object(u.c)(this.props.id).then((function(e){return t.setState({cast:e.cast.slice(0,6)})}))}},{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(y,{casts:this.state.cast})})}}]),n}(s.Component);function k(t){var e=t.reviews;return Object(x.jsx)("ul",{children:e&&e.map((function(t){var e=t.content,n=t.id,r=t.author;return Object(x.jsxs)("li",{children:[Object(x.jsx)("p",{children:r}),Object(x.jsx)("span",{children:e})]},n)}))})}var _=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={reviews:[]},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props),Object(u.d)(this.props.id).then((function(e){return t.setState({reviews:e.results})}))}},{key:"render",value:function(){return Object(x.jsx)(k,{reviews:this.state.reviews})}}]),n}(s.Component);var C=function(t){var e=t.handleBack;return Object(x.jsx)("div",{children:Object(x.jsx)("button",{type:"button",onClick:e,children:"go back"})})},V=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={film:{}},t.handleBack=function(){var e=t.props,n=e.location,r=e.history;if(console.log(n),n.state&&n.state.from)return r.push(n.state.from);r.push("/")},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;Object(u.e)(this.props.match.params.movieId).then((function(e){t.setState({film:e.data})}))}},{key:"render",value:function(){var t,e,n=this,r=this.props,c=r.location,a=r.match;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{handleBack:this.handleBack}),Object(x.jsx)(g,{film:this.state.film}),Object(x.jsx)(d.b,{to:{pathname:"".concat(a.url,"/cast"),state:{from:(null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)||"/"}},children:"Cast"}),Object(x.jsx)(d.b,{to:{pathname:"".concat(a.url,"/reviews"),state:{from:(null===c||void 0===c||null===(e=c.state)||void 0===e?void 0:e.from)||"/"}},children:"Reviews"}),Object(x.jsx)(l.b,{path:"".concat(this.props.match.path,"/cast"),render:function(t){return Object(x.jsx)(w,{id:n.props.match.params.movieId})}}),Object(x.jsx)(l.b,{path:"".concat(this.props.match.path,"/reviews"),render:function(t){return Object(x.jsx)(_,{id:n.props.match.params.movieId})}})]})}}]),n}(s.Component)}}]);
//# sourceMappingURL=details-page.027313b1.chunk.js.map