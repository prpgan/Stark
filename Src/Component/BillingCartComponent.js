import React,{useReducer} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const reducer = (state, action) =>{
    alert(JSON.stringify(action));
    switch(action.type){
        case "ALL" : return {...state,allSelect: true, paidSelect: false, unpaidSelect: false}
        case "PAID" : return {...state,allSelect: false, paidSelect: true, unpaidSelect: false}
        case "UNPAID" : return {...state,allSelect: false, paidSelect: false, unpaidSelect: true}
    }
}

const BillingCartComponent = () => {
    const [state, dispatch] =  useReducer(reducer,
        {all: 1, paid: 2, unpaid: 3, allSelect: true, paidSelect: false, unpaidSelect: false });

    const allSelect=()=>{
            dispatch({type:"ALL", payload:{allSelect: true, paidSelect: false, unpaidSelect: false}})
    }

    const paidSelect=()=>{
            dispatch({type:"PAID", payload:{allSelect: false, paidSelect: true, unpaidSelect: false}})
    }
    const unpaidSelect=()=>{
        dispatch({type:"UNPAID", payload:{allSelect: false, paidSelect: false, unpaidSelect: true}})
}
    return (
        <View style={{backgroundColor:'#fff',shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,borderRadius: 10}}>
            <View style={{flexDirection:'row',paddingVertical:'5%'}}>
                <View style={{width:'33%'}}>
                <View style={{justifyContent:'center',alignItems:'center',borderRightColor:"grey", borderRightWidth:1}}>
                <View><Text style={{color:state.allSelect == false?"grey":"blue"}}>All</Text></View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    {/* <View style={{marginTop:'7%'}}><Text>Rs </Text></View> */}
                    <TouchableOpacity onPress={()=>allSelect()}>
                    <Text style={{fontSize:23}}>45</Text>
                    </TouchableOpacity>
                    <View style={{}}><Text style={{color:'grey'}}>Customers</Text></View>
                </View>
                </View>
                </View>
                <View style={{width:'33%'}}>
                <View style={{justifyContent:'center',alignItems:'center',borderRightColor:"grey", borderRightWidth:1}}>
                <View><Text style={{color:state.paidSelect == false?"grey":"blue"}}>Paid</Text></View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    {/* <View style={{marginTop:'7%'}}><Text>Rs </Text></View> */}
                    <TouchableOpacity onPress={()=>paidSelect()}>
                    <Text style={{fontSize:23}}>45</Text>
                    </TouchableOpacity>
                    <View style={{}}><Text>Customers</Text></View>
                </View>
                </View>
                </View>
                <View style={{width:'33%'}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <View><Text style={{color:state.unpaidSelect == false?"grey":"blue"}}>Unpaid</Text></View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    {/* <View style={{marginTop:'7%'}}><Text>Rs </Text></View> */}
                    <TouchableOpacity onPress={()=>unpaidSelect()}>
                    <Text style={{fontSize:23}}>45</Text>
                    </TouchableOpacity>
                    <View style={{}}><Text style={{color:'grey'}}>Customers</Text></View>
                </View>
                </View>
                </View>
            </View>
        </View>
    )
}

export default BillingCartComponent;

const styles = StyleSheet.create({})
