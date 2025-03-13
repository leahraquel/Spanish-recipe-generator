function displayRecipe(response) {
  console.log("recipe generator");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 8,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o4b92af1dd47taab0064a1fe60a4583f";
  let context =
    "You are a culinary expert in dishes made from Spain. Your mission is to generate a Spanish recipe in basic HTML. Don't include acknowledgement of HTML. Make sure to follow the user instructions below. Make the recipe simple and easy to read.";
  let prompt = `User instructions: Generate a recipe for ${instructionsInput.value} in English`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
