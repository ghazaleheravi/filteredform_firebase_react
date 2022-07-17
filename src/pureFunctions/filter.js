export const filteredEmployees = (employees, inputValue, title) => {
  return employees.reduce((acc, cur) => {
      if (cur[title] === inputValue) {
        acc.push(cur);
      }
      return acc;
    }, []);
}