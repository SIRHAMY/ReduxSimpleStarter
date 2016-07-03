// State arg is not application state, only state that
// this reducer is responsible for

export default function(state = null, action) {
    
    //Checking to see if this reducer cares about the action
    // that was dispatched
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    
    return state;
}