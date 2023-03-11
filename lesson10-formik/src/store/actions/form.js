export const ACTION_SET_FORM_DATA = "ACTION_SET_FORM_DATA";

export const setFormData = (formData) => {
  return { type: ACTION_SET_FORM_DATA, payload: formData };
};
