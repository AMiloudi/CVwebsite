<template>
  <div class="Header">
    <div>
      <h1>{{ msg }}</h1>
    </div>
    <div>
      <b-dropdown id="ddown1" class="m-md-2" variant="dark">
        <b-dropdown-item><router-link to="/Education">Opleiding</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/WorkExperience">Work Experience</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/Internships">Internships</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/Skills">Skills</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/Extra">Extra</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/Contact">Contact</router-link></b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        msg: 'Anissa Miloudi'
        }
      }
  }
</script>

<style scoped>
.Header {
  background-color: #b30000;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

h1 {
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  text-align: left;
  margin-left: 1rem;
  margin-top: 0.5rem;
}
router-link {
  text-decoration: none;
}
</style>
