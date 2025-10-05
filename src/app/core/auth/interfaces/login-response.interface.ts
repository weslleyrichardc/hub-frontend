export interface LoginResponseInterface {
  token_type: string
  token: string;
  user: {
    name: string
    email: string
  }
  message: string;
}
