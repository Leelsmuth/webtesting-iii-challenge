import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

let wrapper;

afterEach(rtl.cleanup);
beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

describe("Dashboard", () => {
  it("shows the controls and display", () => {
    expect(wrapper.queryByText(/close Gate/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
  });
  it("cannot be closed or opened if it is locked", () => {
    rtl.fireEvent.click(wrapper.getByTestId("toggleClosed"));
    rtl.fireEvent.click(wrapper.getByTestId("toggleLocked"));
    wrapper.debug();
    expect(wrapper.getByTestId("toggleLocked")).toBeEnabled();
    expect(wrapper.getByTestId("toggleClosed")).toBeDisabled();
  });

  it("buttons change text on click", () => {
    rtl.fireEvent.click(wrapper.getByTestId("toggleClosed"));
    expect(wrapper.getByTestId("toggleClosed")).toHaveTextContent(/open gate/i);
    rtl.fireEvent.click(wrapper.getByTestId("toggleLocked"));
    expect(wrapper.getByTestId("toggleLocked")).toHaveTextContent(
      /unlock gate/i
    );
  });
});
