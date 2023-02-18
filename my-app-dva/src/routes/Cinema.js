import { connect } from "dva";
import React, { useEffect } from "react";

function Cinema(props) {
  useEffect(() => {
    if (!props.list.length) {
      props.dispatch({
        type: "maizuo/getCinemaList",
      });
    } else {
      console.log("缓存");
    }
  }, []);
  return (
    <div>
      <ul>
        {props.list.map((item) => (
          <li key={item.cinemaId}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  list: state.maizuo.list,
});

export default connect(mapStateToProps)(Cinema);
