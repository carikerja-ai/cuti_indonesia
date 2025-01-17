<template>
  <Navbar></Navbar>
  <div class="m-10">
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
      <div v-for="item in store.holiday" :key="item.id">
        <Card
            :tanggal="item.tanggal"
            :keterangan="item.keterangan"
            :is_cuti="item.is_cuti">
        </Card>
      </div>
    </div>
  </div>

<!--  Footer-->
  <div class="justify-items-center mb-5">
    <div class="items-center">
      <span class="text-blue-400 font-bold">CariKerjaAI Team</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/component/Navbar.vue";
import Card from "@/component/Card.vue";
import {store} from "./store/store.js";
import {onMounted} from "vue";

async function fetchingHoliday() {
  const response = await fetch(`https://dayoffapi.vercel.app/api?year=${store.years}`)
  const data = await response.json()
  store.setHoliday(data)
}

onMounted(() => {
  fetchingHoliday()
})
</script>