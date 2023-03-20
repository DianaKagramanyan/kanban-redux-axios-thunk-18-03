import React from 'react';
import {changePriorityTasks, fetchStatuses, fetchTasks} from "../redux/actions";
import {connect} from "react-redux";

const Card = (props) => {

  return (

    <div className="card" >
      <div className="card-header">
        {props.task.name}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.task.description}</li>
        <li className="list-group-item">Priority: {props.task.priority}
          <button
            disabled={props.task.priority==props.priorities[props.priorities.length-1]}
            onClick={()=>props.changePriority(props.task._id,{priority: +props.task.priority + 1})}
            type="button" className="btn btn-outline-info">↑</button>
          <button
            disabled={props.task.priority==props.priorities[0]}
            onClick={()=>props.changePriority(props.task._id,{priority: +props.task.priority - 1})}
            type="button" className="btn btn-outline-info">↓</button>
        </li>
        <li className="list-group-item">Status: {props.task.status}
          <button type="button" className="btn btn-outline-info">←</button>
          <button type="button" className="btn btn-outline-info">→</button>
          <hr/>
          <button type="button" className="btn btn-outline-danger">Delete</button>
          <button type="button" className="btn btn-outline-warning">Edit</button>
        </li>
      </ul>
    </div>



  );
};
const mapStateToProps = (state) => ({
  priorities:state.priorities
})
const mapDispatchToProps = (dispatch) => ({
  changePriority: (id,updatePriorityTask) => dispatch(changePriorityTasks(id,updatePriorityTask))
})
export default connect(mapStateToProps,mapDispatchToProps)(Card);