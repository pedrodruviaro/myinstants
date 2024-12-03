<script setup lang="ts"></script>

<template>
  <div class="flex min-h-full">
    <MenuNavigation />

    <MainContent>
      <slot />
    </MainContent>
  </div>
</template>
