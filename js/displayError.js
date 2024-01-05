const wrongCountry = (output) => {
  output.innerHTML = "";
  output.innerHTML =
    "<h3>There are no users from that country, or input was wrong.</h3>";
};

export {wrongCountry};