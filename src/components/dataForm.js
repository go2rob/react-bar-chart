import React, { Component } from 'react'

class DataForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {"": ""}
    }
  }
  addData = (e, index) => {
    let objects = Object.values(document.getElementsByClassName('obj'))
    let values = Object.values(document.getElementsByClassName('val'))
    let lastField = Object.values(document.getElementsByClassName('dataField')).slice(-1)[0]
    if (e.key === 'Enter' && lastField.className.includes(index)) {
      let data = objects.reduce((obj, elem, i) => {
        obj[elem.value] = values[i].value
        return obj
      }, {})
      this.setState({
        data: {
          ...data, "": ""
        }
      })
    }
  }
  render() {
    return (
      <div>
        <form>
          {Object.keys(this.state.data).map((entry, index) => {
            return (
              <div key = {index} className = {'dataField '+index}>
                <input className = {'obj '+index} type="text" name="obj"/>
                <input className = {'val '+index} type="number" name="value" onKeyPress = {(e) => this.addData(e, index)}/>
              </div>
            )
          })}
        </form>
      </div>
    )
  }
}

export default DataForm
