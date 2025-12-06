document.addEventListener("DOMContentLoaded", loadRecipes);

async function loadRecipes() {
    const list = document.getElementById("recipe-list");

    try {
        const response = await fetch("recipes.json");
        const recipes = await response.json();

        list.innerHTML = "";

        recipes.forEach(recipe => {
            const card = document.createElement("div");
            card.className = "recipe-card";

            card.innerHTML = `
                <h3>${recipe.title}</h3>
                <p><strong>Ingredients:</strong><br>${recipe.ingredients.replace(/\n/g, "<br>")}</p>
                <p><strong>Steps:</strong><br>${recipe.steps.replace(/\n/g, "<br>")}</p>
            `;

            list.appendChild(card);
        });
    } catch (error) {
        list.innerHTML = "<p>Could not load recipes.</p>";
        console.error(error);
    }
}
