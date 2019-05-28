import * as constants from './constants';
import axios from 'axios';

export const getLogin = (account, password) => {
  return (dispatch) => {
  	axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
  		const result = res.data.data;
  		if(result) {
  			const action = {
  				type : constants.GET_LOGIN,
  				value : result
  			}
        dispatch(action);
  		} else {
  			console.log("登录失败");
  		}
  	}).catch ((err) =>{
        console.log("error");
    })
  } 
};

export const getLogout = () => ({
  type : constants.GET_LOGOUT,
  value : false 
});