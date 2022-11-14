import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoTable from "./components/InfoTable";
import SurveyChart from "./components/SurveyChart";
/**
 * preloading with mouseEnter
 */
const handleMouseEnter = () => {
  import("./components/ImageModal").then((module) => {
    console.log("preloading with mouseenter");
  });
};

/**
 * preloading with module loading
 */
import("./components/ImageModal").then((module) => {
  console.log("preloading with loading");
});
const ImageModal = React.lazy(() => import("./components/ImageModal"));
function App() {
  const [showModal, setShowModal] = useState(false);
  React.useEffect(() => {
    import("./components/ImageModal").then((module) => {
      console.log("preloading with mount");
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <InfoTable />
      <ButtonModal
        onClick={() => {
          setShowModal(true);
        }}
        onMouseEnter={handleMouseEnter}
      >
        올림픽 사진 보기
      </ButtonModal>
      <SurveyChart />
      <Footer />
      <React.Suspense fallback={<>로딩 중...</>}>
        {showModal ? (
          <ImageModal
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </React.Suspense>
    </div>
  );
}

const ButtonModal = styled.button`
  border-radius: 30px;
  border: 1px solid #999;
  padding: 12px 30px;
  background: none;
  font-size: 1.1em;
  color: #555;
  outline: none;
  cursor: pointer;
`;

export default App;
