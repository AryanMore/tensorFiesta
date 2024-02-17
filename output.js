"use strict";

var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var childProcess = require('child_process');
var fs = require('fs');
var stringData = ""(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["json\n{\n    \"title\": {\n        \"rating\": 8,\n        \"suggestion\": \"The title is clear and concise, but it could be more descriptive. For example, it could include the product's benefits or features.\"\n    },\n    \"description\": {\n        \"rating\": 7,\n        \"suggestion\": \"The description is informative and provides a good overview of the product. However, it could be more engaging and make better use of storytelling techniques.\"\n    },\n    \"image\": {\n        \"rating\": 9,\n        \"suggestion\": \"The image is high-quality and visually appealing. It does a good job of showcasing the product and its features.\"\n    },\n    \"featuresAndBenefits\": {\n        \"rating\": 8,\n        \"suggestion\": \"The features and benefits are listed in a clear and concise way. However, they could be more descriptive and provide more detail about the product.\"\n    },\n    \"additionalInformation\": {\n        \"rating\": 7,\n        \"suggestion\": \"The additional information is accurate and provides a good overview of the product. However, it could be more engaging and make better use of storytelling techniques.\"\n    },\n    \"overallScore\": {\n        \"rating\": 8,\n        \"suggestion\": \"The overall score is a good reflection of the product's quality and value. However, it could be more specific and provide more detail about the product's strengths and weaknesses.\"\n    }\n}\n"])))(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
try {
  // Remove potential leading and trailing backticks
  var cleanedString = stringData.replace(/^``json\n/, '').replace(/\n``$/, '');

  // Parse the cleaned JSON string
  var dataObject = JSON.parse(cleanedString);

  // Write the parsed object to a JSON file
  fs.writeFile('cleaned_data.json', JSON.stringify(dataObject, null, 2), function (err) {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('JSON file created successfully!');
    }
  });
} catch (error) {
  console.error('Error parsing JSON:', error);
}
