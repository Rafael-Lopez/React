import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  // You can prevent function recreation (therefore, React.memo() can work appropiately for Button) by using useCallback()
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((previousShowParagraph) => !previousShowParagraph);
  }, []);

  console.log("App running...");

  // The App function is re-executed because state changed here. Now, what is part of that App function?
  // Of course, this return statement, and there we return some JSX code. Now, all those JSX elements here
  // in the end are like function calls to the respective component functions. So we call:
  // - the function for the DemoOutput component
  // - the function for the button component
  // That's why those child components are also re-executed and re-evaluated, just because the parent component changed.
  // Because they are part of the parent component's function body. And if the parent component function runs again, then
  // the child component functions also run again. So in the end, even though the 'props' value never changes for DemoOutput,
  // it doesn't even matter here to determine if it should be re-rendered or not. Just the simple fact that the parent changed,
  // makes child components re-render too.
  // In short, if, for example, state changes in a parent component, all child components will be re-evaluated even if nothing
  // has changed for them.
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
