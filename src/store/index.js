import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [
      {barang: 'Laptop samsung', active: false, harga: 2000},
      {barang: 'Laptop hp', active: false, harga: 3000},
      {barang: 'Laptop lenovo', active: false, harga: 4000},
      {barang: 'Laptop asus', active: false, harga: 5000},
      {barang: 'Laptop apple', active: false, harga: 6000},
      {barang: 'Laptop acer', active: false, harga: 7000}
    ],
    total: 0
  },
  getters: {
    getMenu: state => {
      return state.menu
    },
    getBarang: state => {
      return state.menu.barang
    },
    getHarga: state => {
      return state.menu.harga
    },
    getTotal: state => {
      return state.total
    }
  },
  mutations: {
    pilih (index) {
      this.menu[index].active = !this.menu[index].active
      if (this.menu[index].active === true) {
        this.total += this.menu[index].harga
      } else if (this.menu[index].active === false) {
        this.total -= this.menu[index].harga
      }
    },
    bayar () {
      alert('total tagihan : Rp.' + this.total + '.')
    }
  }
})
