<template>
  <div class="highlight">
    <p>Football from https://www.scorebat.com/video-api/v1/</p>
    <div class="">
      <div class="element col-4 col-lg-4 col-md-4 col-sm-1 col-xs-1 float-left" v-for="(item, i) in matchs" v-bind:key="i">


       <div class="england" v-if="item.competition.name == 'ENGLAND: Premier League'">
         ENGLAND: Championship
         <div class="videos" v-for="(vd, j) in item.videos" v-bind:key="j" v-html="vd.embed">

         </div>
         <p>Title: {{ item.title}}</p>
         <p>Datum: {{ item.date }}</p>
       </div>

        <div class="england" v-if="item.competition.name.indexOf('CHAMPIONS LEAGUE: Group stage') > -1">
          C1 Championship
          <div class="videos" v-for="(vd, j) in item.videos" v-bind:key="j" v-html="vd.embed">

          </div>
          <p>Title: {{ item.title}}</p>
          <p>Datum: {{ item.date }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Highlight",
  data(){
    return {
      matchs: null,
      count: 0
    }
  },
  created: function () {
    axios.get("https://www.scorebat.com/video-api/v1/")
    .then(res => {
      this.matchs = res.data;
      console.log(res);
    });
  }

}
</script>

<style scoped>

</style>