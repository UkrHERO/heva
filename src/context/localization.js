import React, { Component, createContext } from "react";
import en from "../locales/en.json";
import ru from "../locales/ru.json";

const locales = { en, ru };
const { Provider, Consumer } = createContext({
  currentLocale: "en",
  localizedContent: locales.en,
  locales: Object.keys(locales),
  changeLocale: () => null,
});

export default class LocalizationContext extends Component {
  static Consumer = Consumer;

  changeLocale = (locale) => {
    this.setState({
      currentLocale: locale,
      localizedContent: locales[locale],
    });
  };

  state = {
    currentLocale: "en",
    localizedContent: locales.en,
    locales: Object.keys(locales),
    changeLocale: this.changeLocale,
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
