<template>
  <div id="home">
    <nav-bar class="home-div">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends"/>
    <home-feature-view></home-feature-view>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeatureView from "./childComps/HomeFeatureView";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView
  },
  created() {
    this.getData()
  },
  data(){
    return{
      banners:[],
      recommends:[],
    }
  },
  methods: {
    getData() {
      let param = {
        url: '/home/multidata'
      }
      this.$http.requestGet(param).then((result) => {
        // console.log(result)
        this.banners=result.data.data.banner.list;
        this.recommends=result.data.data.recommend.list;
      })
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-div {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}


.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;

}

.home-tab-control {
  /*两个要混合使用*/
  position: sticky;
  top: 43px; /*顶部navbar的高度*/
  z-index: 9;
}

.home-scroller {
  /*height:300px;*/
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}


</style>
