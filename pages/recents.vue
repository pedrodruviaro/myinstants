<script setup lang="ts">
useSeoMeta({
  title: "Recentes",
})
const { data } = await useFetch("/api/instants/recents")
</script>

<template>
  <pre>{{ data }}</pre>
</template>
