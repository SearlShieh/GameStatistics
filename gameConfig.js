window.GAME_CONFIG = {
  goodsData: [
    {name: '金樽', value: 'jinzun'},
    {name: '青铜当卢', value: 'danglu'},
    {name: '壁画碎片', value: 'suipian'},
    {name: '金鳞', value: 'jinlin'},
    {name: '虎符', value: 'hufu'},
    {name: '幽灵小熊猫/土拨鼠', value: 'youling'},
    {name: '雪莲', value: 'xuelian'},
    {name: '鬼玺', value: 'guixi'},
    {name: '白玉杯', value: 'baiyubei'},
    {name: '九色神像鹿', value: 'shenlu'},
    {name: '天下第一剑', value: 'dajian'},
    {name: '祈愿圣杯', value: 'shengbei'}
  ],
  rewordData: [
    {
      name: '六六大顺', tip:'累计带出6朵雪莲和6个鬼玺', value: 6, condition: (game)=>{
        return  game.xuelian>=6 && game.guixi>=6
      }, show: (game)=>{
        return `鬼玺：<span>${game.guixi}</span>，雪莲：<span>${game.xuelian}</span>`
      }
    },
    {
      name: '金樽当卢大法', tip:'累计带出10个金樽/当卢', value: 2, condition: (game)=>{
        return game.jinzun + game.danglu >= 10
      }, show: (game)=>{
        return `金樽：<span>${game.jinzun}</span>，青铜当卢：<span>${game.danglu}</span>`
      }
    },
    {
      name: '金鱼虎符万岁', tip:'累计带出10个金鱼/虎符', value: 2, condition: (game)=>{
        return game.jinyu + game.hufu >= 10
      }, show: (game)=>{
        return `金鳞<span>${game.jinlin}</span>，虎符：<span>${game.hufu}</span>`
      }
    },
    {
      name: '拼凑碎片', tip:'累计带出6个壁画碎片', value: 2, condition: (game)=>{
        return game.suipian >= 6
      }, show: (game)=>{
        return `壁画碎片：<span>${game.suipian}</span>`
      }
    },
    {
      name: '幽灵在哪里', tip:'累计带出6个幽灵小熊猫/土拨鼠', value: 2, condition: (game)=>{
        return game.youling >= 6
      }, show: (game)=>{
        return `幽灵小熊猫/土拨鼠：<span>${game.youling}</span>`
      }
    },
    {
      name: '白玉杯来', tip:'每带出一个白玉杯', count :1, value: 'baiyubei', show: (game)=>{
        return `白玉杯：<span>${game.baiyubei}</span>`
      }
    },
    {
      name: '神鹿降临', tip:'每带出一只九色鹿', count :1, value: 'shenlu', show: (game)=>{
        return `九色神像鹿：<span>${game.shenlu}</span>`
      }
    },
    {
      name: '大剑爽吃', tip:'每带出一把天下第一剑', count: 2, value: 'dajian', show: (game)=>{
        return `天下第一剑：<span>${game.dajian}</span>`
      }
    },
    {
      name: '圣杯祈福', tip:'每带出一个祈愿圣杯', count: 5, value: 'shengbei', show: (game)=>{
        return `祈愿圣杯：<span>${game.shengbei}</span>`
      }
    },
    {
      name: '点石成金', tip:'每遇到一个宝藏房', count :1, value: 'bz', show: (game)=>{
        return `宝藏房：<span>${game.bz}</span>`
      }
    },
    {
      name: '百万撤离', tip:'每百万撤离一把', count :1, value: 'bwMoney', show: (game)=>{
        return `百万撤离：<span>${game.bwMoney}</span>`
      }
    },
    {
      name: '垃圾走开', tip:'每25万以下撤离一把', count :1, value: 'ljMoney', show: (game)=>{
        return `25万以下撤离：<span>${game.ljMoney}</span>`
      }
    },
    {
      name: '五福临门', tip:'累计五把五十万撤离（50w-70w）', value :5, condition: (game)=>{
        return game.wsMoney >= 5
      }, show: (game)=>{
        return `50万撤离：<span>${game.wsMoney}</span>`
      }
    },
  ]
}