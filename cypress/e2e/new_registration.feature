Feature: Making a new account to post my first chirp
  Background: going into the website
    Given As a new user I will need to go to the main page

    Scenario Outline: creating a new account
      When I am on the main page, I will need to click on register here link to create a new account
      And I will enter the form with <firstName> <lastName> <email> and <password>
      And On the next page, I will use <username> and click on complete registration on the final page
      Then I should be redirected to the login page


      Examples:
        | firstName | lastName | email                    | password | username       |
        | Darren    | Somebody | darrensomebody@email.com | password | darrensomebody |