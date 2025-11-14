import React from 'react'
const portfolioText =[
    {
        image:["https://github.com/taylors-gook/portfolio/blob/main/third.png?raw=true"],
        text:["PLAYZ"],
        title:"2차 팀 프로젝트",
        info:["프로그램 : html5, css3, java, Figma, Photoshop, Illustrator"],
        link:"https://love79hr.dothome.co.kr/play_z/",
        pdf:"https://github.com/taylors-gook/portfolio/blob/main/channel33.3.pdf?raw=true",
    },
    {
        image:["https://github.com/taylors-gook/portfolio/blob/main/second.PNG?raw=true"],
        text:["SWITCH"],
        title:"1차 팀 프로젝트",
        info:["프로그램 : html5, css3, java, Photoshop, Illustrator"],
        link:"https://jungch0823.dothome.co.kr/switch/",
        pdf:"https://github.com/taylors-gook/portfolio/blob/main/switch.pdf?raw=true",
    },
    {
        image:["https://github.com/taylors-gook/portfolio/blob/main/first.png?raw=true"],
        text:["Hyundai","Hanam","Motor Studio"],
        title:"2차 개인 프로젝트",
        info:["프로그램 : html5, css3, java, Figma, Photoshop, Illustrator"],
        link:"https://jungch0823.dothome.co.kr/hyundiamotorstudio/",
        pdf:"https://github.com/taylors-gook/portfolio/blob/main/hyundai.pdf?raw=true",
    },
    {
        image:["https://github.com/taylors-gook/portfolio/blob/main/gwang.png?raw=true"],
        text:["COMPANY","SITE","GWANGMOK"],
        title:"1차 개인 프로젝트",
        info:["프로그램 : html5, css3, java, figma"],
        link:"https://jungch0823.dothome.co.kr/gwangmok/",
        pdf:"https://github.com/taylors-gook/portfolio/blob/main/gwangmok.pdf?raw=true",
    },
    {
        image:["https://github.com/taylors-gook/portfolio/blob/main/over.jpg?raw=true"],
        text:["WOLFGANG","RESTAURANT"],
        title:"대학교 작품",
        info:["프로그램 : 3ds MAX, AutoCAD, Photoshop, InDesign"],
        link:"/",
        pdf:"https://github.com/taylors-gook/portfolio/blob/main/COLLEGE.pdf?raw=true",
    },
    {
        image:[""],
        text:["THANK YOU"],
        title:"감사합니다",
        info:[""],
        link:"/",
        pdf:"/",
    },

]


const portfolio = () => {
    return (
        <section id='portfolio'>
            <div className="portfolio_inner">
                <div className="portfolio_wrap">

                    {portfolioText.map((portfolio,key)=>(
                        <div className={`portfolio_item s${key+1}`} key={key}>
                            <div className="image">
                                {portfolio.image.map((src, i) => (
                                    <img key={i} src={src} alt={`portfolio ${i + 1}`} />
                                ))}
                            </div>
                            <div className='details'>
                                <div className="text">
                                <div>{portfolio.text[0]}</div>
                                <div>{portfolio.text[1]}</div>
                                <div>{portfolio.text[2]}</div>                                
                                </div>
                                <h3 className='title'>{portfolio.title}</h3>
                                <div className="info">
                                    <span>{portfolio.info[0]}</span> 
                                    <span>{portfolio.info[1]}</span>
                                    <span>{portfolio.info[2]}</span>
                                </div>
                                <div className="btn">
                                    <a href={portfolio.link}>link</a>
                                    <a href={portfolio.pdf}>pdf</a>
                                </div>
                            </div>
                            
                        </div>
                    ))}

                          


                </div>
                <div className='portfolio_bottom'>
                    &copy; jungch0823 all rights reserved<br />
                    이 사이트는 포트폴리오로 상업용으로 사용되지 않습니다.
                    </div>
            </div>
        </section>
    )
}

export default portfolio