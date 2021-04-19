import styled from "styled-components";
import FlexRowContainer from "../ui/FlexRowContainer";
import { appColors } from "../utils/Colors";
import H1 from "../ui/H1";
const Topbar = styled(FlexRowContainer)`
  width: 100%;
  padding: 50px;
  background-color: ${appColors.lightTeal};
  box-shadow: 0px 0px 10px 2px ${appColors.darkTeal};
  justify-content: center;
`;
const AppBar = () => (
  <Topbar>
    <H1>AQI Index App</H1>
  </Topbar>
);

export default AppBar;
