/// <reference types="cypress" />
import { Spinner } from "../../src/components/spinner";

describe("Spinner", () => {
    beforeEach(() => {
        cy.mount(<Spinner />);
    });

    it("renders without crashing", () => {
        cy.get("[data-testid=spinner]").should("exist");
    });
});
