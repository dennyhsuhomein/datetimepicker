var month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var startsmallyear = 1911;
var today_day;
var today_month;
var today_fullyear;
var today_smallyear;
var today;
var today_standard_year;

var selectday;
var select_month;
var select_year;
var select_day;
var select_fullyear;
var select_smallyear;
var selectday;
var selectwichday;
var show_month;
var select_standard_year;

var tempday;
var temp_year;
var temp_month;
var temp_day;
var temp_smallyear;

var prev_month;
var next_month;
var init_day;
var whichday;
var prev_month_start_day;

var date_string = "";
var time_string = "";
var space = " ";
var output_tag_arr = ["/", "-"];
var month_year_bar_arr = [false, true];
var dat_table_arr = [false, true];
var time_bar_arr = [false, true];
var year_formate_arr = ["small", "full"];
var config_default = {
	output_tag: "/",
	month_year_bar: true,
	day_table: true,
	time_bar: false,
	output_year: "small"
}
var $trbdatetime;

today = new Date();
today_day = today.getDate()
today_fullyear = today.getFullYear();
today_smallyear = today_fullyear - startsmallyear;
today_month = today.getMonth();
tempday = today;
temp_day = today_day;
temp_year = today_fullyear;
temp_smallyear = today_smallyear;
temp_month = today_month;

init_day = new Date(today_fullyear, today_month, 1);
whichday = init_day.getDay() + 0;

var time = {
	hour: '00',
	min: '00',
	sec: '00'
}

