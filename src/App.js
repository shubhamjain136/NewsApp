// import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import NewsComponent from "./components/NewsComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  // let category = "general";
  let country = "in";
  // let apiKey = "54d564ec4c824997b94d0e9364ffdf96";
  let apiKey = "f360647e037c43d5a45c97ecb6a591be";
  let pageSize = "12";
  return (
    <div className="App">
      <HashRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <NewsComponent
              category="general"
              country={country}
              apiKey={apiKey}
              pageSize={pageSize}
            />
          </Route>
          <Route exact path="/health">
            <NewsComponent
              category="health"
              country={country}
              apiKey={apiKey}
              pageSize={pageSize}
            />
          </Route>
          <Route exact path="/science">
            <NewsComponent
              category="science"
              country={country}
              apiKey={apiKey}
              pageSize={pageSize}
            />
          </Route>
          <Route exact path="/business">
            <NewsComponent
              category="business"
              country={country}
              apiKey={apiKey}
              pageSize={pageSize}
            />
          </Route>
          <Route exact path="/sports">
            <NewsComponent
              category="sports"
              country={country}
              apiKey={apiKey}
              pageSize={pageSize}
            />
          </Route>
          <Route exact path="/technology">
            <NewsComponent
              category="technology"
              country={country}
              apiKey={apiKey}
              pageSize={pageSize}
            />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
