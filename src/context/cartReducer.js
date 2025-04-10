const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM': {
        const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
        let updatedItems;
  
        if (existingIndex > -1) {
          const updatedItem = {
            ...state.items[existingIndex],
            amount: state.items[existingIndex].amount + action.payload.amount
          };
          updatedItems = [...state.items];
          updatedItems[existingIndex] = updatedItem;
        } else {
          updatedItems = state.items.concat(action.payload);
        }
  
        const updatedTotal = state.totalAmount + action.payload.price * action.payload.amount;
  
        return {
          items: updatedItems,
          totalAmount: updatedTotal,
        };
      }
  
      case 'REMOVE_ITEM': {
        const existingItemIndex = state.items.findIndex(item => item.id === action.payload);
        const existingItem = state.items[existingItemIndex];
        let updatedItems;
  
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(item => item.id !== action.payload);
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingItemIndex] = updatedItem;
        }
  
        const updatedTotal = state.totalAmount - existingItem.price;
  
        return {
          items: updatedItems,
          totalAmount: updatedTotal,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  