<template>
    <div class="container">
        <RecipeCard
            v-for="recipe in recipes"
            :recipe="recipe"
            :key="recipe.id"
        />
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
