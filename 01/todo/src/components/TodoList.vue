<template>
    <div>
       <span>TodoList</span>
       <TodoItem></TodoItem>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
    name: 'TodoList',
    data() {
        return {
        }
    }, 
    components: {
        TodoItem
    }
}
</script>
