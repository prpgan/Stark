// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Table, Row, Rows } from 'react-native-table-component';
 
// export default class TableComp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableHead: ['Milk Type', 'Quantity\n(in litre)', 'Price/Liter\n(in Rupees)', 'Delivery\nFrom'],
//       tableData: [
//         ['Cow', '1', '45', '4'],
//         ['Buffalo', '1', '50', 'd'],
//         ['Desi Cow', '1', '55', '456\n789']
//       ]
//     }
//   }
 
//   render() {
//     const state = this.state;
//     return (
//       <View style={styles.container}>
//         <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
//           <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
//           <Rows data={state.tableData} textStyle={styles.text}/>
//         </Table>
//       </View>
//     )
//   }
// }
 
// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//   head: { height: 40, backgroundColor: '#f1f8ff' },
//   text: { margin: 6 }
// });




import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper,Col, Cols, Cell } from 'react-native-table-component';
 
export default class TableComp extends Component {
  constructor(props) {
    super(props);
    const elementButton = (value) => (
      <TouchableOpacity onPress={() => this._alertIndex(value)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );
 
    this.state = {
      tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
      tableData: [
        [elementButton('1'), 'a', 'b', 'c', 'd'],
        [elementButton('2'), '1', '2', '3', '4'],
        [elementButton('3'), 'a', 'b', 'c', 'd']
      ]
    }
  }
 
  _alertIndex(value) {
    Alert.alert(`This is column ${value}`);
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table style={{flexDirection: 'row'}} borderStyle={{borderWidth: 1}}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
            <Cell data="" style={styles.singleHead}/>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={['H1', 'H2']} style={styles.head} heightArr={[60, 60]} textStyle={styles.text} />
              <Col data={state.tableTitle} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.titleText}></Col>
            </TableWrapper>
          </TableWrapper>
 
          {/* Right Wrapper */}
          <TableWrapper style={{flex:1}}>
            <Cols data={state.tableData} heightArr={[40, 30, 30, 30, 30]} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  singleHead: { width: 80, height: 40, backgroundColor: '#c8e1ff' },
  head: { flex: 1, backgroundColor: '#c8e1ff' },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  titleText: { marginRight: 6, textAlign:'right' },
  text: { textAlign: 'center' },
  btn: { width: 58, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 },
  btnText: { textAlign: 'center' }
});
