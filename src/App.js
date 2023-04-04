import React, { useEffect, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { AuthSliceAction } from "./store/Auth";
import "./App.css";

const Header = React.lazy(() => import("./components/Header/Header"));
const ExpenseForm = React.lazy(() =>
  import("./components/Expense/ExpenseForm")
);
const LoadingSpinner = React.lazy(() =>
  import("./components/Loadingspinner/LoadingSpinner")
);
const ContactDetails = React.lazy(() =>
  import("./components/Login/ContactDetails")
);
const AuthForm = React.lazy(() => import("./components/Login/Login"));
const UserPage = React.lazy(() => import("./components/Login/UserPage"));
function App() {
  const Dispatch = useDispatch();

  const dark = useSelector((state) => state.expense.darkmode);

  const loginState = useSelector((state) => state.auth.loginState);
  useEffect(() => {
    if (localStorage.getItem("islogin") === "true") {
      console.log("hi");
      Dispatch(AuthSliceAction.setLoginsate());
    }
  }, []);
  
  console.log(dark);
  return (
    <>
      {" "}
      <Suspense fallback={<p className="">Loading .....</p>}>
        <div className={dark || !loginState ? "light" : "dark"}>
          {loginState && <Header></Header>}
          {console.log("app rendeing")}
          {!loginState ? (
            <Route path="/login">
              <AuthForm></AuthForm>
            </Route>
          ) : (
            <Switch>
              <Route path="/contactdetails">
                <ContactDetails></ContactDetails>
              </Route>

              <Route path="/userpage" exact>
                <UserPage></UserPage>
              </Route>
              <Route path="/loading">
                <LoadingSpinner></LoadingSpinner>
              </Route>
              <Route path="/expenseform" exact>
                <ExpenseForm></ExpenseForm>
              </Route>
              <Route path="/login" exact>
                <AuthForm></AuthForm>
              </Route>

              <Route path="*">
                <Redirect to="/login" />
              </Route>
            </Switch>
          )}
          {!loginState && <Redirect to="/login" />}
          {loginState && <Redirect to="/expenseform" />}
        </div>
      </Suspense>
    </>
  );
}

export default App;