var $output_input;
(function($) {

	function init_datatimepicker() {

		time.hour = (today.getHours() < 10) ? '0' + today.getHours() : today.getHours();
		time.min = (today.getMinutes() < 10) ? '0' + today.getMinutes() : today.getMinutes();
		time.sec = (today.getSeconds() < 10) ? '0' + today.getSeconds() : today.getSeconds();

		var $datetimepicker = $('<div  class="datepicker fix">' +
			'</div>');

		var $date = $('<div  class="date fix">' +
			'</div>');

		var $month_year = $('<div class="date-header fix">' +
			'<div id="prev-month" class="prev-month">' +
			'<' +
			'</div>' +
			'<div  class="year-month fix">' +
			'<input readonly="readonly" class="select-year my-input" value="107">' +
			'<div class="my-select-year my-select">	' +
			'<div>' +
			'	<ul class = "ul_year">' +
			'</ul>' +
			'</div>' +
			'</div>' +
			'<span class="year-span">年</span>' +
			'<input readonly="readonly" class="select-month my-input" value="10">' +
			'<div class="my-select-month my-select">' +
			'<div>' +
			'<ul class = "ul_month">' +
			'</ul>' +
			'</div>' +
			'</div>' +
			'<span class="month-span">月</span>' +
			'</div>' +
			'<div id="next-month" class="next-month">' +
			'>' +
			'</div>' +
			'</div>');

		var $data_body = $('<div class="date-body fix"></div>');

		var $day = $('<div id="day">' +
			'<table id="calendar" class="calendar">' +
			'<tr>' +
			'<th>日</th>' +
			'<th>一</th>' +
			'<th>二</th>' +
			'<th>三</th>' +
			'<th>四</th>' +
			'<th>五</th>' +
			'<th>六</th>' +
			'</tr>' +
			'<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
			'<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
			'<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
			'<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
			'<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
			'<tr class="tr-6">' +
			'<td></td>' +
			'<td></td>' +
			'<td></td>' +
			'<td></td>' +
			'<td></td>' +
			'<td></td>' +
			'<td></td>' +
			'</tr>' +
			'</table>' +
			'</div>');

		var $time = $(
			'<div id="timepicker" class="timepicker fix">' +
			'<div class="timeheader ">' +

			'<div class="clock-box">' +
			'<img src="img/clock.png"/>' +
			'</div>' +

			'<div class="hour fix">' +
			'<input readonly="readonly" class="select-hour my-input" value="00">' +
			'<div class="my-select-hour my-select">' +
			'<div>' +
			'<ul class = "ul_hour">' +
			'</ul>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<div class="symbol1">' +
			':' +
			'</div>' +
			'<div  class="min">' +
			'<input readonly="readonly" class="select-min my-input" value="00">' +
			'<div class="my-select-min my-select">' +
			'<div>' +
			'<ul class="ul_min">' +
			'</ul>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<div class="symbol2">' +
			':' +
			'</div>' +
			'<div class="sec">' +
			'<input readonly="readonly" class="select-sec my-input" value="00">' +
			'<div class="my-select-sec my-select">' +
			'<div>' +
			'<ul class = "ul_sec">' +
			'</ul>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<div class="timebody">' +
			'</div>' +
			'</div>');

		var $img_calendar_icon = $('<img class="calendar_icon" src="img/calendar_icon.png"/>');

		var config = (arguments[0]) ? arguments[0] : config_default;
		if(config.month_year_bar == true) {
			$date.append($month_year)

			if(config.day_table == true) {
				$data_body.append($day)
				$date.append($data_body);
			}
			$datetimepicker.append($date)
		}

		if(config.time_bar == true) {

			$datetimepicker.append($time);
		}

		switch(config.output_year) {
			case 'small':
				today_standard_year = parseInt(today_smallyear);
				break;
			case 'full':
				today_standard_year = parseInt(today_fullyear);
				break;
		}

		$(this).after($datetimepicker);
		var $nextdtpicker = $(this).next();

		var offset = $(this).offset()
		var left = offset.left;
		var top = offset.top;
		var height = $(this).outerHeight();

		var dptop = top + height + 3;
		var dpleft = left;
		$nextdtpicker.css('left', dpleft);
		$nextdtpicker.css('top', dptop);

		var input_height = $(this).outerHeight();
		var input_width = $(this).outerWidth();
		$img_calendar_icon.height(input_height);
		$img_calendar_icon.width(input_height);

		$datetimepicker.after($img_calendar_icon);

		var $month = $datetimepicker.find(".ul_month");
		var $year = $datetimepicker.find(".ul_year");
		var $hour = $datetimepicker.find(".ul_hour");
		var $min = $datetimepicker.find(".ul_min");
		var $sec = $datetimepicker.find(".ul_sec");

		var $my_input = $datetimepicker.find(".my-input");
		var $select_year = $datetimepicker.find(".select-year");
		var $select_month = $datetimepicker.find(".select-month");

		var $my_select_month = $datetimepicker.find(".my-select-month");
		var $my_select_year = $datetimepicker.find(".my-select-year");

		var $next_month = $datetimepicker.find(".next-month");
		var $prev_month = $datetimepicker.find(".prev-month");

		$trbdatetime = $(this);
		init_select_year(today_standard_year, $year);
		init_select_month(today_month, $month);
		init_calendar(today_month, whichday, today_fullyear, $datetimepicker);
		setPrevNextMonth(today_month);
		init_date_output($trbdatetime, config);
		init_select_hour($hour);
		init_select_min($min);
		init_select_sec($sec);
		init_year_month($select_month, $select_year);

		var $month_li = $datetimepicker.find(".ul_month li");
		var $year_li = $datetimepicker.find(".ul_year li");
		var $hour_li = $datetimepicker.find(".ul_hour li");
		var $min_li = $datetimepicker.find(".ul_min li");
		var $sec_li = $datetimepicker.find(".ul_sec li");

		var $timepicker_li = $datetimepicker.find(".timepicker li");
		var $calendar_td = $datetimepicker.find(".calendar td");

		$img_calendar_icon.click(function() {

			$('.my-select').hide();
			$('.datepicker').fadeOut('fast');
			
			$output_input = $(this).prev().prev();
			var $nextdtpicker = $(this).prev();
			var input_str = $output_input.val();
			var temp_datetime_arr = [];
			var temp_time_arr;
			var temp_date_arr;
			
			if(config.day_table == true && config.month_year_bar == true && config.time_bar == true) {
				temp_datetime_arr = input_str.split(" ");
			}
			if(config.day_table == true && config.month_year_bar == true && config.time_bar == false) {
				temp_datetime_arr = input_str.split(" ");
			}
			if(config.day_table == false && config.month_year_bar == false && config.time_bar == true) {
				temp_datetime_arr[1] = input_str;
			}
			if(config.day_table == false && config.month_year_bar == true && config.time_bar == false) {
				temp_datetime_arr = input_str.split(" ");
			}
			if(temp_datetime_arr[0] != undefined) {
				temp_date_arr = temp_datetime_arr[0].split(/\/|-/g);
			}
			if(temp_datetime_arr[1] != undefined) {
				temp_time_arr = temp_datetime_arr[1].split(":");
			}
			if(config.month_year_bar == true) {
				$select_year.val(temp_date_arr[0]);
				$select_month.val(temp_date_arr[1]);
				temp_year = parseInt(temp_date_arr[0]);
				temp_month = parseInt(temp_date_arr[1]) - 1;

				switch(config.output_year) {
					case 'small':
						temp_year = temp_year + 1911;
						break;
				}

			}
			if(config.day_table == true) {
				temp_day = parseInt(temp_date_arr[2]);
			}

			if(config.time_bar == true) {
				$('.select-hour').val(temp_time_arr[0]);
				$('.select-min').val(temp_time_arr[1]);
				$('.select-sec').val(temp_time_arr[2]);
				time.hour = temp_time_arr[0];
				time.min = temp_time_arr[1];
				time.sec = temp_time_arr[2];
				time_string = time.hour + ":" + time.min + ":" + time.sec;
			}
			selectday = new Date(temp_year, temp_month, 1);
			selectwichday = selectday.getDay();
			init_calendar(temp_month, selectwichday, temp_year, $datetimepicker);
			
			if ($nextdtpicker.css('display') == 'none') {
				$nextdtpicker.fadeIn();
			}
			
			event.stopPropagation();
		})

		$month_li.click(function function_name() {
			switch(config.output_year) {
				case 'small':
					select_year = parseInt($select_year.val()) + 1911;
					break;
				case 'full':
					select_year = parseInt($select_year.val());
					break;
			}

			select_month = parseInt($(this).text()) - 1;
			selectday = new Date(select_year, select_month, 1);
			selectwichday = selectday.getDay();
			init_calendar(select_month, selectwichday, select_year, $datetimepicker)

			$month_li.css('background-color', '');
			$month_li.css('color', '');

			$select_month.val($(this).text())

			$(this).css('background-color', 'dodgerblue');
			$(this).css('color', 'white');

			$my_select_month.fadeOut('fast');

			noday_output(config, $select_year, $select_month);

		})

		$year_li.click(function() {

			switch(config.output_year) {
				case 'small':
					select_year = parseInt($(this).text()) + 1911;
					break;
				case 'full':
					select_year = parseInt($(this).text());
					break;
			}

			select_month = parseInt($select_month.val()) - 1;
			selectday = new Date(select_year, select_month, 1);
			selectwichday = selectday.getDay();
			init_calendar(select_month, selectwichday, select_year, $datetimepicker)

			$year_li.css('background-color', '');
			$year_li.css('color', '');

			$select_year.val($(this).text())

			$(this).css('background-color', 'dodgerblue');
			$(this).css('color', 'white');

			$my_select_year.fadeOut('fast');

			noday_output(config, $select_year, $select_month);

		})

		$next_month.click(function() {
			$('.my-select').fadeOut('fast');

			switch(config.output_year) {
				case 'small':
					select_year = parseInt($select_year.val()) + 1911;
					break;
				case 'full':
					select_year = parseInt($select_year.val());
					break;
			}

			show_month = parseInt($select_month.val()) + 1;
			select_month = show_month - 1;

			if(show_month == 13) {
				show_month = 1;
				select_year = select_year + 1;
				select_month = show_month - 1;
			}

			show_month = (show_month < 10) ? "0" + show_month : show_month;

			$select_month.val(show_month);
			switch(config.output_year) {
				case 'small':
					$select_year.val(select_year - 1911);
					break;
				case 'full':
					$select_year.val(select_year);;
					break;
			}

			selectday = new Date(select_year, select_month, 1);
			selectwichday = selectday.getDay();
			init_calendar(select_month, selectwichday, select_year, $datetimepicker);
			noday_output(config, $select_year, $select_month);

		})

		$prev_month.click(function() {
			$('.my-select').fadeOut('fast');
			switch(config.output_year) {
				case 'small':
					select_year = parseInt($select_year.val()) + 1911;
					break;
				case 'full':
					select_year = parseInt($select_year.val());
					break;
			}
			show_month = parseInt($select_month.val()) - 1;
			select_month = show_month - 1;

			if(show_month == 0) {
				show_month = 12;
				select_year = select_year - 1;
				select_month = show_month - 1;
			}

			show_month = (show_month < 10) ? "0" + show_month : show_month;

			$select_month.val(show_month);
			switch(config.output_year) {
				case 'small':
					$select_year.val(select_year - 1911);
					break;
				case 'full':
					$select_year.val(select_year);;
					break;
			}

			selectday = new Date(select_year, select_month, 1);
			selectwichday = selectday.getDay();
			init_calendar(select_month, selectwichday, select_year, $datetimepicker);
			noday_output(config, $select_year, $select_month);
		})

		$trbdatetime.click(function(event) {
			$('.my-select').hide();
			$('.datepicker').fadeOut('fast');
			var input_str = $(this).val();
			var $nextdtpicker = $(this).next();
			var temp_datetime_arr = [];

			if(config.day_table == true && config.month_year_bar == true && config.time_bar == true) {
				temp_datetime_arr = input_str.split(" ");
			}
			if(config.day_table == true && config.month_year_bar == true && config.time_bar == false) {
				temp_datetime_arr = input_str.split(" ");
			}
			if(config.day_table == false && config.month_year_bar == false && config.time_bar == true) {
				temp_datetime_arr[1] = input_str;
			}
			if(config.day_table == false && config.month_year_bar == true && config.time_bar == false) {
				temp_datetime_arr = input_str.split(" ");
			}

			var temp_time_arr;
			var temp_date_arr;

			if(temp_datetime_arr[0] != undefined) {
				temp_date_arr = temp_datetime_arr[0].split(/\/|-/g);
			}
			if(temp_datetime_arr[1] != undefined) {
				temp_time_arr = temp_datetime_arr[1].split(":");
			}
			if(config.month_year_bar == true) {
				$select_year.val(temp_date_arr[0]);
				$select_month.val(temp_date_arr[1]);
				temp_year = parseInt(temp_date_arr[0]);
				temp_month = parseInt(temp_date_arr[1]) - 1;

				switch(config.output_year) {
					case 'small':
						temp_year = temp_year + 1911;
						break;
				}

			}
			if(config.day_table == true) {
				temp_day = parseInt(temp_date_arr[2]);
			}

			if(config.time_bar == true) {
				$('.select-hour').val(temp_time_arr[0]);
				$('.select-min').val(temp_time_arr[1]);
				$('.select-sec').val(temp_time_arr[2]);
				time.hour = temp_time_arr[0];
				time.min = temp_time_arr[1];
				time.sec = temp_time_arr[2];
				time_string = time.hour + ":" + time.min + ":" + time.sec;
			}
			selectday = new Date(temp_year, temp_month, 1);
			selectwichday = selectday.getDay();
			init_calendar(temp_month, selectwichday, temp_year, $datetimepicker);

			$output_input = $(this);
			
			if ($nextdtpicker.css('display') == 'none') {
				$nextdtpicker.fadeIn();
			}

			event.stopPropagation();
		})

		$('html').click(function() {
			$('.datepicker').fadeOut('fast');
			$('.my-select').fadeOut('fast');
		})

		$('.datepicker').click(function(event) {
			event.stopPropagation();
		})

		$calendar_td.click(function() {
			$('.my-select').fadeOut('fast');
			$calendar_td.css('border', '');
			$calendar_td.css('color', '');
			$(this).css('border', '2px solid dodgerblue');
			$(this).css('color', 'black')

			select_standard_year = parseInt($select_year.val());

			select_month = parseInt($select_month.val());
			select_day = $(this).text();

			if($(this).hasClass('not-month')) {
				select_month = (select_day > 15) ? select_month - 1 : select_month + 1;
			}
			if(select_month == 13) {
				select_month = 1
				select_standard_year = select_standard_year + 1;
			}
			if(select_month == 0) {
				select_month = 12;
				select_standard_year = select_standard_year - 1;
			}

			if(select_month < 10) {
				select_month = "0" + select_month;
			}

			if(select_day < 10) {
				select_day = "0" + select_day;
			}

			temp_day = parseInt(select_day);
			temp_month = select_month - 1;

			switch(config.output_year) {
				case 'small':
					temp_year = select_standard_year + 1911;
					break;
				case 'full':
					temp_year = select_standard_year;
					break;
			}

			var temp_output_year = 0;
			var temp_output_str = "";
			if(config.month_year_bar == true) {

				date_string = select_standard_year + config.output_tag + select_month;
			}
			if(config.day_table == true) {
				date_string = date_string + config.output_tag + select_day;
			}

			temp_output_str = date_string;
			if(config.time_bar == true) {
				temp_output_str = temp_output_str + space + time_string;
			}

			$output_input.val(temp_output_str);

			if(config.time_bar == false) {

				$('.datepicker').fadeOut('fast');
			}
		})

		$my_input.click(function() {
			var $div = $(this).next();
			var $scrolldiv = $div.children('div');
			var $tag_li;
			var index;

			$('.my-select').fadeOut('fast')
			var str_display = $div.css('display');
			if(str_display == 'none') {
				$div.fadeIn();
			}

			if($(this).hasClass('select-year')) {

				$year_li.css('background-color', '');
				$year_li.css('color', '');
				$year_li.removeClass('tag');

				for(var i = 0; i < $year_li.length; i++) {
					if($($year_li[i]).text() == $select_year.val()) {

						$($year_li[i]).css('background-color', 'dodgerblue');
						$($year_li[i]).css('color', 'white');
						$($year_li[i]).addClass('tag');
						$tag_li = $($year_li[i]);
						index = i;
						break;
					}
				}

				var li_height = $tag_li.height();
				if(index > 9) {

					$scrolldiv.scrollTop(li_height * index)
				} else {
					$scrolldiv.scrollTop(0)
				}

			}

			if($(this).hasClass('select-month')) {

				$month_li.css('background-color', '');
				$month_li.css('color', '');
				$month_li.removeClass('tag');
				for(var i = 0; i < $month_li.length; i++) {
					if($($month_li[i]).text() == $select_month.val()) {

						$($month_li[i]).css('background-color', 'dodgerblue');
						$($month_li[i]).css('color', 'white');
						$($month_li[i]).addClass('tag');
						$tag_li = $($month_li[i]);
						index = i;
						break;
					}
				}
				var li_height = $tag_li.height();
				if(index > 9) {

					$scrolldiv.scrollTop(li_height * index)
				} else {
					$scrolldiv.scrollTop(0)
				}

			}

			if($(this).hasClass('select-hour')) {
				$hour_li.css('background-color', '');
				$hour_li.css('color', '');
				$hour_li.removeClass('tag');

				for(var i = 0; i < $hour_li.length; i++) {
					if($($hour_li[i]).text() == $('.select-hour').val()) {

						$($hour_li[i]).css('background-color', 'dodgerblue');
						$($hour_li[i]).css('color', 'white');
						$($hour_li[i]).addClass('tag');
						$tag_li = $($hour_li[i]);
						index = i;
						break;
					}
				}
				var li_height = $tag_li.height();
				if(index > 9) {

					$scrolldiv.scrollTop(li_height * index)
				} else {
					$scrolldiv.scrollTop(0)
				}

			}

			if($(this).hasClass('select-min')) {
				$min_li.css('background-color', '');
				$min_li.css('color', '');
				$min_li.removeClass('tag');

				for(var i = 0; i < $min_li.length; i++) {
					if($($min_li[i]).text() == $('.select-min').val()) {

						$($min_li[i]).css('background-color', 'dodgerblue');
						$($min_li[i]).css('color', 'white');
						$($min_li[i]).addClass('tag');
						$tag_li = $($min_li[i]);
						index = i;
						break;
					}
				}
				var li_height = $tag_li.height();
				if(index > 9) {

					$scrolldiv.scrollTop(li_height * index)
				} else {
					$scrolldiv.scrollTop(0)
				}
			}

			if($(this).hasClass('select-sec')) {
				$sec_li.css('background-color', '');
				$sec_li.css('color', '');
				$sec_li.removeClass('tag');

				for(var i = 0; i < $sec_li.length; i++) {
					if($($sec_li[i]).text() == $('.select-sec').val()) {

						$($sec_li[i]).css('background-color', 'dodgerblue');
						$($sec_li[i]).css('color', 'white');
						$($sec_li[i]).addClass('tag');
						$tag_li = $($sec_li[i]);
						index = i;
						break;
					}
				}
				var li_height = $tag_li.height();
				if(index > 9) {

					$scrolldiv.scrollTop(li_height * index)
				} else {
					$scrolldiv.scrollTop(0)
				}
			}

		})

		$timepicker_li.click(function() {
			var $input = $(this).parent().parent().parent().parent().find("input");
			var $ul = $(this).parent();
			var time_status = $ul.attr('class');
			var $par_div = $(this).parent().parent().parent();
			var $time_status_li = $datetimepicker.find('.' + time_status + ' li');
			$time_status_li.css('background-color', '');
			$time_status_li.css('color', '');

			switch(time_status) {
				case 'ul_hour':
					time.hour = $(this).text();
					break;
				case 'ul_min':
					time.min = $(this).text();
					break;
				case 'ul_sec':
					time.sec = $(this).text();
					break;
			}

			$input.val($(this).text());

			$(this).css('color', 'white');
			$(this).css('background-color', 'dodgerblue');

			time_string = time.hour + ":" + time.min + ":" + time.sec;
			$par_div.fadeOut('fast')

			if(config.time_bar == true && config.month_year_bar == false && config.day_table == false) {
				$output_input.val(time_string);
			} else {
				$output_input.val(date_string + space + time_string);
			}

		})


	}

	$.fn.datetimepicker = init_datatimepicker;
})(jQuery);


