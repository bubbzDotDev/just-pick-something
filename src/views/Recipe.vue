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
    name: "Recipe",
    data() {
        return {
            recipe: Object,
            name: '',
        }
    },
    methods: {
        async fetchRecipe(id) {
            const res = await fetch(`api/recipes/${id}`);
            const data = await res.json();
            return data;
        },
    },
      async created(id) {
        this.recipe = await this.fetchRecipe(id);
  }
}
</script>