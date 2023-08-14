import "./add.scss";
import { UserStateType } from "../../pages/users/usersData";
import { useState } from "react";

type InputType = {
  id: string;
  label: string;
  type: string;
};

type Props = {
  slug: string;
  input: InputType[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  initialState: UserStateType;
};

const Add = (props: Props) => {
  const [input, setInput] = useState(props.initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    props.setOpen(false);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          <img src="/close.svg" alt="close button" />
        </span>
        <h1>{`Add New ${props.slug}`}</h1>
        <form onSubmit={handleSubmit}>
          <div className="items">
            {props.input.map((item) => (
              <div className="item" key={item.id}>
                <label htmlFor={item.id}>{item.label}</label>
                {item.type !== "select" ? (
                  <input
                    type={item.type}
                    id={item.id}
                    name={item.id}
                    value={input[item.id as keyof UserStateType]}
                    onChange={handleChange}
                    required
                  />
                ) : (
                  <select
                    name={item.id}
                    defaultValue={"false"}
                    onChange={handleChange}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                )}
              </div>
            ))}
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
