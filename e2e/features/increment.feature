Feature: Incrementing a value

    Scenario: When the increment button is pressed the value increases by one
        Given I am on the Automation Sample application
        And the value is 0
        When I click the increment button
        Then the value is 1
