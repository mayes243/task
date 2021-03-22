import * as yup from 'yup';

export const userSchema = yup.object().shape({
    email: yup.string().email('please enter your valid email').required('please enter your email'),
    password: yup.string()
        .required('please enter your password ')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
            "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ).min(6, 'Too short !!').max(15, 'Too long !!'),
    
});