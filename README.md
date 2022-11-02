A. Framework Description:

This is a UI testing framework created using Playwright, Cucumber & Typescript. The framework is seggregated into various parts for better understandablibity & easier maintainability. 

Features Folder: Contains specflow file with the BDD user scenarios.

Support Folder: This contains the step definitions class file which has the logic for the user scenarios mentioned in the specflow file. This folder also has the base class whose properties are inherited in the step definitions section.

PageObjects Folder: This contains the page objects class file which contains all the element ids that are used in the project.

Data Folder: This contains a class file which has logic for allowing the framework to read data from a json file rather than hard coding the test data into the step definition. It also contains a json file which stores all the test data that will be used by the application under test.


B. Setup & Configuration:

1. Create an empty folder
2. Open the folder in VS code
3. Install the "Playwright Tests for VS Code extension" by Microsoft
4. Run the following commands:
  a.  npm init playwright@latest --yes -- --quiet --browser=chromium --browser=firefox --browser=webkit --gha
  b.  npm i @cucumber/cucumber
  c.  npm install ts-node --save-dev
  d.  npm install playwright --save-dev
5. Uncomment the code under "/* Test against mobile viewports. */" section of "playwright.config.ts" file to enable testing on mobile emulators
6. Add the following code block under "Settings > Workspace > json file" of your VS code to allow cucumber to understand where your steps file exists in the code base
<!-- {
  "html.format.indentHandlebars": true,
  "html.format.indentInnerHtml": true,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": true,
  "typescript.implementationsCodeLens.enabled": true,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": true,
  "typescript.format.insertSpaceAfterConstructor": true,
  "typescript.format.insertSpaceAfterTypeAssertion": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "files.autoSave": "afterDelay",
  "terminal.integrated.fontWeight": "800",
  "terminal.integrated.scrollback": 10000,
  "editor.wordWrapColumn": 300,
  "html.format.wrapLineLength": 300,
  "editor.wrappingIndent": "none",
  "editor.formatOnPaste": true,
  "html.format.maxPreserveNewLines": 300,
  "editor.wordWrap": "on",
  "cucumberautocomplete.steps": "../{folder name}/Support/*.steps.ts",
  "cucumberautocomplete.syncfeatures": "../Features/*.feature",
  "cucumberautocomplete.strictGherkinCompletion": true,
  "window.zoomLevel": 0,
  "cucumberautocomplete.strictGherkinValidation": true,
  "editor.renderWhitespace": "none",
  "editor.renderControlCharacters": true,
  "launch": {}
} -->
7. Create a file 'world.ts' under the support folder
8. Create a file cucumber.js under the parent folder