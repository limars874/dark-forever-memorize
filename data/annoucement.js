/**
 * Created by tdzl2003 on 06/08/2017.
 */

module.exports = {
  version: '2023.1.8',
  description: `玩家交流QQ群：614658451，欢迎加入了解最新永夜资讯。
2023.1.8 更新说明
合并来自@FunnyPiglet的提交：修复点击“更新说明”无反应，以及“更新说明”无法滚动
修复各类吸收属性不生效的问题
修复信仰灌注、法力转化不生效的问题

2023.1.6 更新说明
挂机时没有收益
年兽小腿骨 据说不生效
年兽boss第二阶段据说有bug
在地下城中通过切换地图离开时，会进行提示确认，避免不小心点到。
修复试炼副本弹窗提示显示效果不正确的问题。

2023.1.4 更新说明
补充一些存档时机，减少切换到后台运行时可能导致的回档问题。
刷新导致的短时间回档无法被解决，建议不要任意刷新，或回到角色选择界面再刷新。
修复可能会导致神力、锅的等级消失的bug
修复了可能会没有正常触发挂机时间的bug
修复了附魔无法生效的bug
修复了炼金投入材料的数量无法正常输入的bug

2023.1.2 更新说明
移植web平台。
移除所有与联网相关的功能，包括兑换码、时间校验等。
增加存档下载和导入功能，便于自己保存和迁移存档。
正式开放所有源代码。欢迎创建你自己的mod/游戏。

0.6.6.fix-3 更新说明：
解决了召唤师超过70级部分技能没有伤害的问题。

0.6.6.fix-2 更新说明：
减少了使用神力购买噩梦副本钥石的价格。
解决了部分超过70级的活动角色无法获取经验的问题。

0.6.6.fix-1 更新说明：
解决分解蓝色和黄色装备没有正确的掉落尘和碎片的问题。

0.6.6 更新说明：
减少了使用神力购买副本钥石的价格。
分解高品质装备时，现在也会获得低品质的材料收获。
略微上调了洞窟深处、迷雾森林、矿洞深处的地图等级，从这些地图将可以获得等级比之前较高的装备。
尝试优化一键副本的界面性能。
战士：命令怒吼将也同时增加当前的血量值。
法师：新增技能：龙息术

0.6.5 更新说明：
这次真的调整了最大挂机时间到72小时，我测试过了，绝对没问题。
可以长按拥有多个钥石的副本，来一次性加入大量的副本队列。不过长按的手感似乎不太好？等待大家的反馈。
大幅减少了高等级时分解装备得到的神力。略微增加低等级时分解装备得到的神力。
减少了重铸装备和附魔装备时锁定词缀所消耗的神力。
提高了史莱姆、大史莱姆、母体史莱姆的怪物等级，这使得你在6-15级左右挑战史莱姆可以获得更多的经验。
降低了洞窟中大史莱姆的刷新速度，并且不会刷新带有词缀的大小史莱姆。
周末还有更新：）

0.6.4 更新说明：
神马？又更新啦？
调整了最大挂机时间到72小时
大幅增加了副本boss掉落红包的概率
小幅度增加了野怪掉落红包的概率
副本通关的提示改为会自动消失的提示
钥石叠加上限增加到20
为什么又更新了呢？这是个谜……

0.6.3 更新说明：
春节活动结束。
1: 之前获得的活动红包、钥石均会保留，可以慢慢挑战
2: 红包依然会世界掉落，但掉落几率大幅下降。噩梦本现在有额外的几率获得红包。
3: 解决了年兽副本不掉落300的普通胸甲、腿甲、饰品的问题
4: 解决了年兽的毛衣和毛裤实际不生效的问题。
5: 解决了装备年兽的利齿后暴击几率不正常的问题。
6: 解决了年兽的小腿骨效果不生效的问题。

0.6.2 更新说明：
解决了挂机状态下打开红包，神力和钥石都产生多份的问题。

0.6.1 更新说明：
1. 解决了副本本身有钥石的情况下，依然消耗了钥石物品的问题。

0.6.0 更新说明：
新春福利版本，
福利活动：
1. 可以使用“狗年快乐”福利码兑换神力，“红包拿来“换红包10个，注意留好包裹位置，否则兑换将会失败！
2. 击杀任意怪物都有几率掉落红包。
3. 打开红包有几率获得金币、神力、年兽副本钥石、年兽特别装备。
4. 在年兽副本击败年兽可以获得最高300等级装备（含年兽特别装备）。
红包掉落结束时间：3月2日00:00

版本更新：
1. 现在副本钥石会作为物品出现，放在包裹或储藏箱中就可以进入指定的地图。
   注意：如果你进入了副本而钥石转移到了别的角色或被别的角色消耗，副本将没有任何收益。
2. 解决了从地图界面连续刷本会多进一次副本的bug。
3. 拾取规则中的最低装备等级改为键盘输入。
4. 解决了从庇护所开始的所有副本都没有正确奖励金币的bug。

0.5.9 更新说明：
新地图：
噩梦副本上线中。
机制修改：
1. 击晕：现在BOSS将不再免疫击晕，而是改为抵抗击晕。高等级小怪也会部分抵抗击晕。抵抗击晕将会缩短击晕时间，并且有可能会完全抵抗击晕。
2. 打断：新副本的部分BOSS有些技能并非免疫打断，而是有一定几率抵抗打断。另外所有职业的打断升级将缩减冷却时间，而不再提升持续时间。
3. 暴击：现在超过100%暴击几率的时候，多余的暴击几率将有机会产生多重暴击。
敌人：
1. 高等级的敌人将默认获得一定的击晕抗性，减少被击晕的时间并有几率抵抗低等级的击晕技能。
战士：
1. 震荡波：现在冷却时间将不再随着技能等级提升而延长。减少了击晕持续的时间。
2. 重击·击颅：提升了击晕持续的时间。
3. 致死打击：现在只能对生命低于20%的敌人使用，但是可以造成暴击。
魔法少女：
1. 霜之新星：现在冷却时间将不再随着技能等级提升而延长。减少了击晕持续的时间。
圣骑士：
1. 修复了巫师克星实际吸收比率不足的问题。
2. 修复了牺牲对敌人伤害比技能面板显示的伤害要低的问题。
3. 修复了牺牲在暴击时对自己造成伤害过高的问题。
刺客：
1. 连贯意志改为集中意志技能，使你的终结技暴击几率提升5%
野图：
上调了噩梦边境的装备和钥石掉率。

0.5.8 更新说明：
封禁了一批作弊的账号。如果您的账号被误封，请加QQ群咨询群主。
圣骑士:
1. 牺牲技能等级提升时，将对应减少损失的生命值。
2. 大幅降低了骑士重击、破邪斩的冷却，从5/5秒减少到0.5/0.8秒。
3. 修复了破邪斩实际伤害比显示的低的问题。
4. 增加了新技能和新被动，欢迎体验

0.5.7.2更新说明：
解决了几个可能引发游戏错误的问题

0.5.7.1更新说明：
现在可以设置最低拾取的装备等级了。分类的设置会更优先生效，如果分类设置为拾取的，如果装备等级较低，也会根据品质再选择分解或出售。

0.5.7更新说明：
1. 上调了梦境之森和睡美人湖的小怪经验
2. 恐怖的残骸将不再掉落金币、装备，也无法获得经验
3. 更新地图：噩梦边境
4. 更新副本：噩梦巨人国度

活动：小亚莲娜的魔法（8月28日24:00结束）
1. 可以使用"小亚莲娜的魔法"在帝国金库兑换2345点神力
2. 可以在未满60级的角色上使用"小亚莲娜的成长"在帝国金库兑换直升60级
3. 现在在炼金中投入材料效果翻倍
4. 神力升降药剂1折
5. 双倍经验中
6. 钥石掉率翻倍中，且上限提升至20
7. 附魔免材料&锁定神力消耗一折中

0.5.6更新说明：
1. 单体抗性现在在181装备等级以上的装备不会出现了
2. 增强了法师和召唤师在61-70级的所有技能伤害
3. 急速药剂现在对召唤师的召唤物可以生效了
4. 现在达到60/70级的玩家，在充值/兑换神力的时候可以分别获得50%/100%的额外神力
`,
};
