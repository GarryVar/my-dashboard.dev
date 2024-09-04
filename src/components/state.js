export const state = {
  inputValue: '',
}


// export function changeInputValue(value) {
//   value = state.inputValue;
// }

export function onChangeFunc(value) {
  state.inputValue = value;
}

