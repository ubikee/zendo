import React from 'react';

// styles
import './page.scss'

// Page Component
class Page extends React.Component {

  state = {
    threshold0: false,
    threshold: false,
  }

  componentDidMount() {
    if (this.props.threshold) {
      const threshold = this.props.threshold;
      //this.refs.scroller.addEventListener('scroll', this.handleScroll(threshold));
    }
  }

  componentWillUnmount() {
    if (this.props.threshold) {
      //this.refs.scroller.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = (threshold) => {
    return (event) => {
      const scrollTop = event.target.scrollTop;
      this.setState({
        threshold0 : scrollTop > 0 &&  scrollTop < threshold,
        threshold : scrollTop > threshold
      })
    }
  }

  render() {

    const fixedHeaderStyle  = this.state.threshold0       ? 'over' : '';
    const stickyHeaderStyle = this.state.threshold        ? 'sticky' : '';
    const fixedHeader       = this.props.fixedHeader      ? this.props.fixedHeader : '';
    const scrollableHeader  = this.props.scrollableHeader ? this.props.scrollableHeader : '';
    const stickyHeader      = this.props.stickyHeader     ? this.props.stickyHeader : '';
    const backgroundImage   = this.props.backgroundImage  ? this.props.backgroundImage : '';
    return (
      <div className={`page ${this.props.className}`} onDragOver={this.props.onDragOver} style={{ backgroundImage: backgroundImage }}>
        <div className={fixedHeaderStyle}>{fixedHeader}</div>
      <div style={{ overflow: 'auto'}} onScroll={this.handleScroll(this.props.threshold)}>
          <div>{scrollableHeader}</div>
          <div id="stickyHeader" className={stickyHeaderStyle}>{stickyHeader}</div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Page;
