import { PokemonController } from "./controllers/PokemonController.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [PokemonController],
    view: /*html*/`
    <div class="d-flex gap-3">
      <div>
        <div>
          <button class="btn btn-secondary" id='previous' disabled onclick="app.PokemonController.go('previous')">Previous</button>
          <button class="btn btn-secondary" id='next' disabled onclick="app.PokemonController.go('next')">Next</button>
        </div>
        <div id='pokemon'></div>
      </div>
      <div id='myPokemon'></div>
        
    </div>
    `
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */