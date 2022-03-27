import React from "react";
import { connect } from "dva";
import { getMock } from "../services/example";
class IndexPage extends React.Component {
  render() {
    console.log(this.props.list);
    const name = this.props.name;
    const handleClick = () => {
      console.log(this.props);
      this.props.dispatch({
        type: "indexTest/setName",
        data: {
          name: "钢铁侠",
        },
      });
    };
    const handleClickSync = () => {
      this.props.dispatch({
        type: "indexTest/getCnodeSync",
      });
    };
    return (
      <>
        <div onClick={handleClick}>{name}</div>
        <div onClick={handleClickSync}>异步</div>
        <ul>
          {this.props.list.map((item) => {
            return <li>{item.title}</li>;
          })}
        </ul>
      </>
    );
  }
  async componentDidMount() {
    const data = await getMock();
    console.log(data);
  }
}
const mapStateToProps = (state) => {
  return {
    msg: "天安门",
    name: state.indexTest.name,
    list: state.indexTest.cnodeData,
  };
};
IndexPage.propTypes = {};

export default connect(mapStateToProps)(IndexPage);
