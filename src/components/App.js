import React from "react";
import "../stylesheets/App.css";
import Editor from "./Editor";
import Calendar from "./Calendar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMood: {
        date: "",
        mood: "",
        message: ""
      },
      Moods: []
    };
    this.getDate = this.getDate.bind(this);
  }

  getDate(e) {
    const section = e.target.getAttribute("data-field");
    console.log(section);
    const currentValue = e.target.value;
    this.setState(prevState => {
      return { editMood: [...prevState.editMood, { [section]: currentValue }] };
    });
  }

  render() {
    console.log(this.state.editMood);
    return (
      <div className="App">
        <header className="App-header">
          <Editor getDate={this.getDate} />
          <Calendar />
        </header>
      </div>
    );
  }
}

export default App;
