/* eslint-disable react/prop-types */
import { useReducer } from "react";
import {reducer, initialState } from "./Reducer";

// Components
import Header from "./Components/Header";
import MainScreen from "./Components/MainScreen";
import WelcomeScreen from "./Components/WelcomeScreen";
import ProgressBar from "./Components/ProgressBar";
import Quiz from "./Components/Quiz";
import ResultScreen from "./Components/ResultScreen";
import Footer from "./Components/Footer";



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
      <Footer />
    </div>
  );
}
