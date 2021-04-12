<template>
    <div class="container">
        <div class="masthead">
            <h1>hello</h1>
            <h2> {{ recipe.name }} </h2>
        </div>  
        <div class="meta">
            <p>Meal: {{ recipe.meal }}</p>
            <p>Meat: {{ recipe.meat}}</p>
            <p> test </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Recipe",
    data() {
        return {
            recipe: Object
        }
    },
    methods: {
        async getRecipe() {
            const id = this.router;
            const res = await fetch(`api/recipes/${id}`);
            const data = await res.json();
            return data;
        },
    },
      async created() {
        this.recipe = await this.getRecipe();
        this.name = this.recipe.name;
    },
}
</script>

<style scoped>
    .container {
        margin: 1em;
        border: 1px red solid;
    }
</style>