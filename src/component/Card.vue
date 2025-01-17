<template>
  <div class="max-w-sm rounded border border-blue-100 overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <span class="text-white inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{{tanggal}}</span>
      <div class="pt-4 font-bold text-xl mb-2">{{keterangan}}</div>
    </div>
    <div class="px-6 pt-2 pb-2">
      <div v-if="is_cuti === true">
        <span class="text-white inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Cuti</span>
      </div>
      <div v-else>
        <span class="text-white inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Tidak Cuti</span></div>
    </div>
  </div>
</template>
<script>
    export default {
      props: [
        'tanggal',
          "keterangan",
          "is_cuti"
      ]
    }
</script>