import { method } from "lodash";

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
  method:  {
   saveCurrentGame() {
          this.gameData[this.gameIndex].saved = true;
          
          // 检测彩蛋
          this.checkEggs();
          
          // 提示保存成功
          this.$message.success(`第 ${this.gameIndex + 1} 局数据保存成功！`);
        },
        // 上一局
        prevGame() {
          if (this.gameIndex > 0) {
            this.gameIndex--;
          }
        },
        // 下一局
        nextGame() {
          if (this.gameIndex < 5) {
            this.gameIndex++;
          }
        },
        // 检测彩蛋
        checkEggs() {
          const currentGame = this.currentGame;
          const triggeredEggs = this.eggRules.filter(rule => rule.condition(currentGame));
          
          if (triggeredEggs.length > 0) {
            this.totalEggs += triggeredEggs.length;
            // 显示彩蛋动画
            triggeredEggs.forEach(egg => {
              this.showEggAnimation(egg);
            });
          }
        },
        // 显示彩蛋动画
        showEggAnimation(egg) {
          const eggContainer = this.$refs.eggContainer;
          
          // 创建彩蛋元素
          const eggElement = document.createElement('div');
          eggElement.className = 'egg';
          // 随机位置
          eggElement.style.left = `${Math.random() * 80 + 10}%`;
          eggContainer.appendChild(eggElement);
          
          // 创建彩蛋提示
          const toastElement = document.createElement('div');
          toastElement.className = 'egg-toast';
          toastElement.innerHTML = `<strong>🎉 ${egg.name} 🎉</strong><br>${egg.description}`;
          toastElement.style.left = `${Math.random() * 70 + 15}%`;
          eggContainer.appendChild(toastElement);
          
          // 动画结束后移除元素
          setTimeout(() => {
            eggElement.remove();
            toastElement.remove();
          }, 3000);
        }
  }
}
