import { fireEvent,render,screen } from "@testing-library/react";
import{expect,test,vi} from "vitest";
import AddUserForm from "./AddUserForm";

test("shows an error when the form is submitted empty",() =>{
const onUserAdded =vi.fn();

render(
    <AddUserForm onUserAdded={onUserAdded}/>
);
const addButton = screen.getByRole("button",{
    name: /add user/i
});
fireEvent.click(addButton);
const errorMessage = screen.getByRole("alert");
expect(errorMessage).toHaveTextContent(
    /name.*email.*phone.*required/i
);
expect(onUserAdded).not.toHaveBeenCalled();
});

test("update the name input",()=>{
    render(<AddUserForm onUserAdded={vi.fn()}/>);

    const nameInput = screen.getByLabelText("Name");

    fireEvent.change(nameInput,{
        target:{ value: "Vikas" }
    });

    expect(nameInput).toHaveValue("Vikas");
});