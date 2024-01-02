import React from 'react';
import './Home.css'; // Importando o CSS para Home
import Header from '../../components/Header/Header'; // Importando o componente Header
import CourseCatalog from '../CourseCatalog/CourseCatalog';
const courses = [
    {
        id: 1,
        title: "Curso de React",
        description: "Aprenda React do zero ao avançado com este curso completo!",
        image: "url-to-image", // URL da imagem do curso
        price: "R$ 150,00",
    },
    {
        id: 1,
        title: "Curso de React",
        description: "Aprenda React do zero ao avançado com este curso completo!",
        image: "url-to-image", 
        price: "R$ 150,00",// URL da imagem do curso
    },
    {
        id: 1,
        title: "Curso de React",
        description: "Aprenda React do zero ao avançado com este curso completo!",
        image: "url-to-image",
        price: "R$ 150,00", // URL da imagem do curso
    },
    {
        id: 1,
        title: "Curso de React",
        description: "Aprenda React do zero ao avançado com este curso completo!",
        image: "url-to-image",
        price: "R$ 150,00", // URL da imagem do curso
    },
    {
        id: 1,
        title: "Curso de React",
        description: "Aprenda React do zero ao avançado com este curso completo!",
        image: "url-to-image",
        price: "R$ 150,00", // URL da imagem do curso
    },
    // ... outros cursos
  ];
function Home() {
    return (
        <div className="home">
            <Header />
            <div className="content">
                <h2>Bem-vindo ao nosso E-commerce!</h2>
                <p>Explore nossos produtos e ofertas especiais.</p>
                  <CourseCatalog courses={courses} />
            </div>
        </div>
    );
}

export default Home;
