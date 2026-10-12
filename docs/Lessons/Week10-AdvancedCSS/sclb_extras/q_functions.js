/**
 *  ==================================================
 *  SoftChalk LessonBuilder
 *  Copyright 2003-2016 SoftChalk LLC
 *  All Rights Reserved.
 *
 *  http://www.softchalk.com
 *  ==================================================
 *
 *  File date: 12/14/2016
 */


 /**
 *	From lesson.js file:
 *
 *  tableToggle_array=new Array();
 *  feed=new Array();
 *  f_right=new Array();
 *  f_wrong=new Array();
 *  f_done=new Array();
 *
 *  scoreQ[]	indicates whether to include question in scoring
 *  q_done[]	indicates whether the question has been attempted to be answered
 *
 *	"q_num"     form and question number (which are the same)
 *	"mc_items"  number of multiple choice/matching items - value is 0 for short answer, 2 for true-false
 *
 *	"q_type"
 *
 *  MULTIPLE_CHOICE = 1;
 *  TRUE_FALSE = 2;
 *  MULTIPLE_ANSWER = 3;
 *  SHORT_ANSWER = 4;
 *  MATCHING = 5;
 *  ORDERING = 6;
 *
 * 	ACTIVITY = 7;
 *
 *  ESSAY = 8;
 *
 *
 *  **********************************************
 *
 *	In lessons that have no quizpoppers:
 *  scoreQ[] is defined in header of page.
 *
 *  **********************************************
 *
 */
/*
 var lesson_qp_json = null;
 $.getJSON('sclb_extras/lesson_qp.json').done(function (data) {
	 lesson_qp_json = data;
 }).fail(function() { console.log('failed to load lesson_qp.json'); });
*/
var lesson_qp_json = $.parseJSON(lesson_qp_format_json);

// course environment check
var courseExists = false; // keep for scorecenter-7.min.js

var QUIZ_GROUP_FIX_NOVEMBER_2016 = true;


var IMAGE_HTML_CHECK = "<br /><img src=\"check.png\" alt=\"correct\" style=\"vertical-align:middle;\">&nbsp;";
var IMAGE_HTML_WRONG = "<br /><img src=\"wrong.png\" alt=\"incorrect\" style=\"vertical-align:middle;\">&nbsp;";

var ALPHABET_DOTS = ["a.","b.","c.","d.","e.","f.","g.","h.","i.","j.","k.","l.","m.","n.","o.","p.","q.","r.","s.","t","u.","v.","w.","x.","y.","z."]


var lessonStartTime = 0;


var scorm = false					//unless overriden by scorm.js
var attempted_points = 0; //total points possible on questions attempted to be answered so far
var total_points = 0;			//total points possible for all questions to be scored for entire lesson
var my_score = 0;					//current cumulative number of points scored on all questions answered
var totalQ = 0;						//total questions to be scored for this lesson
var attempted_q = 0;			//total number of questions attempted to answer

var file_name = location.href.substring((location.href.lastIndexOf('/') + 1),location.href.length);

var q_value = new Array();				//gets value of variable q_value from lesson.js and converts to value in this array
var q_text = new Array();         //gets value of variable thequestion from lesson.js and converts to value in this array

var groupQData = new Array();     // used in scorecenter7-min.js
var essayAnswers = new Array();

var this_question_score = new Array();

/*
	items to store:

	lessonStartTime        int      (finished)
	attempted_points       int      (finished)
	my_score               float    (finished)
	attempted_q            int      (finished)
	this_question_score    float    (finished)

	groupFinished          boolean  (finished)

	groupQData             string   (finished)

	essayAnswers           string   (finished)
	feed                   boolean  (finished)
	f_done                 boolean  (finished)
	q_done                 boolean  (finished)
	tableToggle_array      boolean  (finished)

	q_done_a               boolean  (finished)
	score_a                float    (finished)

	* All calls to sessionStorage are in try/catch because IE does not allow access to storage from local html files.
	* This allows lessons to function when viewed locally in IE, although the data will not be available between pages.
*/

var _hereIAm = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
var _lastSlash = _hereIAm.lastIndexOf("/"); // remove the html page
var _lessonLocation = _hereIAm.substring(0, _lastSlash);

var _storedString = null;

try {
	_storedString = sessionStorage.lessonLocation;

	if ((_storedString != null) && (_storedString == _lessonLocation)) {
		_storedString = sessionStorage.lessonStartTime;
		if (_storedString != null) {
			lessonStartTime = parseInt(_storedString);
		}
		else {
			lessonStartTime = new Date().getTime();
			sessionStorage.lessonStartTime = lessonStartTime.toString();
		}

		_storedString = sessionStorage.attempted_points;
		if (_storedString != null) {attempted_points = parseInt(_storedString);}

		_storedString = sessionStorage.my_score;
		if (_storedString != null) {my_score = parseFloat(_storedString);}

		_storedString = sessionStorage.attempted_q;
		if (_storedString != null) {attempted_q = parseInt(_storedString);}
	}
	else {
		sessionStorage.clear(); // safety
		lessonStartTime = new Date().getTime();
		sessionStorage.lessonStartTime = lessonStartTime.toString();
		sessionStorage.lessonLocation = _lessonLocation;
	}
} catch(err) {}



// determine which questions are scored
for (var i = 1; i <= (scoreQ.length); i++) {
  this_question_score[i] = 0;
	q_value[i] = 0;
	q_text[i] = "";
	
  if (scoreQ[i] == "yes") {
	  totalQ++;
    q_value[i] = eval("q_value" + i);
    q_text[i] = eval("theQuestion" + i);
    total_points += q_value[i];

		try {
			_storedString = sessionStorage.getItem("questionScore" + i);
		} catch(err) {}
		if (_storedString != null) {this_question_score[i] = parseFloat(_storedString);}   // this_question_score
	}
	else if (scoreQ[i] == "no") {
		q_text[i] = eval("theQuestion" + i);
	}

	try {
		_storedString = sessionStorage.getItem("q_done" + i);
		if (_storedString != null) {q_done[i] = (_storedString == "true");}                // q_done

		_storedString = sessionStorage.getItem("f_done" + i);
		if (_storedString != null) {f_done[i] = (_storedString == "true");}                // f_done

		_storedString = sessionStorage.getItem("feed" + i);
		if (_storedString != null) {feed[i] = (_storedString == "true");}                  // feed

		_storedString = sessionStorage.getItem("tableToggle_array" + i);
		if (_storedString != null) {tableToggle_array[i] = (_storedString == "true");}     // tableToggle_array

		_storedString = sessionStorage.getItem("essayAnswers" + i);
		if (_storedString != null) {essayAnswers[i] = _storedString;}                      // essayAnswers

		_storedString = sessionStorage.getItem("groupQData" + i);
		if (_storedString != null) {groupQData[i] = _storedString;}                        // groupQData
	} catch(err) {}
}


