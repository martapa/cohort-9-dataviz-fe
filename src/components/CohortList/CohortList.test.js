import React from "react";
import { mount, shallow } from "enzyme";
import { CohortList } from "./CohortList";
import CohortListItem from "../CohortListItem/CohortListItem";
import { Router, withRouter, MemoryRouter } from "react-router-dom";

describe("CohortList component test with Enzyme", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CohortList cohorts={{ "cohort-1": 33 }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should contain CohortListItem", () => {
    const wrapper = mount(
      <MemoryRouter>
        <CohortList cohorts={{ "cohort-1": 33 }} />
      </MemoryRouter>
    );
    expect(wrapper.find(CohortListItem).exists()).toBe(true);
  });
});
