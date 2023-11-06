let details = document.querySelector(".detals");
let sibleyDetal = document.querySelector(".sibley");

let id = new URLSearchParams(location.search).get("id");

axios(`https://restcountries.com/v3.1/name/${id}`).then((res) => {
  let items = res.data;
  items.forEach((item) => {
    details.innerHTML += ` <div class="col-4 ">
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
  axios(`https://restcountries.com/v3.1/all`).then((res) => {
    let items = res.data;
    items.forEach((item) => {
      // console.log(item.borders?item.borders:null);
      // console.log(item.flags);

      if (item.name.common == id) {

        console.log(item.borders);

        item.borders.forEach((olke) => {
        console.log(olke);

          axios(`https://restcountries.com/v3.1/name/${olke}`).then((res) => {
            console.log(res.data[0]);
            sibleyDetal.innerHTML += ` <div class="col-4 ">
            <div class="card mt-5" style="width: 18rem;">
                <img class="card-img-top" src="${res.data[0].flags.png}" alt="Card image cap">
          
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">name- ${res.data[0].name.common}</li>
                  <li class="list-group-item">Capital- ${res.data[0].capital}</li>
                  <li class="list-group-item">Popilation- ${res.data[0].population}</li>
                </ul>
          
              </div>
          </div>
            `;
          });


        });
      }
    });
  });
});
