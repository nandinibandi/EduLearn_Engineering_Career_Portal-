import { useState } from "react";

const questions = {
  React: [
    { q: "What is React?", a: "React is a JavaScript library for building user interfaces using components." },
    { q: "What is JSX?", a: "JSX is a syntax that looks like HTML but is written inside JavaScript. It is converted to JavaScript by a build tool." },
    { q: "What is the difference between props and state?", a: "Props are passed from parent to child and are read-only. State is data owned by a component that can change." },
    { q: "Why do we use the key prop in lists?", a: "Keys help React identify which items changed, were added or removed, so it can update the list efficiently." },
  ],
  JavaScript: [
    { q: "Difference between let, const and var?", a: "var is function scoped. let and const are block scoped. const cannot be reassigned." },
    { q: "What is an arrow function?", a: "A shorter way to write functions: const add = (a, b) => a + b;" },
    { q: "What is a Promise?", a: "An object that represents a value that will be available in the future (success or failure)." },
    { q: "What does map() do?", a: "map() loops over an array and returns a new array with the result of a function on each item." },
  ],
  Python: [
    { q: "What is a list in Python?", a: "A list is an ordered, changeable collection written with square brackets, like [1, 2, 3]." },
    { q: "Difference between list and tuple?", a: "Lists can be changed (mutable). Tuples cannot be changed (immutable)." },
    { q: "What is a dictionary?", a: "A collection of key-value pairs written with curly braces, like {'name': 'Ravi'}." },
    { q: "What is a function?", a: "A reusable block of code created with the def keyword." },
  ],
  "HTML/CSS": [
    { q: "What is semantic HTML?", a: "Using meaningful tags like header, nav, main and footer so the page structure is clear." },
    { q: "What is the CSS box model?", a: "Every element is a box made of content, padding, border and margin." },
    { q: "Difference between class and id?", a: "An id must be unique on a page. A class can be used on many elements." },
    { q: "What is Flexbox?", a: "A CSS layout system used to arrange items in a row or column and align them easily." },
  ],
};

function InterviewPractice() {
  const categoryNames = Object.keys(questions);

  const [category, setCategory] = useState("React");
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentList = questions[category];
  const current = currentList[index];

  function changeCategory(name) {
    setCategory(name);
    setIndex(0);
    setShowAnswer(false);
  }

  function nextQuestion() {
    // Go back to the first question after the last one
    setIndex((index + 1) % currentList.length);
    setShowAnswer(false);
  }

  return (
    <>
      <section className="page-header">
        <h1>Interview Practice</h1>
        <p>Practise beginner technical questions, one at a time.</p>
      </section>
      <div className="page">

      <div className="category-list">
        {categoryNames.map((name) => (
          <button
            key={name}
            className={name === category ? "category active" : "category"}
            onClick={() => changeCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="card question-card">
        <p className="small-text">
          Question {index + 1} of {currentList.length}
        </p>
        <h3>{current.q}</h3>

        {showAnswer && <p className="answer">{current.a}</p>}

        <div className="hero-buttons">
          {showAnswer ? (
            <button className="btn btn-small" onClick={() => setShowAnswer(false)}>
              Hide Answer
            </button>
          ) : (
            <button className="btn btn-small" onClick={() => setShowAnswer(true)}>
              Show Answer
            </button>
          )}
          <button className="btn btn-small btn-outline-dark" onClick={nextQuestion}>
            Next Question
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default InterviewPractice;
