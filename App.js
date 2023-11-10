import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }
  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enterGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enterGoalText, key: Math.random().toString() },
    ])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Добавить цель"
        color="#E7CA76FF"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 60,
    backgroundColor: '#20bad1',
    flex: 1,
  },
  goalContainer: {
    flex: 5,
  },
})
