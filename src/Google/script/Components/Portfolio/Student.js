import React, { Component } from 'react';
import '../../../css/Portfolio/Student.css';

import BlockTitle from "./BlockTitle";
import Fact from "./Fact";

class Student extends Component {
    render() {
        const aboutMeText = `Я живу в Санкт-Петербурге (Россия). Мне 26 лет. Высшее образование - закончил НИУ ИТМО. Опыт в разработке 1 год. Уже окончил курсы в Академии Программирования, где не плохо научился верстать. Пока есть только один сайт, которым могу похвастаться: `;
        const aboutMeLink = <a href="https://www.yandex.ru" target="_blank" className="student-fact__link" rel="noopener noreferrer">www.yandex.ru</a>;
        const skillsText = 'В этом блоке я расскажу о себе, что я уже умею. Здесь я укажу другие курсы, которые до этого я уже проходил. Могу перечислить технологии, которыми уже умею пользоваться. К примеру: html5, css3, sass, jade, git и пр.';

        return (
            <section className='portfolio-student'>
                <div className='portfolio-container'>
                    <BlockTitle mainTitle='О будущем ученике' subtitle='Ребятам из Loftschool будет полезно узнать немного обо мне'/>
                    <Fact type='student-fact__image_hello' title='Немного обо мне' text={aboutMeText} link={aboutMeLink}/>
                    <Fact type='student-fact__image_exp' title='Мой опыт в разработке' text={skillsText}/>
                </div>
                <div className='clr'/>
            </section>
        );
    }
}

export default Student;