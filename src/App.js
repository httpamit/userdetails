import React from "react";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import UserPage from "./components/UserPage";
import AboutPage from "./components/AboutPage";
import PageNotFound from "./components/PageNotFound";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={UserPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/:userId" component={UserDetail} />
              <Route component={PageNotFound} />
            </Switch>
          </BrowserRouter>
        </Row>
      </Container>
    </>
  );
}

export default App;
