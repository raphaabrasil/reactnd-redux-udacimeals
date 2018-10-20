import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'
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

const mapDispatchToProps = (dispatch) => (
  {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
