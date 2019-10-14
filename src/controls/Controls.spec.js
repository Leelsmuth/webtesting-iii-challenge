// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Controls />);
});

describe("Controls renders without crashing", () => {
  test("Controls provides buttons to toggle the closed and locked states", () => {
    expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
  });
  //   test("buttons' text changes to reflect the state the door will be in if clicked", () => {
  //     expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
  //     rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
  //     expect(wrapper.queryByText(/close gate/i)).not.toBeDisplay();
  //     expect(wrapper.queryByText(/open gate/i)).toBeDisplay();
  //   });

  it("the closed toggle button is disabled if the gate is locked", () => {
    rtl.cleanup();
    wrapper = rtl.render(<Controls locked={true} closed={true} />);
    expect(wrapper.getByTestId("toggleClosed")).toBeDisabled();
  });

  it("the locked toggle button is disabled if the gate is open", () => {
    expect(wrapper.getByTestId("toggleLocked")).toBeDisabled();
  });
});
