

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  render(h){
    return h(HelloWorld,{props:{msg:'sha'}},'hellow')
  }
}
</script>
