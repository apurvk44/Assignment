import { Component } from "react";
import dom from "react-dom";
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
  componentDidMount = () => {
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
          let p = document.getElementById("PreLoad");
          // p.classList.remove(
          //   "d-flex justify-content-center align-items-center "
          // );
          p.style.display = "none";
          document.getElementById("react-root").style.display = "block";
          document.querySelector("body").style.overflow = "auto";
        });
    }
  };
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
    return <div className="container"></div>;
  };
}
dom.render(<App />, document.getElementById("react-root"));
