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
import { Link } from 'react-router-dom';

class Logging extends PureComponent {
  render() {
  	return (
      <LoginWrapper>
        <LoginWrite>
        <LoginChooseAll>
         <Link to='/login' className='login'>
           <LoginChoose>登录</LoginChoose>
         </Link>
         <LoginChoose>*</LoginChoose>
         <LoginChoose className='logging'>注册</LoginChoose>
         </LoginChooseAll>
         <span className="iconfont people">&#xe602;</span>
         <Input placeholder='账号' />
         <span className="iconfont password">&#xe6df;</span>
         <Input placeholder='密码' type='password' />
         <LoginLoad>
           注册
         </LoginLoad>
         <LoginOtherLoad>
           -------------社交账号直接注册----------
           <LoginOther>
             <span className="iconfont weixin">&#xeb16;</span>
             <span className="iconfont qq">&#xe63e;</span>
           </LoginOther>
         </LoginOtherLoad>
        </LoginWrite>
      </LoginWrapper>
      );
  }
}

export default connect(null, null)(Logging);