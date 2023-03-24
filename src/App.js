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
        onClick={() => props.openModal('Create task')}
        type="button" className="btn btn-outline-info">Create Task
      </button>

      {props.modalIsOpen && <ModalWindow/>}

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
  appName: state.appName,
  modalIsOpen: state.modalData.open
})
const mapDispatchToProps = (dispatch) => ({
  getStatuses: () => dispatch(fetchStatuses()),
  getTasks: () => dispatch(fetchTasks()),
  openModal: (modalTitle) => dispatch({type: 'MODAL_TOGGLE', payload: {modalTitle: modalTitle}})
})
export default connect(mapStateToProps, mapDispatchToProps)(App);