import React, { useState } from 'react'
const tabTitles = ["PROJECT", "RESUME"];
const projectTabs = [
  [
    {title:"개인 프로젝트_1", desc:"클릭하시면 포트폴리오를 보러가실 수 있습니다.", link:"#portfolio"},
    {title:"개인 프로젝트_2", desc:"클릭하시면 포트폴리오를 보러가실 수 있습니다.", link:"#portfolio"},
    {title:"팀 프로젝트_2", desc:"클릭하시면 포트폴리오를 보러가실 수 있습니다.", link:"#portfolio"},
    {title:"팀 프로젝트_2", desc:"클릭하시면 포트폴리오를 보러가실 수 있습니다.", link:"#portfolio"},
    {title:"React", desc:"이 포트폴리오는 리액트로 작업되었습니다.", link:"/"},
    {title:"대학교 졸업작품", desc:"클릭하시면 포트폴리오를 보러가실 수 있습니다.", link:"#portfolio"},
  ],
  [
    {title:"이력서", desc:"클릭하시면 이력서를 보실 수 있습니다.", link:"/"},
    {title:"자기소개서", desc:"클릭하시면 자기소개서를 보실 수 있습니다", link:"/"},
    {title:"Drawing", desc:"클릭하시면 저의 다른 작품들을 다운받아 보실 수 있습니다.", link:"/"},
  ]
];

const AboutMe = () => {
  const [tab, setTab] = useState(0);

  const nextTab = () => setTab((prev) => (prev + 1) % projectTabs.length);
  const prevTab = () => setTab((prev) => (prev - 1 + projectTabs.length) % projectTabs.length);

  return (
    <section id='AboutMe' role='contentinfo'>
      <div className='into_inner'>
        <div className='into_infor'>
          {/* LEFT */}
          <div className='left'>
            <div className='title'>
              <a href="/">CHAIHWAN JUNG</a>
            </div>
            <p className='desc'>열정가득 엔터테이너입니다</p>
            <div className='pic'>
              <img
                src='https://github.com/taylors-gook/portfolio/blob/main/image.png?raw=true'
                alt=''
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className='right'>
            {/* 헤더(제목 + 탭버튼) */}
            <div className='project_header'>
              <h3>{tabTitles[tab]}</h3>
              <div className='tab_buttons' aria-label='프로젝트 탭 전환'>
                <button type='button' className='prev' onClick={prevTab} aria-label='이전 탭'>◀</button>
                <button type='button' className='next' onClick={nextTab} aria-label='다음 탭'>▶</button>
              </div>
            </div>

            {/* 목록 */}
            <ul className='project_list' role='list'>
              {projectTabs[tab].map((item, idx) => (
                <li className='project_item' key={idx}>
                  <a href={item.link}>{item.title}</a>
                  <em>{item.desc}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutMe