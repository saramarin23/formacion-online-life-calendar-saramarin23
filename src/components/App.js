import React from "react";
import "../stylesheets/App.css";
import Editor from "./Editor";
import Calendar from "./Calendar";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // editMood: {
      date: "",
      mood: "",
      message: "",
      // },
      moods: []
    };
    this.getDate = this.getDate.bind(this);
    this.getMood = this.getMood.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  getDate(e) {
    const section = e.target.getAttribute("data-field");
    // console.log(section);
    let targetValue = e.target.value;
    // console.log(targetValue);
    this.setState({ date: targetValue });
  }

  getMood(e) {
    let targetValue = e.target.value;
    this.setState({ ...this.state.editMood, mood: targetValue });
    if (targetValue === ":(") {
    } else {
    }
  }

  getMessage(e) {
    console.log(e.target.value);
    let targetValue = e.currentTarget.value;
    this.setState({ ...this.state.editMood, message: targetValue });
  }

  submitData() {
    localStorage.setItem("Mood", JSON.stringify(this.state));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {/* <header className="App-header"></header> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Calendar moods={this.state.moods} />;
            }}
          />
          <Route
            path="/editor"
            render={() => {
              return (
                <Editor
                  getDate={this.getDate}
                  getMood={this.getMood}
                  getMessage={this.getMessage}
                  submitData={this.submitData}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
