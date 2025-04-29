// Function to submit question and get an AI-generated response
function submitQuestion() {
    const userQuestion = document.getElementById('user-question').value;
  
    if (userQuestion.trim() !== "") {
      // Simulate AI response (you can replace this with actual AI functionality)
      const aiResponse = "This is the AI-generated answer for your question: " + userQuestion;
      document.getElementById('ai-answer').innerHTML = aiResponse;
    } else {
      alert("Please enter a valid question.");
    }
  }
  
  // Show rewarded ad
  function showRewardedAd() {
    console.log("Rewarded ad played.");
    // Simulate showing an ad before redirecting
    document.getElementById('rewarded-ad-container').style.display = 'none';
    alert('Thanks for watching the ad! Now you can continue.');
    window.location.href = "questionPage.html"; // Redirect to the AI question page
  }
  