// Mock ML recommendation function
const recommendContent = (userId, contentData) => {
  // Replace with actual ML logic
  const recommendations = contentData.filter((content) => content.relevance === userId);
  return recommendations;
};

module.exports = { recommendContent };
