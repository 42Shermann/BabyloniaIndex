import * as Realm from "realm-web";

export async function loginAnonymous() {
    const app = new Realm.App({ id: "wikiapp-lmtos" });
    // Create an anonymous credential
    const credentials = Realm.Credentials.anonymous();
    try {
      // Authenticate the user
      const user = await app.logIn(credentials);
      return user;
    } catch(err) {
      console.error("Failed to log in", err);
    }
  };


