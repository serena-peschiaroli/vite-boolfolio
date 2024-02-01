<script>
import axios from 'axios';
export default{
    data(){
        return{
            baseUrl: 'http://127.0.0.1:8000',
            projects: [],
        }
    },
    created() {
        axios.get(`${this.baseUrl}/api/projects`)
        .then((resp)=> {
            
            this.projects = resp.data.results.data;
            console.log(resp.data.results.data);
        });
    }
}
</script>

<template>
    <h1>test</h1>

</template>

<style lang="scss" scoped>

</style>