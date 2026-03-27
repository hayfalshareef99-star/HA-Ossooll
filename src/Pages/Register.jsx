import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Register() {
    // 1. تعريف حالات المدخلات (State) لجميع الحقول
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // 2. التحقق: هل الحقول فارغة؟
        if (!name || !email || !password || !confirmPassword) {
            Swal.fire({
                icon: 'warning',
                title: 'تنبيه بيانات ناقصة',
                text: 'الرجاء تعبئة كافة الحقول المطلوبة',
                confirmbuttonColor: '#6a1b9a',
                confirmbuttontext: 'حسناً'
            });
            return;
        }

        // 3. التحقق: هل كلمتا المرور متطابقتان؟
        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'خطأ في التأكيد',
                text: 'كلمات المرور غير متطابقة, يرجى اعادة المحاولة',
                confirmbuttonColor: '#d32f2f',
                confirmbuttontext: 'اعادة المحاولة'

            });
            return;
        }

        // 4. (متقدم) تخزين بيانات المستخدم في localStorage كأنها قاعدة بيانات
        const userData = {
            username: name,
            userEmail: email,
            userPass: password
        };

        // نحول الكائن (Object) إلى نص (String) ليُخزن بنجاح
        localStorage.setItem('registeredUser', JSON.stringify(userData));

        Swal.fire({
            icon: 'success',
            title: 'تم انشاء الحساب',
            text: 'لقد تم تسجيل دخولك بنجاح ,جاري تحويلك لصفة الدخول',
            showConfirmButton: false,
            timer: 1500,
        });

        // 5. التوجيه التلقائي لصفحة Login
        navigate('/login');
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>إنشاء حساب جديد</h2>
            <form onSubmit={handleRegister}>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="الاسم الكامل"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ padding: '8px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ padding: '8px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="password"
                        placeholder="كلمة المرور"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: '8px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="password"
                        placeholder="تأكيد كلمة المرور"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{ padding: '8px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#6a1b9a', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    تسجيل الحساب
                </button>
            </form>
        </div>
    );
}

export default Register;