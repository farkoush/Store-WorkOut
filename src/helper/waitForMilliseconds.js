const waitForMilliseconds = ms => {
  return new Promise(r => setTimeout(r, ms));
};

export default waitForMilliseconds;
