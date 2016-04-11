;
'use strict';
$(function() {
	/**
	 * [add switch of keyboard]
	 */
	var itemsInput = $('.is-jfkeyboard');
	var innerHight = $(".is-jfkeyboard").css('height');
	itemsInput.after('<span class="keyboard-tag"><i class="iconfont">&#xe63f;</i></span>');
	$(".keyboard-tag").css({
			'height': innerHight,
			'line-height': innerHight
		})
		/**
		 * [addKeyBoardUi add Dom of keyboard]
		 */
	function addKeyBoardUi() {
		$(".ui-keyboard").remove();
		$('body').append("<div class='ui-keyboard' style='display: none;'>" + "<div class='ui-keyboad-keyset'>" + "<button class='keyboard-btn btn-sm' data-value='1'>1</button>" + "<button class='keyboard-btn btn-sm' data-value='2'>2</button>" + "<button class='keyboard-btn btn-sm' data-value='3'>3</button>" + "<button class='keyboard-btn btn-sm' data-value='4'>4</button>" + "<button class='keyboard-btn btn-sm' data-value='5'>5</button>" + "<button class='keyboard-btn btn-sm' data-value='6'>6</button>" + "<button class='keyboard-btn btn-sm' data-value='7'>7</button>" + "<button class='keyboard-btn btn-sm' data-value='8'>8</button>" + "<button class='keyboard-btn btn-sm' data-value='9'>9</button>" + "<button class='keyboard-btn btn-sm' data-value='0'>0</button>" + "<button class='keyboard-btn btn-md' id='key-del'>Del</button>" + "<br>" + "<button class='keyboard-btn btn-sm' data-value='q'>q</button>" + "<button class='keyboard-btn btn-sm' data-value='w'>w</button>" + "<button class='keyboard-btn btn-sm' data-value='e'>e</button>" + "<button class='keyboard-btn btn-sm' data-value='r'>r</button>" + "<button class='keyboard-btn btn-sm' data-value='t'>t</button>" + "<button class='keyboard-btn btn-sm' data-value='y'>y</button>" + "<button class='keyboard-btn btn-sm' data-value='u'>u</button>" + "<button class='keyboard-btn btn-sm' data-value='i'>i</button>" + "<button class='keyboard-btn btn-sm' data-value='o'>o</button>" + "<button class='keyboard-btn btn-sm' data-value='p'>p</button>" + "<br>" + "<button class='keyboard-btn btn-sm' data-value='a'>a</button>" + "<button class='keyboard-btn btn-sm' data-value='s'>s</button>" + "<button class='keyboard-btn btn-sm' data-value='d'>d</button>" + "<button class='keyboard-btn btn-sm' data-value='f'>f</button>" + "<button class='keyboard-btn btn-sm' data-value='g'>g</button>" + "<button class='keyboard-btn btn-sm' data-value='h'>h</button>" + "<button class='keyboard-btn btn-sm' data-value='j'>j</button>" + "<button class='keyboard-btn btn-sm' data-value='k'>k</button>" + "<button class='keyboard-btn btn-sm' data-value='l'>l</button>" + "<br>" + "<button class='keyboard-btn btn-md js-confirm'>确定</button>" + "<button class='keyboard-btn btn-sm' data-value='z'>z</button>" + "<button class='keyboard-btn btn-sm' data-value='x'>x</button>" + "<button class='keyboard-btn btn-sm' data-value='c'>c</button>" + "<button class='keyboard-btn btn-sm' data-value='v'>v</button>" + "<button class='keyboard-btn btn-sm' data-value='b'>b</button>" + "<button class='keyboard-btn btn-sm' data-value='n'>n</button>" + "<button class='keyboard-btn btn-sm' data-value='m'>m</button>" + "<button class='keyboard-btn btn-md js-confirm'>确定</button>" + "</div>" + "</div>")
	};
	itemsInput.on('click', function() {
		$(".ui-keyboard").hide();
	})
	$(".keyboard-tag").on('click', function() {
		itemsInput.removeClass('getFocus');
		$(this).siblings('input').addClass('getFocus').attr('readonly', 'readonly');
		var _valueArray = $(this).siblings('input').val().split('');
		addKeyBoardUi();
		$(".ui-keyboard").slideDown();
		$('.btn-sm').on('click', function() {
			var _dataValue = $(this).attr('data-value');
			_valueArray.push(_dataValue);
			$(".getFocus").val(_valueArray.join(''))
		})
		$("#key-del").on('click', function() {
			_valueArray.pop();
			$(".getFocus").val(_valueArray.join(''));
		})
		$(".js-confirm").on('click', function() {
			$(".ui-keyboard").hide();
		})
	})
});