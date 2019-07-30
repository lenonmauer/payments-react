export const toastrParams = (message, type = 'success', timeOut = 3000) => ({
  type,
  message,
  options: {
    removeOnHover: false,
    timeOut,
  },
});
