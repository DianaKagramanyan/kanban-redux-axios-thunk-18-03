import React from 'react';
import {connect} from "react-redux";
import Card from "./Card";

const Column = (props) => {

  return (

    <div className="col">
      {props.status.title}
      {props.tasks.filter(task=> task.status===props.status.title)
        .map(el=>
          <Card
            key={el._id}
            task={el}
          />
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks
})
export default connect(mapStateToProps)(Column);