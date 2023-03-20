import axios from "axios";

export const fetchStatuses = () => {
  return (dispatch) => {
    axios.get('https://expressjs-server.vercel.app/statuses')
      .then((res) => {
        dispatch({type: "GET_STATUSES", payload: res.data})
      })
      .catch((err) =>
        alert("Server Statuses is error"))
  }
}
export const fetchTasks = () => {
  return (dispatch) => {
    axios.get('https://expressjs-server.vercel.app/tasks')
      .then((res) => {
        console.log(res.data)
        dispatch({type: "GET_TASKS", payload: res.data})
      })
      .catch((err)=>
        alert("Server Tasks is error"))
  }
}

export const changePriorityTasks = (id, updatePriorityTask) => {
  return (dispatch) => {

    axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, updatePriorityTask)
      .then((res) => {
        console.log(res)
        dispatch(fetchTasks())
      })
      .catch((err)=>
        alert("Server Priority is error"))
  }
}