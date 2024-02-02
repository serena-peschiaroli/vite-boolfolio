<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';


export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            projects: [],
        }
    },
    created() {
        axios.get(`${this.baseUrl}/api/projects`)
            .then((resp) => {

                this.projects = resp.data.results.data;
                console.log(resp.data.results.data);
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
        <div class="row row-cols-3 gy-5 mt-2">
            <div class="col d-flex align-self-stretch" v-for="project in projects" key="project.id">
                <ProjectCard :project="project" />

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>