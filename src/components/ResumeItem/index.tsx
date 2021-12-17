import { Container, Title, Info } from "./styles";

type Props = {
  title: string;
  value: number;
  color?: string;
};

const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Info color={color}>$ {value.toFixed(2)}</Info>
    </Container>
  );
};

export default ResumeItem;
