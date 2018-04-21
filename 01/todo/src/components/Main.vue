<template>
    <div>
        <Header></Header>
        <TodoList></TodoList>
        <Footer></Footer>
    </div>
</template>
   
<script>
import Header from '@/components/Header'
import TodoList from '@/components/TodoList'
import Footer from '@/components/Footer'

export default {
    name: 'MainPage',
    data() {
        return {
            'msg': 'MainPage'
        }
    },
    components: {
        Header,
        Footer,
        TodoList
    }
}
</script>
