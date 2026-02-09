
import { DailyPlan, FoodCategory, UsefulLink } from './types';

const getMapUrl = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const PACKING_LIST = [
  "护照 x 2", "电话卡 x 2", "银行卡 x 2", "日元 3w1", "墨镜 x 2",
  "充电宝 x 2", "充电线 x 2 + 手表线", "转换头 x 1", "热水壶",
  "相机 检查电池", "自拍杆", "暖宝宝 少量", "痔疮膏", "康泰克",
  "褪黑素", "维生素D", "刮胡刀", "隐形眼镜", "一次性浴巾 + 毛巾",
  "保温杯 x 1", "面巾纸 + 洗脸巾", "工作电脑 + 充电线",
  "手套 + 口罩 x 2", "护膝", "妹猪", "无印良品 U型枕", "脖套 x 2", "帽子"
];

export const USEFUL_LINKS: UsefulLink[] = [
  { title: "JR Pass 预约官网", url: "https://www.eki-net.com/zh-CHS/jreast-train-reservation/Top/Index", description: "JR Pass 订票及预约", icon: "train" },
  { title: "小樽水族馆", url: "https://otaru-aq.jp/", description: "表演时间查询", icon: "star" },
  { title: "环球影城 (USJ)", url: "https://www.usj.co.jp/web/zh/cn", description: "官方信息", icon: "star" }
];

export const FOOD_DATA: FoodCategory[] = [
  { location: "大阪", items: ["和牛", "寿喜烧", "天妇罗"] },
  { location: "北海道", items: ["寿司", "拉面", "海鲜"] },
  { location: "函馆", items: ["海鲜"] }
];

