import styled from "styled-components";

const StyledApp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 70px;
`
const Navtop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C3CFD9;
  color: #E8833A;
  font-family: 'Roboto', sans-serif;
  font-size: 34px;
  line-height: 40px;
`

export {StyledApp, Navtop};