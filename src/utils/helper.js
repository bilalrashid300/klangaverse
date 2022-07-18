export const getCode = (code) => {
    if (code == "US") {
      return "en";
    } else if (code == "FR") {
      return "fr";
    } else if (code == "DE") {
      return "de";
    } else if (code == "ES") {
      return "es";
    } else if (code == "TR") {
      return "tr";
    } else {
      return "en";
    }
  };

  export const getCodeForFlag = (code) => {
    if (code == "en") {
      return "US";
    } else if (code == "fr") {
      return "FR";
    } else if (code == "de") {
      return "DE";
    } else if (code == "es") {
      return "ES";
    } else if (code == "tr") {
      return "TR";
    } else {
      return "US";
    }
  };
