import { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native'

function GoalInput(props) {
  const [enterGoalText, setEnterGoalText] = useState('')
  function goalInputHandler(enterGoalText) {
    setEnterGoalText(enterGoalText)
  }
  function addGoalHandler() {
    props.onAddGoal(enterGoalText)
    setEnterGoalText('')
  }
  return (
    <Modal
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/ids-icon.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Опишите цель..."
          onChangeText={goalInputHandler}
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Добавить"
              onPress={addGoalHandler}
              color="#20bad1"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Отмена"
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 26,
    borderBottomWidth: 1,
    borderColor: 'grey',
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '90%',
    borderRadius: 8,
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    marginHorizontal: 12,
    paddingTop: 12,
    borderRadius: 8,
  },
})

export default GoalInput
