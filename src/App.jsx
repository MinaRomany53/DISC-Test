/* eslint-disable react/prop-types */
import { useReducer } from "react";
// Data
import questionsData from "./Data/questions";
// Components
import Header from "./Components/Header";
import WelcomeScreen from "./Components/WelcomeScreen";
import ProgressBar from "./Components/ProgressBar";
import Quiz from "./Components/Quiz";
import ResultScreen from "./Components/ResultScreen";

const initialState = {
  questions: questionsData,
  status: "ready",
  curr: 1,
  mostSymbols: {
    "Σ": 0,
    "Δ": 0,
    "I": 0,
    "X": 0,
    "-": 0,
  },
  leastSymbols: {
    "Σ": 0,
    "Δ": 0,
    "I": 0,
    "X": 0,
    "-": 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "StartGame":
      return { ...state, status: "active", curr: 1 };
      case "Answer": {
        const answer = action.payload;
        return {
          ...state,
          mostSymbols: {
            ...state.mostSymbols,
            [answer[0]]: state.mostSymbols[answer[0]] + 1,
          },
          leastSymbols: {
            ...state.leastSymbols,
            [answer[1]]: state.leastSymbols[answer[1]] + 1,
          },
        };
      }
    case "NextQuestion":
      if (state.curr < state.questions.length) {
        return {
          ...state,
          curr: state.curr + 1,
        };
      } else {
        return { ...state, status: "result", curr: 1 };
      }
    case "Result":
      return { ...state, status: "result", curr: 1 };
    case "Reset":
      return { ...initialState };
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const totalQuestions = state.questions.length;

  return (
    <div className="app">
      <Header />
      <MainScreen>
        {state.status === "ready" && (
          <WelcomeScreen totalQuestions={totalQuestions} dispatch={dispatch} />
        )}
        {state.status === "active" && (
          <>
            <ProgressBar curr={state.curr} totalQuestions={totalQuestions} />
            <Quiz
              curr={state.curr}
              questions={state.questions}
              dispatch={dispatch}
            />
          </>
        )}
        {state.status === "result" && <ResultScreen leastSymbols={state.leastSymbols} mostSymbols={state.mostSymbols} dispatch={dispatch} />}
      </MainScreen>
    </div>
  );
}

function MainScreen({ children }) {
  return <div className="main">{children}</div>;
}
