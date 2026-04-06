/**
 * 香屯村 AI 导游"香屯小卒"结构化知识库
 * 基于真实资料构建，所有信息均有据可查
 */

// ============================================================
// 结构化知识对象
// ============================================================
window.XIANGTUN_KNOWLEDGE = {

  // ---- 村庄基本信息 ----
  village: {
    name: '香屯村',
    fullAddress: '北京市延庆区大庄科乡香屯村',
    location: '延庆、昌平、怀柔三区交界处',
    geography: '四面环山、一水中流，背靠大庄科段明长城',
    easterGorge: '村东峡谷可通怀柔水长城景区',
    honors: [
      '延庆区最早开展民俗旅游的村庄之一',
      '2007年被评为"北京市最美村庄"'
    ],
    population: {
      households: 38,
      residents: 74,
      note: '村中60岁以下人口仅10余人'
    }
  },

  // ---- 长城保护与修缮 ----
  greatWallRestoration: {
    projectName: '明长城大庄科段研究性修缮项目',
    background: '2021年国家文物局首批批复的长城研究性修缮试点',
    principles: ['考古先行', '最小干预', '多学科协同', '全过程数字化'],
    site: '香屯村东的明长城3号、4号敌台，及2号—5号敌台间约400米墙体',
    donation: {
      donor: '香港黄廷方基金会',
      amount: '1000万元'
    },
    timeline: {
      start: '2021年启动',
      fullImplementation: '2022年全面实施',
      completion: '2024年竣工'
    },
    historicName: {
      name: '西星口',
      note: '重新启用已消失380多年的历史地名'
    }
  },

  // ---- 文化设施 ----
  culturalFacilities: {
    villageMuseum: {
      name: '香屯村乡情村史陈列室',
      area: '120平米',
      openDate: '2024年11月15日',
      focus: '重点介绍大庄科段长城历史文化背景和研究性修缮内容',
      liveStream: {
        program: '延庆融媒体《洞见长城》',
        audience: '在线观众2000多人次'
      }
    },
    planned: {
      name: '长城书院',
      description: '集长城文化展示、主题阅读空间、文化沙龙于一体'
    }
  },

  // ---- 文旅发展 ----
  tourism: {
    company: {
      name: '北京龙吟溪谷文旅发展有限公司',
      joinDate: '2025年4月'
    },
    projectScale: '规划1000多亩文旅项目',
    threeRoutes: {
      red: '红色研学',
      green: '绿色生态',
      gray: '灰色长城'
    },
    plannedFacilities: [
      '长城书院',
      '长城剧场',
      '长城研学基地',
      '西星口营地',
      '校场'
    ],
    trialOperation: '试运营累计接待游客1.5万余人次',
    event: '2025年"首届长城国潮文化季"活动'
  },

  // ---- 文化产品（非商业化） ----
  culturalProducts: [
    {
      name: '长城戍边餐',
      description: '结合大庄科长城考古出土的粮食作物和古籍记载还原的饮食体验'
    },
    {
      name: '香屯古法杏皮茶',
      description: '结合考古出土明代杏核遗存，由村民胡淑琴挖掘传统技术制作'
    },
    {
      name: '研学活动',
      items: ['盾牌绘制', '长城攻防游戏', '长城模拟考古']
    }
  ],

  // ---- 高校合作 ----
  universityCooperation: [
    {
      university: '北京建筑大学',
      contribution: '调研并绘制长城主题墙画'
    },
    {
      university: '北京师范大学',
      contribution: '完成《回应总书记之嘱托：乡村振兴背景下研究性修缮类长城活化利用的困境与出路》课题'
    },
    {
      university: '北京邮电大学世纪学院',
      contribution: '创业实践社深度交流'
    },
    {
      university: '对外经济贸易大学',
      contribution: '提出"一村一品"课题'
    }
  ],

  // ---- 2026年计划 ----
  plans2026: [
    '完成"长城书院"建设',
    '继续推动"京畿长城风景道"香屯段建设',
    '融入长城考古中发现的"老虎吃猪""五子棋"等民间游戏',
    '"生态康养+长城文化体验"为核心发展方向',
    '尝试将研究性修缮长城段辟为参观游览区（依据2026年3月1日实施的《北京市长城保护条例》第二十七条）'
  ],

  // ---- 驻村第一书记 ----
  secretary: {
    name: '范学新',
    title: '驻村第一书记',
    background: '从事文物保护、地方历史文化研究30余年的研究馆员',
    affiliation: '延庆区文物局研究馆员'
  },

  // ---- 交通信息 ----
  transportation: {
    mainRoad: {
      name: '东香路',
      description: '延庆区大庄科乡连接东三岔村和香屯村的唯一进村公路'
    },
    notes: '路面较窄，不通公交车',
    fromBeijing: '京藏高速→延庆方向→大庄科乡'
  }
};


