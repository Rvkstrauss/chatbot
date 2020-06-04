import styled from 'styled-components';

const getType = (props: any) => {
  return props.type !== 'maya';
}

const StyledMessage = styled("div")<{ type: string}>`
  float: ${props => getType(props) ? 'right' : 'left'}};
  background-color: ${props => getType(props) ? props.theme.secondaryLightColor : props.theme.primaryDarkColor};
  border-radius: ${props => getType(props) ? `14px 14px 4px 14px` : `14px 14px 14px 4px`};
  font-size: .9em;
  width: auto;
  max-width: 250px;
  padding: 13px;
  color: ${props => getType(props) ? props.theme.primaryDarkColor : props.theme.secondaryLightColor}
  margin: ${props => getType(props) ? `7px 0 0 7px` : `0 7px 7px 7px`};
  display: block;
  clear: both;
`;

export default StyledMessage;