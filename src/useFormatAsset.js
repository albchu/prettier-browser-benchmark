import liquidPlugin from "@shopify/prettier-plugin-liquid/standalone";
import { useCallback, useState } from "react";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import parserCss from "prettier/parser-postcss";
// import { capitalize } from "lodash";

const FORMATTABLE = ["liquid", "json", "css", "js", "scss"];
const LS_BASE_KEY = "CodeEditorFormatOnSavePreference";

// const getLocalStorageKey = (extension) => {
//   return extension ? `${LS_BASE_KEY}${capitalize(extension)}` : LS_BASE_KEY;
// };

export const getFormatterOptions = (extension) => {
  switch (extension) {
    case "liquid":
      return { parser: "liquid-html", plugins: [liquidPlugin] };
    case "json":
      return { parser: "json", plugins: [parserBabel] };
    case "js":
      return { parser: "babel", plugins: [parserBabel] };
    case "css":
    case "scss":
      return { parser: "css", plugins: [parserCss] };
    default:
      throw new Error(
        `Formatting Error: Unsupported file extension '${extension}'`
      );
  }
};

/**
 * Hook that builds and returns a function that formats the asset value
 */
export const useFormatAsset = () => {
  //   const localStorageKey = getLocalStorageKey(extension);
  const [formatOnSave, setFormatOnSave] = useState(false);

  const toggleFormatOnSave = useCallback(() => {
    setFormatOnSave(!formatOnSave);
  }, [formatOnSave]);

  const getFormattedAsset = (assetValue, extension) => {
    try {
      const output = prettier.format(
        assetValue,
        getFormatterOptions(extension)
      );

      return output;
    } catch (error) {
      return assetValue;
    }
  };

  return {
    getFormattedAsset,
    formatOnSave,
    toggleFormatOnSave,
  };
};
