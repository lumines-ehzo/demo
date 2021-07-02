<template>
  <div class="site-header">
    <div class="container">
      <div class="leftcol col">SKATESHOP</div>
      <div class="middlecol col">
        <div class="site-title">
          <a href="/all"
            ><img
              src="~/assets/80ba354e329da7df1b135a152a80a04f-removebg-preview.png"
              class="logo"
          /></a>
        </div>
      </div>
      <div class="rightcol col">
        <div class="widgetcart">
          <div class="top-header">
            <div class="wrapper-top-cart">
              <div class="top-cart">
                <span class="icon"
                  ><img
                    class="cart"
                    src="~/assets/shopping-cart.png"
                    v-b-modal.modal-center
                  />
                  <b-modal id="modal-center" centered title="รายการสินค้า">
                    <p class="list" v-if="this.id == 1">
                        <p v-for="value in product">{{value}}</p>
                    </p>
                    <p class="list" v-if="this.id == 2">
                        <p v-for="value in product2">{{value}}</p>
                    </p>
                  </b-modal>
                  <span class="cart-quantity">{{ total }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="account">
          <span>{{ username }}</span>
          <a href="/login" @click="logout">Logout</a>
        </div>
      </div>
    </div>
    <div class="navbar">test</div>
    <nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      total: 0,
      name: '',
      kai: '',
      id: 0,
      product: {
          name: 'Preduce TRK Stone Giant SHLtech+ Yellow Skateboard Deck 8 x 31.75', 
          price: '1500' 
        },
    product2: {
          name: 'cruzade-face-8-375-deck', 
          price: '1500' 
        },
    }
  },
  mounted() {
    if (localStorage.username) {
      this.username = localStorage.getItem('username')
    }
    if (localStorage.total) {
      this.total = localStorage.getItem('total')
    }
    if (localStorage.id) {
      this.kai = localStorage.getItem('id')
      this.id = parseInt(this.kai)
    }
  },
  methods: {
    logout() {
      localStorage.clear()
      alert('logout')
    },
  },
}
</script>

<style scope>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.site-header .middlecol {
  text-align: center;
}
.site-header .leftcol {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.site-header .rightcol {
  display: flex;
  flex-flow: row nowrap;
  text-align: right;
  align-items: center;
  justify-content: flex-end;
}
.site-header .rightcol > div {
  margin-left: 15px;
}
.cart-quantity {
  position: relative;
  background: #0690f0;
  color: #fff;
  border-radius: 11px;
  margin-left: -15px;
  top: -10px;
  font-size: 13px;
  font-weight: bold;
  display: inline-block;
  width: 22px;
  height: 22px;
  padding-top: 3px;
  text-align: center;
}
.site-header > .container {
  padding: 20px 15px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
}
.logo {
  width: 170px;
}
.cart {
  width: 25px;
}
.container {
  padding-right: 10px;
  padding-left: 10px;
  margin-right: auto;
  margin-left: auto;
}
.navbar {
  color: #fff;
  width: 100%;
  border: 1px solid #cccccc;
  background-color: #000000;
  padding: 20px;
}
</style>
