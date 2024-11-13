# Poke-Dex Project 💁🏻‍♂️

안냐심꽈 다시 돌아온 림졍(임지영)입니ㄷr.

이번에는 우리의 위대-하신 캉민 튜터님께서 하사해주신 데이터를 활용하여

1세대 뽀깟몬 도감을 제작해보았습니다. (강민님 쵝오) o(^0^)o

사이트 배포는 Vercel을 활용하였고 기능 구현을 다하고 욕심을 부리다 보니..

 그.. 생각보다 많이 묵직-해요(?) 바로 설명으로 가볼까요?

<br>

### To. 이걸 오픈하시는 분께.
#### 절대절대 절대 소리를 최대로 하고 페이지를 오픈하지 마세요.
#### 그러다가 진짜 죽습니다. 귀테러 당해요.
#### 저는 경고했어요? 그럼 이제 진짜 가시죠.

<br>



# Overview

## Intro

<center>
<img src="https://github.com/user-attachments/assets/75f69a4a-51bf-4ed6-926d-42fd1a0730ea" width="400" height="400"/>

### 오늘의 뽀깟몬은 뭘까요오?!
</center>

## 간단소개

<br>일단 이 친구가 홈 화면이고요

<br>
<img src="https://github.com/user-attachments/assets/06f6e057-f53a-48fb-8096-d8ffd0d0e59f" width="1080" height="720"/>


<br>이 친구가 Dex(도감) 화면

<br>
<img src="https://github.com/user-attachments/assets/a87c542d-b425-4051-af0f-2fbcd13b82d3" width="1080" height="720"/>

<br>그리고 요놈이 Details(카드 설명) 화면입니둥.

<br>
<img src="https://github.com/user-attachments/assets/6bca6749-f9e5-4a1e-85ce-139e1441cd76" width="1080" height="720"/>


## [필수 구현 사항]

- Git Branch 
  - props-drilling (1차 작업)

      <details> 

       <summary>
      상세 구조
      </summary>

        src
        ├── assets
        │   └── Datas.jsx
        ├── components
        │   ├── pokedetails
        │   └── pokedex
        ├── pages
        │   ├── Home.jsx
        │   ├── PokeDetails.jsx
        │   └── PokeDex.jsx
        ├── shared
        │   ├── GlobalStyles.jsx
        │   └── Router.jsx
        ├── App.css
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── .gitignore
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package.json
        ├── vite.config.js
        └── yarn.lock
       

      </details>

  - context (2차 작업) 
     <details> 

       <summary>
      상세 구조
      </summary>

        src
        ├── components
        │   ├── pokedetails
        │   │   └── PokemonDetail.jsx
        │   └── pokedex
        │       ├── Dashboard.jsx
        │       ├── PokemonCard.jsx
        │       └── PokemonList.jsx
        ├── context
        │   ├── PokemonProvider.jsx
        │   └── usePokemonContext.js
        ├── datas
        │   ├── colorData.js
        │   └── data.js
        ├── pages
        │   ├── Home.jsx
        │   ├── PokeDetails.jsx
        │   └── PokeDex.jsx
        ├── shared
        │   ├── GlobalStyles.jsx
        │   ├── Router.jsx
        │   ├── App.jsx
        │   └── main.jsx
        ├── utils
        │   └── toastcontainer.js
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package.json
        ├── README.md
        ├── vite.config.js
        └── yarn.lock
       

      </details>
 


  - Redux (3차 작업, Vercel 배포 및 현재 main branch)

       <details> 

       <summary>
      상세 구조
      </summary>

        src
        ├── assets
        │   └── images
        │       ├── Icon.png
        │       └── Logo.png
        ├── components
        │   ├── pokedetails
        │   │   └── PokemonDetail.jsx
        │   └── pokedex
        │       ├── Dashboard.jsx
        │       ├── PokemonCard.jsx
        │       └── PokemonList.jsx
        ├── datas
        │   ├── colorData.js
        │   └── data.js
        ├── pages
        │   ├── Home.jsx
        │   ├── PokeDetails.jsx
        │   └── PokeDex.jsx
        ├── redux
        │   └── config
        │       ├── slices
        │       └── store.js
        ├── shared
        │   ├── GlobalStyles.jsx
        │   └── Router.jsx
        ├── utils
        │   └── toastcontainer.js
        ├── .env
        ├── App.jsx
        ├── main.jsx
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package.json
        ├── README.md
        ├── vite.config.js
        └── yarn.lock
       

      </details>

<br>

- Routing
  - react-router-dom의 useNavigate를 활용하여 페이지 간의 라우팅 구현 완료

<br>

- 도감 페이지 구성 (ㄴ...네 코드 보시면 압니다... yo)

<br>

- 디테일 페이지
  - 이름 / 타입 / 설명 순으로 페이지에 표시 (타입의 경우, 박스로 색상을 나누어 구분)

<br>

- 알림 기능 구현
  - props-drilling 을 제외한 나머지 branch, react-toastify를 활용하여 UI 구현 <br> (선택기능 UI 라이브러리 구현완료)
 <center>
<img src="https://github.com/user-attachments/assets/d2ee0055-5819-458e-a230-38d58ee9c198" width="200" height="100"/>
<img src="https://github.com/user-attachments/assets/963f6e00-b066-43d5-885c-864eede581e0" width="200" height="100"/>
<img src="https://github.com/user-attachments/assets/075b7377-ca8a-4d26-ae65-98f8962f202f" width="200" height="80"/>
</center>


<br>

- 스타일링
  - styled-Components 를 활용한 스타일링 및 전역 스타일링 <br>(GlobalStyles 활용, 폰트 변경용도로 사용)

<br>

## [선택 구현 사항]
- RTK 리팩토링하기 -> 완. ㅇ<-< 🥕

<br>

- 디테일 페이지에 '추가' 버튼 추가 (삼항연산자 활용하여 삭제하기도 구현 완.)

 <center>
<img src="https://github.com/user-attachments/assets/a223af01-35d6-4fd2-83bd-7d4f2fc54a5d" width="200" height="100"/>
</center>
<br>

<br>

- Dex 부분, DashBoard 영역에 Home 화면으로 돌아가는 버튼 추가 (돌아가기랑 초기화가 있습니다.)

<br>

- useSound 라이브러리를 활용하여 버튼 클릭 시, 소리가 나오도록 제작 (소리가 생각보다 요란하니 주의하세요)
<br> 아 참고로 기능마다 소리가 쬐끔씩 다릅니다. 히히 ^-^)b
