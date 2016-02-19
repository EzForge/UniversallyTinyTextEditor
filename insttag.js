function instag(textAreaId, tag, properties) 
{
	var browser=navigator.appName
	var b_version=navigator.appVersion

	if (browser=="Microsoft Internet Explorer" && b_version>='4')
	{
		var str = document.selection.createRange().text;
		document.getElementById(textAreaId).focus();
		var sel = document.selection.createRange();
		//sel.text = "<" + tag + ">" + str + "</" + tag + ">";
		if(properties){
			if(tag=='img'){
				sel.text = "<" + tag + " " + properties + "/>";
			}else{
				sel.text = "<" + tag + " " + properties + ">" + str + "</" + tag + ">";
			}
		}else{
			sel.text = "<" + tag + ">" + str + "</" + tag + ">";
		}
	}
	else
	{
		field = document.getElementById(textAreaId);
		startPos = field.selectionStart;
		endPos = field.selectionEnd;
		before = field.value.substr(0, startPos);
		selected = field.value.substr(field.selectionStart, (field.selectionEnd - field.selectionStart));
		after = field.value.substr(field.selectionEnd, (field.value.length - field.selectionEnd));
		//field.value = before + "<" + tag + ">" + selected + "</" + tag + ">" + after;
		if(properties){
			if(tag=='img'){
				field.value = before + "<" + tag + " " + properties + "/>" + selected + after;
			}else{
				field.value = before + "<" + tag + " " + properties + ">" + selected + "</" + tag + ">" + after;
			}			
		}else{
			field.value = before + "<" + tag + ">" + selected + "</" + tag + ">" + after;
		}
	}
	return;
}