const AddCode = (state, action) => {
    state.codes.push({
      id: action.id,
      project: action.project,
      type: action.codetype,
      description: action.description
  })
  return {
      ...state,
      isAddTrackingOpen: false
  }
}

const Toggle = (state, action) => {
  switch (action.switch) {
    case 'On':
        return {
            ...state,
            isAddTrackingOpen: true
        }
    case 'Off':
        return {
            ...state,
            isAddTrackingOpen: false
        }
    default:
        return state
  }
}

const reducerSwitch = {
  "Add": AddCode,
  "Toggle": Toggle
}

export const codes = (state, action) => {
  return reducerSwitch[action.operation](state, action)
}