import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
  //console.log(props.id + ' до инициализации')
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>
          {props.text + '      id: ' + props.id}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: 'rgb(231,202,118)',
  },
  goalText: {
    color: 'black',
    padding: 8,
  },
})
export default GoalItem
