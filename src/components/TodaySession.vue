<template>
    <div class="row">
        <div class="col-2 cicle"></div>
        <div class="col-3">
            <div class="img" :class="[session==='Evening'?'evening':'', session==='Night'?'night':'']"></div>
            <div class="buoi">{{session}} </div>
        </div>
        <div class="col-7">
            <div class="box">
                <div class="temp">{{tempe}}°</div>
                <div class="inf">Warmest day of the week</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	props:{
		tempe: {
            type: Number,
            default: 0,
        },
        session: {
            type: String,
            default: "",
        },
	}
};
</script>

<style scoped>
.evening{
	background-image: url("../assets/img/rain.png") !important;
}
.night{
	background-image: url("../assets/img/night.png") !important;
}
</style>