import { defineStore } from 'pinia'
export const useUserInfo = defineStore("user", {
    state: () => ({
        name: '张三',
        age: 20
    }),
    getters: {}
})