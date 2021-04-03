<template>
    <router-link :to="`/recipe/${recipe.id}`">
        <div class="wrapper">
            <div class="image">
                <img :src="recipe.imageURL">
            </div>
            <div class="info">
                <h3> {{ recipe.name }} </h3>
                <p> {{recipe.meta[0].course}}</p>
                <p> {{recipe.meta[0].meal}}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "RecipeCard",
    props: {
        recipe: Object
    }
}
</script>

<style scoped>
.wrapper {
    border: red 2px solid;
    margin: 1em;
    padding: 0;
    width:300px;
}
.info {
    background-color: yellow;
    padding: 10px;
    margin:0;
}
.image {
    background-color:blueviolet;
    max-height: 90%;
}
img {
   max-width: 100%;
}
</style>