const categories = document.querySelector(".categories");

const data = fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let newDiv = document.createElement("div");
   
      newDiv.innerHTML = `
        <div class="${data[i].category.toLowerCase()}">
            <div class="icon">
                <img src="${data[i].icon}" alt="${data[i].category}" />
                <p class="category">${data[i].category}</p>
            </div>
            <p class="score">${data[i].score} <span>/ 100</span></p>
        </div>
            
            `

      categories.appendChild(newDiv);
    }
  });
