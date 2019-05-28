import React, { PureComponent } from 'react';
import { 
  LoginWrapper,
  LoginWrite, 
  LoginChoose, 
  Input, 
  LoginChooseAll, 
  LoginLoad,
  LoginOtherLoad,
  LoginOther 
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect,Link } from 'react-router-dom';

class Login extends PureComponent {
  render() {
    if(!this.props.login) {
  	return (
      <LoginWrapper>
        <LoginWrite>
        <LoginChooseAll>
           <LoginChoose className='login'>登录</LoginChoose>
           <LoginChoose>*</LoginChoose>
           <Link to='/logging' className='logging'>
             <LoginChoose>注册</LoginChoose>
           </Link>
         </LoginChooseAll>
         <span className="iconfont people">&#xe602;</span>
         <Input placeholder='账号' ref={(input)=>{ this.account=input }}/>
         <span className="iconfont password">&#xe6df;</span>
         <Input placeholder='密码' type='password' ref={(input)=>{ this.password=input }}/>
         <LoginLoad onClick={ ()=>this.props.handleInputLoad(this.account, this.password)}>
           登录
         </LoginLoad>
         <LoginOtherLoad>
           -------------社交账号登录----------
           <LoginOther>
             <span className="iconfont weibo">&#xe64c;</span>
             <span className="iconfont weixin">&#xeb16;</span>
             <span className="iconfont qq">&#xe63e;</span>
           </LoginOther>
         </LoginOtherLoad>
        </LoginWrite>
      </LoginWrapper>
      );
      } else {
        return <Redirect to='/' />
      }
  }
}

const mapState = (state) => {
  return {
    login : state.getIn(['login','login'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleInputLoad(accountElem, passwordElem) {
      dispatch(actionCreators.getLogin(accountElem.value, passwordElem.value));
      
    }
  }
}

export default connect(mapState, mapDispatch)(Login);