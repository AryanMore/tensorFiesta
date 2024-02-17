
const childProcess = require('child_process');

const fs = require('fs');

const stringData = ```json
{
    "title": {
        "rating": 8,
        "suggestion": "The title is clear and concise, but it could be more descriptive. For example, it could include the product's benefits or features."
    },
    "description": {
        "rating": 7,
        "suggestion": "The description is informative and provides a good overview of the product. However, it could be more engaging and make better use of storytelling techniques."
    },
    "image": {
        "rating": 9,
        "suggestion": "The image is high-quality and visually appealing. It does a good job of showcasing the product and its features."
    },
    "featuresAndBenefits": {
        "rating": 8,
        "suggestion": "The features and benefits are listed in a clear and concise way. However, they could be more descriptive and provide more detail about the product."
    },
    "additionalInformation": {
        "rating": 7,
        "suggestion": "The additional information is accurate and provides a good overview of the product. However, it could be more engaging and make better use of storytelling techniques."
    },
    "overallScore": {
        "rating": 8,
        "suggestion": "The overall score is a good reflection of the product's quality and value. However, it could be more specific and provide more detail about the product's strengths and weaknesses."
    }
}
```;

try {
  // Remove potential leading and trailing backticks
  const cleanedString = stringData.replace(/^``json\n/, '').replace(/\n``$/, '');

  // Parse the cleaned JSON string
  const dataObject = JSON.parse(cleanedString);

  // Write the parsed object to a JSON file
  fs.writeFile('cleaned_data.json', JSON.stringify(dataObject, null, 2), (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('JSON file created successfully!');
    }
  });
} catch (error) {
  console.error('Error parsing JSON:', error);
}
