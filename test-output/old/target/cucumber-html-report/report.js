$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": Verify if user will able to login with valid credentials",
  "description": "",
  "id": "login-functionality;:-verify-if-user-will-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "intialize the \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "On Home page click on Sign In",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User login with email id \u003cEmailID\u003e and valid password \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "On success User login to the application",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "browser close",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-functionality;:-verify-if-user-will-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "EmailID",
        "Password"
      ],
      "line": 14,
      "id": "login-functionality;:-verify-if-user-will-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "ktsanthosh08@gmail.com",
        "1@Santhosh"
      ],
      "line": 15,
      "id": "login-functionality;:-verify-if-user-will-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "sathish1294@gmail.com",
        "123456"
      ],
      "line": 16,
      "id": "login-functionality;:-verify-if-user-will-able-to-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": ": Verify if user will able to login with valid credentials",
  "description": "",
  "id": "login-functionality;:-verify-if-user-will-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "intialize the \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "On Home page click on Sign In",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User login with email id ktsanthosh08@gmail.com and valid password 1@Santhosh",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "On success User login to the application",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "browser close",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 15
    }
  ],
  "location": "Login.intialize_the_something(String)"
});
formatter.result({
  "duration": 75202426500,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_the_url()"
});
formatter.result({
  "duration": 29762217200,
  "status": "passed"
});
formatter.match({
  "location": "Login.on_home_page_click_on_sign_in()"
});
formatter.result({
  "duration": 4103430200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ktsanthosh08@gmail.com",
      "offset": 25
    },
    {
      "val": "1@Santhosh",
      "offset": 67
    }
  ],
  "location": "Login.user_login_with_email_id_and_valid_password(String,String)"
});
formatter.result({
  "duration": 457905600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 100519300,
  "status": "passed"
});
formatter.match({
  "location": "Login.on_success_user_login_to_the_application()"
});
formatter.result({
  "duration": 154644102200,
  "status": "passed"
});
formatter.match({
  "location": "Login.browser_close()"
});
formatter.result({
  "duration": 1522009700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": ": Verify if user will able to login with valid credentials",
  "description": "",
  "id": "login-functionality;:-verify-if-user-will-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "intialize the \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "On Home page click on Sign In",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User login with email id sathish1294@gmail.com and valid password 123456",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "On success User login to the application",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "browser close",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 15
    }
  ],
  "location": "Login.intialize_the_something(String)"
});
formatter.result({
  "duration": 7642468400,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_the_url()"
});
formatter.result({
  "duration": 30985424200,
  "status": "passed"
});
formatter.match({
  "location": "Login.on_home_page_click_on_sign_in()"
});
formatter.result({
  "duration": 4338347400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sathish1294@gmail.com",
      "offset": 25
    },
    {
      "val": "123456",
      "offset": 66
    }
  ],
  "location": "Login.user_login_with_email_id_and_valid_password(String,String)"
});
formatter.result({
  "duration": 259019300,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 63253000,
  "status": "passed"
});
formatter.match({
  "location": "Login.on_success_user_login_to_the_application()"
});
formatter.result({
  "duration": 50272194700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[@id\u003d\u0027childTab\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\SANTHO~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:57090}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d31e01bcee632cf2a5d325ce0213dfba\n*** Element info: {Using\u003dxpath, value\u003d//li[@id\u003d\u0027childTab\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy38.isDisplayed(Unknown Source)\r\n\tat StepDefinitions.Login.on_success_user_login_to_the_application(Login.java:76)\r\n\tat ✽.And On success User login to the application(Login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.browser_close()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Signup.feature");
formatter.feature({
  "line": 1,
  "name": "Sign Up functionality",
  "description": "",
  "id": "sign-up-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verify if user will able to sign up",
  "description": "",
  "id": "sign-up-functionality;verify-if-user-will-able-to-sign-up",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Enter the URL and click on sign up",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User sign up with selecting learner, entering valid first name , Last name, email id, password, Mobile number, Selecting country and city",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User clicks on create an account",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User had successfully sign up",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User can able to see sign in link",
  "keyword": "And "
});
formatter.match({
  "location": "SignUp.enter_the_url_and_click_on_sign_up()"
});
formatter.result({
  "duration": 1367600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.user_sign_up_with_selecting_learner_entering_valid_first_name_last_name_email_id_password_mobile_number_selecting_country_and_city()"
});
formatter.result({
  "duration": 327000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.user_clicks_on_create_an_account()"
});
formatter.result({
  "duration": 693800,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.user_had_successfully_sign_up()"
});
formatter.result({
  "duration": 340200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.user_can_able_to_see_sign_in_link()"
});
formatter.result({
  "duration": 297900,
  "status": "passed"
});
});