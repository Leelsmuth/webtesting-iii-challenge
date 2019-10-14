import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

let wrapper;

afterEach(rtl.cleanup);
beforeEach(() => {
  wrapper = rtl.render(<Display />);
});

describe("Display", () => {
  it("displays if gate is open/closed and if it is locked/unlocked", () => {
    let open = wrapper.queryByText(/open/i);
    let closed = wrapper.queryByText(/closed/i);
    let locked = wrapper.queryByText(/locked/i);
    let unlocked = wrapper.queryByText(/unlocked/i);
    expect((open || closed) && (locked || unlocked)).toBeInTheDocument();
  });
  it('displays "Open" when gate is open', () => {
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
  });
  it('displays "Closed" when gate is closed', () => {
    wrapper = rtl.render(<Display closed={true} />);
    expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
  });
  it('displays "Unlocked" when gate is unlocked', () => {
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
  });
  it('displays "Locked" when gate is locked', () => {
    rtl.cleanup();
    wrapper = rtl.render(<Display locked={true} closed={true} />);
    expect(wrapper.queryByText(/unlocked/i)).not.toBeInTheDocument();
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
  });
  it("uses the red-led class when locked or closed", () => {
    rtl.cleanup();
    wrapper = rtl.render(<Display locked={true} closed={true} />);
    expect(wrapper.queryByText(/Locked/i)).toHaveClass("red-led");
    expect(wrapper.queryByText(/Closed/i)).toHaveClass("red-led");
  });
  it("uses the green-led class when unlocked or open", () => {
    expect(wrapper.queryByText(/Unlocked/i)).toHaveClass("green-led");
    expect(wrapper.queryByText(/Open/i)).toHaveClass("green-led");
  });
});
