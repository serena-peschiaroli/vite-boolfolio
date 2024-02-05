<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';


export default {
    data() {
        return {
            store,
            projects: [],
            isLoading: true,
            currentPage: 1, //pagina corrente x paginazione
            lastPage: 1, // ultima pagina disponibile da risposta paginazione
            total: 0, // numero totale di progetti disponibili
            error: null, // registrare errori che avvengono durante chiamata 
        }
    },
    created() {
        this.getProjects();  // chiama il metodo quando il componente è creato x prendere progetti
    },
    methods: {
        getProjects(){
            this.isLoading = true;
            axios.get(`${this.store.baseUrl}/api/projects`, {
                params: {
                    page: this.currentPage, // includi il numero pag corrente come parametro query x paginazione
                }
            })
            .then((resp) => {  //se risposta positiva
                this.projects = resp.data.results.data;  // aggiorna progetti con dati da risposta
                this.lastPage = resp.data.results.lastPage; // aggiorna lastpage da risposta
                this.total = resp.data.results.total; // aggiorna total da risposta
                this.isLoading = false;
            })
            .catch((error) => { // risposta negativa 
                this.error = error; // salva errori nei dati del componente 
                this.isLoading = false; 
            });
        }
    },
    components: {
        ProjectCard
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center mt-5"> La lista dei progetti:</h2>
        <div v-if="isLoading" class="text-center mt-3">
            <p>Caricamento in corso</p>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div v-else class="row row-cols-3 gy-5 mt-2">
            <div class="col d-flex align-self-stretch" v-for="project in projects" key="project.id">
                <ProjectCard :project="project" />

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>