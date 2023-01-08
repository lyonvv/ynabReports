import { ICurrencyFormatAPIModel } from "../Models/ApiModels/CurrencyFormatApiModel";
import { ICurrencyFormatModel } from "../Models/ClientModels/CurrencyFormatModel";

export const currencyFormatApiToClient = (
  currencyFormatApi: ICurrencyFormatAPIModel
): ICurrencyFormatModel => {
  return {
    isoCode: currencyFormatApi.iso_code,
    exampleFormat: currencyFormatApi.example_format,
    decimalDigits: currencyFormatApi.decimal_digits,
    currencySymbol: currencyFormatApi.currency_symbol,
    decimalSeparator: currencyFormatApi.decimal_separator,
    symbolFirst: currencyFormatApi.symbol_first,
    groupSeparator: currencyFormatApi.group_separator,
    displaySymbol: currencyFormatApi.display_symbol,
  };
};
