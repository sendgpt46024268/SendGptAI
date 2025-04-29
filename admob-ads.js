// AdMob Initialization (Replace with your AdMob IDs)
function initializeAdMob() {
    displayBannerAd("ca-app-pub-5911793928099175/1694941180");
    displayInterstitialAd("ca-app-pub-5911793928099175/2212249260");
    displayRewardedAd("ca-app-pub-5911793928099175/6104959485");
}

// Display Banner Ad
function displayBannerAd(adUnitId) {
    console.log("Displaying Banner Ad with ID: " + adUnitId);
    // AdMob Banner Ad functionality here (use GPT for integration)
}

// Display Interstitial Ad
function displayInterstitialAd(adUnitId) {
    console.log("Displaying Interstitial Ad with ID: " + adUnitId);
    // Implement AdMob Interstitial Ad functionality here
}

// Display Rewarded Ad
function displayRewardedAd(adUnitId) {
    console.log("Displaying Rewarded Ad with ID: " + adUnitId);
    // Implement AdMob Rewarded Ad functionality here
}

// Initialize AdMob Ads when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    initializeAdMob();
});
