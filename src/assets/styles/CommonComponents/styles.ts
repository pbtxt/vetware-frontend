import styled from "styled-components";
import { SECONDARY_COLOR } from "../colors";

export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: #ffffff;
  cursor: pointer;
`;

export const CardTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #003c69;
`;

export const CardText = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #003c69;
`;

export const ActionButton = styled.button`
  background-color: ${SECONDARY_COLOR} !important;
  border-color: ${SECONDARY_COLOR};
`;
