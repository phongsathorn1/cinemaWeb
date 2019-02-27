<template>
    <div class="step-bar">
        <div class="row">
            <div class="col-md-2 text-center">
                <button class="btn btn-success" @click="$emit('back', step-1)">ย้อนกลับ</button>
            </div>
            <div class="col-md-10">
                <div class="step-bar-container">
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
        </div>
    </div>
</template>

<script>
export default {
    props: ["step"],
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
@import '../../style/main.scss';

.step-bar{
    margin-bottom: 20px;
    padding: 20px 0px;
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
    border: 2px solid $stepbar-accent-color;
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
    background: #000000;
    cursor: pointer;
}

.desktop-step-bar .step-item .no:hover{
    background: $stepbar-accent-color;
    color: #000000;
}

.desktop-step-bar .step-item.active .no{
    border: 2px solid $stepbar-accent-color;
    background: $stepbar-accent-color;
    color: #000000;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.85);
}

.desktop-step-bar .step-item:before{
    width: 30px;
    height: 30px;
    line-height: 27px;
    border: 2px solid $stepbar-accent-color;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: $stepbar-accent-color;
}

.desktop-step-bar .step-item:after{
    width: 100%;
    height: 2px;
    content: '';
    position: absolute;
    background-color: $stepbar-accent-color;
    top: 15px;
    left: -50%;
    z-index: 1;
}

.desktop-step-bar .step-item:first-child:after{
    content: none;
}

.desktop-step-bar .step-item.active:before{
    border-color: $stepbar-accent-color;
}

.desktop-step-bar .step-item.active ~ .step-item::after {
    background-color: $stepbar-color;
}

.desktop-step-bar .step-item.active ~ .step-item .no{
    border: 2px solid $stepbar-color;
    cursor: default;
}

.desktop-step-bar .step-item.active ~ .step-item .no:hover{
    background: #2b2b2b;
    color: #c6c7c7;
}

</style>
