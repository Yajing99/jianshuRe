import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HeadWrapper, 
         SearchWrapper, 
         Addition,
         Button, 
         Logo,  
         NavSearch, 
         SearchInfo,
         SearchInfoTitle,
         SearchInfoSwitch,
         SearchInfoItem,
         SearchInfoList,
         Nav, 
         NavItem } from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { actionCreators as logActionCreators } from '../../page/login/store';

class Header extends PureComponent {


  getListArea() {
    const newList = this.props.list.toJS();
    const pageList = [];
    if(newList.length) {
    for(let i = this.props.page * 10; i < (this.props.page + 1) * 10 && i < newList.length; i++) {
      pageList.push(
         <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }
    }
    if(this.props.focused || this.props.mouseIn) {
    return (
    <SearchInfo 
      onMouseEnter={this.props.handleMouseEnter}
      onMouseLeave={this.props.handleMouseLeave}
    >
    <SearchInfoTitle>
       热门搜索 
       <SearchInfoSwitch
         onClick={() => this.props.handleChangePage(this.props.page, this.props.totalpage, this.spinIcon)}
       >
       <span ref={(icon) => {this.spinIcon=icon}} className="iconfont spin">&#xe851;</span>
       换一批
       </SearchInfoSwitch>
    </SearchInfoTitle>
    <SearchInfoList>
      { pageList }
    </SearchInfoList>
    </SearchInfo> );
     } else {
     return null;
     }
  }

  render() {
		return (
		<HeadWrapper>
    <Logo />
    <Nav>
    <NavItem className='left active'>首页</NavItem>
    <NavItem className='left'>下载App</NavItem>
    {
      this.props.login ? 
        <NavItem className='right' onClick={ this.props.logout }>退出</NavItem> : 
        <Link to='/login'><NavItem className='right'>登录</NavItem></Link> 
    }
    <NavItem className='right'>
    <span className="iconfont">&#xe636;</span>          
    </NavItem>
    <SearchWrapper>
    <CSSTransition
       in = {this.props.focused}
       timeout = {300}
       classNames = 'slide' 
    >
    <NavSearch
      className = {this.props.focused ? 'focused' : ''}
      onFocus = {() => this.props.handleInputFocus(this.props.list)}
      onBlur = {this.props.handleInputBlur}
    ></NavSearch>
    </CSSTransition>
    <span className = {this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
      &#xe637;
    </span>
      {this.getListArea()}
    </SearchWrapper>
    <Addition>
    <Link to='/write'>
      <Button className = 'writ'>
      <span className = "iconfont">&#xe626;</span>
      写文章
      </Button>
    </Link>
    <Link to='/logging'>
      <Button className = 'reg'>注册</Button>
    </Link>
    </Addition>
    </Nav>
		</HeadWrapper>
		)
  }
}

const mapStateToProps = (state) => {
   return {
      focused : state.getIn(['header', 'focused']),
      list : state.getIn(['header', 'list']),
      page : state.getIn(['header', 'page']),
      mouseIn : state.getIn(['header', 'mouseIn']),
      totalpage : state.getIn(['header', 'totalpage']),
      login : state.getIn(['login', 'login']) 
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      handleInputFocus(list){
        (list.size === 0) && (dispatch(actionCreators.getList()));
        dispatch(actionCreators.searchFocus());
      },
      handleInputBlur(){
        dispatch(actionCreators.searchBlur());
      },
      handleMouseEnter(){
        dispatch(actionCreators.mouseEnter());
      },
      handleMouseLeave(){
        dispatch(actionCreators.mouseLeave());
      },
      handleChangePage(page, totalpage, spinIcon) {
        let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
        if(originAngle) {
          originAngle = parseInt(originAngle, 10);
        } else {
          originAngle = 0;
        }
        spinIcon.style.transform = 'rotate(' + ( 360 + originAngle ) + 'deg)';
        if(page < totalpage-1) {
          dispatch(actionCreators.changePage(page + 1));
        } else {
          dispatch(actionCreators.changePage(0)); 
        } 
      },
      logout() {
        dispatch(logActionCreators.getLogout());
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);