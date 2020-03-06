(this["webpackJsonpapollo-music-share"]=this["webpackJsonpapollo-music-share"]||[]).push([[0],{111:function(e,t,n){e.exports=n(135)},135:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),l=n.n(i),o=n(15),c=n(166),u=n(169),s=n(170),m=n(102),d=n(171),p=Object(c.a)((function(e){return{title:{marginLeft:e.spacing(2)}}}));var g=function(){var e=p();return r.a.createElement(u.a,{position:"fixed",color:"primary"},r.a.createElement(s.a,null,r.a.createElement(d.a,null),r.a.createElement(m.a,{className:e.title,variant:"h6",component:"h1"},"Apollo Music Share")))},f=n(54),b=n.n(f),h=n(76),v=n(13),E=n(29),y=n(200),S=n(172),O=n(173),j=n(197),x=n(174),w=n(175),N=n(176),C=n(177),k=n(178),I=n(62),q=n.n(I),P=n(49),_=n.n(P),T=n(48),A=n.n(T),F=n(34),G=n(35);function Q(){var e=Object(F.a)(["\n  mutation addSong(\n    $title: String!\n    $artist: String!\n    $duration: Float!\n    $url: String!\n    $thumbnail: String!\n  ) {\n    insert_songs(\n      objects: {\n        title: $title\n        artist: $artist\n        duration: $duration\n        thumbnail: $thumbnail\n        url: $url\n      }\n    ) {\n      affected_rows\n    }\n  }\n"]);return Q=function(){return e},e}function R(){var e=Object(F.a)(["\n  mutation addOrRemoveFromQueue($input: SongInput!) {\n    addOrRemoveFromQueue(input: $input) @client\n  }\n"]);return R=function(){return e},e}var $=Object(G.a)(R()),D=Object(G.a)(Q()),B=n(32),L=Object(c.a)((function(e){return{container:{display:"flex",alignItems:"center"},urlInput:{margin:e.spacing(1)},addSongButton:{margin:e.spacing(1)},dialog:{textAlign:"center"},thumbnail:{width:"90%"}}})),U={duration:0,title:"",artist:"",thumbnail:""};var M=function(){var e=r.a.useState(""),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(B.a)(D),l=Object(o.a)(i,2),c=l[0],u=l[1].error,s=r.a.useState(!1),m=Object(o.a)(s,2),d=m[0],p=m[1],g=L(),f=r.a.useState(!1),I=Object(o.a)(f,2),P=I[0],T=I[1],F=r.a.useState(U),G=Object(o.a)(F,2),Q=G[0],R=G[1];function $(e){var t=e.target,n=t.name,a=t.value;R((function(e){return Object(E.a)({},e,Object(v.a)({},n,a))}))}function M(){T(!1)}function J(){return(J=Object(h.a)(b.a.mark((function e(t){var a,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.player,!(r=a.player.player).getVideoData){e.next=6;break}i=Y(r),e.next=10;break;case 6:if(!r.getCurrentSound){e.next=10;break}return e.next=9,z(r);case 9:i=e.sent;case 10:R(Object(E.a)({},i,{url:n}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(h.a)(b.a.mark((function e(){var t,n,r,i,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Q.url,n=Q.thumbnail,r=Q.duration,i=Q.title,l=Q.artist,e.next=4,c({variables:{url:t.length>0?t:null,thumbnail:n.length>0?n:null,duration:r>0?r:null,title:i.length>0?i:null,artist:l.length>0?l:null}});case 4:M(),R(U),a(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error adding song",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function Y(e){var t=e.getDuration(),n=e.getVideoData(),a=n.title,r=n.video_id;return{duration:t,title:a,artist:n.author,thumbnail:"http://img.youtube.com/vi/".concat(r,"/0.jpg")}}function z(e){return new Promise((function(t){e.getCurrentSound((function(e){e&&t({duration:Number(e.duration/1e3),title:e.title,artist:e.user.username,thumbnail:e.artwork_url.replace("-large","-t500x500")})}))}))}function V(e){var t,n;return null===u||void 0===u||null===(t=u.graphQLErrors[0])||void 0===t||null===(n=t.extensions)||void 0===n?void 0:n.path.includes(e)}r.a.useEffect((function(){var e=_.a.canPlay(n)||A.a.canPlay(n);p(e)}),[n]);var H=Q.thumbnail,K=Q.title,X=Q.artist;return r.a.createElement("div",{className:g.container},r.a.createElement(y.a,{className:g.dialog,open:P,onClose:M},r.a.createElement(S.a,null,"Edit Song"),r.a.createElement(O.a,null,r.a.createElement("img",{className:g.thumbnail,src:H,alt:"Song thumbnail"}),r.a.createElement(j.a,{value:K,onChange:$,margin:"dense",name:"title",label:"Title",fullWidth:!0,error:V("title")||!K,helperText:V("title")&&"Fill out field"}),r.a.createElement(j.a,{value:X,onChange:$,margin:"dense",name:"artist",label:"Artist",fullWidth:!0,error:V("artist")||!X,helperText:V("artist")&&"Fill out field"}),r.a.createElement(j.a,{value:H,onChange:$,margin:"dense",name:"thumbnail",label:"Thumbnail",fullWidth:!0,error:V("thumbnail")||!H,helperText:V("thumbnail")&&"Fill out field"})),r.a.createElement(x.a,null,r.a.createElement(w.a,{onClick:M,color:"secondary"},"Cancel"),r.a.createElement(w.a,{onClick:function(){return W.apply(this,arguments)},variant:"outlined",color:"primary"},"Add Song"))),r.a.createElement(j.a,{className:g.urlInput,value:n,onChange:function(e){return a(e.target.value)},placeholder:"Add YouTube or Soundcloud URL",fullWidth:!0,margin:"normal",type:"url",InputProps:{startAdornment:r.a.createElement(N.a,{position:"start"},r.a.createElement(C.a,null))}}),r.a.createElement(w.a,{disabled:!d,className:g.addSongButton,onClick:function(){return T(!0)},variant:"contained",color:"primary",endIcon:r.a.createElement(k.a,null)},"Add"),r.a.createElement(q.a,{url:n,hidden:!0,onReady:function(e){return J.apply(this,arguments)}}))},J=n(179),W=n(180),Y=n(181),z=n(182),V=n(183),H=n(184),K=n(185),X=n(186),Z=n(187);function ee(){var e=Object(F.a)(["\n  subscription getSongs {\n    songs(order_by: { created_at: desc }) {\n      artist\n      duration\n      id\n      thumbnail\n      title\n      url\n    }\n  }\n"]);return ee=function(){return e},e}var te=Object(G.a)(ee());var ne=Object(c.a)((function(e){return{container:{margin:e.spacing(3)},songInfoContainer:{display:"flex",alignItems:"center"},songInfo:{width:"100%",display:"flex",justifyContent:"space-between"},thumbnail:{objectFit:"cover",height:140,width:140}}}));function ae(e){var t=e.song,n=t.id,a=ne(),i=Object(B.a)($,{onCompleted:function(e){localStorage.setItem("queue",JSON.stringify(e.addOrRemoveFromQueue))}}),l=Object(o.a)(i,1)[0],c=r.a.useContext(Se),u=c.state,s=c.dispatch,d=r.a.useState(!1),p=Object(o.a)(d,2),g=p[0],f=p[1],b=t.artist,h=t.thumbnail,v=t.title;return r.a.useEffect((function(){var e=u.isPlaying&&n===u.song.id;f(e)}),[n,u.song.id,u.isPlaying]),r.a.createElement(W.a,{className:a.container},r.a.createElement("div",{className:a.songInfoContainer},r.a.createElement(Y.a,{image:h,className:a.thumbnail}),r.a.createElement("div",{className:a.songInfo},r.a.createElement(z.a,null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h5",component:"h2"},v),r.a.createElement(m.a,{variant:"body1",component:"p",color:"textSecondary"},b)),r.a.createElement(V.a,null,r.a.createElement(H.a,{onClick:function(){s({type:"SET_SONG",payload:{song:t}}),s(u.isPlaying?{type:"PAUSE_SONG"}:{type:"PLAY_SONG"})},size:"small",color:"primary"},g?r.a.createElement(K.a,null):r.a.createElement(X.a,null)),r.a.createElement(H.a,{size:"small",color:"secondary",onClick:function(){l({variables:{input:Object(E.a)({},t,{__typename:"Song"})}})}},r.a.createElement(Z.a,null))))))}var re=function(){var e=Object(B.c)(te),t=e.data,n=e.loading,a=e.error;return n?r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:50}},r.a.createElement(J.a,null)):a?r.a.createElement("div",null,"Error fetching songs"):r.a.createElement("div",null,t.songs.map((function(e){return r.a.createElement(ae,{key:e.id,song:e})})))},ie=n(188),le=n(201),oe=n(189);var ce=Object(c.a)({avatar:{width:44,height:44},text:{textOverflow:"ellipsis",overflow:"hidden"},container:{display:"grid",gridAutoFlow:"column",gridTemplateColumns:"50px auto 50px",gridGap:12,alignItems:"center",marginTop:10},songInfoContainer:{overflow:"hidden",whiteSpace:"nowrap"}});function ue(e){var t=e.song,n=ce(),a=Object(B.a)($,{onCompleted:function(e){localStorage.setItem("queue",JSON.stringify(e.addOrRemoveFromQueue))}}),i=Object(o.a)(a,1)[0],l=t.thumbnail,c=t.artist,u=t.title;return r.a.createElement("div",{className:n.container},r.a.createElement(le.a,{className:n.avatar,src:l,alt:"Song thumbnail"}),r.a.createElement("div",{className:n.songInfoContainer},r.a.createElement(m.a,{variant:"subtitle2",className:n.text},u),r.a.createElement(m.a,{color:"textSecondary",variant:"body2",className:n.text},c)),r.a.createElement(H.a,{onClick:function(){i({variables:{input:Object(E.a)({},t,{__typename:"Song"})}})}},r.a.createElement(oe.a,{color:"error"})))}var se=function(e){var t=e.queue;return Object(ie.a)((function(e){return e.breakpoints.up("md")}))&&r.a.createElement("div",{style:{margin:"10px 0"}},r.a.createElement(m.a,{color:"textSecondary",variant:"button"},"QUEUE (",t.length,")"),t.map((function(e){return r.a.createElement(ue,{key:e.id,song:e})})))},me=n(202),de=n(190),pe=n(191);function ge(){var e=Object(F.a)(["\n  query getQueuedSongs {\n    queue @client {\n      id\n      duration\n      title\n      artist\n      thumbnail\n      url\n    }\n  }\n"]);return ge=function(){return e},e}var fe=Object(G.a)(ge()),be=Object(c.a)((function(e){return{container:{display:"flex",justifyContent:"space-between"},details:{display:"flex",flexDirection:"column",padding:"0px 15px"},content:{flex:"1 0 auto"},thumbnail:{width:150},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},playIcon:{height:38,width:38}}}));var he=function(){var e=Object(B.b)(fe).data,t=r.a.useRef(),n=r.a.useContext(Se),a=n.state,i=n.dispatch,l=r.a.useState(0),c=Object(o.a)(l,2),u=c[0],s=c[1],d=r.a.useState(0),p=Object(o.a)(d,2),g=p[0],f=p[1],b=r.a.useState(!1),h=Object(o.a)(b,2),v=h[0],E=h[1],y=r.a.useState(0),S=Object(o.a)(y,2),O=S[0],j=S[1],x=be();return r.a.useEffect((function(){var t=e.queue.findIndex((function(e){return e.id===a.song.id}));j(t)}),[e.queue,a.song.id]),r.a.useEffect((function(){var t=e.queue[O+1];u>=.99&&t&&(s(0),i({type:"SET_SONG",payload:{song:t}}))}),[e.queue,u,i,O]),r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{variant:"outlined",className:x.container},r.a.createElement("div",{className:x.details},r.a.createElement(z.a,{className:x.content},r.a.createElement(m.a,{variant:"h5",component:"h3"},a.song.title),r.a.createElement(m.a,{variant:"subtitle1",component:"p",color:"textSecondary"},a.song.artist)),r.a.createElement("div",{className:x.controls},r.a.createElement(H.a,{onClick:function(){var t=e.queue[O-1];t&&i({type:"SET_SONG",payload:{song:t}})}},r.a.createElement(de.a,null)),r.a.createElement(H.a,{onClick:function(){i(a.isPlaying?{type:"PAUSE_SONG"}:{type:"PLAY_SONG"})}},a.isPlaying?r.a.createElement(K.a,{className:x.playIcon}):r.a.createElement(X.a,{className:x.playIcon})),r.a.createElement(H.a,{onClick:function(){var t=e.queue[O+1];t&&i({type:"SET_SONG",payload:{song:t}})}},r.a.createElement(pe.a,null)),r.a.createElement(m.a,{variant:"subtitle1",component:"p",color:"textSecondary"},new Date(1e3*g).toISOString().substr(11,8))),r.a.createElement(me.a,{onMouseDown:function(){E(!0)},onMouseUp:function(){E(!1),t.current.seekTo(u)},onChange:function(e,t){s(t)},value:u,type:"range",min:0,max:1,step:.01})),r.a.createElement(q.a,{ref:t,onProgress:function(e){var t=e.played,n=e.playedSeconds;v||(s(t),f(n))},url:a.song.url,playing:a.isPlaying,hidden:!0}),r.a.createElement(Y.a,{className:x.thumbnail,image:a.song.thumbnail})),r.a.createElement(se,{queue:e.queue}))},ve=n(199),Ee=n(192);var ye=function(e,t){switch(t.type){case"PLAY_SONG":return Object(E.a)({},e,{isPlaying:!0});case"PAUSE_SONG":return Object(E.a)({},e,{isPlaying:!1});case"SET_SONG":return Object(E.a)({},e,{song:t.payload.song});default:return e}},Se=r.a.createContext({song:{id:"f21bcf5d-4a45-4d10-affb-24eee1682c30",title:"Carried From The Start",artist:"Black Rebel Motorcycle Club",thumbnail:"http://img.youtube.com/vi/yrcejc-xnBA/0.jpg",url:"https://www.youtube.com/watch?v=yrcejc-xnBA",duration:367},isPlaying:!1});var Oe=function(){var e=r.a.useContext(Se),t=r.a.useReducer(ye,e),n=Object(o.a)(t,2),a=n[0],i=n[1],l=Object(ie.a)((function(e){return e.breakpoints.up("md")})),c=Object(ie.a)((function(e){return e.breakpoints.up("sm")}));return r.a.createElement(Se.Provider,{value:{state:a,dispatch:i}},r.a.createElement(ve.a,{only:"xs"},r.a.createElement(g,null)),r.a.createElement(Ee.a,{container:!0,spacing:3},r.a.createElement(Ee.a,{style:{paddingTop:c?80:10},item:!0,xs:12,md:7},r.a.createElement(M,null),r.a.createElement(re,null)),r.a.createElement(Ee.a,{style:l?{position:"fixed",width:"100%",right:0,top:70}:{position:"fixed",width:"100%",left:0,bottom:0},item:!0,xs:12,md:5},r.a.createElement(he,null))))},je=n(195),xe=n(196),we=n(25),Ne=n(100),Ce=n(193),ke=n(194),Ie=Object(Ne.a)({palette:{type:"dark",primary:Ce.a,secondary:ke.a}}),qe=n(24),Pe=n(28),_e=n(99),Te=n(40);function Ae(){var e=Object(F.a)(["\n    type Song {\n      id: uuid!\n      title: String!\n      artist: String!\n      thumbnail: String!\n      duration: Float!\n      url: String!\n    }\n\n    input SongInput {\n      id: uuid!\n      title: String!\n      artist: String!\n      thumbnail: String!\n      duration: Float!\n      url: String!\n    }\n\n    type Query {\n      queue: [Song]!\n    }\n\n    type Mutation {\n      addOrRemoveFromQueue(input: SongInput!): [Song]!\n    }\n  "]);return Ae=function(){return e},e}var Fe=new Pe.c({link:new _e.a({uri:"wss://apollo-react-music-share.herokuapp.com/v1/graphql",options:{reconnect:!0}}),cache:new Te.a,typeDefs:Object(G.a)(Ae()),resolvers:{Mutation:{addOrRemoveFromQueue:function(e,t,n){var a=t.input,r=n.cache,i=r.readQuery({query:fe});if(i){var l=i.queue,o=l.some((function(e){return e.id===a.id}))?l.filter((function(e){return e.id!==a.id})):[].concat(Object(qe.a)(l),[a]);return r.writeQuery({query:fe,data:{queue:o}}),o}return[]}}}}),Ge={queue:Boolean(localStorage.getItem("queue"))?JSON.parse(localStorage.getItem("queue")):[]};Fe.writeData({data:Ge});var Qe=Fe;l.a.render(r.a.createElement(we.a,{client:Qe},r.a.createElement(je.a,{theme:Ie},r.a.createElement(xe.a,null),r.a.createElement(Oe,null))),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.3d484cdd.chunk.js.map