// ============================================================
// System Prompt 生成函数
// ============================================================
window.buildSystemPrompt = function buildSystemPrompt() {
  var k = window.XIANGTUN_KNOWLEDGE;

  // 把知识库序列化为可读文本块，嵌入 System Prompt
  var knowledgeText = [
    '【村庄概况】',
    k.village.fullAddress + '，地处' + k.village.location + '。',
    k.village.geography + '。' + k.village.easterGorge + '。',
    '现有' + k.village.population.households + '户' + k.village.population.residents + '口人，' + k.village.population.note + '。',
    k.village.honors.join('；') + '。',
    '',
    '【长城保护与修缮】',
    k.greatWallRestoration.projectName + '——' + k.greatWallRestoration.background + '。',
    '核心理念：' + k.greatWallRestoration.principles.join('、') + '。',
    '修缮范围：' + k.greatWallRestoration.site + '。',
    k.greatWallRestoration.donation.donor + '捐赠' + k.greatWallRestoration.donation.amount + '。',
    k.greatWallRestoration.timeline.start + '，' + k.greatWallRestoration.timeline.fullImplementation + '，' + k.greatWallRestoration.timeline.completion + '。',
    '项目重新启用了已消失380多年的历史地名"' + k.greatWallRestoration.historicName.name + '"。',
    '',
    '【文化设施】',
    k.culturalFacilities.villageMuseum.area + k.culturalFacilities.villageMuseum.name + '于' + k.culturalFacilities.villageMuseum.openDate + '开馆，' + k.culturalFacilities.villageMuseum.focus + '。',
    '延庆融媒体《洞见长城》全程直播开馆，在线观众' + k.culturalFacilities.villageMuseum.liveStream.audience + '。',
    '计划建设"' + k.culturalFacilities.planned.name + '"——' + k.culturalFacilities.planned.description + '。',
    '',
    '【文旅路线】',
    '三条路线：红色研学、绿色生态、灰色长城。',
    '规划设施：' + k.tourism.plannedFacilities.join('、') + '。',
    k.tourism.trialOperation + '。',
    '2025年举办"首届长城国潮文化季"活动。',
    '',
    '【文化体验】',
    k.culturalProducts.map(function(p) {
      if (p.items) {
        return p.name + '：' + p.items.join('、');
      }
      return p.name + '——' + p.description;
    }).join('；') + '。',
    '',
    '【高校合作】',
    k.universityCooperation.map(function(u) {
      return u.university + '：' + u.contribution;
    }).join('；') + '。',
    '',
    '【2026年计划】',
    k.plans2026.join('；') + '。',
    '',
    '【驻村第一书记】',
    k.secretary.name + '，' + k.secretary.background + '（' + k.secretary.affiliation + '）。',
    '',
    '【交通】',
    '进村唯一公路：' + k.transportation.mainRoad.name + '（' + k.transportation.mainRoad.description + '）。',
    k.transportation.notes + '。',
    '从北京市区自驾：' + k.transportation.fromBeijing + '。'
  ].join('\n');

  var systemPrompt = [
    '你是"香屯小卒"，香屯村的 AI 文化导游。',
    '',
    '## 你的身份',
    '你是一个热情开朗的延庆本地年轻人，像明长城上的小兵卒一样，守护着香屯村这片土地和它承载的长城文化。',
    '你热爱家乡，对村子里的一草一木、每一段城墙都如数家珍。',
    '',
    '## 说话风格',
    '- 亲切生动，像老乡给你讲故事，偶尔蹦几句北京话（"得嘞""您瞧""甭客气"等）',
    '- 每次回复简洁但信息丰富，控制在3-5句话',
    '- 回答完问题后，主动推荐一个相关的话题或路线，引导继续探索',
    '- 遇到不确定的信息，坦诚说"这个我得再打听打听"，绝不编造',
    '',
    '## 回复规则',
    '- 只回答与香屯村、长城文化、大庄科乡相关的问题',
    '- 如果用户问了无关的问题，礼貌地引导回来，比如："嘿，这个我可不在行，不过要是想聊聊咱香屯村的长城故事，那我可有得说！"',
    '- 所有回复内容必须基于下方知识库，不要杜撰任何不在知识库中的信息',
    '- 不要提及任何商业化内容（价格、购物、商城等）',
    '- 介绍文化体验和饮食时，侧重历史文化内涵，不涉及消费',
    '',
    '## 知识库',
    knowledgeText
  ].join('\n');

  return systemPrompt;
};
