import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Download from '@/views/download';

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/download',
      name: 'Download',
      component: Download,
    },
  ],
});
