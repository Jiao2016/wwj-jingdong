$(function(){
//banner轮播
		var bannerbtn=$(".bannerbtn");
		var bannerimg=$(".bannerimg");
		// console.log(bannerimg)
		for (var i = 0; i < bannerbtn.length; i++) {
			bannerbtn[i].index=i;
			bannerbtn[i].onmouseover=function(){
				for (var i = 0; i < bannerimg.length; i++) {
					bannerbtn[i].style.backgroundColor="#3e3e3e";
					bannerimg[i].style.zIndex=1;
				};
				this.style.backgroundColor="#b61b1f";
				bannerimg[this.index].style.zIndex=2;
			}
		};
		var bannernum=0;
		function bannerm(){
			bannernum++;
			if (bannernum==bannerimg.length) {
				bannernum=0;
			};
			if (bannernum==-1) {
				bannernum=bannerbtn.length-1;
			};
			for (var i = 0; i < bannerimg.length; i++) {
				bannerimg[i].style.zIndex=1;
				bannerbtn[i].style.backgroundColor="#3e3e3e";
			};
			bannerimg[bannernum].style.zIndex=2;
			bannerbtn[bannernum].style.backgroundColor="#b61b1f";

		}
		var bannert=setInterval(bannerm,2000);
		var bannerconM=$(".bannerconM")[0];
		var bannerdw=$(".bannerdw")[0];
		var bannerdwr=$(".bannerdwr")[0];
		bannerconM.onmouseover=function(){
			clearInterval(bannert)
			bannerdw.style.display="block";
			bannerdwr.style.display="block";
		}
		bannerconM.onmouseout=function(){
			bannert=setInterval(bannerm,2000)
			bannerdw.style.display="none";
			bannerdwr.style.display="none";
		}
		bannerdw.onclick=function(){
			bannernum-=2;
			bannerm()
		}
		bannerdwr.onclick=function(){
			bannerm()
		}
//bannerfeet无缝轮播
		var bannerfeetcent=$(".bannerfeetcent")[0];
		var bannerfeetbox=$(".bannerfeetbox")[0];
		var first=getFirst(bannerfeetbox);
		// console.log(first)
		function walk(){
			animate(bannerfeetbox,{marginLeft:-250},function(){
				var first=getFirst(bannerfeetbox);
				// console.log(first)
				bannerfeetbox.appendChild(first);
				this.style.marginLeft=0;
				flag=true;
			})
		}
		var yidongt=setInterval(walk,5000)
		bannerfeetcent.onmouseover=function(){
			clearInterval(yidongt)
			bannerfeetprev.style.display="block";
			bannerfeetnext.style.display="block";
		}
		bannerfeetcent.onmouseout=function(){
			yidongt=setInterval(walk,5000)
			bannerfeetprev.style.display="none";
			bannerfeetnext.style.display="none";
		}
		var bannerfeetprev=$(".bannerfeet-prev")[0];
		var bannerfeetnext=$(".bannerfeet-next")[0];
		var flag=true;
		bannerfeetnext.onclick=function(){
			if(flag){
				flag=false;
			walk();
			}
		}
		var flag1=true;
		bannerfeetprev.onclick=function(){
			if(flag1){
				flag1=false;
			animate(bannerfeetbox,{marginLeft:0},function(){
				var last=getLast(bannerfeetbox);
				var first=getFirst(bannerfeetbox);
				bannerfeetbox.insertBefore(last,first);
				this.style.marginLeft="-250px";
				flag1=true;
			})
			}
		}		
//右侧定位
		var flbtn=$(".flbtn");
		var des=$(".description");
		var fenlei=$(".fenlei")
		for (var i = 0; i < fenlei.length; i++) {
			fenlei[i].index=i;
			fenlei[i].onmouseover=function(){
				flbtn[this.index].style.backgroundColor="#CA1623";
				des[this.index].style.backgroundColor="#CA1623";
				animate(des[this.index],{left:-62},400);
			}
			fenlei[i].onmouseout=function(){
				flbtn[this.index].style.backgroundColor="#7A6E6E";
				des[this.index].style.backgroundColor="#7A6E6E";
				animate(des[this.index],{left:0},400);
			}
		};
		var back=$(".back");
		var view=getWindow();
		for (var i = 0; i < back.length; i++) {
			back[i].onclick=function(){
			animate(view,{scrollTop:0})
		}
		};
//左侧定位
		var lca=$(".lca");
		var lca1=$(".lca1");
		var louceng=$(".louceng")[0];
		for (var i = 0; i < lca.length; i++) {
				lca[i].index=i;
				lca[i].onmouseover=function(){
					for (var i = 0; i < lca1.length; i++) {
						lca1[i].style.display="none";
						lca[i].style.display="block";
					};
					this.style.display="none";
					lca1[this.index].style.display="block";
				}
			};
		var chuangkou=getWindow();
		// console.log(chuangkou)
		var floor=$(".floor");
		var loucengli=$(".loucengli");
		for (var i = 0; i < loucengli.length; i++) {
			loucengli[i].index=i;
			loucengli[i].onclick=function(){
				var xt=floor[this.index].offsetTop;
				// console.log(xt)
				animate(chuangkou,{scrollTop:xt});
			}
		}

// 猜你喜欢
var gc=document.querySelector(".getchange");//一个a
var likecontentb=document.querySelectorAll(".like-content-b");//4个div集合
var x=0;
gc.onclick=function(){
	x++;
	if(x==likecontentb.length){
		x=0
	}
	for(var i=0;i<likecontentb.length;i++){
		likecontentb[i].style.display="none";
	}
	likecontentb[x].style.display="block"
}
var mlimg=document.querySelectorAll(".mlimg");
for(var i=0;i<mlimg.length;i++){
	mlimg[i].index=i;
	mlimg[i].onmouseover=function(){
		for(var j=0;j<mlimg.length;j++){
			mlimg[j].style.marginLeft=0;
		}
    mlimg[this.index].style.marginLeft=-10+"px";
	} 
	mlimg[i].onmouseout=function(){
		
    mlimg[this.index].style.marginLeft=0+"px";
	} 
}



//按需加载
	// var imgarr=$("img");
	// var bheight=document.documentElement.clientHeight;
	// for (var i = 0; i < imgarr.length; i++) {
	// 	imgarr[i].datesrc=imgarr[i].src;
	// 	imgarr[i].src="";
	// }
	// for (var i = 0; i < imgarr.length; i++) {
	// 	if (bheight>getPosition(imgarr[i]).y) {
	// 		imgarr[i].src=imgarr[i].datesrc;
	// 	}
	// };
	window.onscroll=function(){
		var st=chuangkou.scrollTop//超出可视窗口的高度
		// for (var i = 0; i < imgarr.length; i++) {
		// 	if(st+bheight>getPosition(imgarr[i]).y){
		// 		imgarr[i].src=imgarr[i].datesrc;	
		// 	}
		// }
		if(st>1205){
			louceng.style.display="block";
		}else{
			louceng.style.display="none";
		}
	}
//选项卡
	function xXk(topitems,bottombox){
		var xitem=$(".xitem",topitems);
		var xiebox=$(".xiebox",bottombox);
		var obj1=xitem[0];
		var obj2=xitem[0];
		for (var i = 0; i < xitem.length; i++) {
			xitem[i].index=i;
			xitem[i].onmouseover=function(){
				obj1.style.borderColor="transparent"
				obj2.style.zIndex="1";
				this.style.borderColor="red red white red";
				xiebox[this.index].style.zIndex="2";
				obj1=this;
				obj2=xiebox[this.index]
			}
		};
	}
	var topitems=$(".topitems")
	var bottombox=$(".bottombox")
	for (var i = 0; i < topitems.length; i++) {
		xXk(topitems[i],bottombox[i]);
	};
//top部分选项卡
$('.header-content-lione').mouseover(function(){
	$(this).css({background:'#fff',borderRight:'1px solid #ddd',borderLeft:'1px solid #ddd'})
	$(".address").show();
	/*$('.x').css({transform:'rotateZ(360deg)'}) */
})
$('.header-content-lione').mouseout(function(){
	$(".address").hide();
	$(this).css({background:'#f1f1f1',borderRight:'1px solid #f1f1f1',borderLeft:'1px solid #f1f1f1'})
})
$('.address li:not(".b-j")').mouseover(function(){
	$(this).css({background:'#F4F4F4',color:'#C81623'})
})
$('.address li:not(".b-j")').mouseout(function(){
	$(this).css({background:'#FFF',color:'#666'})
})
$('.xiala').each(function(i){
	$('.xiala').eq(i).mouseover(function(){
		$(this).css({background:'#fff',borderRight:'1px solid #ddd',borderLeft:'1px solid #ddd'})
		$('.changes').eq(i).css({display:'block'})
		$('.x').eq(i+1).css({transform:'rotateZ(180deg)'})
	})
	$('.xiala').eq(i).mouseout(function(){
		$(this).css({background:'transparent',borderRight:'1px solid transparent',borderLeft:'1px solid transparent'})
		$('.changes').eq(i).css({display:'none'})
		$('.x').eq(i+1).css({transform:'rotateZ(0)'})
	})
})
$('.xiala').last().css({paddingLeft:4})
//bannerleft部分选项卡
	var bannerlbtn=$(".bannerlbtn")
	var blnavbox=$(".blnavbox")
	var btna=$(".btna")
	var obj5=bannerlbtn[0];
	var obj6=blnavbox[0];
	for (var i = 0; i < bannerlbtn.length; i++) {
		bannerlbtn[i].index=i;
		hover(bannerlbtn[i],function(){
			obj5.style.background="#C81623";
			obj6.style.display='none';
			btna[this.index].style.color="red";
			this.style.background="#fff";
			this.style.width="203px;"
			blnavbox[this.index].style.display="block";
			obj5=this;
			obj6=blnavbox[this.index]
		},function(){
			btna[this.index].style.color=""
			this.style.background="";
			this.style.width="201px;"
			blnavbox[this.index].style.display="none"
		})
	};
//无缝轮播
	var boxn=$(".lunbobox")[0]
		var boxinner=$(".innerbox")[0];
		var btnx=$(".btnx");
		var num=1;
		var prev=$(".prev")[0]
		var next=$(".next")[0];
		function jdlb(){
			num++;
			for (var i = 0; i < btnx.length; i++) {
				btnx[i].style.background="#111";
			}
			if(num==btnx.length+1){
				btnx[0].style.background="red";
				animate(boxinner,{left:num*-439},function(){
					this.style.left="-439px";
					num=1;
					flag=true;
				})
			}else if(num==0){
				btnx[btnx.length-1].style.background="red"
				animate(boxinner,{left:0},function(){
					this.style.left=btnx.length*-439+"px";
					num=btnx.length;
					flag=true;
				})
			}else{
				btnx[num-1].style.background="red";
				animate(boxinner,{left:num*-439},function(){
					flag=true;
				});
			}
			for (var i = 0; i < btnx.length; i++) {
					btnx[i].index=i;//btnm[i].index=i+1
					btnx[i].onmouseover=function(){
						for (var i = 0; i < btnx.length; i++) {
							btnx[i].style.background="#111";
						};
						animate(boxinner,{left:-439*(this.index+1)})
						this.style.background="red";
					}
				};	
		}
		var bannern=setInterval(jdlb,3000);
		boxn.onmouseover=function(){
			clearInterval(bannern);
			animate(next,{right:0},200)
			animate(prev,{left:0},200)
		}
		boxn.onmouseout=function(){
			bannern=setInterval(jdlb,3000)
			animate(next,{right:-30},200)
			animate(prev,{left:-30},200)
		}
		var flag=true;
		next.onclick=function(){
			if(flag){
				flag=false;
				jdlb();
			}
		}
		prev.onclick=function(){

			if(flag){
				num-=2;
				flag=false;
				jdlb();
			}
		}	
	// var lunbobox=$(".lunbobox")[0];
	// alert(1)
//2层轮播
	var mzboxn=$(".mzcontainer");
	var mzboxinner=$(".mzR1imgbox");
	var mzbtnbox=$(".mzbtnbox");
	var mzprev=$(".mzprev");
	var mznext=$(".mznext");
function second(mzboxn,mzboxinner,mzbtnbox,mzprev,mznext){
	var mzbtnx=$(".mzbtnx",mzbtnbox);
	var mznum=1;
	function mzlunbo(){
		mznum++;
		for (var i = 0; i < mzbtnx.length; i++) {
			mzbtnx[i].style.background="#111";
		}
		if(mznum==mzbtnx.length+1){
			mzbtnx[0].style.background="red";
			animate(mzboxinner,{left:mznum*-339},function(){
				this.style.left="-339px";
				mznum=1;
				flag=true;
			})
		}else if(mznum==0){
			mzbtnx[mzbtnx.length-1].style.background="red"
			animate(mzboxinner,{left:0},function(){
				this.style.left=mzbtnx.length*-339+"px";
				mznum=mzbtnx.length;
				flag=true;
			})
		}else{
			mzbtnx[mznum-1].style.background="red";
			animate(mzboxinner,{left:mznum*-339},function(){
				flag=true;
			});
		}
		for (var i = 0; i < mzbtnx.length; i++) {
				mzbtnx[i].index=i;//btnm[i].index=i+1
				mzbtnx[i].onmouseover=function(){
					for (var i = 0; i < mzbtnx.length; i++) {
						mzbtnx[i].style.background="#111";
					};
					animate(mzboxinner,{left:-339*(this.index+1)})
					this.style.background="red";
				}
			};	
	}
	var mzbannert=setInterval(mzlunbo,3000);
	mzboxn.onmouseover=function(){
		clearInterval(mzbannert);
		animate(mznext,{right:0},200)
		animate(mzprev,{left:0},200)
	}
	mzboxn.onmouseout=function(){
		mzbannert=setInterval(mzlunbo,3000)
		animate(mznext,{right:-30},200)
		animate(mzprev,{left:-30},200)
	}
	var flag=true;
	mznext.onclick=function(){
		if(flag){
			flag=false;
			mzlunbo();
		}
	}
	mzprev.onclick=function(){
		if(flag){

			num-=2;
			flag=false;
			mzlunbo();
		}
	}	
}
for (var i = 0; i < mzboxinner.length; i++) {
	second(mzboxn[i],mzboxinner[i],mzbtnbox[i],mzprev[i],mznext[i])
};
//3层轮播
function tree(txboxn,txinnerbox,txbtnbox,txprev,txnext){
	var txbtn=$(".txbtnx1" ,txbtnbox);
	var txnum=1;
	function txlunbo(){
		txnum++;
		for (var i = 0; i < txbtn.length; i++) {
			txbtn[i].style.background="#111";
		}
		if(txnum==txbtn.length+1){
			txbtn[0].style.background="red";
			animate(txinnerbox,{left:txnum*-439},function(){
				this.style.left="-439px";
				txnum=1;
				flag=true;
			})
		}else if(txnum==0){
			txbtn[txbtn.length-1].style.background="red"
			animate(txinnerbox,{left:0},function(){
				this.style.left=txbtn.length*-439+"px";
				txnum=txbtn.length;
				flag=true;
			})
		}else{
			txbtn[txnum-1].style.background="red";
			animate(txinnerbox,{left:txnum*-439},function(){
				flag=true;
			});
		}
		for (var i = 0; i < txbtn.length; i++) {
				txbtn[i].index=i;//btnm[i].index=i+1
				txbtn[i].onmouseover=function(){
					for (var i = 0; i < txbtn.length; i++) {
						txbtn[i].style.background="#111";
					};
					animate(txinnerbox,{left:-439*(this.index+1)})
					this.style.background="red";
				}
			};	
	}
	var bannern=setInterval(txlunbo,3000);
	txboxn.onmouseover=function(){
		clearInterval(bannern);
		animate(txnext,{right:0},200)
		animate(txprev,{left:0},200)
	}
	txboxn.onmouseout=function(){
		bannern=setInterval(txlunbo,3000)
		animate(txnext,{right:-30},200)
		animate(txprev,{left:-30},200)
	}
	var flag=true;
	txnext.onclick=function(){
		if(flag){
			flag=false;
			txlunbo();
		}
	}
	txprev.onclick=function(){

		if(flag){
			txnum-=2;
			flag=false;
			txlunbo();
		}
	}
}	
var txboxn=$(".fwcontainer");
var txinnerbox=$(".txinnerbox");
var txbtnbox=$(".txbtnbox");
var txprev=$(".txprev");
var txnext=$(".txnext");
for (var i = 0; i < txinnerbox.length; i++) {
	tree(txboxn[i],txinnerbox[i],txbtnbox[i],txprev[i],txnext[i])
};
//12层轮播
	var fwboxn=$(".fwbox");
	var fwinnerbox=$(".fwinnerbox");
	var fwbtnbox=$(".fwbtnbox");
	var fwprev=$(".fwprev");
	var fwnext=$(".fwnext");
function fuwu(fwboxn,fwinnerbox,fwbtnbox,fwprev,fwnext){
	var fwbtn=$(".fwbtnx1" ,fwbtnbox);
	var fwnum=1;
	function fwlunbo(){
		fwnum++;
		for (var i = 0; i < fwbtn.length; i++) {
			fwbtn[i].style.background="#111";
		}
		if(fwnum==fwbtn.length+1){
			fwbtn[0].style.background="red";
			animate(fwinnerbox,{left:fwnum*-395},function(){
				this.style.left="-395px";
				fwnum=1;
				flag=true;
			})
		}else if(fwnum==0){
			fwbtn[fwbtn.length-1].style.background="red"
			animate(fwinnerbox,{left:0},function(){
				this.style.left=fwbtn.length*-395+"px";
				fwnum=fwbtn.length;
				flag=true;
			})
		}else{
			fwbtn[fwnum-1].style.background="red";
			animate(fwinnerbox,{left:fwnum*-395},function(){
				flag=true;
			});
		}
		for (var i = 0; i < fwbtn.length; i++) {
				fwbtn[i].index=i;//btnm[i].index=i+1
				fwbtn[i].onmouseover=function(){
					for (var i = 0; i < fwbtn.length; i++) {
						fwbtn[i].style.background="#111";
					};
					animate(fwinnerbox,{left:-395*(this.index+1)})
					this.style.background="red";
				}
			};	
	}
	var fwbannern=setInterval(fwlunbo,3000);
	fwboxn.onmouseover=function(){
		clearInterval(fwbannern);
		animate(fwnext,{right:0},200)
		animate(fwprev,{left:0},200)
	}
	fwboxn.onmouseout=function(){
		fwbannern=setInterval(fwlunbo,3000)
		animate(fwnext,{right:-28},200)
		animate(fwprev,{left:-28},200)
	}
	var flag=true;
	fwnext.onclick=function(){
		if(flag){
			flag=false;
			fwlunbo();
		}
	}
	fwprev.onclick=function(){
		if(flag){
			fwnum-=2;
			flag=false;
			fwlunbo();
		}
	}
}
for (var i = 0; i < fwinnerbox.length; i++) {
	fuwu(fwboxn[i],fwinnerbox[i],fwbtnbox[i],fwprev[i],fwnext[i])
}
})