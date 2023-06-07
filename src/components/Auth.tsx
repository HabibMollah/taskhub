import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
const Auth = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    reset();
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
        // onClick={}
      >
        <FcGoogle size={24} />
        Sign in with Google
      </button>
    </form>
  );
};

export default Auth;
