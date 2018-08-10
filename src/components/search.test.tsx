import * as React from "react";
import * as enzyme from "enzyme";
import Search from "./search";

describe("Shallow rendering tests for search component", () => {
  const wrapper = enzyme.shallow(<Search />);
  const input = wrapper.find("input");

  it("displays search term entered by user", () => {
    input.simulate("change", { target: { value: "oakland" } });
    const searchDisplay = wrapper.find("p");
    expect(searchDisplay.text()).toEqual("oakland");
  });
});
