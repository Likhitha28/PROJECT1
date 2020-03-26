@Product_Store
Feature: Product_Store Website

@TC_01_Login
Scenario Outline: Login into Product_Store Website
Given The user launch the Chrome application
When Clicking on login to navigate Login Page
Then The user login using "<username>" and "<password>" with valid and invalid details
Then Clicking on login button

Examples: 

|username	|password|
|likhitha211	|likhi@121 |
|shreya	    |shreya@123|
|chandu     |6548|
@TC_02_contact
Scenario: Fill contact in Product_Store
Given User launch the Chrome application
When Clicking on contact to navigate contact Page
Then The user filling contactdetails using email as "likhitha@gmail.com" and name as "Likhitha" and message as "Good" details
Then Clicking on close button
@TC_03_Order
Scenario: Order product in Product_Store
Given To launch the Google chrome application
When To click on product to navigate product Page
Then The user filling the name as "Likhitha" country as "India" city as "Nellore" creditcard as "854762315995" month as "03" year as "2022" details
Then To close the product browser button
@TC_04_signup
Scenario: Fill singup page in Product_Store
Given Launching the Chrome application
When Clicking on signup to navigate signup Page
Then The user signup using "likhitha211@gmail.com" and "likhi@121" with vaild details
Then Clicking on signup button
@TC_05_category
Scenario: Selecting category
Given For launching the Chrome application
When Clicking on category to navigate phone Page
Then The user clicking on category
Then Click on close button




