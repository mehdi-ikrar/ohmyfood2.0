const apiBaseUrl = "http://localhost:3000/restaurant";



export const api = {
  async fetchAllPokemons() {
    try {
      //On appel l'API avec fetch (defaut = GET) pour récupérer la liste de tous les pokemons
      const httpResponses = await fetch(apiBaseUrl);
      //Si le status de la réponse n'est pas 20X alors on retourne null
      if (!httpResponses.ok) return null;
      //Sinon on cast la réponse vers du JSON, et on retourne le tout.
      const restaurant = await httpResponses.json();
      return restaurant;
    } catch (error) {
      console.log(error);
    }
}};

