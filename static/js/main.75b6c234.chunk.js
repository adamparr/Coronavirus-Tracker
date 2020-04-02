(this["webpackJsonpcoronavirus-tracker"]=this["webpackJsonpcoronavirus-tracker"]||[]).push([[0],{200:function(e,a,t){e.exports=t(386)},205:function(e,a,t){},206:function(e,a,t){},386:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(12),c=t.n(r),s=(t(205),t(157)),i=t(158),o=t(172),m=t(173),u=(t(206),t(34)),d=t.n(u);function E(e){var a=e.lastUpdated;return a=d.a.unix(a/1e3).fromNow(),l.a.createElement("header",null,l.a.createElement("h1",null,"Coronavirus Tracker"),l.a.createElement("p",null,"Last updated ",a))}function h(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Make sure to bookmark and share this page!"),l.a.createElement("p",null,"Made by ",l.a.createElement("a",{href:"https://aparr.dev/",target:"_blank",rel:"noopener noreferrer"},"Adam Parr")," - ",l.a.createElement("a",{href:"https://github.com/adamparr/coronavirus-tracker",rel:"noopener noreferrer",target:"_blank"},"GitHub")))}var p=t(425),v=t(429);function f(e){if(e)return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function y(e){var a=e.data,t=e.timeline,n=a.cases,r=a.deaths,c=a.recovered,s=t[Object.keys(t)[Object.keys(t).length-1]],i=s.cases,o=s.deaths,m=s.recovered;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{xs:12,sm:4,item:!0},l.a.createElement(v.a,{className:"card"},l.a.createElement("h3",{className:"card-title"},"Cases"),l.a.createElement("span",{className:"stat"},f(n)),l.a.createElement("span",{className:"prevStat"},f(n-i)," today"),l.a.createElement("div",{className:"bar blue"}))),l.a.createElement(p.a,{xs:!0,sm:4,item:!0},l.a.createElement(v.a,{className:"card"},l.a.createElement("h3",{className:"card-title"},"Deaths"),l.a.createElement("span",{className:"stat"},f(r)),l.a.createElement("span",{className:"prevStat"},f(r-o)," today"),l.a.createElement("div",{className:"bar red"}))),l.a.createElement(p.a,{xs:!0,sm:4,item:!0},l.a.createElement(v.a,{className:"card"},l.a.createElement("h3",{className:"card-title"},"Recovered"),l.a.createElement("span",{className:"stat"},f(c)),l.a.createElement("span",{className:"prevStat"},f(c-m)," today"),l.a.createElement("div",{className:"bar green"}))))}var b=t(54),g=t(14);function N(e){var a=e.timeline,t=Object(n.useState)([]),r=Object(b.a)(t,2),c=r[0],s=r[1];Object(n.useEffect)((function(){var e=Object.keys(a).map((function(e){return{date:d()(e).format("MMM D"),cases:a[e].cases,deaths:a[e].deaths,recovered:a[e].recovered}}));s(e)}),[a]);var i=function(e){var a=e.payload,t=e.label;return e.active?l.a.createElement("div",{className:"custom-tooltip"},l.a.createElement("p",{className:"tt-label"},t),l.a.createElement("p",{className:"tt-stat",style:{backgroundColor:"#438ce6"}},"Cases: ",l.a.createElement("span",null,f(a[0].value))),l.a.createElement("p",{className:"tt-stat",style:{backgroundColor:"#e24f3f"}},"Deaths: ",l.a.createElement("span",null,f(a[1].value))),l.a.createElement("p",{className:"tt-stat",style:{backgroundColor:"#47bd61"}},"Recovered: ",l.a.createElement("span",null,f(a[2].value)))):null};return l.a.createElement(p.a,{xs:12,md:8,item:!0},l.a.createElement(v.a,{className:"card",style:{height:400}},l.a.createElement("h3",{className:"card-title"},"Change Over Time"),l.a.createElement(g.j,null,l.a.createElement(g.e,{margin:{top:30,right:15,bottom:15,left:15},data:c},l.a.createElement(g.a,null),l.a.createElement(g.l,{height:60,tickMargin:10,minTickGap:15,dataKey:"date"}),l.a.createElement(g.m,{width:30,tickFormatter:function(e){return function(e){var a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}],l=/\.0+$|(\.[0-9]*[1-9])0+$/;for(a=n.length-1;a>0&&!(e>=n[a].value);a--);return(e/n[a].value).toFixed(t).replace(l,"$1")+n[a].symbol}(e)}}),l.a.createElement(g.k,{content:l.a.createElement(i,null)}),l.a.createElement(g.d,{animationDuration:3e3,type:"monotone",dataKey:"cases",stroke:"#438ce6"}),l.a.createElement(g.d,{animationDuration:3e3,type:"monotone",dataKey:"deaths",stroke:"#e24f3f"}),l.a.createElement(g.d,{animationDuration:3e3,type:"monotone",dataKey:"recovered",stroke:"#47bd61"})))))}function k(e){var a=e.data;a=[{name:"deaths",value:a.deaths,fill:"#e24f3f"},{name:"recovered",value:a.recovered,fill:"#47bd61"},{name:"cases",value:a.cases,fill:"#438ce6"}];var t=function(e){var a=e.payload;e.label;return e.active?(a=a[0].payload,l.a.createElement("div",{className:"custom-tooltip ".concat(a.name)},l.a.createElement("p",{className:"tt-label"},a.name,": ",f(a.value)))):null};return l.a.createElement(p.a,{xs:12,md:4,className:"radial",item:!0},l.a.createElement(v.a,{className:"card",style:{height:400,position:"relative"}},l.a.createElement("h3",{className:"card-title"},"Radial Visualisation"),l.a.createElement(g.j,null,l.a.createElement(g.i,{innerRadius:"30%",outerRadius:"95%",data:a,startAngle:135,endAngle:-135,barSize:40},l.a.createElement(g.h,{cornerRadius:10,background:{fill:"#232731"},dataKey:"value",animationDuration:3e3,label:{fill:"white",position:"insideStart",fontSize:"16",letterSpacing:"1",formatter:function(e){return f(e)}}}),l.a.createElement(g.k,{content:l.a.createElement(t,null)}),l.a.createElement(g.c,{verticalAlign:"top",height:10})))))}var x=t(431),C=t(435),D=t(434),w=t(430),j=t(432),S=t(438),O=t(433),M=[{id:"country",label:"Country",align:"left"},{id:"cases",label:"Cases"},{id:"todayCases",label:"Cases Today"},{id:"deaths",label:"Deaths"},{id:"todayDeaths",label:"Deaths Today"},{id:"recovered",label:"Recovered"},{id:"active",label:"Active"},{id:"critical",label:"Critical"},{id:"casesPerOneMillion",label:"Cases / 1M pop"},{id:"deathsPerOneMillion",label:"Deaths / 1M pop"}];function R(e){var a=e.data,t=l.a.useState(0),n=Object(b.a)(t,2),r=n[0],c=n[1],s=l.a.useState(10),i=Object(b.a)(s,2),o=i[0],m=i[1];return l.a.createElement(p.a,{xs:12,className:"countriesTable",item:!0},l.a.createElement(v.a,{className:"card"},l.a.createElement(w.a,null,l.a.createElement(x.a,{stickyHeader:!0,"aria-label":"table"},l.a.createElement(j.a,null,l.a.createElement(O.a,null,M.map((function(e){return l.a.createElement(D.a,{key:e.id,align:e.align?e.align:"center"},e.label)})))),l.a.createElement(C.a,null,a.slice(r*o,r*o+o).map((function(e){return l.a.createElement(O.a,{hover:!0,role:"checkbox",tabIndex:-1,key:"".concat(e.country)},M.map((function(a){var t=e[a.id];return l.a.createElement(D.a,{key:"".concat(a.id,"-").concat(t),align:a.align?a.align:"center",className:"todayCases"!==a.id&&"todayDeaths"!==a.id||!t?null:"highlight"},"todayCases"!==a.id&&"todayDeaths"!==a.id||!t?null:"+",t?f(t):"-")})))}))))),l.a.createElement(S.a,{rowsPerPageOptions:[10,25,100],component:"div",count:a.length,rowsPerPage:10,page:r,onChangePage:function(e,a){c(a)},onChangeRowsPerPage:function(e){m(+e.target.value),c(0)}})))}function P(e){var a=e.countryData,t=a.slice(7),n=0;t.forEach((function(e){n+=e.cases}));var r=a.slice(0,7);r.push({country:"Other",cases:n});var c=["#692424","#692441","#692454","#692469","#5b2469","#4a2469","#362469","#222368"],s=Math.PI/180,i=function(e){var a=e.payload;e.label;return e.active?(r=a[0].payload.payload,l.a.createElement("div",{style:{backgroundColor:a[0].payload.fill},className:"custom-tooltip ".concat(r.name)},l.a.createElement("p",{className:"tt-label"},r.country,": ",f(r.cases)))):null};return l.a.createElement(p.a,{xs:12,md:6,lg:4,item:!0},l.a.createElement(v.a,{className:"card",style:{height:350}},l.a.createElement("h3",{className:"card-title"},"Distribution Of Cases By Country"),l.a.createElement(g.j,null,l.a.createElement(g.g,null,l.a.createElement(g.f,{data:r,labelLine:!1,label:function(e){var a=e.cx,t=e.cy,n=e.midAngle,r=e.innerRadius,c=e.outerRadius,i=e.percent,o=(e.index,r+.75*(c-r)),m=a+o*Math.cos(-n*s),u=t+o*Math.sin(-n*s);return l.a.createElement("text",{x:m,y:u,fill:"white",textAnchor:"middle",dominantBaseline:"middle"},"".concat((100*i).toFixed(0),"%"))},fill:"#8884d8",dataKey:"cases",outerRadius:"85%",nameKey:"country"},r.map((function(e,a){return l.a.createElement(g.b,{key:"cell-".concat(a),fill:c[a%c.length]})}))),l.a.createElement(g.k,{content:l.a.createElement(i,null)})))))}function T(e){var a=e.countryData,t=e.globalData,n=t.cases/t.deaths,r=100-n,c=0;a.forEach((function(e){e.cases>0&&(c+=1)}));var s=d()().diff(d.a.unix(1573948800),"days");return l.a.createElement(p.a,{xs:12,md:6,lg:5,item:!0},l.a.createElement(v.a,{className:"card",style:{height:350}},l.a.createElement("h3",{className:"card-title"},"Virus Statistics"),l.a.createElement(p.a,{className:"virusStats-grid",container:!0,spacing:3,justify:"center"},l.a.createElement(p.a,{xs:6,item:!0},l.a.createElement("div",null,l.a.createElement("span",{className:"stat green-text"},r.toFixed(2),"%"),l.a.createElement("p",{className:"stat-text"},"Recovery Rate"))),l.a.createElement(p.a,{xs:6,item:!0},l.a.createElement("div",null,l.a.createElement("span",{className:"stat red-text"},n.toFixed(2),"%"),l.a.createElement("p",{className:"stat-text"},"Death Rate"))),l.a.createElement(p.a,{xs:6,item:!0},l.a.createElement("div",null,l.a.createElement("span",{className:"stat blue-text"},c),l.a.createElement("p",{className:"stat-text"},"Nations Affected"))),l.a.createElement(p.a,{xs:6,item:!0},l.a.createElement("div",null,l.a.createElement("span",{className:"stat yellow-text"},s,l.a.createElement("span",{className:"days-small"},"days")),l.a.createElement("p",{className:"stat-text"},"Since First Case"))))))}function B(){return l.a.createElement(p.a,{xs:12,md:8,lg:3,item:!0},l.a.createElement(v.a,{className:"card infoBox"},l.a.createElement("h3",{className:"card-title"},"How You Can Help"),l.a.createElement("p",null,"You should:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"blue-"},"Limit leaving the house")," to essential groceries, medicine, or work."),l.a.createElement("li",null,l.a.createElement("span",{className:"red-"},"Practice social distancing")," - staying at least 2 meters away from anyone else."),l.a.createElement("li",null,l.a.createElement("span",{className:"green-"},"Wash your hands")," often & as soon as you get home."),l.a.createElement("li",null,l.a.createElement("span",{className:"yellow-"},"Cover your mouth")," and nose with a tissue when you cough or sneeze."),l.a.createElement("li",null,l.a.createElement("span",{className:"blue-"},"Avoid touching your face")," if your hands aren't clean.")),l.a.createElement("p",{className:"nhs-summary"},"This is a summary taken from ",l.a.createElement("a",{href:"https://www.nhs.uk/conditions/coronavirus-covid-19/",target:"_blank",rel:"noopener noreferrer"},"nhs.uk"))))}var A=t(436);function F(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},l.a.createElement(A.a,{size:80}))}var K=t(437),z=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).componentDidMount=function(){n.fetchData()},n.state={globalData:null,globalTimeline:null,countriesByCases:null},n}return Object(i.a)(t,[{key:"fetchData",value:function(){var e=this;fetch("https://api.coronastatistics.live/all").then((function(e){return e.json()})).then((function(a){e.setState({globalData:a})})),fetch("https://api.coronastatistics.live/timeline/global").then((function(e){return e.json()})).then((function(a){e.setState({globalTimeline:a})})),fetch("https://api.coronastatistics.live/countries?sort=cases").then((function(e){return e.json()})).then((function(a){e.setState({countriesByCases:a})}))}},{key:"render",value:function(){return this.state.globalData&&this.state.globalTimeline&&this.state.countriesByCases?l.a.createElement("div",{className:"App"},l.a.createElement(E,{lastUpdated:this.state.globalData.updated}),l.a.createElement(K.a,{className:"globalStats"},l.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},l.a.createElement(y,{data:this.state.globalData,timeline:this.state.globalTimeline}),l.a.createElement(k,{data:this.state.globalData}),l.a.createElement(N,{timeline:this.state.globalTimeline}),l.a.createElement(P,{countryData:this.state.countriesByCases}),l.a.createElement(T,{countryData:this.state.countriesByCases,globalData:this.state.globalData}),l.a.createElement(B,null),l.a.createElement(R,{data:this.state.countriesByCases}))),l.a.createElement(h,null)):l.a.createElement(F,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[200,1,2]]]);
//# sourceMappingURL=main.75b6c234.chunk.js.map