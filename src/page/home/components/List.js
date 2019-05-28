import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, ListLabel, LoadMore, ListLink } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
    const { articleList, handleListMore, page } = this.props;
		return (
      <div>
      {
        articleList.map((item, index) => (
          <ListLink>
          <Link to='/detail' key={ index } className='list'>
          <ListItem>
            <img className='list-pic' alt='' src={ item.get('imgUrl') } />
            <ListInfo>
              <h3 className='list-title'>{ item.get('title') }</h3>
              <div className='list-desc'>{ item.get('desc') }</div>
            <ListLabel>
              <span className='left'>
                <span className="iconfont">&#xe62b;</span>
                { item.get('reading') }
              </span>
              <span className='item'>{ item.get('writer') }</span>
              <span className='item'>
                <span className="iconfont">&#xe605;</span>
                { item.get('comment') }
              </span>
              <span className='item'>
                <span className="iconfont">&#xe750;</span>
                { item.get('like') }
              </span>
            </ListLabel>
            </ListInfo>
          </ListItem>
          </Link>
          </ListLink>
        ))
      }
      <LoadMore onClick={ () => handleListMore(page) }>阅读更多</LoadMore>        
      </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
    articleList : state.getIn(['home', 'articleList']),
    page : state.getIn(['home', 'articlePage'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleListMore(page) {
      const action = actionCreators.getListMore(page);
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);