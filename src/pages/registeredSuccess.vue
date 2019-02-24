<template>
    <div id="registered-success">
        <h1>Registered Success</h1>
        <button @click="gotoLogin">Go to login</button>
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