// determine which activities are scored.
for (var i = 1; i <= (scoreQa.length); i++) {
  if (scoreQa[i]) {
	  totalQ++;
    total_points += eval("a_value" + i);
	}

	try {
		_storedString = sessionStorage.getItem("q_done_a" + i);
		if (_storedString != null) {q_done_a[i] = (_storedString == "true");}              // q_done_a

		_storedString = sessionStorage.getItem("score_a" + i);
		if (_storedString != null) {score_a[i] = parseFloat(_storedString);}               // score_a
	} catch(err) {}
}


// check for stored group data
try {
	for (var i = 1; i <= (groupFinished.length); i++) {
		_storedString = sessionStorage.getItem("groupFinished" + i);
		if (_storedString != null) {groupFinished[i] = (_storedString == "true");}         // groupFinished
	}
} catch(err) {
	// do nothing, there is no quiz group in this lesson
}



// called by single quizpoppers

function check_q(q_num, mc_items, q_type, allow_retry) {
	check_qpq(q_num, mc_items, q_type, allow_retry, true, true);
}



// called by quiz groups

function check_qpq(q_num, mc_items, q_type, allow_retry, allow_inline_feedback, allow_score_win) {

	if (!q_done[q_num]) {
		attempted_q++;
	  attempted_points = attempted_points + q_value[q_num];
	  q_done[q_num] = true;

		try {
			sessionStorage.attempted_q = attempted_q.toString();
			sessionStorage.setItem("q_done" + q_num, "true");
			sessionStorage.attempted_points = attempted_points.toString();
		} catch(err) {}
	}
	else if (allow_retry) {
		my_score -= this_question_score[q_num];
		if (my_score < 0) {
			my_score = 0;
		}
	}
	else {
		myWin(qfLangBeenAnswered, "", q_num, q_type, "", allow_inline_feedback, allow_score_win);
		return;
	}

	var correct = "no";
	var feedback = "";
	var student_answer = "";
	var fieldno = document.getElementsByName("q" + q_num); // input name
	var right_answers = eval("right_answers" + q_num);
	var showCorrect = (eval("showCorrect" + q_num) == "yes");
	var this_q_score = 0;
	var showFeedbackIndividual = eval("showFeedbackIndividual" + q_num) == "yes";
	var individual_feedback = eval("feedbackIndividual" + q_num);

	var caseSensitiveValue = eval("case_sensitive" + q_num);
	var caseSensitive = caseSensitiveValue != null && caseSensitiveValue != undefined && caseSensitiveValue == "true";

	var caseNormalizer = (function() {
		if (caseSensitive) return function(val) { return getTrimmed(val); };
		else               return function(val) { return getTrimmed(val.toUpperCase()); };
	})();


	switch (q_type) {

		// MULTIPLE_CHOICE, TRUE_FALSE
		case 1:
		case 2:
			var answer_index = null;
			for (var i = 0; i < mc_items; i++) {
				if (fieldno[i].checked) {
					student_answer = fieldno[i].value;
					answer_index = i;
					break;
				}
			}

	    if (student_answer.toUpperCase() == right_answers[0].toUpperCase()) {
	    	feedback = eval("feedbackRight" + q_num);
	    	correct = "yes";
	    }
	    else {
	    	feedback = eval("feedbackWrong" + q_num);
	      if (showCorrect) {
	        feedback += "<br />" + qfLangFBmctf + " " + right_answers[0];
	      }
			}
			if(showFeedbackIndividual && answer_index !== null && individual_feedback[answer_index]) {
				feedback += "<br />" +  individual_feedback[answer_index];
			}
			break;

		// MULTIPLE_ANSWER
		case 3:
			var selected_items = new Array();
			var selected_indices = new Array();
			var correct_selections = new Array();

	  	for (var i = 0; i < mc_items; i++) {
	      if (fieldno[i].checked) {
					selected_items[selected_items.length] = fieldno[i].value;
					selected_indices[selected_indices.length] = i;
	      }
	    }

	    var correct_items = right_answers[0].split(",");
	    for (var i = 0; i < selected_items.length; i++) {
	      for (var j = 0; j < correct_items.length; j++) {
		      if (selected_items[i] == correct_items[j]) {
			      correct_selections[correct_selections.length] = selected_items[i];
		      }
	      }
	    }

			// maybe compute partial points
			if (eval('partial_credit' + q_num) && q_value[q_num] > 0 && correct_selections.length > 0) {
				var pointsPerItem = q_value[q_num] / correct_items.length;
				var rightPoints = correct_selections.length * pointsPerItem;

				if (selected_items.length > correct_selections.length) { // some selected items are wrong
					var numWrong = selected_items.length - correct_selections.length;
					var wrongPoints = numWrong * pointsPerItem;
					this_q_score = rightPoints - wrongPoints;
					if (this_q_score < 0)
						this_q_score = 0;
					else
						this_q_score = Math.round(this_q_score * 10) / 10; // round to 1 decimal
				}
				else if (correct_selections.length < correct_items.length) { // not all correct items were selected
					this_q_score = Math.round(rightPoints * 10) / 10; // round to 1 decimal
				}
			}

	    if (correct_selections.length == correct_items.length) {
	    	if (selected_items.length > correct_selections.length) {
			  	correct = "partial";
			  	feedback = eval("feedbackPartial" + q_num);
					if (showCorrect) {
						feedback += "<br />" + qfLangFBmaOnly + " " + correct_selections;
					}
			  }
			  else {
		    	correct = "yes";
					feedback = eval("feedbackRight" + q_num);
	    	}
	    }
	    else if (correct_selections.length > 0) {
				correct = "partial";
		    feedback = eval("feedbackPartial" + q_num);
				if (showCorrect) {
					feedback += "<br />" + qfLangFBmasaWrong + " ";
					for (var i = 0; i < correct_items.length; i++) {
						feedback += correct_items[i];
						if (i < correct_items.length - 1) {
							feedback += ", ";
						}
					}
				}
	    }
			else {
				feedback = eval("feedbackWrong" + q_num);
				if (showCorrect) {
					feedback += "<br />" + qfLangFBmasaWrong + " ";
					for (var i = 0; i < correct_items.length; i++) {
						feedback += correct_items[i];
						if (i < correct_items.length - 1) {
							feedback += ", ";
						}
					}
				}
			}

	    student_answer = selected_items;
			if(!showFeedbackIndividual) break;

			for(var selected_index_index = 0; selected_index_index < selected_indices.length; selected_index_index++){
				var selected_index = selected_indices[selected_index_index];
				if(!individual_feedback[selected_index]) continue;
				feedback += "<br />" + ALPHABET_DOTS[selected_index] + " " + individual_feedback[selected_index];
			}
			break;

		// SHORT_ANSWER
		case 4:
			fieldno = document.getElementById("q" + q_num);
			student_answer = fieldno.value;

			for (var i = 0; i < right_answers.length; i++) {
				if (caseNormalizer(student_answer) == caseNormalizer(right_answers[i])) {
					correct = "yes";
					feedback = eval("feedbackRight" + q_num);
					break;
				}
			}

			if (correct != "yes") {
				feedback = eval("feedbackWrong" + q_num);
				if (showCorrect) {
					feedback += "<br />" + qfLangFBmasaWrong + " " + right_answers;
				}
			}
			break;

		// MATCHING, ORDERING
		case 5:
		case 6:
			var correct_selections = new Array();
	    var correct_answers = new Array();
	    var student_answers = new Array();

	  	for (var i = 0; i < mc_items; i++) {
	  		var option_num = i + 1;
	  	  fieldno = document.getElementById("q" + q_num + "_" + option_num);
	  	  var s_index = fieldno.options.selectedIndex;
	  	  var ra_index = right_answers[i];

	  	  student_answers[i] = fieldno.options[s_index].value;
	  	  correct_answers[i] = " " + option_num + " = " + fieldno.options[ra_index].value;

	      if(s_index == ra_index) {
	        correct_selections[correct_selections.length] = option_num;
	      }
	    }

	    if (correct_selections.length == right_answers.length) {
			feedback = eval("feedbackRight" + q_num);
	    	correct = "yes";
	    }
	    else if (correct_selections.length > 0) {
	    	correct = "partial";
	      feedback = eval("feedbackPartial" + q_num);
				if (showCorrect) {
	      	feedback += "<br />" + qfLangFBmatorPartial + " ";
					for (var i = 0; i < correct_selections.length; i++) {
						feedback += "#" + correct_selections[i];
						if (i < correct_selections.length - 1) {
							feedback += ", ";
						}
					}
	      }

				if (eval('partial_credit' + q_num) && q_value[q_num] > 0) {
					var pointsPerItem = q_value[q_num] / right_answers.length;
					this_q_score = pointsPerItem * correct_selections.length;
					this_q_score = Math.round(this_q_score * 10) / 10; // round to 1 decimal
				}
			}
	    else {
	      feedback = eval("feedbackWrong" + q_num);
	      if (showCorrect) {
	      	feedback += "<br />" + qfLangFBmatorWrong + " ";
					for (var i = 0; i < correct_answers.length; i++) {
						feedback += "#" + correct_answers[i];
						if (i < correct_answers.length - 1) {
							feedback += ", ";
						}
					}
	      }
	    }

	    student_answer = student_answers;
			break;

		// Essay
		case 8:
			correct = "yes";
			fieldno = document.getElementById("q" + q_num);
			essayAnswers[q_num] = fieldno.value.replace(/\n/g, "<br />");
			try {
				sessionStorage.setItem("essayAnswers" + q_num, essayAnswers[q_num]);
			} catch(err) {}
			break;

		// SENTENCE COMPLETION
		case 9:
	    var correct_answers = new Array();
			var student_answers = new Array();
			var _question = lesson_qp_json.questions[q_num];
			var counter = 0;

			for (var i = 0; i < mc_items; i++) {
				var option_num = i + 1;
				fieldno = document.getElementById("q" + q_num + "_" + option_num);
				student_answers[i] = fieldno.options[fieldno.selectedIndex].text;
				var answer_ref = _question.bracket_manager.order[i];
				var answer_set = _question.bracket_manager.hash[answer_ref];
				for ( var j = 0; j < answer_set.answers.length; j++ ) {
					var answer_option = answer_set.answers[j];
					if (answer_option.correct) correct_answers[i] = answer_option.answer;
					if (student_answers[i] == answer_option.answer) {
						if (answer_option.correct) {
							counter++;
							feedback += IMAGE_HTML_CHECK;
						}
						else {
							feedback += IMAGE_HTML_WRONG;
						}
						feedback += student_answers[i];
						if (answer_option.feedback) {
							feedback += ' - ' + answer_option.feedback;
						}
					}
				}
			}

			if (counter == mc_items) {
				correct = "yes";
				if (_question.feedbackRight) feedback += '<br/>' + _question.feedbackRight;
			}
			else if (counter > 0) {
				correct = "partial";
				if (_question.feedbackPartial) feedback += '<br/>' + _question.feedbackPartial;
				if (_question.partial_credit && q_value[q_num] > 0) {
					var pointsPerItem = q_value[q_num] / mc_items;
					this_q_score = pointsPerItem * counter;
					this_q_score = Math.round(this_q_score * 10) / 10; // round to 1 decimal
				}
			}
			else {
				if (_question.feedbackWrong) feedback += '<br/>' + _question.feedbackWrong;
			}

			if (showCorrect && correct != "yes") {
				feedback += "<br />" + qfLangFBmatorWrong + " ";
				for (var i = 0; i < correct_answers.length; i++) {
					feedback += correct_answers[i];
					if (i < correct_answers.length - 1) {
						feedback += ", ";
					}
				}
			}

			student_answer = student_answers;
			break;

		// MULTIPLE BLANKS
		case 10:
			var _question = lesson_qp_json.questions[q_num];
			var student_answers = new Array();
			var counter = 0;

			for (var i = 0; i < mc_items; i++) {
				var option_num = i + 1;
				fieldno = document.getElementById("q" + q_num + "_" + option_num);
				student_answers[i] = getTrimmed(fieldno.value);
				var normalStudentA = caseNormalizer(student_answers[i]);
				var answer_ref = _question.bracket_manager.order[i];
				var answer_set = _question.bracket_manager.hash[answer_ref];
				var found = false;
				for ( var j = 0; j < answer_set.answers.length; j++ ) {
					var answer_option = answer_set.answers[j];
					var normalA = caseNormalizer(answer_option.answer);
					if (normalStudentA == normalA) {
						found = true;
						break;
					}
				}
				if (found) {
					counter++;
					feedback += IMAGE_HTML_CHECK + student_answers[i];
				}
				else {
					feedback += IMAGE_HTML_WRONG + student_answers[i];
					if (showCorrect) {
						feedback += " [" + qfLangFBmatorWrong + " ";
						for ( var j = 0; j < answer_set.answers.length; j++ ) {
							feedback += answer_set.answers[j].answer;
							if (j < answer_set.answers.length - 1) {
								feedback += ", ";
							}
						}
						feedback += "]";
					}
				}
			}

			if (counter == mc_items) {
				correct = "yes";
				if (_question.feedbackRight) feedback += '<br/>' + _question.feedbackRight;
			}
			else if (counter > 0) {
				correct = "partial";
				if (_question.feedbackPartial) feedback += '<br/>' + _question.feedbackPartial;
				if (_question.partial_credit && q_value[q_num] > 0) {
					var pointsPerItem = q_value[q_num] / mc_items;
					this_q_score = pointsPerItem * counter;
					this_q_score = Math.round(this_q_score * 10) / 10; // round to 1 decimal
				}
			}
			else {
				if (_question.feedbackWrong) feedback += '<br/>' + _question.feedbackWrong;
			}

			student_answer = student_answers;
			break;

		// FEEDBACK QUESTION
		case 11:
			correct = "yes";
			var answer_index = null;
			for (var i = 0; i < mc_items; i++) {
				if (fieldno[i].checked) {
					student_answer = fieldno[i].value;
					answer_index = i;
					break;
				}
			}

			feedback += "<br />" +  individual_feedback[answer_index];
			break
	}

	var correct_text = "";

	if (correct == "yes") {
		if (q_type == 8) {
			correct_text = "essay";
			if (showCorrect) {
			  feedback = eval('feedbackRight' + q_num);
			}
			else {
				feedback = "" + qfLangEssayFeedback;
			}
		}
		else {
			correct_text = "correct";
			this_q_score = q_value[q_num];
		}
	}
	else if (correct == "partial") correct_text = "partially correct";
	else if (correct == "no") correct_text = "incorrect";

	my_score += this_q_score;
	this_question_score[q_num] = this_q_score;
	groupQData[q_num] = this_q_score + "*#*" + correct_text + "*#*" + student_answer + "*#*" + q_text[q_num];

	try {
		sessionStorage.my_score = my_score.toString();
		sessionStorage.setItem("questionScore" + q_num, this_q_score.toString());
		sessionStorage.setItem("groupQData" + q_num, groupQData[q_num]);
	} catch(err) {}

 	myWin(feedback, correct, q_num, q_type, student_answer, allow_inline_feedback, allow_score_win, this_q_score);
}


