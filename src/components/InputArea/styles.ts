import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 0.75rem;
  padding: 1.25rem;
  margin: 1.25rem auto;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const InputLabel = styled.label`
  flex: 1;
  margin: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 0.25rem;
  border: 1px solid lightblue;
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 100%;
  height: 2rem;
  padding: 0 0.25rem;
  border: 1px solid lightblue;
  border-radius: 0.25rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 2rem;
  padding: 0 0.25rem;
  border: 1px solid lightblue;
  border-radius: 0.25rem;
  background-color: lightblue;
  color: black;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: blue;
    color: white;
  }
`;
