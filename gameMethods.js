window.Game = {
  computed: {
    // 当前游戏数据
        currentGame() {
          return this.gameData[this.gameIndex];
        },
        // 已完成局数
        completedGames() {
          return this.gameData.filter(game => game.saved).length;
        },
        // 总黄金钥匙
        totalGoldenKey() {
          return this.gameData.reduce((total, game) => total + Number(game.goldenKey || 0), 0);
        },
        // 总钻石
        totalDiamond() {
          return this.gameData.reduce((total, game) => total + Number(game.diamond || 0), 0);
        },
        // 总稀有装备
        totalRareEquipment() {
          return this.gameData.reduce((total, game) => total + Number(game.rareEquipment || 0), 0);
        },
        // 总带出金额
        totalMoney() {
          return this.gameData.reduce((total, game) => total + Number(game.money || 0), 0);
        }
  },
  methods:  {
        // 上一局
        prevGame() {
          if (this.gameIndex > 0) {
            this.gameIndex--;
          }
        },
        // 下一局
        nextGame() {
          if (this.gameIndex < this.defaultSize-1) {
            this.gameIndex++;
          }
        },
        // 显示彩蛋动画
        getReword(egg) {
          this.toastElement && this.toastElement.remove();
          let allCount = 0
          let fitData= []
          this.gameData = this.getGameData()
          this.showData=true
          this.rewordData.forEach(item=>{
            if(item.condition){
              if(item.condition(this.gameData)){
                allCount+=item.value
                fitData.push({
                  ...item,
                  rewordCount: item.value
                })
              }
            }else{
              if(this.gameData[item.value]>0){
                allCount+=this.gameData[item.value]*item.count
                fitData.push({
                  ...item,
                  rewordCount: this.gameData[item.value]*item.count
                })
              }
            }
          })
          console.log(this.rewordData, allCount)

          const eggContainer = this.$refs.eggContainer;       
          // 创建彩蛋提示
          const toastElement = document.createElement('div');
          toastElement.className = 'egg-toast';
          toastElement.innerHTML = `<strong>🎉 恭喜板板 🎉</strong><br>奖励局数：${allCount}把`;
          eggContainer.appendChild(toastElement);
          
          this.toastElement=toastElement
          setTimeout(()=>{
            this.showReword=true
          }, 1000)
        },

        getGameData(){
          let params = {
            bz: 0,
            bwMoney: 0,
            ljMoney: 0,
            wsMoney: 0
          }
          this.goodsData.forEach(item=>{
            params[item.value] = 0
            this.allGameData.forEach(data=>{
              params[item.value] += Number(data[item.value] || 0)
            })
          })
          this.allGameData.forEach(data=>{
              if(data.hasBz){
                params.bz++
              }
              if(data.money>=100){
                params.bwMoney++
              }
              if(data.money<=25 && data.money>0){
                params.ljMoney++
              }
              if(data.money>=50&&data.money<=70){
                params.wsMoney++
              }
            })
          return params
        },

        viewData(){
          this.gameData = this.getGameData()
          this.showData=true
        },
        resetData(){
          this.allGameData=[]
          for(let i=0;i<8;i++){
            const params= {
              hasBz: false,
              money: 0
            }
            this.goodsData.forEach(item=>{
              params[item.value] = 0
            })
            this.allGameData.push({...params})
          }
        },
        close(){
          this.showReword=false
          this.toastElement.remove();
        }
  }
}
