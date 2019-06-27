<template>
  <div class="hero relative content-block">
      <img alt="hero img" class="hide-dark" width="946" height="auto" src="../images/hero.gif" />
      <img alt="hero img dark" class="show-dark" width="946" height="auto" src="../images/hero-dark.png" />
    
    

    <div class="hero-block links">
      <a href="https://github.com/etclabscore/ethclassic-dev-website" target="_blank" title="Fork This Page (Github)" class="sm-hide md-hide"><button>Contribute to this site.</button></a>

      <a href="https://github.com/etclabscore/ethclassic-dev-website" target="_blank" title="Fork This Page (Github)" class="md-up-hide">
          <img alt="Github" class="hide-dark" src="../images/icon-github.svg" />
          <img alt="Github" class="show-dark" src="../images/icon-github-white.svg" />
      </a>
    
      <SearchBox v-if="$site.themeConfig.search !== false"/>
    </div>
  </div>
</template>

<script>

  import SearchBox from './SearchBox.vue'


  export default {
    components: { SearchBox }
  }
</script>

<style lang="stylus" scoped>
  @require '../styles/config'

  .hero
    padding 2em
    max-width 60vw

    img
      max-width 100%
      height auto !important
      margin 0 auto
      display block

  .hero-block
    position absolute

    .header
      position absolute
      margin-left: -1.1em
    .content
      padding-top $lhRegular

    &.links
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);

    // &.learn
    //   top 9em
    //   right 2.5em

    // &.use
    //   top 18em
    //   left 0.5em

    // &.build
    //   top 22em
    //   right 7.5em

  @media screen and (max-width $breakL)
    .hero
      margin-top 1em
      max-width 70vw

    .hero-block
      &.beginners
        top 4em
        left 3.5em

      &.learn
        top 6em
        right 0em

      &.use
        top 14em
        left 0.5em

      &.build
        top 17em
        right 3.5em

  @media screen and (max-width $breakS)
    .hero
      max-width 90vw

</style>
