function increaseSalary() {
    return api.getEmployees().then((emp) => {
          let salArr = []
          emp.forEach((el) => salArr.push(el.salary))
      let minSal = salArr.reduce(function (p, v) {
        return ( p < v ? p : v)
         });
      let minSalId = (emp.find((el) => el.salary == minSal)).id
      let newS = minSal * 1.2
        let newArr = [minSalId, newS]
    return newArr
      })
      .then ((newArr) => api.setEmployeeSalary(newArr[0], newArr[1]))
          .then(({name, id, salary}) => api.notifyEmployee(id, `Hello, ${name}! Congratulations, your new salary is ${salary}!`))
                .catch(err => api.notifyAdmin(err).then (() => new Promise ((resolve) => resolve(false))))

}


const api = {
  _employees: [
    { id: 1, name: 'Alex', salary: 120000 },
    { id: 2, name: 'Fred', salary: 110000 },
    { id: 3, name: 'Bob', salary: 80000 },
  ],

  getEmployees() {
    return new Promise((resolve) => {
      resolve(this._employees.slice());
    });
  },

  setEmployeeSalary(employeeId, newSalary) {
    return new Promise((resolve) => {
      this._employees = this._employees.map((employee) =>
        employee.id !== employeeId
          ? employee
          : {
            ...employee,
            salary: newSalary,
          }
      );
      resolve(this._employees.find(({ id }) => id === employeeId));
    });
  },

  notifyEmployee(employeeId, text) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  notifyAdmin(error) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  setEmployees(newEmployees) {
    return new Promise((resolve) => {
      this._employees = newEmployees;
      resolve();
    });
  },
};

