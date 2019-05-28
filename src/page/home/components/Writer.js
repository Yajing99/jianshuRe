import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
	WriterWrapper, 
	WriterInfoTitle, 
	WriterInfoSwitch, 
	WriterInfoItem,
  WriterImg,
  WriterItem,
	WriterItemTop,
	WriterItemBottom,
  WriterAll 
} from '../style';
import { actionCreators } from '../store';

class Writer extends PureComponent {
  getWrite() {
    const { writerinformation, page } = this.props;
    const newwriterinformation = writerinformation.toJS();
    const writerList = [];
    if(newwriterinformation.length) {
      for(let i = page * 5 ; i < (page+1) * 5; i++) {
        if((newwriterinformation[i].total_wordage / 1000) > 1) {
          newwriterinformation[i].total_wordage = (Math.floor((newwriterinformation[i].total_wordage / 1000.0) * 10)) / 10 + 'k';
        }
        if((newwriterinformation[i].total_like_count / 1000) > 1) {
          newwriterinformation[i].total_like_count = (Math.floor((newwriterinformation[i].total_like_count /1000) * 10)) / 10 + 'k';
        }
        writerList.push(
          <WriterItem key={newwriterinformation[i].nickname}> 
            <WriterImg alt=''  imgUrl={ newwriterinformation[i].avatar } />
            <WriterItemTop className='left'>
              { newwriterinformation[i].nickname }
            </WriterItemTop>
            <WriterItemTop className='right'>
              <span className='iconfont'>&#xe612;</span>
              关注        
            </WriterItemTop>
            <WriterItemBottom>
              <span> 写了{ newwriterinformation[i].total_wordage }字 </span>
              <span> { newwriterinformation[i].total_like_count }喜欢 </span>
            </WriterItemBottom>
          </WriterItem>
        );
      }
    }
    return writerList;
  }

	render() {
    const { handleWriterSwitch, page, totalpage } = this.props;
		return (
			<WriterWrapper>
        <WriterInfoTitle>
          推荐作者
          <WriterInfoSwitch onClick={() => handleWriterSwitch(page, totalpage, this.spinIcon)}>
            <span ref={(icon) => {this.spinIcon = icon}} className='iconfont'>&#xe851;</span>
            换一批
          </WriterInfoSwitch>
        </WriterInfoTitle>
        <WriterInfoItem>
          {this.getWrite()} 
        </WriterInfoItem>
        <WriterAll>
          查看全部 >
        </WriterAll>
			</WriterWrapper>
		);
	}
  
}

const mapStateToProps = (state) => {
  return {
  writerinformation : state.getIn(['home', 'writerinformation']),
  page : state.getIn(['home', 'page']),
  totalpage : state.getIn(['home', 'totalpage'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleWriterSwitch(page, totalpage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if(page < totalpage-1) {
        dispatch(actionCreators.pageSwitch(page + 1));
      } else {
        dispatch(actionCreators.pageSwitch(0));
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Writer);