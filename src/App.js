import "./App.css";
import About from "./components/layout/About";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/layout/Projects";
import Resume from "./components/layout/Resume";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Footer from "./components/layout/Footer";
import "./transitions.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route
            path="/about"
            element={
              <TransitionGroup>
                <CSSTransition
                  key={window.location.location}
                  classNames="page-enter page-enter-active"
                  timeout={300}
                >
                  <About />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
