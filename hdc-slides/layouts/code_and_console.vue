<template>
  <div class="slidev-layout code_and_console">
    <div>
      <slot />
    </div>
    <div class="title">
      <slot name="title" />
    </div>
    <div class="tab">
      <slot name="tab" />
    </div>
    <div class="code">
      <slot name="code" />
    </div>
    <div class="console">
      <slot name="console" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
