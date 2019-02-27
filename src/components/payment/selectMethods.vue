<template>
    <div class="payment-methods">
        <h2>เลือกช่องทางการชำระเงิน</h2>
        <ul id="payment-methods" class="list-group list-group-horizontal payment-methods-list">
            <li class="list-group-item" 
            :class="{active: method == 'cash'}"
            @click="select('cash')">
                เงินสด
            </li>
            <li class="list-group-item"
            :class="{active: method == 'credit-card'}"
            @click="select('credit-card')"
            >
                บัตรเครดิต / บัตรเดบิต
            </li>
            <li class="list-group-item" 
            :class="{active: method == 'promptpay'}"
            @click="select('promptpay')">
                พร้อมเพย์ (PromptPay)
            </li>
        </ul>

        <div id="cash" class="payment-dialog" v-if="method == 'cash'">
            <p class="payment-help">คุณสามารถชำระเงินได้ที่หน้าเคาท์เตอร์ โดยนำ QR Code ที่ท่านได้รับหลังจากกด "ชำระเงิน"</p>
        </div>

        <div id="creditcard" class="payment-dialog" v-if="method == 'credit-card'">
            <p class="payment-help">กรุณากรอกรายละเอียด</p>
            <div class="creditcard-support">
                <div class="creditcard-icon visa">visa</div>
                <div class="creditcard-icon mastercard">mastercard</div>
            </div>
            <form>
                <div class="form-group">
                    <label for="name_on_card">ชื่อผู้ถือบัตร</label>
                    <input type="text" class="form-control" name="name_on_card" placeholder="ชื่อผู้ถือบัตร">
                </div>
                <div class="form-group">
                    <label for="card_number">หมายเลขบัตร</label>
                    <input type="text" class="form-control" name="card_number" placeholder="หมายเลขบัตร">
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="card_expiration">หมดอายุ</label>
                            <input type="text" class="form-control" name="card_expiration" placeholder="ดด/ปป">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="card_cvv">CVV</label>
                            <input type="text" class="form-control" name="card_cvv" placeholder="CVV">
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div id="promptpay" class="payment-dialog" v-if="method == 'promptpay'">
            <div class="promptpay-qr">
                <img src="@/assets/promptpay-qr.png">
            </div>
            <p class="payment-help">แสกน QR Code เพื่อชำระเงิน</p>
            <p>เมื่อชำระเงินเสร็จแล้ว กรุณารอสักครู่</p>
        </div>

        <div id="creditcard" class="payment-dialog" v-if="method == null">
            กรุณาเลือกวิธีการชำระเงิน
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            method: null,
            card:{
                name: null,
                number: null,
                expiration: null,
                cvv: null
            },
        }
    },
    methods:{
        select(method){
            event.preventDefault()
            this.method = method

            this.$emit('selected', method)
        }
    }
}
</script>

<style lang="scss">
@import '../../style/main.scss';

.list-group-item{
    background-color: $third-color;
}

.payment-methods-list{
    align-items: center;
    justify-content: center;
}

.payment-dialog{
    background-color: $third-color;
    padding: 20px;
    margin-top: 20px;
    text-align: center;
}

.payment-help{
    font-size: 20px;
    margin-bottom: 0px;
}

.payment-methods{
    margin-top: 20px;
}

.payment-methods-list .list-group-item{
    cursor: pointer;
}

.payment-methods-list .list-group-item:hover{
    background-color: #585858;
    border-color: #585858;
}

.payment-methods-list .list-group-item.active{
    background-color: $accent-color;
    border-color: $accent-color;
    color: #000000;
    font-weight: bold;
}

.promptpay-qr{
    width: 300px;
    margin: 10px auto;
    margin-bottom: 20px;
}

.promptpay-qr img{
    width: 100%;
}

.creditcard-icon{
    display: inline-block;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    width: 110px;
    overflow: hidden;
    text-indent: -1000px;
    padding: 10px 0px;
    position: relative;
    left: 10px;
}

.creditcard-icon.mastercard{
    background-image: url('../../assets/mastercard.svg')
}

.creditcard-icon.visa{
    background-image: url('../../assets/visa.svg')
}

.creditcard-support{
    margin: 20px 0px;
}
</style>
