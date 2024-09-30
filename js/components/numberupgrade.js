Vue.component("numberupgrade", {
	props: ["numberupgrade"],
	methods: 
	{
		formatNumber: function(n, prec, prec1000, lim)
		{
        		return funcs.formatNumber(n, prec, prec1000, lim)
		},
	
	},
	computed:
	{
		canAfford: function()
		{
			return this.numberupgrade.getPrice().lt(game.number)
      		}
	},
	template:
	`
  		<button :disabled="!canAfford" @click="numberupgrade.buy()" style="background-color: #ff0; color: #0f0; width: 300px; height: 240px;">
 		<nu>{{numberupgrade.name}}</nu>
 		<nu>{{numberupgrade.desc}}</nu>
 		<nu>Cost: {{formatNumber(numberupgrade.getPrice(), 2, 0, 3003)}} Number</nu>
 		</button>
 		<nt>Level: {{formatNumber(numberupgrade.level, 2, 0, 3003)}}</nt>
		<nt>Effect: ^{{formatNumber(numberupgrade.getMultiplier(), 2, 0, 3003)}}</nt>
 	`
})
