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
</template>
<style scoped>

</style>
