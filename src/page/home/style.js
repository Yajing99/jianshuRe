import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow : hidden;
  width : 960px;
  margin : 0 auto;
`;

export const HomeLeft = styled.div`
  width : 625px;
  margin-left : 15px;
  padding-top : 30px;
  float : left;
  .banner-img {
      width : 625px;
      height : 270px;
      margin-bottom : 25px;
  }
`;

export const HomeRight = styled.div`
  width : 280px;
  float : right;
  padding-top : 30px;
`;

export const ListLink = styled.div`
  .list {
    text-decoration none;
  }
`;

export const ListItem = styled.div`
  overflow : hidden;
  width : 625px;
  padding : 15px 2px 20px 0;
  margin-bottom : 15px;
  border-bottom : 1px solid #f0f0f0;
  .list-pic {
      display : block;
      float : right;
      width : 125px;
      height : 100px;
      borer-radius : 8px;
      cursor : pointer;
  }
`;

export const ListInfo = styled.div`
  overflow : hidden;
  width : 500px;
  .list-title {
      font-size : 18px;
      line-height : 1.5;
      font-weight : bold;
      margin-bottom : 14px;
      color : #333;
  }
  .list-desc {
      float : left;
      margin-bottom : 18px;
      line-height : 1.5;
      font-size : 13px;
      color : #999;
      margin-right : 20px;
  }
`;

export const ListLabel = styled.div`
  float : left;
  font-size : 12px;
  .left {
      color : #ea6f5a;
      margin-right : 10px;
      .iconfont {
          font-size : 12px;
          color : #ea6f5a;
          padding-right : 2px;
      }
  }
  .item {
      color : #B4B4B4;
      margin-right : 10px;
      .iconfont {
          font-size : 12px;
          padding-right : 2px;
      }
  }
`;

export const LoadMore = styled.div`
  width : 595px;
  padding : 10px 15px;
  line-height : 20px;
  margin-top : 30px;
  margin-bottom : 60px;
  color : #fff;
  font-size : 15px;
  background-color : #a5a5a5;
  border-radius : 20px;
  text-align : center;
  cursor : pointer; 
`;

export const RecommendWrapper = styled.div`
  margin-bottom : 30px;
  width : 280px;
`;

export const RecommendItem = styled.div`
  height : 50px;
  width : 280px;
  margin-bottom : 10px;
  background : url(${(props) => props.imgUrl}); 
  background-size : contain;
`;

export const WriterWrapper = styled.div`
  overflow : hidden;
  width : 280px;
`;

export const WriterInfoTitle = styled.div`
  font-size : 13px;
  color : #969696;
  line-height : 19px; 

`;

export const WriterInfoSwitch = styled.span`
  float : right; 
  cursor : pointer;
  .iconfont {
    font-size : 13px;
    margin-right : 2px; 
    display : block;
    float : left;
    transform-origin : center center;
    transition : all .2s ease-in;
  }
`; 

export const WriterInfoItem = styled.div`
  overflow : hidden;
  width : 280px;
`;

export const WriterItem = styled.div`
  overflow : hidden;
  width : 280px;
  margin-bottom : 10px;
  margin-top : 10px; 
`;

export const WriterImg = styled.a`
  float : left;
  display : block;
  background : url(${(props) => props.imgUrl}); 
  width : 48px;
  height :48px;
  border-radius : 24px;
  background-size : contain;
`;

export const WriterItemTop = styled.div`

  padding-top : 5px;
  line-height : 20px;
  margin-left : 5px;
  &.left {
  float : left;
  font-size : 14px; 
  color : #333;
  }
  &.right {
  font-size : 13px;
  margin-left : 241px;
  color : #42C02E;
  .iconfont {
    font-size : 13px;
  }  
  }
`;

export const WriterItemBottom = styled.div`
  width : 227px;
  float : left;
  margin-left : 5px;
  color : #969696;
  font-size : 12px;
  line-height : 20px;
  margin-top : 2px;
  margin-bottom : 10px;
`;

export const WriterAll = styled.div`
  width : 280px;
  border : 1px solid #dcdcdc;
  background-color : #f7f7f7;
  color : #787878;
  font-size : 13px;
  border-radius : 4px;
  padding : 7px 7px 7px 12px;
  text-align : center; 
  box-sizing : border-box;
  margin-top : 5px;
`;

export const BackTop = styled.div`
  position : fixed;
  right : 50px;
  bottom : 50px;
  color : #333;
  font-size : 15px;
  border : 1px solid #dcdcdc;
  text-align : center;
  width : 50px;
  line-height : 50px;
  cursor : pointer;
`;