function myWin(feedback, correct, q_num, q_type, student_answer, allow_inline_feedback, allow_score_win, this_q_points) {

	if (allow_inline_feedback) {
		setShow("feed" + q_num, false);
		setShow("f_done" + q_num, false);

		var checkWrong = "";
		if (q_type != 8 && q_type != 9 && q_type != 10 && q_type != 11) {
			if (correct == "yes")
				checkWrong = IMAGE_HTML_CHECK;
			else
				checkWrong = IMAGE_HTML_WRONG;
		}

		document.getElementById("f_done" + q_num).innerHTML = checkWrong + feedback;
		f_done[q_num] = true;
		showHideFeedback(q_num, "f_done");

		if (feedback != qfLangBeenAnswered && q_value[q_num] > 0 && q_type != 8) {
			document.getElementById("feed" + q_num).innerHTML = "<br />" + qfLangPoints + " <strong>" + this_q_points + "</strong>";
			feed[q_num] = true;
			showHideFeedback(q_num, "feed");
		}
	}

	// show the floating score window
	if (allow_score_win && q_value[q_num] > 0) {
		var scoreSpan = document.getElementById("my_score_span");
		if (scoreSpan) {
			document.getElementById("floatingscore").style.visibility = "visible";
			scoreSpan.innerHTML = qfLangFloat + "<br /><strong>" + my_score + " / " + total_points + "</strong>";
		}
	}

	var mobileScoreSpan = document.getElementById("my_mobile_score_span");
	if (mobileScoreSpan) {
		mobileScoreSpan.innerHTML = qfLangFloat + " " + my_score + "/" + total_points;
	}


  if (scorm && q_type != 8 && q_type != 11 && feedback != qfLangBeenAnswered) {
  	var act_type = 0;
  	var act_percent = 0;
  	sendScorm(q_num, q_type, act_type, student_answer, correct, act_percent);
  }
}



