<template>
    <div class="slidev-layout two-cols">
      <div>
        <slot />
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
    </div>
</template>
