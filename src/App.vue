<script setup lang="ts">
import { useUserInfo } from './stores/counters';
import { useCountTesterStore } from "./stores/testCounter"

const counter = useUserInfo();
const tester = useCountTesterStore();

</script>

<template>
    <div>
        vue3 + ts + axios + pinia + elementPlus
        <div class="test">
            姓名： {{counter.name}} 年龄： {{counter.age}}
        </div>
        <div @click="tester.increment()">
            测试pinia ----test {{tester.code}}
        </div>
    </div>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
    </ul>
    <router-view />
</template>
<style scoped>

</style>
