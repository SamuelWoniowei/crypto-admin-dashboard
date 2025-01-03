export const formatMoney = (value: number):string | undefined => {
    if (value == null) return;
    return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  

