import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
const Auth = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="form-control mx-auto w-[280px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="label" htmlFor="email">
        Email
      </label>
      <input
        {...register("email")}
        className="input-bordered input"
        type="email"
        name="email"
        placeholder="Email"
        id="email"
      />
      <label className="label" htmlFor="password">
        Password
      </label>
      <input
        {...register("password")}
        className="input-bordered input"
        type="password"
        name="password"
        placeholder="Password"
        id="password"
      />
      <button type="submit" className="btn-primary btn mt-4 block">
        Sign In
      </button>
      <button
        className="btn-outline btn mt-4 block flex items-center justify-center gap-2"
        onClick={handleGoogleSignIn}
      >
        <FcGoogle size={24} />
        Sign in with Google
      </button>
      <button
        className="btn-outline btn-error btn mt-4"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </form>
  );
};

export default Auth;
