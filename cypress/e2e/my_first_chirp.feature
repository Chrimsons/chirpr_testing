Feature: Sending my first chirp
  Background: Logging into the page
    Given I have created an account I will need to login

    Scenario Outline: Logging into my account
      When I use my username and password to login
      Then I will be redirected to the main page, with my username displayed
      And I will be able to send off my first post "<message>"
      Then My "<message>" should be displayed on the main page

      Examples:
        | message      |
        | Hello World! |