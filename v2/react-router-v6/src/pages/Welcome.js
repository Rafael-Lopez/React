import { Route, Routes } from "react-router-dom";

const Welcome = () => {

  /*
    In React Router v6, when you're working with nested routes, the paths of nested routes are actually 
    relative to the path of the parent route. In this example,
      - v5: path="/welcome/new-user"
      - v6: path="new-user" (since the parent route already has '/welcome/*)

    This applies to even Link components. The path is still relative.  
  */

  return (
    <section>
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path="new-user" element={<p>Welcome, new user!</p>} />
      </Routes>
    </section>
  );
};

export default Welcome;
