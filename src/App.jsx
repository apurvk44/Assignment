import { Component } from "react";
import dom from "react-dom";
import Homepage from "./Components/Homepage";
import Summary from "./Components/Summary";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Status: "loading",
      Result: [],
      showSummary: false,
      curr_obj: {},
    };
  }
  componentDidMount() {
    if (this.state.Status == "loading") {
      const url = "https://api.tvmaze.com/search/shows?q=all";
      fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then((res) => {
          return res.text();
        })
        .then((res) => {
          this.setState({
            Status: "loaded",
            Result: JSON.parse(res),
            showSummary: this.state.showSummary,
            curr_obj: this.state.curr_obj,
          });
        });
    }
  }
  click = (id) => {
    let a = this.state.Result.find((val) => {
      return val["show"]["id"] == id;
    });
    this.setState({
      Status: this.state.Status,
      Result: this.state.Result,
      showSummary: true,
      curr_obj: a,
    });
  };
  back = () => {
    this.setState({
      Status: this.state.Status,
      Result: this.state.Result,
      showSummary: false,
      curr_obj: this.state.curr_obj,
    });
  };
  render = () => {
    return (
      <div className="container">
        {this.state.showSummary ? (
          <Summary curr_obj={this.state.curr_obj} back={this.back} />
        ) : (
          <Homepage result={this.state.Result} click={this.click} />
        )}
      </div>
    );
  };
}
dom.render(<App />, document.getElementById("react-root"));
