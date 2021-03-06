// Задание
// Напишите функцию, которая вычисляет и возвращает стоимость корзины товаров после применения всех скидок. В качестве аргументов функция принимает 3 параметра:
// Общая сумма корзины
// Количество товаров в корзине
// Промокод (по умолчанию null)
// Правила и порядок (порядок важен!) начисления скидок:
// Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей. При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0.
// При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
// При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения (то есть к разнице суммы корзины и 50 000)
// Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%, но только если сумма ≥20 000
// Каждая следующая скидка должна проверяться и применяться к сумме после применения предыдущих скидок.
// В конце файла с кодом домашнего задания напишите конструкцию export default {название функции}, чтобы была возможность автоматической проверки получившейся функции.


function calculatingCostOfCard(commonCost, numberOfGoods, discount=null) {
  /*if (commonCost < 300 && discount == 'ДАРИМ300') {
    commonCost = 0;
  }*/
  if (discount == 'ДАРИМ300') {
	commonCost = (commonCost - 300) < 0 ? 0 : commonCost - 300;
  }
  if (numberOfGoods >= 10) {
    commonCost = commonCost * 0.95
  }
  if (commonCost > 50000) {
    commonCost = (commonCost - 50000) * 0.8;
  }
  if (discount == 'СКИДКА15' && commonCost >= 20000) {
    commonCost = commonCost * 0.75;
  }
  return commonCost;
}

cost = 400;
goods = 10;
promocode = 'ДАРИМ300';

console.log(calculatingCostOfCard(cost, goods, promocode));


// export default {checkedList};
