(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{14:function(e,t,r){},8:function(e,t,r){e.exports=r(9)},9:function(e,t,r){"use strict";r.r(t);var a=r(7),n=r(1),s=r(2),u=r(4),c=r(3),i=r(0),o=r.n(i),l=r(6),m=r.n(l);r(14);function d(e){return o.a.createElement("button",{className:"square",onClick:e.onClick,id:e.id},e.value)}var h=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},id:e})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),r}(o.a.Component),b=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},a}return Object(s.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],n=v(a.squares),s=r.map((function(e,r){var a=r?"Go to move #"+r:"Go to game start";return o.a.createElement("li",{key:r},o.a.createElement("button",{className:"moves",onClick:function(){return t.jumpTo(r)}},a))}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(h,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",{className:"status"},e),o.a.createElement("ol",null,s)))}}]),r}(o.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(a.a)(t[r],3),s=n[0],u=n[1],c=n[2];if(e[s]&&e[s]===e[u]&&e[s]===e[c])return document.getElementById(s).style.backgroundColor="#b0d400",document.getElementById(u).style.backgroundColor="#b0d400",document.getElementById(c).style.backgroundColor="#b0d400",e[s]}return null}m.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.4bd80647.chunk.js.map