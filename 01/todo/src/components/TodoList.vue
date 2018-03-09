<template>
    <div>
        <section class="real-app">
                <input type="text"
                    class="add-input"
                    autofocus="autofocus"
                    placeholder="接下去要做什么"
                    @keyup.enter="addTodo"
                >
        </section>

        <TodoItem :todo="todo" v-for="todo in filteredTodos"
            :key="todo.id" @del="deleteTodo"
            :ctx="todo.ctx">
        </TodoItem>

        <Tab :filter=filter :todos=todos
            @toggle="toggleFilter"
            @clearAllCompleted="clearAllCompleted"
        ></Tab>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import Tab from '@/components/Tab'
let id = 1
export default {
    name: 'TodoList',
    data() {
        return {
            todos: [
                {
                    id: id++,
                    ctx: "今天要运动",
                    completed: false
                }
            ],
            filter: 'all'
        }
    }, 
    components: {
        TodoItem, Tab
    },
    computed: {
          filteredTodos() {
            if (this.filter === 'all') {
                return this.todos;
            }

            const completed = this.filter === 'completed'
            return this.todos.filter(todo => completed === todo.completed);
        }

    },
    methods: {
        addTodo(e) {
            
            if (e.target.value.trim() === '') {
                return;
            }

            this.todos.push({
                id: id++,
                ctx: e.target.value.trim(),
                completed: false
            });

            e.target.value = '';
        },

        toggleFilter() {
            alert('toggleFilter');
        },

        clearAllCompleted() {
            alert('clearAllCompleted');
        }, 

        deleteTodo() {
            alert('deleteTodo');
        }
      
    }
}
</script>


<style >
.real-app{
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>
