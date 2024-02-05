<script>
import axios from 'axios';
import { store } from '../store';
import { router } from '../router';

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
        .catch((error) => {
            this.isLoading = false;
            console.log("Error:", error);
            
            this.$router.replace({name: 'not-found'});
        });
        
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
                    <h6 class="card-subtitle mb-2 text-muted">{{curProject.repository_url}}</h6>
                    <h6 class="card-subtitle mb-2">Tipo: {{ curProject.type ? curProject.type.name : 'Nessun tipo specificato' }}.</h6>
                    <div v-if="curProject.technologies.length > 0">
                        <h6>Tecnologie usate:</h6>
                        <ul class="list-unstyled">
                        <li v-for="technology in curProject.technologies" :key="technology.id">
                            <span class="badge" :style="{ backgroundColor: technology.color }">
                            {{ technology.name }}
                            </span>
                        </li>
                        </ul>
                    </div>
                    <div v-else>
                        <p>Nessuna tecnologia specificata</p>
                    </div>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
</style>