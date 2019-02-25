<template>
    <div class="booking-seat-list">
        <div class="card">
            <table class="table-seat-map">
                <tbody>
                    <tr>
                        <td></td>
                        <td colspan="17">
                            <div style="background:#717171;padding:10px">
                            จอภาพ
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="19">
                            <div class="walkway empty">
                            </div>
                        </td>
                    </tr>
                    <tr v-for="n in 8" :key="n">
                        <td>{{ rows[n-1] }}</td>
                        <td v-for="m in 17" :key="m">
                            <seat-button 
                            :seat="rows[n-1]+m"
                            @toggle-seat="toggleSeat($event)"
                            >
                            </seat-button>
                        </td>
                        <td>{{ rows[n-1] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import SeatButton from './seatButton.vue'

export default {
    props: ["selected"],
    components:{
        SeatButton
    },
    data:() => {
        return {
            rows: ["A", "B", "C", "D", "E", "F", "G", "H"]
        }
    },
    methods:{
        toggleSeat(event){
            this.$emit('toggle-seat', event)
        }
    }
}
</script>

<style lang="scss">
.table-seat-map{
    width: 100%;
    table-layout: fixed;
    text-align: center;
    margin: 0 auto;
}

.table-seat-map td{
    padding: 0px;
}

.walkway.empty{
    width: 100%;
    height: 20px;
}
</style>
