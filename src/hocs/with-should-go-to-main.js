import React from 'react'
import { AsyncStorage } from 'react-native'

export default WrappedComponent => class extends React.Component {
  state = {
    shouldGoToMain: false,
  }

  async componentWillMount() {
    const shouldGoToMain = await AsyncStorage.getItem('shouldGoToMain')
    this.setState({
      shouldGoToMain: !!shouldGoToMain,
    })
  }


  render() {
    return (
      <WrappedComponent
        {...this.props}
        shouldGoToMain={this.state.shouldGoToMain}
      />
    )
  }
}
