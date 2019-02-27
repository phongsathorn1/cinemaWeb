<template>
  <div class="booking-theater-list">
    <template v-if="theaters">
      <div class="booking-theater-item" v-for="location in theaters.locations" :key="location.name">
        <div class="booking-theater-location">{{location.name}}</div>
        <div class="booking-theater" v-for="theater in location.theaters" :key="theater.name">
            <div class="row">
                <div class="col-md-3">
                    <h3>{{theater.name}}</h3>
                </div>
                <div class="col-md-9">
                    <div class="booking-theater-times">
                        <button
                            class="btn btn-time"
                            v-for="time in theater.times"
                            @click="selected(location, theater, time)"
                            :key="time"
                        >{{time}}</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["theaters"],
  methods: {
    selected(location, theater, time) {
      var selectedData = {
        location: location.name,
        theater: theater.name,
        round: time
      };
      this.$emit("selected", selectedData);
    }
  }
};
</script>

<style lang="scss">
@import '../../style/main.scss';

.booking-theater-list {
    margin-top: 10px;
}

.btn-time{
  background: $secondary-bg-color;
  border: 1px solid $border-color;
  color: #F0F0F0;
}

.btn-time:hover{
  border-color: $accent-color;
  color: $accent-color;
}
.booking-theater-item {
    background: #2b2b2b;
    padding: 15px 20px;
    border-bottom: 1px solid #717171;
}

.booking-theater-item:last-child {
    border-bottom: none;
}

.booking-theater {
    padding: 20px 5px;
}

.booking-theater-times .btn{
    margin: 0px 5px;
    font-size: 16px;
    padding: .2rem .75rem;
}

.booking-theater-times .btn:first-child{
    margin-left: 0px;
}

.booking-theater-location{
    font-size: 20px;
    background: #3e3e3e;
    padding: 5px 10px;
    font-weight: bold;
}

.booking-theater h3{
    font-size: 20px;
    margin-bottom: 0px;
    vertical-align: middle;
}
</style>
