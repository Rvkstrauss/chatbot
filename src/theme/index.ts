import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryLightColor: string;
  secondaryLightColor: string;
  primaryDarkColor: string;
  secondaryDarkColor: string;
  fonts: string[];
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
}
export const theme = {
  primaryLightColor: "#fdfdfd",
  secondaryLightColor: "#f1f1f1",
  primaryDarkColor: "#484848",
  secondaryDarkColor: "#e0e0e0",
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

export default styled;
export { css, keyframes, ThemeProvider };
