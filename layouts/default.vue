<template>
  <div>
    <nuxt/>
  </div>
</template>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -ms-overflow-style: ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
}

body {
  background: #f7f9fb;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

form {
  max-width: 400px;
}

form>div {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}

form label {
  align-self: center;
  margin-right: 2rem;
}

form input {
  align-self: center;
  width: 100%;
}

a {
  color: #3e73b9;
  text-decoration: none;
}

.button,
input {
  margin: 7px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid;
  text-decoration: none;
  padding: 10px 10px;
}

.button {
  padding: 10px 30px;
}

.button--green {

  border: 1px solid #0A8754;
  color: #0A8754;
}

.button--green:hover, .button--green.active {
  color: #fff;
  background-color: #0A8754;
}

.button--red {

  border: 1px solid #FE4A49;
  color: #FE4A49;
}

.button--red:hover, .button--red.active {
  color: #fff;
  background-color: #FE4A49;
}

.button--grey {

  border: 1px solid #244572;
  color: #244572;
  text-decoration: none;
}

.button--grey:hover {
  color: #fff;
  background-color: #244572;
}

.button--white {

  border: 1px solid #fff;
  color: #fff;
}

.button--white:hover {
  color: #fff;
  background-color: #3e73b9;
}

.button--blue, .button--blue.active:hover {

  background-color: initial;
  border: 1px solid #3e73b9;
  color: #3e73b9;
}

.button--blue:hover, .button--blue.active {
  color: #fff;
  background-color: #3e73b9;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 3rem;
  color: #35495e;
  letter-spacing: 1px;
  max-width: 100%;
}

.subtitle {
  font-weight: 300;
  font-size: 2rem;
  color: #526488;
  word-spacing: 5px;
  padding: 0 1rem;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

</style>
