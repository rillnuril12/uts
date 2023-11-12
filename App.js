import { View, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import MapView, { Marker } from 'react-native-maps'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          zoomControlEnabled={true}
          mapType="hybrid"
          initialRegion={{
            latitude: 0.92804769639356,
            longitude: 104.44775090441074,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}>
        <Marker
        coordinate={{ latitude:0.92132980421009,  longitude: 104.4537037727458, }}
        title={'STT Indonesia Tanjungpinangvv'}
        description={'Jl. Pompa Air No.28, Tj. Pinang Timur, Kec. Bukit Bestari, Kota Tanjung Pinang, Kepulauan Riau'}
        />
        <Marker
        coordinate={{ latitude: 0.905172084300984,   longitude: 104.47658619702949, }}
        title={'STIE Pembangunan'}
        description={'Jl. R. H. Fisabillillah, No. 34, Sei Jang, Bukit Bestari, Sei Jang, Kec. Bukit Bestari, Kota Tanjung Pinang, Kepulauan Riau 29122'}
        />
        <Marker
        coordinate={{ latitude:0.8963632021003989,   longitude: 104.48072169702948, }}
        title={'Sekolah Tinggi Ilmu Sosial dan Ilmu Politik Raja Haji'}
        description={'Jl. Raja Haji Fisabilillah, Kelurahan No.48, Sei Jang, Kec. Bukit Bestari, Kota Tanjung Pinang, Kepulauan Riau 29124'}
        />
        </MapView>
      </View>
    )
  }
}

export default App