<template>
    <div class="container">
        <div class="masthead">
            <h2> {{ recipe.name }} </h2>
        </div>  
        <div class="meta">
            <p>Meal: {{ recipe.meal }}</p>
            <p>Meat: {{ recipe.meat}}</p>
        </div>
       


    </div>
</template>

<script>
export default {
    name: "Recipe"
}
</script>