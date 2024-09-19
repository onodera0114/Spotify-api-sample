import { ListItems } from "@/components/ui/lists/DefinitionList";

export const trackKeyList: ListItems[] = [
  {
    key: "name",
    teamText: "曲名",
    descriptionText: "",
  },
  {
    key: "id",
    teamText: "id",
    descriptionText: "",
  },
  {
    key: "release_date",
    teamText: "リリース日",
    descriptionText: "",
  },
  {
    key: "album_name",
    teamText: "アルバム名",
    descriptionText: "",
    noteText: "リンクをクリックでシングル・アルバムの詳細ページに遷移します。",
  },
  {
    key: "album_type",
    teamText: "種類",
    descriptionText: "",
    noteText: "album、single、compilationのどれかの値をとります",
  },
  {
    key: "artists",
    teamText: "アーティスト",
    descriptionText: "",
  },
  {
    key: "duration_ms",
    teamText: "再生時間",
    descriptionText: "",
  },
  {
    key: "popularity",
    teamText: "人気度",
    descriptionText: "",
    noteTitle: "人気度とは？",
    noteText:
      "0~100の数値で表され、100に近いほど人気が高いことを示します。\n人気度はアルゴリズムによって計算され、ほとんどの場合、そのトラックの総再生回数と、それらの再生がどのくらい新しいかに基づいています。\n一般的には、過去にたくさん再生された曲よりも、現在たくさん再生されている曲の方が人気が高くなります。重複トラック（シングルとアルバムの同じトラックなど）は独立して評価されます。アーティストとアルバムの人気度は、トラックの人気度から数学的に導き出されます。\n注：人気の値は実際の人気より数日遅れることがあります：値はリアルタイムで更新されません。",
  },
  {
    key: "available_markets",
    teamText: "利用可能な地域",
    descriptionText: "",
  },
  {
    key: "disc_number",
    teamText: "ディスクナンバー",
    descriptionText: "",
  },
  {
    key: "track_number",
    teamText: "トラックナンバー",
    descriptionText: "",
  },
  {
    key: "isrc",
    teamText: "ISRC",
    descriptionText: "",
    noteTitle: "ISRCとは？",
    noteText:
      "「International Standard Recording Code」の略称で、日本語では「国際標準レコーディングコード」といいます。\nレコーディング（オーディオレコーディング／音楽ビデオレコーディング）の識別に利用される唯一の国際標準コードで、1つのレコーディングは1つのISRCで識別されます。\n一度付番したISRCを変更することはできません。",
  },
  {
    key: "ean",
    teamText: "EAN",
    descriptionText: "",
    noteTitle: "EANとは？",
    noteText: "「European article number」の略称で、「イアンコード」と読みます。\nヨーロッパで統一されている13桁で構成される商品コードのことです。",
  },
  {
    key: "upc",
    teamText: "UPC",
    descriptionText: "",
    noteTitle: "UPCとは？",
    noteText: "「Universal Product Code」の略称で、カナダ、アメリカで統一されている商品コードのことです。",
  },
];
