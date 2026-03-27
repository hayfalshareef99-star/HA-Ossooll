import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Dashboard() {
    const [userName, setUserName] = useState('زائر');
    const navigate = useNavigate();

    // useEffect تعمل أول ما تفتح الصفحة (مثل الحساسات في مشروع التخرج!)
    useEffect(() => {
        // 1. قراءة بيانات المستخدم المسجل من الـ localStorage
        const savedUser = localStorage.getItem('registeredUser');
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        // 2. إذا لم يسجل دخول، ارجعي به لصفحة الـ Login (حماية بسيطة)
        if (isLoggedIn !== 'true') {
            Swal.fire({
                icon: 'info',
                title: 'تنبيه الأمان',
                text: 'يجب تسجيل الدخول للوصول إلى لوحة التحكم',
                confirmButtonColor: '#6a1b9a',
                confirmButtonText: 'الأنتقال الى تسجيل الدخول'
            });
            navigate('/login');
        } else if (savedUser) {
            // 3. إذا وجدنا بيانات، نحولها من نص إلى كائن ونأخذ الاسم
            const userObj = JSON.parse(savedUser);
            setUserName(userObj.username);
        }
    }, [navigate]);

    const handleLogout = () => {
        // مسح بيانات الجلسة عند تسجيل الخروج
        localStorage.removeItem('isLoggedIn');
        Swal.fire({
            icon: 'success',
            title: 'تم تسجيل الخروج',
            text: 'لقد تم تسجيل خروجك بنجاح',
            showConfirmButton: false,
            timer: 1500,
        });
        navigate('/login');
    };

    return (
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f3e5f5', minHeight: '100vh' }}>
            <h1>لوحة التحكم (Dashboard) 🚀</h1>

            <div style={{ margin: '20px', padding: '20px', border: '1px solid #6a1b9a', borderRadius: '10px', backgroundColor: 'white' }}>
                <h3>أهلاً بكِ يا {userName} 👋</h3>
                <p>لقد تم تفعيل منطق الدخول والربط بنجاح!</p>
            </div>

            <button
                onClick={handleLogout}
                style={{
                    padding: '10px 25px',
                    backgroundColor: '#d32f2f',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                تسجيل الخروج
            </button>
        </div>
    );
}

export default Dashboard;