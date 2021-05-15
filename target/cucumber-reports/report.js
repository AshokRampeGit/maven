$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("orangehrm.feature");
formatter.feature({
  "line": 1,
  "name": "Admin Login",
  "description": "I want to use this template for Testing Orangehrm Features",
  "id": "admin-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Check Admin Login with valid data",
  "description": "",
  "id": "admin-login;check-admin-login-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I Open Orangehrm with url \"http://orangehrm.qedgetech.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should see Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter username as \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \"Qedge123!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click Login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see Admin Module",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I close Browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://orangehrm.qedgetech.com",
      "offset": 27
    }
  ],
  "location": "OrangehrmTestSteps.i_Open_Orangehrm_with(String)"
});
formatter.result({
  "duration": 13738704857,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.i_should_see_Login_Page()"
});
formatter.result({
  "duration": 148545759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    }
  ],
  "location": "OrangehrmTestSteps.i_enter_username_as(String)"
});
formatter.result({
  "duration": 46049933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qedge123!@#",
      "offset": 21
    }
  ],
  "location": "OrangehrmTestSteps.i_enter_password_as(String)"
});
formatter.result({
  "duration": 57994745,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.i_click_Login()"
});
formatter.result({
  "duration": 2600125721,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.i_should_see_Admin_Module()"
});
formatter.result({
  "duration": 90564699,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 2935566527,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Check Admin Login with invalid data",
  "description": "",
  "id": "admin-login;check-admin-login-with-invalid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I Open Orangehrm with url \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I should see Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I enter username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click Login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see Error Message",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "admin-login;check-admin-login-with-invalid-data;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password"
      ],
      "line": 25,
      "id": "admin-login;check-admin-login-with-invalid-data;;1"
    },
    {
      "cells": [
        "http://orangehrm.qedgetech.com",
        "Admin",
        "abcd"
      ],
      "line": 26,
      "id": "admin-login;check-admin-login-with-invalid-data;;2"
    },
    {
      "cells": [
        "http://orangehrm.qedgetech.com",
        "abcd",
        "Qedge123!@#"
      ],
      "line": 27,
      "id": "admin-login;check-admin-login-with-invalid-data;;3"
    },
    {
      "cells": [
        "http://orangehrm.qedgetech.com",
        "abcd",
        "xyz"
      ],
      "line": 28,
      "id": "admin-login;check-admin-login-with-invalid-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Check Admin Login with invalid data",
  "description": "",
  "id": "admin-login;check-admin-login-with-invalid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I Open Orangehrm with url \"http://orangehrm.qedgetech.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I should see Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I enter username as \"Admin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter password as \"abcd\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click Login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see Error Message",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close Browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://orangehrm.qedgetech.com",
      "offset": 27
    }
  ],
  "location": "OrangehrmTestSteps.i_Open_Orangehrm_with(String)"
});
formatter.result({
  "duration": 8760374683,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.i_should_see_Login_Page()"
});
formatter.result({
  "duration": 70323133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    }
  ],
  "location": "OrangehrmTestSteps.i_enter_username_as(String)"
});
formatter.result({
  "duration": 39244731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 21
    }
  ],
  "location": "OrangehrmTestSteps.i_enter_password_as(String)"
});
formatter.result({
  "duration": 28347598,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.i_click_Login()"
});
formatter.result({
  "duration": 23289271564,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.i_should_see_Error_Message()"
});
formatter.result({
  "duration": 40702500,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 2842198327,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Check Admin Login with invalid data",
  "description": "",
  "id": "admin-login;check-admin-login-with-invalid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I Open Orangehrm with url \"http://orangehrm.qedgetech.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I should see Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I enter username as \"abcd\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter password as \"Qedge123!@#\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click Login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see Error Message",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close Browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://orangehrm.qedgetech.com",
      "offset": 27
    }
  ],
  "location": "OrangehrmTestSteps.i_Open_Orangehrm_with(String)"
});
formatter.result({
  "duration": 18585396653,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.i_should_see_Login_Page()"
});
formatter.result({
  "duration": 88750719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 21
    }
  ],
  "location": "OrangehrmTestSteps.i_enter_username_as(String)"
});
formatter.result({
  "duration": 38859442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qedge123!@#",
      "offset": 21
    }
  ],
  "location": "OrangehrmTestSteps.i_enter_password_as(String)"
});
formatter.result({
  "duration": 32950539,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.i_click_Login()"
});
formatter.result({
  "duration": 876207235,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.i_should_see_Error_Message()"
});
formatter.result({
  "duration": 39575284,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 2695631183,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Check Admin Login with invalid data",
  "description": "",
  "id": "admin-login;check-admin-login-with-invalid-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I Open Orangehrm with url \"http://orangehrm.qedgetech.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I should see Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I enter username as \"abcd\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter password as \"xyz\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click Login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see Error Message",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close Browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://orangehrm.qedgetech.com",
      "offset": 27
    }
  ],
  "location": "OrangehrmTestSteps.i_Open_Orangehrm_with(String)"
});
formatter.result({
  "duration": 10948703125,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.i_should_see_Login_Page()"
});
formatter.result({
  "duration": 71279301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 21
    }
  ],
  "location": "OrangehrmTestSteps.i_enter_username_as(String)"
});
formatter.result({
  "duration": 39434596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 21
    }
  ],
  "location": "OrangehrmTestSteps.i_enter_password_as(String)"
});
formatter.result({
  "duration": 41096341,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.i_click_Login()"
});
formatter.result({
  "duration": 928314030,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.i_should_see_Error_Message()"
});
formatter.result({
  "duration": 47192972,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 3287880505,
  "status": "passed"
});
});