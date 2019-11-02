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

  componentDidMount() {
    const savedMoods = JSON.parse(localStorage.getItem("datesSaved"));
    this.setState({
      moods: savedMoods
    });
  }

  getDate(e) {
    // console.log(section);
    let targetValue = e.target.value;
    // this.setState({ date: targetValue });
    this.setState(prevState => {
      return {
        date: targetValue
      };
    });
  }

  getMood(e) {
    // const section = e.target.getAttribute("data-field");
    let targetValue = e.target.value;
    this.setState(prevState => {
      return { mood: targetValue };
    });
    if (targetValue === ":(") {
    } else {
    }
  }

  getMessage(e) {
    // console.log(e.target.value);
    let targetValue = e.currentTarget.value;
    // this.setState({ ...this.state.editMood, message: targetValue });
    this.setState(prevState => {
      return { message: targetValue };
    });
  }

  submitData() {
    localStorage.setItem("datesSaved", JSON.stringify(this.state));
    // let moods = [this.state.moods];
    // let moods = [];
    this.setState(prevState => {
      return {
        moods: [[this.state.date, this.state.mood, this.state.message]]
      };
    });
    console.log(this.state.moods);
    // for (let day in moods) {
    // moods.push(moods);
    // }
  }

  render() {
    console.log(this.state.moods);
    return (
      <div className="App">
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
