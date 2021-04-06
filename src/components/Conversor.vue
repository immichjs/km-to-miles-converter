<template>
  <div class="flex items-center justify-center w-full h-screen bg-purple-100">
    <form class="flex flex-col items-center justify-center gap-4 p-10 bg-white rounded-md shadow-md">
        <h1 class="mb-5 text-xl">Conversor de Km para Milhas</h1>
        <input
            type="text"
            :class="tailwindClasses"
            placeholder="Km"
            v-model="km"
        >
        <input 
            type="text"
            :class="tailwindClasses"
            placeholder="Aqui aparecerá os Km convertido"
            v-model="mile"
            :style="{ color: 'rgb(124, 58, 237)' }"
            disabled
        >
        <button
            type="submit"
            class="px-6 py-4 font-semibold text-purple-600 duration-200 bg-white border-2 rounded shadow-sm hover:bg-purple-600 hover:text-white hover:border-transparent focus:outline-none"
            @click="submit($event)"
        >Converter</button>
    </form>
  </div>
</template>

<script>

export default {
    data() {
        return {
            km: '',
            mile: '',
            tailwindClasses: 'text-gray-600 font-semibold text-center w-80 p-4 duration-200 border-2 rounded-md outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent',
        }
    },
    methods: {
        submit (event) {
            event.preventDefault()
            const kmConvert = Number((this.km / 1.609).toFixed(4))

            this.mile = [kmConvert ? `Aproximadamente ${kmConvert} Milhas` : 'Valor inválido']
        }
    }
}
</script>
