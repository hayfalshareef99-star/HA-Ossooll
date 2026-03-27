import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Swal   from 'sweetalert2';
function Login() {
    // 1. تعريف حالات المدخلات (State)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // يمنع الصفحة من التحديث عند الضغط على الزر

        // 2. التحقق (Logic)
        if (email === "" || password === "") {
            Swal.fire({
                icone: 'warning',
                title: 'تنبيه',
                text: 'الرجاء تعبئة كافة الحقول المطلوبة',
                confirmButtonColor: '#6a1b9a',
                confirmButtontext: 'حسناً'
            });

            return;
        }

        // تحقق وهمي (Fake Auth)
        if (email !== " " && password !== " ") {

            // 3. تخزين بيانات مؤقتة (localStorage) لتعرف الـ Dashboard من دخل
            localStorage.setItem('userEmail', email);
            localStorage.setItem('isLoggedIn', 'true');

            Swal.fire({
                icone: 'success',
                title: 'تم تسجيل الدخول بنجاح',
                text: 'مرحباً بك في لوحة التحكم!',
                showconfirmButton: false,
                timer: 1500,
            });

            // 4. الانتقال إلى Dashboard
            navigate('/dashboard');
        } else {
            Swal.fire({
                icone: 'error',
                title: 'خطأ في تسجيل الدخول',
                text: 'الإيميل أو كلمة المرور غير صحيحة',
                confirmButtonColor: '#d32f2f',
                confirmButtontext: 'حاول مرة أخرى'
            });
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>تسجيل الدخول</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        type="email"
                        placeholder="الإيميل"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // قراءة الإيميل فوراً
                        style={{ marginBottom: '10px', padding: '8px' }}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="كلمة المرور"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // قراءة الباسورد فوراً
                        style={{ marginBottom: '10px', padding: '8px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    دخول
                </button>
            </form>
        </div>
    );
}

export default Login;