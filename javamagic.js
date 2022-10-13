setInterval(function () {
  let tokyoTimeNow = document.querySelector("#tokyoTime");
  tokyoTimeNow.innerHTML = moment().tz("Asia/Tokyo").format(`HH:mm:ss`);

  let tokyoDateNow = document.querySelector("#tokyoDate");
  tokyoDateNow.innerHTML = moment().tz("Asia/Tokyo").format(`D MMM YYYY`);

  let parisTimeNow = document.querySelector("#parisTime");
  parisTimeNow.innerHTML = moment().tz("Europe/Paris").format(`HH:mm:ss`);

  let parisDateNow = document.querySelector("#parisDate");
  parisDateNow.innerHTML = moment().tz("Europe/Paris").format(`D MMM YYYY`);
}, 1000);

//--------dropdown selection

let updateCity = document.querySelector("#timezoneDropdown");
updateCity.addEventListener(`change`, updateClock);

function updateClock(event) {
  if (event.target.value === "newyork") {
    let updating = document.querySelector("#empty");
    updating.innerHTML = `<div class="row cities">
          <div class="col-7">
            <h2>New York</h2>
            <div class="date" id="">
              ${moment().tz("America/New_York").format(`D MMM YYYY`)}
            </div>
          </div>
          <div class="col-5 time" id="">
            ${moment().tz("America/New_York").format(`HH:mm`)}
          </div>
        </div>`;
  }
}
