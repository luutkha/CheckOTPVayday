(this["webpackJsonptamo-check-app"]=this["webpackJsonptamo-check-app"]||[]).push([[0],{205:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(78),i=c.n(a),o=c(2),l=c(86),r=c(7),h=c(17),d=c(48),j=c(79),b=c(1),m=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],a=c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:t+1}),Object(b.jsx)("td",{children:e.cmnd}),Object(b.jsx)("td",{children:e.check},e.check)]})}));return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-12",style:{height:"50px"},children:" "}),Object(b.jsxs)("div",{className:"col-12",children:["M\u1ed9t s\u1ed1 l\u01b0u \xfd khi s\u1eed d\u1ee5ng tools: ",Object(b.jsx)("br",{}),'1/ Ch\u1ecdn choose File \u0111\u1ec3 ch\u1ecdn file excel ch\u1ee9a cmnd. C\u1ed9t ch\u1ee9a s\u1ed1 CMND/CCCD ph\u1ea3i \u0111\u1eb7t t\xean l\xe0 "cmnd". ',Object(b.jsx)("br",{}),"2/ File excel kh\xf4ng qu\xe1 1000 d\xf2ng. ",Object(b.jsx)("br",{}),"3/ Nh\u1ea5n n\xfat check tamo \u0111\u1ec3 b\u1eaft \u0111\u1ea7u ki\u1ec3m tra. ",Object(b.jsx)("br",{}),'4/ Nh\u1ea5n n\xfat xem ti\u1ebfn \u0111\u1ed9 \u0111\u1ec3 xem \u0111\xe3 check \u0111\u01b0\u1ee3c bao nhi\xeau s\u1ed1 cmnd. n\u1ebfu hi\u1ec7n th\xf4ng b\xe1o "\u0110\xe3 ki\u1ec3m tra xong,..." th\xec c\xf3 th\u1ec3 t\u1ea3i file excel v\u1ec1.']}),Object(b.jsx)("div",{className:"col-12",style:{height:"50px"},children:" "}),Object(b.jsx)("div",{className:"col-3"}),Object(b.jsx)("div",{className:"col-6",children:Object(b.jsx)("div",{class:"input-group mb-3",children:Object(b.jsx)("input",{class:"form-control",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",type:"file",onChange:function(e){!function(e){new Promise((function(t,c){var n=new FileReader;n.readAsArrayBuffer(e),n.onload=function(e){var c=e.target.result,n=d.read(c,{type:"buffer"}),s=n.SheetNames[0],a=n.Sheets[s],i=d.utils.sheet_to_json(a);t(i)},n.onerror=function(e){c(e)}})).then((function(e){e.forEach((function(e,t){e.check="Ch\u01b0a ki\u1ec3m tra","undefined"!==typeof e.cmnd&&(e.cmnd=e.cmnd.toString())})),s(e),console.log(e)}))}(e.target.files[0])}})})}),Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){c.map((function(e,t){t===c.length-1&&console.log("done"),console.log(c.length),12!==c[t].cmnd.length&&9!==c[t].cmnd.length?(c[t].check="CMND/CCCD Kh\xf4ng h\u1ee3p l\u1ec7",console.log(e)):fetch("https://thawing-hamlet-25516.herokuapp.com/https://api.tamo.vn/web/public/client/check/identificationNumber/"+c[t].cmnd,{headers:{Accept:"application/json, text/plain, */*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",Connection:"keep-alive",Host:"api.tamo.vn",Origin:"https://www.tamo.vn",Referer:"https://www.tamo.vn/","sec-ch-ua":'"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Windows"',"Sect-fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"}}).then((function(e){e.ok?c[t].check="\u0110\xe3 \u0111\u0103ng k\xfd":c[t].check="Ch\u01b0a \u0111\u0103ng k\xfd"}))}))},children:"1. Check Tamo"}),Object(b.jsx)("button",{className:"btn btn-light",onClick:function(){return function(){var e=0,t=0;c.forEach((function(c){"Ch\u01b0a ki\u1ec3m tra"===c.check?e=1:("0"===c.cmnd.charAt(0)&&(c.cmnd="x"+c.cmnd),t+=1)})),1===e?alert("Ki\u1ebfm tra CMND ch\u01b0a ho\xe0n th\xe0nh. Ti\u1ebfn \u0111\u1ed9: "+t+" / "+c.length):alert("\u0110\xe3 ki\u1ec3m tra xong, nh\u1ea5n Download file k\u1ebft qu\u1ea3 \u0111\u1ec3 t\u1ea3i v\u1ec1");var n=Object(r.a)(c);s(n)}()},children:"2. Xem ti\u1ebfn \u0111\u1ed9"}),Object(b.jsx)(j.CSVLink,{type:"button",className:"btn btn-danger",data:c,headers:[{label:"cmnd/cccd",key:"cmnd"},{label:"K\u1ebft qu\u1ea3 check",key:"check"}],filename:"Check_Tamo.csv",children:"3. Download file k\u1ebft qu\u1ea3"}),Object(b.jsxs)("table",{class:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"STT"}),Object(b.jsx)("th",{scope:"col",children:"CMND"}),Object(b.jsx)("th",{scope:"col",children:"T\xecnh tr\u1ea1ng"})]})}),Object(b.jsx)("tbody",{children:a})]})]})]})})},u=c(37),p=c(87),x=c(36),f=function(){var e=Object(o.f)(),t=Object(p.a)({initialValues:{username:"",password:""},validationSchema:x.a({username:x.b().max(45,"username qu\xe1 d\xe0i").min(2,"username qu\xe1 ng\u1eafn").required("username l\xe0 b\u1eaft bu\u1ed9c"),password:x.b().min(2,"M\u1eadt kh\u1ea9u ph\u1ea3i t\u1eeb 6 k\xfd t\u1ef1 tr\u1edf l\xean").required("M\u1eadt kh\u1ea9u l\xe0 b\u1eaft bu\u1ed9c")}),onSubmit:function(t){console.log(t.username),fetch("https://613f09e7e9d92a0017e173da.mockapi.io/users?username="+t.username).then((function(e){return e.json()})).then((function(c){"undefined"===typeof c[0]?alert("T\xean \u0111\u0103ng nh\u1eadp kh\xf4ng t\u1ed3n t\u1ea1i"):c[0].username===t.username&&t.password===c[0].password?(console.log("xx"),e.push("/trang-chu")):alert("T\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c t\xe0i kho\u1ea3n kh\xf4ng \u0111\xfang")}))}});return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-12",style:{height:"100px"}}),Object(b.jsx)("div",{className:"col-3"}),Object(b.jsx)("div",{className:"col-6",children:Object(b.jsx)("form",{onSubmit:t.handleSubmit,children:Object(b.jsxs)("div",{class:"card text-center",children:[Object(b.jsxs)("div",{class:"card-body",children:[Object(b.jsx)("h5",{class:"card-title",children:"\u0110\u0103ng nh\u1eadp"}),Object(b.jsxs)("div",{class:"form-outline mb-4",children:[Object(b.jsx)("input",Object(u.a)({type:"text",class:"form-control",id:"username"},t.getFieldProps("username"))),Object(b.jsx)("label",{class:"form-label",for:"username",children:"T\xean \u0111\u0103ng nh\u1eadp:"}),Object(b.jsxs)("div",{class:"form-notch",children:[Object(b.jsx)("div",{class:"form-notch-leading",style:{width:"9px"}}),Object(b.jsx)("div",{class:"form-notch-middle",style:{width:"114.4px"}}),Object(b.jsx)("div",{class:"form-notch-trailing"})]})]}),Object(b.jsxs)("div",{class:"form-outline mb-4",children:[Object(b.jsx)("input",Object(u.a)(Object(u.a)({type:"password",id:"password"},t.getFieldProps("password")),{},{class:"form-control"})),Object(b.jsx)("label",{class:"form-label",for:"password",children:"M\u1eadt kh\u1ea9u:"}),Object(b.jsxs)("div",{class:"form-notch",children:[Object(b.jsx)("div",{class:"form-notch-leading",style:{width:"9px"}}),Object(b.jsx)("div",{class:"form-notch-middle",style:{width:"114.4px"}}),Object(b.jsx)("div",{class:"form-notch-trailing"})]})]}),Object(b.jsx)("button",{href:"#",type:"submit",className:"btn btn-primary",children:"\u0110\u0103ng nh\u1eadp"})]}),Object(b.jsx)("div",{class:"card-footer text-muted",children:"Author: Tuan Kha"})]})})}),Object(b.jsx)("div",{className:"col-3"})]})},O=[{path:["/"],component:function(){return Object(b.jsx)("div",{className:"Container",children:Object(b.jsx)(f,{})})},exact:!0},{path:["/trang-chu"],component:m,exact:!0}].map((function(e,t){return Object(b.jsx)(o.a,{path:e.path,component:e.component,exact:e.exact},t)}));var g=function(){return Object(b.jsx)(l.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(o.c,{children:O})})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,206)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()},52:function(e,t){},97:function(e,t){},98:function(e,t){}},[[205,1,2]]]);
//# sourceMappingURL=main.c02c2560.chunk.js.map