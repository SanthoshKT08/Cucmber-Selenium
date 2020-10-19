Feature: login functionality

Scenario: Verify if user will able to login with valid credentials
Given intialize the "chrome"
Given Enter the URL
Given On Home page click on Sign In
When User login with email id "ktsanthosh08@gmail.com" and valid password "1@Santhosh"
Then User clicks on sign in button
And On success User login to the application

Scenario: Verify if user will able to login unregistered credentials
Given intialize the "chrome"
Given Enter the URL
Given On Home page click on Sign In
When User login with email id "ktsanthsadosh08@gmail.com" and valid password "1@sasdnthosh"
Then User clicks on sign in button
And On success System should display user does not exist

Scenario: Verify if user will able to login with invalid credentials
Given intialize the "chrome"
Given Enter the URL
Given On Home page click on Sign In
When User login with email id "ktsanthosh08gmail.com" and valid password "1@santhsadosh"
Then User clicks on sign in button
And On success System should please enter valid data

