import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeadWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href : '/'
})`
  position : absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width : 960px;
  height : 100%;
  margin : 0 auto;
  padding-right : 70px;
  box-sizing : border-box; 
`;

export const NavItem = styled.div`
  line-height : 56px;
  padding: 0 15px;
  font-size : 17px;
  color :#333;
  &.left {
    float : left;
  }
  &.right {
    float : right;
    color : #969696;
  }
  &.active {
    color : #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float : left;
  position : relative;
  .zoom{
    position : absolute;
    right : 5px;
    bottom : 5px;
    width : 30px;
    line-height : 30px;
    border-radius : 15px;
    text-align : center;
    &.focused {
      background-color : #777;
      color : #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder : '搜索'
})`
  width : 160px;
  height : 38px;
  margin-top : 9px;
  margin-left : 20px;
  padding : 0 40px 0 20px;
  border : none;
  outline : none;
  border-radius : 19px;
  box-sizing : border-box;
  background-color : #eee;
  font-size : 15px;
  color : #666;
  &::placeholder{
    color : #999;
  }
  &.focused {
    width : 240px;
  }
  &.slide-enter {
    transition : all .3s linear
  }
  &.slide-enter-active {
    width : 240px 
  }
  &.slide-exit {
    transition : all .3s linear
  }
  &.slide-exit-active {
    width : 160px
  }
`;

export const SearchInfo = styled.div`
  position : absolute;
  left : 20px;
  top : 56px;
  width : 200px;
  padding : 0 20px;
  background-color : #fff;
  box-shadow : 0 0 8px rgba(0, 0, 0, .2);
  z-index : 1;
`;

export const SearchInfoTitle = styled.div`
  margin-top :20px;
  color : #969696;
  font-size : 14px;
  line-height : 20px;
  margin-bottom : 10px;
`;

export const SearchInfoSwitch = styled.span`
  float : right;
  font-size : 13px;
  cursor : pointer;
  .spin {
    font-size : 12px;
    margin-right : 2px;
    display : block;
    float : left;
    transition : all .2s ease-in;

    transform-origin : center center; 
  }
`;

export const SearchInfoList = styled.div`
  overflow : hidden;
  margin-top : 15px;
`;

export const SearchInfoItem = styled.a`
  display : block;
  float : left;
  padding : 3px 6px;
  color : #787878;
  border : 1px solid #ddd;
  font-size : 13px;
  margin-bottom : 15px;
  margin-right : 6px;
  border-radius : 3px;
`;

export const Addition = styled.div`
  position : absolute;
  right : 0;
  top : 0;
  height : 56px;
`;

export const Button = styled.div`
  float : right;
  line-height : 38px;
  margin-top : 9px;
  margin-right : 20px;
  border-radius : 19px;
  padding : 0 20px;
  border : 1px solid #ec6149;
  font-size : 15px;
  &.reg {
    width : 40px;
    text-align : center;
    color : #ec6149;
    cursor : pointer;

  }
  &.writ {
    text-align : right;
    background-color : #ea6f5a;
    color : #fff;
    cursor : pointer;
  }
`;