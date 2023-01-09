import * as api from "../../Apis/index";

export const GetAllCustomersApi = async (token, setters) => {
  setters.setLoading(true);
  setters.setError(false);
  setters.setErrorText("");

  const headerInfo = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await api.get(headerInfo, "/organization");
    if (response.error) throw new Error(response.error);
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    if (response.error) throw new Error(response.error);
    setters.setCustomers(response);
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
  }
};

export const AddCustomerApi = async (token, data, setters) => {
  setters.setLoading(true);
  setters.setError(false);
  setters.setErrorText("");

  const headerInfo = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    if (navigator.onLine === false)
      throw new Error("Not connected to the internet");
    const response = await api.post(headerInfo, data, "/organization");
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    console.log(response);
    return true;
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
    return false;
  }
};