function print_essay(q_num) {
	check_q(q_num, 0, 8, true);

	var userName = "";
	userName = prompt(qfLangNameAlert, " ");
	userName = getTrimmed(userName);

	// handles if users type a single quotes in their names (070312)
	var apos = userName.indexOf("'");
	while (apos != -1) {
		userName = userName.replace(/\'/,"&apos;");
		apos = userName.indexOf("'");
	}

	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
  var year = currentTime.getFullYear();

	// format for display - include student name, question, and response
	winPrint = window.open("", 'pic', 'width=700,height=500,resizable=yes,scrollbars=yes,menubar=yes');
	winPrint.document.open();
  winPrint.document.write("<html>\n<head>\n<title> Essay Response </title>\n" +
								 "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />\n" +

								 "<style type='text/css'>@media print{input,hr{display:none;}}</style>\n" +
								 "</head>\n" +

								 "<form><input type=button value='Print'onClick='window.print();window.close();'/> <input type=button value='Cancel'onClick='window.close();return false;' /></form>\n" +

								 "<body>\n" +
								 "<p style=\"text-align: right;\">" + userName + "<br />" +
								 month + "/" + day + "/" + year + "</p><br />\n" +
								 "<p style=\"text-align: center;\"><strong>" + q_text[q_num] + "</strong></p><br /><br />\n" +
								 "<p>" + essayAnswers[q_num] + "</p>" +
								 "</body>\n</html>\n");

	winPrint.document.close();
}


function clearEssayFeedback(essayNo) {
	var span = document.getElementById("qpspacercheck" + essayNo);
  if (essayAnswers[essayNo]) {
		span.innerHTML = "";
    showHideFeedback(essayNo, "f_done");
  }
}


function toggletable(question) {               // show/hide question
	var num = question.substring(10);            // remove prefix "quizpopper"
  if (tableToggle_array[num]) {
    tableToggle_array[num] = false;
    setShow(question, false);
  }
  else {
    tableToggle_array[num] = true;
    setShow(question, true);
  }

	try {
		sessionStorage.setItem("tableToggle_array" + num, tableToggle_array[num].toString());
	} catch(err) {}
}


function showHideFeedback(q_num, arrayName) {       // used only in this file
	if (eval(arrayName + "[" + q_num + "]")) {
		setFeedbackState(q_num, arrayName, false);
		setShow(arrayName + q_num, true);
	}
	else {
		setFeedbackState(q_num, arrayName, true);
		setShow(arrayName + q_num, false);
	}
}


function setFeedbackState(q_num, arrayName, state) {
	if (arrayName == "feed") {
		feed[q_num] = state;
		try {
			sessionStorage.setItem("feed" + q_num, state.toString());
		} catch(err) {}
	}
	else if (arrayName == "f_done") {
		f_done[q_num] = state;
		try {
			sessionStorage.setItem("f_done" + q_num, state.toString());
		} catch(err) {}
	}
}


function setShow(elemId, show) {
	var elem = document.getElementById(elemId);
	elem.style.display = (show) ? 'block' : 'none';
}


function hint(q_num) {
	my_hint = eval("hint" + q_num);

	setShow("feed" + q_num, false);
	setShow("f_done" + q_num, false);
	document.getElementById("f_done" + q_num).innerHTML = my_hint;
	f_done[q_num] = true;
	showHideFeedback(q_num, "f_done");
}


function quit_lesson() {
	if (scorm) {
    ScormOnunload();
	}
	else {
		window.opener = top;
  	window.close();
	}
}


function getLessonTime() {
  var lessonTotalTime = "0";
  if (lessonStartTime != 0) {
  	var currentDate = new Date().getTime();
    var elapsed_Seconds = ((currentDate - lessonStartTime) / 1000);
    if (elapsed_Seconds < 60) {
      lessonTotalTime = Math.round(elapsed_Seconds) + " seconds";
    }
    else if (elapsed_Seconds > 3600) {
    	var whole_hours = Math.round(elapsed_Seconds / 3600);
    	var whole_secs = (whole_hours * 3600);
    	var rem_minutes = (elapsed_Seconds - whole_secs) / 60;
    	rem_minutes = Math.round(rem_minutes);
    	if (rem_minutes > 0) {
      	lessonTotalTime = whole_hours + " hours and " + rem_minutes + " minutes";
    	}
    	else {
    		lessonTotalTime = whole_hours + " hours";
    	}
		}
		else {
			lessonTotalTime = Math.round(elapsed_Seconds / 60) + " minutes";
  	}
  }
  return lessonTotalTime;
}


function getEssays() {
	var allEssays = "";

	for (var q = 1; q <= (q_item); q++) {
		if (essayAnswers[q] != undefined) {
			allEssays += "<br />" + "<strong>" + q_text[q] + "</strong>" + "<br /><br />" + essayAnswers[q] + "<br />";
		}
  }
	return allEssays;
}


function lessonReport(which) {
	var userName = document.send_form.user_name.value;
	userName = getTrimmed(userName);

	if (userName == "") {
		alert(qfLangNameAlert);
		document.send_form.user_name.focus();
		return false;
	}

	// handles if users type a single quotes in their names (070312)
	var apos = userName.indexOf("'");
	while (apos != -1) {
		userName = userName.replace(/\'/,"&apos;");
		apos = userName.indexOf("'");
	}

	// need this "if" statement for a forced frames environment
	// when there are no points, i.e. teacher wants a cert.
	// otherwise total_score would be NaN
  var total_score = 0;
  if (my_score > 0) {
  	total_score = Math.round((my_score / total_points) * 100);
  }

  if (which == "email") {
  	document.send_form.action = "https://softchalk.com/send_score/send_score_v6.cgi";
  	document.send_form.method = "post";
	  document.send_form.my_attempted_points.value = attempted_points;
	  document.send_form.my_score.value = total_score;
	  document.send_form.my_time_spent.value = getLessonTime();
	  document.send_form.total_points.value = total_points;
	  document.send_form.my_scored_points.value = my_score;

	  var allEssays = getEssays();
	  if (allEssays.length > 0) {
		  document.send_form.essay.value = "Essay Responses:<br />" + allEssays;
	  }

	  document.send_form.recipient.value = qfRecipient;
	  document.send_form.submit();
		return true;
  }

	if (which == "certificate" && (total_score < passing_score)) {
		alert(qfLangScoreAlertOne + " " + total_score + "%\n" +
						qfLangScoreAlertTwo + " " + passing_score + "%.\n\n" +
						qfLangScoreAlertThree);
		return false;
	}

  var winTitle;
  var getstring;
  var flName = which;

  if (which == "certificate") {
    winTitle = qfLangCertTitle;
    getstring = "&name=" + userName;
  }
  else {
  	winTitle = qfLangSumTitle;
		getstring = "&name=" + userName + "&points=" + total_points + "&timespent=" +
								getLessonTime() + "&attempted=" + attempted_points + "&correct=" + my_score + "&score=" + total_score;
  }

	var obWidth = "925";
	var obHeight = "775";
	var winPrint = window.open('', 'pic', 'width=700,height=500,resizable=yes,scrollbars=yes,menubar=no');
  winPrint.document.open();
	winPrint.document.write("<html>\n<head>\n<title>" + winTitle + "</title>\n" +
									 "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />\n" +
									 "</head>\n" +
									 "<body>\n" +
									 "<p align='center' style='font: 90% Arial, Verdana, sans-serif;'>\n" +
									 "<br />" + qfLangPrintIns + "<br />\n" +
									 "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' " +
									 "codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' " +
									 "width='" + obWidth + "' height='" + obHeight + "' align='middle' id='" + flName + "'>\n" +
									 "<param name='allowScriptAccess' value='sameDomain' />\n" +
									 "<param name='movie' value='" + flName + ".swf' />\n" +
									 "<param name='quality' value='high' />\n" +
									 "<param name='bgcolor' value='#ffffff' />\n" +
									 "<param name=FlashVars value='" + getstring + "' />\n" +
									 "<embed src='" + flName + ".swf' name='" + flName + "' " +
									 "quality='high' bgcolor='#ffffff' " +
									 "width='" + obWidth + "' height='" + obHeight + "' align='middle' " +
									 "FlashVars='" + getstring + "' " +
									 "allowScriptAccess='sameDomain' type='application/x-shockwave-flash' " +
									 "pluginspage='http://www.macromedia.com/go/getflashplayer' />\n" +
									 "</object>\n" +
									 "</p>\n" +
									 "</body>\n</html>\n");

  winPrint.document.close();
  winPrint.focus();
	return true;
}


function getTrimmed(s) {
	var l = 0;
	var r = s.length -1;

	while (l < s.length && s[l] == ' ') {
		l++;
	}

	while (r > l && s[r] == ' ') {
		r -= 1;
	}

	return s.substring(l, r + 1);
}


function closebar() {
	document.getElementById("floatingscore").style.visibility = "hidden";
}

function courseScore() {
    document.getElementById("floatingscore").style.visibility = "visible";
    document.getElementById("my_score_span").innerHTML = qfLangFloat + "<br /><b>" + my_score + " / " + total_points;
}



//******************************* quiz groups *******************************************/

// with this version of q_functions,
// the only time scorecenter js calls this method is at the end of setStateForQuizGroup, and groupFinished[GN] is set to true
function toggleQuizGoup(GN, oneAtATime, summary, retry) {
	firstDisplayed[GN] = false; // reset to cover when called from scorecenter

	if (groupFinished[GN]) {
		document.getElementById('qgbackbottom' + GN).style.display = 'none';
		document.getElementById('qgforwardbottom' + GN).style.display = 'none';
		document.getElementById('quizgroupresults' + GN).style.display = 'none';
		showGroupResult(GN, true);
		if (oneAtATime) {
			var groupQpStateArray = eval("groupQpStateArray" + GN);
			for (var i = 0; i < groupQpStateArray.length; i++) {
				groupQpStateArray[i] = null;
			}
		}
		if (retry) {
			document.getElementById('quizgroupretry' + GN).style.display = 'inline';
		}
		return;
	}

	writeNextGroupQP(GN, oneAtATime, summary, retry);
}


function writeNextGroupQP(GN, oneAtATime, summary, retry) {
	if (currentQPNum[GN] > quizGroupSize[GN]) return; // safety

	var qpNumbersArray = eval("qpNumbersArray" + GN);
	var groupQpArray = eval("groupQpArray" + GN);
	var groupQpStateArray = eval("groupQpStateArray" + GN);


	if (oneAtATime) {
	  if (firstDisplayed[GN]) {
	  	var pos = qpNumbersArray[currentQPNum[GN] - 1];
	  	var qpId = getQpId(groupQpArray[pos]);
	    var qpType = eval("q_type" + qpId);

	    if (summary) {
				if (retry || !groupFinished[GN]) {
					check_qpq(qpId, eval("mc_items" + qpId), qpType, true, false, false);
				}
			}

	    saveQpValues(qpId, qpType, pos, groupQpStateArray);
	    currentQPNum[GN]++;
	  }

	  firstDisplayed[GN] = true;

		document.getElementById('qgbackbottom' + GN).style.display = (currentQPNum[GN] > 1) ? 'inline' : 'none';

		if (currentQPNum[GN] < (quizGroupSize[GN] + 1)) {
			var pos = qpNumbersArray[currentQPNum[GN] - 1];
			document.getElementById('qgforwardbottom' + GN).style.display = 'inline';
		  document.getElementById('quizgroupspace' + GN).innerHTML = "<br>" + groupQpArray[pos] + "<br>" +
																																			"<em># " + currentQPNum[GN] + " / " + quizGroupSize[GN] + "</em>";

			if ((groupQpStateArray[pos] != undefined) && (groupQpStateArray[pos] != null)) {
				var qpId = getQpId(groupQpArray[pos]);
				var qpType = eval("q_type" + qpId);
				restoreQpValues(qpId, qpType, pos, groupQpStateArray);
			}
		}
		else {
			document.getElementById('qgforwardbottom' + GN).style.display = 'none';
			if (retry || !groupFinished[GN]) {
				document.getElementById('quizgroupresults' + GN).style.display = 'inline';
				document.getElementById('quizgroupspace' + GN).innerHTML = '<br>' + qfGroupComplete;
			}
		}
	}
	else {
		showAllAtOnce(GN, false, retry);
	}
}


function quizGroupRetry(GN, oneAtATime, summary) {
	currentQPNum[GN] = 1;
	firstDisplayed[GN] = false;
	groupFinished[GN] = false;
	try {
		sessionStorage.setItem("groupFinished" + GN, "false");
	} catch(err) {}
		
	document.getElementById('quizgroupwrapper' + GN).scrollIntoView(true);

	if (oneAtATime) {
		var groupQpStateArray = eval("groupQpStateArray" + GN);
		for (var i = 0; i < groupQpStateArray.length; i++) {
			groupQpStateArray[i] = null;
		}
	}

	toggleQuizGoup(GN, oneAtATime, summary, true);
	document.getElementById('quizgroupfeedback' + GN).innerHTML = "";
	var retryelem = document.getElementById('quizgroupretry' + GN);
	if (retryelem != undefined) retryelem.style.display = 'none';
	if (oneAtATime) document.getElementById('quizgroupresults' + GN).style.display = 'none';
}


function showAllAtOnce(GN, showResults, retry) {
	var groupQpArray = eval("groupQpArray" + GN);
	var qpNumbersArray = eval("qpNumbersArray" + GN);

	document.getElementById('qgforwardbottom' + GN).style.display = 'none';

	var myText = "";
	for (var i = 0; i < quizGroupSize[GN]; i++) {
		myText += groupQpArray[qpNumbersArray[i]] + "<br />";
	}

	document.getElementById('quizgroupspace' + GN).innerHTML = myText;

	if (showResults) {
		var groupQpStateArray = eval("groupQpStateArray" + GN);

		for (var j = 0; j < quizGroupSize[GN]; j++) {
			var pos = qpNumbersArray[j];
			var qpId = getQpId(groupQpArray[pos]);
	    var qpType = eval("q_type" + qpId);

			restoreQpValues(qpId, qpType, pos, groupQpStateArray);
		}
	}
	else {
		if (retry || !groupFinished[GN]) {
			document.getElementById('quizgroupresults' + GN).style.display = 'inline';
		}
	}
}


function writePrevGroupQP(GN, summary, retry) {
	if (currentQPNum[GN] == 1) return;

	var qpNumbersArray = eval("qpNumbersArray" + GN);
	var groupQpArray = eval("groupQpArray" + GN);
	var groupQpStateArray = eval("groupQpStateArray" + GN);

	if (currentQPNum[GN] < quizGroupSize[GN] + 1) {
		var pos = qpNumbersArray[currentQPNum[GN] - 1];
		var qpId = getQpId(groupQpArray[pos]);
		var qpType = eval("q_type" + qpId);

		if (summary) {
			if (retry || !groupFinished[GN]) {
				check_qpq(qpId, eval("mc_items" + qpId), qpType, true, false, false);
			}
		}

		saveQpValues(qpId, qpType, pos, groupQpStateArray);
	}

	currentQPNum[GN]--;

	var pos = qpNumbersArray[currentQPNum[GN] - 1];
	var qpId = getQpId(groupQpArray[pos]);
	var qpType = eval("q_type" + qpId);

	document.getElementById('qgforwardbottom' + GN).style.display = 'inline';
	document.getElementById('quizgroupresults' + GN).style.display = 'none';
	document.getElementById('quizgroupspace' + GN).innerHTML = "<br>" + groupQpArray[pos] + "<br>" +
																																	"<em># " + currentQPNum[GN] + " / " + quizGroupSize[GN] + "</em>";

	restoreQpValues(qpId, qpType, pos, groupQpStateArray);

	document.getElementById('qgbackbottom' + GN).style.display = (currentQPNum[GN] > 1) ? 'inline' : 'none';
}


// called only from Check Answer button
function checkQuizGroup(GN, oneAtATime, summary, retry) {
	document.getElementById('qgbackbottom' + GN).style.display = 'none';
	document.getElementById('qgforwardbottom' + GN).style.display = 'none';
	document.getElementById('quizgroupresults' + GN).style.display = 'none';

	if (!retry && groupFinished[GN]) {
		return;
	}

	groupFinished[GN] = true;
	try {
		sessionStorage.setItem("groupFinished" + GN, "true");
	} catch(err) {}

	if (oneAtATime) {
		if (!summary) {
			showAllAtOnce(GN, true, retry);
			runCheckQPQ(GN);
		}
	}
  else {
    runCheckQPQ(GN);
  }

  var groupTotal = showGroupResult(GN, summary);

  if (retry)
		document.getElementById('quizgroupretry' + GN).style.display = 'inline';

	document.getElementById('quizgroupfeedback' + GN).scrollIntoView(true);

	if (groupTotal > 0) // the score window will not be present if there are no points in the lesson
		courseScore();
}


function runCheckQPQ(GN) {
	var qpNumbersArray = eval("qpNumbersArray" + GN);
	var groupQpArray = eval("groupQpArray" + GN);

	var size = quizGroupSize[GN];

	for (var i = 0; i < size; i++) {
		var pos = qpNumbersArray[i];
		var qpId = getQpId(groupQpArray[pos]);
		var qpType = eval("q_type" + qpId);
		var mcItems = eval("mc_items" + qpId);

		check_qpq(qpId, mcItems, qpType, true, true, false);
	}
}


function showGroupResult(GN, summary) {

  var qpNumbersArray = eval("qpNumbersArray" + GN);
  var groupQpArray = eval("groupQpArray" + GN);
  var size = quizGroupSize[GN];

  var groupTotalPoints = 0;
  var groupScore = 0;

  for (var i = 0; i < size; i++) {
		var pos = qpNumbersArray[i];
		var qpId = getQpId(groupQpArray[pos]);
		groupTotalPoints += q_value[qpId];

		//var qData_array = groupQData[qpId].split("*#*");
		//groupScore += parseFloat(qData_array[0]);

		groupScore += this_question_score[qpId];
	}

	var scoreResults = '<p><strong>' + qfGroupScore + '&nbsp;&nbsp;' + groupScore + ' / ' + groupTotalPoints + '</strong></p>';

	if (summary) {
		document.getElementById('quizgroupspace' + GN).innerHTML = "";
	}

	document.getElementById('quizgroupfeedback' + GN).innerHTML = scoreResults;

	return groupTotalPoints;
}


/*
 *  MULTIPLE_CHOICE = 1;
 *  TRUE_FALSE = 2;
 *  MULTIPLE_ANSWER = 3;
 *  SHORT_ANSWER = 4;
 *  MATCHING = 5;
 *  ORDERING = 6;
 *  (activities are #7)
 *  ESSAY = 8;
 *  SENTENCE COMPLETION = 9;
 *  MULTIPLE BLANKS = 10;
 *  FEEDBACK QUESTION = 11;
 */

function saveQpValues(qpId, qpType, pos, groupQpStateArray) {

	var myQP = document.getElementsByName("q" + qpId);

	switch(qpType) {
		case 1:
		case 2:
		case 11:
			for (var x = 0; x < myQP.length; x++) {
				if (myQP[x].checked) {
					groupQpStateArray[pos] = x;
				}
			}
			break;

		case 3:
			var c_value;
			for (var i = 0; i < myQP.length; i++){
				if (myQP[i].checked) {
					if (c_value) {
						c_value += "," + i.toString();
					}
					else {
						c_value = i.toString();
					}
				}
			}

			if (c_value != "") {
				groupQpStateArray[pos] = c_value;
			}
			break;

		case 4:
		case 8:
			groupQpStateArray[pos] = myQP[0].value;
			break;

		case 5:
		case 6:
		case 9:
			var mc_items = eval("mc_items" + qpId);
			var mySelect = new Array();

			for (var i = 0; i < mc_items; i++) {
				var option_num = i + 1;
				myQP = document.getElementById("q" + qpId + "_" + option_num);
				mySelect[i] = myQP.options.selectedIndex;
			}
			groupQpStateArray[pos] = mySelect;
			break;

		case 10:
			var mc_items = eval("mc_items" + qpId);
			var mySelect = new Array();

			for (var i = 0; i < mc_items; i++) {
				var option_num = i + 1;
				myQP = document.getElementById("q" + qpId + "_" + option_num);
				mySelect[i] = myQP.value;
			}
			groupQpStateArray[pos] = mySelect;
			break;

		default:
			break;
	}
}


function restoreQpValues(qpId, qpType, pos, groupQpStateArray) {

	//var myQP = eval("document.f" + qpId + ".q" + qpId);
	var myQP = document.getElementsByName("q" + qpId);

	switch(qpType) {
		case 1:
		case 2:
		case 11:
			if (groupQpStateArray[pos] != undefined) {
				myQP[groupQpStateArray[pos]].checked = true
			}
			break;

		case 3:
			if (groupQpStateArray[pos] != undefined) {
				var myString = groupQpStateArray[pos].toString();
				var restoreArray = myString.split(",");
				for (var i = 0; i < restoreArray.length; i++) {
					var myItem = restoreArray[i];
					myQP[restoreArray[i]].checked = true;
				}
			}
			break;

		case 4:
		case 8:
			myQP[0].value = groupQpStateArray[pos];
			break;

		case 5:
		case 6:
		case 9:
			var mc_items = eval("mc_items" + qpId);
			var myString = groupQpStateArray[pos].toString();
			var restoreArray = myString.split(",");

			for (var i = 0; i < mc_items; i++) {
				var option_num = i + 1;
				myQP = document.getElementById("q" + qpId + "_" + option_num);
				myQP.options.selectedIndex = restoreArray[i];
			}
			break;

		case 10:
			var restoreArray = groupQpStateArray[pos];

			for (var i = 0; i < restoreArray.length; i++) {
				var option_num = i + 1;
				myQP = document.getElementById("q" + qpId + "_" + option_num);
				myQP.value = restoreArray[i];
			}
			break;


		default:
			break;
	}
}


function getQpId(txt) {
	var ind = txt.indexOf('<div id="quizpopper', 0);
	if (ind != -1) {
		ind += 19;
		var ind2 = txt.indexOf('"', ind);
		var num = txt.substring(ind, ind2);
		return num;
	}
	else
		return null;
}



//********** Below are the Activity functions ***********//

function newWin(myFile, myID, winSpecs) {
	var act_id = myID.substring(3);

	if (q_done_a[act_id] && !show_restart_a[act_id]) {
		alert("This activity has been completed.\nOnly one access is allowed.");
	}
	else {
		var activityWin = window.open(myFile, myID, winSpecs);
	}
}


function answersWin(myFile, myID, winSpecs) {
	var answersWindow = window.open(myFile, myID, winSpecs);
}


function activity_win_close() {
	window.opener = top;
	window.close();
}


// July 23, 2013
// Below is from activityApplets_inline.js
// there is no need to have a separate js file

/*
 * other = 0 as a safety
 * 1 is not used
 *
 * FLASH_CARD_ACTIVITY = 2;
 * SEEK_A_WORD_ACTIVITY = 3;
 * DRAG_N_DROP_ACTIVITY = 4;
 * ORDERING_ACTIVITY = 5;
 * CROSSWORD_ACTIVITY = 6;
 * LABELING_ACTIVITY = 7;
 * SORTING_ACTIVITY = 8;
 * HOT_SPOT_ACTIVITY = 9;
 */


// Chris' debugging method is not needed, but keeping empty method to avoid errors
function readit() {}


// called from lesson page
function cookit() {

	// 0 is id:act_type (followed by the word "score")
	// 1 is percent
	// 2 is not used
	// 3 is drag/fill-in attempts, currently not used
	//alert("0 = " + cookit.arguments[0] + "\n1 = " + cookit.arguments[1] + "\n2 = " + cookit.arguments[2] + "\n3 = " + cookit.arguments[3]);

	var arg1 = arguments[0];

	if (arg1.length < 6) {
		alert("Error parsing ID number.\nThis activity can not be scored.");
		return;
	}

	var act_id = null;
	var act_type = null;

	var v = arg1.substring(0, arg1.length - 5);
	var c = v.indexOf(":");

	if (c != -1) {
		act_id = v.substring(0, c);
		act_type = v.substring(c + 1);
	}
	else {
		alert("Error parsing cookit arguments.\nThis activity can not be scored.");
		return;
	}

	// bail if the activity has no points,
	// or if only one attempt is allowed
	if (!scoreQa[act_id] || (q_done_a[act_id] && !show_restart_a[act_id])) {
		return;
	}

	// get the activity's point value
	var act_value = eval("a_value" + act_id);

	// if first attempt, set attempted_points, q_done_a, course info
	if (!q_done_a[act_id]) {
		attempted_q++;
		attempted_points += act_value;
		q_done_a[act_id] = true;

		try {
			sessionStorage.attempted_q = attempted_q.toString();
			sessionStorage.attempted_points = attempted_points.toString();
			sessionStorage.setItem("q_done_a" + act_id, "true");
		} catch(err) {}
	}
	else { // remove previous score from total score
		my_score -= score_a[act_id];
	}

	// get current score
	score_a[act_id] = 0;

	var act_percent = arguments[1];

	// set to one decimal place
	if (act_percent > 0) {
  	score_a[act_id] = Math.round(((act_value * act_percent) / 100) * 10) / 10;
  }

	// add current score to total score
	my_score += score_a[act_id];

	// set to one decimal place
  if (my_score > 0) {
  	my_score = Math.round(my_score * 10) / 10;
  }

	try {
		sessionStorage.setItem("score_a" + act_id, score_a[act_id].toString());
		sessionStorage.my_score = my_score.toString();
	} catch(err) {}

	// update floating score window
	var scoreSpan = document.getElementById("my_score_span");
	if (scoreSpan) {
		document.getElementById("floatingscore").style.visibility = "visible";
		scoreSpan.innerHTML = qfLangFloat + "<br /><strong>" + my_score + " / " + total_points + "</strong>";
	}

	var mobileScoreSpan = document.getElementById("my_mobile_score_span");
	if (mobileScoreSpan) {
		mobileScoreSpan.innerHTML = qfLangFloat + " " + my_score + "/" + total_points;
	}

	//SCORM data
	if (scorm) {
		var q_type = 7;
		var student_answer = "n/a";
		var correct = (act_percent == "100") ? "yes" : "no";
		sendScorm(act_id, q_type, act_type, student_answer, correct, act_percent);
	}
}
