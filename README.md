# End to End Testing with Cypress
### Course: ![LinkedIn Learning with Shaun Wassell](https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io/test-automation-with-javascript)

---

This is my repository from coding along with the Cypress Course offered on linked in learning.

The course is from 2019, below are listed some issues I had and the solutions.

* Test files should be located: cypress/e2e/test-name.spec.cy.js (integration folder is no longer created upon scaffolding project)
* cypress.config.js that is created upon scaffolding has replaced the deprecated cypress.json (Also nice to note that the directive for in-editor autocompletion of commands is built in there, so there is no need to add directives to the files with '///'
* the React 'target app' will not work on the current version of Node. I downgraded to v 16.2 and then it was functional.
