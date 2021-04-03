<template>
    <div class="container">
        <div :key="recipe.id" v-for="recipe in recipes">
             <RecipeCard :recipe="recipe"/>
        </div>
    </div>
</template>

<script>
import RecipeCard from "./RecipeCard";

export default { 
    name: "RecipeList",
    props: {
        recipes: Array,
        filters: Object
    },
    components: {
        RecipeCard
    },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  
}
</style>
