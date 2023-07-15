const sum = (a) => {
  return (b) => {
    return a + b
  };
}

const c = sum(3);

c(2)
