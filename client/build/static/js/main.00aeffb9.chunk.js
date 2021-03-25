(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{56:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),a=s(25),c=s.n(a),r=s(31),j=s(11),u=s(2),o=s(26),l=s.n(o),b=(s(56),s(0));var d=Object(u.f)((function(e){var t=[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(b.jsx)("div",{className:"confetti"},e)}));return Object(b.jsxs)("div",{id:"mainpage",children:[Object(b.jsx)("div",{className:"confetti-container",children:t}),Object(b.jsx)("div",{className:"game-header",children:Object(b.jsx)("h1",{children:"The InQUIZition"})}),Object(b.jsxs)("div",{className:"game-body",children:[Object(b.jsx)(j.b,{to:"/create_quiz",children:Object(b.jsx)("button",{className:"main-button",children:"Build Your Own"})}),Object(b.jsx)("br",{}),Object(b.jsx)(j.b,{to:"/select_quiz",children:Object(b.jsx)("button",{className:"main-button alternate",children:"Play a Pre-built Quiz"})})]}),Object(b.jsxs)("div",{className:"game-body",children:[Object(b.jsx)("h1",{className:"sub",children:"How it Works"}),Object(b.jsx)("p",{children:"Build your own quiz, or use one we have made "}),Object(b.jsx)("p",{children:" Get a shareable link to send to your friends "}),Object(b.jsx)("p",{children:"The faster you answer right, the more points you get "}),Object(b.jsx)("p",{children:"Watch the leaderboard change as you and your friends compete for the highest score"})]})]})})),h=s(28),O=s(29),m=s(8),x=s(33),p=s(32),v=s(30),f=s.n(v),y=function(e){Object(x.a)(s,e);var t=Object(p.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).state={questionList:[],questions:[{question:"",answerA:"",answerB:"",answerC:"",answerD:""}],username:"",title:""},n.validator=new f.a,n.onAddBtnClick=n.onAddBtnClick.bind(Object(m.a)(n)),n.submitForm=n.submitForm.bind(Object(m.a)(n)),n.QuestionInput=n.QuestionInput.bind(Object(m.a)(n)),n.setTitle=n.setTitle.bind(Object(m.a)(n)),n.setUsername=n.setUsername.bind(Object(m.a)(n)),n}return Object(O.a)(s,[{key:"onAddBtnClick",value:function(){this.validator.hideMessages();var e=this.state.questions;e.push({question:"",answerA:"",answerB:"",answerC:"",answerD:""});var t=this.state.questionList,s=this.QuestionInput(t.length+1);t.push(s),this.setState({questionList:t,questions:e})}},{key:"submitForm",value:function(){this.validator.hideMessages(),this.validator.allValid()?alert("You submitted the form and stuff!"):(this.validator.showMessages(),this.forceUpdate())}},{key:"QuestionInput",value:function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{children:["Question ",e,":",Object(b.jsx)("br",{}),Object(b.jsx)("input",{name:"question",type:"text",className:"question-input main",placeholder:"Your question here"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",id:"answerA",name:e,defaultChecked:!0})," A",Object(b.jsx)("input",{name:"A",className:"question-input",placeholder:"Your first answer here"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",id:"answerB",name:e})," B",Object(b.jsx)("input",{name:"B",className:"question-input",placeholder:"Your second answer here"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",id:"answerC",name:e})," C",Object(b.jsx)("input",{name:"C",className:"question-input",placeholder:"Your third answer here"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",id:"answerD",name:e})," D",Object(b.jsx)("input",{name:"D",className:"question-input",placeholder:"Your fourth answer here"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]},e)}},{key:"setTitle",value:function(e){this.setState({title:e.target.value})}},{key:"setUsername",value:function(e){this.setState({username:e.target.value})}},{key:"setAnswerC",value:function(e){console.log(e)}},{key:"render",value:function(){return Object(b.jsxs)("div",{id:"createQuiz",children:[Object(b.jsx)("div",{className:"game-header alternate",children:Object(b.jsx)("h2",{children:"The InQUIZition"})}),Object(b.jsx)("div",{className:"game-body",children:Object(b.jsxs)("form",{className:"form-body",children:[Object(b.jsx)("h2",{children:"Build Your Quiz"}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{children:["Username:",Object(b.jsx)("input",{className:"question-input",onChange:this.setUsername,value:this.state.username,type:"text",name:"username"}),this.validator.message("username",this.state.username,"required|min:3|max:40")]})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{children:["Quiz Title:",Object(b.jsx)("input",{className:"question-input",value:this.state.title,onChange:this.setTitle,type:"text",name:"title"}),this.validator.message("title",this.state.title,"required|min:3|max:120")]})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:this.state.questionList}),Object(b.jsx)("button",{type:"button",className:"main-button alternate",onClick:this.onAddBtnClick,children:"Add Question"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"button",className:"main-button",onClick:this.submitForm,children:"Create!"})]})})]})}}]),s}(i.a.Component);var g=function(){return Object(b.jsx)("h1",{children:"Quizzes are listed here to select"})};var q=function(){return Object(b.jsx)("h1",{children:"Playable Quiz Goes here"})};s(63);var w=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),s=t[0],i=t[1];return Object(n.useEffect)((function(){l.a.get("/api/v1/say-something").then((function(e){i(e.data)}))}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j.a,{children:Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/",exact:!0,component:function(){return Object(b.jsx)(d,{})}}),Object(b.jsx)(u.a,{path:"/create_quiz",exact:!0,component:function(){return Object(b.jsx)(y,{})}}),Object(b.jsx)(u.a,{path:"/select_quiz",exact:!0,component:function(){return Object(b.jsx)(g,{})}}),Object(b.jsx)(u.a,{path:"/quiz",exact:!0,component:function(){return Object(b.jsx)(q,{})}})]})}),Object(b.jsx)("hr",{}),Object(b.jsx)("h4",{children:"Server response for testing"}),Object(b.jsx)("p",{children:s.body})]})};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.00aeffb9.chunk.js.map