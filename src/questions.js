// holds the questions so the repo won't be crowded and unorganized

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


  module.exports = {starterQs, addDepartmentQ};