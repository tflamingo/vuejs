<template>
    <div>
        <fieldset>
            <legend>
                Create New Person
            </legend>
            <div class="form-group">
                <label>Name:</label>
                <input type="text" v-model="newPerson.name" />
            </div>
             <div class="form-group">
                <label>Age:</label>
                <input type="text" v-model="newPerson.age" />
            </div>
            <div class="form-group">
                <label>Sex:</label>
                <select v-model="newPerson.sex">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
             <div class="form-group">
                 <label></label>
                <button @click="createPerson">CreatePerson</button>
            </div>
        </fieldset>
        <table>
            <thead>
                <tr>
                    <th>Name:</th>
                    <th>Age</th>
                    <th>sex</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(person, index) in people">
                    <td>{{person.name}}</td> 
                    <td>{{person.age}}</td>
                    <td>{{person.sex}}</td>
                    <td class="text-center">
                        <button @click="deletePerson(index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                newPerson: {
                    name: '',
                    age: 0,
                    sex: 'Male'
                },
                people: [{
                    name: 'tflamingo',
                    age: 30,
                    sex: 'Male'
                }]
            }
        },
        methods: {
            createPerson: function(){
                if(this.newPerson.name === '') {
                    alert('姓名不能为空');
                    return;
                }
                
                if(this.newPerson.age <= 0) {
                    alert('年龄不能小于0');
                    return;
                }   
                this.people.push(this.newPerson);
                this.newPerson = {name:'', age:0, sex:'Male'};
            },
            deletePerson: function(index) {
                alert(index);
                this.people.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
  @import './../assets/css/demo1.css'; 
</style>