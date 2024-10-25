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

export const audioFeaturesKeyList: ListItems[] = [
  {
    key: "danceability",
    teamText: "danceability",
    descriptionText: "",
    noteTitle: "danceabilityとは？",
    noteText:
      "テンポ、リズムの安定性、ビートの強さ、全体的な規則性などの音楽要素の組み合わせに基づいて、トラックがダンスにどれだけ適しているかを表します。\n0.0～1.0の値で表され、1.0に近いほどダンス適性が高いことを示します。",
  },
  {
    key: "energy",
    teamText: "energy",
    descriptionText: "",
    noteTitle: "energyとは？",
    noteText:
      "音楽の強度や活発さを感じる度合いを表します。\n0.0～1.0の値で表され、1.0に近いほどエネルギッシュであることを示します。\n一般的にエネルギッシュな曲は速く、音が大きく、騒がしい印象を与えます。\nこの属性に影響を与える知覚的な要素として、ダイナミックレンジ、音の大きさの認識、音色、音の立ち上がりの速さ、全体的なエントロピー（音の不規則さ）が挙げられます。",
  },
  {
    key: "key",
    teamText: "key",
    descriptionText: "",
    noteTitle: "keyとは？",
    noteText:
      "楽曲の調（キー）を表します。\n整数は標準的なピッチクラス表記に基づいて音高に対応し、0 = C、1 = C♯/D♭、2 = D、というように割り当てられます。キーが検出されなかった場合、値は-1となります。値は-1～11の値で表します。",
  },
  {
    key: "loudness",
    teamText: "loudness",
    descriptionText: "",
    noteTitle: "loudnessとは？",
    noteText:
      "曲の全体的な音の大きさをデシベルで表したものです。\nトラック全体を平均して算出され、楽曲間の相対的な音量を比較するのに役立ち、音の物理的な強さ（振幅）と密接に関連する心理的な特性です。\n通常、値は-60dB～0dBの範囲で表されます。",
  },
  {
    key: "mode",
    teamText: "mode",
    descriptionText: "",
    noteTitle: "modeとは？",
    noteText: "楽曲の旋律が基づく音階の種類（長調または短調）を示します。長調は1で、短調は0で表されます。",
  },
  {
    key: "speechiness",
    teamText: "speechiness",
    descriptionText: "",
    noteTitle: "speechinessとは？",
    noteText:
      "楽曲内で話し言葉が含まれているかを検出する指標です。0.0～1.0の値で表されます。\n0.66以上：完全に話し言葉のみで構成されたトラック\n0.33～0.66：音楽と話し言葉がセクションごとに、または重ねられて含まれているトラック（例：ラップ音楽）\n0.33未満：ほぼ音楽や非言語的なトラック",
  },
  {
    key: "acousticness",
    teamText: "acousticness",
    descriptionText: "",
    noteTitle: "acousticnessとは？",
    noteText:
      "楽曲がアコースティックであるかどうかの信頼度を0.0～1.0までで示します。\n1.0は、その楽曲がアコースティックであるという高い信頼度を表します。",
  },
  {
    key: "instrumentalness",
    teamText: "instrumentalness",
    descriptionText: "",
    noteTitle: "instrumentalnessとは？",
    noteText:
      "ボーカルが含まれていないかを予測する指標です。\n0.0～1.0の値で表され、1.0に近いほど、その楽曲にボーカルが含まれていない可能性が高くなります。0.5以上の値はインストゥルメンタル曲を示すことを意図していますが、1.0に近いほど信頼度が高くなります。",
  },
  {
    key: "liveness",
    teamText: "liveness",
    descriptionText: "",
    noteTitle: "livenessとは？",
    noteText:
      "録音に観客の存在があるかを検出する指標です。\n0.0～1.0の値で表され、値が高いほど、その楽曲がライブで演奏された可能性が高くなります。0.8を超える値は、そのトラックがライブ録音である強い可能性を示します。",
  },
  {
    key: "valence",
    teamText: "valence",
    descriptionText: "",
    noteTitle: "valenceとは？",
    noteText:
      "楽曲が伝える音楽的なポジティブさを表す指標です。\n0.0～1.0で表され、高いトラックは、よりポジティブな印象（例：幸せ、明るい、陶酔感）を与え、値が低いトラックは、よりネガティブな印象（例：悲しい、落ち込んだ、怒り）を与えます。",
  },
  {
    key: "tempo",
    teamText: "tempo",
    descriptionText: "",
    noteTitle: "tempoとは？",
    noteText:
      "楽曲の全体的なテンポを、1分あたりの拍数（BPM）で推定したものです。\n音楽用語でいうテンポは、楽曲の速度や進行の速さを指し、これは平均的なビートの持続時間から直接導き出されます。",
  },
  {
    key: "time_signature",
    teamText: "time_signature",
    descriptionText: "",
    noteTitle: "time_signatureとは？",
    noteText:
      "推定された拍子記号です。\n拍子記号（メーター）は、各小節にいくつの拍が含まれているかを指定する表記の規則です。拍子記号は3から7までの範囲で表されます。",
  },
];

export const artistKeyList: ListItems[] = [
  {
    key: "name",
    teamText: "アーティスト名",
    descriptionText: "",
  },
  {
    key: "id",
    teamText: "id",
    descriptionText: "",
  },
  {
    key: "genres",
    teamText: "ジャンル",
    descriptionText: "",
  },
  {
    key: "followers",
    teamText: "フォロワー数",
    descriptionText: "",
  },
  {
    key: "popularity",
    teamText: "人気度",
    descriptionText: "",
    noteTitle: "人気度とは？",
    noteText:
      "0~100の数値で表され、100に近いほど人気が高いことを示します。\nアーティストの人気度は、アーティストのすべてのトラックの人気から計算されます。",
  },
];