export const TRIP_SCHEDULE: DailyPlan[] = [
  {
    date: "2.11",
    title: "上海 - 大阪",
    itinerary: [
      { time: "17:50-20:55", activity: "✈️ 浦东机场 - 关西机场" },
      { 
        time: "21:40-23:00", 
        activity: "🚇 关西机场 - Hotel Keihan Yodoyabashi", 
        note: "Agoda预定/无早/有住宿税",
        mapLink: getMapUrl("Hotel Keihan Yodoyabashi")
      }
    ],
    todo: ["起飞前退订退改无忧！", "到酒店先刷2笔便利店把银联汇率刷上去"]
  },
  {
    date: "2.12",
    title: "京都巡礼",
    spots: [
      { name: "伏见稻荷神社" }, { name: "清水寺" }, { name: "三年坂/二年坂" }, 
      { name: "花见小路" }, { name: "八坂神社" }, { name: "贵船神社(可选)" },
      { name: "鸭川(可选)" }, { name: "心斋桥" }, { name: "梅田(可选)" }
    ],
    itinerary: [
      { time: "09:00-10:00", activity: "Hotel - 伏见稻荷神社" },
      { time: "10:00-11:00", activity: "逛：伏见稻荷神社" },
      { time: "11:00-11:40", activity: "伏见稻荷神社 - 清水寺" },
      { time: "11:40-14:00", activity: "清水寺、三年坂、二年坂、花见小路、八坂神社", note: "清水寺逛0.5h, 其他走下来0.5h, 择机吃饭" },
      { time: "(可选) 3-4h", activity: "贵船神社", note: "下雪可冲，但路途曲折，看体力慎重" },
      { time: "(可选) 0.5h", activity: "鸭川", note: "京都步行街，很有名，可吃饭" },
      { time: "1h", activity: "回大阪" },
      { time: "15m", activity: "心斋桥", note: "大阪最热闹的地方，晚上随便逛逛，可吃饭" },
      { time: "15m", activity: "梅田", note: "不购物不用去" }
    ]
  },
  {
    date: "2.13",
    title: "环球影城 (USJ)",
    itinerary: [
      { time: "08:00-08:30", activity: "Hotel - 环球影城" },
      { 
        time: "09:00", 
        activity: "任天堂/小黄人/哈利波特/好莱坞梦幻/大白鲨", 
        note: "任天堂包含：奇诺比奥的疯狂矿车、马里奥卡丁车、耀西冒险(可选)" 
      }
    ],
    todo: ["下载USJ，两个人票绑在一个号上，防止任天堂抽到不同时间端", "开门第一时间打开USJ排任天堂"]
  },
  {
    date: "2.14",
    title: "大阪 - 札幌",
    spots: [{ name: "大通公园" }, { name: "札幌电视塔" }, { name: "狸小路" }],
    itinerary: [
      { time: "09:30-10:40", activity: "Hotel - 关西机场" },
      { time: "12:40-14:35", activity: "✈️ 关西机场 - 札幌新千岁机场" },
      { 
        time: "15:00-16:30", 
        activity: "🏨 新千岁机场 - Holiday Inn & Suites Sapporo Odori", 
        note: "有泡澡和桑拿",
        mapLink: getMapUrl("Holiday Inn & Suites Sapporo Odori")
      },
      { time: "看情况1", activity: "啤酒博物馆, 大通公园, 札幌电视塔, 狸小路", note: "顺路去札幌站把JR Pass出票" },
      { time: "看情况2", activity: "北海道神宫, 啤酒博物馆", note: "北海道神宫5点关门，啤酒博物馆最晚17:30入馆" }
    ]
  },
  {
    date: "2.15",
    title: "美瑛 (Plan A)",
    itinerary: [
      { time: "08:00-10:12", activity: "🚆 札幌站 - 旭川站", note: "8:00 JR丁香线" },
      { time: "10:31-11:00", activity: "🚌 美瑛站前39路巴士 - 白金温泉" },
      { time: "11:00-14:00", activity: "❄️ 白金温泉, 白须瀑布, 青池" },
      { time: "14:38-15:06", activity: "🚌 白金温泉 - 四季之塔" },
      { time: "15:10-17:30", activity: "四季之塔, 美瑛神社" },
      { time: "17:39-20:02", activity: "🚆 返回札幌", note: "旭川站 18:25 鄂霍茨克线" }
    ],
    note: "Plan B: 旭山动物园 + 白须瀑布 + 美瑛清池 + 四季之塔"
  },
  {
    date: "2.16",
    title: "小樽 (Plan A)",
    spots: [{ name: "船见坂" }, { name: "天狗山" }, { name: "小樽水族馆" }, { name: "祝津展望台" }, { name: "小樽运河" }],
    itinerary: [
      { time: "08:06-08:53", activity: "🚆 札幌 - 小樽", note: "站对面蓝色大巴买一天交通票2400日元(所有交通+缆车)" },
      { time: "09:00-09:30", activity: "船见坂", note: "下午拍照逆光，上午去" },
      { time: "09:40-10:00", activity: "🚌 小樽站前4号站台 - 天狗山缆车" },
      { time: "10:00-12:00", activity: "🚠 缆车5min左右上山，游玩2h", note: "关注天狗山缆车开放情况" },
      { time: "12:06-12:58", activity: "🚌 天狗山缆车站 - 小樽水族馆" },
      { time: "13:30-13:40", activity: "🐧 小樽水族馆企鹅漫步", note: "提前半小时排队" },
      { time: "14:00-15:00", activity: "祝津展望台" },
      { time: "15:30-17:00", activity: "三角市场, 小樽运河雪灯之路, 小樽商业街, 八音盒博物馆, 南小樽站", note: "可以市内滴滴打车" },
      { time: "17:33-18:08", activity: "🚆 南小樽 - 札幌" }
    ],
    note: "Plan B: 朝里 + 船见坂 + 天狗山 + 小樽水族馆 + 祝津展望台 + 小樽运河"
  },
  {
    date: "2.17",
    title: "札幌 - 函馆",
    itinerary: [
      { 
        time: "6:53-10:38", 
        activity: "🚆 札幌站 - 函馆站", 
        note: "特急北斗，步行6min到北海道函馆站前柔捷阁酒店放行李",
        mapLink: getMapUrl("函馆站前柔捷阁酒店")
      },
      { 
        time: "10:40-15:00", 
        activity: "🐟 函馆朝市(吃中饭), 金森红砖仓库, 幸运小丑汉堡, 元町公园, 旧函馆区公会堂, 八幡坂, 函馆正教会", 
        note: "全程总步行46min，山上很冷得带帽子口罩手套" 
      },
      { time: "15:00-18:00", activity: "🌃 函馆山", note: "缆车往返1800日元/人，关注日落时间" }
    ]
  },
  {
    date: "2.18",
    title: "函馆 - 洞爷湖 - 札幌",
    itinerary: [
      { time: "06:30", activity: "酒店吃早饭" },
      { 
        time: "07:30-09:34", 
        activity: "🚆 函馆 - 洞爷站", 
        note: "车次: Hokuto 3, 7号车 4C/D席", 
        mapLink: getMapUrl("洞爷站")
      },
      { time: "09:55-10:13", activity: "🚌 洞爷站 - 洞爷湖温泉" },
      { time: "2h", activity: "🌋 羊蹄山, 泡脚" },
      { time: "12:01-12:23", activity: "🚌 洞爷湖温泉 - 洞爷站前", note: "取行李" },
      { 
        time: "12:39-14:41", 
        activity: "🚆 洞爷站 - 札幌站", 
        note: "车次: Hokuto 9, 5号车 4D席",
        mapLink: getMapUrl("札幌站") 
      },
      { time: "15:00-17:00", activity: "⛩️ 北海道神宫, 啤酒博物馆" },
      { time: "晚间", activity: "🛍️ 购物" }
    ]
  },
  {
    date: "2.19",
    title: "札幌 - 上海",
    itinerary: [
      { time: "08:00-11:00", activity: "🎓 北海道大学" },
      { time: "11:19-11:57", activity: "🚆 札幌 - 新千岁机场", note: "关注JR线运营情况" },
      { time: "13:50-21:00", activity: "✈️ 新千岁 - 浦东机场" }
    ],
    todo: ["退退改无忧"]
  }
];
