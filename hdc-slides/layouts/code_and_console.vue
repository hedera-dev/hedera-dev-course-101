<template>
  <div class="hdct slidev-layout code_and_console">
    <div class="slide">
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
      <div class="footer">
        <span>Brendan Graetz</span>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.hdct.code_and_console .slide {
  display: grid;
  grid-template-columns: minmax(0, 8fr) minmax(0, 8fr);
  grid-template-rows: minmax(0, 2fr) 2em minmax(0, 5fr) 2em;
  grid-template-areas:
    "title title"
    "tab tab"
    "code console"
    "footer footer";
  column-gap: 0.25em;
  row-gap: 0.25em;
  /* border: 2px dashed yellow; */
}

.hdct.code_and_console .title {
  grid-area: title;
  /* border: 2px dashed blue; */
}

.hdct.code_and_console .tab {
  grid-area: tab;
  /* border: 2px dashed green; */
}

.hdct.code_and_console .code {
  grid-area: code;
  /* border: 2px dashed red; */
}

.hdct.code_and_console .console {
  grid-area: console;
  /* border: 2px dashed purple; */
}

.hdct.code_and_console .footer {
  grid-area: footer;
  /* border: 2px dashed pink; */
}
</style>
