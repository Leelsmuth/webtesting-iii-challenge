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
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
  });
});
