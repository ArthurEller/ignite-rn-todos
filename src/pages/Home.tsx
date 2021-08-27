import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: Math.floor(Math.random() * 100),
      title: newTaskTitle,
      done: false
    }

    setTasks(prevState => [...prevState, data])
  }

  function handleToggleTaskDone(id: number) {
    const task = tasks
    const newArray = task.findIndex(item => item.id === id)

    if (task[newArray].done === true) {
      task[newArray].done = false;
    } else {
      task[newArray].done = true;
    }

    setTasks([...task])
  }

  function handleRemoveTask(id: number) {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})