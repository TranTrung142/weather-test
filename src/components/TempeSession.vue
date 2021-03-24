<template>
    <div class="g1">
        <div class="img" :class="[session==='Evening'?'evening':'', session==='Night'?'night':'']"></div>
        <div class="so">{{ tempe }}°</div>
        <div class="text">{{ session }}</div>
    </div>
</template>

<script>
export default {
    props: {
        tempe: {
            type: Number,
            default: 0,
        },
        session: {
            type: String,
            default: "",
        },
    },
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