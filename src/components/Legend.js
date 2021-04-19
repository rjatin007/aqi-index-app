import styled from "styled-components";
import { aqiColors, appColors } from "../utils/Colors";
import FlexRowContainer from "../ui/FlexRowContainer";

const ItemsContainer = styled(FlexRowContainer)`
  width: 90%;
  padding: 10px;
  margin: 50px auto;
  border: 2px solid ${appColors.lightTeal};
`;
const Item = styled(FlexRowContainer)`
  margin: 10px auto;
`;
const ColorBlock = styled.div`
  background-color: ${({ color }) => color && color};
  width: 20px;
  height: 20px;
  margin-right: 20px;
  display: inline-block;
`;
const Legend = () => {
  return (
    <ItemsContainer>
        <Item key="key">
          <ColorBlock color="#000" />{" "}
        <em>{"no current updated data".toUpperCase()}</em>
      </Item>
      {Object.keys(aqiColors).map((key) => (
        <Item>
          <ColorBlock color={aqiColors[key]} /> <em>{key.toUpperCase()}</em>
        </Item>
      ))}
    </ItemsContainer>
  );
};
export default Legend;
