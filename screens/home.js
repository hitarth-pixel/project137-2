import * as React from 'react';
import {Text,View,Alert,StyleSheet,FlatList,SafeAreaView} from 'react-native';
import axios from 'axios'
import {ListItem} from 'react-native-elements'

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state=({
      url:'http://127.0.0.1:5000/',
      listData:[]
    })
    console.log('constructor home')
    
  }
  componentDidMount(){
    console.log('componentDidMount home')
    this.getPlanet()
  }
  getPlanet=()=>{
    console.log('getPlanet home')
    const {url} =this.state
    axios.get(url)
    .then(response=>{
      console.log('inresponse',response)
      this.setState({listData:response.data.data})

    })
    .catch(error=>{
      Alert.alert(error.message)
      console.log(error.message)
    })
  }
  
  renderItem=({item,index})=>{
    <ListItem
    chevron
    key={index}
    title={'star: $item.name'}
    subtitle={'distance: $item.distance_from_earth'}
    titleStyle={styles.title}
    containerStyle={styles.listContainer}
    bottomDivider
    onPress={()=>{
      this.props.navigation.navigate('Details',{star_name:item.name})
    }}
    />
  }
  
  keyExtractor=({index,string})=>{
    index.toString()
  }

  render(){
    const { listData } = this.state;
    if (listData.length == 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyContainerText}>LOADING...</Text>
        </View>
      );
    }
    return(
      <View style={styles.container}>
        <SafeAreaView/>
        <View style={styles.upperContainer}>
        <Text style={styles.headerText}>STAR WORLD-1</Text>
        </View>
        <View style={styles.lowerContainer}>
        <FlatList
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        data={this.state.listData}
        />
        </View>
      </View>)
  }
}

const styles=StyleSheet.create({
  container: { flex: 1, backgroundColor: '#edc988' },
  upperContainer: { flex: 0.1, justifyContent: 'center', alignItems: 'center' },
  headerText: { fontSize: 30, fontWeight: 'bold', color: '#132743' },
  lowerContainer: { flex: 0.9 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyContainerText: { fontSize: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#d7385e' },
  listContainer: { backgroundColor: '#eeecda' },
})