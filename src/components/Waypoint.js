import React from 'react'
import { bool } from 'prop-types'
import { ActivityIndicator, View } from 'react-native'

class Waypoint extends React.Component {
  static propTypes = {
    loading: bool.isRequired,
  }
  render() {
    const {
      loading,
    } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {loading && <ActivityIndicator />}
      </View>
    )
  }
}


export default Waypoint
