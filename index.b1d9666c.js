!function(){const t={data:function(){return{stage:1,initial:!0,answers:{inCanada:!0,gender:"",stg3:"",stg5:"",stg6:"",stg9:[],height:"",age:"",currentWeight:"",goalWeight:""},goals:["burn fat","improve metabolism","improve digestion","get more energy","better sleep","lose weight without fitness","lose weight without diet"],load:0,months:["January","February","March","April","May","June","July","August","September","October","November","December"]}},computed:{loadText:function(){return this.load<=15?"Identifying Dietary Profile...":this.load<=30?"Analyzing Root Cause Factors...":this.load<=45?"Capsules To Help Eliminate Fatigue...":this.load<=60?"Capsules For Metabolism Repair...":this.load<=75?"Capsules That Increase Energy...":this.load<=100?"Preparing personalized report...":void 0},date:function(){const t=(new Date).getTime(),e=new Date(t+2506e6).getDate(),s=new Date(t+2506e6).getMonth(),n=new Date(t+2506e6).getFullYear();return`${e} ${this.months[s]} ${n}`},resultWeight:function(){const t=+this.answers.currentWeight,e=+this.answers.goalWeight;return t-e>29?t-29:e},possibleLoss:function(){const t=+this.answers.currentWeight,e=+this.answers.goalWeight;return t-e>29?7.3:((t-e)/4).toPrecision(2)},dateWeek:function(){let t=[];const e=["SUN","MON","TUE","WED","THU","FRI","SAT"];for(let s=0;s<7;s++){let n=(new Date).getDay()+s;n>6&&(n-=7),t.push({day:e[n],num:(new Date).getDate()+s})}return t},monthYear:function(){const t=(new Date).getMonth(),e=(new Date).getFullYear();return`${this.months[t]}, ${e}`},similar:function(){return 3.3*this.possibleLoss}},methods:{fromCanada:function(t){this.initial=this.answers.inCanada=t,t&&this.stage++},startLoad:function(){this.stage++;const t=setInterval((()=>{this.load++,this.load>=100&&(clearInterval(t),this.stage++)}),100)},handleGoal:function(){+this.answers.goalWeight+5>=this.answers.currentWeight&&(this.answers.goalWeight=this.answers.currentWeight-5)},handleCurrent:function(){+this.answers.goalWeight+5>=this.answers.currentWeight&&(this.answers.currentWeight=this.answers.goalWeight+5)},handleInput:function(t,e,s){+this.answers[t]>s&&(this.answers[t]=s),+this.answers[t]<e&&(this.answers[t]=e)}}};Vue.createApp(t).mount("#app")}();
//# sourceMappingURL=index.b1d9666c.js.map
