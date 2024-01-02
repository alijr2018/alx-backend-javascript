import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      const photo = photoResponse.body; // Extracting 'body' from photo response
      const { firstName, lastName } = userResponse; // Destructuring user response

      console.log(`${photo} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
