import React from 'react'
import { bool, func } from 'prop-types'
import { View, Text } from 'react-native'

class Waypoint extends React.Component {
  render() {
    const {
      loading,
    } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {loading && <Loading />}
      </View>
    )
  }
}


export default Waypoint
