<template>
  <div class="hdct slidev-layout blank_canvas">
    <div class="slide">
      <div class="title">
        <slot name="title" />
      </div>
      <div class="default">
        <slot />
      </div>
      <div class="logo">
        <img src="../../img/gitpod-open-button.svg" alt="Logo" />
      </div>
      <div class="footer">
        <span>Brendan Graetz</span>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.hdct.blank_canvas .slide {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 12fr) minmax(0, 2fr);
  grid-template-rows: minmax(0, 1fr) minmax(0, 6fr) 2em;
  grid-template-areas:
    "title title logo"
    ". def def"
    "footer footer footer";
  column-gap: 0.25em;
  row-gap: 0.25em;
  /* border: 2px dashed yellow; */
}

.hdct.blank_canvas .title {
  grid-area: title;
  /* border: 2px dashed red; */
}

.hdct.blank_canvas .logo {
  grid-area: logo;
  /* border: 2px dashed green; */
}

.hdct.blank_canvas .default {
  grid-area: def;
  /* border: 2px dashed blue; */
}

.hdct.blank_canvas .footer {
  grid-area: footer;
  /* border: 2px dashed purple; */
}
</style>
