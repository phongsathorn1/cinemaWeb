<template>
    <div class="day-selector-bar card">
        <div class="row">
            <div class="col-3" v-for="day in days" :key="day.day">
                <div class="day-selector-item" 
                    :class="{active: day.day == selectedDay}"
                    @click="selected(day)"
                >
                    <div class="day">{{getDay(day.day)}}</div>
                    <span>{{day.day}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: ["days"],
    data:() => {
        return {
            selectedDay: null,
            dayOfWeek: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
        }
    },
    mounted(){
        this.selected(this.days[0])
    },
    methods:{
        selected(day){
            this.selectedDay = day.day
            this.$emit('selected-day', day)
        },
        getDay(day){
            return this.dayOfWeek[moment(day, "DD-MM-YYYY").day()]
        }
    }
}
</script>

<style lang="scss">
.day-selector-item{
    text-align: center;
    cursor: pointer;
    border: 2px solid #717171;
    border-radius: 3px;
    padding: 10px;
}

.day-selector-item.active{
    border-color: #55b776;
}
</style>
