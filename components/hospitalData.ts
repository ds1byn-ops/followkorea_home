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
      "kr": "삼성서울병원",
      "en": "Samsung Medical Center",
      "zh": "三星首尔医院"
    },
    "dept": {
      "kr": "종합병원/국제진료센터",
      "en": "General Hospital / International Healthcare Center",
      "zh": "综合医院/国际诊疗中心"
    },
    "cat": "검진",
    "badge": "NEW",
    "treats": {
      "kr": [
        "종합건강검진",
        "암 진료(삼성암병원)",
        "심장·뇌혈관",
        "양성자치료",
        "장기이식",
        "국제진료센터 1:1 코디"
      ],
      "en": [
        "Comprehensive Checkup",
        "Cancer Care (SCCC)",
        "Heart·Brain·Vascular",
        "Proton Therapy",
        "Organ Transplant",
        "IHC 1:1 Coordination"
      ],
      "zh": [
        "综合体检",
        "癌症诊疗(三星癌症医院)",
        "心脑血管",
        "质子治疗",
        "器官移植",
        "国际诊疗中心1:1协调"
      ]
    },
    "hours": "Mon-Fri (International Healthcare Center, by appointment) · +82-2-3410-0200",
    "loc": {
      "ko": "서울 강남 (일원)",
      "zh": "首尔江南(逸院)",
      "en": "Irwon, Gangnam, Seoul"
    },
    "overview": {
      "kr": "삼성서울병원은 1994년 개원한 서울 강남구 일원로 81의 대학병원급 종합병원으로, 삼성암병원·심장뇌혈관병원·양성자치료센터·건강의학센터를 갖추고 있습니다. 1995년부터 운영 중인 국제진료센터(IHC)는 120여 개국 환자를 진료해 왔으며, 외국인 전용 외래와 1:1 코디네이션, 통역, 화상 상담, 전문센터 연계 진료를 제공합니다.",
      "en": "Samsung Medical Center, founded in 1994 at 81 Irwon-ro, Gangnam-gu, is a leading academic medical center with the Samsung Comprehensive Cancer Center, Heart Vascular Stroke Institute, Proton Therapy Center and Health Promotion Center. Its International Healthcare Center, operating since 1995, has served patients from over 120 countries with a dedicated outpatient clinic, 1:1 care coordination, interpreters, video consultations and referrals to specialty centers.",
      "zh": "三星首尔医院成立于1994年，位于首尔江南区逸院路81，是大学医院级综合医院，设有三星癌症医院、心脏脑血管医院、质子治疗中心和健康医学中心。自1995年起运营的国际诊疗中心(IHC)已接诊来自120多个国家的患者，提供外国人专属门诊、1:1协调、翻译、视频咨询及专科中心转诊。"
    },
    "doctors": [],
    "thumb": "hthumb/smc.jpg"
  },
  {
    "name": {
      "kr": "멜론성형외과",
      "en": "MELON Plastic Surgery",
      "zh": "MELON整形外科"
    },
    "dept": {
      "kr": "성형외과/가슴성형 전문",
      "en": "Plastic Surgery / Breast Specialist",
      "zh": "整形外科/胸部整形专科"
    },
    "cat": "성형외과",
    "badge": "NEW",
    "treats": {
      "kr": ["가슴성형(모티바·멘토)", "가슴교정", "가슴 재수술", "유두교정", "여유증", "부유방", "유방재건"],
      "en": ["Breast Augmentation (Motiva·Mentor)", "Breast Correction", "Revision Surgery", "Nipple Correction", "Gynecomastia", "Accessory Breast", "Breast Reconstruction"],
      "zh": ["假体隆胸(魔滴·曼托)", "胸部矫正", "胸部修复手术", "乳头矫正", "男性乳房发育", "副乳", "乳房再造"]
    },
    "hours": "Mon-Thu 09:30-18:30 / Fri 09:30-20:00 / Sat 09:30-16:00 / Sun·Holiday Closed",
    "loc": {
      "ko": "서울 강남구 강남역(테헤란로)",
      "zh": "首尔江南区·江南站(德黑兰路)",
      "en": "Gangnam Stn., Seoul"
    },
    "overview": {
      "kr": "멜론성형외과는 강남역 인근 서림빌딩 6층의 가슴성형 전문 의원입니다. 김주원 대표원장이 직접 진료하며 모티바·멘토 보형물 가슴성형과 처진가슴 교정·축소·재수술·유두교정·여유증·유방재건까지, 주치의의 1:1 세심한 상담으로 최적의 모양을 설계합니다.",
      "en": "MELON Plastic Surgery, near Gangnam Station, is a breast surgery specialist clinic led by Dr. Kim Ju-won — covering Motiva and Mentor implant augmentation, ptosis correction, reduction, revision surgery, nipple correction, gynecomastia and breast reconstruction with meticulous one-on-one consultation.",
      "zh": "MELON整形外科是位于江南站商圈的胸部整形专科医院，由金周源代表院长亲自主诊。专注于魔滴(Motiva)·曼托(Mentor)假体隆胸与下垂矫正·缩胸·修复手术·乳头矫正·男性乳房发育·乳房再造，以主治医生一对一细致面诊著称。"
    },
    "doctors": [
      {
        "name": "김주원",
        "title": "대표원장",
        "spec": ["가슴성형·가슴교정", "가슴 재수술", "유방재건"]
      }
    ],
    "thumb": "hthumb/melon.jpg"
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
    "cat": "피부",
    "badge": "NEW",
    "treats": {
      "kr": ["울쎄라", "써마지", "온다", "실리프팅", "수광·리쥬란", "필러", "보톡스", "줄기세포"],
      "en": ["Ultherapy", "Thermage", "ONDA", "Thread Lifting", "Skin Booster", "Filler", "Botox", "Stem Cell"],
      "zh": ["超声刀", "热玛吉", "ONDA", "线雕提升", "水光·丽珠兰", "玻尿酸", "肉毒", "干细胞"]
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
        "spec": ["대한미용성형레이저학회 정회원", "리프팅·레이저", "쁘띠·주사시술"]
      },
      {
        "name": "오예진",
        "title": "부원장",
        "spec": ["대한미용학회 정회원", "피부·수광", "스킨부스터"]
      }
    ],
    "thumb": "hthumb/reberry.jpg"
  },
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
    "cat": "성형외과",
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
      "en": "CHAUM Anti-aging Center",
      "zh": "CHAUM抗衰老中心"
    },
    "dept": {
      "kr": "종합검진/항노화/줄기세포/피부",
      "en": "Health Checkup / Anti-aging / Stem Cell / Skin",
      "zh": "综合体检/抗衰老/干细胞/皮肤"
    },
    "cat": "검진/항노화/줄기세포",
    "badge": "프리미엄",
    "treats": {
      "kr": [
        "VIP 종합검진",
        "정밀 암검진",
        "전신 MRI 검진",
        "항노화·면역 검사",
        "줄기세포 재생",
        "리프팅·스킨부스터"
      ],
      "en": [
        "VIP Comprehensive Checkup",
        "Advanced Cancer Screening",
        "Whole-body MRI",
        "Anti-aging & Immunity Test",
        "Stem Cell Regeneration",
        "Lifting & Skin Booster"
      ],
      "zh": [
        "VIP综合体检",
        "精密癌症筛查",
        "全身MRI体检",
        "抗衰老·免疫检查",
        "干细胞再生",
        "提升·水光针"
      ]
    },
    "hours": "Mon-Fri 08:30-17:30",
    "loc": {
      "ko": "서울 강남",
      "zh": "首尔江南",
      "en": "Gangnam, Seoul"
    },
    "overview": {
      "kr": "차움은 개인 HIVE룸에서 진행하는 VIP 종합검진 센터입니다. 검진 전 담당의 1:1 상담으로 프로그램을 맞추고, 전담 간호사와 중국어·영어 통역이 전 과정을 동행하며 당일 결과 상담까지 제공합니다. 기본검진·정밀암검진·전신검진(MRI)·Noble VIP 4종에 소화기·심장·뇌·면역·항노화 추가검진을 선택할 수 있고, 줄기세포 재생과 리프팅·스킨부스터 등 피부 프로그램도 함께 운영합니다.",
      "en": "CHAUM offers VIP checkups in private HIVE rooms with a 1:1 pre-consultation, a dedicated nurse and English/Chinese interpreter throughout, and same-day result consultation. Four main programs (Basic, Intensive Cancer, Whole Body, Noble) can be combined with digestive, heart, brain, immunity and anti-aging add-ons, alongside stem cell regeneration and skin programs.",
      "zh": "CHAUM抗衰老中心提供VIP专属体检（个人HIVE诊室、专属护士与中文翻译全程陪同、当日结果面诊），设有综合体检、精密癌症筛查、全身MRI、抗衰老与免疫检查，并提供干细胞再生、提升及皮肤管理项目。"
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
      "kr": "성형외과/피부/줄기세포",
      "en": "Plastic Surgery / Skin / Stem Cell",
      "zh": "整形外科/皮肤/干细胞"
    },
    "cat": "성형외과/줄기세포",
    "badge": "리프팅전문",
    "treats": {
      "kr": [
        "롱브이리프팅",
        "안면거상",
        "눈성형(상·하안검)",
        "코성형",
        "가슴성형",
        "줄기세포테라피",
        "모발이식"
      ],
      "en": [
        "Long-V Thread Lifting",
        "Face Lift",
        "Eye Surgery (Upper/Lower)",
        "Nose Surgery",
        "Breast Surgery",
        "Stem Cell Therapy",
        "Hair Transplant"
      ],
      "zh": [
        "Long-V线雕提升",
        "面部提升",
        "眼部整形(上·下眼睑)",
        "鼻部整形",
        "胸部整形",
        "干细胞疗法",
        "植发"
      ]
    },
    "hours": "Mon-Fri 10:00-19:00 / Sat 10:00-16:00 / Sun Closed",
    "loc": {
      "ko": "서울 강남 (논현역)",
      "zh": "首尔江南 (论岘站)",
      "en": "Gangnam, Seoul (Nonhyeon Stn.)"
    },
    "overview": {
      "kr": "더뷰티성형외과는 논현역 인근에 위치한 성형외과로, 원장 5인이 분야별 협진하며 롱브이리프팅·안면거상·눈/코 성형·가슴성형·줄기세포테라피·모발이식을 진료합니다.",
      "en": "The Beauty Plastic Surgery, near Nonhyeon Station, operates with five directors collaborating by specialty, offering thread and face lifting, eye and nose surgery, breast surgery, stem cell therapy and hair transplant.",
      "zh": "THE BEAUTY整形外科位于论岘站附近，由整形外科专科医生等5位院长按领域协诊，提供线雕提升、面部提升、眼部及鼻部整形、胸部整形、干细胞疗法与植发。"
    },
    "doctors": [
      { "name": "이영근", "title": "대표원장", "spec": ["의학박사", "리프팅·안티에이징", "쁘띠성형"] },
      { "name": "정성훈", "title": "원장", "spec": ["성형외과 전문의", "안면거상", "가슴성형", "중년 눈수술"] },
      { "name": "신국현", "title": "원장", "spec": ["성형외과 전문의", "안면거상·이마거상", "눈성형·코성형"] },
      { "name": "정진수", "title": "원장", "spec": ["울쎄라·써마지", "실리프팅", "쁘띠성형"] },
      { "name": "문보민", "title": "원장", "spec": ["성형외과 전문의", "눈성형", "코성형"] }
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
    "doctors": [],
    "thumb": "hthumb/jdskin.jpg"
  },
  {
    "name": { "kr": "나나성형외과", "en": "NANA Plastic Surgery", "zh": "NANA整形外科" },
    "dept": { "kr": "성형외과/피부", "en": "Plastic Surgery / Skin", "zh": "整形外科/皮肤" },
    "cat": "성형외과",
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
    "doctors": [],
    "thumb": "hthumb/nana.jpg"
  },
  {
    "name": { "kr": "디에이성형외과의원", "en": "DA Plastic Surgery", "zh": "DA整形外科" },
    "dept": { "kr": "성형외과/피부", "en": "Plastic Surgery / Skin", "zh": "整形外科/皮肤" },
    "cat": "성형외과/피부",
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
    "doctors": [],
    "thumb": "hthumb/daprs.jpg"
  },
  {
    "name": { "kr": "VC성형외과의원", "en": "VC Plastic Surgery", "zh": "VC整形外科" },
    "dept": { "kr": "성형외과/피부/줄기세포", "en": "Plastic Surgery / Skin / Stem Cell", "zh": "整形外科/皮肤/干细胞" },
    "cat": "성형외과/줄기세포",
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
    ],
    "thumb": "hthumb/vcps.jpg"
  },
  {
    "name": { "kr": "블랑쉬치과의원", "en": "Blanche Dental Clinic", "zh": "布朗雪牙科" },
    "dept": { "kr": "치과", "en": "Dental", "zh": "牙科" },
    "cat": "치과",
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
    ],
    "thumb": "hthumb/blanche.jpg"
  },
  {
    "name": { "kr": "세라치과의원", "en": "CERA Dental Clinic", "zh": "CERA牙科" },
    "dept": { "kr": "치과", "en": "Dental", "zh": "牙科" },
    "cat": "치과",
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
    ],
    "thumb": "hthumb/cera.jpg"
  },
  {
    "name": { "kr": "KMI한국의학연구소 강남센터", "en": "KMI Korea Medical Institute (Gangnam)", "zh": "KMI韩国医学研究所 江南中心" },
    "dept": { "kr": "건강검진", "en": "Health Checkup", "zh": "健康体检" },
    "cat": "검진",
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
    "doctors": [],
    "thumb": "hthumb/kmi.jpg"
  },
  {
    "name": { "kr": "분당차병원", "en": "CHA Bundang Medical Center", "zh": "盆唐CHA医院" },
    "dept": { "kr": "종합검진/국제진료", "en": "Health Checkup / International Clinic", "zh": "综合体检/国际诊疗" },
    "thumb": "hthumb/chabundang.jpg",
    "cat": "검진",
    "badge": "검진전문",
    "treats": {
      "kr": ["STANDARD 기본검진", "EXECUTIVE 검진", "PREMIUM 심장·뇌", "VIP 숙박형 검진", "INTENSIVE 특화검진"],
      "en": ["Standard Checkup", "Executive Checkup", "Premium Heart/Brain", "VIP Overnight Checkup", "Intensive Screening"],
      "zh": ["基础体检", "行政人员体检", "心脏·脑部精密体检", "VIP住宿型体检", "特化精密体检"]
    },
    "hours": "Mon-Fri 08:00-17:00 / Sat 08:00-12:00",
    "loc": { "ko": "경기 성남 분당", "zh": "京畿道城南市盆唐", "en": "Bundang, Seongnam" },
    "overview": {
      "kr": "분당차병원 건강증진센터는 국제진료 전담팀을 두고 성별·연령·병력에 맞춘 1:1 맞춤 검진을 제공합니다. PET-CT·MRI 등 최신 장비와 VIP존·레이디존을 갖췄고, 당일 검진부터 1박 2일 숙박형까지 선택할 수 있습니다.",
      "en": "The Health Promotion Center of CHA Bundang Medical Center runs a dedicated international clinic offering 1:1 customized checkups by sex, age and history, with PET-CT and MRI, VIP and Lady zones, and options from same-day to overnight programs.",
      "zh": "盆唐CHA医院健康增进中心设有国际诊疗部，按性别·年龄提供1:1定制体检，配备PET-CT、MRI等尖端设备，并设VIP专区与女性专区，可选当日或住宿型（1晚2日）体检。"
    },
    "doctors": []
  },
  {
    "name": { "kr": "하나로의료재단 강남센터", "en": "Hanaro Medical Foundation (Gangnam)", "zh": "哈娜路医疗财团 江南中心" },
    "dept": { "kr": "건강검진", "en": "Health Checkup", "zh": "健康体检" },
    "cat": "검진",
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
    "doctors": [],
    "thumb": "hthumb/hanaro.jpg"
  },
  {
    "name": { "kr": "강남스마트신경과의원", "en": "Gangnam Smart Neurology", "zh": "江南SMART神经内科" },
    "dept": { "kr": "신경과", "en": "Neurology", "zh": "神经内科" },
    "cat": "신경과",
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
    ],
    "thumb": "hthumb/gnsmart.jpg"
  },
  {
    "name": { "kr": "지우의원", "en": "JIWOO Clinic", "zh": "挚友医院" },
    "dept": { "kr": "피부과", "en": "Dermatology", "zh": "皮肤科" },
    "cat": "피부",
    "badge": "NEW",
    "treats": {
      "kr": ["리쥬란", "울쎄라 PRIME", "써마지 FLX", "포텐자", "피코레이저"],
      "en": ["Rejuran", "Ultherapy PRIME", "Thermage FLX", "Potenza", "Pico Laser"],
      "zh": ["Rejuran", "Ultherapy PRIME", "热玛吉FLX", "Potenza", "皮秒激光"]
    },
    "hours": "Mon-Thu 10:00-19:00 / Fri 10:00-20:00 / Sat 09:30-16:30 (Lunch 13:30-14:30)",
    "loc": { "ko": "서울 강남", "zh": "首尔江南", "en": "Gangnam, Seoul" },
    "overview": {
      "kr": "지우의원(JIWOO Clinic)은 강남역 인근에 위치한 피부과로 리쥬란, 울쎄라 PRIME, 써마지 FLX, 포텐자, 피코레이저 등 피부 시술을 전문으로 합니다.",
      "en": "JIWOO Clinic, near Gangnam Station, specializes in dermatology treatments including Rejuran, Ultherapy PRIME, Thermage FLX, Potenza, and pico laser.",
      "zh": "挚友医院（JIWOO Clinic）位于江南站附近，专注于Rejuran、Ultherapy、热玛吉FLX、Potenza及皮秒激光等皮肤管理项目。"
    },
    "doctors": [
      { "name": "김회원", "title": "대표원장", "spec": ["피부과"] },
      { "name": "김우형", "title": "원장", "spec": ["피부과"] },
      { "name": "조임철", "title": "원장", "spec": ["피부과"] }
    ],
    "thumb": "hthumb/jiwoo.jpg"
  },
  {
    "name": { "kr": "온오프피부과의원", "en": "ONOFF Dermatology Clinic", "zh": "ONOFF皮肤科" },
    "dept": { "kr": "피부과", "en": "Dermatology", "zh": "皮肤科" },
    "cat": "피부",
    "badge": "NEW",
    "treats": {
      "kr": ["울쎄라", "써마지", "소프웨이브", "리프팅"],
      "en": ["Ulthera", "Thermage", "Sofwave", "Lifting"],
      "zh": ["超声刀", "热玛吉", "索夫波", "提升"]
    },
    "hours": "예약제 (진료시간 문의)",
    "loc": { "ko": "서울 강남", "zh": "首尔江南", "en": "Gangnam, Seoul" },
    "overview": {
      "kr": "온오프피부과의원은 울쎄라, 써마지, 소프웨이브 등 리프팅 시술을 대표로 하는 피부과입니다.",
      "en": "ONOFF Dermatology Clinic specializes in lifting treatments such as Ulthera, Thermage and Sofwave.",
      "zh": "ONOFF皮肤科以超声刀、热玛吉、索夫波等提升类抗衰项目为特色。"
    },
    "doctors": [],
    "thumb": "hthumb/onoff.jpg"
  },
  {
    "name": { "kr": "셀온피부과의원", "en": "Cellon Clinic", "zh": "CELLON皮肤科" },
    "dept": { "kr": "피부과", "en": "Dermatology", "zh": "皮肤科" },
    "cat": "피부",
    "badge": "NEW",
    "treats": {
      "kr": ["색소치료", "리프팅", "보톡스", "필러"],
      "en": ["Pigmentation Treatment", "Lifting", "Botox", "Filler"],
      "zh": ["色素治疗", "提升", "肉毒素", "填充"]
    },
    "hours": "Mon-Fri 10:00-19:00 / Sat 10:00-16:00 / Sun·Holiday Closed",
    "loc": { "ko": "서울 강남", "zh": "首尔江南", "en": "Gangnam, Seoul" },
    "overview": {
      "kr": "셀온피부과의원(청담)은 피부과 전문의 원장이 직접 진료하며 색소치료, 리프팅, 보톡스, 필러를 전문으로 합니다.",
      "en": "Cellon Clinic in Cheongdam is led by a board-certified dermatologist, specializing in pigmentation treatment, lifting, Botox, and filler.",
      "zh": "CELLON皮肤科（清潭）由皮肤科专科院长亲自诊疗，专注于色素治疗、提升、肉毒素及填充项目。"
    },
    "doctors": [
      { "name": "강승훈", "title": "대표원장", "spec": ["피부과 전문의"] }
    ],
    "thumb": "hthumb/cellon.jpg"
  },
  {
    "name": { "kr": "아우레아의원", "en": "Aurea Clinic", "zh": "AUREA皮肤科" },
    "dept": { "kr": "피부과", "en": "Dermatology", "zh": "皮肤科" },
    "cat": "피부",
    "badge": "NEW",
    "treats": {
      "kr": ["리프팅", "스킨부스터", "보톡스", "필러"],
      "en": ["Lifting", "Skin Booster", "Botox", "Filler"],
      "zh": ["提升", "皮肤焕活针", "肉毒素", "填充"]
    },
    "hours": "Mon-Fri 10:30-19:30 / Sat·Sun·Holiday 11:00-18:00 (Open all year)",
    "loc": { "ko": "서울 명동", "zh": "首尔明洞", "en": "Myeongdong, Seoul" },
    "overview": {
      "kr": "아우레아의원(명동)은 명동 중심가에 위치해 연중무휴로 운영되며 리프팅(울쎄라·써마지·온다), 스킨부스터, 보톡스, 필러를 전문으로 합니다.",
      "en": "Aurea Clinic in Myeongdong is open year-round, specializing in lifting (Ultherapy, Thermage, ONDA), skin boosters, Botox, and fillers.",
      "zh": "AUREA皮肤科（明洞）位于首尔明洞中心，全年无休，专注于提升（超声刀·热玛吉·ONDA）、皮肤焕活、肉毒素与填充项目。"
    },
    "doctors": [
      { "name": "강대영", "title": "대표원장", "spec": ["피부클리닉"] }
    ],
    "thumb": "hthumb/aurea.jpg"
  },
  {
    "name": {
      "kr": "타토아의원",
      "en": "TATOA Clinic (Sinsa)",
      "zh": "TATOA皮肤科(新沙)"
    },
    "dept": {
      "kr": "피부과 (문신·반영구 제거 특화)",
      "en": "Dermatology (Tattoo & PMU Removal)",
      "zh": "皮肤科 (纹身·半永久去除特化)"
    },
    "cat": "피부",
    "badge": "NEW",
    "treats": {
      "kr": ["문신·반영구 제거", "레이저토닝", "제모", "보톡스·필러", "실리프팅"],
      "en": ["Tattoo & PMU Removal", "Laser Toning", "Hair Removal", "Botox & Filler", "Thread Lift"],
      "zh": ["纹身·半永久去除", "激光净肤", "脱毛", "肉毒·玻尿酸", "线雕提升"]
    },
    "hours": "Mon-Fri 10:00-20:00 / Sat 10:00-15:00 (Sun/Holiday Closed)",
    "loc": {
      "ko": "서울 강남구 신사역",
      "zh": "首尔江南区·新沙站",
      "en": "Sinsa Stn., Seoul"
    },
    "overview": {
      "kr": "타토아의원은 신사역 인근 ICT타워 2층의 피부과로, 문신·반영구 제거와 레이저 피부관리에 특화되어 있습니다. 젠틀맥스프로·울쎄라·써마지·슈링크 등 장비를 보유하며 원주점·명동센터를 함께 운영합니다.",
      "en": "TATOA Clinic, on the 2nd floor of ICT Tower near Sinsa Station, specializes in tattoo & permanent-makeup removal and laser skin care, equipped with GentleMax Pro, Ulthera, Thermage and Shurink, with branches in Wonju and Myeongdong.",
      "zh": "TATOA皮肤科位于新沙站旁ICT大厦2层，专注纹身·半永久去除与激光皮肤管理，拥有GentleMax Pro、Ulthera、Thermage、Shurink等设备，并在原州和明洞设有分支。"
    },
    "doctors": [
      { "name": "최동준", "title": "대표원장", "spec": ["문신·반영구 제거", "레이저 피부관리"] }
    ],
    "thumb": "hthumb/tatoa.jpg"
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
    "cat": "피부",
    "badge": "NEW",
    "treats": {
      "kr": ["울쎄라·소프웨이브·써마지", "스킨부스터·콜라겐부스터", "보톡스·필러", "바디·웰니스 수액"],
      "en": ["Ulthera·Sofwave·Thermage", "Skin & Collagen Boosters", "Botox & Filler", "Body Care & Wellness IV"],
      "zh": ["Ulthera·Sofwave·Thermage提升", "皮肤·胶原蛋白助推", "肉毒·玻尿酸", "身体管理·营养输液"]
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
      { "name": "하재선", "title": "대표원장", "spec": ["가정의학과 전문의"] }
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
    "cat": "성형외과",
    "badge": "NEW",
    "treats": {
      "kr": ["쌍꺼풀·눈매교정·트임", "상·하안검·눈썹거상", "코성형·재수술", "리쥬란·보톡스·실리프팅"],
      "en": ["Double Eyelid & Eye Shape", "Blepharoplasty & Brow Lift", "Rhinoplasty & Revision", "Rejuran·Botox·Thread Lifting"],
      "zh": ["双眼皮·眼型矫正·开眼角", "上/下眼睑·提眉", "鼻整形·修复手术", "丽珠兰·肉毒·线雕提升"]
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
      { "name": "최승호", "title": "대표원장", "spec": ["눈성형", "코성형·재수술"] }
    ],
    "thumb": "hthumb/chai.jpg"
  },
  {
    "name": { "kr": "강남JS병원", "en": "Gangnam JS Hospital", "zh": "江南JS医院" },
    "dept": { "kr": "정형외과·신경외과", "en": "Orthopedics · Neurosurgery", "zh": "骨科·神经外科" },
    "cat": "정형·척추",
    "badge": "NEW",
    "treats": {
      "kr": ["줄기세포 연골재생", "척추내시경", "전방십자인대 재건", "BMAC 주사", "인공관절"],
      "en": ["Stem Cell Cartilage Regeneration", "Endoscopic Spine Surgery", "ACL Reconstruction", "BMAC Injection", "Joint Surgery"],
      "zh": ["干细胞软骨再生", "脊柱内镜", "前交叉韧带重建", "BMAC注射", "关节手术"]
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
      { "name": "송준섭", "title": "대표원장", "spec": ["정형외과 전문의"] },
      { "name": "김나민", "title": "병원장", "spec": ["정형외과"] }
    ],
    "thumb": "hthumb/gnjs.jpg"
  },
  {
    "name": { "kr": "연세안마취통증의학과", "en": "Yonsei An Pain Clinic", "zh": "延世安疼痛医学科" },
    "dept": { "kr": "마취통증의학과(비수술 통증치료)", "en": "Anesthesiology & Pain Medicine", "zh": "麻醉疼痛医学科(非手术治疗)" },
    "cat": "정형·척추",
    "badge": "NEW",
    "treats": {
      "kr": ["신경차단·하이드로디섹션", "도수치료", "체외충격파", "척추 감압치료", "PDRN·프롤로 주사"],
      "en": ["Nerve Block & Hydrodissection", "Manual Therapy", "ESWT (Shockwave)", "Spinal Decompression", "PDRN & Prolotherapy"],
      "zh": ["神经阻滞·神经水分离", "徒手治疗", "体外冲击波", "脊柱减压治疗", "PDRN·增生疗法注射"]
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
      { "name": "조남룡", "title": "대표원장", "spec": ["신경외과"] },
      { "name": "김지웅", "title": "원장", "spec": ["통증의학"] },
      { "name": "이지은", "title": "원장", "spec": ["마취통증의학과"] },
      { "name": "송신미", "title": "원장", "spec": ["마취통증의학과"] },
      { "name": "김계숙", "title": "원장", "spec": ["통증의학"] },
      { "name": "이상은", "title": "원장", "spec": ["통증의학"] },
      { "name": "최영서", "title": "원장", "spec": ["통증의학"] },
      { "name": "박해리", "title": "원장", "spec": ["통증의학"] },
      { "name": "최낙철", "title": "원장", "spec": ["통증의학"] }
    ],
    "thumb": "hthumb/yonseian.jpg"
  },
  {
    "name": { "kr": "멜로우피부과의원 청담점", "en": "Mellow Dermatology Clinic Cheongdam", "zh": "Mellow皮肤科(清潭店)" },
    "dept": { "kr": "피부과", "en": "Dermatology", "zh": "皮肤科" },
    "cat": "피부",
    "badge": "NEW",
    "treats": {
      "kr": ["써마지·울쎄라피 프라임", "온다·소프라노 티타늄", "스킨부스터·리쥬란", "보톡스·필러", "피코토닝·색소"],
      "en": ["Thermage & Ultherapy Prime", "ONDA & Soprano Titanium", "Skin Boosters & Rejuran", "Botox & Filler", "Pico Toning & Pigment"],
      "zh": ["热玛吉·超声炮Prime", "ONDA·Soprano", "皮肤管理·丽珠兰", "肉毒素·玻尿酸", "皮秒净肤·色素"]
    },
    "hours": "Mon 10:00-20:00 · Tue-Thu 10:00-19:00 · Fri 10:00-21:00 · Sat 10:00-16:00",
    "loc": {
      "ko": "서울 강남구 도산대로 429, 2층",
      "zh": "首尔江南·清潭",
      "en": "Cheongdam, Seoul"
    },
    "overview": {
      "kr": "멜로우피부과의원 청담점(Mellow Dermatology Clinic)은 도산대로 429에 위치한 피부과 전문 의원입니다. 대표원장 박복원을 중심으로 써마지·울쎄라피 프라임·온다 등 리프팅과 멜로우부스터·리투오·레이어드 프로그램 등 맞춤 스킨부스터, 4개 브랜드 보톡스와 필러, 피코토닝 색소치료·제모까지 폭넓은 피부 프로그램을 운영합니다. 금요일 야간(21시)·토요일 진료로 방문이 편리합니다.",
      "en": "Mellow Dermatology Clinic Cheongdam, at 429 Dosan-daero, is a dermatology specialty clinic led by Dr. Park Bok-won. It offers lifting (Thermage, Ultherapy Prime, ONDA), customized skin boosters (Mellow Booster, Re2O, layered programs), four brands of botulinum toxin, fillers, pico toning for pigmentation, and hair removal. Open late on Fridays (9pm) and on Saturdays.",
      "zh": "Mellow皮肤科清潭店位于岛山大路429号，是皮肤科专科医院，由代表院长朴福源主诊。提供热玛吉·超声炮Prime·ONDA等提升项目、Mellow定制水光·Re2O·分层水光等皮肤管理，四大品牌肉毒素与玻尿酸填充、皮秒净肤色素治疗及脱毛等全方位皮肤项目。周五夜间(21点)·周六也可就诊。"
    },
    "doctors": [
      { "name": "박복원", "title": "대표원장", "spec": ["피부과"] }
    ],
    "thumb": "hthumb/mellow.jpg"
  },
  {
    "name": { "kr": "더플러스성형외과", "en": "THE PLUS Plastic Surgery", "zh": "THE PLUS整形外科" },
    "dept": { "kr": "성형외과(코 재건 특화)", "en": "Plastic Surgery (Nasal Reconstruction)", "zh": "整形外科(鼻部再造)" },
    "cat": "성형외과",
    "badge": "NEW",
    "treats": {
      "kr": ["코 재건술", "코 재수술", "코성형", "안면윤곽", "눈성형"],
      "en": ["Nasal Reconstruction", "Revision Rhinoplasty", "Rhinoplasty", "Facial Contouring", "Eye Surgery"],
      "zh": ["鼻部再造手术", "鼻修复手术", "鼻整形", "面部轮廓", "眼部整形"]
    },
    "hours": "",
    "loc": {
      "ko": "서울 강남구 가로수길 9, 3-4층 (신사동)",
      "zh": "首尔新沙·林荫路",
      "en": "Garosu-gil, Sinsa, Seoul"
    },
    "overview": {
      "kr": "더플러스성형외과(THE PLUS Plastic Surgery)는 신사 가로수길에 위치한 성형외과로, 코 재건술·코 재수술 등 난도 높은 코 수술에 특화되어 있습니다. 정재용 원장을 비롯한 성형외과 의료진이 직접 상담·집도하며, 안면윤곽·눈·가슴 성형도 함께 진료합니다. 영어·중국어·일본어·러시아어·태국어 사이트를 운영할 만큼 해외환자 진료 경험이 풍부합니다.",
      "en": "THE PLUS Plastic Surgery, on Garosu-gil in Sinsa, specializes in advanced nose surgery — nasal reconstruction and revision rhinoplasty — alongside facial contouring, eye and breast surgery. Led by Dr. Jung Jae-yong, the clinic has extensive experience with international patients, running dedicated English, Chinese, Japanese, Russian and Thai websites.",
      "zh": "THE PLUS整形外科位于新沙洞林荫路，专注高难度鼻部手术——鼻部再造与鼻修复手术，同时开展面部轮廓·眼部·胸部整形。由郑在容院长等专科医生亲自面诊与主刀，运营英·中·日·俄·泰多语官网，国际患者诊疗经验丰富。"
    },
    "doctors": [
      { "name": "정재용", "title": "원장", "spec": ["코성형·코재건"] }
    ],
    "thumb": "hthumb/theplus.jpg"
  },
  {
    "name": { "kr": "아도의원", "en": "ADO Clinic", "zh": "ADO皮肤科" },
    "dept": { "kr": "피부과(안티에이징·리프팅)", "en": "Dermatology (Anti-aging & Lifting)", "zh": "皮肤科(抗衰·提升)" },
    "cat": "피부",
    "badge": "NEW",
    "treats": {
      "kr": ["울쎄라피 프라임·써마지 FLX", "스컬트라·리쥬란", "필러·보톡스", "줄기세포 프로그램", "온다·포텐자"],
      "en": ["Ultherapy Prime & Thermage FLX", "Sculptra & Rejuran", "Filler & Botox", "Stem Cell Programs", "ONDA & Potenza"],
      "zh": ["超声炮Prime·凤凰电波FLX", "童颜针·丽珠兰", "玻尿酸·肉毒素", "干细胞项目", "ONDA·黄金微针"]
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
      { "name": "박승원", "title": "대표원장", "spec": ["피부과"] }
    ],
    "thumb": "hthumb/ado.jpg"
  },
  {
    "name": { "kr": "스튜디오 숲 서울", "en": "Studio Soop Seoul", "zh": "Studio Soop 首尔" },
    "dept": { "kr": "반영구 메이크업 · 사진 스튜디오", "en": "Permanent Makeup · Photo Studio", "zh": "半永久定妆·摄影工作室" },
    "cat": "기타 서비스",
    "badge": "NEW",
    "treats": {
      "kr": ["반영구 눈썹(눈썹문신)","애교살·아이라인 반영구","BB 립블러쉬","프로필 촬영","화보 촬영","커플·우정 스냅","뷰티 스냅"],
      "en": ["Eyebrow Tattoo (PMU Brows)","Undereye & Eyeliner PMU","BB Lip Blush","Profile Shoots","Editorial Shoots","Couple & Friend Snaps","Beauty Snaps"],
      "zh": ["半永久纹眉","卧蚕·美瞳线半永久","BB唇定妆","形象照拍摄","写真拍摄","情侣·闺蜜快照","美妆快照"]
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
    "name": { "kr": "순수 청담본점", "en": "SOONSOO Cheongdam", "zh": "SOONSOO清潭总店" },
    "dept": { "kr": "토탈 뷰티살롱", "en": "Total Beauty Salon", "zh": "综合美容沙龙" },
    "cat": "기타 서비스",
    "badge": "NEW",
    "treats": {
      "kr": ["헤어 스타일링","메이크업","웨딩 헤어·메이크업","연예인 스타일링"],
      "en": ["Hair Styling","Makeup","Wedding Hair & Makeup","Celebrity Styling"],
      "zh": ["发型设计","化妆造型","婚礼妆发","明星造型"]
    },
    "hours": "",
    "loc": {
      "ko": "서울 강남구 도산대로61길 4, 순수빌딩 (청담동)",
      "zh": "首尔清潭",
      "en": "Cheongdam, Seoul"
    },
    "overview": {
      "kr": "순수(SOONSOO) 청담본점은 청담동의 대표 토탈 뷰티살롱으로, 헤어·메이크업·웨딩·연예인 스타일링을 전문으로 합니다. 촬영·행사·시술 전후 스타일링까지 프리미엄 뷰티 서비스를 제공합니다.",
      "en": "SOONSOO Cheongdam is a leading total beauty salon in Cheongdam-dong, specializing in hair, makeup, wedding and celebrity styling — premium beauty services for shoots, events, and before or after your treatments.",
      "zh": "SOONSOO清潭总店是清潭洞代表性的综合美容沙龙，专注美发·化妆·婚礼与明星造型，为拍摄·活动·术前术后提供高端美容服务。"
    },
    "doctors": [],
    "thumb": "hthumb/soonsoo.jpg"
  },
  {
    "name": { "kr": "준오헤어 코엑스도심공항점", "en": "JUNO Hair COEX CALT", "zh": "JUNO Hair COEX都心机场店" },
    "dept": { "kr": "헤어살롱", "en": "Hair Salon", "zh": "美发沙龙" },
    "cat": "기타 서비스",
    "badge": "NEW",
    "treats": {
      "kr": ["컷·스타일링","염색","펌","헤어 클리닉","두피 스파"],
      "en": ["Cut & Styling","Color","Perm","Hair Clinic","Scalp Spa"],
      "zh": ["剪发造型","染发","烫发","头发护理","头皮SPA"]
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
    "name": { "kr": "에코자르딘 코엑스 삼성점", "en": "ECO JARDIN COEX Samseong", "zh": "ECO JARDIN COEX三成店" },
    "dept": { "kr": "헤어살롱", "en": "Hair Salon", "zh": "美发沙龙" },
    "cat": "기타 서비스",
    "badge": "NEW",
    "treats": {
      "kr": ["컷·스타일링","염색","펌","트리트먼트"],
      "en": ["Cut & Styling","Color","Perm","Treatment"],
      "zh": ["剪发造型","染发","烫发","护理"]
    },
    "hours": "",
    "loc": {
      "ko": "서울 강남구 삼성동 코엑스",
      "zh": "首尔三成·COEX",
      "en": "COEX, Samseong, Seoul"
    },
    "overview": {
      "kr": "에코자르딘 코엑스 삼성점은 코엑스에 위치한 헤어살롱으로, 컷·염색·펌·트리트먼트를 제공합니다. 쇼핑·전시 일정과 함께 이용하기 좋은 접근성이 강점입니다.",
      "en": "ECO JARDIN COEX Samseong is a hair salon inside COEX offering cut, color, perm and treatments — easy to combine with shopping or exhibition schedules.",
      "zh": "ECO JARDIN COEX三成店位于COEX内，提供剪·染·烫·护理服务，可与购物·展会行程轻松衔接。"
    },
    "doctors": [],
    "thumb": "hthumb/ecojardin.jpg"
  },
  {
    "name": { "kr": "카마스튜디오", "en": "KAMA Studio", "zh": "KAMA摄影工作室" },
    "dept": { "kr": "사진 스튜디오", "en": "Photo Studio", "zh": "摄影工作室" },
    "cat": "기타 서비스",
    "badge": "NEW",
    "treats": {
      "kr": ["웨딩 촬영","프로필 촬영","화보 촬영","가족 촬영"],
      "en": ["Wedding Shoots","Profile Shoots","Editorial Shoots","Family Shoots"],
      "zh": ["婚纱摄影","形象照拍摄","写真拍摄","家庭摄影"]
    },
    "hours": "",
    "loc": {
      "ko": "서울 강남구 선릉로 822, 6층 (청담동)",
      "zh": "首尔清潭",
      "en": "Cheongdam, Seoul"
    },
    "overview": {
      "kr": "카마스튜디오(KAMA Studio)는 청담동의 사진 스튜디오로, \"빛의 예술\"을 모토로 웨딩·프로필·화보 촬영을 전문으로 합니다. 연예인·아이돌 화보 촬영 경험이 풍부합니다.",
      "en": "KAMA Studio, in Cheongdam-dong, specializes in wedding, profile and editorial photography under the motto “the art of light”, with extensive experience shooting celebrities and idols.",
      "zh": "KAMA摄影工作室位于清潭洞，以“光之艺术”为理念，专注婚纱·形象照·写真拍摄，拥有丰富的艺人·偶像写真拍摄经验。"
    },
    "doctors": [],
    "thumb": "hthumb/kama.jpg"
  },
  {
    "name": { "kr": "모아뜨 성수점", "en": "MOATT Seongsu", "zh": "MOATT 圣水店" },
    "dept": { "kr": "헤어살롱", "en": "Hair Salon", "zh": "美发沙龙" },
    "cat": "기타 서비스",
    "badge": "NEW",
    "treats": {
      "kr": ["커트·펌","염색·클리닉","슬릭펌·맨즈컷","1:1 맞춤 스타일링"],
      "en": ["Cut & Perm","Color & Clinic","Slick Perm & Men's Cut","1:1 Personal Styling"],
      "zh": ["剪发·烫发","染发·护理","丝滑烫·男士剪发","1:1定制造型"]
    },
    "hours": "10:00~18:00 (월요일 휴무)",
    "loc": {
      "ko": "서울 성동구 성수동 (서울숲·뚝섬역)",
      "zh": "首尔圣水洞(首尔林)",
      "en": "Seongsu-dong, Seoul (Seoul Forest)"
    },
    "overview": {
      "kr": "모아뜨 성수점은 서울숲·뚝섬역 인근의 프라이빗 프리미엄 헤어살롱입니다. 1:1 상담으로 고객에게 가장 잘 어울리는 스타일을 제안하고 프리미엄 제품만 사용합니다. 시술·촬영 일정에 맞춘 헤어 스타일링을 예약제로 진행합니다. (월요일 휴무)",
      "en": "MOATT Seongsu is a private premium hair salon near Seoul Forest and Ttukseom Station. Through 1:1 consultations it proposes the most flattering style for each client, using premium products only. Sessions are by reservation and can be scheduled around your treatments or photo shoots. (Closed Mondays)",
      "zh": "MOATT圣水店是位于首尔林·纛岛站附近的私密高端美发沙龙。通过1:1咨询为顾客提案最合适的发型，仅使用高端产品。采取预约制，可配合施术·拍摄日程安排造型。(周一休)"
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
    "cat": "피부",
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
      "kr": "오크우드봄의원",
      "en": "Oakwood Bom Clinic",
      "zh": "Oakwood Bom医院"
    },
    "dept": {
      "kr": "산부인과·성형외과·피부·검진 협진",
      "en": "OB/GYN · Plastic · Skin · Checkup",
      "zh": "妇科·整形·皮肤·体检联合诊疗"
    },
    "cat": "여성의학/성형외과/피부/검진",
    "icon": "🌸",
    "badge": "NEW",
    "treats": {
      "kr": [
        "자궁보존 치료(하이푸)",
        "여성성형·요실금",
        "하지정맥류",
        "눈·코성형",
        "필러·보톡스·리프팅",
        "건강검진"
      ],
      "en": [
        "Uterus-Preserving Treatment (HIFU)",
        "Feminine Surgery · Incontinence",
        "Varicose Veins",
        "Eye · Nose Surgery",
        "Filler · Botox · Lifting",
        "Health Checkup"
      ],
      "zh": [
        "子宫保留治疗(海扶刀)",
        "女性私密整形·尿失禁",
        "下肢静脉曲张",
        "眼鼻整形",
        "玻尿酸·肉毒·提升",
        "健康体检"
      ]
    },
    "hours": "Mon·Wed·Thu 10:00-19:00 / Tue·Fri 10:00-20:00 / Sat 10:00-16:00 / Sun Closed",
    "loc": {
      "ko": "서울 강남구 삼성역(오크우드프리미어)",
      "zh": "首尔江南区·三成站(Oakwood Premier)",
      "en": "Samseong Stn., Seoul"
    },
    "overview": {
      "kr": "오크우드봄의원은 삼성역 오크우드프리미어 호텔 B1(테헤란로87길 46)에 위치한 협진형 의원으로, 산부인과 전문의 김인현 대표원장(前 강남차병원 산부인과 부장)을 중심으로 흉부외과·외과·내과·성형외과 전문의가 함께 진료합니다. 자궁보존 하이푸·여성성형·하지정맥류·건강검진부터 눈코성형·필러·리프팅까지 한 곳에서 검진·외래·수술이 가능합니다.",
      "en": "Oakwood Bom Clinic, on B1 of Oakwood Premier Hotel by Samseong Station (46 Teheran-ro 87-gil), is a multi-specialty clinic led by Dr. Kim In-hyun, OB/GYN specialist and former head of OB/GYN at Gangnam CHA Hospital, together with thoracic, general, internal medicine and plastic surgery specialists — from uterus-preserving HIFU, feminine surgery, varicose veins and health checkups to eye/nose surgery, fillers and lifting, all in one place.",
      "zh": "Oakwood Bom医院位于三成站Oakwood Premier酒店B1(德黑兰路87街46), 是多科室联合诊疗医院。以妇科专科医生·医学博士金仁贤代表院长(原江南CHA医院妇科部长)为核心, 胸外科·外科·内科·整形外科专科医生共同诊疗, 子宫保留海扶刀·女性私密整形·下肢静脉曲张·健康体检到眼鼻整形·玻尿酸·提升, 体检·门诊·手术一站式完成。"
    },
    "doctors": [
      {
        "name": "김인현",
        "title": "대표원장",
        "spec": [
          "산부인과 전문의",
          "의학박사"
        ]
      },
      {
        "name": "조창욱",
        "title": "원장",
        "spec": [
          "심장혈관흉부외과 전문의",
          "하지정맥센터장"
        ]
      },
      {
        "name": "김재영",
        "title": "원장",
        "spec": [
          "내과 전문의",
          "건강검진센터장"
        ]
      },
      {
        "name": "이종희",
        "title": "원장",
        "spec": [
          "성형외과 전문의",
          "의학박사"
        ]
      },
      {
        "name": "김동일",
        "title": "원장",
        "spec": [
          "뷰티성형센터",
          "안면거상"
        ]
      }
    ],
    "thumb": "hthumb/owbom.jpg"
  },
  {
    "name": {
      "kr": "이에스청담성형외과",
      "en": "ES Cheongdam Plastic Surgery",
      "zh": "ES清潭整形外科"
    },
    "dept": {
      "kr": "성형외과/피부과",
      "en": "Plastic Surgery / Dermatology",
      "zh": "整形外科/皮肤科"
    },
    "cat": "성형외과/피부",
    "icon": "💎",
    "badge": "NEW",
    "treats": {
      "kr": [
        "눈성형·눈재수술",
        "코성형·코재수술",
        "이마거상·리프팅",
        "가슴성형",
        "지방흡입·지방이식",
        "보톡스·필러"
      ],
      "en": [
        "Eye Surgery · Revision",
        "Rhinoplasty · Revision",
        "Forehead Lift · Lifting",
        "Breast Surgery",
        "Liposuction · Fat Graft",
        "Botox · Filler"
      ],
      "zh": [
        "眼部整形·眼修复",
        "鼻整形·鼻修复",
        "额头提升·提升",
        "胸部整形",
        "吸脂·脂肪填充",
        "肉毒·玻尿酸"
      ]
    },
    "hours": "Mon-Fri 10:00-19:00 / Sat 10:00-16:00 / Sun·Holiday Closed",
    "loc": {
      "ko": "서울 강남구 청담동(압구정로데오역)",
      "zh": "首尔江南区·清潭洞(狎鸥亭罗德奥站)",
      "en": "Cheongdam, Seoul"
    },
    "overview": {
      "kr": "이에스청담성형외과&피부과의원은 압구정로데오역 4번 출구 인근(도산대로 435, 삼이빌딩 6층)의 성형외과·피부과 의원입니다. 순천향대학교병원 성형외과 외래교수인 이준호 대표원장과 류형래 원장(성형외과 전문의)이 자연유착 쌍꺼풀·고난도 눈재수술, 코재수술, 이마거상·리프팅, 가슴·체형성형을 직접 집도하며 피부센터에서 리프팅 레이저·스킨부스터·보톡스·필러를 함께 제공합니다.",
      "en": "ES Cheongdam Plastic Surgery & Dermatology, near Exit 4 of Apgujeong Rodeo Station (6F Sami Bldg., 435 Dosan-daero), is led by Dr. Lee Jun-ho (visiting professor of plastic surgery, Soonchunhyang University Hospital) and Dr. Ryu Hyung-rae, both board-certified plastic surgeons, who personally perform natural-adhesion double eyelid and complex eye revision, rhinoplasty revision, forehead lift and lifting, breast and body contouring; the skin center offers lifting lasers, skin boosters, Botox and fillers.",
      "zh": "ES清潭整形外科&皮肤科位于狎鸥亭罗德奥站4号出口附近(岛山大路435, 三二大厦6层)。顺天乡大学医院整形外科外聘教授李俊浩代表院长与柳亨来院长(整形外科专科医生)亲自主刀自然粘连双眼皮·高难度眼修复、鼻修复、额头提升·提升、胸部·体型整形, 皮肤中心同时提供提升激光·皮肤焕活·肉毒·玻尿酸项目。"
    },
    "doctors": [
      {
        "name": "이준호",
        "title": "대표원장",
        "spec": [
          "성형외과 전문의",
          "눈·코 재수술",
          "리프팅"
        ]
      },
      {
        "name": "류형래",
        "title": "원장",
        "spec": [
          "성형외과 전문의",
          "눈·코·가슴"
        ]
      }
    ],
    "thumb": "hthumb/escheongdam.jpg"
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
    "cat": "피부",
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
    "cat": "피부",
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
      "kr": "TU치과의원(티유치과)",
      "en": "TU Dental Clinic",
      "zh": "TU牙科(TU Dental)"
    },
    "dept": {
      "kr": "심미치과/라미네이트·임플란트·교정",
      "en": "Aesthetic Dentistry / Veneer · Implant · Ortho",
      "zh": "美学牙科/贴面·种植·矫正"
    },
    "cat": "치과",
    "icon": "🦷",
    "badge": "NEW",
    "treats": {
      "kr": [
        "제로네이트(무삭제 라미네이트)",
        "라미네이트",
        "임플란트",
        "치아교정(투명교정)",
        "치아미백",
        "보존·보철"
      ],
      "en": [
        "ZERONATE (No-prep Veneer)",
        "Veneers",
        "Implants",
        "Orthodontics (Clear Aligner)",
        "Whitening",
        "Restorative · Prosthetic"
      ],
      "zh": [
        "ZERONATE(无磨牙贴面)",
        "牙齿贴面",
        "种植牙",
        "牙齿矫正(隐形)",
        "牙齿美白",
        "保存·修复"
      ]
    },
    "hours": "Mon-Fri 10:00-20:00 / Sat 10:00-17:00 / Sun Closed",
    "loc": {
      "ko": "서울 서초구 강남역(서초W타워)",
      "zh": "首尔瑞草区·江南站(瑞草W大厦)",
      "en": "Gangnam Stn., Seoul"
    },
    "overview": {
      "kr": "TU치과의원(티유치과)은 강남역 인근 서초W타워 12·13층(서초대로77길 54)의 심미치과로, 치아를 깎지 않는 무삭제 라미네이트 \"제로네이트(ZERONATE)\"로 알려져 있습니다. 서재원 대표원장을 비롯한 통합치의학과 의료진이 라미네이트·임플란트·투명교정·미백·보존보철을 분야별 공동 진료하며, 마취과 전문의 상주와 야간진료(평일 20시)로 해외 환자 일정에 맞추기 좋습니다.",
      "en": "TU Dental Clinic, on the 12th and 13th floors of Seocho W Tower near Gangnam Station (54 Seocho-daero 77-gil), is an aesthetic dental clinic known for ZERONATE no-prep veneers. Led by Dr. Seo Jae-won, its team of integrated dentistry specialists jointly covers veneers, implants, clear aligners, whitening and restorative care, with an on-site anesthesiologist and evening hours (weekdays to 8 pm) that suit international patients.",
      "zh": "TU牙科位于江南站附近瑞草W大厦12·13层(瑞草大路77街54), 是以不磨牙贴面\"ZERONATE\"闻名的美学牙科。以徐载元代表院长为首的综合牙科医疗团队分科联合诊疗贴面·种植牙·隐形矫正·美白·保存修复, 麻醉科专科医生常驻, 平日夜间诊疗至20点, 便于海外患者安排行程。"
    },
    "doctors": [
      {
        "name": "서재원",
        "title": "대표원장",
        "spec": [
          "심미치과",
          "라미네이트"
        ]
      },
      {
        "name": "신채훈",
        "title": "원장",
        "spec": [
          "통합치의학과"
        ]
      },
      {
        "name": "김준희",
        "title": "원장",
        "spec": [
          "통합치의학과"
        ]
      },
      {
        "name": "김준식",
        "title": "원장",
        "spec": [
          "통합치의학과"
        ]
      }
    ],
    "thumb": "hthumb/tu.jpg"
  },
  {
    "name": {
      "kr": "바이미성형외과의원",
      "en": "ByMe Plastic Surgery",
      "zh": "BYME整形外科(江南百美)"
    },
    "dept": {
      "kr": "성형외과/쁘띠·리프팅",
      "en": "Plastic Surgery / Aesthetic · Lifting",
      "zh": "整形外科/轻医美·提升"
    },
    "cat": "성형외과/피부",
    "icon": "🎀",
    "badge": "NEW",
    "treats": {
      "kr": [
        "비절개 코성형(코프팅)",
        "프리미엄 필러",
        "시그니처 리프팅",
        "눈성형",
        "초음파 지방흡입·윤곽교정",
        "스킨부스터"
      ],
      "en": [
        "Non-incision Rhinoplasty",
        "Premium Filler",
        "Signature Lifting",
        "Eye Surgery",
        "Ultrasonic Lipo · Contouring",
        "Skin Booster"
      ],
      "zh": [
        "非切开鼻整形(Nofting)",
        "高端玻尿酸",
        "招牌提升",
        "眼部整形",
        "超声吸脂·轮廓矫正",
        "皮肤焕活针"
      ]
    },
    "hours": "Mon-Fri 11:00-20:00 / Sat 10:00-16:00 / Sun·Holiday Closed",
    "loc": {
      "ko": "서울 서초구 신사역(휴먼타워)",
      "zh": "首尔瑞草区·新沙站(Human Tower)",
      "en": "Sinsa Stn., Seoul"
    },
    "overview": {
      "kr": "바이미성형외과의원은 신사역 4번 출구 도보 2분(강남대로 605, 휴먼타워 12층)의 성형외과입니다. 성형외과 전문의 18년 경력의 최한무 대표원장(건국대병원 성형외과 겸직교수)이 비절개 코성형 \"코프팅\", 입술·윤곽 프리미엄 필러, 시그니처 리프팅, 눈성형, 초음파 지방흡입·심부볼 제거 등 비수술 윤곽교정을 직접 시술하며 중국어 상담(위챗)을 지원합니다.",
      "en": "ByMe Plastic Surgery, a two-minute walk from Exit 4 of Sinsa Station (12F Human Tower, 605 Gangnam-daero), is led by Dr. Choi Han-moo, a board-certified plastic surgeon with 18 years of experience and adjunct professor at Konkuk University Hospital. He personally performs non-incision rhinoplasty (\"Nofting\"), premium lip and contour fillers, signature lifting, eye surgery, ultrasonic liposuction and buccal fat removal; Chinese consultation via WeChat is available.",
      "zh": "BYME整形外科(江南百美)位于新沙站4号出口步行2分钟(江南大路605, Human Tower 12层)。拥有18年整形外科专科经验的崔汉茂代表院长(建国大学医院整形外科兼职教授)亲自操作非切开鼻整形\"Nofting\"、唇部·轮廓高端玻尿酸、招牌提升、眼部整形、超声吸脂·颊脂垫去除等非手术轮廓矫正, 提供微信中文咨询。"
    },
    "doctors": [
      {
        "name": "최한무",
        "title": "대표원장",
        "spec": [
          "성형외과 전문의",
          "비절개 코성형",
          "필러·리프팅"
        ]
      }
    ],
    "thumb": "hthumb/byme.jpg"
  }
];
