import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from "react-redux";
import {fetchStatuses, fetchTasks} from "./redux/actions";
import {useEffect} from "react";
import Column from "./components/Column";
import './App.css'
import ModalWindow from "./components/ModalWindow";


function App(props) {
  useEffect(() => {
    props.getStatuses();
    props.getTasks()
  }, [])

  return (
    <div className="App">
      <h1>{props.appName}</h1>
      <button
        onClick={props.openModal}
        type="button" className="btn btn-outline-info">Create Task</button>
      <ModalWindow/>
      <div className="container text-center">
        <div className="row align-items-start">
          {props.statuses.map(status =>
            <Column
              key={status._id}
              status={status}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  statuses: state.statuses,
  appName: state.appName
})
const mapDispatchToProps = (dispatch) => ({
  getStatuses: () => dispatch(fetchStatuses()),
  getTasks:()=>dispatch(fetchTasks()),
  openModal: ()=> dispatch({type: 'MODAL_TOGGLE', payload: {modalTitle: 'Create new task'}})
})
export default connect(mapStateToProps, mapDispatchToProps)(App);