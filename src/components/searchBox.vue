<template>
    <div class="search-bar">
        <div class="search-dialog">
            <form>
                <div class="row">
                    <div class="col-6">
                        <select class="select-theater" v-model="theather" @change="theaterSearch">
                            <option value="เลือกโรงภาพยนต์">เลือกโรงภาพยนต์</option>
                            <option :value="t" v-for="t in theathers">{{t}}</option>
                            <!-- <option value="เซนทรัล ปิ่นเกล้า">เซนทรัล ปิ่นเกล้า</option>
                            <option value="เซนทรัล เวิร์ล">เซนทรัล เวิร์ล</option> -->
                        </select>
                    </div>
                    <div class="col-6">
                        <div class="input-group mb-3">
                            <input id="searchbox" type="text" class="search-box form-control" placeholder="ค้นหาภาพยนตร์" v-model="keyword" @keyup="search">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props:["theathers"],
    data: () => {
        return {
            keyword: '',
            theather: 'เลือกโรงภาพยนต์'
        }
    },
    methods:{
        search(){
            console.log('change')
            this.$emit('search', this.keyword)
        },
        theaterSearch(){
            this.$emit('theatersearch', this.theather)
        }
    }
}
</script>

<style lang="scss">
@import '@/style/main.scss';

.search-bar{
    margin-bottom: 20px;
}

.search-box{
    border: 1px solid #55b776;
}

.search-dialog{
    background: $third-color;
    width: 700px;
    margin: auto;
    padding: 20px 10px;
    padding-bottom: 10px;
    line-height: 30px;
    border-radius: 3px;
}

.select-theater{
    width: 100%;
    height: 40px;
}
</style>