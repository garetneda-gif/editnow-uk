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
    geography: '四面环山、一水中流、藏风聚气，背靠大庄科段明长城',
    terrain: '燕山南麓，海拔约400—600米',
    easterGorge: '村东峡谷可通怀柔水长城景区（约15公里）',
    distanceFromBeijing: '距北京市中心约80公里',
    distanceFromBadaling: '距八达岭长城约35公里',
    distanceFromYanqingCity: '距延庆城区约30公里',
    forestCoverage: '林木覆盖率95%，冠绝延庆全区',
    naturalFeatures: '龙吟溪谷的水声从长城脚下蜿蜒而出；板栗树漫山遍野扎根；杏林沿溪谷蔓延',
    architecture: '石墙青瓦民居散布在板栗林间',
    honors: [
      '延庆区最早开展民俗旅游的村庄之一',
      '2007年被评为"北京市最美村庄"'
    ],
    population: {
      households: 38,
      residents: 74,
      permanent: '常住25户43人',
      note: '村中60岁以下人口仅10余人'
    },
    brandSlogan: '长城脚下的四色人间'
  },

  // ---- 历史年表 ----
  history: {
    liao: {
      period: '辽代（916—1125年）',
      title: '铁火初燃',
      events: [
        '香屯一带开始大规模铁矿开采和冶炼',
        '出土铁渣、炉壁残片、矿石碎片等冶铁遗存',
        '被考古学者称为"辽代首钢"，是北京地区最早的冶铁遗址之一',
        '规模可观的冶铁中心，千年前的炉火映红山谷'
      ]
    },
    ming: {
      period: '明代（1368—1644年）',
      title: '长城筑守',
      events: [
        '修筑昌镇黄花路长城，香屯段属"西老星口"',
        '建造时间约在明弘治年间（1488—1505年）',
        '建设3号、4号敌台及2—5号敌台间约400米墙体',
        '严密的军事防御体系控扼延庆通往昌平、怀柔的山间通道',
        '戍边将士在城砖上刻画"老虎吃猪""五子棋"等棋盘和骨头纹',
        '实行班军制，士兵轮流值守',
        '考古出土粟、黍等粮食作物和杏核遗存，证明果木种植史至少六百年'
      ]
    },
    qing: {
      period: '清代（1644—1911年）',
      title: '村落成形',
      events: [
        '长城军事功能渐退，守边军户转为农耕',
        '"西星口"地名消失，沉睡380余年',
        '板栗树漫山遍野扎根，杏林沿溪谷蔓延',
        '村落在青山环抱中悄然定型，开始书写板栗金岁月'
      ]
    },
    antiJapanese: {
      period: '抗日战争时期（1937—1945年）',
      title: '烽火前沿',
      events: [
        '香屯村成为抵抗日寇的前沿阵地',
        '约5公里外为沙塘沟"平北红色第一村"',
        '长城从文化遗产化身为民族精神的堡垒',
        '村民以血肉之躯在城墙之后筑起第二道防线',
        '城砖上嵌入的弹痕见证了不屈的记忆'
      ]
    },
    beautifulVillage: {
      period: '2007年',
      title: '最美乡村',
      events: [
        '获评"北京市最美村庄"',
        '95%的林木覆盖率冠绝延庆',
        '古朴石墙民居与悠远长城剪影成为延庆名片',
        '延庆区最早开展民俗旅游的村庄之一'
      ]
    },
    restoration: {
      period: '2021—2024年',
      title: '研究性修缮',
      events: [
        '2021年国家文物局首批批复明长城大庄科段研究性修缮试点',
        '标志着中国长城保护从"抢救修复"转向"研究+保护+预防"',
        '香港黄廷方基金会捐赠1000万元支持',
        '2022年全面实施，2024年竣工',
        '消失380多年的历史地名"西星口"从古籍中被重新唤醒',
        '2024年5月14日习近平总书记给八达岭镇石峡村村民回信，嘱托"把祖先留下的这份珍贵财富世世代代传下去"'
      ]
    },
    museumOpening: {
      period: '2024年11月15日',
      title: '陈列室开馆',
      events: [
        '120平米乡情村史陈列室正式开馆',
        '驻村第一书记范学新亲自策展，以"长城与村庄"为叙事主线',
        '展品：铁渣标本、城砖残片、粮食作物遗存复制品',
        '延庆融媒体《洞见长城》全程直播，在线观众超2000人次'
      ]
    },
    tourismLaunch: {
      period: '2025年4月',
      title: '文旅新生',
      events: [
        '北京龙吟溪谷文旅发展有限公司入驻，投入430余万元',
        '规划1000多亩文旅项目',
        '三条路线同步铺开：红色研学、绿色生态、灰色长城',
        '首届长城国潮文化季成功举办',
        '40名大学生志愿者参与，试运营接待游客1.5万余人次，实收65万元'
      ]
    },
    future: {
      period: '2026年展望',
      title: '长城书院',
      events: [
        '完成"长城书院"建设',
        '推动"京畿长城风景道"香屯段落地',
        '2026年3月1日《北京市长城保护条例》正式实施',
        '第二十七条明确推动具备条件的长城点段辟为参观游览区',
        '香屯的研究性修缮段有望成为延庆首批开放的长城体验区',
        '将民间游戏遗存融入研学体验',
        '"生态康养+长城文化体验"为核心发展方向'
      ]
    }
  },

  // ---- 四色品牌 ----
  fourColors: {
    red: {
      name: '传承红',
      hex: '#851217',
      origin: '辽代冶铁炉火映红山谷的意象，千年炉火为这片土地写下第一行文明的注脚',
      symbolism: '砖窑的余温，守护者的血脉；辽代炉火映红山谷，抗日烽烟烧过城墙',
      role: '品牌最高层级视觉标识，用于关键品牌时刻与核心行动召唤，承载"红色研学"路线中革命精神的传承'
    },
    gold: {
      name: '板栗金',
      hex: '#593d00',
      origin: '百年板栗林漫山而下，秋风起时满坡金黄',
      symbolism: '丰收之色，如同传统书画中的印章——小巧而醒目',
      role: '强调色和高亮标记，点缀在信息关键节点上；考古出土明代杏核跨越六百年，村民胡淑琴的古法杏皮茶将考古与传统技艺结合'
    },
    green: {
      name: '远山绿',
      hex: '#3b6934',
      origin: '95%林木覆盖率，龙吟溪谷水声，四面环山藏风聚气',
      symbolism: '自然环境代言色，呼吸之间尽是山野清香',
      role: '表达生长、成功与生态和谐，承载"绿色生态"路线的精神内核'
    },
    ink: {
      name: '玄石青',
      hex: '#1c2b2b',
      origin: '2号至5号敌台间400米墙体的沉稳色泽，城砖经数百年风化后的深灰',
      symbolism: '长城的本色，时间的书法——每一道裂痕都是时间的笔迹',
      role: '基底色，从不使用纯黑#000000，赋予岁月沉淀质感；配合#fbf9f8的"石纸"背景形成完整灰阶'
    },
    methodology: '"在地取色"——每一个色值都有对应的实体，每一种颜色都能在村庄里找到原型。冶铁炉火的赤红、板栗壳的金棕、远山叠翠的墨绿、城砖风化后的深灰，确保品牌与土地深层绑定'
  },

  // ---- 长城保护与修缮 ----
  greatWallRestoration: {
    projectName: '明长城大庄科段研究性修缮项目',
    background: '2021年国家文物局首批批复的长城研究性修缮试点',
    historicSignificance: '标志着中国长城保护从传统的"抢救修复"全面转向"研究+保护+预防"的新阶段，是中国"数字长城"的先行实践',
    principles: {
      list: ['考古先行', '最小干预', '多学科协同', '全过程数字化'],
      details: {
        archaeologyFirst: '修缮前充分考古调查、标本采集、地层分析，让每一块砖石的历史信息先于工具发声',
        minimalIntervention: '修旧如旧，尊重六百年积累的苔藓、裂纹与风化层，保留岁月痕迹的真实性',
        multidisciplinary: '建筑学、考古学、材料科学、植物学、数字测绘等跨领域协作',
        digitalization: '三维扫描、BIM建模，每一寸墙面都有精确的数字档案'
      }
    },
    site: '香屯村东的明长城3号、4号敌台，及2号—5号敌台间约400米墙体',
    historicDesignation: '明代昌镇黄花路西老星口段',
    buildingPeriod: '约建于明弘治年间（1488—1505年）',
    strategicRole: '控扼延庆通往昌平、怀柔的山间通道',
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
      note: '明代昌镇黄花路军事防御体系中的重要关口，守边将士进出长城防线的咽喉通道',
      rediscovery: '在历史文献中沉睡380余年，直到2024年研究性修缮的考古文献梳理中被重新发现并确认'
    },
    presidentialLetter: {
      date: '2024年5月14日',
      event: '习近平总书记给八达岭镇石峡村村民回信',
      quote: '"把祖先留下的这份珍贵财富世世代代传下去"',
      significance: '强调长城保护与文化传承的重要性'
    },
    protectionTeam: {
      name: '长城保护义务服务队',
      description: '38户人家中的村民在范学新书记指导下自发组织',
      duties: '常年行走在2号至5号敌台间400米城墙上，巡查记录险情、清理杂草',
      legalSupport: '2026年3月1日《北京市长城保护条例》实施后，巡查有了更坚实的法律后盾'
    }
  },

  // ---- 考古发现 ----
  archaeology: {
    liaoIronSmelting: {
      name: '辽代冶铁遗址',
      finds: ['铁渣', '炉壁残片', '矿石碎片'],
      significance: '北京地区最早的冶铁遗址之一，被称为"辽代首钢"',
      description: '规模可观的冶铁中心，千年前的炉火映红山谷'
    },
    mingGreatWall: {
      name: '明长城遗存',
      finds: ['粟、黍等粮食作物遗存', '明代炭化杏核', '城砖残片', '陶器'],
      significance: '杏核证明果木种植史至少可追溯六百年',
      derivedProducts: '催生"长城戍边餐"还原明代戍卒饮食、"香屯古法杏皮茶"文化体验'
    },
    folkGames: {
      name: '城砖民间游戏刻画',
      finds: ['"老虎吃猪"棋盘', '"五子棋"棋盘', '骨头纹图案'],
      significance: '六百年前的刀刻线条依然清晰，仿佛棋局刚刚中断',
      description: '反映明代戍边将士的日常生活和娱乐方式，是明代长城驻军流行的双人博弈游戏',
      futurePlan: '2026年将融入文旅互动体验项目'
    },
    historicName: {
      name: '"西星口"地名',
      find: '在修缮考古的文献梳理中重新发现',
      significance: '明代昌镇黄花路防御体系中的关口名称，在文献中沉睡380余年后复活',
      modernUse: '命名西星泉、西星口营地'
    }
  },

  // ---- 文化设施 ----
  culturalFacilities: {
    villageMuseum: {
      name: '香屯村乡情村史陈列室',
      area: '120平米',
      openDate: '2024年11月15日',
      curator: '驻村第一书记范学新亲自策展',
      narrative: '以"长城与村庄"为叙事主线，呈现从辽代冶铁到当代文旅振兴的完整历史脉络',
      focus: '重点介绍大庄科段长城历史文化背景和研究性修缮内容',
      exhibits: ['考古出土的铁渣标本', '城砖残片', '粮食作物遗存复制品', '图文展板', '多媒体互动装置'],
      highlightExhibits: '从辽代冶铁到明代筑城，从考古出土的杏核到消失380年后重现的"西星口"地名',
      liveStream: {
        program: '延庆融媒体《洞见长城》',
        audience: '在线观众超2000人次'
      }
    },
    planned: {
      name: '长城书院',
      description: '集长城文化展示、主题阅读空间、文化沙龙于一体的综合文化设施',
      timeline: '2026年完成建设'
    }
  },

  // ---- 壁画地图 ----
  murals: {
    overview: {
      creator: '北京建筑大学师生团队深入调研创作',
      creationPeriod: '创作周期历时两个月，师生在村中食宿，与村民朝夕相处',
      purpose: '"文化在地化"的实验——让长城的故事从山脊走下来，走进村民的院墙和巷道',
      walkingRoute: '全程约800米，步行20—30分钟',
      bestTime: '上午或傍晚光线柔和时前往，墙面色彩最为鲜亮',
      access: '无需预约，全天开放，露天作品',
      startPoint: '村口出发，沿东香路步行即可依次欣赏所有壁画',
      communityInvolvement: '村民主动提供自家墙面并参与构图讨论，大学生带来专业技能，村民贡献在地智慧'
    },
    list: [
      {
        id: 1,
        title: '长城雄关',
        description: '描绘大庄科段明长城3号、4号敌台的雄伟全貌，夕阳映照下的城墙如同一条火龙盘踞在山脊之上',
        size: '3.2米高×8米宽（面积最大的一幅）',
        mainColor: '传承红（#851217）',
        location: '村口广场东侧墙面',
        technique: '散点透视（中国传统绘画），融合3号和4号敌台多个角度；城墙肌理取自实地拓印',
        creatorQuote: '"第一次登上3号敌台时，我们所有人都沉默了。夕阳下的城墙不是灰色的，而是燃烧着的红。"——创作组组长',
        nextDistance: '下一幅120米，约2分钟'
      },
      {
        id: 2,
        title: '戍边将士',
        description: '再现明代昌镇黄花路守军日常生活：将士们在城楼上下棋、烹饪、修缮兵器',
        size: '2.5米×6米',
        mainColor: '板栗金（#593d00）',
        location: '东香路中段民居外墙',
        archaeologyElements: '融入考古出土"老虎吃猪"棋局样式；右下角隐含杏核、板栗壳等考古元素',
        creatorQuote: '"我们在冶铁遗址旁捡到一枚\'老虎吃猪\'的棋子残片。四百年前的士兵也会无聊，也会想家，这种\'人味\'是我最想画进去的。"——壁画主笔',
        nextDistance: '下一幅80米，约1分钟'
      },
      {
        id: 3,
        title: '四季山色',
        description: '以四色为线索串联香屯四季风光：春日山桃花海、盛夏翠绿山谷、金秋板栗丰收、隆冬皑皑白雪',
        size: '2.8米×12米长卷（横跨两户人家外墙）',
        mainColor: '远山绿（#3b6934）',
        location: '主街道西侧连墙',
        innovation: '两户人家间30厘米缝隙设计成画面中的山涧溪流，建筑结构本身成为叙事的一部分',
        creatorQuote: '"两家人主动把院墙让给我们连通着画，说\'这条巷子走了几十年了，第一次觉得它好看\'。"——指导教师',
        nextDistance: '下一幅200米，约3分钟'
      },
      {
        id: 4,
        title: '铁火初燃',
        description: '辽代冶铁遗址想象复原图，浓烈灰黑色调描绘千年前炉火通明、铁水奔流的冶炼场景',
        size: '2米×4米',
        mainColor: '玄石青（#1c2b2b）',
        location: '冶铁遗址旁民居墙面',
        materialInnovation: '使用含铁矿粉的特殊颜料，特定光线下呈现微微金属光泽',
        backgroundFusion: '背景融入现代香屯村轮廓线，形成"千年炉火映照今日村庄"的时空对话'
      },
      {
        id: 5,
        title: '西星口营地',
        description: '以重新启用的历史地名为灵感，展现未来长城营地的美好愿景',
        location: '近村尾'
      }
    ]
  },

  // ---- 三条文旅路线 ----
  routes: {
    red: {
      name: '红色研学路线',
      subtitle: '烽火传承',
      theme: '从抗日烽火的前沿阵地到长城保护的"开学第一课"',
      duration: '半日至一日',
      suitableFor: ['学校团体', '党建活动', '亲子研学', '历史爱好者'],
      bestSeason: '4—5月山花烂漫，9—10月秋高气爽，是户外研学黄金时段',
      stops: [
        {
          name: '香屯村乡情村史陈列室',
          duration: '40分钟',
          highlights: '浓缩千年长城史：从辽代冶铁到明代筑城，从杏核出土到"西星口"地名重现'
        },
        {
          name: '明长城大庄科段修缮遗址',
          duration: '60分钟',
          highlights: '实地考察研究性修缮成果，每一寸墙面都有精确的三维数据存档'
        },
        {
          name: '西星口营地',
          duration: '90分钟',
          highlights: '盾牌绘制、长城攻防游戏、模拟考古发掘'
        },
        {
          name: '长城主题墙画',
          duration: '20分钟',
          highlights: '北京建筑大学师生创作的长城历史画廊'
        }
      ],
      activities: {
        shieldPainting: {
          name: '盾牌绘制体验',
          description: '蓝本取自考古出土的戍边器物，用传承红与玄石青颜料绘制，每一笔都是与六百年前守城将士的隔空对话'
        },
        battleGame: {
          name: '长城攻防游戏',
          description: '在西星口营地校场分组对阵，模拟明代长城攻守战术，灵感来源于城砖上的"老虎吃猪""五子棋"等民间游戏刻痕'
        },
        mockArchaeology: {
          name: '长城模拟考古',
          description: '在出土过明代杏核和粮食作物遗存的土地上，体验分层发掘、标本采集、三维记录的科学方法'
        },
        volunteerPatrol: {
          name: '长城保护志愿服务',
          description: '跟随村民长城保护义务服务队巡护城墙，清理杂草、记录险情'
        }
      },
      nearbyRedSite: '沙塘沟"平北红色第一村"距香屯约5公里',
      schoolCooperation: '与大庄科小学合作策划以长城保护为主题的"开学第一课"',
      halfDayItinerary: '乡情村史陈列室→明长城修缮遗址→西星口营地（约3.5小时）',
      fullDayItinerary: '陈列室→修缮遗址→午餐长城戍边餐→西星口研学活动→壁画漫步（约6小时）'
    },
    green: {
      name: '绿色生态路线',
      subtitle: '天然氧吧',
      theme: '95%林木覆盖率，四面环山的世外桃源',
      duration: '全程约4小时',
      difficulty: '轻松至中等',
      suitableFor: ['自然爱好者', '徒步爱好者', '亲子家庭', '摄影爱好者'],
      bestSeason: '秋季（9—10月）为最佳，板栗成熟、满山金黄可体验采摘；四季各有风景全年可访',
      stops: [
        {
          name: '板栗古林漫步道',
          duration: '60分钟',
          highlights: '百年板栗树春花如雪秋满坡金黄，脚下落叶铺成软毯，头顶板栗壳与松针交织'
        },
        {
          name: '龙吟溪谷生态区',
          duration: '90分钟',
          highlights: '1000多亩核心生态区域，峡谷溪流从长城山脊下蜿蜒汇聚，水声在两岸石壁间回响如龙吟'
        },
        {
          name: '香屯古村落',
          duration: '40分钟',
          highlights: '石墙青瓦民居、古法杏皮茶制作体验、村民生活'
        },
        {
          name: '长城远眺台',
          duration: '30分钟',
          highlights: '村东高处，大庄科段明长城沿山脊蜿蜒，3号4号敌台轮廓清晰可辨',
          photoTip: '日出时晨光勾勒城墙剪影，黄昏时远山绿渐变为深墨色'
        }
      ],
      ecology: {
        chestnutTrees: '板栗树龄超百年，春花如雪秋来金黄',
        apricotHistory: '考古出土明代杏核证明果木种植史至少六百年',
        villagerExpert: '村民胡淑琴女士传承古法杏皮茶制作技艺',
        biodiversity: '95%林木覆盖率孕育丰富的山地生态系统'
      },
      hikingOptions: '多条难度步道可选，从亲子漫步到长城登高皆宜',
      halfDayItinerary: '板栗古林→龙吟溪谷→长城远眺台',
      fullDayItinerary: '板栗古林晨间漫步→龙吟溪谷深入探索→午餐长城戍边餐与杏皮茶→古村落漫步→黄昏远眺台'
    },
    gray: {
      name: '灰色长城路线',
      subtitle: '六百年石语',
      theme: '触摸明代军事防御的脉搏——国家文物局首批研究性修缮试点',
      totalDistance: '全程约3.5公里',
      duration: '半日至一日',
      suitableFor: ['历史爱好者', '考古爱好者', '摄影爱好者', '长城文化研究者'],
      bestSeason: '秋季长城与红叶交相辉映；冬季雪后长城银装素裹最具力量',
      stops: [
        {
          name: '3号敌台遗址',
          duration: '45分钟',
          highlights: '研究性修缮的核心起点，体现"考古先行"理念，让明代工匠六百年前的砌筑技法重新可读'
        },
        {
          name: '4号敌台及墙体',
          duration: '45分钟',
          highlights: '400米修缮段落全景，"最小干预"修旧如旧，全过程数字化使每寸墙面有精确三维档案'
        },
        {
          name: '西星口遗址',
          duration: '30分钟',
          highlights: '明代黄花路咽喉通道，地名沉睡380年后以"西星口营地"之名复活'
        },
        {
          name: '京畿长城风景道（规划中）',
          duration: '60分钟',
          highlights: '沿长城山脊与龙吟溪谷蜿蜒展开，串联修缮遗址、营地与板栗古林'
        }
      ],
      policy: '2026年3月1日《北京市长城保护条例》第二十七条：推动具备条件的长城点段辟为参观游览区',
      halfDayItinerary: '西星口→3号敌台→4号敌台墙体（约3小时）',
      fullDayItinerary: '乡情村史陈列室→西星口→长城遗址全线→午餐→风景道徒步（约6—7小时）'
    }
  },

  // ---- 文旅发展 ----
  tourism: {
    company: {
      name: '北京龙吟溪谷文旅发展有限公司',
      joinDate: '2025年4月',
      investment: '投入430余万元'
    },
    projectScale: '规划1000多亩文旅项目',
    plannedFacilities: [
      '长城书院（综合文化设施）',
      '长城剧场（演艺文化设施）',
      '长城研学基地（教育体验设施）',
      '西星口营地（户外营地）',
      '校场（训练与活动场所）'
    ],
    trialOperation: {
      visitors: '试运营累计接待游客1.5万余人次',
      revenue: '实收65万元',
      volunteers: '40名大学生志愿者参与'
    },
    event: '2025年"首届长城国潮文化季"活动',
    scenicRoad: {
      name: '京畿长城风景道',
      plan: '延庆区规划，沿长城山脊与龙吟溪谷蜿蜒展开',
      features: '串联修缮遗址、西星口营地与板栗古林，集历史体验、自然观赏、户外徒步于一体的文化景观廊道'
    }
  },

  // ---- 文化产品（非商业化） ----
  culturalProducts: [
    {
      name: '长城戍边餐',
      description: '结合考古出土的粟、黍等粮食作物遗存和古籍记载，还原明代守城将士的一日三餐',
      menu: '粟米粥、腌制野菜、粗粮饼等',
      significance: '每一口都是穿越时空的味觉档案'
    },
    {
      name: '香屯古法杏皮茶',
      description: '结合考古出土明代炭化杏核遗存，由村民胡淑琴挖掘传统技术手工熬制本地杏果',
      taste: '酸甜之间是山野的本真味道',
      significance: '徒步归来，一碗杏皮茶便是最好的犒赏'
    },
    {
      name: '研学活动',
      items: [
        '盾牌绘制（以考古出土戍边器物为蓝本）',
        '长城攻防游戏（模拟明代长城攻守战术）',
        '长城模拟考古（分层发掘、标本采集、三维记录）',
        '长城保护志愿巡护（跟随义务服务队巡护城墙）'
      ]
    }
  ],

  // ---- 高校合作 ----
  universityCooperation: [
    {
      university: '北京建筑大学',
      department: '土木与交通工程学院',
      contribution: '师生驻村两月调研长城修缮工艺，基于建筑遗产数字化记录绘制5幅长城主题壁画（全程约800米）'
    },
    {
      university: '北京师范大学',
      department: '马克思主义学院',
      contribution: '完成《回应总书记之嘱托：乡村振兴背景下研究性修缮类长城活化利用的困境与出路》课题'
    },
    {
      university: '北京邮电大学世纪学院',
      contribution: '创业实践社深度交流，探索数字技术赋能长城文旅'
    },
    {
      university: '对外经济贸易大学',
      contribution: '提出"一村一品"课题，经济学视角的品牌策划与文旅推广'
    }
  ],

  // ---- 参赛团队 ----
  team: {
    competition: '"青振京郊"乡村振兴专项赛',
    projectNumber: '项目编号17',
    leader: '沈书诚',
    members: ['任济坤', '汪学军', '郭鹤羽', '梁晋玮'],
    advisor: '田甜',
    contact: 'support@editnow.uk'
  },

  // ---- 季节与游览建议 ----
  seasonalGuide: {
    spring: {
      months: '3—5月',
      temperature: '10—20℃',
      highlights: '杏花、桃花、山桃花次第绽放，板栗花穗挂满枝头',
      atmosphere: '空气中弥漫着花蜜与松脂的清甜，整座山谷被嫩绿包裹',
      activities: '徒步和户外研学，拍摄"长城春色"的绝佳时机'
    },
    summer: {
      months: '6—8月',
      temperature: '比市区凉爽5—8℃',
      highlights: '龙吟溪谷水声潺潺、林荫蔽日，京北天然避暑凉地',
      atmosphere: '95%的林木覆盖率让山谷凉爽宜人',
      tips: '防蚊虫，午后可能阵雨，建议随身携带雨具；遇雷电不要在长城高处停留'
    },
    autumn: {
      months: '9—11月',
      recommended: true,
      highlights: '板栗成熟、红叶满山，十月中下旬红叶最盛',
      atmosphere: '栗壳炸裂的声响回荡山间，红叶与灰色城墙的冷暖对比构成最动人的长城秋色',
      activities: '采摘体验，板栗金与长城灰形成绝妙色彩对比'
    },
    winter: {
      months: '12—2月',
      temperature: '可达零下15℃',
      highlights: '大雪初霁，明长城银装素裹，敌台在白色山脊间如墨笔勾勒',
      atmosphere: '38户人家炊烟袅袅，山村安静得只听见雪落的声音',
      tips: '注意保暖，路面可能结冰，穿防水保暖徒步鞋，自驾携带防滑链；山区天黑较早，建议下午4点前离村'
    },
    bestPhotoTime: '清晨和黄昏光线最佳',
    photographyGuide: {
      sunrise: '村东高处拍摄3号敌台剪影，晨光沿山脊勾勒城墙天际线（5:30—6:30）',
      goldenAutumn: '9—10月板栗金与玄石青冷暖对比，大庄科段最动人的长城影像',
      snowScene: '雪后初晴，银装素裹的400米墙体最为壮观，黑白之间六百年沧桑尽收眼底'
    }
  },

  // ---- 游客须知 ----
  visitorTips: {
    villageNote: '香屯是真实的居住社区（38户74口人），不是成熟的商业景区，保留了最质朴的长城脚下生活气息',
    equipment: [
      '防滑登山鞋（必备，长城段和步道均为不规则石面）',
      '充足饮水和食物（村内无便利店，建议自备一日份补给）',
      '防晒装备（帽子、防晒霜、墨镜，山区紫外线较强）',
      '手机充电宝（山区信号不稳定，但导航仍需手机）',
      '垃圾袋（无专门处理设施，自行带走）',
      '离线地图（高德或百度，提前下载离线包）'
    ],
    etiquette: [
      '尊重村民生活，勿擅自进入民宅或私人院落',
      '保护长城文物，禁止攀爬未开放段，禁止在城砖上刻画或取走任何文物',
      '保持安静，村中60岁以下仅10余人，多为老年人居住',
      '带走垃圾，践行"无痕旅游"理念',
      '禁止野外用火或吸烟，山林环绕注意防火'
    ],
    safety: [
      '修缮段长城开放参观但部分区域仍有坍塌风险，严格按标识路线行走',
      '雨后石面湿滑，尤其注意脚下',
      '夏秋季蛇类出没，穿高帮鞋长裤，草丛中避免用手翻动石块，随身携带蛇药或急救包',
      '夏季午后常有雷阵雨，大风暴雨大雪天气不建议进山',
      '最近医院在延庆城区（约30公里），山区道路救援拨打12122',
      '发现破坏长城行为可拨打文物举报电话12359'
    ],
    accommodation: '村内暂无便利店或餐饮店，计划留宿的游客可预约农家饭'
  },

  // ---- 法律政策 ----
  legalFramework: {
    greatWallProtectionRegulation: {
      name: '《长城保护条例》',
      year: 2006,
      keyRule: '禁止在长城上刻画、涂污、张贴',
      protectionZone: '长城两侧各500米为保护范围禁止取土'
    },
    beijingGreatWallRegulation: {
      name: '《北京市长城保护条例》',
      effectiveDate: '2026年3月1日',
      keyArticle: '第二十七条：推动具备条件的长城点段辟为参观游览区'
    },
    reportingHotline: '文物举报电话：12359'
  },

  // ---- 驻村第一书记 ----
  secretary: {
    name: '范学新',
    title: '驻村第一书记',
    background: '从事文物保护、地方历史文化研究30余年的研究馆员',
    affiliation: '延庆区文物局研究馆员',
    contributions: [
      '亲自策展乡情村史陈列室，以"长城与村庄"为叙事主线',
      '推动长城研究性修缮项目在香屯落地',
      '带领村民成立长城保护义务服务队',
      '与大庄科小学合作策划"开学第一课"'
    ]
  },

  // ---- 重要村民 ----
  notableVillagers: {
    huShuqin: {
      name: '胡淑琴',
      role: '古法杏皮茶传承人',
      description: '在自家院子里传承古法手工熬制杏皮茶的技艺',
      significance: '将考古出土的明代杏核遗存与传统手工制作技术结合，酸甜之间是山野的本真味道'
    }
  },

  // ---- 交通信息 ----
  transportation: {
    mainRoad: {
      name: '东香路',
      description: '连接东三岔村和香屯村的唯一进村乡村公路，约5公里',
      conditions: '路面较窄，弯道多需控制车速，会车需注意减速让行',
      winterWarning: '冬季路面可能结冰，建议准备防滑链',
      rainyWarning: '雨季注意山洪预警',
      scenery: '东香路蜿蜒于山谷之间，一水中流，两山夹峙——从现代文明进入古朴山村的过渡通道'
    },
    selfDrive: {
      step1: '京藏高速（G6）从北京城区北行，经过居庸关、八达岭段',
      step2: '进入延庆区域后按导航转向大庄科乡',
      step3: '到达东三岔村后转入东香路约5公里到达',
      navigationTip: '导航搜索"延庆区大庄科乡香屯村"或"香屯村委会"',
      totalDistance: '全程约80公里',
      duration: '正常路况约1.5—2小时',
      peakWarning: '周末和节假日京藏高速八达岭段容易拥堵',
      tips: [
        '延庆城区加满油再出发，进村沿途没有加油站',
        '早晨7点前出发避免京藏高速拥堵',
        '返程避开下午4—6点高峰',
        '山区天黑较早，冬季建议下午4点前离村'
      ]
    },
    publicTransport: {
      step1: '市郊铁路S2线从北京北站（西直门）或清河站到延庆站（约1.5小时）',
      step2: '延庆站乘出租车或网约车至大庄科乡方向（约30公里，车费约80—100元）',
      step3: '从大庄科乡到香屯村还需约8公里，建议提前预约接驳服务',
      note: '香屯村不通公交车，公共交通只能到达大庄科乡附近'
    },
    parking: '村内停车区域约可容纳20辆车，旺季需提前预约；大型旅游巴士请在村口空地停放',
    scenicDrive: {
      badaling: '沿京藏高速行驶时可远眺八达岭长城蜿蜒于群山之巅',
      mountainRoad: '转入延庆山区后公路两侧山峦起伏、晨雾缭绕，秋季栗林金黄、冬日银装素裹',
      dongxiangRoad: '东香路山谷段一水中流、两山夹峙'
    },
    nearbyLandmarks: {
      yanqingCity: '延庆城区约30公里',
      badaling: '八达岭长城约35公里',
      waterGreatWall: '怀柔水长城约15公里（村东峡谷可通）',
      beijing: '北京市中心约80公里'
    },
    emergencyInfo: {
      nearestHospital: '延庆城区（约30公里）',
      roadRescue: '12122',
      mobileSignal: '山区手机信号不稳定，建议提前下载离线地图'
    }
  },

  // ---- 预约与承载量 ----
  booking: {
    dailyCapacity: '日均承载量400人（上午200人/下午200人）',
    timeSlots: '上午8:00—12:00 / 下午13:00—17:00',
    advanceBooking: '支持提前预约入园时段，7天滚动预约',
    peakSeason: '旺季建议提前预约，错峰游览',
    groupVisit: '团体游客（10人以上）需提前联系',
    contact: 'support@editnow.uk'
  },

  // ---- 守护者计划 ----
  guardianProgram: {
    name: '长城守护者计划',
    purpose: '鼓励游客从旁观者变为长城保护的参与者',
    flow: '签署倡议→答题闯关→完成任务→成为荣誉守护者',
    levels: [
      { level: 0, name: '新访客', coins: 0 },
      { level: 1, name: '初心守护者', coins: 50 },
      { level: 2, name: '热心守护者', coins: 120 },
      { level: 3, name: '忠诚守护者', coins: 200 },
      { level: 4, name: '荣誉守护者', coins: 300 }
    ],
    badges: ['倡议徽章', '答题徽章', '任务徽章'],
    modules: {
      pledge: {
        name: '保护倡议书',
        reward: '+30能量币',
        commitments: [
          '不攀爬未开放长城段落，遵守长城保护法规',
          '不在长城及周边区域乱扔垃圾，践行"无痕旅行"',
          '不破坏长城沿线植被和生态环境',
          '积极向身边人宣传长城保护知识',
          '发现破坏长城行为及时举报（电话：12359）'
        ],
        result: '获得个人专属守护者证书（可下载）'
      },
      quiz: {
        name: '知识问答',
        reward: '每题+5能量币，满分50',
        format: '15题库随机抽取10题，单选题',
        categories: ['长城保护法规', '生态知识', '香屯文化'],
        sampleFacts: [
          '《长城保护条例》颁布于2006年',
          '香屯林木覆盖率95%',
          '香屯标志性特产为板栗',
          '"传承红"代表辽代冶铁炉火与革命红色血脉',
          '消失380多年的地名为"西星口"',
          '香屯长城属明代昌镇黄花路西老星口段',
          '文物举报电话12359'
        ]
      },
      tasks: {
        name: '任务打卡',
        list: [
          { task: '游客驿站垃圾箱打卡', reward: '+20能量币', needsLocation: true },
          { task: '安全观景台打卡', reward: '+20能量币', needsLocation: true },
          { task: '百年板栗古树打卡', reward: '+20能量币', needsLocation: true },
          { task: '分享保护承诺给朋友或社交媒体', reward: '+10能量币', needsLocation: false }
        ]
      }
    }
  },

  // ---- IP形象 ----
  mascot: {
    name: '板栗守护灵',
    inspirations: [
      '甲壳：明长城3号敌台的城砖纹理',
      '内核：百年板栗林的温厚',
      '轮廓：考古出土的戍边盾牌',
      '姿态：长城攻防游戏中的守卒形象'
    ],
    identity: '38户人家世代相传的守护灵，六百年历史与当下的文化信使'
  }
};


