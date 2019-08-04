<template lang="pug">
  .jumbotron
    .weather-box
      .weather-content(v-if='weatherInfo.city')
        p.city {{ weatherInfo.city }}
        p {{ weatherInfo.temp }}°F
        .weather-condition-container
          p {{ weatherInfo.condition }}
          i.fad.fa-sun(v-if="weatherInfo.icon === '01d'")
          i.fad.fa-moon(v-if="weatherInfo.icon === '01n'")
          i.fad.fa-clouds-sun(v-if="weatherInfo.icon === '02d'")
          i.fad.fa-clouds-moon(v-if="weatherInfo.icon === '02n'")
          i.fad.fa-clouds(v-if="weatherInfo.icon === '03d'")
          i.fad.fa-clouds(v-if="weatherInfo.icon === '03n'")
          i.fad.fa-clouds(v-if="weatherInfo.icon === '04d'")
          i.fad.fa-clouds(v-if="weatherInfo.icon === '04n'")
          i.fad.fa-cloud-drizzle(v-if="weatherInfo.icon === '09d'")
          i.fad.fa-cloud-showers-heavy(v-if="weatherInfo.icon === '10d'")
          i.fad.fa-thunderstorm(v-if="weatherInfo.icon === '11d'")
          i.fad.fa-snowflakes(v-if="weatherInfo.icon === '13d'")
          i.fad.fa-smoke(v-if="weatherInfo.icon === '50d'")
    .background-box-container
      .background-style-box
    .name-box
      h1 Benjamin Kent
    .job-title-box
      h2 Software Engineer
    .call-to-action-box
      .buttons-container
        button
          a(href='#' v-scroll-to="'#portfolio'") View Portfolio
        button
          a(href='#' v-scroll-to="'#contact'") Contact Me
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { WeatherDataInterface } from '@/interfaces/interfaces'

@Component({})
export default class Jumbotron extends Vue {
  weatherInfo: WeatherDataInterface = {
    temp: 0,
    condition: '',
    city: '',
    icon: ''
  }

  mounted(): void {
    this.fetchLocationAndWeather()
  }
  fetchLocationAndWeather(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.fetchWeather(position.coords.latitude, position.coords.longitude)
    })
  }
  fetchWeather(lat: number, long: number): void {
    const baseURL = 'https://api.openweathermap.org/data/2.5'
    const key = 'ab775780f3f23d518c06143e1db7c763'
    this.$http
      .get(
        `${baseURL}/weather?lat=${lat}&lon=${long}&units=imperial&APPID=${key}`
      )
      .then(resp => {
        this.weatherInfo = {
          temp: Math.floor(resp.data.main.temp),
          city: resp.data.name,
          condition: resp.data.weather[0].main,
          icon: resp.data.weather[0].icon
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background-image: url('../assets/desk-one.jpeg');
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
}

@media (min-width: 551px) {
  .jumbotron {
    height: 900px;
    background-attachment: fixed;
    background-position-x: center;
    background-position-y: -50px;
    background-repeat: no-repeat;
    .weather-box {
      grid-area: 1 / 1 / 2 / 3;
      .weather-content {
        margin: 50px 0 0 20px;
        p {
          margin: 0;
        }
        .city {
          margin-bottom: 3px;
        }
        .weather-condition-container {
          display: flex;
          i {
            margin-left: 5px;
          }
        }
      }
    }
    .background-box-container {
      grid-area: 2 / 1 / 4 / 6;
      justify-self: center;
      align-self: center;
      .background-style-box {
        background-color: $orange;
        height: 100px;
        width: 450px;
        transform: rotate(-10deg);
        opacity: 0.8;
        z-index: 0;
      }
    }
    .name-box {
      grid-area: 2 / 1 / 4 / 6;
      justify-self: center;
      align-self: center;
      z-index: 1;
      margin-bottom: 50px;
      h1 {
        font-size: 48px;
        margin: 0;
      }
    }
    .job-title-box {
      grid-area: 2 / 2 / 4 / 5;
      justify-self: center;
      align-self: center;
      margin-top: 60px;
      z-index: 1;
      h2 {
        margin: 0;
        font-size: 28px;
      }
    }
    .call-to-action-box {
      grid-area: 3 / 2 / 4 / 5;
      justify-self: center;
      align-self: end;
      margin-bottom: 20px;
      width: 320px;
      display: flex;
      justify-content: center;
      .buttons-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        button {
          font-size: 14px;
          padding: 8px 22px;
          border: 1px solid $orange;
          background-color: $orange;
          opacity: 0.9;
          border-radius: 3px;
          cursor: pointer;
          transition: 0.3s all ease-in-out;
          a {
            font-size: 14px;
            color: #222;
            text-decoration: none;
          }
        }
        button:hover {
          background-color: #222;
          border: 1px solid #222;
          color: #fff;
          transition: 0.3s all ease-in-out;
        }
        button:hover > a {
          color: #fff;
          transition: 0.3s all ease-in-out;
        }
      }
    }
  }
}

@media (max-width: 550px) {
  .jumbotron {
    height: 450px;
    background-size: cover;
    background-position-x: center;
    background-position-y: 25px;
    .weather-box {
      grid-area: 1 / 1 / 2 / 3;
      .weather-content {
        margin: 50px 0 0 20px;
        p {
          margin: 0;
        }
        .city {
          margin-bottom: 4px;
        }
        .weather-condition-container {
          display: flex;
          align-items: center;
          img {
            height: 30px;
          }
        }
      }
    }
    .background-box-container {
      grid-area: 2 / 1 / 4 / 6;
      justify-self: center;
      align-self: center;
    }
    .background-style-box {
      background-color: $orange;
      height: 70px;
      width: 300px;
      transform: rotate(-10deg);
      opacity: 0.8;
      z-index: 0;
    }
    .name-box {
      grid-area: 2 / 1 / 3 / 6;
      justify-self: center;
      align-self: end;
      z-index: 1;
      h1 {
        margin: 0;
      }
    }
    .job-title-box {
      grid-area: 3 / 1 / 4 / 6;
      justify-self: center;
      align-self: start;
      z-index: 1;
      h2 {
        margin: 0;
      }
    }
    .call-to-action-box {
      grid-area: 4 / 1 / 5 / 6;
      justify-self: center;
      width: 270px;
      display: flex;
      justify-content: center;
      .buttons-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        button {
          font-size: 12px;
          padding: 8px 22px;
          border: 1px solid $orange;
          background-color: $orange;
          opacity: 0.9;
          border-radius: 3px;
          cursor: pointer;
          transition: 0.3s all ease-in-out;
          a {
            font-size: 14px;
            color: #222;
            text-decoration: none;
            transition: 0.3s all ease-in-out;
          }
        }
        button:hover {
          background-color: #222;
          border: 1px solid #222;
          color: #fff;
          transition: 0.3s all ease-in-out;
        }
        button:hover > a {
          color: #fff;
          transition: 0.3s all ease-in-out;
        }
      }
    }
  }
}
</style>

