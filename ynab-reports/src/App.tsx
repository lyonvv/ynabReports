import "./App.css";
import { LoginPage } from "./components/LoginPage";
import { RootStore } from "./stores/rootStore";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { LoggedInGuard } from "./LoggedInGuard";
import { HomePage } from "./components/HomePage";
import { LoginRedirectPage } from "./components/LoginRedirectPage";

const rootStore = new RootStore();

function App() {
  return <div className="App">{getComponentFromPath()}</div>;
}

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
      </Routes>
    </Router>
  );
};

export default App;
