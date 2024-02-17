import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Available Courses",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Programs", handler: () => {}, id: 2 },
    { text: "Requirements", handler: () => {}, id: 3 },
    { text: "School calender", handler: () => {}, id: 4 },
    { text: "Departments & units", handler: () => {}, id: 5 },
    { text: "About FuWukari", handler: () => {}, id: 6 },
    { text: "History", handler: () => {}, id: 7 },
    { text: "University Council", handler: () => {}, id: 8 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
