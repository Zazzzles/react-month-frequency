import styled from "styled-components";

export const Container = styled.div`
  width: ${props => props.width}px;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.radius}px;
  padding: 15px;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;

export const MonthContainer = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  padding: 5px;
`;

export const MonthLabel = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
  margin-bottom: 2px;
`;

export const MonthInner = styled.div`
  height: 65px;
  width: 85px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-content: flex-start;
`;

export const MonthSquare = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  margin: 2px;
  opacity: ${props => props.opacity};
  background-color: ${props => props.color};
  border-radius: 1px;
`;
