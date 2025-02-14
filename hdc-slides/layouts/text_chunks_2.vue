<template>
  <div class="hdct slidev-layout text_chunks_2">
    <div class="slide">
      <div class="title">
        <slot name="title" />
      </div>
      <div class="chunk_1">
        <slot name="chunk_1" />
      </div>
      <div class="chunk_2">
        <slot name="chunk_2" />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
