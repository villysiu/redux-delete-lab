import uuid from "uuid";

export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
      const band = {
        id: uuid(),
        name: action.name.name,
      };
      console.log(action.name.name)
      return { ...state, bands: state.bands.concat(band) };

      //return {...state, bands: state.bands.concat(action.name)}

      case "DELETE_BAND":
        console.log(action.id)
        return { ...state, bands: state.bands.filter((band) => band.id !== action.id)}
    
  
    default:
      return state
  
  }
};
