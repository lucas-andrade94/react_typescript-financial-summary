import { Item } from "../../types/Item";
import { Container } from "./styles";

type Props = {
  onAdd: (item: Item) => void;
};

const InputArea = ({ onAdd }: Props) => {
  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2021, 9, 21),
      category: "food",
      title: "Teste",
      value: 250.11,
    };
    onAdd(newItem);
  };

  return (
    <Container className="container">
      <button onClick={handleAddEvent}>Add</button>
    </Container>
  );
};

export default InputArea;
