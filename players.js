// Edit player profile details here. This data powers the main page modal and player.html.
const players = {
  "jung-jiseok": {
    name: "정지석",
    team: "대한항공 점보스",
    position: "아웃사이드 히터",
    photo: "player-photos/details/jung-jiseok.webp",
    records: [
      {
        year: "2024",
        items: [
          "2023-24 챔피언 결정전 우승 - 대한항공 점보스",
          "2023-24 정규시즌 우승 - 대한항공 점보스"
        ]
      },
      {
        year: "2023",
        items: [
          "2022-23 챔피언 결정전 우승 - 대한항공 점보스",
          "2022-23 정규시즌 우승 - 대한항공 점보스",
          "도드람 2022-2023 V-리그 베스트7"
        ]
      },
      {
        year: "2022",
        items: [
          "2021-22 챔피언 결정전 우승 - 대한항공 점보스",
          "2021-22 정규시즌 우승 - 대한항공 점보스",
          "2022 KOVO컵 우승 - 대한항공 점보스",
          "항저우 아시안게임 남자배구 국가대표"
        ]
      },
      {
        year: "2021",
        items: [
          "2020-21 챔피언 결정전 우승 - 대한항공 점보스",
          "2020-21 정규시즌 우승 - 대한항공 점보스",
          "도드람 2020-2021 V-리그 정규리그 MVP",
          "도드람 2020-2021 V-리그 베스트7"
        ]
      },
      {
        year: "2020",
        items: [
          "도쿄올림픽 남자배구 국가대표"
        ]
      },
      {
        year: "2018",
        items: [
          "2017-18 챔피언 결정전 우승 - 대한항공 점보스",
          "2018 동아스포츠 대상",
          "아시아 남자배구 선수권 대회 국가대표"
        ]
      },
      {
        year: "2017",
        items: [
          "2016-17 정규시즌 우승 - 대한항공 점보스",
          "세계 남자배구 선수권 대회 국가대표",
          "아시아 남자배구 선수권 대회 국가대표",
          "FIVB 월드리그 남자배구 국가대표"
        ]
      },
      {
        year: "2016",
        items: [
          "FIVB 월드리그 남자배구 국가대표"
        ]
      },
      {
        year: "2015",
        items: [
          "광주 하계 유니버시아드 대회 남자배구 국가대표",
          "세계 남자배구 U23 선수권 대회 국가대표",
          "아시아 남자배구 U23 선수권 대회 국가대표 - 준우승"
        ]
      },
      {
        year: "2014",
        items: [
          "2014 KOVO컵 우승 - 대한항공 점보스"
        ]
      },
      {
        year: "2013",
        items: [
          "대한항공 점보스 입단"
        ]
      }
    ],
    profile: {
      birth: "1995.03.10",
      heightWeight: "195cm / 88kg",
      school: "부천 소사초 / 부천 소사중 / 송림고"
    },
    playerHistory: [
      "2013-2014 V-리그 대한항공 드래프트 (2013.09.10) 2라운드 6순위",
      "2019-2020 V-리그 대한항공 계약 (2019.04.13) (FA1차)",
      "2022-2023 V-리그 대한항공 계약 (2022.04.25) (FA1차)",
      "2025-2026 V-리그 대한항공 계약 (2025.04.21) (FA1차)"
    ],
    awards: [
      "2017-2018 V-리그 라운드 MVP",
      "2018-2019 V-리그 정규리그 MVP",
      "2018-2019 V-리그 라운드 MVP",
      "2018-2019 V-리그 베스트7 (아웃사이드히터)",
      "2019-2020 V-리그 베스트7 (아웃사이드히터)",
      "2020-2021 V-리그 정규리그 MVP",
      "2020-2021 V-리그 챔피언결정전MVP",
      "2020-2021 V-리그 베스트7 (아웃사이드히터)",
      "2022-2023 V-리그 베스트7 (아웃사이드히터)",
      "2023-2024 V-리그 챔피언결정전MVP"
    ]
  },
  "heo-subong": {
    name: "허수봉",
    team: "현대캐피탈 스카이워커스",
    position: "아웃사이드 히터",
    photo: "player-photos/details/heo-subong.webp",
    records: [
      {
        year: "2025",
        items: [
          "2024-25 V-리그 챔피언결정전 우승 - 현대캐피탈 스카이워커스",
          "2024-25 V-리그 정규시즌 우승 - 현대캐피탈 스카이워커스"
        ]
      },
      {
        year: "2024",
        items: [
          "2024 도드람컵 프로배구대회 MVP",
          "2024-25 V-리그 1라운드 MVP",
          "동아스포츠대상 남자프로배구 올해의 선수",
          "AVC 챌린지컵 남자배구 국가대표"
        ]
      },
      {
        year: "2023",
        items: [
          "항저우 아시안게임 남자배구 국가대표"
        ]
      },
      {
        year: "2022",
        items: [
          "FIVB 챌린저컵 남자배구 국가대표",
          "AVC컵 남자배구 국가대표"
        ]
      },
      {
        year: "2021",
        items: [
          "V-리그 남자부 주요 공격수로 성장"
        ]
      },
      {
        year: "2016",
        items: [
          "현대캐피탈 스카이워커스 입단"
        ]
      }
    ],
    profile: {
      birth: "1998.04.07",
      heightWeight: "196cm / 85kg",
      school: "호연초 / 경북사대부중 / 경북사대부고"
    },
    playerHistory: [
      "2016-2017 V-리그 대한항공 드래프트 (2016.10.26) 1라운드 3순위",
      "2016-2017 V-리그 현대캐피탈 이적 (2016.10.28)",
      "2023-2024 V-리그 현대캐피탈 계약 (2023.04.19) (FA1차)"
    ],
    awards: [
      "2022-2023 V-리그 라운드 MVP",
      "2023-2024 V-리그 베스트7 (아웃사이드히터)",
      "2024-2025 V-리그 정규리그 MVP",
      "2024-2025 V-리그 라운드 MVP",
      "2024-2025 V-리그 라운드 MVP",
      "2024-2025 V-리그 베스트7 (아웃사이드히터)",
      "2024 KOVO 컵대회 MVP"
    ],
    note: "아웃사이드 히터와 아포짓을 모두 소화하는 현대캐피탈의 핵심 공격 자원입니다."
  },
  "hwang-taegui": {
    name: "황택의",
    team: "KB손해보험",
    position: "세터",
    photo: "player-photos/details/hwang-taegui.webp",
    records: [
      "2016-17 V-리그 신인상",
      "2023 아시아 챌린지컵 베스트 세터",
      "대한민국 남자배구 국가대표",
      "2025 AVC 남자 네이션스컵 대표"
    ],
    profile: {
      birth: "1996.11.12",
      heightWeight: "191cm / 86kg",
      school: "성균관대"
    },
    playerHistory: [
      "2016-2017 V-리그 KB손해보험 드래프트 (2016.10.26) 1라운드 1순위",
      "2021-2022 V-리그 KB손해보험 계약 (2021.05.03) (FA1차)",
      "2025-2026 V-리그 KB손해보험 계약 (2025.04.21) (FA1차)"
    ],
    awards: [
      "2016-2017 V-리그 신인선수상",
      "2020-2021 V-리그 베스트7 (세터)",
      "2021-2022 V-리그 베스트7 (세터)",
      "2022-2023 V-리그 베스트7 (세터)",
      "2024-2025 V-리그 베스트7 (세터)",
      "2018 KOVO컵 (남자부) MIP"
    ],
    note: "V-리그 드래프트 전체 1순위 출신 세터로, 경기 운영과 분배 능력을 기반으로 팀의 흐름을 조율합니다."
  },
  "lim-donghyeok": {
    name: "임동혁",
    team: "대한항공 점보스",
    position: "아포짓 스파이커",
    photo: "player-photos/details/lim-donghyeok.webp",
    records: [
      "대한민국 남자배구 국가대표",
      "2016년 남자배구 최연소 국가대표 기록",
      "2025 AVC 네이션스컵 뉴질랜드전 18득점"
    ],
    profile: {
      birth: "1999.03.09",
      heightWeight: "200cm / 91kg",
      school: "의림초 / 제천고 / 제천산업고"
    },
    playerHistory: [
      "2017-2018 V-리그 대한항공 드래프트 (2017.10.26) 1라운드 6순위",
      "2023-2024 V-리그 대한항공 계약 (2023.04.19) (FA1차)"
    ],
    awards: [
      "2023-2024 V-리그 라운드 MVP",
      "2020 KOVO컵 MIP",
      "2022 KOVO 컵대회 MVP"
    ],
    note: "높이와 공격력을 갖춘 국가대표 아포짓 스파이커로 평가받는 선수입니다."
  },
  "cho-jaeyoung": {
    name: "조재영",
    team: "대한항공 점보스",
    position: "미들 블로커",
    photo: "player-photos/details/cho-jaeyoung.webp",
    records: [
      "AVC 챌린저컵 남자배구 국가대표",
      "2023-24 챔피언결정전 우승",
      "2023-24 정규시즌 우승",
      "2022 KOVO컵 우승",
      "대한항공 다수 통합 우승 멤버"
    ],
    profile: {
      birth: "1991.08.21",
      heightWeight: "195cm / 90kg",
      school: "다대중 / 성지고 / 홍익대"
    },
    playerHistory: [
      "2013-2014 V-리그 대한항공 드래프트 (2013.09.10) 3라운드 2순위",
      "2019-2020 V-리그 대한항공 자유신분선수 (2019.09.06)",
      "2019-2020 V-리그 대한항공 계약 (2019.12.27)",
      "2020-2021 V-리그 대한항공 계약 (2020.04.23) (FA1차)",
      "2023-2024 V-리그 대한항공 계약 (2023.04.19) (FA1차)"
    ],
    awards: [],
    note: "대한항공의 우승 경험을 갖춘 미들 블로커로, 중앙 높이와 팀 밸런스에 기여해왔습니다."
  },
  "kim-minjae": {
    name: "김민재",
    team: "대한항공 점보스",
    position: "미들 블로커",
    photo: "player-photos/details/kim-minjae.webp",
    records: [
      "아시아 남자배구 선수권대회 국가대표",
      "AVC컵 남자배구 국가대표",
      "2020-21 V-리그 정규리그 MVP",
      "2020-21 V-리그 베스트7",
      "대한항공 우승 멤버"
    ],
    profile: {
      birth: "2003.04.04",
      heightWeight: "196cm / 87kg",
      school: "인하사대부고"
    },
    playerHistory: [
      "2021-2022 V-리그 대한항공 드래프트 (2021.10.14) 2라운드 1순위"
    ],
    awards: [],
    note: "대한항공 중앙을 책임지는 미들 블로커로, 리그 수상 이력과 대표팀 경험을 보유하고 있습니다."
  },
  "lim-sungjin": {
    name: "임성진",
    team: "KB손해보험",
    position: "아웃사이드 히터",
    photo: "player-photos/details/lim-sungjin.webp",
    records: [
      "2024 AVC컵 남자배구 국가대표",
      "2024 KOREA컵 국제 남자배구 국가대표",
      "2023 아시아 남자배구 선수권대회 국가대표",
      "FIVB 챌린저컵 남자배구 국가대표",
      "FIVB 세계 유스 남자 U19 선수권 국가대표"
    ],
    profile: {
      birth: "1999.01.11",
      heightWeight: "195cm / 85kg",
      school: "의림초 / 제천중 / 제천산업고 / 성균관대"
    },
    playerHistory: [
      "2020-2021 V-리그 한국전력 드래프트 (2020.10.16) 1라운드 2순위",
      "2025-2026 V-리그 KB손해보험 계약 (2025.04.21) (FA1차)"
    ],
    awards: [
      "2021-2022 V-리그 올스타 MVP",
      "2023-2024 V-리그 라운드 MVP"
    ],
    note: "연령별 대표팀부터 성인 대표팀까지 경험한 아웃사이드 히터입니다."
  },
  "jeon-jinseon": {
    name: "전진선",
    team: "한국전력 빅스톰",
    position: "미들 블로커",
    photo: "player-photos/details/jeon-jinseon.webp",
    records: [
      "상세 국가대표 및 수상 이력 추가 확인 예정"
    ],
    profile: {
      birth: "1996.09.11",
      heightWeight: "197cm / 95kg",
      school: "부령초 / 진주동명중 / 진주동명고 / 홍익대"
    },
    playerHistory: [
      "2018-2019 V-리그 OK저축은행 드래프트 (2018.10.20) 1라운드 1순위",
      "2023-2024 V-리그 삼성화재 이적 (2023.12.23)",
      "2024-2025 V-리그 삼성화재 계약 (2024.04.18) (FA1차)",
      "2024-2025 V-리그 한국전력 이적 (2024.04.19)"
    ],
    awards: [],
    note: "한국전력 소속 미들 블로커입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "park-gyeongmin": {
    name: "박경민",
    team: "현대캐피탈 스카이워커스",
    position: "리베로",
    photo: "player-photos/details/park-gyeongmin.webp",
    records: [
      "대한민국 남자배구 국가대표 리베로",
      "2024-25 현대캐피탈 트레블 멤버",
      "2021-22 V-리그 베스트7 리베로"
    ],
    profile: {
      birth: "1999.06.05",
      heightWeight: "170cm / 66kg",
      school: "하양초 / 소사중 / 송산고 / 인하대"
    },
    playerHistory: [
      "2020-2021 V-리그 현대캐피탈 드래프트 (2020.10.16) 1라운드 4순위",
      "2025-2026 V-리그 현대캐피탈 계약 (2025.04.21) (FA1차)"
    ],
    awards: [
      "2021-2022 V-리그 베스트7 (리베로)"
    ],
    note: "현대캐피탈 수비 라인을 이끄는 국가대표급 리베로입니다."
  },
  "oh-eunryeol": {
    name: "오은렬",
    team: "현대캐피탈 스카이워커스",
    position: "리베로",
    photo: "player-photos/details/oh-eunryeol.webp",
    records: [
      "2023-24 챔피언결정전 우승",
      "2023-24 정규시즌 우승",
      "2022 KOVO컵 우승",
      "대한항공 통합 우승 멤버"
    ],
    profile: {
      birth: "1997.08.20",
      heightWeight: "178cm / 73kg",
      school: "하동초 / 진주동명중 / 동명고 / 경기대"
    },
    playerHistory: [
      "2019-2020 V-리그 대한항공 드래프트 (2019.10.11) 2라운드 2순위",
      "2024-2025 V-리그 현대캐피탈 계약 (2024.04.18) (FA2차)"
    ],
    awards: [],
    note: "대한항공 우승 경험을 바탕으로 현대캐피탈에 합류한 리베로입니다."
  },
  "lim-jaeyoung": {
    name: "임재영",
    team: "대한항공 점보스",
    position: "아웃사이드 히터",
    photo: "player-photos/details/lim-jaeyoung.webp",
    records: [
      "상세 국가대표 및 수상 이력 추가 확인 예정"
    ],
    profile: {
      birth: "1998.03.29",
      heightWeight: "190cm / 80kg",
      school: "주안초 / 인창중 / 인하북 / 경기대"
    },
    playerHistory: [
      "2020-2021 V-리그 대한항공 드래프트 (2020.10.16) 1라운드 7순위"
    ],
    awards: [],
    note: "대한항공 소속 아웃사이드 히터입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "han-sungjeong": {
    name: "한성정",
    team: "우리카드 우리WON",
    position: "아웃사이드 히터",
    photo: "player-photos/details/han-sungjeong.webp",
    records: [
      "상세 국가대표 및 수상 이력 추가 확인 예정"
    ],
    profile: {
      birth: "1996.07.25",
      heightWeight: "194cm / 90kg",
      school: "삼양초 / 옥천중 / 옥천고 / 홍익대"
    },
    playerHistory: [
      "2017-2018 V-리그 우리카드 드래프트 (2017.10.25) 1라운드 1순위",
      "2021-2022 V-리그 KB손해보험 이적 (2021.12.27)",
      "2022-2023 V-리그 KB손해보험 계약 (2022.04.25) (FA1차)",
      "2023-2024 V-리그 우리카드 이적 (2023.06.07)",
      "2025-2026 V-리그 우리카드 계약 (2025.04.21) (FA1차)"
    ],
    awards: [],
    note: "우리카드 소속 아웃사이드 히터입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "kim-youngjun": {
    name: "김영준",
    team: "우리카드 우리WON",
    position: "리베로",
    photo: "player-photos/details/kim-youngjun.webp",
    records: [
      "상세 국가대표 및 수상 이력 추가 확인 예정"
    ],
    profile: {
      birth: "2000.10.18",
      heightWeight: "174cm / 70kg",
      school: "삼양초 / 옥천중 / 옥천고 / 경희대"
    },
    playerHistory: [
      "2021-2022 V-리그 우리카드 드래프트 (2021.10.07) 2라운드 4순위"
    ],
    awards: [],
    note: "우리카드 소속 리베로입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "park-changseong": {
    name: "박창성",
    team: "OK저축은행 읏맨",
    position: "미들 블로커",
    photo: "player-photos/details/park-changseong.webp",
    records: [
      "상세 국가대표 및 수상 이력 추가 확인 예정"
    ],
    profile: {
      birth: "1998.09.21",
      heightWeight: "200cm / 89kg",
      school: "관산초 / 소사중 / 송림고 / 한양대"
    },
    playerHistory: [
      "2020-2021 V-리그 OK금융그룹 드래프트 (2020.10.21) 1라운드 3순위"
    ],
    awards: [],
    note: "OK저축은행 소속 미들 블로커입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "lee-sanghyeon": {
    name: "이상현",
    team: "우리카드 우리WON",
    position: "미들 블로커",
    photo: "player-photos/details/lee-sanghyeon.webp",
    records: [
      "상세 국가대표 및 수상 이력 추가 확인 예정"
    ],
    profile: {
      birth: "1999.04.07",
      heightWeight: "200cm / 95kg",
      school: "목향초 / 불로중 / 인하부고 / 경기대"
    },
    playerHistory: [
      "2021-2022 V-리그 우리카드 드래프트 (2021.10.07) 1라운드 4순위"
    ],
    awards: [
      "2023-2024 V-리그 베스트7 (미들블로커)"
    ],
    note: "우리카드 소속 미들 블로커입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "kim-dohun": {
    name: "김도훈",
    team: "KB손해보험",
    position: "리베로",
    photo: "player-photos/details/kim-dohun.webp",
    records: [
      "상세 국가대표 및 수상 이력 추가 확인 예정"
    ],
    profile: {
      birth: "1998.04.19",
      heightWeight: "183cm / 74kg",
      school: "의림초 / 제천중 / 제천산업고 / 홍익대"
    },
    playerHistory: [
      "2020-2021 V-리그 KB손해보험 드래프트 (2020.10.21) 3라운드 1순위"
    ],
    awards: [],
    note: "KB손해보험 소속 리베로입니다. 세부 기록은 공식 자료 확인 후 업데이트합니다."
  },
  "park-juhyeong": {
    name: "박주형",
    team: "현대캐피탈 스카이워커스",
    position: "아웃사이드 히터",
    photo: "player-photos/details/park-juhyeong.webp",
    records: [
      "세계선수권 남자배구 국가대표",
      "아시아선수권 남자배구 국가대표",
      "FIVB 월드리그 남자배구 국가대표",
      "AVC컵 남자배구 국가대표",
      "현대캐피탈 챔피언결정전 우승 및 정규시즌 우승 멤버"
    ],
    profile: {
      birth: "1987.08.05",
      heightWeight: "193cm / 87kg",
      school: "대천초 / 성지중 / 성지공고 / 성균관대"
    },
    playerHistory: [
      "2010-2011 V-리그 우리캐피탈 드래프트 (2010.11.04) 1라운드 2순위",
      "2011-2012 V-리그 현대캐피탈 이적 (2011.09.01)",
      "2016-2017 V-리그 현대캐피탈 계약 (2017.05.31) (FA1차)",
      "2020-2021 V-리그 현대캐피탈 계약 (2020.04.23) (FA1차)"
    ],
    awards: [],
    note: "현대캐피탈로 복귀한 베테랑 아웃사이드 히터로, 다수의 국제대회 대표팀 경험을 보유하고 있습니다."
  },
  "park-jinwoo": {
    name: "박진우",
    team: "우리카드 우리WON",
    position: "미들 블로커",
    photo: "player-photos/details/park-jinwoo.webp",
    records: [
      "대한민국 남자배구 국가대표",
      "우리카드 우리WON 소속 미들 블로커"
    ],
    profile: {
      birth: "1990.03.18",
      heightWeight: "197cm / 85kg",
      school: "광명동초 / 부안중 / 평촌고 / 경기대"
    },
    playerHistory: [
      "2012-2013 V-리그 드림식스 드래프트 (2012.10.22) 1라운드 2순위",
      "2013-2014 V-리그 우리카드 계약 (2013.08.01)",
      "2018-2019 V-리그 KB손해보험 이적 (2019.05.21)",
      "2020-2021 V-리그 KB손해보험 계약 (2020.04.23) (FA1차)",
      "2023-2024 V-리그 KB손해보험 계약 (2023.04.19) (FA1차)",
      "2023-2024 V-리그 우리카드 이적 (2023.07.01)"
    ],
    awards: [
      "2014-2015 V-리그 베스트7 (미들블로커)"
    ],
    note: "높이와 블로킹 경험을 갖춘 미들 블로커로, 중앙에서 팀 밸런스를 잡는 자원입니다."
  }
};
window.JST_PLAYERS = players;

