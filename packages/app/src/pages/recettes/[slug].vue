<script setup lang="ts">
const { findOne } = useStrapi4()
const route = useRoute()

const { data: recipe, pending, error } = useAsyncData('recipe',() => findOne(`recipes/${route.params.slug}`));
console.log(recipe)
</script>

<template>
    <div class="container">
        <div class="flex flex-col items-center gap-y-4 py-[160px]">
            <NuxtLink to="/">
                Retour à la liste des recettes
            </NuxtLink>
            <div class="flex flex-row gap-6">
                <NuxtImg :src="recipe.data.images[0].url" :alt="recipe.data.title" class="w-[600px]"/>
                <div class="flex flex-col max-w-[900px] justify-around">
                    <h3>{{ recipe.data.title }}</h3>
                    <p>{{ recipe.data.description }}</p>
                    <p>{{ recipe.data.ingredients }}</p>
                    <div class="flex flex-row justify-around">
                        <div class="flex flex-col justify-center w-[200px]">
                        <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"/></svg>
                        <p class="text-center">Duration : <span class="font-bold">{{ recipe.data.duration }}</span> min</p>
                        </div>
                        <div class="flex flex-col justify-center w-[200px]">
                        <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><path fill="black" d="M12.5 1.5c-1.77 0-3.33 1.17-3.83 2.87C8.14 4.13 7.58 4 7 4a4 4 0 0 0-4 4a4.01 4.01 0 0 0 3 3.87V19h13v-7.13c1.76-.46 3-2.05 3-3.87a4 4 0 0 0-4-4c-.58 0-1.14.13-1.67.37c-.5-1.7-2.06-2.87-3.83-2.87m-.5 9h1v7h-1zm-3 2h1v5H9zm6 0h1v5h-1zM6 20v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1z"/></svg>
                        <p class="text-center">Difficulty : <span class="font-bold">{{ recipe.data.difficulty }}/5</span></p>
                        </div>
                        <div class="flex flex-col justify-center w-[200px]">
                        <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="m16.137 4.728l1.83 1.83C20.656 9.248 22 10.592 22 12.262c0 1.671-1.344 3.015-4.033 5.704c-2.69 2.69-4.034 4.034-5.705 4.034c-1.67 0-3.015-1.344-5.704-4.033l-1.83-1.83c-1.545-1.546-2.318-2.318-2.605-3.321c-.288-1.003-.042-2.068.45-4.197l.283-1.228c.413-1.792.62-2.688 1.233-3.302c.614-.613 1.51-.82 3.302-1.233l1.228-.284c2.13-.491 3.194-.737 4.197-.45c1.003.288 1.775 1.061 3.32 2.606m-4.99 9.6c-.673-.672-.668-1.638-.265-2.403a.75.75 0 0 1 1.04-1.046c.34-.18.713-.276 1.085-.272a.75.75 0 0 1-.014 1.5a.88.88 0 0 0-.609.277c-.387.387-.286.775-.177.884c.11.109.497.21.884-.177c.784-.784 2.138-1.044 3.005-.177c.673.673.668 1.639.265 2.404a.75.75 0 0 1-1.04 1.045a2.201 2.201 0 0 1-1.472.232a.75.75 0 1 1 .302-1.47c.177.037.463-.021.708-.266c.387-.388.286-.775.177-.884c-.11-.109-.497-.21-.884.177c-.784.784-2.138 1.044-3.005.176m-1.126-4.035a2 2 0 1 0-2.829-2.828a2 2 0 0 0 2.829 2.828" clip-rule="evenodd"/></svg>
                        <p class="text-center">Cost : <span class="font-bold">{{ recipe.data.price }}</span> €</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Hmmmm ça a l'air <span class="text-pink-600 text-[120px]">SUPER</span> bon</h1>
        </div>
    </div>
</template>