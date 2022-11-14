## Lecture-2 : 올림픽 통계 서비스 최적화

![frontend performance optimization guide](public/paste/2022-11-14-13-58-40.png)
프론트엔드 성능 최적화 가이드 책의 part 2 실습 내용입니다.
자세한 스텝은 커밋 내역을 참고 바랍니다.

### 실행

1. download sources

```
$ git clone https://github.com/performance-lecture/lecture-1.git
```

2. install dependencies

```
$ npm install
or
$ yarn
```

3. start development server

```
$ npm run start
or
$ yarn start
```

4. start json-server

```
$ npm run server
or
$ yarn server
```

\*3번의 dev server 와 다른 콘솔에서 띄워줍니다.

5. build + serve

```
$ npm run serve
or
$ yarn serve
```

### 실습 내용

- 아미지 사전 로딩
  - 이미지 자체가 사이즈가 커서 오래걸릴 수 있음
  - 다른 컴포넌트의 로딩을 방해할 수 있음
- 캄포넌트 사전 로딩
- 코드스플리팅
  - 외부 라이브러리 사용 시 번들 사이즈 주의
  - react-image-gallary는 모달 창에서만 필요하므로 쪼갬
- 애니메이션 최적화
  - 쟁크 현상
  - JS는 파싱 차단
  - CSS는 렌더 차단
  - 리플로우와 리페인트에 의해 프레임이 빠짐
    - 리플로우와 리페인트는 모두 렌더 트리 생성부터 다시함
      - 리페인트는 레이아웃 단계만 뻄
    - DOM + CSSOM > 렌더트리 > 레이아웃 > 페인트 > 컴포지트
    - 레이아웃, 페인트 단계를 건너뛸 수 있게 해주는 것이 하드웨어 가속
      - CSSOM > new Render Tree 생성 진행
