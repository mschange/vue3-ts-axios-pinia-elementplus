import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountTesterStore = defineStore('code', () => {
    const code = ref(0)
    function increment() {
        code.value++
    }
    return { code, increment }
})


