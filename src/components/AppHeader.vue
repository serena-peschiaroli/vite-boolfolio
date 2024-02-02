<script>

import { links } from '../routes';

export default {
    props: { 
        links: Array,
    },
    data() {
        return{
            
        }
    }
}


</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav d-flex gap-4 ms-auto">
            <li class="nav-item" v-for="link in  links " :key="link.name">
              <router-link :to="{ name:link.name}"> {{ link.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

</template>

<style lang="scss" scoped>

ul {
    li {
        a {
            text-decoration: none;
            color: white;

            &:hover {
                text-decoration: underline;
                
            }
        }
    }
}

</style>