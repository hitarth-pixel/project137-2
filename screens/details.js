import * as React from 'react';
import {Text,View,Alert,StyleSheet} from 'react-native';
import axios from 'axios'
import { Card } from 'react-native-paper';


export default class Details extends React.Component{
  constructor(props){
    super(props)
    this.state=({
      url:'http://127.0.0.1:5000/starData?name=${this.props.navigation.getParams("star_name")}',
      details:{},
    })
  }
  componentDidMount(){
    this.getDetails
  }
  getDetails=()=>{
    const {url}=this.state
    axios.get(url).then(response=>{this.setState({details:response.data.data})}).catch(error=>{Alert.alert(error.message)})
  }
  render(){
    const {details} =this.state
    if(details.specifications){
      return(
      <View style={styles.container}>
        <Card
        title={details.name}>
        <View >
        <Text style={styles.cardItem}>
        {'distance from earth:${details.distance_from_earth}'}
        </Text>   
        <Text style={styles.cardItem}>
        {'distance from sun:${details.distance_from_their_sun}'}
        </Text>
        <Text style={styles.cardItem}>
        {'gravity:${details.gravity}'}
        </Text>
        <Text style={styles.cardItem}>
        {'orbital period:${details.orbital_period}'}
        </Text>
        <Text style={styles.cardItem}>
        {'orbital radius:${details.orbital_radius}'}
        </Text>
        <Text style={styles.cardItem}>
        {'orbital speed:${details.orbital_speed}'}
        </Text>
        <Text style={styles.cardItem}>
        {'planet type:${details.planet_type}'}
        </Text>
        <Text style={styles.cardItem}>
        {'planet mass:${details.planet_mass}'}
        </Text>
        <Text style={styles.cardItem}>
        {'planet radius:${details.planet_radius}'}
        </Text>
        </View>
        <View style={[styles.cardItem,{flexDirection:'column'}]}>
        <Text>{details.specifications ? 'Specifications: ' :''}</Text>
        {details.specifications.map((item,index)=>{
          <Text key={index.toString()}
          style={{marginLeft:50}}>
          
          </Text>
        })}
        </View>
        </Card>
              </View>)
    }
    
  }
}

const styles=StyleSheet.create({
   container: { flex: 1 }, cardItem: { marginBottom: 10 }
})