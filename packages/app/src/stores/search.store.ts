import { ref, reactive, computed } from 'vue';
import Fuse from 'fuse.js';

export const useSearchStore = defineStore('search', () => {
 const search = ref('');
 const selectedTag = ref('');
 const elements = reactive<Array<any>>([]);
 const keys = ['title', 'ingredients', 'tags'];
 const { find } = useStrapi();

 const loadRecipes = async () => {
   const recipes = await find('recipes', { populate: '*' });
   recipes.data.forEach((recipe) => {
     elements.push(recipe);
   });
 };

 const fuse = computed(() => new Fuse(Array.from(elements), {
    keys,
    threshold: 0.2,
 }));

 const results = computed(() => {
    if (!search.value)
      return Array.from(elements);
    return [...fuse.value.search(search.value).map(r => r.item)];
 });

 const filteredResults = computed(() => {
    if (!selectedTag.value)
      return results.value;
    return results.value.filter(recipe => recipe.tags.some(tag => tag.name === selectedTag.value));
 });

 return { search, results, filteredResults, selectedTag, loadRecipes };
});
