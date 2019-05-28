import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  login : false
});

export default(state = defaultState, action) => {
	switch(action.type) {
	  case constants.GET_LOGIN :
        return state.set('login', action.value);
	  case constants.GET_LOGOUT :
	    return state.set('login', action.value); 
	  default : 
		return state; 
	}
}