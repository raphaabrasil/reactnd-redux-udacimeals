import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Hello World
      </div>
   )
  }
}

const mapStateToProps = (calendar) => {
  const dayOrders = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrders.map( ( day ) => ({
      day,
      meals: Object.keys( calendar[day] ).reduce(( meals, meal ) => {
        meals[meal] = calendar[day][meal] ? calendar[day][meal] : null
        return meals
      }, {})
    }))
  }
}
export default connect(mapStateToProps)(App)
