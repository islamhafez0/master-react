export type IUserData = {
  username: string;
  email: string;
  password: string;
  address: string;
}

export type IFormProps = {
  label: string;
  id: string;
  type: string;
  name: keyof IUserData;
}