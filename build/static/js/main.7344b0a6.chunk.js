(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),l=n.n(o),r=n(16),u=n(1),m=n(3),i=(n(22),function(){return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement(m.b,{activeClassName:"active",exact:!0,to:"/"},"React"),c.a.createElement(m.b,{activeClassName:"active",to:"/doc"},"\u6587\u6863"),c.a.createElement(m.b,{activeClassName:"active",to:"/tuto"},"\u6559\u7a0b"),c.a.createElement(m.b,{activeClassName:"active",to:"/blog"},"\u535a\u5ba2"),c.a.createElement(m.b,{activeClassName:"active",to:"/comm"},"\u793e\u533a")))}),s=function(e){return console.log(e),c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h2",null,"React"),c.a.createElement("p",null,"\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.history.push("/doc")}},"\u5feb\u901f\u5f00\u59cb"),c.a.createElement("button",{onClick:function(){return e.history.push("/tuto")}},"\u5165\u95e8\u6559\u7a0b")))},p=(n(28),[{path:"/",exact:!0,component:s},{path:"/tuto",component:function(){return c.a.createElement("div",null,"Tuto")},pri:!0},{path:"/blog",component:function(){return c.a.createElement("div",null,"Blog")}},{path:"/comm",component:function(){return c.a.createElement("div",null,"Comm")}},{path:"/login",component:function(e){return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){localStorage.setItem("userinfo","tom"),e.history.replace(e.location.state)}},"\u767b\u5f55"))}},{path:"/doc",component:Object(u.g)((function(e){var t=e.routes;return console.log(t),c.a.createElement("div",{className:"doc"},c.a.createElement("div",{className:"content"},t.map((function(e,t){return c.a.createElement(d,Object.assign({key:t},e))})),c.a.createElement(u.a,{from:"/doc",to:"/doc/core"})),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement(m.b,{to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/doc/api"},"API")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/doc/hooks"},"Hooks"))))})),pri:!0,routes:[{path:"/doc/core",component:function(){return c.a.createElement("h1",null,"Core")}},{path:"/doc/guide",component:function(){return c.a.createElement("h1",null,"Guide")}},{path:"/doc/api",component:function(){return c.a.createElement("h1",null,"Api")}},{path:"/doc/hooks",component:function(){return c.a.createElement("h1",null,"Hooks")}}]}]);function E(e){var t=e.component,n=Object(r.a)(e,["component"]);return c.a.createElement(u.b,Object.assign({},n,{render:function(e){var a=e.location;return localStorage.getItem("userinfo")?c.a.createElement(t,n):c.a.createElement(u.a,{to:{pathname:"/login",state:a}})}}))}function d(e){return e.pri?c.a.createElement(E,e):c.a.createElement(u.b,{path:e.path,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})}var h=function(){return c.a.createElement(m.a,null,c.a.createElement(i,null),c.a.createElement(u.d,null,p.map((function(e,t){return c.a.createElement(d,Object.assign({key:t},e))}))))};n(29);l.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7344b0a6.chunk.js.map