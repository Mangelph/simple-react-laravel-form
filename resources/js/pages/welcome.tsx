import { Head } from '@inertiajs/react';
import { useState, useRef } from 'react';
import axios from 'axios';
import '/resources/css/welcome.css';

export default function Welcome() {
    const [formData, setFormData] = useState({ name: '', phone: '', course: '' });
    const [message, setMessage] = useState('');
    const formRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/submit-application', formData);
            setMessage('Заявка успешно отправлена!');
            setFormData({ name: '', phone: '', course: '' });
        } catch (error) {
            // console.error("Ошибка при отправке:", error.response);
            setMessage('Ошибка при отправке заявки');
        }
    };

    // Функция для установки курса и прокрутки к форме
    const handleSelectCourse = (course: string) => {
        setFormData((prev) => ({ ...prev, course }));
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Head title="Test Forms React">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="container">
                <div className="left">
                    <h1>ТЕСТОВОЕ ЗАДАНИЕ</h1>
                    <h2>ВЫПОЛНИТЕ ВЁРСТКУ КОМПОНЕНТА</h2>
                    <ul>
                        <li>Используйте BEM, React контекст провайдеры, MVVM и CleanArchitecture</li>
                        <li>Flex и Grid системы верстки</li>
                    </ul>
                    <p>Будем рады видеть вас в нашей команде :)</p>
                    <button className="btn">Я все выполнил!</button>
                </div>
                <div className="right" ref={formRef}>
                    <h3>ТЕСТОВАЯ ФОРМА ДЛЯ ПОДАЧИ ЗАЯВКИ</h3>
                    {message && <p className="message">{message}</p>}
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Имя" value={formData.name} onChange={handleChange} required />
                        <input type="text" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} required />
                        <select name="course" value={formData.course} onChange={handleChange} required>
                            <option value="">Выберите курс</option>
                            <option value="Frontend: ReactJS">Frontend: ReactJS</option>
                            <option value="Backend: PHP (Symfony/Laravel)">Backend: PHP (Symfony/Laravel)</option>
                        </select>
                        <button type="submit">Записаться</button>
                    </form>
                </div>
            </div>
            <section className="additional-info">
                <h2>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</h2>
                <div className="cards-container">
                    <div className="card">
                        <div className="card-header">
                            <span>2 месяца</span>
                            <span>Стажировка</span>
                        </div>
                        <button className="details-btn">Дополнительно &gt;</button>
                        <h3>Frontend: ReactJS</h3>
                        <p>Ваш путь в IT начинается с нами, после выполнения этого тестового задания</p>
                        <div className="price-section">
                            <span className="price">11 111 тг.</span>
                            <button className="register-btn" onClick={() => handleSelectCourse('Frontend: ReactJS')}>
                                Записаться
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <span>2 месяца</span>
                            <span>Стажировка</span>
                        </div>
                        <button className="details-btn">Дополнительно &gt;</button>
                        <h3>Backend: PHP (Symfony/Laravel)</h3>
                        <p>У нас всегда есть много задач по PHP, мы хотим видеть FullStack-ов в нашей команде</p>
                        <div className="price-section">
                            <span className="price">11 222 тг.</span>
                            <button className="register-btn" onClick={() => handleSelectCourse('Backend: PHP (Symfony/Laravel)')}>
                                Записаться
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
