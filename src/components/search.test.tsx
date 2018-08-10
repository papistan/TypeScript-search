import * as React from "react";
import * as enzyme from "enzyme";
import Search from "./search";

describe("Shallow rendering tests for search component", () => {
  const search = enzyme.shallow(<Search />);

  it("displays search term entered by user", () => {
    expect(search.find("p").text()).toEqual("oakland");
  });
});
