<template lang="pug">
  .easter-egg-container
    .pyro
      .before
      .after
    .ee-welcome
      h2 Look at you
      p Just clicking on stuff
      p You have a great, curious mind
      h1 I like your style!
    .cat-image
      button(@click='generateRandomNumber') New Cat
      img.cat(:src='require(`../assets/${catList[randomNumber]}`)')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { cats } from '@/data/data'

@Component({})
export default class EasterEgg extends Vue {
  catList: string[] = []
  randomNumber: number = 0

  mounted() {
    this.catList = cats
    this.generateRandomNumber()
  }

  generateRandomNumber(): void {
    this.randomNumber = Math.floor(Math.random() * 12)
  }
}
</script>

<style lang="scss" scoped>
.easter-egg-container {
  overflow: hidden;
  min-height: 100vh;
  background: rgb(178, 0, 255);
  background: linear-gradient(90deg, #b200ff 0%, #ec0868 51%, #ffbc0a 100%);
}
.ee-welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
}
.cat-image {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .cat {
    max-width: 350px;
  }
}
button {
  font-size: 16px;
  margin-bottom: 20px;
  border: none;
  background-color: #ffbc0a;
  color: #222;
  padding: 20px 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}
button:hover {
  background-color: #b200ff;
  transition: 0.3s all ease-in-out;
  color: #fff;
}
$particles: 50;
$width: 500;
$height: 500;

// Create the explosion...
$box-shadow: ();
$box-shadow2: ();
@for $i from 0 through $particles {
  $box-shadow: $box-shadow,
    random($width)-$width /
      2 +
      px
      random($height)-$height /
      1.2 +
      px
      hsl(random(360), 100, 50);
  $box-shadow2: $box-shadow2, 0 0 #fff;
}
@mixin keyframes($animationName) {
  @-webkit-keyframes #{$animationName} {
    @content;
  }

  @-moz-keyframes #{$animationName} {
    @content;
  }

  @-o-keyframes #{$animationName} {
    @content;
  }

  @-ms-keyframes #{$animationName} {
    @content;
  }

  @keyframes #{$animationName} {
    @content;
  }
}

@mixin animation-delay($settings) {
  -moz-animation-delay: $settings;
  -webkit-animation-delay: $settings;
  -o-animation-delay: $settings;
  -ms-animation-delay: $settings;
  animation-delay: $settings;
}

@mixin animation-duration($settings) {
  -moz-animation-duration: $settings;
  -webkit-animation-duration: $settings;
  -o-animation-duration: $settings;
  -ms-animation-duration: $settings;
  animation-duration: $settings;
}

@mixin animation($settings) {
  -moz-animation: $settings;
  -webkit-animation: $settings;
  -o-animation: $settings;
  -ms-animation: $settings;
  animation: $settings;
}

@mixin transform($settings) {
  transform: $settings;
  -moz-transform: $settings;
  -webkit-transform: $settings;
  -o-transform: $settings;
  -ms-transform: $settings;
}

.pyro > .before,
.pyro > .after {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: $box-shadow2;
  @include animation(
    (
      1s bang ease-out infinite backwards,
      1s gravity ease-in infinite backwards,
      5s position linear infinite backwards
    )
  );
}

.pyro > .after {
  @include animation-delay((1.25s, 1.25s, 1.25s));
  @include animation-duration((1.25s, 1.25s, 6.25s));
}

@include keyframes(bang) {
  to {
    box-shadow: $box-shadow;
  }
}

@include keyframes(gravity) {
  to {
    @include transform(translateY(200px));
    opacity: 0;
  }
}

@include keyframes(position) {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
</style>

