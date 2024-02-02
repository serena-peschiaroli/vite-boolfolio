<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data(){
        return {
            store,
            isLoading: true,
            curProject: null,
        };
    },
    created() {
        console.log(this.$route.params.slug);
        axios.get(`${store.baseUrl}/api/projects/${this.$route.params.slug}`)
        .then((resp)=>{
            this.curProject= resp.data;
            console.log(resp.data);
            this.isLoading = false;
            console.log(`${store.baseUrl}/api/projects/${this.$route.params.slug}`);
        })
        
    }
}
</script>

<template>
    <div class="container">
        <h2> Dettagli </h2>
        <div v-if="isLoading" class="text-center mt-3">
            <p>Caricamento in corso</p>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{curProject.title}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
</style>