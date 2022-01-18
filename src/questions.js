// holds the questions so the repo won't be crowded and unorganized
let manArray = [];
let roleArray = [];
let choiceArray = [];
let employeeArray = [];

const starterQs = [
    {
        type: "list",
        message: "Pick an action",
        name: "choice",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add A Department",
          "Add A Role",
          "Add An Employee",
          "Update An Employee Role",
          "Update An Employee Manager",
          "Exit"
        ],
      },
];

const addDepartmentQ = [
    {
      type: "input",
      message: "Name of Department:",
      name: "departmentName",
    },
];

const addRoleQs = [
    {
        type: "input",
        message: "What is the role's title?",
        name: "roleName",
    },
    {
        type: "input",
        message: "What is the role's salary?",
        name: "roleSalary",
    },
    {
        type: "list",
        message: "Which department does the role belong to?",
        name: "roleDepartment",
        choices: choiceArray
    },
];

const addEmployeeQs = [
    {
        type: "input",
        message: "What is the employee's first name?",
        name: "employeeFName",
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "employeeLName",
    },
    {
        type: "list",
        message: "Which is the employee's role?",
        name: "employeeRole",
        choices: roleArray,
    },
    {
        type: "list",
        message: "Who is the employee's manager?",
        name: "employeeManager",
        choices: manArray,
    },
]

const updateQs = [
    {
        type: "list",
        message: "Which employee do you want to update?",
        name: "employeeUpdate",
        choices: employeeArray,
    },
    {
        type: "list",
        message: "Who is their managers now?",
        name: "manUpdate",
        choices: manArray,
    }
]

const updateRoleQs = [
    {
        type: "list",
        message: "Which employee do you want to update?",
        name: "employeeUpdate",
        choices: employeeArray,
    },
    {
        type: "list",
        message: "Chose their new role?",
        name: "roleUpdate",
        choices: roleArray,
    }
]

  module.exports = {starterQs, addDepartmentQ, addRoleQs, addEmployeeQs, updateQs, updateRoleQs};