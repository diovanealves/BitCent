import Users from "@/logic/core/user/User";
import { app } from "../config/app";
import {
  User,
  Auth,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onIdTokenChanged,
} from "firebase/auth";

export type UserTracking = (user: Users | null) => void;
export type CancelTracking = () => void;

export default class Authentication {
  private _auth: Auth;

  constructor() {
    this._auth = getAuth(app);
  }

  async loginGoogle(): Promise<Users | null> {
    const response = await signInWithPopup(
      this._auth,
      new GoogleAuthProvider()
    );
    return this.convertToUser(response.user);
  }

  async logout(): Promise<void> {
    await signOut(this._auth);
  }

  track(notification: UserTracking): CancelTracking {
    return onIdTokenChanged(this._auth, async (userFirebase) => {
      const user = this.convertToUser(userFirebase);
      notification(user);
    });
  }

  private convertToUser(userFirebase: User | null): Users | null {
    if (!userFirebase?.email) return null;

    const alternativeName = userFirebase.email!.split("@")[0];
    return {
      id: userFirebase.uid,
      name: userFirebase.displayName ?? alternativeName,
      email: userFirebase.email,
    };
  }
}
