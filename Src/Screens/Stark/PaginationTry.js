import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native'

const PaginationTry = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        onPageLoad()
    },[])

    const onPageLoad = async() =>{
        fetch(`https://jsonplaceholder.typicode.com/photos?_limit=5&_page= ${page}`)
        .then((response) => response.json())
        .then((json) => setData(data.concat(json)))
        // .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }


    const renderRow = (item) =>{
        return(
            <View>
                <Image source={{uri: item.url}} style={{width:'100%', height:200, resizeMode:'cover'}}/>
                <Text>{item.title}</Text>
                <Text>{item.id}</Text>
            </View>
        )
    }

    const handleEnd = async() => {
       await setLoading(true)
       await setPage(page + 1)
       await onPageLoad()
    }

    const footerComp = () =>{
            return(
        isLoading?<View style={{marginBottom:'10%'}}>
                    <ActivityIndicator color="red" size="large"/>
                  </View> : null
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
            data= {data}
            renderItem = {({item})=>renderRow(item)}
            keyExtractor = {(item,index)=> index.toString()}
            onEndReached = {handleEnd}
            onEndReachedThreshold ={1}
            ListFooterComponent ={footerComp()}
            />
            {/* <View style={{marginBottom:'10%'}}/> */}
        </View>
    )
}

export default PaginationTry

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
