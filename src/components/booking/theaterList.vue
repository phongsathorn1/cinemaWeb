<template>
    <div class="booking-theater-list">
        <template v-if="theaters">
            <div class="booking-theater-item" v-for="location in theaters.locations" :key="location.name">
                <div class="booking-theater-location">
                    {{location.name}}
                </div>
                <div class="booking-theater-name" v-for="theater in location.theaters" :key="theater.name">
                    <h3>{{theater.name}}</h3>
                    <div class="booking-theater-times">
                        <button v-for="time in theater.times" @click="selected(location, theater, time)" :key="time">{{time}}</button>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: ["theaters"],
    methods:{
        selected(location, theater, time){
            var selectedData = {
                location: location.name,
                theater: theater.name,
                round: time
            }
            this.$emit('selected', selectedData)
        }
    }
}
</script>

<style lang="scss">
.booking-theater-list{
    margin-top: 10px;
}

.booking-theater-item{
    background: #2b2b2b;
    padding: 15px 20px;
    border-bottom: 1px solid #717171;
}

.booking-theater-item:last-child{
    border-bottom: none;
}
</style>
