// Edit player profile details here. This data powers the main page modal and player.html.
const players = {
  "jung-jiseok": {
    name: "정지석", team: "대한항공 점보스", position: "아웃사이드 히터", photo: "player-photos/details/jung-jiseok.webp",
    records: [
      { year: "2024", items: ["2023-24 챔피언 결정전 우승 - 대한항공 점보스", "2023-24 정규시즌 우승 - 대한항공 점보스"] },
      { year: "2023", items: ["2022-23 챔피언 결정전 우승 - 대한항공 점보스", "2022-23 정규시즌 우승 - 대한항공 점보스", "도드람 2022-2023 V-리그 베스트7"] },
      { year: "2022", items: ["2021-22 챔피언 결정전 우승 - 대한항공 점보스", "2021-22 정규시즌 우승 - 대한항공 점보스", "2022 KOVO컵 우승 - 대한항공 점보스", "항저우 아시안게임 남자배구 국가대표"] },
      { year: "2021", items: ["2020-21 챔피언 결정전 우승 - 대한항공 점보스", "2020-21 정규시즌 우승 - 대한항공 점보스", "도드람 2020-2021 V-리그 정규리그 MVP", "도드람 2020-2021 V-리그 베스트7"] },
      { year: "2020", items: ["도쿄올림픽 남자배구 국가대표"] },
      { year: "2018", items: ["2017-18 챔피언 결정전 우승 - 대한항공 점보스", "2018 동아스포츠 대상", "아시아 남자배구 선수권 대회 국가대표"] },
      { year: "2017", items: ["2016-17 정규시즌 우승 - 대한항공 점보스", "세계 남자배구 선수권 대회 국가대표", "아시아 남자배구 선수권 대회 국가대표", "FIVB 월드리그 남자배구 국가대표"] },
      { year: "2016", items: ["FIVB 월드리그 남자배구 국가대표"] },
      { year: "2015", items: ["광주 하계 유니버시아드 대회 남자배구 국가대표", "세계 남자배구 U23 선수권 대회 국가대표", "아시아 남자배구 U23 선수권 대회 국가대표 - 준우승"] },
      { year: "2014", items: ["2014 KOVO컵 우승 - 대한항공 점보스"] },
      { year: "2013", items: ["대한항공 점보스 입단"] }
    ],
    note: "대한항공을 대표하는 아웃사이드 히터로, 공격과 리시브를 함께 책임지는 대표급 윙 자원입니다."
  },
  "heo-subong": {
    name: "허수봉", team: "현대캐피탈 스카이워커스", position: "아웃사이드 히터", photo: "player-photos/details/heo-subong.webp",
    records: [
      { year: "2025", items: ["2024-25 V-리그 챔피언결정전 우승 - 현대캐피탈 스카이워커스", "2024-25 V-리그 정규시즌 우승 - 현대캐피탈 스카이워커스"] },
      { year: "2024", items: ["2024 도드람컵 프로배구대회 MVP", "2024-25 V-리그 1라운드 MVP", "동아스포츠대상 남자프로배구 올해의 선수", "AVC 챌린지컵 남자배구 국가대표"] },
      { year: "2023", items: ["항저우 아시안게임 남자배구 국가대표"] },
      { year: "2022", items: ["FIVB 챌린저컵 남자배구 국가대표", "AVC컵 남자배구 국가대표"] },
      { year: "2021", items: ["V-리그 남자부 주요 공격수로 성장"] },
      { year: "2016", items: ["현대캐피탈 스카이워커스 입단"] }
    ],
    note: "아웃사이드 히터와 아포짓을 모두 소화하는 현대캐피탈의 핵심 공격 자원입니다."
  },
  "hwang-taegui": {
    name: "황택의", team: "KB손해보험", position: "세터", photo: "player-photos/details/hwang-taegui.webp",
    records: ["2016-17 V-리그 신인상", "2023 아시아 챌린지컵 베스트 세터", "대한민국 남자배구 국가대표", "2025 AVC 남자 네이션스컵 대표"],
    note: "V-리그 드래프트 전체 1순위 출신 세터로, 경기 운영과 분배 능력을 기반으로 팀의 흐름을 조율합니다."
  },
  "lim-donghyeok": {
    name: "임동혁", team: "대한항공 점보스", position: "아포짓 스파이커", photo: "player-photos/details/lim-donghyeok.webp",
    records: ["대한민국 남자배구 국가대표", "2016년 남자배구 최연소 국가대표 기록", "2025 AVC 네이션스컵 뉴질랜드전 18득점"],
    note: "높이와 공격력을 갖춘 국가대표 아포짓 스파이커로 평가받는 선수입니다."
  },
  "cho-jaeyoung": {
    name: "조재영", team: "대한항공 점보스", position: "미들 블로커", photo: "player-photos/details/cho-jaeyoung.webp",
    records: ["AVC 챌린저컵 남자배구 국가대표", "2023-24 챔피언결정전 우승", "2023-24 정규시즌 우승", "2022 KOVO컵 우승", "대한항공 다수 통합 우승 멤버"],
    note: "대한항공의 우승 경험을 갖춘 미들 블로커로, 중앙 높이와 팀 밸런스에 기여해왔습니다."
  },
  "kim-minjae": {
    name: "김민재", team: "대한항공 점보스", position: "미들 블로커", photo: "player-photos/details/kim-minjae.webp",
    records: ["아시아 남자배구 선수권대회 국가대표", "AVC컵 남자배구 국가대표", "2020-21 V-리그 정규리그 MVP", "2020-21 V-리그 베스트7", "대한항공 우승 멤버"],
    note: "대한항공 중앙을 책임지는 미들 블로커로, 리그 수상 이력과 대표팀 경험을 보유하고 있습니다."
  },
  "lim-sungjin": {
    name: "임성진", team: "KB손해보험", position: "아웃사이드 히터", photo: "player-photos/details/lim-sungjin.webp",
    records: ["2024 AVC컵 남자배구 국가대표", "2024 KOREA컵 국제 남자배구 국가대표", "2023 아시아 남자배구 선수권대회 국가대표", "FIVB 챌린저컵 남자배구 국가대표", "FIVB 세계 유스 남자 U19 선수권 국가대표"],
    note: "연령별 대표팀부터 성인 대표팀까지 경험한 아웃사이드 히터입니다."
  },
  "jeon-jinseon": {
    name: "전진선", team: "한국전력 빅스톰", position: "미들 블로커", photo: "player-photos/details/jeon-jinseon.webp",
    records: ["상세 국가대표 및 수상 이력 추가 확인 예정"],
    note: "한국전력 소속 미들 블로커입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "park-gyeongmin": {
    name: "박경민", team: "현대캐피탈 스카이워커스", position: "리베로", photo: "player-photos/details/park-gyeongmin.webp",
    records: ["대한민국 남자배구 국가대표 리베로", "2024-25 현대캐피탈 트레블 멤버", "2021-22 V-리그 베스트7 리베로"],
    note: "현대캐피탈 수비 라인을 이끄는 국가대표급 리베로입니다."
  },
  "oh-eunryeol": {
    name: "오은렬", team: "현대캐피탈 스카이워커스", position: "리베로", photo: "player-photos/details/oh-eunryeol.webp",
    records: ["2023-24 챔피언결정전 우승", "2023-24 정규시즌 우승", "2022 KOVO컵 우승", "대한항공 통합 우승 멤버"],
    note: "대한항공 우승 경험을 바탕으로 현대캐피탈에 합류한 리베로입니다."
  },
  "lim-jaeyoung": {
    name: "임재영", team: "대한항공 점보스", position: "아웃사이드 히터", photo: "player-photos/details/lim-jaeyoung.webp",
    records: ["상세 국가대표 및 수상 이력 추가 확인 예정"],
    note: "대한항공 소속 아웃사이드 히터입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "han-sungjeong": {
    name: "한성정", team: "우리카드 우리WON", position: "아웃사이드 히터", photo: "player-photos/details/han-sungjeong.webp",
    records: ["상세 국가대표 및 수상 이력 추가 확인 예정"],
    note: "우리카드 소속 아웃사이드 히터입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "kim-youngjun": {
    name: "김영준", team: "우리카드 우리WON", position: "리베로", photo: "player-photos/details/kim-youngjun.webp",
    records: ["상세 국가대표 및 수상 이력 추가 확인 예정"],
    note: "우리카드 소속 리베로입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "park-changseong": {
    name: "박창성", team: "OK저축은행 읏맨", position: "미들 블로커", photo: "player-photos/details/park-changseong.webp",
    records: ["상세 국가대표 및 수상 이력 추가 확인 예정"],
    note: "OK저축은행 소속 미들 블로커입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "lee-sanghyeon": {
    name: "이상현", team: "우리카드 우리WON", position: "미들 블로커", photo: "player-photos/details/lee-sanghyeon.webp",
    records: ["상세 국가대표 및 수상 이력 추가 확인 예정"],
    note: "우리카드 소속 미들 블로커입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "kim-dohun": {
    name: "김도훈", team: "KB손해보험", position: "리베로", photo: "player-photos/details/kim-dohun.webp",
    records: ["상세 국가대표 및 수상 이력 추가 확인 예정"],
    note: "KB손해보험 소속 리베로입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "park-juhyeong": {
    name: "박주형", team: "현대캐피탈 스카이워커스", position: "아웃사이드 히터", photo: "player-photos/details/park-juhyeong.webp",
    records: ["세계선수권 남자배구 국가대표", "아시아선수권 남자배구 국가대표", "FIVB 월드리그 남자배구 국가대표", "AVC컵 남자배구 국가대표", "현대캐피탈 챔피언결정전 우승 및 정규시즌 우승 멤버"],
    note: "현대캐피탈로 복귀한 베테랑 아웃사이드 히터로, 다수의 국제대회 대표팀 경험을 보유하고 있습니다."
  },
  "park-jinwoo": {
    name: "박진우", team: "우리카드 우리WON", position: "미들 블로커", photo: "player-photos/details/park-jinwoo.webp",
    records: ["대한민국 남자배구 국가대표", "우리카드 우리WON 소속 미들 블로커"],
    note: "높이와 블로킹 경험을 갖춘 미들 블로커로, 중앙에서 팀 밸런스를 잡는 자원입니다."
  }
};
window.JST_PLAYERS = players;

const playerNameEl = document.getElementById("player-name");
if (playerNameEl) {
  const id = new URLSearchParams(window.location.search).get("id") || "jung-jiseok";
  const player = players[id] || players["jung-jiseok"];

  document.title = `JST | ${player.name}`;
  playerNameEl.textContent = player.name;
  document.getElementById("player-team").textContent = player.team;
  document.getElementById("player-position").textContent = player.position;
  document.getElementById("player-photo").src = player.photo;
  document.getElementById("player-photo").alt = `${player.name} 선수`;
  document.getElementById("player-note").textContent = player.note;
  document.getElementById("player-records").innerHTML = player.records.map((group) => {
    if (typeof group === "string") {
      return `<div class="career-row"><strong>--</strong><div><p>${group}</p></div></div>`;
    }
    return `<div class="career-row"><strong>${group.year}</strong><div>${group.items.map((item) => `<p>${item}</p>`).join("")}</div></div>`;
  }).join("");
}
