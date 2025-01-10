export interface GalleryImage {
  url: string;
  alt: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  images: GalleryImage[];
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: 'minimalista',
    name: 'Minimalista',
    description: 'Diseños simples y elegantes que capturan la esencia con líneas limpias',
    images: [
      {
        url: 'https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/445192126_447434357916948_6052777382014345198_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9Mqo9Ab84wQQ7kNvgGbyTF4&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=ARTaP50dqM1BO0seSa1W1j4&oh=00_AYBLWiD4Mr34QjGRIwazhmEn1dOtw1hybXM-9GNaVImqYA&oe=677F12AF',
        alt: 'Tatuaje minimalista 1'
      },
      {
        url: 'https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/450850067_467496199244097_278187889196573698_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=btiNqyjJbJIQ7kNvgHlQI5o&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AQlihzD69FdEAVDrg9wISRL&oh=00_AYDVfqqKcg3XWPkOuOan2CVj-teHgOxRbyY9JRa9QpplJA&oe=677F0AD7',
        alt: 'Tatuaje minimalista 2'
      },
      {
        url: 'https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/465557672_543632751630441_6674195034640545580_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oAThIAtnuqQQ7kNvgEmOmtV&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=AOOjHLmNoZPSh_SmuRjwogA&oh=00_AYDEL61DEulzVZxjR-x95m_EOiYOFzRee67HlETUS-ww1Q&oe=677F15EF',
        alt: 'Tatuaje minimalista 3'
      },
      {
        url: 'https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/469593499_563993662927683_4468755591448482681_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0cB_-GoO2jUQ7kNvgFi-Mk5&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=A2Zu-KcvtpuGqhnyHFDNuzZ&oh=00_AYDyJqxAH904FYmHsuHDt7POWTGrxXOXDdyKFt2vssTdIg&oe=677F2A59',
        alt: 'Tatuaje minimalista 4'
      },
      {
        url: 'https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/465674852_550447407615642_8866540091104717614_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DL4nQFAhQLsQ7kNvgEDKd1j&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=ABDUSDN1SAfg9AV09yk3hJQ&oh=00_AYB50Rp7th4EPtrKiDP_L3yzfr0lVFfTS2oep4UwzS4vng&oe=677F26C7',
        alt: 'Tatuaje minimalista 5'
      }
    ]
  },
  {
    id: 'lettering',
    name: 'Lettering',
    description: 'Caligrafía moderna y tipografías únicas',
    images: [
      {
        url: 'https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/441899082_447434374583613_1864187516867240575_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zQB68SHqgEUQ7kNvgEQAKFT&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=ARx0sZix8eKvZbhL0KHrbMy&oh=00_AYBtpXcnlxjCEp_Me90eAJiBSKQd7bSUxSfz528Yh10slg&oe=676BA802',
        alt: 'Tatuaje lettering 1'
      },
      {
        url: 'https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/455776388_490089190318131_3097367866031445530_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xrvdYJ2tgTwQ7kNvgG7iay0&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AKDh8J7tHkwDK-VwOEinmH3&oh=00_AYBkGBvwNRJiz2F_mjPsyy6BaFPAJJgyYStacqUiV9vXkg&oe=676BB759',
        alt: 'Tatuaje lettering 2'
      },
      {
        url: 'https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/454703622_485150714145312_2580367356136066414_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=g_FAr1UaxfgQ7kNvgHkcTx5&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=Aot2auLCKOJKF9DJd_o1Uax&oh=00_AYDFRpDk4SOYfzsrfamp97yEyHgun7QRIinmtd3XkldE2A&oe=676BA6DB',
        alt: 'Tatuaje lettering 3'
      },
      {
        url: 'https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/468306261_17888932605109838_9099550688400429772_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eMprPGExbEcQ7kNvgFpZBLK&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AfzhvtZLiL1oGpdgFmSiRK1&oh=00_AYBg84RYwcl3fWpVZDqUynD8gbAAIfJ_rvODEcRkzYjAQw&oe=676B9B1A',
        alt: 'Tatuaje lettering 4'
      }
    ]
  },
  {
    id: 'semirealista',
    name: 'Semirealista',
    description: 'Tatuajes que combinan detalles realistas con toques estilizados y creativos, logrando un diseño único y expresivo.',
    images: [
      {
        url: 'https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/466380221_550447460948970_2405651272728520201_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=puCe4eLokH4Q7kNvgE-2LOw&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=AKXVuNgu5NutKxWF380qKBw&oh=00_AYDXk1LFlPTJksabF926lRiEWYxyN2bo-dncx7mE5dCnag&oe=676BBA2A',
        alt: 'Tatuaje semirealista 1'
      },
      {
        url: 'https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/468820467_559986449995071_5519235713040548272_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Pd4cmqC_tUEQ7kNvgFV2nfZ&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=AHXx7qD2jCILJCm_JABZuTK&oh=00_AYCJvxKadmitZ3wZs7cmVARWU5xutshSoJcik1v-MQQ_jw&oe=676BA065',
        alt: 'Tatuaje semirealista 2'
      },
      {
        url: 'https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/468843707_561736296486753_2407022770362966760_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5S86JDDYBGsQ7kNvgEa0kYr&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=A4SK_Sd_T9aeOqEzLJccdGG&oh=00_AYCpxdpqnf5zeUvGt2PzZ99BWIdd09HPl6IPqKRwiDeJXA&oe=676B94E4',
        alt: 'Tatuaje semirealista 3'
      },
      {
        url: 'https://scontent.fclo1-4.fna.fbcdn.net/v/t51.75761-15/469223455_17890075920109838_4250237190015493563_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=q1yu1nYB2kMQ7kNvgH9EG8N&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AuEv6n85RuX6aeDP-htMHVQ&oh=00_AYA7bBTVgtHELSjmZ9Ob_36332yMyJogkDVNn_1s3Lpnvg&oe=676BABB2',
        alt: 'Tatuaje semirealista 4'
      }
      ,
      {
        url: 'https://scontent.fclo1-3.fna.fbcdn.net/v/t51.75761-15/469583349_17890452969109838_8028071463289657746_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PeLAJTwuxqYQ7kNvgH4aF6C&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=AAlYXU0MgUO-M0QskhSfnbs&oh=00_AYDHYZDKKDLD1_ZgU7s6R038VP9VgBmmmVryjQ2kHZd9oQ&oe=676BB182',
        alt: 'Tatuaje semirealista 5'
      }
    ]
  },
  {
    id: 'Black_and_Gray',
    name: 'Black and Gray',
    description: 'Diseños elegantes en escala de grises, ideales para retratos, paisajes y arte detallado con un estilo atemporal.',
    images: [
      {
        url: 'https://scontent.fclo1-4.fna.fbcdn.net/v/t51.75761-15/470815162_17891747136109838_6447471883957738935_n.jpg?stp=dst-jpegr_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7wAI2JhGbWAQ7kNvgEV7zEs&_nc_zt=23&se=-1&_nc_ht=scontent.fclo1-4.fna&_nc_gid=ASpEP6YIaQSsEwYPQAcDKQQ&oh=00_AYAtXD_l5UjOd8HTuS42DaPGSGGMUELC0-eF0Csur7UL-w&oe=676B9129',
        alt: 'Tatuaje fine line 1'
      },
      {
        url: 'https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/469389361_563993709594345_5670772695449415993_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-4njmQCwUVgQ7kNvgHmOf-2&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AUU0hSbZe_JogJ-JwuZ01Zh&oh=00_AYB2RVHuJU4QVYVqh03Wqt-KNpdDMAePD5j-tFMFb3ZmVA&oe=676BA3E1',
        alt: 'Tatuaje fine line 2'
      },
      {
        url: 'https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/468803991_559986506661732_8565042888651937873_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5uNAfHp9drwQ7kNvgHLvLi-&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=A77pBaZj7jRUlC46yEjNSg1&oh=00_AYB0kjx2tFYL4v7w6KbLch8DFSQusy-OaxZfCGVCujaClw&oe=676BB347',
        alt: 'Tatuaje fine line 3'
      },
      {
        url: 'https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/465560466_547970831196633_8399874421817501935_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IfgMVV7WmQ4Q7kNvgGyMYFy&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=Al7SzMnoU07BREbfUBHaRNm&oh=00_AYD3JXSBcvfG5c_9bicPdHeO6mNUXsU4MJYiOTxiC1hm_Q&oe=676BA195',
        alt: 'Tatuaje fine line 4'
      }
    ]
  }
];