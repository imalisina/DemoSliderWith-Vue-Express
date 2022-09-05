<template>
  <div>
    <li v-for="game in gameData" :key="game.id">{{ game.name }} by {{ game.company }}</li>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      gameData: []
    }
  },
  created(){
    axios.get("http://localhost:8000/api/games/all").then((res) => {
      this.$data.gameData = res.data;
    });
  }
}
</script>

<style>

</style>