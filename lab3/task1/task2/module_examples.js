const basketModule = (function () {
  const basket = []; // Приватная переменная [cite: 133]
  
  return {
    addItem: function (item) {
      basket.push(item);
    },
    getItemCount: function () {
      return basket.length;
    }
  };
})();


const calculatorModule = (function () {
  let privateValue = 0;

  const add = (val) => privateValue += val;
  const reset = () => privateValue = 0;
  const getResult = () => privateValue;


  return {
    add,
    getResult
  };
})();