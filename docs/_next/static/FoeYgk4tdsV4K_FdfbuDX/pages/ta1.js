(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/NK4":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ta1",function(){var e=t("w4Ag");return{page:e.default||e}}])},"6Lhc":function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t("rt45");function r(){var e=Object(a.a)(["\n  width: 280px;\n"]);return r=function(){return e},e}var c=t("vOnD").a.audio(r())},vYYK:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t("hfKm"),r=t.n(a);function c(e,n,t){return n in e?r()(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},w4Ag:function(e,n,t){"use strict";t.r(n);var a=t("0iUn"),r=t("sLSF"),c=t("MI3g"),o=t("a7VT"),i=t("AT/M"),u=t("Tit0"),s=t("vYYK"),l=t("q1tI"),d=t.n(l),p=t("b7Uv"),b=t("0px3"),f=t("RMBO"),m=t("6mxo"),h=t("6Lhc"),g=t("rt45"),x=t("vOnD");function E(){var e=Object(g.a)(['\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n  margin: 6px;\n  background-image: url("/static/image/employee.png");\n  background-position: center; \n  background-repeat: no-repeat; \n  background-size: 42px; \n  background-color: #fcfcfc;\n  border: 1px solid #007bff;\n  border-radius: 50%;\n  \n  &:hover {\n    cursor: pointer;\n    background-color: #dffaff;\n    box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.1);\n  }\n']);return E=function(){return e},e}function k(){var e=Object(g.a)(['\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n  margin: 6px;\n  background-image: url("/static/image/cat.png");\n  background-position: center; \n  background-repeat: no-repeat; \n  background-size: 42px; \n  background-color: #fcfcfc;\n  border: 1px solid #007bff;\n  border-radius: 50%;\n  \n  &:hover {\n    cursor: pointer;\n    background-color: #dffaff;\n    box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.1);\n  }\n']);return k=function(){return e},e}function v(){var e=Object(g.a)(['\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n  margin: 6px;\n  background-image: url("/static/image/drill.png");\n  background-position: center; \n  background-repeat: no-repeat; \n  background-size: 42px; \n  background-color: #fcfcfc;\n  border: 1px solid #007bff;\n  border-radius: 50%;\n  \n  &:hover {\n    cursor: pointer;\n    background-color: #dffaff;\n    box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.1);\n  }\n']);return v=function(){return e},e}var w,O=x.a.div(v()),j=x.a.div(k()),L=x.a.div(E()),y=t("20a2"),A=t.n(y);!function(e){e.DRILL="DRILL",e.CAT="CAT",e.EMPLOYEE="EMPLOYEE"}(w||(w={}));var N=function(e){function n(){var e,t;Object(a.default)(this,n);for(var r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];return t=Object(c.default)(this,(e=Object(o.default)(n)).call.apply(e,[this].concat(u))),Object(s.a)(Object(i.default)(t),"state",{soundObject:void 0,soundFilePath:""}),t}return Object(u.default)(n,e),Object(r.default)(n,[{key:"componentDidMount",value:function(){var e=Math.random(),n=e>.66?w.DRILL:e>.33?w.CAT:w.EMPLOYEE,t=n===w.DRILL?"/static/sound/speech_drill.mp3":n===w.CAT?"/static/sound/speech_cat.mp3":n===w.EMPLOYEE?"/static/sound/speech_employee.mp3":"";this.setState({soundObject:n,soundFilePath:t})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement(m.b,{className:"my-3 p-3 bg-white"},d.a.createElement(p.a,null,d.a.createElement(b.a,{className:"col-sm-12 mb-5"},d.a.createElement(f.b,null,"목소리를 듣고",d.a.createElement("br",null),"적절한 ",d.a.createElement("span",{className:"text-primary"},"그림을 선택"),"해주세요"))),d.a.createElement(p.a,{className:"justify-content-end"},d.a.createElement(b.a,{className:"col-sm-11 mb-3"},this.state.soundFilePath?d.a.createElement(h.a,{controls:!0,controlsList:"nodownload"},"Your browser does not support the ",d.a.createElement("code",null,"audio")," element.",d.a.createElement("source",{src:this.state.soundFilePath,type:"audio/mp3"})):"로딩 중...")),d.a.createElement(p.a,null,d.a.createElement(b.a,{className:"col-4 mt-5 text-center"},d.a.createElement(O,{onClick:function(){return e.checkAnswer(w.DRILL)}})),d.a.createElement(b.a,{className:"col-4 mt-5 text-center"},d.a.createElement(j,{onClick:function(){return e.checkAnswer(w.CAT)}})),d.a.createElement(b.a,{className:"col-4 mt-5 text-center"},d.a.createElement(L,{onClick:function(){return e.checkAnswer(w.EMPLOYEE)}})))))}},{key:"checkAnswer",value:function(e){console.log("answer",e),console.log("this.state.soundObject",this.state.soundObject),console.log("this.state.soundObject",this.state.soundObject===e),this.state.soundObject!==e?A.a.push("/wrong"):A.a.push("/ta2")}}]),n}(d.a.Component);n.default=N}},[["/NK4",1,0]]]);