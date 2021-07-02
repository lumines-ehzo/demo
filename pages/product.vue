<template>
  <div class="template-product">
    <div class="warpper-container">
      <div class="main-content container">
        <div class="breadcrumb"></div>
        <div class="row">
          <div class="col-xs-12">
            <div class="product">
              <div class="row">
                <div class="col-xs-12 col-sm-7 product-img-box">
                  <div class="product-photo-container">
                    <a>
                      <div
                        style="height: 600px; width: 600px"
                        class="zoomWrapper"
                      >
                        <img
                          src="~/assets/cruzade-dark-label-8-0-deck.png"
                          style="position: absolute"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-5 product-shop">
                  <header class="product-title">
                    <h2 itemprop="name">
                      <span class="lang"
                        >Preduce TRK Stone Giant SHLtech+ Yellow Skateboard Deck
                        8 x 31.75</span
                      >
                    </h2>
                  </header>
                  <div itemprop="offers">
                    <div class="product-description"></div>
                    <from>
                      <div class="prices">
                        <span class="price" itemprop="price"
                          ><span class="money" data-currency-thb="฿ 1,500"
                            >฿ 1,500</span
                          ></span
                        >
                      </div>
                      <label
                        for="quantity"
                        data-translate="cart.label.quantity"
                        style="visibility: visible"
                        >จำนวน</label
                      >
                      <button class="dec button" @click="minus">-</button>
                      <input type="text" v-model="value" id="quantity" />
                      <button class="inc button" @click="plus">+</button>
                    </from>
                    <button
                      class="btn"
                      name="add"
                      type="submit"
                      @click="addToCart"
                    >
                      สั่งซื้อสินค้า
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'nav',
  data() {
    return {
      value: 0,
      total: 0,
      kai: 0,
      id:1
    }
  },
  mounted() {
    if (localStorage.total) {
      this.kai = localStorage.getItem('total')
      this.total = parseInt(this.kai)
    }
  },
  methods: {
    plus() {
      this.value = this.value + 1
    },
    minus() {
      this.value = this.value - 1
      if ((this.value = 0)) {
        return 0
      }
    },
    addToCart() {
      this.total = this.total + this.value
      localStorage.setItem('total', JSON.parse(this.total))
      localStorage.setItem('id', JSON.parse(this.id))
      window.location = 'product'
    },
  },
}
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.main-content {
  display: block;
  padding-bottom: 50px;
  min-height: 450px;
}
img {
  height: 100%;
}
form {
  display: block;
  margin-top: 0em;
}
.breadcrumb {
  margin-bottom: 34px;
  background: 0 0;
  padding: 15px 0 0;
}
.product-shop .prices,
.product-shop .total-price {
  padding: 15px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.product-shop .prices {
  display: block;
  margin-bottom: 22px;
  clear: both;
}
.product-shop #quantity,
.product-shop .quantity {
  text-align: center;
  background: #ddd;
}
.product-shop #quantity,
.product-shop .quantity {
  width: 50px;
}
#quantity {
  width: 100px;
  margin-bottom: 22px;
}
input[type='text'] {
  padding: 5px 10px;
  line-height: 1.35;
  height: 36px;
  border: 1px solid #cbcbcb;
}
.col-xs-12 {
  width: 100%;
}
.col-xs-12 {
  float: left;
}
.col-xs-12 {
  position: relative;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
}
.row {
  margin-right: -10px;
  margin-left: -10px;
}
.product-shop .price {
  font-size: 24px;
  font-weight: 700;
  color: #000;
}
.btn {
  min-width: 0;
  width: 100%;
  border: 2px solid #000;
  background-color: #000000;
  color: #ffffff;
  border-color: #000000;
}
.btn {
  margin: 0 60px 30px 0;
  height: 48px;
  min-width: 320px;
  float: left;
  clear: both;
}
.btn:hover {
  background-color: white;
  color: black;
}
button[type='submit'] {
  -webkit-appearance: button;
  cursor: pointer;
}
</style>
