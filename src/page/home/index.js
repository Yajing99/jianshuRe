import React, { PureComponent } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { 
	HomeWrapper, 
	HomeLeft, 
	HomeRight 
} from './style';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { BackTop } from './style';

class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

	render() {
    const { showScroll } = this.props;
		return (
			<HomeWrapper>
        <HomeLeft>
          <img alt='' className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4655/e195b16a61ed7f4df07f749db44c65fa912bbd30.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
            { showScroll ? <BackTop onClick={ this.handleScrollTop } > ∧ </BackTop> : null }
      </HomeWrapper>
		);
	}

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }

}

const mapState = (state) => ({
  showScroll : state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
	changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
	},
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapState, mapDispatch)(Home);