<template>
    <div class="seat-button" :class="{active: clicked}" @click="toggleSeat">
        <div class="seat-status-icon">
            {{seatNum}}
        </div>
    </div>
</template>

<script>
export default {
    props:["seat", "seatNum"],
    data: () => {
        return {
            clicked: false
        }
    },
    methods:{
        toggleSeat(){
            this.clicked = !this.clicked
            
            var data = {
                selected: this.clicked,
                seat: this.seat
            }
            this.$emit('toggle-seat', data)
        }
    }
}
</script>

<style lang="scss">
.seat-button{
    height: 41px;
    width: 100%;
    margin: 5px 0px;
    padding: 5px;
}

.seat-button .seat-status-icon{
    height: 100%;
    border-radius: 100%;
    border: 2px solid #949494;
    line-height: 25px;
}

.seat-button.active .seat-status-icon{
    border-color: #55b776;
    background: #55b776;
    color: #000;
    font-weight: bold;
}
</style>
