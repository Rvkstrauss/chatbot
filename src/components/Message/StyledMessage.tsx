import styled from 'styled-components';

const StyledMessage = styled("div")<{ type: string}>`
  float: ${props => props.type === 'sent' ? 'right' : 'left'};
  background-color: ${props => props.type === 'sent' ? props.theme.secondaryLightColor : props.theme.primaryDarkColor};
  border-radius: ${props => props.type === 'sent' ? `4px 0` : `4px 14px`};
  font-size: .9em;
  width: auto;
  max-width: 250px;
  padding: 7px;
  color: ${props => props.type === 'sent' ? props.theme.secondaryLightColor : props.theme.primaryDarkColor}
  margin: ${props => props.type === 'sent' ? `7px 0 0 7px` : `0 7px 7px 7px`};
  display: block;
  clear: both;
`;

export default StyledMessage;