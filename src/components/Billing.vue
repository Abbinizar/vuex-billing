<template>
  <div id="app">
    <b id="title">LIST BARANG</b>
    <div v-for="(a, index) in menu" :class="a.active?'unselect':'selected'" :key="index">
      <div href="#" @click ='pilih(index)' class="pilihan">
        <b class="">{{barang}}</b>
        <b class="kanan">Rp. {{harga}}</b>
      </div>
    </div>
    <div class="pilihan total">
      <b class="">TOTAL : </b>
      <b class="kanan">Rp. {{total}}</b>
    </div>
    <button class="tombol" @click="bayar"> Bayar Tagihan </button>
  </div>
</template>
<script>
export default {
    methods: {
        pilih(index) {
            this.$store.commit('pilih')
        },
        bayar(){
            this.$store.commit('bayar')
        }
    },
    computed: {
        menu(){
            return this.$store.getters.getMenu
        },
        barang(){
            return this.$store.getters.getBarang
        },
        harga(){
            return this.$store.getters.getHarga
        },
        total(){
            return this.$store.getters.getTotal
        }
    }
}
</script>

<style scoped>
body{
  font-family: sans-serif;
  font-size: 20px;
  color: white;
}
#judul{
  font-size: 35px;
  text-align: center;
  display: block;
  margin-top: 50px;
  margin-bottom: 20px;
  color: blue;
}
#app{
  width: 500px;
  margin: 0 auto;
  display: block;
}
.pilihan{
  padding: 15px;
  margin-top: 5px;
  cursor: pointer;
}
.unselect{
  background: green;
  color: white;
}
.selected{
  background: grey;
  color: white;
}
.kanan{
  float: right;
}
.total{
  border-top: 1px solid red;
  border-bottom: 1px solid red;
}
.hasil{
  color: green;
}
.tombol{
  font-family: sans-serif;
  font-size: 20px;
  padding: 10px;
  border: 1px grey solid;
  display: block;
  margin: 0 auto;
  color: white;
  background: blue;
  margin-top: 30px;
  border-radius: 5%;
}
.tombol:hover{
  background: orange;
  color:white;
}
</style>
