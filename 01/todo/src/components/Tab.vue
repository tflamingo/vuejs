<template>
    <div class="helper">
        <span class="left">{{ unFinishedTodoLength }} items to do</span>
        <span class="tabs">
            <span v-for="state in states"
                :key="state"
                :class="[state, filter === state ? 'actived' : ''] "
                @click="toggleFilter(state)">
                    {{state}}
                </span>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            filter: {
                type: String,
                required: true,
            }, 
            todos: {
                type: Array,
                required: true,
            }
        },
        data() {
            return {
                states: ['all', 'active', 'completed']
            }
        },
        computed: {
            unFinishedTodoLength() {
                return this.todos.filter(todo => !todo.completed).length
            }
        },
        methods: {
            clearAllCompleted() {
                this.$emit('clearAllCompleted')
            },
            toggleFilter(state) {
                alert(state);
                this.$emit('toggle', state)
            }
        }
    }
</script>

<style >
.helper {
  font-weight: 100;
  padding: 5px 0;
  line-height: 30px;
  background-color: #fff;
  font-size: 14px;
}
.left, .clear, .tabs{
  padding: 0 10px;
  box-sizing: border-box;
}
.left, .clear{
  width: 150px;
}
.left{
  text-align: left;
}
.clear{
  text-align: right;
  cursor: pointer;
}

.tabs{
  width: 200px;
  justify-content: space-around;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid rgba(175,47,47,0);
    border-color: rgba(175,47,47,0.4);
    border-radius: 5px;
}
</style>


