<template>
  <div>
    <ul>
      <ToDoItem v-for='(todo, i) of todos' :todo='todo' :key='todo.id'
      v-on:remove-todo="removeTodo"
      :index="i"
       />
    </ul>
  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem'
export default {
  props: ['todos'],
  components: {
    ToDoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>
<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>>


