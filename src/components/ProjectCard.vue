<script>
import { store } from '../store';

export default {
    props: {
        project: Object,
        technologies: {
            type: Array,
            
        }
    },
    data(){
        return{
            store,
           

        }
    }
}

</script>

<template>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ project.title}}</h5>
       <div v-if="project.technologies.length > 0">
            <h6>Tecnologie usate:</h6>
            <ul class="list-unstyled">
              <li v-for="technology in project.technologies" :key="technology.id">
                <span class="badge" :style="{ backgroundColor: technology.color }">
                  {{ technology.name }}
                </span>
              </li>
            </ul>
          </div>
          <div v-else>
            <p>Nessuna tecnologia specificata</p>
          </div>
        <p class="card-text">Tipo: {{project.type? project.type.name : 'Nessun tipo specificato'  }}.</p>
        <p class="card-text">Descrizione: {{ project.description }}.</p>
        <p class="card-text">Repository: {{ project.repository_url }}.</p>
         <router-link class="btn btn-success" :to="{ name: 'project-page', params: { slug: project.slug } }">Dettagli</router-link>
        
      </div>
    </div>

</template>

<style lang="scss">
</style>