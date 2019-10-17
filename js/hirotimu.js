$(document).ready(function(){
	$("#ryakuBottun").click(function(){
		var targetText = $("#target").val();

		// 2文字以下の単語が指定された場合、エラー
		var len = targetText.length;
		if(len <= 2){
			$("#error").text(targetText + "...って、これ以上略せないやろ！");
			$("#ryakugo").text("");
			return;
		}else{

			var result = targetText;

			// 削除する文字数を決定
			// 一文字以上、元の文字数以下
			var deleteAmount = Math.floor(Math.random() * (len-1))+1;

			// 削除する文字インデックスを生成
			// 一文字削除を実行
			for(i = 0; i < deleteAmount; i++){
				var deleteIndex = Math.floor(Math.random() * result.length);
				result = result.substring(0,deleteIndex) + result.substring(deleteIndex+1,result.length);
			}
			$("#error").text("");
			$("#ryakugo").text(result);
		}
	})

  });
