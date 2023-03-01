function AnswerItem({ question, answer, answerTwo, address, link }) {
  return (
    <div className="answer-item__wrapper">
      <p className="answer-item__question">{question}</p>
      <p className="answer-item__answer">{answer}</p>
      {answerTwo ? <p className="answer-item__answer">{answerTwo}</p> : null}
      {address ? (
        <p className="answer-item__answer answer-item__address">{address}</p>
      ) : null}
      {link ? <a href={`${link}`}>Visit Website </a> : null}
    </div>
  );
}

export default AnswerItem;
