
export const reducer = (state, action) =>{
    switch (action.type) {
        case 'SET_DATA':
          return {
            ...state,
            data: action.payload,
          };
        // Add other cases if needed
        default:
          return state;
      }
}