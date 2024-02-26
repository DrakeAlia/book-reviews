export default function SignUp() {
  return (
    <div>
      <h1>Sign Up Page</h1>
    </div>
  );
}

// import { useState } from 'react';

// type SignUpFormState = {
//     email: string;
//     password: string;
// };

// const SignUpForm = () => {
//     const [formState, setFormState] = useState<SignUpFormState>({
//         email: '',
//         password: '',
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormState((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Perform sign-up and authentication logic here
//         console.log(formState);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formState.email}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formState.password}
//                     onChange={handleChange}
//                 />
//             </div>
//             <button type="submit">Sign Up</button>
//         </form>
//     );
// };

// export default SignUpForm;