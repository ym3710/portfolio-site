// 甲子園 春夏内訳データ
// 出典・取得時点はREADME.mdの「甲子園パワーランキングのデータ出典」を参照
// 合計(出場・優勝・勝利)はここには持たず、koshien-ranking.html側で春+夏から毎回計算する
const KOSHIEN_SCHOOLS = [
  {
    name: "大阪桐蔭",
    pref: "大阪府",
    spring: { appearances: 16, championships: 5, wins: 41 },
    summer: { appearances: 13, championships: 5, wins: 42 },
  },
  {
    name: "智辯和歌山",
    pref: "和歌山県",
    spring: { appearances: 16, championships: 1, wins: 31 },
    summer: { appearances: 29, championships: 3, wins: 47 },
  },
  {
    name: "横浜",
    pref: "神奈川県",
    spring: { appearances: 18, championships: 4, wins: 28 },
    summer: { appearances: 22, championships: 2, wins: 44 },
  },
  {
    name: "東海大相模",
    pref: "神奈川県",
    spring: { appearances: 12, championships: 3, wins: 28 },
    summer: { appearances: 12, championships: 2, wins: 21 },
  },
  {
    name: "慶應義塾",
    pref: "神奈川県",
    spring: { appearances: 11, championships: 0, wins: 5 },
    summer: { appearances: 19, championships: 2, wins: 20 },
  },
  {
    name: "中京大中京",
    pref: "愛知県",
    spring: { appearances: 33, championships: 4, wins: 61 },
    summer: { appearances: 29, championships: 7, wins: 79 },
  },
  {
    name: "東邦",
    pref: "愛知県",
    spring: { appearances: 31, championships: 5, wins: 58 },
    summer: { appearances: 17, championships: 0, wins: 19 },
  },
  {
    name: "龍谷大平安",
    pref: "京都府",
    spring: { appearances: 42, championships: 1, wins: 43 },
    summer: { appearances: 34, championships: 3, wins: 61 },
  },
  {
    name: "仙台育英",
    pref: "宮城県",
    spring: { appearances: 15, championships: 0, wins: 16 },
    summer: { appearances: 32, championships: 1, wins: 51 },
  },
  {
    name: "履正社",
    pref: "大阪府",
    spring: { appearances: 10, championships: 0, wins: 13 },
    summer: { appearances: 6, championships: 1, wins: 12 },
  },
  {
    name: "広陵",
    pref: "広島県",
    spring: { appearances: 27, championships: 3, wins: 43 },
    summer: { appearances: 26, championships: 0, wins: 37 },
  },
  {
    name: "明徳義塾",
    pref: "高知県",
    spring: { appearances: 21, championships: 0, wins: 25 },
    summer: { appearances: 24, championships: 1, wins: 38 },
  },
  {
    name: "帝京",
    pref: "東京都",
    spring: { appearances: 15, championships: 1, wins: 22 },
    summer: { appearances: 12, championships: 2, wins: 30 },
  },
  {
    name: "日大三",
    pref: "東京都",
    spring: { appearances: 20, championships: 1, wins: 27 },
    summer: { appearances: 20, championships: 2, wins: 33 },
  },
];
