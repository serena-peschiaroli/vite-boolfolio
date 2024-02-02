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
        }
    },
    created() {
        axios.get(`${this.store.baseUrl}/api/projects`)
            .then((resp) => {

                this.projects = resp.data.results.data;
                console.log(resp.data.results.data);
                this.isLoading = false;
            });
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