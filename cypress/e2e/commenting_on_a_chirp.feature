Feature: Comment on other peoples chirp posts
  Background: As a user I would like to comment on other peoples chirp posts
    Given I logged into my Chirpr account

    Scenario Outline: Commenting on a post by their username
      When I will post '<message>' on the username <user> post
      Then The message '<message>' will appear inside <user> post as a comment
      Examples:
        | message        | user  |
        | Hello!!           | @Willllll |
        | Its very good! | @Test |
