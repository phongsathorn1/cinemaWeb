<template>
    <div class="step-bar">
        <div class="card">
            <ul class="desktop-step-bar">
                <li class="step-item" :class="{active: step == 1}" @click="selected(1)">
                    <div class="no">1</div>
                    <div class="step-name">เลือกรอบฉาย</div>
                </li>
                <li class="step-item" :class="{active: step == 2}" @click="selected(2)">
                    <div class="no">2</div>
                    <div class="step-name">เลือกที่นั่ง</div>
                </li>
                <li class="step-item" :class="{active: step == 3}">
                    <div class="no">3</div>
                    <div class="step-name">ชำระเงิน</div>
                </li>
                <li class="step-item" :class="{active: step == 4}">
                    <div class="no">4</div>
                    <div class="step-name">เสร็จสิ้น</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ["step"],
    data: () => {
        return {
            // stepBar: 0
        }
    },
    // created(){
    //     this.stepBar = this.step
    // },
    methods:{
        selected(num){
            if(this.step >= num && this.step < 4){
                this.$emit('back', num)
            }
        }
    }
}
</script>

<style lang="scss">
.step-bar{
    margin-bottom: 20px;
}

.desktop-step-bar{
    margin: 0;
    padding: 0;
}
.desktop-step-bar .step-item{
    list-style-type: none;
    width: 25%;
    float: left;
    font-size: 12px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
}

.desktop-step-bar .step-item .no{
    color: #c6c7c7;
    border: 2px solid #55b776;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    line-height: 32px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    z-index: 2;
    background: #2b2b2b;
}

.desktop-step-bar .step-item.active .no{
    border: 2px solid #55b776;
}

.desktop-step-bar .step-item:before{
    width: 30px;
    height: 30px;
    line-height: 27px;
    border: 2px solid #55b776;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: #55b776;
}

.desktop-step-bar .step-item:after{
    width: 100%;
    height: 2px;
    content: '';
    position: absolute;
    background-color: #55b776;
    top: 15px;
    left: -50%;
    z-index: 1;
}

.desktop-step-bar .step-item:first-child:after{
    content: none;
}

.desktop-step-bar .step-item.active:before{
    border-color: #55b776;
}

.desktop-step-bar .step-item.active ~ .step-item::after {
    background-color: #ffffff;
}

.desktop-step-bar .step-item.active ~ .step-item .no{
    border: 2px solid #ffffff;
}

</style>
