<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn-primary" @click="fetchData">Get Data</button>
                <p></p>
                <ui class="list-group">
                    <li class="list-group-item" v-for="u in users">{{ u.username }} -- {{u.email}}</li>
                </ui>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                user:{
                    username: '',
                    email: ''
                },
                users: []
            };
        },
        methods: {
            submit(){
                this.$http.post('https://vuejs-http-a2b48.firebaseio.com/data.json', this.user).then(res => {
                    console.log(res);
                }, err => {
                    console.log(err);
                });
            },
            fetchData(){
                this.$http.get('https://vuejs-http-a2b48.firebaseio.com/data.json').then(res => {
                    return res.json();
                }).then(data => {
                    const resArray = [];
                    for(let key in data){
                        resArray.push(data[key]);
                    }
                    this.users = resArray;
                });
            }
        }
    }
</script>

<style>
</style>