const escapeHTML = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

window.JST_RENDER_LIST = (containerId, items) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  const block = container.closest(".record-block, .profile-panel");
  const hiddenLabels = ["\uCD94\uAC00 \uC608\uC815", "\uD655\uC778 \uC608\uC815", "--"];
  const visibleItems = (items || []).filter((item) => item && !hiddenLabels.some((label) => item.includes(label)));
  if (!visibleItems.length) {
    if (block) block.hidden = true;
    container.innerHTML = "";
    return;
  }

  if (block) block.hidden = false;
  container.innerHTML = `<ul class="detail-list">${visibleItems.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
};

window.JST_RENDER_PROFILE = (containerId, profile) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  const block = container.closest(".record-block, .profile-panel");
  const items = [
    { label: "\uC0DD\uB144\uC6D4\uC77C", value: profile?.birth },
    { label: "\uC2E0\uC7A5/\uCCB4\uC911", value: profile?.heightWeight },
    { label: "\uCD9C\uC2E0\uD559\uAD50", value: profile?.school }
  ].filter((item) => item.value);

  if (!items.length) {
    if (block) block.hidden = true;
    container.innerHTML = "";
    return;
  }

  if (block) block.hidden = false;
  container.innerHTML = items.map((item) => `
    <div>
      <dt>${escapeHTML(item.label)}</dt>
      <dd>${escapeHTML(item.value)}</dd>
    </div>
  `).join("");
};

const playerNameEl = document.getElementById("player-name");
if (playerNameEl) {
  const id = new URLSearchParams(window.location.search).get("id") || "jung-jiseok";
  const player = players[id] || players["jung-jiseok"];

  document.title = `JST | ${player.name}`;
  playerNameEl.textContent = player.name;
  document.getElementById("player-team").textContent = player.team;
  document.getElementById("player-position").textContent = player.position;
  document.getElementById("player-photo").src = player.photo;
  document.getElementById("player-photo").alt = `${player.name} \uC120\uC218`;
  window.JST_RENDER_PROFILE("player-profile-details", player.profile);
  window.JST_RENDER_LIST("player-history", player.playerHistory);
  window.JST_RENDER_LIST("player-awards", player.awards);
}
