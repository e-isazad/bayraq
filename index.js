let card = document.querySelector(".salam");
let API = "https://restcountries.com/v3.1/all";
let search = document.querySelector("input");
let sort = document.querySelector(".sort-data");

fetch(API)
  .then((all) => all.json())
  .then((adam) => {
    return adam;
  })
  .then((data) => {
    data.forEach((item) => {
      card.innerHTML += ` <div class="col-4">
        <div class="card mt-5" style="width: 18rem;">
            <img class="card-img-top" src="${item.flags.png}" alt="Card image cap">
           
            <ul class="list-group list-group-flush">
              <li class="list-group-item">name- ${item.name.common}</li>
              <li class="list-group-item">Capital- ${item.capital}</li>
              <li class="list-group-item">Popilation- ${item.population}</li>
            </ul>
            
          </div>
    </div>
        `;
    });
  });


sort.addEventListener("click", () => {
  fetch(API)
    .then((all) => all.json())
    .then((adam) => {
      return adam;
    })
    .then((melumat) => {
        card.innerHTML=""

      // const sorted=melumat.sort(x,y)=
      const sorted = melumat.sort((x, y) =>
        x.name.common.localeCompare(y.name.common)
      );
      sorted.forEach((item) => {
        card.innerHTML += ` <div class="col-4">
        <div class="card mt-5" style="width: 18rem;">
            <img class="card-img-top" src="${item.flags.png}" alt="Card image cap">
           
            <ul class="list-group list-group-flush">
              <li class="list-group-item">name- ${item.name.common}</li>
              <li class="list-group-item">Capital- ${item.capital}</li>
              <li class="list-group-item">Popilation- ${item.population}</li>
            </ul>
            
          </div>
    </div>
        `;
      });
    });
});

search.addEventListener("input", (e) => {
  if (e.target.value.length > 0) {
    fetch(API)
      .then((insan) => insan.json())
      .then((data) => {
        const axtarilan = data.filter((item) =>
          item.name.common
            .toLowerCase()
            .trim()
            .includes(search.value.trim().toLowerCase())
        );
        card.innerHTML = "";
        axtarilan.forEach((item) => {
          card.innerHTML += `<div class="col-4">
            <div class="card mt-5" style="width: 18rem;">
                <img class="card-img-top" src="${item.flags.png}" alt="Card image cap">
               
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">name- ${item.name.common}</li>
                  <li class="list-group-item">Capital- ${item.capital}</li>
                  <li class="list-group-item">Popilation- ${item.population}</li>
                </ul>
                
              </div>
        </div>`;
        });
      });
  }
});
