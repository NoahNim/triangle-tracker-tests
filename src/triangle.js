// $(document).ready(function() {
//   $("form#length").submit(function() {
//     event.preventDefault();
//     var input1 = parseInt($("input#length1").val());
//     var input2 = parseInt($("input#length2").val());
//     var input3 = parseInt($("input#length3").val());
//
//     var result1 = "equilateral";
//     var result2 = "isoceles";
//     var result3 = "scalene";
//     var result4 = "not a triangle";
//
//     if ((input1+input2)>input3 &&
//         (input2+input3)>input1 &&
//         (input1+input3)>input2) {
//         if (input1 === input2 && input1 === input3) {
//           $("#answer").text(result1);
//         } else if (input1 === input2 ||
//                   input2 === input3 ||
//                   input1 === input3) {
//           $("#answer").text(result2);
//         } else {
//           $("#answer").text(result3);
//       }
//
//       $("#negative_result").hide();
//       $("#result").show();
//
//     } else {
//       $("#negative_answer").text(result4);
//       $("#result").hide();
//       $("#negative_result").show();
//       }
//
//   });
// });
