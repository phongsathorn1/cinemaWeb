<template>
    <div id="registered-success">
        <div class="container">
            <div class="card">
                <h1>สมัครสมาชิกเรียบร้อย</h1>
                <p>ท่านสามารถใช้ Email และ รหัสผ่านที่ท่านสมัคร เพื่อเข้าสู่ระบบได้</p>
                <button @click="gotoLogin" class="btn btn-light">เข้าสู่ระบบ</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        gotoLogin(){
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss">

</style>
