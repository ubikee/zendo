import React, { Component, PropTypes, Children } from 'react';

class DomainProvider extends Component {

  static propTypes = {
    domain: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    domain: PropTypes.object.isRequired,
  }

  getChildContext() {
   const { domain } = this.props;
   return { domain }
  }

  render() {
    return Children.only(this.props.children)
  }
}

const DomainAware = (ComponentToWrap) => {

  return class DomainComponent extends Component {

    static contextTypes = {
      domain: PropTypes.object.isRequired,
    }

    render() { console.log('DOMAINAWARE', this.props)
      const { domain } = this.context;
      return (
        <ComponentToWrap {...this.props} domain={domain} />
      )
    }
  }
}

export { DomainProvider, DomainAware };
