import signUpUser from "./4-user-promise";

test("signUpUser resolves correctly", () => {
  const successResponse = signUpUser('Guillaume', 'Salva');
  return expect(successResponse).resolves.toEqual({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
});