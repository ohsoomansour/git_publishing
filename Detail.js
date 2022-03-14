/*useEffect:https://react.vlpt.us/basic/16-useEffect.html*/
/*ReactRouter > useParams:url의 :id 에 오는 값이 확인 */
/*async function()은 awiat키워드가 비동기 코드를 호출할 수 있게 해주는 함수*/
/*id를 알고 있으니까 API로부터 정보를 fetch 해온다*/
/*'github pages'에 업로드 할 수 있게 해주는 나이스한 패키지 > npm i gh-pages >
  [package.json]npm run build실행 > 'build script'실행 > production ready code(코드가 압축&모든게 최적화)를 생성 */
/*1. Repository name(프로젝트 이름) > 2. git: 소드코드를 내컴퓨터 > 인터넷으로 올려주는 역할 > 3. gitbash > git config --global user.name "ohsoomansour"
4. git config --global user.email "ceoosm@naver.com"(github가입 이메일) > 5. git config --list 으로 설정 잘 들어갔나 확인
6 Visual Studio Code에서 순서대로 터미널에서 실행
git init
git add README.md  ( git add: 어떤 파일을 깃에 올릴지 함 보쟈, git add . 프로젝트 모든 파일을 추가 하겠다  )
 - git add index.html (index.html만 올리겠다)
git status : 내가 올릴려고 하는 파일들 나열 index.html등 > git에 올릴수 있는 파일들을 알려줌
git commit -m "first commit" : 히스토리를 만듬 > 최종본이라고 볼 수있음
git branch -M main 
git remote add origin https://github.com/ohsoomansour/git_publishing.git
git remote -v : 위 연결고리 확인용 
git push -u origin main : master - > master 성공
(수정발생) git add.
git commit -m "second commit" 
git remote add origin https://github.com/ohsoomansour/git_publishing.git */
 
import { useParams } from "react-router-dom";
import { useEffect } from "react"; 
function Detail() {
  const { id }= useParams();
  const getMoive = async () => {
    const json = await( 
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
    console.log(json);
  };
  useEffect(() => {
    getMoive();
  }, []); 
  console.log(id);
  return <h1>Detail</h1>
};

export default  Detail;