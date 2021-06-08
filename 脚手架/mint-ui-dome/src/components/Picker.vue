<template>
  <div>
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
  </div>
</template>
<script>
export default {
  name: "Picker",
  data() {
    return {
      popupVisible: true,
    };
  },
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
  },
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06",
          ],
          className: "slot1",
          textAlign: "right",
        },
        {
          divider: true,
          content: "-",
          className: "slot2",
        },
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06",
          ],
          className: "slot3",
          textAlign: "left",
        },
      ],
    };
  },
};
</script>
<style lang="">
</style>