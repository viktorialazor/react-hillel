export const ACTION_SET_FORM_DATA = "ACTION_SET_FORM_DATA";
export const ACTION_CHECK_FORM_DATA = "ACTION_CHECK_FORM_DATA";
export const ACTION_SET_FORM_DATA_ERROR = "ACTION_SET_FORM_DATA_ERROR";

export const setFormData = (formData) => {
  return { type: ACTION_SET_FORM_DATA, payload: formData };
};

export const checkFormData = (isValid) => {
  return { type: ACTION_CHECK_FORM_DATA, payload: isValid };
};

export const setFormDataError = (errorMessage) => {
  return { type: ACTION_SET_FORM_DATA_ERROR, payload: errorMessage };
};
