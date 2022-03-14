/*useEffect:https://react.vlpt.us/basic/16-useEffect.html*/
/*ReactRouter > useParams:url의 :id 에 오는 값이 확인 */
/*async function()은 awiat키워드가 비동기 코드를 호출할 수 있게 해주는 함수*/
/*id를 알고 있으니까 API로부터 정보를 fetch 해온다*/
/*'github pages'에 업로드 할 수 있게 해주는 나이스한 패키지 > npm i gh-pages >
  [package.json]npm run build실행 > 'build script'실행 > production ready code(코드가 압축&모든게 최적화)를 생성 */
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