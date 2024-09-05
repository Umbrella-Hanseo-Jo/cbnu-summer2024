import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <header id="navbar">
        <div className="container d-flex flex-column align-items-center">
          <h1>
            <a href="#">CineGuide</a>
          </h1>
          <nav className="nav-container">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="/info">
                  {' '}
                  영화 소개{' '}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/recommend">
                  {' '}
                  영화 검색{' '}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/find">
                  {' '}
                  영화 추천{' '}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bookmark">
                  {' '}
                  북마크{' '}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>안녕, 바오</h1>
          <p>충북대학교 데이팅 프로그램</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <div className="container">
          <div className="section-content">
            <img
              src="https://img.hankyung.com/photo/202011/01.24334589.1.jpg"
              alt="Introduction"
              width="700"
              height="300"
            />
            <div className="section-text">
              <h2>1대1 만남</h2>
              <p>
                <strong>
                  {' '}
                  사람과 사람의 만남은 단순한 우연이 아닙니다. <br />
                  그것은 운명과 소통의 시작입니다. <br />
                  당신의 인연을 응원합니다.{' '}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="section">
        <div className="container">
          <div className="section-content">
            <div className="section-text">
              <h2>3대3 만남</h2>
              <p>
                <strong>
                  {' '}
                  셋이면 호랑이도 만든다는 말처럼, <br />
                  추억을 만들어 보세요. <br />
                  우리의 삶은 더 가치 있어질 거예요.{' '}
                </strong>
              </p>
            </div>
            <img
              src="https://img.insight.co.kr/static/2019/08/30/700/5wm346v7ng3075080k7u.jpg"
              alt="Kids Profile"
              width="750"
              height="300"
            />
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section">
        <div className="container">
          <div className="section-content">
            <img
              src="https://www.friendscube.com/img/mobile/shutterstock-1717433728-1@2x.png"
              alt="Download"
              width="900"
              height="300"
            />
            <div className="section-text">
              <h2>소모임 활동</h2>
              <p>
                <strong>
                  {' '}
                  다채로운 인연이 맺어지는 마법 같은 공간에서 <br />
                  함께하는 순간들은 우리의 삶을 풍요롭게 하고 <br />
                  소중한 추억으로 남습니다.{' '}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container faq">
          <h2>자주 묻는 질문</h2>
          {[
            {
              question: '바오란 무엇인가요?',
              answer:
                "바오는 '보기 좋게'라는 뜻의 순우리말 '뱌오'를 변형한 단어입니다.",
            },
            {
              question: '안녕, 바오의 이용 요금은 얼마인가요?',
              answer: '안녕, 바오의 모든 이용 요금은 무료입니다.',
            },
            {
              question: '어디에서 이용할 수 있나요?',
              answer:
                '안녕, 바오는 웹 브라우저에서 이용할 수 있습니다. 조만간 모바일 버전도 출시될 예정입니다.',
            },
            {
              question: '매칭 알고리즘에 대해 알고 싶어요.',
              answer:
                '안녕, 바오의 매칭 알고리즘은 각각 다른 단과대학끼리의 만남을 우선으로 합니다.',
            },
            {
              question: '누가 개발했나요?',
              answer:
                '강창훈 대표님, 강주현 조교님의 가르침을 받아 조한서가 개발했습니다.',
            },
          ].map((item, index) => (
            <div
              className="faq-item"
              key={index}
              onClick={() => toggleFAQ(index)}
              style={{ cursor: 'pointer', marginBottom: '10px' }} // Added style for better UX
            >
              <h4>{item.question}</h4>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="containe2r">
          <pre>
            Annyeong, Bao Copyright (C) 2024 (bird_hans_) all rights reserved.
            전화번호: 82-043-261-2260 대표: 조한서 이메일 주소:
            0214gxqs@gmail.com 주소: 충청북도 청주시 서원구 충대로 1, S4-1-104
            (28644) 사업자등록번호:{' '}
            <a href="#" id="business-number">
              {' '}
              315-82-01265{' '}
            </a>
          </pre>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
