<template>
  <div class="slidev-layout text_chunks_4">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="chunk_1">
      <slot name="chunk_1" />
    </div>
    <div class="chunk_2">
      <slot name="chunk_2" />
    </div>
    <div class="chunk_3">
      <slot name="chunk_3" />
    </div>
    <div class="chunk_4">
      <slot name="chunk_4" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
