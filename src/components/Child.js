import { withRouter } from "dva/router";

function Child(props) {
  const handleClick = () => {
    console.log(props);
  };
  return <button onClick={handleClick}>我是child</button>;
}
export default withRouter(Child);
