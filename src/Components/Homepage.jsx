import { PureComponent } from "react";

class Homepage extends PureComponent {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <div className="flex-column">
        {this.props.result.map((val) => {
          return (
            <div className="card" key={val["show"]["id"]}>
              <div className="card-header">{val["show"]["name"]}</div>
              <div className="card-body">
                <h5 className="card-title">
                  <span>premiered : {val["show"]["premiered"]}</span>
                  <span style={{ display: "block" }}>
                    Ended : {val["show"]["ended"] ?? "Still Running"}
                  </span>
                </h5>
                <div className="card-text">
                  <div>Type: {val["show"]["type"]}</div>
                  <div>Language : {val["show"]["language"]}</div>
                  <div>
                    Genre :
                    {val["show"]["genres"].map((val, i) => {
                      return (
                        <span
                          style={{ paddingLeft: "5px", paddingRight: "5px" }}
                          key={i}
                        >
                          {val}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    this.props.click(val["show"]["id"]);
                  }}
                >
                  Get More Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
}
export default Homepage;
