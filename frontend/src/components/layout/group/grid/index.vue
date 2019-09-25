<template>
    <div :class="toCssClasses()"><slot></slot></div>
</template>
<script>
export default {
  props: {
    numbers: String
  },
  methods: {
    toCssClasses() {
      const cols = this.numbers ? this.numbers.split(" ") : [];
      let cssClass = "";

      if (cols[0]) cssClass += `col-xs-${cols[0]}`;
      if (cols[1]) cssClass += ` col-sm-${cols[1]}`;
      if (cols[2]) cssClass += ` col-md-${cols[2]}`;
      if (cols[3]) cssClass += ` col-lg-${cols[3]}`;

      return cssClass;
    }
  }
};
</script>
