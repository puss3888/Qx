/*
bei wa er ge jie suo ke cheng. xu deng lu
https:\/\/cms\.beva\.com\/api\/v1\/order\/checkCourse url script-response-body https://raw.githubusercontent.com/puss3888/Qx/main/bweg_course.js
cms.beva.com
*/




var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);

obj.errorCode = 0;

modifiedBody = JSON.stringify(obj); 
$done(modifiedBody);
