(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(56)},43:function(e,t,n){},44:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),l=n(26),i=n.n(l),c=(n(43),n(27)),o=n(28),u=n(35),m=n(29),s=n(36),d=(n(44),n(11)),p=n(9),E=n(14),f=n(15),g=n.n(f);function w(){var e=Object(E.a)(["\n  query user($identifier: UserIdentifier!, $identity: UserIdentity!) {\n    twitter {\n      user(identifier: $identifier, identity: $identity) {\n        created_at\n        description\n        id\n        screen_name\n        name\n        profile_image_url\n        url\n        tweets_count\n        followers_count\n      }\n    }\n  }\n"]);return w=function(){return e},e}var v=g()(w());var h=function(e){var t=e.data,n=t.name,a=t.profile_image_url,l=t.screen_name,i=t.tweets_count,c=t.followers_count,o=t.description,u=t.created_at;return r.a.createElement("div",null,r.a.createElement("img",{src:a,alt:"user image",width:"120px"}),r.a.createElement("h1",{style:{marginBottom:0}},n),r.a.createElement("span",null,"@",l),r.a.createElement("p",null,o),r.a.createElement("p",null,"Joined: ",u),r.a.createElement("p",null,"Followers: ",c," | Tweets: ",i))};var y=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("div",{style:{marginBottom:50}},r.a.createElement("label",null,"Enter username"," ",r.a.createElement("input",{placeholder:"ex. zeyadetman",onKeyPress:function(e){"Enter"===e.key&&l(e.target.value)}}))),r.a.createElement(p.b,{query:v,variables:{identifier:"name",identity:n}},function(e){var t=e.loading,n=e.data,a=e.error;return t?r.a.createElement("h1",null,"Loading..."):a?null:r.a.createElement(h,{data:n.twitter.user})}))};function b(){var e=Object(E.a)(["\n  query search($q: String!, $count: Int, $result_type: SearchReponse) {\n    twitter {\n      search(q: $q, count: $count, result_type: $result_type) {\n        text\n        id\n        user {\n          name\n          screen_name\n          profile_image_url\n        }\n      }\n    }\n  }\n"]);return b=function(){return e},e}var _=g()(b());var j=function(e){var t=e.tweet,n=t.text,a=t.id,l=t.user,i=l.name,c=l.screen_name,o=l.profile_image_url;return r.a.createElement("div",{style:{width:"80%",margin:"25px auto",border:"5px solid #afafaf",padding:5}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"5px"}},r.a.createElement("img",{src:o})),r.a.createElement("div",null,r.a.createElement("h1",{style:{margin:0}},i),r.a.createElement("span",null,"@",c))),r.a.createElement("p",null,n),r.a.createElement("a",{style:{color:"#29a8df",marginLeft:15},href:"https://twitter.com/".concat(c,"/status/").concat(a)},"show on twitter"))};var O=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(10),c=Object(d.a)(i,2),o=c[0],u=c[1];return r.a.createElement("div",null,r.a.createElement("div",{style:{marginBottom:50}},r.a.createElement("label",null,"Tweets Number"," ",r.a.createElement("input",{placeholder:"10",value:o,type:"number",onChange:function(e){u(e.target.value)}})),r.a.createElement("label",null,"Enter search"," ",r.a.createElement("input",{placeholder:"ex. ac milan",onKeyPress:function(e){"Enter"===e.key&&l(e.target.value)}}))),r.a.createElement(p.b,{query:_,variables:{q:n,count:o}},function(e){var t=e.loading,n=e.data,a=e.error;return t?r.a.createElement("h1",null,"Loading..."):a?null:n.twitter.search.map(function(e){return r.a.createElement(j,{tweet:e})})}))},x=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App App-body"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:"https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png",alt:"logo",width:"125px"})),r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(O,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=new(n(34).a)({uri:"https://www.graphqlhub.com/graphql"});i.a.render(r.a.createElement(p.a,{client:$},r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.ae5972a2.chunk.js.map