import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
    // firstName: yup.string().min(3, 'Too short!!').max(22, 'Too long').required('Please Enter your first name'),
    // lastName: yup.string().min(3, 'Too short!!').max(20, 'Too long').required('Please Enter your last name'),
    // userName: yup.string().min(3, 'Too short!!').max(20, 'Too long').required('Please Enter your user name'),
    // pAddress: yup.string().min(3, 'Too short!!').max(30, 'Too long').required('Please Enter your permanent address'),
    email: yup.string().email('Please Enter your valid email').required('Please Enter your email'),
    password: yup.string()
        .required('Please Enter your password ')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
            "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ).min(6, 'Too short !!').max(15, 'Too long !!'),
    cPassword: yup.string().oneOf([yup.ref('password'), null], 'passwords must match').required('confirm password is required'),
});
