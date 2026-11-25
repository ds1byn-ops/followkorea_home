// 자동 생성: 글로벌 플랫폼(followkorea.kr) 병원 데이터 스냅샷 — 수가표·병원 홈페이지 링크 제외
export interface HospDoctor { name: string; title: string; spec: string[]; }
export interface HospDetail {
  name: { kr: string; en: string; zh: string };
  dept: { kr: string; en: string; zh: string };
  cat: string;
  icon: string;
  badge?: string;
  treats: { kr: string[]; en: string[]; zh: string[] };
  hours: string;
  loc: { ko: string; zh: string; en: string };
  overview: { kr: string; en: string; zh: string };
  doctors: HospDoctor[];
  thumb?: string;
}

export const HOSPITAL_DATA: HospDetail[] = [
  {
    "name": {
      "kr": "데이원의원",
      "en": "DAYONE Clinic",
      "zh": "DAYONE医院"
    },
    "dept": {
      "kr": "피부과·리프팅",
      "en": "Dermatology · Lifting",
      "zh": "皮肤科·提升"
    },
    "cat": "피부·성형",
    "icon": "✨",
    "badge": "NEW",
    "treats": {
      "kr": [
        "써마지·울쎄라 리프팅",
        "실리프팅(민트·블루로즈)",
        "필러·보톡스",
        "스킨부스터·물광주사",
        "색소·모공 레이저",
        "줄기세포 피부관리"
      ],
      "en": [
        "Thermage · Ulthera Lifting",
        "Thread Lifting",
        "Filler · Botox",
        "Skin Booster · Aqua Shine",
        "Pigment · Pore Laser",
        "Stem Cell Skincare"
      ],
      "zh": [
        "热玛吉·超声刀提升",
        "埋线提升",
        "玻尿酸·肉毒",
        "水光·皮肤助推",
        "色素·毛孔激光",
        "干细胞皮肤管理"
      ]
    },
    "hours": "예약제 (by appointment) · dayoneclinic.co.kr",
    "loc": {
      "ko": "서울 서초 (강남대로)",
      "zh": "首尔瑞草(江南大路)",
      "en": "Gangnam-daero, Seocho, Seoul"
    },
    "overview": {
      "kr": "데이원의원은 서울 서초구 강남대로 437 대원빌딩 5층에 위치한 리프팅·피부 중심 의원입니다. 써마지·울쎄라·실리프팅 등 탄력·윤곽 치료와 필러·보톡스·스킨부스터·줄기세포 피부관리를 환자 상태에 맞춰 설계합니다. 보건복지부·한국보건산업진흥원 외국인환자 유치의료기관 평가인증(KAHF)을 취득했으며, 한/영/중/일 통역을 지원합니다.",
      "en": "DAYONE Clinic, on the 5th floor of Daewon Building at 437 Gangnam-daero, Seocho-gu, Seoul, focuses on lifting and skin care. It tailors firming and contouring treatments such as Thermage, Ulthera and thread lifting, together with fillers, botox, skin boosters and stem-cell skincare, to each patient. The clinic holds Korea’s KAHF accreditation for international patient care and offers Korean, English, Chinese and Japanese interpretation.",
      "zh": "DAYONE医院位于首尔瑞草区江南大路437大元大厦5层，以提升与皮肤管理为中心。根据每位患者的状态，规划热玛吉、超声刀、埋线提升等紧致轮廓治疗，以及玻尿酸、肉毒、水光和干细胞皮肤管理。医院取得韩国保健福祉部·韩国保健产业振兴院外国人患者接待医疗机构评估认证(KAHF)，提供韩/英/中/日翻译。"
    },
    "doctors": [],
    "thumb": "hthumb/dayone.jpg"
  },
  {
    "name": {
      "kr": "리베리의원 강남점",
      "en": "RE:BERRY Clinic Gangnam",
      "zh": "丽贝瑞医院 江南店"
    },
    "dept": {
      "kr": "피부/레이저·리프팅·쁘띠",
      "en": "Skin / Laser·Lifting·Aesthetic",
      "zh": "皮肤/激光·提升·轻医美"
    },
    "cat": "피부·성형",
    "badge": "NEW",
    "treats": {
      "kr": [
        "울쎄라",
        "써마지",
        "온다",
        "실리프팅",
        "수광·리쥬란",
        "필러",
        "보톡스",
        "줄기세포"
      ],
      "en": [
        "Ultherapy",
        "Thermage",
        "ONDA",
        "Thread Lifting",
        "Skin Booster",
        "Filler",
        "Botox",
        "Stem Cell"
      ],
      "zh": [
        "超声刀",
        "热玛吉",
        "ONDA",
        "线雕提升",
        "水光·丽珠兰",
        "玻尿酸",
        "肉毒",
        "干细胞"
      ]
    },
    "hours": "By appointment / 예약제 (Tel 02-2039-2822)",
    "loc": {
      "ko": "서울 서초구 신논현(강남대로)",
      "zh": "首尔瑞草区·新论岘(江南大路)",
      "en": "Sinnonhyeon, Seoul"
    },
    "overview": {
      "kr": "리베리의원 강남점(RE:BERRY)은 신논현역 도보권 KI타워 지하1·2층의 피부·레이저 전문 의원입니다. 울쎄라 프라임·써마지 FLX·온다·소프웨이브 등 리프팅 장비와 리쥬란·콜라겐 수광·실리프팅·줄기세포 프로그램, SRE 시그니처 맞춤 케어를 운영합니다.",
      "en": "RE:BERRY Clinic Gangnam, steps from Sinnonhyeon Station (B1-B2, KI Tower), focuses on lifting devices such as Ulthera Prime, Thermage FLX, ONDA and Sofwave, alongside Rejuran, collagen boosters, thread lifting, stem-cell programs and the SRE signature care series.",
      "zh": "丽贝瑞医院江南店(RE:BERRY)位于新论岘站步行圈KI塔地下1·2层。主打Ulthera Prime·Thermage FLX·ONDA·Sofwave等提升设备与丽珠兰·胶原水光·线雕·干细胞项目，提供SRE签名系列定制护理。"
    },
    "doctors": [
      {
        "name": "류윤곤",
        "title": "대표원장",
        "spec": [
          "대한미용성형레이저학회 정회원",
          "리프팅·레이저",
          "쁘띠·주사시술"
        ]
      },
      {
        "name": "오예진",
        "title": "부원장",
        "spec": [
          "대한미용학회 정회원",
          "피부·수광",
          "스킨부스터"
        ]
      }
    ],
    "thumb": "hthumb/reberry.jpg"
  },
  {
    "name": {
      "kr": "원진성형외과피부과의원",
      "en": "Wonjin Plastic Surgery & Dermatology",
      "zh": "原辰整形外科皮肤科"
    },
    "dept": {
      "kr": "성형외과/피부과/줄기세포",
      "en": "Plastic Surgery / Dermatology / Stem Cell",
      "zh": "整形外科/皮肤科/干细胞"
    },
    "cat": "피부·성형",
    "badge": "BEST",
    "treats": {
      "kr": [
        "눈",
        "코",
        "윤곽",
        "양악",
        "가슴",
        "줄기세포"
      ],
      "en": [
        "Eye",
        "Nose",
        "Contouring",
        "Jaw",
        "Breast",
        "Stem Cell"
      ],
      "zh": [
        "眼部",
        "鼻部",
        "轮廓",
        "正颌",
        "胸部",
        "干细胞"
      ]
    },
    "hours": "Mon-Thu 09:30-19:00 / Fri 09:30-20:00 / Sat 09:30-17:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "원진성형외과피부과의원은 강남 종합 의료미용 병원으로 눈·코 수술, 안면윤곽, 양악수술, 줄기세포 등 전방위 서비스를 제공합니다.",
      "en": "Wonjin Plastic Surgery & Dermatology is a comprehensive medical aesthetic hospital in Gangnam offering eye/nose surgery, contouring, jaw surgery, breast surgery and stem cell treatments.",
      "zh": "原辰整形外科皮肤科是首尔江南的综合医美医院，提供整形外科、皮肤科及干细胞治疗。拥有眼鼻手术、面部轮廓、正颌手术及隆胸等全方位服务，中文服务完善，全程专属顾问陪同。"
    },
    "doctors": [
      {
        "name": "강문석",
        "title": "원장",
        "spec": [
          "코",
          "리프팅",
          "윤곽"
        ]
      },
      {
        "name": "강진석",
        "title": "원장",
        "spec": [
          "눈",
          "리프팅"
        ]
      },
      {
        "name": "김규희",
        "title": "원장",
        "spec": [
          "눈",
          "체형",
          "가슴",
          "리프팅"
        ]
      },
      {
        "name": "김승민",
        "title": "원장",
        "spec": [
          "눈",
          "코",
          "리프팅"
        ]
      },
      {
        "name": "김영은",
        "title": "원장",
        "spec": [
          "눈",
          "가슴",
          "체형",
          "리프팅",
          "여성성형"
        ]
      },
      {
        "name": "김용배",
        "title": "원장",
        "spec": [
          "눈",
          "재건"
        ]
      },
      {
        "name": "김지안",
        "title": "원장",
        "spec": [
          "피부과"
        ]
      },
      {
        "name": "박성용",
        "title": "원장",
        "spec": [
          "피부과"
        ]
      },
      {
        "name": "박장우",
        "title": "원장",
        "spec": [
          "눈",
          "윤곽"
        ]
      },
      {
        "name": "박종철",
        "title": "원장",
        "spec": [
          "윤곽",
          "양악"
        ]
      },
      {
        "name": "손유리",
        "title": "원장",
        "spec": [
          "눈",
          "가슴"
        ]
      },
      {
        "name": "송그라메",
        "title": "원장",
        "spec": [
          "마취과"
        ]
      },
      {
        "name": "안창환",
        "title": "원장",
        "spec": [
          "눈",
          "코",
          "리프팅"
        ]
      },
      {
        "name": "오세영",
        "title": "원장",
        "spec": [
          "마취과"
        ]
      },
      {
        "name": "원기정",
        "title": "원장",
        "spec": [
          "체형"
        ]
      },
      {
        "name": "이선구",
        "title": "원장",
        "spec": [
          "가슴"
        ]
      },
      {
        "name": "이종석",
        "title": "원장",
        "spec": [
          "눈",
          "코",
          "리프팅"
        ]
      },
      {
        "name": "이혁재",
        "title": "원장",
        "spec": [
          "눈",
          "코",
          "리프팅"
        ]
      },
      {
        "name": "정대균",
        "title": "원장",
        "spec": [
          "눈",
          "코",
          "리프팅"
        ]
      },
      {
        "name": "최수경",
        "title": "원장",
        "spec": [
          "마취과"
        ]
      },
      {
        "name": "황윤주",
        "title": "원장",
        "spec": [
          "피부과"
        ]
      }
    ],
    "thumb": "hthumb/wonjin.jpg"
  },
  {
    "name": {
      "kr": "지유의원 (사적인아름다움)",
      "en": "GU Clinic (Private Beauty)",
      "zh": "GU医院（私密之美）"
    },
    "dept": {
      "kr": "리프팅/필러/줄기세포",
      "en": "Lifting / Filler / Stem Cell",
      "zh": "提升/填充/干细胞"
    },
    "cat": "줄기세포",
    "badge": "줄기세포",
    "treats": {
      "kr": [
        "리프팅",
        "필러",
        "보톡스",
        "줄기세포"
      ],
      "en": [
        "Lifting",
        "Filler",
        "Botox",
        "Stem Cell"
      ],
      "zh": [
        "提升",
        "填充",
        "肉毒素",
        "干细胞"
      ]
    },
    "hours": "Mon-Fri 10:30-21:00 / Sat-Sun 10:30-19:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "지유의원은 리프팅, 필러, 줄기세포 전문으로 오후 9시까지 연장 진료하며 주말에도 운영합니다.",
      "en": "GU Clinic specializes in lifting, filler, and stem cell therapy with extended hours until 9PM and weekend availability.",
      "zh": "GU医院专注于提升紧致、填充及干细胞疗法，营业时间延长至晚上9点，周末也营业，中文专属服务。"
    },
    "doctors": [
      {
        "name": "박기범",
        "title": "대표원장",
        "spec": [
          "미용의료 (대표)"
        ]
      },
      {
        "name": "박혜민",
        "title": "총괄원장",
        "spec": [
          "실리프팅",
          "레이저",
          "미용외과"
        ]
      },
      {
        "name": "정연성",
        "title": "총괄원장",
        "spec": [
          "성형외과 전문의",
          "필러",
          "미용성형"
        ]
      },
      {
        "name": "나윤채",
        "title": "줄기세포 센터장",
        "spec": [
          "가정의학과 전문의",
          "첨단재생의료"
        ]
      },
      {
        "name": "안광용",
        "title": "교육원장",
        "spec": [
          "레이저",
          "스킨부스터"
        ]
      },
      {
        "name": "김영민",
        "title": "교육원장",
        "spec": [
          "성형외과 전문의",
          "필러",
          "실리프팅"
        ]
      },
      {
        "name": "김선빈",
        "title": "원장",
        "spec": [
          "피부",
          "레이저",
          "리프팅",
          "필러"
        ]
      },
      {
        "name": "김진현",
        "title": "원장",
        "spec": [
          "피부미용",
          "비만",
          "쁘띠"
        ]
      },
      {
        "name": "원지명",
        "title": "원장",
        "spec": [
          "레이저",
          "미용성형",
          "비만"
        ]
      },
      {
        "name": "김민선",
        "title": "원장",
        "spec": [
          "레이저",
          "필러",
          "리프팅"
        ]
      },
      {
        "name": "김혁수",
        "title": "원장",
        "spec": [
          "쁘띠",
          "피부미용"
        ]
      },
      {
        "name": "김현탁",
        "title": "원장",
        "spec": [
          "미용성형레이저",
          "필러"
        ]
      },
      {
        "name": "이재관",
        "title": "원장",
        "spec": [
          "레이저",
          "필러"
        ]
      },
      {
        "name": "이건",
        "title": "원장",
        "spec": [
          "미용성형레이저"
        ]
      },
      {
        "name": "나용규",
        "title": "원장",
        "spec": [
          "미용성형레이저"
        ]
      },
      {
        "name": "윤도혁",
        "title": "원장",
        "spec": [
          "미용성형레이저",
          "필러"
        ]
      },
      {
        "name": "배재훈",
        "title": "원장",
        "spec": [
          "미용성형"
        ]
      },
      {
        "name": "정우석",
        "title": "원장",
        "spec": [
          "미용성형레이저",
          "미용외과"
        ]
      },
      {
        "name": "김보영",
        "title": "원장",
        "spec": [
          "미용성형레이저"
        ]
      },
      {
        "name": "이종은",
        "title": "원장",
        "spec": [
          "모발이식",
          "레이저",
          "영양의학"
        ]
      },
      {
        "name": "정환호",
        "title": "원장",
        "spec": [
          "마취통증의학과 전문의",
          "비만"
        ]
      },
      {
        "name": "김주훈",
        "title": "원장",
        "spec": [
          "일반외과 전문의",
          "필러",
          "레이저"
        ]
      },
      {
        "name": "이가희",
        "title": "원장",
        "spec": [
          "가정의학과 전문의",
          "비만",
          "기능의학"
        ]
      },
      {
        "name": "양재우",
        "title": "원장",
        "spec": [
          "레이저",
          "미용성형"
        ]
      },
      {
        "name": "박종원",
        "title": "원장",
        "spec": [
          "방사선종양학과 전문의",
          "미용레이저"
        ]
      },
      {
        "name": "김현아",
        "title": "원장",
        "spec": [
          "가정의학과 전문의",
          "레이저",
          "피부"
        ]
      },
      {
        "name": "한창현",
        "title": "원장",
        "spec": [
          "미용의료"
        ]
      },
      {
        "name": "황제완",
        "title": "자문의",
        "spec": [
          "레이저",
          "임상자문"
        ]
      },
      {
        "name": "박세현",
        "title": "자문의",
        "spec": [
          "피부과 전문의",
          "피부"
        ]
      }
    ],
    "thumb": "hthumb/gu.jpg"
  },
  {
    "name": {
      "kr": "신상성형외과",
      "en": "Shinsang Plastic Surgery",
      "zh": "新常整形外科"
    },
    "dept": {
      "kr": "성형외과/피부",
      "en": "Plastic Surgery / Skin",
      "zh": "整形外科/皮肤"
    },
    "cat": "피부·성형",
    "treats": {
      "kr": [
        "이중턱",
        "거상",
        "눈",
        "코",
        "지방흡입"
      ],
      "en": [
        "Double Chin",
        "Lifting",
        "Eye",
        "Nose",
        "Liposuction"
      ],
      "zh": [
        "双下巴",
        "面部提升",
        "眼部",
        "鼻部",
        "吸脂"
      ]
    },
    "hours": "Mon-Thu 11:00-19:00 / Fri 11:00-21:00 / Sat 11:00-17:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "신상성형외과는 강남팔로우 핵심 제휴 병원으로 눈·코 수술, 거상술, 쁘띠 시술을 전문으로 합니다.",
      "en": "Shinsang Plastic Surgery is a core Gangnam Follow partner clinic specializing in eye/nose surgery, face lifting, and petit treatments.",
      "zh": "新常整形外科是江南FOLLOW最核心的合作医院，拥有多位专属医生团队，擅长眼鼻手术、面部提升及各种注射项目。"
    },
    "doctors": [
      {
        "name": "이영재",
        "title": "대표원장",
        "spec": [
          "성형외과",
          "안면거상·리프팅"
        ]
      },
      {
        "name": "김재희",
        "title": "원장",
        "spec": [
          "성형외과",
          "미용성형"
        ]
      },
      {
        "name": "어필선",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "최서길",
        "title": "원장",
        "spec": [
          "성형외과",
          "안면윤곽"
        ]
      },
      {
        "name": "윤형우",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "도경현",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "윤현식",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "정윤조",
        "title": "원장",
        "spec": [
          "가정의학",
          "피부·쁘띠"
        ]
      },
      {
        "name": "오예지",
        "title": "원장",
        "spec": [
          "미용성형레이저",
          "피부"
        ]
      },
      {
        "name": "김지훈",
        "title": "원장",
        "spec": [
          "성형외과",
          "미용성형"
        ]
      },
      {
        "name": "김아라",
        "title": "원장",
        "spec": [
          "피부"
        ]
      },
      {
        "name": "김진현",
        "title": "원장",
        "spec": [
          "재활의학과 전문의"
        ]
      },
      {
        "name": "이규원",
        "title": "원장",
        "spec": [
          "마취과"
        ]
      }
    ],
    "thumb": "hthumb/shinsang.jpg"
  },
  {
    "name": {
      "kr": "드림성형외과",
      "en": "Dream Plastic Surgery",
      "zh": "Dream整形外科"
    },
    "dept": {
      "kr": "성형외과",
      "en": "Plastic Surgery",
      "zh": "整形外科"
    },
    "cat": "피부·성형",
    "badge": "추천",
    "treats": {
      "kr": [
        "눈",
        "코",
        "양악",
        "가슴"
      ],
      "en": [
        "Eye",
        "Nose",
        "Jaw",
        "Breast"
      ],
      "zh": [
        "眼部",
        "鼻部",
        "正颌",
        "胸部"
      ]
    },
    "hours": "Mon-Fri 09:30-19:00 / Sat 09:30-17:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "드림성형외과는 눈·코 성형, 양악수술, 가슴성형 전문 병원입니다.",
      "en": "Dream Plastic Surgery specializes in eye/nose surgery, jaw surgery, and breast augmentation.",
      "zh": "Dream整形外科专注于眼鼻整形、正颌手术及隆胸手术，以精细的技术和自然的术后效果著称。"
    },
    "doctors": [
      {
        "name": "박양수",
        "title": "대표원장",
        "spec": [
          "성형외과 전문의",
          "눈·코성형",
          "지방이식"
        ]
      },
      {
        "name": "김영준",
        "title": "원장",
        "spec": [
          "성형외과 전문의",
          "윤곽·눈·코성형"
        ]
      },
      {
        "name": "유원재",
        "title": "원장",
        "spec": [
          "성형외과 전문의",
          "안티에이징",
          "눈·코성형"
        ]
      },
      {
        "name": "유안나",
        "title": "원장",
        "spec": [
          "성형외과 전문의",
          "눈·코성형"
        ]
      },
      {
        "name": "박이현",
        "title": "원장",
        "spec": [
          "성형외과 전문의",
          "눈·코성형",
          "안면윤곽"
        ]
      },
      {
        "name": "조승우",
        "title": "원장",
        "spec": [
          "성형외과 전문의",
          "눈·코·가슴·체형성형"
        ]
      },
      {
        "name": "배한솔",
        "title": "원장",
        "spec": [
          "성형외과 전문의",
          "눈·코성형",
          "리프팅"
        ]
      },
      {
        "name": "강지원",
        "title": "원장",
        "spec": [
          "성형외과 전문의",
          "눈·코성형",
          "지방흡입"
        ]
      }
    ],
    "thumb": "hthumb/dream.jpg"
  },
  {
    "name": {
      "kr": "바른길산부인과",
      "en": "Barunhifu Women's Clinic",
      "zh": "正路妇科医院"
    },
    "dept": {
      "kr": "여성의학",
      "en": "Women's Health",
      "zh": "女性医学"
    },
    "cat": "여성의학",
    "badge": "여성의학",
    "treats": {
      "kr": [
        "자궁하이푸",
        "소음순 교정",
        "음핵리프팅"
      ],
      "en": [
        "Uterine HIFU",
        "Labiaplasty",
        "Clitoral Lifting"
      ],
      "zh": [
        "子宫海扶刀",
        "阴唇整形",
        "阴蒂提升"
      ]
    },
    "hours": "Mon-Fri 09:00-18:00 / Sat 09:00-14:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "바른길산부인과는 자궁하이푸, 소음순 교정 등 여성 의료미용 서비스 전문 병원입니다.",
      "en": "Barunhifu Women's Clinic specializes in gynecological procedures including uterine HIFU and labiaplasty.",
      "zh": "正路妇科医院专注于女性妇科手术，提供子宫海扶刀、阴唇整形等专业服务。"
    },
    "doctors": [
      {
        "name": "길기현",
        "title": "원장(대표)",
        "spec": [
          "산부인과",
          "HIFU센터",
          "자궁보존",
          "여성성형"
        ]
      }
    ],
    "thumb": "hthumb/barunhifu.jpg"
  },
  {
    "name": {
      "kr": "닥터스피부과의원 신사본점",
      "en": "Doctors Dermatology (Sinsa)",
      "zh": "Doctors皮肤科 (新沙本店)"
    },
    "dept": {
      "kr": "피부과(리프팅)",
      "en": "Dermatology (Lifting)",
      "zh": "皮肤科(提升)"
    },
    "cat": "피부·성형",
    "badge": "NEW",
    "treats": {
      "kr": [
        "울쎄라·써마지",
        "소프웨이브·XERF",
        "스킨부스터",
        "보톡스·필러",
        "줄기세포"
      ],
      "en": [
        "Ulthera·Thermage",
        "Sofwave·XERF",
        "Skin Booster",
        "Botox·Filler",
        "Stem Cell"
      ],
      "zh": [
        "超声刀·热玛吉",
        "索夫波·XERF",
        "水光针",
        "肉毒·玻尿酸",
        "干细胞"
      ]
    },
    "hours": "평일 09:30-15:30 / 일요일 진료 / 공휴일 휴진",
    "loc": {
      "ko": "서울 강남 (신사)",
      "zh": "首尔江南(新沙)",
      "en": "Sinsa, Gangnam, Seoul"
    },
    "overview": {
      "kr": "닥터스피부과 신사본점은 \"리프팅은 닥터스\"로 알려진 리프팅 특화 피부과로, 성현철 대표원장을 중심으로 울쎄라·써마지·소프웨이브·XERF·덴시티·ONDA·티타늄 리프팅과 스킨부스터·보톡스·필러·줄기세포를 진료합니다.",
      "en": "Doctors Dermatology Sinsa, known for lifting, led by Dr. Sung Hyun-chul, offers Ulthera, Thermage, Sofwave, XERF, Density, ONDA and titanium lifting plus skin boosters, botox, filler and stem cell therapy.",
      "zh": "Doctors皮肤科(新沙本店)是以提升闻名的皮肤科, 由成炫哲代表院长主诊, 提供超声刀·热玛吉·索夫波·XERF·Density·ONDA·钛提升等提升及水光针·肉毒·玻尿酸·干细胞, 中文接待。"
    },
    "doctors": [
      {
        "name": "성현철",
        "title": "대표원장",
        "spec": [
          "피부과 전문의",
          "리프팅",
          "명품 울쎄라·스컬트라"
        ]
      },
      {
        "name": "오영주",
        "title": "원장",
        "spec": [
          "피부과",
          "디자인 리프팅"
        ]
      }
    ],
    "thumb": "hthumb/doctors.jpg"
  },
  {
    "name": {
      "kr": "히어피부과",
      "en": "Heer Dermatology",
      "zh": "Heer皮肤科"
    },
    "dept": {
      "kr": "피부/리프팅",
      "en": "Skin / Lifting",
      "zh": "皮肤/提升"
    },
    "cat": "피부·성형",
    "badge": "피부전문",
    "treats": {
      "kr": [
        "리프팅",
        "수액테라피"
      ],
      "en": [
        "Lifting",
        "IV Therapy"
      ],
      "zh": [
        "提升",
        "水光疗法"
      ]
    },
    "hours": "Mon-Fri 10:00-19:00 / Sat 09:30-15:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "히어피부과는 리프팅과 수액테라피 전문 피부과입니다.",
      "en": "Heer Dermatology specializes in skin lifting and IV therapy.",
      "zh": "Heer皮肤科专注于皮肤提升和水光疗法。"
    },
    "doctors": [
      {
        "name": "이상신",
        "title": "대표원장",
        "spec": [
          "피부과"
        ]
      },
      {
        "name": "정유석",
        "title": "원장",
        "spec": [
          "피부과"
        ]
      }
    ],
    "thumb": "hthumb/heerskin.jpg"
  },
  {
    "name": {
      "kr": "청담서클의원",
      "en": "Cheongdam Circle Clinic",
      "zh": "清潭Circle医院"
    },
    "dept": {
      "kr": "리프팅/안면교정",
      "en": "Lifting / Facial Correction",
      "zh": "提升/面部矫正"
    },
    "cat": "피부·성형",
    "badge": "NEW",
    "treats": {
      "kr": [
        "엘란세",
        "실루엣소프트",
        "안면교정"
      ],
      "en": [
        "Ellanse",
        "Silhouette Soft",
        "Facial Correction"
      ],
      "zh": [
        "Ellanse",
        "Silhouette Soft",
        "面部矫正"
      ]
    },
    "hours": "Mon-Fri 10:00-19:00 (Fri 20:00)",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "청담서클의원은 엘란세, 실루엣소프트, 안면교정 전문 의원입니다.",
      "en": "Cheongdam Circle Clinic specializes in Ellanse filler and Silhouette Soft thread lifting.",
      "zh": "清潭Circle医院专注于Ellanse长效填充和Silhouette Soft线雕提升。"
    },
    "doctors": [
      {
        "name": "서희원",
        "title": "대표원장",
        "spec": [
          "가정의학과 전문의",
          "비만·미용",
          "리프팅"
        ]
      },
      {
        "name": "손효경",
        "title": "원장",
        "spec": [
          "리프팅·레이저",
          "미용성형레이저"
        ]
      },
      {
        "name": "박영윤",
        "title": "원장",
        "spec": [
          "비만전문",
          "미용"
        ]
      }
    ],
    "thumb": "hthumb/cheongdamcircle.jpg"
  },
  {
    "name": {
      "kr": "벤자민의원",
      "en": "Benjamin Clinic",
      "zh": "Benjamin医院"
    },
    "dept": {
      "kr": "리프팅/흉터",
      "en": "Lifting / Scar",
      "zh": "提升/疤痕"
    },
    "cat": "피부·성형",
    "badge": "전문",
    "treats": {
      "kr": [
        "리프팅",
        "흉터치료"
      ],
      "en": [
        "Lifting",
        "Scar Treatment"
      ],
      "zh": [
        "提升",
        "疤痕治疗"
      ]
    },
    "hours": "Mon-Fri 10:30-20:00 / Sat 10:30-16:30",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "벤자민의원은 리프팅과 흉터치료 전문 의원입니다.",
      "en": "Benjamin Clinic specializes in lifting and scar treatment.",
      "zh": "Benjamin医院专注于提升和疤痕治疗。"
    },
    "doctors": [
      {
        "name": "심준호",
        "title": "대표원장",
        "spec": [
          "피부과 전문의"
        ]
      },
      {
        "name": "신동민",
        "title": "원장",
        "spec": [
          "피부과 전문의"
        ]
      },
      {
        "name": "장동휘",
        "title": "원장",
        "spec": [
          "피부과 전문의"
        ]
      }
    ],
    "thumb": "hthumb/benjamin.jpg"
  },
  {
    "name": {
      "kr": "강남아이원스안과의원",
      "en": "EYEONCE Eye Clinic Gangnam",
      "zh": "江南EYEONCE眼科"
    },
    "dept": {
      "kr": "안과",
      "en": "Ophthalmology",
      "zh": "眼科"
    },
    "cat": "안과",
    "badge": "NEW",
    "treats": {
      "kr": [
        "스마일프로·스마일라식",
        "원데이라식·투데이라섹",
        "ICL 렌즈삽입술",
        "노안·백내장",
        "안구건조증 IPL"
      ],
      "en": [
        "SMILE Pro & SMILE LASIK",
        "One-Day LASIK·LASEK",
        "ICL Implantation",
        "Presbyopia·Cataract",
        "Dry-Eye IPL"
      ],
      "zh": [
        "SMILE Pro·全飞秒",
        "One-Day半飞秒·LASEK",
        "ICL晶体植入",
        "老花·白内障",
        "干眼症IPL"
      ]
    },
    "hours": "평일 09:00~18:00 · 금 ~20:00(야간 예약) · 토 ~16:00 · 수/일/공휴일 휴진",
    "loc": {
      "ko": "서울 서초구 사평대로 368, 5·6층 (신논현역)",
      "zh": "首尔新论岘站(教保大厦旁)",
      "en": "Sinnonhyeon, Seoul"
    },
    "overview": {
      "kr": "강남아이원스안과는 신논현역 교보타워 인근(사평대로 368, 5~6층)의 시력교정·노안백내장 전문 안과입니다. 스마일프로·스마일라식·원데이라식·투데이라섹·ICL 렌즈삽입술과 안구건조증 IPL 치료를 진행하며, 모든 수술 전 정밀 안검진(검진비 별도)을 시행합니다. 원내 통역이 상주해 외국인 환자도 편하게 진료받을 수 있습니다. (수·일요일 휴진, 금요일 야간 예약진료)",
      "en": "EYEONCE Eye Clinic Gangnam, near Sinnonhyeon Station (5-6F, 368 Sapyeong-daero), specializes in vision correction and presbyopia-cataract care — SMILE Pro, SMILE LASIK, One-Day LASIK, Two-Day LASEK, ICL implantation and IPL dry-eye treatment. A precision eye exam (separate fee) precedes every surgery, and an in-house interpreter supports international patients. (Closed Wed/Sun; Friday evenings by appointment)",
      "zh": "江南EYEONCE眼科位于新论岘站教保大厦旁(思平大路368，5~6层)，专注视力矫正与老花·白内障——SMILE Pro微创全飞秒、SMILE全飞秒、One-Day全激光LASIK、Two-Day LASEK、ICL晶体植入及干眼症IPL治疗。所有手术前进行精密眼科检查(检查费另计)，院内常驻翻译，外国患者就诊无忧。(周三·周日休诊，周五夜间需预约)"
    },
    "doctors": [
      {
        "name": "백동원",
        "title": "대표원장",
        "spec": [
          "안과"
        ]
      }
    ],
    "thumb": "hthumb/eyeonce.jpg"
  },
  {
    "name": {
      "kr": "VC성형외과의원",
      "en": "VC Plastic Surgery",
      "zh": "VC整形外科"
    },
    "dept": {
      "kr": "성형외과/피부/줄기세포",
      "en": "Plastic Surgery / Skin / Stem Cell",
      "zh": "整形外科/皮肤/干细胞"
    },
    "cat": "피부·성형/줄기세포",
    "badge": "프리미엄",
    "treats": {
      "kr": [
        "이중턱 재배치",
        "눈밑 재배치",
        "하안검·중안면거상",
        "지방흡입",
        "줄기세포"
      ],
      "en": [
        "Double Chin Contouring",
        "Under-eye Repositioning",
        "Lower Blepharoplasty & Midface Lift",
        "Liposuction",
        "Stem Cell"
      ],
      "zh": [
        "双下巴重塑",
        "眼下重塑",
        "下眼睑·中面部提升",
        "吸脂",
        "干细胞"
      ]
    },
    "hours": "Mon/Thu 10:00-19:00 / Tue/Fri 10:00-20:00 / Sat 10:00-16:30 / Wed Closed",
    "loc": {
      "ko": "서울 압구정",
      "zh": "首尔狎鸥亭",
      "en": "Apgujeong, Seoul"
    },
    "overview": {
      "kr": "VC성형외과의원은 압구정에 위치한 프라이빗 성형외과로, 성형외과 전문의가 상담부터 수술까지 직접 담당하며 피부·에스테틱 관리를 한 공간에서 함께 제공합니다.",
      "en": "VC Plastic Surgery in Apgujeong is a private clinic where a board-certified plastic surgeon handles consultation through surgery, with skin and esthetic care available in the same space.",
      "zh": "VC整形外科位于狎鸥亭，是一对一私密诊疗的整形外科，由整形外科专科医生亲自负责咨询与手术，并在同一空间内提供皮肤及美容管理服务。"
    },
    "doctors": [
      {
        "name": "최민석",
        "title": "대표원장",
        "spec": [
          "성형외과 전문의"
        ]
      }
    ],
    "thumb": "hthumb/vcps.jpg"
  },
  {
    "name": {
      "kr": "KMI한국의학연구소 강남센터",
      "en": "KMI Korea Medical Institute (Gangnam)",
      "zh": "KMI韩国医学研究所 江南中心"
    },
    "dept": {
      "kr": "건강검진",
      "en": "Health Checkup",
      "zh": "健康体检"
    },
    "cat": "검진",
    "badge": "검진전문",
    "treats": {
      "kr": [
        "종합검진",
        "외국인 검진",
        "정밀검진"
      ],
      "en": [
        "Comprehensive Checkup",
        "Checkup for Foreigners",
        "Advanced Screening"
      ],
      "zh": [
        "综合体检",
        "外籍人士体检",
        "精密体检"
      ]
    },
    "hours": "Mon/Tue/Thu/Fri 07:00-16:00 / Wed/Sat 07:00-12:30",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "KMI한국의학연구소 강남센터는 선릉역 인근 건강검진 전문기관으로, 외국인 전용 검진 프로그램을 운영하며 영어·중국어·일본어·몽골어 응대가 가능합니다.",
      "en": "KMI Korea Medical Institute Gangnam Center, near Seolleung Station, runs dedicated health checkup programs for international visitors with English, Chinese, Japanese and Mongolian support.",
      "zh": "KMI韩国医学研究所江南中心位于宣陵站附近，设有面向外籍人士的体检项目，可提供中文、英文、日文、蒙古语接待。"
    },
    "doctors": [],
    "thumb": "hthumb/kmi.jpg"
  },
  {
    "name": {
      "kr": "강남스마트신경과의원",
      "en": "Gangnam Smart Neurology",
      "zh": "江南SMART神经内科"
    },
    "dept": {
      "kr": "신경과",
      "en": "Neurology",
      "zh": "神经内科"
    },
    "cat": "신경과",
    "badge": "신경과전문",
    "treats": {
      "kr": [
        "어지럼증",
        "저림·떨림",
        "자율신경",
        "수면"
      ],
      "en": [
        "Dizziness",
        "Numbness & Tremor",
        "Autonomic Nerve",
        "Sleep"
      ],
      "zh": [
        "神经内科",
        "内科",
        "自主神经门诊",
        "睡眠门诊"
      ]
    },
    "hours": "Mon-Fri 10:00-20:00 / Sat 10:00-15:00 / Sun Closed",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "강남스마트신경과의원은 강남대로에 위치한 신경과로 어지럼증·저림·떨림·자율신경·수면 클리닉을 운영합니다.",
      "en": "Gangnam Smart Neurology on Gangnam-daero runs clinics for dizziness, numbness and tremor, autonomic nerve conditions and sleep.",
      "zh": "江南SMART神经内科位于江南大路，设有神经内科及内科专科医生门诊。"
    },
    "doctors": [
      {
        "name": "권하님",
        "title": "대표원장",
        "spec": [
          "신경과 전문의"
        ]
      },
      {
        "name": "손형곤",
        "title": "대표원장",
        "spec": [
          "내과 전문의"
        ]
      },
      {
        "name": "서진영",
        "title": "대표원장",
        "spec": [
          "신경과 전문의"
        ]
      }
    ],
    "thumb": "hthumb/gnsmart.jpg"
  },
  {
    "name": {
      "kr": "지우의원",
      "en": "JIWOO Clinic",
      "zh": "挚友医院"
    },
    "dept": {
      "kr": "피부과",
      "en": "Dermatology",
      "zh": "皮肤科"
    },
    "cat": "피부·성형",
    "badge": "NEW",
    "treats": {
      "kr": [
        "리쥬란",
        "울쎄라 PRIME",
        "써마지 FLX",
        "포텐자",
        "피코레이저"
      ],
      "en": [
        "Rejuran",
        "Ultherapy PRIME",
        "Thermage FLX",
        "Potenza",
        "Pico Laser"
      ],
      "zh": [
        "Rejuran",
        "Ultherapy PRIME",
        "热玛吉FLX",
        "Potenza",
        "皮秒激光"
      ]
    },
    "hours": "Mon-Thu 10:00-19:00 / Fri 10:00-20:00 / Sat 09:30-16:30 (Lunch 13:30-14:30)",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "지우의원(JIWOO Clinic)은 강남역 인근에 위치한 피부과로 리쥬란, 울쎄라 PRIME, 써마지 FLX, 포텐자, 피코레이저 등 피부 시술을 전문으로 합니다.",
      "en": "JIWOO Clinic, near Gangnam Station, specializes in dermatology treatments including Rejuran, Ultherapy PRIME, Thermage FLX, Potenza, and pico laser.",
      "zh": "挚友医院（JIWOO Clinic）位于江南站附近，专注于Rejuran、Ultherapy、热玛吉FLX、Potenza及皮秒激光等皮肤管理项目。"
    },
    "doctors": [
      {
        "name": "김회원",
        "title": "대표원장",
        "spec": [
          "피부과"
        ]
      },
      {
        "name": "김우형",
        "title": "원장",
        "spec": [
          "피부과"
        ]
      },
      {
        "name": "조임철",
        "title": "원장",
        "spec": [
          "피부과"
        ]
      }
    ],
    "thumb": "hthumb/jiwoo.jpg"
  },
  {
    "name": {
      "kr": "온오프피부과의원",
      "en": "ONOFF Dermatology Clinic",
      "zh": "ONOFF皮肤科"
    },
    "dept": {
      "kr": "피부과",
      "en": "Dermatology",
      "zh": "皮肤科"
    },
    "cat": "피부·성형",
    "badge": "NEW",
    "treats": {
      "kr": [
        "울쎄라",
        "써마지",
        "소프웨이브",
        "리프팅"
      ],
      "en": [
        "Ulthera",
        "Thermage",
        "Sofwave",
        "Lifting"
      ],
      "zh": [
        "超声刀",
        "热玛吉",
        "索夫波",
        "提升"
      ]
    },
    "hours": "예약제 (진료시간 문의)",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "온오프피부과의원은 울쎄라, 써마지, 소프웨이브 등 리프팅 시술을 대표로 하는 피부과입니다.",
      "en": "ONOFF Dermatology Clinic specializes in lifting treatments such as Ulthera, Thermage and Sofwave.",
      "zh": "ONOFF皮肤科以超声刀、热玛吉、索夫波等提升类抗衰项目为特色。"
    },
    "doctors": [],
    "thumb": "hthumb/onoff.jpg"
  },
  {
    "name": {
      "kr": "포브의원",
      "en": "PO:VE Clinic",
      "zh": "PO:VE皮肤科"
    },
    "dept": {
      "kr": "피부과 (프라이빗 리프팅)",
      "en": "Dermatology (Private Lifting Clinic)",
      "zh": "皮肤科 (私密提升诊疗)"
    },
    "cat": "피부·성형",
    "badge": "NEW",
    "treats": {
      "kr": [
        "울쎄라·소프웨이브·써마지",
        "스킨부스터·콜라겐부스터",
        "보톡스·필러",
        "바디·웰니스 수액"
      ],
      "en": [
        "Ulthera·Sofwave·Thermage",
        "Skin & Collagen Boosters",
        "Botox & Filler",
        "Body Care & Wellness IV"
      ],
      "zh": [
        "Ulthera·Sofwave·Thermage提升",
        "皮肤·胶原蛋白助推",
        "肉毒·玻尿酸",
        "身体管理·营养输液"
      ]
    },
    "hours": "Mon/Tue/Fri 10:00-19:00 / Thu 10:00-21:00 / Sat 10:00-17:00 (Wed·Sun Closed)",
    "loc": {
      "ko": "서울 강남구 언주로",
      "zh": "首尔江南区·彦州路",
      "en": "Eonju-ro, Gangnam, Seoul"
    },
    "overview": {
      "kr": "포브의원은 강남 언주로에 2026년 9월 개원한 프라이빗 피부과입니다. \"Pain Off, Private On\" 콘셉트로 통증 완화 프로토콜과 마주치지 않는 동선을 갖췄으며, 원장이 직접 진단·시술하는 울쎄라·소프웨이브·써마지 리프팅과 VIP 전용 공간을 운영합니다.",
      "en": "PO:VE Clinic, opened in September 2026 on Eonju-ro in Gangnam, is a private dermatology clinic built around \"Pain Off, Private On\" — pain-managed protocols, a no-crossing private flow, and doctor-led Ulthera, Sofwave and Thermage lifting with a dedicated VIP suite.",
      "zh": "PO:VE皮肤科于2026年9月在江南彦州路开业，以\"Pain Off, Private On\"为理念，注重疼痛管理与不与他人照面的私密动线，由院长亲自问诊并进行Ulthera、Sofwave、Thermage等提升项目，设有VIP专属空间。"
    },
    "doctors": [
      {
        "name": "하재선",
        "title": "대표원장",
        "spec": [
          "가정의학과 전문의"
        ]
      }
    ],
    "thumb": "hthumb/pove.jpg"
  },
  {
    "name": {
      "kr": "차이성형외과",
      "en": "CHAI Plastic Surgery",
      "zh": "CHAI整形外科"
    },
    "dept": {
      "kr": "성형외과 (눈·코 특화)",
      "en": "Plastic Surgery (Eye & Nose)",
      "zh": "整形外科 (眼鼻特化)"
    },
    "cat": "피부·성형",
    "badge": "NEW",
    "treats": {
      "kr": [
        "쌍꺼풀·눈매교정·트임",
        "상·하안검·눈썹거상",
        "코성형·재수술",
        "리쥬란·보톡스·실리프팅"
      ],
      "en": [
        "Double Eyelid & Eye Shape",
        "Blepharoplasty & Brow Lift",
        "Rhinoplasty & Revision",
        "Rejuran·Botox·Thread Lifting"
      ],
      "zh": [
        "双眼皮·眼型矫正·开眼角",
        "上/下眼睑·提眉",
        "鼻整形·修复手术",
        "丽珠兰·肉毒·线雕提升"
      ]
    },
    "hours": "Mon-Sat / Sun·Holiday Closed",
    "loc": {
      "ko": "서울 강남구 강남대로 406 (강남역)",
      "zh": "首尔江南区·江南大路406 (江南站)",
      "en": "406 Gangnam-daero, Seoul (Gangnam Stn.)"
    },
    "overview": {
      "kr": "차이성형외과는 강남역 인근의 눈·코 성형 특화 의원입니다. \"실력의 차이가 결과의 차이\"를 슬로건으로 최승호 대표원장이 직접 상담·집도하며, 쌍꺼풀·눈매교정·상하안검과 코 성형·재수술, 리쥬란·보톡스·실리프팅 등 시술을 함께 운영합니다.",
      "en": "CHAI Plastic Surgery, near Gangnam Station, specializes in eye and nose surgery. Under the motto \"the difference in skill makes the difference in results\", director Choi Seung-ho personally consults and operates — double eyelid, canthoplasty, blepharoplasty, primary and revision rhinoplasty, plus Rejuran, Botox and thread lifting.",
      "zh": "CHAI整形外科位于江南站旁，专注眼部·鼻部整形。以\"实力的差异成就结果的差异\"为理念，由代表院长崔承浩亲自面诊与主刀，提供双眼皮·眼型矫正·上下眼睑手术、鼻整形与修复手术，以及丽珠兰·肉毒等皮肤项目。"
    },
    "doctors": [
      {
        "name": "최승호",
        "title": "대표원장",
        "spec": [
          "눈성형",
          "코성형·재수술"
        ]
      }
    ],
    "thumb": "hthumb/chai.jpg"
  },
  {
    "name": {
      "kr": "강남JS병원",
      "en": "Gangnam JS Hospital",
      "zh": "江南JS医院"
    },
    "dept": {
      "kr": "정형외과·신경외과",
      "en": "Orthopedics · Neurosurgery",
      "zh": "骨科·神经外科"
    },
    "cat": "정형·척추/줄기세포",
    "badge": "NEW",
    "treats": {
      "kr": [
        "줄기세포 연골재생",
        "척추내시경",
        "전방십자인대 재건",
        "BMAC 주사",
        "인공관절"
      ],
      "en": [
        "Stem Cell Cartilage Regeneration",
        "Endoscopic Spine Surgery",
        "ACL Reconstruction",
        "BMAC Injection",
        "Joint Surgery"
      ],
      "zh": [
        "干细胞软骨再生",
        "脊柱内镜",
        "前交叉韧带重建",
        "BMAC注射",
        "关节手术"
      ]
    },
    "hours": "Mon-Fri 09:00-18:00 / Sat 09:00-13:00",
    "loc": {
      "ko": "서울 강남구 도곡로 122",
      "zh": "首尔江南区·道谷路122",
      "en": "122 Dogok-ro, Gangnam, Seoul"
    },
    "overview": {
      "kr": "강남JS병원(Gangnam JS Hospital)은 강남 도곡로에 위치한 척추·관절 전문병원으로, 대표원장 송준섭을 중심으로 줄기세포 연골재생(카티스템), 척추내시경 수술, 스포츠 손상·관절 치료를 전문으로 하며 국제환자 전담 진료를 제공합니다.",
      "en": "Gangnam JS Hospital is a spine and joint specialty hospital in Dogok-ro, Gangnam, led by Dr. Song Jun-seob, specializing in stem cell cartilage regeneration (Cartistem), endoscopic spine surgery, and sports/joint treatment with a dedicated international patient service.",
      "zh": "江南JS医院（Gangnam JS Hospital）位于首尔江南道谷路，是脊柱·关节专科医院，专注于干细胞软骨再生（Cartistem）、脊柱内镜手术、运动损伤及关节治疗，设有国际患者专属诊疗服务。"
    },
    "doctors": [
      {
        "name": "송준섭",
        "title": "대표원장",
        "spec": [
          "정형외과 전문의"
        ]
      },
      {
        "name": "김나민",
        "title": "병원장",
        "spec": [
          "정형외과"
        ]
      }
    ],
    "thumb": "hthumb/gnjs.jpg"
  },
  {
    "name": {
      "kr": "연세안마취통증의학과",
      "en": "Yonsei An Pain Clinic",
      "zh": "延世安疼痛医学科"
    },
    "dept": {
      "kr": "마취통증의학과(비수술 통증치료)",
      "en": "Anesthesiology & Pain Medicine",
      "zh": "麻醉疼痛医学科(非手术治疗)"
    },
    "cat": "정형·척추",
    "badge": "NEW",
    "treats": {
      "kr": [
        "신경차단·하이드로디섹션",
        "도수치료",
        "체외충격파",
        "척추 감압치료",
        "PDRN·프롤로 주사"
      ],
      "en": [
        "Nerve Block & Hydrodissection",
        "Manual Therapy",
        "ESWT (Shockwave)",
        "Spinal Decompression",
        "PDRN & Prolotherapy"
      ],
      "zh": [
        "神经阻滞·神经水分离",
        "徒手治疗",
        "体外冲击波",
        "脊柱减压治疗",
        "PDRN·增生疗法注射"
      ]
    },
    "hours": "Mon/Wed/Fri 09:00-20:00 · Tue/Thu 09:00-18:00 · Sat 09:00-14:00",
    "loc": {
      "ko": "경기 부천시 소사구 경인로 511, 역곡유림빌딩 3층 (1호선 역곡역 1번 출구)",
      "zh": "京畿富川·驿谷站1号出口",
      "en": "Yeokgok, Bucheon (Line 1)"
    },
    "overview": {
      "kr": "연세안마취통증의학과(Yonsei An Pain Clinic)는 1호선 역곡역 1번 출구 앞 역곡유림빌딩 3층에 위치한 통증 전문 의원입니다. 통증의학과·신경외과·정형외과 의료진이 협진하며, 정밀 초진 평가(X-ray·뇌파·맥파 검사) 후 신경차단·도수치료·체외충격파·척추 감압 등 비수술 맞춤 치료를 제공합니다. 영어 의료통역이 상주하고 공항 픽업과 국제보험 청구 서류를 지원합니다.",
      "en": "Yonsei An Pain Clinic is a pain-medicine specialty clinic on the 3rd floor of Yeokgok Yurim Bldg., right by Exit 1 of Yeokgok Station (Line 1), Bucheon. A multidisciplinary team of pain medicine, neurosurgery and orthopedics provides non-surgical personalized care — nerve blocks, manual therapy, ESWT and spinal decompression — after a precise initial assessment. English medical interpreter on site; airport pickup and international insurance paperwork supported.",
      "zh": "延世安疼痛医学科（Yonsei An Pain Clinic）位于富川驿谷站1号出口旁驿谷儒林大厦3层，是疼痛专科医院。疼痛医学科·神经外科·骨科医生联合诊疗，经精密初诊评估（X光·脑电波·脉搏检查）后提供神经阻滞·徒手治疗·体外冲击波·脊柱减压等非手术个性化治疗。常驻英文医疗翻译，支持机场接机及国际保险理赔材料。"
    },
    "doctors": [
      {
        "name": "조남룡",
        "title": "대표원장",
        "spec": [
          "신경외과"
        ]
      },
      {
        "name": "김지웅",
        "title": "원장",
        "spec": [
          "통증의학"
        ]
      },
      {
        "name": "이지은",
        "title": "원장",
        "spec": [
          "마취통증의학과"
        ]
      },
      {
        "name": "송신미",
        "title": "원장",
        "spec": [
          "마취통증의학과"
        ]
      },
      {
        "name": "김계숙",
        "title": "원장",
        "spec": [
          "통증의학"
        ]
      },
      {
        "name": "이상은",
        "title": "원장",
        "spec": [
          "통증의학"
        ]
      },
      {
        "name": "최영서",
        "title": "원장",
        "spec": [
          "통증의학"
        ]
      },
      {
        "name": "박해리",
        "title": "원장",
        "spec": [
          "통증의학"
        ]
      },
      {
        "name": "최낙철",
        "title": "원장",
        "spec": [
          "통증의학"
        ]
      }
    ],
    "thumb": "hthumb/yonseian.jpg"
  },
  {
    "name": {
      "kr": "아도의원",
      "en": "ADO Clinic",
      "zh": "ADO皮肤科"
    },
    "dept": {
      "kr": "피부과(안티에이징·리프팅)",
      "en": "Dermatology (Anti-aging & Lifting)",
      "zh": "皮肤科(抗衰·提升)"
    },
    "cat": "피부·성형",
    "badge": "NEW",
    "treats": {
      "kr": [
        "울쎄라피 프라임·써마지 FLX",
        "스컬트라·리쥬란",
        "필러·보톡스",
        "줄기세포 프로그램",
        "온다·포텐자"
      ],
      "en": [
        "Ultherapy Prime & Thermage FLX",
        "Sculptra & Rejuran",
        "Filler & Botox",
        "Stem Cell Programs",
        "ONDA & Potenza"
      ],
      "zh": [
        "超声炮Prime·凤凰电波FLX",
        "童颜针·丽珠兰",
        "玻尿酸·肉毒素",
        "干细胞项目",
        "ONDA·黄金微针"
      ]
    },
    "hours": "Mon-Fri 10:30-21:00 · Sat/Holidays 10:30-19:00",
    "loc": {
      "ko": "서울 강남구 봉은사로 110, RDL타워 3~4층 (신논현역 4번출구)",
      "zh": "首尔江南·新论岘",
      "en": "Sinnonhyeon, Gangnam, Seoul"
    },
    "overview": {
      "kr": "아도의원(ADO Clinic)은 신논현역 4번 출구 앞 RDL타워 3~4층에 위치한 피부과로, 대표원장 박승원을 중심으로 울쎄라피 프라임·써마지 FLX·온다 등 리프팅과 스컬트라·리쥬란 등 재생 시술, 필러·보톡스, 줄기세포 프로그램까지 안티에이징 전 영역을 다룹니다. 부원장·대표원장 이원 진료 체계로 시그니처 시술을 운영하며, 홈페이지를 한·중 병기로 운영할 만큼 중국 환자 응대 경험이 풍부합니다. 평일 밤 9시까지 진료합니다.",
      "en": "ADO Clinic, on the 3rd-4th floors of RDL Tower by Exit 4 of Sinnonhyeon Station, is a dermatology clinic led by Dr. Park Seung-won. It covers the full anti-aging spectrum — Ultherapy Prime, Thermage FLX and ONDA lifting, Sculptra and Rejuran regenerative treatments, fillers, botox and stem-cell programs — with a two-tier system of associate and head-director signature procedures. The clinic runs a bilingual Korean-Chinese website and is open weekdays until 9pm.",
      "zh": "ADO皮肤科(아도의원)位于新论岘站4号出口旁RDL大厦3-4层，由代表院长朴承源主诊。涵盖超声炮Prime·凤凰电波FLX·ONDA提升、SCULPTRA童颜针·丽珠兰再生、玻尿酸·肉毒素及干细胞项目等全方位抗衰内容，设副院长/代表院长双轨诊疗与院长签名项目。官网中韩双语运营，中国顾客接待经验丰富，平日营业至晚9点。"
    },
    "doctors": [
      {
        "name": "박승원",
        "title": "대표원장",
        "spec": [
          "피부과"
        ]
      }
    ],
    "thumb": "hthumb/ado.jpg"
  },
  {
    "name": {
      "kr": "더봄 퍼스널컬러 메이크업 명동",
      "en": "The Bom Personal Color & Makeup",
      "zh": "The Bom个人色彩·妆容(明洞)"
    },
    "dept": {
      "kr": "퍼스널컬러·메이크업",
      "en": "Personal Color & Makeup",
      "zh": "个人色彩·妆容"
    },
    "cat": "기타 서비스",
    "badge": "NEW",
    "treats": {
      "kr": [
        "퍼스널컬러 진단",
        "메이크업",
        "퍼스널컬러+메이크업",
        "영·중·일 통역"
      ],
      "en": [
        "Personal Color Analysis",
        "Makeup",
        "Color + Makeup",
        "EN/CN/JP Interpreter"
      ],
      "zh": [
        "个人色彩诊断",
        "妆容",
        "个人色彩+妆容",
        "英·中·日翻译"
      ]
    },
    "hours": "",
    "loc": {
      "ko": "서울 중구 퇴계로18길 7 (명동)",
      "zh": "首尔明洞",
      "en": "Myeongdong, Seoul"
    },
    "overview": {
      "kr": "더봄 퍼스널컬러 메이크업 명동은 서울 명동(중구 퇴계로18길)에 위치한 퍼스널컬러·메이크업 스튜디오로, 1:1~그룹 퍼스널컬러 진단과 메이크업을 제공합니다. 영어·중국어·일본어 통역이 가능해 외국인 방문객도 편하게 이용할 수 있습니다.",
      "en": "The Bom Personal Color & Makeup, in Myeongdong, Seoul, offers 1:1 and group personal-color analysis and makeup, with English, Chinese and Japanese interpretation for international visitors.",
      "zh": "The Bom个人色彩·妆容(明洞)位于首尔明洞，提供1:1至小组个人色彩诊断与妆容服务，可提供英·中·日语翻译，方便外国访客预约。"
    },
    "doctors": [],
    "thumb": "hthumb/thebom.jpg"
  },
  {
    "name": {
      "kr": "보그헤어 홍대점",
      "en": "VOG HAIR Hongdae",
      "zh": "VOG HAIR 弘大"
    },
    "dept": {
      "kr": "헤어살롱(외국인·무슬림 프렌들리)",
      "en": "Hair Salon (Foreigner·Muslim-friendly)",
      "zh": "发廊(外国人·穆斯林友好)"
    },
    "cat": "기타 서비스",
    "badge": "NEW",
    "treats": {
      "kr": [
        "커트·펌·컬러",
        "헤어 클리닉",
        "헤드스파",
        "외국인 헤어 메이크오버",
        "프라이빗룸"
      ],
      "en": [
        "Cut·Perm·Color",
        "Hair Clinic",
        "Head Spa",
        "Foreigner Makeover",
        "Private Room"
      ],
      "zh": [
        "剪发·烫发·染发",
        "头发护理",
        "头皮SPA",
        "外国人造型改造",
        "私人包间"
      ]
    },
    "hours": "",
    "loc": {
      "ko": "서울 마포구 양화로18안길 7 (홍대·동교동)",
      "zh": "首尔弘大",
      "en": "Hongdae, Seoul"
    },
    "overview": {
      "kr": "보그헤어(VOG HAIR) 홍대는 서울 홍대(마포구 동교동)의 헤어살롱으로, 홍대점·홍대거리점·홍대라운지점 3개 지점을 운영합니다. 외국인 영어 응대·무슬림 프렌들리·프라이빗룸·헤드스파를 갖추고 커트·펌·컬러·클리닉과 외국인 메이크오버를 전문으로 합니다. 비건 제품을 보유합니다.",
      "en": "VOG HAIR Hongdae is a foreigner- and Muslim-friendly hair salon in Hongdae (Mapo), Seoul, with three branches, private rooms and head spa — cuts, perms, color, hair clinic and makeovers for international guests, with vegan products.",
      "zh": "VOG HAIR 弘大(보그헤어)是首尔弘大(麻浦区)的发廊，设弘大店·弘大街店·弘大Lounge店三家门店。外国人友好·穆斯林友好·私人包间·头皮SPA，专注剪发·烫发·染发·护理与外国人造型改造，持有纯素产品。"
    },
    "doctors": [],
    "thumb": "hthumb/vog.jpg"
  },
  {
    "name": {
      "kr": "스튜디오 숲 서울",
      "en": "Studio Soop Seoul",
      "zh": "Studio Soop 首尔"
    },
    "dept": {
      "kr": "반영구 메이크업 · 사진 스튜디오",
      "en": "Permanent Makeup · Photo Studio",
      "zh": "半永久定妆·摄影工作室"
    },
    "cat": "기타 서비스",
    "badge": "NEW",
    "treats": {
      "kr": [
        "반영구 눈썹(눈썹문신)",
        "애교살·아이라인 반영구",
        "BB 립블러쉬",
        "프로필 촬영",
        "화보 촬영",
        "커플·우정 스냅",
        "뷰티 스냅"
      ],
      "en": [
        "Eyebrow Tattoo (PMU Brows)",
        "Undereye & Eyeliner PMU",
        "BB Lip Blush",
        "Profile Shoots",
        "Editorial Shoots",
        "Couple & Friend Snaps",
        "Beauty Snaps"
      ],
      "zh": [
        "半永久纹眉",
        "卧蚕·美瞳线半永久",
        "BB唇定妆",
        "形象照拍摄",
        "写真拍摄",
        "情侣·闺蜜快照",
        "美妆快照"
      ]
    },
    "hours": "",
    "loc": {
      "ko": "서울",
      "zh": "首尔",
      "en": "Seoul"
    },
    "overview": {
      "kr": "스튜디오 숲 서울은 반영구 메이크업과 프로필·화보 촬영을 함께 운영하는 뷰티 스튜디오입니다. 눈썹문신(자연눈썹·쉐도우·아트브로우)과 애교살·아이라인·립블러쉬 반영구를 전문으로 하며, 시술 전후 기념 촬영, 여행 스냅 등 방한 일정에 맞춘 촬영을 예약제로 진행합니다.",
      "en": "Studio Soop Seoul is a beauty studio offering both permanent makeup and profile/editorial photography. It specializes in eyebrow tattoo (natural, shadow and art brows) plus undereye, eyeliner and lip-blush PMU, with photo sessions by reservation scheduled around your visit — including post-treatment portraits and travel snaps.",
      "zh": "Studio Soop首尔是集半永久定妆与形象照·写真拍摄于一体的美妆工作室。专注半永久纹眉(自然眉·雾眉·仿真眉)及卧蚕·美瞳线·BB唇定妆，拍摄采取预约制，可配合访韩行程安排，包括术后纪念照与旅行快照。"
    },
    "doctors": [],
    "thumb": "hthumb/studiosoop.jpg"
  },
  {
    "name": {
      "kr": "준오헤어 코엑스도심공항점",
      "en": "JUNO Hair COEX CALT",
      "zh": "JUNO Hair COEX都心机场店"
    },
    "dept": {
      "kr": "헤어살롱",
      "en": "Hair Salon",
      "zh": "美发沙龙"
    },
    "cat": "기타 서비스",
    "badge": "NEW",
    "treats": {
      "kr": [
        "컷·스타일링",
        "염색",
        "펌",
        "헤어 클리닉",
        "두피 스파"
      ],
      "en": [
        "Cut & Styling",
        "Color",
        "Perm",
        "Hair Clinic",
        "Scalp Spa"
      ],
      "zh": [
        "剪发造型",
        "染发",
        "烫发",
        "头发护理",
        "头皮SPA"
      ]
    },
    "hours": "",
    "loc": {
      "ko": "서울 강남구 테헤란로87길 36, 도심공항타워 B2층 B22호",
      "zh": "首尔三成·COEX",
      "en": "COEX, Samseong, Seoul"
    },
    "overview": {
      "kr": "준오헤어 코엑스도심공항점은 1982년 시작된 대한민국 대표 헤어 프랜차이즈 준오헤어의 코엑스 지점입니다. 컷·염색·펌·클리닉·두피 스파를 제공하며 매일 09:30~21:00 영업, 영어 상담이 가능해 외국인 고객이 이용하기 편리합니다.",
      "en": "JUNO Hair COEX CALT is the COEX branch of JUNO Hair, Korea’s leading hair franchise since 1982. Cut, color, perm, hair clinic and scalp spa — open daily 09:30-21:00, with English consultations available.",
      "zh": "JUNO Hair COEX都心机场店是1982年创立的韩国代表美发连锁JUNO Hair的COEX分店。提供剪·染·烫·护理·头皮SPA，每天09:30-21:00营业，可英文咨询，外国顾客使用便利。"
    },
    "doctors": [],
    "thumb": "hthumb/junocoex.jpg"
  },
  {
    "name": {
      "kr": "에코자뎅 코엑스 삼성점",
      "en": "ECO JARDIN COEX Samseong",
      "zh": "ECO JARDIN COEX三成店"
    },
    "dept": {
      "kr": "헤어살롱",
      "en": "Hair Salon",
      "zh": "美发沙龙"
    },
    "cat": "기타 서비스",
    "badge": "NEW",
    "treats": {
      "kr": [
        "컷·스타일링",
        "염색",
        "펌",
        "트리트먼트"
      ],
      "en": [
        "Cut & Styling",
        "Color",
        "Perm",
        "Treatment"
      ],
      "zh": [
        "剪发造型",
        "染发",
        "烫发",
        "护理"
      ]
    },
    "hours": "",
    "loc": {
      "ko": "서울 강남구 삼성동 코엑스",
      "zh": "首尔三成·COEX",
      "en": "COEX, Samseong, Seoul"
    },
    "overview": {
      "kr": "에코자뎅 코엑스 삼성점은 코엑스에 위치한 헤어살롱으로, 컷·염색·펌·트리트먼트를 제공합니다. 쇼핑·전시 일정과 함께 이용하기 좋은 접근성이 강점입니다.",
      "en": "ECO JARDIN COEX Samseong is a hair salon inside COEX offering cut, color, perm and treatments — easy to combine with shopping or exhibition schedules.",
      "zh": "ECO JARDIN COEX三成店位于COEX内，提供剪·染·烫·护理服务，可与购物·展会行程轻松衔接。"
    },
    "doctors": [],
    "thumb": "hthumb/ecojardin.jpg"
  },
  {
    "name": {
      "kr": "모아뜨 성수점",
      "en": "MOATTE Seongsu",
      "zh": "MOATTE 圣水店"
    },
    "dept": {
      "kr": "헤어&메이크업 스튜디오",
      "en": "Hair & Makeup Studio",
      "zh": "美发&化妆工作室"
    },
    "cat": "기타 서비스",
    "badge": "NEW",
    "treats": {
      "kr": [
        "데일리·아이돌·혼주 메이크업",
        "드라이·업스타일",
        "헤어+메이크업 세트",
        "커트·펌·염색",
        "1:1 맞춤 스타일링"
      ],
      "en": [
        "Daily·Idol·Family Makeup",
        "Blow-dry & Updo",
        "Hair + Makeup Set",
        "Cut·Perm·Color",
        "1:1 Personal Styling"
      ],
      "zh": [
        "日常·爱豆·主婚人妆",
        "吹风·盘发造型",
        "妆发套餐",
        "剪发·烫发·染发",
        "1:1定制造型"
      ]
    },
    "hours": "10:00~18:00 (월요일 휴무)",
    "loc": {
      "ko": "서울 성동구 성수동 (서울숲·뚝섬역)",
      "zh": "首尔圣水洞(首尔林)",
      "en": "Seongsu-dong, Seoul (Seoul Forest)"
    },
    "overview": {
      "kr": "모아뜨 성수점은 서울숲·뚝섬역 인근의 프라이빗 헤어&메이크업 스튜디오입니다. 데일리·아이돌·혼주 메이크업과 드라이·업스타일, 헤어+메이크업 세트를 1:1 예약제로 진행하며, 새벽 조기 시작(추가요금)도 가능해 촬영·웨딩·행사 일정에 맞추기 좋습니다. (월요일 휴무)",
      "en": "MOATTE Seongsu is a private hair & makeup studio near Seoul Forest and Ttukseom Station. It offers daily, idol and wedding-family makeup, blow-dry and updo styling, and hair+makeup sets by 1:1 reservation — early-morning starts are available (surcharge), ideal for shoots, weddings and events. (Closed Mondays)",
      "zh": "MOATTE圣水店是位于首尔林·纛岛站附近的私密妆发工作室。提供日常·爱豆·主婚人妆、吹风·盘发造型及妆发套餐，1:1预约制，可清晨提前开工(需加收费用)，适合拍摄·婚礼·活动日程。(周一休)"
    },
    "doctors": [],
    "thumb": "hthumb/moatt.jpg"
  },
  {
    "name": {
      "kr": "헤어온의원",
      "en": "HairON Clinic",
      "zh": "HairON脱发医院"
    },
    "dept": {
      "kr": "탈모 치료 전문",
      "en": "Hair Loss Clinic",
      "zh": "脱发治疗专科"
    },
    "cat": "피부·성형",
    "icon": "💇",
    "badge": "NEW",
    "treats": {
      "kr": [
        "줄기세포 탈모치료",
        "헤어온 FolliOn 주사",
        "두피 순환 개선 주사",
        "두피·모낭 정밀검사",
        "약물치료"
      ],
      "en": [
        "Stem Cell Hair Loss Treatment",
        "FolliOn Scalp Injection",
        "Scalp Circulation Injection",
        "Scalp & Follicle Diagnosis",
        "Medication"
      ],
      "zh": [
        "干细胞脱发治疗",
        "FolliOn毛囊强化针",
        "头皮循环改善注射",
        "头皮·毛囊精密检查",
        "药物治疗"
      ]
    },
    "hours": "Mon-Fri 10:00-20:00 / Sat 10:00-15:00 / Sun·Holiday Closed",
    "loc": {
      "ko": "서울 서초구 강남역(강남대로)",
      "zh": "首尔瑞草区·江南站(江南大路)",
      "en": "Gangnam Stn., Seoul"
    },
    "overview": {
      "kr": "헤어온의원은 강남역 6번 출구 인근(강남대로 373, 홍우빌딩 3층)의 탈모 치료 전문 의원입니다. 내과 전문의 손형곤 원장이 문진·두피모낭검사·혈액검사·자율신경검사 4단계 정밀 진단으로 탈모 원인을 찾고, 줄기세포 탈모치료·FolliOn 모낭강화주사·두피 순환 개선 주사·약물치료를 원인에 맞게 조합합니다.",
      "en": "HairON Clinic, near Exit 6 of Gangnam Station (3F Hongwoo Bldg., 373 Gangnam-daero), is a hair-loss specialty clinic. Dr. Son Hyung-gon, an internal medicine specialist, identifies the cause through a 4-step diagnosis (consultation, scalp/follicle exam, blood test, autonomic nerve test) and combines stem cell therapy, FolliOn scalp injections, scalp circulation injections and medication.",
      "zh": "HairON脱发医院位于江南站6号出口附近(江南大路373, 弘宇大厦3层), 是脱发治疗专科医院。由内科专科医生孙亨坤院长通过问诊·头皮毛囊检查·血液检查·自主神经检查四步精密诊断找出脱发原因, 并结合干细胞脱发治疗·FolliOn毛囊强化针·头皮循环改善注射·药物治疗进行个性化治疗。"
    },
    "doctors": [
      {
        "name": "손형곤",
        "title": "원장",
        "spec": [
          "내과 전문의",
          "탈모 치료"
        ]
      }
    ],
    "thumb": "hthumb/hairon.jpg"
  },
  {
    "name": {
      "kr": "더힐피부과의원 신사본점",
      "en": "The Heal Dermatology Clinic Sinsa",
      "zh": "THE HEAL皮肤科 新沙本店"
    },
    "dept": {
      "kr": "피부과 전문의 진료",
      "en": "Dermatology (Board-certified)",
      "zh": "皮肤科专科医生诊疗"
    },
    "cat": "피부·성형",
    "icon": "🌿",
    "badge": "NEW",
    "treats": {
      "kr": [
        "울쎄라·써마지",
        "소프웨이브·올리지오",
        "피코 레이저(색소)",
        "스킨부스터",
        "보톡스·필러",
        "여드름·흉터"
      ],
      "en": [
        "Ultherapy · Thermage",
        "Sofwave · Oligio",
        "Pico Laser (Pigment)",
        "Skin Booster",
        "Botox · Filler",
        "Acne · Scar"
      ],
      "zh": [
        "超声刀·热玛吉",
        "索夫波·Oligio",
        "皮秒激光(色素)",
        "皮肤焕活针",
        "肉毒·玻尿酸",
        "痘痘·痘坑"
      ]
    },
    "hours": "Mon-Thu 10:00-19:30 / Fri 10:00-20:00 / Sat 09:30-16:00 / Sun Closed",
    "loc": {
      "ko": "서울 강남구 신사역(신사스퀘어)",
      "zh": "首尔江南区·新沙站(新沙广场)",
      "en": "Sinsa Stn., Seoul"
    },
    "overview": {
      "kr": "더힐피부과의원 신사본점은 신사역 인근 신사스퀘어 3층·7층(강남대로 652)에 위치한 피부과 전문의 진료 의원입니다. 박주혁 대표원장(피부과 전문의)이 울쎄라·써마지·소프웨이브·올리지오 등 리프팅과 피코웨이·엑셀V 색소치료, 스킨부스터·보톡스·필러, 여드름·흉터 치료를 프라이빗 룸에서 진료합니다.",
      "en": "The Heal Dermatology Clinic Sinsa, on the 3rd and 7th floors of Sinsa Square near Sinsa Station (652 Gangnam-daero), is led by board-certified dermatologist Dr. Park Ju-hyuk — offering Ultherapy, Thermage, Sofwave and Oligio lifting, PicoWay and Excel V pigment treatment, skin boosters, Botox, fillers and acne/scar care in private treatment rooms.",
      "zh": "THE HEAL皮肤科新沙本店位于新沙站附近新沙广场3层·7层(江南大路652), 由皮肤科专科医生朴柱赫代表院长诊疗。提供超声刀·热玛吉·索夫波·Oligio等提升项目, PicoWay·Excel V色素治疗, 皮肤焕活·肉毒·玻尿酸及痘痘·痘坑治疗, 全程私密诊室。"
    },
    "doctors": [
      {
        "name": "박주혁",
        "title": "대표원장",
        "spec": [
          "피부과 전문의"
        ]
      }
    ],
    "thumb": "hthumb/theheal.jpg"
  },
  {
    "name": {
      "kr": "플래뉴의원",
      "en": "Planew Clinic",
      "zh": "PLANEW皮肤科"
    },
    "dept": {
      "kr": "피부과/리프팅·스킨부스터",
      "en": "Dermatology / Lifting · Skin Booster",
      "zh": "皮肤科/提升·皮肤焕活"
    },
    "cat": "피부·성형",
    "icon": "🪞",
    "badge": "NEW",
    "treats": {
      "kr": [
        "울쎄라피 프라임",
        "써마지",
        "티타늄·온다",
        "스킨부스터(리쥬란·쥬베룩)",
        "보톡스·필러",
        "바디 컨투어링"
      ],
      "en": [
        "Ultherapy Prime",
        "Thermage",
        "Titanium · ONDA",
        "Skin Booster (Rejuran · Juvelook)",
        "Botox · Filler",
        "Body Contouring"
      ],
      "zh": [
        "超声刀Prime",
        "热玛吉",
        "钛提升·ONDA",
        "皮肤焕活(丽珠兰·Juvelook)",
        "肉毒·玻尿酸",
        "身体塑形"
      ]
    },
    "hours": "Mon-Fri 10:30-20:30 / Sat 10:00-16:30 / Sun·Holiday Closed",
    "loc": {
      "ko": "서울 서초구 강남역(홍우제2빌딩)",
      "zh": "首尔瑞草区·江南站(弘宇第2大厦)",
      "en": "Gangnam Stn., Seoul"
    },
    "overview": {
      "kr": "플래뉴의원은 강남역 6번 출구 도보 1분(서초대로78길 22, 홍우제2빌딩 4층)의 리프팅·스킨부스터 전문 피부과입니다. 고대우 대표원장(연세대 의대)이 울쎄라피 프라임·써마지·티타늄·온다 등 프리미엄 리프팅 장비를 해부학적 분석에 맞춰 조합하고, 리쥬란·쥬베룩 스킨부스터·보톡스·필러·바디 컨투어링까지 프라이빗 룸에서 점심시간 없이 진료합니다.",
      "en": "Planew Clinic, a one-minute walk from Exit 6 of Gangnam Station (4F Hongwoo 2nd Bldg., 22 Seocho-daero 78-gil), specializes in lifting and skin boosters. Dr. Koh Dae-woo (Yonsei University College of Medicine) combines premium lifting devices — Ultherapy Prime, Thermage, Titanium, ONDA — based on anatomical analysis, plus Rejuran/Juvelook skin boosters, Botox, fillers and body contouring, in private rooms with no lunch break.",
      "zh": "PLANEW皮肤科位于江南站6号出口步行1分钟(瑞草大路78街22, 弘宇第2大厦4层), 是提升·皮肤焕活专科皮肤科。高大宇代表院长(延世大学医学院)根据解剖学分析组合超声刀Prime·热玛吉·钛提升·ONDA等高端提升设备, 并提供丽珠兰·Juvelook皮肤焕活·肉毒·玻尿酸·身体塑形, 私密诊室, 午休不间断诊疗。"
    },
    "doctors": [
      {
        "name": "고대우",
        "title": "대표원장",
        "spec": [
          "리프팅",
          "스킨부스터",
          "바디 컨투어링"
        ]
      }
    ],
    "thumb": "hthumb/planew.jpg"
  },
  {
    "name": {
      "kr": "미모던피부과의원",
      "en": "Mimodern Dermatology",
      "zh": "美摩登皮肤科"
    },
    "dept": {
      "kr": "피부과",
      "en": "Dermatology",
      "zh": "皮肤科"
    },
    "cat": "피부·성형",
    "badge": "NEW",
    "treats": {
      "kr": [
        "피부 레이저·색소",
        "리프팅·탄력",
        "쁘띠·보톡스·필러",
        "여드름·흉터",
        "스킨케어"
      ],
      "en": [
        "Laser·Pigment",
        "Lifting",
        "Botox·Filler",
        "Acne·Scar",
        "Skincare"
      ],
      "zh": [
        "皮肤激光·色素",
        "提升·紧致",
        "微整·肉毒·填充",
        "痘痘·疤痕",
        "皮肤管理"
      ]
    },
    "hours": "",
    "loc": {
      "ko": "서울 강남구 광평로 280 2층 205호 (수서동, 로즈데일빌딩)",
      "zh": "首尔江南区光坪路280(水西洞)",
      "en": "Suseo-dong, Gangnam-gu, Seoul"
    },
    "overview": {
      "kr": "미모던피부과의원은 서울 강남구 수서동(로즈데일빌딩 2층)에 위치한 피부과로, 성바오로·서울성모·인천성모병원 경력의 대표원장이 피부 레이저·색소·리프팅·쁘띠(보톡스·필러)·여드름·흉터 등 맞춤 피부 진료를 제공합니다.",
      "en": "Mimodern Dermatology in Suseo-dong, Gangnam, Seoul, led by a director experienced at St. Paul's/Seoul St. Mary's/Incheon St. Mary's hospitals, provides laser, pigment, lifting, injectables, acne and scar care.",
      "zh": "美摩登皮肤科位于首尔江南区水西洞(罗斯戴尔大厦2层),院长拥有圣保罗·首尔圣母·仁川圣母医院经历,提供皮肤激光·色素·提升·微整·痘痘·疤痕等定制皮肤诊疗。"
    },
    "doctors": [],
    "thumb": "hthumb/mimodern.jpg"
  },
  {
    "name": {
      "kr": "제이린안과",
      "en": "JRYN Eye Clinic",
      "zh": "JRYN眼科"
    },
    "dept": {
      "kr": "안과(스마일라식·ICL·백내장)",
      "en": "Ophthalmology (SMILE·ICL·Cataract)",
      "zh": "眼科(全飞秒·ICL·白内障)"
    },
    "cat": "안과",
    "badge": "NEW",
    "treats": {
      "kr": [
        "스마일라식",
        "ICL 렌즈삽입술",
        "노안·백내장",
        "라식·라섹",
        "드림렌즈"
      ],
      "en": [
        "SMILE LASIK",
        "ICL Implantation",
        "Presbyopia·Cataract",
        "LASIK·LASEK",
        "Ortho-K"
      ],
      "zh": [
        "SMILE全飞秒",
        "ICL晶体植入",
        "老视·白内障",
        "LASIK·LASEK",
        "角膜塑形镜"
      ]
    },
    "hours": "월~금 09:00-18:00 · 토 09:00-13:00 (일·공휴일 휴진)",
    "loc": {
      "ko": "부산 부산진구 가야대로 753 (서면, 제이린메디컬타워)",
      "zh": "釜山西面(伽倻大路753)",
      "en": "Seomyeon, Busanjin-gu, Busan"
    },
    "overview": {
      "kr": "제이린안과(JRYN)는 부산 서면에 위치한 안과로, 대표원장 한상엽을 중심으로 스마일라식·ICL·라식/라섹 시력교정과 노안·백내장 수술을 전문으로 합니다. ZEISS 스마일라식 3대 인증(엑설런스 센터·베스트 스킬 서전·애드미럴 서전), ICL 글로벌 트레이너, 노안백내장 15,000례 이상의 경험을 보유하고 있습니다.",
      "en": "JRYN Eye Clinic in Seomyeon, Busan, led by Dr. Han Sang-youp, specializes in SMILE, ICL and LASIK/LASEK vision correction and presbyopia/cataract surgery, with three ZEISS SMILE certifications, ICL global trainer status, and over 15,000 presbyopia-cataract cases.",
      "zh": "JRYN眼科位于釜山西面，由院长韩相烨主诊，专注于SMILE全飞秒·ICL·LASIK/LASEK视力矫正及老视·白内障手术。拥有蔡司SMILE三大认证、ICL全球培训师资质，老视白内障手术经验超15,000例。"
    },
    "doctors": [
      {
        "name": "한상엽",
        "title": "대표원장",
        "spec": [
          "안과 전문의",
          "스마일라식·ICL",
          "노안·백내장"
        ]
      }
    ],
    "thumb": "hthumb/jryn.jpg"
  },
  {
    "name": {
      "kr": "김병준레다스흉부외과",
      "en": "KIM BYOUNG JOON LEDAS",
      "zh": "金炳俊LEDAS胸外科"
    },
    "dept": {
      "kr": "흉부외과(하지정맥류 중점)",
      "en": "Thoracic Surgery (Varicose Vein Clinic)",
      "zh": "胸外科(下肢静脉曲张专科)"
    },
    "cat": "하지정맥류",
    "badge": "NEW",
    "treats": {
      "kr": [
        "하지정맥류",
        "최소침습 비절개",
        "혈관초음파 진단",
        "재발·재수술 클리닉",
        "의료용 압박스타킹"
      ],
      "en": [
        "Varicose Veins",
        "Minimally Invasive",
        "Vascular Ultrasound",
        "Recurrence Reoperation",
        "Compression Stockings"
      ],
      "zh": [
        "下肢静脉曲张",
        "微创非切开",
        "血管超声诊断",
        "复发·再手术",
        "医用压力袜"
      ]
    },
    "hours": "월~금 09:00-18:00 (점심 12:30-13:30 · 일요일 휴진)",
    "loc": {
      "ko": "부산 부산진구 서면문화로 10 (영광도서빌딩 11~13F)",
      "zh": "釜山西面(西面文化路10, 荣光图书大厦11~13F)",
      "en": "Seomyeon, Busanjin-gu, Busan"
    },
    "overview": {
      "kr": "김병준레다스흉부외과는 부산 서면에 위치한 하지정맥류 중점 흉부외과로, 대표원장 김병준을 중심으로 22년·29,000례 이상의 치료경험을 바탕으로 최소침습 비절개 치료, 재발·재수술 클리닉, 레다스 장기검진 시스템을 운영합니다. JCI 기준 감염관리 시스템을 갖추고 있습니다.",
      "en": "KIM BYOUNG JOON LEDAS is a varicose vein-focused thoracic surgery clinic in Seomyeon, Busan. Led by Dr. Kim Byoung Joon with 22 years and 29,000+ cases, it offers minimally invasive non-incisional treatment, a recurrence reoperation clinic, and long-term follow-up under a JCI-standard infection control system.",
      "zh": "金炳俊LEDAS胸外科位于釜山西面，专注下肢静脉曲张治疗。院长金炳俊拥有22年、29,000例以上经验，提供微创非切开治疗、复发再手术诊疗及长期随访，并建立JCI标准感染管理体系。"
    },
    "doctors": [
      {
        "name": "김병준",
        "title": "대표원장",
        "spec": [
          "흉부외과 전문의",
          "하지정맥류 29,000례+",
          "최소침습 비절개"
        ]
      }
    ],
    "thumb": "hthumb/ledas.jpg"
  }
];
