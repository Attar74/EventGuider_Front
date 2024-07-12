declare global {
  interface LoginForm {
    email: string;
    password: string;
  }

  interface codeFrom {
    code: number;
  }

  interface newPasswordForm {
    password: string;
    confirmPassword?: string;
  }

  interface RegisterForm extends newPasswordForm, LoginForm {
    tradeName?: string;
    phoneNumber: string;
    userName: string;
    category: string;
    subCategoryId: number;
  }

  // interface loggedInUser {
  //   id: string,
  //   dateCreated: string,
  //   "birthday":"0001-01-01",
  //   "userName":"MeMe",
  //   "email":"meme@gmail.com",
  //   "emailVerified":false,
  //   "phoneNumber":{"code":20,"number":"01032429966"},
  //   "phoneNumberVerified":false,
  //   "hasPassword":true,
  //   "type":"vendor",
  //   "gender":"none",
  //   "logins":[{"name":"Credential"}],
  //   "roles":[],
  //   "permissions":[],
  //   "features": [],
  //   "accessToken": string
  // }
}

export { User, RegisterForm, LoginForm, newPasswordForm, codeFrom };
