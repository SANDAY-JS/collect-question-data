import { useRef, useState } from "react";
import styles from "../styles/Home.module.scss";
import { useForm, ValidationError } from "@formspree/react";

export default function question() {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [state, handleSubmit] = useForm("mdoyynbg");

  const formRef = useRef(null);

  const submitQuesionnaier = async (e) => {
    e.preventDefault();

    const result = getFormJSON(formRef.current);
    console.log(result);
  };

  const getFormJSON = (form) => {
    const data = new FormData(form);
    return Array.from(data.keys()).reduce((result, key) => {
      result[key] = data.get(key);
      return result;
    }, {});
  };

  return (
    <>
      <div>
        <p>Your name is ... {name}</p>
        <p>The question is ... {question}</p>
        <p>And the Answer is ... {answer}</p>

        <form
          ref={formRef}
          method="POST"
          action={process.env.NEXT_APP_FORM_EMAIL}
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">お名前(ニックネーム)： </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* <label htmlFor="email">メールアドレス： </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /> */}

          <label htmlFor="question">クイズ内容： </label>
          <textarea
            id="question"
            name="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />

          <label htmlFor="answer">答え： </label>
          <textarea
            id="answer"
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />

          <button type="submit" disabled={state.submitting}>
            送信
          </button>
        </form>
      </div>
    </>
  );
}
