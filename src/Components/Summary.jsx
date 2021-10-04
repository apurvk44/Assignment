import { PureComponent } from "react";
class Summary extends PureComponent {
  constructor(props) {
    super(props);
  }
  markup = () => {
    return { __html: this.props.curr_obj["show"]["summary"] };
  };
  render = () => {
    return (
      <div className="card">
        <div className="card-header">{this.props.curr_obj["show"]["name"]}</div>
        <div className="card-body">
          <h5 className="card-title">
            <span>premiered : {this.props.curr_obj["show"]["premiered"]}</span>
            <span style={{ display: "block" }}>
              Ended : {this.props.curr_obj["show"]["ended"] ?? "Still Running"}
            </span>
          </h5>
          <p className="card-text" dangerouslySetInnerHTML={this.markup()}></p>
          <button onClick={() => this.props.back()} className="btn btn-primary">
            Go back
          </button>
        </div>
      </div>
    );
  };
}
export default Summary;
