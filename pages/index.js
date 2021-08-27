"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Home_module_scss_1 = require("../styles/Home.module.scss");
function Questionnaier() {
    var _a = react_1.useState("ゲスト"), name = _a[0], setName = _a[1];
    var _b = react_1.useState(""), questionnaier = _b[0], setQuestionnaier = _b[1];
    var submitQuesionnaier = function (e) {
        e.preventDefault();
        console.log("submitted");
    };
    return (<>
      <div>
        <p>Your name is ... {name}</p>
        <p>The questionnaier is ... {questionnaier}</p>

        <form method="post" action="san.sh.s3@outlook.jp" className={Home_module_scss_1["default"].form} onSubmit={submitQuesionnaier}>
          <label htmlFor="name">お名前： </label>
          <input type="text" id="name" value={name} onChange={function (e) { return setName(e.target.value); }}/>

          <label htmlFor="question">クイズ内容： </label>
          <textarea id="question" value={questionnaier} onChange={function (e) { return setQuestionnaier(e.target.value); }}/>
          <input type="submit" value="送信"/>
        </form>
      </div>
    </>);
}
exports["default"] = Questionnaier;
