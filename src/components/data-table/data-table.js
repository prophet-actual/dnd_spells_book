import React, { Component } from 'react'
import '.././../App.css'
import Data from './../../data/spells.json'

class DataTable extends Component {
  constructor() {
    super();
    this.state = {
      data: Data,
      filterClass: 'All',
      filterLevel: 'All',
      filterSchool: 'All',
    }

    this.selectorClass = this.selectorClass.bind(this)
    this.selectorLevel = this.selectorLevel.bind(this)
    this.selectorSchool = this.selectorSchool.bind(this)
  }

  selectorClass() {
    return (
      <div>
        <h2>Class</h2>
        <div className={"selector"} onClick={(e) => {this.setState({filterClass: e.target.innerHTML})}}>
          <div className={'btn class'} classtype={"all"}>All</div>
          <div className={'btn class'} classtype={"Bard"}>Bard</div>
          <div className={'btn class'} classtype={"Wizard"}>Wizard</div>
          <div className={'btn class'} classtype={"Sorcerer"}>Sorcerer</div>
          <div className={'btn class'} classtype={"Paladin"}>Paladin</div>
          <div className={'btn class'} classtype={"Cleric"}>Cleric</div>

        </div>
      </div>
    )
    /*return (
      <div className={"selector"}>
        <h2>Class</h2>
        <select onChange={(e) => {this.setState({filterClass: e.target.value})}}>
          <option classtype={"all"}>All</option>
          <option classtype={"Bard"}>Bard</option>
          <option classtype={"Wizard"}>Wizard</option>
          <option classtype={"Sorcerer"}>Sorcerer</option>
          <option classtype={"Paladin"}>Paladin</option>
          <option classtype={"Cleric"}>Cleric</option>

        </select>
      </div>
    )*/
  }

  selectorLevel() {
    return (
      <div>
        <h2>Spell level</h2>
          <div className={"selector"} onClick={(e) => {this.setState({filterLevel: e.target.innerHTML})}}>
            <div className={'btn lvl'} value={"all"}>All</div>
            <div className={'btn lvl'} value={"0"}>Cantrip</div>
            <div className={'btn lvl'} value={"1"}>1st</div>
            <div className={'btn lvl'} value={"2"}>2nd</div>
            <div className={'btn lvl'} value={"3"}>3rd</div>
            <div className={'btn lvl'} value={"4"}>4th</div>
            <div className={'btn lvl'} value={"5"}>5th</div>
            <div className={'btn lvl'} value={"6"}>6th</div>
            <div className={'btn lvl'} value={"7"}>7th</div>
            <div className={'btn lvl'} value={"8"}>8th</div>
            <div className={'btn lvl'} value={"9"}>9th</div>
          </div>
      </div>
    )
  }

  selectorSchool() {
    return (
      <div>
        <h2>School of Magic</h2>
        <div className={"selector"} onClick={(e) => {this.setState({filterSchool: e.target.innerHTML})}}>
          <div className={'btn school'} school={"all"}>All</div>
          <div className={'btn school'} school={"Conjuration"}>Conjuration</div>
          <div className={'btn school'} school={"Abjuration"}>Abjuration</div>

        </div>
      </div>
    )
    /*return (
      <div className={"selector"}>
        <h2>School of Magic</h2>
        <select onChange={(e) => {this.setState({filterSchool: e.target.value})}}>
          <option school={"all"}>All</option>
          <option school={"Conjuration"}>Conjuration</option>
          <option school={"Abjuration"}>Abjuration</option>

        </select>
      </div>
    )*/
  }

  dataTable() {
    return (
      <div className={"spell-wrap"}>
        {this.state.data.map((spell, i) => {
          if (
            (this.state.data.map(s => spell.s_school).indexOf(this.state.filterSchool) > -1 || this.state.filterSchool === 'All') &&
            (this.state.data.map(s => spell.s_lvl).indexOf(this.state.filterLevel) > -1 || this.state.filterLevel === 'All') &&
            (this.state.data.map(s => spell.s_class_usage).flat().indexOf(this.state.filterClass) > -1 || this.state.filterClass === 'All')
            ) {
            return (
              <div className={"spell-info"} key={i}>
                <div className={"spell-dropdown"}>
                  <div className={"spell-name"}>
                    {spell.s_name}
                  </div>
                  <div className={"spell-definitions hidden"}>
                    <div className={"spell-top-level"}>Level {spell.s_lvl} {spell.s_school} spell</div>
                    <div className={"spell-casting-time"}>Casting Time: {spell.s_cast_time}</div>
                    <div className={"spell-range"}>Range: {spell.s_range} feet</div>
                    <div className={"spell-components"}>Components: {spell.s_components}</div>
                    <div className={"spell-duration"}>Duration {spell.s_duration}</div>
                    <div className={"spell-description"}>{spell.s_description}</div>
                  </div>
                </div>
              </div>
            )
          }
          else {
            return ''
          }

        })}
      </div>
    )
  }

  render() {
    return (
      <div className={"dndapp-table"}>

        <div className={"dndapp-selectors"}>
          {this.selectorClass()}
          {this.selectorLevel()}
          {this.selectorSchool()}
        </div>

        <div className={"dndapp-data"}>
          {this.dataTable()}
        </div>

      </div>
    )
  }

}

export default DataTable
