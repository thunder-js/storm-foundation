import React from 'react'
import { AsyncStorage } from 'react-native'

export default WrappedComponent => class extends React.Component {
  state = {
    firstVisit: true,
  }

  async componentWillMount() {
    const hasVisited = await AsyncStorage.getItem('hasVisited')
    const firstVisit = !hasVisited
    this.setState({
      firstVisit,
    })
    await AsyncStorage.setItem('hasVisited', 'YES')
  }


  render() {
    return (
      <WrappedComponent
        {...this.props}
        firstVisit={this.state.firstVisit}
      />
    )
  }
}
