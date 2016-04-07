;
$(function() {
	$("#switch-jfkeyboard").on('click', function() {
		var _isOn = $(this).hasClass('is-on');
		$("#ui-keyboard").hide();
		if (!_isOn) {
			$(this).addClass('is-on');
			$('.is-jfkeyboard').addClass('is-readonly').attr('readonly', 'readonly')
		} else {
			$(this).removeClass('is-on');
			$('.is-jfkeyboard').removeClass('is-readonly').removeAttr('readonly');
		}
	})
});

$(function() {
	$(".is-jfkeyboard").on('click', function() {
		
		var _isReadonly = $(this).hasClass('is-readonly');
		$(".is-jfkeyboard").removeClass("is-focus");
		$(this).addClass("is-focus");
		if (_isReadonly) {
			var _valueArray = new Array();
			$("#ui-keyboard").slideDown();

			$(".btn-sm").on('click', function() {
				var _dataValue = $(this).attr('data-value');
				_valueArray.push(_dataValue);
				$(".is-focus").val(_valueArray.join(''));
			})
			$("#key-del").on('click', function() {
				_valueArray.pop();
				$(".is-focus").val(_valueArray.join(''));
			})
		}

	})
	$(".js-confirm").on('click', function() {
		$("#ui-keyboard").hide();
	})
});