import { mount } from "@cypress/vue";
import Button from "@/components/ui/button/Button.vue";

describe("Button.vue", () => {
  it("should render a button", function () {
    mount(Button);
    cy.get("button").should("not.exist");
  });
});