// ============================================================
// System Prompt 生成函数
// ============================================================
window.buildSystemPrompt = function buildSystemPrompt() {
  var k = window.XIANGTUN_KNOWLEDGE;

  var knowledgeText = [
    '【村庄概况】',
    k.village.fullAddress + '，地处' + k.village.location + '。',
    k.village.geography + '。' + k.village.terrain + '。',
    k.village.easterGorge + '。',
    '距北京市中心约80公里，距八达岭长城约35公里，距延庆城区约30公里。',
    k.village.forestCoverage + '。' + k.village.naturalFeatures + '。',
    k.village.architecture + '。',
    '现有' + k.village.population.households + '户' + k.village.population.residents + '口人（' + k.village.population.permanent + '），' + k.village.population.note + '。',
    k.village.honors.join('；') + '。',
    '',

    '【历史年表】',
    k.history.liao.period + '（' + k.history.liao.title + '）：' + k.history.liao.events.join('；') + '。',
    k.history.ming.period + '（' + k.history.ming.title + '）：' + k.history.ming.events.join('；') + '。',
    k.history.qing.period + '（' + k.history.qing.title + '）：' + k.history.qing.events.join('；') + '。',
    k.history.antiJapanese.period + '（' + k.history.antiJapanese.title + '）：' + k.history.antiJapanese.events.join('；') + '。',
    k.history.beautifulVillage.period + '（' + k.history.beautifulVillage.title + '）：' + k.history.beautifulVillage.events.join('；') + '。',
    k.history.restoration.period + '（' + k.history.restoration.title + '）：' + k.history.restoration.events.join('；') + '。',
    k.history.museumOpening.period + '（' + k.history.museumOpening.title + '）：' + k.history.museumOpening.events.join('；') + '。',
    k.history.tourismLaunch.period + '（' + k.history.tourismLaunch.title + '）：' + k.history.tourismLaunch.events.join('；') + '。',
    k.history.future.period + '（' + k.history.future.title + '）：' + k.history.future.events.join('；') + '。',
    '',

    '【四色品牌】',
    '品牌理念：' + k.fourColors.methodology,
    '传承红（' + k.fourColors.red.hex + '）——' + k.fourColors.red.origin + '。' + k.fourColors.red.symbolism + '。' + k.fourColors.red.role + '。',
    '板栗金（' + k.fourColors.gold.hex + '）——' + k.fourColors.gold.origin + '。' + k.fourColors.gold.symbolism + '。' + k.fourColors.gold.role + '。',
    '远山绿（' + k.fourColors.green.hex + '）——' + k.fourColors.green.origin + '。' + k.fourColors.green.symbolism + '。' + k.fourColors.green.role + '。',
    '玄石青（' + k.fourColors.ink.hex + '）——' + k.fourColors.ink.origin + '。' + k.fourColors.ink.symbolism + '。' + k.fourColors.ink.role + '。',
    '',

    '【长城保护与修缮】',
    k.greatWallRestoration.projectName + '——' + k.greatWallRestoration.background + '。',
    k.greatWallRestoration.historicSignificance + '。',
    '明代属' + k.greatWallRestoration.historicDesignation + '，' + k.greatWallRestoration.buildingPeriod + '，' + k.greatWallRestoration.strategicRole + '。',
    '四大理念：考古先行——' + k.greatWallRestoration.principles.details.archaeologyFirst + '；最小干预——' + k.greatWallRestoration.principles.details.minimalIntervention + '；多学科协同——' + k.greatWallRestoration.principles.details.multidisciplinary + '；全过程数字化——' + k.greatWallRestoration.principles.details.digitalization + '。',
    '修缮范围：' + k.greatWallRestoration.site + '。',
    k.greatWallRestoration.donation.donor + '捐赠' + k.greatWallRestoration.donation.amount + '。',
    k.greatWallRestoration.timeline.start + '，' + k.greatWallRestoration.timeline.fullImplementation + '，' + k.greatWallRestoration.timeline.completion + '。',
    '"西星口"——' + k.greatWallRestoration.historicName.note + '。' + k.greatWallRestoration.historicName.rediscovery + '。',
    k.greatWallRestoration.presidentialLetter.date + '习近平总书记给石峡村村民回信：' + k.greatWallRestoration.presidentialLetter.quote + '。',
    '长城保护义务服务队：' + k.greatWallRestoration.protectionTeam.description + '，' + k.greatWallRestoration.protectionTeam.duties + '。',
    '',

    '【考古发现】',
    k.archaeology.liaoIronSmelting.name + '：出土' + k.archaeology.liaoIronSmelting.finds.join('、') + '。' + k.archaeology.liaoIronSmelting.significance + '。' + k.archaeology.liaoIronSmelting.description + '。',
    k.archaeology.mingGreatWall.name + '：出土' + k.archaeology.mingGreatWall.finds.join('、') + '。' + k.archaeology.mingGreatWall.significance + '。' + k.archaeology.mingGreatWall.derivedProducts + '。',
    k.archaeology.folkGames.name + '：发现' + k.archaeology.folkGames.finds.join('、') + '。' + k.archaeology.folkGames.significance + '。' + k.archaeology.folkGames.description + '。' + k.archaeology.folkGames.futurePlan + '。',
    '"西星口"地名：' + k.archaeology.historicName.find + '，' + k.archaeology.historicName.significance + '。现' + k.archaeology.historicName.modernUse + '。',
    '',

    '【文化设施】',
    k.culturalFacilities.villageMuseum.area + k.culturalFacilities.villageMuseum.name + '于' + k.culturalFacilities.villageMuseum.openDate + '开馆，' + k.culturalFacilities.villageMuseum.curator + '。',
    '叙事主线：' + k.culturalFacilities.villageMuseum.narrative + '。',
    '展品：' + k.culturalFacilities.villageMuseum.exhibits.join('、') + '。',
    '亮点：' + k.culturalFacilities.villageMuseum.highlightExhibits + '。',
    '延庆融媒体《洞见长城》全程直播，在线观众' + k.culturalFacilities.villageMuseum.liveStream.audience + '。',
    '计划建设"' + k.culturalFacilities.planned.name + '"——' + k.culturalFacilities.planned.description + '，' + k.culturalFacilities.planned.timeline + '。',
    '',

    '【壁画地图】',
    k.murals.overview.creator + '，' + k.murals.overview.creationPeriod + '。',
    '目标：' + k.murals.overview.purpose + '。',
    k.murals.overview.walkingRoute + '，' + k.murals.overview.access + '。' + k.murals.overview.bestTime + '。',
    k.murals.overview.communityInvolvement + '。',
    k.murals.list.map(function(m) {
      var desc = '壁画' + m.id + '《' + m.title + '》：' + m.description;
      if (m.size) desc += '，尺寸' + m.size;
      if (m.mainColor) desc += '，' + m.mainColor + '为主色调';
      desc += '，位于' + m.location;
      if (m.technique) desc += '。技法：' + m.technique;
      if (m.innovation) desc += '。创新：' + m.innovation;
      if (m.materialInnovation) desc += '。材料：' + m.materialInnovation;
      if (m.archaeologyElements) desc += '。考古元素：' + m.archaeologyElements;
      if (m.creatorQuote) desc += '。创作者说：' + m.creatorQuote;
      return desc;
    }).join('\n') + '。',
    '',

    '【红色研学路线——' + k.routes.red.subtitle + '】',
    '主题：' + k.routes.red.theme + '。时长：' + k.routes.red.duration + '。',
    '适合：' + k.routes.red.suitableFor.join('、') + '。最佳季节：' + k.routes.red.bestSeason + '。',
    '站点：' + k.routes.red.stops.map(function(s) { return s.name + '（' + s.duration + '：' + s.highlights + '）'; }).join(' → ') + '。',
    '研学活动：' + k.routes.red.activities.shieldPainting.name + '——' + k.routes.red.activities.shieldPainting.description + '；' + k.routes.red.activities.battleGame.name + '——' + k.routes.red.activities.battleGame.description + '；' + k.routes.red.activities.mockArchaeology.name + '——' + k.routes.red.activities.mockArchaeology.description + '；' + k.routes.red.activities.volunteerPatrol.name + '——' + k.routes.red.activities.volunteerPatrol.description + '。',
    k.routes.red.nearbyRedSite + '。' + k.routes.red.schoolCooperation + '。',
    '半日：' + k.routes.red.halfDayItinerary + '。一日：' + k.routes.red.fullDayItinerary + '。',
    '',

    '【绿色生态路线——' + k.routes.green.subtitle + '】',
    '主题：' + k.routes.green.theme + '。时长：' + k.routes.green.duration + '。难度：' + k.routes.green.difficulty + '。',
    '适合：' + k.routes.green.suitableFor.join('、') + '。最佳季节：' + k.routes.green.bestSeason + '。',
    '站点：' + k.routes.green.stops.map(function(s) {
      var t = s.name + '（' + s.duration + '：' + s.highlights;
      if (s.photoTip) t += '；摄影：' + s.photoTip;
      return t + '）';
    }).join(' → ') + '。',
    k.routes.green.ecology.chestnutTrees + '。' + k.routes.green.ecology.apricotHistory + '。' + k.routes.green.ecology.villagerExpert + '。' + k.routes.green.hikingOptions + '。',
    '半日：' + k.routes.green.halfDayItinerary + '。一日：' + k.routes.green.fullDayItinerary + '。',
    '',

    '【灰色长城路线——' + k.routes.gray.subtitle + '】',
    '主题：' + k.routes.gray.theme + '。全程' + k.routes.gray.totalDistance + '。时长：' + k.routes.gray.duration + '。',
    '适合：' + k.routes.gray.suitableFor.join('、') + '。最佳季节：' + k.routes.gray.bestSeason + '。',
    '站点：' + k.routes.gray.stops.map(function(s) { return s.name + '（' + s.duration + '：' + s.highlights + '）'; }).join(' → ') + '。',
    '政策：' + k.routes.gray.policy + '。',
    '半日：' + k.routes.gray.halfDayItinerary + '。一日：' + k.routes.gray.fullDayItinerary + '。',
    '',

    '【文旅发展】',
    k.tourism.company.name + '于' + k.tourism.company.joinDate + '入驻，' + k.tourism.company.investment + '。' + k.tourism.projectScale + '。',
    '设施：' + k.tourism.plannedFacilities.join('、') + '。',
    k.tourism.trialOperation.visitors + '，' + k.tourism.trialOperation.revenue + '，' + k.tourism.trialOperation.volunteers + '。',
    k.tourism.event + '。',
    '京畿长城风景道：' + k.tourism.scenicRoad.features + '。',
    '',

    '【文化体验】',
    k.culturalProducts.map(function(p) {
      if (p.items) return p.name + '：' + p.items.join('；');
      var t = p.name + '——' + p.description;
      if (p.menu) t += '。菜品：' + p.menu;
      if (p.taste) t += '。' + p.taste;
      if (p.significance) t += '。' + p.significance;
      return t;
    }).join('\n') + '。',
    '',

    '【高校合作】',
    k.universityCooperation.map(function(u) {
      var t = u.university;
      if (u.department) t += '（' + u.department + '）';
      return t + '：' + u.contribution;
    }).join('；') + '。',
    '',

    '【参赛团队】',
    k.team.competition + '，' + k.team.projectNumber + '。负责人：' + k.team.leader + '，成员：' + k.team.members.join('、') + '，指导老师：' + k.team.advisor + '。',
    '',

    '【季节指南】',
    '春季（' + k.seasonalGuide.spring.months + '）：' + k.seasonalGuide.spring.temperature + '。' + k.seasonalGuide.spring.highlights + '。' + k.seasonalGuide.spring.atmosphere + '。适合' + k.seasonalGuide.spring.activities + '。',
    '夏季（' + k.seasonalGuide.summer.months + '）：' + k.seasonalGuide.summer.temperature + '。' + k.seasonalGuide.summer.highlights + '。' + k.seasonalGuide.summer.tips + '。',
    '秋季（' + k.seasonalGuide.autumn.months + '）：★推荐季节★ ' + k.seasonalGuide.autumn.highlights + '。' + k.seasonalGuide.autumn.atmosphere + '。' + k.seasonalGuide.autumn.activities + '。',
    '冬季（' + k.seasonalGuide.winter.months + '）：' + k.seasonalGuide.winter.temperature + '。' + k.seasonalGuide.winter.highlights + '。' + k.seasonalGuide.winter.tips + '。',
    '摄影：' + k.seasonalGuide.bestPhotoTime + '。日出：' + k.seasonalGuide.photographyGuide.sunrise + '。金秋：' + k.seasonalGuide.photographyGuide.goldenAutumn + '。雪景：' + k.seasonalGuide.photographyGuide.snowScene + '。',
    '',

    '【游客须知】',
    '重要：' + k.visitorTips.villageNote + '。',
    '装备：' + k.visitorTips.equipment.join('；') + '。',
    '礼仪：' + k.visitorTips.etiquette.join('；') + '。',
    '安全：' + k.visitorTips.safety.join('；') + '。',
    '食宿：' + k.visitorTips.accommodation + '。',
    '',

    '【守护者计划】',
    k.guardianProgram.name + '——' + k.guardianProgram.purpose + '。流程：' + k.guardianProgram.flow + '。',
    '等级：' + k.guardianProgram.levels.map(function(l) { return 'Lv.' + l.level + ' ' + l.name + '（' + l.coins + '币）'; }).join(' → ') + '。',
    '徽章：' + k.guardianProgram.badges.join('、') + '。',
    '倡议（+30币）：' + k.guardianProgram.modules.pledge.commitments.join('；') + '。签署后获专属守护者证书。',
    '问答（每题+5币）：' + k.guardianProgram.modules.quiz.format + '，涵盖' + k.guardianProgram.modules.quiz.categories.join('、') + '。',
    '打卡：' + k.guardianProgram.modules.tasks.list.map(function(t) { return t.task + '（' + t.reward + '）'; }).join('；') + '。',
    '',

    '【预约】',
    '承载量：' + k.booking.dailyCapacity + '。时段：' + k.booking.timeSlots + '。',
    k.booking.advanceBooking + '。' + k.booking.groupVisit + '。联系：' + k.booking.contact + '。',
    '',

    '【法律政策】',
    k.legalFramework.greatWallProtectionRegulation.name + '（' + k.legalFramework.greatWallProtectionRegulation.year + '年）：' + k.legalFramework.greatWallProtectionRegulation.keyRule + '。',
    k.legalFramework.beijingGreatWallRegulation.name + '（' + k.legalFramework.beijingGreatWallRegulation.effectiveDate + '起）：' + k.legalFramework.beijingGreatWallRegulation.keyArticle + '。',
    k.legalFramework.reportingHotline + '。',
    '',

    '【驻村第一书记】',
    k.secretary.name + '，' + k.secretary.background + '（' + k.secretary.affiliation + '）。贡献：' + k.secretary.contributions.join('；') + '。',
    '',

    '【重要村民】',
    k.notableVillagers.huShuqin.name + '——' + k.notableVillagers.huShuqin.role + '。' + k.notableVillagers.huShuqin.significance + '。',
    '',

    '【IP形象——板栗守护灵】',
    '灵感：' + k.mascot.inspirations.join('；') + '。身份：' + k.mascot.identity + '。',
    '',

    '【交通】',
    '自驾：' + k.transportation.selfDrive.step1 + ' → ' + k.transportation.selfDrive.step2 + ' → ' + k.transportation.selfDrive.step3 + '。',
    '导航：' + k.transportation.selfDrive.navigationTip + '。全程' + k.transportation.selfDrive.totalDistance + '，' + k.transportation.selfDrive.duration + '。',
    '建议：' + k.transportation.selfDrive.tips.join('；') + '。',
    '公共交通：' + k.transportation.publicTransport.step1 + ' → ' + k.transportation.publicTransport.step2 + ' → ' + k.transportation.publicTransport.step3 + '。' + k.transportation.publicTransport.note + '。',
    '进村公路：' + k.transportation.mainRoad.name + '——' + k.transportation.mainRoad.description + '。' + k.transportation.mainRoad.conditions + '。',
    '沿途：' + k.transportation.mainRoad.scenery + '。',
    '停车：' + k.transportation.parking + '。',
    '周边：延庆城区' + k.transportation.nearbyLandmarks.yanqingCity + '，八达岭' + k.transportation.nearbyLandmarks.badaling + '，怀柔水长城' + k.transportation.nearbyLandmarks.waterGreatWall + '，北京' + k.transportation.nearbyLandmarks.beijing + '。',
    '应急：最近医院' + k.transportation.emergencyInfo.nearestHospital + '，道路救援' + k.transportation.emergencyInfo.roadRescue + '。' + k.transportation.emergencyInfo.mobileSignal + '。'
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
    '- 善于用生动的比喻和故事让历史"活"起来',
    '- 回答完问题后，主动推荐一个相关的话题或路线，引导继续探索',
    '- 遇到不确定的信息，坦诚说"这个我得再打听打听"，绝不编造',
    '',
    '## 回复规则',
    '- 只回答与香屯村、长城文化、大庄科乡相关的问题',
    '- 如果用户问了无关的问题，礼貌地引导回来，比如："嘿，这个我可不在行，不过要是想聊聊咱香屯村的长城故事，那我可有得说！"',
    '- 所有回复内容必须基于下方知识库，不要杜撰任何不在知识库中的信息',
    '- 不要提及任何商业化内容（价格、购物、商城等）',
    '- 介绍文化体验和饮食时，侧重历史文化内涵，不涉及消费',
    '- 当被问到壁画时，可以引用创作者的话让回答更生动',
    '- 当被问到研学活动时，详细描述互动体验的内容和意义',
    '- 当被问到季节和摄影时，给出具体的时间和位置建议',
    '',
    '## 知识库',
    knowledgeText
  ].join('\n');

  return systemPrompt;
};
