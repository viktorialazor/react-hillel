export const ACTION_SET_FORM_DATA = "ACTION_SET_FORM_DATA";
export const ACTION_SET_FORM_STATUS = "ACTION_SET_FORM_STATUS";
export const ACTION_CHECK_FORM_DATA = "ACTION_CHECK_FORM_DATA";

export const setFormData = (formData) => {
  return { type: ACTION_SET_FORM_DATA, payload: formData };
};

export const setFormStatus = (isOpen) => {
  return { type: ACTION_SET_FORM_STATUS, payload: isOpen };
};

export const checkFormData = (isValid) => {
  return { type: ACTION_CHECK_FORM_DATA, payload: isValid };
};
