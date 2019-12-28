import React, { Component } from 'react'
import SpellsTable from './../data-table/spells-table'
import EldritchInvocationsTable from './../data-table/eldritch-invocations-table'
import DiceRolls from './../dice-roll/dice-roll'

class Output extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'default'
    }
  }

  pickView = (e) => {
    let thisView = e.target.getAttribute('view')

    this.setState({
      currentView: thisView
    })
  }

  goBack = () => {
  if (this.state.currentView !== 'default') {
      return (
        <svg onClick={(e) => this.setState({currentView: 'default'})} width="30" height="30" className={"go-back"} viewBox="0 0 14 16" version="1.1" aria-hidden="true"><path fillRule="evenodd" d="M6 3.5c3.92.44 8 3.125 8 10-2.312-5.062-4.75-6-8-6V11L.5 5.5 6 0v3.5z"></path></svg>
      )
    }
  }

  showView = () => {
    if (this.state.currentView === 'default') {
      return (
        <div className={'dndapp-lander'}>
          <div className={'lander-button'} view={'spellsTable'} onClick={(e) => {this.pickView(e)}}>
            <span>List of Spells</span>
          </div>
          <div className={'lander-button'} view={'eldritchInvocationsTable'} onClick={(e) => {this.pickView(e)}}>
            <span>List of Eldritch Invocations</span>
          </div>
          <div className={'lander-button'} view={'diceRoll'} onClick={(e) => {this.pickView(e)}}>
            <span>Dice Roll</span>
          </div>
          <div className={'lander-button disabled'} view={'characterSheet'}>
            <span>Character Sheet</span>
          </div>
          <div className={'lander-button disabled'} view={'musicBoard'}>
            <span>Music Board</span>
          </div>
          <div className={'lander-button disabled'} view={'NPCRandomizer'}>
            <span>NPC Randomizer</span>
          </div>
        </div>
      )
    }
    else if (this.state.currentView === 'spellsTable') {
      return <SpellsTable />
    }
    else if (this.state.currentView === 'eldritchInvocationsTable') {
      return <EldritchInvocationsTable />
    }
    else if (this.state.currentView === 'diceRoll') {
      return <DiceRolls />
    }
  }

  render() {
    return (
      <div className={"dndapp-wrapper"}>
        {this.goBack()}
        {this.showView()}
      </div>
    )

  }

}

export default Output
