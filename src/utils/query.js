function objectToQuery(object) {
  return Object.entries(object).reduce((acum, curr, idx, arr) => {
    acum += `${curr[0]}=${curr[1]}`;
    if (idx < arr.length - 1) {
      acum += "&";
    }
    return acum;
  }, "?");
}

export { objectToQuery };
