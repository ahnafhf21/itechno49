document.addEventListener("DOMContentLoaded",function(){window.tags=document.getElementsByClassName("zoomOnClick"),window.ZoomInDiv=document.querySelector("#JSzoom"),window.divX=document.querySelector("#JSzoom #closeButton"),window.zoomInContent=document.querySelector("#JSzoom #JSzoomContent"),window.windowResizeEventAdded=!1,window.$window=$(window),window.windowResized=function(){window.spanX},window.zoomIn=function(o,e=!1){document.body.style.overflow="hidden",$(o).is(".NoImageInZoom")?window.NoImageInZoom=!0:window.NoImageInZoom=!1;var n=$(o);if(o.tagName.toLowerCase()=="video".toLowerCase()&&(o.pause(),o.currentTime=0),window.ThisEl=n,n.parent().hasClass("imageToZoom")){var i=n.siblings();(i.is(".Deskripsi")||i.is(".Deskripsi2"))&&(console.log(i),console.log(i.filter(".Deskripsi2").clone(!0)),(i=$.merge(i.filter(".Deskripsi").clone(!0),i.filter(".Deskripsi2").clone(!0))).removeClass("TakTerlihat"))}window.NoImageInZoom||(window.clone=o.cloneNode(!0),window.play=e,clone.removeAttribute("onclick"),clone.removeAttribute("onplay"),clone.style.position="relative",clone.style.top="0px",clone.style.left="0px",window.$video=$(clone),window.windowResizeEventAdded||($(window).resize(function(){var o=$window.height(),e=$window.width(),n=$video.height(),i=$video.width(),t=i/n,w=1/t;o/n>e/i?(console.log("left right touch"),$video.css({width:e+"px",height:w*e+"px",position:"absolute",top:"50%",transform:"translateY(-50%)",margin:"auto"})):(console.log("up down touch"),$video.css({height:o+"px",width:o*t+"px",position:"relative",top:"0",transform:"",margin:"auto"}))}),window.windowResizeEventAdded=!0)),window.zoomInContent.innerHTML="",window.NoImageInZoom||window.zoomInContent.appendChild(clone),$(window.zoomInContent).append(i),window.Sib=i,$(window).resize(),$(window.ZoomInDiv).fadeIn(1e3,function(){$(window).resize(),o.tagName.toLowerCase()=="video".toLowerCase()&&e&&(window.NoImageInZoom||window.clone.play())})},window.zoomOut=function(){document.body.style.overflow="auto",$(window.ZoomInDiv).fadeOut(1e3,function(){window.zoomInContent.innerHTML=""})},window.divX.setAttribute("onclick","window.zoomOut();");for(var o=0;o<tags.length;o++){var e=tags[o];e.setAttribute("onclick","window.zoomIn(this,0);"),e.tagName.toLowerCase()=="video".toLowerCase()&&e.setAttribute("onplay","window.zoomIn(this,1);")}});