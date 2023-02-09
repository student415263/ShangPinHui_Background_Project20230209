<template>

  <!-- <div class="dashboard-text">name: {{ name }}</div>
  <div>1222</div> -->
  <card />

</template>

<script>
import { mapGetters } from 'vuex'
import card from './card'
export default {
  name: 'Dashboard',
  components: {
    card
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
