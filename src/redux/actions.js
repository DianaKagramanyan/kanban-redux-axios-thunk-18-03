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
        dispatch({type: "GET_TASKS", payload: res.data})
      })
      .catch((err) =>
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
      .catch((err) =>
        alert("Server Priority is error"))
  }
}
export const moveTask = (id, newStatus) => {
  return (dispatch) => {
    axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {status: newStatus})
      .then((res) => {
        console.log(res)
        dispatch(fetchTasks())
      })
      .catch((err) =>
        alert("Server error"))
  }
}
export const deleteTask = (id) => {
  return (dispatch) => {
    axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
      .then((res) => {
        console.log(res)
        dispatch(fetchTasks())
      })
      .catch((err) =>
        alert("Server error"))
  }
}
export const createTask = (newTask) => {
  return (dispatch) => {
    axios.post(`https://expressjs-server.vercel.app/tasks/`, newTask)
      .then((res) => {
        console.log(res)
        dispatch(fetchTasks())
      })
      .catch((err) =>
        alert("Server error"))
  }
}
export const editTask = (id, updateTask) => {
  return (dispatch) => {
    axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, updateTask)
      .then((res) => {
        console.log(res)
        dispatch(fetchTasks())
      })
      .catch((err) =>
        alert("Server error"))
  }
}
