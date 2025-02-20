<template>
  <div class="hdct slidev-layout quiz_mcq_5">
    <div class="slide">
      <div class="question">
        <slot name="question" />
      </div>
      <div class="choice_a">
        <slot name="choice_a" />
      </div>
      <div class="choice_b">
        <slot name="choice_b" />
      </div>
      <div class="choice_c">
        <slot name="choice_c" />
      </div>
      <div class="choice_d">
        <slot name="choice_d" />
      </div>
      <div class="choice_e">
        <slot name="choice_e" />
      </div>
      <div class="position">
        <slot name="position" />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
