<template>
    <div class="relative">
        <img class="static w-full h-screen brightness-50" :src="singleData.image" />
        <div class="absolute h-full top-72 left-24">
            <h1 class="text-6xl text-white font-semibold">{{ singleData.name }}</h1>
            <h1 class="mt-2 mb-6 text-3xl text-slate-200 font-light">{{ singleData.description }}</h1>
            <h2 class="px-1 py-2 inline border rounded text-slate-200">{{ singleData.category }}</h2>
        </div>
  </div>
</template>

<script>
export default {
    props: ['singleData'],
}
</script>

<style>

</style>