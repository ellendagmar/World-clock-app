setInterval(function () {
  let tokyoTimeNow = document.querySelector("#tokyoTime");
  if (tokyoTimeNow) {
    tokyoTimeNow.innerHTML = moment().tz("Asia/Tokyo").format(`HH:mm:ss`);

    let tokyoDateNow = document.querySelector("#tokyoDate");
    tokyoDateNow.innerHTML = moment().tz("Asia/Tokyo").format(`D MMM YYYY`);

    let parisTimeNow = document.querySelector("#parisTime");
    parisTimeNow.innerHTML = moment().tz("Europe/Paris").format(`HH:mm:ss`);

    let parisDateNow = document.querySelector("#parisDate");
    parisDateNow.innerHTML = moment().tz("Europe/Paris").format(`D MMM YYYY`);
  }
}, 1000);

//--------dropdown selection

let updateCity = document.querySelector("#timezoneDropdown");
updateCity.addEventListener(`change`, updateClock);

function updateClock(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "localtime") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace(`_`, ` `).split("/")[1];
  let updating = document.querySelector("#timezoneContainer");
  updating.innerHTML = `<div class="row cities">
          <div class="col-6">
            <h2>${cityName}</h2>
            <div class="date">
              ${moment().tz(event.target.value).format(`D MMM YYYY`)}
            </div>
          </div>
          <div class="col-6 time">
            ${moment().tz(event.target.value).format(`HH:mm:ss`)}
          </div>
        </div>`;
}
