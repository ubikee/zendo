import React from 'react'
import { Icon, Field } from '../components/index';
import './search.scss';

const Query = (props) => {
  return (
    <div></div>
  )
}

Query.propTypes = {
  resource: React.PropTypes.instanceOf(URL)
}


class SearchBox extends React.Component {

  state = {
    criterias: [
    //  { name: 'query1', value: 'value1' },
    //  { name: 'query2', value: 'value2' },
    ]
  }

  renderCriteriaBox = (criteria) => {
    return (
      <span className="criteriabox"><span className="queryname">{criteria.name}:</span>{criteria.value}<span className="material-icons">close</span> </span>
    )
  }

  renderQueryBox = () => {
    return (
      <nav className="querybox">
        {this.state.criterias.map(this.renderCriteriaBox)}
        <Field label={this.props.label} value={this.props.value} onChange={this.props.onChange} />
      </nav>
    )
  }

  renderResults = () => {
    return (
      <div>
        <dl>
          <dt>query1</dt>
          <dd>result 11</dd>
          <dd>result 12</dd>
          <dt>query2</dt>
          <dd>result 21</dd>
          <dd>result 22</dd>
        </dl>
      </div>
    )
  }

  render() {
    return (
      <div className={`searchbox ${this.props.className}`}>
        {this.renderQueryBox()}
        <div className="resultbox">{this.renderResults()}</div>
      </div>
    )
  }
}

export { SearchBox, Query }
