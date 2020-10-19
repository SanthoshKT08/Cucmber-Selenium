Feature: login functionality

Scenario Outline:: Verify if user will able to login with valid credentials
Given intialize the "chrome"
Given Enter the URL
Given On Home page click on Sign In
When User login with email id <EmailID> and valid password <Password>
Then User clicks on sign in button
And On success User login to the application
And browser close

Examples: 

|EmailID               | Password   |
|ktsanthosh08@gmail.com| 1@Santhosh |


