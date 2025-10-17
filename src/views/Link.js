
//네비 메뉴 눌렀을때 부드럽게 스크롤 이동
const Link = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
        anchor.addEventListener("click",function(e){
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if(targetElement){
                targetElement.scrollIntoView({behavior:"smooth"});
            }
        })
    })
}
export default Link;