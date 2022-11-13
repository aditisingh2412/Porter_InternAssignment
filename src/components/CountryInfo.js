import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, createFilterOptions } from "@mui/material";

import getCountryDataApi from "../api";
import { OPTIONS_LIMIT } from "../constants";

const CountryInfo = () => {
  const [capital, setCapital] = useState([]);

  const getCountryData = async () => {
    try {
      const countryDataResponse = await getCountryDataApi();
      const countries = Object.keys(countryDataResponse.data).reduce(function (
        previous,
        key
      ) {
        previous.push(countryDataResponse.data[key].country);
        return previous;
      },
      []);

      setCapital(countries);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCountryData();
  }, []);

  const filterOptions = createFilterOptions({
    limit: OPTIONS_LIMIT,
  });

  return (
    <div>
      <Autocomplete
        className="autocomplete"
        options={capital}
        filterOptions={filterOptions}
        renderInput={(params) => <TextField {...params} label="Capital" />}
      />
    </div>
  );
};

export default CountryInfo;
