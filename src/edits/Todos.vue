<template>
  <div>
    <h1>Todos</h1>
    <router-link to="/editor">Editor</router-link>
    <hr>
    <AddTodo @add-todo="addTodo" />
    <hr>
    <ToDoList :todos="todos" @remove-todo="removeTodo"  />
  </div>
</template>

<script>
import ToDoList from '@/components/ToDoList'
import AddTodo from '@/components/AddTodo'


export default {
  name: 'App',
  data() {
    return{
      todos: [
        {id: 1, title: 'Buy bread', completed: false},
        {id: 2, title: 'Buy bear', completed: false},
        {id: 3, title: 'Buy water', completed: false}
      ]
    }
  },
  components: {
    ToDoList,
    AddTodo
  },
  methods: {
    removeTodo (id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  }
}
</script>
