$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/product.feature");
formatter.feature({
  "line": 2,
  "name": "Product_Store Website",
  "description": "",
  "id": "product-store-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with valid and invalid details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "product-store-website;login-into-product-store-website;;1"
    },
    {
      "cells": [
        "gsaipriya",
        "sai@12"
      ],
      "line": 14,
      "id": "product-store-website;login-into-product-store-website;;2"
    },
    {
      "cells": [
        "saipriyag",
        "sai@123"
      ],
      "line": 15,
      "id": "product-store-website;login-into-product-store-website;;3"
    },
    {
      "cells": [
        "gunneri",
        "1234"
      ],
      "line": 16,
      "id": "product-store-website;login-into-product-store-website;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"gsaipriya\" and \"sai@12\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 12567588500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 184178800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gsaipriya",
      "offset": 22
    },
    {
      "val": "sai@12",
      "offset": 38
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8535971299,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 187278100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"saipriyag\" and \"sai@123\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7751415799,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 147305800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saipriyag",
      "offset": 22
    },
    {
      "val": "sai@123",
      "offset": 38
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8456241000,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 206609099,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"gunneri\" and \"1234\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7362927601,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 171410899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gunneri",
      "offset": 22
    },
    {
      "val": "1234",
      "offset": 36
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8455554700,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 254614900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Fill contact in Product_Store",
  "description": "",
  "id": "product-store-website;fill-contact-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@TC_02_contact"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Clicking on contact to navigate contact Page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The user filling contactdetails using email as \"saipriya@gmail.com\" and name as \"saipriya\" and message as \"ok\" details",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Clicking on close button",
  "keyword": "Then "
});
formatter.match({
  "location": "contactdetailstep.user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7245648900,
  "status": "passed"
});
formatter.match({
  "location": "contactdetailstep.clicking_on_contact_to_navigate_contact_Page()"
});
formatter.result({
  "duration": 181423800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saipriya@gmail.com",
      "offset": 48
    },
    {
      "val": "saipriya",
      "offset": 81
    },
    {
      "val": "ok",
      "offset": 107
    }
  ],
  "location": "contactdetailstep.the_user_filling_contactdetails_using_email_as_and_name_as_message_as_details(String,String,String)"
});
formatter.result({
  "duration": 17837363399,
  "status": "passed"
});
formatter.match({
  "location": "contactdetailstep.click_on_close_Button()"
});
formatter.result({
  "duration": 3145232200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Order product in Product_Store",
  "description": "",
  "id": "product-store-website;order-product-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@TC_03_Order"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "To launch the Google chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "To click on product to navigate product Page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The user filling the name as \"saipriya\" country as \"India\" city as \"tirupati\" creditcard as \"2458982980\" month as \"02\" year as \"2022\" details",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "To close the product browser button",
  "keyword": "Then "
});
formatter.match({
  "location": "placeanorderstep.to_launch_the_Google_chrome_application()"
});
formatter.result({
  "duration": 8730599700,
  "status": "passed"
});
formatter.match({
  "location": "placeanorderstep.to_click_on_product_to_navigate_product_Page()"
});
formatter.result({
  "duration": 1505584400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saipriya",
      "offset": 30
    },
    {
      "val": "India",
      "offset": 52
    },
    {
      "val": "tirupati",
      "offset": 68
    },
    {
      "val": "2458982980",
      "offset": 93
    },
    {
      "val": "02",
      "offset": 115
    },
    {
      "val": "2022",
      "offset": 128
    }
  ],
  "location": "placeanorderstep.the_user_filling_the_name_as_country_as_city_as_creditcard_as_month_as_year_as_details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 30336840500,
  "status": "passed"
});
formatter.match({
  "location": "placeanorderstep.to_close_the_product_browser_Button()"
});
formatter.result({
  "duration": 3227491700,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Fill singup page in Product_Store",
  "description": "",
  "id": "product-store-website;fill-singup-page-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC_04_signup"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Launching the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Clicking on signup to navigate signup Page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "The user signup using \"saipriya1234@gmail.com\" and \"saipriya@12\" with vaild details",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Clicking on signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signuppstep.launching_the_chrome_application()"
});
formatter.result({
  "duration": 8057959600,
  "status": "passed"
});
formatter.match({
  "location": "Signuppstep.clicking_on_signup_to_navigate_signup_Page()"
});
formatter.result({
  "duration": 311574900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saipriya1234@gmail.com",
      "offset": 23
    },
    {
      "val": "saipriya@12",
      "offset": 52
    }
  ],
  "location": "Signuppstep.the_user_signup_using_and_with_vaild_details(String,String)"
});
formatter.result({
  "duration": 8638437800,
  "status": "passed"
});
formatter.match({
  "location": "Signuppstep.click_on_signup_Button()"
});
formatter.result({
  "duration": 6181887201,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Selecting category",
  "description": "",
  "id": "product-store-website;selecting-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@TC_05_category"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "For launching the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Clicking on category to navigate phone Page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "The user clicking on category",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on close button",
  "keyword": "Then "
});
formatter.match({
  "location": "Categorystep.for_launching_the_chrome_application()"
});
formatter.result({
  "duration": 8026959300,
  "status": "passed"
});
formatter.match({
  "location": "Categorystep.clicking_on_category_to_navigate_phone_Page()"
});
formatter.result({
  "duration": 205659000,
  "status": "passed"
});
formatter.match({
  "location": "Categorystep.the_user_clicking_on_category()"
});
formatter.result({
  "duration": 15380630499,
  "status": "passed"
});
formatter.match({
  "location": "Categorystep.click_on_close_Button()"
});
formatter.result({
  "duration": 3155935699,
  "status": "passed"
});
});