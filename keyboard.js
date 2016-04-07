;
$(function() {
	$("body").append("<a href='javascript:void(0)' class='switch-board' id='switch-jfkeyboard'>" + "<img src='data:image/png;base64,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' alt=''>" + "</a>")
});
$(function() {
	$("#switch-jfkeyboard").on('click', function() {
		// 添加主键盘
		$('body').append("<div class='ui-keyboard' id='ui-keyboard' style='display: none;'>" + "<div class='ui-keyboad-keyset'>" + "<button class='keyboard-btn btn-sm' data-value='1'>1</button>" + "<button class='keyboard-btn btn-sm' data-value='2'>2</button>" + "<button class='keyboard-btn btn-sm' data-value='3'>3</button>" + "<button class='keyboard-btn btn-sm' data-value='4'>4</button>" + "<button class='keyboard-btn btn-sm' data-value='5'>5</button>" + "<button class='keyboard-btn btn-sm' data-value='6'>6</button>" + "<button class='keyboard-btn btn-sm' data-value='7'>7</button>" + "<button class='keyboard-btn btn-sm' data-value='8'>8</button>" + "<button class='keyboard-btn btn-sm' data-value='9'>9</button>" + "<button class='keyboard-btn btn-sm' data-value='0'>0</button>" + "<button class='keyboard-btn btn-md' id='key-del'>Del</button>" + "<br>" + "<button class='keyboard-btn btn-sm' data-value='q'>q</button>" + "<button class='keyboard-btn btn-sm' data-value='w'>w</button>" + "<button class='keyboard-btn btn-sm' data-value='e'>e</button>" + "<button class='keyboard-btn btn-sm' data-value='r'>r</button>" + "<button class='keyboard-btn btn-sm' data-value='t'>t</button>" + "<button class='keyboard-btn btn-sm' data-value='y'>y</button>" + "<button class='keyboard-btn btn-sm' data-value='u'>u</button>" + "<button class='keyboard-btn btn-sm' data-value='i'>i</button>" + "<button class='keyboard-btn btn-sm' data-value='o'>o</button>" + "<button class='keyboard-btn btn-sm' data-value='p'>p</button>" + "<br>" + "<button class='keyboard-btn btn-sm' data-value='a'>a</button>" + "<button class='keyboard-btn btn-sm' data-value='s'>s</button>" + "<button class='keyboard-btn btn-sm' data-value='d'>d</button>" + "<button class='keyboard-btn btn-sm' data-value='f'>f</button>" + "<button class='keyboard-btn btn-sm' data-value='g'>g</button>" + "<button class='keyboard-btn btn-sm' data-value='h'>h</button>" + "<button class='keyboard-btn btn-sm' data-value='j'>j</button>" + "<button class='keyboard-btn btn-sm' data-value='k'>k</button>" + "<button class='keyboard-btn btn-sm' data-value='l'>l</button>" + "<br>" + "<button class='keyboard-btn btn-md js-confirm'>确定</button>" + "<button class='keyboard-btn btn-sm' data-value='z'>z</button>" + "<button class='keyboard-btn btn-sm' data-value='x'>x</button>" + "<button class='keyboard-btn btn-sm' data-value='c'>c</button>" + "<button class='keyboard-btn btn-sm' data-value='v'>v</button>" + "<button class='keyboard-btn btn-sm' data-value='b'>b</button>" + "<button class='keyboard-btn btn-sm' data-value='n'>n</button>" + "<button class='keyboard-btn btn-sm' data-value='m'>m</button>" + "<button class='keyboard-btn btn-md js-confirm'>确定</button>" + "</div>" + "</div>")
			// 屏蔽功能键盘弹出
		var _isOn = $(this).hasClass('is-on');
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
		var _itSuperValue = $(this).val();
		$(".is-jfkeyboard").removeClass("is-focus");
		$(this).addClass("is-focus");

		if (_isReadonly) {
			var _valueArray = new Array();
			$("#ui-keyboard").slideDown();
			_valueArray.push(_itSuperValue);
			// 键入功能
			$(".btn-sm").on('click', function() {
					var _dataValue = $(this).attr('data-value');
					_valueArray.push(_dataValue);
					$(".is-focus").val(_valueArray.join(''));
				})
				// DEL键功能
			$("#key-del").on('click', function() {
				_valueArray.pop();
				$(".is-focus").val(_valueArray.join(''));
			})
		}
		// 确认键功能
		$(".js-confirm").on('click', function() {
			$("#ui-keyboard").hide();
		})
	})
});