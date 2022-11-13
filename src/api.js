const getCountryDataApi = async () => {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.first.org/data/v1/countries/"
  );
  return await response.json();
};
export default getCountryDataApi;