<template>
    <div class="home">
        <div class="container">
            <div class="header">
                <div class="notif"></div>
                <div class="avatar"></div>
            </div>
            <div class="content">
                <div class="box-1">
                    <div class="nhietdo">{{renderCurrentTemperature()}}°</div>
                    <div class="dubao">| {{renderStatus()}} </div>
                    <div class="thoitiet"></div>
                </div>
                <div class="box-2">
                    <div class="city">{{renderCity()}} </div>
                    <div class="city2">{{renderCountry()}} </div>
                </div>
                <div class="box-3">
                    <div class="g1">
                        <div class="so">{{renderHumidity()}}%</div>
                        <div class="text">Humidity</div>
                    </div>
                    <div class="g1">
                        <div class="so">{{renderUv()}}</div>
                        <div class="text">Uv index</div>
                    </div>
                    <div class="g1">
                        <div class="so">E {{renderWind()}} kmh</div>
                        <div class="text">Wind</div>
                    </div>
                </div>
                <hr />
                <div class="box-4">

                    <div class="time1" @click="tabTime='today'" :class="[tabTime==='today'?'':'time3']" >Today</div>
                    <div class="time2" @click="tabTime='tomorrow'" :class="[tabTime==='today'?'time3':'']">Tomorrow</div>
                    
					<div class="more">
                        <router-link class="link" to="/today"
                            >See All</router-link
                        >
                    </div>
                </div>

                <div class="box-5 box-3" v-if="tabTime==='today'">
					<tempe-session v-for="(session, index) in renderToday()" 
					:key="index" 
					:tempe="session.tempe" 
					:session="session.session" 
					/>
                </div>
                <div class="box-5 box-3" v-else>
					<tempe-session v-for="(session, index) in renderTomorrow()" 
					:key="index" 
					:tempe="session.tempe" 
					:session="session.session" 
					/>
                </div>

                <div class="box-6 box-4">
                    <div class="time1">Air Polutions</div>
                    <div class="more">Details</div>
                </div>
                <div class="box-7">
                    <div class="img"></div>
                    <div class="inf">
                        <div class="num">162</div>
                        <div class="text">Unhealthy</div>
                    </div>
                    <div class="solieu">| Micro Dust/PM2.5</div>
                </div>

                <div class="box-6 box-4">
                    <div class="time1">My city</div>
                    <div class="more">Edit</div>
                </div>
                <div class="box-5 box-3">
					<tempe-session v-for="(session, index) in renderToday()" 
					:key="index" 
					:tempe="session.tempe" 
					:session="session.session" 
					/>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import TempeSession from './TempeSession';
export default {
	data(){
		return {
			tabTime: "today",
			city: '',
			country: '',
			currentTemperature: null,
			status: "",
			humidity: null,
			uv: null,
			wind: null,
			today: [],
			tomorrow: [],
		}
	},
	components: { TempeSession},
    created() {
        return axios.get("http://localhost:8080/db.json").then((res) => {
            console.log("data ", res.data.weather);
			let {weather} = res.data;
			this.city = weather.city;
			this.country = weather.country;
			this.currentTemperature = weather.currentTemperature;
			this.status = weather.status;
			this.humidity = weather.humidity;
			this.uv = weather.uv;
			this.wind = weather.wind;
			this.today = weather.today;
			this.tomorrow = weather.tomorrow;
        });
    },
	methods: {
		renderCity(){
			return this.city;
		},
		renderCountry(){
			return this.country;
		},
		renderCurrentTemperature(){
			return this.currentTemperature;
		},
		renderStatus(){
			return this.status;
		},
		renderHumidity(){
			return this.humidity;
		},
		renderUv(){
			return this.uv;
		},
		renderWind(){
			return this.wind;
		},
		renderToday(){
			return this.today;
		},
		renderTomorrow(){
			return this.tomorrow;
		},

		tabTodayActive(){
			return this.tabTime === 'today';
		},
		tabTomorrowActive(){
			return this.tabTime === 'tomorrow';
		},
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.container {
    padding: 20px 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif;
}
.header {
    position: relative;
    width: 100%;
    height: 40px;
}
.header .notif {
    position: absolute;
    width: 32px;
    height: 32px;
    top: 8px;
    right: 50px;

    background: url("../assets/img/notif.png");
    background-repeat: no-repeat;
    background-blend-mode: normal;
}
.header .avatar {
    position: absolute;
    width: 32px;
    height: 32px;
    top: 5px;
    right: 5px;

    background: url("../assets/img/user.png");
    background-blend-mode: normal;
}

.content .box-1 {
    position: relative;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    margin-top: 30px;
}
.box-1 .nhietdo {
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 42px;
    line-height: 44px;
}
.box-1 .dubao {
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
}
.box-1 .thoitiet {
    position: absolute;
    right: 10px;
    width: 80px;
    height: 77.95px;
    background: url("../assets/img/amu.png");
    background-repeat: no-repeat;
    background-blend-mode: normal;
}

.box-2 .city {
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    margin-top: 20px;
    text-align: left;
}
.box-2 .city2 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 167% */

    /* text-align: center; */
    margin-bottom: 30px;
    color: #000000;
    text-align: left;
}
hr {
    box-shadow: 0px 4px 5px #aaaaaa;
    width: 80%;
    opacity: 0.2;
}

.box-3 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
}
.box-3 .g1 .so {
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */

    text-align: center;

    color: #000000;
}
.box-3 .text {
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 117% */

    text-align: center;
}

.box-4 {
    position: relative;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
}
.box-4 .time1 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
}
.box-4 .time2 {
    position: absolute;
    left: 60px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 186% */

    
}
.time3{
	color: #898989;
	font-size: 14px !important;
}
.box-4 .more {
    position: absolute;
    right: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    color: #617be3;
    text-decoration: none;
}
.link {
    text-decoration: none;
    color: #617be3;
}

.box-5 .img {
    /* position: absolute; */
    /* right: 10px; */
    width: 40px;
    height: 40.95px;
    background: url("../assets/img/amu.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-blend-mode: normal;
}
.box-6 {
    margin-bottom: 0px !important;
}

.box-7 {
    position: relative;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.box-7 .img {
    width: 40px;
    height: 40px;
    background: url("../assets/img/air.png");
    background-size: 80%;
    background-repeat: no-repeat;
    background-blend-mode: normal;
}
.box-7 .inf .num {
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif;
    font-style: system-ui, -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif;
    font-weight: normal;
    font-size: 32px;
    line-height: 44px;
    /* identical to box height, or 137% */

    color: #f67280;
}
.box-7 .inf .text {
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
}
.box-7 .solieu {
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
}
</style>
