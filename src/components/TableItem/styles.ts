import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 0.75rem 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  color: #fff;
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
