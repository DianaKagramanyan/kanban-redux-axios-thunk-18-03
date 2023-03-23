const initialState = {
  statuses: [],
  tasks: [],
  priorities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  appName: "Kanban Board",
  modalData: {open: false, modalTitle: '', task: {}},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STATUSES":
      return {...state, statuses: action.payload}
    case "GET_TASKS":
      return {...state, tasks: action.payload}
    case 'MODAL_TOGGLE':
      return {
        ...state,
        modalData: {
          ...state.modalData,
          open: !state.modalData.open,
          modalTitle: action.payload?.modalTitle,
          task: action.payload?.task
        }
      }
    default:
      return state
  }
}
export default reducer;