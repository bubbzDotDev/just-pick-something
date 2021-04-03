<template>
  <div class="home">
    <RecipeList :recipes="recipes" />
  </div>
</template>

<script>
import RecipeList from "../components/RecipeList";

export default {
  name: 'Home',
  components: {
    RecipeList
  },
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    async fetchRecipe(id) {
      const res = await fetch(`api/recipes/${id}`);
      const data = await res.json();
      return data;
    },
      async fetchRecipeList() {
      const res = await fetch("api/recipes");
      const data = await res.json();
      return data;
    },

  },
  async created() {
    this.recipes = await this.fetchRecipeList();
  }
};
</script>

<style scoped>
.home {
  border: blue solid 1px;
  margin: 1em;
  padding: 1em;
}
</style>