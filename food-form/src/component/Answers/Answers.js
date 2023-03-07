import React from "react";
import AnswerItem from "../AnswerItem/AnswerItem";
import data from "../../utils/QAData";

function Answers() {
  return (
    <section className="answers__wrapper">
      <h2 className="page__title">Questions & Answers</h2>
      <hr className="heading__divider"></hr>
      {data.map((item) => (
        <AnswerItem
          key={item}
          question={item.q}
          answer={item.a}
          answerTwo={item.aa}
          answerThree={item.aaa}
          address={item.address}
          link={item.link}
        />
      ))}
    </section>
  );
}

export default Answers;