function init_year_month($select_monthobj, $select_yearobj) {
	if((today_month + 1) < 10) {
		$select_monthobj.val('0' + (today_month + 1))
	} else {
		$select_monthobj.val((today_month + 1))
	}

	$select_yearobj.val(today_standard_year);
}

function selected_li_css($li) {
	$li.css('background-color', 'dodgerblue');
	$li.css('color', 'white');
}

function init_select_year(year, $yearobj) {

	for(var i = (year - 10); i < year + 10; i++) {
		var $li = $('<li>' + i + '</li>');

		if(i == year) {
			selected_li_css($li)
		}
		$yearobj.append($li)
	}

}

function init_select_month(today_month, $monthobj) {
	var show_month = today_month + 1;

	for(var i = 1; i < 13; i++) {
		var str = (i < 10) ? 　('0' + i) : i;
		var $li = $('<li>' + str + '</li>');

		if(i == show_month) {
			selected_li_css($li)
		}
		$monthobj.append($li)
	}
}

function init_select_hour($hourobj) {

	for(var i = 0; i < 24; i++) {
		var str = (i < 10) ? 　('0' + i) : i;
		var $li = $('<li>' + str + '</li>');
		if(i == 0) {
			selected_li_css($li)
		}

		$hourobj.append($li)
	}

}

