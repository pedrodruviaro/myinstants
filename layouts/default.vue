<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-[max-content_1fr] w-full h-screen">
    <MenuNavigation />
    <MainContent>
      <slot />
    </MainContent>
  </div>
</template>
