import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from "react-redux";
import {fetchStatuses, fetchTasks} from "./redux/actions";
import {useEffect} from "react";
import Column from "./components/Column";
import './App.css'


function App(props) {
  useEffect(() => {
    props.getStatuses();
    props.getTasks()
  }, [])

  return (
    <div className="App">
      <h1>{props.appName}</h1>
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
  getTasks:()=>dispatch(fetchTasks())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);