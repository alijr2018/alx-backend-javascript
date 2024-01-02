import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
  .then(([photoResponse, userResponse]) => {
    const photo = photoResponse.body;
    const { firstName, lastName } = userResponse;

    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
