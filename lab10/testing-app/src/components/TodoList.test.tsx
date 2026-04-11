import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoList } from "./TodoList";

describe("TodoList", () => {
  test("renders empty list", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  test("adds todo", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("add-button");

    await user.type(input, "Test todo");
    await user.click(button);

    expect(screen.getByText("Test todo")).toBeInTheDocument();
  });

  test("toggle todo", async () => {
    render(
      <TodoList
        initialTodos={[{ id: 1, text: "Test", completed: false }]}
      />
    );

    const checkbox = screen.getByTestId("todo-checkbox");
    await userEvent.click(checkbox);

    const item = screen.getByTestId("todo-item");
    expect(item).toHaveClass("completed");
  });

  test("delete todo", async () => {
    render(
      <TodoList
        initialTodos={[{ id: 1, text: "Delete me", completed: false }]}
      />
    );

    const btn = screen.getByTestId("delete-button");
    await userEvent.click(btn);

    expect(screen.queryByText("Delete me")).not.toBeInTheDocument();
  });
});