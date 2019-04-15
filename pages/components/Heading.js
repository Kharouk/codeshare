import styled from "styled-components"

const Heading = styled.h1.attrs(({ center }) => ({
  center: center ? `center` : ``
}))`
  color: #333;
  text-align: ${props => props.center};
`

export default Heading
