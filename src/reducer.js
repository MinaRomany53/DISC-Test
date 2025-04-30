// Data
import questionsData from "./Data/questions";

export const initialState = {
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
  
  export const reducer = (state, action) => {
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
