import "./App.css";
import { LoginPage } from "./Components/LoginPage";
import { RootStore } from "./Stores/RootStore";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { LoggedInGuard } from "./LoggedInGuard";
import { HomePage } from "./Components/HomePage";
import { LoginRedirectPage } from "./Components/LoginRedirectPage";
import { observer } from "mobx-react";
import { NotFoundPage } from "./Components/NotFoundPage";
import { TransactionsPage } from "./Components/TransactionsPage";

const rootStore = new RootStore();

export const App = observer(() => {
  return <div className="App">{getComponentFromPath()}</div>;
});

const getComponentFromPath = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={"/"}
          element={
            <LoggedInGuard rootStore={rootStore}>
              <HomePage rootStore={rootStore} />
            </LoggedInGuard>
          }
        />
        <Route path={"/login"} element={<LoginPage rootStore={rootStore} />} />
        <Route path={"/login_redirect"} element={<LoginRedirectPage />} />
        <Route
          path={"/transactions"}
          element={
            <LoggedInGuard rootStore={rootStore}>
              <TransactionsPage rootStore={rootStore} />
            </LoggedInGuard>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