function init_select_min($minobj) {

	for(var i = 0; i < 60; i++) {
		var str = (i < 10) ? 　('0' + i) : i;
		var $li = $('<li>' + str + '</li>');
		if(i == 0) {
			selected_li_css($li)
		}

		$minobj.append($li)
	}
}

function init_select_sec($secobj) {
	for(var i = 0; i < 60; i++) {
		var str = (i < 10) ? 　('0' + i) : i;
		var $li = $('<li>' + str + '</li>');
		if(i == 0) {
			selected_li_css($li)
		}
		$secobj.append($li)
	}
}

function init_date_output($obj, config) {
	time_string = time.hour + ':' + time.min + ':' + time.sec;
	var temp_output_year = 0;
	var temp_output_str = "";
	if(config.month_year_bar == true) {

		switch(config.output_year) {
			case 'small':
				temp_output_year = today_smallyear;
				break;
			case 'full':
				temp_output_year = today_smallyear + 1911;
				break;
		}
		date_string = temp_output_year + config.output_tag + (today_month + 1);
		temp_output_str = date_string;
	}
	if(config.day_table == true) {
		today_day = today_day < 10 ? '0' + today_day : today_day;
		date_string = date_string + config.output_tag + today_day;
		temp_output_str = date_string;
		if(config.time_bar == true) {
			temp_output_str = temp_output_str + space + time_string;
		}
	}

	if(config.time_bar == true && config.day_table == false && config.month_year_bar == false) {
		temp_output_str = time_string;
	}
	$obj.val(temp_output_str);
}

