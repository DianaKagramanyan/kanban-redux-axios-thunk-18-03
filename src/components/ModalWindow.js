import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {connect} from "react-redux";
import {deleteTask} from "../redux/actions";

function ModalWindow(props) {

  const toggle = () => {
    props.closeModalWindow()
  }

  function yesButtonHandler() {
    toggle();
    if (props.modalData.modalTitle === 'Delete task') {
      props.onDeleteTask(props.modalData.task._id)
    }
  }

  return (

    <Modal isOpen={props.modalData.open} toggle={toggle}>
      <ModalHeader toggle={toggle}>{props.modalData.modalTitle}</ModalHeader>
      <ModalBody>
        {props.modalData.modalTitle === 'Delete task' &&
          <div>Are you sure you want to delete <b>{props.modalData.task.name}</b> ?</div>}
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
  modalData: state.modalData
})
const mapDispatchToProps = (dispatch) => ({
  closeModalWindow: () => dispatch({type: 'MODAL_TOGGLE'}),
  onDeleteTask: (id) => dispatch(deleteTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);