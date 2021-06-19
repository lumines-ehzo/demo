<template>
  <div>
    <div class="center">
      <div class="left">
        <h1>Welcome</h1>
        <h2>Skate Shop</h2>
        <div class="form">
          <input type="text" placeholder="Username or email" />
          <input type="password" placeholder="Password" />
          <div class="remember">
            <label> <input type="checkbox" /><span>Remember me</span> </label
            ><a href="#">Forgot password?</a>
          </div>
          <button class="login">Login</button>
        </div>
        <div class="register">
          Don't have an account? <a href="#">Click here</a>
        </div>
      </div>
      <div class="right">
        <div class="image image--2">
          <img src="~/assets/cruzade-face-8-375-deck (1).png" />
        </div>
        <div class="image">
          <img src="~/assets/cruzade-cruzade-land-8-625-deck.png" />
        </div>
        <div class="image image--2">
          <img src="~/assets/cruzade-dark-label-8-0-deck.png" />
        </div>
        <div class="image">
          <img src="~/assets/cruzade-conspiracy-nefertiti-8-0-deck.jpg" />
        </div>
        <div class="image image--2">
          <img src="~/assets/cruzade-skateboards-the-mutant-speedfreak-complete-skateboard-8-0-x-31-85-p48287-119826_image.jpg" />
        </div>
        <div class="image image--2">
          <img src="~/assets/Kirasbmock_2048x.png" />
        </div>
        <div class="image image--3">
          <img src="~/assets/product_c_r_cruzade-illuminaty-pizza-8-0-skateboard-deck.jpg" />
        </div>
        <div class="image image--2">
          <img src="~/assets/skateboard-hacker-skateboard-deck-1_600x.jpeg" />
        </div>
        <div class="image image--3">
          <img src="~/assets/skateboard-tanjiro-skateboard-deck-1_2048x.jpeg" />
        </div>
        <div class="image image--2">
          <img src="~/assets/Primitive-x-Naruto-Lemos-Sasuke-8.12_-Skateboard-Deck-_322343-front-US.jpg" />
        </div>
        <div class="image image--2">
          <img src="~/assets/71IOirzYhuL.jpg" />
        </div>
        <div class="image">
          <img src="~/assets/620-010-1149_1024x1024.jpg" />
        </div>
        <div class="image">
          <img src="~/assets/cdbc57913d56aeed24c2b009b40f6eef.jpg" />
        </div>
        <div class="image">
          <img src="~/assets/spitfire-bighead-63mm-skateboard-wheels.1575347386.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style>
* {
  box-sizing: border-box;
}
body {
  width: 100vw;
  height: 100vh;
  font-size: 12px;
  background: linear-gradient(to bottom, #f9f9f9, #e5e5e5);
  overflow: hidden;
  font-family: 'Nunito', sans-serif;
}
@media screen and (max-width: 700px) {
  body .left {
    width: 100vw;
    max-width: 300px;
    padding: 0;
    margin: 35px auto;
  }
  body .right {
    width: 0vw;
  }
}
@media (min-width: 1150px) {
  body .left {
    max-width: 370px;
    padding: 0;
    margin: 35px auto;
  }
}
.inspiration {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px;
  font-size: 12px;
}
.inspiration img {
  width: 25px;
  filter: invert(0.8);
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  transition: transform 0.1s ease-in-out;
}
button:active {
  transform: scale(0.97);
}
button svg,
button img {
  width: 14px;
  height: 14px;
  margin-right: 5px;
  border-radius: 2px;
}
a {
  text-decoration: none;
  color: #0d57ff;
}
a:hover {
  text-decoration: underline;
}
.center {
  display: flex;
}
.left {
  width: 40vw;
}
.right {
  width: 60vw;
}
.left,
.right {
  height: 100vh;
}
.left {
  padding: 35px 40px;
}
.left h1 {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
}
.left h2 {
  font-weight: normal;
  margin-bottom: 40px;
}
.left .form {
  display: flex;
  flex-direction: column;
}
.left .form input[type='text'],
.left .form input[type='password'] {
  width: 100%;
  height: 15px;
  padding: 15px 15px 15px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  outline: none !important;
  border: 1px solid #e7e7e7;
}
.left .form .remember {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 15px 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.left .form .remember label {
  display: flex;
  align-items: center;
}
.left .form .login {
  background: linear-gradient(to right, #4384df, #1aa6f7);
  color: #fff;
}
.left .separator {
  text-align: center;
  margin: 30px 0;
  color: #808080;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.left .separator span {
  display: inline;
  position: relative;
  padding: 0 10px;
}
.left .separator span:before,
.left .separator span:after {
  content: '';
  display: block;
  width: 1000px;
  position: absolute;
  top: 8px;
  border-top: 2px dashed rgba(0, 0, 0, 0.2);
}
.left .separator span:before {
  right: 100%;
}
.left .separator span:after {
  left: 100%;
}
.left button {
  padding: 0;
  background: #fff;
}
.left .register {
  margin-top: 20px;
}
.right {
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  grid-auto-rows: minmax(130px, 1fr);
  grid-gap: 10px;
  transform: translate(20px, -20px);
}
@media screen and (min-width: 1150px) {
  .right {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
}
@media screen and (min-width: 1400px) {
  .right {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: minmax(200px, 1fr);
  }
}
.right .image {
  grid-area: span 1 / span 1;
}
.right .image--2 {
  grid-area: span 2 / span 1;
}
.right .image--3 {
  grid-area: span 3 / span 1;
}
.right img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 7px;
}
</style>