function isLeapYear(fullyear) {
	if(fullyear % 100 == 0) {
		month_days[1] = (fullyear % 400 == 0) ? 29 : 28;

	} else {
		month_days[1] = (fullyear % 4 == 0) ? 29 : 28;
	}

}

function init_calendar(month, wday, year, $datepickerobj) {
	isLeapYear(year);

	var $td42 = $datepickerobj.find('.calendar td');
	remove_blue_mark_td($td42);
	$td42.text("");
	$td42.removeClass('not-month');
	$td42.css('background-color', '')
	$td42.css('color', '')
	for(var i = 0; i < month_days[month]; i++) {
		$($td42[0 + i + wday]).text(0 + i + 1);
		if(year == today_fullyear && month == today_month && (i + 1) == parseInt(today_day)) {
			$($td42[0 + i + wday]).css('background-color', 'rgb(200,200,200)');
		}
	}

	setPrevNextMonth(month);

	prev_month_start_day = 0;
	prev_month_start_day = month_days[prev_month] - wday + 1;

	for(var i = 0; i < wday; i++) {
		$($td42[i]).text(prev_month_start_day++)
		$($td42[i]).addClass('not-month')
	}

	var next_month_td_index = wday + month_days[month];
	var next_month_start_day = 1;

	for(var i = next_month_td_index; i < 43; i++) {
		$($td42[i]).text(next_month_start_day++)
		$($td42[i]).addClass('not-month')
	}

	var total_td_index = wday + month_days[month] - 1;
	if(total_td_index < 35) {
		$('.tr-6').css("display", 'none');
	} else {
		$('.tr-6').css("display", '');
	}

	for(var i = 0; i < $td42.length; i++) {
		var $td = $($td42[i]);
		var $td_day = parseInt($td.text());

		if($td.hasClass('not-month')) {

			if($td_day > 15) {

				if(month == 0) {
					if($td_day == temp_day && temp_month == prev_month && temp_year == (year - 1)) {
						$td.css('border', '2px solid dodgerblue');
						$td.css('color', 'black');
					}
				}
				if(month != 0) {
					if($td_day == temp_day && temp_month == prev_month && temp_year == year) {

						$td.css('border', '2px solid dodgerblue');
						$td.css('color', 'black');
					}
				}

			}

			if($td_day < 15) {
				if(month == 11) {
					if($td_day == temp_day && temp_month == next_month && temp_year == (year + 1)) {

						$td.css('border', '2px solid dodgerblue');
						$td.css('color', 'black');
					}
				}
				if(month != 11) {
					if($td_day == temp_day && temp_month == next_month && temp_year == year) {

						$td.css('border', '2px solid dodgerblue');
						$td.css('color', 'black');
					}
				}

			}

		} else {
			if($td_day == temp_day && month == temp_month && year == temp_year) {
				$td.css('border', '2px solid dodgerblue');
				return;
			}

		}

	}

}

function setPrevNextMonth(month) {
	prev_month = month - 1;
	next_month = month + 1;

	if(prev_month == (-1)) {
		prev_month = 11
	}
	if(next_month == 12) {
		next_month = 0;
	}
}

function remove_blue_mark_td($td42obj) {
	$td42obj.css('border', '')
	$td42obj.css('white', '')
}

function noday_output(config, $select_yearobj, $select_monthobj) {
	if(config.day_table === false) {

		var output_year = parseInt($select_yearobj.val());
		var output_month = parseInt($select_monthobj.val());

		output_month = (output_month < 10) ? "0" + output_month : output_month;

		date_string = output_year + config.output_tag + output_month;
		$output_input.val(date_string)
	}
}