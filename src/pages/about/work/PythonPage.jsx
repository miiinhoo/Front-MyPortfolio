import ProcessImg from '../../../imgs/projects/processimg.JPG';
import Top20Img from '../../../imgs/projects/top20.JPG';

export default function PythonPage(){
    return(
        <section className="work-block">
        <div className="page-inner">
            <h3 className="work-project-title">환율 기반 외국인 여행객 예측 (ARIMA 모델)</h3>
            <p className="work-project-sub">
              파이썬 기반 데이터 분석 프로젝트로, 공공데이터를 활용해 환율과 외국인 여행객 수의 상관관계를 분석하고 ARIMA 모델로 향후 여행객 수를 예측했습니다.
            </p>

            <div className="work-list">

              {/* ------------ 프로젝트 개요 ------------ */}
              <div className="work-list-items">
                
                <div className="work-images-wrapper">
                    <h3>프로젝트 소개</h3>
                </div>

                <div className="text-inner">
                    <h4>프로젝트 개요</h4>
                    <p>
                        환율 변화가 실제로 방한 외국인 관광객 수에 어떤 영향을 미치는지 분석하고,
                        향후 환율 변화가 여행객 수에 어떤 변화를 가져올지 예측하기 위한 프로젝트입니다.
                        외국인 입국 통계와 USD/JPY/EUR 환율 데이터를 수집하여
                        정제 → 시각화 → 상관분석 → ARIMA 예측 모델 구축 순서로 진행했습니다.
                    </p>

                    <strong>사용 기술</strong>
                    <p>Python, Pandas, Numpy, Matplotlib, Statsmodels(ARIMA), Colab</p>
                </div>
              </div>



              {/* ------------ 데이터 수집 ------------ */}
              <div className="work-list-items">
                
                <div className="work-images-wrapper">
                    <h3>데이터 수집 과정</h3>
                    
                </div>

                <div className="text-inner">
                    <h4>데이터 수집</h4>
                    <p>
                        관광객 입국 데이터는 한국관광데이터랩에서,
                        환율 데이터는 서울외국환중개에서 월평균 USD·JPY·EUR 기준으로 수집했습니다.
                        모든 데이터는 YYYY-MM 형태의 날짜 기준으로 병합할 수 있도록 구조를 통일했습니다.
                    </p>
                </div>
              </div>



              {/* ------------ 데이터 전처리 ------------ */}
              <div className="work-list-items">
                
                <div className="work-images-wrapper">
                    <h3>데이터 전처리</h3>
                    <img src={ProcessImg} alt="전처리" />
                </div>

                <div className="text-inner">
                    <h4>데이터 전처리</h4>
                    <p>
                        - 여행객 데이터: G.TOTAL 제거, 국가명·날짜·방문객 수 구조 재정비  
                        <br/>- 환율 데이터: USD/JPY/EUR 기준가만 추출 후 통합  
                        <br/>- 날짜 형식 통일 및 세 데이터 병합  
                        <br/>- 결측치 제거 및 이상치 확인  
                    </p>
                </div>
              </div>



              {/* ------------ 시각화 ------------ */}
              <div className="work-list-items">
                
                <div className="work-images-wrapper">
                    <h3>국가별 방문객 TOP20</h3>
                    <img src={Top20Img} alt="top20" />

                    <h3>환율 변동 그래프</h3>
                    <img src={RateGraphImg} alt="환율그래프" />
                </div>

                <div className="text-inner">
                    <h4>데이터 시각화</h4>
                    <p>
                        국가별 외국인 방문객 수 TOP20를 막대 그래프로 시각화하여
                        어떤 국가에서 방문객이 많은지 파악했습니다.
                        또한 환율 변동 그래프를 생성해 여행객 수 변화와 비교할 수 있게 했습니다.
                    </p>
                </div>
              </div>



              {/* ------------ 상관관계 & ARIMA ------------ */}
              <div className="work-list-items">
                
                <div className="work-images-wrapper">
                    <h3>상관 관계 그래프</h3>
                    <img src={CorrImg} alt="상관관계" />

                    <h3>ARIMA 예측 결과</h3>
                    <img src={ArimaImg} alt="arima예측" />
                </div>

                <div className="text-inner">
                    <h4>상관 분석 및 ARIMA 모델링</h4>
                    <p>
                        여행객·환율 데이터를 날짜 기준으로 병합한 뒤,
                        상관관계 그래프로 두 변수의 관계를 분석했습니다.
                        이후 관광객 수를 시계열 데이터로 변환해 
                        ARIMA(1,1,1) 모델로 미래 여행객 수를 예측했습니다.
                        예측 그래프를 통해 향후 증가·감소 추세를 시각적으로 확인했습니다.
                    </p>
                </div>
              </div>



              {/* ------------ 결과 ------------ */}
              <div className="work-list-items">
                
                <div className="work-images-wrapper">
                    <h3>최종 예측 결과 그래프</h3>
                    <img src={ArimaImg} alt="최종예측" />
                </div>

                <div className="text-inner">
                    <h4>결과 및 활용 방안</h4>
                    <p>
                        환율과 여행객 수의 상관관계를 정량적으로 확인했으며,
                        ARIMA 모델로 향후 여행객 수를 예측하는 모델을 구축했습니다.
                        이 결과는 관광 정책·환율 변동 대응 전략·국가별 마케팅 전략 수립에 활용될 수 있습니다.
                    </p>
                </div>
              </div>


            </div>
        </div>

        {/* ------------ 하단 고정 버튼 ------------ */}
        <div className="fixed-buttons">
            <ButtonComponent
            types="button"
            cln="siteBtn"
            event={() => toast.success("Paytime 개인 프로젝트")}
            >
                <Link to="/about/works/paytime">Pay<br/>time</Link>
            </ButtonComponent>

            <ButtonComponent
            types="button"
            cln="siteBtn"
            event={() => toast.success("Wooden ERP")}
            >
                <Link to="/about/works/wooden">Woo<br/>den</Link>
            </ButtonComponent>

            <ButtonComponent
            types="button"
            cln="siteBtn"
            event={() => toast.success("ARIMA 분석 프로젝트")}
            >
                <Link to="/about/works/python">ARI<br/>MA</Link>
            </ButtonComponent>

            <ButtonComponent
            types="button"
            cln="downBtn"
            event={() => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth"
                });
                toast.success("맨 밑으로 이동했습니다.");
            }}
            />
        </div>

        </section>
    )
}