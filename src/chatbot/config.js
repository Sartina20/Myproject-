import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "FUW-Bot by Mercy Badio",
  initialMessages: [
    createChatBotMessage(
      `Hello. What do you want to learn Federal university Wukari?`,
      {
        widget: "options",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    // {
    //   widgetName: "javascriptQuiz",
    //   widgetFunc: (props) => <Quiz {...props} />,
    //   props: {
    //     questions: [
    //       // {
    //       //   question: "Bot still under development",
    //       //   answer:
    //       //     "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
    //       //   id: 1,
    //       // },
    //       // {
    //       //   question: "Explain prototypal inheritance",
    //       //   answer:
    //       //     "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
    //       //   id: 2,
    //       // },
    //     ],
    //   },
    // },
  ],
};

export default config;
