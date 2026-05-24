# 🏁🌍❓ 국가별 국기 맞추기 게임
> 학원 수업 시간에 배운 class 객체를 활용하여 만든 나라별 국기 맞추기 게임입니다.<br>
> 객관식 형태이며 누구나 재밌게 게임을 즐길 수 있습니다.<br>
> (현재 국기는 많이 등록되어 있지 않습니다.)
```
- 개발 기간: 24.06.29 ~ 24.07.01
- 목적: class 객체를 활용하여 무언가를 만들어 보는 경험을 쌓고, 코드 활용 및 스스로 생각하는 힘을 기르기 위함.
```
---

## 🧩 구현 기능
<table>
  <thead>
    <tr>
      <th>기능</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>랜덤 국기</td>
      <td>랜덤으로 국기를 출력</td>
    </tr>
    <tr>
      <td>객관식 4지선다형</td>
      <td>정답 1개를 포함한 4개의 객관식 출력</td>
    </tr>
    <tr>
      <td>정답 결과</td>
      <td>알림창으로 오답, 정답 출력</td>
    </tr>
    <tr>
      <td>다시 시작</td>
      <td>새로운 국기가 랜덤으로 출력</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>국기 이미지는 해당 저장소에 img 폴더에 저장</td>
    </tr>
  </tbody>
</table>

---

## 🛠 사용 기술 스택
- HTML5
- CSS3
- JavaScript
- Tools: VS Code, Git & GitHub, GitHub Pages

---

## 🎬 배포
🚀 [배포 사이트 바로가기](https://eziquexx.github.io/mini-random-flag-quiz/) - GitHub Pages로 배포

---

## 📘 프로젝트 상세 기록 (노션)
👉 [상세 보러가기](https://dev-jelee.notion.site/2c4d0316bc6881a6819bddece8908a10) 

---

## 📁 디렉토리 구조

```
📂 mini-random-flag-quiz/
├── index.html                // 메인 화면 (앱 진입점)
├── src/
│   ├── randomFlag.js         // 깃발 객체와 랜덤 로직
│   ├── randomFlagStyle.css   // 스타일(CSS)
│   └──img/                   // 깃발 이미지 모음
│      ├── flag01.png
│      ├── ...
│      └── flag26.png
└── README.md
```

---

## 🖼️ UX/UI
<div>
  <span>▼▼ 국기 맞추기 게임 화면 ▼▼</span><br/>
  <img src="https://github.com/eziquexx/mini-random-flag-quiz/blob/develop/src/uiImage/ui01.png" alt="국기 맞추기 게임 화면" style="width:48%;">
</div>
<div>
  <span>▼▼ 국기 맞추기 게임 화면-정답 화면 ▼▼</span><br/>
  <img src="https://github.com/eziquexx/mini-random-flag-quiz/blob/develop/src/uiImage/ui02.png" alt="국기 맞추기 게임 화면, 정답 화면" style="width:48%;">
</div>

---

## :eyes: 개발 참고 자료
- 국기 이미지와 객관식 4지선다는 무작위로 나와야 하기 때문에 무작위로 섞어서 배열에 담는 기능을 검색하여 참고하였습니다.
  - [StackOverflow](https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array)
  - [StackOverflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

---

## 💻 실행 방법 (VS Code 기준 설명)
```
# 시스템 요구사항
- VS Code 기준으로, extentions에서 'Live Server'를 설치해야 한다.

# 1. 저장소 클론
git clone https://github.com/eziquexx/mini-random-flag-quiz.git

# 2. 프로젝트 디렉토리로 이동
cd mini-random-flag-quiz

# 3. Live Server 실행 (3가지 방법)
(1) alt + n, o (alt 누른 상태에서 n과 o를 순서대로 누르기)
(2) 우측 하단에 Go Live 클릭
(3) index.html 파일 도큐먼트에서 마우스 우 클릭 > Open With Live Server 클릭

# 4. 웹브라우저 접속
(1) 일반적으로 Live Server 실행하면 자동으로 브라우저 창이 뜬다.
(2) 만약에 뜨지 않으면 localhost:5500 으로 접속 or 설정된 포트로 접속
```

---
