import BlackReaper from "../assets/images/black-reaper.webp";
import EnjiKoma from "../assets/images/enji-koma.webp";
import EtoYoshimura from "../assets/images/eto-yoshimura.webp";
import Furuta from "../assets/images/furuta.webp";
import GinshiShirazu from "../assets/images/ginshi-shirazu.webp";
import HaiseSasaki from "../assets/images/haise-sasaki.webp";
import HideyoshiNagachika from "../assets/images/hideyoshi-nagachika.webp";
import HinamiFueguchi from "../assets/images/hinami-fueguchi.webp";
import JuuzouSuzuya from "../assets/images/juuzou-suzuya.webp";
import Kaneki240 from "../assets/images/kaneki-240.webp";
import KanekiDragon from "../assets/images/kaneki-dragon.webp";
import KanekiKakuja from "../assets/images/kaneki-kakuja.webp";
import KanekiKenPostAccidente from "../assets/images/kaneki-ken-post-accidente.webp";
import KanekiKen from "../assets/images/kaneki-ken.webp";
import KanekiPostDragon from "../assets/images/kaneki-post-dragon.webp";
import KayaIrimi from "../assets/images/kaya-irimi.webp";
import KishouArima from "../assets/images/kishou-arima.webp";
import KukiUrie from "../assets/images/kuki-urie.webp";
import KuzenYoshimura from "../assets/images/kuzen-yoshimura.webp";
import NishikiNishio from "../assets/images/nishiki-nishio.webp";
import RenjiYomo from "../assets/images/renji-yomo.webp";
import ReyUnOjo from "../assets/images/rey-un-ojo.webp";
import Rize from "../assets/images/rize.webp";
import RomaHoito from "../assets/images/roma-hoito.webp";
import SaikoYonebayashi from "../assets/images/saiko-yonebayashi.webp";
import SeidouTakizawa from "../assets/images/seidou-takizawa.webp";
import Shikorae from "../assets/images/shikorae.webp";
import Shironeki from "../assets/images/shironeki.webp";
import ShuuTsukiyama from "../assets/images/shuu-tsukiyama.webp";
import TooruMutsuki from "../assets/images/tooru-mutsuki.webp";
import Touka from "../assets/images/touka.webp";
import Uta from "../assets/images/uta.webp";
import YakumoOomori from "../assets/images/yakumo-oomori.webp";
import { AppConfigType } from "../types/types";

export const AppConfig: AppConfigType = {
  images: [
    BlackReaper,
    EnjiKoma,
    EtoYoshimura,
    Furuta,
    GinshiShirazu,
    HaiseSasaki,
    HideyoshiNagachika,
    HinamiFueguchi,
    JuuzouSuzuya,
    Kaneki240,
    KanekiDragon,
    KanekiKakuja,
    KanekiKenPostAccidente,
    KanekiKen,
    KanekiPostDragon,
    KayaIrimi,
    KishouArima,
    KukiUrie,
    KuzenYoshimura,
    NishikiNishio,
    RenjiYomo,
    ReyUnOjo,
    Rize,
    RomaHoito,
    SaikoYonebayashi,
    SeidouTakizawa,
    Shikorae,
    Shironeki,
    ShuuTsukiyama,
    TooruMutsuki,
    Touka,
    Uta,
    YakumoOomori,
  ],
  levels: [
    {
      columns: 4,
      rows: 3,
      //duration: 5 * 1000 * 60,
      duration: 6 * 1000,
    },
    {
      columns: 4,
      rows: 4,
      duration: 8 * 1000 * 60,
    },
    {
      columns: 5,
      rows: 4,
      duration: 10 * 1000 * 60,
    },
    {
      columns: 6,
      rows: 5,
      duration: 15 * 1000 * 60,
    },
    {
      columns: 6,
      rows: 6,
      duration: 18 * 1000 * 60,
    },
    {
      columns: 7,
      rows: 6,
      duration: 20 * 1000 * 60,
    },
  ],
  flipDelay: 500,
  resetFlipDelay: 250,
  timerInterval: 20,
};
