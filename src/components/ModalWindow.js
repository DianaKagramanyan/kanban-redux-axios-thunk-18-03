import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {connect} from "react-redux";
import {createTask, deleteTask, editTask} from "../redux/actions";

function ModalWindow(props) {

  const [name, setName] = useState(props.modalData.modalTitle === 'Create task'
    ? ''
    : props.modalData.task?.name)
  const [description, setDescription] = useState(props.modalData.modalTitle === 'Create task'
    ? ''
    : props.modalData.task?.description)
  const [status, setStatus] = useState(props.modalData.modalTitle === 'Create task'
    ? props.statuses[0].title
    : props.modalData.task?.status)
  const [priority, setPriority] = useState(props.modalData.modalTitle === 'Create task'
    ? props.priorities[0]
    : props.modalData.task?.priority)

  console.log(props.modalData.task)

  const toggle = () => {
    props.closeModalWindow()
  }

  function yesButtonHandler() {
    toggle();
    if (props.modalData.modalTitle === 'Delete task') {
      props.onDeleteTask(props.modalData.task._id)
    }
    if (props.modalData.modalTitle === 'Create task') {
      const newTask = { name, description, status, priority}
      props.onCreateTask(newTask)
    }
    if (props.modalData.modalTitle === 'Edit task') {
      const updateTask = {name, description, status, priority}
      props.onUpdateTask(props.modalData.task?._id, updateTask)
    }
  }

  useEffect(() => {
    console.log('Hello')
  }, [])

  return (

    <Modal isOpen={props.modalData.open} toggle={toggle}>
      <ModalHeader toggle={toggle}>{props.modalData.modalTitle}</ModalHeader>
      <ModalBody>
        {props.modalData.modalTitle === 'Delete task' &&
          <div>Are you sure you want to delete <b>{props.modalData.task.name}</b> ?</div>}


        {(props.modalData.modalTitle === 'Create task' || props.modalData.modalTitle === 'Edit task') &&
          <div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">  Name  </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" className="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">  Description  </span>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text" className="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"/>
            </div>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="form-select" aria-label="Disabled select example">
              {props.statuses.map(el =>
                <option key={el._id} value={el.title}>{el.title}</option>
              )}
            </select>
            <br/>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="form-select" aria-label="Disabled select example">

              {props.priorities.map((el, ind) =>
                <option key={ind} value={el}>{el}</option>
              )}
            </select>
          </div>

        }
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={yesButtonHandler}>
          Yes
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  modalData: state.modalData,
  priorities: state.priorities,
  statuses: state.statuses
})
const mapDispatchToProps = (dispatch) => ({
  closeModalWindow: () => dispatch({type: 'MODAL_TOGGLE'}),
  onDeleteTask: (id) => dispatch(deleteTask(id)),
  onCreateTask: (newTask) => dispatch(createTask(newTask)),
  onUpdateTask: (id, updateTask) => dispatch(editTask(id, updateTask))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);