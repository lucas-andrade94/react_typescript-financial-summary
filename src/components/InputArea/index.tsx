import { useState } from "react";

import { Item } from "../../types/Item";
import { categories } from "../../data/categories";

import {
  Container,
  InputLabel,
  InputTitle,
  Input,
  Select,
  Button,
} from "./styles";
import { calendarDate } from "../../helpers/dateFilter";

type Props = {
  onAdd: (item: Item) => void;
};

const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Invalid date!");
    }

    if (!categoryKeys.includes(categoryField)) {
      errors.push("Invalid category!");
    }

    if (titleField === "") {
      errors.push("Invalid title!");
    }

    if (valueField <= 0) {
      errors.push("Invalid value!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      const dateCalendar = calendarDate(new Date(dateField));

      onAdd({
        date: dateCalendar,
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <Container className="container">
      <InputLabel>
        <InputTitle>Date</InputTitle>
        <Input
          type="date"
          value={dateField}
          onChange={(event) => setDateField(event.target.value)}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>Category</InputTitle>
        <Select
          value={categoryField}
          onChange={(event) => setCategoryField(event.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => {
              return (
                <option key={index} value={key}>
                  {categories[key].title}
                </option>
              );
            })}
          </>
        </Select>
      </InputLabel>
      <InputLabel>
        <InputTitle>Title</InputTitle>
        <Input
          type="text"
          value={titleField}
          onChange={(event) => setTitleField(event.target.value)}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>Value</InputTitle>
        <Input
          type="number"
          value={valueField}
          onChange={(event) => setValueField(parseFloat(event.target.value))}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>&nbsp;</InputTitle>
        <Button onClick={handleAddEvent}>Add</Button>
      </InputLabel>
    </Container>
  );
};

export default InputArea;
