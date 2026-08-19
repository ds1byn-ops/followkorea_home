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
      "kr": "더이다의원",
      "en": "The ida Clinic",
      "zh": "ida医疗美容诊所"
    },
    "dept": {
      "kr": "피부/미용성형 (눈·코·귀·어깨·힙)",
      "en": "Skin / Aesthetic (Eye·Nose·Ear·Shoulder·Hip)",
      "zh": "皮肤/医美 (眼·鼻·耳·肩·臀)"
    },
    "cat": "성형외과/피부",
    "icon": "🌿",
    "badge": "NEW",
    "treats": {
      "kr": [
        "눈",
        "코",
        "귀필러",
        "어깨필러",
        "힙·골반",
        "리프팅",
        "스킨부스터"
      ],
      "en": [
        "Eye",
        "Nose",
        "Ear Filler",
        "Shoulder Filler",
        "Hip/Pelvis",
        "Lifting",
        "Skin Booster"
      ],
      "zh": [
        "眼部",
        "鼻部",
        "耳部填充",
        "肩部填充",
        "臀部·骨盆",
        "提升",
        "皮肤管理"
      ]
    },
    "hours": "Mon/Tue 10:00-20:00 / Wed 10:00-18:00 / Fri 10:00-19:00 / Sat 10:00-15:30",
    "loc": {
      "ko": "서울 중구 약수",
      "zh": "首尔中区·药水",
      "en": "Yaksu, Seoul"
    },
    "overview": {
      "kr": "더이다의원(ESTD 2010)은 눈·코·귀·어깨·힙 전문 의원입니다. 허선녕 대표원장(가슴성형 2,000례+, 가슴 필러 1,000례+, 필러·리프팅 6,000례+)이 직접 진료하며, 6호선 버티고개역 도보 3분·건물 내 무료주차가 가능합니다.",
      "en": "The ida Clinic (ESTD 2010) specializes in eye, nose, ear, shoulder and hip aesthetics with the head director performing all procedures. Located in Jung-gu, Seoul — 3 min walk from Beotigogae Stn. with free in-building parking.",
      "zh": "ida医疗美容诊所（ESTD 2010）专注于眼、鼻、耳、肩、臀部的精细化医美项目，由代表院长亲自主诊。位于首尔中区，地铁6号线药水站附近步行3分钟，楼内免费停车，环境安静私密。"
    },
    "doctors": [
      {
        "name": "허선녕",
        "title": "대표원장",
        "spec": [
          "경희대학교 의과대학",
          "눈·코·귀 성형",
          "가슴·바디 필러",
          "리프팅"
        ]
      }
    ],
    "thumb": "hthumb/ida.jpg"
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
    "cat": "성형외과",
    "icon": "🏆",
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
    "icon": "💐",
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
    "cat": "성형외과",
    "icon": "🏥",
    "badge": "BEST",
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
    "cat": "성형외과",
    "icon": "⭐",
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
      "kr": "셀리닉의원",
      "en": "Cellinique Clinic",
      "zh": "Cellinique医院"
    },
    "dept": {
      "kr": "줄기세포/리프팅",
      "en": "Stem Cell / Lifting",
      "zh": "干细胞/提升"
    },
    "cat": "줄기세포",
    "icon": "🧪",
    "badge": "줄기세포",
    "treats": {
      "kr": [
        "줄기세포",
        "리프팅",
        "레이저"
      ],
      "en": [
        "Stem Cell",
        "Lifting",
        "Laser"
      ],
      "zh": [
        "干细胞",
        "提升",
        "激光"
      ]
    },
    "hours": "Mon-Fri 10:00-19:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "셀리닉의원은 줄기세포 치료와 리프팅에 특화된 프리미엄 의원입니다.",
      "en": "Cellinique specializes in premium stem cell therapy and lifting treatments.",
      "zh": "Cellinique是专注于干细胞疗法和提升项目的高端医院，提供个性化抗衰老解决方案。"
    },
    "doctors": [
      {
        "name": "김건우",
        "title": "대표원장",
        "spec": [
          "진단검사의학과 전문의",
          "재생의학",
          "리프팅"
        ]
      }
    ],
    "thumb": "hthumb/cellinique.jpg"
  },
  {
    "name": {
      "kr": "차움",
      "en": "Chaum Anti-aging Center",
      "zh": "차움抗衰老中心"
    },
    "dept": {
      "kr": "종합검진/항노화",
      "en": "Health Check / Anti-aging",
      "zh": "综合检诊/抗衰老"
    },
    "cat": "항노화",
    "icon": "🏯",
    "badge": "프리미엄",
    "treats": {
      "kr": [
        "건강검진",
        "파워에이징"
      ],
      "en": [
        "Health Check",
        "Anti-aging"
      ],
      "zh": [
        "健康检查",
        "抗衰老"
      ]
    },
    "hours": "Mon-Fri 08:30-17:30",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "차움은 최고급 항노화 종합센터로 건강검진과 맞춤형 항노화 프로그램을 제공합니다.",
      "en": "Chaum is Korea's premier anti-aging center offering comprehensive health checks and personalized anti-aging programs.",
      "zh": "차움是韩国顶级抗衰老综合中心，提供全方位健康检查和个性化抗衰老疗程。"
    },
    "doctors": [
      {
        "name": "강문선",
        "title": "교수",
        "spec": [
          "산부인과"
        ]
      },
      {
        "name": "구슬아",
        "title": "교수",
        "spec": [
          "영상의학과"
        ]
      },
      {
        "name": "김가희",
        "title": "교수",
        "spec": [
          "소화기내과"
        ]
      },
      {
        "name": "김동현",
        "title": "교수",
        "spec": [
          "재활의학과"
        ]
      },
      {
        "name": "김영탁",
        "title": "교수",
        "spec": [
          "면역증강클리닉"
        ]
      },
      {
        "name": "김인화",
        "title": "교수",
        "spec": [
          "영상의학과"
        ]
      },
      {
        "name": "김종석",
        "title": "교수",
        "spec": [
          "가정의학과"
        ]
      },
      {
        "name": "김종진",
        "title": "교수",
        "spec": [
          "심장내과"
        ]
      },
      {
        "name": "김진우",
        "title": "교수",
        "spec": [
          "내분비내과"
        ]
      },
      {
        "name": "김효주",
        "title": "교수",
        "spec": [
          "영상의학과"
        ]
      },
      {
        "name": "박단비",
        "title": "교수",
        "spec": [
          "가정의학과"
        ]
      },
      {
        "name": "박미영",
        "title": "교수",
        "spec": [
          "심장내과"
        ]
      },
      {
        "name": "박원근",
        "title": "교수",
        "spec": [
          "내분비내과"
        ]
      },
      {
        "name": "백승준",
        "title": "교수",
        "spec": [
          "피부성형클리닉"
        ]
      },
      {
        "name": "서신영",
        "title": "교수",
        "spec": [
          "정신건강의학과"
        ]
      },
      {
        "name": "서은경",
        "title": "교수",
        "spec": [
          "가정의학과"
        ]
      },
      {
        "name": "양지헌",
        "title": "교수",
        "spec": [
          "가정의학과"
        ]
      },
      {
        "name": "오수연",
        "title": "교수",
        "spec": [
          "면역증강클리닉"
        ]
      },
      {
        "name": "오하영",
        "title": "교수",
        "spec": [
          "소화기내과"
        ]
      },
      {
        "name": "오효주",
        "title": "교수",
        "spec": [
          "가정의학과"
        ]
      },
      {
        "name": "윤수미",
        "title": "교수",
        "spec": [
          "가정의학과"
        ]
      },
      {
        "name": "이경미",
        "title": "교수",
        "spec": [
          "가정의학과"
        ]
      },
      {
        "name": "이상인",
        "title": "교수",
        "spec": [
          "소화기내과"
        ]
      },
      {
        "name": "이상형",
        "title": "교수",
        "spec": [
          "면역증강클리닉"
        ]
      },
      {
        "name": "이영수",
        "title": "교수",
        "spec": [
          "노년내과"
        ]
      },
      {
        "name": "이윤경",
        "title": "교수",
        "spec": [
          "가정의학과"
        ]
      },
      {
        "name": "임지현",
        "title": "교수",
        "spec": [
          "영상의학과"
        ]
      },
      {
        "name": "장소용",
        "title": "교수",
        "spec": [
          "영상의학과"
        ]
      },
      {
        "name": "진석인",
        "title": "교수",
        "spec": [
          "피부과"
        ]
      },
      {
        "name": "차충근",
        "title": "교수",
        "spec": [
          "소화기내과"
        ]
      },
      {
        "name": "최중언",
        "title": "교수",
        "spec": [
          "신경외과"
        ]
      },
      {
        "name": "한광협",
        "title": "교수",
        "spec": [
          "소화기내과"
        ]
      },
      {
        "name": "황세나",
        "title": "교수",
        "spec": [
          "내분비내과"
        ]
      }
    ],
    "thumb": "hthumb/chaum.jpg"
  },
  {
    "name": {
      "kr": "원셀의원",
      "en": "One Cell Clinic",
      "zh": "One Cell医院"
    },
    "dept": {
      "kr": "줄기세포/피부/성형",
      "en": "Stem Cell / Skin / Plastic",
      "zh": "干细胞/皮肤/整形"
    },
    "cat": "줄기세포",
    "icon": "🧬",
    "badge": "줄기세포",
    "treats": {
      "kr": [
        "줄기세포",
        "피부",
        "성형",
        "통증"
      ],
      "en": [
        "Stem Cell",
        "Skin",
        "Plastic",
        "Pain"
      ],
      "zh": [
        "干细胞",
        "皮肤",
        "整形",
        "疼痛"
      ]
    },
    "hours": "Mon/Fri 10:00-20:00 / Tue-Thu 10:00-19:00 / Sat 10:00-16:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "원셀의원은 줄기세포 치료, 피부관리, 성형 수술을 종합 제공합니다.",
      "en": "One Cell Clinic offers comprehensive stem cell therapy, skin care, and plastic surgery.",
      "zh": "One Cell医院综合提供干细胞疗法、皮肤管理及整形手术，采用最新细胞再生技术。"
    },
    "doctors": [
      {
        "name": "서명원",
        "title": "대표원장",
        "spec": [
          "가정의학과"
        ]
      },
      {
        "name": "이찬양",
        "title": "대표원장",
        "spec": [
          "피부과"
        ]
      },
      {
        "name": "최재현",
        "title": "원장",
        "spec": [
          "피부과"
        ]
      },
      {
        "name": "장재훈",
        "title": "원장",
        "spec": [
          "피부과"
        ]
      },
      {
        "name": "이호준",
        "title": "원장",
        "spec": [
          "피부과"
        ]
      },
      {
        "name": "김진영",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "손은택",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "양동준",
        "title": "대표원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "신요섭",
        "title": "대표원장",
        "spec": [
          "신경외과"
        ]
      },
      {
        "name": "박소영",
        "title": "원장",
        "spec": [
          "마취통증의학과"
        ]
      }
    ],
    "thumb": "hthumb/onecell.jpg"
  },
  {
    "name": {
      "kr": "글로비성형외과",
      "en": "Glovi Plastic Surgery",
      "zh": "Glovi整形外科"
    },
    "dept": {
      "kr": "성형외과/줄기세포",
      "en": "Plastic Surgery / Stem Cell",
      "zh": "整形外科/干细胞"
    },
    "cat": "성형외과",
    "icon": "🌟",
    "badge": "추천",
    "treats": {
      "kr": [
        "줄기세포",
        "눈",
        "코",
        "가슴"
      ],
      "en": [
        "Stem Cell",
        "Eye",
        "Nose",
        "Breast"
      ],
      "zh": [
        "干细胞",
        "眼部",
        "鼻部",
        "胸部"
      ]
    },
    "hours": "Mon-Fri 10:00-19:00 / Fri 10:00-20:00 / Sat 10:00-17:00",
    "loc": {
      "ko": "서울 압구정",
      "zh": "首尔狎鸥亭",
      "en": "Apgujeong, Seoul"
    },
    "overview": {
      "kr": "글로비성형외과는 압구정에 위치한 종합 성형외과로 줄기세포, 눈·코 수술, 가슴성형을 제공합니다.",
      "en": "Glovi Plastic Surgery in Apgujeong offers stem cell therapy, eye/nose surgery, and breast augmentation.",
      "zh": "Glovi整形外科位于狎鸥亭，提供干细胞疗法、眼鼻手术及隆胸手术，以精密内视镜技术著称。"
    },
    "doctors": [
      {
        "name": "노봉일",
        "title": "원장",
        "spec": [
          "최소침습성형",
          "코성형",
          "항노화성형"
        ]
      },
      {
        "name": "박종철",
        "title": "원장",
        "spec": [
          "눈성형",
          "코성형",
          "안면윤곽",
          "지방성형"
        ]
      },
      {
        "name": "김재인",
        "title": "원장",
        "spec": [
          "국제 미용성형"
        ]
      },
      {
        "name": "남상재",
        "title": "협진원장",
        "spec": [
          "지방성형",
          "유방성형"
        ]
      },
      {
        "name": "신미영",
        "title": "원장",
        "spec": [
          "여성회음성형",
          "미용레이저"
        ]
      },
      {
        "name": "오택훈",
        "title": "원장",
        "spec": [
          "악안면 무통마취"
        ]
      }
    ],
    "thumb": "hthumb/glovi.jpg"
  },
  {
    "name": {
      "kr": "라미체의원",
      "en": "Lamiche Clinic",
      "zh": "Lamiche医院"
    },
    "dept": {
      "kr": "다이어트/리프팅/피부",
      "en": "Diet / Lifting / Skin",
      "zh": "减肥/提升/皮肤"
    },
    "cat": "체형",
    "icon": "💪",
    "badge": "인기",
    "treats": {
      "kr": [
        "다이어트",
        "리프팅",
        "피부"
      ],
      "en": [
        "Diet",
        "Lifting",
        "Skin"
      ],
      "zh": [
        "减肥",
        "提升",
        "皮肤"
      ]
    },
    "hours": "Mon 11:00-20:00 / Tue-Thu 10:00-19:00 / Fri 11:30-20:30 / Sat 09:00-18:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "라미체의원은 다이어트, 리프팅, 피부관리에 특화된 의원입니다.",
      "en": "Lamiche Clinic specializes in body management, lifting, and skin care.",
      "zh": "Lamiche医院专注于体型管理、提升及皮肤护理，提供全面的减肥和美容项目。"
    },
    "doctors": [
      {
        "name": "주종호",
        "title": "대표원장",
        "spec": [
          "미용성형레이저",
          "항노화",
          "비만체형"
        ]
      },
      {
        "name": "이상영",
        "title": "대표원장",
        "spec": [
          "미용성형레이저",
          "비만건강"
        ]
      },
      {
        "name": "정다혜",
        "title": "원장",
        "spec": [
          "가정의학",
          "미용레이저"
        ]
      },
      {
        "name": "신현희",
        "title": "원장",
        "spec": [
          "가정의학"
        ]
      },
      {
        "name": "한재현",
        "title": "원장",
        "spec": [
          "피부과",
          "레이저피부모발"
        ]
      },
      {
        "name": "지명은",
        "title": "원장",
        "spec": [
          "피부과"
        ]
      },
      {
        "name": "이진현",
        "title": "원장",
        "spec": [
          "일반의"
        ]
      },
      {
        "name": "김나영",
        "title": "원장",
        "spec": [
          "일반의"
        ]
      },
      {
        "name": "박성준",
        "title": "원장",
        "spec": [
          "일반의"
        ]
      },
      {
        "name": "오승호",
        "title": "원장",
        "spec": [
          "일반의"
        ]
      },
      {
        "name": "서화니",
        "title": "원장",
        "spec": [
          "가정의학"
        ]
      },
      {
        "name": "송하정",
        "title": "원장",
        "spec": [
          "비뇨기과"
        ]
      },
      {
        "name": "한상택",
        "title": "원장",
        "spec": [
          "미용성형레이저의학"
        ]
      },
      {
        "name": "박소현",
        "title": "원장",
        "spec": [
          "일반의"
        ]
      }
    ],
    "thumb": "hthumb/lamiche.jpg"
  },
  {
    "name": {
      "kr": "뷰성형외과",
      "en": "View Plastic Surgery",
      "zh": "VIEW整形外科"
    },
    "dept": {
      "kr": "성형외과",
      "en": "Plastic Surgery",
      "zh": "整形外科"
    },
    "cat": "성형외과",
    "icon": "💫",
    "badge": "VIP",
    "treats": {
      "kr": [
        "눈",
        "코",
        "가슴",
        "안면윤곽"
      ],
      "en": [
        "Eye",
        "Nose",
        "Breast",
        "Facial Contouring"
      ],
      "zh": [
        "眼部",
        "鼻部",
        "胸部",
        "面部轮廓"
      ]
    },
    "hours": "Mon-Thu 10:00-19:00 / Fri 10:00-21:00 / Sat 10:00-17:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "뷰성형외과는 눈·코 수술, 가슴성형, 안면윤곽에 특화된 강남 유명 성형병원입니다.",
      "en": "View Plastic Surgery is a renowned clinic in Gangnam specializing in eye/nose surgery, breast augmentation, and facial contouring.",
      "zh": "VIEW整形外科是江南知名的综合整形医院，专长于眼鼻手术、隆胸及面部轮廓整形，提供中文翻译服务。"
    },
    "doctors": [
      {
        "name": "최순우",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "윤창운",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "김정민",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "김도형",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "정재현",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "조진우",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "손유성",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "이동규",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "김소영",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "도수빈",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "오원석",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "박건욱",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "박진우",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "오정석",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "오준석",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "고은석",
        "title": "원장",
        "spec": [
          "이비인후과"
        ]
      },
      {
        "name": "김민수",
        "title": "원장",
        "spec": [
          "외과 (유방검진)"
        ]
      },
      {
        "name": "김영민",
        "title": "원장",
        "spec": [
          "영상의학과"
        ]
      },
      {
        "name": "이승현",
        "title": "원장",
        "spec": [
          "마취통증의학과"
        ]
      },
      {
        "name": "이지현",
        "title": "원장",
        "spec": [
          "마취통증의학과"
        ]
      },
      {
        "name": "오혜미",
        "title": "원장",
        "spec": [
          "마취통증의학과"
        ]
      },
      {
        "name": "성보현",
        "title": "원장",
        "spec": [
          "마취통증의학과"
        ]
      },
      {
        "name": "최진화",
        "title": "원장",
        "spec": [
          "마취통증의학과"
        ]
      },
      {
        "name": "송규영",
        "title": "원장",
        "spec": [
          "마취통증의학과"
        ]
      },
      {
        "name": "김유나",
        "title": "원장",
        "spec": [
          "마취통증의학과"
        ]
      },
      {
        "name": "안예나",
        "title": "원장",
        "spec": [
          "마취통증의학과"
        ]
      },
      {
        "name": "김경림",
        "title": "원장",
        "spec": [
          "마취통증의학과"
        ]
      }
    ],
    "thumb": "hthumb/view.jpg"
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
    "icon": "🌸",
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
      "kr": "강남다움의원",
      "en": "Gangnam Daum Clinic",
      "zh": "江南多样医院"
    },
    "dept": {
      "kr": "리프팅/다이어트",
      "en": "Lifting / Diet",
      "zh": "提升/减肥"
    },
    "cat": "피부",
    "icon": "✨",
    "badge": "추천",
    "treats": {
      "kr": [
        "리프팅",
        "다이어트",
        "스킨부스터",
        "실리프팅"
      ],
      "en": [
        "Lifting",
        "Diet",
        "Skin Booster",
        "Thread Lifting"
      ],
      "zh": [
        "提升",
        "减肥",
        "皮肤补水",
        "线雕提升"
      ]
    },
    "hours": "Mon-Fri 10:00-20:00 / Sat 10:00-18:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "강남다움의원은 리프팅, 다이어트, 피부관리를 합리적인 가격으로 제공합니다.",
      "en": "Gangnam Daum Clinic provides lifting, diet, and skin care services.",
      "zh": "江南多样医院提供提升、减肥及皮肤护理等综合服务。"
    },
    "doctors": [
      {
        "name": "김석준",
        "title": "대표원장",
        "spec": [
          "피부시술",
          "레이저",
          "리프팅",
          "필러",
          "체중관리"
        ]
      },
      {
        "name": "이재영",
        "title": "원장",
        "spec": [
          "피부시술",
          "레이저",
          "리프팅",
          "필러"
        ]
      }
    ],
    "thumb": "hthumb/gangnamdaum.jpg"
  },
  {
    "name": {
      "kr": "더뷰티성형외과",
      "en": "The Beauty Plastic Surgery",
      "zh": "THE BEAUTY整形外科"
    },
    "dept": {
      "kr": "성형외과/줄기세포",
      "en": "Plastic Surgery / Stem Cell",
      "zh": "整形外科/干细胞"
    },
    "cat": "성형외과",
    "icon": "💎",
    "badge": "줄기세포",
    "treats": {
      "kr": [
        "실리프팅",
        "눈",
        "코",
        "가슴",
        "줄기세포"
      ],
      "en": [
        "Thread Lifting",
        "Eye",
        "Nose",
        "Breast",
        "Stem Cell"
      ],
      "zh": [
        "线雕提升",
        "眼部",
        "鼻部",
        "胸部",
        "干细胞"
      ]
    },
    "hours": "Mon-Fri 10:00-19:00 / Sat 10:00-16:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "더뷰티성형외과는 실리프팅, 눈·코 수술, 줄기세포 치료를 제공합니다.",
      "en": "The Beauty Plastic Surgery offers thread lifting, eye/nose surgery, and stem cell treatments.",
      "zh": "THE BEAUTY整形外科提供线雕提升、眼鼻手术及干细胞综合治疗。"
    },
    "doctors": [
      {
        "name": "정성훈",
        "title": "대표원장",
        "spec": [
          "성형외과 (가슴성형",
          "눈성형)"
        ]
      },
      {
        "name": "이영근",
        "title": "대표원장",
        "spec": [
          "필러",
          "리프팅",
          "지방·다이어트",
          "보톡스"
        ]
      }
    ],
    "thumb": "hthumb/thebeauty.jpg"
  },
  {
    "name": {
      "kr": "신소애여성의원",
      "en": "Sinsoa Women's Clinic",
      "zh": "新素爱女性医院"
    },
    "dept": {
      "kr": "여성의학",
      "en": "Women's Health",
      "zh": "女性医学"
    },
    "cat": "여성의학",
    "icon": "🌷",
    "badge": "여성의학",
    "treats": {
      "kr": [
        "소음순",
        "난소줄기세포",
        "자궁근종"
      ],
      "en": [
        "Labiaplasty",
        "Ovarian Stem Cell",
        "Uterine Fibroid"
      ],
      "zh": [
        "阴唇整形",
        "卵巢干细胞",
        "子宫肌瘤"
      ]
    },
    "hours": "Mon/Fri 10:00-20:00 / Tue-Thu 10:00-19:00 / Sat 10:00-16:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "신소애여성의원은 소음순 교정, 난소 줄기세포, 자궁근종 치료 전문 병원입니다.",
      "en": "Sinsoa Women's Clinic specializes in female aesthetic procedures and stem cell treatments.",
      "zh": "新素爱女性医院专注于女性妇科整形和干细胞治疗。"
    },
    "doctors": [
      {
        "name": "박정원",
        "title": "대표원장",
        "spec": [
          "산부인과"
        ]
      },
      {
        "name": "홍혜리",
        "title": "원장",
        "spec": [
          "산부인과",
          "여성건강/성의학"
        ]
      },
      {
        "name": "김정민",
        "title": "원장",
        "spec": [
          "산부인과"
        ]
      },
      {
        "name": "임이랑",
        "title": "원장",
        "spec": [
          "산부인과"
        ]
      },
      {
        "name": "김수경",
        "title": "원장",
        "spec": [
          "피부과"
        ]
      }
    ],
    "thumb": "hthumb/sinsoa.jpg"
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
    "cat": "피부",
    "icon": "🌺",
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
      "kr": "히어산부인과",
      "en": "Heer Women's Clinic",
      "zh": "Heer妇科"
    },
    "dept": {
      "kr": "여성의학",
      "en": "Women's Health",
      "zh": "女性医学"
    },
    "cat": "여성의학",
    "icon": "🌷",
    "badge": "여성의학",
    "treats": {
      "kr": [
        "여성성형",
        "질타이트닝"
      ],
      "en": [
        "Female Rejuvenation",
        "Vaginal Tightening"
      ],
      "zh": [
        "女性整形",
        "阴道紧缩"
      ]
    },
    "hours": "Mon/Tue/Thu/Fri 10:00-19:00 / Sat 09:30-15:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "히어산부인과는 여성성형과 질 타이트닝 전문 산부인과입니다.",
      "en": "Heer Women's Clinic specializes in female rejuvenation and vaginal tightening.",
      "zh": "Heer妇科专注于女性整形和阴道紧缩治疗。"
    },
    "doctors": [
      {
        "name": "송윤경",
        "title": "대표원장",
        "spec": [
          "산부인과"
        ]
      }
    ],
    "thumb": "hthumb/heerwomen.jpg"
  },
  {
    "name": {
      "kr": "셀로라의원 (with 지유)",
      "en": "Cellora Clinic",
      "zh": "Cellora医院"
    },
    "dept": {
      "kr": "줄기세포",
      "en": "Stem Cell",
      "zh": "干细胞"
    },
    "cat": "줄기세포",
    "icon": "🧬",
    "badge": "줄기세포",
    "treats": {
      "kr": [
        "줄기세포",
        "세포노화검사"
      ],
      "en": [
        "Stem Cell",
        "Cell Aging Test"
      ],
      "zh": [
        "干细胞",
        "细胞老化检测"
      ]
    },
    "hours": "Mon-Fri 10:30-21:00 / Sat-Sun 10:30-19:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "셀로라의원은 줄기세포 치료와 세포노화검사 전문 의원입니다.",
      "en": "Cellora Clinic specializes in stem cell therapy and cell aging testing.",
      "zh": "Cellora医院专注于干细胞疗法和细胞老化检测。"
    },
    "doctors": [
      {
        "name": "박기범",
        "title": "대표원장",
        "spec": [
          "(전문분야 미표기)"
        ]
      },
      {
        "name": "나윤채",
        "title": "원장",
        "spec": [
          "줄기세포 치료"
        ]
      }
    ],
    "thumb": "hthumb/cellora.jpg"
  },
  {
    "name": {
      "kr": "리프톤의원",
      "en": "Lifton Skin Clinic",
      "zh": "Lifton皮肤医院"
    },
    "dept": {
      "kr": "리프팅/필러",
      "en": "Lifting / Filler",
      "zh": "提升/填充"
    },
    "cat": "피부",
    "icon": "✨",
    "badge": "리프팅전문",
    "treats": {
      "kr": [
        "리프팅",
        "필러"
      ],
      "en": [
        "Lifting",
        "Filler"
      ],
      "zh": [
        "提升",
        "填充"
      ]
    },
    "hours": "Mon-Fri 10:00-20:00 / Sat 10:00-16:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "리프톤의원은 리프팅과 필러 전문 피부과로 저녁 8시까지 진료합니다.",
      "en": "Lifton Skin Clinic specializes in lifting and filler with extended evening hours.",
      "zh": "Lifton皮肤医院专注于提升和填充治疗，延长至晚上8点营业。"
    },
    "doctors": [],
    "thumb": "hthumb/lifton.jpg"
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
    "cat": "피부",
    "icon": "⭕",
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
      "kr": "루비성형외과(신사점)",
      "en": "Ruby Plastic Surgery (Sinsa)",
      "zh": "Ruby整形外科（新沙店）"
    },
    "dept": {
      "kr": "성형외과",
      "en": "Plastic Surgery",
      "zh": "整形外科"
    },
    "cat": "성형외과",
    "icon": "💍",
    "badge": "VIP",
    "treats": {
      "kr": [
        "눈",
        "코",
        "가슴",
        "리프팅",
        "지방흡입"
      ],
      "en": [
        "Eye",
        "Nose",
        "Breast",
        "Lifting",
        "Liposuction"
      ],
      "zh": [
        "眼部",
        "鼻部",
        "胸部",
        "提升",
        "吸脂"
      ]
    },
    "hours": "Mon-Wed/Fri 10:00-19:00 / Thu 10:00-20:30 / Sat 10:00-16:00",
    "loc": {
      "ko": "서울 신사",
      "zh": "首尔新沙",
      "en": "Sinsa, Gangnam"
    },
    "overview": {
      "kr": "루비성형외과(신사점)는 눈·코 수술, 가슴성형, 리프팅 전문 병원입니다.",
      "en": "Ruby Plastic Surgery (Sinsa) specializes in eye/nose surgery, breast augmentation, and lifting.",
      "zh": "Ruby整形外科（新沙店）专注于眼鼻整形、隆胸及提升手术，由金明哲代表院长领衔。"
    },
    "doctors": [
      {
        "name": "김재원",
        "title": "대표원장",
        "spec": [
          "피부과 전문의",
          "피부레이저",
          "미용외과"
        ]
      },
      {
        "name": "허정",
        "title": "대표원장",
        "spec": [
          "피부과",
          "미용성형레이저",
          "필러"
        ]
      },
      {
        "name": "이동민",
        "title": "원장",
        "spec": [
          "피부과",
          "미용성형레이저",
          "필러"
        ]
      }
    ],
    "thumb": "hthumb/ruby.jpg"
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
    "cat": "피부",
    "icon": "🔬",
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
      "kr": "고운몸의원",
      "en": "Gowoonmom Body Clinic",
      "zh": "美身医院"
    },
    "dept": {
      "kr": "바디필러",
      "en": "Body Filler",
      "zh": "身体填充"
    },
    "cat": "체형",
    "icon": "💁",
    "badge": "바디전문",
    "treats": {
      "kr": [
        "골반필러",
        "힙필러",
        "가슴필러"
      ],
      "en": [
        "Pelvis Filler",
        "Hip Filler",
        "Breast Filler"
      ],
      "zh": [
        "骨盆填充",
        "臀部填充",
        "胸部填充"
      ]
    },
    "hours": "Mon-Wed 10:00-19:00 / Thu-Fri 10:00-21:00 / Sat 10:00-15:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "고운몸의원은 골반·힙·가슴 필러 전문 바디 성형 의원입니다.",
      "en": "Gowoonmom Body Clinic specializes in body shaping via pelvis, hip, and breast filler.",
      "zh": "美身医院专注于骨盆、臀部及胸部填充等身体塑形项目。"
    },
    "doctors": [
      {
        "name": "김희경",
        "title": "대표원장",
        "spec": [
          "바디필러",
          "페이스필러",
          "쁘띠"
        ]
      }
    ],
    "thumb": "hthumb/gowoonmom.jpg"
  },
  {
    "name": {
      "kr": "티알 트리니티라파엘로 청담의원",
      "en": "TR Trinity Raffaello Clinic",
      "zh": "TR Trinity Raffaello清潭医院"
    },
    "dept": {
      "kr": "항노화/줄기세포",
      "en": "Anti-aging / Stem Cell",
      "zh": "抗衰老/干细胞"
    },
    "cat": "항노화",
    "icon": "🏅",
    "badge": "항노화",
    "treats": {
      "kr": [
        "항노화",
        "튼살",
        "흉터",
        "줄기세포"
      ],
      "en": [
        "Anti-aging",
        "Stretch Marks",
        "Scar",
        "Stem Cell"
      ],
      "zh": [
        "抗衰老",
        "妊娠纹",
        "疤痕",
        "干细胞"
      ]
    },
    "hours": "Mon-Fri 10:00-19:00 / Sat 10:00-17:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "티알 청담의원은 비수술 항노화, 줄기세포, 흉터 치료 전문 의원입니다.",
      "en": "TR Trinity Raffaello Clinic specializes in non-surgical anti-aging and stem cell therapy.",
      "zh": "TR Trinity Raffaello清潭医院专注于非手术抗衰老疗程，包括干细胞疗法及疤痕治疗。"
    },
    "doctors": [
      {
        "name": "김유인",
        "title": "대표원장",
        "spec": [
          "광성형 (주름",
          "흉터",
          "지방감소)"
        ]
      },
      {
        "name": "김동일",
        "title": "담당책임의사",
        "spec": [
          "페이스리프팅",
          "지방흡입술"
        ]
      },
      {
        "name": "박언휘",
        "title": "담당책임의사",
        "spec": [
          "항노화",
          "면역·활력수액치료"
        ]
      }
    ],
    "thumb": "hthumb/tr.jpg"
  },
  {
    "name": {
      "kr": "GV 성형외과",
      "en": "GV Plastic Surgery",
      "zh": "GV整形外科"
    },
    "dept": {
      "kr": "줄기세포/바디리프팅",
      "en": "Stem Cell / Body Lifting",
      "zh": "干细胞/身体提升"
    },
    "cat": "줄기세포",
    "icon": "🌿",
    "badge": "줄기세포",
    "treats": {
      "kr": [
        "줄기세포",
        "바디리프팅"
      ],
      "en": [
        "Stem Cell",
        "Body Lifting"
      ],
      "zh": [
        "干细胞",
        "身体提升"
      ]
    },
    "hours": "Mon-Fri 10:00-19:00 / Sat 10:00-16:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "GV성형외과는 줄기세포 치료와 바디리프팅 전문 성형외과입니다.",
      "en": "GV Plastic Surgery offers stem cell therapy and body lifting.",
      "zh": "GV整形外科提供干细胞疗法和全身提升项目。"
    },
    "doctors": [
      {
        "name": "문주혁",
        "title": "대표원장",
        "spec": [
          "리프팅",
          "성형"
        ]
      },
      {
        "name": "정동학",
        "title": "대표원장",
        "spec": [
          "이비인후과 전문의",
          "코성형"
        ]
      }
    ],
    "thumb": "hthumb/gv.jpg"
  },
  {
    "name": {
      "kr": "페이스라인성형외과의원",
      "en": "Faceline Plastic Surgery",
      "zh": "Faceline整形外科"
    },
    "dept": {
      "kr": "성형외과",
      "en": "Plastic Surgery",
      "zh": "整形外科"
    },
    "cat": "성형외과",
    "icon": "💆",
    "badge": "윤곽전문",
    "treats": {
      "kr": [
        "양악",
        "윤곽",
        "눈",
        "코"
      ],
      "en": [
        "Jaw",
        "Contouring",
        "Eye",
        "Nose"
      ],
      "zh": [
        "正颌",
        "轮廓",
        "眼部",
        "鼻部"
      ]
    },
    "hours": "Mon-Fri 09:30-19:00 / Fri 09:30-21:00 / Sat 09:30-17:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "페이스라인성형외과는 양악수술, 안면윤곽, 눈·코 성형 전문 병원입니다.",
      "en": "Faceline Plastic Surgery specializes in jaw surgery, facial contouring, and eye/nose surgery.",
      "zh": "Faceline整形外科专注于正颌手术、面部轮廓及眼鼻整形。"
    },
    "doctors": [
      {
        "name": "이태희",
        "title": "대표원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "이진수",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      },
      {
        "name": "이신정",
        "title": "원장",
        "spec": [
          "성형외과"
        ]
      }
    ],
    "thumb": "hthumb/faceline.jpg"
  },
  {
    "name": {
      "kr": "강남서울안과의원",
      "en": "Gangnam Seoul Eye Clinic",
      "zh": "江南首尔眼科"
    },
    "dept": {
      "kr": "안과",
      "en": "Ophthalmology",
      "zh": "眼科"
    },
    "cat": "안과",
    "icon": "👁",
    "badge": "안과전문",
    "treats": {
      "kr": [
        "라식",
        "라섹",
        "백내장"
      ],
      "en": [
        "LASIK",
        "LASEK",
        "Cataract"
      ],
      "zh": [
        "准分子激光",
        "LASEK",
        "白内障"
      ]
    },
    "hours": "Mon/Tue 09:30-18:30 / Fri 09:30-19:00 / Sat 09:00-16:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "강남서울안과는 라식, 라섹, 백내장 전문 안과입니다.",
      "en": "Gangnam Seoul Eye Clinic specializes in LASIK, LASEK, and cataract surgery.",
      "zh": "江南首尔眼科专门提供准分子激光视力矫正及白内障手术。"
    },
    "doctors": [
      {
        "name": "김용명",
        "title": "대표원장",
        "spec": [
          "시력교정(라식·라섹·렌즈삽입)",
          "백내장"
        ]
      }
    ],
    "thumb": "hthumb/kseye.jpg"
  },
  {
    "name": {
      "kr": "JD피부성형(장덕)",
      "en": "JD Skin & Plastic Clinic",
      "zh": "JD皮肤整形（张德）"
    },
    "dept": {
      "kr": "피부/줄기세포/한방",
      "en": "Skin / Stem Cell / Korean Medicine",
      "zh": "皮肤/干细胞/韩医"
    },
    "cat": "줄기세포/한방",
    "icon": "🌿",
    "badge": "줄기세포",
    "treats": {
      "kr": [
        "줄기세포",
        "한방",
        "슈링크",
        "쥬브젠"
      ],
      "en": [
        "Stem Cell",
        "Korean Medicine",
        "Shrink",
        "Juvelook"
      ],
      "zh": [
        "干细胞",
        "韩医",
        "Shrink",
        "Juvelook"
      ]
    },
    "hours": "Mon-Fri 09:00-19:00 / Sat 09:00-17:00",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "JD피부성형(장덕)은 줄기세포, 슈링크, 쥬브젠 전문 피부성형 의원이며 한방 진료도 함께 제공합니다.",
      "en": "JD Skin & Plastic Clinic offers stem cell therapy, Shrink, and Juvelook skin regeneration, alongside a Korean Medicine (Hanbang) department.",
      "zh": "JD皮肤整形（张德）提供干细胞疗法、Shrink及Juvelook等皮肤再生项目，同时设有韩医（韩方）诊疗科室。"
    },
    "doctors": []
  },
  {
    "name": { "kr": "나나성형외과", "en": "NANA Plastic Surgery", "zh": "NANA整形外科" },
    "dept": { "kr": "성형외과/피부", "en": "Plastic Surgery / Skin", "zh": "整形外科/皮肤" },
    "cat": "성형외과",
    "icon": "🌸",
    "badge": "성형전문",
    "treats": {
      "kr": ["눈성형", "코성형", "가슴성형", "안면윤곽·리프팅"],
      "en": ["Eye Surgery", "Nose Surgery", "Breast Surgery", "Contouring & Lifting"],
      "zh": ["眼部整形", "鼻部整形", "胸部整形", "轮廓·提升"]
    },
    "hours": "Mon-Sat 09:30-19:00 / Sun Closed",
    "loc": { "ko": "서울 압구정", "zh": "首尔狎鸥亭", "en": "Apgujeong, Seoul" },
    "overview": {
      "kr": "나나성형외과는 압구정로데오역 앞 청담동에 위치한 성형외과로 눈·코·가슴 성형과 안면윤곽·리프팅을 진료합니다.",
      "en": "NANA Plastic Surgery, in Cheongdam-dong near Apgujeong Rodeo Station, offers eye, nose and breast surgery as well as facial contouring and lifting.",
      "zh": "NANA整形外科位于清潭洞狎鸥亭罗德奥站前，提供眼部、鼻部、胸部整形及轮廓·提升项目。"
    },
    "doctors": []
  },
  {
    "name": { "kr": "디에이성형외과의원", "en": "DA Plastic Surgery", "zh": "DA整形外科" },
    "dept": { "kr": "성형외과/피부", "en": "Plastic Surgery / Skin", "zh": "整形外科/皮肤" },
    "cat": "성형외과/피부",
    "icon": "💠",
    "badge": "성형전문",
    "treats": {
      "kr": ["눈성형", "코성형", "안면윤곽", "가슴성형", "리프팅"],
      "en": ["Eye Surgery", "Nose Surgery", "Facial Contouring", "Breast Surgery", "Lifting"],
      "zh": ["眼部整形", "鼻部整形", "轮廓整形", "胸部整形", "提升"]
    },
    "hours": "Mon-Thu 10:00-19:00 / Fri 10:00-20:00 / Sat 10:00-18:00",
    "loc": { "ko": "서울 강남", "zh": "首尔江南", "en": "Gangnam, Seoul" },
    "overview": {
      "kr": "디에이성형외과의원은 테헤란로 단독 건물에 위치한 성형외과로 눈·코·안면윤곽·가슴 성형과 리프팅, 피부 진료를 함께 제공합니다.",
      "en": "DA Plastic Surgery, in its own building on Teheran-ro, provides eye, nose, facial contouring and breast surgery along with lifting and skin treatments.",
      "zh": "DA整形外科位于德黑兰路独栋大楼，提供眼部、鼻部、轮廓、胸部整形以及提升与皮肤诊疗服务。"
    },
    "doctors": []
  },
  {
    "name": { "kr": "VC성형외과의원", "en": "VC Plastic Surgery", "zh": "VC整形外科" },
    "dept": { "kr": "성형외과/피부/줄기세포", "en": "Plastic Surgery / Skin / Stem Cell", "zh": "整形外科/皮肤/干细胞" },
    "cat": "성형외과/줄기세포",
    "icon": "💎",
    "badge": "프리미엄",
    "treats": {
      "kr": ["이중턱 재배치", "눈밑 재배치", "하안검·중안면거상", "지방흡입", "줄기세포"],
      "en": ["Double Chin Contouring", "Under-eye Repositioning", "Lower Blepharoplasty & Midface Lift", "Liposuction", "Stem Cell"],
      "zh": ["双下巴重塑", "眼下重塑", "下眼睑·中面部提升", "吸脂", "干细胞"]
    },
    "hours": "Mon/Thu 10:00-19:00 / Tue/Fri 10:00-20:00 / Sat 10:00-16:30 / Wed Closed",
    "loc": { "ko": "서울 압구정", "zh": "首尔狎鸥亭", "en": "Apgujeong, Seoul" },
    "overview": {
      "kr": "VC성형외과의원은 압구정에 위치한 프라이빗 성형외과로, 성형외과 전문의가 상담부터 수술까지 직접 담당하며 피부·에스테틱 관리를 한 공간에서 함께 제공합니다.",
      "en": "VC Plastic Surgery in Apgujeong is a private clinic where a board-certified plastic surgeon handles consultation through surgery, with skin and esthetic care available in the same space.",
      "zh": "VC整形外科位于狎鸥亭，是一对一私密诊疗的整形外科，由整形外科专科医生亲自负责咨询与手术，并在同一空间内提供皮肤及美容管理服务。"
    },
    "doctors": [
      { "name": "최민석", "title": "대표원장", "spec": ["성형외과 전문의"] }
    ]
  },
  {
    "name": { "kr": "블랑쉬치과의원", "en": "Blanche Dental Clinic", "zh": "布朗雪牙科" },
    "dept": { "kr": "치과", "en": "Dental", "zh": "牙科" },
    "cat": "치과",
    "icon": "🦷",
    "badge": "치과전문",
    "treats": {
      "kr": ["임플란트", "치아교정", "라미네이트"],
      "en": ["Implant", "Orthodontics", "Laminate"],
      "zh": ["种植牙", "牙齿矫正", "贴面"]
    },
    "hours": "Mon/Thu/Fri 10:30-19:00 / Tue/Wed 10:30-21:00 / Sat 10:00-14:00 / Sun 10:00-16:00",
    "loc": { "ko": "서울 강남", "zh": "首尔江南", "en": "Gangnam, Seoul" },
    "overview": {
      "kr": "블랑쉬치과의원은 강남대로에 위치한 치과로 임플란트·치아교정·라미네이트를 진료합니다. 화·수 야간진료(~21시)와 주말 진료를 운영합니다.",
      "en": "Blanche Dental Clinic on Gangnam-daero provides implant, orthodontic and laminate treatments, with evening hours on Tue/Wed and weekend opening.",
      "zh": "布朗雪牙科位于江南大路，提供种植牙、牙齿矫正及贴面等诊疗项目。周二·周三设有夜间门诊，周末亦可就诊。"
    },
    "doctors": [
      { "name": "김태형", "title": "대표원장", "spec": ["치과"] },
      { "name": "박경리", "title": "원장", "spec": ["치과"] },
      { "name": "한건희", "title": "원장", "spec": ["치과"] },
      { "name": "백주희", "title": "원장", "spec": ["치과"] },
      { "name": "김하영", "title": "원장", "spec": ["치과"] },
      { "name": "김민주", "title": "원장", "spec": ["치과"] }
    ]
  },
  {
    "name": { "kr": "세라치과의원", "en": "CERA Dental Clinic", "zh": "CERA牙科" },
    "dept": { "kr": "치과", "en": "Dental", "zh": "牙科" },
    "cat": "치과",
    "icon": "🦷",
    "badge": "치과전문",
    "treats": {
      "kr": ["임플란트", "치아교정", "라미네이트", "세라멜"],
      "en": ["Implant", "Orthodontics", "Laminate"],
      "zh": ["种植牙", "牙齿矫正", "贴面"]
    },
    "hours": "Mon-Fri 10:00-19:00 / Sat·Sun Closed",
    "loc": { "ko": "서울 강남", "zh": "首尔江南", "en": "Gangnam, Seoul" },
    "overview": {
      "kr": "세라치과의원은 봉은사로에 위치한 치과로 임플란트·치아교정·라미네이트를 진료합니다.",
      "en": "CERA Dental Clinic on Bongeunsa-ro provides implant, orthodontic and laminate treatments.",
      "zh": "CERA牙科位于奉恩寺路，提供种植牙、牙齿矫正及贴面等诊疗项目。"
    },
    "doctors": [
      { "name": "우상엽", "title": "대표원장", "spec": ["치과"] }
    ]
  },
  {
    "name": { "kr": "KMI한국의학연구소 강남센터", "en": "KMI Korea Medical Institute (Gangnam)", "zh": "KMI韩国医学研究所 江南中心" },
    "dept": { "kr": "건강검진", "en": "Health Checkup", "zh": "健康体检" },
    "cat": "검진",
    "icon": "🩺",
    "badge": "검진전문",
    "treats": {
      "kr": ["종합검진", "외국인 검진", "정밀검진"],
      "en": ["Comprehensive Checkup", "Checkup for Foreigners", "Advanced Screening"],
      "zh": ["综合体检", "外籍人士体检", "精密体检"]
    },
    "hours": "Mon/Tue/Thu/Fri 07:00-16:00 / Wed/Sat 07:00-12:30",
    "loc": { "ko": "서울 강남", "zh": "首尔江南", "en": "Gangnam, Seoul" },
    "overview": {
      "kr": "KMI한국의학연구소 강남센터는 선릉역 인근 건강검진 전문기관으로, 외국인 전용 검진 프로그램을 운영하며 영어·중국어·일본어·몽골어 응대가 가능합니다.",
      "en": "KMI Korea Medical Institute Gangnam Center, near Seolleung Station, runs dedicated health checkup programs for international visitors with English, Chinese, Japanese and Mongolian support.",
      "zh": "KMI韩国医学研究所江南中心位于宣陵站附近，设有面向外籍人士的体检项目，可提供中文、英文、日文、蒙古语接待。"
    },
    "doctors": []
  },
  {
    "name": { "kr": "하나로의료재단 강남센터", "en": "Hanaro Medical Foundation (Gangnam)", "zh": "哈娜路医疗财团 江南中心" },
    "dept": { "kr": "건강검진", "en": "Health Checkup", "zh": "健康体检" },
    "cat": "검진",
    "icon": "🏥",
    "badge": "검진전문",
    "treats": {
      "kr": ["종합건강검진", "정밀검진", "해외검진(이민·유학·취업)"],
      "en": ["Comprehensive Checkup", "Advanced Screening", "Overseas (Immigration/Study/Work) Checkup"],
      "zh": ["综合健康体检", "精密体检", "海外体检（移民·留学·就业）"]
    },
    "hours": "By appointment / 예약제 (Tel 02-590-1111)",
    "loc": { "ko": "서울 강남", "zh": "首尔江南", "en": "Gangnam, Seoul" },
    "overview": {
      "kr": "하나로의료재단 강남센터(하나로리더스의원)는 역삼아이타워에 위치한 건강검진 전문기관으로 종합건강검진과 이민·유학·해외취업 검진을 제공합니다.",
      "en": "Hanaro Medical Foundation Gangnam Center (Hanaro Leaders Clinic), in Yeoksam I-Tower, provides comprehensive health checkups including immigration, study-abroad and overseas employment screenings.",
      "zh": "哈娜路医疗财团江南中心（Hanaro Leaders Clinic）位于驿三I-Tower，提供综合健康体检及移民·留学·海外就业体检服务。"
    },
    "doctors": []
  },
  {
    "name": { "kr": "강남스마트신경과의원", "en": "Gangnam Smart Neurology", "zh": "江南SMART神经内科" },
    "dept": { "kr": "신경과", "en": "Neurology", "zh": "神经内科" },
    "cat": "신경과",
    "icon": "🧠",
    "badge": "신경과전문",
    "treats": {
      "kr": ["어지럼증", "저림·떨림", "자율신경", "수면"],
      "en": ["Dizziness", "Numbness & Tremor", "Autonomic Nerve", "Sleep"],
      "zh": ["神经内科", "内科", "自主神经门诊", "睡眠门诊"]
    },
    "hours": "Mon-Fri 10:00-20:00 / Sat 10:00-15:00 / Sun Closed",
    "loc": { "ko": "서울 강남", "zh": "首尔江南", "en": "Gangnam, Seoul" },
    "overview": {
      "kr": "강남스마트신경과의원은 강남대로에 위치한 신경과로 어지럼증·저림·떨림·자율신경·수면 클리닉을 운영합니다.",
      "en": "Gangnam Smart Neurology on Gangnam-daero runs clinics for dizziness, numbness and tremor, autonomic nerve conditions and sleep.",
      "zh": "江南SMART神经内科位于江南大路，设有神经内科及内科专科医生门诊。"
    },
    "doctors": [
      { "name": "권하님", "title": "대표원장", "spec": ["신경과 전문의"] },
      { "name": "손형곤", "title": "대표원장", "spec": ["내과 전문의"] },
      { "name": "서진영", "title": "대표원장", "spec": ["신경과 전문의"] }
    ]
  }
];
