import { useState } from "react";
import styles from "../styles/Home.module.scss";

export default function question() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const submitQuesionnaier = async (e) => {
    e.preventDefault();

    const quizdata = new FormData(e.target);
    console.log(quizdata.get("answer"));

    return convertToJson(
      "../data/quizdata.json",
      { "New-Quiz-Data": `${Math.floor(Date.now())}` },
      quizdata
    );
  };

  const convertToJson = async (fetchLink: string, headers: any, body: any) => {
    if (!fetchLink || !headers || !body) {
      throw new Error("One or more POST request parameters was not passed.");
    }
    try {
      const rawResponse = await fetch(fetchLink, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      const content = await rawResponse.json();

      return content;
    } catch (err) {
      console.error(`Error at fetch POST : ${err}`);
      throw err;
    }
  };

  function onSubmit(e) {
    const form = document.querySelector("form");
    const data = new FormData(form);
    const req = new XMLHttpRequest();
    const reqData = req.send(data);

    // const jsonData = JSON.stringify( $(form).serializeArray() ); //  <-----------
    const jsonData = JSON.stringify(reqData); //  <-----------

    console.log(jsonData);
    return false; //don't submit
  }

  return (
    <>
      <div>
        <p>Your name is ... {name}</p>
        <p>The question is ... {question}</p>
        <p>And the Answer is ... {answer}</p>

        <form
          method="post"
          action="../data/quizdata.json"
          className={styles.form}
          onSubmit={(e) => onSubmit(e.target)}
        >
          <label htmlFor="name">お名前(ニックネーム)： </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="question">クイズ内容： </label>
          <textarea
            id="question"
            name="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <label htmlFor="answer">答え： </label>
          <textarea
            id="answer"
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <input type="submit" value="送信" />
        </form>
      </div>
    </>
  );
}
