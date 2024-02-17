import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onClickFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="show-hide-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="sub-card-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onClickFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="description">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onClickLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="description">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
