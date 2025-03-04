import { Head, Link } from '@inertiajs/react';
import '/resources/css/welcome.css';

export default function Welcome() {

    return (
        <>
            <Head title="Welcome">
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
                <div className="right">
                    <h3>ТЕСТОВАЯ ФОРМА ДЛЯ ПОДАЧИ ЗАЯВКИ</h3>
                    <form>
                        <input type="text" placeholder="Имя" />
                        <input type="text" placeholder="Телефон" />
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
                            <button className="register-btn">Записаться</button>
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
                            <button className="register-btn">Записаться</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
