import React from "react";
import { connect } from "dva";
import { Link } from "dva/router";
import Child from "../components/Child";
function UserPage(props) {
  const handleClick = () => {
    console.log(props);
  };
  return (
    <>
      <h1>我是用户页</h1>
      <Link to="/">首页</Link>
      <button onClick={handleClick}>跳转首页</button>
      <Child></Child>
    </>
  );
}

UserPage.propTypes = {};

export default connect()(UserPage);
