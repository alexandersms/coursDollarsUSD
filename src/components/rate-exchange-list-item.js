import React, { Component } from "react";
import ReactChartKick, { AreaChart } from "react-chartkick";
import Chart from "chart.js";

ReactChartKick.addAdapter(Chart);

class RateExchangeListItem extends Component {
  render() {
    console.log(this.props.rateExchange);
    const { name, flag, rates, currencyCode } = this.props.rateExchange;

    return (
      <tr>
        <td>
          {name}
          <br />
          <img src={flag} alt={name} height="60px" width="100px" />
        </td>
        <td className="col-md-12">
          <AreaChart
            data={formatData(rates, currencyCode)}
            xtitle="Date"
            ytitle={currencyCode}
          />
        </td>
      </tr>
    );
  }
}

function formatData(rates, currencyCode) {
  return Object.keys(rates).map(date => {
    return [date, rates[date][currencyCode]];
  });
}

export default RateExchangeListItem;
