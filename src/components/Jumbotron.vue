<template>
<div class="jumbotron">
    <div class="weather-box">
        <div class="weather-content" v-if="weatherInfo.city">
            <p class="city">{{ weatherInfo.city }}</p>
            <p>{{ weatherInfo.temp }}°F</p>
            <div class="weather-condition-container">
                <p>{{ weatherInfo.condition }}</p>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '01d'" :icon="['fad', 'sun']"></fa-icon>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '01n'" :icon="['fad', 'moon']"></fa-icon>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '02d'" :icon="['fad', 'clouds-sun']"></fa-icon>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '02n'" :icon="['fad', 'clouds-moon']"></fa-icon>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '03d'" :icon="['fad', 'clouds']"></fa-icon>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '03n'" :icon="['fad', 'clouds']"></fa-icon>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '04d'" :icon="['fad', 'clouds']"></fa-icon>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '04n'" :icon="['fad', 'clouds']"></fa-icon>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '09d'" :icon="['fad', 'cloud-drizzle']"></fa-icon>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '10d'" :icon="['fad', 'cloud-showers-heavy']"></fa-icon>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '11d'" :icon="['fad', 'thunderstorm']"></fa-icon>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '13d'" :icon="['fad', 'snowflakes']"></fa-icon>
                <fa-icon class="weather-icon" v-if="weatherInfo.icon === '50d'" :icon="['fad', 'smoke']"></fa-icon>
            </div>
        </div>
    </div>
    <div class="background-box-container">
        <div class="background-style-box"></div>
    </div>
    <div class="name-box">
        <h1>Benjamin Jehl</h1>
    </div>
    <div class="job-title-box">
        <h2>Software Engineer</h2>
    </div>
    <div class="call-to-action-box">
        <div class="buttons-container"><button><a href="#" v-scroll-to="'#portfolio'">View Portfolio</a></button><button><a href="#" v-scroll-to="'#contact'">Contact Me</a></button></div>
    </div>
</div>
</template>

<script setup lang="ts">
import {onMounted, ref, Ref} from 'vue'
import { WeatherDataInterface } from '@interfaces'
import { loadWeatherData } from '@api'

  const weatherInfo: Ref<WeatherDataInterface> = ref({
    temp: 0,
    condition: '',
    city: '',
    icon: '',
  })

  async function fetchWeather(lat: number, long: number): Promise<void> {
    const response = await loadWeatherData(
      lat,
      long,
      (import.meta as any).env.VUE_APP_WEATHER_KEY
    )

    weatherInfo.value = {
      temp: Math.floor(response.data.main.temp),
      city: response.data.name,
      condition: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
    }
  }

  function fetchLocationAndWeather(): void {
    navigator.geolocation.getCurrentPosition(position => {
      fetchWeather(position.coords.latitude, position.coords.longitude)
    })
  }

  onMounted(() => fetchLocationAndWeather())
</script>

<style lang="scss" scoped>
.jumbotron {
  background-image: url('https://res.cloudinary.com/benkent/image/upload/q_auto/v1625243796/desk-one_q1drxe.jpg');
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
          .weather-icon {
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
        background-color: $primary;
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
          border: 1px solid $primary;
          background-color: $primary;
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
      grid-area: 1 / 1 / 3 / 3;
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
          .weather-icon {
            margin-left: 5px;
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
      background-color: $primary;
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
          border: 1px solid $primary;
          background-color: $primary;
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
