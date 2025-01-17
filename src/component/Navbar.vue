<template>
  <div class=" w-screen bg-blue-200 border-blue-100 border justify-items-center">
    <div class="relative flex h-16 items-center">
      <span
          class="text-blue-400 text-2xl font-bold">
        Daftar Cuti Indonesia {{store.years}}
      </span>
    </div>
  </div>
</template>
<script setup>
import {store} from "../store/store.js";
</script>
