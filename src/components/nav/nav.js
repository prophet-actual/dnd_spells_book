import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuToggle: false
    }

    this.escFunction = this.escFunction.bind(this)
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.props.history.push('/')
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false)
  }

  toggleMenu() {
    this.setState({
      menuToggle: this.state.menuToggle !== true
    })
  }

  render() {
    return (
      <nav className={'dndapp-nav'}>
        <div className={'dndapp-nav-menu'}>
          <h1>Prophet&apos;s Companion</h1>
          <svg className={this.state.menuToggle === true ? 'close' : ''} onClick={this.toggleMenu.bind(this)} height="40" width="40" viewBox="0 0 3 16" version="1.1" aria-hidden="true"><path fillRule="evenodd" d="M0 2.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm0 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zM1.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
        </div>
        <div className={'dndapp-nav-links'}>
          <ul className={this.state.menuToggle === true ? 'active' : 'hidden'}>
            <Link to={'/'}><li onClick={this.toggleMenu.bind(this)}>Welcome</li></Link>
            <Link to={'/spells-table'}><li onClick={this.toggleMenu.bind(this)}>List of Spells</li></Link>
            <Link to={'/feats-table'}><li onClick={this.toggleMenu.bind(this)}>List of Feats</li></Link>
            <Link to={'/dice-rolls'}><li onClick={this.toggleMenu.bind(this)}>Dice Roll</li></Link>
            <Link to={'/npc-randomizer'}><li onClick={this.toggleMenu.bind(this)}>NPC Randomizer</li></Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)
