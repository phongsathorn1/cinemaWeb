<template>
    <div class="seat-type-block">
        <div class="d-flex flex-row mb-3">
            <div class="p-2 flex-fill bd-highlight">
                <div class="seat-icon"></div>
            </div>
            <div class="p-2 bd-highlight">
                <div class="seat-name">ที่นั่ง <span class="seat-num">{{seat}}</span>
                </div>
                <div class="seat-option">
                    <select v-model="selectedType" @change="change">
                        <option value="none">---กรุณาเลือก---</option>
                        <option value="adult">ผู้ใหญ่</option>
                        <option value="child">เด็ก</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="alert alert-danger" v-if="validate()" role="alert">
            กรุณาเลือกประเภทของบัตร
        </div>
    </div>
</template>

<script>
export default {
    props:["type", "seat", "showWarn"],
    data: () => {
        return {
            selectedType: "none"
        }
    },
    created(){
        this.selectedType = this.type
    },
    methods:{
        change(){
            this.$emit('change', this.selectedType)
        },
        validate(){
            return this.showWarn && this.selectedType == "none"
        }
    }
}
</script>

<style lang="scss">
@import '../../style/main.scss';

.seat-type-block{
    padding: 20px 10px;
    border-bottom: 1px solid $border-color;
}

.seat-icon{
    background-image: url('../../assets/seat.svg');
    background-position-x: center;
    background-repeat: no-repeat;
}

@media print{
    .seat-icon{
        background-image: url('../../assets/seat-black.svg') !important;
        -webkit-print-color-adjust: exact !important;
    }
}
</style>
