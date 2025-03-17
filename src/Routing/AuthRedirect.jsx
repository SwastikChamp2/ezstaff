import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                if (!user.emailVerified) {
                    navigate('/email-confirmation'); // Redirect if user is not verified
                } else {
                    navigate('/dashboard'); // Redirect if user is already logged in and verified
                }
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    return null;
};

export default AuthRedirect;
