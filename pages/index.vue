<template>
  <section class="container">
    <div>
      <h1>
        {{vuexUser.userName}}
      </h1>
      <a-button type="primary">
        Primary
      </a-button>
    </div>
  </section>
</template>

<script lang='ts'>
import Logo from '~/components/Logo.vue';
import { Vue, Component } from 'vue-property-decorator';
import Banner from '~/assets/images/banner.jpg'
import User ,{ VuexUser } from '@/store/modules/user';

@Component({
  layout: 'test',
  components: {
    Logo
  }
})
export default class Home extends Vue {
  public vuexUser: User = VuexUser;
  mounted() {
    console.log('env', process.env.BaseUrl)
    this.vuexUser.getUserName()
  }
}
</script>

<style lang='less'>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: @bj;
  h1 {
    color: inherit;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
