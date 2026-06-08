const players = {
  "jung-jiseok": ["정지석", "대한항공 점보스", "아웃사이드 히터", "players/jung-jiseok.jpg"],
  "heo-subong": ["허수봉", "현대캐피탈 스카이워커스", "아웃사이드 히터", "players/heo-subong.jpg"],
  "hwang-taegui": ["황택의", "KB손해보험", "세터", "players/hwang-taegui.jpg"],
  "lim-donghyeok": ["임동혁", "대한항공 점보스", "아포짓 스파이커", "players/lim-donghyeok.jpg"],
  "cho-jaeyoung": ["조재영", "대한항공 점보스", "미들 블로커", "players/cho-jaeyoung.jpg"],
  "kim-minjae": ["김민재", "대한항공 점보스", "미들 블로커", "players/kim-minjae.jpg"],
  "lim-sungjin": ["임성진", "KB손해보험", "아웃사이드 히터", "players/lim-sungjin.jpg"],
  "jeon-jinseon": ["전진선", "한국전력 빅스톰", "미들 블로커", "players/jeon-jinseon.jpg"],
  "park-gyeongmin": ["박경민", "현대캐피탈 스카이워커스", "리베로", "players/park-gyeongmin.jpg"],
  "oh-eunryeol": ["오은렬", "현대캐피탈 스카이워커스", "리베로", "players/oh-eunryeol.jpg"],
  "lim-jaeyoung": ["임재영", "대한항공 점보스", "아웃사이드 히터", "players/lim-jaeyoung.jpg"],
  "han-sungjeong": ["한성정", "우리카드 우리WON", "아웃사이드 히터", "players/han-sungjeong.jpg"],
  "kim-youngjun": ["김영준", "우리카드 우리WON", "리베로", "players/kim-youngjun.jpg"],
  "park-changseong": ["박창성", "OK저축은행 읏맨", "미들 블로커", "players/park-changseong.jpg"],
  "lee-sanghyeon": ["이상현", "우리카드 우리WON", "미들 블로커", "players/lee-sanghyeon.jpg"],
  "kim-dohun": ["김도훈", "KB손해보험", "리베로", "players/kim-dohun.jpg"],
  "park-juhyeong": ["박주형", "현대캐피탈 스카이워커스", "아웃사이드 히터", "players/park-juhyeong.jpg"]
};

const id = new URLSearchParams(window.location.search).get("id") || "jung-jiseok";
const player = players[id] || players["jung-jiseok"];
const [name, team, position, photo] = player;

document.title = `JST | ${name}`;
document.getElementById("player-name").textContent = name;
document.getElementById("player-team").textContent = team;
document.getElementById("player-position").textContent = position;
document.getElementById("player-photo").src = photo;
document.getElementById("player-photo").alt = `${name} 선수`;
document.getElementById("player-note").textContent = `${name} 선수의 포지션, 소속팀, 주요 기록과 커리어 스토리를 정리하는 상세 페이지입니다.`;
