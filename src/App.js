import { Route, Routes } from "react-router-dom";
import SignUp from "./components/LayOut/SignUp";
import LogIn from "./components/LayOut/LogIn";
import ExpensePage from "./components/pages/ExpensePage";
import CompleteProfile from "./components/pages/CompleteProfile";
import Header from "./components/LayOut/Header";
const App=() =>{
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="/expensepage" element={<ExpensePage />} />
        <Route
          path="expensepage/completeprofile"
          element={<CompleteProfile />}
        />
      </Routes>
    </>
  );
}

export default App;
