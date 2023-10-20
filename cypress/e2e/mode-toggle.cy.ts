describe("ModeToggle Component", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173");
    });

    it("should display the light theme by default", () => {
        // Ensure the light theme is applied.
        cy.get("html").should("not.have.class", "dark");
    });

    it("should switch to the dark theme when the button is clicked", () => {
        // Click the toggle button.
        cy.get("[data-testid=mode-toggle]").should("have.length", 1).click();
        // Check if the dark theme is applied.
        cy.get("html").should("have.class", "dark");
    });

    it("should switch back to the light theme when the button is clicked again", () => {
        // Click the toggle button to switch to dark theme.
        cy.get("[data-testid=mode-toggle]").should("have.length", 1).click();
        // Click the toggle button again to switch back to light theme.
        cy.get("[data-testid=mode-toggle]").click();
        // Ensure the light theme is applied.
        cy.get("html").should("not.have.class", "dark");
    });

    it("should have a Sun icon visible in light theme", () => {
        // Ensure the light theme is applied.
        cy.get("html").should("not.have.class", "dark");
        // Replace with the actual selector.
        cy.get("[data-testid=mode-toggle] #icon-sun-mode-toggle").should(
            "be.visible",
        );
    });

    it("should have a Moon icon visible in dark theme", () => {
        // Click the toggle button to switch to dark theme.
        cy.get("[data-testid=mode-toggle]").should("have.length", 1).click();
        // Replace with the actual selector.
        cy.get("[data-testid=mode-toggle] #icon-moon-mode-toggle").should(
            "be.visible",
        );
    });

    it("should have a clickable button", () => {
        // Click the toggle button.
        cy.get("[data-testid=mode-toggle]").should("have.length", 1).click();
    });
});
