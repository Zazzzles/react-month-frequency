import React, { Component } from "react";

import {
  Container,
  MonthContainer,
  MonthInner,
  MonthLabel,
  MonthSquare
} from "./styles";

import { monthDays, monthsLong, defaultConfig } from "./consts";

export default class MonthFreq extends Component {
  mergedConfig = () => {
    return Object.assign({}, defaultConfig, this.props.config);
  };

  getOpacity = amount => {
    const { colorThresholds } = this.mergedConfig();
    let item = colorThresholds.filter(item => {
      const { from, to } = item;
      return amount > from && amount <= to;
    })[0];
    if (item) {
      return item.opacity;
    } else {
      return 0.1;
    }
  };

  renderEmptyBlocks = (month, config) => {
    let rend = [];
    for (let i = 0; i < monthDays[month]; i++) {
      rend.push(
        <MonthSquare
          {...config.style.daySquare}
          key={i}
          opacity={this.getOpacity(0)}
        />
      );
    }
    return rend;
  };

  validate = () => {
    if (!(this.props.data instanceof Array)) {
      throw new Error("Data provided must be an array");
    }
    this.props.data.forEach(item => {
      if (!(item.date && item.count)) {
        throw new Error(
          "Ensure data is formatted correctly [{date: String, count: Number}]"
        );
      }
      if (typeof item.date !== "string") {
        throw new Error("Dates must be provided in string format");
      }
      if (typeof item.count !== "number") {
        throw new Error("Counts must be provided in number format");
      }
    });
  };

  formatData = () => {
    this.validate();
    const { data } = this.props;
    let monthData = {};
    data.forEach(item => {
      const [_, month, day] = item.date.split("/");
      let singleMonth = parseInt(month, 10);
      if (monthData[singleMonth]) {
        monthData[singleMonth][day - 1] = item.count;
      } else {
        monthData[singleMonth] = [];
        monthData[singleMonth][day - 1] = item.count;
      }
    });
    Object.keys(monthData).forEach(key => {
      for (let i = 0; i < monthDays[key - 1]; i++) {
        if (!monthData[key][i]) {
          monthData[key][i] = 0;
        }
      }
    });
    return monthData;
  };

  renderData = config => {
    let formattedData = this.formatData();
    return monthsLong.map((monthName, index) => {
      if (!formattedData[index]) {
        return (
          <MonthContainer {...config.style.monthBlockSize} key={index}>
            <MonthLabel {...config.style.monthTitle}> {monthName}</MonthLabel>
            <MonthInner>{this.renderEmptyBlocks(index, config)}</MonthInner>
          </MonthContainer>
        );
      } else {
        return (
          <MonthContainer key={index}>
            <MonthLabel {...config.style.monthTitle}> {monthName}</MonthLabel>
            <MonthInner>
              {formattedData[index].map((item, innerIndex) => {
                return (
                  <MonthSquare
                    {...config.style.daySquare}
                    key={innerIndex}
                    opacity={this.getOpacity(item)}
                  />
                );
              })}
            </MonthInner>
          </MonthContainer>
        );
      }
    });
  };

  render() {
    let mergedConfig = this.mergedConfig();
    return (
      <Container {...mergedConfig.style.container}>
        {this.renderData(mergedConfig)}
      </Container>
    );
  }
}
