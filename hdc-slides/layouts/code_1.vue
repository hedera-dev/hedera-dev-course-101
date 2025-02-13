<template>
  <div class="slidev-layout code_1">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="tab">
      <slot name="tab" />
    </div>
    <div class="code">
      <slot name="code" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
