<template>
    <div class="seat-button" :class="{active: clicked}" @click="toggleSeat">
        <div class="seat-status-icon">
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            clicked: false
        }
    },
    methods:{
        toggleSeat(){
            this.clicked = !this.clicked
        }
    }
}
</script>

<style lang="scss">
.seat-button{
    height: 30px;
    width: 100%;
}

.seat-button .seat-status-icon{
    background: #FFF;
    height: 100%;
    margin: 20px 5px;
}

.seat-button.active .seat-status-icon{
    background: #FF0000;
}
</style>
