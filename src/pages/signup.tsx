import Link from "next/link";
import Head from "next/head";
import { Div, MainNav } from "@/styles/SignUp";
import { FormEvent } from "react";
import { useAuth } from "@/hooks/useAuth";

const SignUpPage = () => {
    const auth = useAuth();

    const submitHandler = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        await auth?.register({
            email: `vladprodan6@gmail.com`,
            password: `123456`,
            first_name: `Vlad`,
            last_name: `Pr`,
            age: 23,
        });
    };

    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <MainNav>
                <Link href="/">Home</Link> / <span>Sign Up</span>
            </MainNav>
            <Div>
                <div className="box">
                    <form className="form" onSubmit={submitHandler}>
                        <div className="form-control">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                // value={nameInput}
                                // onChange={nameInputHandler}
                                // onBlur={() => setStartNameValidation(false)}
                            />
                            <span className="hint">Name cannot be empty</span>
                        </div>
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
                            {/* <span className="hint">{`${startEmailValidation
                ? emailInput.length === 0
                  ? 'Email cannot be empty'
                  : !validateEmail(emailInput)
                    ? 'Email is not valid'
                    : ''
                : ''
              }`}</span> */}
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
                            {/* <span className="hint">{`${startPasswordValidation
                ? passwordInput.length === 0
                  ? 'Password cannot be empty'
                  : !validatePassword(passwordInput)
                    ? 'Min 6 characters required'
                    : ''
                : ''
              }`}</span> */}
                        </div>
                        <button
                            type="submit"
                            // disabled={isLoading}
                        >
                            {/* {isLoading ? <span– className="loader"></span–> : `Sign Up`} */}
                            Sign Up
                        </button>
                    </form>
                </div>
                <p className="info">
                    Do you have an account? <Link href="/signin">Sign In</Link>
                </p>
            </Div>
        </>
    );
};

export default SignUpPage;
