const loadFood = () => {
    const getSearch = document.getElementById('inputField');
    const getSearchText = getSearch.value ;
    getSearch.value = '';
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s= ${getSearchText}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displaySearchFood(data.meals))
}
const displaySearchFood = (meal) => {
    const display = document.getElementById('displayFood');
    display.textContent = '';
    console.log(meal);
    for(const foods of meal){
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="singleMeal(${foods.idMeal})" class="col">
            <div class="card">
                <img src="${foods.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${foods.strMeal}</h3>
                    <h5>Category: ${foods.strCategory}</h5>
                </div>
            </div>
        </div>
        ` ;
        display.appendChild(div);
    }
}
const singleMeal = (meal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}` ;
    fetch(url)
    .then(response => response.json())
    .then(data => displaySingleMeal(data.meals[0]));
}
const displaySingleMeal = receivedMeal => {
    const getDetails = document.getElementById('singleMeal');
    const div2 = document.createElement('div');
    div2.innerHTML = `
        <div class="col">
            <div class="card">
                <img src="${receivedMeal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${receivedMeal.strMeal}</h3>
                    <h5>Category: ${receivedMeal.strCategory}</h5>
                    <a href="${receivedMeal.strYoutube}" class="btn btn-primary">see recipe on you tube</a>
                </div>
            </div>
        </div>
    `;
    getDetails.appendChild(div2);
} 