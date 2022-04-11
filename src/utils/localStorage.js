export const setUser = (param) => {
  const oneDay = 1440 * 60 * 1000;
  const record = {
    value: param,
    timestamp: new Date().getTime() + oneDay,
  };
  window.localStorage.setItem("user", JSON.stringify(record));
  return param;
};

export const getUser = () => {
  try {
    const user = window.localStorage.getItem("user");
    if (!user) return false;
    const record = JSON.parse(user);
    // return (new Date().getTime() < record.timestamp && record.value);
    return record.value;
  } catch (e) {
    return false;
  }
};

export const destroyUser = () => window.localStorage.clear();
