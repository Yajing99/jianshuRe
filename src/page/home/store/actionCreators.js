import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const pageSwitch = (page) => ({
  type : constants.WRITER_SWITCH,
  page
});

export const getHomeInfo = () => {
	return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
	    const result = res.data.data;
	    const action = {
	      type : constants.CHANGE_HOME_DATA,
	      articleList : result.articleList,
	      writerinformation : result.writerinformation
	    }
	    dispatch(action);
    }).catch((err) => {
    console.log('error');
    })
	};
};

export const getListMore = (page) => {
	return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
	    const result = res.data.data;
	    const action = {
	      type : constants.ADD_HOME_LIST,
	      list : fromJS(result),
          page : page+1
	    }
	    dispatch(action);
    }).catch((err) => {
    console.log('error');
    })		
	}
};

export const toggleTopShow = (show) => ({
  type : constants.CHANGE_TOP_SHOW,
  show 
});