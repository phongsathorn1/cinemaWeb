<template>
    <div class="payment-methods">
        <h3>เลือกช่องทางการชำระเงิน</h3>
        <ul id="payment-methods" class="list-group list-group-horizontal payment-methods-list">
            <li class="list-group-item" @click="select('cash')">
                เงินสด
            </li>
            <li class="list-group-item" @click="select('credit-card')">
                บัตรเครดิต / บัตรเดบิต
            </li>
            <li class="list-group-item" @click="select('promptpay')">
                พร้อมเพย์ (PromptPay)
            </li>
        </ul>

        <div id="cash" class="payment-dialog" v-if="method == 'cash'">
            คุณสามารถชำระเงินได้ที่หน้าเคาท์เตอร์ โดยนำ QR Code ที่ท่านได้รับหลังจากกด "ชำระเงิน"
        </div>

        <div id="creditcard" class="payment-dialog" v-if="method == 'credit-card'">
            <p class="payment-help">กรุณากรอกรายละเอียด</p>
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
            QR Code
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
            }
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
    // border: 1px solid $border-color;
    padding: 20px;
    margin-top: 20px;
}

.payment-help{
    font-size: 20px;
}

.payment-methods{
    margin-top: 20px;
}

.payment-methods-list .list-group-item{
    cursor: pointer;
}

.payment-methods-list .list-group-item:hover{
    background-color: $third-color;
}
</style>
