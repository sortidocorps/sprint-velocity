Feature: Sprint operations

  Scenario: Create a new sprint
    Given the sprint data:
      | sprintNumber | date                 | capacity | velocity | completed | completion | velocityCapacityAvg |
      | 1            | 2024-01-30T12:00:00Z | 10       | 0        | 0         | 0          | 0                   |
    When the user creates a new sprint
    Then the response should be a new sprint with sprintNumber 1

  Scenario: Get all sprints
    Given there are existing sprints in the system
    When the user requests all sprints
    Then the response should contain a list of sprints

  Scenario: Update an existing sprint
    Given there is an existing sprint with sprintNumber 1
    When the user updates the sprint with sprintNumber 1:
      | velocity | completed | completion |
      | 5        | 3         | 30         |
    Then the response should indicate a successful update

  Scenario: Delete an existing sprint
    Given there is an existing sprint with sprintNumber 1
    When the user deletes the sprint with sprintNumber 1
    Then the response should indicate a successful deletion
