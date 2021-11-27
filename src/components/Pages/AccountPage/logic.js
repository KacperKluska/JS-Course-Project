import { getUserData, getUserShipmentData } from '../../../services/requests';

export const getUserInputsData = (data) => [
  { label: 'Name', id: 'name', value: data.name },
  { label: 'Surname', id: 'surname', value: data.surname },
  { label: 'Email', id: 'email', value: data.email },
];

export const getUserShipmentInputsData = (data) => [
  { label: 'Country', id: 'country', value: data.country },
  { label: 'City', id: 'city', value: data.city },
  { label: 'Street', id: 'street', value: data.street },
  {
    label: 'House number',
    id: 'house_number',
    value: data.house_number,
  },
  {
    label: 'Phone number',
    id: 'phone_number',
    value: data.phone_number,
  },
];

export const defaultUserData = {
  name: '',
  surname: '',
  email: '',
};

export const defaultUserShipmentData = {
  country: '',
  city: '',
  street: '',
  houseNumber: '',
  phoneNumber: '',
};

export const handleUserData = (data, setUserData) => {
  setUserData((prev) => ({ ...prev, ...data }));
};

export const handleUserShipmentData = (data, setUserShipmentData) => {
  setUserShipmentData((prev) => ({ ...prev, ...data }));
};

export const getData = async (setUserData) => {
  try {
    const { data, status } = await getUserData();
    if (status === 200) {
      handleUserData(data, setUserData);
    } else {
      setUserData({ ...defaultUserData });
    }
  } catch (err) {
    setUserData({ ...defaultUserData });
  }
};

export const getShipmentData = async (setUserShipmentData) => {
  try {
    const { data, status } = await getUserShipmentData();
    if (status === 200) {
      handleUserShipmentData(data, setUserShipmentData);
    } else {
      setUserShipmentData({ ...defaultUserShipmentData });
    }
  } catch (err) {
    setUserShipmentData({ ...defaultUserShipmentData });
  }
};
