<template>
    <div class="container">
        <div class="header">
			<router-link to="/">
				<div class="back"></div>
			</router-link>
            
            <div class="title">Today</div>
        </div>
        <div class="date">December 22</div>

        <div class="body">
            <div class="gach"></div>

			<TodaySession v-for="(item, index) in today" :key="index" :tempe="item.tempe" :session="item.session" />
            <!-- <div class="row">
                <div class="col-2 cicle"></div>
                <div class="col-3">
                    <div class="img"></div>
                    <div class="buoi">Morning</div>
                </div>
                <div class="col-7">
                    <div class="box">
                        <div class="temp">30°</div>
                        <div class="inf">Warmest day of the week</div>
                    </div>
                </div>
            </div> -->
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import TodaySession from './TodaySession';
export default {
	data(){
		return {
			today: []
		}
	},
	components: {TodaySession},
	created(){
		return axios.get('http://localhost:8080/db.json').then(
			res=>{
				console.log("data today " , res.data.weather.today );
				let {today} = res.data.weather;
				this.today = today;
			}
		)
	}
};
</script>

<style >
.container {
    margin: 20px 20px;
	padding: 0px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif;
}
.header {
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
}
.header .back {
    position: absolute;
    top: 14px;
    width: 40px;
    height: 40px;
    background-image: url("../assets/img/back.png");
    background-repeat: no-repeat;
    background-size: 34%;
}
.header .title {
    text-align: center;
    width: 100%;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
}

.date {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
	text-align: initial;
}

.body {
    position: relative;
    width: 100%;
    height: 300px;
    padding-top: 40px;
}
.body .gach {
    position: absolute;
    width: 210px;
    height: 0px;
    left: -95px;
    top: 174px;

    border: 1px dashed #617be3;
    transform: rotate(90deg);
}
.row {
    width: 110%;
    height: 70px;
    display: flex;
}
.body .row .cicle {
    background-image: url("../assets/img/tron.png");
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 1px;
    margin-right: 20px;
    height: 46px;
    width: 20px;
}
.col-3 {
    margin-right: 20px;
	width: 54px;
}
.body .row .col-3 .img {
    height: 34px;
    width: 100%;
    background-image: url("../assets/img/amu.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
}
.body .row .col-3 .buoi {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height, or 117% */

    text-align: center;
}

.box {
    position: absolute;
    height: 50px;
    background-color: #90d0ff;
    width: 110%;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
	align-items: flex-start;
}
.box .temp {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
}
.box .inf {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
}
</style>