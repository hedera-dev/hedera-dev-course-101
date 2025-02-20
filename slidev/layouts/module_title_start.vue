<template>
  <div class="hdct slidev-layout module_title_start">
    <div class="slide">
      <div class="title">
        <slot name="title" />
      </div>
      <div class="subtitle">
        <slot name="subtitle" />
      </div>
      <div class="speaker">
        <slot name="speaker" />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
