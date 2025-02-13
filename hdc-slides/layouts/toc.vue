<template>
  <div class="slidev-layout toc">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="contents">
      <v-clicks>
        <slot name="contents" />
      </v-clicks>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
