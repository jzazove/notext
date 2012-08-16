(function(){
	var a = document.querySelectorAll("body *")  
		, i = a.length
		, child
		, children
		, x
		;
		
	while(i--){
		children = a[i].childNodes, 
		x = children.length;
		while(x--){
			var child = children[x];
			if(a[i].hasChildNodes() && child.nodeType === 3) {
				child.nodeValue = "";
			};
	    };
	    if(a[i].tagName.toLowerCase() === "input" || a[i].tagName.toLowerCase() === "textarea"){
				a[i].value = "";
				a[i].setAttribute("placeholder", "");	
		} else if(a[i].tagName.toLowerCase() === "iframe"){
				a[i].style.visibility = "hidden";
        };
	
	};	
})();