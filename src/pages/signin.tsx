import { useAuth } from "@/hooks/useAuth";
import { LogoIcon } from "@/public/icons";
import { Div, MainNav } from "@/styles/SignUp";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const SignIn = () => {
    const auth = useAuth();
    const router = useRouter();

    const submitHandler = async (e: any) => {
        e.preventDefault();
        await auth?.login(`vladprodan6@gmail.com`, `123456`);

        router.push(`/profile`);
    };

    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>
            <MainNav>
                <Link href="/">Home</Link> / <span>Sign In</span>
            </MainNav>
            <Div>
                {auth?.session ? (
                    <>
                        <p>
                            You are signed in as{` `}
                            <span className="bold">{auth.user?.email}</span>.
                            You'll now be redirected.
                        </p>
                    </>
                ) : (
                    <>
                        <div className="box">
                            <div className="title">
                                <LogoIcon />
                            </div>
                            {/*{serverErrorMessage && (*/}
                            {/*  <div className="server">{serverErrorMessage}</div>*/}
                            {/*)}*/}
                            <form className="form" onSubmit={submitHandler}>
                                <div className="form-control">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        // value={emailInput}
                                        // onChange={emailInputHandler}
                                        // onBlur={() => setStartEmailValidation(false)}
                                    />
                                    {/*<span className="hint">{`${*/}
                                    {/*  startEmailValidation*/}
                                    {/*    ? emailInput.length === 0*/}
                                    {/*      ? 'Email cannot be empty'*/}
                                    {/*      : !validateEmail(emailInput)*/}
                                    {/*        ? 'Email is not valid'*/}
                                    {/*        : ''*/}
                                    {/*    : ''*/}
                                    {/*}`}</span>*/}
                                </div>
                                <div className="form-control">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        // value={passwordInput}
                                        // onChange={passwordInputHandler}
                                        // onBlur={() => setStartPasswordValidation(false)}
                                    />
                                    {/*<span className="hint">{`${*/}
                                    {/*  startPasswordValidation*/}
                                    {/*    ? passwordInput.length === 0*/}
                                    {/*      ? 'Password cannot be empty'*/}
                                    {/*      : !validatePassword(passwordInput)*/}
                                    {/*        ? 'Min 6 characters required'*/}
                                    {/*        : ''*/}
                                    {/*    : ''*/}
                                    {/*}`}</span>*/}
                                </div>
                                <button
                                    type="submit"
                                    disabled={auth?.isInitialized}
                                >
                                    {auth?.isInitialized ? (
                                        <span className="loader"></span>
                                    ) : (
                                        `Sign In`
                                    )}
                                </button>
                            </form>
                            {/*<div className="ext">*/}
                            {/*  <button*/}
                            {/*    type="button"*/}
                            {/*    disabled={isGuestLoading}*/}
                            {/*    onClick={signInAsGuestHandler}*/}
                            {/*  >*/}
                            {/*    Continue as Guest*/}
                            {/*  </button>*/}
                            {/*  {isGuestLoading && <span className="loader small"></span>}*/}
                            {/*</div>*/}
                            <p className="info">
                                Don't have an account?{` `}
                                <Link href="/signup">Sign Up</Link>
                            </p>
                        </div>
                    </>
                )}
            </Div>
        </>
    );
};

export default SignIn;
