import {
  initialSimpleCounterStoreState,
  plainJSCounterStore,
} from "./plainJSStore.js";
import { it, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { PlainJSCounter } from "./PlainJSCounter.jsx";
import userEvent from "@testing-library/user-event";
let user;

describe("plainJSCounter", () => {
  beforeEach(() => {
    plainJSCounterStore.setState(initialSimpleCounterStoreState);
    user = userEvent.setup();
  });
  it("should increment on click", async () => {
    render(<PlainJSCounter />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("count is 0");
    await user.click(button);
    expect(button).toHaveTextContent("count is 1");
  });
});
