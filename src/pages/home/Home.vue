<template>
  <div id="home">
    <nav-bar class="home-div">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
  </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "Home",
        components:{
          NavBar
        },
    }
</script>

<style scoped>
  .home-div{
    background-color: var(--color-tint);
    color:white;
  }


  .home-nav-bar {
    background-color: var(--color-tint);
    color:#fff;

    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;

  }

  .home-tab-control{
    /*两个要混合使用*/
    position: sticky;
    top: 43px;/*顶部navbar的高度*/
    z-index: 9;
  }

  .home-scroller{
    /*height:300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }



</style>
