(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{106:function(e,t,a){e.exports={header:"Header_header__1VCKf",login:"Header_login__3V3Qa",log:"Header_log__mxIf0"}},130:function(e,t,a){"use strict";a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return f})),a.d(t,"h",(function(){return d})),a.d(t,"e",(function(){return m})),a.d(t,"f",(function(){return v})),a.d(t,"a",(function(){return g})),a.d(t,"g",(function(){return h}));var n=a(15),r=a.n(n),c=a(24),o=a(61),i=a(8),u=a(25),s=a(59),l={posts:[{id:3,post:"Hi, how are you?",likesCount:5},{id:2,post:"It's my first post",likesCount:32},{id:1,post:"I'm learn react from it-kamasutra.com",likesCount:3}],profile:[],status:""},p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.getProfile(e);case 2:n=t.sent,a(h(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:n=t.sent,a(E(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&a(E(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&a(b(n.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a,n){var c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}a(p(c)),t.next=10;break;case 8:return a(Object(s.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},g=function(e){return{type:"ADD-POST",newPostBody:e}},h=function(e){return{type:"SET_USER_PROFILE",profile:e}},E=function(e){return{type:"SET_STATUS",status:e}},b=function(e){return{type:"SAVE_PHOTO_SUCCESS",photos:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[{id:4,post:t.newPostBody,likesCount:0}])});case"SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(61),r=a(8),c={dialogs:[{id:2,name:"Polina",ava:"http://www.youloveit.ru/uploads/posts/2018-03/1520168825_youloveit_ru_ariana_grande_emoji_avatarki01.jpg"},{id:3,name:"Alina",ava:"https://trikky.ru/wp-content/blogs.dir/1/files/2018/06/1520168801_youloveit_ru_ariana_grande_emoji_avatarki18.jpg"},{id:4,name:"Evelina",ava:"http://www.youloveit.ru/uploads/posts/2018-03/1520168814_youloveit_ru_ariana_grande_emoji_avatarki09.jpg"},{id:5,name:"Papa",ava:"https://steepbend.ru/wp-content/uploads/2013/04/Avatarki.jpg"},{id:6,name:"Mama",ava:"http://www.youloveit.ru/uploads/posts/2018-06/1528544211_youloveit_ru_avatarki_disney_princessy_ralf_protiv_interneta03.png"},{id:7,name:"Max",ava:"https://1message.ru/wp-content/uploads/2017/03/ustanovka-avatarki7.jpg"},{id:8,name:"Brat",ava:"https://download-cs.net/steam/avatars/3412.jpg"}],messages:[{id:1,message:"\u041d\u0430 Avatarko.ru",ava:"https://gg-pro.ru/files/avatars/1564818111.jpg"},{id:2,message:"\u041f\u0430\u0431\u043b\u0438\u043a \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c\ud83d\udc9c",ava:"https://gg-pro.ru/files/avatars/1564818111.jpg"},{id:3,message:"Hi",ava:"https://gg-pro.ru/files/avatars/1564818111.jpg"},{id:4,message:"I'm norm",ava:"https://gg-pro.ru/files/avatars/1564818111.jpg"},{id:5,message:"I'm learn a react",ava:"https://gg-pro.ru/files/avatars/1564818111.jpg"},{id:6,message:"Perfect",ava:"https://gg-pro.ru/files/avatars/1564818111.jpg"},{id:7,message:"Good like",ava:"https://gg-pro.ru/files/avatars/1564818111.jpg"}]},o=function(e){return{type:"ADD-MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(n.a)(e.messages),[{id:8,message:t.newMessageBody,ava:"https://gg-pro.ru/files/avatars/1564818111.jpg"}])});default:return e}}},170:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return f})),a.d(t,"f",(function(){return d})),a.d(t,"e",(function(){return E}));var n=a(15),r=a.n(n),c=a(24),o=a(61),i=a(8),u=a(25),s={users:[],pageSize:8,totalPageCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},l=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(_(!0)),a.next=3,u.d.getUsers(e,t);case 3:c=a.sent,n(_(!1)),n(g(c.items)),n(b(c.totalCount));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(_(!0)),a.next=3,u.d.getUsers(e,t);case 3:c=a.sent,n(_(!1)),n(h(c.items)),n(b(c.totalCount));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(O(!0,e)),t.next=3,u.d.getFollow(e);case 3:0==t.sent.resultCode&&a(m(e)),a(O(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(O(!0,e)),t.next=3,u.d.getUnfollow(e);case 3:0==t.sent.resultCode&&a(v(e)),a(O(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return{type:"FOLLOW",userId:e}},v=function(e){return{type:"UNFOLLOW",userId:e}},g=function(e){return{type:"SET_USERS",users:e}},h=function(e){return{type:"SET_MORE_USERS",users:e}},E=function(e){return{type:"SET_\u0421URRENT_PAGE",currentPage:e}},b=function(e){return{type:"SET_TOTAL_PAGE_COUNT",totalPageCount:e}},_=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},O=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"SET_MORE_USERS":var a=e.users.concat(t.users);return Object(i.a)(Object(i.a)({},e),{},{users:a});case"SET_\u0421URRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_PAGE_COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalPageCount:t.totalPageCount});case"TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},175:function(e,t,a){e.exports={friends:"Friends_friends__1ylQE"}},178:function(e,t,a){e.exports={formControl:"FormsControl_formControl__WE9ql",error:"FormsControl_error__eY5EU",formSummaryError:"FormsControl_formSummaryError__3Uy6X"}},180:function(e,t,a){e.exports=a.p+"static/media/Preloader.b4376d71.svg"},181:function(e,t,a){e.exports={spinner:"Preloader_spinner__1CHfh"}},224:function(e,t,a){e.exports=a(354)},229:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){},25:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return u}));var n=a(177),r=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"e48e9649-c731-4063-bdca-82c75640897b"}}),c={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getFollow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},getUnfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},getAuth:function(){return r.get("auth/me")},getProfile:function(e){return r.get("profile/".concat(e))}},o={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t)},saveProfile:function(e){return r.put("profile",e)}},i={me:function(){return r.get("auth/me")},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},logout:function(){return r.delete("auth/login")}},u={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},26:function(e,t,a){e.exports={nav:"Nav_nav__3gICw",item:"Nav_item__96rLj",active:"Nav_active__XSt-p"}},354:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=(a(229),a(43)),u=a(44),s=a(47),l=a(46),p=a(27),f=a(18),d=(a(230),a(231),function(){return r.a.createElement("div",null,"News")}),m=(a(232),function(){return r.a.createElement("div",null,"Music")}),v=(a(233),function(){return r.a.createElement("div",null,"Settings")}),g=a(28),h=a(26),E=a.n(h),b=a(175),_=a.n(b),O=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:_.a.friends},r.a.createElement("img",{src:this.props.ava})," ",this.props.name))}}]),a}(r.a.Component),j=(a(237),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).friendsElements=function(){e.props.friends.map((function(e){return r.a.createElement(O,{name:e.name,ava:e.ava})}))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:E.a.nav},r.a.createElement("div",{className:E.a.item},r.a.createElement(p.c,{to:"/profile",activeClassName:E.a.active},"Profile")),r.a.createElement("div",{className:E.a.item},r.a.createElement(p.c,{to:"/news",activeClassName:E.a.active},"News")),r.a.createElement("div",{className:E.a.item},r.a.createElement(p.c,{to:"/messages",activeClassName:E.a.active},"Messages")),r.a.createElement("div",{className:E.a.item},r.a.createElement(p.c,{to:"/music",activeClassName:E.a.active},"Music")),r.a.createElement("div",{className:E.a.item},r.a.createElement(p.c,{to:"/users",activeClassName:E.a.active},"Users")),r.a.createElement("div",{className:E.a.item},r.a.createElement(p.c,{to:"/settings",activeClassName:E.a.active},"Settings")),r.a.createElement("div",{className:E.a.item},r.a.createElement(p.c,{to:"/friends",activeClassName:E.a.active},"Friends")),this.friendsElements)}}]),a}(r.a.Component)),w=Object(g.b)((function(e){return{friends:e.sidebar.friends,authorizesUserId:e.auth.userId}}))(j),y=a(129),S=a(106),C=a.n(S),k=a(393),P=a(396),U=a(398),I=a(395),T=a(394),N=a(400),A=a(399),x=a(391),L=Object(x.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)}}})),F=function(e){e.profile.photos||(e.profile.photos="");var t=L(),a=r.a.useState(!1),n=Object(y.a)(a,2),c=n[0],o=n[1],i=r.a.useRef(null),u=function(e){i.current&&i.current.contains(e.target)||o(!1)};function s(e){"Tab"===e.key&&(e.preventDefault(),o(!1))}var l=r.a.useRef(c);return r.a.useEffect((function(){!0===l.current&&!1===c&&i.current.focus(),l.current=c}),[c]),r.a.createElement("header",{className:C.a.header},r.a.createElement("img",{src:"http://pngimg.com/uploads/vkontakte/vkontakte_PNG31.png"}),r.a.createElement("div",{className:C.a.login},e.isAuth?r.a.createElement("div",null,r.a.createElement("div",{className:t.root},r.a.createElement("div",null,r.a.createElement(k.a,{ref:i,"aria-controls":c?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){o((function(e){return!e}))}},r.a.createElement("span",null,r.a.createElement("img",{src:e.profile.photos.small}))),r.a.createElement(T.a,{open:c,anchorEl:i.current,role:void 0,transition:!0,disablePortal:!0},(function(t){var a=t.TransitionProps,n=t.placement;return r.a.createElement(U.a,Object.assign({},a,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),r.a.createElement(I.a,null,r.a.createElement(P.a,{onClickAway:u},r.a.createElement(A.a,{autoFocusItem:c,id:"menu-list-grow",onKeyDown:s},r.a.createElement(N.a,{onClick:e.logout},"Logout")))))}))))):r.a.createElement("div",{className:C.a.log},r.a.createElement(p.c,{to:"/login"},"login"))))},R=a(15),G=a.n(R),M=a(24),D=a(8),H=a(25),z=a(59),W={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},B=function(){return function(){var e=Object(M.a)(G.a.mark((function e(t){var a,n,r,c,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.me();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,c=n.email,o=n.login,n.isAuth,t(K(r,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(){return function(){var e=Object(M.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.c.getCaptchaUrl();case 2:a=e.sent,n=a.data.url,t(q(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(e,t,a,n){return{type:"SET_AUTH_USER",payload:{userId:e,email:t,login:a,isAuth:n}}},q=function(e){return{type:"GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_USER":case"GET_CAPTCHA_URL_SUCCESS":return Object(D.a)(Object(D.a)({},e),t.payload);default:return e}},Q=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(F,this.props)}}]),a}(r.a.Component),X=Object(g.b)((function(e){return{userId:e.auth.userId,email:e.auth.email,login:e.auth.login,isAuth:e.auth.isAuth,profile:e.profilePage.profile}}),{setAuthUserData:K,logout:function(){return function(){var e=Object(M.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.logout();case 2:0===e.sent.data.resultCode&&t(K(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Q),Y=a(85),Z=a.n(Y),$=a(178),ee=a.n($),te=a(171),ae=a(172),ne=a(73),re=a(98),ce=function(e){return e.target.select()},oe=Object(ae.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,role:"form"},r.a.createElement("div",null,r.a.createElement(te.a,{name:"email",type:"email",onFocus:ce,component:ne.d,validate:[re.a]})),r.a.createElement("div",null,r.a.createElement(te.a,{name:"password",onFocus:ce,component:ne.e,validate:[re.a]})),r.a.createElement("div",null,r.a.createElement(te.a,{component:ne.a,className:Z.a.checkbox,name:"rememberMe",type:"checkbox"})),e.captchaUrl&&r.a.createElement("img",{src:e.captchaUrl}),e.captchaUrl&&r.a.createElement(te.a,{placeholder:"captcha",name:"captcha",component:ne.c,validate:[re.a]}),r.a.createElement("div",{className:Z.a.login},r.a.createElement(k.a,{onClick:e.handleSubmit,variant:"outlined",color:"primary"},"Login")),e.error&&r.a.createElement("div",{className:ee.a.formSummaryError},e.error))})),ie=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,authorizesUserId:e.auth.userId,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,a,n){return function(){var r=Object(M.a)(G.a.mark((function r(c){var o;return G.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,H.a.login(e,t,a,n);case 2:0===(o=r.sent).data.resultCode?c(B()):(10===o.data.resultCode&&c(V()),c(Object(z.a)("login",{_error:o.data.messages})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(f.a,{to:"/profile"}):r.a.createElement("div",{className:Z.a.body},r.a.createElement("div",{className:Z.a.wrap},r.a.createElement(oe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})))})),ue=a(16),se={initialized:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{initialized:!0});default:return e}},pe=a(97),fe=function(e){return function(t){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(pe.a,null)},r.a.createElement(e,t))}},de=r.a.lazy((function(){return a.e(4).then(a.bind(null,447))})),me=r.a.lazy((function(){return Promise.all([a.e(3),a.e(5)]).then(a.bind(null,446))})),ve=r.a.lazy((function(){return a.e(6).then(a.bind(null,448))})),ge=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement(p.b,null,r.a.createElement("div",{className:"appWrapper"},r.a.createElement(X,null),r.a.createElement(w,null),r.a.createElement("div",{className:".content"},r.a.createElement(f.b,{path:"/profile/:userId?",render:fe(me)}),r.a.createElement(f.b,{path:"/news",render:function(){return r.a.createElement(d,null)}}),r.a.createElement(f.b,{path:"/messages",render:fe(de)}),r.a.createElement(f.b,{path:"/music",render:function(){return r.a.createElement(m,null)}}),r.a.createElement(f.b,{path:"/users",render:fe(ve)}),r.a.createElement(f.b,{path:"/settings",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(f.b,{path:"/login",render:function(){return r.a.createElement(ie,null)}})))):r.a.createElement(pe.a,null)}}]),a}(r.a.Component),he=Object(ue.d)(f.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){Promise.all([e(B())]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=a(169),be=a(130),_e={friends:[{id:1,name:"Polina",ava:"http://www.youloveit.ru/uploads/posts/2018-03/1520168825_youloveit_ru_ariana_grande_emoji_avatarki01.jpg"},{id:2,name:"Alina",ava:"https://trikky.ru/wp-content/blogs.dir/1/files/2018/06/1520168801_youloveit_ru_ariana_grande_emoji_avatarki18.jpg"},{id:3,name:"Evelina",ava:"http://www.youloveit.ru/uploads/posts/2018-03/1520168814_youloveit_ru_ariana_grande_emoji_avatarki09.jpg"}]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e;return e},je=a(170),we=a(182),ye=a(173),Se=Object(ue.c)({messagesPage:Ee.b,profilePage:be.b,sidebar:Oe,usersPage:je.a,auth:J,form:ye.a,app:le}),Ce=Object(ue.e)(Se,Object(ue.a)(we.a));window.store=Ce;var ke=Ce;o.a.render(r.a.createElement(p.a,null,r.a.createElement(g.a,{store:ke},r.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){"use strict";a.d(t,"f",(function(){return l})),a.d(t,"c",(function(){return p})),a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return d})),a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return v}));var n=a(86),r=a(0),c=a.n(r),o=a(71),i=a(185),u=a(187),s=function(e){return c.a.createElement("div",null," ",e.children)},l=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return c.a.createElement("div",null,c.a.createElement(s,e,c.a.createElement(o.a,Object.assign({},t,a,{multiline:!0,variant:"outlined"}))))},p=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return c.a.createElement(s,e,c.a.createElement(o.a,Object.assign({},t,a,{variant:"outlined"})))},f=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return c.a.createElement(s,e,c.a.createElement(u.a,{control:c.a.createElement(i.a,Object.assign({},t,a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"}})),label:"Remember me"}))},d=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return c.a.createElement(s,e,c.a.createElement(u.a,{control:c.a.createElement(i.a,Object.assign({},t,a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"}}))}))},m=function(e){return e.meta.touched&&e.meta.error?c.a.createElement(s,e,c.a.createElement(o.a,Object.assign({},e,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",defaultValue:"Error",error:!0,inputProps:{"aria-label":"description"}}))):c.a.createElement(s,e,c.a.createElement(o.a,Object.assign({},e,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password"})))},v=function(e){return e.meta.touched&&e.meta.error?c.a.createElement(s,e,c.a.createElement(o.a,Object.assign({},e,{label:"Email",id:"standard-basic",defaultValue:"Error",error:!0,inputProps:{"aria-label":"description"}}))):c.a.createElement(s,e,c.a.createElement(o.a,Object.assign({},e,{label:"Email",id:"standard-basic"})))}},85:function(e,t,a){e.exports={wrap:"Login_wrap__TMPVm"}},97:function(e,t,a){"use strict";var n=a(180),r=a.n(n),c=a(181),o=a.n(c),i=a(0),u=a.n(i);t.a=function(e){return u.a.createElement("img",{src:r.a,className:o.a.spinner})}},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){if(!e)return"Field is required"}}},[[224,1,2]]]);
//# sourceMappingURL=main.66ae423d.chunk.js.map