<template>
  <ul class="booking-order">
    <li v-for="seat in booking.seats" :key="seat.seat">
      <div class="booking-order-item">
        <div class="row">
          <div class="col-2">
            <div class="seat-icon"></div>
          </div>
          <div class="col-10">
            <div class="booking-order-header">{{seat.seat}}</div>
            <div class="booking-order-detail">ประเภท: {{getTypeName(seat.type)}}
              <br>
              <div class="booking-item-price">ราคา: {{seat.price}} บาท</div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
    props: ["booking"],
    methods:{
      getTypeName(seatType){
        switch(seatType){
          case "adult":
            return "ผู้ใหญ่"
          case "child":
            return "เด็ก"
          default:
            return "ไม่ได้ระบุ"
        }
      }
    }
}
</script>

<style>
.booking-order{
    list-style: none;
    padding: 0px 20px;
}

.booking-order .booking-order-item{
    padding: 20px 15px;
    border-bottom: 1px solid #636363;
}

.booking-order li:last-child .booking-order-item{
    border-bottom: none;
}

.booking-order .booking-order-header{
    font-size: 25px;
    font-weight: bold;
}

.booking-order .booking-item-price{
    border: 1px solid #55b776;
    display: inline-block;
    padding: 3px 8px;
    border-radius: 10px;
    margin-top: 10px;
}
</style>
