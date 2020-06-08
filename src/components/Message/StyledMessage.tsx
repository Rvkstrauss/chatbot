import styled from "styled-components";

const isFromMaya = (props: any) => {
  return props.type === "maya";
};

const calc = (showAvatar: boolean, maya: boolean, field: string) => {
  switch (field) {
    case "margin":
      if (!maya) {
        return showAvatar ? "0 7px 7px 7px" : "0 57px 7px 7px";
      } else {
        return showAvatar ? "7px 0 0 7px" : "7px 0 0 57px";
      }
    case "border":
      if (!maya) {
        return "14px";
      } else {
        return showAvatar ? "4px 14px 14px 14px" : "14px 14px 14px 4px";
      }
    default:
      return;
      break;
  }
};

const StyledMessage = styled("div")<{ type: string; showAvatar: boolean }>`
  background-color: ${(props) =>
    !isFromMaya(props)
      ? props.theme.primaryDarkColor
      : props.theme.secondaryLightColor};
  border-radius: ${(props) => calc(props.showAvatar, isFromMaya(props), 'border')}
  font-size: .9em;
  min-width: 20px;
  max-width: 250px;
  padding: 8px;
  color: ${(props) =>
    !isFromMaya(props)
      ? props.theme.secondaryLightColor
      : props.theme.primaryDarkColor}
  margin: ${(props) => calc(props.showAvatar, isFromMaya(props), "margin")};
  display: flex;
  justify-content: center;
  clear: both;
`;

export default StyledMessage;
