<template>
  <div>
    <img src="~/assets/lXHIiu.png" alt="" class="wave" />
    <div class="container">
      <div class="img">
        <b-carousel
          id="carousel-fade"
          img-width="500"
          img-height="500"
          :interval="3000"
        >
          <b-carousel-slide
            img-src="~/assets/71IOirzYhuL-removebg-preview.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/620-010-1149_1024x1024-removebg-preview.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/cdbc57913d56aeed24c2b009b40f6eef-removebg-preview.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/cruzade-conspiracy-nefertiti-8-0-deck-removebg-preview.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/cruzade-cruzade-land-8-625-deck.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/cruzade-dark-label-8-0-deck.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/cruzade-face-8-375-deck (1).png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/cruzade-skateboards-the-mutant-speedfreak-complete-skateboard-8-0-x-31-85-p48287-119826_image-removebg-preview.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/Kirasbmock_2048x-removebg-preview.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/Primitive-x-Naruto-Lemos-Sasuke-8.12_-Skateboard-Deck-_322343-front-US-removebg-preview.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/product_c_r_cruzade-illuminaty-pizza-8-0-skateboard-deck-removebg-preview.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/skateboard-hacker-skateboard-deck-1_600x-removebg-preview.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/skateboard-tanjiro-skateboard-deck-1_2048x-removebg-preview.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="~/assets/spitfire-bighead-63mm-skateboard-wheels.1575347386-removebg-preview.png"
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <div class="login-container">
        <form class="form-login">
          <img
            class="avatar"
            src="~/assets/80ba354e329da7df1b135a152a80a04f-removebg-preview.png"
            alt=""
          />
          <h2>Welcome</h2>
          <input v-model="user" type="text" name="username" />
          <label for="user-name" class="input-prefix">Username</label>
          <input v-model="pass" type="password" name="password" />
          <label for="password" class="input-prefix">Password</label>
          <button type="button" class="btn" @click="validatex">Login</button>
          <!-- <input type="submit" class="btn" value="Login"> -->
          <a href="#">Forgot Password?</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      user: '',
      pass: '',
      el: '#all',
    }
  },
  methods: {
    validatex() {
      //   this.$store.commit('todos/set_user', val)
      //   console.log('test', val)
      if (this.user == 'poom' && this.pass == '1234') {
        window.location = 'all'
        localStorage.setItem('username', JSON.stringify(this.user))
      }
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;700&display=swap');
:root {
  --mainColor: #65318a;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none !important;
}

html {
  font-family: 'Source Sans Pro', sans-serif;
}

.wave {
  position: fixed;
  height: 100%;
  left: -55%;
  bottom: 0;
  z-index: -1;
}

.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 0 2rem;
}

.img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.img img {
  width: 500px;
}

.login-container {
  display: flex;
  align-items: center;
  text-align: center;
}

form {
  width: 360px;
  text-transform: uppercase;
}

.avatar {
  width: 100px;
}

form h2 {
  font-size: 2.9rem;
  text-transform: uppercase;
  margin: 15px 0;
  color: #333;
}
.form-login {
  position: relative;
}
.form-login input {
  display: block;
}

.form-login input[type='text'],
.form-login input[type='password'] {
  margin: 10px auto;
  border-radius: 3px;
  padding: 10px;
  padding-left: 100px;
  border: 1px solid #ccc;
  box-shadow: 0 1px 2px 1px #f5f5f5 inset;
  background-color: #fefefe;
  color: #323440;
  width: 100%;
  transition: 0.3s all;
}

.form-login input[type='text']:focus,
.form-login input[type='password']:focus {
  background-color: #f7f9fc;
  border: 1px solid #ccc;
}

.form-login .input-prefix {
  position: absolute;
  color: #888;
  font-size: 14px;
  margin-top: -42px;
  left: 10px;
  cursor: pointer;
  transition: 0.3s all;
}

.form-login .input-prefix:after {
  content: '';
  position: relative;
  display: block;
  top: 100%;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #6b5cff;
  transition: 0.3s all;
}

.form-login input:focus + .input-prefix {
  color: #6b5cff;
}

.form-login input:focus + .input-prefix:after {
  width: 100%;
}

a {
  display: block;
  text-align: center;
  text-decoration: none;
  color: #999;
  font-size: 0.7rem;
  letter-spacing: 3px;
  transition: 0.3s;
  margin: 20px;
}

a:hover {
  color: var(--mainColor);
}

.btn {
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 25px;
  text-transform: uppercase;
  background-color: var(--mainColor);
  color: white;
  border: none;
  letter-spacing: 1px;
  margin-top: 20px;
  transition: 0.5s;
}

.btn:hover {
  background-color: #5245ca;
  color: white;
}

@media screen and (max-width: 1024px) {
  form {
    width: 290px;
  }

  .login-container h2 {
    font-size: 2.4rem;
    margin: 8px 0;
  }

  .wave img {
    width: 100%;
  }
  .img{
      width: 300px;
  }
}

@media screen and (max-width: 425px) {
  body {
    background-color: var(--mainColor);
  }

  .container {
    grid-template-columns: 1fr;
  }

  .img {
    display: none;
  }

  .wave {
    display: none;
  }

  .login-container {
    justify-content: center;
    color: var(--mainColor);
  }
  .form-login .input-prefix{
      display: none;
  }

  .form-login {
    padding: 40px;
    background-color: #fff;
    width: 100%;
    border-radius: 8px;
    box-shadow: 3px 3px 15px rgba(88, 34, 160, 0.2);
  }
}
</style>
