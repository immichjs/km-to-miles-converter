<template>
  <div class="flex items-center justify-center w-full h-screen bg-purple-100">
    <Conversor />
  </div>
</template>

<script>
import Conversor from '@/components/Conversor'
export default {
  name: 'App',
  title: 'Km to Miles | Converter',
  components: {
    Conversor
  }
}
</script>
