import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
   articleList : [],
   articlePage : 1,
   writerinformation : [],
   page : 0,
   totalpage : 1,
   showScroll : false
});

export default(state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA : 
      return state.merge({
        articleList : fromJS(action.articleList),
        writerinformation : fromJS(action.writerinformation),
        totalpage : action.writerinformation.length / 5
      });
    case constants.ADD_HOME_LIST : 
      return state.merge({
        articleList : state.get('articleList').concat(action.list),
        articlePage : action.page
      });
    case constants.WRITER_SWITCH :
      return state.set('page', action.page);
    case constants.CHANGE_TOP_SHOW :
      return state.set('showScroll', action.show);
    default : 
      return state;
  }
};