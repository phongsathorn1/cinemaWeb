<template>
    <div class="card">
        <div class="row">
            <div class="col-3" v-for="day in days" @click="selected(day)" :key="day.day">
                <span>{{day.day}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["days"],
    // props: {
    //     days: Array
    // },
    mounted(){
        this.selected(this.days[0])
    },
    methods:{
        selected(day){
            this.$emit('selected-day', day)
        }
    }
}
</script>

<style lang="scss">

</style>
