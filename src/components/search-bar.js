import React, { Component } from "react";
import { fetchCountries, fecthRateExchange } from "../actions/index";
import { connect } from "react-redux";
const lodash = require("lodash");

export class SearchBar extends Component {
  componentWillMount() {
    this.props.fetchCountries();
  }

  renderSelectCountries() {
    return (
      <select
        onChange={e => this.onChangeCountry(e)}
        className="form-control mt-5"
      >
        {this.props.countries.map(c => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>
    );
  }

  onChangeCountry = e => {
    const countryCode = e.target.value;
    const country = lodash.find(this.props.countries, { code: countryCode });
    this.props.fecthRateExchange(country);
  };

  render() {
    return (
      <form className="form-group" action="">
        {this.renderSelectCountries()}
      </form>
    );
  }
}

const mapStateToProps = store => {
  return {
    countries: store.countryReducer.countries
  };
};

const mapDispatchToProps = {
  fetchCountries,
  fecthRateExchange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
