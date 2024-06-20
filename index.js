const info = {};

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let timeframes = data[i]["timeframes"];
      info[data[i]["title"]] = {
        daily_current: timeframes["daily"]["current"],
        daily_previous: timeframes["daily"]["previous"],

        weekly_current: timeframes["weekly"]["current"],
        weekly_previous: timeframes["weekly"]["previous"],

        monthly_current: timeframes["monthly"]["current"],
        monthly_previous: timeframes["monthly"]["previous"],
      };
    }
    changeData(info, "weekly");

    $(".timeframe").click(function () {
      $(".timeframe").removeClass("default-timeframe");
      $(this).addClass("default-timeframe");
      changeData(info, this.id);
    });
  });

function changeData(info, timeframe) {
  $("#work_curr").text(info["Work"][timeframe + "_current"]);
  $("#work_prev").text(info["Work"][timeframe + "_previous"]);

  $("#play_curr").text(info["Play"][timeframe + "_current"]);
  $("#play_prev").text(info["Play"][timeframe + "_previous"]);

  $("#study_curr").text(info["Study"][timeframe + "_current"]);
  $("#study_prev").text(info["Study"][timeframe + "_previous"]);

  $("#exercise_curr").text(info["Exercise"][timeframe + "_current"]);
  $("#exercise_prev").text(info["Exercise"][timeframe + "_previous"]);

  $("#social_curr").text(info["Social"][timeframe + "_current"]);
  $("#social_prev").text(info["Social"][timeframe + "_previous"]);

  $("#self_care_curr").text(info["Self Care"][timeframe + "_current"]);
  $("#self_care_prev").text(info["Self Care"][timeframe + "_previous"]);
}
