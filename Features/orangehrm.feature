Feature: Admin Login
  I want to use this template for Testing Orangehrm Features

  @tag1
  Scenario: Check Admin Login with valid data
    Given I Open Orangehrm with url "http://orangehrm.qedgetech.com"
    Then I should see Login Page
  	When I enter username as "Admin"
  	And I enter password as "Qedge123!@#"
  	And I click Login
  	Then I should see Admin Module  
    And I close Browser
    

  @tag2
  Scenario Outline: Check Admin Login with invalid data
  Given I Open Orangehrm with url "<url>"
    Then I should see Login Page
    When I enter username as "<username>"
    And I enter password as "<password>"
    And I click Login
    Then I should see Error Message
    And I close Browser
    Examples: 
    |url|username|password|
    |http://orangehrm.qedgetech.com|Admin|abcd|
    |http://orangehrm.qedgetech.com|abcd|Qedge123!@#|
    |http://orangehrm.qedgetech.com|abcd|xyz|
