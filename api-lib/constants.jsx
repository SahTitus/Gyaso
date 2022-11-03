export const ValidateProps = {
  user: {
    name: { type: "string", minLength: 1, maxLength: 50 },
    password: { type: "string", minLength: 6 },
    email: { type: "string", minLength: 1 },
  },
};
