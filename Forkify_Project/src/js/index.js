import Search from './models/Search';
import * as searchView from './views/searchView'
import {elements} from './views/base';

/** Global State of the App
 * - Search Object
 * - Current Recipe
 * - Shopping list Object
 * - Liked Recipes
 */
const state = {};

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput(); //TODO
    
    
    if(query) {
        // 2) New Search Object and add to State
        state.search = new Search(query)
        console.log(state)
        // 3) Prepare UI for results

        // 4) Search for recipes
        await state.search.getResults();

        // 5) Render results on UI
        searchView.renderResults(state.search.result);
    }
}


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

