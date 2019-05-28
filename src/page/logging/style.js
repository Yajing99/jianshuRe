import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position : absolute;
  left : 0;
  right : 0;
  bottom : 0;
  top : 56px;
  background-color : #f1f1f1;
  height : 100%;
  z-index : 0;
`;

export const LoginWrite = styled.div` 
  position:relative;
  margin : 80px auto 0 auto;
  width : 300px;
  height : 350px;
  padding : 50px 50px;
  background-color : #fff;
  border-radius : 4px;
  box-shadow : 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  .people {
    position: absolute;
    top : 134px;
    left : 61px;
    color : #969696;
  }
  .password {
    position : absolute;
    top : 184px;
    left : 61px;
    color : #969696;
  }
`;

export const LoginChooseAll = styled.div`
  margin : 10px auto 0 auto; 
  width : 300px;
  text-align : center;
  margin-bottom : 40px;
  .login {
    text-decoration none;
  }
`;

export const LoginChoose = styled.span`
  color : #969696;
  text-align : center;
  font-size : 18px;
  padding : 10px 10px;
  cursor: pointer;
  &.logging {
    color : #ea6f5a;
    font-weight : 700;
    border-bottom: 2px solid #ea6f5a;
  }
`;

export const Input = styled.input`
  border-bottom : none;
  border-radius: 4px 4px 0 0;
  height: 50px;
  border: 1px solid #c8c8c8;
  background-color: hsla(0,0%,71%,.1);
  width: 100%;
  padding: 4px 12px 4px 35px;
  box-sizing : border-box;
  font-size : 14px;
  color : #969696;
  z-index : 0;
`;

export const LoginLoad = styled.div`
  width: 100%;
  box-sizing : border-box;
  padding : 9px 18px;
  border-radius : 25px;
  margin-top : 40px;
  background-color : #42c021;;
  font-size : 18px;
  color : #fff;
  text-align : center; 
  cursor : pointer; 
`;

export const LoginOtherLoad = styled.div`
  text-align : center;
  font-size : 12px;
  color : #B5B5B5;
  margin-top : 30px;
  width : 300px;
`;

export const LoginOther = styled.div`
  margin-top : 20px;
  .weixin {
    font-size : 24px;
    margin-left : 20px;
    color : #42c021;
  }
  .qq {
    font-size : 24px;
    margin-left : 40px;
    color : #3194d0;
  }
`;