import React, {Component} from 'react'
import PropTypes from 'prop-types';
class InputNumber extends Component{
  constructor(props){
		super(props)
		this.state = {
			innerValue: 0
    }
    this.handleChange = this.handleChange.bind(this)
	}

  static propTypes = {
		value: PropTypes.string,
		onChange: PropTypes.func,
	}

  static defaultProps = {
		onChange: () => {}
	}

  get isControl(){
		return 'value' in this.props
	}

	get value() {
		if(this.isControl){
			return this.props.value
		} else {
			return this.state.innerValue
		}
  }

  handleChange(e) {
    if(!this.isControl){
      this.setState({
        innerValue: e.target.value
      })
    }
    this.props.onChange(e)
  }

  render () {
    return (
      <input type='number' value={this.value}
      onChange={(e) => {
        this.handleChange(e)
      }}/>
    )
  }

  componentDidMount() {
    this.setState({
      innerValue: this.props.defaultValue
    })
  }
}

export default InputNumber
