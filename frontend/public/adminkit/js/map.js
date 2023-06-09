$("#snackbar-user-status label").click(function () {
  Snackbar.show({
    text: "Your status has been changed!",
    pos: "bottom-center",
    showAction: false,
    actionText: "Dismiss",
    duration: 3000,
    textColor: "#fff",
    backgroundColor: "#383838",
  });
});

function initAutocomplete() {
  var options = {
    types: ["(cities)"],
    // componentRestrictions: {country: "us"}
  };

  var input = document.getElementById("autocomplete-input");
  var autocomplete = new google.maps.places.Autocomplete(input, options);
}
