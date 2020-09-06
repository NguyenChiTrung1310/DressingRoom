import { combineReducers } from 'redux';
import ProductReducer from './productsReducer';
import CategoryReducer from './catergoriesReducer';
import ChoosenCategoryReducer from './choosenCategoryReducer';
import ModelReducer from './modelReducer';

const RootReducer = combineReducers({
  // danh sach state luu tru tren store
  products: ProductReducer,
  categories: CategoryReducer,
  choosenCategory: ChoosenCategoryReducer,
  model: ModelReducer,
});

export default RootReducer;
